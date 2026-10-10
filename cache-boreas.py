#!/usr/bin/env python3
"""Cache all Boreas visual packs, using small range requests for slow connections."""
import concurrent.futures
import gzip
import json
import importlib.util
import re
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
WEB = ROOT / 'local-surf'
spec = importlib.util.spec_from_file_location('local_surf_server', ROOT / 'run-local.py')
server = importlib.util.module_from_spec(spec)
spec.loader.exec_module(server)
server.prepare()
sources = json.loads((ROOT / 'analysis/manifest.json').read_text())['files']
for source in sources:
    if source['file'].startswith('boreas-'):
        server.download(source['url'].removeprefix('https://surfd.net'))
visual_path = next(source['url'].removeprefix('https://surfd.net') for source in sources if source['file'] == 'boreas-visual-manifest.gz')
manifest_bytes = (WEB / visual_path.lstrip('/')).read_bytes()
manifest = json.loads(gzip.decompress(manifest_bytes) if manifest_bytes[:2] == b'\x1f\x8b' else manifest_bytes)
CHUNK = 262144


def part(path, start, end, directory):
    key = path.rsplit('/', 1)[-1] + f'.{start}'
    file = directory / key
    headers = directory / (key + '.headers')
    subprocess.run([
        'curl', '-fLsS', '--http1.1', '--retry', '3', '--retry-all-errors',
        '--connect-timeout', '15', '--max-time', '60', '--range', f'{start}-{end}',
        '-D', str(headers), 'https://surfd.net' + path, '-o', str(file),
    ], check=True)
    ranges = re.findall(r'content-range:\s*bytes (\d+)-(\d+)/(\d+)', headers.read_text(), re.I)
    if not ranges:
        raise RuntimeError('Server did not provide the requested byte range')
    actual_start, actual_end, total = map(int, ranges[-1])
    if actual_start != start or actual_end != min(end, total - 1) or file.stat().st_size != actual_end - start + 1:
        raise RuntimeError('Invalid download range')
    return file, total


if __name__ == '__main__':
    pending = []
    for pack in manifest['packs']:
        dest = WEB / pack['url'].lstrip('/')
        if dest.is_file():
            data = dest.read_bytes()
            assert len(gzip.decompress(data) if data[:2] == b'\x1f\x8b' else data) == pack['byteLength']
        else:
            pending.append(pack)
    print(f'{len(manifest["packs"]) - len(pending)}/14 packs already cached; downloading {len(pending)}.', flush=True)
    with tempfile.TemporaryDirectory(prefix='surfd-packs-') as temp, concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        directory = Path(temp)
        first = {pool.submit(part, p['url'], 0, CHUNK - 1, directory): p for p in pending}
        jobs = []
        pieces = {}
        for future in concurrent.futures.as_completed(first):
            pack = first[future]
            file, total = future.result()
            pieces[pack['url']] = {0: file}
            for start in range(CHUNK, total, CHUNK):
                jobs.append((pack, start, pool.submit(part, pack['url'], start, min(total - 1, start + CHUNK - 1), directory)))
        for pack, start, future in jobs:
            file, total = future.result()
            pieces[pack['url']][start] = file
        for pack in pending:
            parts = pieces[pack['url']]
            data = b''.join(parts[start].read_bytes() for start in sorted(parts))
            assert len(gzip.decompress(data) if data[:2] == b'\x1f\x8b' else data) == pack['byteLength']
            dest = WEB / pack['url'].lstrip('/')
            dest.parent.mkdir(parents=True, exist_ok=True)
            staging = dest.with_suffix(dest.suffix + '.ready')
            staging.write_bytes(data)
            staging.replace(dest)
            print(f'Cached {pack["url"]} ({len(data):,} bytes)', flush=True)
    print('All 14 Boreas packs verified.', flush=True)
