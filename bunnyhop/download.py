#!/usr/bin/env python3
"""Capture bunnyhop.lol's public client and all published maps for offline play."""
import argparse
import hashlib
import json
import os
import pty
import re
import subprocess
import time
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, quote

ROOT = Path(__file__).resolve().parent
UPSTREAM = ROOT / 'upstream'
CACHE = ROOT / 'cache'
ORIGIN = 'https://bunnyhop.lol'
FILES = {}
ABSENT = set()
ABSENT_DETAILS = {}
progress = {'stage': 'client', 'filesDone': 0, 'filesTotal': 0, 'complete': False, 'errors': []}
CONNECTIONS = 6


def digest(path):
    h = hashlib.sha256()
    with path.open('rb') as f:
        for block in iter(lambda: f.read(1048576), b''):
            h.update(block)
    return h.hexdigest()


def persist():
    CACHE.mkdir(exist_ok=True)
    temp = CACHE / 'download-progress.json.tmp'
    temp.write_text(json.dumps({**progress, 'updatedAt': time.time()}, indent=2) + '\n')
    temp.replace(CACHE / 'download-progress.json')


def destination(job):
    root = UPSTREAM if job.get('client') else CACHE
    return root / job['local']


def validate(job, file):
    size = file.stat().st_size
    if job.get('size') is not None and size != job['size']:
        raise ValueError(f'Incorrect size: {size} != {job["size"]}')
    sha = digest(file)
    if job.get('sha256') and sha != job['sha256']:
        raise ValueError('SHA-256 mismatch')
    kind = job.get('kind', 'file')
    if kind == 'html':
        with file.open('rb') as f:
            if b'<html' not in f.read(1024).lower():
                raise ValueError('Expected an HTML document')
    elif kind == 'bsp':
        with file.open('rb') as f:
            if f.read(4) != b'VBSP':
                raise ValueError('Not a Source BSP')
    elif kind in ('json', 'manifest', 'zones'):
        obj = json.loads(file.read_text())
        if kind == 'manifest' and (obj.get('version') != 1 or obj.get('mapSha256') != job['mapSha256']):
            raise ValueError('Wrong content manifest identity')
        if kind == 'zones' and (obj.get('map') != job['map'] or not isinstance(obj.get('zones'), list)):
            raise ValueError('Wrong map zones')
    elif kind == 'wasm':
        with file.open('rb') as f:
            if f.read(4) != b'\x00asm':
                raise ValueError('Not WebAssembly')
    elif kind == 'image':
        with file.open('rb') as f:
            head = f.read(16)
        if not (head.startswith((b'\xff\xd8\xff', b'\x89PNG\r\n\x1a\n', b'GIF8')) or head.startswith(b'RIFF') and head[8:12] == b'WEBP'):
            raise ValueError('Not a supported image')
    elif kind == 'file' and Path(job['local']).suffix not in ('.html', ''):
        with file.open('rb') as f:
            if b'<html' in f.read(512).lower():
                raise ValueError('Received HTML instead of an asset')
    return {'url': job['url'], 'local': job['local'], 'bytes': size, 'sha256': sha, 'kind': kind, 'client': bool(job.get('client'))}


def batch(jobs, stage, connections=None):
    jobs = list({(j['client'] if 'client' in j else False, j['local']): j for j in jobs}.values())
    progress.update(stage=stage, filesDone=0, filesTotal=len(jobs), errors=[])
    persist()
    pending = []
    def finish(job, file):
        record = validate(job, file)
        final = destination(job)
        if file != final:
            file.replace(final)
        FILES[('client:' if job.get('client') else '') + job['local']] = record
        progress['filesDone'] += 1
        persist()
        print(f'{stage}: {progress["filesDone"]}/{len(jobs)} {job["local"]} ({record["bytes"]:,} bytes)', flush=True)
    for job in jobs:
        final = destination(job)
        final.parent.mkdir(parents=True, exist_ok=True)
        if final.is_file():
            try:
                finish(job, final)
                continue
            except (ValueError, OSError):
                pass
        pending.append(job)
    if not pending:
        return
    config = CACHE / 'curl-download.conf'
    lines = []
    for index, job in enumerate(pending):
        final = destination(job)
        if index:
            lines.append('next')
        lines.extend([
            'silent', 'show-error', 'fail', 'http1.1', 'compressed',
            'retry = 3', 'retry-all-errors', 'connect-timeout = 20',
            'max-time = 1800', 'speed-time = 60', 'speed-limit = 1024',
            'url = ' + json.dumps(job['url']),
            'output = ' + json.dumps(str(final) + '.part'),
            'write-out = ' + json.dumps(f'{index} %{{http_code}} %{{exitcode}}\n'),
        ])
        if job.get('kind') == 'html':
            lines.append('header = "Accept: text/html"')
    config.write_text('\n'.join(lines) + '\n')
    master, slave = pty.openpty()
    process = subprocess.Popen(['curl', '--parallel', '--parallel-max', str(connections or CONNECTIONS), '--config', str(config)], stdout=slave)
    os.close(slave)
    output = os.fdopen(master, 'r', errors='replace')
    successful = set()
    failures = {}
    def rows():
        try:
            yield from output
        except OSError as error:
            if error.errno != 5:
                raise
        finally:
            output.close()
    for row in rows():
        fields = row.strip().split()
        if len(fields) != 3 or not fields[0].isdigit():
            continue
        index = int(fields[0])
        if index >= len(pending) or index in successful:
            continue
        job = pending[index]
        status = fields[1]
        transfer_code = fields[2]
        if status == '404' and job.get('optional'):
            ABSENT.add(job['url'])
            ABSENT_DETAILS[job['url']] = {'url': job['url'], 'local': job['local'], 'reason': 'HTTP 404'}
            progress['filesDone'] += 1
            successful.add(index)
            persist()
            continue
        if status != '200' or transfer_code != '0':
            failures[index] = f'HTTP {status}, curl exit {transfer_code}'
            continue
        part = Path(str(destination(job)) + '.part')
        if job.get('optional') and job.get('kind') == 'image' and part.is_file() and part.stat().st_size == 0:
            # Some original gallery URLs serve HTTP 200 with Content-Length: 0.
            # Record the unavailable illustration, without inventorying it as an image.
            ABSENT.add(job['url'])
            ABSENT_DETAILS[job['url']] = {'url': job['url'], 'local': job['local'], 'reason': 'HTTP 200 with an empty image body'}
            progress['filesDone'] += 1
            successful.add(index)
            persist()
            continue
        try:
            finish(job, part)
            successful.add(index)
            failures.pop(index, None)
        except (ValueError, OSError) as error:
            failures[index] = str(error)
    code = process.wait()
    for index, job in enumerate(pending):
        if index not in successful:
            progress['errors'].append({'path': job['local'], 'error': failures.get(index, f'curl exit {code}')})
    persist()
    if progress['errors']:
        raise RuntimeError(f'{len(progress["errors"])} failed downloads. Rerun to reuse completed files.')


def job(path, **kwargs):
    local = urlsplit(path).path.lstrip('/') or 'index.html'
    return {'url': ORIGIN + path, 'local': local, **kwargs}


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.paths = set()
    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag == 'script' and values.get('src', '').startswith('/'):
            self.paths.add(values['src'])
        if tag == 'link' and values.get('href', '').startswith('/') and values.get('rel') in ('modulepreload', 'stylesheet', 'icon', 'apple-touch-icon', 'manifest', 'preload'):
            self.paths.add(values['href'])


def snapshot():
    batch([job('/', client=True, kind='html'), job('/index.json', client=True, kind='json'), *[job(p, client=True, kind='html') for p in ('/about', '/maps', '/servers', '/ranks', '/changelog')]], 'pages')
    todo = set()
    for path in ('index.html', 'about', 'maps', 'servers', 'ranks', 'changelog'):
        parser = Links()
        parser.feed((UPSTREAM / path).read_text())
        todo.update(parser.paths)
    seen = set()
    while todo:
        paths = sorted(todo - seen)
        todo = set()
        if not paths:
            break
        seen.update(paths)
        batch([job(p, client=True, kind='wasm' if p.endswith('.wasm') else 'json' if p.endswith('.json') or p.endswith('.webmanifest') else 'file') for p in paths], 'client-assets')
        for path in paths:
            file = UPSTREAM / urlsplit(path).path.lstrip('/')
            if file.suffix in ('.js', '.css'):
                text = file.read_text()
                for ref in re.findall(r'''["'`]((?:/?assets/|\./)[A-Za-z0-9_./+-]+\.(?:js|css|wasm|png|jpg|webp|svg|m4a|webm|mp3|ogg|wav|woff2?))["'`]''', text):
                    todo.add('/' + ref if ref.startswith('assets/') else urljoin(path, ref))
                if file.suffix == '.css':
                    for ref in re.findall(r'''url\(["']?([^\)'"\s]+)''', text):
                        if not ref.startswith(('data:', 'http', '#')):
                            todo.add(urljoin(path, ref))
            elif file.suffix == '.webmanifest':
                todo.update(icon['src'] for icon in json.loads(file.read_text()).get('icons', []))
    (ROOT / 'client-manifest.json').write_text(json.dumps({'origin': ORIGIN, 'capturedAt': time.time(), 'files': [record for record in FILES.values() if record['client']]}, indent=2) + '\n')


def content_entries(obj):
    if isinstance(obj, dict):
        if re.fullmatch(r'[a-f0-9]{64}', str(obj.get('sha256', ''))) and isinstance(obj.get('size'), int):
            yield obj
        for value in obj.values():
            yield from content_entries(value)
    elif isinstance(obj, list):
        for value in obj:
            yield from content_entries(value)


def capture(selected=None):
    snapshot()
    catalog = json.loads((UPSTREAM / 'index.json').read_text())
    maps = list(catalog['maps'])
    tutorial = json.loads((ROOT / 'tutorial-map.json').read_text())
    if not any(m['name'] == tutorial['name'] for m in maps):
        maps.append(tutorial)
    if selected:
        maps = [m for m in maps if m['name'] in selected]
        if len(maps) != len(set(selected)):
            raise ValueError('Unknown map name')
    metadata = []
    external_images = {}
    for m in maps:
        encoded = quote(m['name'], safe='_-.')
        metadata.extend([
            job(f'/{encoded}.zones.json', optional=True, kind='zones', map=m['name']),
            {'url': f'{ORIGIN}/api/content-manifests/{m["sha256"]}.json', 'local': f'content-manifests/{m["sha256"]}.json', 'kind': 'manifest', 'mapSha256': m['sha256'], 'optional': True},
        ])
        for path in {m.get('thumbnail'), m.get('hero'), *m.get('shots', []), *m.get('screenshots', [])}:
            if path and path.startswith('/'):
                metadata.append(job(path))
            elif path and urlsplit(path).hostname == 'images.gamebanana.com':
                local = 'external-images/' + hashlib.sha256(path.encode()).hexdigest() + Path(urlsplit(path).path).suffix.lower()
                metadata.append({'url': path, 'local': local, 'kind': 'image', 'optional': True})
                external_images[path] = '/' + local
    if any(m['name'] == tutorial['name'] for m in maps):
        metadata.append(job('/' + tutorial['name'] + '.tutorial.json', kind='json'))
    batch(metadata, 'map-metadata')
    # A subset download retains already captured gallery mappings for other maps.
    mapping_file = ROOT / 'external-images.json'
    image_mapping = json.loads(mapping_file.read_text()) if selected and mapping_file.is_file() else {}
    image_mapping.update({url: local for url, local in external_images.items() if url not in ABSENT})
    for url in ABSENT:
        image_mapping.pop(url, None)
    mapping_file.write_text(json.dumps(image_mapping, indent=2, sort_keys=True) + '\n')
    resources = {}
    for m in maps:
        manifest = CACHE / f'content-manifests/{m["sha256"]}.json'
        if manifest.is_file():
            for entry in content_entries(json.loads(manifest.read_text())):
                sha = entry['sha256']
                resources[sha] = {'url': f'{ORIGIN}/api/content/{sha}', 'local': f'content/{sha}', 'size': entry['size'], 'sha256': sha}
    batch(resources.values(), 'shared-content')
    bsp = [job('/' + quote(m['name'], safe='_-.') + '.bsp', kind='bsp', size=m['size'], sha256=m['sha256']) for m in maps]
    print(f'Downloading {len(maps)} BSPs: {sum(m["size"] for m in maps)/1e9:.2f} GB unpacked; HTTP compression enabled.', flush=True)
    batch(bsp, 'maps')
    report = {'origin': ORIGIN, 'capturedAt': time.time(), 'catalogueMapCount': len(catalog['maps']), 'mapCount': len(maps), 'maps': [m['name'] for m in maps], 'bytes': sum(f['bytes'] for f in FILES.values()), 'files': FILES, 'absentOptionalUrls': sorted(ABSENT), 'unavailableOptionalAssets': [ABSENT_DETAILS[url] for url in sorted(ABSENT)], 'complete': True}
    (ROOT / 'downloaded-assets.json').write_text(json.dumps(report, indent=2) + '\n')
    progress.update(stage='complete', complete=True, mapCount=len(maps), totalBytes=report['bytes'])
    persist()
    print(f'COMPLETE: {len(maps)} maps, {len(FILES)} files, {report["bytes"]/1e9:.2f} GB.', flush=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--maps', nargs='+', help='Download selected maps; default is the complete catalogue')
    parser.add_argument('--client-only', action='store_true', help='Capture documents and client modules without downloading maps')
    parser.add_argument('--connections', type=int, default=6, choices=range(1, 25), metavar='1-24', help='Parallel transfers (default: 6)')
    args = parser.parse_args()
    CONNECTIONS = args.connections
    try:
        snapshot() if args.client_only else capture(args.maps)
    except Exception as error:
        progress['fatalError'] = str(error)
        persist()
        raise
