#!/usr/bin/env python3
"""Run the captured bunnyhop.lol client without contacting its online services."""
import argparse
import json
import mimetypes
import re
import shutil
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent
UPSTREAM = ROOT / 'upstream'
CACHE = ROOT / 'cache'
OFFLINE = ROOT / 'offline'


def prepare():
    OFFLINE.mkdir(exist_ok=True)
    shutil.copytree(UPSTREAM, OFFLINE, dirs_exist_ok=True, ignore=shutil.ignore_patterns('*.part'))
    api = OFFLINE / 'assets/api-B2Jj-kgC.js'
    original = api.read_text()
    target = 'var S=`/api`.replace(/\\/+$/,``)??null'
    if original.count(target) != 1:
        raise RuntimeError('The API patch no longer matches this captured client')
    api.write_text(original.replace(target, 'var S=null', 1))
    mapping_file = ROOT / 'external-images.json'
    if mapping_file.is_file():
        images = json.loads(mapping_file.read_text())
        catalogue_file = OFFLINE / 'index.json'
        catalogue = json.loads(catalogue_file.read_text())
        inventory_file = ROOT / 'downloaded-assets.json'
        absent = set(json.loads(inventory_file.read_text()).get('absentOptionalUrls', [])) if inventory_file.is_file() else set()
        for entry in catalogue['maps']:
            for key in ('thumbnail', 'hero'):
                if key in entry:
                    entry[key] = None if entry[key] in absent else images.get(entry[key], entry[key])
            for key in ('shots', 'screenshots'):
                if key in entry:
                    entry[key] = [images.get(url, url) for url in entry[key] if url not in absent]
        catalogue_file.write_text(json.dumps(catalogue) + '\n')
    for file in OFFLINE.iterdir():
        if file.is_file() and (file.suffix == '.html' or file.name in ('about', 'maps', 'servers', 'ranks', 'changelog')):
            html = file.read_text()
            html = re.sub(r'<script\b[^>]*\bsrc=["\']https?://[^>]*>.*?</script>', '', html, flags=re.I | re.S)
            file.write_text(html)


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(OFFLINE), **kwargs)

    def translate_path(self, path):
        path = unquote(urlsplit(path).path)
        if path in ('', '/'):
            return str(OFFLINE / 'index.html')
        if path in ('/maps', '/ranks', '/servers') or path.startswith('/maps/'):
            return str(OFFLINE / 'index.html')
        if path.startswith('/api/content-manifests/') or path.startswith('/api/content/'):
            path = path[4:]
        relative = path.lstrip('/')
        if path.startswith('//') or '\\' in path:
            return str(OFFLINE / '__invalid__')
        roots = [OFFLINE, CACHE]
        for root in roots:
            candidate = (root / relative).resolve()
            if candidate.is_relative_to(root.resolve()) and candidate.is_file() and not candidate.name.endswith(('.part', '.log', '.pid', '.conf')):
                return str(candidate)
        return str(OFFLINE / '__missing__')

    def do_GET(self):
        path = urlsplit(self.path).path
        if path.startswith('/api/') and not path.startswith(('/api/content/', '/api/content-manifests/')):
            self.disabled_api()
            return
        super().do_GET()

    def do_POST(self):
        self.disabled_api()

    def disabled_api(self):
        body = json.dumps({'error': 'offline', 'message': 'Online services are disabled in this local copy.'}).encode()
        self.send_response(503)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def end_headers(self):
        # Localhost-only fetches make offline verification independent of live services.
        self.send_header('Content-Security-Policy', "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' blob:; connect-src 'self' blob:; style-src 'self' 'unsafe-inline'; worker-src 'self' blob:; img-src 'self' data: blob:; media-src 'self' data: blob:; object-src 'none'")
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def guess_type(self, path):
        if path.endswith('.wasm'):
            return 'application/wasm'
        if path.endswith('.js'):
            return 'text/javascript'
        if Path(path).name in ('about', 'maps', 'servers', 'ranks', 'changelog'):
            return 'text/html'
        return mimetypes.guess_type(path)[0] or 'application/octet-stream'

    def copyfile(self, source, outputfile):
        try:
            super().copyfile(source, outputfile)
        except (BrokenPipeError, ConnectionResetError):
            pass


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=4180)
    args = parser.parse_args()
    prepare()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), Handler)
    print(f'Bunnyhop offline: http://127.0.0.1:{server.server_address[1]}/?map=bh_aztec', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
