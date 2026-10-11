import { t as e } from "./events-Q3WT0NU4.js";
var t = new Set();
function n(n) {
  if (
    (n.source === `local` &&
      (n.type === `slash`
        ? e.emit(`swing`)
        : n.type === `stab`
          ? e.emit(`stab`)
          : n.type === `draw`
            ? e.emit(`draw`)
            : n.type === `flip`
              ? e.emit(`swing`, { strength: 0.42 })
              : n.type === `spin`
                ? e.emit(`swing`, { strength: 0.2 })
                : n.type === `catch` && e.emit(`draw`, { strength: 0.45 })),
    !t.size)
  )
    return;
  let r = { ...n, time: performance.now() };
  for (let e of t)
    try {
      e(r);
    } catch (e) {
      console.warn(`weapon event listener:`, e);
    }
}
export { n as t };
