#!/usr/bin/env python3
"""Serve the saved Surfd client on localhost, caching public assets on demand."""
import argparse
import json
import mimetypes
import shutil
import subprocess
import tempfile
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent
WEB = ROOT / 'local-surf'
WEB.mkdir(exist_ok=True)
locks = {}
locks_guard = threading.Lock()


def download(path):
    destination = WEB / path.lstrip('/')
    with locks_guard:
        lock = locks.setdefault(path, threading.Lock())
    with lock:
        if destination.is_file():
            return destination
        destination.parent.mkdir(parents=True, exist_ok=True)
        with tempfile.NamedTemporaryFile(dir=destination.parent, delete=False) as file:
            temporary = Path(file.name)
        try:
            subprocess.run([
                'curl', '-fLsS', '--http1.1', '--compressed', '--retry', '2',
                '--retry-all-errors', '--connect-timeout', '15', '--max-time', '180',
                'https://surfd.net' + path, '-o', str(temporary),
            ], check=True)
            if temporary.read_bytes()[:1024].lower().find(b'<html') >= 0 and not path.endswith('.html'):
                raise RuntimeError('Asset download returned an HTML page')
            temporary.replace(destination)
            print(f'Cached {path} ({destination.stat().st_size:,} bytes)', flush=True)
        finally:
            temporary.unlink(missing_ok=True)
        return destination


def prepare():
    (WEB / 'assets').mkdir(exist_ok=True)
    for source in (ROOT / 'analysis/raw').glob('*.js'):
        shutil.copyfile(source, WEB / 'assets' / source.name)
    html = (ROOT / 'analysis/raw/index.html').read_text()
    (WEB / 'index.html').write_text(html)
    for entry in json.loads((ROOT / 'analysis/manifest.json').read_text())['files']:
        source = ROOT / 'analysis/raw' / entry['file']
        if source.is_file() and not entry['file'].endswith('.js'):
            destination = WEB / urlsplit(entry['url']).path.lstrip('/')
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(source, destination)


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(WEB), **kwargs)

    def do_GET(self):
        path = unquote(urlsplit(self.path).path)
        target = (WEB / path.lstrip('/')).resolve()
        if not target.is_relative_to(WEB.resolve()) or '\\' in path or path.startswith('//'):
            self.send_error(400)
            return
        if path == '/_vercel/insights/script.js':
            self.send_response(200)
            self.send_header('Content-Type', 'text/javascript')
            self.send_header('Content-Length', '0')
            self.end_headers()
            return
        if path == '/api/surf':
            body = json.dumps({'enabled': False, 'providers': [], 'maps': []}).encode()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        if path not in ('/', '/index.html') and not target.is_file():
            if not path.startswith(('/assets/', '/packed/', '/maps/', '/replays/', '/licenses/', '/social/', '/previews/', '/brand/')) and path not in ('/reference.html', '/privacy.html', '/terms.html'):
                self.send_error(404)
                return
            if getattr(self.server, 'offline', False):
                self.send_error(404, 'Asset is not cached; restart without --offline to download it')
                return
            try:
                download(path)
            except (OSError, RuntimeError, subprocess.CalledProcessError) as error:
                print(f'Download failed: {path}: {error}', flush=True)
                self.send_error(502, 'Could not download the requested game asset')
                return
        super().do_GET()

    def do_POST(self):
        self.send_error(503, 'Online services are disabled in the local copy')

    def copyfile(self, source, outputfile):
        try:
            super().copyfile(source, outputfile)
        except (BrokenPipeError, ConnectionResetError):
            # Browsers cancel in-flight asset requests when changing maps.
            pass

    def guess_type(self, path):
        if path.endswith('.js'):
            return 'text/javascript'
        return mimetypes.guess_type(path)[0] or 'application/octet-stream'


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=4173)
    parser.add_argument('--offline', action='store_true', help='Serve only already downloaded assets')
    args = parser.parse_args()
    prepare()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), Handler)
    server.offline = args.offline
    print(f'Surfd local: http://127.0.0.1:{args.port}/?map=boreas', flush=True)
    print('Solo play; public map assets cached on first access.' if not args.offline else 'Offline: serving downloaded files only.', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
