// Read-only reproduction using the publicly shipped map, replay and client physics.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { GameSession, FixedStepper, playerHull } from './physics-core.mjs';

const mapSource = new URL('./raw/boreas-collision.json.gz', import.meta.url);
const cachedMap = new URL('../local-surf/packed/405341fbe52c7c93037cb981eac1377f3a9082470684b8189e7f8e9b6e6b7cea.json.gz', import.meta.url);
if (!existsSync(mapSource) && !existsSync(cachedMap)) throw new Error('Download Boreas first: python3 cache-boreas.py');
const mapBytes = readFileSync(existsSync(mapSource) ? mapSource : cachedMap);
const map = JSON.parse(mapBytes[0] === 31 ? gunzipSync(mapBytes) : mapBytes);
const replay = JSON.parse(readFileSync(new URL('./raw/boreas-complete.json', import.meta.url)));
const results = [];
for (const fps of [30, 60, 144, 240]) {
  const session = new GameSession(map, replay.config);
  session.state = structuredClone(replay.initialState);
  session.previous = structuredClone(session.state);
  session.initialState = structuredClone(session.state);
  session.commands = [];
  session.timer.reset(session.state.position, playerHull(session.state, session.config));
  const stepper = new FixedStepper(replay.config.dt);
  const hash = createHash('sha256');
  let index = 0;
  let frames = 0;
  const events = [];
  const started = performance.now();
  while (index < replay.commands.length) {
    stepper.advance(1 / fps, () => {
      if (index >= replay.commands.length) return;
      const emitted = session.step(replay.commands[index++]);
      hash.update(JSON.stringify({ state: session.state, timer: session.timer.state, result: session.lastResult, events: emitted }));
      if (emitted.length) events.push({ command: index, events: emitted });
    }, () => { throw new Error('Unexpected frame stall'); });
    frames++;
  }
  results.push({ fps, frames, commands: index, stateHash: hash.digest('hex'), timer: session.timer.state, finalPosition: session.state.position, events, probeDurationMs: performance.now() - started });
}
const report = {
  description: 'Local headless replay of shipped browser physics; this does not establish native CSS parity or server verification.',
  map: { id: map.id, brushes: map.brushes.length, displacementTriangles: map.displacementTriangles.length, zones: map.zones.length },
  replayConfig: replay.config,
  identicalEveryTickAcrossFps: new Set(results.map(r => r.stateHash)).size === 1,
  allFinishedWithoutInvalidation: results.every(r => r.timer.phase === 'finished' && r.timer.invalidReason === null),
  results,
};
writeFileSync(new URL('./replay-probe-results.json', import.meta.url), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ ...report, results: results.map(({ events, ...r }) => r) }, null, 2));
if (!report.identicalEveryTickAcrossFps || !report.allFinishedWithoutInvalidation) process.exitCode = 1;
