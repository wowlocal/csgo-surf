var e = new Set(),
  t = null;
function n(n) {
  if (e.size) for (let t of e) t(n);
  else t = n;
}
var r = `bunnyhop:pending-race`;
try {
  let e = sessionStorage.getItem(r);
  e && (sessionStorage.removeItem(r), (t = JSON.parse(e)));
} catch {}
function i(e) {
  try {
    sessionStorage.setItem(r, JSON.stringify(e));
  } catch {}
}
function a(n) {
  if ((e.add(n), t)) {
    let e = t;
    ((t = null), n(e));
  }
  return () => e.delete(n);
}
var o = (e) => (e ? `:b${e}` : ``),
  s = (e, t, n = 0) => `bunnyhop:pb:${e}:${t}${o(n)}`;
function c(e, t, n = 0) {
  try {
    let r = localStorage.getItem(s(e, t, n));
    return r ? JSON.parse(r) : null;
  } catch {
    return null;
  }
}
function l(e) {
  localStorage.setItem(s(e.map, e.style, e.track ?? 0), JSON.stringify(e));
}
function u() {
  return new Promise((e, t) => {
    let n = indexedDB.open(`bunnyhop`, 1);
    ((n.onupgradeneeded = () => n.result.createObjectStore(`replays`)),
      (n.onsuccess = () => e(n.result)),
      (n.onerror = () => t(n.error)));
  });
}
async function d(e, t) {
  let n = await u();
  return new Promise((r, i) => {
    let a = t(n.transaction(`replays`, e).objectStore(`replays`));
    ((a.onsuccess = () => r(a.result)), (a.onerror = () => i(a.error)));
  });
}
var f = (e, t, n = 0) => `pb:${e}:${t}${o(n)}`;
async function p(e, t, n, r = 0) {
  await d(`readwrite`, (i) => i.put(n, f(e, t, r)));
}
async function m(e, t, n = 0) {
  try {
    let r = await d(`readonly`, (r) => r.get(f(e, t, n)));
    return r instanceof Uint8Array
      ? r
      : r instanceof ArrayBuffer
        ? new Uint8Array(r)
        : null;
  } catch {
    return null;
  }
}
async function h(e) {
  let t = await u();
  try {
    return await new Promise((n, r) => {
      let i = [],
        a = t
          .transaction(`replays`, `readonly`)
          .objectStore(`replays`)
          .openCursor();
      ((a.onsuccess = () => {
        let t = a.result;
        if (!t) return n(i);
        let r = t.value,
          o =
            r instanceof Uint8Array
              ? r
              : r instanceof ArrayBuffer
                ? new Uint8Array(r)
                : null;
        (o &&
          o.byteLength > e &&
          typeof t.key == `string` &&
          t.key.startsWith(`pb:`) &&
          i.push({ key: t.key, bytes: o }),
          t.continue());
      }),
        (a.onerror = () => r(a.error)));
    });
  } finally {
    t.close();
  }
}
function g(e, t, n = `application/octet-stream`) {
  let r = URL.createObjectURL(new Blob([e], { type: n })),
    i = document.createElement(`a`);
  ((i.href = r),
    (i.download = t),
    document.body.appendChild(i),
    i.click(),
    i.remove(),
    setTimeout(() => URL.revokeObjectURL(r), 5e3));
}
export {
  p as a,
  n as c,
  m as i,
  i as l,
  c as n,
  l as o,
  h as r,
  a as s,
  g as t,
};
