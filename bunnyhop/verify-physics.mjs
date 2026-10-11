// Exercise the captured WASM and its unmodified public JS wrapper without a browser.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

const root = new URL('./', import.meta.url);
const source = readFileSync(new URL('upstream/assets/core-GuI4LXND.js', root));
const moduleURL = 'data:text/javascript;base64,' + source.toString('base64');
const wasm = new WebAssembly.Module(readFileSync(new URL('upstream/assets/bunnyhop_core-CRpj0v-F.wasm', root)));
const catalogue = JSON.parse(readFileSync(new URL('upstream/index.json', root))).maps;
const tutorial = JSON.parse(readFileSync(new URL('tutorial-map.json', root)));
if (!catalogue.some(m => m.name === tutorial.name)) catalogue.push(tutorial);
const requested = process.argv.slice(2);
const selected = requested.length ? catalogue.filter(m => requested.includes(m.name)) : catalogue.filter(m => existsSync(new URL(`cache/${m.name}.bsp`, root)));
if (!selected.length || (requested.length && selected.length !== new Set(requested).size)) throw new Error('No cached maps matched');
const results = [];
for (const map of selected) {
  globalThis.gc?.();
  // The upstream setter adds to module-global content; isolate each map's wrapper.
  const { n: Core, r: settings } = await import(moduleURL + '#' + encodeURIComponent(map.name));
  const bytes = readFileSync(new URL(`cache/${map.name}.bsp`, root));
  if (createHash('sha256').update(bytes).digest('hex') !== map.sha256) throw new Error(`${map.name}: BSP checksum mismatch`);
  const manifest = new URL(`cache/content-manifests/${map.sha256}.json`, root);
  const data = JSON.parse(readFileSync(manifest));
  if (data.mapSha256 !== map.sha256) throw new Error(`${map.name}: wrong content manifest`);
  const core = await Core.create(wasm);
  core.loadMapPhysics(bytes);
  // Match the browser's VT loader: load BSP, add hosted content, then reload physics.
  for (const [path, file] of Object.entries(data.files)) {
    const content = readFileSync(new URL(`cache/content/${file.sha256}`, root));
    if (content.length !== file.size || createHash('sha256').update(content).digest('hex') !== file.sha256) throw new Error(`${map.name}: corrupt hosted content ${path}`);
    core.contentAddFile(path, content);
  }
  core.physicsReload();
  core.setSettings(settings);
  const physicsWarnings = core.physicsMissing().map(model => {
    const collision = model.replace(/\.mdl$/i, '.phy');
    const hosted = data.files?.[collision] ?? data.physics?.files?.[collision] ?? null;
    return { model, collision, hosted, reason: hosted ? 'unresolved-by-original-core' : 'no-hosted-collision-file' };
  });
  const initial = core.state();
  if (!initial.position.every(Number.isFinite)) throw new Error(`${map.name}: invalid spawn`);
  const runs = [];
  for (const fps of [30, 60, 144]) {
    core.reset();
    let tick = 0;
    let accumulator = 0;
    let airborneTicks = 0;
    let movedTicks = 0;
    const hash = createHash('sha256');
    let previous = core.state();
    while (tick < 600) {
      accumulator += 1 / fps;
      while (accumulator + 1e-12 >= settings.tickInterval && tick < 600) {
        // Settling, ground movement, then held-jump air strafing.
        const yaw = initial.teleportAngles[1] + (tick >= 100 ? (tick - 100) * 0.6 : 180);
        core.step(tick < 30 ? 0 : tick < 100 ? 400 : 0, tick >= 100 ? 400 : 0, yaw, 0, tick >= 100 ? 2 : 0);
        const state = core.state();
        if (!state.position.every(Number.isFinite) || !state.velocity.every(Number.isFinite)) throw new Error(`${map.name}: non-finite state`);
        if (!state.grounded) airborneTicks++;
        if (state.position.some((n, i) => n !== previous.position[i])) movedTicks++;
        hash.update(JSON.stringify(state));
        previous = state;
        tick++;
        accumulator -= settings.tickInterval;
      }
    }
    runs.push({ fps, ticks: tick, stateHash: hash.digest('hex'), airborneTicks, movedTicks });
  }
  if (new Set(runs.map(r => r.stateHash)).size !== 1) throw new Error(`${map.name}: frame scheduling changed physics`);
  results.push({ map: map.name, initialPosition: initial.position, physicsWarnings, runs });
  console.log(`${map.name}: verified BSP/hosted content, finite states, identical ticks at 30/60/144 FPS; original-core prop collision warnings: ${physicsWarnings.length}`);
}
const report = { description: 'Offline physics loading and synthetic input scheduling using the original full-content initialization order; not a course completion or native CSS parity test. Original-core missing prop collision warnings are recorded separately from checksum/load failures, including whether a hosted .phy exists.', mapCount: results.length, mapsWithPhysicsWarnings: results.filter(r => r.physicsWarnings.length).length, results };
writeFileSync(new URL('analysis/physics-verification.json', root), JSON.stringify(report, null, 2) + '\n');
