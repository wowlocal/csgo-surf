Surfd local browser copy

A snapshot of https://surfd.net/ captured on 10 October 2026, with a local
solo server, readable JavaScript, physics analysis and resumable map downloaders.
This is a browser adaptation of Counter-Strike: Source surf, not CS:GO or CS 1.6.

Requirements: Python 3.9+, curl, and a desktop browser with WebGL.
The download utilities use Unix PTYs and are intended for macOS/Linux.
Node.js is optional, for the headless physics probe.

Restore from GitHub:
  git clone https://github.com/wowlocal/csgo-surf.git
  cd csgo-surf
  python3 run-local.py

Open:
  http://127.0.0.1:4173/?map=boreas

Choose Solo, then Play. If fullscreen or pointer lock fails, choose Windowed
and click Play again. WASD move, mouse look, Space/wheel down jump, Ctrl/C crouch,
R restart, Esc menu. On a ramp, release W and strafe toward the ramp face.

Download and verify all 20 maps (in a second terminal):
  python3 cache-all-maps.py

The downloader saves and reuses completed chunks when rerun. It includes
collision data, both supplied texture variants, models, previews and built-in
replays. To inspect progress while it runs:
  python3 download-status.py

For Boreas only:
  python3 cache-boreas.py

After downloading, serve only local files:
  python3 run-local.py --offline

To change ports:
  python3 run-local.py --port 4174

Online services are disabled in the local copy. Solo play, practice,
preferences and personal bests work locally. Maps are cached under local-surf/.
The large map cache, transient downloads, logs and process IDs are excluded
from Git; the bundled downloaders restore them from the pinned public URLs.
Completed all-map downloads produce local-surf/all-maps-manifest.json with
file sizes and SHA-256 hashes.

The server started by Codex runs in the background. Its PID and log are in
local-surf/server.pid and local-surf/server.log. To stop that process:
  kill "$(cat local-surf/server.pid)"

analysis/raw/ contains the saved client modules and original HTML.
analysis/pretty/ contains formatted copies; minified variable names remain.
analysis/report.txt explains the architecture in Russian.
analysis/physics-core.mjs extracts the physics with readable export aliases.
After caching Boreas, reproduce the 30/60/144/240 FPS headless replay check:
  node analysis/replay-probe.mjs

This is a local snapshot, not the original TypeScript repository or backend.
Third-party notices are preserved in third-party/. Original code and asset
rights remain with their respective authors; no new license is asserted.
