const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/account-panel-gsGO4Ikn.js",
      "assets/account-panel-CPsaGxem.js",
      "assets/api-B2Jj-kgC.js",
      "assets/dom-CUDFsJPS.js",
      "assets/notify-CvHg_wVW.js",
      "assets/palettes-YJRmTQgw.js",
      "assets/notify-B1xuBBxO.css",
      "assets/account-email-Bsoylshj.js",
      "assets/account-email-Rh3xavDF.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper-DjzSQ1t3.js";
import { i as t, l as n } from "./core-GuI4LXND.js";
import { i as r } from "./api-B2Jj-kgC.js";
import { a as i } from "./dom-CUDFsJPS.js";
import {
  $ as a,
  E as o,
  Q as s,
  _ as c,
  et as l,
  g as u,
  m as d,
  u as f,
  w as p,
} from "./cosmetics-PGh_ZGfu.js";
import { T as m, o as h, w as g } from "./loadout-DopA3xcw.js";
import { c as _, m as v } from "./replay-B40kiN_v.js";
import { p as y, u as b } from "./notify-CvHg_wVW.js";
import { t as x } from "./events-Q3WT0NU4.js";
import { t as S } from "./avatar-kqcwn86P.js";
var C = !1,
  w = () => C;
function T(e) {
  ((C = e), document.body.classList.toggle(`chat-cursor`, e));
}
function E() {
  (T(!1), document.dispatchEvent(new Event(`pointerlockchange`)));
}
function D() {
  return C ? (E(), !0) : !1;
}
var O = 3;
function ee(e, t, n, r = !1) {
  return e < 150 ? !1 : e > (r ? 4 : 10) * Math.max(t, 4) + 25 * n * n;
}
var k = (e, t) => Math.max(Math.abs(e), Math.abs(t)),
  A = (e) => k(e.movementX || 0, e.movementY || 0),
  j = class e {
    static EVENTS = 2048;
    static FRAMES = 240;
    evT = new Float64Array(e.EVENTS);
    evMag = new Float32Array(e.EVENTS);
    evRaw = new Float32Array(e.EVENTS);
    evFlag = new Uint8Array(e.EVENTS);
    evN = new Uint16Array(e.EVENTS);
    evHz = new Float32Array(e.EVENTS);
    evHead = 0;
    frT = new Float64Array(e.FRAMES);
    frDur = new Float32Array(e.FRAMES);
    frAge = new Float32Array(e.FRAMES);
    frHead = 0;
    events = 0;
    samples = 0;
    spikes = 0;
    discards = 0;
    mismatches = 0;
    maxDelta = 0;
    maxSpike = 0;
    framesOver25 = 0;
    framesOver50 = 0;
    maxFrame = 0;
    longTasks = 0;
    maxLongTask = 0;
    lastMotionT = 0;
    lastFrameT = 0;
    motionSinceFrame = !1;
    event(t, n, r, i, a, o = 0) {
      let s = this.evHead;
      ((this.evT[s] = t),
        (this.evMag[s] = n),
        (this.evRaw[s] = r),
        (this.evFlag[s] = i),
        (this.evN[s] = Math.min(65535, a)),
        (this.evHz[s] = o),
        (this.evHead = (s + 1) % e.EVENTS),
        this.events++,
        (this.samples += a),
        n > this.maxDelta && (this.maxDelta = n),
        (this.lastMotionT = t),
        (this.motionSinceFrame = !0));
    }
    spike(e) {
      (this.spikes++, e > this.maxSpike && (this.maxSpike = e));
    }
    frame(t, n, r = !0) {
      let i = this.lastFrameT ? t - this.lastFrameT : 0;
      this.lastFrameT = t;
      let a = this.frHead;
      ((this.frT[a] = t),
        (this.frDur[a] = i),
        (this.frAge[a] = this.motionSinceFrame
          ? Math.max(0, n - this.lastMotionT)
          : -1),
        (this.motionSinceFrame = !1),
        (this.frHead = (a + 1) % e.FRAMES),
        r &&
          (i > 25 && this.framesOver25++,
          i > 50 && this.framesOver50++,
          i > this.maxFrame && (this.maxFrame = i)));
    }
    longTask(e) {
      (this.longTasks++, e > this.maxLongTask && (this.maxLongTask = e));
    }
    rates(t) {
      let n = 0,
        r = 0,
        i = t;
      for (let a = 0; a < e.EVENTS; a++) {
        let e = this.evT[a];
        e > t - 1e3 && (n++, (r += this.evN[a]), e < i && (i = e));
      }
      let a = n === e.EVENTS ? Math.max(1, t - i) : 1e3,
        o = 0;
      for (let n = 0; n < e.FRAMES; n++) this.frT[n] > t - 1e3 && o++;
      return {
        eventHz: Math.round((n * 1e3) / a),
        reportHz: Math.round((r * 1e3) / a),
        frameHz: o,
        pollHz: this.pollHz(t),
      };
    }
    pollHz(t) {
      let n = [];
      for (let r = 0; r < e.EVENTS; r++)
        this.evT[r] > t - 2e3 && this.evHz[r] > 0 && n.push(this.evHz[r]);
      return (
        n.sort((e, t) => e - t),
        n.length ? Math.round(n[n.length >> 1]) : 0
      );
    }
    static pct(e, t) {
      let n = Array.from(e)
        .filter((e) => e > 0)
        .sort((e, t) => e - t);
      return n.length ? n[Math.min(n.length - 1, Math.floor(n.length * t))] : 0;
    }
    reset() {
      for (let e of [
        this.evT,
        this.evMag,
        this.evRaw,
        this.evFlag,
        this.evN,
        this.evHz,
        this.frT,
        this.frDur,
        this.frAge,
      ])
        e.fill(0);
      ((this.evHead = this.frHead = 0),
        (this.events =
          this.samples =
          this.spikes =
          this.discards =
          this.mismatches =
            0),
        (this.maxDelta = this.maxSpike = 0),
        (this.framesOver25 =
          this.framesOver50 =
          this.maxFrame =
          this.longTasks =
          this.maxLongTask =
            0),
        (this.lastMotionT = this.lastFrameT = 0),
        (this.motionSinceFrame = !1));
    }
  },
  te = class {
    enabled = !0;
    outX = 0;
    outY = 0;
    stats = new j();
    tail = new Float64Array(O);
    tailHead = 0;
    lastT = -1;
    lockedAt = -1e9;
    discardNext = !1;
    viewW = 0;
    viewH = 0;
    mags = new Float64Array(64);
    dropX = 0;
    dropY = 0;
    dropMag = 0;
    dropN = 0;
    setView(e, t) {
      ((this.viewW = e > 0 ? e : 0), (this.viewH = t > 0 ? t : 0));
    }
    recentreSized(e, t) {
      return (
        (this.viewW > 0 && Math.abs(e) >= 0.3 * this.viewW) ||
        (this.viewH > 0 && Math.abs(t) >= 0.3 * this.viewH)
      );
    }
    warpBounded(e, t, n, r = 1) {
      return (
        Math.abs(e) <= r * 0.6 * this.viewW + n &&
        Math.abs(t) <= r * 0.6 * this.viewH + n
      );
    }
    rearm(e) {
      ((this.lockedAt = e),
        (this.discardNext = !0),
        (this.lastT = -1),
        this.tail.fill(0),
        (this.dropMag = 0));
    }
    accept(e) {
      (this.pushTail(e), (this.dropMag = 0));
    }
    dropped(e, t, n, r) {
      ((this.dropX = e),
        (this.dropY = t),
        (this.dropMag = n),
        (this.dropN = r));
    }
    refund(e, t, n) {
      if (!this.dropMag || n < 1.5 * this.dropMag) return;
      let r = Math.abs(this.dropX) >= Math.abs(this.dropY);
      (r ? this.dropX : this.dropY) * (r ? e : t) > 0 &&
        ((this.outX += this.dropX),
        (this.outY += this.dropY),
        (this.stats.spikes = Math.max(0, this.stats.spikes - this.dropN)),
        this.accept(this.dropMag));
    }
    pushTail(e) {
      ((this.tail[this.tailHead] = e),
        (this.tailHead = (this.tailHead + 1) % O));
    }
    before(e) {
      return this.tail[(this.tailHead + O - e) % O];
    }
    push(e, t, n, r) {
      if (((this.outX = e), (this.outY = t), !(e || t))) return;
      let i = k(e, t),
        a = r ? r.length : 0,
        o = this.stats,
        s = a > 1 ? r[a - 1].timeStamp - r[0].timeStamp : 0,
        c = s > 0 ? ((a - 1) * 1e3) / s : 0;
      if (!this.enabled) {
        ((this.discardNext = !1), o.event(n, i, i, 0, Math.max(1, a), c));
        return;
      }
      if (this.discardNext || (i >= 150 && n - this.lockedAt < 150)) {
        ((this.discardNext = !1),
          (this.outX = this.outY = 0),
          (this.lastT = n),
          o.discards++,
          o.event(n, 0, i, 2, Math.max(1, a), c));
        return;
      }
      if (a < 2 || !this.addsUp(e, t, r)) {
        let r =
          this.lastT >= 0 ? Math.min(50, Math.max(0.125, n - this.lastT)) : 50;
        ((this.lastT = n), (this.outX = this.outY = 0), this.refund(e, t, i));
        let s = Math.max(this.before(1), this.before(2), this.before(3));
        if (
          ee(i, s, r, this.recentreSized(e, t) && this.warpBounded(e, t, s, 2))
        ) {
          (o.spike(i),
            this.dropped(e, t, i, 1),
            o.event(n, k(this.outX, this.outY), i, 1, Math.max(1, a), c));
          return;
        }
        ((this.outX += e),
          (this.outY += t),
          this.accept(i),
          o.event(n, i, i, 0, Math.max(1, a), c));
        return;
      }
      let l = r,
        u = Math.min(8, Math.max(0.125, s / (a - 1)));
      this.mags.length < a &&
        (this.mags = new Float64Array(Math.max(a, this.mags.length * 2)));
      let d = this.mags;
      for (let e = 0; e < a; e++) d[e] = A(l[e]);
      let f = 0;
      for (let e = 0; e < a; ) {
        this.refund(l[e].movementX || 0, l[e].movementY || 0, d[e]);
        let t = d[e] >= 150 ? this.spikeRun(l, d, e, a, u) : 0;
        if (!t) {
          (this.accept(d[e]), e++);
          continue;
        }
        let n = 0,
          r = 0,
          i = 0;
        for (let a = e; a < e + t; a++)
          ((n += l[a].movementX || 0),
            (r += l[a].movementY || 0),
            o.spike(d[a]),
            d[a] > i && (i = d[a]));
        ((this.outX -= n),
          (this.outY -= r),
          this.dropped(n, r, i, t),
          i > f && (f = i),
          (e += t));
      }
      ((this.lastT = l[a - 1].timeStamp),
        o.event(n, k(this.outX, this.outY), f || i, +!!f, a, c));
    }
    spikeRun(e, t, n, r, i) {
      let a = Math.max(this.before(1), this.before(2), this.before(3)),
        o = 1 / 0,
        s = 0,
        c = 0,
        l = 1,
        u = !0;
      for (let d = 1; d <= 3 && n + d <= r; d++) {
        let f = n + d - 1;
        if (t[f] < 150) return 0;
        (t[f] < o && (o = t[f]),
          (s += e[f].movementX || 0),
          (c += e[f].movementY || 0),
          (u &&= this.warpBounded(
            e[f].movementX || 0,
            e[f].movementY || 0,
            a,
          )));
        let p = f > 0 ? e[f - 1].timeStamp : this.lastT;
        p >= 0 && (l = Math.max(l, Math.min(4, (e[f].timeStamp - p) / i)));
        let m = a;
        for (let e = f + 1; e <= f + O && e < r; e++) t[e] > m && (m = t[e]);
        if (ee(o, m * l, i, u && this.recentreSized(s, c))) return d;
      }
      return 0;
    }
    addsUp(e, t, n) {
      let r = 0,
        i = 0;
      for (let e = 0; e < n.length; e++)
        ((r += n[e].movementX || 0), (i += n[e].movementY || 0));
      return (
        (Math.abs(r - e) <= 1 && Math.abs(i - t) <= 1) ||
        (this.stats.mismatches++, !1)
      );
    }
  },
  ne = [`usp`, `glock`, `knife`],
  re = 8323072,
  ie = (e) => e & 31,
  ae = (e) => ne.includes(n[e] ?? ``),
  oe = 1,
  se = class {
    kept = [];
    queue = [];
    wait = 0;
    prev = null;
    get weapons() {
      return this.kept.map((e) => e.id);
    }
    get modes() {
      return this.kept.map((e) => e.mode);
    }
    get pending() {
      return this.queue.map(ie);
    }
    get queued() {
      return this.queue.length;
    }
    observe(e) {
      if (!e) return;
      let t = this.prev;
      if (
        ((this.prev = e),
        e.flags & 32 &&
          t &&
          (this.kept = this.kept.filter(
            (n) =>
              (n.slot === 1 ? e.primary : e.secondary) !== 0 ||
              (n.slot === 1 ? t.primary : t.secondary) === 0,
          )),
        e.flags & 512)
      ) {
        if (e.active === oe) {
          this.forget();
          return;
        }
        let t = e.primary === e.active ? 1 : e.secondary === e.active ? 2 : 0;
        t &&
          ((this.kept = this.kept.filter((e) => e.slot !== t)),
          this.kept.push({ slot: t, id: e.active, mode: !1 }));
      }
      let n = this.kept.find(
        (t) =>
          t.id === e.active &&
          (t.slot === 1 ? e.primary : e.secondary) === e.active,
      );
      n && (n.mode = e.silencer || e.burst);
    }
    forget() {
      ((this.kept = []), (this.queue = []));
    }
    cancel() {
      this.queue = [];
    }
    restarted(e, t = !1) {
      return (
        (this.prev = null),
        (this.wait = 0),
        (this.queue = this.kept
          .filter((t) => e || ae(t.id))
          .map((e) => e.id | (t ? 32 | (e.mode ? 64 : 0) : 0))),
        this.pending
      );
    }
    next() {
      if (this.wait > 0) return (this.wait--, 0);
      let e = this.queue.shift() ?? 0;
      return (e && (this.wait = 9), e);
    }
  },
  ce = {
    cottontail: `usp`,
    thumper: `glock`,
    jackrabbit: `fiveseven`,
    broadfork: `m3`,
    hedgerow: `xm1014`,
    "seed drill": `p90`,
    seeddrill: `p90`,
    furrow: `ak47`,
    beanpole: `awp`,
    carrot: `knife`,
  },
  le = {
    km45: `usp`,
    "9x19mm": `glock`,
    glock18: `glock`,
    "228compact": `p228`,
    228: `p228`,
    deserteagle: `deagle`,
    nighthawk: `deagle`,
    dualies: `elite`,
    elites: `elite`,
    berettas: `elite`,
    57: `fiveseven`,
    "five-seven": `fiveseven`,
    fn57: `fiveseven`,
    pump: `m3`,
    "12gauge": `m3`,
    autoshotgun: `xm1014`,
    xm: `xm1014`,
    mac: `mac10`,
    mp: `tmp`,
    mp5: `mp5navy`,
    smg: `mp5navy`,
    ump: `ump45`,
    c90: `p90`,
    defender: `galil`,
    clarion: `famas`,
    ak: `ak47`,
    cv47: `ak47`,
    m4: `m4a1`,
    colt: `m4a1`,
    krieg: `sg552`,
    sg: `sg552`,
    bullpup: `aug`,
    schmidt: `scout`,
    magnum: `awp`,
    d3au1: `g3sg1`,
    autosniper: `g3sg1`,
    krieg550: `sg550`,
    para: `m249`,
    machinegun: `m249`,
  };
function ue(e) {
  let t = e
    .trim()
    .toLowerCase()
    .replace(/^weapon_/, ``);
  t =
    ce[t] ?? le[t] ?? le[t.replace(/[\s_-]/g, ``)] ?? t.replace(/[\s_-]/g, ``);
  let r = n.indexOf(t);
  return r > 0 ? r : 0;
}
function de() {
  if (typeof navigator > `u`) return !1;
  let e = /\bFirefox\/(\d+)/.exec(navigator.userAgent);
  return e ? Number(e[1]) >= 152 : /\bChrom(e|ium)\//.test(navigator.userAgent);
}
function fe(e) {
  let t = e;
  return typeof t.getCoalescedEvents == `function`
    ? t.getCoalescedEvents()
    : null;
}
var pe = 2048,
  me = 1024,
  he = 4096,
  ge = 8192,
  _e = {
    forward: 8,
    back: 16,
    left: 512,
    right: me,
    jump: 2,
    duck: 4,
    use: 32,
  };
function M(e) {
  let t = e;
  return (
    !!t &&
    (t.tagName === `INPUT` ||
      t.tagName === `TEXTAREA` ||
      t.isContentEditable === !0)
  );
}
var ve = class {
    canvas;
    settings = { sensitivity: 2, m_yaw: 0.022, m_pitch: 0.022 };
    rawInput = !0;
    pitch = 0;
    yawBase = 0;
    yawCount = 0;
    yawK = 0.044;
    yawEpoch = 0;
    yawKind = 1;
    framesSince = 0;
    eventsSince = 0;
    reportsSince = 0;
    get yaw() {
      return _(this.yawBase, this.yawCount, this.yawK);
    }
    set yaw(e) {
      this.setYaw(e, 5);
    }
    setYaw(e, t) {
      ((this.yawBase = v(e)),
        (this.yawCount = 0),
        (this.yawK = this.settings.sensitivity * this.settings.m_yaw),
        this.yawEpoch++,
        (this.yawKind = t));
    }
    locked = !1;
    lockMode = `none`;
    filter = new te();
    collectReports = !1;
    motionSource = 0;
    onAction = null;
    onKey = null;
    codeBits = new Map();
    codeAction = new Map();
    slot = 0;
    weaponBits = 0;
    give = 0;
    heldCodes = new Set();
    wheelBits = 0;
    constructor(e) {
      ((this.canvas = e),
        this.setBinds(s),
        document.addEventListener(`pointerlockchange`, () => {
          ((this.locked = this.pointerLocked || w()),
            this.pointerLocked
              ? ((this.motionSource = 0), this.filter.rearm(performance.now()))
              : (this.heldCodes.clear(), (this.lockMode = `none`)));
        }),
        document.addEventListener(
          `pointermove`,
          (e) => e.pointerType === `mouse` && this.motion(e, 1),
          { passive: !0 },
        ),
        document.addEventListener(`mousemove`, (e) => this.motion(e, 2), {
          passive: !0,
        }));
      let t = () => this.pointerLocked && this.filter.rearm(performance.now()),
        n = () => this.filter.setView(innerWidth, innerHeight);
      (n(),
        addEventListener(`resize`, () => (n(), t())),
        document.addEventListener(`fullscreenchange`, () => (n(), t())),
        addEventListener(`focus`, t),
        document.addEventListener(
          `visibilitychange`,
          () => document.visibilityState === `visible` && t(),
        ),
        document.addEventListener(
          `wheel`,
          (e) => {
            if (!this.pointerLocked) return;
            let t = e.deltaY === 0 ? (e.shiftKey ? e.deltaX : 0) : e.deltaY;
            if (t === 0) return;
            let n = t < 0 ? `MWheelUp` : `MWheelDown`,
              r =
                (this.codeBits.get(n) ?? 0) |
                (this.codeBits.get(`MouseWheel`) ?? 0);
            this.wheelBits |= r;
            let i = this.codeAction.has(n) ? n : `MouseWheel`,
              a = this.codeAction.get(i);
            a && this.onAction?.(a, i);
          },
          { passive: !0 },
        ),
        document.addEventListener(`mousedown`, (e) => {
          this.pointerLocked && this.press(l(e.button), !1, e);
        }),
        document.addEventListener(`mouseup`, (e) =>
          this.heldCodes.delete(l(e.button)),
        ),
        document.addEventListener(`keydown`, (e) => {
          this.locked && !M(e.target) && this.press(e.code, e.repeat, e);
        }),
        document.addEventListener(`keyup`, (e) =>
          this.heldCodes.delete(e.code),
        ));
    }
    get motionEvent() {
      return this.motionSource === 1
        ? `pointermove`
        : this.motionSource === 2
          ? `mousemove`
          : `none`;
    }
    motion(e, t) {
      if (!this.pointerLocked) return;
      let n = e.movementX || 0,
        r = e.movementY || 0;
      if (!(n || r)) return;
      if (this.motionSource !== t) {
        if (this.motionSource !== 0) return;
        this.motionSource = t;
      }
      let i = this.filter,
        a = t === 1 ? fe(e) : null;
      (i.push(
        n,
        r,
        e.timeStamp,
        t === 1 && (i.enabled || this.collectReports) ? a : null,
      ),
        this.eventsSince++,
        (this.reportsSince += a ? a.length : 1),
        this.look(i.outX, i.outY));
    }
    look(e, t) {
      if (!(e || t)) return;
      let n = this.settings,
        r = n.sensitivity * n.m_yaw;
      if (r !== this.yawK) {
        let e = this.yaw;
        ((this.yawBase = e),
          (this.yawCount = 0),
          (this.yawK = r),
          this.yawEpoch++,
          (this.yawKind = 4));
      }
      ((this.yawCount += e),
        (this.pitch += t * n.sensitivity * n.m_pitch),
        (this.pitch = Math.max(-89, Math.min(89, this.pitch))));
    }
    press(e, t, n) {
      if (this.codeBits.has(e)) {
        (this.heldCodes.add(e), n.preventDefault());
        return;
      }
      if (t) return;
      let r = this.codeAction.get(e);
      r
        ? (n.preventDefault(), this.heldCodes.add(e), this.onAction?.(r, e))
        : this.onKey?.(e);
    }
    actionHeld(e) {
      if (!this.locked) return !1;
      for (let t of this.heldCodes) if (this.codeAction.get(t) === e) return !0;
      return !1;
    }
    setBinds(e) {
      (this.codeBits.clear(), this.codeAction.clear());
      let t = [];
      for (let [n, r] of Object.entries(e)) {
        if (!Array.isArray(r)) continue;
        if (a(n)) {
          t.push([n, r]);
          continue;
        }
        let e = _e[n];
        for (let t of r)
          e
            ? this.codeBits.set(t, (this.codeBits.get(t) ?? 0) | e)
            : this.codeAction.set(t, n);
      }
      for (let [e, n] of t)
        for (let t of n)
          !this.codeBits.has(t) &&
            !this.codeAction.has(t) &&
            this.codeAction.set(t, e);
    }
    requestSlot(e) {
      this.slot = e & 3;
    }
    requestDrop() {
      this.weaponBits |= he;
    }
    requestReload() {
      this.weaponBits |= ge;
    }
    requestGive(e) {
      this.give = e & (re >>> 16);
    }
    releaseAll() {
      (this.heldCodes.clear(),
        (this.wheelBits = 0),
        (this.slot = 0),
        (this.weaponBits = 0));
    }
    get pointerLocked() {
      return document.pointerLockElement === this.canvas;
    }
    freeCursor() {
      this.pointerLocked && (T(!0), document.exitPointerLock());
    }
    recapture() {
      w() &&
        setTimeout(async () => {
          w() && (T(!1), (await this.lock()) || E());
        });
    }
    isBound(e) {
      return this.codeBits.has(e) || this.codeAction.has(e);
    }
    get held() {
      let e = this.wheelBits;
      for (let t of this.heldCodes) e |= this.codeBits.get(t) ?? 0;
      return e;
    }
    async lock() {
      if (this.pointerLocked) return !0;
      if (this.rawInput && (await this.request({ unadjustedMovement: !0 })))
        return ((this.lockMode = de() ? `raw` : `os`), !0);
      let e = await this.request();
      return ((this.lockMode = e ? `os` : `none`), e);
    }
    frame(e) {
      (this.framesSince++,
        this.filter.stats.frame(e, performance.now(), this.locked));
    }
    request(e) {
      return new Promise((t) => {
        let n = !1,
          r = (e) => {
            n ||
              ((n = !0),
              clearTimeout(o),
              document.removeEventListener(`pointerlockchange`, i),
              document.removeEventListener(`pointerlockerror`, a),
              t(e || document.pointerLockElement === this.canvas));
          },
          i = () => document.pointerLockElement === this.canvas && r(!0),
          a = () => r(!1),
          o = setTimeout(() => r(!1), 1500);
        document.addEventListener(`pointerlockchange`, i);
        try {
          let t = e
            ? this.canvas.requestPointerLock(e)
            : this.canvas.requestPointerLock();
          t && typeof t.then == `function`
            ? t.then(
                () => r(!0),
                () => r(!1),
              )
            : document.addEventListener(`pointerlockerror`, a);
        } catch {
          r(!1);
        }
      });
    }
    sample() {
      let e =
        this.held |
        +!!this.actionHeld(`attack`) |
        (this.actionHeld(`attack2`) ? pe : 0) |
        (this.slot << 14) |
        this.weaponBits |
        (this.give << 16);
      ((this.wheelBits = 0),
        (this.slot = 0),
        (this.weaponBits = 0),
        (this.give = 0));
      let t = 0,
        n = 0;
      (e & 8 && (t += 450),
        e & 16 && (t -= 450),
        e & 1024 && (n += 450),
        e & 512 && (n -= 450));
      let r = {
        base: this.yawBase,
        count: this.yawCount,
        k: this.yawK,
        epoch: this.yawEpoch,
        kind: this.yawKind,
        frames: this.framesSince,
        events: this.eventsSince,
        reports: this.reportsSince,
      };
      return (
        (this.framesSince = this.eventsSince = this.reportsSince = 0),
        {
          pitch: this.pitch,
          yaw: this.yaw,
          forwardmove: t,
          sidemove: n,
          buttons: e,
          look: r,
        }
      );
    }
  },
  N = (e, t, n, r = 0, i = 0) => ({
    bus: e,
    gain: t,
    max: n,
    jitter: r,
    gap: i,
  }),
  P = {
    jump: N(`sfx`, 0.3, 2, 0.06, 0.05),
    land_soft: N(`sfx`, 0.45, 2, 0.06, 0.05),
    land_hard: N(`sfx`, 0.85, 2, 0.05, 0.1),
    step_concrete: N(`sfx`, 0.4, 3, 0.07),
    step_metal: N(`sfx`, 0.4, 3, 0.07),
    step_wood: N(`sfx`, 0.42, 3, 0.07),
    step_grass: N(`sfx`, 0.42, 3, 0.07),
    step_tile: N(`sfx`, 0.4, 3, 0.07),
    step_water: N(`sfx`, 0.45, 3, 0.07),
    wind: N(`ambience`, 0.9, 1),
    wind_high: N(`ambience`, 0.6, 1),
    teleport: N(`sfx`, 0.55, 2, 0.04, 0.15),
    boost: N(`sfx`, 0.7, 2, 0.04, 0.2),
    water_enter: N(`sfx`, 0.7, 2, 0.05, 0.3),
    water_exit: N(`sfx`, 0.5, 1, 0.05, 0.4),
    swim: N(`sfx`, 0.45, 2, 0.08),
    start_beep: N(`sfx`, 0.5, 1, 0, 0.1),
    split: N(`sfx`, 0.55, 2, 0),
    finish: N(`sfx`, 0.7, 1, 0),
    finish_pb: N(`sfx`, 0.8, 1, 0),
    finish_wr: N(`sfx`, 0.85, 1, 0),
    rank_up: N(`ui`, 0.75, 1, 0, 1),
    achievement: N(`ui`, 0.75, 1, 0, 1),
    level_up: N(`ui`, 0.75, 1, 0, 1),
    ui_hover: N(`ui`, 0.18, 2, 0.03, 0.035),
    ui_click: N(`ui`, 0.4, 2, 0.02, 0.03),
    ui_confirm: N(`ui`, 0.45, 1, 0, 0.05),
    ui_back: N(`ui`, 0.4, 1, 0, 0.05),
    ui_toggle: N(`ui`, 0.4, 2, 0.02, 0.03),
    ui_error: N(`ui`, 0.45, 1, 0, 0.3),
    ui_card: N(`ui`, 0.4, 2, 0.02, 0.05),
    countdown_tick: N(`ui`, 0.5, 1, 0),
    countdown_go: N(`ui`, 0.6, 1, 0),
    toast_pop: N(`ui`, 0.22, 1, 0.04, 0.15),
    count_tick: N(`ui`, 0.14, 2, 0.01, 0.05),
    stamp: N(`ui`, 0.35, 1, 0.04, 0.1),
    bunny_boing: N(`ui`, 0.14, 1, 0.05, 0.3),
    shine: N(`ui`, 0.18, 1, 0.03, 0.5),
    chat: N(`ui`, 0.35, 2, 0, 0.12),
    player_join: N(`ui`, 0.4, 1, 0, 0.5),
    vote_open: N(`ui`, 0.55, 1, 0, 1),
    vote_tick: N(`ui`, 0.3, 2, 0.03, 0.08),
    map_change: N(`ui`, 0.6, 1, 0, 1),
    carrot_swing: N(`sfx`, 0.45, 2, 0.06, 0.04),
    carrot_stab: N(`sfx`, 0.55, 2, 0.05, 0.04),
    carrot_draw: N(`sfx`, 0.4, 1, 0.03, 0.1),
    impact_metal: N(`sfx`, 0.5, 3, 0.06),
    impact_wood: N(`sfx`, 0.55, 3, 0.06),
    impact_concrete: N(`sfx`, 0.5, 3, 0.06),
    impact_dirt: N(`sfx`, 0.55, 3, 0.06),
    impact_tile: N(`sfx`, 0.45, 3, 0.06),
    shot_pistol: N(`sfx`, 0.55, 3, 0.04),
    shot_sniper: N(`sfx`, 0.7, 2, 0.03),
    gun_draw: N(`sfx`, 0.4, 1, 0.03, 0.1),
    gun_thumper_fire: N(`sfx`, 0.5, 4, 0.04),
    gun_cottontail_fire: N(`sfx`, 0.5, 3, 0.04),
    gun_jackrabbit_fire: N(`sfx`, 0.58, 3, 0.03),
    gun_broadfork_fire: N(`sfx`, 0.62, 2, 0.03),
    gun_hedgerow_fire: N(`sfx`, 0.58, 3, 0.03),
    gun_seeddrill_fire: N(`sfx`, 0.36, 5, 0.05),
    gun_pump: N(`sfx`, 0.45, 1, 0.03, 0.1),
    gun_shell_in: N(`sfx`, 0.42, 2, 0.05, 0.05),
    gun_mag_out: N(`sfx`, 0.4, 1, 0.03, 0.1),
    gun_mag_in: N(`sfx`, 0.45, 1, 0.03, 0.1),
    gun_slide: N(`sfx`, 0.42, 1, 0.03, 0.08),
    gun_bolt: N(`sfx`, 0.42, 1, 0.03, 0.08),
    gun_pod_out: N(`sfx`, 0.4, 1, 0.03, 0.1),
    gun_pod_in: N(`sfx`, 0.45, 1, 0.03, 0.1),
    gun_dry: N(`sfx`, 0.4, 2, 0.04, 0.06),
    gun_pickup: N(`sfx`, 0.45, 1, 0.03, 0.2),
    gun_mode: N(`sfx`, 0.35, 1, 0.02, 0.05),
    gun_cottontail_silenced: N(`sfx`, 0.34, 3, 0.04),
    gun_silencer_twist: N(`sfx`, 0.32, 2, 0.07, 0.05),
    gun_silencer_seat: N(`sfx`, 0.42, 1, 0.03, 0.08),
    gun_silencer_crack: N(`sfx`, 0.42, 1, 0.03, 0.08),
    gun_silencer_off: N(`sfx`, 0.38, 1, 0.03, 0.08),
  },
  ye = Object.keys(P),
  be = [`concrete`, `metal`, `wood`, `grass`, `tile`, `water`],
  xe = {
    concrete: `step_concrete`,
    metal: `step_metal`,
    wood: `step_wood`,
    grass: `step_grass`,
    tile: `step_tile`,
    water: `step_water`,
  },
  Se = {
    sfx: {
      jump: {
        variants: 3,
        durations: [0.17, 0.268, 0.134],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      land_soft: {
        variants: 3,
        durations: [0.139, 0.232, 0.217],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      land_hard: {
        variants: 3,
        durations: [0.261, 0.17, 0.229],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      step_concrete: {
        variants: 4,
        durations: [0.15, 0.14, 0.121, 0.228],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      step_metal: {
        variants: 4,
        durations: [0.167, 0.166, 0.159, 0.19],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      step_wood: {
        variants: 4,
        durations: [0.153, 0.157, 0.121, 0.135],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      step_grass: {
        variants: 4,
        durations: [0.362, 0.353, 0.281, 0.226],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      step_tile: {
        variants: 4,
        durations: [0.101, 0.134, 0.144, 0.162],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      step_water: {
        variants: 4,
        durations: [0.407, 0.296, 0.399, 0.445],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      wind: {
        variants: 1,
        durations: [9.7],
        loop: !0,
        loopStart: 0.1,
        loopEnd: 9.6,
      },
      wind_high: {
        variants: 1,
        durations: [5.7],
        loop: !0,
        loopStart: 0.1,
        loopEnd: 5.6,
      },
      teleport: {
        variants: 2,
        durations: [0.549, 0.5],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      boost: {
        variants: 2,
        durations: [0.549, 0.551],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      water_enter: {
        variants: 2,
        durations: [0.783, 0.928],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      water_exit: {
        variants: 1,
        durations: [0.944],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      swim: {
        variants: 3,
        durations: [0.345, 0.359, 0.215],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      start_beep: {
        variants: 1,
        durations: [0.115],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      split: {
        variants: 1,
        durations: [0.515],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      finish: {
        variants: 1,
        durations: [0.743],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      finish_pb: {
        variants: 1,
        durations: [1.568],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      finish_wr: {
        variants: 1,
        durations: [2.498],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      rank_up: {
        variants: 1,
        durations: [0.843],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      achievement: {
        variants: 1,
        durations: [0.924],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      level_up: {
        variants: 1,
        durations: [0.931],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      ui_hover: {
        variants: 1,
        durations: [0.12],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      ui_click: {
        variants: 1,
        durations: [0.076],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      ui_confirm: {
        variants: 1,
        durations: [0.4],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      ui_back: {
        variants: 1,
        durations: [0.28],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      ui_toggle: {
        variants: 1,
        durations: [0.072],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      ui_error: {
        variants: 1,
        durations: [0.172],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      ui_card: {
        variants: 1,
        durations: [0.182],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      countdown_tick: {
        variants: 1,
        durations: [0.25],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      countdown_go: {
        variants: 1,
        durations: [0.539],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      toast_pop: {
        variants: 1,
        durations: [0.1],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      count_tick: {
        variants: 1,
        durations: [0.06],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      stamp: {
        variants: 1,
        durations: [0.15],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      bunny_boing: {
        variants: 1,
        durations: [0.445],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      shine: {
        variants: 1,
        durations: [0.85],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      chat: {
        variants: 1,
        durations: [0.25],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      player_join: {
        variants: 1,
        durations: [0.698],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      vote_open: {
        variants: 1,
        durations: [0.632],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      vote_tick: {
        variants: 1,
        durations: [0.054],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      map_change: {
        variants: 1,
        durations: [0.654],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      carrot_swing: {
        variants: 3,
        durations: [0.166, 0.163, 0.158],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      carrot_stab: {
        variants: 2,
        durations: [0.373, 0.218],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      carrot_draw: {
        variants: 1,
        durations: [0.542],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      impact_metal: {
        variants: 2,
        durations: [0.349, 0.45],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      impact_wood: {
        variants: 3,
        durations: [0.101, 0.125, 0.137],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      impact_concrete: {
        variants: 2,
        durations: [0.288, 0.315],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      impact_dirt: {
        variants: 1,
        durations: [0.107],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      impact_tile: {
        variants: 2,
        durations: [0.45, 0.45],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      shot_pistol: {
        variants: 2,
        durations: [0.561, 0.495],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      shot_sniper: {
        variants: 2,
        durations: [0.986, 0.685],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_draw: {
        variants: 1,
        durations: [0.372],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_thumper_fire: {
        variants: 2,
        durations: [0.5, 0.5],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_cottontail_fire: {
        variants: 2,
        durations: [0.5, 0.5],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_jackrabbit_fire: {
        variants: 2,
        durations: [0.577, 0.574],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_broadfork_fire: {
        variants: 2,
        durations: [0.39, 0.432],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_hedgerow_fire: {
        variants: 2,
        durations: [0.536, 0.428],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_seeddrill_fire: {
        variants: 3,
        durations: [0.3, 0.3, 0.3],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_pump: {
        variants: 1,
        durations: [0.344],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_shell_in: {
        variants: 2,
        durations: [0.138, 0.27],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_mag_out: {
        variants: 1,
        durations: [0.134],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_mag_in: {
        variants: 1,
        durations: [0.118],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_slide: {
        variants: 1,
        durations: [0.261],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_bolt: {
        variants: 1,
        durations: [0.408],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_pod_out: {
        variants: 1,
        durations: [0.363],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_pod_in: {
        variants: 1,
        durations: [0.229],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_dry: {
        variants: 2,
        durations: [0.141, 0.146],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_pickup: {
        variants: 1,
        durations: [0.375],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_mode: {
        variants: 1,
        durations: [0.076],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_cottontail_silenced: {
        variants: 2,
        durations: [0.45, 0.45],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_silencer_twist: {
        variants: 3,
        durations: [0.245, 0.259, 0.099],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_silencer_seat: {
        variants: 1,
        durations: [0.348],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_silencer_crack: {
        variants: 1,
        durations: [0.245],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
      gun_silencer_off: {
        variants: 1,
        durations: [0.213],
        loop: !1,
        loopStart: 0,
        loopEnd: 0,
      },
    },
    music: [
      {
        id: `menu-drift`,
        title: `Drift (menu)`,
        role: `menu`,
        duration: 113.4,
        bpm: 85,
        loopStart: 0,
        loopEnd: 0,
        credit: `Original, generated with ElevenLabs Music for bunnyhop.lol`,
      },
      {
        id: `game-airstrafe`,
        title: `Airstrafe`,
        role: `game`,
        duration: 128.31,
        bpm: 174,
        loopStart: 0,
        loopEnd: 0,
        credit: `Original, generated with ElevenLabs Music for bunnyhop.lol`,
      },
      {
        id: `game-prestrafe`,
        title: `Prestrafe`,
        role: `game`,
        duration: 127.11,
        bpm: 126,
        loopStart: 0,
        loopEnd: 0,
        credit: `Original, generated with ElevenLabs Music for bunnyhop.lol`,
      },
      {
        id: `game-sync`,
        title: `Sync`,
        role: `game`,
        duration: 127.9,
        bpm: 140,
        loopStart: 0,
        loopEnd: 0,
        credit: `Original, generated with ElevenLabs Music for bunnyhop.lol`,
      },
      {
        id: `game-longjump`,
        title: `Long Jump`,
        role: `game`,
        duration: 127.19,
        bpm: 118,
        loopStart: 0,
        loopEnd: 0,
        credit: `Original, generated with ElevenLabs Music for bunnyhop.lol`,
      },
      {
        id: `game-gain`,
        title: `Gain`,
        role: `game`,
        duration: 127.36,
        bpm: 172,
        loopStart: 0,
        loopEnd: 0,
        credit: `Original, generated with ElevenLabs Music for bunnyhop.lol`,
      },
      {
        id: `game-scroll`,
        title: `Scroll`,
        role: `game`,
        duration: 128.93,
        bpm: 132,
        loopStart: 0,
        loopEnd: 0,
        credit: `Original, generated with ElevenLabs Music for bunnyhop.lol`,
      },
      {
        id: `game-wishdir`,
        title: `Wishdir`,
        role: `game`,
        duration: 129.98,
        bpm: 171.4,
        loopStart: 0,
        loopEnd: 0,
        credit: `Original, generated with ElevenLabs Music for bunnyhop.lol`,
      },
      {
        id: `game-hop`,
        title: `Hop`,
        role: `game`,
        duration: 127.65,
        bpm: 170,
        loopStart: 0,
        loopEnd: 0,
        credit: `Original, generated with ElevenLabs Music for bunnyhop.lol`,
      },
      {
        id: `game-skybox`,
        title: `Skybox`,
        role: `game`,
        duration: 127.24,
        bpm: 88,
        loopStart: 0,
        loopEnd: 0,
        credit: `Original, generated with ElevenLabs Music for bunnyhop.lol`,
      },
      {
        id: `game-lerp`,
        title: `Lerp`,
        role: `game`,
        duration: 125.64,
        bpm: 80,
        loopStart: 0,
        loopEnd: 0,
        credit: `Original, generated with ElevenLabs Music for bunnyhop.lol`,
      },
    ],
    credits: [
      `Sound effects: original, generated with ElevenLabs Sound Effects for bunnyhop.lol`,
      `Music: original, generated with ElevenLabs Music for bunnyhop.lol`,
    ],
  },
  Ce = `/assets/game-airstrafe-CQD_aW95.m4a`,
  we = `/assets/game-airstrafe-D0qZTdr6.webm`,
  Te = `/assets/game-gain-C7KHYg3n.m4a`,
  Ee = `/assets/game-gain-C2PEc3eo.webm`,
  De = `/assets/game-hop-DNzJG4El.m4a`,
  Oe = `/assets/game-hop-DrXXZ2Qz.webm`,
  ke = `/assets/game-lerp-h7zs1Km1.m4a`,
  Ae = `/assets/game-lerp-YUKbZFhU.webm`,
  je = `/assets/game-longjump-CgmuV0Qp.m4a`,
  Me = `/assets/game-longjump-qxU6thXG.webm`,
  Ne = `/assets/game-prestrafe-CG1Cgpvu.m4a`,
  Pe = `/assets/game-prestrafe-DJGFrJVM.webm`,
  Fe = `/assets/game-scroll-Cp3O9M-G.m4a`,
  Ie = `/assets/game-scroll-CdOYtAbC.webm`,
  Le = `/assets/game-skybox-CDsDZzkD.m4a`,
  Re = `/assets/game-skybox-79uYsvqG.webm`,
  ze = `/assets/game-sync-C9lGYuE8.m4a`,
  Be = `/assets/game-sync-BsJr1lm-.webm`,
  Ve = `/assets/game-wishdir-CAMn5oND.m4a`,
  He = `/assets/game-wishdir-CiZb1nrP.webm`,
  Ue = `/assets/menu-drift-C2cnh5Im.m4a`,
  We = `/assets/menu-drift-DLylI0uP.webm`,
  Ge = `/assets/achievement-1-Bs7SZyBv.m4a`,
  Ke = `/assets/achievement-1-B77onqHL.webm`,
  qe = `/assets/boost-1-Cmqhscpj.m4a`,
  Je = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAA6LEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1Osgg517AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiECBaAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC41NTcwMDAwMDAAH0O2dUzp54EAo/qBAACAeIP6PsXM3k9WmEIBQCBaj8mqFvLsWJdIIVkDz+tsU4KL7x2WjAbzuphQ3vYIYHdohwqccjzfHQ70ds76U1PrxrPPz3X6Z8NNSKSnU610PwxNO/rPB9AQ2dc9yzoSjMJTvudAHnbN/hbtnBa+DEIT1TjBdbIzS6P3gQAVgHiXDqG2mwmgriTnP00tdF2xnXscUnJgTncvHFc3dAyuxfB3sQNQ/oFL+UGJm+Vh9yRTO6I82oMu+Kybz23VvtQQJbz+htuAaXadt4PLtErTZCd0CNDEtCwvV2tUmrQvqCfb64OGUCO4VK61Jbcw5Pam/6Oj94EAKYB4hXwS5JNOsmUiGS1PSevuRgn+W9RIQTyxlPSeTyQmFD8tn2L7m1cMDpDvz8ZpD2BW3D7wXF5cPJ4dv3Z0lBOqJAceLi63AAJdylY4C4lNzY2IElRrSyVOW1Dq9xo9Nx9ijXpXklcoQtNGl8UChshSEy+Ro/uBAD2AeJaH/wWujbLiX7lCiOgOtc22LKvkiE8fUyTkO55oEEANBTkQKoN7+s/TtoQy+k2XI6Z3xgfpiUmtrg0Eiy8DU7v9LK05VRmRDKHW6YVHWg+hd4hWewb4uNHLBbvl82iMlJHRRdw2kQzKydihRlsl92/6aqOeLHmj9IEAUYB4la6d68i6i/5wiga5o+Y0gUfSs7FWD7+DhIK7VpFvm4QizZr5bOWzRBTZ29hdUPB2A4gAS491U8wmlvIhEKZH0VyewC3USWdm2hxPsoadcX5G0WbMG8bE+q1abwnBdiemCAhbgOSkghCiQ+ZMm6LOo/aBAGWAeJVLS8Q8hRuY65mvPhsVQJUmwVbIk7Hb2b8O+w/De7njieQzZQxnxKrbX0h1UjWUJsnRjaufr1Lxd2XMOrb29ul5moVbbsoKpchNHtoTPnCAoqPaq1B3w532Pl4D2d5OpwePjHhazkvwkSWxp3jARvM5o/mBAHmAeITQBl3vgpd5GhN80jtbvpMoP32f4braYKFqm9udL+gd2U+RSOCoeQcD4txFFiySAYXkf4URh+LUTVC58uBRhkvyFSf82PbMUh73soQefnqy3z/H/9bhuLvzo7X6gmRAVyE5krdU6qtrUgtZlWwZqdibwGG4o/mBAI2AeISvVlOaaBJY52ZrAEv4tQ4voFTxVvTm6grOnSUjuAtEePT4+Nd56mrFASV2PjYWJzk6HQ4FUHKSpnQWL8BcouH+plRItfXJYlTepjpn5ACiIsci5PGO2A7OVO8sGZVaMXL4nlqaJHKFfuhjOXCtzCX8ktKho/2BAKGAeISEljBY3qUiyzn9XLUN6HD40jx6D4NCcGyXxMwF7cquzb7LuUtM916sfBBPLdwym8vsaDNw/0MzOJOHmx3vVw63wlnwYg/m+2lrn67jpR3Z+w2i4cQ5yoY6cblNiBWc0+3FyhSRha23Jp/qLGu7yOUOsKL9uuA+ZaP1gQC1gHiTo+0xr21Evi43HKORT0L6eLKIb4aevBdbGDt28OrTyLNCljI5I+wQrQ4QriEEUP+D919Oe43JPtDl1Q5aMDLgfWUIsznf242Eno4/V2YtJ2YUmhuhYiyXYiRIRoV+ac3kY89hD6cuUjA0FEWs0N71o/2BAMmAeJOzukqWCx9L4ShLSztDr9U+IKC0+awXYwkR7smggynWVEh8la/Pe1jqcbH2RGSgLdABU8hp7y1IpZHT0fpB3vSlKYwoyKNXRxg6o9XpSKet/NgaMqv0nZOSHdUEceC7Q/JZjR07er62ygZKT4hBTGBEM7MpBQQKkaNAgIEA3YB4ldVR23X57Rhf/WZUT3c9kEbUu5xS2a3cXatvSQCZdAC5Dow+PA8o5a9EgxRkjAK6z9FCmA390XmCJ5D2mc2eT626H/30xsqimKzjSpPw0RDR3SEXPStBh98V4VWbaSJrfujqziYgHnqiEnxfIOOaLmJAF1RUfhLgxv/wo/2BAPGAeJb3oD+nxu406G7OEC3jFLAS45yPMt4+S1qPdzlxyYPIhD84E8u2xKKlZ/d7qse8OCJi5TElaP/azXoL0Id+PdxJ6152KswPGNLQsAWJHcme9BY8I48unwBJX4qTRldajVbUKK2yIcUnzmY9VRXfBNV9yNBVNcslYqP7gQEFgHiXHIyE40/UdetnE48zyx6sPQcv/ou8aYDOHlnxJwO+jRRsOdO9gNZV47qr41xx6niJdsUHYILZrAq7BnXrxRFg0tsIRYsrBPcVBKbDYiEacZ3kNz3sJsxnlXnLgkVbgyAPHbhIt8cNxvrw2uz9ifuM/Ks7/mVQo/iBARmAeJcPR0wXnlCXRJkoWXvI8auDWYVA9rMxX6TgD37G/yUy4ZIJ8TfnDq/U2cUDJ4rPLB8P7Izypomw4R1c20obc6V9kuq8gF1NVBy/2stFkbOLiToVuZCg6S5tbNIEELg8oLGzUcuP2rdflScrpd65WlRpww2j94EBLYB4lncsZRDjnWeJnSRsgfWJJ6GiMD+M21JGo1heGOoGqakhS1C4OXd1nvrAcfg1Am72+85TdENxVgmxtNGPqTLwCB1pDkXWc6/NW481N9twGYkb80URP64OgCwGWr95ElfCtObBdX4mhY6ak/rBnoNdiwjRo/WBAUGAeJTTrFRA1qRYcGyPxyE2KgebGwOSqkbWogybywNL+BhnhnSIlnLsyjN0g5Cwcb5bd6y5kR6sVRS2pjFpX4Y1oaSX6T78dZGUqmt9oC302fVAs5qfarhQxKdLCncEl+fQTYT7M+CSw6xE6HwoKOq6Ug+j9YEBVYB4P1Ye4w7EkLUZBis37aInlrUr7kokTowojiKmD27IRKlmEx7nHP6f1OLAPhH6ETYA11CwlWrN9A1cQx1FWUaRaFtap6rO4i4pRIkQT7+mRddoFrXZftL2SSwTSDpeWrz4Rymh7LtQruZkJt2S25E+K6PrgQFpgHg+vm/8i4vVadWyTJaA1/bo5LjD+7/nz5FvYtQ0vUqDHmSLJtTMuX9kgXI1k7wvMuVkjYXxW7HI6p0SqjJqDgx9MmoZPzs0aN1zlE2OvVbcfNR6OqkL/d21jBkiX79OCPH29dDf3Dej8IEBfYB4PgM5E1UIzJjWmjCIu3f6kHbO5Q2eSexdUV2q3HaA7T4o3antNp32KaeaU1+2hfcVzj+iY9jyX1lbDwq+T/T/2R4UnvE+QHA2+a/X8+4N0lCQQ2AP/riR8Hl3LST7h6fJmhy+fV2bUqqiIGaj64EBkYB4PVZ0uk5pHvbMNuD2y/qqYk0FZUbQVVZhYgHQBA4GBKvm4JDk+UGXjQXxbWnp8AOPz+zLaizxym2MqDS7I/z3ece62HuezAJDydM6P8y9lITjedQf9F8pQtFbIw9Wuyo6L4KUAvObo/GBAaWAeAYQFZu8jMLRKFlSWERCiw9UBXYbhRp+t8+rFfEO2RrX3zTLrsiKnS6TepB5Q17Tt/UanNmqR8PeR4BUmpu38AK28SAaIZdDTQal0ijaeNwyDycIrXn4lbcJG/juIojA+An2Ai7mEFk2DkM6kqPrgQG5gHg7PWqhUqx/Vi+UBax+hECN5hVsB45yZVAR/Jwpl/oqngQHH9nUSK/clb8EWLy7rue7hsFngoX2ntOmHcEr7Ozh5kJAY+nujd8TRmpO4Iuj0AXz1X10rELX9u09guHxcPfpCktjb3mj7IEBzYB4BcakGkaiRkQq99ycWlTnVN2wPC7JT+jVMHWIY6+p6PNj0TQ6rf96UPJnD3QvuzIQX/SPXPG2wW1VYrI2JKYh4x9e5fNnPMDYOX0jn6ip8Az1LJWof8wSSBigvDT9HNVK4DWQqRFtLaPqgQHhgHgFk48TqDfBoapdW6bBRHOmC9X7Y4JwkOVVFBcsC09htYVIrt5QJ3QLLva6Df02qVNHfv8SyX2xtbAAja2/iuBlKgAcuUNoXk0s207QZmwPM9TIOV7uNmS+TwA3qiJRNO117Zq+YqPygQH1gHg0dXkh5/OjOooUmASEGEGR7h+ovahAsTh5IkL1rKmmt0iTZv/02YJ9h1vIMHKoo34B7i627phNzpS3hp5Xd/KTCOAyFRZUmckfIpGPvOyj34Rlb4WyDhcOxr7ppS9aAjNjVJOCwTSpCsIQpoPho+aBAgmAeATBoDdyKWlRQckOb6SiaxzoIPAEGqHEbS1+aRA0YUv16YQFnjFnnyCPvWzJRhqQSqGV8ANLdMheghMkk30nh7Dm1bnJwJCoVbU3sPK9D1bT/SOpkdtQ+Wly01hpOEnsgH+g3qHTgQIdAHgClwARJpOJQejfG8Vqc9gawwiI+bjZshL/iqPy+aZ2gjPzRFDyhX46aMt0akhJ/Z+oXi+bUHh6cwyUugcBHc7FJqww5NhL07QvrlGNaRCbgRB1ooNEqiAcU7trkbuPs4EAt4r3gQHxggGG8IED`,
  Ye = `/assets/boost-2-75U-aWVc.m4a`,
  Xe = `data:video/webm;base64,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`,
  Ze = `/assets/bunny_boing-1-Pada9goL.m4a`,
  Qe = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAA3IEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1Osgg2y7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEB8UAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC40NTMwMDAwMDAAH0O2dUwm54EAo0DYgQAAgPh6l9rUOni+/sF/3205iJzB0lgEcLgbgq17TaNQ37yy4im5GeQAog182Krn9+5BHax9iJFC8/Y4a4rs0ze2mUmwO8x7Xi8wUGZPbFGgFpwnAn9OixcvQEu5Ws4nI8jbAq33gM8R7oTjoDjjSRko8l5uUZ+PLDviRpaoKAWqbOtVNwhXwPsIry1TWSeQtfXkYmBEapNfJEj8HPMqhK1TVgGx0P5IMn6oZ4irSROnLtmCG0qRSKbXqdxXPGYVPRB0/RE+GrSFpSZoGbNyxsVtaGIvxMjMo0CKgQAVgPgN1iyUr5bpaNPGlJcAGdE9moOZwLJ1gkJKhjGTs+LQ6bdrl9/1b0+v45ap7JJwr4V+xHsQBkEmzHPCOuLmS8ZByLPJ2GKbiesJfkMTzYgPBnICf62u+U+4TDqoXNX9WKumI5m7JzRKAb3ZtcKmzr8r4e9XMhftGL8HAUs/0T+84hKBIczoo0CTgQApgPgOaqrH9YRN2c+CgccVHNQNGylpOHKVZvZPk06XZCG0h7WWRolf/AMPa2DYb3hOxW2IvwZ1nlM8BWRWpUIDgGyBaW494UaWmGTr3zr6bPFLexYOpxx34VyRp0cjf6L6J6SqxMQdgdahKQ9pWah/6wr7L+P/Y3GJCMItadmSCTfgVAYWxoGkgzUUQ8129dj6o0CbgQA9gPiW9DcYboiAGLUQp3ISuwhQA60fJo5q7lpXlFfK3Xrs1DVL+RohyjIG8I4NjCC5cK1WjpIgQtSqVuro8Cj9YO9QJOt+vfHDeg4YXG7nSiOozesVtEfdUl/F5r7uugGmderA/J1Y8kQrC28V3XG5rH8HfqGWKioDZjJ9kQFpnQEyX1nwF8vUtn1Klm6lktCKHtKrt39Cb5ejQIqBAFGA+Jbz/qCoPm3pccHXQOwCbR01ymfIvEcR8oUtkDO3cHDcO2zn+b/RAUqXk0xxNO44RGcrfeQfMUVDX+f6hMXmDTjtWG0bvg+ri4/03EqV3D/RAj0I8HEDtWrbI+sUnEDSOG3WMV2SywBCTdwD3k2llK3xFlMw3YsQ6CwYbx6EkcILB2/knXajQI6BAGWA+BfXVPQxH25odePQymVjkqlxHfzOfIvUJnDjntbWmWuHXZ42gFnr1neX4QTURrTJLvVwoIDZw/xIntm8OuluarL8jIHAMg2T1+JDTThezHS5BChxvss/BsUEQLfg5xrn5Kns6anoVcCt64yieoMEBhTtGfskLbNKp0AnzmT0WkeS91jYn/YhVbweo0CKgQB5gPiajSsExN7TS0reqOqTT6LIIcJHL43Q3kd4i+1m/IhUfeOKEROb14KzldgmeTIdrLPm/tAn1ZnPfx5PRVn4f6wBGxaeBN290vEu15+DZ8k3QnOlkuXyEq2SkZiyHWNP+iK4FhqsBVfgAEmfqIYJCuUfgpL3N9dmZjbOdjCwZNUKaM8VYfeSo0CIgQCNgPiai78Rq4SoxyOsvGN4NCi3IbgKU3tjBq9pF/zcoNooI8CvpgFjZxFWR6Wl9Dc1RTFGB5XITlxw4/YMVQ3Lk0nZqU/9WwjNy89QL02Opgt0ArFcZhOnf41qfY2rZWFsKWlUboxXbjPtjeSSXfDzVb0nTsC6+kFJK6wEa3UJAKHTjn9ek6P8gQChgPia2tJBVXhtgGCgYbsWBZYn0D97cmTVLWa5NNuItg60Rs2VKFPfB7xmhS7uvqpguo9Y13PVbue+2q02ehCba8SjLwCaKC5xN8jDS8Hy/f1Gb3bnEvgudWygNOBvBznunAiAiWrACdwuplv90MS0jtOMWrnm2VLXjaP5gQC1gPiaZchuQmqEdeOThgEcFyc5bnCLedegV02eJ42/45rjj3jFxht+IXjFhq1+OwkiPJ8u2ug0fFnPM0Skhez14evkiZT5SllpJ8Qo/Rjl6wUF+G46h5iNsba+KmrKtTHBwWrlthsaN8dxwCoKK2Y30i6p+jPuh6PygQDJgPiXspyBOu4aAuB1J1TTBnd+w48NxTlmVTjkCbAxsPRO31OPM/LNcP4zUHj8GWC/IJax3luwtPycKaCmnD5g35mZKH8jwJE8YM25SRqYjDcT7AEa7L6EStcNxaMKpXJPYsqGwkLfV6vgSTfcoEtko0CPgQDdgPiXaSzr52nI8eZP6gWT1gvVxex69LvHDsdFSVdrPpOezgPrBXIt7Svr9YmR+AAQxkdFe86U0fWaQZSNc/TlAzkNLqR74BxE3VhQslzuUyfxEbNZ8mrBLZy+aDTawZAn5lTYy8cgjZ79bCGFvRl29/LmzkIMfLT/UwLcFiY7tFvggE8zI1b9fZzAlWCj6oEA8YD4JPXmZd3FT6G4eqfIrVMPYxVXbWi1FhpCkFX2KjyQdkVuNwPRoGSML8DzHJmSZycQh42ND9Qr6+H7zyHqfyq68kgFI6fXqYT9AshAEbUHQ8+inr81uBmcjNokkEUTg4nqDxebreaj6oEBBYD4hSLhmrIk2VHmnu0oWHxpLzLWPF2iJrWC/LFUYh2OAmrhlNGu0SNqrAJ5AGjITLg2hex1dhYKtq1bdr7JCviLZweUDDQksXLmFx5LonoILZ/vwTol8Ug7vj7EFI0X4rkNNJKBNM2j7IEBGYD41nZntTN2Y5dCGh56wFD93KXtlEXJWL+jHJ4SqjoQbnDBUT5GGEzxpz8bbD6dCYjUQ0dPnVJKc2RUNYJ+uXzVweWpTx6BEu91/kvMnhOUwQK3Kl7uuDjpANb9iF/a6PizHr4MeS3SN6PpgQEtgPiaeU+geIrmAB7QNL5wC30MMCKuerA9HBzWUhYKv2defe43abtpStC9R6QSu0UPa88AGtxhyEEJ6z5Fy+vh78AMbVA/o+fXE41ztPhGBwvfrdBY1DVdH/dMEJU9Sd5EDlfm8YCBo/KBAUGA+Jg4y6SG/BOaLMGXGOapaOfGR4Az7q2IZl6MLbSdDNDL6546u2kpXOoJY2nYLwLyFtBvrG8d4GT9d3uxB0xTNC9LYPMXhhIIJcAC6GqcgACGKmdjKfu+6acAzYHJhTVsKWb4jfyEXrFqx6CWiESj+oEBVYD4mosvQM0oqDcr+vhEQV+PjbgbPT7XWPunANba/K0RGH4AgDN2gIGaF1yMXQw8oSqA479RmtiLWpy8LgpBTEOKqBEn8HMGcCayWxSiVlRQ3p1ieT9nlvZgwVAvhDI6uaUH9UJ+Eep0zNXL/RQoiEeF/o1YmMGpo+eBAWmA+Jw/LX0LaPy6xKMcG8UjzHlRJa0x8qjbddJTiocc9s5WdY1CUTl0NGcDjItCoUqZ+7+cmtl6YX3HRsAiUz+IeiqOtIU5zXf23yBPSoJ76C0t0xqBGjZyoZ2+fL4w2yTvwdZpo+2BAX2A+JhCYx+QN2j7hKIQakcUlWfp/2rtpNnooDRI59tDXQ+uTlKeWnrtv+HTejhyN5T8w63IKl6sGRiZWH8AVkM9MG+X0f2mXjXgr53L4QA8ZOem/mqmntZ2i8zXihVa0JOC1JdVY4o+eg2Lo+OBAZGA+Jg3paVrYVRe1N2wJ8o5e45QXK3nAPJIJAieXVCN4H6FeDgQ4+HwQl4tFUYNXczVuNvHTk2C+sAkbxWvhFlHmiwkg7sVFBWQxTaHdoyTemdcgxIpunnVgazt0F7+KYijQLKBAaWA+J7rh1fzp11eS95NL1pMR/Yz68yUkvGnEL0vMNKxfL54DahNSAojPK4bWXIH+5ZvY+SQeC/ALGemVBN5e1P7kLi1eiv31EVeupw2X/ksXmVT4mpAqTc5jh9SKiTL7Esdpj29EDUJr16RPfFOEQvO2BgK/zFNIjkuwTbA0PEZePbM9OMqE7PHDH3yuGwAgEfCFVqjd2vUqWMp3Qzge1LljZRtPdwoi6yuBJNmUBNioEC8oUCvgQG5APh9flzK4h6DvdKLC/VZFPqC6Knj2ai5WXrZzerJW9gFQ7pC4mCUtmpMpvW4wc5uxN0RKWY1OInM6FC+x6OSQlrSVw3lOw/e2nB2uy2r/Nx7YxerAkYa62elECHLHzgwanNiwqpsC9eO8kjYDoElG8Ya6KYzoViG9qoIJpLDBVdfu8pclNVIoKtpzBGlf3b0sHrnKnhQq8wAP4eQAMWQ4lWrGSyGbc+bjvvXl5uBDHWihACBsyAcU7trkbuPs4EAt4r3gQHxggGG8IED`,
  $e = `/assets/carrot_draw-1-3OCWzkCf.m4a`,
  et = `/assets/carrot_draw-1-P799wfVw.webm`,
  tt = `/assets/carrot_stab-1-C5X63kmZ.m4a`,
  nt = `data:video/webm;base64,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`,
  rt = `data:audio/mp4;base64,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`,
  it = `data:video/webm;base64,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`,
  at = `data:audio/mp4;base64,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`,
  ot = `data:video/webm;base64,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`,
  st = `data:audio/mp4;base64,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`,
  ct = `data:video/webm;base64,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`,
  lt = `data:audio/mp4;base64,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`,
  ut = `data:video/webm;base64,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`,
  dt = `data:audio/mp4;base64,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`,
  ft = `data:video/webm;base64,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`,
  pt = `data:audio/mp4;base64,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`,
  mt = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAARUEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggQ+7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBRAAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4wNjgwMDAwMDAAH0O2dUKy54EAo0DNgQAAgPi1LFejEr5BWXtupcDY6/60QuI1ua4Lo3I3yyIamVDvFiGlqGqFkI1p/6gdIhdqfYMry/PLEZN+8H9lyfOhHqTOOHBgiZLMvDD8aZZAVeD0ImkuqdghueByBZOdP6iyGvYrCyEEEKXz0f9JQVOe8L9YIInoacx7tyM3gFXFsT5ZL0NBsI8uCB7QWSmA72A8f0nW0+XYQD8DPlcxYXzhBa1L15pJaL0VJCG7Nf13f+24qMVkN6K8TkbZVRuuj7eevDS2K0VWRp7NhKPvgQAVgPixXF6Ql/QjDhEFGix7jHoAgYCAetJqJdkg4B704cyb977tRFP5nu0ZmKq9Kon5lUNEwMh5lNefhldIK2jWmS+skdkg7Gef8i42i46cYYxX48dlAwGiVq+Qpx8s3tc6IwLteTo/nosu8qeGo/CBACmA+K/ot39Bcmt3lyxrtoZYzmbqubhk52DK0/YHVvkF7itvA86atHxjke6fKkaarR5cawzbPAIS97C0bGWmgOmlqOt3rbfzvzR5Dpizgnli3wATwckwvPh4tteaT2TmpeaU2P/g6NPVX0a3FueGoED5oUDsgQA9APi0xWPEd68Gx/0H1IhYpoQMC5/rUUf0CmFdXevLpiyKipKfBhuhAsjAvydRxK7cDdFCU4eemLxagw6IWBP5V0/Hx6Uy6x1jadBG2W+ajoENq+V/moVRTM1NRY080yvOEGjdBwvg5mQphDN0RCLPKtYAAAAAAAAAAAAAAAAALym/AHP7x4OLsp3E4caGq88+ZLjfEN7fY31NfSyX6Bkna8ccJRCFPoyXuV7IFm0gdFYXKrU9VAPIhslUTPfWk/mw8Acq8BgpgAFKJLZXf1nN0zH7WBFAEYI2uPi1Fa8N1Dd8AeqmEDS2+ISbgQd1ooQAzf5gHFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  ht = `/assets/countdown_go-1-C4AOIf7C.m4a`,
  gt = `/assets/countdown_go-1-Oyv-WtN5.webm`,
  _t = `data:audio/mp4;base64,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`,
  vt = `data:video/webm;base64,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`,
  yt = `/assets/finish-1-D3AdULFY.m4a`,
  bt = `/assets/finish-1-CGqJnvHc.webm`,
  xt = `/assets/finish_pb-1-CQCxrA9Y.m4a`,
  St = `/assets/finish_pb-1-C7bBJOY2.webm`,
  Ct = `/assets/finish_wr-1-BCzyLjZb.m4a`,
  wt = `/assets/finish_wr-1-BvBXqm46.webm`,
  Tt = `/assets/gun_bolt-1-DY80pe4d.m4a`,
  Et = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAA7lEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1Osgg7P7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEB6AAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC40MTYwMDAwMDAAH0O2dU1D54EAo0DYgQAAgPh/YjpTc0qx0HKLHHh3/f/UH7q1DyuG2UCd/+DYT1kdNtSzDa+3wXzc/2IxwxrWluMOVx2a1ExkLMLjN2Wz+UwvIQhrLi/cK4qk11U8UaH7FoYXXYGIxM1/ZhWmLFeb1gM0s7APDNHnmrcZwRjVQ/uHveZ3i7cfjMhyCwXXJN/8hiXvcH8e6pYuFkE1jq8zYfIxEGkR8Un5T5aHhHlLHrz+nihXnwLyoizxF+NZeondK051Fu1vqN+ivyf6orWF1LIQk24gg794FeN53COYvvm3E079o0DkgQAVgPhxYe4M/MeXjjZuGtDtjX2HnlXZlQaZ1DuH36B65D4f2xYXFiYL69rLwJzBop6e2XYYHxXHZK2kOPlnTgKKU+MN1IO38Cif9nwQLJcxOJ9NrUbqHeXiRj+rQH1s0u2X3rkUxbY1bcLhzgD3tYindObtiSO3im8hpngxH8Y9HeP5SIb4IAXj6SCCGZ+xpFYmTJDFEwz75E50SoVYs/0ZGDpFZy4bljsa7ZF6n9eVAA7janDrcNgM3c5p0wCMpZPiVSNNqIhdG8pEEov1ThARHU/a1j9ckvKzVLyvuabj7qTdo0CcgQApgPhxfQD4Yx42TjEiFIm6DFbYrBX/OGf/QWhJS/DvO9e1HorkMJUOjrnoGbEl1WvchjNGApKM5KInXmbSiXMNd7xWKuQvk96Wthktod/tHA+aoYKuCFmthnOnxiJEUaOr8MfAs8pgMqpgbU9eZJA9QXYkWoMnHf3rzyKGD4cm1c+KWOyC0Kr1r2N1XsMzY+TkoPDd7ftopT/fo0DVgQA9gPh3Oqia1Zndm7go0nLw6JQP5tgO4/9nXmmC6Ep/56QAJHr5FDFyii9tBiitaBnrBprvmz8m5yWzs2P8UejcgYgFKRca/CyuKvjcy/YMkAD5DCymIOVHZ1TEV8F33CZWXJYMGDplMXzvUAcP7yh3mtSxlz+qmd+/q1EoUMa8bZ/aIUe5Ptk3/rUIIgvI0EodVVuEAUCzqlSaSSbhCk6BXslsTAxa3c94DRRUbV2uybpGIEptZfUjbSVfFoOUQ+g3lOg/3M135QcEVD0fWF6m05Zao0CAgQBRgPgLp26+4f9qQKzaWMIll9wi1K+OD1PvKH7ROLO1GMBQW2frgj8axTpOIdSaUJsS0axgCjGtuk6IYHpKCjtDQJwvd+r+pAlwUF2EUczHA46YnemeFslUewn2HyWdjXVYL2YEXpf54V8YpSDOw1T+oQ4xP14upBjF9UeCBUWjQL6BAGWA+HP/KgYz9pKbmZZ+MX4WtDUIyMJ+fP2H+iYqe9Hm7zXapWWpKLibbTviNlKpnkhy8aYCHyiuHk9yNCSliK9iZYjIxShqmn01wJSMz/qvvT8dfUyccFiJdo384OStZKD1/sdonz8OGZUy3CRgln1wejhuDfcZfJk+GsQEjKHc7n3Xl7UxFdQaic5a/wZvWILorn1X9yhx6eHUirf6TLfOt5CrlTUOa5+68vJ+ZAL2js90AQWMMalgoYeto+eBAHmA+FqBQyIL1Eyzak7coUtTjl327lfbO2+vVdgOBNtH31T+wbJN1FZya85OPM/W1Q7Y5AnUuH0hlsCF567nzPwLkqiqkXEKdVnbHabRzVEr3yim5IDUp03/SpsRibfyyf2GOk+Oo0DEgQCNgPh0Jrk1gfwLGd0TxcmXmgzE6QS+XTCfSA5dkdrzS/U832MBp5pR6/NRPDhlixIcsZyR+YS9i3uSDMSztTZdaXHHar/Z/G7nSamSjGnjIkkQX906t/GVRez9OpcX2QQYd6EOBNpS0W3GM9dGYFP15nkzELBI2UHKbQMfh1ElpQ47tYGA/tnEGAp7rpAtzVhKFjH6jcR5HIEbZODPnpW1+jObsgPwbYyJ8Y0nOk3MXSCE0KIPL4lleAtpnXtqzCyjfaNArYEAoYD4e4kf56icdgnd7IooMZW1xaqaiBmeQ/GZVlze3hrVd3Qz8hdmhN6PlvIbbAqP+76oXCVPh+0BVkGMtNct2JAM/+S1XkdUq3/kS+/rdma7DxrSraOUfpSn3EY2qEokf5lJSRan33ncS15ZwVh16goVSqoPRDxsslP5X3ygNGex+YI/0dK/oy5a9YXYC3Q0aIpr8rM6yMg2fVRKKDHCOoT6JvUB9fwD+mnbo+uBALWA+F4/w0rPzIwR4GR9lTWvprT6O/JlSQYoXbmyc5NUTpMgtS+I8Bz2XMT0UKsZIF9BmoUcj4NwW7KQjnuWlmndpS/3lXfxzCNPSrSLDGy3Lt0ZS4UgNy5XfmF8LRchS17Jyjw3phCOqqPSgQDJgPhZonCT7M5UfbubBrd3ZgFfOfmbdbo/cbVsIKRvQlXruGNdN/RexzLa0j84+R2cqcVMEOuhOlzJFXs+qjhJjsWBsZvb32PGaZU3D1tGUaPSgQDdgPhR/V4YAnbBzlx+gsG21leDvfo107M3yd9wQ9N9Nh80qjbW445NJz+GCjLMDdafXwm84AJ1ZJJuyvI6Ry/h1T1H7X+44/1ulcxYkymUIKPNgQDxgPhTrJKfESaw5tCAgA0acJ0nK8iLkXlUhAr1f8nJQK+VkPYK88kLoDrhcAhH/CnS7gFoZnFwTW45wPRhnYPeVG4O8osVNEoRwpij5IEBBYD4Wc58u3JdLXSb9bqZOZYotvhWZXz7qJMAoPqWzFaWl9eT06Hz+mzhz2Wap8HEr6fK5EUOhABHuuRoIP/g/XZ6eY7KQ/FiGDmKMZsKod91Etn/GVpPUq8/zutWHHAhfG2jQNmBARmA+HionKeHHEFIWWGMqcjweIOuZXpwtLTQGL4mRzMbT+1lb8l35FkeRrRUIs2gNqO7LePgFREiDuGNV4pu8MOA7HH82B7zhF8B4NKz7WHI15Mew891ylhjeeBrlohPsVQcaUZhUUmv66FVfCnPb2lW+TN+p/xvDWaQ05N8utMxGDLHyqqJ7STTbNdneX8X6hWmVJi5wiAJuRdLRDEdBMfWYVLogTttLprjHO/fT9NTJRUDJWge30QRLXidPbSFr/iF3e31teLyQ/XyJJK1IfDIyzQxDq9uo0DCgQEtgPh7qAP1dk/vPtQNrYZMtSNR9traKhwInaUYiOhbxTE1f+i/I77GvqzEFPJTdqQgkUE5pfs1R5GlHUf6pd96HFUHoeTI2hR/FnzVfQvxdDF4ycTJgc3BN9XAk88okp/IGciLvxjMkF5udJD530W2YCUwkI8kYNlSKD60LDSXNBARK+7KPu/DqHGba7GoOGSB6Y8L+QJ4AHfgLJsZM7l0lam+x48LPa0GP0zOw0fHvrkDoBbGSQAmhzcEPPo9AiOjQOGBAUGA+Hj0MAwC1UIR8BJGvChabBYPFcoZgtvQYP8FmyVyVFgpedtUVMb+NAnegB93KaJfmz5EQUKLHVr3BLuNhW/VrVXF/GwXUdXEI3ADY4wOPgJ8FLx4RiTSAxRU0NCY393aqmBZl9J4IidO1IW683qdk5bHbl48zmeehxOKoEQ2ejkv0R6YNinAzu/7/+FESfpN5DmTpt6Daz2IVmuPmSGs9n45K1rU+L3Cj2QsXg1YbytppBq9YpkX6RzazfWKnP1bPm7SDvaajA67BtzEOcxb0k2iivsJb9WDkNDWCL2jQKWBAVWA+HuVYlnuBZ+uAiJTXw1Im8UyeFPcTjVcF76lviCi0QHcJTQqkNA1SJfsS9Bwy8FONlDDo/OchtAWCUpiqU6h1HEscRmt2UWmmSU0QITkmEG389RucYrHkKHbT/w2h2i1c7nkmS/ZxL2XVOPUYJly56psfa1ln0ZQ4qFbPjCQoP/9rdP5hplXWi80FX1ZAE30ZYQcOZgv2UyTPKqCE1alK2qjz4EBaYD4WigkjCXPfd09CP8KTnzLv8DLjdE/RLBUeO2zCcf6TJLHEBdfllqqsj1v10bxhzyyhHVUs7VZ4R4fvqzhzfU0OAUsacJD1JFdjl6jQNKBAX2A+J8QHSWVj+D7t0WEnwDlRx3fxUOZezkjSJSxzb23Zf7R3KT3VbkzRBpNgvyNLd6O8H7a9RrrWqNgFFGMpLJSOMDvGMHFEAvY6a44+vFONQv57RRsfxLrsBq9oI64AmBMnyXzTaROv1CJHR32P199BiNzfcB0d5vA1DzJolwZpVU6iLGqY6SzZQ7NLJFSI5OmZw7/7UMiYUAFXr+/lItaG+3TzrUpZEg4HtnfQawIdxPZYHwetnEon7Ooci1UXOT3dF0n9Sla52yn8FRUXTmgQMOhQLeBAZEA+H1+SPODo6TswPzTmUUJ7CkD2KXHEHy7I+PVSTZDrTldtKm5L1h+vcU1GGvG/OGzXg4k7qj2MmlcWijj7AkBuJpopA/DDeVBgugjO+k7MovKrmlSTzGp8F04mU+/328+rTn0xu7x5+DI18J721TGL5nCXLyYfEKf5kr02Px2NZe1e6IHh/NglGjRFvHqe2JlRQoF7ULmm8hs1qWugAEqnxa1SJDwAODSomcjK2ntfmji5BGbgQ91ooNT7GAcU7trkbuPs4EAt4r3gQHxggGG8IED`,
  Dt = `/assets/gun_broadfork_fire-1-cliiPtEe.m4a`,
  Ot = `data:video/webm;base64,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`,
  kt = `/assets/gun_broadfork_fire-2-C123dhnH.m4a`,
  At = `data:video/webm;base64,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`,
  jt = `/assets/gun_cottontail_fire-1-BVB6K4Xx.m4a`,
  Mt = `data:video/webm;base64,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`,
  Nt = `/assets/gun_cottontail_fire-2-tUI_iX58.m4a`,
  Pt = `data:video/webm;base64,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`,
  Ft = `/assets/gun_cottontail_silenced-1-CGLPxuyC.m4a`,
  It = `data:video/webm;base64,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`,
  Lt = `/assets/gun_cottontail_silenced-2-DOoJKmPw.m4a`,
  Rt = `data:video/webm;base64,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`,
  zt = `/assets/gun_draw-1-BK2ZBA4p.m4a`,
  Bt = `data:video/webm;base64,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`,
  Vt = `data:audio/mp4;base64,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`,
  Ht = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAViEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggVM7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBigAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNDgwMDAwMDAAH0O2dUPA54EAo0B/gQAAgHiBqDil3FkHPNnc8gAcKduQe+Z1ejv0tgIa5qlKMyPwTemlbSPKdMg/1MChBEmidJnAvD89NnpBYUJ57rEi/VyFqADFfgynXC8CQCzh9teh0BmDp3NGY0MhILZKiv1pYuPl3TuBXIglq1+iXuf8qowa1Q9ZnVxR2N1w6KNAg4EAFYB4j5BsMJMG5IdVn/LAWyv0JGyccB4GCf9vjlKz6p4fcw3gYPWMrBIQCPTv0aoBGUY1CGYAivy6bc5xk6/ftax0GsGYazCpfUX4pTaAT4jd5QdEUwta3bsa94PbsuuBnpTaLLpEui9urkBwQ8BxYD6Mz2eFWPyDj7UQLrAmJCe4o0CDgQApgHiEHd2rpHgPjjzvMM4abLz2SdL3CzXsJnXMiaEKnLAQ6DVu9Vq7eDmCtmhRBNS2ZluADNo6woeUSAJjGtLQNFn4TEO93p4yReTE6qT0rCHJf3bcaBBtSzChrWsILV+M5o18YCX6t4MLW9ymIH2fUA/n3UY2saNCrbJL5Qb8pnejQH+BAD2AeJe0H14LVp9ezBVrefX9jgRdDCbNHP2s/nRZVYSuMyE5q1uYYsqTjR71wLMzCXnRKqRO9zTF6s3jmn/bqaxzK/0/x2UMOYfNQRoaibYaJ2CuYer3Q6jX/oJB87wsBLeGJwNKLBbqOrlomRUzlMQk7yzkwjvDttH+dn4Qo/uBAFGAeJUjwsfiGdCby49Z0zE+xzWZPPreLvIQ56/qsv5F0vCBtpim30mQAmJ1VOfx4j7Qc33uvjwo+yt6JLTHK7irR61vXX+JUZFGrqTmwih8cWWquxityfaYG+ZUEDjwCEzvdl0lveRhzDikG4QLx9vRIdNqNbV/abSj7YEAZYB4PaZyCKDEggHv8xvUAZ/botowd9L/0KqbEK2voCqtMr71IU9+u1UTN1rmOtM76E4chzEjaAdwFBXL0Ikhy519OpDCYVRhG2dGRzAbjB4czVjzl8k9lvSqxnHOccKH33fsuLsI4jmTXWaj7oEAeYB4BcFJWArbo31di1O8c1y4M948Fu8PidZ2Q4hq/M93w+FHqP7vw3WX46Qg9nUCS9EF1bLRhrH93t19nEWSP5MZeW9exdbIq96ezEpa0ai20wZ/ruL7zvVJ313fMWJr7ULqSLZzVr0rawTLoM+hw4EAjQB4I7MBL14MHQUuAbgV72s/h+sVc5bJY2Rbkcr6xWm0TPla4kzdL94RqYmT3MpL7IASFT3zzqAk29Nvqmm8H0qbgQd1ooQAvw2BHFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  Ut = `data:audio/mp4;base64,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`,
  Wt = `data:video/webm;base64,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`,
  Gt = `/assets/gun_hedgerow_fire-1-Da10KkmY.m4a`,
  Kt = `data:video/webm;base64,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`,
  qt = `/assets/gun_hedgerow_fire-2-BYO9oQ5g.m4a`,
  Jt = `data:video/webm;base64,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`,
  Yt = `/assets/gun_jackrabbit_fire-1-xsXcRQrp.m4a`,
  Xt = `data:video/webm;base64,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`,
  Zt = `/assets/gun_jackrabbit_fire-2-DnRrVzOs.m4a`,
  Qt = `data:video/webm;base64,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`,
  $t = `data:audio/mp4;base64,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`,
  en = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAATNEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggS37AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBfgAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xMjYwMDAwMDAAH0O2dUMr54EAo/uBAACAeIA9mTzO4AiihIBPB4sADJGuQdIczwXY1M6SOIfTrullle3xnqocgHswiOewSx0Zj2O+8qk6l8IGw/2y1tjZ8+sDytw8NNHB9LE5nRaTxF4LiEStwfF5EcY6lLWhF5K+1r4DkvXqjt7MJEdTJW4wwlnvOfT2sfujQICBABWAeIJ+gNb82lnQJ2OdRopYAPrTV4SlbFHV463tGBR1v7pMoauXi9810EPcSQ64m21nUC3Oolin5M/KSgn3/obXiNKT+Pla95QbnmhWXYh3i5UtxkuUud6PNtKr5cqxAICc9Ys7aOFrs0j5pmwFHTqld+lKcfp2etGj7KqV+aP0gQApgHiFK0FkQb6qkXMT64PB9wny20k2reRuTxaHppjq9xwuuBM81ZRoucp1JLIynXKelIA6qLg2QDejzroI9uUEvUWHXlOjlpNpEkdVmXoJy93cj5/e7bD1WQAx0jH58In1/+KiG80vA2P6es+uGMyRMnSj8YEAPYB4hMXANZb8AAYA6nYfgeo6xAtt5T4jpWIPh95HR1xHqdBnIXGQv74l+dv6ArgohT1vVmzImMM9kDY+oWN0IBLxMDP+PRiQWgumODP3Wth/a9vLih1PjFbljoZ2+Q0E+XPlPWCLzIB1vnFLT6too0B/gQBRgHiCvz19IW/axY5ofA32GTJZmGFr1H3YPXksWjKjc8iwQwV/HMG+yFwUY4gQ/jEoUkZC+hNny9Sykv1BYqjoGC0MkFN/va6HT/f+wQOW5tLmsHOkNiWRHkjQLUFr53dNkhrsG912VQdZPoMCaMPmS8OtvoKeU5SENqVyKqPtgQBlgHgFqT1sZw8xPex597Ru+hWxYpdWGbPi/njco3TuFTgdyvsD5feWE+e1HPil9YwtnEb1ChpxnOGs6V3wW72yYtOFMBvmL210+QPjNu0cQe9xCLuGRhRqLTkzmQU+AfM4RrjM9dI6buknUaDMocCBAHkAeBpEA5vaq1Vi7CB9TABZicgNCAY3yPXbzyXpSwqd7T1z8f8dcIYj/EGz90BoY5Q6WGMA3hQI+nqg6A/Om4EFdaKEAOyC4BxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  tn = `data:audio/mp4;base64,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`,
  nn = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAUFEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggTv7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBhwAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNDIwMDAwMDAAH0O2dUNj54EAo+WBAACAeIAxJhucYFsc243G90udLvQbmUmk+CeB6DPULGNUJ0Ss04Xgb5vHMFGNGOEkxt56AU2150TY9N7BDXrCYO9k7+0CRMPGrkIcJQArQNUy4ZILOml9ZNrAQ1aFWcurZD7AjKNAg4EAFYB4gi06OZRdXhQ3lAhzw6H1rNZgzfmg4oucxHA0dHWFrqPIRh7QCZx6m4ET1P+wuMzGrnr8DzVep0BFWXj0FKg37TMhRZGr0m5FpGl6NNWJemm6rSwECdJh6Tl1Sc0xeYwxM/rAf+8sIBG0Wta/fGLaRA2S8zwfPBoY/mrmtHQlo/2BACmAeINukifXU8UokrYA77Fc/cZJXQEkwNjr2vAnp6H0uLHsUkL6ZYOFv9++r2MbtRdv3Y0xxEkcVBJCDoCqDKxbisqBmI8MBqzOpVezTD+ih7/BkQGljhBBvYGOLDrYDJ/CuXd4adeIKCPfFr1JhscuD4n1QH6G/ecdLKP0gQA9gHiEgKiC1OfNG6rg+iy50CQJmYzdwXmLojvzmjx+IV3fM5q50+zcyZ0/SAt4VSQeovH4JTYVh0bN4YcOJUA6xOdGXenIx3VGIhbhtwxTUAMwum6opKqyYTbRXGnfyZ2R7KDEt8o3SiKX5nAKgthzvSmj9YEAUYB4hOR7AZf+efeWR7Yd/iUQwRYQHGRc7BArPxfAEEClY8sYnyAtqgEoj3OgP+JqaZre5CX2gJcQEObMvgjGXpFf9RN3NT9PLnMnTV3mRumdizJonBY9ccaI8uv4qDbQ1QxLrWIeFtozo23emqt9KTNh0aPigQBlgHiTcQCloZLBOX5bdX1T/jmyVJYT6DnP4IYOKNGM2TCtssQ++fwR6T2zxoC14c4/KDxSQrN/CXEUFYkESqO/h89phahXJSZwBJeETHIysZzkUllxMnYStLwO1bZMbHij0oEAeYB4BZEgDqY2H8XMtJ2JLXmElxbRmW13AAF1DkNHzXdaBwUK7p1jNFL2zOcsiBu3Dttjj4/dRAwYWWlWl7KUPUjlvqTXgVy+296dwbwnBTagzaHBgQCNAHgT+hAYkVodv/GJsGKAevC1LVnMFK1o7bwhc1iBbzN3VAAACSsByuBkDKoAR/yTPN/VMKodsPvCqn/6uACbgQF1ooQBKYvgHFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  rn = `data:audio/mp4;base64,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`,
  an = `data:video/webm;base64,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`,
  on = `/assets/gun_pickup-1-B9G59asK.m4a`,
  sn = `data:video/webm;base64,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`,
  cn = `data:audio/mp4;base64,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`,
  ln = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAcREU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1Osggb77AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBtoAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4yMzcwMDAwMDAAH0O2dUVv54EAo+6BAACAeIAkWVeoI1Tqyt9faZGlNz0wIhp3iEVGu6lTOmovp1iAqwfZZLez0/zIJfdh100UVbC3u+P2smkly/e4N4MxctDWwbfx6ka5L91SBaL5EcVsr8OXH5q+CKtKBSiXbqY1n3PPsUrQN0a5vKPsgQAVgHgFwEACcE9RN3c6vGmXQJe+6k06kTHnkDj906iTZ0wTrn55vTCABEp78DfyCeSRdZRn1vssibV0gyjobvAOjvQBFDQK4fmUyD488lKFXKkx8pwu85jChnOv5LeDB5fQmOLki520cH0Mo+qBACmAeB24n/CSpfCXu3CWNwUJalOJY0BvKt8hHWYwgEwawQqsTbX1iT6V2nhB5A+JoW+I+t19lZEUGXQ4DHf7Lvzsxr2NIdY2QYcLGNd4Tyu9+DGRIltwNSlBQ8E4Sw3Lb68OVUWzo6Jeo92BAD2AeBEjv8wKgNk4PNimG7htFSUZUckHe5864GExM4wIhGiQ61ptDMnE1mLS3Nm0ZF49pzGyGODg4sSzVLL/OuJHpt4NuAAYuP61ur+bEu0ga1LAO2Bnd8XoteOj44EAUYB4DHXOdCk+3PIs3ZemkknV2NNz62Liz9HbGOGcWnXLb0IqnmDNfjRKDSYnc4WYUYwy62ogGAnX5nLRLG+VTaQomCM7V5EKUMrWcNnsSIWwE+E6u17T6JOCCb36bAaFOaP8gQBlgHiAI9hVGISjH3jdsdzj+yj9r7VdEkPhg81OlXdiUBJ1pWhWvLSFcR0z5AQtD8jTPxJ4ru7ynjtjDCaE9H9OV6mT87BTRTDny7/Igxb4BJDDzNJl0nrmlypGZU+RFW9cXew4Wt4e4Evz8GwJEOQBvt0rQPGtT43JZ6NAgYEAeYB4goVvfVYHRFnsOEFuNSA7phjSshtHH7/KzauroS3U1BcAqFy6Lln+cVbHWT5Rw73rTBdwxAMG0hMGo7IzFcS3TtLhDM0ozffRV17T/Q30HdOpy3e1KSOpQgXCnK7UWZYK/nA2oYFYb4ZqL1ezJMw8EbdUFtKsmUGReAjqz6NAiIEAjYB4grNvHUbo11iUDppDzhl1CEY17z6KneQ75RmdAaEoJKzoPdny08IAyIzc4ZxnxYSEKQYrcgWtx38gKf94g1DPAm57P9D7/A1ryYnc/HTEgO1RwvENExmO+aBF0YEo4Kt/PM3OroDkcEkL9LxE4lDxfn/O0o2gxCmEIsHuqpM2eAzrC5ejQIWBAKGAeIRXEij56ESs75A5PkbF1hQTCtWoZ5FG3DcvUv3Prb3JCByUJIpcyQiAq2QQlBZQKr4RpziCfra3p4bZjbmJNbeA7ZseyDpjnC2xjlyUufZfWaMnnuSOqp7/0B8vWDv2yVScY1jt9EyIkvs+68VgoSzHmZGghxDerRetLnhXyXP0o+iBALWAeJZp0Kah5qRJjOiWe6deRBYQB0EGPQV63PbSOTnzVpo3pMQPh/0LTGYsqcXzDI/Zptit6kFqoNG3CBURF+4AiUdq/GT3u4JinDzklg0aVxFac5rckdnwtFpy+8YiXZcBM12OdKP9gQDJgHiDFoy9BtBrldIMJ2AXFzFKU5nD1vygBtiU7IyoK0Jv28YaVRnQ8z7pGCp4yqSQlccNaJd7NF8IdJO8XQ9phVdqkYf/n8m1AUVNMqf3huARRfq6a75b0rjzia8425qq5KYdahNWaxNcbkF841X9fWKfAcY8LSZhzeCg3qHTgQDdAHgEvEAVSc+l9U2yUardIkTAYFajoDDrxzJjp/JMUvASn99yejDv353WSOzQLy23VdLM8CGytmNYlUQC7rj7EQHCzIWtup1qFIGBaDgVhUWbgRB1ooNEWL8cU7trkbuPs4EAt4r3gQHxggGG8IED`,
  un = `/assets/gun_pod_out-1-DTE0K2pN.m4a`,
  dn = `data:video/webm;base64,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`,
  fn = `/assets/gun_pump-1-WwF7moHZ.m4a`,
  pn = `data:video/webm;base64,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`,
  mn = `data:audio/mp4;base64,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`,
  hn = `data:video/webm;base64,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`,
  gn = `data:audio/mp4;base64,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`,
  _n = `data:video/webm;base64,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`,
  vn = `data:audio/mp4;base64,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`,
  yn = `data:video/webm;base64,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`,
  bn = `data:audio/mp4;base64,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`,
  xn = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAViEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggVM7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBiQAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNDYwMDAwMDAAH0O2dUPA54EAo/6BAACAeIJblSY2IGphkhNHeQAEfodaVsZO0UqqHZGK6EepFRReyr6Y1tyNfW4GDR/jtzfTJUi8HfiG7+8YdO7aI6Z/q+VnqO87piW9j/q8UwBPHhfV1mLvW5iL9PkkpROXdUnb5fJLndTzWK5UKQ2bgsDI6bH5UMrrfD9mFyOjQImBABWAeIIIN/Aht/o3CXzOE9S+k24VTS8L1jhMCzFXrmCEAnHu6zdUf9DEF3DXKvxH4ejz7UnNwdmRALBzM9MxZv4bbOzV5FuZuNO5Ytesx3kPl/r80BUdehgl8Ol+0n5ypiIjyA6fSvLRDVAzzaKlhU/UMVZs3/PpYgUrAoqECqX087an0UmDtKNAhIEAKYB4gfeBq6DSk10JGVmi8Q077wraCC9CSm/Iz1jr0/BXXJXjEqQ3V1UO69gJjJB7TzwDIdAv9VfOf3+uM0Nur+ym7aeyEQbztfXEz7EIqGghhHV/94zKzMWN2pa8sNsLVmKo+dRYFD5qCb1TWbslry6PG7MzXckq9Ck3OAEMzZNx5aNAf4EAPYB4hYIigtWIX8x8ziX2ECyLli+LDbgHUrq0s6HOwCeBws8482nrHSPR+MfZi/xy/BwSe4xw6FJmyUcU8IJIlIGEHugYDuC9hJ4R+75vg03xz084C+A540Y7+Gm7xzbKsulu+mi+hDRtyRLBFfMHCwQ+Sxd+NcqGmwU/v8Gj6YEAUYB4hFwAD9OrJoaWik4n9VlnWuc29oYPgTF4iE4mr1sTXxsoS/olkKpLLvmXeIcEgddhdQMiP61nvOTDnW/KjG1NdgaFEEwz6Nc3oEoI1Gg/BApjJUDE3UChtM2V44cObm/+5aUqNqP5gQBlgHg2Hh7zRmdoyJRxRZ3pt1XZdPojzG1w6nWeck4zczNvE6dUeUh/4zadmu9S6FIeuI0I5v801L1laB+53JuHJ3232lBPk1FZvMQgRA52iRR0aRGqIlB773MlGRuRvn9oWOFUABnRUky+4NhVwKcFcJcAMfWdo6PngQB5gHgClwEWzVHdfF+OXOoyeUbd57+etaA/9KahaHRV/IMECRTyIPVmicLkKgedQ+PIi5XUt/pkox8hlZcgu9XeDcaYb92wj8FruggYJbhPwGEaSLC2rP2ZanHD6qgb6BuumrKU2aDXocuBAI0AeAhvxDhAYaioC25K55xU6+yAAXe1/U/eGfE7oKSoOlHbJ8R75J5Ql1qz31bwPJa7+GOP8V9NftCJJjKX7Tj25lWOueWd3qybgQV1ooQA7ILgHFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  Sn = `data:audio/mp4;base64,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`,
  Cn = `data:video/webm;base64,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`,
  wn = `data:audio/mp4;base64,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`,
  Tn = `data:video/webm;base64,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`,
  En = `data:audio/mp4;base64,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`,
  Dn = `data:video/webm;base64,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`,
  On = `/assets/gun_silencer_seat-1-CPoh9x8L.m4a`,
  kn = `data:video/webm;base64,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`,
  An = `data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAACAE00QSBpc29taXNvMgAAAw9tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAABAAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACXnRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAABAAAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAQAAAAhAAAEAAAAAAdZtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAALuAAAA4QFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAGBbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAFFc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAQAQAAAAALuAAAAAAAAzZXNkcwAAAAADgICAIgABAASAgIAUQBUAAAAAAQRqAAEEagWAgIACEYgGgICAAQIAAAAgc3R0cwAAAAAAAAACAAAADgAABAAAAAABAAAAQAAAABxzdHNjAAAAAAAAAAEAAAABAAAADwAAAAEAAABQc3RzegAAAAAAAAAAAAAADwAAAG4AAADKAAAAsQAAAJ8AAACqAAAArAAAAKAAAACzAAAAowAAAKoAAACkAAAAsAAAALMAAACkAAAAmwAAABRzdGNvAAAAAAAAAAEAAAM7AAAAGnNncGQBAAAAcm9sbAAAAAIAAAAB//8AAAAcc2JncAAAAAByb2xsAAAAAQAAAA8AAAABAAAAPXVkdGEAAAA1bWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAIaWxzdAAAAAhmcmVlAAAJzG1kYXQA0EAG9aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgECmcQ9vio5v1omYmVfbflBH6V+c+9JLPVfYJCIdWtNEQ9XJmJrYgSJ98pCAZgxxIkaZE9g8b6Cvn9vmP/v6PX2TT2zLbXgf+PNIWgUroyjn+DtXWNX++737oI31RBKqVI8byeQ+/+mMhjxPn7Eac1vIFRA43zW3qf0jGGau8un+jra7v8XjnMUxYVZgXRrXs6nbZ20AAA4NPdZThWE6U41Tlfaggg18V9e8cLpf+r6I3HcoQ3lC6am/NI9h3AtLwVZNtC1JOJ+dicBItShzkYRCYSFUQiQojfZzS6Y5mbrecBmWwgKEBVCXpdD1UTsEtNSZheNMRAOG1jKUdZ1rCmaTNe52anu+a2ONA/PBK9XqmQyIQO3PiX4KCq3a/vsVL46MkwaD9sFxfFmQSHMwC0AwyGizzglKri8hWpdHKuqrFR6JVE0hUsqd1AAHuWZbpe+F1NF1CkuLpjNmVhi0Q07eqLKmWL03xIPjbHLsxO8zr9e7nW8iAU1RAcBMBSiBigKDYRpIhkbGMMyYztDHaJkaGGNBfiDs3+HSrixloyTiGZS1G7txzwQDM5gRaodROWIa0/w6PLfEBvvDfg/FeSBGOyERjPKERvtks75FBwYBY+cRjHJGUJUys0Z6LNPU2eXjmoXvtZvIwc5UjGZUFOyvuSEeG98RqWipIyhLf84WSr5BL9BMTzA4N+IaOPcfTcM6024RACiIDgBIBSqEDYbhQJHNT1utTc743u+d1gbzbTA0GbdAU0ulsDD5Ng1sCmDCEGQCICYfM0llXCNnQCmmBBZylSuIGIIDvSsyaht8QnKh9jtYFCzkAUvuMprZKtThBwx1dZXGl6U9H0yIJ1EBWiE+Mvcdnl6nz5pBCBYxNAWM50M6kqL8sXDluUFAGl0Pg1wnv7RQCUS+Vx8o3vVnD2THin6HNsT5vp1+PgUAAIgOAEcFKnuNiQFCmlgiEBPWTa9m1MznFynOWwzWql7dgWcWNa5dVC2MgyDTlkMqQVuwWGKdwERIMIbKuhQ5vQLc2KKByftfC1rV8XYM+txC7QZOp0Fhh5K8+qGIZAA6lhwPMeVvumH11sonHGyHGKrhWgS81h5Ko1KT1qp8bZYkze8rizdrDCmPSQAdVFmxOo460DglxAqulFlywJ0pPseHdDULHrpZNdQ2I5XwAcBHhSqClYSGUQjASCAbeyhjuOder7kjYMLTsJcWa0+2uqqndqQlkooYcBcihh/j18miPDoHks0SbJWZS8IJAVn9vy3pOP8pXj3asxEiNy7sxrWZGZo4mEjS8MJA9QJ/ZxXPTKZUYUlm0Q/21dCnu+fb+EXUFDYKuLw0OHiqXr6JIAB2c8Z3AEgtflOjbNbqYvwsei2x6OgjBUo9QnYnNluARwUoVYYUoiIpACQwCggG3jvp3l5Ub5LZk3Zl41pva5RbIfskcDEemSJbtHY6pGUdRwptn8p3O0DuQgYkYiybLyoZzhjQDpE1BWpfE4yx/RnFBOoyljSYhTUUlK+lRsiujr5zH96Lq5pvym+DQZlfWssfvHkti7kKzBFkKstisxCt1ynEepUoWUtW+/7/HkmYP0XAD1CZrdfdZzfVWBwXX2i62EDD9edNTaGiFx3bn5b8dwBHBSo0MYqGNQCZbKy5zyjIKhs503nEmMzYCV2+LhaoKuLVsWKJIphUdGjNnFImRZmkkiccTKnBc44YbWiQJxfNEcVj/czADgAJgswLhXz+DCA00zE0VeDYVmvsoV00Ao4an8Wlb4SW90ebjMVSk/4pjkWWQU95rG0FaVm5X3r8lYDawg6mCsCOFKk+yP0Wpl6NzaiAAARZmZbFf5X7F9vsgMHAQwUqKyYIxUGoiEaQE8YXzJpXbre5nTubpyvNIHeB9rPYKlo4IdpAE8pxsPmlBSNL6qmx19T14KQo8UaSWAqnoTjMHJmqCswkQicwE7REhBjoCQAJjApDwqfr3kvlU7hDUK34ZzJKP79896Xd+NK7s1F1zxKeywU0ecOe+o9DpKCQjb+b6PHsKYQ5OXSLNrj2ttzc+GMtWZugAK3h1Uo7XNMJq9E6XhwxBwBDBShzFQ0BcSDM4Dfa12IGN3wbc3P264EXO8AO4tj5twkMVKdSTKDkmEyEeVOSfO2BEsllTdaNBFDfd5BIGp0C50/9nkVcVh+OpXC/zXBHlQDdC/IyoK+dWYUoVv6lDGIdCqNR3PscnF7eIqqePpSa041Ig2KmfB2WdytxFcE41TdXXAU9ga0spLijGOYjFq4IUvPZxMzdAGi7UA5ou2vSv97wAEWFKjQtCMFByMAoMSqIBJi4718N3MoSZhz4rjROlZgiNdBT2B8STVtaZsQjMssxd+TrA2aJBTHHOEIqhR2wYHGRDCKBJuL8K6y3msScTGgNXATyWURgJi9YE+e6UJB1cCXdUBHVTcZa+hp92rx3Gy/kPUs8ssmxv7pkKsAaBXqLsd5DhP/8tVqVVm113JjNTfGazSa3ZOTAfflkx6m4z2+0hZOYLms5j3fOcXYgADgAQgUqYzBCwbC4QCRzEA2bucJjqVaFRSnPjPjHBYuUkhCJFr7VTOWs6tVHVo9Sii9JyEYk0ljpFSDv1qQZ87ZcbQrpWhW34Z7PJfNV4Di8xu+6oTmcWLBhOnZUBGhOp19dDG6YMZhBo2J40AyIXwmrHW4o56k4EjKMQoUCtOejwYm4qQE80GjvD887WbmbM2gRAChAXf3enU2Yacp1mOgAmTBgBmHLdHObYEWYnL7Dzuzti4A5hStjCFdjEwHfhqUCcsGBGtZzUKXKqREMg8AFh03kZCiQG5DHMpiQy85kQgyEvK5btcSIuZiYKHgGh+df83UvSHK/33wCsg3SHwzHwvCtYkYGjL0Ul6MHu3rJBdlA92/JSKm/fvNZDshxEKKAwC/4zMe0f/sqlJJZ+X6Mo/DNTOR/N3znRG9qpdTSmFPLkxR7B7kMQAYFMkZ4MTBElAUi8QBRwDQAAb4cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO`,
  jn = `data:video/webm;base64,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`,
  Mn = `data:audio/mp4;base64,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`,
  Nn = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAhUEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1Osggg+7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBwsAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4yNjcwMDAwMDAAH0O2dUay54EAo0CAgQAAgHiA9WwVrNY7KPnq6gAIM04t2+N3oALA1LCkKsRJi6Ov/RitmyhRm1vCqr5rexOKdriwcCapXExJg8qyR1p+0mFPCs2uGfRjrAEpTcXXXI98fUIlvnwWHw/0pQtnk9ti0joobmvl24G5ms0dvzlCnERadAk4Ugn40ZLvWzejQImBABWAeIRU8gOI6IMe3YblMeSap7t4XSJYrMcMLAwoQHBkoLjyvFiaybX4/HClDISO9sW3FL02Vu69AVCd913FtOw/Mkh+YmkEl21xIwC/MX1uKK9gzgQEvCH+B5+jY6oTC1Ei/XhMtd7IGXXkFcyWjf8Hn6wt+ChkkdYYnh1LdIEMoaN3l5VMX6NAgoEAKYB4lvkF1S9mkw1bkDEek2/1w+nqpid88rAx5QpsazkrDs833IK6zN2uVKra9DQroUCgeXEP5nvxnqPx60Eu336Y2Jv0SzYJM3fIldjWIRCxJG8ZW2jsj9NOc68Rm2z60xnLtUF7uRcRRm1onDM2AxPpMOvSP+kvESFeh5rD4HOjQIKBAD2AeJdP60y7rZwXyhzyeqrpsI2Lmmj/Mpr96oE5N6lthyY+gOUkNV1pIaw3g+algmZhxgWuSPbNmYEM+VQVCxd9s8fFirg5HzRWLYBV0dYdDT9fi0tXKDNZw4xeCM1FeX1LlF0yIAugtZQcMv66wEYbqToMV0FHMJDbIADPmEv+o/iBAFGAeJdeqbLllXSx1YaX2TsnevrA5Rv+rYcEHwOZwAFx4RKHcjAl3P4I0bpgc33K0O+YHH0nhcq++wz8WSqrVAtGMuKpYckCOuIn829JrfLwekoUnzGIK1yObDob6deqs1y393xg4hPsDUBR4LYrXybsA47jfDKj/oEAZYB4lm8AEYoLr2ag9GaiZrN9Qo00aBfB/t/jpxJdVflDCISBXyKHxZJF1zeKnNnhikNi4YHALb+LW21PAymCx5UYQlonWklN8z8ZZIgIza3R2Pf4/As/M+KzCtB2x/S3L6ZB44QPf8/2t3pbDoVHy3LP78jPL2V0yXYBKqP8gQB5gHiUu/hF/+xY9fjCJ/k7/36MmwHNc4F0Po+2aqpFU/yQ/EOpQzfJ8f8yey8OD2XgXN6Ysxc4hJaROVv5Fgxu18iSA47LJvdhWoAs3wpg6aj+f4EK2qnzcer4SARfryv8Gmim9Ast0bIb8BP2+5AsWeq9s/mUIMwKDaP4gQCNgHiRQb66EseWPyw3DPj7iZfJgfIzYcQZT6Cs7/KXWM/b3eBC4AlpA1t1X05qyMRiWCkM+MkgEIqx9K3W+FFcPKTQGZsSWwoZJgfXG6dwbE5e9A3HUOwoS9ct3pWBJA6XjRAr+byQz0ZvJeCQPemtyzdjJdsFo/CBAKGAeDypla+7KaRem6WFrqDhSAVXv/HBCVAdWWzbPFAEXlkQdl/awDojKRITOBWO9t3VGR1+kL2fGeB6R+wwKMJEK/rYUvIc2GLtLVH0eKu1c77CgSHRIeY51e9yemzKFgpg9/lOJaoAm8hhrD/Vo++BALWAeDibkVyQ70Vx1z2w/WD6t7Baqs1OU+nGnJc9Xd0rJzBtNa2QBFJ0aOeINFJbdOIKZNeJn2DM4Rz2aUAOcZYFpZ/DJBEfL5JXfnX8XWvdVQxCnzttYlx5IA++RczsI4feRmIwWNsZla78HXmj8YEAyYB4NjJyc2VpJ25kGA+/lszuYIDB1+99jCacZtlhEn6imMw7km+Wj66Jk88z9dxCmqDqPo7ncyKNAu0C9lvrI2m9acWe/3WkuHtKlt2YnKAb9UwLzi4a4VhME4YGfF25cBJOSHubPx+vmPQMOxBMo/WBAN2AeDCA4aG55cAhlxybyR55GZOy+zv8SWngFlDXsx9WFJt674K2KYw1ZkHPjiDJl1phwFXgBuM8HBRVtdgv9Fkz2De42B8jdSY3I03F+DuWlZp1WQEu+LzX4XmKrMQoa271Td7Hy28THgjHnlInVp1iw4qj84EA8YB4BBjfzyT7UJZb+I84pKxJUzm2M/SRCsdJ330WydcmnzU5i6JsRyJxqHbiA3bY66wn+f1FLXHw5/JDDfWqEjlvy8Zf9/gL3yo6ykym4r6IiLnke0oP0blfLJ7KoXIVyRMQPMceqVAAWViKGTDVD7+g4KHUgQEFAHgKH8lH/OfiZp701oi9tMTfqIeeXkrY26M+y7dlHvIyBRT5BL7ShDRXcXJsSZV4kSzWYslMmMt/tALVuhQFzX2dWLQSr/4a50l1wiDtOKQim4EGdaKEAN1AoBxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  Pn = `data:audio/mp4;base64,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`,
  Fn = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAY+EU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggYo7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBawAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xMDcwMDAwMDAAH0O2dUSc54EAo0DKgQAAgPh+dEUaC1EVZvgMAFIwnV9us+GgXsaCbsBxlTmbPkZ+eZf/Rhey3xdgqZPdg9Z7G6qn5jAQ86vXdRNaf69MKFpv98KailS3NiT+9qcGP2hGllCwb1hHhhQZ6Roki3FUKGaXbAnQI9zej8Cdh/jreLEnAkvhkgAa8a1/K0yK1V51U6q9w3Bv7hrqj/u0gPrb0ZcyNlLKQP33X37+cZuTDZXDxfb4bjpAmEYq15245SDNHJH23+OLKrd5gVpPOWYom6S+ao1g56NAiIEAFYD4U1C/+BTjGkbX7KyiLsgER5KsyetFTDl06bOEw6SZBsRruSiiP/95C3sWYgH5KM6dbsBZvgoe1rwAUTI86CX8FYPg/EfAha+kEbPjqMBLOtqlewoDteeB+XgiXSzXZaUdKj4wjj3cENom7QwNdTWFrv7CY8Q0jyr1tPXQu/nvbMnk1ROjQLqBACmA+HAG7ECAoLOyzpKNtGGEXwjqp6PwMxeniZ9uCVJNQEysj2B4Oi5LGLymQ4h7fJBpjm/k4i4Vb1JokbEGZ7NZ3dxv4FFCjExTC3Ob++Gba5cmbf0bgRNG6hZY/jfrjqhmsarLrKpqJdATlFROzmy7j6RCsUPHtAkCiqPyEnzbLkdimV9DEyB2/brm1z/XU1RVHh1BgpDt2Lrg0MrMZKoWLhT9LEAEr83RYs6T2jsJEyWad4v95qijQIGBAD2A+FF7LDI7MVf63eL5+bUvIouQ1WugZy2DHRMnUecJmt+aKgHqpCkfcdliqCLJauUQVwl4DMwMiJQ1/FQXa1K3OARzG4zW65k6PwCJ03CPnU4gBTg5Py7djy4qe2ppXd4ktMjdP/DRGQe61CIK+IGD0aZto1pssdBwluoFlrqjQPWBAFGA+HuPw87Z3rykEcOrYsQhYyEw96OipAyfW0LBOWb3cwmlzAch0N39YydFQCgnFVskzvRt8wl3cIAh2ZWtYcX8pUqaH6iKX/P8mBKblpyZZrPvzu/JRF+90j5urKYojdlsdv+TesSZ803XfuagosE2HdjQ2Dzep/t6AqD1zb8uCnpOBmdWPUb9kCb14iD+8dsAG9sGr9QG2V+ebjJ0M6WGKqpo7LsNYJWDv+Dr/tIG2QJoSzD5qYnJoOP31e4CDUB5qhInrYwdVotYE+krVKAMXr11xarTA2n9ssNR7H05qtDG64g5wNRc4Gebdf/f+CS/DqBBBaFA+IEAZQD4f+igtU1Qt1qvIoXvrPNaT5zWRuPtFPUkeSXTH1ww6Fx2Z4nZavf5aFCLLbbfh5JAZi7OH+OuS9jkebwxhmatVYQD1rCUG40TEkauH0Ad+Eq89wm8cpKuDYQCfaGtmwi556N3qJba/JMV8rvnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQu7HzpbpAclpH6Xuq6wmCHB0xtk+QAZ2aT8SqIPK6Xk3phugPjd15C+musH2WHJV54mFiv+EwF+p2Cj2SAI5Nd4+4QIAB1x7xAPAA7xAAjTQA/K4bgYn8Uc4jBjvdhm4EGdaKEAN1AoBxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  In = `data:audio/mp4;base64,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`,
  Ln = `data:video/webm;base64,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`,
  Rn = `/assets/gun_thumper_fire-1-BmEA2czI.m4a`,
  zn = `data:video/webm;base64,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`,
  Bn = `/assets/gun_thumper_fire-2-BpWTvh3C.m4a`,
  Vn = `data:video/webm;base64,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`,
  Hn = `data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAACAE00QSBpc29taXNvMgAAAxdtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAABKwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACZnRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAABKwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAASsAAAhAAAEAAAAAAd5tZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAALuAAABAQFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAGJbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAFNc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAQAQAAAAALuAAAAAAAAzZXNkcwAAAAADgICAIgABAASAgIAUQBUAAAAAAQMWAAEDFgWAgIACEYgGgICAAQIAAAAgc3R0cwAAAAAAAAACAAAAEAAABAAAAAABAAAAQAAAABxzdHNjAAAAAAAAAAEAAAABAAAAEQAAAAEAAABYc3RzegAAAAAAAAAAAAAAEQAAAG4AAAC/AAABTQAAAL8AAACiAAAApQAAAJ4AAACoAAAApwAAAKoAAACUAAAAtwAAALsAAAC7AAAArAAAADoAAABbAAAAFHN0Y28AAAAAAAAAAQAAA0MAAAAac2dwZAEAAAByb2xsAAAAAgAAAAH//wAAABxzYmdwAAAAAHJvbGwAAAABAAAAEQAAAAEAAAA9dWR0YQAAADVtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAAhpbHN0AAAACGZyZWUAAAshbWRhdADQQAb1oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAOSZ9szwcvoC6RFN7pmv1zvnTT+30h1604RDzr8RwHAAAAABNxug5ev/tgDmaf3vxgBhfN0gDLQ7n62ARn/U9SAAEjS6bR8eAABUVxuT8YAACxzNf1XEAAbeT7hAADN5UAAZs3yAAAB95QLWTItFjxjT4kQwOAyHgeZ8ck8RhCc+Epzb7d+1gC/ivHb1A2wfwzvH3zWUwLCY4/dr8nlZHFO9m+T0ULydO5kkAfL7cN1hlYuyc2QQAFxIHB+NtBwA/phy5VJAacVkKopzak2W5tOblcKT39ht7b5/rm55yT/rz48f3mJe9f/J/b7O44k/GT59dbaKDz+noHg5nF+U0l9GlRPqnRn3vPeb/demNrN2vQvyfnPIUlbr30MfWk2g5Wf/viAfBgazb8+lPaiIFUNhUF0IVU8ihaMt/vHTeGV8ArU1aQPGWOq0L/lyHjVuG43W/SF+f0smaVAv5opAQ6S80uZZXUDkrhgqqylw+B0HfKjqhv5XSaSnXNYLAAMGKOGiGDGNZozQoJPTPFLD1PPD8ABQKAUoAMLFLEFBJ9cIADekwJ6rwygEWBxNHaDme2cwFng6rKucgG6ZrzM0vwc71rb68522f7zsXk7FaT0PGjsYVRx9l6sD8QQMnn/Cv4FSExe9892/jHpfCU1guXs9f9afW3keGvy7S2rMesyfhq4wiAYmmQM+cA4BRpnuEzKISJmISSiRfowa++Vz41iZ5Dj9+ZEbkuwORZ1rjvxBwuQ//NMCk7IPMZNZ31+UPQdw1AcpiT2Pny7/Ck7EWvnj8frTvmFE6zcibG+1kA489bpj1N93aA4nH/Wbrp5jWA6jeqdKSw9DrrVQ/0rTQrqhOJ+xE6eMUC4qqGtLSNckUg4pxGIcmvfP43SRXWKJsjdEnu5wG+DH0aFm61LRR7KTLDHjspnGfBlY3DlvHy4XzOmOYYxQMUD8RwE81Jl0FBwEhwFEkoRFSdlmbhymMoGBgjOAe+rw3D0ru04add5lY2JB9zVAoTmWabvt+/isgfs+m2f1PTTx6Ahue6jFJ47rouKgMjK7LLtoq/C0+doR9FoOLp1D7u4kizd0UFL5QciUCFHwABnHEwS4PKHwPxQDgBIMzqT/3nzqzvHrndTOO4pfinRWIHncrm4AwBzm4MJyhRgiXQlSQABIDgE2FKjwlBuJCqQSIMSEJRhkehgdhOUTL5t5ETpIiZIZFmUrD9fGhngLOcSq1aT62fz1gnOCpZK3jRXG2L3UEgF1d4VIJ9zjUlKl/B1V1fEtVATtaj078Fy5T6neLVbUlJ503lCiakl1eOQYnKdLu5MF3LMRUZ1lfPBOFduBcMtIShqovdTtjZWzJb/XJ5bhRYCJWHbaAqDJ86Bsy8MokAKlwAcgOAEoFKFWJh0FSEVTGcBCEg2YYO8yDbvQrEGdCTc8GptMLGNgel/2oVxxIiCdSfZ0cUUv3X7G4EbSSE4ADd71EOr59sUjBhh8/omWO6D8Oq0fG59yYUNtRr1qrtzCKAbWZgqMxT8OXRgrLE1qJCQAmFJX0YUpc3KI7NY0naRwcCdQHaaNsSq0972MNG89nCdFaXNdl6VXjg3vSg7QYrgcASgUmLQWLJWIhGCoQC4TKgiGIxYkcsVjMTKPfS+zTdiAsJt8iWHQxniemMxhNMjddD5XH7N38ZbV4mTKH+l4qusdtTUCysTAlo+n1Qs6MFHPBqodzWS3xpHshc8YMmTlnft7ZyQGSML9L6DIDS1DXuq2tF0ba/4Ys0nabs7XxupoAHdnGJbjEgKyDAzUOpWuuswSAc9rZEU+YuZ2HnXiAN+Ey5919kAcARoUoXIWIg4C6ACoWEKWVZnl4sx70MMdl4Rg0CGZGvvQys6ApKQWKM1KQcJGKYmXO+48HJ3Q3D+FsdvbxQXNEM4NPvbwqWcWGKm1AvSThOzIvKbLjLI1YY6+hEcvX7rh6+MbZgDEJEXbPgfQyoAALhn6qxdxJWF5gcxYKarXnljC5JWZjjCwPCCe+u6enX767p/zArhwo+O9dvutzjQAESmH4c42gDgBGBSh8jYiCYLjAKjESEEYL3wUpvs2a7PmNeo402XoJZUlosgBOEJojEZoilEKlmEcoQBf5HMmJwxFHEGlnqfs101qz61hVqQOI1vJ8EEkYCc2QGn7XKs0v9cU9kmbTYPXZmN/Pk9PUaU0AAqZEjd7G8ajKZACF9fw+idBNqoETGR8/OLXIAdwDOKcU1EA0tsDhMQVIKNCM1rfGjrOUu07udcABjvD8f4AcAEcFKGIN0oFxgFxIEBCdaTW4L7O45RnbkvxrjYdBKYnNKuixagoqd4hGkJALhWA5lzCqkDr4nWfrtV6bzGtOpGV1qxhButyu3xQmLihWlo2u9Ri0rUXUsrTZH+L867DqtDbkADELFXbyfRttgABiZZ/qoQAAitTcb/9At8UYfPOl5stR/B7cOzlaxlp67KAAsA2RA4BEBSo7IgLDcKEUbBALjASBYRjUIGjC8ehuM28E29mF8BRsQQ8hVYBhNHchbg+DLYkyWH2uJPa3YvU+q3OenS6xdamBoN/xJDdwe7Bda+R7dkld8bS1IbfpFsqkeiZSJxP0/Pr4/6cvyz0iwWWq+hBPA809dFjMhkJCheeH+WtGskVdrSWYNkT1OpqZrtGdNCiFOD/BHFbjU82MbDWNqTXGyubI9SsFPP+6dHrUgTDUiFL8vbkABwBDhSZ9hUiEYKjANhQQCMLCMjXeWlhO+HpuQ7er3x4nsrLux2ZRONRV4yTY+jtVrLiWeNaJXaUS84FkC358dI0R3J5kXuOHRFU2ibw+P+ajFM9x61YFk0JuWaZYUdMKzTHj5JtHn2fbPIBVGcO7sy76qKx3/8R3UMgBhoAWaAFlAEI+tNurFbT5IcKyXVoQNc2/jP+ravLSAtM1dBOm70ZPc4JRQAg9pz2nZt6FMBQKsxkxT5LLHp39QA4AQwUqOyICxCJKAEIWEYkCYV7alCx6mwc47vDxrpRqA+96kzZD3ajTqjardUriuz8BJ2I2oOt9F8itrS8abxKFpsYXdwJFFCwBZqWYNDlzaHw3663crXSc8VjWTFUV1XH5G28Nu1QEIi7xphGHKyVwe7at7YRdXhIAAmgiLz/QvASMlkBRllOODj6E0gKdJGNih5JDPEwrKbwwmnnfERAr7qtuuNH0nZbC+7NzSk5QZnO4DrUvRqH/U84DgEQFKGsciOgBCFhGJxK+AWiYHJjO6YeL9m8muFymkMhEUBS2aEvFe4UuJGvTnKpNxTozUjwJ1JI1MoCjgb77DMGPRIIXi7smcAQAjO59onpR5kw/E+KuRdxVl3fK2YdTEsQAsmFzRjhyk4xapkAAAK5OP3/v+5+iAAAITFSBTuPPB11HiBPDHLjhc7SOTtIITLa1O3ui8NkckxlKzZXcYZJ39X4fyfB3Y5AAwcBAhSRIQEiiAohAj2uwdhulyojQy/wE9ElT5Vp3VbI3xYogCULvDAAAGdTmvh5f/Ps+7FKALBP0ebgANAABvRwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg==`,
  Un = `data:video/webm;base64,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`,
  Wn = `data:audio/mp4;base64,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`,
  Gn = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAwCEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1Osggvs7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEB0MAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4zMjMwMDAwMDAAH0O2dUpg54EAo0D1gQAAgPh/z6ypMtbJ/sCEO9SV7Zk44DYPYC2DtLA7ni3r2enydI9Ep7UduAKAYeLuOYrmeAOF+tGuv7rFjzMzXIVtZWohE0zOtyEH/HGCOVDlMcQTSVky+HkZRDXQGSFsTeBgeUOSZRU9Ls26XWfqnSqcBeb8VRNfL9ArSdyFYNBg3q3zIEkjVU2j1yRsJtAgQoB2taAmkeaczmiJqso5SltlAm9VdFUO3t9Au7Kv5I1EMvwXYLCkQQFl5j3WKABOez7hu0XQkkQAUoz4FBY2U1PeVsPLlHDlt6lHInTTo7G41qL+yZDQzIs+/uI/7cRFaXp17bujQNmBABWA+H4oGOEGF9rd27+csRMZnx5+XhNuO5bqe3rLozJs3Wvep5o8akbIIs1uLzbynJXZc51ow2nH7duOe6IlRgIgKnkyHSeoc3GKaiEDhjJyZ6l8suwJPURvq0aQUlFV+RtTbCgpUEh7LF5JwI7hERSozzxbVxicHZPgBbNn/ePaNjckOWFkSN522fY5aUcDPHJFtHsSMdKvj1A/JkkzzrS95ViWBWr0ciIXTbMnCu2mVdG8wVADlI5D8SJVv1oD06lwVeRAXB+Z6S9fGYQkV12yScIrFTaso0CGgQApgPgZysocsB6i/z6Cuoun8ItXmJB6RZvygCEiYeKg+RS8kt6YvlHFtICEaJbrEArTzSCjGlKtepnHa+mzZuyETjFsRz6JuSC9cF6sn3STiGkc3Agu65ZfC5IpWO2q084gM2ucEVOWZpNeid79DBkebvmU9/3g/RuMDFYVmelw/gPSVzGjQIyBAD2A+D5g/wahoVXtW89swF93q1w9M5NsWA9FYLJVq6RWo6BzlwL0kMUwkT1ZccRA3mNV+xQHsn6FizPzihSlhFWu+pNSCU2lOP5nW0ty4E+F1TrW2UsJpGjtzUMVnpKpOmvHV17swSQvuvUBURTeQk9MrxnNz1DKdz5/ISxpGTfqXkiSJVaPFeQjQ6NAhoEAUYD4ImVOXsVJ1PWs/PS+Eov7BFSM6bPCegNbw1XVJK77VFcchKOBJQB8DHcx+qbk0q59c6EUuUQ8FC9ypB4kA5TtpqmT1EUmR4IT0oQDojCw6JU74Z7YYjGnJa0kYSDrHE/l7mCg6x05V02nTlsl1hOGuX88QS6HLfji8K+nK7Mr9Clto/SBAGWA+FMayrl8Sy8ehAY37EIFIZbsLU5uneH1DJUOdv7pm1HHg8zZey8RPYw34Uu8D1oW9ikIfVoqkwu4ABJEqnP1Kyn/yX/GjnDRw0fAQnHF8P6Swvn43NHXfiyqGv2AOvg8jgnMKhIKGj8znbd0g7NWJaPsgQB5gPhREgDUvVjJZiZZZ1XxdXmuO06DdJur6UzekLh4+FATAymeUMWhTvbtwS1GoHf3rJbF0e+om/RI1UrycBSJ9purlhY+Fs9XThKpTPJoWJVAdmv8SMiC+XITosjoGMorZjynsPddK6PDo/SBAI2A+D8TZFMP5IILmnmbBFyESdaXJ0DQdujkbPvpmJ1gJuGOJsW4VHzZeXXXuFtvpU7hFHwc+tM+e8PlP+oVaH2RdtxsttEortkiKFN7Da7B4iBh4yWI/VN61kUI8+56K+udOyVatHqmASFX8Tg6OTjnWqP9gQChgPhS3SXkjGLZh1+SlYq8iXjS3AgIsCb0edIYf7dZh7RcFx+QdPXhkVVHn2oFPxiIfZ+K5ohfddDYrQpPYLQuce6UhHf1CfCl5bhwgBCbw97JRTjSyjnOhFQ7eqvxG60d296JqsoQ1uXBbz9b36Ly4Bs3GcFforKWDwOjQIeBALWA+FJWo9/ZNFV3alleMh1RJRxFWVdKz7OdOhh1CGDSaXHGDKv+gJI9w8pZOrbPmJpro4QLpPkIr6h8wvi939MsBBndTZE6tTaOKnc8FxH7FwwdqUsuNcm8Xt/PTtLNIH0eyHf/lJ08+Cb08o8vGwdkvQvf5+Gbc2cLXS0xPmsbdZ4/4Y+j94EAyYD4PVTjBHE13SCmzMXfotMVJK56sFkJnzuKs+FanOKXwQ5gQmpwXqwm2FxcEwKer4dpN7WycGPDfnxeKNlNJbiZzCyQDcWwVNMXDX0m0wNYeHxwXqyds09wev8zi7iysOyZNTn7y3I4Npax3aw+Eq112D/Uo/SBAN2A+EPXYxQyvxExtpqbD1o5Cgx0NsGB3K9B7iU+x0vj8G0LZ7UjwBcFFRkNk9ChRdhiZD6qzlOVHW4xCAPhIaOWCmZZZtTBH0penIPM3qdLChpk0hjm35ftPNam0xzWVXKAwXfivykkeH4CaHwpLaRLnaNAf4EA8YD4WuDQNLD3nXKJzPdeLqqB0mgqLUSxi8tKC1+oQ58+O6ibjyFJd+/eDMG1jFWqz98Sp7J9tv6vXL+dIYvwKmCgqJxEx4X0/vVTUsrYDkb3/HGc3eytAyW/eRtT/86KsXngMn1Bk+sstAmoai3Vq1+OWMHimhxtGDKCylKjQISBAQWA+FAGZum+WsVT7atsBZzuUHPZfZ3UIXCmCb3aPTyCVfsqngy4QmNbPe1zccrrMl1ORom8XFkLlsVA1zVQhq76d+sgRFa8RrpKgSuTAgKIHQhlhAX6jAUYNIkBnyYIPgjnNtOneHBPBAhn46M9pf6zdrvA8WLGzIXOIMbBEL6bMtajQIOBARmA+FHzCScMmWy0yS60qtjjnMPspu8DKmU0eFs0u1pJmTqmB6Pn/2fpHyFVYTj1RuqEylsry+qWqxglMq89EbTXeR01cWaIJRSZ0i8xr+SfaIoZj/sd51MwEguXnqR4mSr9TjkR02nZpskqqv1QeV+3nXN4Wj6Asw+6VthV0MOdvaNA+IEBLYD4fMp5uQKJLP9tMoSHCLRh1rpNRyc68geIvPacd49Qm/Gy+p3n84X1PE3OEAqsNj1CpjDJD3Y8bOpkk2T1xNSXINysq4mtIuQpGGQWGKI2wURq11JdwM3UwoqJpXicRe9B5iU+d7hox9SBJzTIVLrshOlVdtXyT+zJzwEA9PWUdAaga/vwmxBnbOyTTRdauoqs/iBxNyFrQzGqnBAHmgU7OExT/CIACIM0yiUmzwFa73bc0Utlilov7omU9JOiNIe88KqRHgy+KzU8xxzjAW4zbpRDiQT5z62PvAz6dj5ZawWq0UmMyg+kfpZaFghCXJt1grieoEEJoUD8gQFBAPh99kMmOGI10Rjco7QnojNLQrvhvzPsSzBDW1+WbyDTerIjC+tLXwbtatT2CHTk4ddLPayhpOgyWt5eiN4KZ+WQeibMS/J+L4o6F9wqhe+NHWoVVljKQDpMSTTKnWkENvrFCnSUDJxDu0gd2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFzf21ABGgvSxIA5NjEQmqBMyqWWbouJqGBrI2hOT4PwIjAM/PjAAAAgAA25R92/8XeAHktv9Akj+pX1tIvNC671UDm4ECdaKEARpJoBxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  Kn = `data:audio/mp4;base64,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`,
  qn = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAARsEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggRW7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBcgAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xMTQwMDAwMDAAH0O2dULK54EAo96BAACAeIAJSIgZ+xE0srNEqlzOsRaWfifwQvKkE8Bwk/xAM8z0FpSEGRXsvHwGu4xylWph4PdM9wsdtdiwBb3wO5/jNWn9wwP5vd1SKTvItcQkrY6NX7EHLUZLB6b0o0CGgQAVgHiCtKxu7Lg1JLkY1cPNe2Po5iiJX+MPZcqGnCkjxdueYU3+lh4d5kKzAb85gguAqt+92ctEbErqLtMRyoITKo7IDNqrbFfOfY1YAksW9PvwNqAW83p8FZZBrQ95orpssi2qGKTG8OZA+Ces2y2HvXAsb/GeAdKcqyvndC98Ae4Vi/mjQISBACmAeIV3TJUtOkxj8k22kAdOzdxhNCO4ZiYOucED9fhvsPbbjWNhwgliffMG744l/ma2sfru1C7ERVVrERz3mWqK3xRMpfGFIlEdq9w6/tnnJiftp2tKalFJTZGpWwwyoCPJDc8S2EmEDS6d/Nzyu6K4ggjDxpH0LkSSNrGgp4+CGE+j+4EAPYB4hDHAMfpb67Cr6wkQFLhwWzexHGFt7vM2VoQJygXGsF0lyknyaKcvWkBKBfrLHfmB1roP2JgiHSrsd9nytXP4qV7VqUOkuifsxtVMSRqxJfO+yIX/YjRXVda+aefi2ywAktXuAAyroKWjVxJizSufarzcCK6cmaPzgQBRgHiPA+WXQAVxE31xXqT1hQovCLuOCBIa81BC4obQQ7Enf7UVd2RscrazFNmCFb2HZv2T0RVjIB0MrdrVI6OmFF51Qlmw7VTAE0Q4YFdk3w98tsg95cxp9+HwApieX/ZQkRI1kN1LyYXzvEdOYogoeKDjodiBAGUAeAUqwAFdn4HFghEgp4qgOZRz6GMUBY7j2K7ClDg0XlNBkvUOeSOJnQPb6H7tQT3RX+8gIU2QOFlf/hh2RsbqgeG2ItMYB0qinwjwpMIct3PYscnFm4ENdaKDY4ABHFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  Jn = `/assets/impact_metal-1-5xSsZAJf.m4a`,
  Yn = `data:video/webm;base64,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`,
  Xn = `/assets/impact_metal-2-kLfGN2IZ.m4a`,
  Zn = `data:video/webm;base64,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`,
  Qn = `/assets/impact_tile-1-yz4aH78F.m4a`,
  $n = `data:video/webm;base64,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`,
  er = `/assets/impact_tile-2-DdJ3eb2L.m4a`,
  tr = `data:video/webm;base64,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`,
  nr = `data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAACAE00QSBpc29taXNvMgAAAvNtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAawABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACQnRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAawAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGsAAAhAAAEAAAAAAbptZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAALuAAAAcQFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAFlbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAEpc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAQAQAAAAALuAAAAAAAAzZXNkcwAAAAADgICAIgABAASAgIAUQBUAAAAAAQ6sAAEOrAWAgIACEYgGgICAAQIAAAAgc3R0cwAAAAAAAAACAAAABwAABAAAAAABAAAAQAAAABxzdHNjAAAAAAAAAAEAAAABAAAACAAAAAEAAAA0c3RzegAAAAAAAAAAAAAACAAAAG4AAADVAAABLAAAAJMAAACSAAAAlgAAAIQAAABrAAAAFHN0Y28AAAAAAAAAAQAAAx8AAAAac2dwZAEAAAByb2xsAAAAAgAAAAH//wAAABxzYmdwAAAAAHJvbGwAAAABAAAACAAAAAEAAAA9dWR0YQAAADVtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAAhpbHN0AAAACGZyZWUAAAUhbWRhdADQQAb1oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAN6ZxD2+kIK+kQG3FZGnn7X0pndfnb4cV0rvx3zVw/012h1OIcPz/FZCLiSGWwl62GTCkmkH34g2aQrUaBYTMTyPIBCCD3YPSBABrELN7eFkeyzv0vnfQbDy0Dvov6XSHP/kMW6U/BUb4SVxSkUgwhIBZkV4vLYJdYTAezC5WRzHaCsBPbhi98LCIoM/CPNjj1m3bEDxvTMa7ZS+f7UvGo2xGo4FFJvxcjDO7CuLbbNJpIqqNzW/nxtvtr3/I+UPGzwyxgjADDxyWDTB/OnlcF9GBjgcARSYjtRwJBQWyqE5ss0tutFE0m6MtegX+Pt9tzGH/tdfn87vubl/7n+tSTPfjg7zdXEQBMgm34/Py0m8rvI/OuVgo9n98qRR0ZCLd/tDRKeOx84Dv/Y0p8jvVfDRTVeZuUCVpHZbExUOXVFyW5szBYHOGdOevIzJTnLGM9B/uMXPRXIOf5AH3jszvz0RKmW0bUE072bBcx9TgHk9nhuLKgLMDqX7f+fkbcGPAfgP9gAACOkDC/FtHicyHS1YVUyCwKA8W2VFDt59czQqyYEgS6byqaXnDRaaoU4rMiqFLxDmlRB9ciXu0n05g3J+pkbXSQmFVN/gfwpeXLn2elJv1dW2J061C22pc7LrVseyJmVl4uryvJZWFos0p3GThCRXdI8zwCpA+ONodUMHAVLUoUyCFAUMKwEIXQCllsLctmCLqkaXKOQRLUUqlssaqxiQmbMyZGp2txjUxd2o9BKQL2UAKmZhYdA1TXVfrS4OHGHdKtEgjVEXw5fPwC6dmvohskudZFWn7Qzih7zUDmalUnZgllxYzIv8fcs/KNSadK7cNUVqQFs3CP+st4TzxEb1tNMkAE893fw4MPUBhmDgATYUqUx1GhFKJECJQE6wzFzFjY2MremSNYAcLlBMt/DFt+eiDTJoi5AYXI86pprfawYLSj/dkd3NHFpgJD1+3s7+RImigquwtl+1YsRQ0yfQYkPzphkkOUlKj2aSK7AuDBdTGUmDGMZSjfTFGQGXvB0bLYeZc81yZVrKZVYU+Fexh98KlMgYBi3c8vm5xxgDWHABKBShaFgSoIQtYBYiMm+t9hzA0G76LlNtEgqLN8KLz5vVzVglkCDhelbbheFGDxqGBdM3ovKsDRXDCijT0GS4CqmmnXjs+3ws7RXTFkptitxF3WARte9471xZ1/T5ExBz+N3kuWXFKVtsVGosWygrMjqQT3T8X8JfY0YHWCWyOr1bjxJgj7PpfQ+uvaABYdlfIPlzAcABFBShhEgSkIhnAZBAQiaut3QR+BnMcpjIzReFypkRDD/EUrGTmwVQspva3qRc2VVJ1JlUpzgsmEcDPzNu5edkDWF5oUM3K1IFlRLu1vJicjTYD56/jNMYJm3P84ze/nWk3UWjhxTgYicOq1kWIMuyuVaRHsutJgnAQvhpeTnAafdhAwcA0AAG9XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg==`,
  rr = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAARsEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggRW7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBbQAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xMDkwMDAwMDAAH0O2dULK54EAo/qBAACAeIBjyyOifcE9LcU9PTSqcHe4c1a4ilpoXppp6DifGPO5bIm23VkSylbJgqvkTs699s3uYtMcGF3gH28Fa+c0EX58sgF9jiFw5QrImBgGAmwjXJzBRjrRtyx6ROD5qXwA05iULwRquSGOfeMshUHo2rZMGvYA5aNAgoEAFYB4hOU+4vJGZ3YJfijeLAmvCjSOGBi6ZnGPRr9Oz0tGwITyWrDZMhKYg7AIK+9PmE3bsofxoaBL+ACsf6KLV2KD0ncoavRqOqCZQ8BvoZ0FKzTMBeSBof+buSnv888ZygqIc5O7UG9dJsLtVDjBxfkjnJKLGdFrjtu6bSA6AOCj+IEAKYB4ltaGcDfJWFWUJaGwvpzoKMCIzu2KfARaV5x/vUipkayw4UZ7ko6MNCgn9jvYY39yfK1EdkFfgy87f5/4Hz37MfZDH726WHwgi4ousq5/HBWCo+I6nav9yiD99AbF50wYkkg1g7DiJa3srR8R1Bxdj9HupqP5gQA9gHiR0BCzrEKzx16vHPM9sJer4EAFjkA3wnku7UnTv8930cLq+qp+gvvZDV3dr21rl2hmwT1zQZXnmBQlOb5x9wWsqvOAsQ+aFEAG3pElW4X1R7PQWQUADsQ7Ju4t36QLQkCAbdEC3dPuThRur7x4iEH03gMiCaP3gQBRgHgGH12sha1oKh9LQ4poZih7mbuBZfDA+IGAG3jyOKVLFL7mC6Ml9kXEBfNIqjKcKrRmUd/73OBKj7VW9cVV1D/nzPSUy0qj1zFT41QgskLL/vme9wuyCx6TH/zSE5X4iGQdfRu0ZOTtN2M9Et0hDTGQEiig1qHKgQBlAHgEhQAibVAj6gaKTzVGlx7VAQlwMiQsIqVFBxulPLvipOB9LUcpgQ5lWJHoX5tiKiN1k1/LsZY5tGL5Eeyx5sK69/MzxYmbgQh1ooQAvrwgHFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  ir = `data:audio/mp4;base64,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`,
  ar = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAATdEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggTH7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBgoAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xMzMwMDAwMDAAH0O2dUM754EAo92BAACAeIAJSIjpJNPRRfNae1XouD2MviPvWbxHUD6JFcRfhN6iYfAHptPYEyKzyrRLvmZjw/i5E8r94VafCC04cL4PBkfBdN60Y3iWBHV37Se/8lsMwlDmFtZqtDujQISBABWAeIMQvgKKBBWT5OBxdtM3JrsWJa9NZjbwT9sn2y27n6FihigdVmG+KrVFi7jBh22uhuQirOeQ4k4gOYKN3ao9BbRsb709koZDvUbZEv27my9RUAyNwQZPYYenWHYRMwyps4op09gXRs0ep6JVFMEw+BA7kNDXA1EGTNYPo0MWXOijQIeBACmAeIWsQVXRvzb8IiH22mdy6HPQ7obO9lun6m+FwA3+TBrBq8FU2JpoVRgXW98iQVsqDTty+/9a5tYy+c84d+hil75tiepOyhko06mZ5ZLsLPeTKztfp6S0EcvPuSCLD/8x1ipTfX7cMA9DqbPr8IjZG6tbShPkNYx5TKLjr9EKKOj9l9yj+YEAPYB4lf/ENwqHSCqyLYpHj29TNd9S73m2N6Gnw2VCUo37WnRBVck9n4Ty1m6Zgc068RdgtKFQ6irpR77GdnQFmDyRhWGbk88kSCLgPpGUalicU6+2BiZqx9ZWyucf0QZBNagr/8eOXRHyyn7WEKjPCs9/KrgFLzSj9oEAUYB4kUClE8agHAa6XSiICkuSzQJa33eGkJuvi0jjWGAWmAXkQ98A89KeZV5WnYeTcIiatGVt68f6p8oIGD75oFZLEBp+Peg3cjcnosg4ST1gKmwmjvPfY1R+4aaTIJZrfjBOvf0MG7jx/KIkow6y9WliyOmj/IEAZYB4je0mj1aIiPyX9T1/lGffQrf80DzML7zIBBer5BQfcp83jCWcrABQ0YHE+x1G+4N0z9WXhsOY6e1nRDqWNKX6SBmS6BWuWg8kDJho5/qacCkqt+JWonhCbtBbSmX2fRqeBg76vTHawdbo2qSR0cz41IGzHRqwqqOg1aHJgQB5AHgETcAN2dYRlzekwqUmZGBEhqfgFcUnKEkCAzGuAbdJXHtaU0eYjaeHEWfR0uucXG8n/4fZEEV4Ll9YJmCUTY7YxcL0WpuBDHWihACBsyAcU7trkbuPs4EAt4r3gQHxggGG8IED`,
  or = `data:audio/mp4;base64,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`,
  sr = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAVIEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggUy7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBiIAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNDUwMDAwMDAAH0O2dUOm54EAo96BAACAeIAJHv1LH6zb88vI4XaT1ha/hcluoV7OQl8woJ7WW95Y85XzM8rRKxYscx8+tf/Mk1589pzBJP+SCApfIxyNrTjdHMmmOMFGStX/nv+JIh3XDJmQInbZXv01o0CEgQAVgHiC4ap452kvY/UBe7g1vVO/iQRGyu0nIZ2JL69mkw4WjLifJI6DQIvRh42qNxyfc7K6kt3pXc33ZnTk6ukmF12iKqrLWQA4J4INU03Fl6nFFz9j5kNGiyx8LrfGv5tt38YW/gk3CRJGe36HvObNMdoXpCUMxw4oC8Fk4FCQWnuXo0CDgQApgHiFnhF6CsIcpnsDxBJalHcpRhr1mmQnJ5ElKT0xMIYviuZT2YSoxc0KkGp0t0w+YwRYlh6hH7LoEyuTNTS7HnzzBuiv739rk2JONiBYijnEqtnEc62UyIIWKBGjrYi34fkh8yMILeXx1UVlIXM8RtVWc0H5R/5T1sBe25erek2j+YEAPYB4lZMUNxBUiXXoNn/9dd6v+SZhzrOHtD7O7ZQUu24RP8x2+FH2N+ebFTg7bMrwBS62W2gqyvGgYsaUqPfV9e1cSuJerk3uMnZ5/RC4OhbNbEDjlnKKdRymsUI9ai0xb6jeMO+My2OV5G7/nAnU9AUlfxJwys+j9oEAUYB4kLIHnvY4EbqAkw7zKtB4OyQwP5o3OL5fHh6Odfxz+U+oipJy3lieoPlkLXWZdOgK8phMkGXXUnNbLuAWxtQnU8bH9OdzvRcqIVNxptpSvhKW1ah2daBBCVw0KMMtMjJkW4jTtW7q/Z+HGH4Y9rf9bFOjQICBAGWAeI1jREmdo8o1R40kl4up4vLkMs00L+MyLVHqN95L8SU0HGM3xpz9uhglaCMFGHi0fL/+uDPBoN+jNpX4kCAhVuUoIdTUXdZqoALcZTsyWs9PsYN5eoRq302H2fwp6GTT1YMHuzsveF7XGfDpoCY5M5o7B6pIB7MJD3hndqPogQB5gHiBgQ4X+zzZirYi0o8ne1itcjai/FBSHcexitmMKOEhn5ow1y1XCaEC3HwIvaztbzxVWkn6bj5kBAC5vUqcy9ID0V9E6vuKcrOPSPHJ2g4HXEAZgRvfKI2qK5cK6BzWng1oY3Sg1KHIgQCNAHgQ1T/RvKRZn+l4qVugGnvfJMZeiNPXs65K23W6PhP+7xLXcZ5xisAAAAAAHrokMr9gvLPAo9Etp3xzd52MeI/te06mm4EEdaKEAPvFIBxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  cr = `data:audio/mp4;base64,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`,
  lr = `data:video/webm;base64,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`,
  ur = `data:audio/mp4;base64,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`,
  dr = `data:video/webm;base64,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`,
  fr = `data:audio/mp4;base64,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`,
  pr = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAU1EU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggUf7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBhwAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNDIwMDAwMDAAH0O2dUOT54EAo/WBAACAeIBwmRLqgiQ2BTt1i+/7Iioh3FOuZBfmyVbff+JxwArCuwDpboQ/oEBXL9ZJbN8EFyQWj84f56IFjv9SkdGmv1nuZ1Xo+icosY8I/ZvScFcQg4Pq/rvbHWZCOo+oDPICC8yBziTJm/Rb/7daks4qRy+jQIKBABWAeIOat5zls+/kz2kg6TSZ1bYHrbXLYI7xNHyHqqV8+Mnz0qIDRckZjj0kd2plPf5msybK+I76tayIRe2uqZNoA2FXxcQ+kp6UeWBClzcpt8dKTRia2j1OZ4MweQ47tEQ1HLPDa4ONeJLFUvwBuo4NsiJqXvOJL6H7lx96nQpRo/OBACmAeJJW7Vqm68hhdUj+tzd6+CS/ZeqqIQCpT/qyVD/lK3sCbLJrcFSLSceYf4bMZIO93fr3TJZfThMVFc5nJK56YvzvCdWCOOPGvmEQh+sGvwy2Yg6Bmw64nIEMJ8JZZuAwmHR5wCocUN6+l4fE5SGko/KBAD2AeJA3QOf6VJ10KXH0yP1u2DPj109kz9YTZ/Xl4YsV7ik0rc/eLYnLq3p90tP7OEXoq6sQ3Qb9W0WC5CVy3jqP7rt1ICAXAtkY2W95ulIXQiDPaUQYFCc3UyOmo9ZOOg8CdrU+H5UCfhPGAUJaXNWj9oEAUYB4jnwlXo65bYF6ctP1/rpAZrCf1kLxOUoEztA/R3jEz0D+Ur9x6m71UI2PLzeYHcn9YXW0WN6UHDcgM9zdW3EX+cr3soXmsV8BpX8Veg+gBX9i8x/pQGzCt5hf8RO5f+rsMmjbMirG0i2PEgYA/QvXlC2j84EAZYB4Bdq041etOS0y//tdE3AScPT7JLe2PCyEWu0LjzBGzJfs5ZCnNIUmFGnMNT6KXW98WLbkJbVtIgk5lrsLRpPhPvdUmvfAWdDElIZqufJmzNC2UVqvYDwqyP5SVBguDR7MLa0yI9/KWtMvpKuqybaj5IEAeYB4BXmQELo4fQAtCFHwxBwnCEb3vB/xiN5mKP7grBxQlfaTV3GdLlp0wGg0M29kTDLvKU4v54h7xi5JjNvi5/2Zefq8aIgMYJnTEHJ/XLdRls/8jI196q9Nf68aSm5konCg1qHKgQCNAHgQ1T/RvPWX13/S40EL4KteZf4DAngrFnTrOLum7vMzVeKE7aRYJljSE5IALUhN3oS7aARP0b2tnVvXohwda6+75mEzuACbgQF1ooQBKTp/HFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  mr = `data:audio/mp4;base64,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`,
  hr = `data:video/webm;base64,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`,
  gr = `data:audio/mp4;base64,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`,
  _r = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAXYEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggXC7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBmQAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNzgwMDAwMDAAH0O2dUQ254EAo/2BAACAeIBwphfLfW6UHgez22mcTwXmnkkI894apua2JKhsFdUB5+x0hIZP9Tnetn2VCL/SZpcA2h9crwqwtnNl2/fN5M53jERONr2hqX+/pWuri5344Da2JUko6+Ir0gVaLGmF/16JkhpFmkhR3H6SaNTv05sBiDujSGN5jKNAhoEAFYB4kjobR/SToVW1oI02a3l2hbne/S/x0r0NJoGE/zDiSFbrLmey8UxcDPLqXkEosZhi0wdSAmrLk2eD7ZQRUBUryjAu0N6l68nRl1UZ2zqtf0GnANdeWaQK53QYEhCE/J+RINXwyfw4QYX1Sa0H09JnEghKI8VJi1+fwz2mpDUacE0do/iBACmAeIVV+8G1C5m4wTEWiF/GQ3Mjp3kRKfwQ+jLdgIDt6cZf8Ggi2PEyULZSFAnMoSOAixYsovxY7vL5pKUjBFiOzKd98J39soozsd/la+fxIhFBmYJveo18mVAEGD3IhnuYDaUSLCwJWUolt57CQb2+vqkUoo+j+oEAPYB4hMdb/p4TRM3zPcO2joh5zbQZ/+fxUGX2mXB6nLqDOZ9x0Wxsp9G3MxK2w8PcLKPlXsQg2OHxKqPwjAwYHGGkjotMdvzgVxOyonPavFhrcwjBVb3HFoPzptcZCCUzQcfrtkgLjngMYkjQv7UpMFOksPWUfFqvo/uBAFGAeJLuuz1gpe4VgLyaYth4xxfcKv0GSJxYTuXzyCAkJvgaeJtVjllLcy44D+BA/bZoZ77U7DO8oc4U0WiroVlbubrnvJrdwtn3iEI4l5YSXyzzQrdrM6E7gdVKEVNr/XL2uN/iAurlmrKujiiHvBcu3qUmmNJuE5ij9IEAZYB4j5N/ofx2faCnZpHnDdj4hA200C1Q+/AyteA5aaV0XGwHSI2XzhHzqElU7g+72vccZ8ulmeNYBCSox9y5OC4afOckn/QpWvHZg34pA5ilVyrJjW6mzTEd8oVp6SoYSgd6dXt24VsX6DAyNF7Wyvs8o+6BAHmAeDs2eR5MocsBXsG1PcnMjVGawx3CYgugrAm3OalAFUlnDwGz3CnkSAhNnQiL7fJz0Gav9TgV67DPAKAB98rCBGLWLRO+q6ke6Lvoqzqc2ReyQdEHkgKgO2B4vp4k/nWBcAi9QePxCaAhiaPrgQCNgHg5eFpdbuAmB5o5vWii9fmxYrohNWb4VR3aL4/q/Z5tglUARwB2dyASCMq/VTx2uVUwND45czYjjVP56cR7G34mSffZTm7tMisx8akNzPil14DBsItiI5waWvU73mE180F/nXsCQpCg46HYgQChAHgE84AQpm2nB4h6hl+qTzP2Xk3uejOkWoSH3BbnaJ/untj9/kTdMDpL01ybh4Cm1diF3SOe7tsqKAjauwaw5A5lil8t35psc1IePVAn9pR0b3Z1BZuBEXWigzVn4BxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  vr = `data:audio/mp4;base64,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`,
  yr = `data:video/webm;base64,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`,
  br = `data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAACAE00QSBpc29taXNvMgAAAvttb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAlgABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACSnRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAlgAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAJYAAAhAAAEAAAAAAcJtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAALuAAAAkQFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAFtbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAExc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAQAQAAAAALuAAAAAAAAzZXNkcwAAAAADgICAIgABAASAgIAUQBUAAAAAAQoOAAEKDgWAgIACEYgGgICAAQIAAAAgc3R0cwAAAAAAAAACAAAACQAABAAAAAABAAAAQAAAABxzdHNjAAAAAAAAAAEAAAABAAAACgAAAAEAAAA8c3RzegAAAAAAAAAAAAAACgAAAG4AAAEEAAAA/AAAAH8AAACCAAAAgwAAAJcAAACsAAAAoAAAAJkAAAAUc3RjbwAAAAAAAAABAAADJwAAABpzZ3BkAQAAAHJvbGwAAAACAAAAAf//AAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAKAAAAAQAAAD11ZHRhAAAANW1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAACGlsc3QAAAAIZnJlZQAABnZtZGF0ANAABvWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4BAlSutDESDEgIfX1rKa3TlZthSuVmEXKitMMfARCDNIWbRDi+gIWb5DyF67IfAL4FkPmh8hiHxK+D5Dzx4wIdHvk9LzYn2buRPr/QSfNekE/LvpMn629Wk+2cCINzZDCYEhuOfEOs81IbbRkOI8/Ic528m0CdifU7yBIudB/C9REDLlVBM5bohkJUAgNhClZIwFkojCGW1GA4cnWeQlYaiIxM5LQWQcP1fuogMMplwNOCB595yIBDXY6zL8hlHQ65rMw/W9eVb/D6OyYHrv9PBbZIQjeAjJC6j8wyyPSGZdkum8yMdlxP8cAloGBAfU0+kHgJauRW72tu4BAAUzAAHx0yBwEqmRrLQUjEgbzQVSbpTZToSBsp2Jcbntvz5ec/+jJ9+tPMP/70zXnXH7rnX/9jV9X7eXXT/6pPxr4dfAnS8gOgVXH633dLsB6904pqocemZ+g/nVhfjos7HRY3k0OOw60JFPdBWxO4fX9nx1GjJYz+7taQtEVz8dKBZY/w4UY+EETBObXo4RO+vVMnsaZ8GJmAUNOnfo+3mXt1908ic/JjGGu0DL7vd4g28XZJkhB0XqsVmow3reQY3f7upCV9534h3Wst1/YDem1IKXPlxrtwgc+SrEX8ECWF3bYnfxMVpBzgl1LwJH4V/YVxr3PCNUv1kT4F09qlDsvwHAFe1JnEM2kMSAIRLtfF6wjlxi9F31NLW04XWDnvmxrqcZEVlevpxn69iJKg048+tM+udBCanNrW5lNJXyVObPSp1VYMMKbqMqGhBhM27Nz95dKq67Fvd61cMU8JXpQlaBfO+Z1RBAU77mzgfD1DrSj2gDXbV0mAARo/UB/ZADgBVhSgbHITGUolQolAb2Y8m1r0Iazo9k6EcS8Fl1vKcyYEJnx4Vk1BJiaDGEzxjXT4JRGqKGYaUJ4p8EAylkWorPZjRC2XwwZd19L65ozGSTLx2avtaSTrsdCfHOe0FoLmeJRCQpFFWsURI+67kMzT5Q2ihSyudmQB01ALgEETEYgcAVgUqOxoEiDYBBE/Etbs82A1Ml9NLjhd9g6Ly3jXCHxxpUCK+si1hpiaAIIZpwiO7QCpDoRyStVsq0VpokNfC3TWNwpyXSgWhVaCLkVrSxnjSLy4sq+enCyRyxJ7KVV4jW52Dl20eBOEBKLd8nL7WfHyJRhs3jtI0hOKi+vHToAJADgBSBShLNQhHMYDMTrn7tV2X5wXNETVpqXFx2EoPS1/FG8sGApqZQCiF4SkYgfU2eNt3SwwWuiNEy7UwIMJBfNL/phZ3Ik7TA6mZVhI9M+HkKy6vlcoTor968mIskpbwX+1un0UVSToCNEadRQgBKgw/Vbh5QnsE7ZOOCXonZm+EH/22al5tpWJkUG1qKvKzwQwgmUA80AOATQUqG1EURAIlV0Ra7kzg4jSdItCC5R7RMt+7c8tXCPZ4MjniQvZ5sZrZdGHkwqr3drHFP57ddAI4zis8vn7cLZSE5gaukEGGembLS7EMU9czXxX3DUlzXKvvU4s1Daa+F+RF0UmgK6ynFGV8ZQTUdVW7lhE9prJ7rXvaaJwnvHdbirM+lEBcQUlFIfBpsYRJP5X1VhAAUavUIBb4cNvaCp2haArX/fbaMFq4AD4FK50NhBF9b83Z415Vwu9zuTC5TyIhl/iITZWiktfEIzY/nMqhJPGRbBnZ9Zhn432v6xKZ5kQSWfcu7crA66t4GQxEYRCT55M0AhBISnKIxLX8XM2Yry/OsWqf11uh9U9H8x2d0lpPTHy3Df+PnG0rx/1dF8adl1KPta5ekr7ng2kXylRllAwD/CN+F4JuYCVZFpoc6YXdnokZmcTYOAA0AAG+FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4=`,
  xr = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAVEEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggUu7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBiYAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNDcwMDAwMDAAH0O2dUOi54EAo/OBAACAeIAwsH7F9e33DHiancf++kxPUMQ1iUZPEPvxTBHZ6xk5hSqHGUErU9Ik9X4ESMFTlwV+eXYJXNIcDwbWMhfXkXC8uFnOZd6VcnIfl20GFrFBBXbLtB3AnNNGb+z8xMQEwIcwXtN632pDh27BoqRpo/6BABWAeIRfCTz9UMhx18Vwfk6kXk1zlXMF7OZee2/XJJhxnMT6yr4HtL8IjfP4tOX71mKUVFil0SC4GYmuqxwXthd7mqopQPb/y1eahl7lnvLrWSw5agvrWqoYSwomgp/gzxDUlsclnvZxGVuhUWXqL0TdAr6Z7cA6sVmwakCj+IEAKYB4jnGg4wO7Z6Gr/WvmtM5a+h4kk1JG91Sw7vZfg1Y9kAEOK4yiiADrHDSuaA7FRsmh0ZiIF6uW/DWDKZxZ+LofxHZ4aBfhcs2qJ/P3YMDlvBIXaLQiHLiwfP9BG0WBHmZHKoRprSL8RvLIdwcf4KO9pNJmAKP2gQA9gHiLw9332fnLmmcpyaZ2Kz1kP7MaEtQxAER66xbAdxOf4hHnhJ53iMmdO6Zu9JUkL+ID3TAY5XfvxICBfnHbaZad9qPQ7+rAC5D2OVaJJNogxoznj1njozq5uHNKm2MCF0LKuK2vhf/6eM+AZf5+TH1326P3gQBRgHiKxHj4w5P3YLOnAJcMC22aWZs/cSWyCxpAHUpBAcv5LD4VL1WSsfEQ9ieJi6+L3sL038P95+2zEmpLd7vZ//KVr4hXhbLJ3bOgJGyZ9N1LlTlB404bTwnKonKVhfUlEcxI0LAv0tFMmXDI/AJdF7sTbnSj8oEAZYB4BMxL6u1V1ZawImsAzaVK+Y67dONlyXMyRFpnBQwjDyLanuC4IxMVUfRDrgtnCpywDIXd4elrkUB9uKf3Xdv2yanK7GJG+loxVLtmNNX11aeUhLwQNYpG1KKhQc28eJwJtleEVkUaQS8YBI/vHaPsgQB5gHgEGO5E595VWQQRFrt5YG8V4Mg0HPS6fnq8dBywn/n4L94N1+DYHHpuDHK5Sb5QKpCDa6Tr8X1w51PB1Gk1rfnPoap1ym/gJVUxPvsvscgbcAGw6dZiMoaVIX0I+ZtXsZTe3UzY854koNuhz4EAjQB4CwABQeudxfb6uHNXZCQDycuZxdZ3JM2y2oiNJCPo8Fu8Tyz2NYqdKOjxIcZnhyCvJeP/aOU0wABDdRpq6WR6xteVId+aitVaTF2bgQZ1ooQA3UCgHFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  Sr = `data:audio/mp4;base64,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`,
  Cr = `data:video/webm;base64,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`,
  wr = `data:audio/mp4;base64,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`,
  Tr = `data:video/webm;base64,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`,
  Er = `/assets/level_up-1-q5419SXk.m4a`,
  Dr = `/assets/level_up-1-CpZKF-pL.webm`,
  Or = `/assets/map_change-1-k-RsgySf.m4a`,
  kr = `/assets/map_change-1-Ch3nYCFp.webm`,
  Ar = `/assets/player_join-1-C3GPnBTP.m4a`,
  jr = `/assets/player_join-1-CoxcoV6v.webm`,
  Mr = `/assets/rank_up-1-C9Z6vS1B.m4a`,
  Nr = `/assets/rank_up-1-CBzYhHYJ.webm`,
  Pr = `/assets/shine-1-Bv3qgJ_D.m4a`,
  Fr = `/assets/shine-1-CfmfGW-Y.webm`,
  Ir = `/assets/shot_pistol-1-_hp2qJ3z.m4a`,
  Lr = `data:video/webm;base64,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`,
  Rr = `/assets/shot_pistol-2-Xcfq1yDJ.m4a`,
  zr = `data:video/webm;base64,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`,
  Br = `/assets/shot_sniper-1-YGoaDwzH.m4a`,
  Vr = `/assets/shot_sniper-1-CjvUglHN.webm`,
  Hr = `/assets/shot_sniper-2-CJrWoZKc.m4a`,
  Ur = `/assets/shot_sniper-2-DjSYlhOg.webm`,
  Wr = `/assets/split-1-RkiN3YLg.m4a`,
  Gr = `/assets/split-1-DMHK4UNc.webm`,
  Kr = `data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAACAE00QSBpc29taXNvMgAAAv9tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAqwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACTnRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAqwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAKsAAAhAAAEAAAAAAcZtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAALuAAAAoQFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAFxbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAE1c3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAQAQAAAAALuAAAAAAAAzZXNkcwAAAAADgICAIgABAASAgIAUQBUAAAAAAQiCAAEIggWAgIACEYgGgICAAQIAAAAgc3R0cwAAAAAAAAACAAAACgAABAAAAAABAAAAQAAAABxzdHNjAAAAAAAAAAEAAAABAAAACwAAAAEAAABAc3RzegAAAAAAAAAAAAAACwAAAG4AAAFsAAAA7QAAAIwAAACSAAAAhwAAAIIAAACHAAAAWQAAAO0AAABeAAAAFHN0Y28AAAAAAAAAAQAAAysAAAAac2dwZAEAAAByb2xsAAAAAgAAAAH//wAAABxzYmdwAAAAAHJvbGwAAAABAAAACwAAAAEAAAA9dWR0YQAAADVtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAAhpbHN0AAAACGZyZWUAAAchbWRhdADQAAb1oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOARBUrpQ7DRmGIwIIXx01O/M54nac3eVjLKRhtnhcq6ksh/xD/EEMIOYQwFUhSnSrZJxBEGxsehky2QyFInBmEMDxYhlJJOCEhzHxSR8APJ+P/NJLo2/IcG0hCVDIcE6AQ6/30h4t8vEPQHpkh7r96EPbPqUh6C9BkPPHiDuAmCNRcYhFpEJIiYXS+wg+VdkWtIBCxfIVIW9OM42VeCcBJlVLQyC5RCveIVXaeQCzHiMEB2wTAQmRJOLOJz45NaSakXeP7n+T5vvs1/r2baPyNd/bvSxhm+t8BGNIO7jDE4Sx7jqruDjT6hrnw/KEFubx4D+5rDNW5kOf+/63j6Cks+LsZV/W8w2yUbdGAASwE8/Pqz3vFx7efLe8XHlnoVywKAXOwfAXAE8SybRtHYOsVgiIQEtCJI4k5+zx7WePRbM8yyv8ZSizNezoN3l8uWX7f7Pld37FVVs8ZROx0UYAcPw/PXHtAWvwlEaAOAEqmc7MFkVV3YymkugoWJl34PI/yn/Guatpxav67+es8yfDRDncQHILIxRTvarXE4pXiPlp4UUilg65CbNU10XEimyGzrFTGpJk+Lkimx/odMKj0uLVDG9wJUQSBkJmAjdb26Mfx7vs9cyEgA7OmfX/HiAABAP68+AFZyYZnQv2SaQTcGSHG5JsD068xJwXaI9ggu4ZjscCCzSupp3gSvHMAmC56mTxCGEGIUU4svu93s5Y3hAnq1x1tKNKq2Yd+YOriu40qi3i7FsogBJ1svoJmAoRS9v5RM1VJL+z1IL1mgzM7BBj/8ndNKJqDgFY1KhstFEYVvoLinvGQR1RAJrOMjOAg2782VGn6fSmKUo1v/APqzp9rTNAUzDaFmaQ4U5ueBfBQ96Q20V99+xZOt8gfDXVtXO/Jr3QqiYd0K4+8rbgAUhItf5rSrr9/8YA2T4bMYPtWFgbImNkJVHH+MQeKRTyRAHmh5PDkL5RdgJYAXpFM8gBjRBwATYUoahGEhRihqerbxPEhoRFDgkggaZjF1sdMsrOeudyaXUpk1SkTgnFHAi9evzkPCMIDxp2rRGU0r04+AqRLUiIKvBJ9hDQi4J4+hFaN5LaM2XL4YSWwW/ReiUk2jLkgnQkB+2yLxJxg8Up6o5cA8KSwc99PhXyTXp3KeH7IYsPHD6jE3sFyNLYWEBJa3YwAwcBOBSZaNJQnTUT3vesOVh0CItJlkAvatHwSfdvzn/djr1qcstKSSaZjjEnm40dL8NVwKRnUs1xkEG3mEWTjWK/0KKkDodpwzp81gPOlOsHHlHOuF807GhbudatJ1DsHissRxWWHWkiVuCQGPqbxBgCY8CfoaMAWhUvDvVjSNTiAy0kwgYQAcABMBShKOGR0vJt6MlKtdlSQl2gL0LquDNCFVzNHJw2oEZNhFP1E3wX82NoQ/wypfqBwoTqVt1NHV195QTBeyHZwXXPdEH56/GYHw8MS38ILJ3wZFaYp+myINZSmGaqnv1wT8PHD8IVvY+1Rc3Ucq4ZPM7KTmyikmIouEwAJHvCnQDgASoUoYhiaKl61J8oHdYsi0aLiakxToamLNLAJdJpKHJU5Fm5pIRwSmmhogm4azR+pf66MFdMS384SIIxLmVoczgDQXjDDre7cZzHrnMkkARE1+FvqfbzfD6sywkgEWA0LT/B0jbveGUAyiXiRyiWUkyHinCUPh6KW9B2+AgWDkkgCgAQ6YAcAQwUqHCUWAhKCzpR76ZHGItmlmi5UyIhj/gLfegpC40Y4QmdDNlCFY+ywnUgaaKRQ4TT1rCt2iiOotNfBVEntZhFPYFLatd+JJVYMGRk8Jl6wAPMDFFlFHAAoBStlJYyDAKFAYifz0AEDYAA38lypgfy7xDzU052PlVBIs8iChg1GTaNQUcr0SAqBM88gycTgTSEOWTjyCEqMTmwyFB5OkwhUQTqjwCvRdihbNTWSNkBKyWQbtI+MrdJT1Sr6LR1Wmpaas1qNnp2ena9Xa8lTJZk2YnSJ2DNgzMG1CtRs07NPHhx1aNU2GOGOGNdNdNt9t91l1lyzyzyz1UVUSTSTOzs7V02323ksKGBgYemmmCQkJCQm7du3bouWWWWaaZLdu3bt26LAwMDllllRAwMDAwNevXrwYGBgZNNNNNNNdAZ/7f2gDgA0AAG9KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO`,
  qr = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAVVEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggU/7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBjwAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNTgwMDAwMDAAH0O2dUOz54EAo/6BAACAeICQcIngyGwBVadE5AGCBg4QsB88U2NkCyboevvxixxeg+WzqSW9iP74ozI78ZBpKZTBNncCemBX1eqDw673/CwGmzMsy6s7JltGCMAiB0KD5w8Uy6PnRc8hA3Y9e6cPDDRpl7Ese4YWPp2lix4A+LgavjsF5vI8STijQIKBABWAeISevoYIpe8D5anXaSEh3bDPyhhNwNEhPUfgHG00SoGNxWVzld7aQ6MoGVwD+HzgT8N5BTfoR7rCPCANm3hUGZTEnAalNIqFK8pF03f69Y+o4Jic+F49WMrsrEME3ohoWaG/GzbQxF7gYpjQvlKJ07DGWNiA2rT3amAW70ZBo/iBACmAeJS8KTAPCEB/XtQU+WzP8a4Pn+iT+cAA9AMjUScC1RdyEQEF7hAGTwEcXOBhjggmDGP8yiH6I4s9QKU04VDDNnOuwJhPNhgzer8ki6XpHxcQz906Vl2SSbXoSbBQev/blOvhc0x/iPi0owurZHcLDobX1a6j9YEAPYB4kUIMZXamm3y5+MJAu96Z/g1e1XkdN9kg/fe64FjsfN6HEsMdfsoM8fO0lRt10DPfoAXuOZeHMIcTuw34239hUbHLguq88/MIkl334AZCRM79kmiWTEklrEzk1NLc/3xtnmTaVXfZKFlRtDHaH9PrQqPzgQBRgHiPJ4hFHyErKso8ukAO0bqH+SHlgOTw7AfZRd+d0YPi0GYUQMFzCZkNnSXkMm3gJqGlq3+/ZR+ijpFeqi9U38wiU6DC9D89vC+2RXRD+WP2+Pi25hzWMneDVCbgbW7DGT10GrTMsBoSnbK2yqlAeaPrgQBlgHg72yqod6Xzj1/4WLaGutDAcQDm+9eMfQMf0U7u8fHge7TyrUGR/07KT1BGHFNopQRaGSgOLfXQoJXg+YH9bnujjyHmvyNIZ+VNCIBJa0sftXFw4MTS5xHayir+zzf0XB1gZvKowxWj8oEAeYB4BanLGpRwFox5qqFYOVewVrebgEtPf/b+Jay+yRWEJXuO5O6BHJJa5rPgVkUT0IFG9z4tHivsOnV5usLDG8PlxjzIL/t+TWulMGr2bPQgBGZ+a/gXj4/ELDLtigOlnPXZMeGZXrLomlBgxksJ16DiodeBAI0AeAQWgAZHezM3Q5pCkAGgwQ28oQ/D6XeMc52Yv4zQNsDajh4DDNgrhUogbFdeBPxaVvVCFNyG2QGrcEJSM326aP8TFFRUUbvoCL8sn/a0D0WRo8KbgRF1ooM1Z+AcU7trkbuPs4EAt4r3gQHxggGG8IED`,
  Jr = `data:audio/mp4;base64,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`,
  Yr = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAS4EU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggSi7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBewAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xMjMwMDAwMDAAH0O2dUMW54EAo/2BAACAeIMRc7kkkjO7bUkAAfp9XohwDycPaQgs3vKaa5W2YEi87TlK99ZeZgCXq1nihlCjx/cOPe8BgFBFV+lTmdNOZOeLm3KPaJ0obUjfFZgnQPwu7Q21AYWybRdEQlxcqzDTH1fw1sSqs3no9kAM99XFth2O4uL7Wn2l/qNAgYEAFYB4j4wx/bauz97iau3iEwjuqZhyQEj0CypNVfe1VIoQUZDv84S1GhjHwerQXvIQJfs27jqmVBq6GpjWtlKueTrpYZtxHpSXOFz8CeFFMQ9tbJsy2UfcucX6Ykr3H9AYCJzNenY5o+wYSUqOOeo22cj18JH1mtIUr+Fuz1uRDKPygQApgHiMQ8YzlYpJzPUM2byle1dE9E+KU1eGn1fUu2IlbQ6U5FEM4xrKUdQRBiOFbH/Tn0/LP5WYzcFNUB5fpWtCq0tTg7chht05TiywMp8bLjBIYiGyc76ZlvqACmD7xoGjc1dGYHOBSXYL/cfiRgEXo/qBAD2AeL2a/0Bl5p+1JrX12avjagBZ8sopp381z8N2NgULvSeNeUOgFIo/332V22GtwA0fhfHQnfXHXI7r0BdPjpLvRvk/gO9iLgzVSGIm+IMDc7y4omE8dskus26WNBlD4pN8CZqMYJ0QPRoYiLldtdlNzDTG34ZkBaPsgQBRgHiHFMCPn1YuQFH1ahJmmu45YAwnX5AVZGq8ZW2LM60ZeXpMPWueHnSVfkx3kPsZ8DCjq0V+AWTUKmD4L/FUW1Uyqb9ui6uOPhmOuYD40hv/z6XBnoJRnX6LepPPrLwY1cIoN1bMIFmGo9+BAGWAeAHlAUl/vFbTcjoAncWdwHS8CozycM1PH6ky4E479dtqZwnwj8apsLenrC6z0BP0KfUpcZYGcdSH6N5JCKD8X7hUr4iTRbI5IY6jVZJe0oJVsqOW5f6vRex1RaDPocOBAHkAeAfJfcSxKVrv4UKM19d4/Mo6nDGH7jyoTbYkD2Yn0IAAAAAAAAAAAAAAAAAAApu5RydbvCeq2Z5OvRZvDgfLm4ECdaKEARpJoBxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  Xr = `data:audio/mp4;base64,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`,
  Zr = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAVWEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggVA7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBjwAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNTgwMDAwMDAAH0O2dUO054EAo+iBAACAeIAwy1fxQdBlI0394h5if3r/0uJ0ffuIkTTorwmAOYmjNyZoAL3qHTUX1rvXQe6tbzuzyDlvVuxhw61QnnhpCtKJMTG46BccypumRO+p3S5fYV8e21uiypz73mFRjA0XQ44KhKP8gQAVgHiEorw8WdXAzKh25ou7otGJ+uVJzbOMKR63XjqGuF9qEF+ts+DKpf6dPg2I8gRtdiZkWDQiXKziBtey4Iw5JptJ8No6R3cgvVJoCHV1VvbBmZt5Do7lfFljLDuQMMKcxoPvLWcY8QCmIuKZ0dlnZFfA8jjb6Z1K7aP3gQApgHiQKbkbz/2aQmcrupKMzJz7uZGXz8af+gxpAT7dxWyhlTaQwr1HRaQVvZ1BVUATDxKl6avCl+DE/tFNIPt0u/Ji+YqHBf/PabXaumBivgUEs2dCbXz3lKj1S0U+E/21NVZJ0IcwN2DFG1cpsr/lAFZZ+RKjQIaBAD2AeKg2hlholjzg3YGmSKrSyphMDn63mQkBQsnvpEfPWLsE07qCPaAejrkeyGo2WNdRs0atF2hmypdcNhv1BCAdWD8MESVZttDbvJ9tjmgJ6095IAT4BlpK9iWdVYWf4q3S4mqPbaiuTUpMxnEWgF1HUOKYoagF80BLsivm3FMU+wuHt6NAg4EAUYB4qpIvkufW4dOrY3J/GMwYxwSqbvgjVCttbNUVb7ghCfevrcdy3T0eizTGQznaeHfeRsaZsBdb9/STahobrmw0dpJVks79JZq7F+KB3IU61kc9dzJ8lSvdGLy1vqleqiWTKf9LywRRY7CzCOgp9hR10+krnXABlnjZqXDOuFjlo+2BAGWAeI4BR1eUNx5GPKXY2BBlPrELMN0jho89MX72PtngVlIdHaf62/CwsshSPnUFEYc3QzoirSpfDiJeZZ7mqL/MKEvu8PeX8+6oeNSZZwt1kwG26KoNJwWuaE6kPGWx7phwaG+6s3lYzXkwo+qBAHmAeDlyy2Z/xi9sc61dlwqH7FWGGx/O0OopiicFLwCXnOUAvQ6zu1OpddsX6SxacsGpWR1uBAAobcmriDm8scPKFrnHjfjMHbPY1+PhtpO1sEvhKQDL+c38rlyaC1+4RVmg389gU4GAoOSh2YEAjQB4BIUAABc2Ml8Y2JMLWUSqS8iQqitm2vRElu5w/vlkPd1gIpJTFh8C3lg5sDnmBO0W1hQGfdG0wRZWWR7jq3IFjAHgZlsPuaCYjzvAeMfoN2GNI+Mqm4ERdaKDNWfgHFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  Qr = `data:audio/mp4;base64,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`,
  $r = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAVIEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggUy7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBigAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNDgwMDAwMDAAH0O2dUOm54EAo/KBAACAeIBj2N0H/g5RbN1l5t8n1G8eTI3h4k7EHSkk3cakdOPA0m5MpG/TYHO8JLNPV/2I1Pi+e0I+qP8iCJ2rk3Fm6Zd/oPS8zac8FObqOm/nfQelUsOqS6x0CBO7hVE1VlENchjWjZtt3SxVmUYJHeWj+oEAFYB4hIvOHcC5YD6h6uV3p/yLZny4FxXxBZO0Ir2aCDmWLR7GWQfMx7K3sDtuNrYlFrWkVjUgTRwJhb3j+Fs5rw5HRunTpewHtN4Hmx9yiqSUVYAHM/uUvxa+drWdqg/aN+j0dK6iuRejDtgzaE/yyr7hgoZqkKSWo0B/gQApgHiEo1P2k5kCB781INCBIJph/RI+XsrzTjGgox1ojmDihuDTB2vUN4nUT8AxiVtzRDFVY8mNpfGH860UyZc7vWYkoN3ZR0aFepyfZagoB5UjmYTMQ6CSM5OJJlulx9YPeGODrv5uO1FOleR48AMstngTRvxi6DhPt/Wcg6P4gQA9gHiQIwNa/4BCody0mA2sYHmDDLpy4VmHZcfettcd2UTVi75P+wfejhJnLJILoyPh1zK0+ewiYP2VhSiE0B0QjrQXLinW2uZPP52++KfvnJwAQ7e36R3xPvvTY14CdFr92c13N4Scm9S4eo0jUTn92p5O0uSso/OBAFGAeILG5b8MAjfxgsrNqg2EKTGknvhJvFdOjXEBQjQT3UZevLXlysASy5dvEvjzvBeAku7iOewDqn9Wf9Xf0uOSk84wfEyFPRG+wCmyKmcyCFf5Mlu5zx7KrheqQspff4W0J21uOPqR5a5pZS7N0N9/o/GBAGWAeI3xvXYCCk7vpKJkOur506H7YghPEocmu+UyeJCDRDMIVo9+3PMzy6hTwmkDTbN74anl/etqWPornnLqSrHQRGDk7cDpxmp9sR/45dHfQjKTL/Wu+BBFVHfI4ns/pTm8GryMvHCVmzCCgLU706P5gQB5gHgF2ed/4pmbIa3KXv0fNeXNWUV3ZOGy/VKbYYu7WPPpRVogS7s7Fdv/Xt40ML7C5cRTwbsjIYbSUa2O88YZI3a1keJvGDiYtGbyZOz6/KhJOrIxjRg/uHVTsm8MDx6t049cxHP+pncP3Lk8tPLCOS0tPuJzm6DSocaBAI0AeAPfQAXDlVivQvMa2+wngS9gZu6nIhDzqf36mZcS5h4+fNAORDwDx+xorXPXTMw7vNshwI/QYUIcx3OG92+LkmHYm4EHdaKEAM3+YBxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  ei = `data:audio/mp4;base64,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`,
  ti = `data:video/webm;base64,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`,
  ni = `data:audio/mp4;base64,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`,
  ri = `data:video/webm;base64,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`,
  ii = `/assets/step_grass-1-BpMvCbVM.m4a`,
  ai = `data:video/webm;base64,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`,
  oi = `/assets/step_grass-2-BFqCzWoU.m4a`,
  si = `data:video/webm;base64,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`,
  ci = `data:audio/mp4;base64,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`,
  li = `data:video/webm;base64,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`,
  ui = `data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAACAE00QSBpc29taXNvMgAAAwttb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAA6wABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACWnRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAA6wAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAOsAAAhAAAEAAAAAAdJtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAALuAAAA0QFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAF9bWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAFBc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAQAQAAAAALuAAAAAAAAzZXNkcwAAAAADgICAIgABAASAgIAUQBUAAAAAAQUtAAEFLQWAgIACEYgGgICAAQIAAAAgc3R0cwAAAAAAAAACAAAADQAABAAAAAABAAAAQAAAABxzdHNjAAAAAAAAAAEAAAABAAAADgAAAAEAAABMc3RzegAAAAAAAAAAAAAADgAAAG4AAADKAAAA5AAAAJoAAACLAAAAkwAAAJwAAACsAAAAzAAAAJcAAACbAAAArAAAALEAAACiAAAAFHN0Y28AAAAAAAAAAQAAAzcAAAAac2dwZAEAAAByb2xsAAAAAgAAAAH//wAAABxzYmdwAAAAAHJvbGwAAAABAAAADgAAAAEAAAA9dWR0YQAAADVtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAAhpbHN0AAAACGZyZWUAAAkhbWRhdADQQAb1oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAOyZxD2+zVazUcwkjUy2q5m1vf7G/vffc+8f3zeoHkQ61aaA+BCJCIRqBCLBsw2CBIHUQOPUGNryeY2cPPHijr/UbQyxxDjOLNlbd+1PxGW85vbycA37/5n6i0Skn/TMSvViCYT3nxH2di+T1JG2RrSAx3m2cVRWv2Sm6Iy/4O9+A/Ow3eczzyPqO45x97wNoGQT/xRDubdoqNSWfkceAqcpq5Sx33ZisSU0c/Ty4uvlrMbE25ztBkbX/Lp5dEBQiEuSvRYumPsg4AEumH7UdKW8M0UZRCxQmQUHm/9S2efnTjr55arN11boKvqn9HSXXp6ShWz53QlEhnvmwbCSBrZkeHxxIhbOvoEfYcyk3L9H9OQJuf3hmpJBMTiP7boAkZuff8XkK1EA99hyr4ndHFEgWaZrcxV1p532QuHJdn+cWWi35iB1uSFi5Vh4789qFusZ/vt2Vnk/H0SrDnB6k1/MKLVKGwx0ZAzYmBnkcNxFnv/F3Mjc8mpd4pF+fUeBAmEqm7uoiBGZnEQ7zzuYMSj4tGwa2SnkdE0/pI7R6DH/p4n0kb6J+7A9eBuInAFE1KiM9EkkBCI7e5ciWaUMBugWOFyo2AAASIpTHalo3FTJgMH1zWRmbEh3SzJZo913BbiV2TcspGctSO7Ti7tC2QdUiu/I80JCzBarGRYiFYObNXa1t65LtV9QCareAtE80S4Js1sHWpAbWat0U8HLXG1mcj+yw4KZEeMTiAbAJPidYWdVatm+Tb2dYdMmF5SJCOg4gkAhkA4BNhShxTFDY+SrWFFqDDEZIq1gVRDPt8guZldMQQLRU8MbRISYuewW/IAABYRH3VbTRfT7y8A5jlzadn4oy2TSUHx5uCVwF1QuNwK6kd3pFcw6khRmMd5sl4B1oX7nAJcKjWrEKz98rn6n/miiCbeeXV8NmQDYQs/LaUt4qxnS8bd7kgBZIKrgjKAHATwUoIyUKUxIieJRtA1gIUYAzUBzTWDyKhePkM+7jLmXO+cc6ChKQvS6ZTdhivRs7nkkfh1At750uh6rmK0TziOGtesTAxMraVGmKkmsHYbLX8Uwyn4VPp9TOdDCMI16NcS4brmB+tHlY5yZoYNeGga167CbVob7c+xsA5TBiJq3KFuVAPtgGSjB2Bl+kcOXzAHAATQUoSykORhERBG9B24xApYDBGLIgOZaumakxNTXBqwEBPmVx7uyIHT8dWyzv1v1nDXnKhHXOxWQRrCpars89A3ieHx+c0KxYzQR8DeNRhuCXGiZBqmFNd0JB6E3ChAgFDilUhmeXvcwCAVOyjlwIFNv7W8ppxstBm2YEx/JaYvpZCT2OY6kAJusAkMrFtyRsfcmZOoF3Lw1EMQHASQUqSyiQgyQI09VmDcmXMGaMtQwILA+7g//Ve6ENVqbRslbFzMdVqeKTBLahixlxZ8Dfu0tr8Dsp4i+obdwId+IAJF6+fo/r7ZKuDNBj5jqQ8T6e3fZw+aEg07Jjt+OVHCFwXjSKO81k0aAnuz2c2KWr9HYMB8V0HO6aD0NhfMjZ+uhoQKjH9Xaw9xLT3CUy3Qnt+Ct6wV9ENWTQQtCCKvhjPxSqX6yhiiDBwEgFKDtNGiJvdN149lkZNtTAYblQaycDDre2FYeJsqbpuOidEjhe3foblw2SFZNRNRsXLqBuNfdYwfWbT1o+yoYZKqqDe4RO6OGMl8jkYk9pjiFt2+oEJ4UDsoOvBHwZpxrg+aItFCiqrBQ7mLeqQRrEWcFV7wVRfkYOt9TXdejf0dHnnZFKzlaQ0t0yVBxUTold51pypTPJCUvwbdqiQZWvC7W7lWqlDSphYJk+M+s0bMkt83j8FBQ+rWGCQN0K7rUOO5guzTfH3TBwAEkFKkMlClARsbUoCjM4MWyoxCozQBE4ARRrFzJJXpEht4Vr+6LD6m8jmiVUHM8IoNIaUDDWdbLxugiGVibjVJmL7IRHzWEYjFSpgZtqVxt43CNaKW2esAzJWEoY2x3GdOBln8b4vUarb3FtD2ULORLaCOsReElqvJb+ymuFeQEqNxQtFZAAdUzdIaUL/J0GSkA3CkcAA4BJBSpaRJIkMGcoQyFsSbFKBvicBHLk0UNkOvCyRRYwzkgyjKEGIKXqzVcB6ULHVDhPtedxiLlIcYaZua7RTSKbiwWzc5OfGJ8HWT9l/9EEu98gunWKSY1XAi/O6FCdEXqoGd2dXjvYNvEO2rs/mbscWqFU53S7gyc1frvxKxB0Wq+CVnCwsMWCaDETzgUPgDCqPdLktBB/GNwcAEmFKjs9CEsSOu7vMzWOqgImZbkootlouVG0iSCRsu8pTkA2r6xMyKkSYnEq6mCvtkfuwqUd9aTTSGSxdXXaA4SO07jEC4geArScE4GxYDpG6bzepsm1qWCyVpMBJYlqEyfo+lMYH2UuGFTlFyzPegtbbFfjmnfaCfoHZD/nQCokidnxgHaim6wztPfvrvd7UGdmA0pCNpcFNrUhCX0k0GLZMqPKs2QxlQSgDgBBBShjHQzBIyEAghZ7GV44XOLJFFEzFAnhcq41Mw/wEPJNND7mKiRlFgfooHCZJ+pYqsqf3N5ZIgB9fgT190gOeMSPX3akGlmI5re0WSQZrr7bEdcE/WvgsTQVxLbWRpJKNqkocBIWxYK/JVi27odfbP8NbtDeYBtz3xIEcc3Qbx53Hw7lCYQj39y/G6iSChqL404KC/gvjf/F+C1QoUsFNPWsa73pQUUdRDXoe71wBwA0AAG+OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4=`,
  di = `data:video/webm;base64,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`,
  fi = `data:audio/mp4;base64,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`,
  pi = `data:video/webm;base64,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`,
  mi = `data:audio/mp4;base64,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`,
  hi = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAXLEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggW17AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBlwAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNzQwMDAwMDAAH0O2dUQp54EAo/CBAACAeIAw2N0bjaHkeZ/9L8EzTw76fyzfhXeT0ZXMvziwsIf7rhpQrNxRw1xfted09TJ4/FQuPE26ZTTZhXT/0wR4fnN/BhGw/YCExDm+AU1nJ8T3AGhHO3+XsOShUxWce8tJlpUbIvldRPVRaVtHo0CKgQAVgHiDm5SPCIrZgBQ83r5NBFEhHZA49OO8PdCc1d506x7GxQQmFN5tfrdrr2d8giUr2PpEaMUNGItuCxNX/ahvBpKC6O5JbTrHf454f1l5z17in+UKwD7fyJom/dwrrzIwW8YTUcOCpgnGiL3bWZIpzVjkpFq8RLRHJaOt6XcAXBGJeGrj2foxo0B/gQApgHiXh0z11FYXUzI8d4Bl3r2nq3mHRGcitjrI5gfnVEIIB7dzPirU2+XSaIlQRgyUjx3Jqzv2i6Z9B1suFBCgOQi7xN7Ay3rKDGeIFZdWu2RmJ1sKcbYUdzgMXjumN1cZgtM8mLPAneWgVKTb1lhRW2AOUdldhvv3AOl50KP2gQA9gHiE6pnM9CvD6gVdg1X1qdynr0iZp4zA/THj2WxmX9sJLf6AROxseM0KL9J3ZOFRM3X3yGEyZEfbVepjEf8a9ENC84btP2V/dZC63Vjo61c8hyo/LQbFD6Diqa+FQQfm2rVKLvsp+6DFmqNtVXJZsCnjLaP3gQBRgHiEMBes/3AUqLiCuTzAmAiQz0VeoFFEbcVIVnXKWxh40jmHhk/3VpiGh9TJkRr0tZDmjyOe2zFBh/ag8kiU5kay4EbEAXwGDYNTWj2jjIO7ujk28OzXH7u1h5SOVZE7a6zJW8TbN55F76Uhid0orU221GOj+IEAZYB4kMm/c7lXtPp0SALURHS+ebxYGStPz5FKzcrdYANiDrIB5hrFDU0N0XjsFy1Jop5pH3e34kcnDB8pi3eWDrCDw3pC38Pd5K8r5/+GXYhukV43wBFxEp5DCMqGBuBgPCnuLBUem7pcSu4aD6063jJqGPkFUqPwgQB5gHg9FDXMzl/DzEDOZI6azF+k87rRQBTGlUI9SP06iwFvuceCAvVF/Roczxt9tBboNhVzXFO7si6kPyqT8WuF0m0aQJOEWdFbbqpwsnNBbydqQAqAeuQKjVqXw9NIfxrXKULY8wC2UOhoAJXt+KPugQCNgHgGDFcsBCt/px4lc8YKZ71muoUkI6TaJ1eoVa5ptFPW+n3O89o5y38a++xHwIPMZ/vWzzWURt270BPObQgqi5d1pdbgD8Qy9+QjUVuHWEu0IKzlrlGY2KWrAePnEEtK9j05CCvoaGz4go2g1qHLgQChAHgEvEAS2MPzOxYMeeCDECts5go/dTKCTl9Pk+8ovX6YoJ4pd0WvbLIbULeTDAotLv3v3SevTs7cozgoHnlG8WQ8xUZ9fMz7m4ENdaKDcnDgHFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  gi = `data:audio/mp4;base64,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`,
  _i = `data:video/webm;base64,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`,
  vi = `data:audio/mp4;base64,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`,
  yi = `data:video/webm;base64,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`,
  bi = `data:audio/mp4;base64,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`,
  xi = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAARBEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggQr7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBbQAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xMDkwMDAwMDAAH0O2dUKf54EAo+2BAACAeIDTZY1rwdZ8F6yqHuledqHzMByMTUSIQy7lRKasmuCDVUYSEQbDJyWIx3tSXYh0Es4S3iojW06JocEfWTHZ8maiAvGQRdVfCvqj+XRviLdMbIsVjKID5xR6+uKHM4CmRb1CewZDop6io/uBABWAeJUkJb9GzuFwLKnAhEX2pgG7SKdWCKxuWQbmpc1w/1RWwtV2xEPMdfGgRdE6jfWbcMFVI/UaSGnQ6Bw/FG2nTebPqevN4GRmVCBybGFBUSmhedPiS9AKCixyq1wWMwluV6Pg4OA1AcOS7xZtZ4aUUHQYk5OhNhej9IEAKYB4kmDD+wVlW5OC7d1fjegENU+39UX8SHlTmQNWaa3IImp53rsw1ChYATEY0Gfyb94veW5D8IOPqIy4XiXb8FnZ4CBWkO2uKl45x7zNwbBbKtcQGBFg40cSJo84jqJwVVxT1kJsEPA8TSyJt93vb0uto/WBAD2AeJA0VPNfHWIuD38Od0zD7izRL07Rum1rRw4w0mGymyBMLGehVOBQ3ph42OoS4cE0If4Tdp4RodIYmNyvQWHYSTjNBojjZ2nG1o+ztcX7QzalgYp6IMXzOoJe7Xz008kyT2HVY9Ueq64VSws1TtJiPDOj74EAUYB4BdjZWQ8yMX6PVVye8t2y3nOwlksCxxrBO4Cq0eWueCu5APo2xxPfzoHFARCVEvw6DS+a62mCzk70pzQ2WtBUG5Te/xMoOLj6o5Jcvhpffqz8UVh2/pYcQiRzppL1wZZwGtJ7UlN2Rz9CUqDQocSBAGUAeCbYAAPM2UygYlxiTw2UYq94v5Iknxv/576wpMRVM0Jr/OJs+XIsSVP9VYY0ct4mcs9QvVgUuOggAvDdmWW7JZuBCHWihAC+vCAcU7trkbuPs4EAt4r3gQHxggGG8IED`,
  Si = `data:audio/mp4;base64,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`,
  Ci = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAVGEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggUw7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBhwAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNDIwMDAwMDAAH0O2dUOk54EAo/iBAACAeIA9ifV0kHSFmmvXD/QRfOTO3TOgeLu/rUQRbYpsyxK6DS1B6c417gqsssPYJk2ypTlMxPmIoc6QlwuU7cN8Arw2yr2yEw97KCONpq2cIYrifc94stpbfHBrxomUCmnLvrby7/mspD+/EwYknN1GqrdJxFqj/YEAFYB4g0A6YudSqu91g131ZBOhODCDhsvvi1F3t5q7o/KNBM8fJbcuul/xtusPzvxXmq3RzuGX4CBd2vNUtz0TXpwoo4QN2jjtqYA6L5iXn3+/q0LtXI1WAXzfRJtbQrKp09kDbXb8moPhMGWeYwhymItAuA1gXp3EgUeZo/eBACmAeJPnzDjvlVykWgZSB5bRCrDuBDRIaTXjvqNA2Ghy85JCAU8DWVOG0MFv+A2j6EAvAfi2XfM4kd6YurAvs64ejD2gCg4vCMc9j4XPNvdAYglCUfaLzGw0QMFk/thOkkOpx6bnJquh6RrqC5LSHGUCTMCEL6P3gQA9gHiR5EkQ6vtFMhJ0IVt899DRHEPvui78cE68gQ1t2kdzVzQUAtvsKtY/sAsHRemefo9OERH0muj8qAFyDx66wuXYDhK2Dr45sdpoKfE3kOTn4miPVfbjCLzj6CgTy7hydYT5qKJPDuLRw1/MW0oi21i56tyjQH+BAFGAeINqv5K+vKHn30kXJKEvfzPOPvWO0KO0LRsaR8x95+dGORT97lIHJRGY+hwSUZ6piHM9le2oFu8EXUU2Y1oT7jdJANHFbBjsp11TLoqM4dClgSXo3uoYc+/YEXYHUYD3wA0Rlq2q5Sgi6EBP8bHv1ilj1BRULJIkyIXHo/eBAGWAeIK/HDKXBy54L+8Dl6R5+Ox/TnPqb+7CBddwyceRlYS0rmwcLxJGv9b2UhKWXe648MNfeEFHynTdUQmKbmPKI3/94oovm3qMSbsD5JDE291tuze6MBtkx9NELF1WsZjfX6zdUjiJZR9OgPLHrbngZIAU96PggQB5gHgFYo1uRZVZYVrfxeQ7P9obGdndA7JV5DJBcG3cN1/GqFVT4zSfQkErv9cIlD7OQoQSB1dT9OTZfxPHqzdSm4mySpuIMMkGdoQvQn5pSX6lHAeR/tP5mixIAjVuoNehy4EAjQB4ENU/0byq0UC8MxHdx7rxFf261LyYdkCJEJ5+Im9TxDkAXDSAKk5i36OclNIKzC1BPgZYXAiM+z5E/jvRNvWA/pvmKNj4AJuBAXWihAEpi+AcU7trkbuPs4EAt4r3gQHxggGG8IED`,
  wi = `data:audio/mp4;base64,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`,
  Ti = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAVFEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggUv7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBjAAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNTIwMDAwMDAAH0O2dUOj54EAo+KBAACAeIAKMEXF2BYdbgNF8h3QZGswHBT4H75OsvR27YXlXnlYvl2bMcAsFaylCutjvbWntr280YjW54UE30FfsSAGK3r1O4PVUkamvtOkghThk+2zM4gRgSlNLWAf72PkDaNAgIEAFYB4gi0WpRSrCKqJ25dvkmgTJnrsAAKRMax7Wcu4muIGL1cDx6R9qWOtD0eeI1uIkCdKtkZN9iHSQGkbKavrWPF7NWkXqiXkvnaWMlKO7xuzd0IpngsedJGwp/5NXXquGmNnW/46xigmUz3gkbszc8nkbPl6f1VmATkHoR7go0CAgQApgHiFMFfRBtAg72WQLsJYqJe8vZAtWLYBUIi+wtfIPoNVdefY0rpBNOAMhUKQPAcim9xyYTsoUaz8qgQka0gBcea4JFbd2k+NxAldKSqdiUsulIftyf2Es8Omi1Vwu8t+RdwVsjno3dNWoy1DTSod0nQzDmXpmK6GxMACTGyj8oEAPYB4kcl/Sfmw6rMW7fUdmXWQM+4Zyo41/tJhntpLPXwtgHQerKCW8fRi1QSsqO2RK1R/g1Q4Vm6kpf60kZNLFfjISDhEQS6hwpCSy1SlGadTFdzGkCjHBlNGXCwjiKl8oOQAG502J+O5Ui3A1p7CB6P8gQBRgHiROlHfZ84lKsJEgMKTs9d+KaVTlcl/wDkjFIESurtIGY1696rHlJYsPnthS3yAOgsldlIbcvBUIWDIDwKweA2r56NPwL7kEETSNwDleVxSdUaJoV+iIT+Hv1GN4V+iLFfYike0H8HqXBvqBq+LR1RwJFqWPNM1M6P1gQBlgHiOeAVvNF8blQQw+Q5bZZ8OhyhHB9lUF12PZAFNV+d13iuW9vTeB9Wrxp+k/Olp5UmCMqmcfztRWMVHukYTFFcs7/RMi7jGgB1i3RxamChV5cel5cD1XCL7Bi/5PUSamKgtZItIfVwcbFcJh1221hWbo/eBAHmAeIHcBLSIqzr3HEESmJjJAn8Pk/xtFdQwpaPVAdgXfK74lteaw7IhvTIzh3ejevLNkYLxfvtAITOZwViGQB7l7JbSIaKmGusIh4ixOXegR1/PQuSud4BThQjzF0jAwPd7zN9d3d5E/2LBcOK1m2L3qAL1e6DSocaBAI0AeCCOAkFAZ0Rp4/3X4wUGLPrgt3Z+Aw2dLYUxAV1GGRRKo2vJ5Hfz919XuCAUXREzpshFCq+ymR3TsjHxX8/IWGobm4ELdaKEAJD1YBxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  Ei = `data:audio/mp4;base64,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`,
  Di = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAW8EU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggWm7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBlQAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNzAwMDAwMDAAH0O2dUQa54EAo/OBAACAeIDTip9/1sirisMCDaKQSYPDvpszwIkgsKYgAn1SDwoizSQ7qccSXdVN1hBBAkRbQkkpYA6FAxMrZ8DxgO7oiy6LHlEA5XzYoKw6klYWU3VZ4juTIDE8aWc6fMJUWxxcvKt5vBJk4r5GiRe18F1Fo/uBABWAeJTETx9OdZx+0gB1C+7oByAjGE3nZpx3ZLqttPjNju/+v+s1Lg0zRayXB1gFlv1Ju+WCokNJ/MIOtHDIXqlG0vyjWNJszfPH1ld0e+/qspFsiMcmY3UgYja54MayPd9MtED4y6iZHwl7ULU7Yg3gwnjfFsjb3oyj+oEAKYB4hF2VvmsPZr1BnZLLjPtiidl3J30qLktV3VHHy9N9Q1/PjgWOXMseje4WMwe2/WOmSTpEu7EetGusZ7nSM60exl4jsqnCsAov7hAUpC+rV3bB9VQhbZVxPS/ggCEEESBkVYXuSUG6omD/nQ+Yi7crFW15yHvGo/yBAD2AeJCJc/SnONNfFRSJt7TZZAa1f4ZNyAnEZzlAk37ok8kf0bg6szlaigA/Njl28ctbK4ayS7GieLgrRUyCPFhKBZgMjZJXKUBrPC1qPppf9us67AuPd/OCplqEln6mwEI5MmVPHGRIkWRPI4p5ZDXT+aFJk95X+PTAo/iBAFGAeJDJuAu+DgDBUIxLTZyv18niJW/XWQbpgORZvHV/u8F5M1/so3wBrPwigmQZMykkXTke5YqI5QBaiXIWVulWCoNNjFz1jNKvxw+QU25AwkSos3CTcuy7HWdZ7sylnBABonqgsAdFkP9PCAdx3cfSeaLncbSj84EAZYB4j5SM2nk5R7ODp2CcDP3Jg6pHg+NJFwoK6fjMsXvHt/UD4Mne6C7LuvY7TzlUByw+aXb+xt0ibQmFyWSGO0Fq8zD8qevYgDWLd3/a2CdcmTfnl6pQdYlPUK0WIy0NFvKsM7HZESQ3zd1IFw0D16Wj64EAeYB4O+WlLfup/COGBr4tNEOcZlfKKcMaHwdWwY/NlyBPN/pfb2aVftK4afS2hiBgljQT16gf+5BnNFWj8Lf0pIEJTghpCRVj7LxSwUakWdjBt1eHhpxrvlmq6MZOBquadTU+LxY15M+Lo/SBAI2AeAWqx7WrQO0+rMpcji497yT/8n2wjyd1jlY13tqkuPuoxP1xKL+v55qert95yEwv6MAFhEZxUq3WMFwATnTRVqCk/OeiX08cNt0mZKAFQ+qJMmaCQl7AYi10hjzUp5iwWWrrjOBq3Shp6bIMRMFsVaDXocuBAKEAeANNAB/wFLB3qC0ZVu0LzaGZ4dkrMiPHT1ph5s3sElZ3chev/i3LGOR20FVzt3iYITzoFXerMqd+kO3RE/vnvPrRmCfYhWObgQl1ooQAr3ngHFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  Oi = `/assets/step_water-1-LFWh7ezC.m4a`,
  ki = `data:video/webm;base64,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`,
  Ai = `data:audio/mp4;base64,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`,
  ji = `data:video/webm;base64,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`,
  Mi = `/assets/step_water-3-B0FjIGml.m4a`,
  Ni = `data:video/webm;base64,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`,
  Pi = `/assets/step_water-4-DYg8y6Ru.m4a`,
  Fi = `data:video/webm;base64,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`,
  Ii = `data:audio/mp4;base64,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`,
  Li = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAVUEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggU+7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBkIAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNjEwMDAwMDAAH0O2dUOy54EAo/mBAACAeICQCVrzefX7tE+T5IxY4DuoJ/a8HXGCcl683BQj5R+hN9gNVFFCm/e2/DayqSUQc/ollnPrJeWbMXyEQqaapg2fg+h3FuyT/hN0QB3Ji/D7Re6/bLEY6hnaBhvUI0OCXWPAdFkfi2BAubD1Kbq5kbkqZk63o0CAgQAVgHiEen1cpIAexnFlrTzcK3ae86vF4kIbu8cro+ZZJEaGBaMDc/x3E519pqPCftM4AABr5BhKv/xXcZKQTNrxOo33mM4FDz89r9oRS0v4GtiMr1rKMs7GOouvl3bOmoXCNO42c1CBhrQwFPMAIFZfv/j0Tl4FT6OHSbb9OTaj+oEAKYB4kckwVic3Tb/VKA4OAoWrEFeK/sc0hU9pHww89KtFRHsr49b32/Bn3GnqmfBKCqPwk+ywM1Rx8qki8JwT4qM2CtF4EUZvnsZ8g16G0e/Nuf+Hc1ZKqpdiaHctHEz4wac8qS/KU8BA5VgMzJmMN8OGL31SXXq5o/uBAD2AeI4g1+ZBZn80iTWni6ZhF6kOtZ25hFfXhGqwf75YiuJmv075w9odJUKIPnwPIeyerndZ6NaTEDa9kssZAFq/joZkkFblQrR2x0vYbidNAgSX+mzV62ZG4uhcbU9lw6Keo5ooStd6jdfGSNW4rGIpEDhTGXscJrSj7oEAUYB4jfGG9+Sowe4UOZM0qEcQU+5GWdo88PshD2t84bcHBcdqACWrug5hKm4qhHp2YD+xgYBHqUooESBRqWRCrwCgRV+zvAxmaH4LqXKMuqE2Qhg/MMDOpAUzi9I8inf9QERaqM0mfRhnvhooo+6BAGWAeDl1yuHUvnuvRE00iUZY0BgEJM+TzRMwWZozAhd4bmQb0HZPQpujjyCiZkfkDfr5X3plGVS0sCaz4fPzz3oxR5+8qAI7XrPIIl9lPwRSAXg2D5l17KJ6UULoHg27pi7MM5KTpLpBENAXnKPogQB5gHg3AsKyaqbpUautmXavkFt8rpkGRRcPsSA5xEVlsRrUmkcksletpXg1qFjoF+ZqHuuTvT88ioZHqlvNzGY2JfP6Cy2ZVwztRKONCCitzNrDL74HFz3xjoTfXrLAGi7cCMUityGg7KHkgQCNAHgEFoAga9c58AcOzha3dnt4lv4PD0x7WwWHAsUIsvBJSWzBbrkptr3B8AeuMkjl4P6ZV7LEowmj7vaw9KHo/RXUrr9MBjEhr+035demz37eAyyRDwaEh9/NetcKTs7vrHWigwehIBxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  Ri = `data:audio/mp4;base64,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`,
  zi = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAWREU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggV77AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBkoAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xNjUwMDAwMDAAH0O2dUPv54EAo/OBAACAeICQcVLg/NaunYzBvKs2Oo881pbVOH6KVQ9RXZLOFoe8mEoGLvIRroGOrXfAgkjdXnhTQRQ4qhZRy8HEC2CVRu/SLpQ9I2BudLAcs2D4snZune2Wrb2HPKNbdOjH0tRUfMY162KgUwEBSRe1BCr1o0CAgQAVgHiEUmlyKNMoKTBxTLmZWVyMjbGbq8pV5tRVUTPJ2Tf9Y8CBSoz2+PdG90W6mAis1GqJe2q+J/eVgQCjZOKy5DvubGmUjZLNtbnw7jbRXmrB4c7l32SlREZWaYtEd4dSJlPtI6xrCJNSku7D0+BctipwvoMpg9aL/k/i4JSj94EAKYB4hH9JrACQEO6zK2uWGw+JD+zpp/qR3IzjVJdFxE7O/SJzXgnd9r5T+bj9g716WiXvy8ahA2SUaZmXxcrkIIsevg8if/oFGaQhO5SvTSy4Ne+RKDR0NkvykQq1rOthiDlqVjnCcQ0hMws9mpWlQZ9QIGH6o/WBAD2AeI4QMbdJG6Fbki//XF4gdtl73mpSzeZyKZJWYO21REYeIndzDIEH9XklctUvQL0XNLntUYRmeyH5PYN48ESoXPavxV5V2d5qiEk8lc6iiec2+xlKpNp6hZ77uznW7I4tgBsD8TmI4kkYgh/OhX02wbmj7IEAUYB4OmBu7Zha7LP6z0lAz5KhUwLUfiM098guSCqxHjdYWp+jdpNXgafitlVQKIxSuGCVEFkq8xj0JD/TLSaPwwkx7wGrkXJkOpuXyWm3BUBed7VJzsNF8A6t447aIRX6KrS8oepDidi9AqPsgQBlgHg31K4ft1h0gkTs1mc+5o6VnZNAJCwOurXB1VlfMBdRAwgv5gqS/FvQcJdQJwHW3Ih5BYkh7cXoHfxfd4oJ0UtvK6DKVIu+IHjcKr8Rujr7Dv653T+UcXGEouJIKFHtqaB4DxAQ3Prjo+yBAHmAeDRlJMuuz28hElp4mTnD10vR4eHH+P9RggpnNvQ4nKQmWt+xdji2j/+YCF1Sjo3t6CDTUSspN+Qu4QzCNFmBvNW7gFHUdo6L6ldvO2BlaMqFPChxgGKD/4ZdOfEXuL3o6H6FGtRCA2aj4oEAjYB4BBjgB2rYq6/hdtzWKFvj+MSEHQGEN8XEqYngcBv8atHZv24amGPGs0ART2s7gy2L2ngeTeBXm5lIdRMOSfIcI8d45gEbmhRp23gX7g58mx0gl1LG124DagTUeotcoNShyIEAoQB4Ch72pGeGQk/8DOQgkJ+hIY9hWsr7YbwrIyLtHORFUe7ncY8fiAAAAAAAAAAADKcu6hkK2HeiKMUBy2NUbwsmX5DenZuBBHWihAD7xSAcU7trkbuPs4EAt4r3gQHxggGG8IED`,
  Bi = `data:audio/mp4;base64,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`,
  Vi = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAS6EU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggSk7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBgIAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xMjkwMDAwMDAAH0O2dUMY54EAo+qBAACAeIBjyRMSVl2grSdKUyM10UNxJ9JVPS358EsgVOpW+1Y/SeXaaR519QEklrCLuWrnQnmrTujWJ4hI50VRpzXqlHf9ZwNouzGJJJ+5DWyh+uWx7h4JXaJHkP+CGPaIMx/tVATnm7sKo/yBABWAeISkELoGI8dt2rdBGllLY3UP/lUcaA4JsDMgUN3PqbwnfsMQpEUhb5WyU1NVlzqj1BLrcjsKfq+UiBN2aFbYNmDL801AnykozqYqVBD7mGPGX0vSIFxcdsYttgTl0zPA2VvHAPxTY0DfrSetMcPpAFC8sXUL1muPo/2BACmAeJCnnSQ2iSEhYrQWkuts+phCFE4bbG5aNmFb6RYnY/YGOcRMKFn8c6sbavSmg4NevaeN8fkSdxsVMWT+0wozf2sgndmo3QYTGYNpH7rcY/ZVSJ3hxREpWeSUjZvgeQZeFRJPmVyfnUzC9ih2ZTfLdgYRM1bRsuQ5c6P1gQA9gHiM8tdqEKXbCXWKbjc1YCn1vg1Ea70gPtYDGrSfykALQQu1rOvtl4V5ZC5K7KEeL07hwkbfLCQYYD8nYu94sELtgsLG106jW8G/2y1MbOpk69ieNcEXNPuSZxvAG8kJuO/qBT8Ek1MuCiMkPbzkYkeOo/GBAFGAeDjwIulycwoo0SS89VBo883UMHN53T3L1cHgaDbTmTbunvRtSg+Nd2KfsaRO8a9/p7oAoVhhppLk71w+KsL3ld3Hn0pgRLpY5hFfwhWrNNvg6Q9KWmnsE1prXmZC956/q6qAfakrzfQqhYHmKqPsgQBlgHgFlocm+GoZoyxwuJxOnzRJMO8/sGwAOrjZR3p4r45FYw+3+33pMBGcgLyfGOcZSM+3uabL9wf2j3RgohexQF2D5NPjIiDKH9PHaq+t9PrNWmw/maiINDvQ9HgXeyzUEfJc5pJEj93ioNKhxoEAeQB4JtgAMy49z9P/SqOhdR4DeM0bmf6gtsXe3UlqB1SQWUPVKNF7v/6lZ/KiIlYWUpHhgYIB7OZ+y6ghonzJOa+Hn0ubgQh1ooQAvrwgHFO7a5G7j7OBALeK94EB8YIBhvCBAw==`,
  Hi = `data:audio/mp4;base64,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`,
  Ui = `data:video/webm;base64,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`,
  Wi = `/assets/swim-1-DVKEKucX.m4a`,
  Gi = `data:video/webm;base64,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`,
  Ki = `/assets/swim-2-CRKlCc0_.m4a`,
  qi = `data:video/webm;base64,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`,
  Ji = `data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAACAE00QSBpc29taXNvMgAAAwttb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAA6wABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACWnRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAA6wAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAOsAAAhAAAEAAAAAAdJtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAALuAAAA0QFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAF9bWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAFBc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAQAQAAAAALuAAAAAAAAzZXNkcwAAAAADgICAIgABAASAgIAUQBUAAAAAAQUtAAEFLQWAgIACEYgGgICAAQIAAAAgc3R0cwAAAAAAAAACAAAADQAABAAAAAABAAAAQAAAABxzdHNjAAAAAAAAAAEAAAABAAAADgAAAAEAAABMc3RzegAAAAAAAAAAAAAADgAAAG4AAADJAAAAvgAAAJ4AAACKAAAAtgAAAKUAAACqAAAAsQAAALkAAACoAAAAnQAAAO8AAABZAAAAFHN0Y28AAAAAAAAAAQAAAzcAAAAac2dwZAEAAAByb2xsAAAAAgAAAAH//wAAABxzYmdwAAAAAHJvbGwAAAABAAAADgAAAAEAAAA9dWR0YQAAADVtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAAhpbHN0AAAACGZyZWUAAAkhbWRhdADQQAb1oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAP6ZxD2+aYmzEvKbLdKnpv9zjm3r+P2mfr54F3/H8LX5OhDq1HoCEqoJ0csTjs6mn0ZNrbPBefEv2mRavSqzgTqdP+d/Z/VLMC02h5t3fKPa6vtHM9bcK4PjeApD88RrukOyGnWPoI0PFeu9ER3rXf3MDs2J1FiGyNVa1kLP3toj8+PdsOW4+YYp2FVLYe/d6fABVJp+R99OWjFQ7EjOd0gjgGZ0K18sTJp6YjHB9lYUMzYuzygF82ZiNdUwZrXFy2mug3CQZ3AOAR7UrZR0QSgEIlZy9PUiDKWLF4RZcQdP9b/MNPVcEmG57/YLP7vkNWDMnmPwheaZWFdrrPlcofbOH+hbIxf1TY2SfOMz0b2lmglmqrHrgUxmIUEoUxc7w/VmZIvX9qmn45N238Lb7h7v58f239T5n3vNOcbABk1EfT28xgEKRfaINadE5ZCPPkgehQ5Rgcrcyr/FFVXhtk6j3pqXEdBgwWRpG58yrI3aumUOuk6YUpHWEABLKV+Cy3yR0IARBwE6FKHItQoYTAIQujfjeGyMhwQIQThnkIo1t0zSPlmlG7Wx0AEkzkUYcnWpmSFGZvopO1inFvM5QgC/FF3+DiZJamI7v+wBLwA3ZeZ5oG/LAMIDreOcbMU8KkZ9W63Rqwd1+QZTLbIvNpHdoMoqYQLwMMdIkbRy2Xi5WPLGjapVBRrCZbyKrgVFGwRfrHVbTwxPxn4J6vLYWToeaIHAASwUochxEwxej1VZ8rMcmhFmLRpYa0HBT4obA13nS757qcZMRkTlqolSJGHw6uZYgvT0g3KBjG8ZFgQ0K2g4xpmQvLZIP6oEhmGdxotd5uEzwwhjgiCLHYwacbFkmd44DHnyfCG+u3rC8V6K1ikqiUJ0PZ7KAkTNEm2dZiNyFSqsqswAAomUZuwHASYUqMzEKwUKQkCRxEb374ptL8cTIQsLI0F1oB27RdYjCmsZMMFKrxs+fDpHpxynaVKPN20eFJkCh3K9/3nIki3tkvuZuvjOclQYoQ7G93v3LISC+aSLCMHx8KLNV80vIuNB9adL/nHprgu8OabuZ0DryrBkOmncCtnsOw7acl/AyWIWiCniTXVbqgoQxCBsGs8flXD46LomTLbXxU5S7EBk+GzmIxlELQsKN2qmN2lKNCJS0QcBLhShrGRQkIQmVM7d4LUIRg0ZJqyLAG/VNE0pW9DsrfguNJhZl2Yrb+c6SrUcUNOGrUbjZIp3cVm7554r5AK9Onj0llJeoB8zF9ECg8CnJn3VMoudCM12/rxABrUrSnz33bqfK5bjVjH2c/SMSMN5m1abi59+f9Mx3jwVks+0C5PQiN9PXh1oZebo28RydY6aLuXCLqvnm8LccfvRk/cXd53TJg4BHhShjJQjBMiCE5BELbvs5zcFWwsoSyxE1YSNjlR086aBvHNOpNzE5VMC6oomGgTCQA1LcggzeDGDBTPdKdnXjS1YvWZtCGiPcyrM9tdL+pAv+oKwFBSsTrfCgorWmGAtMzGYdvJmVIKxteuafBisj8ayw2c0aILKdBcrMDoTqVmxoFyUhD92IUwywcqMX8oeHLAwyhi8PdKgMgmK4lr/aQTH+FBPQQkBwAEcFKEMlBsRBiFAkgSHddnu1VSuXXh1rDBpchcUCVpambfYiThultaa3ovmS/nBkjXoVu7za/frrTFhpYRINjYzeDDc+TDVebMOmjzT4huHi8PqUXNDGFE6euiZ0SvlJLHGLZeagSxlq2YLJsTBaYL4UFzaXJ8TtwEp0cF/1x9vX5lQw2RH4j6IQf1laCH2m1nbXwJFJmD3IKxlQTg5uc9Gn/3TyqdaRpTIjaICLmXBwAEQFKyQljoolCE/a95fiRzFbNO5wIizRrcsGBtQvixp9uoAaIubHJ020aQmoRRXg+xBPC/AfLq5kfA9E2WnR0t2WKWrv1jPfJGRjDakVgedildhzpUchZkhZ9zQ6Yvgde6kvBmLOGKrczl0Q7df30mG3V9gtgyyzsejnY+cD3q3ImR6c5CcXM0HBCSRxjmw7VUl7J/wa+WY1HUhS2x3Peez39u7w+iaEBreQCwBkfBeCUxulS5dBoBwAQgUrMzUIwUGTBE336ZzhitraC4BILhvgOylm/jIz/S0ixLSNZaXjrvLwSRhxxGkaHVqzcyVyEZuczNGHkFHvQ42pM9DZIsrP2sQM1CM7QNe3hTPejoC9nrquCT2e+hBTNGqafTbCiFF6vodvMFOiLI6lBCf4fDrRgSfPtfbD1ICaTMTjD4hmICIcoE4SQdKFhhmCFMzPUz8Wz/fma1mELGwlJQAEmAHAQQUoYykEKSGZXXfqZvlnlawgCRRcGC5USIhB4CVS/lPye5A0XkkZU6TNlYwzCaqpeLk2t1fhUcpGI2xuqmr1/5A11JgL0o73+FaoFdSCyOJpgsO4Fdoi6Nv3qs0+Fj92N5MmywPFs8VPXTDkwqvhz+DzWdMAZDApHxTCQMAVmDiSRDNmSjKrmDog0J0NglitlbrSBogACPn/Vb0DgC+FK2Q1DCFhEICCF/N6ATkGAACs+y5VwuKf4AAeFE2n7SSKQiFl1UCYqJCLKJ012rbJXGEa00lJrET17Qok1RSEIdBQSJySkfH57FikpcEjOtEoOIlHHEIeLoU6FOoq7Sv4tFi42TdWO9Z0KbDbDbE+ZHvRos5lpFIIglMtM0pMrDgwwQwYZEuRToNzJ8SPEjxL96NFjTWmWkUoVLVm90D+4/Jv+N/Vv2X0wMDAwMDJppntu3RYGZl/NfJtbfRv2X5QMDAwMPTTTTOBv/mR233WQs8s9VFVEkzs7OxGRkZGTwA+jzzweee5RRD3XA4ANAABvRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4=`,
  Yi = `data:video/webm;base64,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`,
  Xi = `/assets/teleport-1-D3f_-SVD.m4a`,
  Zi = `data:video/webm;base64,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`,
  Qi = `/assets/teleport-2-Bvi6t_k1.m4a`,
  $i = `data:video/webm;base64,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`,
  ea = `data:audio/mp4;base64,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`,
  ta = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAARrEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggRV7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBbAAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4xMDgwMDAwMDAAH0O2dULJ54EAo0CBgQAAgHiD+ftJChPM6zMaAClwSfVEYFbEb+0knKQpZTAs1+WpS8q+6kgRJ+pYwUWaXgVwSTuoomroewz93y24D63pdruRCq919zHDNso1t5CNePzBKkDKP6Qkv1u7jrw51qKjAQosiecBO8+h11dIDCmAqwb8cHqJfcnj0+WrkDBvo0CAgQAVgHiExcDotlT7QiZD4qVgA8AuFp9/mCWcIGRfKjvOchbVdhKaPxMcNYH33W+d0IB28BQRZRPmeryhWplvgrqvJ3Gk7LCV+daiRigvb3Ejy+VYIIUB6VHRvNQbeLmRkrW/aovgDjL6NC/Do6zWHFe7d5AgJjAreD25HzR0FVmj9YEAKYB4pIhAgGds2hrhtrhq3MBcc5wbuH4c7iwa85HOPt+AoIZhYOZJrLW+05J2N6fMZAmD97OmHk9DCi4bF5hObJnL9VOBGRAKSRgOjT46nB05IYuYgTwRIO2TGKwh8g9tXQd1snPjU0LZLzK3QyMIE7cqnaP7gQA9gHiAc4hHH8f/4IUw1Wv7Pl2xrbXlPHmNigZcTvaQgmyX1ez5v33MNAfDWdnng0CUtQYt/H5zLJTU3s5LS4od/jwSQ3mYRlcDiiCkB9n86004C8dROIXVqE0FV25z2k5w0fX/zwoGoWcjKgmDDoSmdoVPdeLRRhjvo+eBAFGAeAHlF6Mvl0qwxSrUqNucRjSBgqE9YSDhS7Bp/UwE6XYbDflCc1WFEPND63vAao6pAdk0zz6ancqd7r7AQRAY8mvznfhF2XIxR9BmPZj+JTmckxVI/5/GHtznAvZ0qpHoQSlcoOCh1IEAZQB4CUpKbTdhZIUZhC5b5e4NkW0Bmg4aC+MshogdmYAYqTUgXF5qGfTp+Ds+t2G7ZBIVAUHiLlbPfGTk2XVsehGDwHbjszN7CgYqapx3X4jOB5uBB3WihADN/mAcU7trkbuPs4EAt4r3gQHxggGG8IED`,
  na = `data:audio/mp4;base64,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`,
  ra = `data:video/webm;base64,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`,
  ia = `data:audio/mp4;base64,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`,
  aa = `data:video/webm;base64,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`,
  oa = `data:audio/mp4;base64,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`,
  sa = `data:video/webm;base64,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`,
  ca = `/assets/ui_confirm-1-CxITzBB9.m4a`,
  la = `data:video/webm;base64,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`,
  ua = `data:audio/mp4;base64,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`,
  da = `data:video/webm;base64,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`,
  fa = `data:audio/mp4;base64,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`,
  pa = `data:video/webm;base64,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`,
  ma = `data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAACAE00QSBpc29taXNvMgAAAu9tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAVgABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACPnRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAVgAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAFYAAAhAAAEAAAAAAbZtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAALuAAAAYQFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAFhbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAElc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAQAQAAAAALuAAAAAAAAzZXNkcwAAAAADgICAIgABAASAgIAUQBUAAAAAARIAAAESAAWAgIACEYgGgICAAQIAAAAgc3R0cwAAAAAAAAACAAAABgAABAAAAAABAAAAQAAAABxzdHNjAAAAAAAAAAEAAAABAAAABwAAAAEAAAAwc3RzegAAAAAAAAAAAAAABwAAAG4AAADMAAABOgAAAK4AAAB6AAAASAAAAIoAAAAUc3RjbwAAAAAAAAABAAADGwAAABpzZ3BkAQAAAHJvbGwAAAACAAAAAf//AAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAHAAAAAQAAAD11ZHRhAAAANW1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAACGlsc3QAAAAIZnJlZQAABHZtZGF0ANBABvWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4A2JnEPb7BQ7zIDbjMhKbVuF/xzv75JOfp898vDK1/s2h1a0/xAnXkEzkJsYTKQmRZNzyb3E0B2/v/teq3ftTHgevPWNptWuSYHZIvYduEIHBSsbTRMqHyq8ap07Gpexx/HTFvCshcsVuHxlb3bLQa5FWRLXFmjEc9y8XH5vQGXr6/zqzWvfdPD2w5/BdIrsPVqjOfc1BlQkaGPthGTYSQawePVUPbWIRadhOITO4IoSjKoHZG6rxqHYBPQs4I9i/K5XQb4SIi+WsdADgBEJgS5FV1E0FTRbm0pjwzCbg3GRm4bY2+d/XyH+Ot/mvfYP86r59eJqsP5Z6eOem6NTfvAMeyjT5z8N/iY+emONAkToxjbqIz8BkhMapGgE3OixoAPOoAXTKcetua/xy319OgGG1et76CPVCM7fg/tCPveoPpetG/r5VLgB5cZiZy+Ugn/t5SdR5I6129HaUUslgikhMp74yYK7AYrktsOtPJcbMLv9G4B9dz/42xfYqKx/s52o6L96nex7cwEtwx3GrypjUS5OmPuxFRiP7AL1NrTtp85PRfS3jVUDUMz8+3RSl0rVtIN91L0z4WRYhf4ESa8SJ8E2/Svjk4R0tzpJvx0SkRUlGTWmrn5wVGm6G8UOv6j5g5kOPD7kTVf1/GLzB0jS81NPhbSGiZmdqTwmLj7n032lI1HAEy1KFIZhoYioMUHmZj9ruAqumRmAtboXouVOwAQAQrHFJqhzYHVSWGjoXSp0ujU5y/9uhUX0natSNRPaLUzNv/mQwHGGh1AoskFFelRPiVs+e7rChG/zWiSrNgzRMMCnArOU/wh+hXur4nbDWdzNoCJzQjmM1VTfhdqO8H+qfjaLIUlt779a0qKhlXlDScA76D8f+tt7xjs2VqJfpyNmH4gng0UgOGj56e3t5gDgESFKkMojIE0AIRgMl78H546TomAxu9zNbWLlRtpIkuleGsLxKlSBN2kAE4XBcMDN1+rAy7u0QAAajboZ3aJEEL3SjH7whCxx4gDh/IZn6znPBkaU6CI0h0dgtUGDpXKaOkLqX++uPsgBRuo7qOEIhrAExSIBgvKYMHAQgUoYhgMQQGIQGIQQ+ljNrOg3kXKyJSTw8QDxCPNUJZjqHU4I0BWxvZTc2k2SIYVHd4aqKsSXYEodJVj85PtDL5DX7o5aDgANAABvdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO`,
  ha = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAANiEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggNM7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBUAAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4wODAwMDAwMDAAH0O2dUHA54EAo/mBAACAeIBXGaZHz+TuDT/UMmpwbs2WQkbINt7g2r/W0J6YqEcL4wDqQ+V0aI09MGAvWRKnz+q7Ag93EeGen1TCnCWUzUH/zlSrCQZWhFhseWawp56vAy1ld0AxANZVqflcPT514v2u2OR0z4ABfLm8Ik3FEyHShxg+o/uBABWAeIWCTn6TK02Hm5dMnBEFGTuq+sHqkHC8rLSzaBQmvfWCrqAME6qjz+0lKtqwFs1V4S87xHaZtdPs4bzYYdN0a71RK2pmU/7Irg/WbrkofCbcTGqF+uEQHrOdCKZXpPvSx4qaEr2I4vl568sNuR/Qrv6GZcWm4U2j3YEAKYB4hMXAA5XS1B9QMngAqvNhkSVVbFiJeob2KZYqFzVvbg2uacNC6JIFg4Gcqxh5ofuve2CO18YMeoZd/U4Mg3y6DKOjINO8xcnRtQUcwxGCHoBgi5U91Fy3iKDkodmBAD0AeAWosA+4xaWZr7r65ek0d/chXKuMaGzErl1g4c8E0okRU1zqLZJQNxarqdMjVLOv3SziuPbAcFfjhfj6Z3AHIfhnPnH7MbD+zi1hvdyOwSiAiAA755uBE3WigxbjYBxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  ga = `/assets/vote_open-1-Bp1Xo0oG.m4a`,
  _a = `/assets/vote_open-1-BRtvgPn0.webm`,
  va = `data:audio/mp4;base64,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`,
  ya = `data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAU2EU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEwTbuMU6uEHFO7a1OsggUg7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBPAAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEgY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2fRc3POY8CLY8WIAAAAAAAAAAFnyJlFo4dFTkNPREVSRIeMTGF2YyBsaWJvcHVzZ8ihRaOIRFVSQVRJT05Eh5MwMDowMDowMC4wNjIwMDAwMDAAH0O2dUOU54EAo0DggQAAgPh+0SrK6qXTXkUKnnCs+WHYPRVZp6/ljZ/Ifwo9Eoud/8E+YMfCotuPLDTHe1mbWkeGfsFFBpez5HLc7LX4ryRg2H00BgjuCMKX8JDyuEBa2Q4FXSQ9wO/6kMoU4JQDLb6TwxTJndfCeBXWi00epOGJmJ5JTXnMcQWdFXtCeIFJ2Ji64nrnprs0dQJOguL7Cy8IDEgSaykl5tX+rbAmxrAt6aYGJJgJOtB/HWF8/KO1n4m28I5W0+JuIvDQJYyiZwOqdK5A6veTVXzQSdphKeLPGS8DLzDb0vfuA0yjQNWBABWA+HBg9YKwXGuxkr6UxVhvwtfTimnnv2iN9nGXKm9urolLy/bPbX+IXr3egBvHKa/Fh1EniyYfmVitdV9nZEZ4LntChU0mOwgGf9KmiRWt4Q3+u3jQo+O6wmjnv07pgGb/vlc7q/Omue+N6XgjjN1dipQeN1JHzNnW6ihKbPcIv8gX+pe+Beo0RoZ0alzPYHN9gGyebrTcouO3psnBuO1mLlVlU1N2hN7vxFixB6V+zIQR21QBkfx0pdMRNMPaD69nGAHfIbhHttdXUthMuWv4lb2jQM2BACmA+HzxMOhFOIoAVUGGSNQNnZqrKGBZhw/yvT87XWzJIuzk/OfoSIKLGKvTQ5rbB/OY9yM/jXiAAf+G4vLxc1HfDmuorqM7pLnPkkJ0hH3ml/uD+8l4A3MbmoyHgO4u/L03NVOZTZZZerrFm6e6DdL+KI+yScmppYu1+YqBxHjzwaIBGYN3mx4+WRj0juDE2lTBhYTXkEB5fRch9XPX8rEULrJidcPAgjhyXqGYUAIAL/SfgTmy/OY5W+egs6LLsxqhuO0ZqvQL/RfVoEEDoUD2gQA9APh98BqPhwhtc7dQZxZOfDPoCuo5yRzw9zEI0WQnMYiD8Xfs1ht4UhEccfmKF+S9I2dt5Wkj7wnqSigL4KjQVB6uLfcc+77Kns+zMHcrrQTuKB5aqOChXkGZUFAIlqe38keSjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACftEO+GUUVsuhXnpzLuX8TdbkqZj6awqwhcdFC2+GyhcJEG9ef5fz+un+p/0zA0Fh1efr4j+AXBA376YwCACMujOQ4rAmW4Zm4EBdaKEASmL4BxTu2uRu4+zgQC3iveBAfGCAYbwgQM=`,
  ba = `/assets/water_enter-1-BkaiCS34.m4a`,
  xa = `/assets/water_enter-1-Ciy5A0t4.webm`,
  Sa = `/assets/water_enter-2-48mve0lq.m4a`,
  Ca = `/assets/water_enter-2-B6MLG_7Y.webm`,
  wa = `/assets/water_exit-1-OjWHAs_T.m4a`,
  Ta = `/assets/water_exit-1-Dht9kNZU.webm`,
  Ea = `/assets/wind-1-MUWkiWW7.m4a`,
  Da = `/assets/wind-1-K3ZF5HcJ.webm`,
  Oa = `/assets/wind_high-1-DdlrsG6I.m4a`,
  ka = `/assets/wind_high-1-DL6Mjahr.webm`,
  Aa = Object.assign({ "../assets/audio/manifest.json": Se }),
  ja = Object.assign({
    "../assets/audio/music/game-airstrafe.m4a": Ce,
    "../assets/audio/music/game-airstrafe.webm": we,
    "../assets/audio/music/game-gain.m4a": Te,
    "../assets/audio/music/game-gain.webm": Ee,
    "../assets/audio/music/game-hop.m4a": De,
    "../assets/audio/music/game-hop.webm": Oe,
    "../assets/audio/music/game-lerp.m4a": ke,
    "../assets/audio/music/game-lerp.webm": Ae,
    "../assets/audio/music/game-longjump.m4a": je,
    "../assets/audio/music/game-longjump.webm": Me,
    "../assets/audio/music/game-prestrafe.m4a": Ne,
    "../assets/audio/music/game-prestrafe.webm": Pe,
    "../assets/audio/music/game-scroll.m4a": Fe,
    "../assets/audio/music/game-scroll.webm": Ie,
    "../assets/audio/music/game-skybox.m4a": Le,
    "../assets/audio/music/game-skybox.webm": Re,
    "../assets/audio/music/game-sync.m4a": ze,
    "../assets/audio/music/game-sync.webm": Be,
    "../assets/audio/music/game-wishdir.m4a": Ve,
    "../assets/audio/music/game-wishdir.webm": He,
    "../assets/audio/music/menu-drift.m4a": Ue,
    "../assets/audio/music/menu-drift.webm": We,
    "../assets/audio/sfx/achievement-1.m4a": Ge,
    "../assets/audio/sfx/achievement-1.webm": Ke,
    "../assets/audio/sfx/boost-1.m4a": qe,
    "../assets/audio/sfx/boost-1.webm": Je,
    "../assets/audio/sfx/boost-2.m4a": Ye,
    "../assets/audio/sfx/boost-2.webm": Xe,
    "../assets/audio/sfx/bunny_boing-1.m4a": Ze,
    "../assets/audio/sfx/bunny_boing-1.webm": Qe,
    "../assets/audio/sfx/carrot_draw-1.m4a": $e,
    "../assets/audio/sfx/carrot_draw-1.webm": et,
    "../assets/audio/sfx/carrot_stab-1.m4a": tt,
    "../assets/audio/sfx/carrot_stab-1.webm": nt,
    "../assets/audio/sfx/carrot_stab-2.m4a": rt,
    "../assets/audio/sfx/carrot_stab-2.webm": it,
    "../assets/audio/sfx/carrot_swing-1.m4a": at,
    "../assets/audio/sfx/carrot_swing-1.webm": ot,
    "../assets/audio/sfx/carrot_swing-2.m4a": st,
    "../assets/audio/sfx/carrot_swing-2.webm": ct,
    "../assets/audio/sfx/carrot_swing-3.m4a": lt,
    "../assets/audio/sfx/carrot_swing-3.webm": ut,
    "../assets/audio/sfx/chat-1.m4a": dt,
    "../assets/audio/sfx/chat-1.webm": ft,
    "../assets/audio/sfx/count_tick-1.m4a": pt,
    "../assets/audio/sfx/count_tick-1.webm": mt,
    "../assets/audio/sfx/countdown_go-1.m4a": ht,
    "../assets/audio/sfx/countdown_go-1.webm": gt,
    "../assets/audio/sfx/countdown_tick-1.m4a": _t,
    "../assets/audio/sfx/countdown_tick-1.webm": vt,
    "../assets/audio/sfx/finish-1.m4a": yt,
    "../assets/audio/sfx/finish-1.webm": bt,
    "../assets/audio/sfx/finish_pb-1.m4a": xt,
    "../assets/audio/sfx/finish_pb-1.webm": St,
    "../assets/audio/sfx/finish_wr-1.m4a": Ct,
    "../assets/audio/sfx/finish_wr-1.webm": wt,
    "../assets/audio/sfx/gun_bolt-1.m4a": Tt,
    "../assets/audio/sfx/gun_bolt-1.webm": Et,
    "../assets/audio/sfx/gun_broadfork_fire-1.m4a": Dt,
    "../assets/audio/sfx/gun_broadfork_fire-1.webm": Ot,
    "../assets/audio/sfx/gun_broadfork_fire-2.m4a": kt,
    "../assets/audio/sfx/gun_broadfork_fire-2.webm": At,
    "../assets/audio/sfx/gun_cottontail_fire-1.m4a": jt,
    "../assets/audio/sfx/gun_cottontail_fire-1.webm": Mt,
    "../assets/audio/sfx/gun_cottontail_fire-2.m4a": Nt,
    "../assets/audio/sfx/gun_cottontail_fire-2.webm": Pt,
    "../assets/audio/sfx/gun_cottontail_silenced-1.m4a": Ft,
    "../assets/audio/sfx/gun_cottontail_silenced-1.webm": It,
    "../assets/audio/sfx/gun_cottontail_silenced-2.m4a": Lt,
    "../assets/audio/sfx/gun_cottontail_silenced-2.webm": Rt,
    "../assets/audio/sfx/gun_draw-1.m4a": zt,
    "../assets/audio/sfx/gun_draw-1.webm": Bt,
    "../assets/audio/sfx/gun_dry-1.m4a": Vt,
    "../assets/audio/sfx/gun_dry-1.webm": Ht,
    "../assets/audio/sfx/gun_dry-2.m4a": Ut,
    "../assets/audio/sfx/gun_dry-2.webm": Wt,
    "../assets/audio/sfx/gun_hedgerow_fire-1.m4a": Gt,
    "../assets/audio/sfx/gun_hedgerow_fire-1.webm": Kt,
    "../assets/audio/sfx/gun_hedgerow_fire-2.m4a": qt,
    "../assets/audio/sfx/gun_hedgerow_fire-2.webm": Jt,
    "../assets/audio/sfx/gun_jackrabbit_fire-1.m4a": Yt,
    "../assets/audio/sfx/gun_jackrabbit_fire-1.webm": Xt,
    "../assets/audio/sfx/gun_jackrabbit_fire-2.m4a": Zt,
    "../assets/audio/sfx/gun_jackrabbit_fire-2.webm": Qt,
    "../assets/audio/sfx/gun_mag_in-1.m4a": $t,
    "../assets/audio/sfx/gun_mag_in-1.webm": en,
    "../assets/audio/sfx/gun_mag_out-1.m4a": tn,
    "../assets/audio/sfx/gun_mag_out-1.webm": nn,
    "../assets/audio/sfx/gun_mode-1.m4a": rn,
    "../assets/audio/sfx/gun_mode-1.webm": an,
    "../assets/audio/sfx/gun_pickup-1.m4a": on,
    "../assets/audio/sfx/gun_pickup-1.webm": sn,
    "../assets/audio/sfx/gun_pod_in-1.m4a": cn,
    "../assets/audio/sfx/gun_pod_in-1.webm": ln,
    "../assets/audio/sfx/gun_pod_out-1.m4a": un,
    "../assets/audio/sfx/gun_pod_out-1.webm": dn,
    "../assets/audio/sfx/gun_pump-1.m4a": fn,
    "../assets/audio/sfx/gun_pump-1.webm": pn,
    "../assets/audio/sfx/gun_seeddrill_fire-1.m4a": mn,
    "../assets/audio/sfx/gun_seeddrill_fire-1.webm": hn,
    "../assets/audio/sfx/gun_seeddrill_fire-2.m4a": gn,
    "../assets/audio/sfx/gun_seeddrill_fire-2.webm": _n,
    "../assets/audio/sfx/gun_seeddrill_fire-3.m4a": vn,
    "../assets/audio/sfx/gun_seeddrill_fire-3.webm": yn,
    "../assets/audio/sfx/gun_shell_in-1.m4a": bn,
    "../assets/audio/sfx/gun_shell_in-1.webm": xn,
    "../assets/audio/sfx/gun_shell_in-2.m4a": Sn,
    "../assets/audio/sfx/gun_shell_in-2.webm": Cn,
    "../assets/audio/sfx/gun_silencer_crack-1.m4a": wn,
    "../assets/audio/sfx/gun_silencer_crack-1.webm": Tn,
    "../assets/audio/sfx/gun_silencer_off-1.m4a": En,
    "../assets/audio/sfx/gun_silencer_off-1.webm": Dn,
    "../assets/audio/sfx/gun_silencer_seat-1.m4a": On,
    "../assets/audio/sfx/gun_silencer_seat-1.webm": kn,
    "../assets/audio/sfx/gun_silencer_twist-1.m4a": An,
    "../assets/audio/sfx/gun_silencer_twist-1.webm": jn,
    "../assets/audio/sfx/gun_silencer_twist-2.m4a": Mn,
    "../assets/audio/sfx/gun_silencer_twist-2.webm": Nn,
    "../assets/audio/sfx/gun_silencer_twist-3.m4a": Pn,
    "../assets/audio/sfx/gun_silencer_twist-3.webm": Fn,
    "../assets/audio/sfx/gun_slide-1.m4a": In,
    "../assets/audio/sfx/gun_slide-1.webm": Ln,
    "../assets/audio/sfx/gun_thumper_fire-1.m4a": Rn,
    "../assets/audio/sfx/gun_thumper_fire-1.webm": zn,
    "../assets/audio/sfx/gun_thumper_fire-2.m4a": Bn,
    "../assets/audio/sfx/gun_thumper_fire-2.webm": Vn,
    "../assets/audio/sfx/impact_concrete-1.m4a": Hn,
    "../assets/audio/sfx/impact_concrete-1.webm": Un,
    "../assets/audio/sfx/impact_concrete-2.m4a": Wn,
    "../assets/audio/sfx/impact_concrete-2.webm": Gn,
    "../assets/audio/sfx/impact_dirt-1.m4a": Kn,
    "../assets/audio/sfx/impact_dirt-1.webm": qn,
    "../assets/audio/sfx/impact_metal-1.m4a": Jn,
    "../assets/audio/sfx/impact_metal-1.webm": Yn,
    "../assets/audio/sfx/impact_metal-2.m4a": Xn,
    "../assets/audio/sfx/impact_metal-2.webm": Zn,
    "../assets/audio/sfx/impact_tile-1.m4a": Qn,
    "../assets/audio/sfx/impact_tile-1.webm": $n,
    "../assets/audio/sfx/impact_tile-2.m4a": er,
    "../assets/audio/sfx/impact_tile-2.webm": tr,
    "../assets/audio/sfx/impact_wood-1.m4a": nr,
    "../assets/audio/sfx/impact_wood-1.webm": rr,
    "../assets/audio/sfx/impact_wood-2.m4a": ir,
    "../assets/audio/sfx/impact_wood-2.webm": ar,
    "../assets/audio/sfx/impact_wood-3.m4a": or,
    "../assets/audio/sfx/impact_wood-3.webm": sr,
    "../assets/audio/sfx/jump-1.m4a": cr,
    "../assets/audio/sfx/jump-1.webm": lr,
    "../assets/audio/sfx/jump-2.m4a": ur,
    "../assets/audio/sfx/jump-2.webm": dr,
    "../assets/audio/sfx/jump-3.m4a": fr,
    "../assets/audio/sfx/jump-3.webm": pr,
    "../assets/audio/sfx/land_hard-1.m4a": mr,
    "../assets/audio/sfx/land_hard-1.webm": hr,
    "../assets/audio/sfx/land_hard-2.m4a": gr,
    "../assets/audio/sfx/land_hard-2.webm": _r,
    "../assets/audio/sfx/land_hard-3.m4a": vr,
    "../assets/audio/sfx/land_hard-3.webm": yr,
    "../assets/audio/sfx/land_soft-1.m4a": br,
    "../assets/audio/sfx/land_soft-1.webm": xr,
    "../assets/audio/sfx/land_soft-2.m4a": Sr,
    "../assets/audio/sfx/land_soft-2.webm": Cr,
    "../assets/audio/sfx/land_soft-3.m4a": wr,
    "../assets/audio/sfx/land_soft-3.webm": Tr,
    "../assets/audio/sfx/level_up-1.m4a": Er,
    "../assets/audio/sfx/level_up-1.webm": Dr,
    "../assets/audio/sfx/map_change-1.m4a": Or,
    "../assets/audio/sfx/map_change-1.webm": kr,
    "../assets/audio/sfx/player_join-1.m4a": Ar,
    "../assets/audio/sfx/player_join-1.webm": jr,
    "../assets/audio/sfx/rank_up-1.m4a": Mr,
    "../assets/audio/sfx/rank_up-1.webm": Nr,
    "../assets/audio/sfx/shine-1.m4a": Pr,
    "../assets/audio/sfx/shine-1.webm": Fr,
    "../assets/audio/sfx/shot_pistol-1.m4a": Ir,
    "../assets/audio/sfx/shot_pistol-1.webm": Lr,
    "../assets/audio/sfx/shot_pistol-2.m4a": Rr,
    "../assets/audio/sfx/shot_pistol-2.webm": zr,
    "../assets/audio/sfx/shot_sniper-1.m4a": Br,
    "../assets/audio/sfx/shot_sniper-1.webm": Vr,
    "../assets/audio/sfx/shot_sniper-2.m4a": Hr,
    "../assets/audio/sfx/shot_sniper-2.webm": Ur,
    "../assets/audio/sfx/split-1.m4a": Wr,
    "../assets/audio/sfx/split-1.webm": Gr,
    "../assets/audio/sfx/stamp-1.m4a": Kr,
    "../assets/audio/sfx/stamp-1.webm": qr,
    "../assets/audio/sfx/start_beep-1.m4a": Jr,
    "../assets/audio/sfx/start_beep-1.webm": Yr,
    "../assets/audio/sfx/step_concrete-1.m4a": Xr,
    "../assets/audio/sfx/step_concrete-1.webm": Zr,
    "../assets/audio/sfx/step_concrete-2.m4a": Qr,
    "../assets/audio/sfx/step_concrete-2.webm": $r,
    "../assets/audio/sfx/step_concrete-3.m4a": ei,
    "../assets/audio/sfx/step_concrete-3.webm": ti,
    "../assets/audio/sfx/step_concrete-4.m4a": ni,
    "../assets/audio/sfx/step_concrete-4.webm": ri,
    "../assets/audio/sfx/step_grass-1.m4a": ii,
    "../assets/audio/sfx/step_grass-1.webm": ai,
    "../assets/audio/sfx/step_grass-2.m4a": oi,
    "../assets/audio/sfx/step_grass-2.webm": si,
    "../assets/audio/sfx/step_grass-3.m4a": ci,
    "../assets/audio/sfx/step_grass-3.webm": li,
    "../assets/audio/sfx/step_grass-4.m4a": ui,
    "../assets/audio/sfx/step_grass-4.webm": di,
    "../assets/audio/sfx/step_metal-1.m4a": fi,
    "../assets/audio/sfx/step_metal-1.webm": pi,
    "../assets/audio/sfx/step_metal-2.m4a": mi,
    "../assets/audio/sfx/step_metal-2.webm": hi,
    "../assets/audio/sfx/step_metal-3.m4a": gi,
    "../assets/audio/sfx/step_metal-3.webm": _i,
    "../assets/audio/sfx/step_metal-4.m4a": vi,
    "../assets/audio/sfx/step_metal-4.webm": yi,
    "../assets/audio/sfx/step_tile-1.m4a": bi,
    "../assets/audio/sfx/step_tile-1.webm": xi,
    "../assets/audio/sfx/step_tile-2.m4a": Si,
    "../assets/audio/sfx/step_tile-2.webm": Ci,
    "../assets/audio/sfx/step_tile-3.m4a": wi,
    "../assets/audio/sfx/step_tile-3.webm": Ti,
    "../assets/audio/sfx/step_tile-4.m4a": Ei,
    "../assets/audio/sfx/step_tile-4.webm": Di,
    "../assets/audio/sfx/step_water-1.m4a": Oi,
    "../assets/audio/sfx/step_water-1.webm": ki,
    "../assets/audio/sfx/step_water-2.m4a": Ai,
    "../assets/audio/sfx/step_water-2.webm": ji,
    "../assets/audio/sfx/step_water-3.m4a": Mi,
    "../assets/audio/sfx/step_water-3.webm": Ni,
    "../assets/audio/sfx/step_water-4.m4a": Pi,
    "../assets/audio/sfx/step_water-4.webm": Fi,
    "../assets/audio/sfx/step_wood-1.m4a": Ii,
    "../assets/audio/sfx/step_wood-1.webm": Li,
    "../assets/audio/sfx/step_wood-2.m4a": Ri,
    "../assets/audio/sfx/step_wood-2.webm": zi,
    "../assets/audio/sfx/step_wood-3.m4a": Bi,
    "../assets/audio/sfx/step_wood-3.webm": Vi,
    "../assets/audio/sfx/step_wood-4.m4a": Hi,
    "../assets/audio/sfx/step_wood-4.webm": Ui,
    "../assets/audio/sfx/swim-1.m4a": Wi,
    "../assets/audio/sfx/swim-1.webm": Gi,
    "../assets/audio/sfx/swim-2.m4a": Ki,
    "../assets/audio/sfx/swim-2.webm": qi,
    "../assets/audio/sfx/swim-3.m4a": Ji,
    "../assets/audio/sfx/swim-3.webm": Yi,
    "../assets/audio/sfx/teleport-1.m4a": Xi,
    "../assets/audio/sfx/teleport-1.webm": Zi,
    "../assets/audio/sfx/teleport-2.m4a": Qi,
    "../assets/audio/sfx/teleport-2.webm": $i,
    "../assets/audio/sfx/toast_pop-1.m4a": ea,
    "../assets/audio/sfx/toast_pop-1.webm": ta,
    "../assets/audio/sfx/ui_back-1.m4a": na,
    "../assets/audio/sfx/ui_back-1.webm": ra,
    "../assets/audio/sfx/ui_card-1.m4a": ia,
    "../assets/audio/sfx/ui_card-1.webm": aa,
    "../assets/audio/sfx/ui_click-1.m4a": oa,
    "../assets/audio/sfx/ui_click-1.webm": sa,
    "../assets/audio/sfx/ui_confirm-1.m4a": ca,
    "../assets/audio/sfx/ui_confirm-1.webm": la,
    "../assets/audio/sfx/ui_error-1.m4a": ua,
    "../assets/audio/sfx/ui_error-1.webm": da,
    "../assets/audio/sfx/ui_hover-1.m4a": fa,
    "../assets/audio/sfx/ui_hover-1.webm": pa,
    "../assets/audio/sfx/ui_toggle-1.m4a": ma,
    "../assets/audio/sfx/ui_toggle-1.webm": ha,
    "../assets/audio/sfx/vote_open-1.m4a": ga,
    "../assets/audio/sfx/vote_open-1.webm": _a,
    "../assets/audio/sfx/vote_tick-1.m4a": va,
    "../assets/audio/sfx/vote_tick-1.webm": ya,
    "../assets/audio/sfx/water_enter-1.m4a": ba,
    "../assets/audio/sfx/water_enter-1.webm": xa,
    "../assets/audio/sfx/water_enter-2.m4a": Sa,
    "../assets/audio/sfx/water_enter-2.webm": Ca,
    "../assets/audio/sfx/water_exit-1.m4a": wa,
    "../assets/audio/sfx/water_exit-1.webm": Ta,
    "../assets/audio/sfx/wind-1.m4a": Ea,
    "../assets/audio/sfx/wind-1.webm": Da,
    "../assets/audio/sfx/wind_high-1.m4a": Oa,
    "../assets/audio/sfx/wind_high-1.webm": ka,
  }),
  F = Object.values(Aa)[0] ?? { sfx: {}, music: [], credits: [] },
  I = null;
function Ma() {
  if (I) return I;
  let e = ``;
  try {
    e =
      typeof Audio < `u`
        ? new Audio().canPlayType(`audio/webm; codecs="opus"`)
        : ``;
  } catch {}
  return ((I = e === `probably` || e === `maybe` ? `webm` : `m4a`), I);
}
var Na = (e) => (e === `webm` ? `m4a` : `webm`);
function Pa(e, t = Ma()) {
  return (
    ja[`../assets/audio/${e}.${t}`] ??
    ja[`../assets/audio/${e}.${Na(t)}`] ??
    null
  );
}
function Fa(e, t) {
  return `sfx/${e}-${t + 1}`;
}
function Ia(e) {
  return `music/${e}`;
}
var La = [`music`, `sfx`, `ui`, `ambience`],
  L = (e) => (e <= 0 ? 0 : Math.min(1, e) ** 1.7),
  Ra = { sfx: 20, ui: 8, ambience: 4 },
  za = 14,
  Ba = globalThis.OfflineAudioContext ?? globalThis.webkitOfflineAudioContext,
  Va = globalThis.AudioContext ?? globalThis.webkitAudioContext;
function Ha(e) {
  if (!Ba) return Promise.reject(Error(`no WebAudio`));
  let t = new Ba(1, 1, 48e3);
  return new Promise((n, r) => {
    t.decodeAudioData(e, n, r)?.then(n, r);
  });
}
async function Ua(e, t = Ma()) {
  for (let n of [t, Na(t)]) {
    let t = Pa(e, n);
    if (t)
      try {
        let e = await fetch(t);
        if (!e.ok) continue;
        return await Ha(await e.arrayBuffer());
      } catch {}
  }
  return null;
}
var Wa = class {
    ctx = null;
    master = null;
    buses = {};
    duckNode = null;
    bank = new Map();
    override = new Map();
    pools = {};
    spatial = [];
    lastStart = {};
    lastVariant = {};
    unlockFns = [];
    levels = { master: 1, music: 1, sfx: 1, ui: 1, ambience: 1 };
    loaded = Promise.resolve();
    random = Math.random;
    get unlocked() {
      return !!this.ctx && this.ctx.state === `running`;
    }
    init() {
      if (!Va) return;
      this.loaded = this.loadBank();
      let e = () => {
        if ((this.unlock(), this.unlocked))
          for (let t of [`pointerdown`, `keydown`, `touchend`, `mousedown`])
            removeEventListener(t, e, !0);
      };
      for (let t of [`pointerdown`, `keydown`, `touchend`, `mousedown`])
        addEventListener(t, e, !0);
    }
    onUnlock(e) {
      this.unlocked ? e() : this.unlockFns.push(e);
    }
    unlock() {
      if (!Va) return;
      if (!this.ctx) {
        try {
          this.ctx = new Va({ latencyHint: `interactive` });
        } catch {
          return;
        }
        this.build();
      }
      let e = this.ctx,
        t = () => {
          if (e.state !== `running`) return;
          let t = this.unlockFns.splice(0);
          for (let e of t) e();
        };
      e.state === `suspended` ? e.resume().then(t, () => void 0) : t();
    }
    build() {
      let e = this.ctx;
      ((this.master = e.createGain()), this.master.connect(e.destination));
      for (let t of La) {
        let n = e.createGain();
        this.buses[t] = n;
      }
      ((this.duckNode = e.createGain()),
        this.buses.music.connect(this.duckNode),
        this.duckNode.connect(this.master));
      for (let e of [`sfx`, `ui`, `ambience`])
        this.buses[e].connect(this.master);
      for (let t of [`sfx`, `ui`, `ambience`]) {
        this.pools[t] = [];
        for (let n = 0; n < Ra[t]; n++) {
          let n = e.createGain();
          (n.connect(this.buses[t]),
            this.pools[t].push({
              src: null,
              gain: n,
              panner: null,
              id: ``,
              started: 0,
              ends: 0,
            }));
        }
      }
      for (let t = 0; t < za; t++) {
        let t = e.createGain(),
          n = e.createPanner();
        ((n.panningModel = `HRTF`),
          (n.distanceModel = `inverse`),
          (n.refDistance = 96),
          (n.maxDistance = 6e3),
          (n.rolloffFactor = 1.3),
          n.connect(t),
          t.connect(this.buses.sfx),
          this.spatial.push({
            src: null,
            gain: t,
            panner: n,
            id: ``,
            started: 0,
            ends: 0,
          }));
      }
      this.applyLevels(0);
    }
    async loadBank() {
      let e = [];
      for (let t of ye) {
        let n = F.sfx[t];
        n?.variants &&
          e.push(async () => {
            let e = [];
            for (let r = 0; r < n.variants; r++) {
              let n = await Ua(Fa(t, r));
              n && e.push(n);
            }
            e.length && this.bank.set(t, e);
          });
      }
      let t = 0;
      await Promise.all(
        Array.from({ length: 6 }, async () => {
          for (; t < e.length; ) await e[t++]();
        }),
      );
    }
    buffers(e) {
      return this.override.get(e) ?? this.bank.get(e) ?? null;
    }
    shipped(e) {
      return this.bank.get(e) ?? null;
    }
    setOverride(e, t) {
      t?.length ? this.override.set(e, t) : this.override.delete(e);
    }
    clearOverrides() {
      this.override.clear();
    }
    pickVariant(e, t) {
      if (t <= 1) return 0;
      let n = this.lastVariant[e] ?? -1,
        r = Math.floor(this.random() * (t - 1));
      return (r >= n && n >= 0 && r++, (this.lastVariant[e] = r), r);
    }
    setLevels(e) {
      ((this.levels = e), this.applyLevels(0.03));
    }
    applyLevels(e) {
      let t = this.ctx;
      if (!t || !this.master) return;
      let n = t.currentTime,
        r = (t, r) => {
          (t.cancelScheduledValues(n),
            e > 0 ? t.setTargetAtTime(r, n, e) : (t.value = r));
        };
      r(this.master.gain, this.levels.master);
      for (let e of La) r(this.buses[e].gain, this.levels[e]);
    }
    duck(e = 0.35, t = 2) {
      let n = this.ctx,
        r = this.duckNode?.gain;
      if (!n || !r) return;
      let i = n.currentTime;
      (r.cancelScheduledValues(i),
        r.setValueAtTime(r.value, i),
        r.setTargetAtTime(e, i, 0.06),
        r.setTargetAtTime(1, i + t, 0.5));
    }
    voice(e, t, n, r) {
      let i = null,
        a = e[0],
        o = 0,
        s = null;
      for (let n = 0; n < e.length; n++) {
        let c = e[n];
        if (!(c.ends > r)) {
          i ||= c;
          continue;
        }
        (c.started < a.started && (a = c),
          c.id === t && (o++, (!s || c.started < s.started) && (s = c)));
      }
      return o >= n && s ? s : (i ?? a);
    }
    start(e, t, n, r, i, a) {
      let o = this.ctx,
        s = e.src;
      if (s) {
        if (e.ends > a)
          try {
            s.stop();
          } catch {}
        s.disconnect();
      }
      let c = o.createBufferSource();
      ((c.buffer = n),
        (c.playbackRate.value = i),
        c.connect(e.panner ?? e.gain),
        e.gain.gain.cancelScheduledValues(a),
        (e.gain.gain.value = r),
        c.start(a),
        (e.src = c),
        (e.id = t),
        (e.started = a),
        (e.ends = a + n.duration / i + 0.02));
    }
    gate(e, t) {
      let n = P[e].gap ?? 0;
      return n > 0 && t - (this.lastStart[e] ?? -1) < n
        ? !1
        : ((this.lastStart[e] = t), !0);
    }
    play(e, t = 1, n = 1) {
      let r = this.ctx;
      if (!r || r.state !== `running` || t <= 0) return;
      let i = this.buffers(e);
      if (!i) return;
      let a = P[e],
        o = r.currentTime;
      if (!this.gate(e, o)) return;
      let s = this.pools[a.bus === `music` ? `ui` : a.bus],
        c = i[this.pickVariant(e, i.length)],
        l = n * (1 + (this.random() * 2 - 1) * a.jitter);
      this.start(this.voice(s, e, a.max, o), e, c, a.gain * t, l, o);
    }
    playAt(e, t, n, r, i = 1, a = 1) {
      let o = this.ctx;
      if (!o || o.state !== `running` || i <= 0) return;
      let s = this.buffers(e);
      if (!s) return;
      let c = P[e],
        l = o.currentTime,
        u = this.voice(this.spatial, e, c.max + 2, l),
        d = u.panner;
      d.positionX
        ? ((d.positionX.value = t),
          (d.positionY.value = n),
          (d.positionZ.value = r))
        : d.setPosition(t, n, r);
      let f = s[this.pickVariant(e, s.length)];
      this.start(
        u,
        e,
        f,
        c.gain * i,
        a * (1 + (this.random() * 2 - 1) * c.jitter),
        l,
      );
    }
    setListener(e, t, n, r, i, a, o, s, c) {
      let l = this.ctx?.listener;
      if (l) {
        if (l.positionX)
          ((l.positionX.value = e),
            (l.positionY.value = t),
            (l.positionZ.value = n),
            (l.forwardX.value = r),
            (l.forwardY.value = i),
            (l.forwardZ.value = a),
            (l.upX.value = o),
            (l.upY.value = s),
            (l.upZ.value = c));
        else {
          let u = l;
          (u.setPosition(e, t, n), u.setOrientation(r, i, a, o, s, c));
        }
      }
    }
    loop(e) {
      return new Ga(this, e);
    }
    get now() {
      return this.ctx?.currentTime ?? 0;
    }
  },
  Ga = class {
    e;
    id;
    src = null;
    gain = null;
    filter = null;
    buf = null;
    target = 0;
    rate = 1;
    cutoff = 2e3;
    constructor(e, t) {
      ((this.e = e), (this.id = t));
    }
    ensure() {
      if (this.src) {
        if ((this.e.buffers(this.id)?.[0] ?? null) === this.buf) return !0;
        (this.src.stop(), this.src.disconnect(), (this.src = null));
      }
      let e = this.e.ctx;
      if (!e || e.state !== `running`) return !1;
      let t = this.e.buffers(this.id)?.[0];
      if (!t) return !1;
      this.gain ||
        ((this.gain = e.createGain()),
        (this.gain.gain.value = 0),
        (this.filter = e.createBiquadFilter()),
        (this.filter.type = `lowpass`),
        (this.filter.frequency.value = 2e3),
        (this.filter.Q.value = 0.5),
        this.filter.connect(this.gain),
        this.gain.connect(this.e.buses[P[this.id].bus]));
      let n = e.createBufferSource();
      ((n.buffer = t), (n.loop = !0));
      let r = F.sfx[this.id];
      return (
        r?.loopEnd &&
          r.loopEnd > (r.loopStart ?? 0) &&
          t === this.e.shipped(this.id)?.[0] &&
          ((n.loopStart = r.loopStart ?? 0), (n.loopEnd = r.loopEnd)),
        n.connect(this.filter),
        n.start(0, t.duration * Math.random()),
        (this.src = n),
        (this.buf = t),
        !0
      );
    }
    set(e, t = 1, n = 2e4, r = 0.12) {
      if (
        (e <= 5e-4 && this.target <= 5e-4 && !this.src) ||
        !this.ensure() ||
        (Math.abs(e - this.target) < 0.004 &&
          Math.abs(t - this.rate) < 0.004 &&
          Math.abs(n - this.cutoff) < this.cutoff * 0.02)
      )
        return;
      let i = this.e.ctx.currentTime,
        a = P[this.id].gain * e;
      ((this.target = e),
        (this.rate = t),
        (this.cutoff = n),
        this.gain.gain.setTargetAtTime(a, i, r),
        this.src.playbackRate.setTargetAtTime(t, i, r),
        this.filter.frequency.setTargetAtTime(
          Math.max(40, Math.min(2e4, n)),
          i,
          r,
        ));
    }
  },
  R = 3,
  Ka = 1.2,
  qa = class {
    e;
    decks = [];
    active = 0;
    scene = `none`;
    mode = `always`;
    shuffle = !0;
    queue = [];
    qi = -1;
    timer = 0;
    fading = !1;
    onTrack = null;
    constructor(e) {
      this.e = e;
    }
    get menuTrack() {
      return F.music.find((e) => e.role === `menu`) ?? null;
    }
    get gameTracks() {
      return F.music.filter((e) => e.role === `game`);
    }
    get current() {
      return this.decks[this.active]?.track ?? null;
    }
    ensureDecks() {
      if (this.decks.length) return !0;
      let e = this.e.ctx;
      if (!e || !this.e.unlocked) return !1;
      for (let t = 0; t < 2; t++) {
        let t = new Audio();
        ((t.preload = `auto`), (t.crossOrigin = `anonymous`));
        let n = e.createGain();
        n.gain.value = 0;
        try {
          e.createMediaElementSource(t).connect(n);
        } catch (e) {
          return (console.warn(`music:`, e), !1);
        }
        (n.connect(this.e.buses.music),
          t.addEventListener(
            `ended`,
            () => this.decks[this.active]?.el === t && this.advance(0.2),
          ),
          this.decks.push({ el: t, gain: n, track: null }));
      }
      return ((this.timer = window.setInterval(() => this.poll(), 250)), !0);
    }
    setOptions(e, t) {
      let n = e !== this.mode;
      (t !== this.shuffle && ((this.shuffle = t), (this.queue = [])),
        (this.mode = e),
        n && this.apply());
    }
    setScene(e) {
      e !== this.scene && ((this.scene = e), this.apply());
    }
    want() {
      return this.mode === `off` || this.scene === `none`
        ? null
        : this.scene === `home`
          ? `menu`
          : this.mode === `menus`
            ? this.scene === `pause`
              ? `menu`
              : null
            : `game`;
    }
    apply() {
      let e = this.want(),
        t = this.current;
      if (!e) return this.stop();
      if (this.ensureDecks()) {
        if (e === `menu`) {
          let e = this.menuTrack;
          e && t?.id !== e.id ? this.crossfadeTo(e, R) : e || this.stop();
        } else if (!t || t.role !== `game`) {
          let e = this.nextGame();
          e ? this.crossfadeTo(e, R) : this.stop();
        }
      }
    }
    nextGame() {
      let e = this.gameTracks;
      if (!e.length) return null;
      if (this.qi + 1 >= this.queue.length) {
        let t = this.queue[this.queue.length - 1];
        if (((this.queue = [...e]), this.shuffle)) {
          for (let e = this.queue.length - 1; e > 0; e--) {
            let t = Math.floor(Math.random() * (e + 1));
            [this.queue[e], this.queue[t]] = [this.queue[t], this.queue[e]];
          }
          this.queue.length > 1 &&
            this.queue[0].id === t?.id &&
            ([this.queue[0], this.queue[1]] = [this.queue[1], this.queue[0]]);
        }
        this.qi = -1;
      }
      return this.queue[++this.qi] ?? null;
    }
    next() {
      let e = this.want();
      if (!e || !this.ensureDecks()) return null;
      let t = e === `menu` ? this.menuTrack : this.nextGame();
      return (t && this.crossfadeTo(t, Ka, !0), t);
    }
    advance(e) {
      let t = this.want();
      if (!t) return;
      let n = t === `menu` ? this.menuTrack : this.nextGame();
      n && this.crossfadeTo(n, e, !0);
    }
    crossfadeTo(e, t, n = !1) {
      let r = this.e.ctx;
      if (!r) return;
      let i = Pa(Ia(e.id));
      if (!i) return;
      let a = this.decks[this.active];
      if (!n && a.track?.id === e.id && !a.el.paused) return;
      let o = this.decks[1 - this.active],
        s = r.currentTime;
      if (a.track) {
        (a.gain.gain.cancelScheduledValues(s),
          a.gain.gain.setValueAtTime(a.gain.gain.value, s),
          a.gain.gain.linearRampToValueAtTime(0, s + t));
        let e = a.el,
          n = performance.now() + t * 1e3 + 100;
        window.setTimeout(
          () => {
            performance.now() >= n - 150 &&
              this.decks[this.active].el !== e &&
              e.pause();
          },
          t * 1e3 + 100,
        );
      }
      ((o.track = e),
        o.el.src.endsWith(i) || (o.el.src = i),
        (o.el.currentTime = 0),
        o.gain.gain.cancelScheduledValues(s),
        o.gain.gain.setValueAtTime(0, s),
        o.gain.gain.linearRampToValueAtTime(1, s + t),
        o.el.play().catch(() => void 0),
        (this.active = 1 - this.active),
        (this.fading = !0),
        window.setTimeout(() => (this.fading = !1), t * 1e3),
        this.onTrack?.(e));
    }
    poll() {
      let e = this.decks[this.active];
      if (!e?.track || e.el.paused || this.fading) return;
      let t = isFinite(e.el.duration) ? e.el.duration : e.track.duration;
      t > 6 && e.el.currentTime >= t - R && this.advance(R);
    }
    stop(e = 1.5) {
      let t = this.e.ctx;
      if (!t) return;
      let n = t.currentTime;
      for (let t of this.decks) {
        if (!t.track) continue;
        (t.gain.gain.cancelScheduledValues(n),
          t.gain.gain.setValueAtTime(t.gain.gain.value, n),
          t.gain.gain.linearRampToValueAtTime(0, n + e));
        let r = t.el,
          i = t.track;
        ((t.track = null),
          window.setTimeout(
            () => {
              (!t.track || t.track === i) && r.pause();
            },
            e * 1e3 + 100,
          ));
      }
    }
    dispose() {
      clearInterval(this.timer);
      for (let e of this.decks) e.el.pause();
    }
  },
  z = (e, t, n = 1) =>
    Array.from({ length: t }, (t, r) => `sound/${e}${r + n}.wav`),
  Ja = {
    step_concrete: z(`player/footsteps/concrete`, 4),
    step_metal: z(`player/footsteps/metal`, 4),
    step_wood: z(`player/footsteps/wood`, 4),
    step_grass: [
      ...z(`player/footsteps/grass`, 4),
      ...z(`player/footsteps/dirt`, 4),
    ],
    step_tile: z(`player/footsteps/tile`, 4),
    step_water: z(`player/footsteps/slosh`, 4),
    swim: z(`player/footsteps/wade`, 4),
    water_enter: z(`ambient/water/water_splash`, 3),
    water_exit: z(`player/footsteps/wade`, 2, 5),
    carrot_swing: z(`weapons/knife/knife_slash`, 2),
    carrot_stab: [`sound/weapons/knife/knife_stab.wav`],
    carrot_draw: [`sound/weapons/knife/knife_deploy1.wav`],
  };
[...new Set(Object.values(Ja).flat())];
var Ya = new Map();
async function Xa(e) {
  if (Ya.has(e)) return Ya.get(e);
  let t = u(),
    n = t?.group.files[e],
    r = null;
  if (t && n)
    try {
      let e = await fetch(`${t.base}/${c(n.sha256)}`);
      e.ok && (r = await Ha(await e.arrayBuffer()));
    } catch {}
  return (Ya.set(e, r), r);
}
var Za = class {
    e;
    wanted = !1;
    applied = !1;
    seq = 0;
    onChange = null;
    constructor(e) {
      ((this.e = e), d(() => this.wanted && void this.apply()));
    }
    get active() {
      return this.applied;
    }
    get available() {
      return !!u();
    }
    set(e) {
      e !== this.wanted && ((this.wanted = e), e ? this.apply() : this.clear());
    }
    clear() {
      (this.seq++,
        this.e.clearOverrides(),
        this.applied && ((this.applied = !1), this.onChange?.(!1)));
    }
    async apply() {
      if (!u()) return;
      let e = ++this.seq,
        t = await Promise.all(
          Object.entries(Ja).map(async ([e, t]) => [
            e,
            (await Promise.all(t.map(Xa))).filter((e) => !!e),
          ]),
        );
      if (e !== this.seq || !this.wanted) return;
      let n = !1;
      for (let [e, r] of t)
        (this.e.setOverride(e, r.length ? r : null), (n ||= r.length > 0));
      n !== this.applied && ((this.applied = n), this.onChange?.(n));
    }
  },
  B = 192,
  Qa = 2048;
function $a(e) {
  let t = e.toLowerCase();
  return t.startsWith(`tools/`) ||
    t.includes(`nodraw`) ||
    t.includes(`skybox`) ||
    t.includes(`toolsclip`) ||
    t.includes(`trigger`)
    ? null
    : /metal|grate|grating|steel|iron|chainlink|duct|vent|pipe|tin|alum|diamond|plate|rust|catwalk/.test(
          t,
        )
      ? `metal`
      : /wood|plank|crate|board|parquet|bamboo|barrel/.test(t)
        ? `wood`
        : /grass|dirt|mud|sand|gravel|snow|nature|ground|leaves|soil|moss|hay|carpet|rug|fabric|cloth/.test(
              t,
            )
          ? `grass`
          : /tile|ceramic|marble|glass|porcelain|bathroom|mosaic/.test(t)
            ? `tile`
            : /water|liquid/.test(t)
              ? `water`
              : `concrete`;
}
var eo = class e {
    cells;
    water;
    tris;
    triSurface;
    hasWater = !1;
    constructor(e, t, n, r) {
      ((this.cells = e),
        (this.water = t),
        (this.tris = n),
        (this.triSurface = r),
        (this.hasWater = t.size > 0));
    }
    static key(e, t) {
      return (e + 32768) * 65536 + (t + 32768);
    }
    height(e, t, n) {
      let r = this.tris,
        i = e * 9,
        a = r[i],
        o = r[i + 1],
        s = r[i + 2],
        c = r[i + 3],
        l = r[i + 4],
        u = r[i + 5],
        d = r[i + 6],
        f = r[i + 7],
        p = r[i + 8],
        m = d - a,
        h = f - o,
        g = c - a,
        _ = l - o,
        v = t - a,
        y = n - o,
        b = m * m + h * h,
        x = m * g + h * _,
        S = m * v + h * y,
        C = g * g + _ * _,
        w = g * v + _ * y,
        T = b * C - x * x;
      if (Math.abs(T) < 1e-9) return NaN;
      let E = (C * S - x * w) / T,
        D = (b * w - x * S) / T;
      return E < -0.01 || D < -0.01 || E + D > 1.02
        ? NaN
        : s + E * (p - s) + D * (u - s);
    }
    at(t, n, r) {
      let i = this.cells.get(e.key(Math.floor(t / B), Math.floor(n / B)));
      if (!i) return -1;
      let a = -1,
        o = -1 / 0;
      for (let e = 0; e < i.length; e++) {
        let s = i[e],
          c = this.height(s, t, n);
        c !== c ||
          c > r + 4 ||
          c < r - 24 ||
          c <= o ||
          ((o = c), (a = this.triSurface[s]));
      }
      return a;
    }
    waterAbove(t, n, r) {
      let i = this.water.get(e.key(Math.floor(t / B), Math.floor(n / B)));
      if (!i) return NaN;
      let a = NaN;
      for (let e = 0; e < i.length; e++) {
        let o = this.height(i[e], t, n);
        o !== o || o < r - 2 || o > r + 2e3 || o >= a || (a = o);
      }
      return a;
    }
  },
  V = null;
function to() {
  return V;
}
function no(e) {
  let n = performance.now(),
    r,
    i;
  try {
    ((r = e.mesh()), (i = e.materials()));
  } catch {
    return (V = null);
  }
  let { vertices: a, indices: o, stride: s, groups: c, materials: l } = r,
    u = l.map((e, n) => (i[n]?.kind === t.Water ? `water` : $a(e.name))),
    d = [],
    f = [],
    p = new Map(),
    m = new Map(),
    h = (e, t, n, r, i, a) => {
      let o = Math.floor(n / B),
        s = Math.floor(i / B),
        c = Math.floor(r / B),
        l = Math.floor(a / B);
      if (!((s - o + 1) * (l - c + 1) > Qa))
        for (let n = o; n <= s; n++)
          for (let r = c; r <= l; r++) {
            let i = (n + 32768) * 65536 + (r + 32768),
              a = e.get(i);
            (a || e.set(i, (a = [])), a.push(t));
          }
    };
  for (let e of c) {
    if (e.model !== 0) continue;
    let t = u[e.material];
    if (!t) continue;
    let n = t === `water`;
    for (let r = e.firstIndex; r < e.firstIndex + e.indexCount; r += 3) {
      let e = o[r] * s,
        i = o[r + 1] * s,
        c = o[r + 2] * s,
        l = a[e],
        u = a[e + 1],
        g = a[e + 2],
        _ = a[i],
        v = a[i + 1],
        y = a[i + 2],
        b = a[c],
        x = a[c + 1],
        S = a[c + 2],
        C = _ - l,
        w = v - u,
        T = y - g,
        E = b - l,
        D = x - u,
        O = S - g,
        ee = w * O - T * D,
        k = T * E - C * O,
        A = C * D - w * E,
        j = Math.hypot(ee, k, A);
      if (j < 1e-6 || (!n && A / j < 0.6) || (n && Math.abs(A / j) < 0.6))
        continue;
      let te = f.length;
      (d.push(l, u, g, _, v, y, b, x, S),
        f.push(be.indexOf(t)),
        h(
          n ? m : p,
          te,
          Math.min(l, _, b),
          Math.min(u, v, x),
          Math.max(l, _, b),
          Math.max(u, v, x),
        ));
    }
  }
  let g = (e) => new Map([...e].map(([e, t]) => [e, Int32Array.from(t)]));
  return (
    (V = new eo(g(p), g(m), Float32Array.from(d), Int8Array.from(f))),
    console.info(
      `audio: surface map ${f.length} triangles, ${p.size} cells${m.size ? `, water in ${m.size} cells` : ``}, ${(performance.now() - n).toFixed(0)} ms`,
    ),
    V
  );
}
var H = (e, t, n) => (e < t ? t : e > n ? n : e),
  ro = 560,
  io = class {
    sink;
    classic = !1;
    footsteps = !0;
    gain = 1;
    first = !0;
    pvx = 0;
    pvy = 0;
    pvz = 0;
    wasGrounded = !0;
    stepTimer = 0;
    swimTimer = 0;
    boostCool = 0;
    inWater = !1;
    constructor(e) {
      this.sink = e;
    }
    reset() {
      ((this.first = !0),
        (this.stepTimer = 0.15),
        (this.swimTimer = 0),
        (this.boostCool = 0));
    }
    surfaceAt(e, t, n) {
      let r = to(),
        i = r ? r.at(e, t, n) : -1;
      return i < 0 ? 0 : i;
    }
    step(e, t, n, r, i) {
      this.sink.play(xe[be[e]], t * this.gain, 1, n, r, i);
    }
    update(e, t, n, r, i, a, o, s, c, l, u, d = !1) {
      let f = this.sink,
        p = this.gain,
        m = Math.sqrt(i * i + a * a),
        h = to(),
        g = NaN;
      h?.hasWater && (g = h.waterAbove(t, n, r) - r);
      let _ = g > 6;
      if (this.first) {
        ((this.first = !1),
          (this.pvx = i),
          (this.pvy = a),
          (this.pvz = o),
          (this.wasGrounded = s),
          (this.inWater = _));
        return;
      }
      let v = !!(u & 4),
        y = !!(u & 2);
      if (
        (d &&
          (s && !this.wasGrounded && (v = !0),
          !s && this.wasGrounded && o > 120 && (y = !0)),
        u & 1)
      ) {
        (f.play(`teleport`, 0.8 * p, 1, t, n, r),
          (this.pvx = i),
          (this.pvy = a),
          (this.pvz = o),
          (this.wasGrounded = s),
          (this.inWater = _),
          (this.stepTimer = 0.2));
        return;
      }
      ((this.boostCool -= e),
        _ && !this.inWater
          ? f.play(
              `water_enter`,
              H(0.35 + Math.max(0, -this.pvz) / 800, 0.35, 1) * p,
              1,
              t,
              n,
              r,
            )
          : !_ &&
            this.inWater &&
            !(g > 0) &&
            f.play(`water_exit`, 0.7 * p, 1, t, n, r),
        (this.inWater = _));
      let b = _ && g > 34;
      if (v && !b) {
        let e = Math.max(0, -this.pvz),
          i = _ ? 5 : this.surfaceAt(t, n, r);
        (this.classic
          ? this.step(i, e > ro ? 1 : H(0.35 + e / 900, 0.35, 0.8), t, n, r)
          : e > ro
            ? (f.play(
                `land_hard`,
                H(0.55 + (e - ro) / 900, 0.55, 1) * p,
                1,
                t,
                n,
                r,
              ),
              this.step(i, 0.5, t, n, r))
            : (f.play(
                `land_soft`,
                H(0.22 + e / 700, 0.2, 0.75) * (y ? 0.7 : 1) * p,
                1,
                t,
                n,
                r,
              ),
              y || this.step(i, 0.25, t, n, r)),
          (this.stepTimer = 0.28));
      }
      y &&
        !b &&
        (this.classic
          ? this.step(this.surfaceAt(t, n, r), 0.3, t, n, r)
          : f.play(`jump`, (v ? 0.55 : 0.8) * p, 1, t, n, r));
      let x = o - this.pvz,
        S = m - Math.sqrt(this.pvx * this.pvx + this.pvy * this.pvy);
      if (
        (!y &&
          !v &&
          this.boostCool <= 0 &&
          (x > 160 || S > 180) &&
          !b &&
          (f.play(`boost`, H(Math.max(x, S) / 700, 0.45, 1) * p, 1, t, n, r),
          (this.boostCool = 0.4)),
        this.footsteps && s && !y && !b && m > 80)
      ) {
        if (((this.stepTimer -= e), this.stepTimer <= 0)) {
          let e = _ ? 5 : this.surfaceAt(t, n, r),
            i = m >= 150 ? 0.55 : 0.22;
          (this.step(e, i * (c ? 0.55 : 1), t, n, r),
            (this.stepTimer = m >= 200 && !c ? 0.3 : 0.4));
        }
      } else
        this.footsteps && l && Math.abs(o) > 40
          ? ((this.stepTimer -= e),
            this.stepTimer <= 0 &&
              (f.play(`step_metal`, 0.4 * p, 0.92, t, n, r),
              (this.stepTimer = 0.4)))
          : s && m <= 80 && (this.stepTimer = Math.min(this.stepTimer, 0.12));
      (b && Math.sqrt(m * m + o * o) > 60
        ? ((this.swimTimer -= e),
          this.swimTimer <= 0 &&
            (f.play(`swim`, 0.6 * p, 1, t, n, r), (this.swimTimer = 0.85)))
        : (this.swimTimer = Math.min(this.swimTimer, 0.2)),
        (this.pvx = i),
        (this.pvy = a),
        (this.pvz = o),
        (this.wasGrounded = s));
    }
  },
  U = { gain: 0, rate: 1, cutoff: 500, high: 0 };
function ao(e, t) {
  let n = H((e - 270) / 1e3, 0, 1);
  return (
    (U.gain = n ** 1.25 * (t ? 0.55 : 1)),
    (U.rate = 0.85 + 0.4 * n),
    (U.cutoff = 450 + 7500 * n ** 1.4),
    (U.high = H((e - 750) / 1300, 0, 1) ** 1.5 * (t ? 0.5 : 1)),
    U
  );
}
var oo = `button, a[href], select, [role=tab], [role=radio], label.rv-check, input[type=checkbox]`;
function so(e) {
  let t = e.dataset?.sound;
  return t === `none`
    ? null
    : t ||
        (e.matches(`.mb-row`)
          ? `ui_card`
          : e.matches(`.back, [aria-label^='Back'], [aria-label^='Close']`)
            ? `ui_back`
            : e.matches(`.primary, .rv-accent, .menu-btn.primary`)
              ? `ui_confirm`
              : e.matches(`input[type=checkbox], label.rv-check`)
                ? null
                : `ui_click`);
}
function co(e) {
  let t = null,
    n = () => !!document.pointerLockElement;
  (document.addEventListener(
    `pointerover`,
    (r) => {
      if (n() || r.pointerType === `touch`) return;
      let i = r.target?.closest?.(oo) ?? null;
      i !== t &&
        ((t = i),
        !(!i || i.disabled || i.closest(`[hidden], .hud`)) && e(`ui_hover`));
    },
    !0,
  ),
    document.addEventListener(
      `click`,
      (t) => {
        if (n() || !t.isTrusted) return;
        let r = t.target?.closest?.(
          `button, a[href], .mb-row, [role=tab], [role=radio]`,
        );
        if (!r || r.disabled) return;
        let i = so(r);
        i && e(i);
      },
      !0,
    ),
    document.addEventListener(
      `change`,
      (t) => {
        let r = t.target;
        r &&
          !n() &&
          ((r instanceof HTMLInputElement && r.type === `checkbox`) ||
            r instanceof HTMLSelectElement) &&
          e(`ui_toggle`);
      },
      !0,
    ),
    document.addEventListener(
      `focusin`,
      (r) => {
        let i = r.target;
        if (!(!i || n() || M(i))) {
          try {
            if (!i.matches(`:focus-visible`) || !i.matches(oo)) return;
          } catch {
            return;
          }
          i !== t && ((t = i), e(`ui_hover`));
        }
      },
      !0,
    ),
    document.addEventListener(`keydown`, (t) => {
      if (t.key !== `Escape` || n() || t.repeat) return;
      let r = document.getElementById(`overlay`);
      ((r && !r.classList.contains(`hidden`)) ||
        document.body.classList.contains(`viewer-open`)) &&
        e(`ui_back`);
    }));
}
var lo = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4z"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M16 9.2a4 4 0 0 1 0 5.6M18.6 6.6a7.6 7.6 0 0 1 0 10.8"/></svg>`,
  uo = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4z"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M16.5 9.5l5 5M21.5 9.5l-5 5"/></svg>`;
function fo(e) {
  let t = document.createElement(`button`);
  ((t.type = `button`),
    (t.id = `audio-btn`),
    (t.dataset.sound = `none`),
    t.addEventListener(`click`, () => e()));
  let n = document.createElement(`div`);
  return (
    (n.id = `audio-muted`),
    n.setAttribute(`aria-hidden`, `true`),
    (n.innerHTML = uo),
    document.body.append(t, n),
    {
      setMuted(e, n) {
        ((t.innerHTML = e ? uo : lo), t.classList.toggle(`off`, e));
        let r = `${e ? `Unmute` : `Mute`} sound${n ? ` (${n})` : ``}`;
        ((t.title = r),
          t.setAttribute(`aria-label`, r),
          t.setAttribute(`aria-pressed`, String(e)),
          document.body.classList.toggle(`audio-muted`, e));
      },
      toast(e, t = 2200) {
        y(e, { ms: t, key: `audio` });
      },
    }
  );
}
var W = new Wa(),
  G = new qa(W),
  K = new Za(W),
  q = new Set(),
  J = null,
  po = !1,
  mo = !1;
function Y(e, t = 1, n = 1) {
  W.play(e, t, n);
}
function ho() {
  let e = o.get().binds.mute?.[0];
  return e ? p(e) : null;
}
function go(e) {
  let t = e.audio,
    n = t.muted || po;
  (W.setLevels({
    master: n ? 0 : L(e.volume),
    music: t.mute.music ? 0 : L(t.music),
    sfx: t.mute.sfx ? 0 : L(t.sfx),
    ui: t.mute.ui ? 0 : L(t.ui),
    ambience: t.mute.ambience ? 0 : L(t.ambience),
  }),
    G.setOptions(t.musicMode, t.shuffle),
    K.set(t.classic));
  for (let e of q) e.footsteps = t.footsteps;
  J?.setMuted(t.muted, ho());
}
function _o() {
  let e = !1;
  o.update((t) => (e = t.audio.muted = !t.audio.muted));
  let t = ho();
  return (
    J?.toast(e ? `Sound off${t ? ` · ${t} to unmute` : ``}` : `Sound on`),
    e
  );
}
function vo() {
  G.next() ||
    J?.toast(
      o.get().audio.musicMode === `off`
        ? `Music is off (Settings → Audio)`
        : `No music here`,
    );
}
function yo(e = 0.35, t = 2.5) {
  W.duck(e, t);
}
function bo() {
  let e = document.body.classList;
  return e.contains(`viewer-open`)
    ? `play`
    : e.contains(`in-game`)
      ? e.contains(`menu-open`)
        ? `pause`
        : `play`
      : `home`;
}
function xo() {
  if (mo || typeof window > `u`) return;
  ((mo = !0),
    W.init(),
    (J = fo(() => _o())),
    o.watch(go),
    W.onUnlock(() => {
      (go(o.get()), G.setScene(bo()), G.apply());
    }),
    new MutationObserver(() => G.setScene(bo())).observe(document.body, {
      attributes: !0,
      attributeFilter: [`class`],
    }),
    G.setScene(bo()));
  let e = ``;
  ((G.onTrack = (t) => {
    (t.role === `game` && t.id !== e && J?.toast(`♪ ${t.title}`, 3e3),
      (e = t.id));
  }),
    document.addEventListener(`visibilitychange`, () => {
      ((po = document.hidden && o.get().audio.muteInBackground), go(o.get()));
    }),
    addEventListener(
      `keydown`,
      (e) => {
        if (
          e.repeat ||
          e.ctrlKey ||
          e.metaKey ||
          e.altKey ||
          M(e.target) ||
          document.querySelector(`.bind.capturing`)
        )
          return;
        let t = o.get().binds;
        t.mute?.includes(e.code) ? _o() : t.nextTrack?.includes(e.code) && vo();
      },
      !0,
    ),
    co((e) => Y(e)),
    b((e, t = 1, n = 1) => {
      (Y(e, t, n),
        e === `finish_wr`
          ? yo(0.25, 3)
          : (e === `achievement` || e === `level_up` || e === `rank_up`) &&
            yo(0.3, 2.5));
    }),
    x.on((e, t) => {
      let n = t?.strength ?? 1;
      e === `swing`
        ? Y(`carrot_swing`, n)
        : e === `stab`
          ? Y(`carrot_stab`, n * (t?.hit ? 1.1 : 1), t?.hit ? 0.95 : 1)
          : e === `draw` && Y(`carrot_draw`, n);
    }),
    (K.onChange = (e) => {
      for (let t of q) t.classic = e;
    }));
}
var X = { x: 0, y: 0, z: 0 };
function So(e) {
  if (!W.unlocked) return;
  let t = e.matrixWorld.elements;
  ((X.x = -t[8]),
    (X.y = t[10]),
    (X.z = -t[9]),
    W.setListener(t[12], -t[14], t[13], X.x, X.y, X.z, t[4], -t[6], t[5]));
}
var Co = { play: (e, t, n) => W.play(e, t, n) },
  wo = { play: (e, t, n, r, i, a) => W.playAt(e, r, i, a + 8, t, n) };
function To(e) {
  let t = new io(e);
  return (
    (t.footsteps = o.get().audio.footsteps),
    (t.classic = K.active),
    q.add(t),
    t
  );
}
var Eo = class {
    moves = To(Co);
    wind = W.loop(`wind`);
    windHigh = W.loop(`wind_high`);
    silent = !0;
    tick(e, t, n) {
      let r = t.position,
        i = t.velocity;
      this.moves.update(
        e,
        r[0],
        r[1],
        r[2],
        i[0],
        i[1],
        i[2],
        t.grounded,
        t.crouched,
        !!t.onLadder,
        n,
      );
    }
    frame(e, t, n) {
      if (!n || !o.get().audio.wind) {
        this.silent ||=
          (this.wind.set(0, 1, 500, 0.25),
          this.windHigh.set(0, 1, 2e3, 0.25),
          !0);
        return;
      }
      let r = ao(e, t);
      (this.wind.set(r.gain, r.rate, r.cutoff),
        this.windHigh.set(r.high, 0.9 + 0.3 * r.high, 3e3 + 9e3 * r.high),
        (this.silent = !1));
    }
    reset() {
      this.moves.reset();
    }
    dispose() {
      (this.frame(0, !0, !1), q.delete(this.moves));
    }
  },
  Do = class {
    moves = To(wo);
    constructor(e = 1) {
      this.moves.gain = e;
    }
    update(e, t, n, r, i, a, o) {
      if (o) {
        this.moves.reset();
        return;
      }
      this.moves.update(
        e,
        t[0],
        t[1],
        t[2],
        n[0],
        n[1],
        n[2],
        r,
        i,
        !1,
        a ? 2 : 0,
        !0,
      );
    }
    dispose() {
      q.delete(this.moves);
    }
  },
  Oo = {
    start() {
      Y(`start_beep`);
    },
    split(e) {
      Y(`split`, 1, e === null ? 1 : e <= 0 ? 1.1225 : 0.8909);
    },
    finish(e) {
      (Y(e === `wr` ? `finish_wr` : e === `pb` ? `finish_pb` : `finish`),
        yo(0.3, e === `normal` ? 1.2 : 2.5));
    },
  },
  ko = (e) => `bunnyhop:audio-rank-group:${e}`;
function Ao(e, t) {
  try {
    let n = localStorage.getItem(ko(e));
    return (
      localStorage.setItem(ko(e), String(t)),
      n !== null && t >= 0 && t < Number(n)
    );
  } catch {
    return !1;
  }
}
function jo() {
  return [
    ...F.credits,
    `Classic CS:S sounds (optional, Settings → Audio): © Valve Corporation, from Counter-Strike: Source, served from the hosted game content.`,
  ];
}
function Mo(t = null) {
  e(
    () =>
      import(`./account-panel-gsGO4Ikn.js`).then((e) => e.openAccountPanel(t)),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
  );
}
var No = null;
function Po(e) {
  No = e;
}
var Fo = () => No,
  Io = `bunnyhop:onboarded`;
function Lo() {
  return (
    !localStorage.getItem(`bunnyhop:onboarded`) ||
    new URLSearchParams(location.search).get(`intro`) === `1`
  );
}
function Ro(e, t = 24) {
  let n = () =>
    i(
      `span.avatar.avatar-initial`,
      { "aria-hidden": `true` },
      (e.name[0] ?? `?`).toUpperCase(),
    );
  return e.avatarUrl
    ? S(e.avatarUrl, { cls: `avatar`, px: t, letter: n, eager: !0 })
    : n();
}
function zo() {
  if (!r.available()) return Promise.resolve(null);
  let e = r.me();
  return (
    e.then((e) => {
      r.meStale() && Uo(e);
    }),
    e
  );
}
var Bo = [5e3, 15e3, 6e4, 3e5],
  Vo = 0,
  Z = 0,
  Ho = (e, t) =>
    e?.id === t?.id &&
    e?.name === t?.name &&
    e?.provider === t?.provider &&
    e?.avatarUrl === t?.avatarUrl;
function Uo(e) {
  Vo ||= window.setTimeout(() => {
    ((Vo = 0),
      r.me().then((t) => {
        if (r.meStale()) return ((Z = Math.min(Z + 1, Bo.length - 1)), Uo(e));
        ((Z = 0), Ho(e, t) || (Q = null), window.dispatchEvent(new Event($)));
      }));
  }, Bo[Z]);
}
var Q = null;
function Wo() {
  if (Q) return Q;
  let e = zo()
    .then((e) => (e ? r.profile(e.id) : null))
    .catch(() => (Q === e && (Q = null), null));
  return (
    (Q = e),
    e.then((e) => {
      e?.mine && f(h(e.cosmetics, g(m([e.rank, ...e.styles]))));
    }),
    e
  );
}
function Go() {
  Q = null;
}
var $ = `bunnyhop:account`;
function Ko(e) {
  (e === void 0 ? r.forgetMe() : r.setMe(e),
    (Q = null),
    window.dispatchEvent(new Event($)));
}
function qo(e, t) {
  let n = !1,
    r = () => {
      if (!e.isConnected) {
        n && window.removeEventListener($, r);
        return;
      }
      ((n = !0), t());
    };
  (requestAnimationFrame(() => (n ||= e.isConnected)),
    window.addEventListener($, r));
}
export {
  Ua as A,
  ue as B,
  Y as C,
  ao as D,
  io as E,
  ve as F,
  w as H,
  M as I,
  re as L,
  Ia as M,
  P as N,
  no as O,
  me as P,
  se as R,
  So as S,
  To as T,
  D as U,
  j as V,
  xo as _,
  zo as a,
  Ao as b,
  Lo as c,
  Po as d,
  Eo as f,
  W as g,
  K as h,
  Fo as i,
  F as j,
  $a as k,
  Mo as l,
  jo as m,
  Ro as n,
  Wo as o,
  Do as p,
  Ko as r,
  qo as s,
  Io as t,
  Go as u,
  G as v,
  wo as w,
  Oo as x,
  vo as y,
  ae as z,
};
