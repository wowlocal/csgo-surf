import { t as e, v as t, y as n } from "./play-lock-D2QCla03.js";
import { qr as r, t as i } from "./model-CJn1vZL3.js";
import { C as a, l as o } from "./core-GuI4LXND.js";
import { i as s } from "./api-B2Jj-kgC.js";
import { E as c, P as l, V as u, d, k as f, u as p } from "./ghost-BF02H5nr.js";
import { C as m, L as h, p as ee } from "./account-state-BYMidhZ9.js";
import { E as g } from "./cosmetics-PGh_ZGfu.js";
import { c as te, m as _, u as v, x as y } from "./styles-DzitlxVO.js";
import { f as b, r as x, t as S } from "./loadout-DopA3xcw.js";
import { t as ne } from "./notify-CvHg_wVW.js";
import { N as C } from "./creators-DkuwYE0A.js";
import { o as re, r as ie, s as w } from "./presence-B4W1kThY.js";
import {
  a as ae,
  i as oe,
  n as se,
  o as T,
  r as ce,
  t as le,
} from "./hud-5C6lff-r.js";
import { t as E } from "./events-EnaVAdlF.js";
import { n as D, r as ue, t as de, u as fe } from "./presenter-IuwAtgYT.js";
var pe = (e) => (e & 192) >> 6;
function me(e, t = !1) {
  return e !== null && Number.isInteger(e) && e >= 0 && e <= 25
    ? 128 | e | (t && e >= 2 ? 64 : 0)
    : 0;
}
var O = [`autohop`, `legit`, `wonly`, `sideways`, `hsw`, `autostrafe`],
  he = (e) => Math.max(0, O.indexOf(e)),
  k = (e) => O[e] ?? null,
  A = (e) => (e > 32767 ? 32767 : e < -32768 ? -32768 : Math.round(e) | 0),
  j = (e) => Math.round((((e % 360) + 360) % 360) * (65536 / 360)) & 65535,
  M = (e) => (e * 360) / 65536,
  N = (e) => A(Math.max(-90, Math.min(90, e)) * 360),
  P = (e) => e / 360;
function F(e, t, n, r) {
  (e.setUint8(t, Math.max(0, Math.min(255, n.tick - r))),
    e.setUint8(t + 1, n.flags & 255),
    e.setFloat32(t + 2, n.x, !0),
    e.setFloat32(t + 6, n.y, !0),
    e.setFloat32(t + 10, n.z, !0),
    e.setInt16(t + 14, A(n.vx), !0),
    e.setInt16(t + 16, A(n.vy), !0),
    e.setInt16(t + 18, A(n.vz), !0),
    e.setUint16(t + 20, j(n.yaw), !0),
    e.setInt16(t + 22, N(n.pitch), !0));
}
function I(e, t, n) {
  return {
    tick: (n + e.getUint8(t)) >>> 0,
    flags: e.getUint8(t + 1),
    x: e.getFloat32(t + 2, !0),
    y: e.getFloat32(t + 6, !0),
    z: e.getFloat32(t + 10, !0),
    vx: e.getInt16(t + 14, !0),
    vy: e.getInt16(t + 16, !0),
    vz: e.getInt16(t + 18, !0),
    yaw: M(e.getUint16(t + 20, !0)),
    pitch: P(e.getInt16(t + 22, !0)),
  };
}
function L(e, t, n = null, r = !1) {
  let i = Math.min(t.length, 8),
    a = new Uint8Array(16 + i * 24),
    o = new DataView(a.buffer),
    s = i ? t[0].tick >>> 0 : 0;
  (o.setUint8(0, 1),
    o.setUint8(1, i),
    o.setUint8(2, me(n, r)),
    o.setUint8(3, e.style),
    o.setUint8(4, e.track),
    o.setUint8(5, e.timer),
    o.setUint16(6, Math.max(0, Math.min(65535, Math.round(e.ping))), !0),
    o.setUint32(
      8,
      Math.max(0, Math.min(4294967295, Math.round(e.timerTicks))),
      !0,
    ),
    o.setUint32(12, s, !0));
  for (let e = 0; e < i; e++) F(o, 16 + e * 24, t[e], s);
  return a;
}
var R = 9,
  z = (e, t) => 3 + (t ? R : 0) + 4 + e * 24;
function ge(e) {
  let t = e instanceof Uint8Array ? e : new Uint8Array(e);
  if (t.length < 6) return null;
  let n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  if (n.getUint8(0) !== 2) return null;
  let r = n.getUint8(1),
    i = [],
    a = 6;
  for (let e = 0; e < r; e++) {
    if (a + 7 > t.length) return null;
    let e = n.getUint8(a),
      r = n.getUint8(a + 1),
      o = !!(n.getUint8(a + 2) & 1);
    if (r > 8 || a + z(r, o) > t.length) return null;
    a += 3;
    let s = null;
    o &&
      ((s = {
        style: n.getUint8(a),
        track: n.getUint8(a + 1),
        timer: n.getUint8(a + 2),
        ping: n.getUint16(a + 3, !0),
        timerTicks: n.getUint32(a + 5, !0),
      }),
      (a += R));
    let c = n.getUint32(a, !0);
    a += 4;
    let l = [];
    for (let e = 0; e < r; e++, a += 24) l.push(I(n, a, c));
    i.push({ slot: e, meta: s, samples: l });
  }
  for (; a + 3 <= t.length; ) {
    let e = n.getUint8(a),
      r = n.getUint16(a + 1, !0);
    if (((a += 3), a + r > t.length)) break;
    if (e === 1)
      for (let e = 0; e + 1 < r; e += 2) {
        let t = n.getUint8(a + e),
          r = n.getUint8(a + e + 1);
        t < i.length && r <= 25 && ((i[t].weapon = r), (i[t].silenced = !1));
      }
    else if (e === 2)
      for (let e = 0; e < r; e++) {
        let t = i[n.getUint8(a + e)];
        t && t.weapon !== void 0 && (t.silenced = !0);
      }
    a += r;
  }
  return { serverTime: n.getUint32(2, !0), blocks: i };
}
var B = (e) => `extend` in e;
function _e(e) {
  try {
    let t = JSON.parse(e);
    return t && typeof t == `object` && typeof t.t == `string` ? t : null;
  } catch {
    return null;
  }
}
var V = {
    MAP_CHANGE: 4001,
    REPLACED: 4002,
    FULL: 4003,
    NO_MAPS: 4004,
    KICKED: 4005,
    BANNED: 4006,
    ABUSE: 4008,
    LEAVE: 4e3,
  },
  ve = 120,
  ye = 100,
  H = 96,
  be = (e) => ((((e + 180) % 360) + 360) % 360) - 180;
function xe() {
  return {
    pos: [0, 0, 0],
    vel: [0, 0, 0],
    yaw: 0,
    pitch: 0,
    crouched: !1,
    grounded: !0,
    snapped: !0,
    jumped: !1,
    attack: 0,
    inspect: 0,
    inspectHeld: !1,
    weapon: -1,
    attackWeapon: -1,
    silenced: !1,
    attackSilenced: !1,
    weaponChanged: !1,
    age: 0,
  };
}
var U = 64,
  W = (e, t) => (e < 0 ? -1 : e | (t && e >= 2 ? U : 0)),
  G = (e) => (e < 0 ? -1 : e & -65),
  Se = class {
    buf = [];
    offset = null;
    jitter = 0;
    lastArrival = 0;
    lastRendered = null;
    lastJump = -1;
    lastAttack = -1;
    lastInspect = -1;
    weapon = -1;
    weapons = [];
    get size() {
      return this.buf.length;
    }
    get newest() {
      return this.buf[this.buf.length - 1] ?? null;
    }
    get delay() {
      return 100 + Math.min(ve, this.jitter);
    }
    push(e, t) {
      if (!e.length) return;
      let n = this.buf[this.buf.length - 1];
      for (let t of e)
        (n && t.tick <= n.tick) ||
          (this.buf.length && t.tick <= this.buf[this.buf.length - 1].tick) ||
          this.buf.push(t);
      this.buf.length > H && this.buf.splice(0, this.buf.length - H);
      let r = t - e[e.length - 1].tick * 10;
      if (this.offset === null || r < this.offset || r - this.offset > 750)
        (this.offset !== null && r - this.offset > 750 && (this.jitter = 0),
          (this.offset = r));
      else {
        let e = r - this.offset;
        ((this.jitter = this.jitter * 0.9 + e * 0.1),
          (this.offset += e * 0.002));
      }
      this.lastArrival = t;
    }
    pushWeapon(e, t, n = !1) {
      e = W(e, n);
      let r = this.weapons[this.weapons.length - 1];
      (r ? r.weapon : this.weapon) !== e &&
        (r && t <= r.tick
          ? (r.weapon = e)
          : this.weapons.push({ tick: t, weapon: e }),
        this.weapons.length > 32 &&
          this.weapons.splice(0, this.weapons.length - 32));
    }
    setWeapon(e, t = !1) {
      ((this.weapon = W(e, t)), (this.weapons = []));
    }
    weaponBefore(e) {
      let t = this.weapon;
      for (let n of this.weapons) {
        if (n.tick >= e) break;
        t = n.weapon;
      }
      return t;
    }
    sample(e, t) {
      let n = this.buf;
      if (!n.length || this.offset === null) return !1;
      let r = (e - this.offset - this.delay) / 10,
        i = 0;
      for (; i + 1 < n.length && n[i + 1].tick <= r; ) i++;
      ((t.jumped = !1),
        (t.attack = 0),
        (t.inspect = 0),
        (t.weaponChanged = !1));
      for (let e = 0; e <= i; e++) {
        let i = n[e];
        if (
          (i.flags & 4 &&
            i.tick <= r &&
            i.tick > this.lastJump &&
            ((t.jumped = !0), (this.lastJump = i.tick)),
          i.flags & 48 && i.tick <= r && i.tick > this.lastAttack)
        ) {
          t.attack = i.flags & 32 ? 2 : 1;
          let e = this.weaponBefore(i.tick);
          ((t.attackWeapon = G(e)),
            (t.attackSilenced = e >= 0 && (e & U) !== 0),
            (this.lastAttack = i.tick));
        }
        if (i.tick <= r && i.tick > this.lastInspect) {
          let e = pe(i.flags);
          (e === 1 || e === 2 ? (t.inspect = e) : (t.inspectHeld = e === 3),
            (this.lastInspect = i.tick));
        }
      }
      i > 0 && n.splice(0, i);
      let a = this.weapon;
      for (; this.weapons.length && this.weapons[0].tick <= r; )
        this.weapon = this.weapons.shift().weapon;
      ((t.weapon = G(this.weapon)),
        (t.silenced = this.weapon >= 0 && (this.weapon & U) !== 0),
        (t.weaponChanged = a >= 0 && G(this.weapon) !== G(a)));
      let o = n[0],
        s = n[1],
        c = o;
      if (s && r >= o.tick) {
        let e = Math.min(1, (r - o.tick) / (s.tick - o.tick));
        if (s.flags & 8) ((c = e >= 1 ? s : o), this.write(t, c, 0));
        else {
          ((t.pos[0] = o.x + (s.x - o.x) * e),
            (t.pos[1] = o.y + (s.y - o.y) * e),
            (t.pos[2] = o.z + (s.z - o.z) * e),
            (t.vel[0] = o.vx + (s.vx - o.vx) * e),
            (t.vel[1] = o.vy + (s.vy - o.vy) * e),
            (t.vel[2] = o.vz + (s.vz - o.vz) * e),
            (t.yaw = (o.yaw + be(s.yaw - o.yaw) * e + 360) % 360),
            (t.pitch = o.pitch + (s.pitch - o.pitch) * e));
          let n = e < 0.5 ? o : s;
          ((t.crouched = !!(n.flags & 2)),
            (t.grounded = !!(n.flags & 1)),
            (c = n));
        }
      } else {
        let e = Math.max(0, Math.min(ye, (r - o.tick) * 10)) / 1e3;
        this.write(t, o, e);
      }
      return (
        (t.snapped =
          this.lastRendered === null ||
          (c !== this.lastRendered &&
            !!(c.flags & 8) &&
            c.tick > this.lastRendered.tick)),
        (this.lastRendered = c),
        (t.age = e - this.lastArrival),
        !0
      );
    }
    write(e, t, n) {
      ((e.pos[0] = t.x + t.vx * n),
        (e.pos[1] = t.y + t.vy * n),
        (e.pos[2] = t.z + (t.flags & 1 ? 0 : t.vz * n)),
        (e.vel[0] = t.vx),
        (e.vel[1] = t.vy),
        (e.vel[2] = t.vz),
        (e.yaw = t.yaw),
        (e.pitch = t.pitch),
        (e.crouched = !!(t.flags & 2)),
        (e.grounded = !!(t.flags & 1)));
    }
    clear() {
      ((this.buf = []),
        (this.offset = null),
        (this.jitter = 0),
        (this.lastRendered = null),
        (this.lastJump = -1),
        (this.weapon = -1),
        (this.weapons = []));
    }
  },
  K = [
    `#ff7a59`,
    `#4fa8ff`,
    `#5ee08a`,
    `#ffd84d`,
    `#c477ff`,
    `#ff5d9e`,
    `#3fd0c9`,
    `#ffa94d`,
    `#9aa3ff`,
    `#b6f06a`,
  ],
  q = (e) => K[e % K.length],
  J = new r(),
  Y = new r(),
  X = Math.PI / 180,
  Z = 8192;
function Q(e, t) {
  let n = e.meta;
  return n
    ? n.timer === 2
      ? {
          status: n.timer,
          seconds: n.timerTicks / 100 + Math.max(0, (t - e.metaAt) / 1e3),
        }
      : n.timer === 3
        ? { status: n.timer, seconds: n.timerTicks / 100 }
        : { status: n.timer, seconds: 0 }
    : null;
}
var Ce = class {
    scene;
    you;
    trace;
    impacts;
    players = new Map();
    hidden = !1;
    inEye = null;
    constructor(e, t, n = null, r = null) {
      ((this.scene = e), (this.you = t), (this.trace = n), (this.impacts = r));
    }
    upsert(e) {
      let t = this.players.get(e.slot);
      return (
        t && t.info.id !== e.id && (this.remove(e.slot), (t = void 0)),
        t
          ? ((t.info = e), t.model?.setLoadout(x(e.loadout) ?? { ...S }))
          : ((t = {
              slot: e.slot,
              info: e,
              track: new Se(),
              state: xe(),
              has: !1,
              meta: null,
              metaAt: 0,
              model: null,
              tag: null,
              sight: new d(2e3, 3e3),
              sound: null,
            }),
            this.players.set(e.slot, t)),
        t
      );
    }
    remove(e) {
      let t = this.players.get(e);
      t &&
        (t.model?.root.removeFromParent(),
        t.model?.dispose(),
        t.tag?.dispose(),
        t.sound?.dispose(),
        this.players.delete(e));
    }
    clear() {
      for (let e of [...this.players.keys()]) this.remove(e);
    }
    feed(e, t, n, r, i, a = !1) {
      let o = this.players.get(e);
      o &&
        (t && ((o.meta = t), (o.metaAt = r)),
        o.track.push(n, r),
        i !== void 0 &&
          n.length &&
          o.track.pushWeapon(i, n[n.length - 1].tick, a));
    }
    setWeapon(e, t) {
      this.players.get(e)?.track.setWeapon(t);
    }
    setMeta(e, t, n) {
      let r = this.players.get(e);
      r && ((r.meta = t), (r.metaAt = n));
    }
    ensureModel(e) {
      if (e.model) return;
      let t = q(e.slot);
      ((e.model = new i({
        style: `solid`,
        color: t,
        outfit: e.info.outfit ?? b.outfit,
        loadout: x(e.info.loadout) ?? { ...S },
      })),
        this.scene.add(e.model.root),
        (e.tag = new p(t)),
        this.scene.add(e.tag.sprite));
    }
    frame(e, t, n) {
      e.getWorldPosition(Y);
      let r = this.you(),
        i = g.get(),
        a = i.audio.others;
      for (let e of this.players.values()) {
        if (e.slot === r) continue;
        if (
          ((e.has = e.track.sample(n, e.state)),
          !(e.has && e.info.spec === null && !this.hidden && e.state.age < 5e3))
        ) {
          (e.sound?.moves.reset(),
            e.model && (e.model.root.visible = !1),
            e.tag && (e.tag.sprite.visible = !1),
            e.sight.reset());
          continue;
        }
        this.ensureModel(e);
        let s = e.model,
          l = e.state;
        (l.snapped && s.snap(),
          s.setGun(l.weapon >= 2 ? (o[l.weapon] ?? null) : null),
          s.setGunSilencer(l.weapon >= 2 && l.silenced));
        let u = l.attack !== 0 && l.attackWeapon >= 2,
          d = u ? 0 : l.attack;
        (s.setState({
          position: l.pos,
          velocity: l.vel,
          yaw: l.yaw,
          pitch: l.pitch,
          crouched: l.crouched,
          grounded: l.grounded,
          jumped: l.jumped,
          attack: d,
          inspect: l.inspect,
          inspectHeld: l.inspectHeld,
        }),
          d &&
            E({
              type: d === 2 ? `stab` : `slash`,
              source: `remote`,
              slot: e.slot,
              position: [l.pos[0], l.pos[1], l.pos[2]],
            }),
          u && l.attack === 1 && this.shot(l, a),
          l.weaponChanged &&
            l.weapon >= 2 &&
            a &&
            !l.snapped &&
            ue(D(l.weapon) ?? null, `draw`, { at: l.pos, gain: 0.7 }),
          l.inspect &&
            E({
              type: `inspect`,
              source: `remote`,
              slot: e.slot,
              position: [l.pos[0], l.pos[1], l.pos[2]],
              trick: l.inspect === 1 ? 0 : void 0,
            }),
          s.update(t));
        let f = this.inEye === e.slot;
        (a
          ? (e.sound ??= new ee()).update(
              t,
              l.pos,
              l.vel,
              l.grounded,
              l.crouched,
              l.jumped,
              l.snapped,
            )
          : e.sound?.moves.reset(),
          (s.root.visible = !f));
        let p = e.tag;
        J.set(l.pos[0], l.pos[2] + (l.crouched ? 58 : 76), -l.pos[1]);
        let m = J.distanceTo(Y);
        l.snapped && e.sight.reset();
        let h = e.sight.update(t, Y, J, this.trace, i.tags.throughWalls),
          g =
            f || m < 90 || !i.tags.players || c()
              ? 0
              : Math.min(1, (m - 90) / 90) * h,
          v = Q(e, n),
          y = k(e.meta?.style ?? -1) ?? e.info.style,
          b = y === `autohop` ? `` : `${te(y)?.short ?? y} · `,
          x = v
            ? v.status === 2 || v.status === 3
              ? b + _(v.seconds)
              : v.status === 1
                ? `${b}start`
                : b.replace(/ · $/, ``)
            : ``;
        (p.set(e.info.name, x, null, !1, e.info), p.place(J, Y, g));
      }
    }
    shot(e, t) {
      if (
        (t && de.remoteShot(e.attackWeapon, e.pos, e.attackSilenced),
        !this.impacts)
      )
        return;
      let n = Math.cos(e.pitch * X),
        r = [
          n * Math.cos(e.yaw * X),
          n * Math.sin(e.yaw * X),
          -Math.sin(e.pitch * X),
        ],
        i = [e.pos[0], e.pos[1], e.pos[2] + (e.crouched ? 46 : 64)],
        a = [0, 1, 2].map((e) => i[e] + r[e] * Z),
        o = this.trace ? this.trace(i, a) : 1,
        s = [0, 1, 2].map((e) => i[e] + r[e] * Z * o),
        c = Math.hypot(r[0], r[1]) || 1,
        l = [r[1] / c, -r[0] / c, 0],
        u = e.crouched ? 30 : 46,
        d = [
          e.pos[0] + (r[0] / c) * 26 + l[0] * 7,
          e.pos[1] + (r[1] / c) * 26 + l[1] * 7,
          e.pos[2] + u,
        ];
      this.impacts.hit(s, [0, 0, 0], `concrete`, { from: d });
    }
    stateOf(e) {
      let t = this.players.get(e);
      return t?.has ? t.state : null;
    }
    dispose() {
      this.clear();
    }
  },
  we = 2e3,
  Te = new Set([
    V.REPLACED,
    V.FULL,
    V.NO_MAPS,
    V.KICKED,
    V.BANNED,
    V.ABUSE,
    V.LEAVE,
    V.MAP_CHANGE,
  ]),
  Ee = class {
    id;
    style;
    h;
    ws = null;
    pingTimer = 0;
    pingSent = 0;
    retry = 0;
    stopped = !1;
    pending = [];
    rtt = 0;
    clockOffset = 0;
    status = `connecting`;
    stats = { sent: 0, sentBytes: 0, recv: 0, recvBytes: 0 };
    constructor(e, t, n) {
      ((this.id = e), (this.style = t), (this.h = n), this.open());
    }
    serverNow() {
      return Date.now() + this.clockOffset;
    }
    toLocal(e) {
      return e - this.clockOffset;
    }
    setStatus(e, t) {
      ((this.status = e), this.h.status(e, t));
    }
    open() {
      let e;
      try {
        e = s.roomSocketUrl(this.id, 1, this.style());
      } catch {
        this.setStatus(`closed`, `Multiplayer needs the online API`);
        return;
      }
      let t = new WebSocket(e);
      ((t.binaryType = `arraybuffer`),
        (this.ws = t),
        (t.onopen = () => {
          ((this.retry = 0),
            this.ping(),
            clearInterval(this.pingTimer),
            (this.pingTimer = window.setInterval(() => this.ping(), we)));
        }),
        (t.onmessage = (e) => {
          let t = performance.now();
          if (typeof e.data == `string`) {
            if (
              (this.stats.recv++,
              (this.stats.recvBytes += e.data.length),
              e.data === `pong`)
            )
              return this.pong();
            let t = _e(e.data);
            if (!t) return;
            (t.t === `welcome` &&
              ((this.clockOffset = t.now - (Date.now() - this.rtt / 2)),
              this.setStatus(`open`)),
              this.h.message(t));
          } else {
            let n = e.data;
            (this.stats.recv++, (this.stats.recvBytes += n.byteLength));
            let r = ge(n);
            r && this.h.snapshot(r, t);
          }
        }),
        (t.onclose = (e) => {
          if (
            (clearInterval(this.pingTimer),
            (this.ws = null),
            this.stopped || Te.has(e.code))
          ) {
            ((this.stopped = !0), this.setStatus(`closed`, e.reason || void 0));
            return;
          }
          let t = Math.min(15e3, 1e3 * 2 ** Math.min(4, this.retry++));
          (this.setStatus(
            `reconnecting`,
            `Reconnecting in ${Math.round(t / 1e3)} s…`,
          ),
            setTimeout(() => !this.stopped && this.open(), t));
        }));
    }
    ping() {
      this.ws?.readyState === WebSocket.OPEN &&
        ((this.pingSent = performance.now()), this.ws.send(`ping`));
    }
    pong() {
      if (!this.pingSent) return;
      let e = performance.now() - this.pingSent;
      ((this.pingSent = 0),
        (this.rtt = this.rtt ? this.rtt * 0.7 + e * 0.3 : e));
    }
    get open_() {
      return this.ws?.readyState === WebSocket.OPEN && this.status === `open`;
    }
    send(e) {
      if (!this.open_) return;
      let t = JSON.stringify(e);
      (this.ws.send(t), this.stats.sent++, (this.stats.sentBytes += t.length));
    }
    pushSample(e) {
      (this.pending.push(e), this.pending.length > 8 && this.pending.shift());
    }
    flushSamples(e, t = null, n = !1) {
      if (!this.pending.length) return;
      let r = this.pending;
      if (((this.pending = []), !this.open_)) return;
      let i = L({ ...e, ping: Math.round(this.rtt) }, r, t, n);
      (this.ws.send(i), this.stats.sent++, (this.stats.sentBytes += i.length));
    }
    close(e = V.LEAVE) {
      ((this.stopped = !0), clearInterval(this.pingTimer));
      try {
        this.ws?.close(e, e === V.MAP_CHANGE ? `map change` : `leave`);
      } catch {}
      this.ws = null;
    }
  },
  $ = `bunnyhop:mp-hide`,
  De = class {
    o;
    conn;
    players;
    chat;
    menu;
    board;
    banner;
    specBar;
    you = -1;
    room = null;
    map = null;
    nextMap = null;
    change = null;
    vote = null;
    myVote = null;
    voteHidden = -1;
    lastCountdown = -1;
    rtv = { count: 0, needed: 1 };
    nominations = [];
    pool = [];
    netTick = 1e3;
    jumped = !1;
    attackFlags = 0;
    inspectSig = 0;
    inspectHeld = !1;
    weapon = null;
    silenced = !1;
    teleported = !0;
    lastSample = null;
    spectating = null;
    spec = null;
    specMode = `eye`;
    uiAt = 0;
    navigating = !1;
    status = `connecting`;
    constructor(e) {
      this.o = e;
      let t = e.session.hud,
        r = document.getElementById(`hud`);
      ((this.chat = new se(t.chatEl)),
        t.els.chat.classList.remove(`empty`),
        (this.menu = new ce(r)),
        (this.board = new oe(r)),
        (this.banner = new le(r)),
        (this.specBar = new ae(r)),
        (this.players = new Ce(
          e.scene,
          () => this.you,
          (t, n) => a(e.core, t, n, 0),
          e.impacts ?? null,
        )),
        (this.players.hidden = localStorage.getItem($) === `1`),
        (this.chatCtx = { ...this.chatCtx, game: e.game ?? null }),
        (this.chat.onSend = (e) => this.onChat(e)),
        (this.chat.suggest = (e) => n(e, `room`)),
        (this.chat.onClose = () => {
          (e.input.releaseAll(), e.input.recapture());
        }),
        (this.conn = new Ee(e.serverId, () => e.session.selectedStyle, {
          message: (e) => this.onMessage(e),
          snapshot: (e, t) => {
            for (let n of e.blocks)
              n.slot !== this.you &&
                this.players.feed(
                  n.slot,
                  n.meta,
                  n.samples,
                  t,
                  n.weapon,
                  n.silenced,
                );
          },
          status: (e, t) => this.onStatus(e, t),
        })),
        this.banner.set(`Connecting…`, e.serverId),
        document.addEventListener(`keydown`, (e) => this.keydown(e)),
        document.addEventListener(`keyup`, (e) => {
          e.code === `Tab` && this.board.show(!1);
        }),
        document.addEventListener(`mousedown`, (t) => {
          this.spectating !== null &&
            e.input.pointerLocked &&
            (t.button === 0
              ? this.cycleSpectate(1)
              : t.button === 2 && this.cycleSpectate(-1));
        }),
        document.addEventListener(`pointerlockchange`, () => {
          e.input.locked || (this.chat.close(), this.board.show(!1));
        }),
        addEventListener(
          `beforeunload`,
          () => !this.navigating && this.conn.close(V.LEAVE),
        ),
        ie({
          summary: () => this.summary(),
          spectate: () => this.openSpectateMenu(),
          nominate: () => this.openNominateMenu(),
          rtv: () => this.conn.send({ t: `rtv` }),
          leave: () => this.leave(),
          scoreboard: () => this.board.show(!0),
        }));
    }
    filterInput(e) {
      return this.spectating === null && !this.chat.isOpen
        ? e
        : {
            ...e,
            forwardmove: 0,
            sidemove: 0,
            buttons: this.spectating === null ? e.buttons & h : 0,
          };
    }
    afterTick(e, t, n, r = null, i = !1) {
      if (this.spectating === null) {
        if (
          ((this.weapon = r),
          (this.silenced = i),
          this.netTick++,
          n & 2 && (this.jumped = !0),
          n & 1 && (this.teleported = !0),
          this.netTick % 5 == 0)
        ) {
          let n = e.position,
            r = e.velocity,
            i = this.lastSample,
            a =
              +!!e.grounded |
              (e.crouched ? 2 : 0) |
              (this.jumped ? 4 : 0) |
              this.attackFlags |
              ((this.inspectSig || (this.inspectHeld ? 3 : 0)) << 6);
          (this.teleported ||
            !i ||
            Math.hypot(n[0] - i.x, n[1] - i.y, n[2] - i.z) >
              Math.hypot(r[0], r[1], r[2]) * 0.05 + 48) &&
            (a |= 8);
          let o = {
            tick: this.netTick,
            x: n[0],
            y: n[1],
            z: n[2],
            vx: r[0],
            vy: r[1],
            vz: r[2],
            yaw: t.yaw,
            pitch: t.pitch,
            flags: a,
          };
          ((this.lastSample = o),
            (this.jumped = this.teleported = !1),
            (this.attackFlags = 0),
            (this.inspectSig = 0),
            this.conn.pushSample(o));
        }
        if (this.netTick % 10 == 0) {
          let e = this.o.session.timer,
            t =
              e.status === `running`
                ? 2
                : e.status === `finished`
                  ? 3
                  : +!!e.inStart;
          this.conn.flushSamples(
            {
              style: he(this.o.session.runStyle),
              track: e.track,
              timer: t,
              timerTicks: e.ticks(),
            },
            this.weapon,
            this.silenced,
          );
        }
      }
    }
    frame(e, t) {
      let n = performance.now(),
        r = !1;
      if (this.spectating !== null) {
        let n = this.players.stateOf(this.spectating);
        if (n) {
          ((this.spec ??= new fe({
            trace: (e, t, n) => a(this.o.core, e, t, n),
            chase: { distance: 110, followRate: 10 },
          })),
            n.snapped && this.spec.snap());
          let i = {
            pos: n.pos,
            vel: n.vel,
            viewZ: n.crouched ? 46 : 64,
            yaw: n.yaw,
            pitch: n.pitch,
            crouched: n.crouched,
            grounded: n.grounded,
          };
          (this.spec.update(e, i, t, this.specMode), (r = !0));
        }
        this.players.inEye = this.specMode === `eye` ? this.spectating : null;
      } else this.players.inEye = null;
      return (
        this.players.frame(e, t, n),
        n - this.uiAt > 200 && ((this.uiAt = n), this.refreshUi(n)),
        r
      );
    }
    onAction(e) {
      return this.spectating !== null &&
        (e === `restart` || e === `restartMain` || e === `restartBonus`)
        ? (this.stopSpectating(), !0)
        : !(
            this.spectating === null ||
            (e !== `setStart` &&
              e !== `clearStart` &&
              e !== `cycleStyle` &&
              e !== `thirdPerson` &&
              e !== `attack` &&
              e !== `attack2` &&
              e !== `inspect`)
          );
    }
    get isSpectating() {
      return this.spectating !== null;
    }
    onAttack(e) {
      this.spectating === null && (this.attackFlags |= e === 2 ? 32 : 16);
    }
    onShot() {
      this.spectating === null && (this.attackFlags |= 16);
    }
    onInspect(e) {
      this.spectating === null &&
        (this.inspectSig = Math.max(this.inspectSig, e & 3));
    }
    setInspectHeld(e) {
      this.inspectHeld = e;
    }
    name(e) {
      return this.players.players.get(e)?.info.name ?? `#${e}`;
    }
    onStatus(e, t) {
      ((this.status = e),
        e === `reconnecting`
          ? this.banner.set(`Connection lost`, t ?? `Reconnecting…`)
          : e === `closed`
            ? (w(null),
              this.navigating ||
                this.banner.set(
                  `Disconnected`,
                  t ? `${t} · Esc → Servers` : `Esc → Servers to rejoin`,
                ))
            : e === `open` && !this.change && this.banner.set(null));
    }
    onMessage(e) {
      let t = performance.now();
      switch (e.t) {
        case `welcome`:
          ((this.you = e.you),
            (this.room = e.room),
            (this.map = e.map),
            (this.nextMap = e.nextMap),
            (this.vote = e.vote),
            (this.myVote = e.myVote),
            (this.rtv = e.rtv),
            (this.nominations = e.nominations),
            (this.pool = e.pool),
            this.players.clear());
          for (let t of e.players) this.players.upsert(t);
          for (let [n, r] of Object.entries(e.metas))
            this.players.setMeta(Number(n), r, t);
          for (let [t, n] of Object.entries(e.weapons ?? {}))
            this.players.setWeapon(Number(t), n);
          if (
            ((this.teleported = !0),
            (this.lastSample = null),
            this.spectating !== null &&
              ((this.spectating = null),
              document.body.classList.remove(`mp-spectating`),
              this.specBar.set(null)),
            e.map.name !== this.o.map)
          )
            return this.goto(e.map.name);
          (w({ id: e.room.id, name: e.room.name }),
            this.setChange(e.change),
            this.chat.add({
              kind: `local`,
              text: `Connected to ${e.room.name} (${e.players.length}/${e.room.maxPlayers}) · ${e.map.name}. Y chat · Tab scores · N spectate · type rtv / nominate / timeleft`,
            }),
            this.showVote(),
            (document.title = `${e.map.name} · ${e.room.name}`));
          break;
        case `join`:
          (this.players.upsert(e.player),
            e.quiet ||
              (this.chat.add({
                kind: `server`,
                text: `${e.player.name} joined${e.player.rank ? ` (${e.player.rank.name})` : ``}.`,
              }),
              m(`player_join`)));
          break;
        case `leave`:
          (e.quiet ||
            this.chat.add({
              kind: `server`,
              text: `${e.name} left${e.reason ? ` (${e.reason})` : ``}.`,
            }),
            this.players.remove(e.slot),
            this.spectating === e.slot && this.cycleSpectate(1, !0));
          break;
        case `player`: {
          let t = this.players.players.get(e.slot);
          (t && this.players.upsert({ ...t.info, ...e.patch }),
            e.patch.spec !== void 0 &&
              e.slot === this.spectating &&
              e.patch.spec !== null &&
              this.cycleSpectate(1, !0));
          break;
        }
        case `chat`: {
          e.slot !== void 0 && e.slot !== this.you && m(`chat`);
          let t =
            e.role === void 0
              ? e.slot === void 0
                ? null
                : this.roleOf(e.slot)
              : e.role;
          this.chat.add({
            kind: e.kind,
            text: e.text,
            name: e.name,
            slotColor: e.slot === void 0 ? void 0 : q(e.slot),
            rank: e.rank ?? null,
            ...(e.verified !== void 0 || e.creator !== void 0
              ? {
                  verified: e.verified,
                  creator: e.creator,
                  booster: e.booster,
                  supporter: e.supporter,
                  nameColor: e.nameColor,
                  nameEffect: e.nameEffect,
                  nameColor2: e.nameColor2,
                }
              : e.slot === void 0
                ? {}
                : this.marksOf(e.slot)),
            staff: e.staff === void 0 ? C(t) : e.staff,
          });
          break;
        }
        case `achievement`:
          f(u({ achievements: [e.id] }), l);
          break;
        case `vote`:
          (e.vote.id === this.vote?.id
            ? e.vote.counts.reduce((e, t) => e + t, 0) >
                (this.vote?.counts.reduce((e, t) => e + t, 0) ?? 0) &&
              m(`vote_tick`)
            : m(`vote_open`),
            e.vote.id === this.vote?.id
              ? e.myVote !== void 0 &&
                e.myVote !== null &&
                (this.myVote = e.myVote)
              : (this.myVote = e.myVote ?? null),
            (this.vote = e.vote),
            this.showVote());
          break;
        case `voteEnd`:
          ((this.vote = null), (this.myVote = null), this.menu.hide(`vote`));
          break;
        case `rtv`:
          this.rtv = { count: e.count, needed: e.needed };
          break;
        case `nominations`:
          this.nominations = e.list;
          break;
        case `map`:
          ((this.map = e.map),
            (this.nextMap = e.nextMap),
            e.map.name !== this.o.map && this.goto(e.map.name));
          break;
        case `change`:
          this.setChange(e.change);
          break;
        case `announce`:
          this.announce(e.a);
          break;
        case `kicked`:
          (this.chat.add({ kind: `admin`, text: `Disconnected: ${e.reason}` }),
            this.banner.set(`Disconnected`, e.reason));
          break;
        case `error`:
          (this.chat.add({ kind: `private`, text: e.message }),
            this.banner.set(
              e.code === `full`
                ? `Server full`
                : e.code === `banned`
                  ? `Banned`
                  : `Can't join`,
              e.message,
            ));
      }
    }
    marksOf(e) {
      let t = this.players.players.get(e)?.info;
      return t
        ? {
            verified: t.verified,
            creator: t.creator,
            booster: t.booster,
            supporter: t.supporter,
            nameColor: t.nameColor,
            nameEffect: t.nameEffect,
            nameColor2: t.nameColor2,
            staff: t.staff === void 0 ? C(this.roleOf(e)) : t.staff,
          }
        : {};
    }
    roleOf(e) {
      let t = this.players.players.get(e)?.info;
      return t
        ? t.role === void 0
          ? t.admin
            ? `admin`
            : null
          : t.role
        : null;
    }
    setChange(e) {
      if (
        (e &&
          (e.map !== this.change?.map || e.at !== this.change?.at) &&
          m(`map_change`),
        (this.change = e),
        (this.lastCountdown = -1),
        !e)
      )
        return;
      let t = this.conn.toLocal(e.at);
      setTimeout(
        () => {
          this.change === e && this.goto(e.map);
        },
        Math.max(0, t - Date.now()) + 250,
      );
    }
    goto(t) {
      this.navigating ||
        ((this.navigating = !0),
        this.banner.set(`Loading ${t}…`, this.room?.name ?? ``, `change`),
        this.conn.close(V.MAP_CHANGE),
        e(),
        (location.href = re(this.o.serverId, t)));
    }
    leave() {
      ((this.navigating = !0), this.conn.close(V.LEAVE), w(null));
      let t = new URL(location.href);
      (t.searchParams.delete(`server`), e(), (location.href = t.toString()));
    }
    announce(e) {
      let t = e.style === `autohop` ? `` : ` (${v(e.style)})`,
        n = `${e.map}${e.track ? ` ${y(e.track)}` : ``}`,
        r = _(e.time),
        i = e.rank ? ` · rank #${e.rank}` : ``,
        a = e.prev ? ` (was ${_(e.prev)})` : ``,
        o =
          e.kind === `wr`
            ? `★ NEW WORLD RECORD by ${e.name} on ${n}: ${r}${t}${a}`
            : e.kind === `sr`
              ? `${e.name} set a new server record on ${n}: ${r}${t}${i}${a}`
              : e.kind === `top10`
                ? `${e.name} is now top 10 on ${n}: ${r}${t}${i}`
                : `${e.name} beat their PB on ${n}: ${r}${t}${i}`;
      (this.chat.add({ kind: `announce`, tone: e.kind, text: o }),
        e.kind === `wr` || e.kind === `sr`
          ? ne({
              title: e.kind === `wr` ? `New world record` : `New server record`,
              sub: `${e.name} · ${n} · ${r}${t}`,
              tone: e.kind,
              sound: `achievement`,
              confetti: e.kind === `wr`,
              ms: 6e3,
              key: `ann-${e.kind}-${e.map}-${e.time}`,
            })
          : m(`chat`));
    }
    chatCtx = {
      where: `room`,
      reply: (e, t) => this.chat.add(T(e, t)),
      game: null,
      restart: (e) => this.o.restart(e),
      restartBonus: () => this.o.session.restartBonus(this.chatCtx.reply),
      setStartPoint: () => this.o.session.setStartPoint(this.chatCtx.reply),
      clearStartPoint: () => this.o.session.clearStartPoint(this.chatCtx.reply),
      room: {
        spectating: () => this.spectating !== null,
        stopSpectating: () => this.stopSpectating(),
        spectate: (e) => this.spectateByName(e),
        hidePlayers: (e) => {
          ((this.players.hidden = e ? !this.players.hidden : !1),
            localStorage.setItem($, this.players.hidden ? `1` : `0`),
            this.chat.add({
              kind: `local`,
              text: this.players.hidden
                ? `Other players hidden (!hide to show).`
                : `Other players visible.`,
            }));
        },
        toggleScores: () => this.board.show(!this.board.open),
        openNominateMenu: () => this.openNominateMenu(),
      },
    };
    onChat(e) {
      let n = t(e, this.chatCtx);
      n !== `done` &&
        this.conn.send(
          n === `log`
            ? { t: `chat`, text: e, local: !0 }
            : { t: `chat`, text: e },
        );
    }
    spectateByName(e) {
      if (!e) return this.openSpectateMenu();
      let t = e.toLowerCase(),
        n = [...this.players.players.values()].find(
          (e) => e.slot !== this.you && e.info.name.toLowerCase().startsWith(t),
        );
      n
        ? this.startSpectate(n.slot)
        : this.chat.add({ kind: `local`, text: `No player "${e}".` });
    }
    keydown(e) {
      if (
        this.chat.isOpen ||
        !this.o.input.locked ||
        e.ctrlKey ||
        e.metaKey ||
        e.altKey
      )
        return;
      if (e.code === `Tab`) {
        (e.preventDefault(),
          e.repeat || (this.board.show(!0), this.refreshUi(performance.now())));
        return;
      }
      if (e.repeat) return;
      let t = /^(?:Digit|Numpad)(\d)$/.exec(e.code);
      if (t && this.menu.open) {
        (e.preventDefault(), this.menu.key(Number(t[1])));
        return;
      }
      if (
        (e.code === `KeyY` || e.code === `KeyU`) &&
        !this.o.input.isBound(e.code)
      ) {
        (e.preventDefault(),
          this.o.input.releaseAll(),
          this.chat.open(),
          this.o.input.freeCursor());
        return;
      }
      if (e.code === `KeyN` && !this.o.input.isBound(e.code)) {
        (e.preventDefault(),
          this.menu.id.current === `spec`
            ? this.menu.hide()
            : this.openSpectateMenu());
        return;
      }
      this.spectating !== null &&
        (e.code === `Space` || e.code === `KeyF`) &&
        (e.preventDefault(),
        (this.specMode = this.specMode === `eye` ? `chase` : `eye`),
        this.spec?.snap());
    }
    showVote() {
      let e = this.vote;
      if (!e || e.id === this.voteHidden) return;
      let t = this.menu.id.current !== `vote`,
        n = {
          title:
            e.kind === `rtv`
              ? `Rock the vote: next map`
              : `Vote for the next map`,
          items: e.options.map((t, n) => ({
            label: B(t) ? `Extend map (+${t.minutes} min)` : t.map,
            detail: `${!B(t) && t.tier ? `T${t.tier} · ` : ``}${e.counts[n] ?? 0}`,
            selected: this.myVote === n,
          })),
          footer: `${Math.max(0, Math.ceil((this.conn.toLocal(e.endsAt) - Date.now()) / 1e3))} s left · ${e.counts.reduce((e, t) => e + t, 0)}/${this.players.players.size} voted`,
          exit: `Hide`,
          onPick: (e) => {
            ((this.myVote = e),
              this.conn.send({ t: `vote`, option: e }),
              this.showVote());
          },
          onExit: () => (this.voteHidden = e.id),
        };
      t ? this.menu.show(`vote`, n) : this.menu.update(`vote`, n);
    }
    others() {
      let e = performance.now();
      return [...this.players.players.values()]
        .filter((e) => e.slot !== this.you && e.info.spec === null)
        .map((t) => {
          let n = Q(t, e);
          return {
            slot: t.slot,
            name: t.info.name,
            detail: n && (n.status === 2 || n.status === 3) ? _(n.seconds) : ``,
          };
        });
    }
    openSpectateMenu() {
      let e = this.others().slice(0, 8);
      if (!e.length) {
        this.chat.add({ kind: `local`, text: `Nobody to spectate yet.` });
        return;
      }
      let t = e.map((e) => ({
        label: e.name,
        detail: e.detail,
        selected: e.slot === this.spectating,
      }));
      (this.spectating !== null &&
        t.push({
          label: `Stop spectating (respawn)`,
          detail: ``,
          selected: !1,
        }),
        this.menu.show(`spec`, {
          title: `Spectate`,
          items: t,
          footer: `Mouse 1/2 switch player · Space in-eye / chase`,
          onPick: (t) => {
            (this.menu.hide(),
              t < e.length
                ? this.startSpectate(e[t].slot)
                : this.stopSpectating());
          },
        }));
    }
    openNominateMenu(e = 0) {
      let t = new Set([this.map?.name, ...this.nominations.map((e) => e.map)]),
        n = this.pool.filter((e) => !t.has(e.name)),
        r = Math.max(1, Math.ceil(n.length / 7)),
        i = n.slice(e * 7, e * 7 + 7),
        a = i.map((e) => ({
          label: e.name,
          detail: e.tier ? `T${e.tier}` : ``,
        }));
      (r > 1 && a.push({ label: `More…`, detail: `${e + 1}/${r}` }),
        this.menu.show(`nominate`, {
          title: `Nominate a map`,
          items: a,
          footer: this.nominations.length
            ? `Nominated: ${this.nominations.map((e) => e.map).join(`, `)}`
            : void 0,
          onPick: (t) => {
            if (t >= i.length) return this.openNominateMenu((e + 1) % r);
            (this.menu.hide(),
              this.conn.send({ t: `nominate`, map: i[t].name }));
          },
        }));
    }
    startSpectate(e) {
      if (e === this.you || !this.players.players.has(e)) return;
      let t = this.spectating;
      ((this.spectating = e),
        document.body.classList.add(`mp-spectating`),
        (this.specMode = `eye`),
        this.spec?.snap(),
        this.conn.send({ t: `spec`, target: e }),
        t === null && (this.o.restart(0), this.o.input.releaseAll()),
        this.chat.add({
          kind: `local`,
          text: `Spectating ${this.name(e)}. Mouse 1/2 switch · Space camera · R respawn.`,
        }));
    }
    cycleSpectate(e, t = !1) {
      let n = this.others().map((e) => e.slot);
      if (!n.length) {
        (t || this.spectating !== null) && this.stopSpectating();
        return;
      }
      let r =
        n[
          ((this.spectating === null ? -1 : n.indexOf(this.spectating)) +
            e +
            n.length) %
            n.length
        ] ?? n[0];
      r !== this.spectating && this.startSpectate(r);
    }
    stopSpectating() {
      this.spectating !== null &&
        ((this.spectating = null),
        document.body.classList.remove(`mp-spectating`),
        (this.players.inEye = null),
        this.conn.send({ t: `spec`, target: null }),
        (this.teleported = !0),
        (this.lastSample = null),
        this.specBar.set(null),
        this.o.restart(0));
    }
    timeLeft() {
      if (this.change) return `changing to ${this.change.map}`;
      if (!this.map) return ``;
      let e = this.conn.toLocal(this.map.endsAt) - Date.now();
      if (e <= 0) return `last round`;
      let t = Math.ceil(e / 1e3);
      return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, `0`)} left`;
    }
    summary() {
      return {
        id: this.o.serverId,
        name: this.room?.name ?? this.o.serverId,
        map: this.map?.name ?? this.o.map,
        tier: this.map?.tier ?? null,
        players: this.players.players.size,
        max: this.room?.maxPlayers ?? 0,
        timeLeft: this.timeLeft(),
        rtv: this.rtv,
        spectating: this.spectating !== null,
        status: this.status,
      };
    }
    refreshUi(e) {
      if (this.change && !this.navigating) {
        let e = Math.max(
          0,
          Math.ceil((this.conn.toLocal(this.change.at) - Date.now()) / 1e3),
        );
        (e !== this.lastCountdown &&
          e <= 3 &&
          m(e === 0 ? `countdown_go` : `countdown_tick`),
          (this.lastCountdown = e),
          this.banner.set(
            `Changing map to ${this.change.map} in ${e}…`,
            this.change.tier
              ? `Tier ${this.change.tier} · ${this.room?.name ?? ``}`
              : (this.room?.name ?? ``),
            `change`,
          ));
      }
      if (
        (this.vote && this.menu.id.current === `vote` && this.showVote(),
        this.spectating !== null)
      ) {
        let t = this.players.players.get(this.spectating),
          n = t?.has ? t.state : null,
          r = t ? Q(t, e) : null;
        this.specBar.set(
          t && n
            ? {
                name: t.info.name,
                color: q(t.slot),
                mode: this.specMode === `eye` ? `In-eye` : `Chase`,
                speed: Math.hypot(n.vel[0], n.vel[1]),
                time:
                  r && (r.status === 2 || r.status === 3)
                    ? _(r.seconds)
                    : r?.status === 1
                      ? `start zone`
                      : ``,
              }
            : {
                name: this.name(this.spectating),
                color: `#fff`,
                mode: `waiting for data`,
                speed: 0,
                time: ``,
              },
        );
      }
      this.board.open && this.renderBoard(e);
    }
    renderBoard(e) {
      let t = [],
        n = this.o.session;
      for (let r of this.players.players.values()) {
        let i = r.slot === this.you,
          a = i ? n.runStyle : (k(r.meta?.style ?? -1) ?? r.info.style),
          o = `—`,
          s = `idle`;
        if (r.info.spec !== null || (i && this.spectating !== null)) {
          let e = i ? this.spectating : r.info.spec;
          ((o = `SPEC → ${e === null ? `?` : this.name(e)}`), (s = `spec`));
        } else if (i) {
          let e = n.timer;
          e.status === `running`
            ? ((o = _(e.time())), (s = `running`))
            : e.status === `finished`
              ? ((o = _(e.time())), (s = `finished`))
              : e.inStart && (o = `start zone`);
        } else {
          let t = Q(r, e);
          t?.status === 2
            ? ((o = _(t.seconds)), (s = `running`))
            : t?.status === 3
              ? ((o = _(t.seconds)), (s = `finished`))
              : t?.status === 1 && (o = `start zone`);
        }
        t.push({
          slot: r.slot,
          you: i,
          name: r.info.name,
          color: q(r.slot),
          rank: r.info.rank,
          role: this.roleOf(r.slot),
          ...this.marksOf(r.slot),
          style: a,
          status: o,
          statusKind: s,
          pb: r.info.pb[a] ?? null,
          ping: i ? Math.round(this.conn.rtt) || null : (r.meta?.ping ?? null),
        });
      }
      (t.sort(
        (e, t) =>
          (e.pb ?? 1 / 0) - (t.pb ?? 1 / 0) || e.name.localeCompare(t.name),
      ),
        this.board.render(
          {
            room: this.room?.name ?? this.o.serverId,
            map: this.map?.name ?? this.o.map,
            tier: this.map?.tier ?? null,
            timeLeft: this.timeLeft(),
            players: this.players.players.size,
            max: this.room?.maxPlayers ?? 0,
            nextMap: this.change?.map ?? this.nextMap,
          },
          t,
        ));
    }
  };
function Oe(e) {
  return new De(e);
}
export { Oe as startMultiplayer };
