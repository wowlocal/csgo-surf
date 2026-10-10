#!/usr/bin/env python3
"""Report the all-maps download without interrupting it."""
import hashlib
import json
import re
import time
from pathlib import Path

WEB = Path(__file__).resolve().parent / 'local-surf'
plan = json.loads((WEB / 'download-all-plan.json').read_text())
total = stored = 0
unknown = 0
for path in set(p for files in plan.values() for p in files):
    destination = WEB / path.lstrip('/')
    if destination.is_file():
        size = destination.stat().st_size
        total += size
        stored += size
        continue
    token = hashlib.sha256(path.encode()).hexdigest()[:24]
    headers = WEB / '.download-parts' / (token + '.0.headers')
    ranges = re.findall(r'content-range:\s*bytes (\d+)-(\d+)/(\d+)', headers.read_text(), re.I) if headers.is_file() else []
    if not ranges:
        unknown += 1
        continue
    total += int(ranges[-1][2])
    for part in (WEB / '.download-parts').glob(token + '.*'):
        if part.name.rsplit('.', 1)[-1].isdigit():
            try:
                stored += part.stat().st_size
            except FileNotFoundError:
                pass
progress = json.loads((WEB / 'download-all-progress.json').read_text())
ready = [slug for slug, paths in plan.items() if all((WEB / p.lstrip('/')).is_file() for p in paths)]
report = {
    'time': time.time(), 'totalMB': round(total / 1e6, 1),
    'storedMB': round(stored / 1e6, 1), 'remainingMB': round((total - stored) / 1e6, 1),
    'percent': round(stored / total * 100, 1) if total else 0,
    'mapsReady': ready, 'filesVerified': progress['completedFiles'],
    'fileTotal': progress['totalFiles'], 'unknownSizes': unknown,
    'errorCount': len(progress['errors']), 'errorSample': progress['errors'][:3],
    'complete': progress['complete'],
    'fatalError': progress.get('fatalError'),
}
(WEB / 'download-status.json').write_text(json.dumps(report, indent=2) + '\n')
print(json.dumps(report, indent=2))
