import "./core-GuI4LXND.js";
import { m as e } from "./styles-DzitlxVO.js";
import { C as t, c as n, f as r, r as i, t as a } from "./loadout-DopA3xcw.js";
var o = [
    `slot1`,
    `slot2`,
    `slot3`,
    `lastWeapon`,
    `nextWeapon`,
    `prevWeapon`,
    `drop`,
    `reload`,
  ],
  s = (e) => o.includes(e);
function c(e) {
  return e === 1 ? `Mouse3` : e === 2 ? `Mouse2` : `Mouse${e + 1}`;
}
var l = {
    forward: [`KeyW`],
    back: [`KeyS`],
    left: [`KeyA`],
    right: [`KeyD`],
    jump: [`Space`, `MouseWheel`],
    duck: [`ControlLeft`],
    use: [`KeyE`],
    restart: [`KeyR`],
    restartBonus: [`KeyB`],
    restartMain: [`KeyM`],
    setStart: [`Digit4`],
    clearStart: [],
    cycleStyle: [`F3`],
    mainMenu: [],
    hudEditor: [`F2`],
    thirdPerson: [`KeyT`],
    attack: [`Mouse1`],
    attack2: [`Mouse2`],
    inspect: [`KeyF`],
    viewmodel: [`KeyH`],
    keysOverlay: [],
    hideUi: [`F1`],
    mute: [`KeyO`],
    nextTrack: [`KeyP`],
    practice: [],
    noclip: [`KeyZ`],
    cpSave: [`KeyC`],
    cpTeleport: [`KeyX`],
    cpPrev: [],
    cpNext: [],
    turnLeft: [`ArrowLeft`],
    turnRight: [`ArrowRight`],
    slot1: [`Digit1`],
    slot2: [`Digit2`],
    slot3: [`Digit3`],
    lastWeapon: [`KeyQ`],
    nextWeapon: [],
    prevWeapon: [],
    drop: [`KeyG`],
    reload: [],
    giveUsp: [`Digit5`],
    giveGlock: [`Digit6`],
    gunMenu: [`Digit7`],
  },
  u = [
    { id: `speed`, label: `Speed` },
    { id: `timer`, label: `Timer` },
    { id: `split`, label: `Split vs PB` },
    { id: `track`, label: `Bonus / track` },
    { id: `stage`, label: `Stage / CP` },
    { id: `stats`, label: `Jumps · strafes · sync` },
    { id: `sync`, label: `Sync bar` },
    { id: `keys`, label: `Keys overlay` },
    { id: `ghostKeys`, label: `Ghost keys` },
    { id: `graph`, label: `Speed graph` },
    { id: `jumpStats`, label: `Jump stats` },
    { id: `map`, label: `Map / style line` },
    { id: `pb`, label: `Personal best` },
    { id: `fps`, label: `FPS counter` },
    { id: `chat`, label: `Chat` },
    { id: `ammo`, label: `Ammo` },
  ],
  d = (e) => (e % 3) / 2,
  f = (e) => Math.floor(e / 3) / 2,
  p = (e, t, n, r, i = 1) => ({ on: e, a: t, x: n, y: r, s: i }),
  m = {
    speed: p(!0, 7, 0, -0.262),
    timer: p(!0, 7, 0, -0.22),
    split: p(!0, 7, 0.072, -0.222, 0.9),
    track: p(!0, 7, 0, -0.31, 0.85),
    stage: p(!0, 7, 0, -0.165),
    stats: p(!0, 7, 0, -0.19),
    sync: p(!1, 7, 0, -0.135),
    keys: p(!0, 4, 0, 0.115),
    ghostKeys: p(!1, 4, 0.085, 0.115, 0.8),
    graph: p(!1, 6, 0.015, -0.03),
    jumpStats: p(!1, 4, 0, -0.1),
    map: p(!0, 0, 0.012, 0.016),
    pb: p(!0, 2, -0.012, 0.016),
    fps: p(!1, 0, 0.012, 0.045),
    chat: p(!0, 6, 0.012, -0.2),
    ammo: p(!0, 8, -0.014, -0.022),
  },
  ee = {
    speed: p(!0, 4, 0, 0.07, 0.85),
    timer: p(!0, 4, 0, 0.105, 0.8),
    split: p(!0, 4, 0, 0.13, 0.8),
    track: p(!0, 4, 0, 0.045, 0.7),
    stage: p(!0, 4, 0, 0.155, 0.75),
    stats: p(!1, 7, 0, -0.165),
    sync: p(!1, 7, 0, -0.14),
    keys: p(!1, 4, 0, 0.115),
    ghostKeys: p(!1, 4, 0.085, 0.115, 0.8),
    graph: p(!1, 7, 0, -0.33),
    jumpStats: p(!1, 4, 0, -0.08, 0.85),
    map: p(!1, 0, 0.012, 0.016),
    pb: p(!1, 2, -0.012, 0.016),
    fps: p(!1, 0, 0.012, 0.045),
    chat: p(!0, 6, 0.012, -0.03, 0.9),
    ammo: p(!0, 8, -0.014, -0.022, 0.85),
  },
  te = {
    speed: p(!0, 7, 0, -0.2, 1.25),
    timer: p(!0, 7, 0, -0.148, 1.2),
    split: p(!0, 7, 0.085, -0.15, 1.05),
    track: p(!0, 7, 0, -0.29, 1.1),
    stage: p(!0, 2, -0.012, 0.09, 1.1),
    stats: p(!0, 7, 0, -0.105),
    sync: p(!0, 7, 0, -0.055, 1.1),
    keys: p(!0, 6, 0.02, -0.04, 1.45),
    ghostKeys: p(!0, 6, 0.15, -0.04, 1),
    graph: p(!0, 8, -0.02, -0.04, 1.2),
    jumpStats: p(!0, 5, -0.02, 0, 1.1),
    map: p(!0, 0, 0.012, 0.016, 1.1),
    pb: p(!0, 2, -0.012, 0.016, 1.2),
    fps: p(!0, 2, -0.012, 0.055),
    chat: p(!0, 3, 0.015, 0.12),
    ammo: p(!0, 8, -0.02, -0.125, 1.1),
  },
  ne = [
    { id: `classic`, label: `Classic centred`, layout: m },
    { id: `minimal`, label: `Minimal`, layout: ee },
    { id: `streamer`, label: `Streamer`, layout: te },
  ],
  h = (e) => JSON.parse(JSON.stringify(e));
function re(e, t) {
  return u.every(({ id: n }) => {
    let r = e[n],
      i = t[n];
    return (
      r.on === i.on &&
      r.a === i.a &&
      Math.abs(r.x - i.x) < 1e-4 &&
      Math.abs(r.y - i.y) < 1e-4 &&
      Math.abs(r.s - i.s) < 0.001
    );
  });
}
var g = (e) => Math.round(Math.max(0.4, Math.min(3, e)) * 100) / 100,
  _ = (e) => Math.round(e * 1e4) / 1e4;
function ie(e, t, n, r) {
  let i = e.left + e.width / 2,
    a = e.top + e.height / 2,
    o = i < t / 3 ? 0 : i < (2 * t) / 3 ? 1 : 2,
    s = a < n / 3 ? 0 : a < (2 * n) / 3 ? 1 : 2,
    c = s * 3 + o,
    l = e.left + (o / 2) * e.width,
    u = e.top + (s / 2) * e.height;
  return {
    on: r.on,
    a: c,
    x: _((l - (o / 2) * t) / t),
    y: _((u - (s / 2) * n) / n),
    s: r.s,
  };
}
function ae(e) {
  let t = d(e.a),
    n = f(e.a);
  return {
    left: `${((t + e.x) * 100).toFixed(3)}%`,
    top: `${((n + e.y) * 100).toFixed(3)}%`,
    translate: `${-t * 100}% ${-n * 100}%`,
  };
}
var v = [`classic`, `keycaps`, `minimal`],
  y = {
    style: `keycaps`,
    opacity: 1,
    pressed: `#ffffff`,
    idle: `#9aa3b2`,
    rows: { wasd: !0, actions: !0, mouse: !0 },
  },
  b = 3,
  oe = { 1: 14, 2: 15, [b]: u.length },
  x = `bhl1.`;
function S(e) {
  let t = /^#?([0-9a-f]{6})$/i.exec(e.trim()),
    n = t ? parseInt(t[1], 16) : 16777215;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
var se = (e, t, n) =>
  `#` + [e, t, n].map((e) => e.toString(16).padStart(2, `0`)).join(``);
function ce(e, t) {
  let n = [b];
  for (let { id: t } of u) {
    let r = e[t];
    n.push((!!r.on << 7) | (r.a & 15));
    for (let e of [r.x, r.y]) {
      let t = Math.max(-32768, Math.min(32767, Math.round(e * 1e4))) & 65535;
      n.push(t >> 8, t & 255);
    }
    n.push(Math.max(1, Math.min(255, Math.round(r.s * 50))));
  }
  let r = +!!t.rows.wasd | (t.rows.actions ? 2 : 0) | (t.rows.mouse ? 4 : 0);
  return (
    n.push(
      Math.max(0, v.indexOf(t.style)),
      Math.round(t.opacity * 100),
      r,
      ...S(t.pressed),
      ...S(t.idle),
    ),
    x +
      btoa(String.fromCharCode(...n))
        .replace(/\+/g, `-`)
        .replace(/\//g, `_`)
        .replace(/=+$/, ``)
  );
}
function le(e) {
  if (((e = e.trim()), !e.startsWith(x))) return null;
  let t;
  try {
    let n = e.slice(5).replace(/-/g, `+`).replace(/_/g, `/`);
    t = Uint8Array.from(atob(n + `=`.repeat((4 - (n.length % 4)) % 4)), (e) =>
      e.charCodeAt(0),
    );
  } catch {
    return null;
  }
  let n = oe[t[0]] ?? 0;
  if (!n || t.length < 1 + n * 6) return null;
  let r = h(m),
    i = 1,
    a = (e, t) => (((e << 8) | t) << 16) >> 16;
  for (let { id: e } of u.slice(0, n)) {
    let n = t[i],
      o = n & 15;
    if (o > 8) return null;
    ((r[e] = {
      on: !!(n & 128),
      a: o,
      x: Math.max(-1, Math.min(1, a(t[i + 1], t[i + 2]) / 1e4)),
      y: Math.max(-1, Math.min(1, a(t[i + 3], t[i + 4]) / 1e4)),
      s: g(t[i + 5] / 50),
    }),
      (i += 6));
  }
  let o = JSON.parse(JSON.stringify(y));
  return (
    t.length >= i + 9 &&
      ((o.style = v[t[i]] ?? y.style),
      (o.opacity = Math.max(0.1, Math.min(1, t[i + 1] / 100))),
      (o.rows = {
        wasd: !!(t[i + 2] & 1),
        actions: !!(t[i + 2] & 2),
        mouse: !!(t[i + 2] & 4),
      }),
      (o.pressed = se(t[i + 3], t[i + 4], t[i + 5])),
      (o.idle = se(t[i + 6], t[i + 7], t[i + 8]))),
    { layout: r, keys: o }
  );
}
var C = { fov: 54, x: 0.6, y: 1.5, z: -0.9 },
  ue = { fov: 54, x: 0, y: 0, z: 0 },
  de = [`speed`, `diff`, `gain`, `sync`, `strafes`, `eff`, `height`, `time`],
  w = {
    chat: !1,
    mode: `sixth`,
    fields: {
      speed: !0,
      diff: !0,
      gain: !0,
      sync: !0,
      strafes: !0,
      eff: !1,
      height: !1,
      time: !1,
    },
  },
  T = 30,
  fe = 2,
  pe = [8, 512, 16, 1024];
function me(e, t) {
  return e === `every` || (e === `sixth` ? t === 6 : t > 0 && t % 6 == 0);
}
var E = Math.fround,
  D = E(0.01),
  he = E(1e-10),
  O = (e, t) => E(Math.sqrt(E(E(e * e) + E(t * t)))),
  k = (e) => E(Math.floor(E(E(e * 100) + 0.5)) / 100),
  ge = class {
    jump = 0;
    mode;
    groundTicks = 0;
    strafeTicks = 0;
    syncedTicks = 0;
    rawGain = 0;
    trajectory = 0;
    dx = 0;
    dy = 0;
    strafes = 0;
    prevButtons = 0;
    initialSpeed = 0;
    initialHeight = 0;
    oldSpeed = 0;
    oldHeight = 0;
    constructor(e = w.mode) {
      this.mode = e;
    }
    get currentMode() {
      return this.mode;
    }
    setMode(e) {
      e !== this.mode && ((this.mode = e), this.reset());
    }
    reset() {
      (this.clearChain(),
        (this.groundTicks = 0),
        (this.prevButtons = 0),
        (this.initialSpeed =
          this.initialHeight =
          this.oldSpeed =
          this.oldHeight =
            0));
    }
    clearChain() {
      ((this.jump = 0), this.clearWindow());
    }
    clearWindow() {
      ((this.strafeTicks = this.syncedTicks = 0),
        (this.rawGain = this.trajectory = this.dx = this.dy = 0),
        (this.strafes = 0));
    }
    tick(e, t, n) {
      if (n.noclip)
        return ((this.groundTicks = 0), (this.prevButtons = t.buttons), null);
      if (!e.grounded)
        for (let e of pe)
          t.buttons & e && !(this.prevButtons & e) && this.strafes++;
      ((this.prevButtons = t.buttons),
        e.grounded
          ? (this.groundTicks++ > 10 && this.clearChain(),
            t.buttons & fe &&
              this.groundTicks === 1 &&
              (n.inStart && this.clearChain(),
              this.sample(e, t),
              (this.groundTicks = 0)))
          : (e.onLadder || this.sample(e, t), (this.groundTicks = 0)));
      let r = n.jumped ? this.onJump(e, n.time ?? null) : null;
      return (n.teleported && this.reset(), r);
    }
    sample(e, t) {
      this.strafeTicks++;
      let n = e.velocity[0],
        r = e.velocity[1];
      ((this.dx = E(this.dx + E(n * D))),
        (this.dy = E(this.dy + E(r * D))),
        (this.trajectory = E(this.trajectory + E(O(n, r) * D))));
      let i = E((t.yaw * Math.PI) / 180),
        a = E(Math.cos(i)),
        o = E(Math.sin(i)),
        s = E(E(a * t.forward) + E(o * t.side)),
        c = E(E(o * t.forward) - E(a * t.side)),
        l = E(E(E(s * s) + E(c * c)) + he),
        u = E(1 / Math.sqrt(l)),
        d = E(l * u),
        f = Math.min(d, T),
        p = E(E(n * E(s * u)) + E(r * E(c * u)));
      p < T &&
        (this.syncedTicks++,
        (this.rawGain = E(this.rawGain + E(E(f - Math.abs(p)) / f))));
    }
    onJump(e, t) {
      if (this.jump > 0 && this.strafeTicks <= 0) return null;
      let n = ++this.jump,
        r = this.mode,
        i = O(e.velocity[0], e.velocity[1]),
        a = e.position[2],
        o = me(r, n) ? this.report(i, a, t) : null;
      return (
        ((r === `sixth` && n >= 6) ||
          r === `every` ||
          (r === `everySixth` && n % 6 == 0)) &&
          (this.clearWindow(), (this.oldSpeed = i), (this.oldHeight = a)),
        ((r === `sixth` && n === 1) || (r === `everySixth` && n % 6 == 1)) &&
          ((this.initialSpeed = i),
          (this.initialHeight = a),
          (this.dx = this.dy = 0)),
        o
      );
    }
    report(e, t, n) {
      let r = this.jump,
        i = this.mode !== `every` || r > 1,
        a = this.mode === `every` ? this.oldSpeed : this.initialSpeed,
        o = this.mode === `every` ? this.oldHeight : this.initialHeight,
        s = this.strafeTicks,
        c = s > 0 ? E(E(this.rawGain / s) * 100) : 0,
        l = Math.min(O(this.dx, this.dy), this.trajectory),
        u = l > 0 && this.trajectory > 0 ? E(E(c * l) / this.trajectory) : 0;
      return {
        jump: r,
        speed: Math.floor(e),
        diff: i ? Math.floor(e) - Math.floor(a) : null,
        height: i ? Math.floor(t) - Math.floor(o) : null,
        gain: i && s > 0 ? k(c) : null,
        sync: i && s > 0 ? E(E(100 * this.syncedTicks) / s) : null,
        eff: i && s > 0 ? k(u) : null,
        strafes: i ? this.strafes : null,
        time: n,
      };
    }
  },
  _e = (e) => (Math.trunc(e * 10) / 10).toFixed(1),
  A = (e) => (e > 0 ? `+${e}` : String(e));
function j(t, n) {
  let r = [[`Jump `, { n: String(t.jump) }]];
  return (
    n.speed
      ? r.push([
          { n: String(t.speed) },
          ` u/s`,
          ...(n.diff && t.diff !== null ? [` (`, { n: A(t.diff) }, `)`] : []),
        ])
      : n.diff && t.diff !== null && r.push([{ n: A(t.diff) }, ` u/s`]),
    n.gain &&
      t.gain !== null &&
      r.push([`Gain `, { n: `${_e(t.gain)}%`, good: t.gain >= 80 }]),
    n.sync &&
      t.sync !== null &&
      r.push([`Sync `, { n: `${Math.trunc(t.sync)}%` }]),
    n.strafes &&
      t.strafes !== null &&
      r.push([
        { n: String(t.strafes) },
        t.strafes === 1 ? ` strafe` : ` strafes`,
      ]),
    n.eff && t.eff !== null && r.push([`Eff `, { n: `${Math.trunc(t.eff)}%` }]),
    n.height && t.height !== null && r.push([`Height `, { n: A(t.height) }]),
    n.time && t.time !== null && r.push([`Time `, { n: e(t.time) }]),
    r
  );
}
var M = ` · `;
function ve(e, t) {
  return j(e, t)
    .map((e) => e.map((e) => (typeof e == `string` ? e : e.n)).join(``))
    .join(M);
}
var N = [
    {
      id: `teleport`,
      core: 0,
      label: `Teleports`,
      group: `triggers`,
      color: 16728128,
    },
    {
      id: `push`,
      core: 1,
      label: `Boosters`,
      group: `triggers`,
      color: 4033535,
    },
    {
      id: `gravity`,
      core: 2,
      label: `Gravity and speed`,
      group: `triggers`,
      color: 4054148,
    },
    {
      id: `other`,
      core: 3,
      label: `Other triggers`,
      group: `triggers`,
      color: 16765501,
    },
    {
      id: `clip`,
      core: 4,
      label: `Player clips`,
      group: `clips`,
      color: 11754751,
    },
    {
      id: `wall`,
      core: 5,
      label: `Invisible walls`,
      group: `clips`,
      color: 11844292,
    },
  ],
  ye = {
    show: !1,
    clips: !1,
    kinds: {
      teleport: !0,
      push: !0,
      gravity: !0,
      other: !0,
      clip: !0,
      wall: !0,
    },
  },
  P = (e) => N.find((t) => t.id === e);
function F(e, t) {
  return (P(t).group === `triggers` ? e.show : e.clips) && e.kinds[t];
}
function be(e, t) {
  if (F(e, t)) {
    e.kinds[t] = !1;
    return;
  }
  ((e.kinds[t] = !0),
    P(t).group === `triggers` ? (e.show = !0) : (e.clips = !0));
}
var xe = 0.3;
function Se(e, t, n) {
  let r = !!(n & 1),
    i = !!(n & 2);
  return e ? (r ? 1 : i ? xe : 0) : r && !(t & 1 && i) ? 1 : 0;
}
var I = 131072,
  L = 0.01;
function Ce(e, t) {
  let n = Math.abs(e[0]),
    r = Math.abs(e[1]),
    i = Math.abs(e[2]),
    a = i >= n && i >= r ? [1, 0, 0] : [0, 0, 1],
    o = a[0] * e[0] + a[1] * e[1] + a[2] * e[2];
  a = [a[0] - o * e[0], a[1] - o * e[1], a[2] - o * e[2]];
  let s = Math.hypot(...a);
  a = [a[0] / s, a[1] / s, a[2] / s];
  let c = [
      a[1] * e[2] - a[2] * e[1],
      a[2] * e[0] - a[0] * e[2],
      a[0] * e[1] - a[1] * e[0],
    ],
    l = [e[0] * t, e[1] * t, e[2] * t],
    u = (e, t) => [
      l[0] + c[0] * e + a[0] * t,
      l[1] + c[1] * e + a[1] * t,
      l[2] + c[2] * e + a[2] * t,
    ];
  return [u(-131072, -131072), u(I, -131072), u(I, I), u(-131072, I)];
}
function we(e, t, n) {
  let r = [],
    i = e.map((e) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2] - n);
  for (let t = 0; t < e.length; t++) {
    let n = e[t],
      a = e[(t + 1) % e.length],
      o = i[t],
      s = i[(t + 1) % e.length];
    if ((o <= L && r.push(n), (o < -0.01 && s > L) || (o > L && s < -0.01))) {
      let e = o / (o - s);
      r.push([
        n[0] + (a[0] - n[0]) * e,
        n[1] + (a[1] - n[1]) * e,
        n[2] + (a[2] - n[2]) * e,
      ]);
    }
  }
  return r;
}
function Te(e) {
  let t = Math.floor(e.length / 4),
    n = [],
    r = (t, n) => [0, 1, 2, 3].every((r) => e[t * 4 + r] === e[n * 4 + r]);
  for (let i = 0; i < t; i++) {
    let a = !1;
    for (let e = 0; e < i && !a; e++) a = r(i, e);
    if (a) continue;
    let o = Ce([e[i * 4], e[i * 4 + 1], e[i * 4 + 2]], e[i * 4 + 3]);
    for (let n = 0; n < t && o.length >= 3; n++)
      n !== i &&
        (o = we(o, [e[n * 4], e[n * 4 + 1], e[n * 4 + 2]], e[n * 4 + 3]));
    o.length >= 3 && Ee(o) > 0.01 && n.push(o);
  }
  return n;
}
function Ee(e) {
  let t = 0,
    n = 0,
    r = 0;
  for (let i = 1; i + 1 < e.length; i++) {
    let a = [e[i][0] - e[0][0], e[i][1] - e[0][1], e[i][2] - e[0][2]],
      o = [e[i + 1][0] - e[0][0], e[i + 1][1] - e[0][1], e[i + 1][2] - e[0][2]];
    ((t += a[1] * o[2] - a[2] * o[1]),
      (n += a[2] * o[0] - a[0] * o[2]),
      (r += a[0] * o[1] - a[1] * o[0]));
  }
  return Math.hypot(t, n, r) / 2;
}
function De(e) {
  let t = [{ entity: -1, model: -1, flags: 0 }],
    n = new Map(),
    r = N.map(() => 0),
    i = [],
    a = [],
    o = [],
    s = [],
    c = [],
    l = [];
  for (let u of e) {
    let e = N.findIndex((e) => e.core === u.kind);
    if (e < 0) continue;
    let d = 0;
    if (u.entity >= 0 || u.model >= 0) {
      let e = `${u.entity}:${u.model}:${u.flags}`;
      ((d = n.get(e) ?? -1),
        d < 0 &&
          ((d = t.length),
          t.push({ entity: u.entity, model: u.model, flags: u.flags }),
          n.set(e, d)));
    }
    let f = Te(u.planes);
    if (!f.length) continue;
    r[e]++;
    let p = new Set(),
      m = (e) =>
        `${Math.round(e[0] * 8)},${Math.round(e[1] * 8)},${Math.round(e[2] * 8)}`;
    for (let t of f) {
      for (let n = 1; n + 1 < t.length; n++) {
        for (let e of [t[0], t[n], t[n + 1]]) i.push(e[0], e[1], e[2]);
        (a.push(e, e, e), o.push(d, d, d));
      }
      for (let n = 0; n < t.length; n++) {
        let r = t[n],
          i = t[(n + 1) % t.length],
          a = m(r),
          o = m(i);
        if (a === o) continue;
        let u = a < o ? `${a}|${o}` : `${o}|${a}`;
        p.has(u) ||
          (p.add(u),
          s.push(r[0], r[1], r[2], i[0], i[1], i[2]),
          c.push(e, e),
          l.push(d, d));
      }
    }
  }
  return {
    faces: {
      position: new Float32Array(i),
      kind: new Float32Array(a),
      slot: new Float32Array(o),
    },
    edges: {
      position: new Float32Array(s),
      kind: new Float32Array(c),
      slot: new Float32Array(l),
    },
    slots: t,
    counts: r,
  };
}
function Oe(e, t, n) {
  let r = Math.PI / 180,
    [i, a] = [Math.sin(e[3] * r), Math.cos(e[3] * r)],
    [o, s] = [Math.sin(e[4] * r), Math.cos(e[4] * r)],
    [c, l] = [Math.sin(e[5] * r), Math.cos(e[5] * r)];
  (t.set([a * s, c * i * s - l * o, l * i * s + c * o, e[0]], n),
    t.set([a * o, c * i * o + l * s, l * i * o - c * s, e[1]], n + 4),
    t.set([-i, c * a, l * a, e[2]], n + 8));
}
var ke = [
    { id: `forward`, label: `Forward` },
    { id: `back`, label: `Back` },
    { id: `left`, label: `Strafe left` },
    { id: `right`, label: `Strafe right` },
    { id: `jump`, label: `Jump` },
    { id: `duck`, label: `Duck` },
    { id: `use`, label: `Use (doors, buttons)` },
    { id: `restart`, label: `Restart run` },
    { id: `restartBonus`, label: `Bonus (next bonus)` },
    { id: `restartMain`, label: `Main track` },
    { id: `setStart`, label: `Set start point` },
    { id: `clearStart`, label: `Clear start point` },
    { id: `cycleStyle`, label: `Switch style` },
    { id: `mainMenu`, label: `Main menu` },
    { id: `hudEditor`, label: `Edit HUD layout` },
    { id: `thirdPerson`, label: `Third person (practice)` },
    { id: `attack`, label: `Slash (carrot)` },
    { id: `attack2`, label: `Stab (carrot)` },
    { id: `inspect`, label: `Inspect carrot` },
    { id: `viewmodel`, label: `Show / hide viewmodel` },
    { id: `keysOverlay`, label: `Show / hide keys overlay` },
    { id: `hideUi`, label: `Hide UI` },
    { id: `mute`, label: `Mute sound` },
    { id: `nextTrack`, label: `Next music track` },
    { id: `practice`, label: `Practice mode` },
    { id: `noclip`, label: `Noclip` },
    { id: `cpSave`, label: `Save checkpoint` },
    { id: `cpTeleport`, label: `Teleport to checkpoint` },
    { id: `cpPrev`, label: `Previous checkpoint` },
    { id: `cpNext`, label: `Next checkpoint` },
    { id: `turnLeft`, label: `Turn left (+left)` },
    { id: `turnRight`, label: `Turn right (+right)` },
    { id: `slot1`, label: `Primary weapon` },
    { id: `slot2`, label: `Pistol` },
    { id: `slot3`, label: `Knife` },
    { id: `lastWeapon`, label: `Last weapon` },
    { id: `nextWeapon`, label: `Next weapon` },
    { id: `prevWeapon`, label: `Previous weapon` },
    { id: `drop`, label: `Drop weapon` },
    { id: `reload`, label: `Reload` },
    { id: `giveUsp`, label: `Get the USP (!usp)` },
    { id: `giveGlock`, label: `Get the Glock (!glock)` },
    { id: `gunMenu`, label: `Guns menu (!guns)` },
  ],
  R = {
    sensitivity: 2,
    dpi: 800,
    invertY: !1,
    rawInput: !0,
    spikeFilter: !0,
    inputStats: !1,
    fov: 90,
    crosshair: {
      style: `cross`,
      color: `#4dff6a`,
      size: 6,
      thickness: 2,
      gap: 4,
      outline: !0,
      alpha: 1,
    },
    hud: {
      speedColors: !0,
      scale: 1,
      layout: m,
      keys: y,
      hidden: !1,
      hiddenKeeps: `speedKeys`,
      ssj: w,
    },
    volume: 0.8,
    audio: {
      music: 0.5,
      sfx: 0.8,
      ui: 0.6,
      ambience: 0.7,
      muted: !1,
      mute: { music: !1, sfx: !1, ui: !1, ambience: !1 },
      musicMode: `always`,
      shuffle: !0,
      classic: !1,
      footsteps: !0,
      wind: !0,
      others: !0,
      ghosts: !1,
      muteInBackground: !0,
    },
    showGhost: !0,
    ghost: {
      pb: !0,
      wr: !0,
      custom: !0,
      opacity: 0.55,
      trail: !0,
      nearFade: !0,
      tag: !0,
    },
    tags: { throughWalls: !1, players: !0 },
    showZones: !0,
    triggers: ye,
    models: {
      player: `bunny`,
      ghost: `same`,
      team: `ct`,
      ct: `ct_urban`,
      t: `t_leet`,
    },
    graphics: {
      resolutionScale: 1,
      anisotropy: 8,
      menuBackground: `live`,
      fullscreen: !0,
      potato: !1,
    },
    viewmodel: { show: !0, ...C, bob: 1, sway: 1, hand: `right`, rev: 2 },
    binds: l,
    practice: { keepVelocity: !0 },
    holdRestart: !1,
    mouseNames: 2,
  },
  z = `bunnyhop:settings`;
function B(e, t) {
  if (typeof e != `object` || !e || Array.isArray(e))
    return Array.isArray(e)
      ? Array.isArray(t) && t.every((e) => typeof e == `string`)
        ? t
        : e
      : typeof t == typeof e
        ? t
        : e;
  let n = {},
    r = typeof t == `object` && t ? t : {};
  for (let t of Object.keys(e)) n[t] = B(e[t], r[t]);
  return n;
}
var V = (e) => JSON.parse(JSON.stringify(e));
function H(e) {
  return (Fe(e), Me(e), Pe(e), Ae(e), Ie(e));
}
function Ae(e) {
  let t = e?.viewmodel;
  if (
    !t ||
    typeof t != `object` ||
    Array.isArray(t) ||
    typeof t.rev == `number`
  )
    return;
  let n = ue;
  (Object.keys(n).every((e) => t[e] === void 0 || t[e] === n[e]) &&
    Object.assign(t, C),
    (t.rev = 2));
}
var je = H;
function Me(e) {
  if (!e || typeof e != `object` || e.mouseNames === 2) return;
  let t = e.binds;
  if (!t || typeof t != `object`) return;
  let n = Object.entries(t).filter((e) => Array.isArray(e[1])),
    r = n.some(([, e]) => e.includes(`Mouse3`));
  for (let [e, i] of n)
    t[e] = i.map((t) =>
      t === `Mouse3`
        ? `Mouse2`
        : t === `Mouse2`
          ? e === `attack2` && !r
            ? `Mouse2`
            : `Mouse3`
          : t,
    );
  e.mouseNames = 2;
}
var Ne = [`zoneEditor`];
function Pe(e) {
  let t = e?.binds;
  if (!t || typeof t != `object`) return;
  for (let e of Ne) delete t[e];
  let n = new Set();
  for (let e of Object.values(t))
    if (Array.isArray(e)) for (let t of e) typeof t == `string` && n.add(t);
  for (let [e, r] of Object.entries(l))
    e in t || (t[e] = r.filter((e) => !n.has(e)));
}
function Fe(e) {
  let t = e?.models;
  t &&
    typeof t == `object` &&
    ((t.player === `ct` || t.player === `t`) &&
      ((t.team = t.player), (t.player = `bunny`)),
    (t.ghost === `ct` || t.ghost === `t`) && (t.ghost = `same`));
}
function Ie(e) {
  let t = e?.hud;
  if (!t || typeof t != `object` || t.layout) return e;
  let n = {
      speed: `speed`,
      timer: `timer`,
      split: `split`,
      stats: `stats`,
      keys: `keys`,
      mapLine: `map`,
      fps: `fps`,
    },
    r = V(m);
  for (let [e, i] of Object.entries(n))
    typeof t[e] == `boolean` && u.some((e) => e.id === i) && (r[i].on = t[e]);
  return ((t.layout = r), e);
}
function Le() {
  try {
    let e = localStorage.getItem(z);
    return e ? B(R, H(JSON.parse(e))) : V(R);
  } catch {
    return V(R);
  }
}
var Re = new (class {
  p = Le();
  listeners = new Set();
  get() {
    return this.p;
  }
  update(e) {
    e(this.p);
    try {
      localStorage.setItem(z, JSON.stringify(this.p));
    } catch {}
    for (let e of this.listeners) e(this.p);
  }
  reset(e) {
    this.update((t) => {
      e ? (t[e] = V(R[e])) : Object.assign(t, V(R));
    });
  }
  watch(e) {
    return (this.listeners.add(e), e(this.p), () => this.listeners.delete(e));
  }
})();
function ze(e) {
  let t = {
    Space: `Space`,
    ControlLeft: `L-Ctrl`,
    ControlRight: `R-Ctrl`,
    ShiftLeft: `L-Shift`,
    ShiftRight: `R-Shift`,
    AltLeft: `L-Alt`,
    AltRight: `R-Alt`,
    MetaLeft: `L-Meta`,
    MetaRight: `R-Meta`,
    MouseWheel: `Wheel ↕`,
    MWheelUp: `Wheel ↑`,
    MWheelDown: `Wheel ↓`,
    Mouse1: `Mouse 1`,
    Mouse2: `Mouse 2`,
    Mouse3: `Mouse 3`,
    Mouse4: `Mouse 4`,
    Mouse5: `Mouse 5`,
    ArrowUp: `↑`,
    ArrowDown: `↓`,
    ArrowLeft: `←`,
    ArrowRight: `→`,
    Backquote: "`",
    CapsLock: `Caps`,
    Tab: `Tab`,
  };
  return t[e]
    ? t[e]
    : e.startsWith(`Key`)
      ? e.slice(3)
      : e.startsWith(`Digit`)
        ? e.slice(5)
        : e.startsWith(`Numpad`)
          ? `Num ` + e.slice(6)
          : e;
}
function Be(e) {
  return Math.min(devicePixelRatio, e.potato ? 1 : 2) * e.resolutionScale;
}
function U(e) {
  let t = (e * Math.PI) / 360;
  return (2 * Math.atan(Math.tan(t) * 0.75) * 180) / Math.PI;
}
function Ve(e, t) {
  let n = (U(e) * Math.PI) / 360;
  return (2 * Math.atan(Math.tan(n) * t) * 180) / Math.PI;
}
var He = (e) => `content/${e}`,
  Ue = (e) => `content-manifests/${e}.json`;
function We(e) {
  let t = e;
  return (
    !!t &&
    t.version === 1 &&
    typeof t.mapSha256 == `string` &&
    !!t.files &&
    typeof t.files == `object`
  );
}
var W = null,
  G = new Set();
function Ge(e) {
  let t =
    !W ||
    W.base !== e.base ||
    Object.keys(W.group.files).length !== Object.keys(e.group.files).length;
  if (((W = e), t)) for (let t of G) t(e);
}
function Ke() {
  return W;
}
function qe(e) {
  return (G.add(e), W && e(W), () => G.delete(e));
}
var Je = { pb: 16761405, wr: 5220607, custom: 15331579 },
  K = { pb: `#ffc23d`, wr: `#4fa8ff`, custom: `#e9f0fb` },
  q = `bunnyhop:ghost-cosmetics`,
  J = new Set();
function Y(e, n) {
  let i = t(e),
    a = t(n),
    o = i?.slot === `ghost` ? i.id : r.ghost,
    s = a?.slot === `trail` ? a.id : r.trail,
    c = t(o),
    l = t(s),
    u = c?.color ?? K.pb,
    d = l?.color ?? K.pb;
  return {
    ghostId: o,
    trailId: s,
    ghost: u,
    trail: d,
    ghost2: c?.color2 ?? u,
    trail2: l?.color2 ?? d,
  };
}
function Ye() {
  try {
    let e = JSON.parse(localStorage.getItem(q) ?? `{}`);
    return Y(e.ghost, e.trail);
  } catch {
    return Y(null, null);
  }
}
function Xe(e, t) {
  let n = Y(e, t);
  try {
    localStorage.setItem(
      q,
      JSON.stringify({ ghost: n.ghostId, trail: n.trailId }),
    );
  } catch {}
  for (let e of J) e(n);
}
function Ze(e) {
  return (J.add(e), () => J.delete(e));
}
var Qe = `bunnyhop:outfit`,
  $e = `bunnyhop:outfit-unlocked`,
  X = new Set();
function Z(e) {
  let n = t(e);
  return n?.slot === `outfit` ? n.id : r.outfit;
}
function et() {
  try {
    return Z(localStorage.getItem(Qe));
  } catch {
    return r.outfit;
  }
}
function tt(e) {
  let t = Z(e);
  try {
    localStorage.setItem(Qe, t);
  } catch {}
  for (let e of X) e(t);
}
function nt(e) {
  return (X.add(e), () => X.delete(e));
}
function rt() {
  try {
    return new Set(JSON.parse(localStorage.getItem($e) ?? `[]`));
  } catch {
    return new Set();
  }
}
function it(e) {
  try {
    localStorage.setItem(
      $e,
      JSON.stringify(e.filter((e) => t(e)?.slot === `outfit`)),
    );
  } catch {}
}
var at = `bunnyhop:loadout`,
  Q = new Set();
function $() {
  try {
    return i(JSON.parse(localStorage.getItem(at) ?? `null`)) ?? { ...a };
  } catch {
    return { ...a };
  }
}
function ot(e) {
  let t = i(e) ?? { ...a },
    r = $();
  try {
    localStorage.setItem(at, JSON.stringify(t));
  } catch {}
  if (!n(r, t)) for (let e of Q) e(t);
}
function st(e) {
  return (Q.add(e), () => Q.delete(e));
}
export {
  s as $,
  F as A,
  m as B,
  Ve as C,
  U as D,
  Re as E,
  M as F,
  g as G,
  ne as H,
  ge as I,
  ce as J,
  h as K,
  j as L,
  be as M,
  Oe as N,
  N as O,
  de as P,
  l as Q,
  ve as R,
  Be as S,
  je as T,
  d as U,
  u as V,
  f as W,
  ae as X,
  ie as Y,
  re as Z,
  He as _,
  Ze as a,
  ke as b,
  it as c,
  tt as d,
  c as et,
  Je as f,
  Ke as g,
  Ge as h,
  rt as i,
  Se as j,
  De as k,
  Xe as l,
  qe as m,
  $ as n,
  st as o,
  K as p,
  le as q,
  et as r,
  nt as s,
  Ye as t,
  ot as u,
  We as v,
  ze as w,
  R as x,
  Ue as y,
  C as z,
};
