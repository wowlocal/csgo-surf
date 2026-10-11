function e(e, n, ...r) {
  let i = /^([a-z0-9]+)([.#].*)?$/i.exec(e),
    a = document.createElement(i[1]);
  for (let e of (i[2] ?? ``).match(/[.#][^.#]+/g) ?? [])
    e[0] === `.` ? a.classList.add(e.slice(1)) : (a.id = e.slice(1));
  if (n)
    for (let [e, t] of Object.entries(n))
      t != null &&
        t !== !1 &&
        (e.startsWith(`on`) && typeof t == `function`
          ? a.addEventListener(e.slice(2), t)
          : e === `class`
            ? (a.className += (a.className ? ` ` : ``) + t)
            : e === `text`
              ? (a.textContent = String(t))
              : e === `html`
                ? (a.innerHTML = String(t))
                : e in a && typeof t != `string`
                  ? (a[e] = t)
                  : a.setAttribute(e, t === !0 ? `` : String(t)));
  return (t(a, r), a);
}
function t(e, t) {
  for (let n of t)
    n != null && n !== !1 && e.append(typeof n == `number` ? String(n) : n);
}
function n(e, ...n) {
  (e.replaceChildren(), t(e, n));
}
var r = () => new Promise((e) => requestAnimationFrame(() => e())),
  i = async () => {
    (await r(), await r());
  };
function a(e) {
  return e == null || !isFinite(e)
    ? `—`
    : e >= 1 << 20
      ? `${(e / (1 << 20)).toFixed(e >= 100 << 20 ? 0 : 1)} MB`
      : `${Math.max(1, Math.round(e / 1024))} KB`;
}
function o(e, t, n = {}) {
  e.addEventListener(`keydown`, (r) => {
    if (
      ![
        `ArrowUp`,
        `ArrowDown`,
        `ArrowLeft`,
        `ArrowRight`,
        `Home`,
        `End`,
      ].includes(r.key)
    )
      return;
    let i = [...e.querySelectorAll(t)].filter(
        (e) => e.offsetParent !== null && !e.disabled,
      ),
      a = i.indexOf(document.activeElement);
    if (a < 0) return;
    let o = 1;
    if (n.grid && i.length > 1) {
      let e = (e) => Math.round(e.getBoundingClientRect().top),
        t = e(i[0]);
      ((o = i.findIndex((n) => e(n) !== t)), o <= 0 && (o = i.length));
    }
    let s = a;
    if (
      ((s =
        r.key === `Home`
          ? 0
          : r.key === `End`
            ? i.length - 1
            : n.grid
              ? r.key === `ArrowLeft`
                ? a - 1
                : r.key === `ArrowRight`
                  ? a + 1
                  : r.key === `ArrowUp`
                    ? a - o
                    : a + o
              : r.key === `ArrowUp` || r.key === `ArrowLeft`
                ? a - 1
                : a + 1),
      s < 0 || s >= i.length)
    ) {
      if (s < 0 && (r.key === `ArrowUp` || r.key === `Home`)) return;
      s = Math.max(0, Math.min(i.length - 1, s));
    }
    (r.preventDefault(),
      i[s].focus(),
      i[s].scrollIntoView({ block: `nearest` }));
  });
}
export { e as a, a as i, o as n, n as r, i as t };
