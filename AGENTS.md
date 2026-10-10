# Project context

This repository runs a saved Surfd browser client locally. Its surf mechanics
target Counter-Strike: Source. The repository name does not mean this is a
CS:GO or CS 1.6 engine port. The original TypeScript project and server are
not present.

Read `README.txt` for setup and `analysis/report.txt` for the client analysis.
The upstream snapshot was captured from `https://surfd.net/` on 10 October 2026.

# Repository layout

- `run-local.py`: localhost server, initial client setup, on-demand asset cache,
  and disabled online API responses.
- `cache-all-maps.py`: resumable downloader and validator for all 20 maps.
- `cache-boreas.py`: downloader for Boreas and its prerequisites.
- `download-status.py`: reads the download plan and reports saved progress.
- `analysis/raw/`: original downloaded HTML, JavaScript, and the Boreas replay.
- `analysis/pretty/`: formatted copies of the JavaScript; identifiers remain
  minified. These files are references, not the served client.
- `analysis/physics-core.mjs`: extracted movement/session code with readable
  export aliases. `analysis/replay-probe.mjs` runs its headless replay check.
- `analysis/manifest.json`, `map-catalog.json`, and `visual-manifests.json`:
  source URLs, hashes, map identities, and pinned visual-manifest paths.
- `analysis/downloaded-maps-manifest.json`: verified inventory of the completed
  map download, including sizes and SHA-256 hashes.
- `third-party/`: upstream notices and the Three.js license.
- `local-surf/`: generated client files, maps, chunks, logs, and runtime state.
  This directory is ignored by Git.

# Run locally

Use Python 3.9+ and curl on macOS/Linux. Node.js is optional for the physics
probe. There is no npm installation or application build step.

```sh
python3 run-local.py
```

Open `http://127.0.0.1:4173/?map=boreas`, choose Solo, and click Play. Use
Windowed mode if fullscreen or mouse capture causes trouble.

```sh
python3 run-local.py --offline
python3 run-local.py --port 4174
```

Offline mode serves cached assets only. A fresh checkout needs an initial
download, including the stylesheet. Preserve localhost binding and solo-mode
defaults unless the requested task changes those requirements.

Check whether a server is already running before starting another on the same
port. Background runs created during this session have a PID and log under
`local-surf/`; a normal foreground invocation does not create a PID file.
Verify a saved PID still belongs to this project's server before stopping it.
Avoid taking over browser controls while the user is playing.

# Download and restore assets

```sh
python3 cache-all-maps.py
python3 download-status.py
python3 cache-boreas.py
```

Run only one all-maps downloader at a time. The status command becomes
available after the downloader has loaded the manifests and written its plan.
Downloads can be large and slow. Preserve `local-surf/.download-parts/` across
interruptions and rerun the downloader to resume completed chunks.

Validate byte ranges, gzip data, declared pack sizes, and map/replay identities
before marking files complete. A failed curl attempt can emit a status before
a later successful retry: accept successful transfers once and wait until curl
stops using a file before cleaning up failed output.

Downloaded packs contain mesh/texture entries used by the client loader;
individual unpacked asset URLs do not need separate downloads. Preserve both
texture variants when downloading a complete map cache.

# Make changes

Keep original files in `analysis/raw/` intact so their recorded hashes remain
useful. Prefer authored helpers or reproducible client patches for deliberate
behavior changes. Update `run-local.py` setup/serving behavior when necessary:
edits made only to generated `local-surf/assets/` files are overwritten on setup.

Keep asset URLs, geometry versions, physics profiles, and replay identities
consistent. Formatting a bundle does not recover its original source names.
Retain upstream attribution and notices; do not assert a new license for
third-party code or assets.

# Verify changes

Scale verification to the change. Documentation edits need a diff review;
they do not require downloading all maps again.

- For server changes, check startup, HTML/JavaScript serving, the disabled API
  config, and affected cache/offline behavior on an unused localhost port.
- For downloader changes, check resume behavior and failure/retry handling.
  Use cached assets or focused temporary fixtures instead of fetching the
  entire cache solely to test a small change.
- For movement or replay changes, cache Boreas and run:

```sh
node analysis/replay-probe.mjs
```

The shipped replay completes 2,758 commands in approximately 39.49536 seconds.
The probe checks completion and identical per-tick state across simulated
30/60/144/240 FPS schedules. It uses the replay's older unrestricted-start
profile; it does not establish native CSS parity or ranked-server verification.
Its results include variable timing measurements, so avoid committing incidental
result changes when the probe is the only reason they changed.

# GitHub backup

The remote is `https://github.com/wowlocal/csgo-surf.git`, with branch `main`.
Preserve `.gitignore`: map caches, partial downloads, logs, PID files, generated
archives, Python caches, and downloaded collision/visual fixtures stay local.
Commit the helpers, client snapshot, documentation, and asset inventories.

Use normal commits and pushes when requested, preserving unrelated user changes.
Do not force-push. Report that the map binaries are excluded from Git and can
be restored with the downloaders. A push confirmation or matching remote commit
is sufficient evidence; network failures must not be reported as successful pushes.
