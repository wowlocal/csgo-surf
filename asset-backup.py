#!/usr/bin/env python3
"""Pack verified game assets for Git LFS, or restore them without upstream access."""
import argparse
import concurrent.futures
import gzip
import hashlib
import json
import shutil
import tarfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BACKUP = ROOT / 'assets'
INDEX = BACKUP / 'manifest.json'


def digest(path):
    value = hashlib.sha256()
    with path.open('rb') as source:
        for block in iter(lambda: source.read(1048576), b''):
            value.update(block)
    return value.hexdigest()


def valid(path, entry):
    return path.is_file() and path.stat().st_size == entry['bytes'] and digest(path) == entry['sha256']


def relative_path(value):
    path = Path(value)
    if path.is_absolute() or '..' in path.parts or '\\' in value:
        raise ValueError(f'Unsafe asset path: {value}')
    return path


def cache_root(game):
    return ROOT / ('bunnyhop/cache' if game == 'bunnyhop' else 'local-surf')


def records(game):
    if game == 'bunnyhop':
        report = json.loads((ROOT / 'bunnyhop/downloaded-assets.json').read_text())
        if not report.get('complete') or report['mapCount'] != report['catalogueMapCount'] + 1:
            raise ValueError('Complete Bunnyhop download, including the tutorial, is required')
        return {f['local']: {'bytes': f['bytes'], 'sha256': f['sha256']} for f in report['files'].values() if not f['client']}
    report = json.loads((ROOT / 'analysis/downloaded-maps-manifest.json').read_text())
    if not report.get('complete'):
        raise ValueError('Complete Surfd download is required')
    result = {name.lstrip('/'): {'bytes': f['bytes'], 'sha256': f['sha256']} for name, f in report['files'].items()}
    # Include cached UI dependencies, such as the stylesheet, needed on a fresh clone.
    for directory in ('assets', 'brand', 'licenses', 'previews', 'replays'):
        for path in (cache_root(game) / directory).rglob('*'):
            if path.is_file() and not path.name.endswith(('.part', '.log', '.pid', '.conf')):
                result[path.relative_to(cache_root(game)).as_posix()] = {'bytes': path.stat().st_size, 'sha256': digest(path)}
    return result


def pack_one(game, name, entries, previous):
    path = BACKUP / name
    old = previous.get(name)
    if old and old['files'] == entries and valid(path, old):
        print(f'Reusing {name}', flush=True)
        return old
    path.parent.mkdir(parents=True, exist_ok=True)
    temp = path.with_name(path.name + '.part')
    source_root = cache_root(game)
    with temp.open('wb') as output, gzip.GzipFile(filename='', mode='wb', fileobj=output, mtime=0, compresslevel=6) as compressed:
        if name.endswith('.bsp.gz'):
            local, entry = next(iter(entries.items()))
            source = source_root / relative_path(local)
            if not valid(source, entry):
                raise ValueError(f'Invalid cached asset: {source}')
            with source.open('rb') as data:
                shutil.copyfileobj(data, compressed)
        else:
            with tarfile.open(fileobj=compressed, mode='w|', format=tarfile.USTAR_FORMAT) as archive:
                for local, entry in sorted(entries.items()):
                    source = source_root / relative_path(local)
                    if not valid(source, entry):
                        raise ValueError(f'Invalid cached asset: {source}')
                    member = tarfile.TarInfo(local)
                    member.size = entry['bytes']
                    member.mode = 0o644
                    with source.open('rb') as data:
                        archive.addfile(member, data)
    temp.replace(path)
    record = {'game': game, 'bytes': path.stat().st_size, 'sha256': digest(path), 'files': entries}
    print(f'Packed {name}: {record["bytes"] / 1e6:.1f} MB', flush=True)
    return record


def pack(games, workers):
    previous = json.loads(INDEX.read_text()).get('archives', {}) if INDEX.is_file() else {}
    result = {name: entry for name, entry in previous.items() if entry['game'] not in games}
    tasks = []
    for game in games:
        entries = records(game)
        if game == 'bunnyhop':
            maps = {name: entry for name, entry in entries.items() if name.endswith('.bsp')}
            for name, entry in sorted(maps.items()):
                tasks.append((game, f'bunnyhop/maps/{name}.gz', {name: entry}))
            entries = {name: entry for name, entry in entries.items() if name not in maps}
        tasks.append((game, f'{game}/resources.tar.gz', entries))
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        jobs = {executor.submit(pack_one, game, name, entries, previous): name for game, name, entries in tasks}
        for future in concurrent.futures.as_completed(jobs):
            result[jobs[future]] = future.result()
    report = {'version': 1, 'archives': dict(sorted(result.items())), 'compressedBytes': sum(r['bytes'] for r in result.values())}
    BACKUP.mkdir(exist_ok=True)
    INDEX.write_text(json.dumps(report, indent=2) + '\n')
    print(f'LFS backup: {len(result)} archives, {report["compressedBytes"] / 1024**3:.2f} GiB', flush=True)


def restore_file(source, destination, entry):
    destination.parent.mkdir(parents=True, exist_ok=True)
    if valid(destination, entry):
        return
    temp = destination.with_name(destination.name + '.restore.part')
    try:
        with temp.open('wb') as output:
            shutil.copyfileobj(source, output)
        if not valid(temp, entry):
            raise ValueError(f'Restored asset checksum mismatch: {destination}')
        temp.replace(destination)
    finally:
        temp.unlink(missing_ok=True)


def restore(games):
    report = json.loads(INDEX.read_text())
    if report['version'] != 1:
        raise ValueError('Unsupported backup manifest')
    for name, record in report['archives'].items():
        if record['game'] not in games:
            continue
        path = BACKUP / relative_path(name)
        if not valid(path, record):
            raise ValueError(f'Missing or invalid LFS archive: {path}; run git lfs pull')
        root = cache_root(record['game'])
        if name.endswith('.bsp.gz'):
            local, entry = next(iter(record['files'].items()))
            with gzip.open(path, 'rb') as source:
                restore_file(source, root / relative_path(local), entry)
        else:
            seen = set()
            with tarfile.open(path, mode='r|gz') as archive:
                for member in archive:
                    if not member.isfile() or member.name not in record['files'] or member.name in seen:
                        raise ValueError(f'Unexpected archive member: {member.name}')
                    entry = record['files'][member.name]
                    if member.size != entry['bytes']:
                        raise ValueError(f'Wrong archive member size: {member.name}')
                    with archive.extractfile(member) as source:
                        restore_file(source, root / relative_path(member.name), entry)
                    seen.add(member.name)
            if seen != set(record['files']):
                raise ValueError(f'Incomplete archive: {name}')
        print(f'Restored {name}', flush=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('action', choices=('pack', 'restore'))
    parser.add_argument('--game', choices=('all', 'bunnyhop', 'surfd'), default='all')
    parser.add_argument('--workers', type=int, choices=range(1, 9), default=4)
    args = parser.parse_args()
    games = ['bunnyhop', 'surfd'] if args.game == 'all' else [args.game]
    pack(games, args.workers) if args.action == 'pack' else restore(games)
