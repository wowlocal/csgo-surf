const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/replay-CmIHMHj9.js",
      "assets/replay-B40kiN_v.js",
      "assets/core-GuI4LXND.js",
      "assets/styles-DzitlxVO.js",
      "assets/loadout-DopA3xcw.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper-DjzSQ1t3.js";
import { i as t, r as n } from "./api-B2Jj-kgC.js";
import { a as r } from "./dom-CUDFsJPS.js";
import {
  l as i,
  m as a,
  r as o,
  t as s,
  u as c,
  x as l,
} from "./styles-DzitlxVO.js";
import { t as u } from "./avatar-kqcwn86P.js";
import { a as d, i as f } from "./marks-Brbs1gDc.js";
import { t as p } from "./nav-IlBYMvil.js";
import { c as m, n as h } from "./pb-CeYyg6BU.js";
var g = null,
  _ = `bunnyhop:pending-replay`;
function v(e) {
  let t = ``;
  for (let n = 0; n < e.length; n += 32768)
    t += String.fromCharCode(...e.subarray(n, n + 32768));
  return btoa(t);
}
function y(e) {
  sessionStorage.setItem(_, v(e));
}
function b() {
  let e = sessionStorage.getItem(_);
  return (
    sessionStorage.removeItem(_),
    e ? Uint8Array.from(atob(e), (e) => e.charCodeAt(0)) : null
  );
}
function x(e, t) {
  if (`runId` in e) return `/replay/${encodeURIComponent(e.runId)}`;
  let n = new URL(`/`, location.href);
  if (`bytes` in e)
    return (
      y(e.bytes),
      t && n.searchParams.set(`map`, t),
      n.searchParams.set(`replay`, `pending`),
      n.pathname + n.search
    );
  let r = e.pb === !0 ? null : e.pb,
    i = r?.map ?? t ?? new URLSearchParams(location.search).get(`map`);
  return (
    i && n.searchParams.set(`map`, i),
    n.searchParams.set(`replay`, `pb`),
    r?.style && n.searchParams.set(`style`, r.style),
    r?.track && n.searchParams.set(`track`, String(r.track)),
    n.pathname + n.search
  );
}
function S(t, n = {}) {
  let r = { target: t, compare: n.compare };
  if (g) {
    g(r);
    return;
  }
  if (`bytes` in t) {
    e(
      async () => {
        let { decodeReplay: e } = await import(`./replay-CmIHMHj9.js`);
        return { decodeReplay: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4]),
    ).then(async ({ decodeReplay: e }) => {
      let n;
      try {
        n = (await e(t.bytes)).header.map;
      } catch {}
      location.href = x(t, n);
    });
    return;
  }
  location.href = x(t);
}
function C(e) {
  return (
    (g = e),
    () => {
      g === e && (g = null);
    }
  );
}
function w(e = location) {
  let t = /^\/replay\/([^/?#]+)\/?$/.exec(e.pathname);
  if (t) return { target: { runId: decodeURIComponent(t[1]) } };
  let n = new URLSearchParams(e.search),
    r = n.get(`replay`);
  if (!r) return null;
  let i = n.has(`track`) ? Number(n.get(`track`)) || 0 : void 0;
  return r === `pb`
    ? { target: { pb: !0 }, style: n.get(`style`) ?? void 0, track: i }
    : r === `pending`
      ? { target: `pending` }
      : r.startsWith(`run:`)
        ? { target: { runId: decodeURIComponent(r.slice(4)) } }
        : { target: { url: r } };
}
var T = `http://www.w3.org/2000/svg`,
  E = (e) => [`p`, e],
  D = (e, t, n) => [`c`, e, t, n],
  O = {
    mouse: [
      E(
        `M10 2.5C7.6 2.5 6 4.1 6 6.5V13C6 15.6 7.7 17.5 10 17.5S14 15.6 14 13V6.5C14 4.1 12.4 2.5 10 2.5Z`,
      ),
      E(`M10 5.5V8`),
    ],
    crosshair: [
      E(`M10 2V6.5M10 13.5V18M2 10H6.5M13.5 10H18`),
      E(`M9.5 9.5H10.5V10.5H9.5Z`),
    ],
    hud: [
      E(
        `M2.5 6.5V2.5H6.5M13.5 2.5H17.5V6.5M17.5 13.5V17.5H13.5M6.5 17.5H2.5V13.5`,
      ),
      E(`M7 12.5H13M8.5 8.5H11.5`),
    ],
    keys: [
      E(`M2 5H18V15H2Z`),
      E(`M5 8.5H6M9.5 8.5H10.5M14 8.5H15M6.5 11.5H13.5`),
    ],
    ghost: [
      E(
        `M4.5 17.5V9A5.5 5.5 0 0 1 15.5 9V17.5L13.6 15.8L11.8 17.5L10 15.8L8.2 17.5L6.4 15.8Z`,
      ),
      E(`M8 8.5V10M12 8.5V10`),
    ],
    graphics: [E(`M2.5 3.5H17.5V13.5H2.5Z`), E(`M10 13.5V17M6.5 17H13.5`)],
    viewmodel: [
      E(`M3 17L7.6 7.9L12.1 12.4Z`),
      E(`M9.85 10.15L15.5 4.5M12.7 7.3L12.7 2.5M12.7 7.3L17.5 7.3`),
      E(`M5.6 13.4L6.9 14.7M7 10.6L8.3 11.9`),
    ],
    audio: [
      E(`M3 7.5H6L10 4V16L6 12.5H3Z`),
      E(`M13 7.5A3.5 3.5 0 0 1 13 12.5M15.3 5A7 7 0 0 1 15.3 15`),
    ],
    account: [
      D(10, 6.6, 3.1),
      E(`M3.9 17.2C4.9 14.2 7.3 12.5 10 12.5S15.1 14.2 16.1 17.2`),
    ],
    tune: [
      E(`M2.5 6H7M11 6H17.5M2.5 14H11M15 14H17.5`),
      D(9, 6, 2),
      D(13, 14, 2),
    ],
    search: [D(8.5, 8.5, 5.2), E(`M12.4 12.4L17 17`)],
    close: [E(`M5 5L15 15M15 5L5 15`)],
    info: [D(10, 10, 7.25), E(`M10 9V14M10 6.25V6.75`)],
    reset: [E(`M4.2 7.6A6.2 6.2 0 1 1 3.8 10.6`), E(`M3.5 3.5V7.75H7.75`)],
    export: [
      E(`M10 12.5V2.5`),
      E(`M6.25 6.25L10 2.5L13.75 6.25`),
      E(`M3 12V17H17V12`),
    ],
    import: [
      E(`M10 2.5V12.5`),
      E(`M6.25 8.75L10 12.5L13.75 8.75`),
      E(`M3 12V17H17V12`),
    ],
    copy: [E(`M7 7H17V17H7Z`), E(`M13 7V3H3V13H7`)],
    file: [E(`M4.5 2.5H11.5L15.5 6.5V17.5H4.5Z`), E(`M11.5 2.5V6.5H15.5`)],
    check: [E(`M4 10.5L8 14.5L16 5.5`)],
    chevronRight: [E(`M7.5 4.5L13 10L7.5 15.5`)],
    undo: [E(`M7.5 4L3.5 8L7.5 12`), E(`M3.5 8H12A4.5 4.5 0 0 1 12 17H8`)],
    warn: [E(`M10 2.5L18 17H2Z`), E(`M10 8V12M10 14.25V14.75`)],
    star: [
      E(
        `M10 2.8L11.94 7.93L17.42 8.19L13.14 11.62L14.58 16.91L10 13.9L5.42 16.91L6.86 11.62L2.58 8.19L8.06 7.93Z`,
      ),
    ],
    leave: [E(`M11 3H16.5V17H11`), E(`M13 10H3.5`), E(`M7 6.5L3.5 10L7 13.5`)],
  };
Object.keys(O);
function k(e, t = {}) {
  let n = O[e] ?? O.tune,
    r = document.createElementNS(T, `svg`),
    i = t.size ?? `1em`,
    a = {
      class: `icon${t.cls ? ` ${t.cls}` : ``}`,
      viewBox: `0 0 20 20`,
      width: i,
      height: i,
      fill: `none`,
      stroke: `currentColor`,
      "stroke-width": `1.7`,
      "stroke-linecap": `square`,
      "stroke-linejoin": `miter`,
      focusable: `false`,
    };
  for (let [e, t] of Object.entries(a)) r.setAttribute(e, t);
  if (t.title) {
    (r.setAttribute(`role`, `img`), r.setAttribute(`aria-label`, t.title));
    let e = document.createElementNS(T, `title`);
    ((e.textContent = t.title), r.append(e));
  } else r.setAttribute(`aria-hidden`, `true`);
  for (let e of n) {
    let t =
      e[0] === `p`
        ? document.createElementNS(T, `path`)
        : document.createElementNS(T, `circle`);
    (e[0] === `p`
      ? t.setAttribute(`d`, e[1])
      : (t.setAttribute(`cx`, String(e[1])),
        t.setAttribute(`cy`, String(e[2])),
        t.setAttribute(`r`, String(e[3]))),
      r.append(t));
  }
  return r;
}
var A = {
  mouse: `mouse`,
  crosshair: `crosshair`,
  hud: `hud`,
  keys: `keys`,
  ghost: `ghost`,
  graphics: `graphics`,
  viewmodel: `viewmodel`,
  audio: `audio`,
  account: `account`,
};
function j(e, t) {
  return k(t ?? A[e] ?? `tune`);
}
var M = 3e4,
  N = 3;
function ee(e, t, n = 7) {
  if (t <= n) return Array.from({ length: t }, (e, t) => t + 1);
  let r = n - 2,
    i = r - 2,
    a = e - Math.floor((i - 1) / 2),
    o = a + i - 1;
  a <= 3 ? ([a, o] = [2, r]) : o >= t - 2 && ([a, o] = [t - r + 1, t - 1]);
  let s = [1];
  a > 2 && s.push(null);
  for (let e = a; e <= o; e++) s.push(e);
  return (o < t - 1 && s.push(null), s.push(t), s);
}
var te = (e) =>
  e instanceof HTMLElement &&
  (e.matches(`input, textarea, select`) || e.isContentEditable);
function P(e) {
  let t = r(`div.rb-controls`),
    n = r(`input.rb-q`, {
      type: `search`,
      placeholder: `Find a player`,
      "aria-label": `Find a player on this board`,
      spellcheck: `false`,
      autocomplete: `off`,
      maxlength: 32,
      role: `combobox`,
      "aria-expanded": `false`,
      "aria-autocomplete": `list`,
    }),
    i = r(`ul.rb-sugg`, {
      role: `listbox`,
      hidden: !0,
      "aria-label": `Matching players`,
    }),
    a = r(
      `div.rb-search`,
      null,
      r(`span.rb-q-icon`, { "aria-hidden": `true` }, k(`search`)),
      n,
      e.keys === `global`
        ? r(`kbd.rb-q-kbd`, { "aria-hidden": `true` }, `/`)
        : null,
      i,
    ),
    o = r(
      `button.btn.btn-sm.rb-jump`,
      { type: `button`, hidden: !0, title: `Go to the page with your row` },
      `Jump to me`,
      r(`span.rb-jump-rank`),
    ),
    s = r(`div.rb-meta`),
    c = r(`thead`),
    l = r(`tbody.rb-pins`),
    u = r(`tbody.rb-rows`),
    d = r(`tfoot.rb-you`),
    f = r(`table.rb-table`, { "aria-label": e.label }, c, l, u, d),
    p = r(`div.rb-frame`, null, f),
    m = r(`span.rb-range`),
    h = r(`nav.rb-pager`, { "aria-label": `Pages` }),
    g = r(
      `span.rb-keys`,
      { "aria-hidden": `true` },
      ...(e.keys === `global`
        ? [r(`kbd`, null, `←`), r(`kbd`, null, `→`), ` pages`]
        : [r(`kbd`, null, `PgUp`), r(`kbd`, null, `PgDn`), ` pages`]),
    ),
    _ = r(
      `div.rb`,
      null,
      r(`div.rb-bar`, null, t, r(`div.rb-tools`, null, a, o)),
      s,
      p,
      r(`footer.rb-foot`, null, m, h, g),
    );
  c.append(e.head());
  let v = null,
    y = 0,
    b = 1,
    x = null,
    S = null,
    C = 0,
    w = null,
    T = 0,
    E = new Map(),
    D = (t) => Math.max(1, Math.ceil(Math.max(0, t - e.base) / y)),
    O = (t) => e.base + (t - 1) * y,
    A = (t) => (t < e.base ? 1 : Math.floor((t - e.base) / y) + 1);
  function j(e, t) {
    let n = v,
      r = `${n.key}|${y}|${e}`,
      i = E.get(r);
    if (i && performance.now() - i.at < M) return i.p;
    let a = n.load({ offset: O(e), limit: y }, t);
    return (
      E.set(r, { at: performance.now(), p: a }),
      a.catch(() => E.delete(r)),
      a
    );
  }
  function P(e) {
    let t = v && E.get(`${v.key}|${y}|${e}`);
    return !!t && performance.now() - t.at < M;
  }
  function F(e) {
    !x || e < 1 || e > D(x.total) || P(e) || j(e).catch(() => {});
  }
  function I() {
    let t = p.clientHeight - c.getBoundingClientRect().height,
      n =
        u.querySelector(`tr.rb-row, tr.rb-skel`) ??
        l.querySelector(`tr.rb-row`),
      r = null;
    n ||= ((r = L()), u.append(r), r);
    let i = n.getBoundingClientRect().height;
    r?.remove();
    let a = getComputedStyle(f).borderSpacing.split(` `),
      o = parseFloat(a[1] ?? a[0]) || 0;
    if (!i || t <= 0) return y || 10;
    let s = Math.floor((t - o) / (i + o)) - e.base - 1;
    return (p.classList.toggle(`tight`, s < N), Math.max(N, s));
  }
  function L() {
    return r(
      `tr.rb-skel`,
      { "aria-hidden": `true` },
      ...Array.from({ length: e.cols }, () => r(`td`, null, r(`span.rb-sk`))),
    );
  }
  let R = (t, n) => (t.classList.add(`rb-row`), (t.dataset.id = e.idOf(n)), t);
  function z(t) {
    ((x = t), f.classList.remove(`is-empty`));
    let n = t.me ? e.idOf(t.me) : null,
      i = t.pinned[0] ?? (t.offset === 0 ? t.entries[0] : null) ?? null,
      a = t.pinned.map((r, a) =>
        R(
          e.row(r, {
            prev: t.pinned[a - 1] ?? null,
            first: i,
            mine: e.idOf(r) === n,
            found: e.idOf(r) === S,
            pinned: !0,
          }),
          r,
        ),
      );
    l.replaceChildren(...a);
    let c = t.pinned[t.pinned.length - 1] ?? null,
      p = t.entries.map((r, a) => {
        let o = a
          ? t.entries[a - 1]
          : (t.above ?? (t.offset === e.base ? c : null));
        return R(
          e.row(r, {
            prev: o,
            first: i,
            mine: e.idOf(r) === n,
            found: e.idOf(r) === S,
            pinned: !1,
          }),
          r,
        );
      });
    (u.replaceChildren(...p),
      T &&
        (u.classList.remove(`slide-l`, `slide-r`),
        u.offsetWidth,
        u.classList.add(T > 0 ? `slide-l` : `slide-r`)));
    let m =
        !!n &&
        (t.entries.some((t) => e.idOf(t) === n) ||
          t.pinned.some((t) => e.idOf(t) === n)),
      h;
    if (t.me && !m)
      ((h = R(
        e.row(t.me, {
          prev: null,
          first: i,
          mine: !0,
          found: S === n,
          pinned: !0,
        }),
        t.me,
      )),
        h.classList.add(`rb-you-row`));
    else {
      let n = e.you(t, m);
      h = n ? r(`tr.rb-you-note`, null, r(`td`, { colspan: e.cols }, n)) : null;
    }
    (d.replaceChildren(...(h ? [h] : [])),
      s.replaceChildren(e.meta(t)),
      B(t),
      (o.hidden = !t.me),
      (o.querySelector(`.rb-jump-rank`).textContent = t.me
        ? `#${e.rankOf(t.me)}`
        : ``),
      o.setAttribute(
        `aria-label`,
        t.me ? `Jump to your row, rank ${e.rankOf(t.me)}` : `Jump to me`,
      ),
      (S = null));
  }
  function B(t) {
    let n = D(t.total),
      i = t.offset <= e.base ? 1 : t.offset + 1,
      a = Math.min(t.total, t.offset + t.entries.length);
    m.textContent = t.total
      ? `${i}–${a} of ${t.total.toLocaleString(`en-US`)}`
      : ``;
    let o = (e, t, n = {}) =>
        r(
          `button.rb-pg${n.cls ? `.` + n.cls : ``}${n.on ? `.on` : ``}`,
          {
            type: `button`,
            disabled: n.disabled,
            "aria-label": n.aria,
            "aria-current": n.on ? `page` : null,
            "data-page": t,
            onclick: () => U(t),
          },
          e,
        ),
      s = (e, t = !1) =>
        r(
          `span.rb-chev${e ? `.flip` : ``}`,
          { "aria-hidden": `true` },
          k(`chevronRight`),
          t ? k(`chevronRight`) : null,
        ),
      c = p.clientWidth < 560 ? 5 : 7,
      l = h.contains(document.activeElement);
    (h.replaceChildren(
      o(s(!0, !0), 1, { cls: `edge`, aria: `First page`, disabled: b <= 1 }),
      o(s(!0), b - 1, { cls: `edge`, aria: `Previous page`, disabled: b <= 1 }),
      ...ee(b, n, c).map((e) =>
        e === null
          ? r(`span.rb-ell`, { "aria-hidden": `true` }, `…`)
          : o(String(e), e, { on: e === b, aria: `Page ${e}` }),
      ),
      o(s(!1), b + 1, { cls: `edge`, aria: `Next page`, disabled: b >= n }),
      o(s(!1, !0), n, { cls: `edge`, aria: `Last page`, disabled: b >= n }),
    ),
      (h.hidden = g.hidden = n <= 1),
      l && h.querySelector(`.rb-pg.on`)?.focus({ preventScroll: !0 }));
  }
  function V(t, n, i = ``) {
    (f.classList.add(`is-empty`),
      u.replaceChildren(
        r(
          `tr.rb-state-row`,
          null,
          r(
            `td`,
            { colspan: e.cols },
            r(
              `div.rb-state.${t}`,
              null,
              r(`strong`, null, n),
              i ? r(`span`, null, i) : null,
            ),
          ),
        ),
      ),
      l.replaceChildren(),
      d.replaceChildren());
  }
  function H() {
    (f.classList.remove(`is-empty`),
      u.replaceChildren(...Array.from({ length: y }, L)),
      x || l.replaceChildren(...Array.from({ length: e.base }, L)));
  }
  async function U(t, n = {}) {
    if (!v) return;
    ((y ||= I()),
      x && !n.around && (t = Math.min(Math.max(1, t), D(x.total))),
      (t = Math.max(1, t)),
      (T = n.quiet || !x ? 0 : Math.sign(t - b)));
    let i = ++C;
    (w?.abort(), (w = new AbortController()));
    let a = v;
    (n.around || !P(t)) && H();
    try {
      let c;
      if (
        (n.around
          ? ((c = await a.load(
              { offset: e.base, limit: y, around: n.around },
              w.signal,
            )),
            E.set(`${a.key}|${y}|${A(c.offset)}`, {
              at: performance.now(),
              p: Promise.resolve(c),
            }))
          : (c = await j(t, w.signal)),
        i !== C || a !== v)
      )
        return;
      if (((b = A(c.offset)), c.total)) z(c);
      else {
        ((x = c),
          f.classList.add(`is-empty`),
          u.replaceChildren(
            r(`tr.rb-state-row`, null, r(`td`, { colspan: e.cols }, e.empty())),
          ),
          l.replaceChildren());
        let t = e.you(c, !1);
        (d.replaceChildren(
          ...(t
            ? [r(`tr.rb-you-note`, null, r(`td`, { colspan: e.cols }, t))]
            : []),
        ),
          s.replaceChildren(e.meta(c)),
          B(c),
          (o.hidden = !0));
      }
      (e.onPage?.(b), F(b + 1), F(b - 1), n.around && W(n.around));
    } catch (t) {
      if (i !== C || t?.name === `AbortError`) return;
      let n = e.error?.(t) ?? {
        cls: `error`,
        title: `Couldn't load this page`,
        text: String(t?.message ?? t),
      };
      V(n.cls, n.title, n.text);
    }
  }
  function W(e) {
    f.querySelector(`tr[data-id="${CSS.escape(e)}"]`)
      ?.querySelector(`button.rb-name`)
      ?.focus({ preventScroll: !0 });
  }
  function G(e) {
    ((S = e), U(b, { around: e }));
  }
  o.addEventListener(`click`, () => {
    if (!x?.me) return;
    let t = e.idOf(x.me);
    if (
      x.entries.some((n) => e.idOf(n) === t) ||
      x.pinned.some((n) => e.idOf(n) === t)
    ) {
      let e =
        u.querySelector(`tr[data-id="${CSS.escape(t)}"]`) ??
        l.querySelector(`tr[data-id="${CSS.escape(t)}"]`);
      (e?.classList.remove(`found`), e?.offsetWidth, e?.classList.add(`found`));
      return;
    }
    G(t);
  });
  let K = 0,
    q = null,
    J = 0,
    Y = -1,
    X = [],
    Z = () => {
      ((i.hidden = !0), n.setAttribute(`aria-expanded`, `false`), (Y = -1));
    },
    Q = (e) => {
      ((Y = e),
        i
          .querySelectorAll(`li`)
          .forEach((t, n) => t.classList.toggle(`on`, n === e)),
        e >= 0
          ? n.setAttribute(`aria-activedescendant`, `rb-s-${e}`)
          : n.removeAttribute(`aria-activedescendant`));
    },
    ne = (t) => {
      ((n.value = ``), Z(), G(e.idOf(t)));
    };
  async function re() {
    let t = n.value.trim(),
      a = ++K;
    if ((q?.abort(), !t || !v)) return Z();
    q = new AbortController();
    try {
      let o = await v.search(t, q.signal);
      if (a !== K) return;
      ((X = o.entries.slice(0, 8)),
        i.replaceChildren(
          ...(X.length
            ? X.map((t, n) =>
                r(
                  `li`,
                  {
                    id: `rb-s-${n}`,
                    role: `option`,
                    onmousedown: (e) => (e.preventDefault(), ne(t)),
                  },
                  r(`span.rb-s-rank`, null, `#${e.rankOf(t)}`),
                  r(`span.rb-s-name`, null, e.nameOf(t)),
                  r(`span.rb-s-val`, null, e.valueOf(t)),
                ),
              )
            : [
                r(
                  `li.rb-s-none`,
                  { role: `presentation` },
                  `No player matching "${t}" on this board`,
                ),
              ]),
          ...(o.matches > X.length
            ? [
                r(
                  `li.rb-s-more`,
                  { role: `presentation` },
                  `${o.matches - X.length} more, keep typing`,
                ),
              ]
            : []),
        ),
        (i.hidden = !1),
        n.setAttribute(`aria-expanded`, `true`),
        Q(X.length ? 0 : -1));
    } catch {}
  }
  (n.addEventListener(`input`, () => {
    (clearTimeout(J), (J = window.setTimeout(() => void re(), 160)));
  }),
    n.addEventListener(`keydown`, (e) => {
      if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
        if (i.hidden || !X.length) return;
        (e.preventDefault(),
          Q((Y + (e.key === `ArrowDown` ? 1 : -1) + X.length) % X.length));
      } else if (e.key === `Enter`)
        (e.preventDefault(), X[Y] && !i.hidden && ne(X[Y]));
      else if (e.key === `Escape`) {
        if (!n.value && i.hidden) return n.blur();
        (e.preventDefault(), e.stopPropagation(), (n.value = ``), Z());
      }
    }),
    n.addEventListener(`blur`, () => setTimeout(Z, 120)),
    n.addEventListener(`focus`, () => {
      n.value.trim() &&
        X.length &&
        ((i.hidden = !1), n.setAttribute(`aria-expanded`, `true`));
    }));
  let ie = (e) => {
      if (!x) return !1;
      let t = D(x.total),
        n =
          e.key === `ArrowLeft` || e.key === `PageUp`
            ? b - 1
            : e.key === `ArrowRight` || e.key === `PageDown`
              ? b + 1
              : e.key === `Home`
                ? 1
                : e.key === `End`
                  ? t
                  : null;
      return (
        n !== null &&
        (e.preventDefault(), n >= 1 && n <= t && n !== b && U(n), !0)
      );
    },
    ae = (t) => {
      if (!_.isConnected) return removeEventListener(`keydown`, ae, !0);
      if (
        t.ctrlKey ||
        t.metaKey ||
        t.altKey ||
        te(t.target) ||
        !_.offsetParent ||
        t.target.closest?.(`.rb-pager`)
      )
        return;
      let r = document.querySelector(`dialog[open]`);
      if (r && !r.contains(_)) return;
      if (e.keys === `global` && t.key === `/`) {
        (t.preventDefault(), n.focus());
        return;
      }
      let i = t.target.closest?.(`[role=tablist], .seg`);
      (t.key === `PageUp` ||
        t.key === `PageDown` ||
        (e.keys === `global` &&
          !i &&
          [`ArrowLeft`, `ArrowRight`, `Home`, `End`].includes(t.key))) &&
        ie(t);
    };
  (addEventListener(`keydown`, ae, !0),
    h.addEventListener(`keydown`, (e) => {
      [`ArrowLeft`, `ArrowRight`, `Home`, `End`, `PageUp`, `PageDown`].includes(
        e.key,
      ) && (e.stopPropagation(), ie(e));
    }));
  let $ = null,
    oe = () => {
      let e = $;
      (($ = null), (y = I()), U(e.page ?? 1, { around: e.around, quiet: !0 }));
    },
    se = 0;
  return (
    new ResizeObserver(() => {
      if ($ && p.clientHeight > 0) return oe();
      (clearTimeout(se),
        (se = window.setTimeout(() => {
          if (!v || !_.isConnected || !p.clientHeight || $) return;
          let t = I();
          if (t === y) return x && B(x);
          let n = x ? x.offset : e.base;
          ((y = t), U(A(n), { quiet: !0 }));
        }, 120)));
    }).observe(p),
    {
      root: _,
      controls: t,
      show(e, t = {}) {
        let n = v?.key === e.key;
        ((v = e),
          n || (x = null),
          ($ = t),
          _.isConnected && p.clientHeight > 0 && oe());
      },
      page: () => b,
    }
  );
}
function F(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = (t * 31 + e.charCodeAt(n)) >>> 0;
  return t % 360;
}
function I(e, t, n = []) {
  let i = () =>
      r(
        `span.rb-av`,
        { "aria-hidden": `true`, style: `--hue:${F(e.id)}` },
        (e.name.trim()[0] ?? `?`).toUpperCase(),
      ),
    a = e.avatarUrl ? u(e.avatarUrl, { cls: `rb-av`, px: 24, letter: i }) : i(),
    o = [...n, e.provider === `guest` ? `guest` : ``].filter(Boolean);
  return r(
    `td.rb-player`,
    null,
    r(
      `div.rb-pwrap`,
      null,
      a,
      r(
        `button.rb-name`,
        { type: `button`, title: `${e.name}'s profile`, onclick: t, ...f(e) },
        e.name,
      ),
      d(e),
      o.length
        ? r(
            `span.rb-sub`,
            {
              title:
                e.provider === `guest`
                  ? `Guest players haven't linked an account`
                  : null,
            },
            o.join(` · `),
          )
        : null,
    ),
  );
}
var L = 6e4,
  R = 864e5;
function z(e, t = Date.now()) {
  let n = Date.parse(e);
  if (!Number.isFinite(n) || n <= 0) return ``;
  let r = t - n;
  return r < L
    ? `just now`
    : r < 60 * L
      ? `${Math.floor(r / L)} min ago`
      : r < R
        ? `${Math.floor(r / (60 * L))} h ago`
        : r < 2 * R
          ? `yesterday`
          : r < 14 * R
            ? `${Math.floor(r / R)} d ago`
            : new Date(n).toLocaleDateString(void 0, {
                day: `numeric`,
                month: `short`,
                year:
                  new Date(n).getFullYear() === new Date(t).getFullYear()
                    ? void 0
                    : `numeric`,
              });
}
function B(e) {
  let t = Date.parse(e);
  return Number.isFinite(t) && t > 0
    ? new Date(t).toLocaleString(void 0, {
        dateStyle: `medium`,
        timeStyle: `short`,
      })
    : ``;
}
function V(e) {
  let t = Math.max(0, Math.round(e * 1e3)),
    n = Math.floor(t / 6e4),
    r = ((t % 6e4) / 1e3).toFixed(3);
  return n ? `+${n}:${r.padStart(6, `0`)}` : `+${r}`;
}
var H = (e) => (e.physics ? `Physics v${e.physics}` : ``),
  U = (e, t) => ({
    total: e.total,
    offset: e.offset ?? t,
    entries: e.entries,
    me: e.me,
    pinned: e.wr ? [e.wr] : [],
    above: null,
  });
function W(e, u, d = {}) {
  let f = (d.tracks ?? [0]).length ? (d.tracks ?? [0]) : [0],
    g = f.includes(d.track ?? 0) ? (d.track ?? 0) : 0,
    _ = u,
    v = () => i(_, g),
    y = (e) => d.trackNames?.[e] ?? l(e),
    b = () => `${g || d.trackNames?.[g] ? y(g) + ` · ` : ``}${c(v())}`,
    x =
      d.onRace ??
      ((e, t) =>
        m({
          kind: `run`,
          runId: e.runId,
          name: `#${e.rank} · ${e.player.name}`,
          track: t,
          time: e.time,
        })),
    C = () => {
      let t = h(e, v(), g);
      return t
        ? r(
            `span`,
            null,
            `Your local PB `,
            r(`b`, null, a(t.time)),
            ` · ${t.jumps} jumps · ${t.sync.toFixed(1)}% sync`,
          )
        : r(`span`, null, `No local ${b()} PB on this map yet`);
    },
    w = P({
      base: 1,
      cols: 8,
      label: `${e} leaderboard`,
      keys: d.keys ?? `local`,
      head: () =>
        r(
          `tr`,
          null,
          r(`th.rb-rank`, { scope: `col` }, `#`),
          r(`th`, { scope: `col` }, `Player`),
          r(`th.num`, { scope: `col` }, `Time`),
          r(`th.num.rb-opt3`, { scope: `col` }, `Gap`),
          r(`th.num.rb-opt`, { scope: `col` }, `Jumps`),
          r(`th.num.rb-opt`, { scope: `col` }, `Sync`),
          r(`th.rb-opt2`, { scope: `col` }, `Date`),
          r(
            `th.rb-opt3`,
            { scope: `col` },
            r(`span.sr-only`, null, `Watch or race`),
          ),
        ),
      row: (e, t) => {
        let n = g,
          i = `#${e.rank} · ${e.player.name}`,
          o =
            t.first && e.runId !== t.first.runId
              ? r(
                  `span.rb-gap`,
                  {
                    title: `${V(e.time - t.first.time).slice(1)} behind the world record`,
                  },
                  V(e.time - t.first.time),
                )
              : e.rank === 1
                ? r(`span.rb-wr`, null, `WR`)
                : null;
        return r(
          `tr`,
          {
            class:
              [
                e.rank <= 3 ? `top${e.rank}` : ``,
                t.mine ? `me` : ``,
                t.found ? `found` : ``,
              ]
                .filter(Boolean)
                .join(` `) || null,
          },
          r(`td.rb-rank`, null, String(e.rank)),
          I(e.player, () => p({ screen: `profile`, id: e.player.id })),
          r(
            `td.num.rb-strong`,
            {
              title: [`${e.ticks.toLocaleString(`en-US`)} ticks`, H(e)]
                .filter(Boolean)
                .join(` · `),
            },
            a(e.time),
          ),
          r(`td.num.rb-opt3`, null, o),
          r(`td.num.dim.rb-opt`, null, String(e.jumps)),
          r(`td.num.dim.rb-opt`, null, `${e.sync.toFixed(1)}%`),
          r(`td.dim.rb-opt2`, { title: B(e.date) }, z(e.date)),
          r(
            `td.rb-acts.rb-opt3`,
            null,
            r(
              `button.link-btn`,
              {
                type: `button`,
                title: `Watch ${e.player.name}'s run in the replay viewer`,
                "aria-label": `Watch ${e.player.name}'s run`,
                onclick: () => S({ runId: e.runId, name: i }),
              },
              `Watch`,
            ),
            r(
              `button.link-btn`,
              {
                type: `button`,
                title: `Race ${e.player.name}'s run as a ghost`,
                "aria-label": `Race ${e.player.name}'s run as a ghost`,
                onclick: () => x(e, n),
              },
              `Race`,
            ),
          ),
        );
      },
      you: (e, t) =>
        t && e?.me
          ? r(
              `span`,
              null,
              `You're `,
              r(`b`, null, `#${e.me.rank}`),
              ` on this page · `,
              C(),
            )
          : C(),
      meta: (e) =>
        r(
          `span`,
          null,
          r(`b`, null, e.total.toLocaleString(`en-US`)),
          ` ${e.total === 1 ? `runner` : `runners`} · ${b()}`,
        ),
      empty: () =>
        r(
          `div.rb-state.empty`,
          null,
          r(`strong`, null, `No records yet`),
          r(`span`, null, `Finish a ${b()} run to set the first world record.`),
        ),
      error: (e) =>
        e instanceof n
          ? {
              cls: `offline`,
              title: `Leaderboards offline`,
              text: `Your runs are saved on this device until the server is back.`,
            }
          : {
              cls: `error`,
              title: `Couldn't load the leaderboard`,
              text: String(e?.message ?? e),
            },
      idOf: (e) => e.player.id,
      rankOf: (e) => e.rank,
      nameOf: (e) => e.player.name,
      valueOf: (e) => a(e.time),
    }),
    T = (e, t) =>
      r(
        `div.seg`,
        { role: `radiogroup`, "aria-label": e },
        ...t.map(([e, t, n, i, a]) =>
          r(
            `button${i ? `.on` : ``}`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": String(i),
              title: t,
              "data-key": n,
              onclick: a,
            },
            e,
          ),
        ),
      );
  function E() {
    let e = [];
    (f.length > 1 &&
      e.push(
        T(
          `Track`,
          f.map((e) => [
            y(e),
            e ? `${y(e)} (Normal style only)` : `Main track`,
            String(e),
            e === g,
            () => ((g = e), k()),
          ]),
        ),
      ),
      g === 0
        ? e.push(
            T(
              `Style`,
              o.map((e) => [
                e.name,
                e.rule,
                e.id,
                e.id === _,
                () => ((_ = e.id), d.onStyle?.(e.id), k()),
              ]),
            ),
          )
        : d.trackNames?.[g] ||
          e.push(r(`span.rb-only`, null, `${c(s)} only on bonus tracks`)));
    let t = document.activeElement?.closest(`.rb-controls`)
      ? document.activeElement.dataset.key
      : void 0;
    (w.controls.replaceChildren(...e),
      t !== void 0 &&
        w.controls
          .querySelector(`button.on[data-key="${CSS.escape(t)}"]`)
          ?.focus());
  }
  function D() {
    let n = v(),
      r = g;
    return {
      key: `${e}|${n}|${r}`,
      load: async (i, a) =>
        U(
          await t.leaderboard(e, n, { ...i, track: r }, { signal: a }),
          i.offset,
        ),
      search: async (i, a) => {
        let o = await t.leaderboard(
          e,
          n,
          { q: i, limit: 8, track: r },
          { signal: a },
        );
        return { entries: o.entries, matches: o.matches ?? o.entries.length };
      },
    };
  }
  let O = r(`div.leaderboard`);
  function k() {
    if ((E(), !t.available())) {
      O.replaceChildren(
        r(
          `div.rb-state.offline`,
          null,
          r(`strong`, null, `Leaderboards offline`),
          r(
            `span`,
            null,
            `Your runs are saved on this device until the server is back.`,
          ),
          r(`span.dim`, null, C()),
        ),
      );
      return;
    }
    (w.root.parentElement !== O && O.replaceChildren(w.root), w.show(D()));
  }
  return (k(), O);
}
function G(e, t, n = {}) {
  let i = r(`dialog.acct-dialog.rb-dialog`, {
    "aria-label": `${e} leaderboard`,
  });
  (i.addEventListener(`keydown`, (e) => {
    (e.stopPropagation(),
      e.key === `Escape` &&
        !e.defaultPrevented &&
        (e.preventDefault(), i.close()));
  }),
    i.addEventListener(`click`, (e) => {
      e.target === i && i.close();
    }),
    i.addEventListener(`close`, () => i.remove()));
  let a = r(
    `button.acct-close`,
    { type: `button`, "aria-label": `Close`, onclick: () => i.close() },
    `×`,
  );
  (i.append(
    r(
      `header.acct-head`,
      null,
      r(`h2`, null, `Leaderboard`, r(`small`, null, n.subtitle ?? e)),
      a,
    ),
    r(`div.rb-dialog-body`, null, W(e, t, { ...n, keys: `global` })),
  ),
    document.body.append(i),
    i.showModal());
}
export {
  I as a,
  C as c,
  w as d,
  x as f,
  P as i,
  S as l,
  G as n,
  k as o,
  V as r,
  j as s,
  W as t,
  b as u,
};
