Bunnyhop.lol offline snapshot

Captured from https://bunnyhop.lol/ on 11 October 2026. The captured catalogue
contains 342 maps (328 labelled CSS and 14 labelled CS:GO), plus a separate
published tutorial map with four lessons. Maps are game data;
the browser client uses a WebAssembly movement engine and Three.js rendering.

Open-source status

No public source repository or project source license was found in the site,
its About page, indexed GitHub results, or the related public repository list
checked during capture. Public JavaScript and the compiled WASM are available.
These are a published browser build, not recovered C++/TypeScript source code.
The site identifies its movement as Source SDK 2013 movement at 100 tick.
The exact search evidence and limitations are in analysis/source-check.json.
Capture details and the scope of verification are in analysis/report.txt.

Run

Requirements: Python 3.9+, curl on macOS/Linux, and a desktop WebGL2 browser.
Node.js is optional for the headless physics checks. No npm build is needed.

From the repository root:
  git lfs pull
  python3 asset-backup.py restore --game bunnyhop
  python3 bunnyhop/run.py

Alternatively, download directly from the published site:
  python3 bunnyhop/download.py

Open:
  http://127.0.0.1:4180/?map=bh_aztec

The server is offline by design: it reads local files and never downloads
resources. The download utility is the separate online step. Surfd can keep
running on port 4173 at the same time.

To download a subset first:
  python3 bunnyhop/download.py --maps bh_aztec bhop_eazy

To capture/restore only the client documents and modules:
  python3 bunnyhop/download.py --client-only

Run only one Bunnyhop downloader at a time. Completed files are validated and
reused on rerun. Interrupted compressed files are downloaded again individually.
The default is six parallel transfers; --connections 2 can reduce network load.
Read progress with python3 bunnyhop/status.py while it runs.
The catalogue's BSP sizes and SHA-256 values and content manifests' hashes are
checked before files become available to the game. Maps occupy approximately
11.46 GB unpacked; shared content is approximately 0.70 GB, plus UI assets/images.
HTTP compression reduces transferred bytes.

Controls

Click to start. WASD move, mouse look, Space autohop, Ctrl crouch, R restart,
Esc pause. In the air, release W and alternate A/D with matching mouse turns.
The original menu exposes styles, practice/checkpoints, settings, local runs,
ghosts and replay playback/export where supported by the browser.

Offline adaptation

upstream/ keeps the original client files. run.py generates offline/ and applies
one exact patch to the API module: its configured /api base becomes null.
This enables the client's existing offline behavior and redirects stock content
lookups to the local /content and /content-manifests paths. Script requests to
external origins are blocked; online API calls return a local offline response.
Original movement, geometry, styles and timing code are retained.
External GameBanana gallery images linked in the catalogue are also cached.
The generated catalogue replaces those image URLs using external-images.json;
the original upstream/index.json remains intact.
One original bhop_bfur screenshot URL serves an empty image body. It is recorded
as unavailable in downloaded-assets.json and omitted from the generated gallery.

Accounts, hosted leaderboards, chat, cloud replays and multiplayer require the
original backend and are unavailable in this local solo snapshot. They are not
recreated or represented as verified local services.

Layout and verification

upstream/: original HTML/JS/CSS/WASM, static UI media and the map catalogue.
analysis/pretty/: readable copies of selected original JavaScript.
cache/: BSPs, zones, thumbnails, stock content and runtime/download logs.
offline/: generated served client with the reproducible API patch.
client-manifest.json: original client URLs, sizes and SHA-256 hashes.
downloaded-assets.json: completed asset inventory and optional upstream absences.

cache/ and offline/ are excluded from Git. Compressed copies of maps and other
cached assets are backed up under assets/bunnyhop/ with Git LFS. Restore them
with the root asset-backup.py utility, or use download.py for upstream downloads.
The repository also includes the client snapshot, utilities, analysis,
attribution and verified inventories.

After caching maps, exercise the unmodified WASM wrapper:
  node --expose-gc bunnyhop/verify-physics.mjs bh_aztec bhop_eazy

With no map arguments, the probe checks all cached maps. It validates BSP hashes,
collision-resource loading, finite player states and identical per-tick results
under simulated 30/60/144 FPS schedules. This is synthetic-input validation,
not proof of full-route completion or exact native CSS equivalence.
The original engine reports unresolved prop collision models on some maps,
including models without hosted .phy files and some published .phy files it
cannot resolve. The probe follows the browser's original full-content loading
order and records these warnings with the model/file identities. A matching
checksum establishes a complete download, not support for every collision
model in the original engine.

Original code/assets retain their authors' rights. Map authors, source links and
license fields are preserved in upstream/index.json. No new license is asserted.
See SOURCES.txt for attribution and public references.
