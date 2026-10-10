#!/usr/bin/env python3
"""Download and verify every map asset referenced by the saved Surfd client."""
import concurrent.futures
import gzip
import hashlib
import json
import os
import pty
import re
import subprocess
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent
WEB = ROOT / 'local-surf'
PARTS = WEB / '.download-parts'
PARTS.mkdir(parents=True, exist_ok=True)
CHUNK = 262144
WORKERS = 12
started = time.time()
progress = {'startedAt': started, 'stage': 'manifests', 'completedFiles': 0, 'totalFiles': 0, 'downloadedBytes': 0, 'errors': [], 'complete': False}


def save_progress():
    temp = WEB / 'download-all-progress.json.tmp'
    temp.write_text(json.dumps({**progress, 'updatedAt': time.time()}, indent=2) + '\n')
    temp.replace(WEB / 'download-all-progress.json')


def decode(data):
    return gzip.decompress(data) if data[:2] == b'\x1f\x8b' else data


def validate(job, data):
    kind = job['kind']
    if kind == 'pack':
        assert len(decode(data)) == job['size'], 'Incorrect visual pack size'
    elif kind in ('manifest', 'collision', 'replay'):
        obj = json.loads(decode(data))
        if kind == 'manifest':
            assert obj['format'] == 1 and obj['slug'] == job['slug'] and obj['packs']
        elif kind == 'collision':
            assert obj['id'] == job['id'] and obj['version'] == job['version']
            assert obj['brushes'] and any(z['kind'] == 'start' for z in obj['zones'])
            assert any(z['kind'] == 'finish' for z in obj['zones'])
        else:
            assert obj['format'] == 1 and obj['mapId'] == job['id'] and obj['mapVersion'] == job['version']
            assert obj['commands']
    elif kind == 'preview':
        assert data[:3] == b'\xff\xd8\xff', 'Invalid JPEG preview'
    return hashlib.sha256(data).hexdigest()


def fetch_part(path, start, end):
    token = hashlib.sha256(path.encode()).hexdigest()[:24] + f'.{start}'
    file = PARTS / token
    headers = PARTS / (token + '.headers')
    if not file.exists() or not headers.exists():
        temp = file.with_suffix(file.suffix + '.tmp')
        subprocess.run([
            'curl', '-fLsS', '--http1.1', '--retry', '4', '--retry-all-errors',
            '--connect-timeout', '15', '--max-time', '60', '--range', f'{start}-{end}',
            '-D', str(headers), 'https://surfd.net' + path, '-o', str(temp),
        ], check=True)
        temp.replace(file)
    ranges = re.findall(r'content-range:\s*bytes (\d+)-(\d+)/(\d+)', headers.read_text(), re.I)
    if ranges:
        actual_start, actual_end, total = map(int, ranges[-1])
        if actual_start != start or actual_end != min(end, total - 1) or file.stat().st_size != actual_end - start + 1:
            file.unlink(missing_ok=True)
            headers.unlink(missing_ok=True)
            raise RuntimeError(f'Invalid byte range for {path}')
    else:
        if start != 0:
            raise RuntimeError(f'Server did not support byte ranges for {path}')
        total = file.stat().st_size
        if total < 1:
            raise RuntimeError(f'Empty response for {path}')
    return file, total


def completed(job, destination, digest, downloaded=0):
    job['sha256'] = digest
    job['bytes'] = destination.stat().st_size
    progress['completedFiles'] += 1
    progress['downloadedBytes'] += downloaded
    save_progress()
    print(f'{progress["completedFiles"]}/{progress["totalFiles"]} {job["path"]} ({job["bytes"]:,} bytes)', flush=True)


def batch_parts(tasks, on_result):
    network = []
    for job, start, end in tasks:
        path = job['path']
        token = hashlib.sha256(path.encode()).hexdigest()[:24] + f'.{start}'
        file = PARTS / token
        headers = PARTS / (token + '.headers')
        if file.is_file() and headers.is_file():
            try:
                ranges = re.findall(r'content-range:\s*bytes (\d+)-(\d+)/(\d+)', headers.read_text(), re.I)
                if ranges:
                    a, b, total = map(int, ranges[-1])
                    assert a == start and b == min(end, total - 1) and file.stat().st_size == b - a + 1
                else:
                    assert start == 0 and file.stat().st_size > 0
                    total = file.stat().st_size
                on_result(job, start, file, total)
                continue
            except (AssertionError, ValueError):
                file.unlink(missing_ok=True)
                headers.unlink(missing_ok=True)
        network.append((job, start, end, file, headers))
    if not network:
        return
    config = PARTS / 'curl-batch.conf'
    lines = []
    for index, (job, start, end, file, headers) in enumerate(network):
        if index:
            lines.append('next')
        lines.extend([
            'silent', 'show-error', 'fail', 'http1.1', 'retry = 4', 'retry-all-errors',
            'connect-timeout = 20', 'max-time = 90',
            'url = ' + json.dumps('https://surfd.net' + job['path']),
            'range = ' + json.dumps(f'{start}-{end}'),
            'output = ' + json.dumps(str(file)),
            'dump-header = ' + json.dumps(str(headers)),
            'write-out = ' + json.dumps(str(index) + ' %{http_code}\n'),
        ])
    config.write_text('\n'.join(lines) + '\n')
    # A PTY makes curl flush its per-transfer write-out lines immediately.
    master, slave = pty.openpty()
    process = subprocess.Popen(['curl', '--no-buffer', '--parallel', '--parallel-max', '32', '--config', str(config)], stdout=slave)
    os.close(slave)
    output = os.fdopen(master, 'r', errors='replace')
    seen = set()
    successful = set()
    failures = {}
    def output_lines():
        try:
            yield from output
        except OSError as error:
            if error.errno != 5:
                raise
        finally:
            output.close()
    for line in output_lines():
        fields = line.strip().split()
        if len(fields) != 2 or not fields[0].isdigit():
            continue
        index = int(fields[0])
        if index >= len(network):
            continue
        seen.add(index)
        if index in successful:
            continue
        job, start, end, file, headers = network[index]
        if fields[1] not in ('200', '206'):
            # curl can emit write-out for failed attempts before retrying.
            failures[index] = f'HTTP {fields[1]}'
            continue
        try:
            ranges = re.findall(r'content-range:\s*bytes (\d+)-(\d+)/(\d+)', headers.read_text(), re.I)
            if ranges:
                a, b, total = map(int, ranges[-1])
                assert a == start and b == min(end, total - 1) and file.stat().st_size == b - a + 1
            else:
                assert start == 0 and file.stat().st_size > 0
                total = file.stat().st_size
            on_result(job, start, file, total)
            successful.add(index)
            failures.pop(index, None)
        except Exception as error:
            failures[index] = str(error)
    code = process.wait()
    for index, (job, start, end, file, headers) in enumerate(network):
        if index not in successful:
            # Wait until curl has stopped using these files before removing them.
            file.unlink(missing_ok=True)
            headers.unlink(missing_ok=True)
            error = failures.get(index, f'Incomplete transfer (curl exit {code})')
            progress['errors'].append({'path': job['path'], 'offset': start, 'error': error})
            save_progress()
            print(f'ERROR {job["path"]} at {start}: {error}', flush=True)
    if len(seen) != len(network):
        raise RuntimeError(f'Incomplete curl batch: {len(seen)}/{len(network)} transfers, exit {code}')
    if progress['errors']:
        raise RuntimeError('Some downloads failed; rerun to resume from saved chunks')


def cache_jobs(jobs, stage):
    progress.update(stage=stage, completedFiles=0, totalFiles=len(jobs))
    save_progress()
    missing = []
    for job in jobs:
        destination = WEB / job['path'].lstrip('/')
        if destination.is_file():
            try:
                digest = validate(job, destination.read_bytes())
            except (AssertionError, ValueError, OSError, KeyError):
                missing.append(job)
            else:
                completed(job, destination, digest)
        else:
            missing.append(job)
    pieces = {}
    totals = {}
    expected = {}
    remaining = []

    def accept(job, offset, file, total):
        path = job['path']
        pieces.setdefault(path, {})[offset] = file
        if offset == 0:
            totals[path] = total
            expected[path] = (total + CHUNK - 1) // CHUNK if file.stat().st_size < total else 1
            if file.stat().st_size < total:
                remaining.extend((job, n, min(total - 1, n + CHUNK - 1)) for n in range(CHUNK, total, CHUNK))
        if len(pieces[path]) == expected[path]:
            data = b''.join(pieces[path][n].read_bytes() for n in sorted(pieces[path]))
            assert len(data) == totals[path], 'Incomplete file'
            digest = validate(job, data)
            destination = WEB / path.lstrip('/')
            destination.parent.mkdir(parents=True, exist_ok=True)
            temp = destination.with_suffix(destination.suffix + '.complete')
            temp.write_bytes(data)
            temp.replace(destination)
            completed(job, destination, digest, len(data))
            for fragment in pieces.pop(path).values():
                fragment.unlink(missing_ok=True)
                fragment.with_name(fragment.name + '.headers').unlink(missing_ok=True)

    batch_parts([(job, 0, CHUNK - 1) for job in missing], accept)
    batch_parts(remaining, accept)
    if progress['completedFiles'] != len(jobs):
        raise RuntimeError('Some files are incomplete')


if __name__ == '__main__':
    try:
        maps = json.loads((ROOT / 'analysis/map-catalog.json').read_text())
        manifest_paths = json.loads((ROOT / 'analysis/visual-manifests.json').read_text())
        manifest_jobs = [{'path': manifest_paths[m['slug']], 'kind': 'manifest', 'slug': m['slug']} for m in maps]
        cache_jobs(manifest_jobs, 'manifests')
        jobs_by_path = {}
        map_files = {}
        for m in maps:
            slug = m['slug']
            manifest = json.loads(decode((WEB / manifest_paths[slug].lstrip('/')).read_bytes()))
            items = [
                {'path': f'/packed/{m["geometrySha256"]}.json.gz', 'kind': 'collision', 'id': m['id'], 'version': m['version']},
                {'path': f'/replays/{slug}-complete.json', 'kind': 'replay', 'id': m['id'], 'version': m['version']},
                {'path': f'/previews/{slug}.jpg', 'kind': 'preview'},
                *[{'path': p['url'], 'kind': 'pack', 'size': p['byteLength'], 'variant': p.get('variant')} for p in manifest['packs']],
            ]
            map_files[slug] = [manifest_paths[slug], *[item['path'] for item in items]]
            for job in items:
                old = jobs_by_path.get(job['path'])
                if old and old['kind'] == 'pack':
                    assert old['size'] == job['size']
                jobs_by_path[job['path']] = job
        jobs = list(jobs_by_path.values())
        print(f'20 maps; {sum(job.get("size", 0) for job in jobs)/1e6:.1f} MB unpacked visual packs; {len(jobs)} unique map files.', flush=True)
        cache_jobs(jobs, 'map-assets')
        records = {job['path']: {'bytes': job['bytes'], 'sha256': job['sha256'], 'kind': job['kind']} for job in [*manifest_jobs, *jobs]}
        report = {'complete': True, 'mapCount': len(maps), 'fileCount': len(records), 'cachedBytes': sum(r['bytes'] for r in records.values()), 'finishedAt': time.time(), 'elapsedSeconds': time.time() - started, 'maps': map_files, 'files': records}
        (WEB / 'all-maps-manifest.json').write_text(json.dumps(report, indent=2) + '\n')
        progress.update(complete=True, stage='complete', mapCount=len(maps), cachedBytes=report['cachedBytes'])
        save_progress()
        print(f'COMPLETE: {len(maps)} maps, {len(records)} verified files, {report["cachedBytes"]/1e6:.1f} MB cached.', flush=True)
    except Exception as error:
        progress['fatalError'] = str(error)
        save_progress()
        raise
