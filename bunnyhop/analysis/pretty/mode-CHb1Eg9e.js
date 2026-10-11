const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/core-_1D4RxH5.js", "assets/core-GuI4LXND.js"]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper-DjzSQ1t3.js";
import {
  Ut as t,
  br as n,
  hr as r,
  ln as i,
  qr as a,
  qt as o,
  un as s,
  xn as c,
  xt as l,
  yt as u,
} from "./model-CJn1vZL3.js";
import { n as d } from "./core-GuI4LXND.js";
import { i as f } from "./api-B2Jj-kgC.js";
import { l as p, t as m } from "./ghost-BF02H5nr.js";
import { C as h } from "./account-state-BYMidhZ9.js";
import { a as g } from "./dom-CUDFsJPS.js";
import { E as ee, w as te } from "./cosmetics-PGh_ZGfu.js";
import { b as ne, m as _, t as v } from "./styles-DzitlxVO.js";
import { u as re } from "./replay-B40kiN_v.js";
import { n as ie, r as ae, v as oe } from "./notify-CvHg_wVW.js";
import { a as se, i as ce } from "./marks-Brbs1gDc.js";
import {
  S as le,
  _ as y,
  b as ue,
  d as b,
  g as x,
  h as de,
  m as fe,
  n as S,
  o as pe,
  p as C,
  r as w,
  s as T,
  t as me,
  v as E,
  x as D,
  y as he,
} from "./lessons-CcKVOcxG.js";
var ge = (e) => ((((e + 180) % 360) + 360) % 360) - 180,
  O = (e) => Math.hypot(e[0], e[1]),
  _e = class {
    tolerance;
    airborne = !1;
    speed = 0;
    key = 0;
    turn = 0;
    turnRate = 0;
    angle = 90;
    signedAngle = 0;
    edge = 90;
    forwardInAir = !1;
    band = 0;
    gain = 0;
    syncGood = 0;
    syncTotal = 0;
    chain = 0;
    bestChain = 0;
    hopGain = null;
    lastHopSpeed = null;
    jumps = 0;
    breaks = 0;
    groundTicks = 0;
    grounded = !0;
    prevYaw = NaN;
    constructor(e = 2) {
      this.tolerance = e;
    }
    reset() {
      ((this.prevYaw = NaN),
        (this.groundTicks = 0),
        (this.chain = 0),
        (this.hopGain = null),
        (this.lastHopSpeed = null),
        (this.syncGood = this.syncTotal = 0),
        (this.turnRate = 0));
    }
    get sync() {
      return this.syncTotal ? (100 * this.syncGood) / this.syncTotal : 0;
    }
    update(e) {
      let { cmd: t, pre: n, post: r, events: i } = e;
      if (i & 1) {
        (this.reset(), (this.prevYaw = t.yaw), (this.speed = O(r.velocity)));
        return;
      }
      ((this.speed = O(r.velocity)),
        (this.airborne = !n.grounded && !r.grounded),
        (this.key = t.side < 0 ? -1 : +(t.side > 0)),
        (this.turn =
          this.prevYaw === this.prevYaw ? ge(t.yaw - this.prevYaw) : 0),
        (this.prevYaw = t.yaw),
        (this.turnRate += (this.turn * 100 - this.turnRate) * 0.15));
      let a = (t.yaw * Math.PI) / 180,
        o = t.forward * Math.cos(a) + t.side * Math.sin(a),
        s = t.forward * Math.sin(a) - t.side * Math.cos(a),
        c = Math.hypot(o, s),
        l = n.velocity,
        u = O(l);
      if (c > 0 && u > 1) {
        let e = (l[0] * o + l[1] * s) / c;
        this.angle =
          (Math.acos(Math.max(-1, Math.min(1, e / u))) * 180) / Math.PI;
        let t = (Math.asin(Math.min(1, 30 / u)) * 180) / Math.PI;
        ((this.edge = t),
          (this.band = (this.angle - 90) / t),
          (this.signedAngle =
            l[0] * s - l[1] * o >= 0 ? this.angle : -this.angle));
      } else ((this.angle = 90), (this.band = NaN));
      if (
        ((this.gain = this.airborne ? this.speed - u : 0),
        (this.forwardInAir = this.airborne && t.forward !== 0),
        this.airborne && this.turn !== 0 && c > 0)
      ) {
        this.syncTotal++;
        let e = l[0] * s - l[1] * o;
        ((this.turn > 0 && e > 0) || (this.turn < 0 && e < 0)) &&
          this.syncGood++;
      }
      if (
        ((this.grounded = r.grounded), r.grounded && this.groundTicks++, i & 2)
      ) {
        ((this.chain =
          this.groundTicks <= this.tolerance || this.chain === 0
            ? this.chain + 1
            : 1),
          (this.bestChain = Math.max(this.bestChain, this.chain)),
          this.jumps++);
        let e = O(n.velocity);
        ((this.hopGain =
          this.lastHopSpeed === null ? null : e - this.lastHopSpeed),
          (this.lastHopSpeed = e),
          (this.groundTicks = 0));
      } else
        this.groundTicks > Math.max(this.tolerance, 8) &&
          (this.chain > 0 && this.breaks++,
          (this.chain = 0),
          (this.lastHopSpeed = null),
          (this.hopGain = null));
    }
  },
  ve = class {
    lesson;
    goals;
    gatesLit;
    leftTicks = 0;
    rightTicks = 0;
    finishedAt = null;
    constructor(e, t = {}) {
      this.lesson = e;
      let n = (e, t, n = !1) => ({
          id: e,
          value: n ? 1 / 0 : 0,
          target: t,
          lower: n,
          done: !1,
        }),
        r = {
          jump: [n(`hops`, 5)],
          strafe: [n(`left`, 80), n(`right`, 80)],
          speed: [n(`speed`, 400)],
          final: [n(`finish`, 1), n(`gold`, t.goldSeconds ?? 20, !0)],
        };
      ((this.goals = r[e.id]), (this.gatesLit = (e.gates ?? []).map(() => !1)));
    }
    get done() {
      return this.goals.every((e) => e.done || e.lower);
    }
    get current() {
      return this.goals.find((e) => !e.done && !e.lower) ?? null;
    }
    set(e, t) {
      let n = this.goals.find((t) => t.id === e);
      n &&
        ((n.value = n.lower ? Math.min(n.value, t) : Math.max(n.value, t)),
        (n.done = n.lower ? n.value <= n.target : n.value >= n.target));
    }
    finish(e) {
      ((this.finishedAt = e), this.set(`finish`, 1), this.set(`gold`, e));
    }
    update(e, t) {
      let n = this.lesson,
        r = e.post.position,
        i = -1;
      switch (n.id) {
        case `jump`:
          this.set(`hops`, t.bestChain);
          break;
        case `strafe`:
          (t.airborne &&
            t.gain > 0 &&
            (t.key < 0 && t.turn > 0 && this.leftTicks++,
            t.key > 0 && t.turn < 0 && this.rightTicks++),
            this.set(`left`, this.leftTicks),
            this.set(`right`, this.rightTicks));
          break;
        case `speed`:
          (this.set(`speed`, Math.floor(t.speed)),
            (n.gates ?? []).forEach((e, n) => {
              !this.gatesLit[n] &&
                t.speed >= e.speed &&
                ((this.gatesLit[n] = !0), (i = n));
            }));
          break;
        case `final`:
          this.finishedAt === null &&
            n.checkpoints?.[0] &&
            ue(r, n.checkpoints[0]) &&
            this.set(`finish`, 1);
      }
      return i;
    }
  },
  ye = {
    forward: 20,
    opposite: 25,
    "mouse-left": 45,
    "mouse-right": 45,
    "key-left": 45,
    "key-right": 45,
    slower: 60,
  },
  be = 160,
  k = 260,
  A = 25,
  j = class {
    legit;
    nudge = null;
    idleTicks = 0;
    candidate = null;
    count = 0;
    left = 0;
    constructor(e = !1) {
      this.legit = e;
    }
    reset() {
      ((this.nudge = null),
        (this.candidate = null),
        (this.count = this.left = this.idleTicks = 0));
    }
    show(e, t = be) {
      ((this.nudge = e), (this.left = t));
    }
    update(e, t, n, r, i) {
      if (
        ((this.idleTicks = n.grounded && n.speed < 40 ? this.idleTicks + 1 : 0),
        this.left > 0 && --this.left === 0 && (this.nudge = null),
        t.events & 1)
      ) {
        e === `final` && t.pre.position[2] < -8
          ? this.show(`edge`, k)
          : this.reset();
        return;
      }
      if (e === `jump`) {
        !i &&
          n.breaks > r &&
          n.jumps > 1 &&
          this.show(this.legit ? `scroll-on-land` : `keep-holding`, k);
        return;
      }
      let a = this.condition(e, n, i);
      ((this.count = a && a === this.candidate ? this.count + 1 : +!!a),
        (this.candidate = a),
        a && this.count >= (ye[a] ?? 1) && this.show(a));
    }
    condition(e, t, n) {
      if (!t.airborne) return null;
      if (t.forwardInAir && (e !== `final` || t.key !== 0)) return `forward`;
      if (n || e === `final`) return null;
      let r = Math.abs(t.turnRate) > A ? Math.sign(t.turnRate) : 0;
      return t.key !== 0 && r !== 0 && Math.sign(-t.key) !== r
        ? `opposite`
        : t.key !== 0 && Math.abs(t.turnRate) < 8
          ? t.key < 0
            ? `mouse-left`
            : `mouse-right`
          : t.key === 0 && r !== 0
            ? r > 0
              ? `key-left`
              : `key-right`
            : t.key !== 0 && t.band > 1.4 && t.gain < 0
              ? `slower`
              : null;
    }
  },
  M = 120,
  N = class e {
    ghost;
    frames;
    scene;
    loop;
    t = 0;
    constructor(e, t, n, r) {
      ((this.ghost = e),
        (this.frames = t),
        (this.scene = n),
        (this.loop = r),
        n.add(e.root));
    }
    static async create(t) {
      let n = await re(he(t.demo)),
        r = t.aux ?? (await d.create(t.wasmBytes));
      t.aux || r.loadMapPhysics(t.bsp);
      let i = p(r, n, n.header.zones, { frames: !0 }).frames,
        a = i.length / 6,
        o = new m({
          kind: `custom`,
          track: 0,
          style: `*`,
          name: `Demo`,
          frames: i,
          startTick: 0,
          endTick: a - 1,
          tickInterval: Math.fround(n.header.settings.tickInterval),
          side: n.side,
          forward: n.forward,
        });
      return new e(o, a, t.scene, t.loop ?? !0);
    }
    get tick() {
      return Math.min(Math.floor(this.t), this.frames - 1);
    }
    restart() {
      this.t = 0;
    }
    get ended() {
      return !this.loop && this.t > this.frames - 1 + M / 2;
    }
    frame(e, t) {
      ((this.t += e * 100),
        this.loop && this.t > this.frames - 1 + M && (this.t = 0));
      let n = Math.min(this.t, this.frames - 1);
      this.ghost.showAt(n, n < this.frames - 1, e, t, {
        opacity: 0.7,
        trail: !0,
        nearFade: !0,
        tag: !0,
      });
    }
    dispose() {
      (this.scene.remove(this.ghost.root), this.ghost.dispose());
    }
  },
  P = 10;
async function xe(e, t) {
  let n = await f.leaderboard(
      E,
      v,
      { offset: 0, limit: P, track: 1 },
      { signal: t },
    ),
    r = n.entries,
    i = n.me ?? (e === null ? null : { time: e }),
    a = x(r, i);
  if (!a && n.me && n.me.rank > r.length + 1) {
    let e = await f.leaderboard(
      E,
      v,
      { offset: n.me.rank - 2, limit: 1, track: 1 },
      { signal: t },
    );
    a = x(e.entries, n.me);
  }
  return { top: r, total: n.total, me: n.me, next: a };
}
var F = (e, t) =>
  g(
    `tr${t ? `.me` : ``}`,
    null,
    g(`td.tb-rank`, null, String(e.rank)),
    g(
      `td.tb-name`,
      null,
      g(`span.tb-pname`, ce(e.player), e.player.name),
      se(e.player),
    ),
    g(`td.tb-time`, null, _(e.time)),
  );
function Se(e, t, n) {
  let r = e.me?.player.id,
    i = e.top.map((e) => F(e, e.player.id === r)),
    a = C(e.top, n, P, e.total);
  (a !== null &&
    e.top.length &&
    i.splice(
      a,
      0,
      g(
        `tr.gold`,
        null,
        g(`td.tb-rank`),
        g(`td.tb-name`, null, `Gold`),
        g(`td.tb-time`, null, `under ${_(n)}`),
      ),
    ),
    e.me &&
      !e.top.some((e) => e.player.id === r) &&
      i.push(
        g(`tr.gap`, { "aria-hidden": `true` }, g(`td`, { colspan: 3 }, `…`)),
        F(e.me, !0),
      ));
  let o = e.me?.time ?? t,
    s = [];
  return (
    e.me
      ? s.push(
          `You're `,
          g(`b`, null, `#${e.me.rank}`),
          ` of ${e.total.toLocaleString(`en-US`)}`,
        )
      : o !== null && s.push(`Your best `, g(`b`, null, _(o))),
    e.me?.rank === 1
      ? s.push(`. The record is yours.`)
      : e.next
        ? s.push(
            `${s.length ? `. ` : ``}Next to beat: ${e.next.player.name}, `,
            g(`b`, null, _(e.next.time)),
          )
        : o !== null &&
          e.top.length >= P &&
          e.total > P &&
          s.push(`. The top ${P} is under `, g(`b`, null, _(e.top[9].time))),
    g(
      `div.tut-board`,
      null,
      g(`div.tb-head`, null, `Final course leaderboard`),
      e.top.length
        ? g(
            `table.tb-table`,
            { "aria-label": `Final course leaderboard, top 10` },
            g(`tbody`, null, ...i),
          )
        : g(`div.tb-line`, null, `No records yet.`),
      s.length ? g(`div.tb-line`, null, ...s) : null,
    )
  );
}
var Ce = class {
    el = g(`div.tut-board-slot`);
    ctl = null;
    get available() {
      return f.available();
    }
    async show(e, t) {
      if (!this.available) return;
      this.ctl?.abort();
      let n = (this.ctl = new AbortController());
      this.el.firstChild ||
        this.el.replaceChildren(
          g(`div.tb-line.dim`, null, `Loading the leaderboard…`),
        );
      try {
        let r = await xe(e, n.signal);
        n.signal.aborted || this.el.replaceChildren(Se(r, e, t));
      } catch (e) {
        !n.signal.aborted &&
          e?.name !== `AbortError` &&
          this.el.replaceChildren(
            g(`div.tb-line.dim`, null, `The leaderboard is offline right now.`),
          );
      }
    }
    dispose() {
      this.ctl?.abort();
    }
  },
  we = `http://www.w3.org/2000/svg`,
  I = (e, t) => {
    let n = document.createElementNS(we, e);
    for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
    return n;
  },
  L = 40,
  R = 28;
function z(e) {
  let t = (e) =>
    `${(Math.cos((e * Math.PI) / 180) * L).toFixed(2)} ${(-Math.sin((e * Math.PI) / 180) * L).toFixed(2)}`;
  return `M${t(e - R)} A${L} ${L} 0 0 0 ${t(e + R)}`;
}
var Te = class {
    el;
    left;
    right;
    chevL;
    chevR;
    details;
    lastPaint = 0;
    state = ``;
    constructor() {
      let e = I(`svg`, {
        viewBox: `-60 -60 120 120`,
        class: `tg-arcs`,
        "aria-hidden": `true`,
      });
      ((this.left = I(`path`, { d: z(180), class: `tg-arc` })),
        (this.right = I(`path`, { d: z(0), class: `tg-arc` })),
        (this.chevL = I(`path`, {
          d: `M-47 -6 L-53 0 L-47 6`,
          class: `tg-chev l`,
        })),
        (this.chevR = I(`path`, {
          d: `M47 -6 L53 0 L47 6`,
          class: `tg-chev r`,
        })),
        e.append(this.left, this.right, this.chevL, this.chevR),
        (this.details = g(`div.tg-details`, { hidden: !0 })),
        (this.el = g(
          `div.tut-guide`,
          { "aria-hidden": `true` },
          e,
          this.details,
        )));
    }
    set mode(e) {
      ((this.el.hidden = e === `off`), (this.details.hidden = e !== `details`));
    }
    update(e, t) {
      if (t - this.lastPaint < 33) return;
      this.lastPaint = t;
      let n = e.airborne,
        r = Math.abs(e.turnRate) > 25 ? Math.sign(e.turnRate) : 0,
        i = e.key < 0 ? 1 : e.key > 0 ? -1 : 0,
        a = n && i !== 0 && r === i,
        o = n && i !== 0 && r !== 0 && !a,
        s = n && i !== 0 && r === 0,
        c = (e) =>
          e ? (n ? (a ? `on good` : o ? `on bad` : `on`) : `on ground`) : ``,
        l = c(i > 0),
        u = c(i < 0),
        d = `${l}|${u}|${s}|${i}`;
      if (
        (d !== this.state &&
          ((this.state = d),
          this.left.setAttribute(`class`, `tg-arc ${l}`),
          this.right.setAttribute(`class`, `tg-arc ${u}`),
          this.chevL.classList.toggle(`show`, s && i > 0),
          this.chevR.classList.toggle(`show`, s && i < 0)),
        !this.details.hidden)
      ) {
        let t =
          e.hopGain === null
            ? `–`
            : `${e.hopGain >= 0 ? `+` : ``}${Math.round(e.hopGain)}`;
        this.details.textContent = `${Math.round(e.sync)}% sync\n${t} per hop`;
      }
    }
  },
  B = (e, t, n) => new a(e, n, -t),
  V = `"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,
  H = `#ffb43a`,
  U = () => matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function W(e, t, r) {
  let i = document.createElement(`canvas`);
  ((i.width = e), (i.height = t), r(i.getContext(`2d`)));
  let a = new l(i);
  return ((a.colorSpace = n), (a.anisotropy = 8), a);
}
function G(e, t = 1, n = 16777215, r = !1) {
  return new s({
    map: e,
    color: n,
    transparent: !0,
    opacity: t,
    depthWrite: !1,
    polygonOffset: !0,
    polygonOffsetFactor: -4,
    polygonOffsetUnits: -4,
    side: 2,
    ...(r ? { blending: 2 } : {}),
  });
}
function K(e, t, n, r, a, s) {
  let l = new o(),
    u = new i(new c(t, n), e);
  return (
    s && (u.rotation.x = -Math.PI / 2),
    l.add(u),
    (l.rotation.y = ((a - 90) * Math.PI) / 180),
    l.position.copy(r),
    (u.renderOrder = 20),
    l
  );
}
function Ee(e, t, n = 2.6, r = 1024, i = 256) {
  let a = G(
    W(r, i, (t) => e(t, r, i)),
    0.82,
    15329766,
  );
  return ((a.userData.depth = (i / r) * t * n), a);
}
var q = class {
    root = new o();
    ring;
    ringMat;
    exits = new Map();
    gates = new Map();
    clock = 0;
    constructor(e, t, n) {
      ((this.root.name = `tutorial-marks`),
        e.lessons.forEach((e, r) => {
          (this.title(e, r, t[r]),
            e.exit && this.exit(e, r),
            e.gates?.forEach((t, n) => this.gate(e, r, n, t)),
            e.lane && this.lane(e.lane, n));
        }),
        (this.ringMat = new s({
          color: 16777215,
          transparent: !0,
          opacity: 0.8,
          depthWrite: !1,
          side: 2,
        })),
        (this.ring = new i(new r(18, 24, 40), this.ringMat)),
        (this.ring.rotation.x = -Math.PI / 2),
        (this.ring.renderOrder = 31),
        (this.ring.visible = !1),
        this.root.add(this.ring));
    }
    title(e, t, n) {
      let r = e.start.position[1],
        i = Math.min(r - e.room.min[1], e.room.max[1] - r),
        a = r - i,
        o = r + i,
        c = o - a,
        l = Math.min(4096, c * 2),
        u = Math.round((80 * l) / c),
        d = W(l, u, (e) => {
          ((e.fillStyle = `rgba(12, 14, 19, 0.88)`),
            e.fillRect(0, 0, l, u),
            (e.fillStyle = `rgba(255, 255, 255, 0.14)`),
            e.fillRect(0, 0, l, u * 0.05),
            e.fillRect(0, u * 0.95, l, u * 0.05),
            (e.font = `800 ${Math.round(u * 0.62)}px ${V}`),
            (e.textBaseline = `middle`));
          let r = String(t + 1),
            i = u * 0.45,
            a = e.measureText(r).width,
            o = e.measureText(n).width,
            s = (l - a - i - o) / 2;
          ((e.fillStyle = H),
            e.fillText(r, s, u * 0.55),
            (e.fillStyle = `#eef1f6`),
            e.fillText(n, s + a + i, u * 0.55));
        }),
        f = new s({ map: d, transparent: !0, depthWrite: !1, side: 2 });
      this.root.add(
        K(f, c, 80, B(e.start.position[0] + 1e3, (a + o) / 2, 344), 0, !1),
      );
    }
    exit(e, t) {
      let n = e.exit,
        r = (n.min[1] + n.max[1]) / 2,
        i = n.max[1] - n.min[1],
        a = (e) =>
          W(512, 160, (t) => {
            ((t.fillStyle = e
              ? `rgba(26, 18, 3, 0.92)`
              : `rgba(12, 14, 19, 0.88)`),
              t.beginPath(),
              t.roundRect(4, 4, 504, 152, 18),
              t.fill(),
              (t.lineWidth = 6),
              (t.strokeStyle = e ? H : `rgba(255, 255, 255, 0.16)`),
              t.stroke(),
              (t.font = `800 96px ${V}`),
              (t.textAlign = `center`),
              (t.textBaseline = `middle`),
              (t.fillStyle = e ? H : `#59606d`),
              t.fillText(`EXIT`, 256, 86));
          }),
        o = a(!1),
        c = a(!0),
        l = K(
          new s({
            map: o,
            transparent: !0,
            depthWrite: !1,
            polygonOffset: !0,
            polygonOffsetFactor: -4,
            polygonOffsetUnits: -4,
          }),
          288,
          90,
          B(e.room.max[0] - 1, r, 432),
          0,
          !1,
        ),
        u = G(
          W(4, 256, (e) => {
            let t = e.createLinearGradient(0, 256, 0, 0);
            (t.addColorStop(0, `rgba(255, 180, 58, 0.75)`),
              t.addColorStop(0.45, `rgba(255, 180, 58, 0.18)`),
              t.addColorStop(1, `rgba(255, 180, 58, 0)`),
              (e.fillStyle = t),
              e.fillRect(0, 0, 4, 256));
          }),
          0,
          16777215,
          !0,
        ),
        d = K(u, i, 256, B(e.room.max[0] - 2, r, 128), 0, !1);
      (this.root.add(l, d),
        this.exits.set(t, {
          sign: l.children[0],
          dim: o,
          lit: c,
          glow: u,
          t: 0,
          target: 0,
        }));
    }
    gate(e, t, n, r) {
      let i = (e) =>
          W(1024, 128, (t) => {
            ((t.fillStyle = e
              ? `rgba(26, 18, 3, 0.9)`
              : `rgba(12, 14, 19, 0.82)`),
              t.fillRect(0, 0, 1024, 128),
              (t.fillStyle = e ? H : `rgba(255, 255, 255, 0.14)`),
              t.fillRect(0, 0, 1024, 6),
              t.fillRect(0, 122, 1024, 6),
              (t.font = `800 92px ${V}`),
              (t.textAlign = `center`),
              (t.textBaseline = `middle`),
              (t.fillStyle = e ? H : `#8a93a6`),
              t.fillText(String(r.speed), 512, 68));
          }),
        a = i(!1),
        o = i(!0),
        c = new s({ map: a, transparent: !0, depthWrite: !1, side: 2 }),
        l = e.room.min[1] + 64,
        u = e.room.max[1] - 64,
        d = K(c, u - l, 80, B(r.x - 33, (l + u) / 2, 344), 0, !1);
      (this.root.add(d),
        this.gates.set(`${t}:${n}`, { mesh: d.children[0], lit: o }));
    }
    lane(e, n) {
      let r = [];
      for (let t = 1; t < e.length; t++) {
        let [n, i, a] = e[t - 1],
          [o, s] = e[t];
        if (a === 0) continue;
        let c = o - n,
          l = s - i,
          u = Math.hypot(c, l);
        if (u < 1 || u > 200) continue;
        let d = (-l / u) * 3,
          f = (c / u) * 3,
          p = B(n + d, i + f, 0.6),
          m = B(n - d, i - f, 0.6),
          h = B(o + d, s + f, 0.6),
          g = B(o - d, s - f, 0.6);
        r.push(
          p.x,
          p.y,
          p.z,
          m.x,
          m.y,
          m.z,
          h.x,
          h.y,
          h.z,
          m.x,
          m.y,
          m.z,
          g.x,
          g.y,
          g.z,
          h.x,
          h.y,
          h.z,
        );
      }
      let a = new u();
      a.setAttribute(`position`, new t(r, 3));
      let o = new i(
        a,
        new s({
          color: 15921902,
          transparent: !0,
          opacity: 0.55,
          depthWrite: !1,
          polygonOffset: !0,
          polygonOffsetFactor: -4,
          polygonOffsetUnits: -4,
          side: 2,
        }),
      );
      ((o.renderOrder = 19), this.root.add(o));
      let c = 0;
      for (let t = 1; t < e.length - 1 && c < 4; t++) {
        let [r, i, a] = e[t];
        if (
          !((i - e[t - 1][1]) * (e[t + 1][1] - i) <= 0 && i !== e[t - 1][1]) ||
          a === 0
        )
          continue;
        let o = a < 0 ? 1 : -1,
          s = a < 0 ? n.left : n.right,
          l = Ee(
            (e, t, n) => {
              ((e.fillStyle = `#fff`),
                (e.font = `800 ${Math.round(n * 0.8)}px ${V}`),
                (e.textAlign = `center`),
                (e.textBaseline = `middle`),
                e.fillText(s, t / 2, n / 2 + n * 0.05));
            },
            64,
            2.4,
            256,
            256,
          );
        (this.root.add(
          K(l, 64, l.userData.depth, B(r, i + o * 60, 0.6), 0, !0),
        ),
          c++);
      }
    }
    setExit(e, t) {
      let n = this.exits.get(e);
      n &&
        ((n.target = +!!t),
        (n.sign.material.map = t ? n.lit : n.dim),
        U() && (n.t = n.target));
    }
    lightGate(e, t) {
      let n = this.gates.get(`${e}:${t}`);
      n && (n.mesh.material.map = n.lit);
    }
    frame(e) {
      this.clock += e;
      let t = U();
      for (let n of this.exits.values())
        ((n.t +=
          Math.sign(n.target - n.t) *
          Math.min(Math.abs(n.target - n.t), e * 1.6)),
          (n.glow.opacity =
            n.t * (t ? 0.9 : 0.75 + 0.2 * Math.sin(this.clock * 2.4))));
    }
    landing(e, t, n, r, i) {
      let a = e?.pits ?? [];
      if (!i || !e || !a.length || r || t[2] < 0) {
        this.ring.visible = !1;
        return;
      }
      let o = n[2],
        s = (o + Math.sqrt(Math.max(0, o * o + 1600 * t[2]))) / 800,
        c = t[0] + n[0] * s,
        l = t[1] + n[1] * s,
        u = (e, t) =>
          c > e.x0 - t && c < e.x1 + t && l > e.y0 - t && l < e.y1 + t,
        d =
          a.some((e) => u(e, -14)) && !(e.islands ?? []).some((e) => u(e, 14));
      (this.ringMat.color.set(d ? 16735581 : 16777215),
        this.ring.position.copy(B(c, l, 1.5)),
        (this.ring.visible = !0));
    }
    dispose() {
      let e = new Set();
      for (let t of this.exits.values()) e.add(t.dim).add(t.lit);
      for (let t of this.gates.values()) e.add(t.lit);
      this.root.traverse((t) => {
        let n = t;
        if (!n.isMesh) return;
        n.geometry.dispose();
        let r = n.material;
        (r.map && e.add(r.map), r.dispose());
      });
      for (let t of e) t.dispose();
      this.root.removeFromParent();
    }
  },
  J = y.indexOf(`final`),
  De = 1.4,
  Y = 9e3,
  Oe = 6e3,
  ke = 300,
  X = `bunnyhop:tutorial-guide`,
  Ae = 2600;
async function je(e) {
  let t;
  try {
    t = await le();
  } catch (t) {
    return (
      console.warn(`tutorial:`, t),
      e.session.hud.toast(
        `Tutorial data missing: playing the map without lessons`,
        5e3,
      ),
      null
    );
  }
  return (
    t.bspSha256 !== e.session.mapSha256 &&
      console.warn(`tutorial: lesson data is for another build of the map`),
    new Me(e, t)
  );
}
var Z = (e, t) => te(ee.get().binds[e]?.[0] ?? t),
  Q = (e) =>
    e.replace(
      /\{(\w+)\}/g,
      (e, t) =>
        ({
          jump: Z(`jump`, `Space`),
          forward: Z(`forward`, `KeyW`),
          left: Z(`left`, `KeyA`),
          right: Z(`right`, `KeyD`),
        })[t] ?? t,
    ),
  $ = (e) => g(`kbd`, null, e),
  Me = class {
    host;
    data;
    current = -1;
    goals = new Map();
    meter;
    coach;
    guide;
    guidePref;
    guideShown = !1;
    marks;
    prompt;
    pTitle;
    pLine;
    pHint;
    painted = { title: ``, line: ``, cls: ``, hint: `` };
    showUntil = 0;
    hintUntil = 0;
    step = null;
    progress = { value: 0, at: 0 };
    finale = null;
    started = !1;
    board = new Ce();
    demo = null;
    demoLoading = !1;
    autoPlayed = new Set();
    aux = null;
    pos = [0, 0, 0];
    vel = [0, 0, 0];
    grounded = !0;
    legit;
    constructor(e, t) {
      ((this.host = e),
        (this.data = t),
        (this.legit = e.session.selectedStyle === `legit`),
        (this.meter = new _e(this.legit ? 5 : 2)),
        (this.coach = new j(this.legit)),
        (this.guide = new Te()),
        (this.guide.el.id = `tut-guide`),
        (this.guidePref =
          localStorage.getItem(X) === `details` ? `details` : `on`),
        (this.marks = new q(
          t,
          t.lessons.map((e) => S[e.id].title),
          { left: Z(`left`, `KeyA`), right: Z(`right`, `KeyD`) },
        )),
        e.scene.add(this.marks.root),
        (this.pTitle = g(`div.tp-title`)),
        (this.pLine = g(`div.tp-line`)),
        (this.pHint = g(`div.tp-hint`)),
        (this.prompt = g(
          `div#tut-prompt`,
          { role: `status`, "aria-live": `polite` },
          this.pTitle,
          this.pLine,
          this.pHint,
        )),
        document.getElementById(`hud`).append(this.prompt, this.guide.el),
        document.body.classList.add(`tutorial-mode`),
        document.addEventListener(`pointerlockchange`, this.onLock),
        (e.session.onSubmission = (e) => {
          e.status === `verified` && this.finale && this.showBoard();
        }));
      let n = new URLSearchParams(location.search).get(`lesson`),
        r = y.indexOf(n);
      r > 0
        ? this.goTo(r)
        : this.enter(Math.max(0, D(t, e.core.state().position)));
    }
    onLock = () => {
      !this.started &&
        document.pointerLockElement &&
        ((this.started = !0),
        (this.showUntil = this.hintUntil = performance.now() + Y));
    };
    get lesson() {
      return this.data.lessons[this.current];
    }
    goalsFor(e) {
      let t = this.goals.get(e.id);
      return (
        t ||
          ((t = new ve(e, {
            goldSeconds: e.demoSeconds ? Math.ceil(e.demoSeconds * De) : 20,
          })),
          this.goals.set(e.id, t)),
        t
      );
    }
    instruction() {
      let e = S[this.lesson.id],
        t = (this.legit && e.legit) || e.steps,
        n = this.goalsFor(this.lesson),
        r = n.current ? n.goals.indexOf(n.current) : 0;
      return Q(t[Math.min(r, t.length - 1)]);
    }
    goTo(e) {
      if (e < 0 || e >= this.data.lessons.length) return;
      let t = this.data.lessons[e];
      (t.id === `final`
        ? this.host.restart(1)
        : this.host.restart(0, {
            position: [...t.start.position],
            yaw: t.start.yaw,
          }),
        this.meter.reset(),
        this.coach.reset(),
        e === this.current
          ? (this.demo?.restart(), (this.showUntil = performance.now() + 4e3))
          : this.enter(e));
    }
    enter(e) {
      ((this.current = e), this.endFinale());
      let t = this.lesson,
        n = S[t.id],
        r = this.goalsFor(t);
      ((this.guideShown = n.guide),
        this.meter.reset(),
        this.coach.reset(),
        (this.step = r.current?.id ?? null));
      let i = performance.now();
      ((this.showUntil = i + Y),
        (this.hintUntil = i + Y),
        this.marks.setExit(e, r.done),
        document.body.classList.toggle(`tutorial-practice`, e !== J),
        this.stopDemo(),
        !b().lessons[t.id] &&
          !this.autoPlayed.has(t.id) &&
          t.id !== `final` &&
          (this.autoPlayed.add(t.id), this.startDemo(!1)));
    }
    complete() {
      let e = this.lesson.id;
      (T((t) => (t.lessons[e] ??= Date.now())),
        h(`achievement`, 0.6),
        this.marks.setExit(this.current, !0));
    }
    finishFinal(e, t) {
      let n = this.goalsFor(this.lesson),
        r = e === 1;
      r && n.finish(t);
      let i = n.goals.find((e) => e.id === `gold`),
        a = !1;
      T(
        (n) =>
          (a = pe(n, {
            track: e,
            seconds: t,
            gold: r && i.done,
            at: Date.now(),
          })),
      );
      let o = a
        ? {
            kicker: `Tutorial complete`,
            title: `You can bhop`,
            detail: `Graduate badge earned${i.done ? ` · gold time, too` : ``}`,
            mood: `cheer`,
            confetti: 80,
            sound: `achievement`,
            priority: oe.level,
            key: `tutorial-graduate`,
          }
        : null;
      ((this.finale = {
        line: i.done ? `Gold time, too.` : `Gold is under ${i.target} s.`,
        titleUntil: performance.now() + Ae,
        cel: o,
      }),
        document.body.classList.add(`tutorial-title`),
        r &&
          this.board.available &&
          (this.host.session.hud.setCardExtra(this.board.el), this.showBoard()),
        a || h(`achievement`, 0.8));
    }
    endTitle() {
      let e = this.finale;
      if (!e?.titleUntil) return;
      ((e.titleUntil = 0), document.body.classList.remove(`tutorial-title`));
      let t = document.getElementById(`hud-endcard`);
      (t &&
        !t.hidden &&
        !matchMedia(`(prefers-reduced-motion: reduce)`).matches &&
        t.animate(
          { opacity: [0, 1], transform: [`translateY(-10px)`, `none`] },
          { duration: 320, easing: `cubic-bezier(0.2, 0.8, 0.2, 1)` },
        ),
        e.cel && ie(e.cel),
        (e.cel = null));
    }
    endFinale() {
      (this.endTitle(), (this.finale = null));
    }
    showBoard() {
      let e = this.goalsFor(this.data.lessons[J]).goals.find(
        (e) => e.id === `gold`,
      ).target;
      return this.board.show(b().best ?? null, e);
    }
    tick(e, t, n, r) {
      let i = {
        cmd: {
          forward: e.forwardmove,
          side: e.sidemove,
          yaw: e.yaw,
          pitch: e.pitch,
          buttons: e.buttons,
        },
        pre: t,
        post: n,
        events: r,
      };
      Math.hypot(
        t.position[0] - this.pos[0],
        t.position[1] - this.pos[1],
        t.position[2] - this.pos[2],
      ) > 96 && (this.meter.reset(), this.coach.reset());
      let a = D(this.data, n.position);
      if (a >= 0 && a !== this.current) {
        let e =
          ne(
            n.position,
            n.crouched,
            this.host.session.timer.zones,
            `start`,
            1,
          ) !== null;
        if (
          de(
            this.data.lessons[a].id,
            this.current >= 0 ? this.lesson.id : null,
            e,
          )
        ) {
          (this.goTo(a), (this.pos = this.host.core.state().position));
          return;
        }
        this.enter(a);
      }
      fe(this.lesson.id) && (this.host.session.lessonPractice = !0);
      let o = this.meter.breaks;
      this.meter.update(i);
      let s = this.goalsFor(this.lesson),
        c = s.done,
        l = s.update(i, this.meter);
      l >= 0 && (this.marks.lightGate(this.current, l), h(`split`, 0.8));
      let u = s.current?.id ?? null,
        d = performance.now(),
        f = s.current?.value ?? 0;
      (f === this.progress.value
        ? s.current &&
          this.lesson.id !== `final` &&
          d - this.progress.at > Oe &&
          ((this.showUntil = d + 4e3), (this.progress.at = d))
        : (this.progress = { value: f, at: d }),
        u !== this.step &&
          (u && ((this.showUntil = d + 5e3), h(`split`, 0.6)), (this.step = u)),
        this.coach.update(this.lesson.id, i, this.meter, o, s.done),
        !c && s.done && this.lesson.id !== `final` && this.complete());
      let p = this.host.session.timer;
      (this.lesson.id === `final` && p.status === `finished` && !this.finale
        ? this.finishFinal(p.track, p.time())
        : p.status !== `finished` && this.finale && this.endFinale(),
        (this.grounded = n.grounded),
        (this.pos = n.position),
        (this.vel = n.velocity));
    }
    frame(e, t) {
      let n = performance.now();
      this.finale?.titleUntil && n >= this.finale.titleUntil && this.endTitle();
      let r = this.guideShown && !this.finale;
      ((this.guide.mode = r ? this.guidePref : `off`),
        r && this.guide.update(this.meter, n),
        this.marks.landing(
          this.lesson,
          this.pos,
          this.vel,
          this.grounded,
          S[this.lesson.id].landing,
        ),
        this.marks.frame(t),
        this.demo &&
          (this.demo.frame(t, e.position), this.demo.ended && this.stopDemo()),
        this.paintPrompt(n));
    }
    onAction(e) {
      return e === `restart` && (this.goTo(this.current), !0);
    }
    onKey(e) {
      switch (e) {
        case `KeyN`:
          return (this.goTo(this.current + 1), !0);
        case `Backspace`:
          return (this.goTo(this.current - 1), !0);
        case `Enter`:
        case `NumpadEnter`:
          return this.finale
            ? ((location.href = `/?map=bhop_ambience`), !0)
            : (this.goalsFor(this.lesson).done && this.goTo(this.current + 1),
              !0);
        case `KeyX`:
          return (this.demo ? this.stopDemo() : this.startDemo(!0), !0);
        case `KeyG`:
          return (
            this.guideShown
              ? this.guidePref === `on`
                ? (this.guidePref = `details`)
                : ((this.guidePref = `on`), (this.guideShown = !1))
              : (this.guideShown = !0),
            localStorage.setItem(X, this.guidePref),
            this.host.session.hud.toast(
              this.guideShown
                ? this.guidePref === `details`
                  ? `Strafe guide with numbers`
                  : `Strafe guide on`
                : `Strafe guide off`,
              1500,
            ),
            !0
          );
      }
      return !1;
    }
    async startDemo(t) {
      if (this.demoLoading) return;
      let n = this.lesson,
        r = this.legit && n.demoLegit ? n.demoLegit : n.demo;
      if (r) {
        this.demoLoading = !0;
        try {
          this.aux ||
            ((this.aux = await (
              await e(
                async () => {
                  let { Core: e } = await import(`./core-_1D4RxH5.js`);
                  return { Core: e };
                },
                __vite__mapDeps([0, 1]),
              )
            ).Core.create(this.host.wasmBytes)),
            this.aux.loadMapPhysics(this.host.bsp));
          let i = await N.create({
            wasmBytes: this.host.wasmBytes,
            bsp: this.host.bsp,
            scene: this.host.scene,
            demo: r,
            aux: this.aux,
            loop: t,
          });
          if (this.lesson !== n || this.demo) return i.dispose();
          this.demo = i;
        } catch (e) {
          console.warn(`tutorial demo:`, e);
        } finally {
          this.demoLoading = !1;
        }
      }
    }
    stopDemo() {
      (this.demo?.dispose(), (this.demo = null));
    }
    paintPrompt(e) {
      let t = this.goalsFor(this.lesson).done,
        n = this.coach.idleTicks > ke,
        r = ``,
        i = ``,
        a = ``,
        o = [],
        s = ae();
      (s ||
        (this.finale?.titleUntil
          ? ((r = `You can bhop.`), (i = this.finale.line))
          : this.finale
            ? ((i = this.finale.line),
              (o = [
                $(`Enter`),
                ` play bhop_ambience · `,
                $(Z(`restart`, `KeyR`)),
                ` go again`,
              ]))
            : this.coach.nudge
              ? ((i = Q(w[this.coach.nudge])), (a = `nudge`))
              : t && this.lesson.id !== `final`
                ? ((i = me), (o = [$(`Enter`), ` next lesson`]))
                : (e < this.showUntil || n) && (i = this.instruction())),
        !s &&
          !this.finale &&
          !t &&
          (e < this.hintUntil || n) &&
          ((o = [$(`X`), this.demo ? ` hide the ghost` : ` show me`]),
          this.current < this.data.lessons.length - 1 &&
            o.push(` · `, $(`N`), ` skip`)));
      let c = o.map((e) => (typeof e == `string` ? e : e.textContent)).join(``),
        l = this.painted;
      (r !== l.title &&
        (r && (this.pTitle.textContent = r),
        this.pTitle.classList.toggle(`on`, !!r),
        (l.title = r)),
        (i !== l.line || a !== l.cls) &&
          (i && (this.pLine.textContent = i),
          (this.pLine.className = `tp-line ${a}${i ? ` on` : ``}`),
          (l.line = i),
          (l.cls = a)),
        c !== l.hint &&
          (o.length && this.pHint.replaceChildren(...o),
          this.pHint.classList.toggle(`on`, o.length > 0),
          (l.hint = c)));
    }
    dispose() {
      (this.stopDemo(),
        this.board.dispose(),
        (this.host.session.onSubmission = null),
        this.marks.dispose(),
        this.prompt.remove(),
        this.guide.el.remove(),
        document.removeEventListener(`pointerlockchange`, this.onLock),
        document.body.classList.remove(
          `tutorial-mode`,
          `tutorial-practice`,
          `tutorial-title`,
        ));
    }
  };
export { je as startTutorialMode };
