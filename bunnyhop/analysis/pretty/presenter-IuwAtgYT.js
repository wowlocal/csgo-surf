import {
  $ as e,
  $t as t,
  A as n,
  C as r,
  Cr as i,
  Dr as a,
  G as o,
  H as s,
  I as c,
  It as l,
  J as u,
  K as d,
  Lt as f,
  N as p,
  O as m,
  Or as h,
  P as g,
  Q as _,
  Sn as v,
  Sr as y,
  T as b,
  Ut as x,
  X as S,
  Yt as C,
  Z as ee,
  at as w,
  br as T,
  cn as E,
  ct as te,
  dt as D,
  en as ne,
  et as re,
  ht as ie,
  it as O,
  j as ae,
  kr as oe,
  ln as se,
  lt as k,
  m as ce,
  nt as A,
  ot as j,
  p as le,
  qr as M,
  qt as ue,
  rt as N,
  st as P,
  tt as F,
  un as de,
  ut as I,
  vt as fe,
  w as pe,
  wn as me,
  wt as L,
  x as R,
  xn as he,
  xt as ge,
  y as _e,
  yn as ve,
  yt as ye,
  zt as be,
} from "./model-CJn1vZL3.js";
import {
  S as xe,
  c as Se,
  f as Ce,
  i as we,
  l as Te,
  m as Ee,
  p as De,
  s as Oe,
  v as ke,
  x as Ae,
} from "./core-GuI4LXND.js";
import { l as je, s as Me } from "./ghost-BF02H5nr.js";
import { g as Ne, k as Pe } from "./account-state-BYMidhZ9.js";
import {
  D as Fe,
  E as Ie,
  n as Le,
  o as Re,
  r as ze,
  s as Be,
} from "./cosmetics-PGh_ZGfu.js";
import { a as Ve } from "./loadout-DopA3xcw.js";
import { n as He, r as Ue } from "./palettes-YJRmTQgw.js";
var We = null;
function Ge() {
  if (We) return We;
  let e = n();
  return (
    e.uAccent.value.set(16742938),
    e.uNearFade.value.set(0, 0),
    (We = ae(e))
  );
}
function Ke(e, t, n, r) {
  Je(e, t, n[0], n[1], n[2], r);
}
var qe = new WeakMap();
function Je(e, t, n, r, i, a) {
  let o = qe.get(t);
  if (o === void 0) {
    let e = le(t);
    (e.boundingBox || e.computeBoundingBox(),
      qe.set(t, (o = -(e.boundingBox?.min.y ?? -0.6))));
  }
  (e.position.set(n, r, i + o),
    e.rotation.set(Math.PI / 2, 0, (a * Math.PI) / 180, `ZXY`));
}
var Ye = class {
  root = new ue();
  live = new Map();
  spare = new Map();
  slots = [];
  constructor() {
    ((this.root.name = `floor-guns`), (this.root.rotation.x = -Math.PI / 2));
  }
  sync(e) {
    let t = new Set();
    for (let n of e) {
      let e = ce(n.weapon);
      if (!e) continue;
      t.add(n.key);
      let r = this.live.get(n.key);
      ((!r || r.userData.gun !== e.id) &&
        (r && this.release(r), (r = this.take(e)), this.live.set(n.key, r)),
        Ke(r, e, n.origin, n.yaw));
    }
    for (let [e, n] of this.live)
      t.has(e) || (this.release(n), this.live.delete(e));
  }
  update(e) {
    let t = Math.floor(e.length / 9);
    for (let e = t; e < this.slots.length; e++) this.free(e);
    for (let n = 0; n < t; n++) {
      let t = n * 9,
        r = e[t + 2] & 1 ? ce(Te[e[t + 1]]) : void 0;
      if (!r) {
        this.free(n);
        continue;
      }
      let i = this.slots[n] ?? null;
      (i && i.userData.gun !== r.id && (this.release(i), (i = null)),
        i || (this.slots[n] = i = this.take(r)),
        Je(i, r, e[t + 3], e[t + 4], e[t + 5], e[t + 7]));
    }
  }
  free(e) {
    let t = this.slots[e];
    t && (this.release(t), (this.slots[e] = null));
  }
  static fromEntities(e) {
    let t = new Set();
    for (let n of e)
      if (n.classname === `point_template`)
        for (let [e, r] of Object.entries(n))
          /^template\d+$/i.test(e) && t.add(r.toLowerCase());
    let n = [];
    return (
      e.forEach((e, r) => {
        let i = /^weapon_(\w+)$/.exec(e.classname ?? ``);
        if (
          !i ||
          i[1] === `knife` ||
          (e.targetname && t.has(e.targetname.toLowerCase()))
        )
          return;
        let a = (e.origin ?? `0 0 0`).split(/\s+/).map(Number),
          o = Number((e.angles ?? `0 0 0`).split(/\s+/)[1] ?? 0);
        n.push({ key: r, weapon: i[1], origin: a, yaw: o });
      }),
      n
    );
  }
  take(e) {
    let t = this.spare.get(e.id)?.pop() ?? new se(le(e), Ge());
    return ((t.userData.gun = e.id), this.root.add(t), t);
  }
  release(e) {
    e.removeFromParent();
    let t = e.userData.gun,
      n = this.spare.get(t);
    (n || this.spare.set(t, (n = [])), n.push(e));
  }
  clear() {
    for (let e of this.live.values()) this.release(e);
    this.live.clear();
    for (let e = 0; e < this.slots.length; e++) this.free(e);
  }
};
function Xe(e) {
  let t = Object.assign(Object.create(Object.getPrototypeOf(e)), e),
    n = t.splits;
  return (Array.isArray(n) && (t.splits = n.map((e) => ({ ...e }))), t);
}
var Ze = 100,
  Qe = 160 << 20,
  $e = class {
    core;
    replay;
    data;
    keyframes = [];
    cur = -1;
    timer;
    filter;
    pre;
    warned = !1;
    stats = {
      prepassMs: 0,
      keyframeTicks: Ze,
      keyframes: 0,
      keyframeBytes: 0,
      lastSeekMs: 0,
    };
    constructor(e, t) {
      ((this.core = e), (this.replay = t));
      let n = performance.now(),
        r = t.header,
        i = r.totalTicks,
        a = Math.fround(r.settings.tickInterval),
        o = {
          replay: t,
          n: i,
          interval: a,
          tickrate: Math.round(1 / a),
          pos: new Float32Array((i + 1) * 3),
          vel: new Float32Array((i + 1) * 3),
          viewZ: new Float32Array(i + 1),
          view: new Float32Array((i + 1) * 2),
          flags: new Uint8Array(i + 1),
          buttons: new Uint16Array(i + 1),
          forward: new Int16Array(i + 1),
          side: new Int16Array(i + 1),
          speed: new Float32Array(i + 1),
          status: new Uint8Array(i + 1),
          runTicks: new Int32Array(i + 1),
          jumps: new Uint16Array(i + 1),
          strafes: new Uint16Array(i + 1),
          sync: new Float32Array(i + 1),
          track: new Uint8Array(i + 1),
          inStart: new Uint8Array(i + 1),
          splitCount: new Uint8Array(i + 1),
          jumpTicks: [],
          splits: [],
          starts: [],
          startTick: 0,
          endTick: 0,
          runTrack: r.track ?? 0,
          maxSpeed: 0,
          desyncTick: null,
          styleViolations: 0,
        };
      this.data = o;
      let s = Ee(e),
        c = 0,
        l = (e, t, n, r) => {
          (o.pos.set(t.position, e * 3),
            o.vel.set(t.velocity, e * 3),
            (o.viewZ[e] = t.viewOffsetZ));
          let i = Math.sqrt(
            t.velocity[0] * t.velocity[0] + t.velocity[1] * t.velocity[1],
          );
          ((o.speed[e] = i),
            (o.flags[e] =
              +!!t.crouched |
              (t.grounded ? 2 : 0) |
              (n & 1 ? 4 : 0) |
              (n & 2 ? 8 : 0) |
              (n & 4 ? 16 : 0) |
              (t.onLadder ? 64 : 0)),
            r &&
              ((o.status[e] =
                r.status === `running` ? 1 : r.status === `finished` ? 2 : 0),
              (o.runTicks[e] = r.ticks()),
              (o.jumps[e] = r.jumps),
              (o.strafes[e] = r.strafes),
              (o.sync[e] = r.syncPercent()),
              (o.track[e] = r.track),
              (o.inStart[e] = +!!r.inStart),
              (o.splitCount[e] = r.splits.length)));
        },
        u = je(e, t, r.zones, { untilTick: 0 });
      (l(0, u.final, 0, u.timer),
        (o.view[0] = i > 0 ? t.yaw[0] : u.final.teleportAngles[1]),
        (o.view[1] = i > 0 ? t.pitch[0] : u.final.teleportAngles[0]));
      let d = [],
        f = je(e, t, r.zones, {
          onTick: (t, n, r, a) => {
            if (
              (l(t, n, r, a.timer),
              (o.view[t * 2] = a.cmd.yaw),
              (o.view[t * 2 + 1] = a.cmd.pitch),
              (o.buttons[t] = a.cmd.buttons),
              (o.forward[t] = a.cmd.forward),
              (o.side[t] = a.cmd.side),
              o.speed[t] > o.maxSpeed && (o.maxSpeed = o.speed[t]),
              r & 2 && o.jumpTicks.push(t),
              a.update.started && (o.starts.push(t), (d = [])),
              a.update.restarted && ((o.flags[t] |= 32), (d = [])),
              a.update.split && d.push({ ...a.update.split, tick: t }),
              s && t % Ze === 0 && t < i)
            ) {
              let r = xe(e);
              r &&
                ((c += Ae(e, r)),
                this.keyframes.push({
                  tick: t,
                  handle: r,
                  timer: Xe(a.timer),
                  filter: Xe(a.filter),
                  state: n,
                }));
            }
          },
        });
      ((o.splits = d),
        (o.startTick = f.startTick),
        (o.endTick = f.endTick),
        f.startTick && (o.runTrack = f.track),
        (o.desyncTick = f.checkpointsMatch ? null : f.firstMismatchTick),
        (o.styleViolations = f.styleViolations),
        (this.timer = f.timer),
        (this.filter = f.filter),
        (this.pre = f.final),
        (this.cur = i));
      let p = Ze;
      for (; c > Qe && this.keyframes.length > 1; ) {
        p *= 2;
        let t = [];
        c = 0;
        for (let n of this.keyframes)
          n.tick % p === 0
            ? (t.push(n), (c += Ae(e, n.handle)))
            : De(e, n.handle);
        this.keyframes = t;
      }
      ((this.stats.keyframeTicks = p),
        (this.stats.keyframes = this.keyframes.length),
        (this.stats.keyframeBytes = c),
        (this.stats.prepassMs = performance.now() - n));
    }
    get tick() {
      return this.cur;
    }
    invalidate() {
      this.cur = -1;
    }
    seek(e) {
      let t = this.data;
      if (((e = Math.max(0, Math.min(t.n, Math.floor(e)))), e === this.cur))
        return;
      let n = performance.now(),
        r = this.stats.keyframeTicks;
      if (!(this.cur >= 0 && e > this.cur && e - this.cur <= r)) {
        let t = null;
        for (let n of this.keyframes) n.tick <= e && (t = n);
        if (t && ke(this.core, t.handle))
          ((this.timer = Xe(t.timer)),
            (this.filter = Xe(t.filter)),
            (this.pre = t.state),
            (this.cur = t.tick));
        else {
          let e = je(this.core, this.replay, this.replay.header.zones, {
            untilTick: 0,
          });
          ((this.timer = e.timer),
            (this.filter = e.filter),
            (this.pre = e.final),
            (this.cur = 0));
        }
      }
      for (; this.cur < e; ) {
        let e = Me(
          this.core,
          this.timer,
          this.filter,
          this.replay,
          this.cur,
          this.pre,
        );
        if (((this.pre = e.state), this.cur++, !this.warned)) {
          let n = this.cur * 3,
            r = e.state.position;
          (!Object.is(Math.fround(r[0]), t.pos[n]) ||
            !Object.is(Math.fround(r[1]), t.pos[n + 1]) ||
            !Object.is(Math.fround(r[2]), t.pos[n + 2])) &&
            ((this.warned = !0),
            console.warn(
              `replay viewer: playback diverged from the initial pass at tick ${this.cur}`,
            ));
        }
      }
      this.stats.lastSeekMs = performance.now() - n;
    }
    brushOrigins() {
      return this.core.brushOrigins();
    }
    dispose() {
      for (let e of this.keyframes) De(this.core, e.handle);
      ((this.keyframes = []), (this.cur = -1));
    }
  },
  et = (e) => ((((e + 180) % 360) + 360) % 360) - 180;
function tt(e, t, n) {
  t = Math.max(0, Math.min(e.n, t));
  let r = Math.min(e.n, Math.floor(t)),
    i = Math.min(e.n, r + 1),
    a = i === r || e.flags[i] & 4 ? 0 : t - r,
    o = n ?? {
      t,
      pos: [0, 0, 0],
      vel: [0, 0, 0],
      viewZ: 64,
      yaw: 0,
      pitch: 0,
      speed: 0,
      crouched: !1,
      grounded: !0,
      forward: 0,
      side: 0,
      i: r,
    };
  ((o.t = t), (o.i = r));
  for (let t = 0; t < 3; t++)
    ((o.pos[t] = e.pos[r * 3 + t] + (e.pos[i * 3 + t] - e.pos[r * 3 + t]) * a),
      (o.vel[t] =
        e.vel[r * 3 + t] + (e.vel[i * 3 + t] - e.vel[r * 3 + t]) * a));
  return (
    (o.viewZ = e.viewZ[r] + (e.viewZ[i] - e.viewZ[r]) * a),
    (o.yaw = e.view[r * 2] + et(e.view[i * 2] - e.view[r * 2]) * a),
    (o.pitch = e.view[r * 2 + 1] + (e.view[i * 2 + 1] - e.view[r * 2 + 1]) * a),
    (o.speed = e.speed[r] + (e.speed[i] - e.speed[r]) * a),
    (o.crouched = !!(e.flags[r] & 1)),
    (o.grounded = !!(e.flags[r] & 2) || !!(e.flags[i] & 2)),
    (o.forward = e.forward[i]),
    (o.side = e.side[i]),
    o
  );
}
function nt(e, t) {
  let n = Math.max(0, Math.min(e.n, Math.floor(t))),
    r = e.status[n] === 1;
  return (e.runTicks[n] + (r && n < e.n ? t - n : 0)) * e.interval;
}
var rt = [
    {
      id: `eye`,
      label: `In-eye`,
      key: `1`,
      title: `First person: the player's exact view`,
    },
    {
      id: `chase`,
      label: `Chase`,
      key: `2`,
      title: `Third person behind the player (drag to orbit, wheel to zoom, double-click to reset)`,
    },
    {
      id: `free`,
      label: `Free`,
      key: `3`,
      title: `Free roam: click to fly (WASD + mouse, Shift fast, Space/Ctrl up/down)`,
    },
    {
      id: `flyby`,
      label: `Flyby`,
      key: `4`,
      title: `Cinematic drone following the run`,
    },
    {
      id: `auto`,
      label: `Auto`,
      key: `5`,
      title: `Auto-director: cuts between chase, in-eye, tripod and flyby shots`,
    },
  ],
  z = Math.PI / 180,
  it = (e) => ((((e + 180) % 360) + 360) % 360) - 180,
  B = (e, t) => 1 - Math.exp(-e * t),
  at = (e, t, n) => (e < t ? t : e > n ? n : e);
function ot(e, t = new M()) {
  return t.set(e[0], e[2], -e[1]);
}
function st(e, t, n, r) {
  (e.position.set(t[0], t[2], -t[1]),
    (e.rotation.order = `YXZ`),
    e.rotation.set((-r * Math.PI) / 180, ((n - 90) * Math.PI) / 180, 0));
}
var ct = new M();
function lt(e, t, n) {
  (ot(t, e.position), e.up.set(0, 1, 0), e.lookAt(ot(n, ct)));
}
function ut(e, t = [0, 0, 0]) {
  return ((t[0] = e.pos[0]), (t[1] = e.pos[1]), (t[2] = e.pos[2] + e.viewZ), t);
}
var dt = class {
    lastZ = NaN;
    lastView = 0;
    lastCrouch = !1;
    err = 0;
    snap() {
      ((this.lastZ = NaN), (this.err = 0));
    }
    update(e, t) {
      if (Number.isNaN(this.lastZ)) this.err = 0;
      else if (t > 0) {
        let n = e.viewZ - this.lastView;
        if (
          (Math.abs(n) > Math.max(1.5, 120 * t) && (this.err -= n),
          e.crouched !== this.lastCrouch)
        ) {
          let t = e.pos[2] - this.lastZ;
          Math.abs(t) > 3 && Math.abs(t) < 40 && (this.err -= t);
        }
        ((this.err = at(this.err * Math.exp(-t / 0.05), -40, 40)),
          Math.abs(this.err) < 0.01 && (this.err = 0));
      }
      return (
        (this.lastZ = e.pos[2]),
        (this.lastView = e.viewZ),
        (this.lastCrouch = e.crouched),
        this.err
      );
    }
  },
  ft = class {
    orbitYaw = 0;
    orbitPitch = 0;
    zoom = 1;
    yaw = NaN;
    pitchS = NaN;
    dist = NaN;
    height = NaN;
    z = NaN;
    o;
    pivot = [0, 0, 0];
    want = [0, 0, 0];
    position = [0, 0, 0];
    constructor(e = {}) {
      this.o = {
        distance: 96,
        pitch: 14,
        eyeDrop: 8,
        followRate: 7,
        heightRate: 9,
        zRate: 10,
        ...e,
      };
    }
    snap() {
      this.yaw = NaN;
    }
    resetOrbit() {
      ((this.orbitYaw = this.orbitPitch = 0), (this.zoom = 1));
    }
    orbit(e, t) {
      ((this.orbitYaw = it(this.orbitYaw - e * 0.3)),
        (this.orbitPitch = at(this.orbitPitch + t * 0.25, -40, 70)));
    }
    zoomBy(e) {
      this.zoom = at(this.zoom * e, 0.4, 5);
    }
    update(e, t, n, r, i = 0) {
      let a = this.o,
        o = Number.isNaN(this.yaw),
        s = t.viewZ - a.eyeDrop + i;
      (o ||
      Number.isNaN(this.z) ||
      a.zRate <= 0 ||
      Math.abs(t.pos[2] - this.z) > 160
        ? (this.z = t.pos[2])
        : (this.z += (t.pos[2] - this.z) * B(a.zRate, n)),
        o
          ? ((this.yaw = t.yaw), (this.pitchS = t.pitch), (this.height = s))
          : ((this.yaw += it(t.yaw - this.yaw) * B(a.followRate, n)),
            (this.pitchS += (t.pitch - this.pitchS) * B(a.followRate * 0.5, n)),
            (this.height += (s - this.height) * B(a.heightRate, n))));
      let c = (this.yaw + this.orbitYaw) * z,
        l = at(a.pitch + this.orbitPitch + this.pitchS * 0.15, -60, 80) * z,
        u = this.pivot;
      ((u[0] = t.pos[0]), (u[1] = t.pos[1]), (u[2] = this.z + this.height));
      let d = a.distance * this.zoom,
        f = this.want;
      ((f[0] = u[0] - Math.cos(c) * Math.cos(l) * d),
        (f[1] = u[1] - Math.sin(c) * Math.cos(l) * d),
        (f[2] = u[2] + Math.sin(l) * d));
      let p = r ? r(u, f, 6) : 1,
        m = Math.max(4, d * p - 2);
      o || Number.isNaN(this.dist) || m < this.dist
        ? (this.dist = m)
        : (this.dist += (m - this.dist) * B(3, n));
      let h = this.dist / d;
      for (let e = 0; e < 3; e++) this.position[e] = u[e] + (f[e] - u[e]) * h;
      lt(e, this.position, u);
    }
  },
  pt = class {
    pos = [0, 0, 0];
    yaw = 0;
    pitch = 0;
    keys = new Set();
    set(e, t, n) {
      ((this.pos = [e[0], e[1], e[2]]), (this.yaw = t), (this.pitch = n));
    }
    look(e, t, n = 0.12) {
      ((this.yaw = it(this.yaw - e * n)),
        (this.pitch = at(this.pitch + t * n, -89, 89)));
    }
    update(e, t) {
      let n = (e) => +!!this.keys.has(e),
        r = n(`ShiftLeft`) || n(`ShiftRight`),
        i = n(`AltLeft`),
        a = (r ? 1600 : i ? 120 : 500) * t,
        o = this.yaw * z,
        s = this.pitch * z,
        c = [
          Math.cos(s) * Math.cos(o),
          Math.cos(s) * Math.sin(o),
          -Math.sin(s),
        ],
        l = [Math.sin(o), -Math.cos(o), 0],
        u = n(`KeyW`) - n(`KeyS`),
        d = n(`KeyD`) - n(`KeyA`),
        f = n(`Space`) + n(`KeyE`) - n(`ControlLeft`) - n(`KeyQ`) - n(`KeyC`);
      for (let e = 0; e < 3; e++) this.pos[e] += (c[e] * u + l[e] * d) * a;
      ((this.pos[2] += f * a), st(e, this.pos, this.yaw, this.pitch));
    }
  },
  mt = class {
    pos = [NaN, 0, 0];
    vel = [0, 0, 0];
    heading = NaN;
    look = [0, 0, 0];
    side = 1;
    snap() {
      this.pos[0] = NaN;
    }
    update(e, t, n, r) {
      let i = Math.hypot(t.vel[0], t.vel[1]),
        a = i > 60 ? Math.atan2(t.vel[1], t.vel[0]) / z : t.yaw;
      Number.isNaN(this.heading) || Number.isNaN(this.pos[0])
        ? (this.heading = a)
        : (this.heading += it(a - this.heading) * B(1.6, n));
      let o = this.heading * z,
        s = 150 + Math.min(120, i * 0.12),
        c = [t.pos[0], t.pos[1], t.pos[2] + 48],
        l = [
          c[0] - Math.cos(o) * s + Math.sin(o) * 95 * this.side,
          c[1] - Math.sin(o) * s - Math.cos(o) * 95 * this.side,
          c[2] + 70,
        ];
      if (r) {
        let e = r(c, l, 8);
        for (let t = 0; t < 3; t++)
          l[t] = c[t] + (l[t] - c[t]) * Math.max(0.15, e - 0.02);
      }
      if (Number.isNaN(this.pos[0]))
        ((this.pos = [...l]), (this.vel = [0, 0, 0]), (this.look = [...c]));
      else {
        let e = 3.2;
        for (let t = 0; t < 3; t++) {
          let r = this.pos[t] - l[t],
            i = -3.2 * e * r - 2 * e * this.vel[t];
          ((this.vel[t] += i * n), (this.pos[t] += this.vel[t] * n));
        }
        if (r && r(c, this.pos, 4) < 0.98)
          for (let e = 0; e < 3; e++) ((this.pos[e] = l[e]), (this.vel[e] = 0));
        for (let e = 0; e < 3; e++)
          this.look[e] += (c[e] - this.look[e]) * B(9, n);
      }
      lt(e, this.pos, this.look);
    }
  };
function ht(e, t, n, r) {
  let i = [],
    a = e.tickrate,
    o = [
      `chase`,
      `tripod`,
      `eye`,
      `flyby`,
      `tripod`,
      `chase`,
      `flyby`,
      `tripod`,
    ],
    s = t,
    c = 0,
    l = (e.n * 2654435761) >>> 0,
    u = () =>
      (l = (Math.imul(l ^ (l >>> 15), 2246822507) + 2654435769) >>> 0) /
      4294967296;
  for (; s < n; ) {
    let t = Math.round((2.5 + u() * 2.5) * a);
    for (let r = s + a; r < Math.min(n, s + t); r++)
      if (e.flags[r] & 4) {
        t = r - s;
        break;
      }
    n - (s + t) < a * 1.5 && (t = n - s);
    let l = Math.min(n, s + t),
      d = o[c++ % o.length],
      f;
    (d === `tripod` && ((f = gt(e, s, l, r, u) ?? void 0), f || (d = `chase`)),
      i.push({ from: s, to: l, kind: d, at: f }),
      (s = l));
  }
  return i;
}
function gt(e, t, n, r, i) {
  let a = (t) => [e.pos[t * 3], e.pos[t * 3 + 1], e.pos[t * 3 + 2] + 40],
    o = Math.round(t + (n - t) * 0.62),
    s = a(t),
    c = a(n),
    l = a(o),
    u = Math.atan2(c[1] - s[1], c[0] - s[0]),
    d = Math.hypot(c[0] - s[0], c[1] - s[1]),
    f = null,
    p = -1;
  for (let e = 0; e < 14; e++) {
    let o = e % 2 ? 1 : -1,
      s;
    if (e < 6) {
      let e = 80 + i() * 220,
        t = o * i() * 70;
      s = [
        c[0] + Math.cos(u) * e - Math.sin(u) * t,
        c[1] + Math.sin(u) * e + Math.cos(u) * t,
        c[2] + 60 + i() * 140,
      ];
    } else {
      let e = u + o * (0.6 + i() * 0.9),
        t = 140 + d * (0.25 + i() * 0.35);
      s = [
        l[0] + Math.cos(e) * t,
        l[1] + Math.sin(e) * t,
        l[2] + 40 + i() * 120,
      ];
    }
    if (r) {
      let t = e < 6 ? c : l,
        n = r(t, s, 8);
      if (n < 1)
        for (let e = 0; e < 3; e++)
          s[e] = t[e] + (s[e] - t[e]) * Math.max(0, n - 0.05);
      if (Math.hypot(s[0] - t[0], s[1] - t[1], s[2] - t[2]) < 70) continue;
    }
    let m = 0;
    for (let e = 0; e <= 8; e++) {
      let i = Math.round(t + ((n - t) * e) / 8);
      (!r || r(s, a(i), 1) > 0.995) && m++;
    }
    let h = m + i() * 0.5;
    h > p && ((p = h), (f = s));
  }
  return p >= 5.6 ? f : null;
}
var _t = class {
    mode = `chase`;
    chase;
    free = new pt();
    flyby = new mt();
    eyeSmooth = new dt();
    trace;
    eyeTmp = [0, 0, 0];
    constructor(e = {}) {
      ((this.trace = e.trace ?? null), (this.chase = new ft(e.chase)));
    }
    snap() {
      (this.chase.snap(), this.flyby.snap(), this.eyeSmooth.snap());
    }
    startFree(e) {
      let t = new be().setFromQuaternion(e.quaternion, `YXZ`);
      this.free.set(
        [e.position.x, -e.position.z, e.position.y],
        (t.y * 180) / Math.PI + 90,
        (-t.x * 180) / Math.PI,
      );
    }
    update(e, t, n, r = this.mode) {
      let i = this.eyeSmooth.update(t, n);
      switch (r) {
        case `eye`: {
          let n = ut(t, this.eyeTmp);
          return ((n[2] += i), st(e, n, t.yaw, t.pitch), !1);
        }
        case `free`:
          return (this.free.update(e, n), !0);
        case `flyby`:
          return (this.flyby.update(e, t, n, this.trace), !0);
        default:
          return (this.chase.update(e, t, n, this.trace, i), !0);
      }
    }
  },
  vt = class {
    mode = `chase`;
    spec = new _t();
    shots = [];
    shotIdx = -1;
    tripodLook = [0, 0, 0];
    tmp;
    get chase() {
      return this.spec.chase;
    }
    get free() {
      return this.spec.free;
    }
    setShots(e) {
      ((this.shots = e), (this.shotIdx = -1));
    }
    get shotList() {
      return this.shots;
    }
    snap() {
      (this.spec.snap(), (this.shotIdx = -1));
    }
    startFree(e) {
      this.spec.startFree(e);
    }
    findShot(e) {
      let t = this.shots;
      if (!t.length) return -1;
      if (
        this.shotIdx >= 0 &&
        this.shotIdx < t.length &&
        e >= t[this.shotIdx].from &&
        e < t[this.shotIdx].to
      )
        return this.shotIdx;
      let n = 0,
        r = t.length - 1;
      for (; n < r; ) {
        let i = (n + r + 1) >> 1;
        t[i].from <= e ? (n = i) : (r = i - 1);
      }
      return n;
    }
    update(e, t, n, r, i) {
      let a = (this.tmp = tt(t, n, this.tmp));
      if (((this.spec.trace = i), this.mode !== `auto`))
        return this.spec.update(e, a, r, this.mode);
      let o = this.findShot(n);
      o !== this.shotIdx &&
        (this.spec.snap(),
        (this.spec.flyby.side = o % 2 ? 1 : -1),
        (this.shotIdx = o),
        o >= 0 &&
          this.shots[o].kind === `tripod` &&
          (this.tripodLook = [a.pos[0], a.pos[1], a.pos[2] + 40]));
      let s = o >= 0 ? this.shots[o] : null;
      if (s?.kind === `tripod` && s.at) {
        let t = this.tripodLook,
          n = B(6, r);
        return (
          (t[0] += (a.pos[0] - t[0]) * n),
          (t[1] += (a.pos[1] - t[1]) * n),
          (t[2] += (a.pos[2] + 40 - t[2]) * n),
          lt(e, s.at, t),
          !0
        );
      }
      return this.spec.update(
        e,
        a,
        r,
        s?.kind === `eye` ? `eye` : s?.kind === `flyby` ? `flyby` : `chase`,
      );
    }
  },
  yt = [`metal`, `wood`, `concrete`, `dirt`, `tile`],
  bt = {
    metal: `impact_metal`,
    wood: `impact_wood`,
    concrete: `impact_concrete`,
    dirt: `impact_dirt`,
    tile: `impact_tile`,
  },
  V = [64, 256, 1024, 4096],
  xt = 3,
  St = 2,
  Ct = class {
    tris;
    planes;
    surf;
    levels;
    constructor(e, t, n, r) {
      ((this.tris = e), (this.planes = t), (this.surf = n), (this.levels = r));
    }
    query(e, t) {
      let n = -1,
        r = 1 / 0;
      for (let i = 0; i < V.length; i++) {
        let a = this.levels[i];
        if (!a.size) continue;
        let o = V[i],
          s = Math.floor(e[0] / o),
          c = Math.floor(e[1] / o),
          l = Math.floor(e[2] / o);
        for (let i = -1; i <= 1; i++)
          for (let o = -1; o <= 1; o++)
            for (let u = -1; u <= 1; u++) {
              let d = a.get(wt(s + i, c + o, l + u));
              if (d)
                for (let i = 0; i < d.length; i++) {
                  let a = d[i],
                    o = this.distance(a, e, t);
                  o < r && ((r = o), (n = this.surf[a]));
                }
            }
      }
      return n;
    }
    distance(e, t, n) {
      let r = this.planes,
        i = e * 4,
        a = r[i],
        o = r[i + 1],
        s = r[i + 2],
        c = Math.abs(a * t[0] + o * t[1] + s * t[2] - r[i + 3]);
      if (c > xt || (n && Math.abs(a * n[0] + o * n[1] + s * n[2]) < 0.7))
        return 1 / 0;
      let l = this.tris,
        u = e * 9,
        d = l[u],
        f = l[u + 1],
        p = l[u + 2],
        m = (e, n, r, i, c, l) => {
          let u = i - e,
            d = c - n,
            f = l - r,
            p = Math.hypot(u, d, f) || 1,
            m = t[0] - e,
            h = t[1] - n,
            g = t[2] - r;
          return (
            ((d * g - f * h) * a + (f * m - u * g) * o + (u * h - d * m) * s) /
            p
          );
        },
        h = l[u + 3],
        g = l[u + 4],
        _ = l[u + 5],
        v = l[u + 6],
        y = l[u + 7],
        b = l[u + 8];
      return m(d, f, p, h, g, _) < -2 ||
        m(h, g, _, v, y, b) < -2 ||
        m(v, y, b, d, f, p) < -2
        ? 1 / 0
        : c;
    }
  },
  wt = (e, t, n) => ((e + 1024) * 2048 + (t + 1024)) * 2048 + (n + 1024),
  H = null,
  Tt = null,
  Et = null;
function Dt(e) {
  Et = null;
  let t = performance.now(),
    n,
    r;
  try {
    ((n = e.mesh()), (r = e.materials()));
  } catch {
    H = new Map();
    return;
  }
  let { vertices: i, indices: a, stride: o, groups: s, materials: c } = n,
    l = c.map((e, t) => {
      let n = r[t]?.kind;
      if (n === we.Water) return -1;
      if (n === we.Glass) return yt.indexOf(`tile`);
      let i = Pe(e.name);
      return !i || i === `water` ? -1 : yt.indexOf(i === `grass` ? `dirt` : i);
    }),
    u = new Map();
  for (let e of s) {
    if (e.sky3d) continue;
    let t = l[e.material];
    if (t < 0) continue;
    let n = u.get(e.model);
    n ||
      u.set(
        e.model,
        (n = {
          tris: [],
          planes: [],
          surf: [],
          levels: V.map(() => new Map()),
        }),
      );
    for (let r = e.firstIndex; r < e.firstIndex + e.indexCount; r += 3) {
      let e = a[r] * o,
        s = a[r + 1] * o,
        c = a[r + 2] * o,
        l = i[e],
        u = i[e + 1],
        d = i[e + 2],
        f = i[s],
        p = i[s + 1],
        m = i[s + 2],
        h = i[c],
        g = i[c + 1],
        _ = i[c + 2],
        v = f - l,
        y = p - u,
        b = m - d,
        x = h - l,
        S = g - u,
        C = _ - d,
        ee = y * C - b * S,
        w = b * x - v * C,
        T = v * S - y * x,
        E = Math.hypot(ee, w, T);
      if (E < 1e-6) continue;
      ((ee /= E), (w /= E), (T /= E));
      let te = n.surf.length;
      (n.tris.push(l, u, d, f, p, m, h, g, _),
        n.planes.push(ee, w, T, ee * l + w * u + T * d),
        n.surf.push(t));
      let D = (l + f + h) / 3,
        ne = (u + p + g) / 3,
        re = (d + m + _) / 3,
        ie = Math.sqrt(
          Math.max(
            (l - D) ** 2 + (u - ne) ** 2 + (d - re) ** 2,
            (f - D) ** 2 + (p - ne) ** 2 + (m - re) ** 2,
            (h - D) ** 2 + (g - ne) ** 2 + (_ - re) ** 2,
          ),
        ),
        O = V.findIndex((e) => ie + xt + St <= e);
      O < 0 && (O = V.length - 1);
      let ae = V[O],
        oe = wt(Math.floor(D / ae), Math.floor(ne / ae), Math.floor(re / ae)),
        se = n.levels[O].get(oe);
      se ? se.push(te) : n.levels[O].set(oe, [te]);
    }
  }
  H = new Map();
  let d = 0;
  for (let [e, t] of u)
    ((d += t.surf.length),
      H.set(
        e,
        new Ct(
          Float32Array.from(t.tris),
          Float32Array.from(t.planes),
          Int8Array.from(t.surf),
          t.levels.map(
            (e) => new Map([...e].map(([e, t]) => [e, Int32Array.from(t)])),
          ),
        ),
      ));
  Tt = new Map();
  try {
    e.entities().forEach((e, t) => {
      let n = /^\*(\d+)$/.exec(e.model ?? ``);
      n && Tt.set(t, Number(n[1]));
    });
  } catch {}
  console.info(
    `audio: impact surfaces ${d} triangles in ${u.size} models, ${(performance.now() - t).toFixed(0)} ms`,
  );
}
function Ot(e) {
  ((H = null), (Tt = null), (Et = e));
  let t = () => Et === e && Dt(e);
  typeof requestIdleCallback == `function`
    ? requestIdleCallback(t, { timeout: 4e3 })
    : setTimeout(t, 500);
}
function kt(e) {
  return e >= 0 ? (Tt?.get(e) ?? -1) : -1;
}
function At(e, t, n) {
  let r = Math.PI / 180,
    i = t[0] - (n ? 0 : e[0]),
    a = t[1] - (n ? 0 : e[1]),
    o = t[2] - (n ? 0 : e[2]),
    [s, c] = [Math.sin(e[3] * r), Math.cos(e[3] * r)],
    [l, u] = [Math.sin(e[4] * r), Math.cos(e[4] * r)],
    [d, f] = [Math.sin(e[5] * r), Math.cos(e[5] * r)],
    p = c * u,
    m = d * s * u - f * l,
    h = f * s * u + d * l,
    g = c * l,
    _ = d * s * l + f * u,
    v = f * s * l - d * u,
    y = -s,
    b = d * c,
    x = f * c;
  return [p * i + g * a + y * o, m * i + _ * a + b * o, h * i + v * a + x * o];
}
function jt(e, t, n) {
  if ((Et && Dt(Et), !H)) return `concrete`;
  let r =
      Math.hypot(t.normal[0], t.normal[1], t.normal[2]) > 0.5 ? t.normal : null,
    i = (i) => {
      let a = H.get(i);
      if (!a) return -1;
      if (i === 0) return a.query(t.end, r);
      let o = (n ?? e.brushOrigins()).get(i);
      return o
        ? a.query(At(o, t.end, !1), r ? At(o, r, !0) : null)
        : a.query(t.end, r);
    },
    a = kt(t.entity),
    o = a >= 0 ? i(a) : -1;
  if ((o < 0 && (o = i(0)), o < 0 && t.entity >= 0)) {
    for (let e of H.keys()) if (e !== 0 && e !== a && (o = i(e)) >= 0) break;
  }
  return o >= 0 ? yt[o] : `concrete`;
}
function Mt(e, t, n) {
  let r = t === `stab` ? 1.25 : t === `bullet` ? 0.75 : 0.95,
    i = t === `stab` ? 0.85 : t === `bullet` ? 1.12 : 1;
  Ne.playAt(bt[e], n[0], n[1], n[2], r, i);
}
var Nt = 64,
  Pt = 8,
  Ft = 160,
  It = 160,
  Lt = 12,
  Rt = 9,
  zt = 1.2,
  Bt = 7e3,
  Vt = 70,
  Ht = {
    metal: {
      color: 11117722,
      n: 3,
      speed: 50,
      size: 2.2,
      life: 0.4,
      sparks: 8,
    },
    concrete: {
      color: 12170410,
      n: 7,
      speed: 55,
      size: 3,
      life: 0.55,
      sparks: 0,
    },
    dirt: { color: 9072461, n: 8, speed: 60, size: 3.2, life: 0.6, sparks: 0 },
    wood: {
      color: 11109463,
      n: 6,
      speed: 70,
      size: 2.4,
      life: 0.45,
      sparks: 0,
    },
    tile: { color: 15000284, n: 5, speed: 90, size: 2, life: 0.4, sparks: 3 },
  },
  Ut = {
    metal: 3881528,
    concrete: 2762790,
    dirt: 2826518,
    wood: 2759696,
    tile: 3815994,
  };
function Wt() {
  let e = document.createElement(`canvas`);
  e.width = e.height = 64;
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(32, 32, 0, 32, 32, 30);
  (n.addColorStop(0, `rgba(255,255,255,1)`),
    n.addColorStop(0.22, `rgba(255,255,255,1)`),
    n.addColorStop(0.4, `rgba(255,255,255,0.55)`),
    n.addColorStop(1, `rgba(255,255,255,0)`),
    (t.fillStyle = n),
    t.beginPath());
  for (let e = 0; e <= 18; e++) {
    let n = (e / 18) * Math.PI * 2,
      r = 25 + ((e * 7919) % 7) - 3;
    t.lineTo(32 + Math.cos(n) * r, 32 + Math.sin(n) * r);
  }
  t.fill();
  let r = new ge(e);
  return ((r.colorSpace = T), r);
}
function Gt() {
  let e = document.createElement(`canvas`);
  e.width = e.height = 64;
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(32, 32, 18, 32, 32, 31);
  (n.addColorStop(0, `rgba(255,255,255,0)`),
    n.addColorStop(0.55, `rgba(255,255,255,1)`),
    n.addColorStop(1, `rgba(255,255,255,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 64, 64));
  let r = new ge(e);
  return ((r.colorSpace = T), r);
}
var Kt = `
attribute vec3 aColor;
attribute float aAlpha;
attribute float aSize;
varying vec3 vColor;
varying float vAlpha;
uniform float uScale;
void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aAlpha > 0.0 ? aSize * uScale / max(1.0, -mv.z) : 0.0;
}`,
  qt = `
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r = dot(d, d) * 4.0;
  if (r > 1.0) discard;
  gl_FragColor = vec4(vColor, vAlpha * (1.0 - r));
}`,
  Jt = class {
    n;
    gravity;
    drag;
    points;
    pos;
    vel;
    col;
    alpha;
    size;
    age;
    life;
    a0;
    next = 0;
    live = 0;
    uScale = { value: 600 };
    constructor(e, t, n, r) {
      ((this.n = e),
        (this.gravity = n),
        (this.drag = r),
        (this.pos = new Float32Array(e * 3)),
        (this.vel = new Float32Array(e * 3)),
        (this.col = new Float32Array(e * 3)),
        (this.alpha = new Float32Array(e)),
        (this.size = new Float32Array(e)),
        (this.age = new Float32Array(e)),
        (this.life = new Float32Array(e).fill(1)),
        (this.a0 = new Float32Array(e)));
      let a = new ye();
      (a.setAttribute(`position`, new fe(this.pos, 3).setUsage(f)),
        a.setAttribute(`aColor`, new fe(this.col, 3).setUsage(f)),
        a.setAttribute(`aAlpha`, new fe(this.alpha, 1).setUsage(f)),
        a.setAttribute(`aSize`, new fe(this.size, 1).setUsage(f)));
      let o = new i({
        vertexShader: Kt,
        fragmentShader: qt,
        uniforms: { uScale: this.uScale },
        transparent: !0,
        depthWrite: !1,
        blending: t ? 2 : 1,
      });
      ((this.points = new v(a, o)), (this.points.frustumCulled = !1));
    }
    setScale(e) {
      this.uScale.value = e;
    }
    emit(e, t, n, r, i, a, o, s) {
      let c = this.next;
      this.next = (this.next + 1) % this.n;
      let l = c * 3,
        u = Math.random() * 2 - 1,
        d = Math.random() * 2 - 1,
        f = Math.random() * 2 - 1,
        p = t.x + u * n,
        m = t.y + d * n,
        h = t.z + f * n,
        g = Math.hypot(p, m, h) || 1,
        _ = r * (0.4 + Math.random() * 0.8);
      ((p /= g),
        (m /= g),
        (h /= g),
        (this.pos[l] = e[0] + t.x * 0.6),
        (this.pos[l + 1] = e[1] + t.y * 0.6),
        (this.pos[l + 2] = e[2] + t.z * 0.6),
        (this.vel[l] = p * _),
        (this.vel[l + 1] = m * _),
        (this.vel[l + 2] = h * _),
        (this.col[l] = i.r),
        (this.col[l + 1] = i.g),
        (this.col[l + 2] = i.b),
        (this.size[c] = a * (0.7 + Math.random() * 0.6)),
        (this.age[c] = 0),
        (this.life[c] = o * (0.75 + Math.random() * 0.5)),
        (this.a0[c] = s),
        (this.alpha[c] = s),
        (this.live = this.n));
    }
    update(e) {
      if (!this.live) return;
      let t = 0,
        n = Math.exp(-this.drag * e);
      for (let r = 0; r < this.n; r++) {
        if (this.alpha[r] <= 0) continue;
        if (((this.age[r] += e), this.age[r] >= this.life[r])) {
          this.alpha[r] = 0;
          continue;
        }
        t++;
        let i = r * 3;
        ((this.vel[i] *= n),
          (this.vel[i + 1] *= n),
          (this.vel[i + 2] = this.vel[i + 2] * n - this.gravity * e),
          (this.pos[i] += this.vel[i] * e),
          (this.pos[i + 1] += this.vel[i + 1] * e),
          (this.pos[i + 2] += this.vel[i + 2] * e),
          (this.alpha[r] = this.a0[r] * (1 - this.age[r] / this.life[r])));
      }
      let r = this.points.geometry;
      ((r.getAttribute(`position`).needsUpdate = !0),
        (r.getAttribute(`aColor`).needsUpdate = !0),
        (r.getAttribute(`aAlpha`).needsUpdate = !0),
        (r.getAttribute(`aSize`).needsUpdate = !0),
        (this.live = t));
    }
    clear() {
      (this.alpha.fill(0),
        (this.points.geometry.getAttribute(`aAlpha`).needsUpdate = !0),
        (this.live = 0));
    }
  },
  Yt = new M(0, 0, 1),
  Xt = class {
    root = new ue();
    decals;
    decalState;
    nextDecal = 0;
    rings;
    ringAge = new Float32Array(Pt).fill(1 / 0);
    ringMat = Array.from({ length: Pt }, () => new E());
    nextRing = 0;
    sparks = new Jt(Ft, !0, 520, 1.6);
    dust = new Jt(It, !1, 50, 5.5);
    tracer;
    tracerPos = new Float32Array(72);
    tracerCol = new Float32Array(72);
    tracers = Array.from({ length: Lt }, () => ({
      from: new M(),
      dir: new M(),
      len: 0,
      t: 1 / 0,
    }));
    nextTracer = 0;
    m = new E();
    m2 = new E();
    n = new M();
    v = new M();
    q = new me();
    s = new M();
    c = new L();
    white = new L(1, 1, 1);
    sparkCol = new L(16761963);
    transforms;
    live = !1;
    constructor() {
      ((this.root.name = `gun-impacts`), (this.root.rotation.x = -Math.PI / 2));
      let e = new he(1, 1),
        n = new de({
          map: Wt(),
          transparent: !0,
          opacity: 0.9,
          depthWrite: !1,
          polygonOffset: !0,
          polygonOffsetFactor: -4,
          polygonOffsetUnits: -4,
        });
      ((this.decals = new C(e, n, Nt)),
        this.decals.instanceMatrix.setUsage(f),
        (this.decals.count = 0),
        (this.decals.frustumCulled = !1),
        (this.decals.renderOrder = 1),
        (this.decalState = Array.from({ length: Nt }, () => ({
          age: 1 / 0,
          model: -1,
          local: new E(),
          base: 1,
        }))));
      for (let e = 0; e < Nt; e++) this.decals.setColorAt(e, this.white);
      let r = new de({
        map: Gt(),
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        polygonOffset: !0,
        polygonOffsetFactor: -6,
        polygonOffsetUnits: -6,
      });
      ((this.rings = new C(e, r, Pt)),
        this.rings.instanceMatrix.setUsage(f),
        (this.rings.count = 0),
        (this.rings.frustumCulled = !1),
        (this.rings.renderOrder = 2));
      for (let e = 0; e < Pt; e++) this.rings.setColorAt(e, this.white);
      let i = new ye();
      (i.setAttribute(`position`, new fe(this.tracerPos, 3).setUsage(f)),
        i.setAttribute(`color`, new fe(this.tracerCol, 3).setUsage(f)),
        (this.tracer = new ne(
          i,
          new t({
            vertexColors: !0,
            transparent: !0,
            blending: 2,
            depthWrite: !1,
          }),
        )),
        (this.tracer.frustumCulled = !1),
        this.root.add(
          this.decals,
          this.rings,
          this.sparks.points,
          this.dust.points,
          this.tracer,
        ));
    }
    setViewportHeight(e) {
      (this.sparks.setScale(e * 0.9), this.dust.setScale(e * 0.9));
    }
    hit(e, t, n, r = {}) {
      let i = this.n.set(t[0], t[1], t[2]);
      if ((r.from && this.addTracer(r.from, e), i.lengthSq() < 0.25)) return;
      (i.normalize(), (this.live = !0));
      let a = Ht[n],
        o = r.heavy ? 1.5 : 1;
      this.c.set(a.color);
      for (let t = 0; t < Math.round(a.n * o); t++)
        this.dust.emit(e, i, 0.8, a.speed, this.c, a.size, a.life, 0.6);
      for (let t = 0; t < Math.round(a.sparks * o); t++)
        this.sparks.emit(e, i, 0.9, 180, this.sparkCol, 1, 0.25, 1);
      let s = r.transforms ?? this.transforms,
        c = r.model !== void 0 && r.model > 0 && s?.get(r.model) ? r.model : -1,
        l = this.decalState[this.nextDecal],
        u = this.nextDecal;
      ((this.nextDecal = (this.nextDecal + 1) % Nt),
        this.q.setFromUnitVectors(Yt, i),
        this.m2.makeRotationZ(Math.random() * Math.PI * 2));
      let d = (r.heavy ? 3.2 : 2.3) * (0.85 + Math.random() * 0.3);
      if (
        (this.m
          .compose(
            this.v.set(e[0] + i.x * 0.12, e[1] + i.y * 0.12, e[2] + i.z * 0.12),
            this.q,
            this.s.set(d, d, 1),
          )
          .multiply(this.m2),
        c > 0
          ? (Zt(s.get(c), this.m2).invert(),
            l.local.multiplyMatrices(this.m2, this.m))
          : l.local.copy(this.m),
        (l.model = c),
        (l.age = 0),
        (l.base = d),
        this.decals.setColorAt(u, this.c.set(Ut[n])),
        (this.decals.instanceColor.needsUpdate = !0),
        (this.decals.count = Math.max(this.decals.count, u + 1)),
        r.button)
      ) {
        let t = this.nextRing;
        ((this.nextRing = (this.nextRing + 1) % Pt),
          (this.ringAge[t] = 0),
          this.ringMat[t].compose(
            this.v.set(e[0] + i.x * 0.2, e[1] + i.y * 0.2, e[2] + i.z * 0.2),
            this.q,
            this.s.set(1, 1, 1),
          ),
          (this.rings.count = Math.max(this.rings.count, t + 1)));
      }
    }
    addTracer(e, t) {
      let n = this.tracers[this.nextTracer];
      ((this.nextTracer = (this.nextTracer + 1) % Lt),
        n.from.set(e[0], e[1], e[2]),
        n.dir.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]),
        (n.len = n.dir.length()),
        !(n.len < 1) &&
          (n.dir.divideScalar(n.len), (n.t = 0), (this.live = !0)));
    }
    update(e, t) {
      if ((t && (this.transforms = t), !this.live)) return;
      let n = !1;
      for (let t = 0; t < this.decals.count; t++) {
        let r = this.decalState[t];
        if (r.age === 1 / 0) {
          this.decals.setMatrixAt(t, this.m.makeScale(0, 0, 0));
          continue;
        }
        ((r.age += e), (n = !0));
        let i = r.age - Rt;
        if (i >= zt) {
          ((r.age = 1 / 0),
            this.decals.setMatrixAt(t, this.m.makeScale(0, 0, 0)));
          continue;
        }
        let a = r.model > 0 ? this.transforms?.get(r.model) : void 0;
        (a
          ? this.m.multiplyMatrices(Zt(a, this.m2), r.local)
          : this.m.copy(r.local),
          i > 0 &&
            this.m.multiply(this.m2.makeScale(1 - i / zt, 1 - i / zt, 1)),
          this.decals.setMatrixAt(t, this.m));
      }
      this.decals.instanceMatrix.needsUpdate = !0;
      for (let t = 0; t < this.rings.count; t++) {
        let r = (this.ringAge[t] += e);
        if (r > 0.35) {
          this.rings.setMatrixAt(t, this.m.makeScale(0, 0, 0));
          continue;
        }
        n = !0;
        let i = r / 0.35,
          a = 3 + 9 * (1 - (1 - i) * (1 - i));
        (this.rings.setMatrixAt(
          t,
          this.m.copy(this.ringMat[t]).multiply(this.m2.makeScale(a, a, 1)),
        ),
          this.rings.setColorAt(
            t,
            this.c.setRGB(1, 0.85, 0.5).multiplyScalar(0.8 * (1 - i)),
          ));
      }
      ((this.rings.instanceMatrix.needsUpdate = !0),
        this.rings.instanceColor && (this.rings.instanceColor.needsUpdate = !0),
        this.sparks.update(e),
        this.dust.update(e));
      let r = this.tracerPos,
        i = this.tracerCol;
      for (let t = 0; t < Lt; t++) {
        let a = this.tracers[t],
          o = t * 6;
        if (a.t === 1 / 0) {
          (r.fill(0, o, o + 6), i.fill(0, o, o + 6));
          continue;
        }
        a.t += e;
        let s = Math.min(a.len, a.t * Bt),
          c = Math.max(0, s - Vt);
        if (c >= a.len - 1) {
          ((a.t = 1 / 0), r.fill(0, o, o + 6), i.fill(0, o, o + 6));
          continue;
        }
        ((n = !0),
          (r[o] = a.from.x + a.dir.x * c),
          (r[o + 1] = a.from.y + a.dir.y * c),
          (r[o + 2] = a.from.z + a.dir.z * c),
          (r[o + 3] = a.from.x + a.dir.x * s),
          (r[o + 4] = a.from.y + a.dir.y * s),
          (r[o + 5] = a.from.z + a.dir.z * s),
          (i[o] = 0.25),
          (i[o + 1] = 0.2),
          (i[o + 2] = 0.1),
          (i[o + 3] = 0.95),
          (i[o + 4] = 0.82),
          (i[o + 5] = 0.55));
      }
      ((this.tracer.geometry.getAttribute(`position`).needsUpdate = !0),
        (this.tracer.geometry.getAttribute(`color`).needsUpdate = !0),
        n || (this.live = !1));
    }
    clear() {
      for (let e of this.decalState) e.age = 1 / 0;
      this.ringAge.fill(1 / 0);
      for (let e of this.tracers) e.t = 1 / 0;
      (this.sparks.clear(),
        this.dust.clear(),
        (this.live = !0),
        this.update(0));
    }
  };
function Zt(e, t) {
  let n = Math.PI / 180,
    r = Qt.set(e[5] * n, e[3] * n, e[4] * n, `ZYX`);
  return t.makeRotationFromEuler(r).setPosition(e[0], e[1], e[2]);
}
var Qt = new be(),
  $t = {
    draw: `gun_draw`,
    dry: `gun_dry`,
    mode: `gun_mode`,
    pickup: `gun_pickup`,
    magOut: `gun_mag_out`,
    magIn: `gun_mag_in`,
    slide: `gun_slide`,
    pump: `gun_pump`,
    shell: `gun_shell_in`,
    silTwist: `gun_silencer_twist`,
    silSeat: `gun_silencer_seat`,
    silCrack: `gun_silencer_crack`,
    silOff: `gun_silencer_off`,
  };
function en(e, t) {
  return t === `fire`
    ? (e?.sounds.fire ?? `shot_pistol`)
    : t === `silenced`
      ? (e?.sounds.silenced ?? e?.sounds.fire ?? `shot_pistol`)
      : (e?.sounds[t] ?? $t[t] ?? null);
}
function tn(e, t, n = {}) {
  let r = en(e, t);
  if (!r || !Ne.unlocked) return;
  let i = n.gain ?? 1,
    a = n.rate ?? (t === `fire` ? e?.sounds.fireRate : void 0) ?? 1;
  n.at ? Ne.playAt(r, n.at[0], n.at[1], n.at[2] + 46, i, a) : Ne.play(r, i, a);
}
var nn = [`Gun_Body`, `Gun_Slide`, `Gun_Mag`, `Gun_Pump`, `Gun_Aux`, `Gun_Sil`],
  rn = { Gun: 0, Slide: 1, Mag: 2, Pump: 3, Aux: 4, Sil: 5 },
  an = null;
function U() {
  if (an) return an;
  let e = ee(),
    t = e.names.length,
    n = new Map(nn.map((e, n) => [e, t + n]));
  return (
    (an = {
      hands: e,
      count: t + nn.length,
      part: (e) => t + rn[e],
      bone: (e) => n.get(e) ?? t,
    }),
    an
  );
}
function on(e) {
  let t = U();
  return new u(
    e,
    `fp`,
    (e) => e,
    (e) => [[t.bone(e ?? `Gun_Body`), 1]],
  );
}
function sn(e, t) {
  let n = new O();
  m(n, t);
  let r = on(n);
  (e.build(r), e.silencer?.build(r), (e.tris ??= r.tris));
  let i = n.geometry();
  return ((i.boundingSphere = new oe(new M(0, 0, 0), 60)), i);
}
var cn = new Map();
function ln(e, t = `knit`) {
  let n = `${e.id}|${t}`,
    r = cn.get(n);
  return (r || cn.set(n, (r = sn(e, t))), r);
}
var un = Math.PI / 180,
  dn = [`Index`, `Middle`, `Ring`, `Pinky`, `Thumb`],
  fn = { R: `Right_`, L: `Left_` };
function pn(e, t) {
  return e === `L` && t === `Thumb02` ? `Left_Thumb_02` : fn[e] + t;
}
var mn = new Map();
function W(t, n = U().hands) {
  let r = mn.get(t);
  if (r) return r;
  let i = (e) => n.at(e),
    a = fn[t],
    o = i(`${a}Hand`),
    c = [`Index`, `Middle`, `Ring`, `Pinky`].map((e) => i(`${a}${e}01`)),
    l = I(
      c.reduce((e, t) => w(e, t), [0, 0, 0]),
      0.25,
    ),
    u = k(D(l, o)),
    d = D(c[0], c[3]);
  d = k(D(d, I(u, P(d, u))));
  let f = j(u, d);
  P(f, D(i(pn(t, `Thumb02`)), o)) < 0 && (f = I(f, -1));
  let p = te(D(l, o)),
    m = P(j(f, u), d) > 0 ? 1 : -1,
    h = w(w(o, I(u, p * s)), I(f, 1.35)),
    g = k(w(d, I(u, 0.12))),
    _ = k(D(u, I(g, P(u, g)))),
    v = new Float32Array(12);
  e(_, j(g, _), g, h, v);
  let y = n.bone(`${a}Hand`),
    b = n.bind.slice(y * 12, y * 12 + 12),
    x = new Float32Array(12);
  N(b, 0, x, 0);
  let S = {
    side: t,
    hand: y,
    wrist: o,
    ax: u,
    across: d,
    n: f,
    palmL: p,
    spreadSign: m,
    held: v,
    handBind: b,
    invHandBind: x,
  };
  return (mn.set(t, S), S);
}
function hn(t, n, r) {
  let i = W(t, r),
    a = k(n.up),
    o = k(D(n.fwd, I(a, P(n.fwd, a)))),
    s = j(a, o),
    c = new Float32Array(12),
    l = new Float32Array(12),
    u = new Float32Array(12);
  return (e(o, s, a, n.o, c), N(c, 0, l, 0), A(i.held, 0, l, 0, u, 0), u);
}
function gn(t, n, r = U().hands) {
  let i = W(t, r),
    a = (e) => r.bone(pn(t, e)),
    o = (e) => {
      let t = a(e) * 12;
      return [r.bind[t + 3], r.bind[t + 7], r.bind[t + 11]];
    },
    s = new Map(),
    c = new Float32Array(12),
    l = new Float32Array(12),
    u = new Float32Array(12),
    d = k(j(i.ax, i.n)),
    f = k(j(k(D(o(`Thumb02`), o(`Thumb01`))), i.n)),
    p = (e, t) => {
      let n = [1, 2, 3].map((t) => `${e}0${t}`);
      (re(l),
        t.spread &&
          (F(i.n, t.spread * i.spreadSign * un, o(n[0]), c), l.set(c)));
      let p = e === `Thumb` ? f : d;
      n.forEach((e, n) => {
        (F(p, t.c[n] * un, o(e), c), A(l, 0, c, 0, u, 0), l.set(u));
        let i = new Float32Array(12);
        (A(l, 0, r.bind, a(e) * 12, i, 0), s.set(e, i));
      });
    };
  for (let e of dn) p(e, n[e.toLowerCase()]);
  let m = (e) => {
    let t = s.get(e);
    if (!t) throw Error(`gun hold: no finger bone ${e}`);
    return t;
  };
  return {
    wrist: i.wrist,
    ax: i.ax,
    across: i.across,
    n: i.n,
    palmL: i.palmL,
    carrot: i.held,
    bone: m,
    joint: (e) => {
      let t = m(e);
      return [t[3], t[7], t[11]];
    },
    dir: (e) => {
      let t = m(e);
      return k([t[0], t[4], t[8]]);
    },
    frame: (t, n, r) => {
      let i = k(n),
        a = k(D(r, I(i, P(r, i)))),
        o = new Float32Array(12);
      return (e(j(a, i), a, i, t, o), o);
    },
    curl: p,
  };
}
function _n(e, t) {
  let n = t === `R` ? e.right : e.left;
  return {
    id: `gun:${e.id}:${t}`,
    cosmeticId: ``,
    name: e.name,
    rarity: 1,
    blurb: ``,
    build: (t) => {
      e.build(t);
      for (let [e, r, i] of n.proxy ?? [])
        t.tube([e, r], i, 10, [0, 0, 1], () => ({ code: 0, color: 0 }), {
          part: S.grip,
        });
    },
  };
}
var vn = (e) => ({
    index: e.index,
    middle: e.middle,
    ring: e.ring,
    pinky: e.pinky,
    thumb: e.thumb,
  }),
  yn = new Map();
function bn(e, t, n = `knit`) {
  let r = `${e.id}|${t}|${n}`,
    i = yn.get(r);
  if (i) return i;
  let a = t === `R` ? e.right : e.left,
    s = vn(a),
    c = gn(t, s),
    l = _n(e, t),
    u = hn(t, a);
  a.seat !== void 0 && (u = o(c, u, l, a.seat));
  let f = { ...s, wrap: { fingers: a.wrap, seat: a.seat } },
    p = { ...s };
  if (a.wrap.length) {
    let e = d(c, f, u, f.wrap, l, n);
    for (let [t, n] of e)
      p[t.toLowerCase()] = {
        c: [n[0], n[1], n[2]],
        spread: s[t.toLowerCase()].spread,
      };
  }
  let m = W(t),
    h = new Float32Array(12),
    g = new Float32Array(12);
  (N(u, 0, h, 0), A(h, 0, m.handBind, 0, g, 0));
  let _ = { side: t, gunToBind: u, handInGun: g, curls: p };
  return (yn.set(r, _), _);
}
function xn(e) {
  return {
    id: `gun:${e.id}:sil`,
    cosmeticId: ``,
    name: e.name,
    rarity: 1,
    blurb: ``,
    build: (t) => e.silencer?.build(t),
  };
}
function Sn(e, t = `knit`) {
  let n = e.silencer;
  if (!n) return null;
  let r = `${e.id}|sil|${t}`,
    i = yn.get(r);
  if (i) return i;
  let a = n.grip,
    s = vn(a),
    c = gn(`L`, s),
    l = xn(e),
    u = hn(`L`, a);
  a.seat !== void 0 && (u = o(c, u, l, a.seat));
  let f = { ...s, wrap: { fingers: a.wrap, seat: a.seat } },
    p = { ...s };
  if (a.wrap.length) {
    let e = d(c, f, u, f.wrap, l, t);
    for (let [t, n] of e)
      p[t.toLowerCase()] = {
        c: [n[0], n[1], n[2]],
        spread: s[t.toLowerCase()].spread,
      };
  }
  let m = W(`L`),
    h = new Float32Array(12),
    g = new Float32Array(12);
  (N(u, 0, h, 0), A(h, 0, m.handBind, 0, g, 0));
  let _ = { side: `L`, gunToBind: u, handInGun: g, curls: p };
  return (yn.set(r, _), _);
}
function Cn(e, t) {
  let n = hn(e, t),
    r = new Float32Array(12),
    i = new Float32Array(12);
  return (N(n, 0, r, 0), A(r, 0, W(e).handBind, 0, i, 0), i);
}
function wn(e, t) {
  let n = e.flatMap((e) => [
      () => bn(e, `R`, t),
      () => bn(e, `L`, t),
      ...(e.silencer ? [() => Sn(e, t)] : []),
    ]),
    r = globalThis,
    i =
      typeof r.requestIdleCallback == `function`
        ? (e) => r.requestIdleCallback(e, { timeout: 2e3 })
        : (e) => setTimeout(e, 50),
    a = () => {
      let e = n.shift();
      e && (e(), i(a));
    };
  i(a);
}
var Tn = class {
  side;
  s;
  chains;
  curlAxis;
  thumbAxis;
  acc = new Float32Array(12);
  acc2 = new Float32Array(12);
  tmp = new Float32Array(12);
  G = new Float32Array(12);
  B;
  constructor(e, t = U().hands) {
    ((this.side = e),
      (this.s = W(e, t)),
      (this.B = t.bind),
      (this.chains = dn.map((n) => {
        let r = [1, 2, 3].map((r) => t.bone(pn(e, `${n}0${r}`)));
        return {
          bones: r,
          at: r.map((e) => [
            t.bind[e * 12 + 3],
            t.bind[e * 12 + 7],
            t.bind[e * 12 + 11],
          ]),
          thumb: n === `Thumb`,
        };
      })),
      (this.curlAxis = k(j(this.s.ax, this.s.n))));
    let n = this.chains[4].at;
    this.thumbAxis = k(j(k(D(n[1], n[0])), this.s.n));
  }
  pose(e, t, n) {
    let r = this.s;
    A(e, r.hand * 12, r.invHandBind, 0, this.G, 0);
    let i = this.acc,
      a = this.acc2,
      o = this.tmp;
    for (let s = 0; s < 5; s++) {
      let c = this.chains[s];
      re(i);
      let l = n(s);
      l && (F(r.n, l * r.spreadSign * un, c.at[0], o), i.set(o));
      let u = c.thumb ? this.thumbAxis : this.curlAxis;
      for (let n = 0; n < 3; n++)
        (F(u, t(s, n) * un, c.at[n], o),
          A(i, 0, o, 0, a, 0),
          i.set(a),
          A(i, 0, this.B, c.bones[n] * 12, o, 0),
          A(this.G, 0, o, 0, e, c.bones[n] * 12));
    }
  }
};
function En(e, t = new Float32Array(20)) {
  return (
    [e.index, e.middle, e.ring, e.pinky, e.thumb].forEach((e, n) => {
      ((t[n * 4] = e.c[0]),
        (t[n * 4 + 1] = e.c[1]),
        (t[n * 4 + 2] = e.c[2]),
        (t[n * 4 + 3] = e.spread ?? 0));
    }),
    t
  );
}
var Dn = 114 / 37,
  On = [
    [1.19, 1.41, 95],
    [1.57, 1.72, 95],
    [1.89, 2.05, 95],
    [2.22, 2.38, 75],
  ],
  kn = [
    [0.65, 0.82, 75],
    [0.98, 1.14, 95],
    [1.3, 1.46, 95],
    [1.62, 1.84, 95],
  ],
  G = -45,
  K = [-9, 6.5, -10],
  An = 2.6,
  jn = 14,
  q = (e) => b(e),
  Mn = {
    pitch: q([
      [0, 0],
      [0.17, -6, R.io],
      [0.5, 4.5, R.io],
      [0.9, 3.5, R.io],
      [1.1, 0, R.io],
      [2.42, -4, R.io],
      [2.62, 2.5, R.io],
      [2.97, 6, R.io],
      [3.0811, 0, R.io],
    ]),
    yaw: q([
      [0, 0],
      [0.12, -1.5, R.io],
      [0.6, 42, R.io],
      [1.05, 38, R.io],
      [2.3, 36, R.io],
      [2.58, 42, R.io],
      [2.97, -1.5, R.io],
      [3.0811, 0, R.io],
    ]),
    roll: q([
      [0, 0],
      [0.2, -20, R.io],
      [0.6, -2, R.io],
      [1.13, -1.5, R.io],
      [1.25, 4, R.io],
      [1.41, -16, R.io],
      [1.57, 3, R.io],
      [1.71, -18, R.io],
      [1.89, 3, R.io],
      [2.04, -20, R.io],
      [2.22, -2, R.io],
      [2.38, -24, R.io],
      [2.6, -14, R.io],
      [2.95, 9, R.io],
      [3.0811, 0, R.io],
    ]),
    work: q([
      [0.12, 0],
      [0.62, 1, R.io],
      [2.5, 1],
      [2.97, 0, R.io],
    ]),
    leftW: q([
      [0.04, 0],
      [0.3, 1, R.io],
      [2.55, 1],
      [2.95, 0, R.io],
    ]),
    rise: q([
      [0.3, 1],
      [0.865, 0, R.io],
    ]),
    push: q([
      [0.865, 0],
      [1.03, 1, R.io],
    ]),
    carryRoll: q([
      [0.3, -110],
      [0.865, G, R.io],
    ]),
    open: q([
      [0.02, 0],
      [0.2, 1, R.io],
      [0.3, 0, R.io],
      [2.42, 0],
      [2.58, 1, R.io],
      [2.9, 0.4, R.io],
      [3, 0, R.io],
    ]),
  },
  Nn = {
    pitch: q([
      [0, 0],
      [0.11, 5, R.io],
      [0.42, 1.5, R.io],
      [0.62, -4, R.io],
      [1.98, -1, R.io],
      [2.2, 3.5, R.io],
      [2.6, 4.5, R.io],
      [2.92, -6, R.io],
      [3.0811, 0, R.io],
    ]),
    yaw: q([
      [0, 0],
      [0.5, 42, R.io],
      [0.78, 36, R.io],
      [2, 38, R.io],
      [2.55, 42, R.io],
      [2.97, -1.5, R.io],
      [3.0811, 0, R.io],
    ]),
    roll: q([
      [0, 0],
      [0.12, 8, R.io],
      [0.5, -14, R.io],
      [0.65, -22, R.io],
      [0.71, -27, R.io],
      [0.82, -6, R.io],
      [0.98, -18, R.io],
      [1.14, 2, R.io],
      [1.3, -17, R.io],
      [1.46, 3, R.io],
      [1.62, -16, R.io],
      [1.84, 2, R.io],
      [2.1, -1.5, R.io],
      [2.55, -2, R.io],
      [2.86, -18, R.io],
      [3.0811, 0, R.io],
    ]),
    work: q([
      [0.1, 0],
      [0.55, 1, R.io],
      [2.55, 1],
      [3, 0, R.io],
    ]),
    leftW: q([
      [0.13, 0],
      [0.55, 1, R.io],
      [2.75, 1],
      [3.04, 0, R.io],
    ]),
    pull: q([
      [2, 0],
      [2.22, 1, R.out],
    ]),
    drop: q([
      [2.22, 0],
      [2.7, 1, R.in2],
    ]),
    carryRoll: q([
      [2.22, G],
      [2.7, -110, R.io],
    ]),
    open: q([
      [0.13, 0],
      [0.3, 1, R.io],
      [0.52, 0.6, R.io],
      [0.66, 0, R.io],
      [2.72, 0],
      [2.85, 0.8, R.io],
      [3, 0, R.io],
    ]),
  },
  Pn = q([
    [1.03, 0],
    [1.13, 1, R.out],
  ]),
  Fn = q([
    [2.42, 0],
    [2.62, 1, R.io],
  ]),
  In = q([
    [2.42, 0],
    [2.7, 1, R.io],
  ]),
  Ln = q([
    [0.3, 1],
    [0.62, 0, R.io],
  ]),
  Rn = q([
    [1.78, 0],
    [1.9, 1, R.io],
  ]);
function zn(e, t) {
  return e.silencer.thread * 0.72 * Math.min(1, Math.max(0, -t / 360));
}
function Bn(e, t, n, r) {
  let i = n > 0 ? -360 : 0,
    a = n > 0 ? G : G + e[0][2],
    o = 0,
    s = 0;
  for (let r = 0; r < e.length; r++) {
    let [c, l, u] = e[r],
      d = n > 0 ? G : G + u;
    if (t < c) {
      if (r > 0) {
        let i = e[r - 1][1],
          l = n > 0 ? G + e[r - 1][2] : G,
          u = (t - i) / (c - i);
        ((a = l + (d - l) * R.io((u - 0.12) / 0.76)),
          (o = 0.55 * Math.sin(Math.PI * Math.min(1, Math.max(0, u)))),
          (s = 0.12 * Math.sin(Math.PI * Math.min(1, Math.max(0, u)))));
      } else a = d;
      break;
    }
    let f = Math.min(1, (t - c) / (l - c)),
      p =
        n < 0 && r === 0
          ? f < 0.28
            ? 0.06 * R.io(f / 0.28)
            : 0.06 + 0.94 * R.out((f - 0.28) / 0.72)
          : R.io(f);
    if (((a = d + n * u * p), (i += n * u * p), f < 1)) break;
    a = n > 0 ? G + u : G;
  }
  ((r.roll = a), (r.spin = i), (r.open = o), (r.lift = s));
}
var J = { roll: 0, spin: 0, open: 0, lift: 0 };
function Vn(e, t, n, i, a, o) {
  let s = e.silencer;
  if (!s) return;
  let c = (n / Math.max(0.05, i)) * Dn,
    l = a ? Mn : Nn;
  ((t.a[0] += l.pitch(c) * o),
    (t.a[1] += l.yaw(c) * (0.6 + 0.4 * o)),
    (t.a[2] += l.roll(c) * o));
  let u = l.work(c);
  ((t.o[0] -= 3 * u),
    (t.o[1] += 4 * u),
    (t.o[2] -= 1.8 * u),
    (t.indexOff = Math.min(1, u * 1.5)),
    (t.leftW = l.leftW(c)),
    (t.leftT = `sil`),
    (t.leftCurl = `sil`),
    (t.leftCurlW = 1),
    (t.leftOpen = l.open(c)));
  let d = a ? On : kn;
  if (a) {
    let n = Mn.rise(c),
      i = Mn.push(c);
    if (((t.sil = +(c >= 0.3)), c < 1.03))
      ((t.silOff[0] = K[0] * n),
        (t.silOff[1] = K[1] * n),
        (t.silOff[2] = K[2] * n),
        (t.silX = s.thread + An * (1 - i)),
        (t.silPitch = jn * (1 - i) + 6 * n),
        (t.silYaw = -8 * n),
        (t.handRoll = c < 0.865 ? Mn.carryRoll(c) : G),
        (t.silSpin = t.handRoll - G - 360));
    else {
      (Bn(d, c, 1, J),
        (t.silSpin = J.spin),
        (t.handRoll = J.roll),
        (t.leftOpen = Math.max(t.leftOpen, J.open)),
        (t.handLift = J.lift));
      let n = Pn(c);
      ((t.silX = s.thread - (s.thread - zn(e, t.silSpin)) * n),
        (t.silPitch = 4 * (1 - n)),
        (t.a[0] += r(c, 2.36, 2.56) * 2.2 * o),
        (t.o[0] -= r(c, 2.36, 2.56) * 0.25),
        c > 2.42 &&
          ((t.handLift = Math.max(t.handLift, 0.35 * Fn(c))),
          (t.handRoll = J.roll + 10 * In(c))));
    }
    ((t.leftOff[2] -=
      2.5 * Math.sin(Math.PI * Math.min(1, Math.max(0, (c - 2.55) / 0.4)))),
      (t.leftOff[1] +=
        1.2 * Math.sin(Math.PI * Math.min(1, Math.max(0, (c - 2.55) / 0.4)))));
  } else {
    if (((t.sil = +(c < 2.7)), c < 2))
      (Bn(d, c, -1, J),
        (t.silSpin = J.spin),
        (t.handRoll = J.roll),
        (t.leftOpen = Math.max(t.leftOpen, J.open)),
        (t.handLift = Math.max(J.lift, 0.35 * Ln(c))),
        (t.silX = zn(e, t.silSpin)),
        (t.silX += (s.thread - zn(e, -360)) * Rn(c)),
        (t.a[2] -= r(c, 0.69, 0.86) * 5 * o),
        (t.a[0] -= r(c, 0.69, 0.86) * 1.5 * o));
    else {
      let e = Nn.pull(c),
        n = Nn.drop(c);
      ((t.silSpin = -360 + (Nn.carryRoll(c) - G)),
        (t.handRoll = Nn.carryRoll(c)),
        (t.silX = s.thread + An * e),
        (t.silPitch = jn * e * (1 - n) + 6 * n),
        (t.silYaw = -8 * n),
        (t.silOff[0] = K[0] * n),
        (t.silOff[1] = K[1] * n),
        (t.silOff[2] = K[2] * n),
        (t.o[0] += r(c, 2, 2.3) * 0.35));
    }
    ((t.leftOff[2] -=
      2.5 * Math.sin(Math.PI * Math.min(1, Math.max(0, (c - 0.13) / 0.42)))),
      (t.leftOff[1] +=
        1.2 * Math.sin(Math.PI * Math.min(1, Math.max(0, (c - 0.13) / 0.42)))));
  }
}
function Hn(e, t) {
  let n = (t) => (t / Dn) * e;
  if (t) {
    let e = [[n(1), `silTwist`, 0.45]];
    for (let [t] of On.slice(0, -1)) e.push([n(t - 0.01), `silTwist`, 0.9]);
    return (e.push([n(2.19), `silSeat`, 1]), e);
  }
  let r = [[n(0.63), `silCrack`, 1]];
  for (let [e] of kn.slice(1)) r.push([n(e - 0.01), `silTwist`, 0.9]);
  return (r.push([n(1.9), `silOff`, 1]), r);
}
function Un() {
  return {
    o: [0, 0, 0],
    a: [0, 0, 0],
    slide: 0,
    pump: 0,
    trigger: 0,
    indexOff: 0,
    mag: 0,
    magHand: 0,
    magDrop: [0, 0, 0],
    magHide: !1,
    aux: 0,
    auxIn: 0,
    leftW: 0,
    leftT: ``,
    leftOff: [0, 0, 0],
    leftCurl: `support`,
    leftCurlW: 0,
    thumb: 0,
    tail: 0,
    sil: 0,
    silX: 0,
    silSpin: 0,
    silPitch: 0,
    silYaw: 0,
    silOff: [0, 0, 0],
    handRoll: 0,
    handLift: 0,
    leftOpen: 0,
  };
}
function Wn(e) {
  ((e.o[0] = e.o[1] = e.o[2] = 0),
    (e.a[0] = e.a[1] = e.a[2] = 0),
    (e.slide = e.pump = e.trigger = e.indexOff = e.mag = e.magHand = 0),
    (e.magDrop[0] = e.magDrop[1] = e.magDrop[2] = 0),
    (e.magHide = !1),
    (e.aux = e.auxIn = 0),
    (e.leftW = 0),
    (e.leftT = ``),
    (e.leftOff[0] = e.leftOff[1] = e.leftOff[2] = 0),
    (e.leftCurl = `support`),
    (e.leftCurlW = 0),
    (e.thumb = 0),
    (e.tail = 0),
    (e.sil = e.silX = e.silSpin = e.silPitch = e.silYaw = 0),
    (e.silOff[0] = e.silOff[1] = e.silOff[2] = 0),
    (e.handRoll = e.handLift = e.leftOpen = 0));
}
function Gn(e, t, n, r) {
  let i = (e, t) => e + (t - e) * n;
  for (let n = 0; n < 3; n++)
    ((r.o[n] = i(e.o[n], t.o[n])),
      (r.a[n] = i(e.a[n], t.a[n])),
      (r.magDrop[n] = i(e.magDrop[n], t.magDrop[n])));
  ((r.slide = i(e.slide, t.slide)),
    (r.pump = i(e.pump, t.pump)),
    (r.trigger = i(e.trigger, t.trigger)),
    (r.indexOff = i(e.indexOff, t.indexOff)),
    (r.mag = i(e.mag, t.mag)),
    (r.magHand = n > 0.5 ? t.magHand : e.magHand),
    (r.magHide = n > 0.5 ? t.magHide : e.magHide),
    (r.aux = n > 0.5 ? t.aux : e.aux),
    (r.auxIn = i(e.auxIn, t.auxIn)),
    (r.thumb = i(e.thumb, t.thumb)),
    (r.tail = i(e.tail, t.tail)),
    (r.sil = n > 0.5 ? t.sil : e.sil),
    (r.silX = i(e.silX, t.silX)),
    (r.silSpin = i(e.silSpin, t.silSpin)),
    (r.silPitch = i(e.silPitch, t.silPitch)),
    (r.silYaw = i(e.silYaw, t.silYaw)));
  for (let n = 0; n < 3; n++) r.silOff[n] = i(e.silOff[n], t.silOff[n]);
  ((r.handRoll = t.handRoll),
    (r.handLift = t.handLift),
    (r.leftOpen = t.leftOpen),
    (r.leftW = t.leftW),
    (r.leftT = t.leftT));
  for (let e = 0; e < 3; e++) r.leftOff[e] = t.leftOff[e];
  ((r.leftCurl = t.leftCurl), (r.leftCurlW = t.leftCurlW));
}
var Kn = () => {
    let e = globalThis.matchMedia;
    return (
      typeof e == `function` && e(`(prefers-reduced-motion: reduce)`).matches
    );
  },
  Y = (e) => b(e),
  qn = class {
    def;
    pose = Un();
    base = { clip: `idle`, t: 0, dur: 1, empty: !1 };
    from = Un();
    cur = Un();
    fade = 0;
    fadeT = 0;
    leftFade = 0;
    leftFadeDur = 0.15;
    shotT = 1 / 0;
    dryT = 1 / 0;
    modeT = 1 / 0;
    rx = new Float64Array(4);
    rv = new Float64Array(4);
    empty = !1;
    silenced = !1;
    motion = 1;
    shellN = 0;
    onCue = null;
    cues = [];
    cueI = 0;
    constructor(e) {
      ((this.def = e), (this.motion = Kn() ? 0.45 : 1));
    }
    get clip() {
      return this.base.clip;
    }
    get clipTime() {
      return this.base.t;
    }
    get clipDuration() {
      return this.base.dur;
    }
    get busy() {
      let e = this.base.clip;
      return (
        e === `draw` ||
        e === `reload` ||
        e === `shellStart` ||
        e === `shellInsert` ||
        e === `shellEnd` ||
        e === `silencer`
      );
    }
    setGun(e) {
      ((this.def = e),
        this.rx.fill(0),
        this.rv.fill(0),
        (this.shotT = this.dryT = this.modeT = 1 / 0),
        (this.empty = !1),
        (this.silenced = !1),
        this.play(`idle`, 1, !0));
    }
    play(e, t, n = !1, r = !1, i = !1) {
      (n
        ? ((this.fade = 0), (this.leftFade = 0))
        : (Gn(this.cur, this.cur, 1, this.from),
          (this.from.leftW = this.cur.leftW),
          (this.fade = e === `inspect` || e === `idle` ? 0.22 : 0.12),
          (this.fadeT = 0),
          (this.leftFade = 1),
          (this.leftFadeDur = this.fade + 0.05)),
        e === `shellInsert` && this.shellN++,
        (this.base = {
          clip: e,
          t: 0,
          dur: Math.max(0.05, t),
          empty: r,
          on: i,
        }),
        (this.cues = Jn(this.def, e, this.base.dur, r, i)),
        (this.cueI = 0));
    }
    draw() {
      (this.play(`draw`, this.drawDur(), !0), this.rx.fill(0), this.rv.fill(0));
    }
    drawDur() {
      return Math.min(this.def.timing.draw, 1) * 0.85;
    }
    holster() {
      this.play(`holster`, 0.22);
    }
    fire() {
      let e = this.def.recoil,
        t = this.motion,
        n = Math.sqrt(e.settle);
      ((this.rv[0] += e.kick * n * 1.7 * t),
        (this.rv[1] += e.back * n * 1.7 * t),
        (this.rv[2] += (Math.random() * 2 - 1) * e.roll * n * 1.5 * t),
        (this.rv[3] += (Math.random() * 2 - 1) * e.roll * 0.5 * n * 1.5 * t),
        (this.shotT = 0));
      let r = this.base.clip;
      ((r === `inspect` ||
        r === `shellStart` ||
        r === `shellInsert` ||
        r === `shellEnd` ||
        r === `holster` ||
        r === `silencer`) &&
        this.play(`idle`, 1),
        r === `draw` &&
          (this.base.t = Math.max(this.base.t, this.base.dur * 0.85)));
      let i = this.def.timing.pump;
      i && (this.pumpIn = i.at);
    }
    pumpIn = 1 / 0;
    dryFire() {
      ((this.dryT = 0),
        (this.rv[0] += 0.6 * Math.sqrt(this.def.recoil.settle) * this.motion));
    }
    modeToggle() {
      this.modeT = 0;
    }
    silencer(e, t, n = 0) {
      if (
        ((this.silenced = e),
        this.def.silencer &&
          ((this.pumpIn = 1 / 0),
          this.play(`silencer`, t, n > 0, !1, e),
          n > 0))
      )
        for (
          this.base.t = Math.min(n, this.base.dur);
          this.cueI < this.cues.length &&
          this.cues[this.cueI][0] <= this.base.t;

        )
          this.cueI++;
    }
    reload(e, t) {
      ((this.pumpIn = 1 / 0), this.play(`reload`, e, !1, t));
    }
    shellStart(e) {
      ((this.pumpIn = 1 / 0),
        (this.shellN = 0),
        this.play(`shellStart`, e ?? this.def.timing.shells?.start ?? 0.5));
    }
    shellInsert(e) {
      (this.base.clip !== `shellStart` &&
        this.base.clip !== `shellInsert` &&
        this.play(`shellStart`, 0.25, !1),
        this.play(
          `shellInsert`,
          e ?? this.def.timing.shells?.each ?? 0.5,
          this.base.clip === `shellInsert`,
        ));
    }
    shellEnd(e) {
      this.play(`shellEnd`, e ?? this.def.timing.shells?.end ?? 0.6);
    }
    inspect() {
      this.base.clip === `idle` && this.play(`inspect`, Xn[this.def.id] ?? 2.4);
    }
    seek(e, t, n, r = !1, i = !1) {
      if (
        (this.rx.fill(0),
        this.rv.fill(0),
        (this.shotT = this.dryT = this.modeT = 1 / 0),
        (this.pumpIn = 1 / 0),
        (this.fade = 0),
        (this.leftFade = 0),
        e === `fire`)
      ) {
        ((this.base = { clip: `idle`, t: 0, dur: 1, empty: !1 }),
          this.fire(),
          (this.pumpIn = 1 / 0),
          (this.base = { clip: `idle`, t: 0, dur: 1, empty: !1 }));
        for (let e = 0; e < t; e += 1 / 240) this.stepSpring(1 / 240);
        this.shotT = t;
        return;
      }
      ((this.base = {
        clip: e,
        t,
        dur:
          n ??
          (e === `draw`
            ? this.drawDur()
            : e === `inspect`
              ? (Xn[this.def.id] ?? 2.4)
              : e === `reload`
                ? (this.def.timing.reload ?? 2)
                : e === `silencer`
                  ? Yn
                  : 0.5),
        empty: r,
        on: i,
      }),
        e === `silencer` && (this.silenced = i));
    }
    stepSpring(e) {
      let t = this.def.recoil.settle,
        n = 2 * Math.sqrt(t) * 0.72;
      for (let r = 0; r < 4; r++)
        ((this.rv[r] += (-t * this.rx[r] - n * this.rv[r]) * e),
          (this.rx[r] += this.rv[r] * e));
    }
    update(e) {
      let t = Math.ceil(e / (1 / 240)),
        n = t ? e / t : 0;
      for (let e = 0; e < t; e++) this.stepSpring(n);
      ((this.shotT += e),
        (this.dryT += e),
        (this.modeT += e),
        this.pumpIn !== 1 / 0 &&
          ((this.pumpIn -= e),
          this.pumpIn <= 0 &&
            ((this.pumpIn = 1 / 0),
            this.busy ||
              this.play(
                `pump`,
                this.def.timing.pump.dur,
                this.base.clip === `idle`,
              ))));
      let r = this.base;
      for (
        r.t += e;
        this.cueI < this.cues.length && r.t >= this.cues[this.cueI][0];

      ) {
        let e = this.cues[this.cueI++];
        this.onCue?.(e[1], e[2]);
      }
      (r.clip !== `idle` &&
        r.t >= r.dur &&
        ((r.clip === `shellStart` || r.clip === `shellInsert`
          ? r.clip
          : `idle`) === `idle`
          ? this.play(
              `idle`,
              1,
              r.clip === `draw` ||
                r.clip === `pump` ||
                r.clip === `reload` ||
                r.clip === `shellEnd` ||
                r.clip === `silencer`,
            )
          : (r.t = r.dur)),
        Wn(this.cur),
        this.silenced && this.def.silencer && (this.cur.sil = 1),
        this.sampleBase(this.cur, this.base),
        this.overlays(this.cur));
      let i = this.pose;
      if (this.fade > 0 && this.fadeT < this.fade) {
        this.fadeT += e;
        let t = Math.min(1, this.fadeT / this.fade);
        Gn(this.from, this.cur, t * t * (3 - 2 * t), i);
      } else Gn(this.cur, this.cur, 1, i);
      (this.leftFade > 0 &&
        (this.leftFade = Math.max(0, this.leftFade - e / this.leftFadeDur)),
        (i.a[0] -= this.rx[0]),
        (i.o[0] -= this.rx[1]),
        (i.a[2] += this.rx[2]),
        (i.a[1] += this.rx[3]));
    }
    overlays(e) {
      let t = this.def.recoil;
      if (t.slide > 0 && this.shotT < t.slideTime * 1.6) {
        let n = this.shotT / t.slideTime,
          r = n < 0.25 ? R.out(n / 0.25) : 1 - R.io((n - 0.25) / 0.75);
        e.slide = Math.max(e.slide, t.slide * Math.max(0, r));
      }
      this.empty &&
        this.def.cls === `pistol` &&
        this.base.clip !== `reload` &&
        (e.slide = Math.max(e.slide, t.slide));
      let n = (e) =>
        e < 0.03 ? e / 0.03 : e < 0.12 ? 1 - (e - 0.03) / 0.09 : 0;
      ((e.trigger = Math.max(e.trigger, n(this.shotT), n(this.dryT))),
        this.dryT < 0.2 &&
          (e.a[0] -= r(this.dryT, 0, 0.2) * 0.35 * this.motion),
        this.modeT < 0.35 &&
          (e.thumb = Math.max(e.thumb, pe(this.modeT, 0, 0.35, 1))));
    }
    sampleBase(e, t) {
      let n = t.dur > 0 ? Math.min(1, t.t / t.dur) : 1,
        r = this.motion;
      switch (t.clip) {
        case `idle`:
          return;
        case `draw`:
          return this.drawClip(e, n, r);
        case `holster`: {
          let t = R.in2(n);
          ((e.o[2] -= 7 * t),
            (e.o[1] -= 1.5 * t),
            (e.a[0] += 30 * t * r),
            (e.a[2] += 15 * t * r),
            (e.leftW = 0),
            (e.leftOff[2] = -8 * t));
          return;
        }
        case `reload`:
          return this.def.cls === `smg`
            ? this.reloadPod(e, n, t.dur, t.empty, r)
            : this.reloadMag(e, n, t.dur, t.empty, r);
        case `shellStart`:
          return this.shellStartClip(e, n, r);
        case `shellInsert`:
          return this.shellInsertClip(e, n, r);
        case `shellEnd`:
          return this.shellEndClip(e, n, t.dur, r);
        case `pump`:
          return this.pumpClip(e, t.t, t.dur, r);
        case `inspect`:
          return this.inspectClip(e, t.t, r);
        case `silencer`:
          return Vn(this.def, e, t.t, t.dur, t.on ?? !0, r);
      }
    }
    drawClip(e, t, n) {
      let i = this.def.cls,
        a =
          1 -
          Y([
            [0, 0],
            [0.62, 1, R.out],
            [0.8, 1.04, R.io],
            [1, 1, R.io],
          ])(t);
      ((e.o[2] -= 9 * a),
        (e.o[0] -= 2.5 * a),
        (e.o[1] -= 1.5 * a),
        (e.a[0] += 38 * a * n),
        (e.a[1] -= 8 * a * n),
        (e.a[2] += 28 * a * n));
      let o =
        1 -
        Y([
          [0, 0],
          [0.3, 0],
          [0.75, 1, R.out],
        ])(t);
      if (
        ((e.leftOff[2] = -9 * o),
        (e.leftOff[0] = -2 * o),
        (e.leftCurl = `open`),
        (e.leftCurlW = o),
        this.def.id === `fiveseven`)
      ) {
        let n = Y([
          [0.35, 0],
          [0.48, 1, R.out],
          [0.72, 1],
          [0.84, 0, R.io],
        ])(t);
        ((e.leftW = n),
          (e.leftT = `rack`),
          (e.leftCurl = `pinch`),
          (e.leftCurlW = Math.max(o, n)),
          (e.slide =
            this.def.recoil.slide *
            Y([
              [0.5, 0],
              [0.6, 1, R.out],
              [0.66, 1],
              [0.7, 0, R.in2],
            ])(t)),
          (e.leftOff[0] -=
            1.3 *
            Y([
              [0.5, 0],
              [0.6, 1, R.out],
              [0.66, 1],
              [0.7, 0, R.in2],
            ])(t)));
      } else if (i === `shotgun`) {
        if (this.def.id === `m3`)
          e.pump =
            2.4 *
            Y([
              [0.55, 0],
              [0.7, 1, R.out],
              [0.78, 1],
              [0.92, 0, R.io],
            ])(t);
        else {
          let n = Y([
            [0.5, 0],
            [0.6, 1, R.out],
            [0.82, 1],
            [0.92, 0, R.io],
          ])(t);
          ((e.leftW = n),
            (e.leftT = `rack`),
            (e.leftCurl = `pinch`),
            (e.leftCurlW = Math.max(o, n)));
          let r = Y([
            [0.62, 0],
            [0.7, 1, R.out],
            [0.74, 1],
            [0.78, 0, R.in2],
          ])(t);
          ((e.slide = this.def.recoil.slide * r),
            (e.leftOff[0] -= this.def.recoil.slide * r));
        }
        e.a[0] += r(t, 0.7, 1) * 2 * n;
      } else i === `smg` && (e.a[2] -= r(t, 0.62, 0.95) * 3 * n);
    }
    reloadMag(e, t, n, i, a) {
      let o = n,
        s = Y([
          [0, 0],
          [0.12, 1, R.io],
          [0.82, 1],
          [1, 0, R.io],
        ])(t),
        c = this.def.cls === `rifle` || this.def.cls === `sniper`;
      ((e.a[2] += (c ? 16 : 34) * s * a),
        (e.a[1] += (c ? -3 : 10) * s * a),
        (e.a[0] += (c ? 3 : 8) * s * a),
        (e.o[0] += (c ? 0.8 : 0.5) * s),
        (e.o[1] += (c ? 0.5 : 2.2) * s),
        (e.o[2] += (c ? 0.6 : 2.2) * s),
        (e.indexOff = s));
      let l = this.def.mag ? 3.6 : 0;
      if (t < 0.5) {
        let n = Math.max(0, (t - 0.12) * o);
        e.mag = l * Math.min(1, R.in2(n / 0.14));
        let r = Math.max(0, n - 0.1);
        ((e.magDrop[2] = -130 * r * r), (e.magHide = t > 0.42));
      } else
        ((e.magHand = 1),
          (e.mag =
            l *
            0.9 *
            (1 -
              Y([
                [0.62, 0],
                [0.72, 1, R.in2],
              ])(t))),
          (e.magHide = t < 0.5));
      let u = Y([
        [0.1, 0],
        [0.18, 1, R.io],
        [0.86, 1],
        [0.97, 0, R.io],
      ])(t);
      ((e.leftW = u), (e.leftT = `mag`));
      let d = Y([
        [0.16, 0],
        [0.32, 1, R.in2],
        [0.46, 1],
        [0.6, 0, R.out],
      ])(t);
      ((e.leftOff[2] = -12 * d),
        (e.leftOff[1] = 2.5 * d),
        (e.leftOff[0] = -2 * d),
        (e.leftCurl = t < 0.48 ? `open` : `mag`),
        (e.leftCurlW = Math.min(u, t < 0.48 ? d : 1)),
        (e.a[0] -= r(t, 0.71, 0.86) * 4 * a),
        (e.o[2] += r(t, 0.71, 0.86) * 0.5),
        i &&
          ((e.slide =
            this.def.recoil.slide *
            (t < 0.8 ? 1 : 1 - R.out((t - 0.8) / 0.04))),
          (e.thumb = pe(t, 0.77, 0.85, 1)),
          (e.a[0] -= r(t, 0.8, 0.9) * 2 * a)));
    }
    reloadPod(e, t, n, i, a) {
      let o = Y([
        [0, 0],
        [0.1, 1, R.io],
        [0.84, 1],
        [1, 0, R.io],
      ])(t);
      ((e.a[2] += 22 * o * a),
        (e.a[0] -= 10 * o * a),
        (e.a[1] += 6 * o * a),
        (e.o[0] += 2.5 * o),
        (e.o[1] += 0.8 * o),
        (e.o[2] -= 0.6 * o),
        (e.indexOff = o));
      let s = Y([
        [0.06, 0],
        [0.16, 1, R.io],
        [0.88, 1],
        [0.98, 0, R.io],
      ])(t);
      if (
        ((e.leftW = s),
        (e.leftT = `mag`),
        (e.leftCurl = `mag`),
        (e.leftCurlW = s),
        t < 0.5)
      ) {
        ((e.mag =
          2.5 *
          Y([
            [0.2, 0],
            [0.3, 1, R.in2],
          ])(t)),
          (e.magHand = 1));
        let n = Y([
          [0.28, 0],
          [0.42, 1, R.in2],
        ])(t);
        ((e.leftOff[2] = -11 * n),
          (e.leftOff[1] = 3 * n),
          (e.magHide = t > 0.42));
      } else {
        e.magHand = +(t < 0.7);
        let n =
          1 -
          Y([
            [0.46, 0],
            [0.6, 1, R.out],
          ])(t);
        ((e.leftOff[2] = -11 * n),
          (e.leftOff[1] = 3 * n),
          (e.mag =
            2.5 *
            (1 -
              Y([
                [0.6, 0],
                [0.7, 1, R.in2],
              ])(t))),
          (e.magHide = t < 0.5),
          (e.a[0] -= r(t, 0.69, 0.82) * 3 * a));
      }
      let c = Y([
        [0.74, 0],
        [0.8, 1, R.out],
        [0.83, 1],
        [0.86, 0, R.in2],
      ])(t);
      t > 0.7 &&
        ((e.leftT = `rack`),
        (e.leftCurl = `pinch`),
        (e.slide = this.def.recoil.slide > 0 ? 1.4 * c : 0),
        (e.leftOff[0] = -1.4 * c));
    }
    portPose(e, t, n) {
      ((e.a[2] += 30 * t * n),
        (e.a[0] -= 9 * t * n),
        (e.a[1] += 4 * t * n),
        (e.o[2] += 1.6 * t),
        (e.o[1] += 1.6 * t),
        (e.o[0] -= 0.6 * t),
        (e.indexOff = t));
    }
    shellStartClip(e, t, n) {
      let r = R.io(t);
      (this.portPose(e, r, n),
        (e.leftW = r),
        (e.leftT = `port`),
        (e.leftCurl = `open`),
        (e.leftCurlW = r),
        (e.leftOff[2] = -3 * pe(t, 0, 1, 1)));
    }
    shellInsertClip(e, t, n) {
      (this.portPose(e, 1, n), (e.leftW = 1), (e.leftT = `port`));
      let i = Y([
          [0, 0],
          [0.18, 1, R.in2],
          [0.3, 1],
          [0.55, 0, R.out],
        ])(t),
        a = this.shellN % 2 ? 0.6 : -0.4;
      ((e.leftOff[2] = -9 * i),
        (e.leftOff[1] = (2 + a) * i),
        (e.leftOff[0] = -1.5 * i),
        (e.aux = +(t > 0.2 && t < 0.86)),
        (e.auxIn = Y([
          [0.55, 0],
          [0.82, 1, R.io],
        ])(t)),
        (e.leftCurl = `shell`),
        (e.leftCurlW = 1),
        (e.leftOff[0] +=
          0.9 *
          Y([
            [0.58, 0],
            [0.8, 1, R.io],
            [1, 0, R.io],
          ])(t)),
        (e.a[0] -= r(t, 0.78, 1) * 1.5 * n));
    }
    shellEndClip(e, t, n, i) {
      let a =
        1 -
        Y([
          [0, 0],
          [0.55, 1, R.io],
        ])(t);
      (this.portPose(e, a, i),
        (e.leftW = a),
        (e.leftT = `port`),
        (e.leftCurl = `open`),
        (e.leftCurlW = a),
        this.def.id === `m3`
          ? ((e.pump =
              2.4 *
              Y([
                [0.55, 0],
                [0.72, 1, R.out],
                [0.8, 1],
                [0.95, 0, R.io],
              ])(t)),
            (e.a[0] -= r(t, 0.7, 1) * 2 * i))
          : ((e.slide =
              this.def.recoil.slide *
              Y([
                [0.55, 1],
                [0.6, 0, R.in2],
              ])(t) *
              +(t > 0.45)),
            (e.a[2] -= r(t, 0.58, 0.9) * 2.5 * i)));
    }
    pumpClip(e, t, n, r) {
      let i = t / n;
      e.pump =
        2.4 *
        Y([
          [0, 0],
          [0.38, 1, R.out],
          [0.5, 1],
          [0.86, 0, R.io],
        ])(i);
      let a = pe(i, 0, 1, 1);
      ((e.a[0] += 3 * a * r), (e.a[2] += 5 * a * r), (e.o[2] -= 0.4 * a));
    }
    inspectClip(e, t, n) {
      let r = Qn[this.def.id];
      r && r(e, t, n);
    }
  };
function Jn(e, t, n, r, i = !1) {
  if (!e) return [];
  let a = e.id,
    o = (e) => e * n;
  switch (t) {
    case `draw`: {
      let e = [[0, `draw`, 1]];
      return (
        a === `fiveseven`
          ? e.push([o(0.6), `slide`, 0.8])
          : a === `m3`
            ? e.push([o(0.62), `pump`, 0.9])
            : a === `xm1014`
              ? e.push([o(0.7), `slide`, 0.8])
              : a === `p90` && e.push([o(0.7), `magIn`, 0.45]),
        e
      );
    }
    case `reload`:
      return e.cls === `smg`
        ? [
            [o(0.22), `magOut`, 1],
            [o(0.68), `magIn`, 1],
            [o(0.8), `slide`, 0.9],
          ]
        : [
            [o(0.12), `magOut`, 1],
            [o(0.7), `magIn`, 1],
            ...(r ? [[o(0.8), `slide`, 1]] : []),
          ];
    case `shellInsert`:
      return [[o(0.75), `shell`, 1]];
    case `shellEnd`:
      return a === `m3` ? [[o(0.6), `pump`, 1]] : [[o(0.55), `slide`, 0.9]];
    case `pump`:
      return [[0, `pump`, 1]];
    case `silencer`:
      return e.silencer ? Hn(n, i) : [];
    case `inspect`:
      return (
        {
          glock: [[1.9, `mode`, 0.35]],
          usp: [[1.2, `dry`, 0.3]],
          fiveseven: [
            [0.45, `slide`, 0.45],
            [0.95, `slide`, 0.45],
          ],
          m3: [[1.88, `pump`, 0.55]],
          xm1014: [
            [1.1, `mode`, 0.3],
            [1.4, `mode`, 0.3],
          ],
          p90: [
            [1.05, `mode`, 0.3],
            [1.3, `mode`, 0.3],
            [1.55, `mode`, 0.3],
          ],
          ak47: [
            [1.05, `mode`, 0.35],
            [1.35, `mode`, 0.35],
          ],
          awp: [[1.95, `pump`, 0.55]],
        }[a] ?? []
      );
    default:
      return [];
  }
}
var Yn = 114 / 37,
  Xn = {
    glock: 2.3,
    usp: 2.6,
    fiveseven: 2.6,
    m3: 2.8,
    xm1014: 2.6,
    p90: 2.7,
    ak47: 2.6,
    awp: 2.8,
  };
function Zn(e, t, n, r, i = 6) {
  let a = b([
    [n, 0],
    [n + 0.25, 1, R.io],
    [r - 0.3, 1],
    [r, 0, R.io],
  ])(t);
  return (
    (e.leftOff[2] = -i * a),
    (e.leftOff[1] = 1.5 * a),
    (e.leftCurl = `open`),
    (e.leftCurlW = a),
    a
  );
}
var Qn = {
    glock: (e, t, n) => {
      Zn(e, t, 0.05, 2.05);
      let i = b([
          [0, 0],
          [0.45, -62, R.io],
          [1.1, -55],
          [1.45, 18, R.io],
          [1.85, 14],
          [2.15, 0, R.io],
        ])(t),
        a = b([
          [0, 0],
          [0.45, 18, R.io],
          [1.1, 16],
          [1.45, 6, R.io],
          [2.15, 0, R.io],
        ])(t);
      ((e.a[2] += i * n),
        (e.a[1] += a * n),
        (e.a[0] +=
          b([
            [0, 0],
            [0.45, -8, R.io],
            [1.45, -14, R.io],
            [2.15, 0, R.io],
          ])(t) * n),
        (e.o[1] +=
          2.2 *
          b([
            [0, 0],
            [0.45, 1, R.io],
            [1.85, 1],
            [2.15, 0, R.io],
          ])(t)),
        (e.o[2] +=
          1 *
          b([
            [0, 0],
            [0.45, 1, R.io],
            [1.85, 1],
            [2.15, 0, R.io],
          ])(t)),
        (e.o[2] -= (r(t, 1.88, 2.02) + r(t, 2.02, 2.18)) * 0.5 * n));
    },
    usp: (e, t, n) => {
      let r = b([
        [0, 0],
        [0.5, -48, R.io],
        [1.7, -44],
        [2.1, 0, R.io],
      ])(t);
      ((e.a[2] += r * n),
        (e.a[1] +=
          b([
            [0, 0],
            [0.5, 20, R.io],
            [1.7, 18],
            [2.1, 0, R.io],
          ])(t) * n),
        (e.a[0] +=
          b([
            [0, 0],
            [0.5, -6, R.io],
            [2.1, 0, R.io],
          ])(t) * n),
        (e.o[1] +=
          2.4 *
          b([
            [0, 0],
            [0.5, 1, R.io],
            [1.8, 1],
            [2.2, 0, R.io],
          ])(t)),
        (e.o[2] +=
          0.8 *
          b([
            [0, 0],
            [0.5, 1, R.io],
            [1.8, 1],
            [2.2, 0, R.io],
          ])(t)));
      let i = b([
        [0.05, 0],
        [0.4, 1, R.io],
        [0.75, 1],
        [1.05, 2, R.io],
        [1.25, 2],
        [1.55, 1, R.io],
        [2.05, 1],
        [2.4, 0, R.io],
      ])(t);
      ((e.leftOff[2] = -6 * Math.min(1, i)),
        (e.leftCurl = `open`),
        (e.leftCurlW = Math.min(1, i)),
        i > 1 &&
          ((e.leftW = i - 1),
          (e.leftT = `tail`),
          (e.leftCurl = `flat`),
          (e.leftCurlW = 1),
          (e.leftOff[2] = -6 * (2 - i))),
        (e.tail =
          t > 1.2 ? Math.sin((t - 1.2) * 28) * Math.exp(-(t - 1.2) * 4.5) : 0));
    },
    fiveseven: (e, t, n) => {
      let r = b([
        [0.05, 0],
        [0.35, 1, R.io],
        [1, 1],
        [1.25, 0, R.io],
      ])(t);
      ((e.leftW = r),
        (e.leftT = `rack`),
        (e.leftCurl = `pinch`),
        (e.leftCurlW = r));
      let i = b([
        [0.4, 0],
        [0.6, 1, R.io],
        [0.85, 1],
        [1, 0, R.io],
      ])(t);
      ((e.slide = 0.8 * i),
        (e.leftOff[0] = -0.8 * i),
        (e.a[2] +=
          b([
            [0, 0],
            [0.35, -18, R.io],
            [1.1, -18],
            [1.6, -58, R.io],
            [2.1, -52],
            [2.5, 0, R.io],
          ])(t) * n),
        (e.a[1] +=
          b([
            [0, 0],
            [0.35, 8, R.io],
            [1.6, 18, R.io],
            [2.5, 0, R.io],
          ])(t) * n),
        (e.a[0] +=
          b([
            [0, 0],
            [0.35, -10, R.io],
            [1.6, -6, R.io],
            [2.5, 0, R.io],
          ])(t) * n),
        (e.o[1] +=
          2 *
          b([
            [0, 0],
            [0.35, 1, R.io],
            [2.2, 1],
            [2.55, 0, R.io],
          ])(t)),
        (e.o[2] +=
          1 *
          b([
            [0, 0],
            [0.35, 1, R.io],
            [2.2, 1],
            [2.55, 0, R.io],
          ])(t)),
        t > 1.15 && Zn(e, t, 1.15, 2.55));
    },
    m3: (e, t, n) => {
      let r = b([
        [0, 0],
        [0.5, 1, R.io],
        [2.2, 1],
        [2.75, 0, R.io],
      ])(t);
      ((e.a[2] +=
        b([
          [0, 0],
          [0.5, -35, R.io],
          [1.3, -30],
          [1.75, 12, R.io],
          [2.2, 8],
          [2.75, 0, R.io],
        ])(t) * n),
        (e.a[0] -= 10 * r * n),
        (e.a[1] += 10 * r * n),
        (e.o[1] += 2.5 * r),
        (e.o[2] += 1.5 * r),
        (e.o[0] -= 1 * r),
        (e.pump =
          1.3 *
          b([
            [1.85, 0],
            [2, 1, R.out],
            [2.1, 1],
            [2.3, 0, R.io],
          ])(t)));
    },
    xm1014: (e, t, n) => {
      let i = b([
        [0, 0],
        [0.5, 1, R.io],
        [2.1, 1],
        [2.6, 0, R.io],
      ])(t);
      ((e.a[2] +=
        b([
          [0, 0],
          [0.5, -26, R.io],
          [1.6, -22],
          [2.6, 0, R.io],
        ])(t) * n),
        (e.a[0] -= 6 * i * n),
        (e.a[1] += 8 * i * n),
        (e.o[1] += 1.5 * i),
        (e.o[2] += 1.3 * i));
      let a = r(t, 1, 1.2) + r(t, 1.3, 1.5);
      ((e.leftOff[2] = -0.6 * a),
        (e.leftCurl = `open`),
        (e.leftCurlW = 0.5 * a),
        (e.a[0] += a * 0.6 * n));
    },
    p90: (e, t, n) => {
      let i = b([
        [0, 0],
        [0.5, 1, R.io],
        [2.2, 1],
        [2.7, 0, R.io],
      ])(t);
      ((e.a[2] += 38 * i * n),
        (e.a[0] -= 16 * i * n),
        (e.a[1] += 12 * i * n),
        (e.o[0] += 2.5 * i),
        (e.o[1] += 1.2 * i),
        (e.o[2] -= 0.4 * i));
      let a = b([
        [0.55, 0],
        [0.85, 1, R.io],
        [1.95, 1],
        [2.25, 0, R.io],
      ])(t);
      ((e.leftW = a),
        (e.leftT = `mag`),
        (e.leftCurl = `flat`),
        (e.leftCurlW = a),
        (e.leftOff[2] =
          0.5 * (r(t, 1, 1.2) + r(t, 1.25, 1.45) + r(t, 1.5, 1.7))),
        (e.tail = r(t, 1.05, 1.25) + r(t, 1.3, 1.5) + r(t, 1.55, 1.75)));
    },
    ak47: (e, t, n) => {
      let i = b([
        [0, 0],
        [0.5, 1, R.io],
        [2.1, 1],
        [2.6, 0, R.io],
      ])(t);
      ((e.a[2] +=
        b([
          [0, 0],
          [0.5, -30, R.io],
          [1.7, -26],
          [2.6, 0, R.io],
        ])(t) * n),
        (e.a[0] -= 6 * i * n),
        (e.a[1] += 10 * i * n),
        (e.o[1] += 2 * i),
        (e.o[2] += 1.3 * i));
      let a = b([
        [0.55, 0],
        [0.85, 1, R.io],
        [1.7, 1],
        [2.05, 0, R.io],
      ])(t);
      ((e.leftW = a),
        (e.leftT = `mag`),
        (e.leftCurl = `flat`),
        (e.leftCurlW = a),
        (e.leftOff[0] = -0.5 * (r(t, 0.95, 1.15) + r(t, 1.25, 1.45))),
        (e.a[0] += (r(t, 1.02, 1.2) + r(t, 1.32, 1.5)) * 0.8 * n));
    },
    awp: (e, t, n) => {
      let r = b([
        [0, 0],
        [0.5, 1, R.io],
        [2.25, 1],
        [2.8, 0, R.io],
      ])(t);
      ((e.a[2] +=
        b([
          [0, 0],
          [0.5, -32, R.io],
          [1.4, -28],
          [1.8, 10, R.io],
          [2.25, 6],
          [2.8, 0, R.io],
        ])(t) * n),
        (e.a[0] -= 8 * r * n),
        (e.a[1] += 10 * r * n),
        (e.o[1] += 2.5 * r),
        (e.o[2] += 1.4 * r),
        (e.o[0] -= 1 * r),
        (e.pump =
          1.2 *
          b([
            [1.9, 0],
            [2.05, 1, R.out],
            [2.15, 1],
            [2.35, 0, R.io],
          ])(t)));
    },
  },
  $n = Object.fromEntries(
    Object.entries({
      open: [
        [8, 14, 10, 4],
        [10, 16, 10, 0],
        [12, 16, 10, -2],
        [14, 16, 10, -4],
        [4, 10, 8, 4],
      ],
      mag: [
        [48, 52, 36, 0],
        [56, 60, 42, 0],
        [62, 64, 46, 0],
        [66, 66, 48, 0],
        [8, 22, 18, 10],
      ],
      pinch: [
        [46, 56, 40, 0],
        [72, 84, 60, 0],
        [80, 88, 64, 0],
        [84, 88, 64, 0],
        [14, 30, 28, 12],
      ],
      shell: [
        [30, 40, 30, 0],
        [48, 58, 44, 0],
        [76, 84, 64, 0],
        [82, 84, 64, 0],
        [8, 16, 12, 10],
      ],
      flat: [
        [4, 6, 4, 2],
        [4, 6, 4, 0],
        [4, 6, 4, -2],
        [6, 6, 4, -4],
        [2, 6, 4, 6],
      ],
    }).map(([e, t]) => [e, Float32Array.from(t.flat())]),
  ),
  er = [6, 8, 4],
  X = { fwd: 2, left: 2.5, up: 2.5, down: 4 };
function tr(e, t) {
  for (let n = 0; n < 12; n++) t[n] = e[n];
  return (
    (t[3] = Math.max(-X.fwd, Math.min(X.fwd, t[3]))),
    (t[7] = Math.max(-X.left, Math.min(X.left, t[7]))),
    (t[11] = Math.max(-X.down, Math.min(X.up, t[11]))),
    t
  );
}
var nr = { anchor: 0.9 },
  rr = { R: [10, -20, -24], L: [10, 10, -24] },
  ir = class {
    anim = new qn(null);
    def = null;
    clamp = !0;
    rig = U();
    W;
    right = null;
    left = null;
    onSil = null;
    curlsSil = new Float32Array(20);
    targets = new Map();
    poserR = new Tn(`R`);
    poserL = new Tn(`L`);
    curlsR = new Float32Array(20);
    curlsL = new Float32Array(20);
    cR = new Float32Array(20);
    cL = new Float32Array(20);
    G = new Float32Array(12);
    T = new Float32Array(12);
    T2 = new Float32Array(12);
    T3 = new Float32Array(12);
    C = new Float32Array(12);
    C2 = new Float32Array(12);
    C3 = new Float32Array(12);
    C4 = new Float32Array(12);
    pivot = new Float32Array(3);
    H = new Float32Array(12);
    prevLeft = new Float32Array(12);
    hadLeft = !1;
    bones;
    constructor() {
      let e = this.rig;
      this.W = new Float32Array(e.count * 12);
      for (let t = 0; t < e.count; t++)
        this.W.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], t * 12);
      (this.W.set(e.hands.bind), (this.bones = { R: dr(`R`), L: dr(`L`) }));
    }
    setGun(e, t, n = !1) {
      if (((this.def = e), (this.hadLeft = !1), e)) {
        ((this.right = bn(e, `R`, t)),
          (this.left = bn(e, `L`, t)),
          En(this.right.curls, this.curlsR),
          En(this.left.curls, this.curlsL),
          (this.onSil = Sn(e, t)),
          this.onSil && En(this.onSil.curls, this.curlsSil),
          this.targets.clear());
        for (let [t, n] of Object.entries(e.places))
          n && this.targets.set(t, Cn(`L`, n));
        (!n || this.anim.def !== e) && this.anim.setGun(e);
      }
    }
    draw() {
      (this.anim.draw(), (this.hadLeft = !1));
    }
    update(e) {
      this.def && (this.anim.update(e), this.pose(this.def, this.anim.pose));
    }
    partMatrix(e) {
      return this.rig.part(e) * 12;
    }
    partIndex(e) {
      return this.rig.part(e);
    }
    pose(e, t) {
      let n = this.W,
        r = this.rig,
        i = this.right,
        a = this.left,
        o = this.G,
        s = this.T,
        c = this.T2,
        l = e.frame,
        u = e.right.o;
      (_(l.a[0], l.a[1], l.a[2], l.o[0], l.o[1], l.o[2], s),
        _(t.a[0], t.a[1], t.a[2], 0, 0, 0, c),
        (c[3] = u[0] - (c[0] * u[0] + c[1] * u[1] + c[2] * u[2])),
        (c[7] = u[1] - (c[4] * u[0] + c[5] * u[1] + c[6] * u[2])),
        (c[11] = u[2] - (c[8] * u[0] + c[9] * u[1] + c[10] * u[2])),
        A(s, 0, c, 0, o, 0),
        (o[3] += t.o[0]),
        (o[7] += t.o[1]),
        (o[11] += t.o[2]));
      let d = this.partMatrix(`Gun`);
      (n.set(o, d),
        Z(o, -t.slide, 0, 0, n, this.partMatrix(`Slide`)),
        Z(o, -t.pump, 0, 0, n, this.partMatrix(`Pump`)));
      let f = this.bones.R.hand * 12;
      A(o, 0, i.handInGun, 0, n, f);
      let p = this.cR;
      p.set(this.curlsR);
      let m = t.trigger;
      if (((p[0] += 10 * m), (p[1] += 14 * m), (p[2] += 6 * m), t.indexOff > 0))
        for (let e = 0; e < 3; e++) p[e] += (er[e] - p[e]) * t.indexOff;
      (t.thumb > 0 && ((p[17] += 18 * t.thumb), (p[18] += 10 * t.thumb)),
        this.poserR.pose(
          n,
          (e, t) => p[e * 4 + t],
          (e) => p[e * 4 + 3],
        ));
      let h = this.bones.L.hand * 12,
        g = e.left.part === `Pump` ? this.partMatrix(`Pump`) : d;
      A(n, g, a.handInGun, 0, this.H, 0);
      let v = t.leftT ? this.targets.get(t.leftT) : void 0;
      (t.leftT === `sil` && this.onSil && t.leftW > 0
        ? (this.canFrame(e, t, t.handRoll, t.handLift, this.C),
          A(o, 0, this.C, 0, this.C2, 0),
          A(this.C2, 0, this.onSil.handInGun, 0, s, 0),
          mr(this.H, s, t.leftW, this.H))
        : v &&
          t.leftW > 0 &&
          (t.leftT === `mag` && t.magHand && e.mag
            ? (Z(
                o,
                e.mag.out[0] * t.mag,
                e.mag.out[1] * t.mag,
                e.mag.out[2] * t.mag,
                this.T3,
                0,
              ),
              A(this.T3, 0, v, 0, s, 0))
            : A(o, 0, v, 0, s, 0),
          mr(this.H, s, t.leftW, this.H)),
        (this.H[3] += t.leftOff[0]),
        (this.H[7] += t.leftOff[1]),
        (this.H[11] += t.leftOff[2]),
        this.anim.leftFade > 0 && this.hadLeft
          ? mr(
              this.H,
              this.prevLeft,
              this.anim.leftFade *
                this.anim.leftFade *
                (3 - 2 * this.anim.leftFade),
              this.H,
            )
          : this.prevLeft.set(this.H),
        this.anim.leftFade <= 0 && this.prevLeft.set(this.H),
        (this.hadLeft = !0),
        n.set(this.H, h));
      let y = this.cL;
      if ((y.set(this.curlsL), t.leftCurl !== `support` && t.leftCurlW > 0)) {
        let e =
            t.leftCurl === `sil`
              ? this.onSil
                ? this.curlsSil
                : $n.mag
              : $n[t.leftCurl],
          n = Math.min(
            1,
            t.leftCurl === `sil` ? t.leftCurlW * t.leftW : t.leftCurlW,
          );
        for (let t = 0; t < 20; t++) y[t] += (e[t] - y[t]) * n;
      }
      if (t.leftOpen > 0) {
        let e = $n.open,
          n = Math.min(1, t.leftOpen);
        for (let t = 0; t < 20; t++) y[t] += (e[t] - y[t]) * n;
      }
      this.poserL.pose(
        n,
        (e, t) => y[e * 4 + t],
        (e) => y[e * 4 + 3],
      );
      let b = this.partMatrix(`Mag`);
      if (t.magHide) n.fill(0, b, b + 12);
      else if (e.mag) {
        let r = e.mag.out;
        if (t.magHand) {
          let e = this.targets.get(`mag`);
          e
            ? (N(e, 0, s, 0),
              A(n, h, s, 0, c, 0),
              Z(c, r[0] * t.mag, r[1] * t.mag, r[2] * t.mag, n, b))
            : n.set(o, b);
        } else
          (Z(o, r[0] * t.mag, r[1] * t.mag, r[2] * t.mag, n, b),
            (n[b + 3] += t.magDrop[0]),
            (n[b + 7] += t.magDrop[1]),
            (n[b + 11] += t.magDrop[2]));
      } else n.set(o, b);
      let x = this.partMatrix(`Aux`),
        S = this.targets.get(`port`);
      if (t.aux > 0 && S) {
        (N(S, 0, s, 0), A(n, h, s, 0, c, 0));
        let e = 1 - t.auxIn;
        Z(c, -1.3 * e, 0, -0.6 * e, n, x);
      } else if (e.id === `usp` || e.id === `p90`) {
        let r = e.id === `usp` ? this.partMatrix(`Slide`) : b;
        (n.set(n.subarray(r, r + 12), x),
          t.tail &&
            fr(
              n,
              x,
              e.id === `usp` ? lr : ur,
              1 + 0.18 * t.tail,
              1 - 0.12 * t.tail,
            ));
      } else n.fill(0, x, x + 12);
      let C = this.partMatrix(`Sil`);
      (e.silencer && t.sil > 0
        ? (this.canFrame(e, t, t.silSpin, 0, this.C), A(o, 0, this.C, 0, n, C))
        : n.fill(0, C, C + 12),
        this.arm(`R`),
        this.arm(`L`),
        this.clamp && _e(n, r.hands, `both`));
    }
    canFrame(e, t, n, r, i) {
      let a = e.silencer,
        o = a.axis[0],
        s = a.axis[1],
        c = this.C3,
        l = this.C4,
        u = this.pivot;
      if (((u[0] = 0), (u[1] = o), (u[2] = s), F(or, n * ar, u, c), r)) {
        let e = n * ar;
        ((c[7] += -Math.sin(e) * r), (c[11] += Math.cos(e) * r));
      }
      ((c[3] += t.silX),
        (u[0] = a.seat),
        (t.silPitch || t.silYaw) &&
          (F(sr, t.silPitch * ar, u, l),
          A(l, 0, c, 0, i, 0),
          F(cr, t.silYaw * ar, u, l),
          A(l, 0, i, 0, c, 0)),
        i.set(c),
        (i[3] += t.silOff[0]),
        (i[7] += t.silOff[1]),
        (i[11] += t.silOff[2]));
    }
    arm(e) {
      let t = this.W,
        n = this.bones[e],
        r = this.rig.hands,
        i = n.hand * 12;
      A(t, i, n.invHand, 0, this.T, 0);
      let a = [t[i + 3], t[i + 7], t[i + 11]],
        o = this.T,
        s = n.dir,
        c = [
          o[0] * s[0] + o[1] * s[1] + o[2] * s[2],
          o[4] * s[0] + o[5] * s[1] + o[6] * s[2],
          o[8] * s[0] + o[9] * s[1] + o[10] * s[2],
        ],
        l = this.def?.elbows?.[e] ?? rr[e],
        u = [a[0] - l[0], a[1] - l[1], a[2] - l[2]],
        d = Math.hypot(u[0], u[1], u[2]) || 1,
        f = Math.hypot(c[0], c[1], c[2]) || 1,
        p = nr.anchor;
      u = [
        (u[0] / d) * p + (c[0] / f) * (1 - p),
        (u[1] / d) * p + (c[1] / f) * (1 - p),
        (u[2] / d) * p + (c[2] / f) * (1 - p),
      ];
      let m = Math.hypot(u[0], u[1], u[2]) || 1;
      u = [u[0] / m, u[1] / m, u[2] / m];
      let h = [
          c[1] * u[2] - c[2] * u[1],
          c[2] * u[0] - c[0] * u[2],
          c[0] * u[1] - c[1] * u[0],
        ],
        g = Math.hypot(h[0], h[1], h[2]),
        _ = c[0] * u[0] + c[1] * u[1] + c[2] * u[2];
      (g > 1e-6
        ? F([h[0] / g, h[1] / g, h[2] / g], Math.atan2(g, _), a, this.T2)
        : this.T2.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]),
        A(this.T2, 0, o, 0, this.T3, 0));
      for (let e of n.forearm) A(this.T3, 0, r.bind, e * 12, t, e * 12);
      for (let e of n.helper) A(o, 0, r.bind, e * 12, t, e * 12);
    }
    get bonesW() {
      return this.W;
    }
    pointOn(e, t) {
      let n = this.partMatrix(e),
        r = this.W;
      return [
        r[n] * t[0] + r[n + 1] * t[1] + r[n + 2] * t[2] + r[n + 3],
        r[n + 4] * t[0] + r[n + 5] * t[1] + r[n + 6] * t[2] + r[n + 7],
        r[n + 8] * t[0] + r[n + 9] * t[1] + r[n + 10] * t[2] + r[n + 11],
      ];
    }
    dirOn(e, t) {
      let n = this.partMatrix(e),
        r = this.W;
      return [
        r[n] * t[0] + r[n + 1] * t[1] + r[n + 2] * t[2],
        r[n + 4] * t[0] + r[n + 5] * t[1] + r[n + 6] * t[2],
        r[n + 8] * t[0] + r[n + 9] * t[1] + r[n + 10] * t[2],
      ];
    }
  },
  ar = Math.PI / 180,
  or = [1, 0, 0],
  sr = [0, -1, 0],
  cr = [0, 0, 1],
  lr = [-1, 0, 1],
  ur = [-5.9, 0, 1.75];
function dr(e) {
  let t = U().hands,
    n = (e) => t.bone(e),
    r = n(e === `R` ? `Right_Hand` : `Left_Hand`),
    i = (
      e === `R`
        ? [`Root36`, `Right_Arm`, `eff18`, `Root23`]
        : [`Root34`, `Left_Arm`, `eff16`, `Root16`]
    ).map(n),
    a = (
      e === `R` ? [`Root98`, `R_wrist_helper`] : [`Root99`, `L_wrist_helper`]
    ).map(n),
    o = new Float32Array(12);
  N(t.bind, r * 12, o, 0);
  let s = t.at(e === `R` ? `Right_Hand` : `Left_Hand`),
    c = t.at(e === `R` ? `Right_Arm` : `Left_Arm`),
    l = [s[0] - c[0], s[1] - c[1], s[2] - c[2]],
    u = Math.hypot(l[0], l[1], l[2]) || 1;
  return {
    hand: r,
    forearm: i,
    helper: a,
    invHand: o,
    dir: [l[0] / u, l[1] / u, l[2] / u],
  };
}
function Z(e, t, n, r, i, a) {
  for (let o = 0; o < 3; o++) {
    let s = e[o * 4],
      c = e[o * 4 + 1],
      l = e[o * 4 + 2];
    ((i[a + o * 4] = s),
      (i[a + o * 4 + 1] = c),
      (i[a + o * 4 + 2] = l),
      (i[a + o * 4 + 3] = e[o * 4 + 3] + s * t + c * n + l * r));
  }
}
function fr(e, t, n, r, i) {
  let a = [r, i, i],
    o = [0, 0, 0];
  for (let r = 0; r < 3; r++) {
    let i = 0;
    for (let o = 0; o < 3; o++) i += e[t + r * 4 + o] * n[o] * (1 - a[o]);
    o[r] = i;
  }
  for (let n = 0; n < 3; n++) {
    for (let r = 0; r < 3; r++) e[t + n * 4 + r] *= a[r];
    e[t + n * 4 + 3] += o[n];
  }
}
var Q = new Float64Array(4),
  $ = new Float64Array(4);
function pr(e, t) {
  let n = e[0],
    r = e[1],
    i = e[2],
    a = e[4],
    o = e[5],
    s = e[6],
    c = e[8],
    l = e[9],
    u = e[10],
    d = n + o + u;
  if (d > 0) {
    let e = Math.sqrt(d + 1) * 2;
    ((t[3] = 0.25 * e),
      (t[0] = (l - s) / e),
      (t[1] = (i - c) / e),
      (t[2] = (a - r) / e));
  } else if (n > o && n > u) {
    let e = Math.sqrt(1 + n - o - u) * 2;
    ((t[3] = (l - s) / e),
      (t[0] = 0.25 * e),
      (t[1] = (r + a) / e),
      (t[2] = (i + c) / e));
  } else if (o > u) {
    let e = Math.sqrt(1 + o - n - u) * 2;
    ((t[3] = (i - c) / e),
      (t[0] = (r + a) / e),
      (t[1] = 0.25 * e),
      (t[2] = (s + l) / e));
  } else {
    let e = Math.sqrt(1 + u - n - o) * 2;
    ((t[3] = (a - r) / e),
      (t[0] = (i + c) / e),
      (t[1] = (s + l) / e),
      (t[2] = 0.25 * e));
  }
}
function mr(e, t, n, r) {
  if (n <= 0) {
    if (r !== e) for (let t = 0; t < 12; t++) r[t] = e[t];
    return;
  }
  if (n >= 1) {
    for (let e = 0; e < 12; e++) r[e] = t[e];
    return;
  }
  (pr(e, Q), pr(t, $));
  let i = Q[0] * $[0] + Q[1] * $[1] + Q[2] * $[2] + Q[3] * $[3] < 0 ? -1 : 1,
    a = Q[0] + ($[0] * i - Q[0]) * n,
    o = Q[1] + ($[1] * i - Q[1]) * n,
    s = Q[2] + ($[2] * i - Q[2]) * n,
    c = Q[3] + ($[3] * i - Q[3]) * n,
    l = Math.hypot(a, o, s, c) || 1;
  ((a /= l), (o /= l), (s /= l), (c /= l));
  let u = e[3] + (t[3] - e[3]) * n,
    d = e[7] + (t[7] - e[7]) * n,
    f = e[11] + (t[11] - e[11]) * n;
  ((r[0] = 1 - 2 * (o * o + s * s)),
    (r[1] = 2 * (a * o - s * c)),
    (r[2] = 2 * (a * s + o * c)),
    (r[3] = u),
    (r[4] = 2 * (a * o + s * c)),
    (r[5] = 1 - 2 * (a * a + s * s)),
    (r[6] = 2 * (o * s - a * c)),
    (r[7] = d),
    (r[8] = 2 * (a * s - o * c)),
    (r[9] = 2 * (o * s + a * c)),
    (r[10] = 1 - 2 * (a * a + o * o)),
    (r[11] = f));
}
var hr = 0.05,
  gr = 0.75,
  _r = 12;
function vr() {
  let e = document.createElement(`canvas`);
  ((e.width = 128), (e.height = 64));
  let t = e.getContext(`2d`);
  t.translate(32, 32);
  let n = t.createRadialGradient(0, 0, 0, 0, 0, 30);
  (n.addColorStop(0, `rgba(255,255,240,1)`),
    n.addColorStop(0.25, `rgba(255,220,140,0.9)`),
    n.addColorStop(0.6, `rgba(255,150,60,0.35)`),
    n.addColorStop(1, `rgba(255,120,40,0)`),
    (t.fillStyle = n),
    t.beginPath());
  for (let e = 0; e <= 10; e++) {
    let n = (e / 10) * Math.PI * 2 - Math.PI / 2,
      r = e % 2 ? 11 : 30;
    t.lineTo(Math.cos(n) * r, Math.sin(n) * r);
  }
  (t.fill(), t.setTransform(1, 0, 0, 1, 64, 0));
  let r = t.createLinearGradient(0, 0, 64, 0);
  (r.addColorStop(0, `rgba(255,240,200,1)`),
    r.addColorStop(0.35, `rgba(255,190,90,0.8)`),
    r.addColorStop(1, `rgba(255,120,40,0)`),
    (t.fillStyle = r),
    t.beginPath(),
    t.moveTo(0, 32),
    t.quadraticCurveTo(14, 12, 64, 30),
    t.quadraticCurveTo(14, 52, 0, 32),
    t.fill());
  let i = new ge(e);
  return ((i.colorSpace = T), i);
}
function yr() {
  let e = [],
    t = [],
    n = (n, r, i, a, o) => {
      (e.push(...n, ...r, ...i, ...n, ...i, ...a),
        t.push(
          o[0],
          o[1],
          o[2],
          o[1],
          o[2],
          o[3],
          o[0],
          o[1],
          o[2],
          o[3],
          o[0],
          o[3],
        ));
    },
    r = 0.95;
  n(
    [0.05, -0.95, -0.95],
    [0.05, r, -0.95],
    [0.05, r, r],
    [0.05, -0.95, r],
    [0, 0, 0.5, 1],
  );
  let i = 2.4,
    a = 0.6;
  (n([0, 0, -0.6], [i, 0, -0.6], [i, 0, a], [0, 0, a], [0.5, 0, 1, 1]),
    n([0, -0.6, 0], [i, -0.6, 0], [i, a, 0], [0, a, 0], [0.5, 0, 1, 1]));
  let o = new ye();
  return (
    o.setAttribute(`position`, new x(e, 3)),
    o.setAttribute(`uv`, new x(t, 2)),
    o
  );
}
function br(e, t, n) {
  let r = [],
    i = [],
    a = new L(14198336),
    o = new L(11041320),
    s = new L(n ?? 14198336),
    c = new M(0.3, 0.5, 0.8).normalize(),
    l = (e, t) => {
      let n = 0.55 + 0.45 * Math.max(0, t.dot(c)) + 0.15 * Math.max(0, t.y);
      return [e.r * n, e.g * n, e.b * n];
    },
    u = (e, t) =>
      Array.from({ length: 7 }, (n, r) => {
        let i = (r / 7) * Math.PI * 2;
        return new M(e, Math.cos(i) * t, Math.sin(i) * t);
      }),
    d = n ? 0.28 * e : e,
    f = n
      ? [
          [0, t * 1.08, o],
          [d, t * 1.08, a],
          [d, t, s],
          [e, t * 0.96, s],
        ]
      : [
          [0, t * 1.1, o],
          [0.12 * e, t, a],
          [e * 0.82, t, a],
          [e, t * 0.8, a],
        ];
  for (let e = 0; e + 1 < f.length; e++) {
    let t = u(f[e][0], f[e][1]),
      n = u(f[e + 1][0], f[e + 1][1]);
    for (let a = 0; a < 7; a++) {
      let o = (a + 1) % 7,
        s = new M(
          0,
          Math.cos(((a + 0.5) / 7) * Math.PI * 2),
          Math.sin(((a + 0.5) / 7) * Math.PI * 2),
        ),
        c = l(f[e + 1][2], s);
      for (let e of [t[a], n[a], n[o], t[a], n[o], t[o]])
        (r.push(e.x, e.y, e.z), i.push(...c));
    }
  }
  for (let [t, n, a, s] of [
    [0, f[0][1], o, -1],
    [e, f[f.length - 1][1], f[f.length - 1][2], 1],
  ]) {
    let e = u(t, n),
      o = l(a, new M(s, 0, 0));
    for (let n = 0; n < 7; n++) {
      let a = (n + 1) % 7;
      for (let c of [new M(t, 0, 0), e[s > 0 ? n : a], e[s > 0 ? a : n]])
        (r.push(c.x, c.y, c.z), i.push(...o));
    }
  }
  let p = new ye();
  return (
    p.setAttribute(`position`, new x(r, 3)),
    p.setAttribute(`color`, new x(i, 3)),
    p
  );
}
var xr = null,
  Sr = () =>
    (xr ??= {
      tex: vr(),
      flash: yr(),
      brass: br(0.62, 0.17, null),
      shotgun: br(1.05, 0.3, 12860460),
    }),
  Cr = () =>
    typeof matchMedia == `function` &&
    matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  wr = class {
    flash;
    flashMat;
    flashAge = 1 / 0;
    flashRoll = 0;
    flashSize = 1;
    camSpace = new ue();
    pools;
    def = null;
    pendingFlash = !1;
    pendingEject = 0;
    pendingQuiet = !1;
    quiet = !1;
    gravity = new M(0, -800, 0);
    m = new E();
    v = new M();
    d = new M();
    q = new me();
    dq = new me();
    s = new M();
    e = new be();
    soft = Cr();
    constructor(e, t) {
      let n = Sr();
      ((this.flashMat = new de({
        map: n.tex,
        color: 16767392,
        transparent: !0,
        opacity: 0.9,
        blending: 2,
        depthWrite: !1,
        depthTest: !1,
        side: 2,
      })),
        (this.flash = new se(n.flash, this.flashMat)),
        (this.flash.matrixAutoUpdate = !1),
        (this.flash.frustumCulled = !1),
        (this.flash.visible = !1),
        (this.flash.renderOrder = 2),
        t.add(this.flash),
        (this.camSpace.matrixAutoUpdate = !1),
        e.add(this.camSpace));
      let r = new de({ vertexColors: !0 });
      this.pools = [n.brass, n.shotgun].map((e) => {
        let t = new C(e, r, _r);
        return (
          t.instanceMatrix.setUsage(f),
          (t.frustumCulled = !1),
          (t.count = 0),
          this.camSpace.add(t),
          {
            mesh: t,
            shells: Array.from({ length: _r }, () => ({
              alive: !1,
              age: 0,
              p: new M(),
              v: new M(),
              q: new me(),
              w: new M(),
              s: 1,
            })),
          }
        );
      });
    }
    setGun(e) {
      ((this.def = e), (this.flashAge = 1 / 0), (this.flash.visible = !1));
    }
    shot(e, t = !1) {
      ((this.pendingFlash = !0),
        (this.pendingQuiet = t),
        (this.pendingEject += e));
    }
    eject() {
      this.pendingEject++;
    }
    update(e) {
      this.flashAge += e;
      for (let t of this.pools)
        for (let n of t.shells)
          if (n.alive) {
            if (((n.age += e), n.age >= gr)) {
              n.alive = !1;
              continue;
            }
            (n.v.addScaledVector(this.gravity, e),
              n.v.multiplyScalar(Math.exp(-0.6 * e)),
              n.p.addScaledVector(n.v, e),
              this.dq.setFromAxisAngle(
                this.d.copy(n.w).normalize(),
                n.w.length() * e,
              ),
              n.q.multiply(this.dq));
          }
    }
    beforeRender(e, t) {
      let n = this.def;
      if (n) {
        if (
          (this.camSpace.matrix.copy(t.matrixWorld),
          (this.camSpace.matrixWorldNeedsUpdate = !0),
          this.q.copy(t.quaternion).invert(),
          this.gravity.set(0, -800, 0).applyQuaternion(this.q),
          this.pendingFlash)
        ) {
          ((this.pendingFlash = !1),
            (this.flashAge = 0),
            (this.flashRoll = Math.random() * Math.PI * 2));
          let e = n.cls === `shotgun` ? 1.35 : n.cls === `smg` ? 0.85 : 1;
          ((this.quiet = this.pendingQuiet),
            (this.flashSize =
              e *
              (0.85 + Math.random() * 0.3) *
              (this.soft ? 0.7 : 1) *
              (this.quiet ? 0.38 : 1)));
        }
        for (; this.pendingEject > 0; )
          (this.pendingEject--, this.spawnShell(e, n));
        if (this.flashAge < hr) {
          let t = !!n.silencer && e.anim.silenced && e.anim.pose.sil > 0,
            r = t ? `Sil` : n.cls === `pistol` ? `Slide` : `Gun`,
            i = e.bonesW,
            a = e.partIndex(r) * 12,
            o = t ? n.silencer.tip : n.muzzle;
          this.m.set(
            i[a],
            i[a + 1],
            i[a + 2],
            i[a] * o[0] + i[a + 1] * o[1] + i[a + 2] * o[2] + i[a + 3],
            i[a + 4],
            i[a + 5],
            i[a + 6],
            i[a + 4] * o[0] + i[a + 5] * o[1] + i[a + 6] * o[2] + i[a + 7],
            i[a + 8],
            i[a + 9],
            i[a + 10],
            i[a + 8] * o[0] + i[a + 9] * o[1] + i[a + 10] * o[2] + i[a + 11],
            0,
            0,
            0,
            1,
          );
          let s = 1 - this.flashAge / hr,
            c = this.flashSize * (0.8 + 0.4 * s);
          (this.flash.matrix
            .copy(this.m)
            .multiply(this.m.makeRotationX(this.flashRoll))
            .multiply(this.m.makeScale(c, c, c)),
            (this.flash.matrixWorldNeedsUpdate = !0),
            (this.flashMat.opacity = (this.quiet ? 0.45 : 0.85) * s),
            (this.flash.visible = !0));
        } else this.flash.visible = !1;
        for (let e of this.pools) {
          let t = 0;
          for (let n of e.shells) {
            if (!n.alive) continue;
            let r = n.age > 0.6 ? (gr - n.age) / 0.15 : 1;
            (this.s.setScalar(n.s * r),
              this.m.compose(n.p, n.q, this.s),
              e.mesh.setMatrixAt(t++, this.m));
          }
          ((e.mesh.count = t), t && (e.mesh.instanceMatrix.needsUpdate = !0));
        }
      }
    }
    spawnShell(e, t) {
      let n = this.pools[+(t.shell === `shotgun`)],
        r = n.shells.find((e) => !e.alive);
      r ||= n.shells.reduce((e, t) => (e.age > t.age ? e : t));
      let i = t.cls === `pistol` ? `Slide` : `Gun`;
      (e.pointOn(i, t.eject.p, this.v).applyMatrix4(e.camRel),
        e.dirOn(i, t.eject.dir, this.d).transformDirection(e.camRel),
        (r.alive = !0),
        (r.age = 0),
        r.p.copy(this.v));
      let a = t.shell === `shotgun` ? 70 : 95;
      (r.v.copy(this.d).multiplyScalar(a * (0.85 + Math.random() * 0.3)),
        (r.v.y += 25 + Math.random() * 20),
        e.dirOn(i, [0, -1, 0.2], this.d).transformDirection(e.camRel),
        this.q.setFromUnitVectors(this.v.set(1, 0, 0), this.d),
        this.e.set(
          Math.random() * 0.4,
          Math.random() * 0.4,
          Math.random() * 0.4,
        ),
        r.q.copy(this.q).multiply(this.dq.setFromEuler(this.e)),
        r.w.set(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          18 + Math.random() * 14,
        ),
        (r.s = t.shell === `smg` ? 0.85 : 1));
    }
    dispose() {
      this.flashMat.dispose();
      for (let e of this.pools) (e.mesh.material.dispose(), e.mesh.dispose());
    }
  },
  Tr = class extends a {
    constructor(e) {
      super(
        Array.from({ length: e }, () => new ie()),
        Array.from({ length: e }, () => new E()),
      );
    }
    update() {
      this.boneTexture && (this.boneTexture.needsUpdate = !0);
    }
  },
  Er = class {
    scene = new y();
    camera = new ve(41, 1, 0.75, 400);
    uniforms = n();
    mesh;
    poser = new ir();
    fxImpl = null;
    onSound = null;
    lastUpdateMs = 0;
    timeScale = 1;
    debugHide = null;
    root = new ue();
    skeleton;
    rig = U();
    S;
    loadout;
    glove = `knit`;
    look = p;
    visible = !0;
    unsub = [];
    conv = new E();
    m4 = new E();
    camRel = new E();
    V = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]);
    hidden = null;
    lastPump = 0;
    constructor(e = {}) {
      let t = this.rig;
      ((this.S = new Float32Array(t.count * 12)),
        (this.skeleton = new Tr(t.count)),
        (this.loadout = e.loadout ?? Le()),
        (this.glove = Ve(this.loadout.glove).style),
        (this.mesh = new h(new ye(), ae(this.uniforms))),
        (this.mesh.bindMode = l),
        this.mesh.bind(this.skeleton, new E()),
        (this.mesh.frustumCulled = !1),
        (this.mesh.name = `gun-viewmodel`),
        (this.mesh.visible = !1),
        this.root.add(this.mesh),
        (this.root.matrixAutoUpdate = !1),
        this.scene.add(this.root),
        this.conv.set(0, -1, 0, 0, 0, 0, 1, 0, -1, 0, 0, 0, 0, 0, 0, 1),
        (this.poser.anim.onCue = (e, t) => this.onSound?.(e, t)),
        this.applyColours(ze()),
        this.refreshLook(),
        e.loadout ||
          (this.unsub.push(Re((e) => this.setLoadout(e))),
          this.unsub.push(Be((e) => this.applyColours(e)))));
    }
    get anim() {
      return this.poser.anim;
    }
    get def() {
      return this.poser.def;
    }
    applyColours(e) {
      let t = He(e),
        n = Ue(t);
      (this.uniforms.uPalette.value.forEach((e, t) => e.set(n[t])),
        this.uniforms.uAccent.value.set(t.accent));
    }
    setLoadout(e) {
      this.loadout = e;
      let t = Ve(e.glove).style;
      (t !== this.glove &&
        ((this.glove = t), this.def && this.setGun(this.def, !0)),
        this.refreshLook());
    }
    refreshLook() {
      let e = g(this.uniforms, { ...this.loadout, finish: `fin-garden` });
      c(e, this.look) ||
        ((this.look = e),
        this.mesh.material.dispose(),
        (this.mesh.material = ae(this.uniforms, e)));
    }
    setGun(e, t = !1) {
      (e !== this.def || t) &&
        ((this.mesh.visible = !!e),
        this.poser.setGun(e, this.glove, t),
        e &&
          ((this.mesh.geometry = ln(e, this.glove)), this.fxImpl?.setGun(e)));
    }
    prewarm(e) {
      wn(e, this.glove);
    }
    draw() {
      this.def && this.poser.draw();
    }
    fire(e = !1) {
      let t = this.def;
      if (!t) return;
      let n = e && !!t.silencer;
      (this.anim.fire(),
        typeof document < `u` && this.fx.shot(+!t.timing.pump, n),
        this.onSound?.(n ? `silenced` : `fire`, 1));
    }
    silencer(e, t, n = 0) {
      this.anim.silencer(e, t, n);
    }
    setSilenced(e) {
      this.anim.silenced = e;
    }
    dryFire() {
      (this.anim.dryFire(), this.onSound?.(`dry`, 1));
    }
    reload(e, t = !1) {
      this.anim.reload(e, t);
    }
    inspect() {
      this.anim.inspect();
    }
    get fx() {
      return (
        this.fxImpl ||
          ((this.fxImpl = new wr(this.scene, this.root)),
          this.def && this.fxImpl.setGun(this.def)),
        this.fxImpl
      );
    }
    update(e, t = null) {
      let n = performance.now();
      ((e = Math.min(0.1, Math.max(0, e)) * this.timeScale),
        t && tr(t, this.V));
      let r = this.def;
      if (!r) return;
      (this.poser.update(e), this.skin(), this.fxImpl?.update(e));
      let i = this.anim.pose.pump;
      (r.timing.pump &&
        this.lastPump < 1.8 &&
        i >= 1.8 &&
        this.anim.clip === `pump` &&
        this.fxImpl &&
        this.fxImpl.eject(),
        (this.lastPump = i),
        (this.lastUpdateMs = performance.now() - n));
    }
    partIndex(e) {
      return this.poser.partIndex(e);
    }
    get bonesW() {
      return this.poser.bonesW;
    }
    pointOn(e, t, n) {
      let [r, i, a] = this.poser.pointOn(e, t);
      return n.set(r, i, a);
    }
    dirOn(e, t, n) {
      let [r, i, a] = this.poser.dirOn(e, t);
      return n.set(r, i, a);
    }
    skin() {
      let e = this.poser.bonesW,
        t = this.S,
        n = this.rig;
      if (this.debugHide && !this.hidden) {
        let e = n.hands;
        this.hidden = new Set(
          e.subtree(e.bone(this.debugHide === `R` ? `Root36` : `Root34`)),
        );
      } else this.debugHide || (this.hidden = null);
      let r = n.hands.names.length,
        i = n.hands.inv,
        a = this.skeleton.boneMatrices;
      for (let o = 0; o < n.count; o++) {
        let n = o * 12,
          s = o * 16;
        (o < r ? A(e, n, i, n, t, n) : t.set(e.subarray(n, n + 12), n),
          this.hidden?.has(o) && t.fill(0, n, n + 12),
          (a[s] = t[n]),
          (a[s + 1] = t[n + 4]),
          (a[s + 2] = t[n + 8]),
          (a[s + 3] = 0),
          (a[s + 4] = t[n + 1]),
          (a[s + 5] = t[n + 5]),
          (a[s + 6] = t[n + 9]),
          (a[s + 7] = 0),
          (a[s + 8] = t[n + 2]),
          (a[s + 9] = t[n + 6]),
          (a[s + 10] = t[n + 10]),
          (a[s + 11] = 0),
          (a[s + 12] = t[n + 3]),
          (a[s + 13] = t[n + 7]),
          (a[s + 14] = t[n + 11]),
          (a[s + 15] = 1));
      }
      this.skeleton.update();
    }
    setVisible(e) {
      this.visible = e;
    }
    get shown() {
      return this.visible && !!this.def;
    }
    render(e, t) {
      if (!this.visible || !this.def) return;
      let n = Ie.get().viewmodel,
        r = this.camera;
      (t.updateMatrixWorld(),
        r.position.copy(t.position),
        r.quaternion.copy(t.quaternion),
        (r.aspect = t.aspect),
        (r.fov = Fe(n.fov)),
        r.updateProjectionMatrix(),
        r.updateMatrixWorld());
      let i = this.V,
        a = n.hand === `left`;
      (this.m4.set(
        i[0],
        i[1],
        i[2],
        i[3] + n.y,
        i[4],
        i[5],
        i[6],
        i[7] + (a ? n.x : -n.x),
        i[8],
        i[9],
        i[10],
        i[11] + n.z,
        0,
        0,
        0,
        1,
      ),
        this.camRel.multiplyMatrices(this.conv, this.m4),
        a && this.camRel.multiply(this.m4.makeScale(1, -1, 1)),
        this.root.matrix.multiplyMatrices(r.matrixWorld, this.camRel),
        (this.root.matrixWorldNeedsUpdate = !0),
        this.fx.beforeRender(this, r));
      let o = e.autoClear;
      ((e.autoClear = !1),
        e.clearDepth(),
        e.render(this.scene, r),
        (e.autoClear = o));
    }
    dispose() {
      for (let e of this.unsub) e();
      (this.mesh.material.dispose(),
        this.skeleton.dispose(),
        this.fxImpl?.dispose());
    }
  },
  Dr = 0.01;
function Or(e) {
  return e >= 2 ? ce(Te[e]) : void 0;
}
var kr = class {
  h;
  vm = new Er();
  impacts = new Xt();
  floor = new Ye();
  active = null;
  weapon = 0;
  clip = -1;
  clipSize = 0;
  reloadTicks = 0;
  ammoOut = { clip: 0, size: 0, reloading: !1 };
  silenced = null;
  shells = !1;
  startLeft = 0;
  firstShell = 0;
  buttons = null;
  transforms;
  tickS;
  constructor(e) {
    ((this.h = e),
      (this.tickS = e.tick ?? Dr),
      e.scene.add(this.impacts.root),
      e.scene.add(this.floor.root),
      (this.vm.onSound = (e, t) => tn(this.active, e, { gain: t })));
  }
  reset(e) {
    if (
      (this.impacts.clear(),
      (this.weapon = -1),
      (this.shells = !1),
      (this.startLeft = 0),
      this.floor.update(Ce(this.h.core)),
      (this.silenced = null),
      e)
    ) {
      if (
        (this.tick({ ...e, floorChanged: !1, flags: e.flags & -257 }, null),
        this.active?.silencer && e.silencerTicks > 0)
      ) {
        let t = this.silencerTotal();
        this.vm.silencer(
          e.silencer,
          t,
          Math.max(0.001, t - (e.silencerTicks + 1) * this.tickS),
        );
      }
    } else this.equip(0);
  }
  silencerTotal() {
    return Math.round(Oe / this.tickS) * this.tickS;
  }
  equip(e, t = !1, n = !0) {
    this.weapon = e;
    let r = Or(e) ?? null;
    if ((this.vm.setSilenced(t), r === this.active && r)) {
      n && this.vm.draw();
      return;
    }
    ((this.active = r),
      this.vm.setGun(r),
      this.vm.setSilenced(t),
      r && n && this.vm.draw(),
      (this.shells = !1),
      this.h.onGun?.(r ? r.id : null));
  }
  tick(e, t) {
    if (!e) return;
    e.floorChanged && this.floor.update(Ce(this.h.core));
    let n = e.flags;
    e.active !== this.weapon && this.equip(e.active, e.silencer, !(n & Se));
    let r = this.active;
    (e.silencer !== this.silenced &&
      ((this.silenced = e.silencer), this.h.onSilencer?.(e.silencer)),
      n & 2 && tn(r ?? Or(e.primary || e.secondary) ?? null, `pickup`),
      r &&
        (n & 128 && (this.vm.anim.modeToggle(), tn(r, `mode`)),
        n & 16 && this.vm.dryFire(),
        n & 256 &&
          this.vm.silencer(
            e.silencer,
            e.silencerTicks > 0
              ? (e.silencerTicks + 1) * this.tickS
              : this.silencerTotal(),
          ),
        n & 4
          ? this.reloadStarted(r, e)
          : this.shells &&
            e.clip > this.clip &&
            e.reloadTicks > 0 &&
            this.vm.anim.shellInsert(e.reloadTicks * this.tickS),
        n & 8 &&
          this.shells &&
          ((this.shells = !1), (this.startLeft = 0), this.vm.anim.shellEnd()),
        t && t.weapon === e.active && t.weapon >= 2 && this.shot(r, t),
        this.shells && e.reloadTicks === 0 && !(n & 8) && (this.shells = !1),
        (this.vm.anim.empty = e.clip === 0 && e.clipSize > 0)),
      (this.clip = e.clip),
      (this.clipSize = e.clipSize),
      (this.reloadTicks = e.reloadTicks));
  }
  reloadStarted(e, t) {
    let n = Math.max(0.2, t.reloadTicks * this.tickS);
    if (e.timing.shells) {
      this.shells = !0;
      let t = Math.min(e.timing.shells.start, n * 0.45);
      (this.vm.anim.shellStart(t),
        (this.startLeft = t),
        (this.firstShell = n - t));
    } else this.vm.reload(n, t.clip === 0);
  }
  shot(e, t) {
    let n = t.mode === 2 && !!e.silencer;
    this.vm.fire(n);
    let r = Ar([
        t.end[0] - t.start[0],
        t.end[1] - t.start[1],
        t.end[2] - t.start[2],
      ]),
      i = Ar([r[1], -r[0], 0]),
      a = [
        i[1] * r[2] - i[2] * r[1],
        i[2] * r[0] - i[0] * r[2],
        i[0] * r[1] - i[1] * r[0],
      ],
      o = n ? 21 : 16,
      s = [0, 1, 2].map((e) => t.start[e] + r[e] * o + i[e] * 4.5 - a[e] * 4);
    if (!t.hit) {
      this.impacts.hit(t.end, [0, 0, 0], `concrete`, { from: s });
      return;
    }
    let c = this.transforms ?? this.h.core.brushOrigins(),
      l = jt(this.h.core, t, c);
    (Mt(l, `bullet`, t.end),
      this.impacts.hit(t.end, t.normal, l, {
        model: kt(t.entity),
        transforms: c,
        from: s,
        button: this.isButton(t.entity),
        heavy: e.cls === `shotgun`,
      }));
  }
  isButton(e) {
    if (e < 0) return !1;
    if (!this.buttons) {
      this.buttons = new Set();
      try {
        this.h.core.entities().forEach((e, t) => {
          /^func_(rot_)?button$/.test(e.classname ?? ``) && this.buttons.add(t);
        });
      } catch {}
    }
    return this.buttons.has(e);
  }
  frame(e, t, n) {
    ((this.transforms = n),
      this.startLeft > 0 &&
        (this.startLeft -= e) <= 0 &&
        this.shells &&
        this.vm.anim.shellInsert(Math.max(0.1, this.firstShell)),
      this.active && this.vm.update(e, t),
      this.impacts.update(e, n));
  }
  setVisible(e) {
    this.vm.setVisible(e);
  }
  render(e, t) {
    this.active &&
      (this.impacts.setViewportHeight(e.domElement.height),
      this.vm.render(e, t));
  }
  inspect() {
    this.active && this.vm.inspect();
  }
  ammo() {
    if (!this.active || this.clipSize <= 0) return null;
    let e = this.ammoOut;
    return (
      (e.clip = Math.max(0, this.clip)),
      (e.size = this.clipSize),
      (e.reloading = this.reloadTicks > 0),
      e
    );
  }
  static remoteShot(e, t, n = !1) {
    let r = Or(e) ?? null;
    tn(r, n && r?.silencer ? `silenced` : `fire`, { at: t });
  }
};
function Ar(e) {
  let t = Math.hypot(e[0], e[1], e[2]) || 1;
  return [e[0] / t, e[1] / t, e[2] / t];
}
export {
  kt as a,
  rt as c,
  ht as d,
  $e as f,
  Ye as h,
  jt as i,
  vt as l,
  tt as m,
  Or as n,
  Mt as o,
  nt as p,
  tn as r,
  Ot as s,
  kr as t,
  _t as u,
};
