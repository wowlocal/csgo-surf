import { r as e } from "./core-GuI4LXND.js";
var t = [`start`, `end`, `stage`, `checkpoint`],
  n = (e) => e.track ?? 0;
function r(e) {
  return e === 0 ? `Main` : `Bonus ${e}`;
}
function i(e) {
  return e === 0 ? `` : `b${e}`;
}
function a(e, t, n) {
  let r = t ? 45 : 62;
  return (
    e[0] - 16 <= n.maxs[0] &&
    e[0] + 16 >= n.mins[0] &&
    e[1] - 16 <= n.maxs[1] &&
    e[1] + 16 >= n.mins[1] &&
    e[2] <= n.maxs[2] &&
    e[2] + r >= n.mins[2]
  );
}
function o(e, t, r, i, o) {
  let s = null;
  for (let c of r)
    c.kind !== i ||
      (o !== void 0 && n(c) !== o) ||
      !a(e, t, c) ||
      ((!s || n(c) < n(s)) && (s = c));
  return s;
}
function s(e) {
  let t = new Set(e.filter((e) => e.kind === `start`).map(n)),
    r = new Set(e.filter((e) => e.kind === `end`).map(n));
  return [...t].filter((e) => r.has(e)).sort((e, t) => e - t);
}
function c(e, t) {
  return new Set(
    e
      .filter(
        (e) => (e.kind === `stage` || e.kind === `checkpoint`) && n(e) === t,
      )
      .map((e) => e.index ?? 0),
  ).size;
}
function l(e, t, n, r = 0, i) {
  let a = {
    kind: e,
    mins: [0, 1, 2].map((e) => Math.fround(Math.min(t[e], n[e]))),
    maxs: [0, 1, 2].map((e) => Math.fround(Math.max(t[e], n[e]))),
  };
  return (
    r && (a.track = r),
    (e === `stage` || e === `checkpoint`) && i !== void 0 && (a.index = i),
    a
  );
}
function u(e, n, r) {
  if (!e || typeof e != `object`) return null;
  let i = e.zones;
  if (!Array.isArray(i)) return null;
  let a = [];
  for (let e of i) {
    if (
      !e ||
      !t.includes(e.kind) ||
      !Array.isArray(e.mins) ||
      !Array.isArray(e.maxs) ||
      e.mins.length !== 3 ||
      e.maxs.length !== 3
    )
      continue;
    let n =
        Number.isInteger(e.track) && e.track > 0 && e.track < 256 ? e.track : 0,
      r =
        Number.isInteger(e.index) && e.index >= 0 && e.index < 256
          ? e.index
          : e.kind === `stage` || e.kind === `checkpoint`
            ? 0
            : void 0;
    a.push(l(e.kind, e.mins.map(Number), e.maxs.map(Number), n, r));
  }
  if (!s(a).length) return null;
  let o = e.provenance,
    c = { map: n, zones: a, source: r };
  return (
    o &&
      typeof o == `object` &&
      typeof o.source == `string` &&
      (c.provenance = o),
    c
  );
}
function d(e) {
  let t = { kind: e.kind };
  return (
    n(e) && (t.track = n(e)),
    e.index !== void 0 && (t.index = e.index),
    (t.mins = e.mins),
    (t.maxs = e.maxs),
    t
  );
}
function f(e, t = !1) {
  let n = { map: e.map, zones: e.zones.map(d) };
  return (
    t && e.provenance && (n.provenance = e.provenance),
    JSON.stringify(n, null, 2) +
      `
`
  );
}
function p(e) {
  let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
  if (e.byteLength < 1036 || t.getUint32(0, !0) !== 1347633750) return null;
  let n = t.getInt32(232, !0),
    r = t.getInt32(236, !0);
  if (t.getInt32(244, !0) !== 0 || n <= 0 || r <= 0 || n + r > e.byteLength)
    return null;
  let i = [];
  for (let e = n; e + 48 <= n + r; e += 48) {
    let n = (n) => t.getFloat32(e + n * 4, !0);
    i.push({ mins: [n(0), n(1), n(2)], maxs: [n(3), n(4), n(5)] });
  }
  return i;
}
var m =
    /^(timer_start(zone)?|mod_zone_start|zone_start|start_?zone|climb_startzone)$/i,
  h =
    /^(timer_end(zone)?|timer_stop(zone)?|mod_zone_end|zone_end|end_?zone|climb_endzone)$/i,
  g =
    /^(timer_bonus_?start(zone)?|mod_zone_bonus_start|zone_bonus_start|bonus_?start_?zone)$/i,
  _ =
    /^(timer_bonus_?end(zone)?|mod_zone_bonus_end|zone_bonus_end|bonus_?end_?zone)$/i,
  v = /^climb_start(button)?$/i,
  y = /^climb_end(button)?$/i;
function b(e) {
  let t = (e ?? ``).trim().split(/\s+/).map(Number);
  return t.length === 3 && t.every(Number.isFinite) ? t : [0, 0, 0];
}
function x(e, t, n) {
  if (!t) return null;
  let r = [];
  for (let n of e) {
    let e = n.targetname ?? ``,
      i = n.classname ?? ``,
      a = t[n.model?.startsWith(`*`) ? Number(n.model.slice(1)) : NaN];
    if (!a) continue;
    let o = b(n.origin),
      s = null,
      c = 0,
      u = 0;
    (i.startsWith(`trigger_`) && m.test(e)
      ? (s = `start`)
      : i.startsWith(`trigger_`) && h.test(e)
        ? (s = `end`)
        : i.startsWith(`trigger_`) && g.test(e)
          ? ((s = `start`), (c = 1))
          : i.startsWith(`trigger_`) && _.test(e)
            ? ((s = `end`), (c = 1))
            : i === `func_button` && v.test(e)
              ? ((s = `start`), (u = 48))
              : i === `func_button` && y.test(e) && ((s = `end`), (u = 48)),
      s &&
        r.push(
          l(
            s,
            a.mins.map((e, t) => e + o[t] - u),
            a.maxs.map((e, t) => e + o[t] + u),
            c,
          ),
        ));
  }
  return s(r).length ? { map: n, zones: r, source: `entities` } : null;
}
var S = (e) => `bunnyhop:zones:${e}`;
async function C(e, t, n, r) {
  try {
    let t = globalThis.localStorage?.getItem(S(e));
    if (t) {
      let n = u(JSON.parse(t), e, `editor (localStorage)`);
      if (n) return n;
    }
  } catch {}
  if (r) {
    let t = u(r, e, `server (pinned)`);
    if (t) return t;
  }
  try {
    let t = await fetch(`/${e}.zones.json`);
    if (t.ok && (t.headers.get(`content-type`) ?? ``).includes(`json`)) {
      let n = u(await t.json(), e, `${e}.zones.json`);
      if (n)
        return (
          n.provenance?.source === `srcwr` &&
            (n.source = `${e}.zones.json (srcwr/zones-cstrike)`),
          n
        );
    }
  } catch {}
  return x(t, p(n), e);
}
var w = { prespeedCap: 290, strafeKeys: `ad`, rules: 2 },
  T = class {
    zones;
    tickInterval;
    options;
    status = `idle`;
    track = 0;
    startTick = 0;
    endTick = 0;
    lastTick = 0;
    jumps = 0;
    strafes = 0;
    syncGood = 0;
    syncTotal = 0;
    splits = [];
    inStart = !1;
    wasInStart = !1;
    armed = !1;
    pendingStart = 0;
    groundSince = 0;
    wasOnGround = !1;
    lastSide = 0;
    prevYaw = NaN;
    constructor(e, t, n = w) {
      ((this.zones = e), (this.tickInterval = t), (this.options = n));
    }
    get rules() {
      return this.options.rules ?? 2;
    }
    reset() {
      ((this.status = `idle`),
        (this.track = 0),
        (this.startTick = this.endTick = this.lastTick = 0),
        (this.wasInStart = this.inStart = this.armed = !1),
        (this.pendingStart = this.groundSince = 0),
        (this.wasOnGround = !1),
        (this.prevYaw = NaN),
        this.clearStats());
    }
    clearStats() {
      ((this.jumps = this.strafes = this.syncGood = this.syncTotal = 0),
        (this.lastSide = 0),
        (this.splits = []));
    }
    get started() {
      return this.status === `running` || this.pendingStart !== 0;
    }
    stop() {
      ((this.status = `idle`),
        (this.startTick = this.endTick = 0),
        (this.wasInStart = this.inStart = this.armed = !1),
        (this.pendingStart = this.groundSince = 0),
        (this.wasOnGround = !1),
        (this.prevYaw = NaN),
        this.clearStats());
    }
    splitTotal() {
      return c(this.zones, this.track);
    }
    ticks(e = this.lastTick) {
      return this.status === `running`
        ? e - this.startTick
        : this.status === `finished`
          ? this.endTick - this.startTick
          : 0;
    }
    time(e = this.lastTick) {
      return this.ticks(e) * this.tickInterval;
    }
    syncPercent() {
      return this.syncTotal ? (100 * this.syncGood) / this.syncTotal : 0;
    }
    update(e, t, r) {
      let i = {};
      this.lastTick = r.tick;
      let s =
          this.status === `running` &&
          !!r.touchPosition &&
          !(t & 8) &&
          o(
            r.touchPosition,
            r.touchCrouched ?? r.crouched,
            this.zones,
            `end`,
            this.track,
          ) !== null,
        c =
          o(r.position, r.crouched, this.zones, `start`, this.track) ??
          o(r.position, r.crouched, this.zones, `start`),
        l = c !== null;
      if (
        (this.rules === 1
          ? c && !s
            ? (this.status !== `idle` && (i.restarted = !0),
              (this.status = `idle`),
              (this.track = n(c)),
              this.clearStats())
            : this.status === `idle` &&
              this.wasInStart &&
              ((this.status = `running`),
              (this.startTick = r.tick),
              this.clearStats(),
              (i.started = !0),
              this.capPrespeed(r, i))
          : this.validStart(r) && c !== null && !s
            ? (this.status !== `idle` && (i.restarted = !0),
              (this.status = `idle`),
              (this.track = n(c)),
              this.clearStats(),
              (this.pendingStart = 0),
              (this.armed = !0))
            : (this.status === `idle` &&
                this.armed &&
                ((this.pendingStart = r.tick), this.capPrespeed(r, i)),
              (this.armed = !1),
              this.status === `idle` &&
                this.pendingStart &&
                !l &&
                ((this.status = `running`),
                (this.startTick = this.pendingStart),
                (this.pendingStart = 0),
                (i.started = !0))),
        (this.wasInStart = this.inStart = l),
        this.status === `running` || this.pendingStart)
      ) {
        t & 2 && this.jumps++;
        let n = this.options.strafeKeys ?? `ad`,
          i =
            n === `ad`
              ? e.side > 0
                ? 1
                : e.side < 0
                  ? -1
                  : 0
              : e.forward > 0
                ? 1
                : e.forward < 0
                  ? -1
                  : 0;
        if (
          (n === `w`
            ? (i > 0 && this.lastSide <= 0 && this.strafes++,
              (this.lastSide = i))
            : (i !== 0 && i !== this.lastSide && this.strafes++,
              i !== 0 && (this.lastSide = i)),
          !r.grounded && this.prevYaw === this.prevYaw)
        ) {
          let t = e.yaw - this.prevYaw;
          if ((t > 180 ? (t -= 360) : t < -180 && (t += 360), t !== 0)) {
            this.syncTotal++;
            let n = (e.yaw * Math.PI) / 180,
              i = Math.cos(n),
              a = Math.sin(n),
              o = e.forward * i + e.side * a,
              s = e.forward * a - e.side * i,
              c = r.velocity[0] * s - r.velocity[1] * o;
            ((t > 0 && c > 0) || (t < 0 && c < 0)) && this.syncGood++;
          }
        }
      }
      if (this.status === `running`) {
        let e = this.splits.length
          ? this.splits[this.splits.length - 1].index
          : -1;
        for (let t of this.zones) {
          if (
            (t.kind !== `stage` && t.kind !== `checkpoint`) ||
            n(t) !== this.track ||
            (t.index ?? 0) <= e ||
            !a(r.position, r.crouched, t)
          )
            continue;
          let o = {
            index: t.index ?? 0,
            kind: t.kind,
            ticks: r.tick - this.startTick,
          };
          (this.splits.push(o), (i.split = o));
          break;
        }
        (s || o(r.position, r.crouched, this.zones, `end`, this.track)) &&
          ((this.status = `finished`),
          (this.endTick = r.tick),
          (i.finished = !0));
      }
      return ((this.prevYaw = e.yaw), i);
    }
    validStart(e) {
      let t = e.grounded && !e.onLadder,
        [n, r, i] = e.velocity,
        a = n * n + r * r;
      if (
        (t
          ? !this.wasOnGround || this.groundSince === 0
            ? (this.groundSince = e.tick)
            : this.groundSince > 0 &&
              a + i * i <= 1e3 &&
              (this.groundSince = -1)
          : (this.groundSince = 0),
        (this.wasOnGround = t),
        !t)
      )
        return !1;
      let o = Math.sqrt(a),
        s = this.options.prespeedCap;
      return s !== null && o > s
        ? !1
        : o <= 50 ||
            this.groundSince < 0 ||
            e.tick - this.groundSince >= Math.round(0.5 / this.tickInterval);
    }
    capPrespeed(e, t) {
      let n = this.options.prespeedCap;
      if (n === null) return;
      let r = e.velocity[0],
        i = e.velocity[1],
        a = Math.sqrt(r * r + i * i);
      if (a > n) {
        let o = n / a;
        t.clampVelocity = [
          Math.fround(r * o),
          Math.fround(i * o),
          e.velocity[2],
        ];
      }
    }
  };
function E(e, t = !1) {
  let n = e < 0,
    r = Math.round(Math.abs(e) * 1e3),
    i = Math.floor(r / 6e4);
  r -= i * 6e4;
  let a = Math.floor(r / 1e3);
  r -= a * 1e3;
  let o = `${String(i).padStart(2, `0`)}:${String(a).padStart(2, `0`)}.${String(r).padStart(3, `0`)}`;
  return (n ? `-` : t ? `+` : ``) + o;
}
function D(e, t) {
  if (e !== e || !Number.isFinite(e) || !Number.isFinite(t)) return 0;
  let n = (t - e) % 360;
  return (n > 180 ? (n -= 360) : n < -180 && (n += 360), n);
}
function O(e) {
  return e > 0 ? -1 : +(e < 0);
}
var k = 8,
  A = 16,
  j = 512,
  M = 1024,
  N = { w: !1, a: !1, s: !1, d: !1 },
  P = [
    {
      id: `autohop`,
      name: `Normal`,
      short: `NM`,
      brief: `Normal`,
      autohop: !0,
      block: N,
      hsw: !1,
      rule: `Autohop: hold jump. Every key works.`,
    },
    {
      id: `legit`,
      name: `Legit Scroll`,
      short: `SCR`,
      brief: `Scroll`,
      autohop: !1,
      block: N,
      hsw: !1,
      rule: `No autohop: press (scroll) jump for every hop.`,
    },
    {
      id: `wonly`,
      name: `W-Only`,
      short: `W`,
      brief: `W-Only`,
      autohop: !0,
      block: { w: !1, a: !0, s: !0, d: !0 },
      hsw: !1,
      rule: `Only W in the air. A, S and D are blocked.`,
    },
    {
      id: `sideways`,
      name: `Sideways`,
      short: `SW`,
      brief: `Sideways`,
      autohop: !0,
      block: { w: !1, a: !0, s: !1, d: !0 },
      hsw: !1,
      rule: `Only W and S in the air: face sideways and strafe with W/S.`,
    },
    {
      id: `hsw`,
      name: `Half-Sideways`,
      short: `HSW`,
      brief: `Half-SW`,
      autohop: !0,
      block: { w: !1, a: !1, s: !0, d: !1 },
      hsw: !0,
      rule: `Hold W plus A or D together in the air. S, pure W and pure A/D do nothing.`,
    },
    {
      id: `autostrafe`,
      name: `Auto-strafe`,
      short: `AS`,
      brief: `Auto-strafe`,
      autohop: !0,
      block: N,
      hsw: !1,
      auto: !0,
      rule: `Move the mouse in the air and the game presses A/D for you. Hold A, D or S to take over.`,
    },
  ],
  F = `autohop`,
  I = `autohop`;
function L(e, t) {
  return t > 0 ? I : e;
}
var R = new Map(P.map((e) => [e.id, e]));
function z(e) {
  return typeof e == `string` && R.has(e);
}
function B(e) {
  return R.get(e) ?? null;
}
function V(e) {
  return R.get(e)?.name ?? e;
}
function H(t) {
  return { ...e, autohop: R.get(t)?.autohop ?? !0 };
}
function U(e, t = 1) {
  let n = P.findIndex((t) => t.id === e),
    r = P.length;
  return P[(((n < 0 ? 0 : n + t) % r) + r) % r].id;
}
function W(e) {
  return e.hsw || e.block.w || e.block.a || e.block.s || e.block.d;
}
function G(e, t, n) {
  if (!e || !W(e) || n.grounded || n.onLadder) return t;
  let r = t.forward,
    i = t.side,
    a = t.buttons,
    o = e.block;
  if (
    (o.w && ((a & k) !== 0 || r > 0) && ((r = 0), (a &= -9)),
    o.a && ((a & j) !== 0 || i < 0) && ((i = 0), (a &= -513)),
    o.s && ((a & A) !== 0 || r < 0) && ((r = 0), (a &= -17)),
    o.d && ((a & M) !== 0 || i > 0) && ((i = 0), (a &= -1025)),
    e.hsw)
  ) {
    let e = r > 0,
      t = i !== 0;
    if (
      (e && !t && ((r = 0), (a &= -25)),
      t && !e && ((i = 0), (a &= -1537)),
      r !== 0 && i !== 0 && r !== Math.abs(i))
    ) {
      let e = Math.min(r, Math.abs(i));
      ((r = e), (i = i < 0 ? -e : e));
    }
  }
  return r === t.forward && i === t.side && a === t.buttons
    ? t
    : { forward: r, side: i, yaw: t.yaw, pitch: t.pitch, buttons: a };
}
function K(e) {
  return e?.id === `wonly` ? `w` : e?.id === `sideways` ? `ws` : `ad`;
}
var q = class {
  style;
  fromLadder = !1;
  prevYaw = NaN;
  autoDir = 0;
  still = 0;
  groundTicks = 2;
  sStops;
  keys;
  constructor(e, t = 1) {
    ((this.style = e), (this.sStops = t >= 5), (this.keys = t >= 8));
  }
  reset() {
    ((this.fromLadder = !1),
      (this.prevYaw = NaN),
      (this.autoDir = 0),
      (this.still = 0),
      (this.groundTicks = 2));
  }
  apply(e, t) {
    return (
      t.onLadder
        ? (this.fromLadder = !0)
        : t.grounded && (this.fromLadder = !1),
      this.style?.auto
        ? this.assist(e, t)
        : G(this.style, e, {
            grounded: t.grounded,
            onLadder: t.onLadder || this.fromLadder,
          })
    );
  }
  assist(e, t) {
    let n = D(this.prevYaw, e.yaw);
    this.prevYaw = e.yaw;
    let r = O(n);
    if (
      (r ? ((this.autoDir = r), (this.still = 0)) : this.still++,
      (this.groundTicks = t.grounded ? Math.min(this.groundTicks + 1, 2) : 0),
      t.onLadder ||
        this.fromLadder ||
        this.groundTicks > 1 ||
        (this.sStops && e.forward < 0) ||
        (this.keys && e.side !== 0))
    )
      return e;
    let i = this.keys && e.forward > 0 ? e.forward : 0,
      a;
    ((a = r
      ? r * 450
      : e.side === 0
        ? this.still <= 5
          ? this.autoDir * 450
          : 0
        : e.side),
      (a += 0));
    let o = e.buttons & -1561;
    return (
      i > 0 && (o |= k),
      a > 0 ? (o |= M) : a < 0 && (o |= j),
      i === e.forward && a === e.side && o === e.buttons
        ? e
        : { forward: i, side: a, yaw: e.yaw, pitch: e.pitch, buttons: o }
    );
  }
};
export {
  i as C,
  S as E,
  n as S,
  f as T,
  u as _,
  z as a,
  o as b,
  B as c,
  H as d,
  w as f,
  l as g,
  C as h,
  q as i,
  L as l,
  E as m,
  F as n,
  U as o,
  T as p,
  P as r,
  K as s,
  I as t,
  V as u,
  a as v,
  s as w,
  r as x,
  c as y,
};
