import { a as e } from "./dom-CUDFsJPS.js";
import { t } from "./palettes-YJRmTQgw.js";
var n = {
    toast: { capacity: 3, stagger: 90, rest: 0, minShow: 900, maxWaiting: 6 },
    celebration: {
      capacity: 1,
      stagger: 0,
      rest: 380,
      minShow: 2200,
      maxWaiting: 12,
    },
    banner: {
      capacity: 1,
      stagger: 0,
      rest: 300,
      minShow: 1800,
      maxWaiting: 4,
    },
  },
  r = {
    info: 10,
    error: 30,
    achievement: 40,
    level: 50,
    unlock: 60,
    record: 80,
  },
  i = class {
    merge;
    rules;
    notes = [];
    seq = 0;
    ids = 0;
    running = !1;
    lastShow = { toast: -1 / 0, celebration: -1 / 0, banner: -1 / 0 };
    lastHide = { toast: -1 / 0, celebration: -1 / 0, banner: -1 / 0 };
    pending = [];
    minSeen = 1500;
    constructor(e = {}, t = (e, t) => t) {
      ((this.merge = t),
        (this.rules = {
          toast: { ...n.toast, ...e.toast },
          celebration: { ...n.celebration, ...e.celebration },
          banner: { ...n.banner, ...e.banner },
        }));
    }
    push(e, t) {
      let n = e.key ?? null,
        r =
          n === null
            ? void 0
            : this.notes.find(
                (t) => t.key === n && t.lane === e.lane && t.state !== `gone`,
              );
      if (r)
        return (
          r.count++,
          (r.data = this.merge(r.data, e.data, r.count)),
          (r.priority = Math.max(r.priority, e.priority ?? 0)),
          (r.ms = Math.max(r.ms, e.ms)),
          r.state === `shown` &&
            (r.held === null
              ? (r.until = Math.max(r.until ?? t, t + e.ms))
              : (r.held = Math.max(r.held, e.ms)),
            this.pending.push({ type: `update`, note: r })),
          { note: r, merged: !0, dropped: null }
        );
      let i = {
        id: ++this.ids,
        lane: e.lane,
        key: n,
        priority: e.priority ?? 0,
        ms: e.ms,
        defer: !!e.defer,
        data: e.data,
        count: 1,
        seq: ++this.seq,
        state: `waiting`,
        shownAt: null,
        until: null,
        held: null,
      };
      this.notes.push(i);
      let a = this.rules[i.lane],
        o = this.shown(i.lane);
      if (
        o.length >= a.capacity &&
        o.every((e) => e.priority < i.priority) &&
        (!i.defer || !this.running)
      ) {
        let e = o.reduce((e, t) =>
          t.priority < e.priority ||
          (t.priority === e.priority && t.seq < e.seq)
            ? t
            : e,
        );
        this.cut(e, t);
      }
      let s = null,
        c = this.waiting(i.lane);
      if (c.length > a.maxWaiting) {
        let e = Math.min(...c.map((e) => e.priority));
        ((s = c.find((t) => t.priority === e)),
          (s.state = `gone`),
          this.notes.splice(this.notes.indexOf(s), 1));
      }
      return { note: i, merged: !1, dropped: s };
    }
    setRunning(e, t) {
      if (e !== this.running && ((this.running = e), e)) {
        for (let e of this.notes)
          if (e.state === `shown` && e.defer) {
            if (t - (e.shownAt ?? t) < this.minSeen) {
              let n = e.held ?? Math.max(0, (e.until ?? t) - t);
              ((e.state = `waiting`),
                (e.ms = Math.max(n, this.minSeen)),
                (e.seq = -e.seq - 1e9),
                (e.shownAt = e.until = null),
                (e.held = null),
                (this.lastHide[e.lane] = t),
                this.pending.push({ type: `hide`, note: e }));
            } else e.until = t;
          }
      }
    }
    get isRunning() {
      return this.running;
    }
    setCapacity(e, t, n) {
      this.rules[e].capacity = t;
      let r = this.shown(e).sort(
        (e, t) => t.priority - e.priority || t.seq - e.seq,
      );
      for (let e of r.slice(t)) this.cut(e, n);
    }
    hold(e, t, n) {
      let r = this.notes.find((t) => t.id === e && t.state === `shown`);
      r &&
        (t && r.held === null
          ? ((r.held = Math.max(0, (r.until ?? n) - n)), (r.until = null))
          : !t &&
            r.held !== null &&
            ((r.until = n + Math.max(1e3, r.held)), (r.held = null)));
    }
    dismiss(e, t) {
      let n = this.notes.find((t) => t.id === e && t.state !== `gone`);
      if (n) {
        if (n.state === `waiting`) {
          ((n.state = `gone`), this.notes.splice(this.notes.indexOf(n), 1));
          return;
        }
        ((n.held = null), (n.until = t));
      }
    }
    step(e) {
      let t = this.pending;
      this.pending = [];
      for (let n of [...this.notes])
        n.state === `shown` &&
          n.until !== null &&
          n.until <= e &&
          ((n.state = `gone`),
          this.notes.splice(this.notes.indexOf(n), 1),
          (this.lastHide[n.lane] = e),
          t.push({ type: `hide`, note: n }));
      for (let n of [`banner`, `celebration`, `toast`]) {
        let r = this.rules[n];
        for (;;) {
          let i = this.waiting(n).find((e) => !e.defer || !this.running);
          if (
            !i ||
            this.shown(n).length >= r.capacity ||
            e < this.lastShow[n] + r.stagger ||
            e < this.lastHide[n] + r.rest
          )
            break;
          ((i.state = `shown`),
            (i.shownAt = e),
            (i.until = e + i.ms),
            (this.lastShow[n] = e),
            t.push({ type: `show`, note: i }));
        }
      }
      return t;
    }
    nextAt(e) {
      if (this.pending.length) return e;
      let t = 1 / 0;
      for (let e of this.notes)
        e.state === `shown` && e.until !== null && (t = Math.min(t, e.until));
      for (let n of [`banner`, `celebration`, `toast`]) {
        let r = this.rules[n];
        !this.waiting(n).find((e) => !e.defer || !this.running) ||
          this.shown(n).length >= r.capacity ||
          (t = Math.min(
            t,
            Math.max(
              e,
              this.lastShow[n] + r.stagger,
              this.lastHide[n] + r.rest,
            ),
          ));
      }
      return Number.isFinite(t) ? t : null;
    }
    shown(e) {
      return this.notes
        .filter((t) => t.lane === e && t.state === `shown`)
        .sort((e, t) => (e.shownAt ?? 0) - (t.shownAt ?? 0));
    }
    waiting(e) {
      return this.notes
        .filter((t) => t.lane === e && t.state === `waiting`)
        .sort((e, t) => t.priority - e.priority || e.seq - t.seq);
    }
    cut(e, t) {
      let n = this.rules[e.lane],
        r = Math.max(t, (e.shownAt ?? t) + n.minShow);
      e.held === null
        ? (e.until = Math.min(e.until ?? r, r))
        : ((e.held = null), (e.until = r));
    }
  },
  a = {
    pop: { stiffness: 520, damping: 28 },
    land: { stiffness: 420, damping: 26, mass: 1.1 },
    bouncy: { stiffness: 600, damping: 18 },
    calm: { stiffness: 400, damping: 40 },
  };
function o(e, t = 1e3 / 120, n = 0.001) {
  let r = e.mass ?? 1,
    i = 25e-5,
    a = Math.max(1, Math.round(t / 1e3 / i)),
    o = 0,
    s = 0,
    c = 0,
    l = [0];
  for (let u = 1; u * t <= 3e3; u++) {
    for (let t = 0; t < a; t++) {
      let t = (-e.stiffness * (o - 1) - e.damping * s) / r;
      ((s += t * i), (o += s * i));
    }
    if (
      ((c = Math.max(c, o)),
      l.push(o),
      Math.abs(1 - o) < n && Math.abs(s) < n * 10)
    )
      break;
  }
  return (
    (l[l.length - 1] = 1),
    {
      samples: l,
      dt: t,
      duration: (l.length - 1) * t,
      overshoot: Math.max(0, c - 1),
    }
  );
}
function s(e, t = 40) {
  let n = e.samples.length - 1,
    r = Math.max(1, Math.ceil(n / t)),
    i = [];
  for (let t = 0; t < n; t += r) i.push(c(e.samples[t]));
  return (i.push(`1`), `linear(${i.join(`, `)})`);
}
var c = (e) => String(Math.round(e * 1e4) / 1e4),
  l = `cubic-bezier(0.34, 1.45, 0.64, 1)`,
  u = new Map(),
  d = null;
function f(e, t = 1) {
  let n = u.get(e);
  if (!n) {
    let t = o(e),
      r = globalThis.CSS;
    ((d ??= !!r?.supports?.(
      `animation-timing-function`,
      `linear(0, 0.5 25%, 1)`,
    )),
      (n = { duration: Math.round(t.duration), easing: d ? s(t) : l }),
      u.set(e, n));
  }
  return t === 1
    ? n
    : { duration: Math.round(n.duration * t), easing: n.easing };
}
var p = `cubic-bezier(0.55, 0, 0.75, 0.3)`,
  m = `cubic-bezier(0.16, 1, 0.3, 1)`;
function h(e) {
  return Math.min(8e3, 2200 + Math.max(0, e.length - 12) * 55);
}
function g(e, t, n) {
  if (n >= 1) return t;
  let r = 1 - (1 - Math.max(0, n)) ** 4,
    i = e + (t - e) * r;
  return Math.round(i);
}
var _ = class {
    gap;
    step;
    maxSteps;
    reset;
    last = -1 / 0;
    n = 0;
    constructor(e = 70, t = 1.06, n = 10, r = 320) {
      ((this.gap = e), (this.step = t), (this.maxSteps = n), (this.reset = r));
    }
    next(e) {
      let t = e - this.last;
      return t < this.gap
        ? null
        : ((this.n = t > this.reset ? 0 : Math.min(this.n + 1, this.maxSteps)),
          (this.last = e),
          this.step ** +this.n);
    }
  },
  v = [`#ffb43a`, `#ffc35f`, `#ece5d8`, `#ff8a2a`, `#ffffff`, `#ffd45e`],
  y = null,
  b = null,
  x = [],
  S = 0,
  C = 0,
  w = [`#ffffff`, `#f4f6f2`, `#e6ece8`, `#ffffff`, `#a6e22e`, `#5cbf3e`];
function T(e) {
  if (
    typeof window > `u` ||
    matchMedia(`(prefers-reduced-motion: reduce)`).matches
  )
    return;
  ee();
  let t = Math.min(200 - x.length, e.count ?? 70),
    n = ((e.spread ?? 70) * Math.PI) / 180,
    r = e.power ?? 1;
  for (let i = 0; i < t; i++) {
    let t = -Math.PI / 2 + (Math.random() - 0.5) * n,
      i = (380 + Math.random() * 520) * r,
      a = Math.random() < 0.25;
    x.push({
      x: e.x + (Math.random() - 0.5) * 24,
      y: e.y + (Math.random() - 0.5) * 10,
      vx: Math.cos(t) * i,
      vy: Math.sin(t) * i,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 12,
      flip: Math.random() * Math.PI * 2,
      vf: 6 + Math.random() * 10,
      w: e.feathers ? 11 + Math.random() * 6 : a ? 9 : 6 + Math.random() * 3,
      h: e.feathers ? 3.5 + Math.random() * 2 : a ? 5 : 3 + Math.random() * 3,
      color: e.feathers
        ? w[(Math.random() * w.length) | 0]
        : e.accent && Math.random() < 0.35
          ? e.accent
          : v[(Math.random() * v.length) | 0],
      round: !e.feathers && Math.random() < 0.22,
      leaf: !!e.feathers,
      life: (e.feathers ? 2.2 : 1.5) + Math.random() * 0.9,
      age: 0,
    });
  }
  S ||= ((C = performance.now()), requestAnimationFrame(O));
}
function E() {
  ((x = []), k());
}
function ee() {
  y?.isConnected ||
    ((y = document.createElement(`canvas`)),
    (y.id = `nt-confetti`),
    y.setAttribute(`aria-hidden`, `true`),
    document.body.append(y),
    (b = y.getContext(`2d`)),
    D());
}
function D() {
  if (!y) return;
  let e = Math.min(2, devicePixelRatio || 1);
  ((y.width = Math.round(innerWidth * e)),
    (y.height = Math.round(innerHeight * e)),
    b?.setTransform(e, 0, 0, e, 0, 0));
}
var te = 1150;
function O(e) {
  let t = Math.min(0.05, (e - C) / 1e3);
  C = e;
  let n = b;
  if (!n || !y) return k();
  (y.width !== Math.round(innerWidth * Math.min(2, devicePixelRatio || 1)) &&
    D(),
    n.clearRect(0, 0, innerWidth, innerHeight));
  let r = [],
    i = Math.exp(-1.9 * t);
  for (let e of x) {
    if (((e.age += t), e.age >= e.life || e.y > innerHeight + 40)) continue;
    ((e.vx *= i),
      (e.vy = e.vy * i + te * t * (e.vy > 0 ? (e.leaf ? 0.22 : 0.45) : 1)),
      (e.x += e.vx * t + Math.sin(e.flip) * (e.leaf ? 40 : 18) * t),
      (e.y += e.vy * t),
      (e.rot += e.vr * t),
      (e.flip += e.vf * t),
      (n.globalAlpha = Math.min(1, (e.life - e.age) / (e.life * 0.25))),
      (n.fillStyle = e.color),
      n.setTransform(n.getTransform().a, 0, 0, n.getTransform().d, 0, 0),
      n.translate(e.x, e.y),
      n.rotate(e.rot));
    let a = Math.cos(e.flip);
    if (e.leaf) {
      let t = (e.h / 2) * Math.abs(a) + 0.4;
      (n.beginPath(),
        n.moveTo(-e.w / 2, 0),
        n.quadraticCurveTo(0, -t * 2, e.w / 2, 0),
        n.quadraticCurveTo(0, t * 2, -e.w / 2, 0),
        n.fill());
    } else
      e.round
        ? (n.beginPath(),
          n.ellipse(
            0,
            0,
            e.h * 0.7,
            e.h * 0.7 * Math.abs(a) + 0.4,
            0,
            0,
            Math.PI * 2,
          ),
          n.fill())
        : n.fillRect(-e.w / 2, (-e.h / 2) * a, e.w, e.h * a || 0.5);
    r.push(e);
  }
  let a = Math.min(2, devicePixelRatio || 1);
  (n.setTransform(a, 0, 0, a, 0, 0),
    (n.globalAlpha = 1),
    (x = r),
    x.length ? (S = requestAnimationFrame(O)) : k());
}
function k() {
  (cancelAnimationFrame(S), (S = 0), y?.remove(), (y = null), (b = null));
}
var A = `M-7.4 1C-9.6-12-8.4-27-0.6-31.2C7.6-27.6 9.8-12 7.4 1Z`,
  j = `M-3.6-2.6C-4.9-12.4-4.1-22.6-0.4-25.6C3.5-22.8 4.6-12.4 3.6-2.6Z`,
  M = `M-5.2-1.5C-6.8 5-6.6 11.5-5.2 17L4.8 17C6 11.5 6 5 4.8-1.5Z`,
  ne = `<g class="m-carrot"><path class="m-leaf" d="M0-2.5C-3-7-2.5-10.5-1.2-12C-0.4-9-0.2-6 0-2.5Z"/><path class="m-leaf m-leaf2" d="M0.4-2.5C2.6-6.6 5.6-8.4 7.6-8.6C6-5.6 3.6-3.6 0.4-2.5Z"/><path class="m-root" d="M-3.4-2.2C-1.4-3.4 1.6-3.4 3.4-2.2L0.6 20.5C0.3 21.4-0.3 21.4-0.6 20.5Z"/><path class="m-ridge" d="M-2.4 3.4L0.8 4.2M-1.6 8.6L1.2 9.2M-1 13.6L0.9 14"/></g>`,
  re = (e, t = ``) =>
    `<svg viewBox="0 0 100 124" focusable="false">${t}${e}</svg>`,
  N = (e, t, n = ``) => `<i class="m-l ${e}">${re(t, n)}</i>`,
  ie = `<path class="m-pants" d="M39 100h9l-0.4 13h-8.4zM52 100h9l-0.2 13h-8.4z"/><path class="m-shoe" d="M37.4 112.6h11.4c1.6 0 2.4 1 2.4 2.4v0.6c0 1-0.8 1.6-1.8 1.6H37c-1.4 0-2-1-1.6-2.2c0.4-1.4 1-2.4 2-2.4zM51.6 112.6H63c1 0 1.6 1 2 2.4c0.4 1.2-0.2 2.2-1.6 2.2H51.6c-1 0-1.8-0.6-1.8-1.6V115c0-1.4 0.8-2.4 1.8-2.4z"/>`,
  ae = `<path class="m-hoodie" d="M36.4 74.6C42 72.6 58 72.6 63.6 74.6C68.6 79 70.6 91 70.2 101.6C70 103.4 68.8 104.2 67 104.2H33C31.2 104.2 30 103.4 29.8 101.6C29.4 91 31.4 79 36.4 74.6Z"/><path class="m-pocket" d="M39.4 92.4H60.6L62.4 101.4H37.6Z"/><path class="m-hem" d="M30.2 100.4H69.8V102.2C69.8 103.4 68.8 104.2 67.4 104.2H32.6C31.2 104.2 30.2 103.4 30.2 102.2Z"/><path class="m-string" d="M46.2 75.4V86.6M53.8 75.4V88"/><path class="m-aglet" d="M46.2 86.4V89M53.8 87.8V90.4"/>`,
  oe = `<g transform="translate(34 78.4)"><path class="m-sleeve" d="${M}"/><g transform="translate(0 20.5)">${ne}</g><circle class="m-paw" cx="0" cy="19.6" r="4.4"/></g>`,
  se = `<g transform="translate(66 78.4)"><path class="m-sleeve" d="${M}"/><circle class="m-paw" cx="0" cy="19.6" r="4.4"/></g>`,
  ce = `<g transform="translate(39.5 33.5) rotate(-13)"><path class="m-ear-out" d="${A}"/><path class="m-ear-in" d="${j}"/></g>`,
  le = `<g transform="translate(60.5 33.5) rotate(12)"><path class="m-ear-out" d="${A}"/><path class="m-ear-in" d="${j}"/></g>`,
  ue = `<i class="m-stage">${N(`m-shadow`, `<ellipse cx="50" cy="120.5" rx="21" ry="2.6"/>`)}<i class="m-l m-fig">${N(`m-legs`, ie)}${N(`m-torso`, ae)}${N(`m-arm m-arm-r`, oe)}${N(`m-arm m-arm-l`, se)}<i class="m-l m-head">${N(`m-ear m-ear-r`, ce)}${N(`m-ear m-ear-l`, le)}${N(`m-facel`, `<ellipse class="m-hood" cx="50" cy="53.6" rx="27.4" ry="25.6"/><ellipse class="m-rim" cx="50" cy="55.2" rx="20.8" ry="19.6"/><ellipse class="m-face" cx="50" cy="55" rx="17.6" ry="16.4"/><g clip-path="url(#CLIP)"><rect class="m-visor" x="30" y="44.4" width="40" height="11.2"/><rect class="m-visor-hi" x="30" y="44.4" width="40" height="1.4"/></g><circle class="m-mouth m-mouth-dot" cx="50" cy="61.4" r="1.6"/><path class="m-mouth m-mouth-smile" d="M46.6 60.2Q50 65.4 53.4 60.2Z"/><ellipse class="m-mouth m-mouth-o" cx="50" cy="62" rx="1.9" ry="2.4"/><path class="m-mouth m-mouth-frown" d="M47.2 63.4Q50 60.6 52.8 63.4"/>`, `<defs><clipPath id="CLIP"><ellipse cx="50" cy="55" rx="17.6" ry="16.4"/></clipPath></defs>`)}${N(`m-eyesl`, `<g class="m-eyes m-eyes-open"><ellipse class="m-glow" cx="43" cy="50" rx="5.6" ry="4"/><ellipse class="m-glow" cx="57" cy="50" rx="5.6" ry="4"/><ellipse class="m-eye" cx="43" cy="50" rx="3.9" ry="2.7"/><ellipse class="m-eye" cx="57" cy="50" rx="3.9" ry="2.7"/></g><g class="m-eyes m-eyes-happy"><path class="m-eye-line" d="M40 51.2Q43.2 46.8 46.4 51.2M53.6 51.2Q56.8 46.8 60 51.2"/></g><g class="m-eyes m-eyes-proud"><path class="m-eye" d="M39.9 49.6H46.5C46.5 51.6 45 52.6 43.2 52.6C41.4 52.6 39.9 51.6 39.9 49.6ZM53.5 49.6H60.1C60.1 51.6 58.6 52.6 56.8 52.6C55 52.6 53.5 51.6 53.5 49.6Z"/></g><g class="m-eyes m-eyes-wide"><circle class="m-glow" cx="43.2" cy="50" r="4.6"/><circle class="m-glow" cx="56.8" cy="50" r="4.6"/><circle class="m-eye" cx="43.2" cy="50" r="3.3"/><circle class="m-eye" cx="56.8" cy="50" r="3.3"/></g><g class="m-eyes m-eyes-sleepy"><path class="m-eye-line" d="M40.2 50.6Q43.2 52.4 46.2 50.6M53.8 50.6Q56.8 52.4 59.8 50.6"/></g><g class="m-eyes m-eyes-sad"><ellipse class="m-eye" cx="43.4" cy="50.6" rx="3" ry="1.9" transform="rotate(-16 43.4 50.6)"/><ellipse class="m-eye" cx="56.6" cy="50.6" rx="3" ry="1.9" transform="rotate(16 56.6 50.6)"/></g><g class="m-eyes m-eyes-think"><ellipse class="m-eye" cx="45" cy="48.8" rx="3" ry="2.2"/><path class="m-eye-line" d="M55.6 49.4H61"/></g>`)}${N(`m-chinpaw`, `<circle class="m-paw" cx="56.4" cy="70.6" r="4.4"/>`)}</i></i>${N(`m-fx m-fx-z1`, `<text x="74" y="30">z</text>`)}${N(`m-fx m-fx-z2`, `<text x="80" y="22">z</text>`)}${N(`m-fx m-fx-t1`, `<circle cx="74" cy="34" r="1.6"/>`)}${N(`m-fx m-fx-t2`, `<circle cx="79.4" cy="27.4" r="2.2"/>`)}${N(`m-fx m-fx-t3`, `<circle cx="86" cy="19.6" r="3"/>`)}${N(`m-fx m-fx-s1`, `<path d="M14 34l1.4 3.8 3.8 1.4-3.8 1.4L14 44.4l-1.4-3.8-3.8-1.4 3.8-1.4z"/>`)}${N(`m-fx m-fx-s2`, `<path d="M86 40l1 2.8 2.8 1-2.8 1L86 47.6l-1-2.8-2.8-1 2.8-1z"/>`)}</i>`,
  de = 0,
  P = () => {};
function fe(e) {
  P = e;
}
var pe = {
    idle: 3e3,
    waving: 3800,
    cheer: 3e3,
    proud: 2600,
    surprised: 0,
    thinking: 3400,
    sleepy: 4300,
    sad: 4e3,
  },
  me = () =>
    typeof matchMedia == `function` &&
    matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  he = class {
    m;
    visible = !1;
    seen = !1;
    timer = 0;
    io = null;
    onVis = () => this.update();
    constructor(e) {
      this.m = e;
    }
    start() {
      this.io ||
        me() ||
        typeof IntersectionObserver > `u` ||
        ((this.io = new IntersectionObserver((e) => {
          ((this.visible = e[e.length - 1].isIntersecting),
            this.visible && (this.seen = !0),
            this.update());
        })),
        this.io.observe(this.m.el),
        document.addEventListener(`visibilitychange`, this.onVis));
    }
    stop() {
      (clearTimeout(this.timer),
        (this.timer = 0),
        this.m.el.classList.remove(`m-live`, `m-blink`, `m-flop`));
    }
    dispose() {
      (this.stop(),
        this.io?.disconnect(),
        (this.io = null),
        document.removeEventListener(`visibilitychange`, this.onVis));
    }
    update() {
      if (this.seen && !this.m.el.isConnected) return this.dispose();
      if (!this.visible || document.hidden) return this.stop();
      this.timer || this.burst(!0);
    }
    burst(e = !1) {
      if (!this.m.el.isConnected) return this.dispose();
      let t = pe[this.m.mood],
        n = Math.random();
      (t && (e || n < 0.55)
        ? this.play(`m-live`, t)
        : n < 0.8 || ![`idle`, `waving`].includes(this.m.mood)
          ? this.play(`m-blink`, 170)
          : this.play(`m-flop`, 1e3),
        (this.timer = window.setTimeout(
          () => this.burst(),
          (e ? t : 0) + 4e3 + Math.random() * 3e3,
        )));
    }
    play(e, t) {
      let n = this.m.el;
      (n.classList.remove(e),
        n.offsetWidth,
        n.classList.add(e),
        window.setTimeout(() => n.classList.remove(e), t + 50));
    }
    restart() {
      this.timer &&
        (clearTimeout(this.timer),
        this.m.el.classList.remove(`m-live`),
        this.burst(!0));
    }
  };
function F(e = `idle`, t = {}) {
  let n = document.createElement(`span`);
  ((n.className = `mascot${t.className ? ` ${t.className}` : ``}`),
    (n.innerHTML = ue.replaceAll(`CLIP`, `m-clip-${++de}`)),
    t.size && n.style.setProperty(`--m-size`, t.size),
    t.colourway &&
      n.setAttribute(
        `style`,
        `${n.getAttribute(`style`) ?? ``};${ge(t.colourway)}`,
      ),
    t.label
      ? (n.setAttribute(`role`, `img`), n.setAttribute(`aria-label`, t.label))
      : n.setAttribute(`aria-hidden`, `true`));
  let r = {
      el: n,
      mood: e,
      set(e) {
        (e === r.mood && n.dataset.mood) ||
          ((r.mood = e), (n.dataset.mood = e), i.restart());
      },
      react(e) {
        if (matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
        (n.classList.remove(`m-react-hop`, `m-react-jolt`, `m-react-nod`),
          n.offsetWidth,
          n.classList.add(`m-react-${e}`),
          n.isConnected && P(e));
        let t = (r) => {
          r.animationName.startsWith(`m-react`) &&
            (n.classList.remove(`m-react-${e}`),
            n.removeEventListener(`animationend`, t));
        };
        n.addEventListener(`animationend`, t);
      },
    },
    i = new he(r);
  return ((n.dataset.mood = e), i.start(), r);
}
var I = (e) => `#${e.toString(16).padStart(6, `0`)}`;
function ge(e) {
  let n = t[e];
  return n
    ? `--m-hood:${I(n.hoodie)};--m-trim:${I(n.trim)};--m-face:${I(n.face)};--m-accent:${I(n.accent)};--m-paw:${I(n.glove)};--m-pants:${I(n.pants)};--m-shoe:${I(n.shoe)}`
    : ``;
}
var L = new i({ celebration: { rest: 260 }, banner: { rest: 240 } }),
  R = new Map(),
  z = 0,
  B = () => {},
  V = { n: 0, at: 0 },
  H = !1,
  U = !1,
  _e = new _(),
  W = () =>
    typeof matchMedia == `function` &&
    matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  G = () => performance.now();
function ve(e) {
  B = e;
}
fe((e) => {
  e === `hop` && !L.isRunning && B(`bunny_boing`);
});
var K = null,
  q = !1;
function J() {
  return K && K.toasts.isConnected
    ? K
    : ((K = {
        toasts: e(`div#nt-toasts`),
        cels: e(`div#nt-cels`),
        banners: e(`div#nt-banners`),
        polite: e(`div.sr-only#nt-live`, {
          role: `status`,
          "aria-live": `polite`,
          "aria-atomic": `true`,
        }),
        alert: e(`div.sr-only#nt-alert`, {
          role: `alert`,
          "aria-live": `assertive`,
          "aria-atomic": `true`,
        }),
      }),
      document.body.append(K.banners, K.cels, K.toasts, K.polite, K.alert),
      q ||
        ((q = !0),
        new MutationObserver(() => X()).observe(document.body, {
          attributes: !0,
          attributeFilter: [`class`],
        }),
        document.addEventListener(
          `close`,
          () => K?.toasts.isConnected && be(),
          !0,
        )),
      X(),
      K);
}
function ye() {
  let e = [...document.querySelectorAll(`dialog[open]`)].filter((e) =>
    e.matches(`:modal`),
  );
  return e[e.length - 1] ?? document.body;
}
function be() {
  let e = J(),
    t = ye();
  for (let n of [e.banners, e.cels, e.toasts, e.polite, e.alert])
    n.parentElement !== t && t.append(n);
}
function Y() {
  let e = document.body.classList;
  return (
    e.contains(`in-game`) &&
    !e.contains(`menu-open`) &&
    !e.contains(`viewer-open`)
  );
}
function X() {
  let e = G();
  (L.setCapacity(`toast`, Y() ? 1 : 3, e),
    L.setRunning((H && Y()) || U, e),
    ((H && Y()) || U) && E(),
    Z());
}
var xe = () => L.isRunning;
function Se(e) {
  e !== H && ((H = e), K && X());
}
function Ce(e) {
  e !== U && ((U = e), K && X());
}
function we(e, t = {}) {
  J();
  let n = G();
  if (Y())
    for (let e of L.shown(`toast`))
      (!t.key || e.key !== t.key) && L.dismiss(e.id, n);
  (L.push(
    {
      lane: `toast`,
      key: t.key,
      ms: t.ms ?? h(e),
      priority: t.priority ?? (t.tone === `bad` ? r.error : r.info),
      data: {
        kind: `toast`,
        text: e,
        tone: t.tone ?? `info`,
        action: t.action,
      },
    },
    n,
  ),
    Z());
}
function Te(e) {
  (J(),
    L.push(
      {
        lane: `celebration`,
        key: e.key,
        ms: e.ms ?? 5600,
        defer: !0,
        priority: e.priority ?? r.achievement,
        data: { kind: `celebration`, spec: e },
      },
      G(),
    ),
    Z());
}
function Ee() {
  return !!K && L.shown(`celebration`).length > 0;
}
function De(e) {
  (J(),
    L.push(
      {
        lane: `banner`,
        key: e.key,
        ms: e.ms ?? 5e3,
        priority: e.priority ?? (e.tone === `wr` ? r.record : r.info),
        data: { kind: `banner`, spec: e },
      },
      G(),
    ),
    Z());
}
function Z() {
  clearTimeout(z);
  let e = G(),
    t = L.step(e);
  t.length && be();
  for (let e of t) Oe(e);
  let n = L.nextAt(G());
  n !== null && (z = window.setTimeout(Z, Math.max(16, n - G())));
}
function Oe(e) {
  let t = e.note;
  if (e.type === `hide`) return void Re(t);
  if (e.type === `update`) return Pe(t);
  let n = t.data;
  n.kind === `toast`
    ? Ne(t, n)
    : n.kind === `celebration`
      ? Ie(t, n.spec)
      : Le(t, n.spec);
}
function Q(e, t = !1) {
  let n = J(),
    r = t ? n.alert : n.polite;
  ((r.textContent = ``), requestAnimationFrame(() => (r.textContent = e)));
}
function ke(e, t) {
  let n = (e) => {
    L.hold(t.id, e, G());
    let n = R.get(t.id)?.bar;
    (n && (e ? n.pause() : n.play()), Z());
  };
  (e.addEventListener(
    `pointerenter`,
    (e) => e.pointerType === `mouse` && n(!0),
  ),
    e.addEventListener(
      `pointerleave`,
      (t) =>
        t.pointerType === `mouse` &&
        !e.contains(document.activeElement) &&
        n(!1),
    ),
    e.addEventListener(`focusin`, () => n(!0)),
    e.addEventListener(
      `focusout`,
      (t) => !e.contains(t.relatedTarget) && n(!1),
    ));
}
function Ae(e, t) {
  let n = null;
  (e.addEventListener(`pointerdown`, (t) => {
    t.pointerType === `mouse` ||
      t.target.closest(`button`) ||
      ((n = { x: t.clientX, y: t.clientY, id: t.pointerId }),
      e.setPointerCapture(t.pointerId));
  }),
    e.addEventListener(`pointermove`, (t) => {
      if (!n || t.pointerId !== n.id) return;
      let r = t.clientX - n.x;
      ((e.style.translate = `${r}px 0`),
        (e.style.opacity = String(1 - Math.min(0.7, Math.abs(r) / 240))));
    }));
  let r = (r) => {
    if (!n || r.pointerId !== n.id) return;
    let i = r.clientX - n.x;
    ((n = null),
      Math.abs(i) > 70
        ? ((e.dataset.fling = String(Math.sign(i))), L.dismiss(t.id, G()), Z())
        : (e.animate({ translate: [`${i}px 0`, `0 0`] }, f(a.pop)),
          (e.style.translate = ``),
          (e.style.opacity = ``)));
  };
  (e.addEventListener(`pointerup`, r), e.addEventListener(`pointercancel`, r));
}
function je(t, n) {
  return e(
    `button.nt-x`,
    {
      type: `button`,
      "aria-label": `Dismiss: ${n}`,
      "data-sound": `none`,
      onclick: () => (L.dismiss(t.id, G()), Z()),
    },
    `×`,
  );
}
function Me(t, n) {
  return e(
    `button.nt-act`,
    {
      type: `button`,
      onclick: () => {
        (L.dismiss(t.id, G()), Z(), n.run());
      },
    },
    n.label,
  );
}
function Ne(t, n) {
  let r = J(),
    i = e(
      `div.nt-toast.tone-${n.tone}`,
      null,
      e(`i.nt-dot`, { "aria-hidden": `true` }),
      e(`span.nt-text`, null, n.text),
      e(`b.nt-count`, { "aria-hidden": `true` }),
      n.action ? Me(t, n.action) : null,
    );
  if (
    (ke(i, t),
    Ae(i, t),
    Fe(r.toasts, () => r.toasts.prepend(i)),
    R.set(t.id, { el: i }),
    Q(n.text, n.tone === `bad`),
    n.action && !L.isRunning && B(`toast_pop`),
    W())
  )
    return;
  let o = Y();
  (i.animate(
    { transform: [`translateY(${o ? -12 : 14}px)`, `none`] },
    { ...f(a.pop), fill: `backwards` },
  ),
    i.animate(
      { opacity: [0, 1] },
      { duration: 140, easing: m, fill: `backwards` },
    ),
    n.tone === `bad` &&
      i.animate(
        { translate: [`0 0`, `-5px 0`, `4px 0`, `-2px 0`, `0 0`] },
        { duration: 320, delay: 120, easing: `ease-out` },
      ));
}
function Pe(e) {
  let t = R.get(e.id);
  if (!t) return;
  let n = e.data;
  if (n.kind === `toast`) {
    let e = t.el.querySelector(`.nt-text`);
    ((t.same = e.textContent === n.text ? (t.same ?? 1) + 1 : 1),
      (e.textContent = n.text));
    let r = t.el.querySelector(`.nt-count`);
    if (
      ((r.textContent = t.same > 1 ? `×${t.same}` : ``),
      Q(n.text, n.tone === `bad`),
      n.action && !L.isRunning && B(`toast_pop`),
      W())
    )
      return;
    (t.el.animate({ transform: [`scale(1.045)`, `none`] }, f(a.pop)),
      t.same > 1 &&
        r.animate(
          { transform: [`scale(0.4)`, `none`], opacity: [0, 1] },
          f(a.bouncy),
        ));
  } else if (n.kind === `celebration`) {
    let e = n.spec;
    t.el.querySelector(`.nt-cel-title`).textContent = e.title;
    let r = t.el.querySelector(`.nt-cel-detail`);
    if ((r && (r.textContent = e.detail ?? ``), !W()))
      for (let e of t.el.querySelectorAll(`.nt-cel-emblem, .nt-model`))
        e.animate({ transform: [`scale(1.18)`, `none`] }, f(a.bouncy));
  }
}
function Fe(e, t) {
  let n = [...e.children],
    r = W() ? null : n.map((e) => e.getBoundingClientRect().top);
  (t(),
    r &&
      n.forEach((e, t) => {
        if (!e.isConnected || e.classList.contains(`nt-leaving`)) return;
        let n = r[t] - e.getBoundingClientRect().top;
        Math.abs(n) > 0.5 &&
          e.animate({ translate: [`0 ${n}px`, `0 0`] }, f(a.pop));
      }));
}
function Ie(t, n) {
  let r = J(),
    i = n.color ?? `#ffb43a`,
    o = e(`span.nt-cel-emblem`, { "aria-hidden": `true` }),
    s = null;
  n.level
    ? ((s = e(`b.nt-level-n`, null, String(n.level[0]))),
      o.append(e(`span.nt-level`, null, e(`small`, null, `Level`), s)))
    : n.emblem
      ? o.append(n.emblem)
      : o.append(e(`span.nt-spark`));
  let c = n.shine ? e(`i.nt-shine`) : null;
  c && o.append(c);
  let l = e(`i.nt-ring`, { "aria-hidden": `true` }),
    u = e(`span.nt-cel-kicker`, null, n.kicker),
    d = e(`b.nt-cel-title`, null, n.title),
    p = n.detail ? e(`span.nt-cel-detail`, null, n.detail) : null,
    h = e(`i.nt-cel-time`, { "aria-hidden": `true` }),
    g = n.mood ? F(n.mood, { className: `nt-cel-mascot` }) : null,
    _ = e(
      `div.nt-cel${g ? `.has-mascot` : ``}`,
      { style: `--c:${i}` },
      g?.el ?? null,
      e(
        `div.nt-cel-slab`,
        null,
        e(
          `span.nt-cel-emblem-wrap${n.model ? `.has-model` : ``}`,
          null,
          l,
          o,
          n.model?.el ?? null,
        ),
        e(`div.nt-cel-text`, null, u, d, p),
        n.action ? Me(t, n.action) : null,
        je(t, n.title),
        h,
      ),
    );
  (ke(_, t), Ae(_, t), r.cels.replaceChildren(_), n.model?.show());
  let v = _.getBoundingClientRect(),
    y = Math.min(v.top, g ? g.el.getBoundingClientRect().top : 1 / 0);
  (document.documentElement.style.setProperty(
    `--nt-cel-h`,
    `${Math.round(v.bottom - y)}px`,
  ),
    document.documentElement.classList.add(`nt-has-cel`));
  let b = { el: _, bar: void 0, cleanup: void 0 };
  (R.set(t.id, b),
    Q(`${n.kicker}: ${n.title}${n.detail ? `. ${n.detail}` : ``}`));
  let x = G();
  V = x - V.at < 12e3 ? { n: Math.min(V.n + 1, 4), at: x } : { n: 0, at: x };
  let S = 2 ** (V.n / 12),
    C = W() ? 0 : 150;
  n.sound && window.setTimeout(() => B(n.sound, 1, S), C);
  let w = n.level;
  if (W()) {
    s && w && (s.textContent = String(w[1]));
    return;
  }
  (_.querySelector(`.nt-cel-slab`).animate(
    { transform: [`translateY(22px)`, `none`], opacity: [0, 1] },
    { duration: 240, easing: m, fill: `backwards` },
  ),
    o.animate(
      { transform: [`scale(0.35) rotate(-18deg)`, `none`], opacity: [0, 1] },
      { ...f(a.bouncy), delay: 60, fill: `backwards` },
    ),
    l.animate(
      { transform: [`scale(0.9)`, `scale(1.8)`], opacity: [0.75, 0] },
      { duration: 560, delay: 150, easing: m, fill: `both` },
    ),
    [u, d, p].forEach((e, t) =>
      e?.animate(
        { transform: [`translateX(-8px)`, `none`], opacity: [0, 1] },
        { duration: 260, delay: 110 + t * 55, easing: m, fill: `backwards` },
      ),
    ),
    (b.bar = h.animate(
      { transform: [`scaleX(1)`, `scaleX(0)`] },
      { duration: t.ms, easing: `linear`, fill: `forwards` },
    )));
  let E = [];
  (n.confetti &&
    !L.isRunning &&
    E.push(
      window.setTimeout(() => {
        let e = o.getBoundingClientRect();
        T({
          x: e.left + e.width / 2,
          y: e.top + e.height / 2,
          count: typeof n.confetti == `number` ? n.confetti : 70,
          accent: i,
          feathers: n.feathers,
          ...(n.feathers ? { power: 0.7, spread: 120 } : {}),
        });
      }, 170),
    ),
    n.feathers &&
      !matchMedia(`(prefers-reduced-motion: reduce)`).matches &&
      o.animate(
        {
          transform: [
            `none`,
            `translateY(-5px) scale(1.04, 0.96)`,
            `none`,
            `translateY(-4px) scale(1.03, 0.97)`,
            `none`,
            `translateY(-2px)`,
            `none`,
          ],
        },
        { duration: 900, delay: 520, easing: `ease-in-out` },
      ),
    c &&
      (c.animate(
        {
          transform: [
            `translateX(-130%) skewX(-18deg)`,
            `translateX(130%) skewX(-18deg)`,
          ],
        },
        {
          duration: 700,
          delay: 380,
          easing: `cubic-bezier(0.4, 0, 0.2, 1)`,
          fill: `both`,
        },
      ),
      E.push(window.setTimeout(() => B(`shine`), 380))),
    s &&
      w &&
      E.push(
        window.setTimeout(
          () =>
            $(s, w[0], w[1], 650, () =>
              s.animate({ transform: [`scale(1.35)`, `none`] }, f(a.bouncy)),
            ),
          260,
        ),
      ),
    g &&
      (g.el.animate(
        { transform: [`translateY(70%)`, `none`] },
        { ...f(a.bouncy), delay: 240, fill: `backwards` },
      ),
      g.el.animate(
        { opacity: [0, 1] },
        { duration: 90, delay: 240, fill: `backwards` },
      ),
      E.push(window.setTimeout(() => g.react(`hop`), 760))),
    (b.cleanup = () => E.forEach(clearTimeout)));
}
function $(e, t, n, r = 700, i, a = String) {
  if (W() || t === n) {
    e.textContent = a(n);
    return;
  }
  let o = G(),
    s = t,
    c = () => {
      let l = Math.min(1, (G() - o) / r),
        u = g(t, n, l);
      if (u !== s) {
        if (((s = u), (e.textContent = a(u)), !L.isRunning && e.isConnected)) {
          let e = _e.next(G());
          e !== null && B(`count_tick`, 1, e);
        }
        Math.abs(n - t) < 20 && i?.();
      }
      l < 1 && e.isConnected
        ? requestAnimationFrame(c)
        : Math.abs(n - t) >= 20 && i?.();
    };
  requestAnimationFrame(c);
}
function Le(t, n) {
  let r = J(),
    i = e(`b.nt-banner-title`, null, n.title),
    o = n.sub ? e(`span.nt-banner-sub`, null, n.sub) : null,
    s = e(`div.nt-banner-band`, null, i, o),
    c = e(
      `div.nt-banner.tone-${n.tone ?? `info`}${L.isRunning ? `.compact` : ``}`,
      null,
      s,
    );
  (r.banners.replaceChildren(c),
    R.set(t.id, { el: c }),
    Q(`${n.title}${n.sub ? `. ${n.sub}` : ``}`),
    n.sound && window.setTimeout(() => B(n.sound), W() ? 0 : 90),
    !W() &&
      (s.animate(
        { transform: [`scaleX(0.6)`, `none`], opacity: [0, 1] },
        { ...f(a.land), fill: `backwards` },
      ),
      i.animate(
        { transform: [`scale(1.4)`, `none`], opacity: [0, 1] },
        { ...f(a.land), delay: 60, fill: `backwards` },
      ),
      o?.animate(
        { transform: [`translateY(-6px)`, `none`], opacity: [0, 1] },
        { duration: 260, delay: 170, easing: m, fill: `backwards` },
      ),
      L.isRunning ||
        i.animate(
          { backgroundPosition: [`150% 0`, `-50% 0`] },
          {
            duration: 900,
            delay: 320,
            easing: `cubic-bezier(0.4, 0, 0.2, 1)`,
            fill: `both`,
          },
        ),
      n.confetti &&
        !L.isRunning &&
        window.setTimeout(() => {
          let e = i.getBoundingClientRect();
          T({
            x: e.left + e.width / 2,
            y: e.bottom,
            count: 110,
            spread: 110,
            power: 0.9,
          });
        }, 140)));
}
async function Re(e) {
  let t = R.get(e.id);
  if ((R.delete(e.id), !t)) return;
  t.cleanup?.();
  let n = t.el;
  if (
    (e.lane === `celebration` &&
      document.documentElement.classList.remove(`nt-has-cel`),
    W() || !n.isConnected)
  )
    return n.remove();
  let r = Number(n.dataset.fling ?? 0);
  if (e.lane === `toast`) {
    let e = Y(),
      t = K.toasts;
    (Fe(t, () => {
      let e = n.getBoundingClientRect();
      (n.classList.add(`nt-leaving`),
        Object.assign(n.style, {
          left: `${e.left}px`,
          top: `${e.top}px`,
          width: `${e.width}px`,
        }),
        (t.parentElement ?? document.body).append(n));
    }),
      await n
        .animate(
          {
            transform: [
              `none`,
              r
                ? `translateX(${r * 120}px)`
                : `translateY(${e ? -8 : 10}px) scale(0.97)`,
            ],
            opacity: [1, 0],
          },
          { duration: 150, easing: p, fill: `forwards` },
        )
        .finished.catch(() => {}));
  } else
    e.lane === `celebration`
      ? (n
          .querySelector(`.nt-cel-mascot`)
          ?.animate(
            { transform: [`none`, `translateY(80%)`] },
            { duration: 140, easing: p, fill: `forwards` },
          ),
        await n
          .animate(
            {
              transform: [
                `none`,
                r ? `translateX(${r * 160}px)` : `translateY(14px)`,
              ],
              opacity: [1, 0],
            },
            { duration: 190, delay: 50, easing: p, fill: `forwards` },
          )
          .finished.catch(() => {}))
      : await n
          .animate(
            { transform: [`none`, `translateY(-10px)`], opacity: [1, 0] },
            { duration: 220, easing: p, fill: `forwards` },
          )
          .finished.catch(() => {});
  n.remove();
}
function ze(e) {
  !W() && e.isConnected && e.animate({ scale: [`0.55`, `1`] }, f(a.bouncy));
}
function Be(t, n = `var(--accent)`) {
  if (W() || !t.isConnected) return;
  let r = e(`i.nt-ping`, { "aria-hidden": `true`, style: `--c:${n}` });
  (t.append(r),
    r
      .animate(
        { transform: [`scale(0.8)`, `scale(2.6)`], opacity: [0.8, 0] },
        { duration: 650, easing: m },
      )
      .finished.then(
        () => r.remove(),
        () => r.remove(),
      ));
}
function Ve(e, t = 0) {
  (window.setTimeout(() => e.isConnected && B(`stamp`), W() ? t : t + 45),
    !W() &&
      e.animate(
        {
          transform: [
            `scale(1.7) rotate(-6deg)`,
            `scale(0.94) rotate(1deg)`,
            `scale(1.02)`,
            `none`,
          ],
          opacity: [0, 1, 1, 1],
          offset: [0, 0.4, 0.7, 1],
        },
        {
          duration: 460,
          delay: t,
          easing: `cubic-bezier(0.2, 0.9, 0.3, 1)`,
          fill: `backwards`,
        },
      ));
}
function He(e, t = `translateY(14px) scale(0.97)`, n = 0) {
  W() ||
    (e.animate(
      { transform: [t, `none`] },
      { ...f(a.pop), delay: n, fill: `backwards` },
    ),
    e.animate(
      { opacity: [0, 1] },
      { duration: 160, delay: n, easing: m, fill: `backwards` },
    ));
}
export {
  f as _,
  Ce as a,
  Be as c,
  Se as d,
  Ve as f,
  o as g,
  a as h,
  $ as i,
  xe as l,
  F as m,
  Te as n,
  He as o,
  we as p,
  Ee as r,
  ze as s,
  De as t,
  ve as u,
  r as v,
};
