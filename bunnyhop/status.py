#!/usr/bin/env python3
"""Read the Bunnyhop download progress without interrupting the downloader."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CACHE = ROOT / 'cache'
catalogue = json.loads((ROOT / 'upstream/index.json').read_text())['maps']
ready = [m for m in catalogue if (CACHE / (m['name'] + '.bsp')).is_file() and (CACHE / (m['name'] + '.bsp')).stat().st_size == m['size']]
partial = 0
for m in catalogue:
    file = CACHE / (m['name'] + '.bsp.part')
    if file.is_file() and not (CACHE / (m['name'] + '.bsp')).is_file():
        partial += file.stat().st_size
progress_file = CACHE / 'download-progress.json'
if progress_file.is_file():
    progress = json.loads(progress_file.read_text())
else:
    inventory_file = ROOT / 'downloaded-assets.json'
    entries = [f for f in json.loads(inventory_file.read_text())['files'].values() if not f['client']] if inventory_file.is_file() else []
    count = sum((CACHE / f['local']).is_file() and (CACHE / f['local']).stat().st_size == f['bytes'] for f in entries)
    progress = {'stage': 'restored-cache', 'filesDone': count, 'filesTotal': len(entries), 'complete': bool(entries) and count == len(entries), 'errors': []}
total = sum(m['size'] for m in catalogue)
stored = sum(m['size'] for m in ready)
print(json.dumps({
    'stage': progress['stage'], 'stageFilesDone': progress['filesDone'],
    'stageFilesTotal': progress['filesTotal'], 'catalogueMapsReady': len(ready),
    'catalogueMapCount': len(catalogue), 'bspGBCached': round(stored / 1e9, 2),
    'bspGBPartial': round(partial / 1e9, 2), 'bspGBTotal': round(total / 1e9, 2),
    'bspGBRemainingApprox': round(max(0, total - stored - partial) / 1e9, 2),
    'errorCount': len(progress['errors']), 'errorSample': progress['errors'][:3],
    'complete': progress['complete'], 'fatalError': progress.get('fatalError'),
}, indent=2))
