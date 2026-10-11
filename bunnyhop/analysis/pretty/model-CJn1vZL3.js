import { a as e, g as t, i as n, n as r, o as i } from "./core-GuI4LXND.js";
import { t as a } from "./api-B2Jj-kgC.js";
import {
  E as o,
  _ as s,
  h as c,
  n as l,
  o as u,
  r as d,
  s as f,
  v as p,
  y as m,
} from "./cosmetics-PGh_ZGfu.js";
import { a as h, i as g } from "./loadout-DopA3xcw.js";
import { n as _, r as v } from "./palettes-YJRmTQgw.js";
var y = `attached`,
  b = `detached`,
  x = 1e3,
  S = 1001,
  C = 1002,
  w = 1003,
  T = 1004,
  E = 1005,
  D = 1006,
  O = 1007,
  k = 1008,
  A = 1009,
  ee = 1010,
  te = 1011,
  ne = 1012,
  re = 1013,
  ie = 1014,
  ae = 1015,
  oe = 1016,
  se = 1017,
  ce = 1018,
  le = 1020,
  ue = 35902,
  de = 35899,
  fe = 1021,
  pe = 1022,
  me = 1023,
  he = 1026,
  ge = 1027,
  _e = 1028,
  ve = 1029,
  ye = 1030,
  be = 1031,
  xe = 1033,
  Se = 33776,
  Ce = 33777,
  we = 33778,
  Te = 33779,
  Ee = 35840,
  De = 35841,
  Oe = 35842,
  ke = 35843,
  Ae = 36196,
  je = 37492,
  Me = 37496,
  Ne = 37488,
  Pe = 37489,
  Fe = 37490,
  Ie = 37491,
  Le = 37808,
  Re = 37809,
  ze = 37810,
  Be = 37811,
  Ve = 37812,
  He = 37813,
  Ue = 37814,
  We = 37815,
  Ge = 37816,
  Ke = 37817,
  qe = 37818,
  Je = 37819,
  Ye = 37820,
  Xe = 37821,
  Ze = 36492,
  Qe = 36494,
  $e = 36495,
  et = 36283,
  tt = 36284,
  nt = 36285,
  rt = 36286,
  it = 2300,
  at = 2301,
  ot = 2302,
  st = 2303,
  ct = 2400,
  lt = 2401,
  ut = 2402,
  dt = 3200,
  ft = `srgb`,
  pt = `srgb-linear`,
  mt = `linear`,
  ht = `srgb`,
  gt = 7680,
  _t = 35044,
  vt = 35048,
  yt = `300 es`,
  bt = 2e3;
function xt(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function St(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ct(e) {
  return document.createElementNS(`http://www.w3.org/1999/xhtml`, e);
}
function wt() {
  let e = Ct(`canvas`);
  return ((e.style.display = `block`), e);
}
var Tt = {};
function Et(...e) {
  let t = `THREE.` + e.shift();
  console.log(t, ...e);
}
function Dt(e) {
  let t = e[0];
  if (typeof t == `string` && t.startsWith(`TSL:`)) {
    let t = e[1];
    t && t.isStackTrace
      ? (e[0] += ` ` + t.getLocation())
      : (e[1] = `Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`);
  }
  return e;
}
function Ot(...e) {
  e = Dt(e);
  let t = `THREE.` + e.shift();
  {
    let n = e[0];
    n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
  }
}
function kt(...e) {
  e = Dt(e);
  let t = `THREE.` + e.shift();
  {
    let n = e[0];
    n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
  }
}
function At(...e) {
  let t = e.join(` `);
  t in Tt || ((Tt[t] = !0), Ot(...e));
}
function jt(e, t, n) {
  return new Promise(function (r, i) {
    function a() {
      switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case e.WAIT_FAILED:
          i();
          break;
        case e.TIMEOUT_EXPIRED:
          setTimeout(a, n);
          break;
        default:
          r();
      }
    }
    setTimeout(a, n);
  });
}
var Mt = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 },
  Nt = class {
    addEventListener(e, t) {
      this._listeners === void 0 && (this._listeners = {});
      let n = this._listeners;
      (n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t));
    }
    hasEventListener(e, t) {
      let n = this._listeners;
      return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
      let n = this._listeners;
      if (n === void 0) return;
      let r = n[e];
      if (r !== void 0) {
        let e = r.indexOf(t);
        e !== -1 && r.splice(e, 1);
      }
    }
    dispatchEvent(e) {
      let t = this._listeners;
      if (t === void 0) return;
      let n = t[e.type];
      if (n !== void 0) {
        e.target = this;
        let t = n.slice(0);
        for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
        e.target = null;
      }
    }
  },
  Pt =
    `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(
      `.`,
    ),
  Ft = 1234567,
  It = Math.PI / 180,
  Lt = 180 / Math.PI;
function Rt() {
  let e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0,
    r = (Math.random() * 4294967295) | 0;
  return (
    Pt[e & 255] +
    Pt[(e >> 8) & 255] +
    Pt[(e >> 16) & 255] +
    Pt[(e >> 24) & 255] +
    `-` +
    Pt[t & 255] +
    Pt[(t >> 8) & 255] +
    `-` +
    Pt[((t >> 16) & 15) | 64] +
    Pt[(t >> 24) & 255] +
    `-` +
    Pt[(n & 63) | 128] +
    Pt[(n >> 8) & 255] +
    `-` +
    Pt[(n >> 16) & 255] +
    Pt[(n >> 24) & 255] +
    Pt[r & 255] +
    Pt[(r >> 8) & 255] +
    Pt[(r >> 16) & 255] +
    Pt[(r >> 24) & 255]
  ).toLowerCase();
}
function zt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Bt(e, t) {
  return ((e % t) + t) % t;
}
function Vt(e, t, n, r, i) {
  return r + ((e - t) * (i - r)) / (n - t);
}
function Ht(e, t, n) {
  return e === t ? 0 : (n - e) / (t - e);
}
function Ut(e, t, n) {
  return (1 - n) * e + n * t;
}
function Wt(e, t, n, r) {
  return Ut(e, t, 1 - Math.exp(-n * r));
}
function Gt(e, t = 1) {
  return t - Math.abs(Bt(e, t * 2) - t);
}
function Kt(e, t, n) {
  return e <= t
    ? 0
    : e >= n
      ? 1
      : ((e = (e - t) / (n - t)), e * e * (3 - 2 * e));
}
function qt(e, t, n) {
  return e <= t
    ? 0
    : e >= n
      ? 1
      : ((e = (e - t) / (n - t)), e * e * e * (e * (e * 6 - 15) + 10));
}
function Jt(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function Yt(e, t) {
  return e + Math.random() * (t - e);
}
function Xt(e) {
  return e * (0.5 - Math.random());
}
function Zt(e) {
  e !== void 0 && (Ft = e);
  let t = (Ft += 1831565813);
  return (
    (t = Math.imul(t ^ (t >>> 15), t | 1)),
    (t ^= t + Math.imul(t ^ (t >>> 7), t | 61)),
    ((t ^ (t >>> 14)) >>> 0) / 4294967296
  );
}
function Qt(e) {
  return e * It;
}
function $t(e) {
  return e * Lt;
}
function en(e) {
  return e > 0 && Number.isInteger(e) && 2 ** Math.round(Math.log2(e)) === e;
}
function tn(e) {
  return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function nn(e) {
  return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function rn(e, t, n, r, i) {
  let a = Math.cos,
    o = Math.sin,
    s = a(n / 2),
    c = o(n / 2),
    l = a((t + r) / 2),
    u = o((t + r) / 2),
    d = a((t - r) / 2),
    f = o((t - r) / 2),
    p = a((r - t) / 2),
    m = o((r - t) / 2);
  switch (i) {
    case `XYX`:
      e.set(s * u, c * d, c * f, s * l);
      break;
    case `YZY`:
      e.set(c * f, s * u, c * d, s * l);
      break;
    case `ZXZ`:
      e.set(c * d, c * f, s * u, s * l);
      break;
    case `XZX`:
      e.set(s * u, c * m, c * p, s * l);
      break;
    case `YXY`:
      e.set(c * p, s * u, c * m, s * l);
      break;
    case `ZYZ`:
      e.set(c * m, c * p, s * u, s * l);
      break;
    default:
      Ot(
        `MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ` +
          i,
      );
  }
}
function an(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 4294967295;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
    case Uint8ClampedArray:
      return e / 255;
    case Int32Array:
      return Math.max(e / 2147483647, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw Error(`THREE.MathUtils: Invalid component type.`);
  }
}
function on(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(e * 4294967295);
    case Uint16Array:
      return Math.round(e * 65535);
    case Uint8Array:
    case Uint8ClampedArray:
      return Math.round(e * 255);
    case Int32Array:
      return Math.round(e * 2147483647);
    case Int16Array:
      return Math.round(e * 32767);
    case Int8Array:
      return Math.round(e * 127);
    default:
      throw Error(`THREE.MathUtils: Invalid component type.`);
  }
}
var sn = {
    DEG2RAD: It,
    RAD2DEG: Lt,
    generateUUID: Rt,
    clamp: zt,
    euclideanModulo: Bt,
    mapLinear: Vt,
    inverseLerp: Ht,
    lerp: Ut,
    damp: Wt,
    pingpong: Gt,
    smoothstep: Kt,
    smootherstep: qt,
    randInt: Jt,
    randFloat: Yt,
    randFloatSpread: Xt,
    seededRandom: Zt,
    degToRad: Qt,
    radToDeg: $t,
    isPowerOfTwo: en,
    ceilPowerOfTwo: tn,
    floorPowerOfTwo: nn,
    setQuaternionFromProperEuler: rn,
    normalize: on,
    denormalize: an,
  },
  j = class e {
    static {
      e.prototype.isVector2 = !0;
    }
    constructor(e = 0, t = 0) {
      ((this.x = e), (this.y = t));
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return ((this.x = e), (this.y = t), this);
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw Error(`THREE.Vector2: index is out of range: ` + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw Error(`THREE.Vector2: index is out of range: ` + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return ((this.x = e.x), (this.y = e.y), this);
    }
    add(e) {
      return ((this.x += e.x), (this.y += e.y), this);
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), this);
    }
    addVectors(e, t) {
      return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
    }
    addScaledVector(e, t) {
      return ((this.x += e.x * t), (this.y += e.y * t), this);
    }
    sub(e) {
      return ((this.x -= e.x), (this.y -= e.y), this);
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), this);
    }
    subVectors(e, t) {
      return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
    }
    multiply(e) {
      return ((this.x *= e.x), (this.y *= e.y), this);
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), this);
    }
    divide(e) {
      return ((this.x /= e.x), (this.y /= e.y), this);
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      let t = this.x,
        n = this.y,
        r = e.elements;
      return (
        (this.x = r[0] * t + r[3] * n + r[6]),
        (this.y = r[1] * t + r[4] * n + r[7]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = zt(this.x, e.x, t.x)),
        (this.y = zt(this.y, e.y, t.y)),
        this
      );
    }
    clampScalar(e, t) {
      return ((this.x = zt(this.x, e, t)), (this.y = zt(this.y, e, t)), this);
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(zt(n, e, t));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        this
      );
    }
    ceil() {
      return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), this);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
      let t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      let n = this.dot(e) / t;
      return Math.acos(zt(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      let t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        this
      );
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return ((this.x = e[t]), (this.y = e[t + 1]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.x), (e[t + 1] = this.y), e);
    }
    fromBufferAttribute(e, t) {
      return ((this.x = e.getX(t)), (this.y = e.getY(t)), this);
    }
    rotateAround(e, t) {
      let n = Math.cos(t),
        r = Math.sin(t),
        i = this.x - e.x,
        a = this.y - e.y;
      return (
        (this.x = i * n - a * r + e.x),
        (this.y = i * r + a * n + e.y),
        this
      );
    }
    random() {
      return ((this.x = Math.random()), (this.y = Math.random()), this);
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y);
    }
  },
  cn = class {
    constructor(e = 0, t = 0, n = 0, r = 1) {
      ((this.isQuaternion = !0),
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = r));
    }
    static slerpFlat(e, t, n, r, i, a, o) {
      let s = n[r + 0],
        c = n[r + 1],
        l = n[r + 2],
        u = n[r + 3],
        d = i[a + 0],
        f = i[a + 1],
        p = i[a + 2],
        m = i[a + 3];
      if (u !== m || s !== d || c !== f || l !== p) {
        let e = s * d + c * f + l * p + u * m;
        e < 0 && ((d = -d), (f = -f), (p = -p), (m = -m), (e = -e));
        let t = 1 - o;
        if (e < 0.9995) {
          let n = Math.acos(e),
            r = Math.sin(n);
          ((t = Math.sin(t * n) / r),
            (o = Math.sin(o * n) / r),
            (s = s * t + d * o),
            (c = c * t + f * o),
            (l = l * t + p * o),
            (u = u * t + m * o));
        } else {
          ((s = s * t + d * o),
            (c = c * t + f * o),
            (l = l * t + p * o),
            (u = u * t + m * o));
          let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
          ((s *= e), (c *= e), (l *= e), (u *= e));
        }
      }
      ((e[t] = s), (e[t + 1] = c), (e[t + 2] = l), (e[t + 3] = u));
    }
    static multiplyQuaternionsFlat(e, t, n, r, i, a) {
      let o = n[r],
        s = n[r + 1],
        c = n[r + 2],
        l = n[r + 3],
        u = i[a],
        d = i[a + 1],
        f = i[a + 2],
        p = i[a + 3];
      return (
        (e[t] = o * p + l * u + s * f - c * d),
        (e[t + 1] = s * p + l * d + c * u - o * f),
        (e[t + 2] = c * p + l * f + o * d - s * u),
        (e[t + 3] = l * p - o * u - s * d - c * f),
        e
      );
    }
    get x() {
      return this._x;
    }
    set x(e) {
      ((this._x = e), this._onChangeCallback());
    }
    get y() {
      return this._y;
    }
    set y(e) {
      ((this._y = e), this._onChangeCallback());
    }
    get z() {
      return this._z;
    }
    set z(e) {
      ((this._z = e), this._onChangeCallback());
    }
    get w() {
      return this._w;
    }
    set w(e) {
      ((this._w = e), this._onChangeCallback());
    }
    set(e, t, n, r) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = r),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
      return (
        (this._x = e.x),
        (this._y = e.y),
        (this._z = e.z),
        (this._w = e.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(e, t = !0) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._order,
        o = Math.cos,
        s = Math.sin,
        c = o(n / 2),
        l = o(r / 2),
        u = o(i / 2),
        d = s(n / 2),
        f = s(r / 2),
        p = s(i / 2);
      switch (a) {
        case `XYZ`:
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case `YXZ`:
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        case `ZXY`:
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case `ZYX`:
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        case `YZX`:
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case `XZY`:
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        default:
          Ot(`Quaternion: .setFromEuler() encountered an unknown order: ` + a);
      }
      return (t === !0 && this._onChangeCallback(), this);
    }
    setFromAxisAngle(e, t) {
      let n = t / 2,
        r = Math.sin(n);
      return (
        (this._x = e.x * r),
        (this._y = e.y * r),
        (this._z = e.z * r),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e) {
      let t = e.elements,
        n = t[0],
        r = t[4],
        i = t[8],
        a = t[1],
        o = t[5],
        s = t[9],
        c = t[2],
        l = t[6],
        u = t[10],
        d = n + o + u;
      if (d > 0) {
        let e = 0.5 / Math.sqrt(d + 1);
        ((this._w = 0.25 / e),
          (this._x = (l - s) * e),
          (this._y = (i - c) * e),
          (this._z = (a - r) * e));
      } else if (n > o && n > u) {
        let e = 2 * Math.sqrt(1 + n - o - u);
        ((this._w = (l - s) / e),
          (this._x = 0.25 * e),
          (this._y = (r + a) / e),
          (this._z = (i + c) / e));
      } else if (o > u) {
        let e = 2 * Math.sqrt(1 + o - n - u);
        ((this._w = (i - c) / e),
          (this._x = (r + a) / e),
          (this._y = 0.25 * e),
          (this._z = (s + l) / e));
      } else {
        let e = 2 * Math.sqrt(1 + u - n - o);
        ((this._w = (a - r) / e),
          (this._x = (i + c) / e),
          (this._y = (s + l) / e),
          (this._z = 0.25 * e));
      }
      return (this._onChangeCallback(), this);
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return (
        n < 1e-8
          ? ((n = 0),
            Math.abs(e.x) > Math.abs(e.z)
              ? ((this._x = -e.y),
                (this._y = e.x),
                (this._z = 0),
                (this._w = n))
              : ((this._x = 0),
                (this._y = -e.z),
                (this._z = e.y),
                (this._w = n)))
          : ((this._x = e.y * t.z - e.z * t.y),
            (this._y = e.z * t.x - e.x * t.z),
            (this._z = e.x * t.y - e.y * t.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(zt(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
      let n = this.angleTo(e);
      if (n === 0) return this;
      let r = Math.min(1, t / n);
      return (this.slerp(e, r), this);
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w,
      );
    }
    normalize() {
      let e = this.length();
      return (
        e === 0
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((e = 1 / e),
            (this._x *= e),
            (this._y *= e),
            (this._z *= e),
            (this._w *= e)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(e) {
      return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._w,
        o = t._x,
        s = t._y,
        c = t._z,
        l = t._w;
      return (
        (this._x = n * l + a * o + r * c - i * s),
        (this._y = r * l + a * s + i * o - n * c),
        (this._z = i * l + a * c + n * s - r * o),
        (this._w = a * l - n * o - r * s - i * c),
        this._onChangeCallback(),
        this
      );
    }
    slerp(e, t) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._w,
        o = this.dot(e);
      o < 0 && ((n = -n), (r = -r), (i = -i), (a = -a), (o = -o));
      let s = 1 - t;
      if (o < 0.9995) {
        let e = Math.acos(o),
          c = Math.sin(e);
        ((s = Math.sin(s * e) / c),
          (t = Math.sin(t * e) / c),
          (this._x = this._x * s + n * t),
          (this._y = this._y * s + r * t),
          (this._z = this._z * s + i * t),
          (this._w = this._w * s + a * t),
          this._onChangeCallback());
      } else
        ((this._x = this._x * s + n * t),
          (this._y = this._y * s + r * t),
          (this._z = this._z * s + i * t),
          (this._w = this._w * s + a * t),
          this.normalize());
      return this;
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n);
    }
    random() {
      let e = 2 * Math.PI * Math.random(),
        t = 2 * Math.PI * Math.random(),
        n = Math.random(),
        r = Math.sqrt(1 - n),
        i = Math.sqrt(n);
      return this.set(
        r * Math.sin(e),
        r * Math.cos(e),
        i * Math.sin(t),
        i * Math.cos(t),
      );
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._w === this._w
      );
    }
    fromArray(e, t = 0) {
      return (
        (this._x = e[t]),
        (this._y = e[t + 1]),
        (this._z = e[t + 2]),
        (this._w = e[t + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this._x = e.getX(t)),
        (this._y = e.getY(t)),
        (this._z = e.getZ(t)),
        (this._w = e.getW(t)),
        this._onChangeCallback(),
        this
      );
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(e) {
      return ((this._onChangeCallback = e), this);
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      (yield this._x, yield this._y, yield this._z, yield this._w);
    }
  },
  M = class e {
    static {
      e.prototype.isVector3 = !0;
    }
    constructor(e = 0, t = 0, n = 0) {
      ((this.x = e), (this.y = t), (this.z = n));
    }
    set(e, t, n) {
      return (
        n === void 0 && (n = this.z),
        (this.x = e),
        (this.y = t),
        (this.z = n),
        this
      );
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), (this.z = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setZ(e) {
      return ((this.z = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw Error(`THREE.Vector3: index is out of range: ` + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw Error(`THREE.Vector3: index is out of range: ` + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
      return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
    }
    add(e) {
      return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), (this.z += e), this);
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x),
        (this.y = e.y + t.y),
        (this.z = e.z + t.z),
        this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t),
        (this.y += e.y * t),
        (this.z += e.z * t),
        this
      );
    }
    sub(e) {
      return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), (this.z -= e), this);
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x),
        (this.y = e.y - t.y),
        (this.z = e.z - t.z),
        this
      );
    }
    multiply(e) {
      return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), (this.z *= e), this);
    }
    multiplyVectors(e, t) {
      return (
        (this.x = e.x * t.x),
        (this.y = e.y * t.y),
        (this.z = e.z * t.z),
        this
      );
    }
    applyEuler(e) {
      return this.applyQuaternion(un.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(un.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[3] * n + i[6] * r),
        (this.y = i[1] * t + i[4] * n + i[7] * r),
        (this.z = i[2] * t + i[5] * n + i[8] * r),
        this
      );
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements,
        a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
      return (
        (this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a),
        (this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a),
        (this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a),
        this
      );
    }
    applyQuaternion(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.x,
        a = e.y,
        o = e.z,
        s = e.w,
        c = 2 * (a * r - o * n),
        l = 2 * (o * t - i * r),
        u = 2 * (i * n - a * t);
      return (
        (this.x = t + s * c + a * u - o * l),
        (this.y = n + s * l + o * c - i * u),
        (this.z = r + s * u + i * l - a * c),
        this
      );
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
        e.projectionMatrix,
      );
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
        e.matrixWorld,
      );
    }
    transformDirection(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[4] * n + i[8] * r),
        (this.y = i[1] * t + i[5] * n + i[9] * r),
        (this.z = i[2] * t + i[6] * n + i[10] * r),
        this.normalize()
      );
    }
    divide(e) {
      return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = zt(this.x, e.x, t.x)),
        (this.y = zt(this.y, e.y, t.y)),
        (this.z = zt(this.z, e.z, t.z)),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = zt(this.x, e, t)),
        (this.y = zt(this.y, e, t)),
        (this.z = zt(this.z, e, t)),
        this
      );
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(zt(n, e, t));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        this
      );
    }
    cross(e) {
      return this.crossVectors(this, e);
    }
    crossVectors(e, t) {
      let n = e.x,
        r = e.y,
        i = e.z,
        a = t.x,
        o = t.y,
        s = t.z;
      return (
        (this.x = r * s - i * o),
        (this.y = i * a - n * s),
        (this.z = n * o - r * a),
        this
      );
    }
    projectOnVector(e) {
      let t = e.lengthSq();
      if (t === 0) return this.set(0, 0, 0);
      let n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
      return (ln.copy(this).projectOnVector(e), this.sub(ln));
    }
    reflect(e) {
      return this.sub(ln.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
      let t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      let n = this.dot(e) / t;
      return Math.acos(zt(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      let t = this.x - e.x,
        n = this.y - e.y,
        r = this.z - e.z;
      return t * t + n * n + r * r;
    }
    manhattanDistanceTo(e) {
      return (
        Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
      );
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
      let r = Math.sin(t) * e;
      return (
        (this.x = r * Math.sin(n)),
        (this.y = Math.cos(t) * e),
        (this.z = r * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
      return (
        (this.x = e * Math.sin(t)),
        (this.y = n),
        (this.z = e * Math.cos(t)),
        this
      );
    }
    setFromMatrixPosition(e) {
      let t = e.elements;
      return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
    }
    setFromMatrixScale(e) {
      let t = this.setFromMatrixColumn(e, 0).length(),
        n = this.setFromMatrixColumn(e, 1).length(),
        r = this.setFromMatrixColumn(e, 2).length();
      return ((this.x = t), (this.y = n), (this.z = r), this);
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, t * 3);
    }
    setFromEuler(e) {
      return ((this.x = e._x), (this.y = e._y), (this.z = e._z), this);
    }
    setFromColor(e) {
      return ((this.x = e.r), (this.y = e.g), (this.z = e.b), this);
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
      return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
    }
    fromBufferAttribute(e, t) {
      return (
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
    randomDirection() {
      let e = Math.random() * Math.PI * 2,
        t = Math.random() * 2 - 1,
        n = Math.sqrt(1 - t * t);
      return (
        (this.x = n * Math.cos(e)),
        (this.y = t),
        (this.z = n * Math.sin(e)),
        this
      );
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y, yield this.z);
    }
  },
  ln = new M(),
  un = new cn(),
  dn = class e {
    static {
      e.prototype.isMatrix3 = !0;
    }
    constructor(e, t, n, r, i, a, o, s, c) {
      ((this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        e !== void 0 && this.set(e, t, n, r, i, a, o, s, c));
    }
    set(e, t, n, r, i, a, o, s, c) {
      let l = this.elements;
      return (
        (l[0] = e),
        (l[1] = r),
        (l[2] = o),
        (l[3] = t),
        (l[4] = i),
        (l[5] = s),
        (l[6] = n),
        (l[7] = a),
        (l[8] = c),
        this
      );
    }
    identity() {
      return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
    }
    copy(e) {
      let t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(e) {
      let t = e.elements;
      return (
        this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      let n = e.elements,
        r = t.elements,
        i = this.elements,
        a = n[0],
        o = n[3],
        s = n[6],
        c = n[1],
        l = n[4],
        u = n[7],
        d = n[2],
        f = n[5],
        p = n[8],
        m = r[0],
        h = r[3],
        g = r[6],
        _ = r[1],
        v = r[4],
        y = r[7],
        b = r[2],
        x = r[5],
        S = r[8];
      return (
        (i[0] = a * m + o * _ + s * b),
        (i[3] = a * h + o * v + s * x),
        (i[6] = a * g + o * y + s * S),
        (i[1] = c * m + l * _ + u * b),
        (i[4] = c * h + l * v + u * x),
        (i[7] = c * g + l * y + u * S),
        (i[2] = d * m + f * _ + p * b),
        (i[5] = d * h + f * v + p * x),
        (i[8] = d * g + f * y + p * S),
        this
      );
    }
    multiplyScalar(e) {
      let t = this.elements;
      return (
        (t[0] *= e),
        (t[3] *= e),
        (t[6] *= e),
        (t[1] *= e),
        (t[4] *= e),
        (t[7] *= e),
        (t[2] *= e),
        (t[5] *= e),
        (t[8] *= e),
        this
      );
    }
    determinant() {
      let e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8];
      return (
        t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s
      );
    }
    invert() {
      let e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8],
        u = l * a - o * c,
        d = o * s - l * i,
        f = c * i - a * s,
        p = t * u + n * d + r * f;
      if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      let m = 1 / p;
      return (
        (e[0] = u * m),
        (e[1] = (r * c - l * n) * m),
        (e[2] = (o * n - r * a) * m),
        (e[3] = d * m),
        (e[4] = (l * t - r * s) * m),
        (e[5] = (r * i - o * t) * m),
        (e[6] = f * m),
        (e[7] = (n * s - c * t) * m),
        (e[8] = (a * t - n * i) * m),
        this
      );
    }
    transpose() {
      let e,
        t = this.elements;
      return (
        (e = t[1]),
        (t[1] = t[3]),
        (t[3] = e),
        (e = t[2]),
        (t[2] = t[6]),
        (t[6] = e),
        (e = t[5]),
        (t[5] = t[7]),
        (t[7] = e),
        this
      );
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      let t = this.elements;
      return (
        (e[0] = t[0]),
        (e[1] = t[3]),
        (e[2] = t[6]),
        (e[3] = t[1]),
        (e[4] = t[4]),
        (e[5] = t[7]),
        (e[6] = t[2]),
        (e[7] = t[5]),
        (e[8] = t[8]),
        this
      );
    }
    setUvTransform(e, t, n, r, i, a, o) {
      let s = Math.cos(i),
        c = Math.sin(i);
      return (
        this.set(
          n * s,
          n * c,
          -n * (s * a + c * o) + a + e,
          -r * c,
          r * s,
          -r * (-c * a + s * o) + o + t,
          0,
          0,
          1,
        ),
        this
      );
    }
    scale(e, t) {
      return (
        At(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),
        this.premultiply(fn.makeScale(e, t)),
        this
      );
    }
    rotate(e) {
      return (
        At(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),
        this.premultiply(fn.makeRotation(-e)),
        this
      );
    }
    translate(e, t) {
      return (
        At(
          `Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`,
        ),
        this.premultiply(fn.makeTranslation(e, t)),
        this
      );
    }
    makeTranslation(e, t) {
      return (
        e.isVector2
          ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
          : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
      );
    }
    makeRotation(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, -n, 0, n, t, 0, 0, 0, 1), this);
    }
    makeScale(e, t) {
      return (this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this);
    }
    equals(e) {
      let t = this.elements,
        n = e.elements;
      for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      let n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        e
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  },
  fn = new dn(),
  pn = new dn().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  mn = new dn().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function hn() {
  let e = {
      enabled: !0,
      workingColorSpace: pt,
      spaces: {},
      convert: function (e, t, n) {
        return this.enabled === !1 || t === n || !t || !n
          ? e
          : (this.spaces[t].transfer === `srgb` &&
              ((e.r = _n(e.r)), (e.g = _n(e.g)), (e.b = _n(e.b))),
            this.spaces[t].primaries !== this.spaces[n].primaries &&
              (e.applyMatrix3(this.spaces[t].toXYZ),
              e.applyMatrix3(this.spaces[n].fromXYZ)),
            this.spaces[n].transfer === `srgb` &&
              ((e.r = vn(e.r)), (e.g = vn(e.g)), (e.b = vn(e.b))),
            e);
      },
      workingToColorSpace: function (e, t) {
        return this.convert(e, this.workingColorSpace, t);
      },
      colorSpaceToWorking: function (e, t) {
        return this.convert(e, t, this.workingColorSpace);
      },
      getPrimaries: function (e) {
        return this.spaces[e].primaries;
      },
      getTransfer: function (e) {
        return e === `` ? mt : this.spaces[e].transfer;
      },
      getToneMappingMode: function (e) {
        return (
          this.spaces[e].outputColorSpaceConfig.toneMappingMode || `standard`
        );
      },
      getLuminanceCoefficients: function (e, t = this.workingColorSpace) {
        return e.fromArray(this.spaces[t].luminanceCoefficients);
      },
      define: function (e) {
        Object.assign(this.spaces, e);
      },
      _getMatrix: function (e, t, n) {
        return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (e) {
        return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (e = this.workingColorSpace) {
        return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (t, n) {
        return (
          At(
            `ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`,
          ),
          e.workingToColorSpace(t, n)
        );
      },
      toWorkingColorSpace: function (t, n) {
        return (
          At(
            `ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`,
          ),
          e.colorSpaceToWorking(t, n)
        );
      },
    },
    t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    n = [0.2126, 0.7152, 0.0722],
    r = [0.3127, 0.329];
  return (
    e.define({
      [pt]: {
        primaries: t,
        whitePoint: r,
        transfer: mt,
        toXYZ: pn,
        fromXYZ: mn,
        luminanceCoefficients: n,
        workingColorSpaceConfig: { unpackColorSpace: ft },
        outputColorSpaceConfig: { drawingBufferColorSpace: ft },
      },
      [ft]: {
        primaries: t,
        whitePoint: r,
        transfer: ht,
        toXYZ: pn,
        fromXYZ: mn,
        luminanceCoefficients: n,
        outputColorSpaceConfig: { drawingBufferColorSpace: ft },
      },
    }),
    e
  );
}
var gn = hn();
function _n(e) {
  return e < 0.04045
    ? e * 0.0773993808
    : (e * 0.9478672986 + 0.0521327014) ** 2.4;
}
function vn(e) {
  return e < 0.0031308 ? e * 12.92 : 1.055 * e ** 0.41666 - 0.055;
}
var yn,
  bn = class {
    static getDataURL(e, t = `image/png`) {
      if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > `u`) return e.src;
      let n;
      if (e instanceof HTMLCanvasElement) n = e;
      else {
        (yn === void 0 && (yn = Ct(`canvas`)),
          (yn.width = e.width),
          (yn.height = e.height));
        let t = yn.getContext(`2d`);
        (e instanceof ImageData
          ? t.putImageData(e, 0, 0)
          : t.drawImage(e, 0, 0, e.width, e.height),
          (n = yn));
      }
      return n.toDataURL(t);
    }
    static sRGBToLinear(e) {
      if (
        (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < `u` && e instanceof ImageBitmap)
      ) {
        let t = Ct(`canvas`);
        ((t.width = e.width), (t.height = e.height));
        let n = t.getContext(`2d`);
        n.drawImage(e, 0, 0, e.width, e.height);
        let r = n.getImageData(0, 0, e.width, e.height),
          i = r.data;
        for (let e = 0; e < i.length; e++) i[e] = _n(i[e] / 255) * 255;
        return (n.putImageData(r, 0, 0), t);
      }
      if (e.data) {
        let t = e.data.slice(0);
        for (let e = 0; e < t.length; e++)
          t instanceof Uint8Array || t instanceof Uint8ClampedArray
            ? (t[e] = Math.floor(_n(t[e] / 255) * 255))
            : (t[e] = _n(t[e]));
        return { data: t, width: e.width, height: e.height };
      }
      return (
        Ot(
          `ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`,
        ),
        e
      );
    }
  },
  xn = 0,
  Sn = class {
    constructor(e = null) {
      ((this.isTextureSource = !0),
        Object.defineProperty(this, "id", { value: xn++ }),
        (this.uuid = Rt()),
        (this.data = e),
        (this.dataReady = !0),
        (this.version = 0));
    }
    getSize(e) {
      let t = this.data;
      return (
        typeof HTMLVideoElement < `u` && t instanceof HTMLVideoElement
          ? e.set(t.videoWidth, t.videoHeight, 0)
          : typeof VideoFrame < `u` && t instanceof VideoFrame
            ? e.set(t.displayWidth, t.displayHeight, 0)
            : t === null
              ? e.set(0, 0, 0)
              : e.set(t.width, t.height, t.depth || 0),
        e
      );
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`;
      if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
      let n = { uuid: this.uuid, url: `` },
        r = this.data;
      if (r !== null) {
        let e;
        if (Array.isArray(r)) {
          e = [];
          for (let t = 0, n = r.length; t < n; t++)
            r[t].isDataTexture ? e.push(Cn(r[t].image)) : e.push(Cn(r[t]));
        } else e = Cn(r);
        n.url = e;
      }
      return (t || (e.images[this.uuid] = n), n);
    }
  };
function Cn(e) {
  return (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < `u` && e instanceof ImageBitmap)
    ? bn.getDataURL(e)
    : e.data
      ? {
          data: Array.from(e.data),
          width: e.width,
          height: e.height,
          type: e.data.constructor.name,
        }
      : (Ot(`Texture: Unable to serialize Texture.`), {});
}
var wn = 0,
  Tn = new M(),
  En = class e extends Nt {
    constructor(
      t = e.DEFAULT_IMAGE,
      n = e.DEFAULT_MAPPING,
      r = S,
      i = S,
      a = D,
      o = k,
      s = me,
      c = A,
      l = e.DEFAULT_ANISOTROPY,
      u = ``,
    ) {
      (super(),
        (this.isTexture = !0),
        Object.defineProperty(this, "id", { value: wn++ }),
        (this.uuid = Rt()),
        (this.name = ``),
        (this.source = new Sn(t)),
        (this.mipmaps = []),
        (this.mapping = n),
        (this.channel = 0),
        (this.wrapS = r),
        (this.wrapT = i),
        (this.magFilter = a),
        (this.minFilter = o),
        (this.anisotropy = l),
        (this.format = s),
        (this.internalFormat = null),
        (this.type = c),
        (this.offset = new j(0, 0)),
        (this.repeat = new j(1, 1)),
        (this.center = new j(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new dn()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.colorSpace = u),
        (this.userData = {}),
        (this.updateRanges = []),
        (this.version = 0),
        (this.onUpdate = null),
        (this.renderTarget = null),
        (this.isRenderTargetTexture = !1),
        (this.isArrayTexture = !!(t && t.depth && t.depth > 1)),
        (this.pmremVersion = 0),
        (this.normalized = !1));
    }
    get width() {
      return this.source.getSize(Tn).x;
    }
    get height() {
      return this.source.getSize(Tn).y;
    }
    get depth() {
      return this.source.getSize(Tn).z;
    }
    get image() {
      return this.source.data;
    }
    set image(e) {
      this.source.data = e;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y,
      );
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({ start: e, count: t });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.source = e.source),
        (this.mipmaps = e.mipmaps.slice(0)),
        (this.mapping = e.mapping),
        (this.channel = e.channel),
        (this.wrapS = e.wrapS),
        (this.wrapT = e.wrapT),
        (this.magFilter = e.magFilter),
        (this.minFilter = e.minFilter),
        (this.anisotropy = e.anisotropy),
        (this.format = e.format),
        (this.internalFormat = e.internalFormat),
        (this.type = e.type),
        (this.normalized = e.normalized),
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        (this.rotation = e.rotation),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this.matrix.copy(e.matrix),
        (this.generateMipmaps = e.generateMipmaps),
        (this.premultiplyAlpha = e.premultiplyAlpha),
        (this.flipY = e.flipY),
        (this.unpackAlignment = e.unpackAlignment),
        (this.colorSpace = e.colorSpace),
        (this.renderTarget = e.renderTarget),
        (this.isRenderTargetTexture = e.isRenderTargetTexture),
        (this.isArrayTexture = e.isArrayTexture),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    setValues(e) {
      for (let t in e) {
        let n = e[t];
        if (n === void 0) {
          Ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);
          continue;
        }
        let r = this[t];
        if (r === void 0) {
          Ot(`Texture.setValues(): property '${t}' does not exist.`);
          continue;
        }
        (r && n && r.isVector2 && n.isVector2) ||
        (r && n && r.isVector3 && n.isVector3) ||
        (r && n && r.isMatrix3 && n.isMatrix3)
          ? r.copy(n)
          : (this[t] = n);
      }
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`;
      if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
      let n = {
        metadata: {
          version: 4.7,
          type: `Texture`,
          generator: `Texture.toJSON`,
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        normalized: this.normalized,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      return (
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
    transformUv(e) {
      if (this.mapping !== 300) return e;
      if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
        switch (this.wrapS) {
          case x:
            e.x -= Math.floor(e.x);
            break;
          case S:
            e.x = e.x < 0 ? 0 : 1;
            break;
          case C:
            Math.abs(Math.floor(e.x) % 2) === 1
              ? (e.x = Math.ceil(e.x) - e.x)
              : (e.x -= Math.floor(e.x));
        }
      if (e.y < 0 || e.y > 1)
        switch (this.wrapT) {
          case x:
            e.y -= Math.floor(e.y);
            break;
          case S:
            e.y = e.y < 0 ? 0 : 1;
            break;
          case C:
            Math.abs(Math.floor(e.y) % 2) === 1
              ? (e.y = Math.ceil(e.y) - e.y)
              : (e.y -= Math.floor(e.y));
        }
      return (this.flipY && (e.y = 1 - e.y), e);
    }
    set needsUpdate(e) {
      e === !0 && (this.version++, (this.source.needsUpdate = !0));
    }
    set needsPMREMUpdate(e) {
      e === !0 && this.pmremVersion++;
    }
  };
((En.DEFAULT_IMAGE = null),
  (En.DEFAULT_MAPPING = 300),
  (En.DEFAULT_ANISOTROPY = 1));
var Dn = class e {
    static {
      e.prototype.isVector4 = !0;
    }
    constructor(e = 0, t = 0, n = 0, r = 1) {
      ((this.x = e), (this.y = t), (this.z = n), (this.w = r));
    }
    get width() {
      return this.z;
    }
    set width(e) {
      this.z = e;
    }
    get height() {
      return this.w;
    }
    set height(e) {
      this.w = e;
    }
    set(e, t, n, r) {
      return ((this.x = e), (this.y = t), (this.z = n), (this.w = r), this);
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setZ(e) {
      return ((this.z = e), this);
    }
    setW(e) {
      return ((this.w = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw Error(`THREE.Vector4: index is out of range: ` + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw Error(`THREE.Vector4: index is out of range: ` + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
      return (
        (this.x = e.x),
        (this.y = e.y),
        (this.z = e.z),
        (this.w = e.w === void 0 ? 1 : e.w),
        this
      );
    }
    add(e) {
      return (
        (this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this
      );
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x),
        (this.y = e.y + t.y),
        (this.z = e.z + t.z),
        (this.w = e.w + t.w),
        this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t),
        (this.y += e.y * t),
        (this.z += e.z * t),
        (this.w += e.w * t),
        this
      );
    }
    sub(e) {
      return (
        (this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this
      );
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x),
        (this.y = e.y - t.y),
        (this.z = e.z - t.z),
        (this.w = e.w - t.w),
        this
      );
    }
    multiply(e) {
      return (
        (this.x *= e.x),
        (this.y *= e.y),
        (this.z *= e.z),
        (this.w *= e.w),
        this
      );
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
    }
    applyMatrix4(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = this.w,
        a = e.elements;
      return (
        (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i),
        (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i),
        (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i),
        (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i),
        this
      );
    }
    divide(e) {
      return (
        (this.x /= e.x),
        (this.y /= e.y),
        (this.z /= e.z),
        (this.w /= e.w),
        this
      );
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
      this.w = 2 * Math.acos(e.w);
      let t = Math.sqrt(1 - e.w * e.w);
      return (
        t < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(e) {
      let t,
        n,
        r,
        i,
        a = 0.01,
        o = 0.1,
        s = e.elements,
        c = s[0],
        l = s[4],
        u = s[8],
        d = s[1],
        f = s[5],
        p = s[9],
        m = s[2],
        h = s[6],
        g = s[10];
      if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
        if (
          Math.abs(l + d) < o &&
          Math.abs(u + m) < o &&
          Math.abs(p + h) < o &&
          Math.abs(c + f + g - 3) < o
        )
          return (this.set(1, 0, 0, 0), this);
        t = Math.PI;
        let e = (c + 1) / 2,
          s = (f + 1) / 2,
          _ = (g + 1) / 2,
          v = (l + d) / 4,
          y = (u + m) / 4,
          b = (p + h) / 4;
        return (
          e > s && e > _
            ? e < a
              ? ((n = 0), (r = 0.707106781), (i = 0.707106781))
              : ((n = Math.sqrt(e)), (r = v / n), (i = y / n))
            : s > _
              ? s < a
                ? ((n = 0.707106781), (r = 0), (i = 0.707106781))
                : ((r = Math.sqrt(s)), (n = v / r), (i = b / r))
              : _ < a
                ? ((n = 0.707106781), (r = 0.707106781), (i = 0))
                : ((i = Math.sqrt(_)), (n = y / i), (r = b / i)),
          this.set(n, r, i, t),
          this
        );
      }
      let _ = Math.sqrt(
        (h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l),
      );
      return (
        Math.abs(_) < 0.001 && (_ = 1),
        (this.x = (h - p) / _),
        (this.y = (u - m) / _),
        (this.z = (d - l) / _),
        (this.w = Math.acos((c + f + g - 1) / 2)),
        this
      );
    }
    setFromMatrixPosition(e) {
      let t = e.elements;
      return (
        (this.x = t[12]),
        (this.y = t[13]),
        (this.z = t[14]),
        (this.w = t[15]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        (this.w = Math.min(this.w, e.w)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        (this.w = Math.max(this.w, e.w)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = zt(this.x, e.x, t.x)),
        (this.y = zt(this.y, e.y, t.y)),
        (this.z = zt(this.z, e.z, t.z)),
        (this.w = zt(this.w, e.w, t.w)),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = zt(this.x, e, t)),
        (this.y = zt(this.y, e, t)),
        (this.z = zt(this.z, e, t)),
        (this.w = zt(this.w, e, t)),
        this
      );
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(zt(n, e, t));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        (this.w = Math.trunc(this.w)),
        this
      );
    }
    negate() {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    length() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
      );
    }
    manhattanLength() {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        (this.w += (e.w - this.w) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        (this.w = e.w + (t.w - e.w) * n),
        this
      );
    }
    equals(e) {
      return (
        e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
      );
    }
    fromArray(e, t = 0) {
      return (
        (this.x = e[t]),
        (this.y = e[t + 1]),
        (this.z = e[t + 2]),
        (this.w = e[t + 3]),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this.x),
        (e[t + 1] = this.y),
        (e[t + 2] = this.z),
        (e[t + 3] = this.w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        (this.w = e.getW(t)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y, yield this.z, yield this.w);
    }
  },
  On = class extends Nt {
    constructor(e = 1, t = 1, n = {}) {
      (super(),
        (n = Object.assign(
          {
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: D,
            depthBuffer: !0,
            stencilBuffer: !1,
            resolveColorBuffer: !0,
            resolveDepthBuffer: !0,
            resolveStencilBuffer: !0,
            storeMultisampledColorBuffer: !0,
            storeMultisampledDepthBuffer: !0,
            storeMultisampledStencilBuffer: !0,
            depthTexture: null,
            samples: 0,
            count: 1,
            depth: 1,
            multiview: !1,
            useArrayDepthTexture: !1,
          },
          n,
        )),
        (this.isRenderTarget = !0),
        (this.width = e),
        (this.height = t),
        (this.depth = n.depth),
        (this.scissor = new Dn(0, 0, e, t)),
        (this.scissorTest = !1),
        (this.viewport = new Dn(0, 0, e, t)),
        (this.textures = []));
      let r = new En({ width: e, height: t, depth: n.depth }),
        i = n.count;
      for (let e = 0; e < i; e++)
        ((this.textures[e] = r.clone()),
          (this.textures[e].isRenderTargetTexture = !0),
          (this.textures[e].renderTarget = this));
      (this._setTextureOptions(n),
        (this.depthBuffer = n.depthBuffer),
        (this.stencilBuffer = n.stencilBuffer),
        (this.resolveColorBuffer = n.resolveColorBuffer),
        (this.resolveDepthBuffer = n.resolveDepthBuffer),
        (this.resolveStencilBuffer = n.resolveStencilBuffer),
        (this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer),
        (this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer),
        (this.storeMultisampledStencilBuffer =
          n.storeMultisampledStencilBuffer),
        (this._depthTexture = null),
        (this.depthTexture = n.depthTexture),
        (this.samples = n.samples),
        (this.multiview = n.multiview),
        (this.useArrayDepthTexture = n.useArrayDepthTexture));
    }
    _setTextureOptions(e = {}) {
      let t = {
        minFilter: D,
        generateMipmaps: !1,
        flipY: !1,
        internalFormat: null,
      };
      (e.mapping !== void 0 && (t.mapping = e.mapping),
        e.wrapS !== void 0 && (t.wrapS = e.wrapS),
        e.wrapT !== void 0 && (t.wrapT = e.wrapT),
        e.wrapR !== void 0 && (t.wrapR = e.wrapR),
        e.magFilter !== void 0 && (t.magFilter = e.magFilter),
        e.minFilter !== void 0 && (t.minFilter = e.minFilter),
        e.format !== void 0 && (t.format = e.format),
        e.type !== void 0 && (t.type = e.type),
        e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
        e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
        e.flipY !== void 0 && (t.flipY = e.flipY),
        e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
        e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat));
      for (let e = 0; e < this.textures.length; e++)
        this.textures[e].setValues(t);
    }
    get texture() {
      return this.textures[0];
    }
    set texture(e) {
      this.textures[0] = e;
    }
    set depthTexture(e) {
      (this._depthTexture !== null &&
        this._depthTexture.renderTarget === this &&
        (this._depthTexture.renderTarget = null),
        e !== null && e.renderTarget === null && (e.renderTarget = this),
        (this._depthTexture = e));
    }
    get depthTexture() {
      return this._depthTexture;
    }
    setSize(e, t, n = 1) {
      if (this.width !== e || this.height !== t || this.depth !== n) {
        ((this.width = e), (this.height = t), (this.depth = n));
        for (let r = 0, i = this.textures.length; r < i; r++)
          ((this.textures[r].image.width = e),
            (this.textures[r].image.height = t),
            (this.textures[r].image.depth = n),
            this.textures[r].isData3DTexture !== !0 &&
              (this.textures[r].isArrayTexture =
                this.textures[r].image.depth > 1));
        this.dispose();
      }
      (this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t));
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      ((this.width = e.width),
        (this.height = e.height),
        (this.depth = e.depth),
        this.scissor.copy(e.scissor),
        (this.scissorTest = e.scissorTest),
        this.viewport.copy(e.viewport),
        (this.textures.length = 0));
      for (let t = 0, n = e.textures.length; t < n; t++) {
        ((this.textures[t] = e.textures[t].clone()),
          (this.textures[t].isRenderTargetTexture = !0),
          (this.textures[t].renderTarget = this));
        let n = Object.assign({}, e.textures[t].image);
        this.textures[t].source = new Sn(n);
      }
      if (
        ((this.depthBuffer = e.depthBuffer),
        (this.stencilBuffer = e.stencilBuffer),
        (this.resolveColorBuffer = e.resolveColorBuffer),
        (this.resolveDepthBuffer = e.resolveDepthBuffer),
        (this.resolveStencilBuffer = e.resolveStencilBuffer),
        (this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer),
        (this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer),
        (this.storeMultisampledStencilBuffer =
          e.storeMultisampledStencilBuffer),
        e.depthTexture !== null)
      ) {
        if (e.depthTexture.renderTarget === e) {
          let t = e.depthTexture.clone();
          ((t.renderTarget = null), (this.depthTexture = t));
        } else this.depthTexture = e.depthTexture;
      }
      return (
        (this.samples = e.samples),
        (this.multiview = e.multiview),
        (this.useArrayDepthTexture = e.useArrayDepthTexture),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  },
  kn = class extends On {
    constructor(e = 1, t = 1, n = {}) {
      (super(e, t, n), (this.isWebGLRenderTarget = !0));
    }
  },
  An = class extends En {
    constructor(e = null, t = 1, n = 1, r = 1) {
      (super(null),
        (this.isDataArrayTexture = !0),
        (this.image = { data: e, width: t, height: n, depth: r }),
        (this.magFilter = w),
        (this.minFilter = w),
        (this.wrapR = S),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1),
        (this.layerUpdates = new Set()));
    }
    copy(e) {
      return (super.copy(e), (this.wrapR = e.wrapR), this);
    }
    addLayerUpdate(e) {
      this.layerUpdates.add(e);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  },
  jn = class extends En {
    constructor(e = null, t = 1, n = 1, r = 1) {
      (super(null),
        (this.isData3DTexture = !0),
        (this.image = { data: e, width: t, height: n, depth: r }),
        (this.magFilter = w),
        (this.minFilter = w),
        (this.wrapR = S),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1));
    }
    copy(e) {
      return (super.copy(e), (this.wrapR = e.wrapR), this);
    }
  },
  N = class e {
    static {
      e.prototype.isMatrix4 = !0;
    }
    constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      ((this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        e !== void 0 &&
          this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h));
    }
    set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      let g = this.elements;
      return (
        (g[0] = e),
        (g[4] = t),
        (g[8] = n),
        (g[12] = r),
        (g[1] = i),
        (g[5] = a),
        (g[9] = o),
        (g[13] = s),
        (g[2] = c),
        (g[6] = l),
        (g[10] = u),
        (g[14] = d),
        (g[3] = f),
        (g[7] = p),
        (g[11] = m),
        (g[15] = h),
        this
      );
    }
    identity() {
      return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    clone() {
      return new e().fromArray(this.elements);
    }
    copy(e) {
      let t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        (t[9] = n[9]),
        (t[10] = n[10]),
        (t[11] = n[11]),
        (t[12] = n[12]),
        (t[13] = n[13]),
        (t[14] = n[14]),
        (t[15] = n[15]),
        this
      );
    }
    copyPosition(e) {
      let t = this.elements,
        n = e.elements;
      return ((t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this);
    }
    setFromMatrix3(e) {
      let t = e.elements;
      return (
        this.set(
          t[0],
          t[3],
          t[6],
          0,
          t[1],
          t[4],
          t[7],
          0,
          t[2],
          t[5],
          t[8],
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    extractBasis(e, t, n) {
      return this.determinantAffine() === 0
        ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this)
        : (e.setFromMatrixColumn(this, 0),
          t.setFromMatrixColumn(this, 1),
          n.setFromMatrixColumn(this, 2),
          this);
    }
    makeBasis(e, t, n) {
      return (
        this.set(
          e.x,
          t.x,
          n.x,
          0,
          e.y,
          t.y,
          n.y,
          0,
          e.z,
          t.z,
          n.z,
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    extractRotation(e) {
      if (e.determinantAffine() === 0) return this.identity();
      let t = this.elements,
        n = e.elements,
        r = 1 / Mn.setFromMatrixColumn(e, 0).length(),
        i = 1 / Mn.setFromMatrixColumn(e, 1).length(),
        a = 1 / Mn.setFromMatrixColumn(e, 2).length();
      return (
        (t[0] = n[0] * r),
        (t[1] = n[1] * r),
        (t[2] = n[2] * r),
        (t[3] = 0),
        (t[4] = n[4] * i),
        (t[5] = n[5] * i),
        (t[6] = n[6] * i),
        (t[7] = 0),
        (t[8] = n[8] * a),
        (t[9] = n[9] * a),
        (t[10] = n[10] * a),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromEuler(e) {
      let t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z,
        a = Math.cos(n),
        o = Math.sin(n),
        s = Math.cos(r),
        c = Math.sin(r),
        l = Math.cos(i),
        u = Math.sin(i);
      if (e.order === `XYZ`) {
        let e = a * l,
          n = a * u,
          r = o * l,
          i = o * u;
        ((t[0] = s * l),
          (t[4] = -s * u),
          (t[8] = c),
          (t[1] = n + r * c),
          (t[5] = e - i * c),
          (t[9] = -o * s),
          (t[2] = i - e * c),
          (t[6] = r + n * c),
          (t[10] = a * s));
      } else if (e.order === `YXZ`) {
        let e = s * l,
          n = s * u,
          r = c * l,
          i = c * u;
        ((t[0] = e + i * o),
          (t[4] = r * o - n),
          (t[8] = a * c),
          (t[1] = a * u),
          (t[5] = a * l),
          (t[9] = -o),
          (t[2] = n * o - r),
          (t[6] = i + e * o),
          (t[10] = a * s));
      } else if (e.order === `ZXY`) {
        let e = s * l,
          n = s * u,
          r = c * l,
          i = c * u;
        ((t[0] = e - i * o),
          (t[4] = -a * u),
          (t[8] = r + n * o),
          (t[1] = n + r * o),
          (t[5] = a * l),
          (t[9] = i - e * o),
          (t[2] = -a * c),
          (t[6] = o),
          (t[10] = a * s));
      } else if (e.order === `ZYX`) {
        let e = a * l,
          n = a * u,
          r = o * l,
          i = o * u;
        ((t[0] = s * l),
          (t[4] = r * c - n),
          (t[8] = e * c + i),
          (t[1] = s * u),
          (t[5] = i * c + e),
          (t[9] = n * c - r),
          (t[2] = -c),
          (t[6] = o * s),
          (t[10] = a * s));
      } else if (e.order === `YZX`) {
        let e = a * s,
          n = a * c,
          r = o * s,
          i = o * c;
        ((t[0] = s * l),
          (t[4] = i - e * u),
          (t[8] = r * u + n),
          (t[1] = u),
          (t[5] = a * l),
          (t[9] = -o * l),
          (t[2] = -c * l),
          (t[6] = n * u + r),
          (t[10] = e - i * u));
      } else if (e.order === `XZY`) {
        let e = a * s,
          n = a * c,
          r = o * s,
          i = o * c;
        ((t[0] = s * l),
          (t[4] = -u),
          (t[8] = c * l),
          (t[1] = e * u + i),
          (t[5] = a * l),
          (t[9] = n * u - r),
          (t[2] = r * u - n),
          (t[6] = o * l),
          (t[10] = i * u + e));
      }
      return (
        (t[3] = 0),
        (t[7] = 0),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(e) {
      return this.compose(Pn, e, Fn);
    }
    lookAt(e, t, n) {
      let r = this.elements;
      return (
        Rn.subVectors(e, t),
        Rn.lengthSq() === 0 && (Rn.z = 1),
        Rn.normalize(),
        In.crossVectors(n, Rn),
        In.lengthSq() === 0 &&
          (Math.abs(n.z) === 1 ? (Rn.x += 1e-4) : (Rn.z += 1e-4),
          Rn.normalize(),
          In.crossVectors(n, Rn)),
        In.normalize(),
        Ln.crossVectors(Rn, In),
        (r[0] = In.x),
        (r[4] = Ln.x),
        (r[8] = Rn.x),
        (r[1] = In.y),
        (r[5] = Ln.y),
        (r[9] = Rn.y),
        (r[2] = In.z),
        (r[6] = Ln.z),
        (r[10] = Rn.z),
        this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      let n = e.elements,
        r = t.elements,
        i = this.elements,
        a = n[0],
        o = n[4],
        s = n[8],
        c = n[12],
        l = n[1],
        u = n[5],
        d = n[9],
        f = n[13],
        p = n[2],
        m = n[6],
        h = n[10],
        g = n[14],
        _ = n[3],
        v = n[7],
        y = n[11],
        b = n[15],
        x = r[0],
        S = r[4],
        C = r[8],
        w = r[12],
        T = r[1],
        E = r[5],
        D = r[9],
        O = r[13],
        k = r[2],
        A = r[6],
        ee = r[10],
        te = r[14],
        ne = r[3],
        re = r[7],
        ie = r[11],
        ae = r[15];
      return (
        (i[0] = a * x + o * T + s * k + c * ne),
        (i[4] = a * S + o * E + s * A + c * re),
        (i[8] = a * C + o * D + s * ee + c * ie),
        (i[12] = a * w + o * O + s * te + c * ae),
        (i[1] = l * x + u * T + d * k + f * ne),
        (i[5] = l * S + u * E + d * A + f * re),
        (i[9] = l * C + u * D + d * ee + f * ie),
        (i[13] = l * w + u * O + d * te + f * ae),
        (i[2] = p * x + m * T + h * k + g * ne),
        (i[6] = p * S + m * E + h * A + g * re),
        (i[10] = p * C + m * D + h * ee + g * ie),
        (i[14] = p * w + m * O + h * te + g * ae),
        (i[3] = _ * x + v * T + y * k + b * ne),
        (i[7] = _ * S + v * E + y * A + b * re),
        (i[11] = _ * C + v * D + y * ee + b * ie),
        (i[15] = _ * w + v * O + y * te + b * ae),
        this
      );
    }
    multiplyScalar(e) {
      let t = this.elements;
      return (
        (t[0] *= e),
        (t[4] *= e),
        (t[8] *= e),
        (t[12] *= e),
        (t[1] *= e),
        (t[5] *= e),
        (t[9] *= e),
        (t[13] *= e),
        (t[2] *= e),
        (t[6] *= e),
        (t[10] *= e),
        (t[14] *= e),
        (t[3] *= e),
        (t[7] *= e),
        (t[11] *= e),
        (t[15] *= e),
        this
      );
    }
    determinant() {
      let e = this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        i = e[12],
        a = e[1],
        o = e[5],
        s = e[9],
        c = e[13],
        l = e[2],
        u = e[6],
        d = e[10],
        f = e[14],
        p = e[3],
        m = e[7],
        h = e[11],
        g = e[15],
        _ = s * f - c * d,
        v = o * f - c * u,
        y = o * d - s * u,
        b = a * f - c * l,
        x = a * d - s * l,
        S = a * u - o * l;
      return (
        t * (m * _ - h * v + g * y) -
        n * (p * _ - h * b + g * x) +
        r * (p * v - m * b + g * S) -
        i * (p * y - m * x + h * S)
      );
    }
    determinantAffine() {
      let e = this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        i = e[1],
        a = e[5],
        o = e[9],
        s = e[2],
        c = e[6],
        l = e[10];
      return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
    }
    transpose() {
      let e = this.elements,
        t;
      return (
        (t = e[1]),
        (e[1] = e[4]),
        (e[4] = t),
        (t = e[2]),
        (e[2] = e[8]),
        (e[8] = t),
        (t = e[6]),
        (e[6] = e[9]),
        (e[9] = t),
        (t = e[3]),
        (e[3] = e[12]),
        (e[12] = t),
        (t = e[7]),
        (e[7] = e[13]),
        (e[13] = t),
        (t = e[11]),
        (e[11] = e[14]),
        (e[14] = t),
        this
      );
    }
    setPosition(e, t, n) {
      let r = this.elements;
      return (
        e.isVector3
          ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
          : ((r[12] = e), (r[13] = t), (r[14] = n)),
        this
      );
    }
    invert() {
      let e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8],
        u = e[9],
        d = e[10],
        f = e[11],
        p = e[12],
        m = e[13],
        h = e[14],
        g = e[15],
        _ = t * o - n * a,
        v = t * s - r * a,
        y = t * c - i * a,
        b = n * s - r * o,
        x = n * c - i * o,
        S = r * c - i * s,
        C = l * m - u * p,
        w = l * h - d * p,
        T = l * g - f * p,
        E = u * h - d * m,
        D = u * g - f * m,
        O = d * g - f * h,
        k = _ * O - v * D + y * E + b * T - x * w + S * C;
      if (k === 0)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      let A = 1 / k;
      return (
        (e[0] = (o * O - s * D + c * E) * A),
        (e[1] = (r * D - n * O - i * E) * A),
        (e[2] = (m * S - h * x + g * b) * A),
        (e[3] = (d * x - u * S - f * b) * A),
        (e[4] = (s * T - a * O - c * w) * A),
        (e[5] = (t * O - r * T + i * w) * A),
        (e[6] = (h * y - p * S - g * v) * A),
        (e[7] = (l * S - d * y + f * v) * A),
        (e[8] = (a * D - o * T + c * C) * A),
        (e[9] = (n * T - t * D - i * C) * A),
        (e[10] = (p * x - m * y + g * _) * A),
        (e[11] = (u * y - l * x - f * _) * A),
        (e[12] = (o * w - a * E - s * C) * A),
        (e[13] = (t * E - n * w + r * C) * A),
        (e[14] = (m * v - p * b - h * _) * A),
        (e[15] = (l * b - u * v + d * _) * A),
        this
      );
    }
    scale(e) {
      let t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z;
      return (
        (t[0] *= n),
        (t[4] *= r),
        (t[8] *= i),
        (t[1] *= n),
        (t[5] *= r),
        (t[9] *= i),
        (t[2] *= n),
        (t[6] *= r),
        (t[10] *= i),
        (t[3] *= n),
        (t[7] *= r),
        (t[11] *= i),
        this
      );
    }
    getMaxScaleOnAxis() {
      let e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, r));
    }
    makeTranslation(e, t, n) {
      return (
        e.isVector3
          ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
          : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
      );
    }
    makeRotationX(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this);
    }
    makeRotationY(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this);
    }
    makeRotationZ(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    makeRotationAxis(e, t) {
      let n = Math.cos(t),
        r = Math.sin(t),
        i = 1 - n,
        a = e.x,
        o = e.y,
        s = e.z,
        c = i * a,
        l = i * o;
      return (
        this.set(
          c * a + n,
          c * o - r * s,
          c * s + r * o,
          0,
          c * o + r * s,
          l * o + n,
          l * s - r * a,
          0,
          c * s - r * o,
          l * s + r * a,
          i * s * s + n,
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    makeScale(e, t, n) {
      return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
    }
    makeShear(e, t, n, r, i, a) {
      return (this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this);
    }
    compose(e, t, n) {
      let r = this.elements,
        i = t._x,
        a = t._y,
        o = t._z,
        s = t._w,
        c = i + i,
        l = a + a,
        u = o + o,
        d = i * c,
        f = i * l,
        p = i * u,
        m = a * l,
        h = a * u,
        g = o * u,
        _ = s * c,
        v = s * l,
        y = s * u,
        b = n.x,
        x = n.y,
        S = n.z;
      return (
        (r[0] = (1 - (m + g)) * b),
        (r[1] = (f + y) * b),
        (r[2] = (p - v) * b),
        (r[3] = 0),
        (r[4] = (f - y) * x),
        (r[5] = (1 - (d + g)) * x),
        (r[6] = (h + _) * x),
        (r[7] = 0),
        (r[8] = (p + v) * S),
        (r[9] = (h - _) * S),
        (r[10] = (1 - (d + m)) * S),
        (r[11] = 0),
        (r[12] = e.x),
        (r[13] = e.y),
        (r[14] = e.z),
        (r[15] = 1),
        this
      );
    }
    decompose(e, t, n) {
      let r = this.elements;
      ((e.x = r[12]), (e.y = r[13]), (e.z = r[14]));
      let i = this.determinantAffine();
      if (i === 0) return (n.set(1, 1, 1), t.identity(), this);
      let a = Mn.set(r[0], r[1], r[2]).length(),
        o = Mn.set(r[4], r[5], r[6]).length(),
        s = Mn.set(r[8], r[9], r[10]).length();
      (i < 0 && (a = -a), Nn.copy(this));
      let c = 1 / a,
        l = 1 / o,
        u = 1 / s;
      return (
        (Nn.elements[0] *= c),
        (Nn.elements[1] *= c),
        (Nn.elements[2] *= c),
        (Nn.elements[4] *= l),
        (Nn.elements[5] *= l),
        (Nn.elements[6] *= l),
        (Nn.elements[8] *= u),
        (Nn.elements[9] *= u),
        (Nn.elements[10] *= u),
        t.setFromRotationMatrix(Nn),
        (n.x = a),
        (n.y = o),
        (n.z = s),
        this
      );
    }
    makePerspective(e, t, n, r, i, a, o = bt, s = !1) {
      let c = this.elements,
        l = (2 * i) / (t - e),
        u = (2 * i) / (n - r),
        d = (t + e) / (t - e),
        f = (n + r) / (n - r),
        p,
        m;
      if (s) ((p = i / (a - i)), (m = (a * i) / (a - i)));
      else if (o === 2e3)
        ((p = -(a + i) / (a - i)), (m = (-2 * a * i) / (a - i)));
      else if (o === 2001) ((p = -a / (a - i)), (m = (-a * i) / (a - i)));
      else
        throw Error(
          `THREE.Matrix4.makePerspective(): Invalid coordinate system: ` + o,
        );
      return (
        (c[0] = l),
        (c[4] = 0),
        (c[8] = d),
        (c[12] = 0),
        (c[1] = 0),
        (c[5] = u),
        (c[9] = f),
        (c[13] = 0),
        (c[2] = 0),
        (c[6] = 0),
        (c[10] = p),
        (c[14] = m),
        (c[3] = 0),
        (c[7] = 0),
        (c[11] = -1),
        (c[15] = 0),
        this
      );
    }
    makeOrthographic(e, t, n, r, i, a, o = bt, s = !1) {
      let c = this.elements,
        l = 2 / (t - e),
        u = 2 / (n - r),
        d = -(t + e) / (t - e),
        f = -(n + r) / (n - r),
        p,
        m;
      if (s) ((p = 1 / (a - i)), (m = a / (a - i)));
      else if (o === 2e3) ((p = -2 / (a - i)), (m = -(a + i) / (a - i)));
      else if (o === 2001) ((p = -1 / (a - i)), (m = -i / (a - i)));
      else
        throw Error(
          `THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ` + o,
        );
      return (
        (c[0] = l),
        (c[4] = 0),
        (c[8] = 0),
        (c[12] = d),
        (c[1] = 0),
        (c[5] = u),
        (c[9] = 0),
        (c[13] = f),
        (c[2] = 0),
        (c[6] = 0),
        (c[10] = p),
        (c[14] = m),
        (c[3] = 0),
        (c[7] = 0),
        (c[11] = 0),
        (c[15] = 1),
        this
      );
    }
    equals(e) {
      let t = this.elements,
        n = e.elements;
      for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      let n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        (e[t + 9] = n[9]),
        (e[t + 10] = n[10]),
        (e[t + 11] = n[11]),
        (e[t + 12] = n[12]),
        (e[t + 13] = n[13]),
        (e[t + 14] = n[14]),
        (e[t + 15] = n[15]),
        e
      );
    }
  },
  Mn = new M(),
  Nn = new N(),
  Pn = new M(0, 0, 0),
  Fn = new M(1, 1, 1),
  In = new M(),
  Ln = new M(),
  Rn = new M(),
  zn = new N(),
  Bn = new cn(),
  Vn = class e {
    constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
      ((this.isEuler = !0),
        (this._x = t),
        (this._y = n),
        (this._z = r),
        (this._order = i));
    }
    get x() {
      return this._x;
    }
    set x(e) {
      ((this._x = e), this._onChangeCallback());
    }
    get y() {
      return this._y;
    }
    set y(e) {
      ((this._y = e), this._onChangeCallback());
    }
    get z() {
      return this._z;
    }
    set z(e) {
      ((this._z = e), this._onChangeCallback());
    }
    get order() {
      return this._order;
    }
    set order(e) {
      ((this._order = e), this._onChangeCallback());
    }
    set(e, t, n, r = this._order) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._order = r),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
      return (
        (this._x = e._x),
        (this._y = e._y),
        (this._z = e._z),
        (this._order = e._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
      let r = e.elements,
        i = r[0],
        a = r[4],
        o = r[8],
        s = r[1],
        c = r[5],
        l = r[9],
        u = r[2],
        d = r[6],
        f = r[10];
      switch (t) {
        case `XYZ`:
          ((this._y = Math.asin(zt(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-l, f)), (this._z = Math.atan2(-a, i)))
              : ((this._x = Math.atan2(d, c)), (this._z = 0)));
          break;
        case `YXZ`:
          ((this._x = Math.asin(-zt(l, -1, 1))),
            Math.abs(l) < 0.9999999
              ? ((this._y = Math.atan2(o, f)), (this._z = Math.atan2(s, c)))
              : ((this._y = Math.atan2(-u, i)), (this._z = 0)));
          break;
        case `ZXY`:
          ((this._x = Math.asin(zt(d, -1, 1))),
            Math.abs(d) < 0.9999999
              ? ((this._y = Math.atan2(-u, f)), (this._z = Math.atan2(-a, c)))
              : ((this._y = 0), (this._z = Math.atan2(s, i))));
          break;
        case `ZYX`:
          ((this._y = Math.asin(-zt(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._x = Math.atan2(d, f)), (this._z = Math.atan2(s, i)))
              : ((this._x = 0), (this._z = Math.atan2(-a, c))));
          break;
        case `YZX`:
          ((this._z = Math.asin(zt(s, -1, 1))),
            Math.abs(s) < 0.9999999
              ? ((this._x = Math.atan2(-l, c)), (this._y = Math.atan2(-u, i)))
              : ((this._x = 0), (this._y = Math.atan2(o, f))));
          break;
        case `XZY`:
          ((this._z = Math.asin(-zt(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, i)))
              : ((this._x = Math.atan2(-l, f)), (this._y = 0)));
          break;
        default:
          Ot(
            `Euler: .setFromRotationMatrix() encountered an unknown order: ` +
              t,
          );
      }
      return ((this._order = t), n === !0 && this._onChangeCallback(), this);
    }
    setFromQuaternion(e, t, n) {
      return (
        zn.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(zn, t, n)
      );
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return (Bn.setFromEuler(this), this.setFromQuaternion(Bn, e));
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._order === this._order
      );
    }
    fromArray(e) {
      return (
        (this._x = e[0]),
        (this._y = e[1]),
        (this._z = e[2]),
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._order),
        e
      );
    }
    _onChange(e) {
      return ((this._onChangeCallback = e), this);
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      (yield this._x, yield this._y, yield this._z, yield this._order);
    }
  };
Vn.DEFAULT_ORDER = `XYZ`;
var Hn = class {
    constructor() {
      this.mask = 1;
    }
    set(e) {
      this.mask = ((1 << e) | 0) >>> 0;
    }
    enable(e) {
      this.mask |= (1 << e) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e) {
      this.mask ^= (1 << e) | 0;
    }
    disable(e) {
      this.mask &= ~((1 << e) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e) {
      return (this.mask & e.mask) !== 0;
    }
    isEnabled(e) {
      return !!(this.mask & ((1 << e) | 0));
    }
  },
  Un = 0,
  Wn = new M(),
  Gn = new cn(),
  Kn = new N(),
  qn = new M(),
  Jn = new M(),
  Yn = new M(),
  Xn = new cn(),
  Zn = new M(1, 0, 0),
  Qn = new M(0, 1, 0),
  $n = new M(0, 0, 1),
  er = { type: `added` },
  tr = { type: `removed` },
  nr = { type: `childadded`, child: null },
  rr = { type: `childremoved`, child: null },
  ir = class e extends Nt {
    constructor() {
      (super(),
        (this.isObject3D = !0),
        Object.defineProperty(this, "id", { value: Un++ }),
        (this.uuid = Rt()),
        (this.name = ``),
        (this.type = `Object3D`),
        (this.parent = null),
        (this.children = []),
        (this.up = e.DEFAULT_UP.clone()));
      let t = new M(),
        n = new Vn(),
        r = new cn(),
        i = new M(1, 1, 1);
      function a() {
        r.setFromEuler(n, !1);
      }
      function o() {
        n.setFromQuaternion(r, void 0, !1);
      }
      (n._onChange(a),
        r._onChange(o),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: t },
          rotation: { configurable: !0, enumerable: !0, value: n },
          quaternion: { configurable: !0, enumerable: !0, value: r },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new N() },
          normalMatrix: { value: new dn() },
        }),
        (this.matrix = new N()),
        (this.matrixWorld = new N()),
        (this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE),
        (this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new Hn()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.customDepthMaterial = void 0),
        (this.customDistanceMaterial = void 0),
        (this.static = !1),
        (this.userData = {}),
        (this.pivot = null));
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale));
    }
    applyQuaternion(e) {
      return (this.quaternion.premultiply(e), this);
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, !0);
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
      return (Gn.setFromAxisAngle(e, t), this.quaternion.multiply(Gn), this);
    }
    rotateOnWorldAxis(e, t) {
      return (Gn.setFromAxisAngle(e, t), this.quaternion.premultiply(Gn), this);
    }
    rotateX(e) {
      return this.rotateOnAxis(Zn, e);
    }
    rotateY(e) {
      return this.rotateOnAxis(Qn, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis($n, e);
    }
    translateOnAxis(e, t) {
      return (
        Wn.copy(e).applyQuaternion(this.quaternion),
        this.position.add(Wn.multiplyScalar(t)),
        this
      );
    }
    translateX(e) {
      return this.translateOnAxis(Zn, e);
    }
    translateY(e) {
      return this.translateOnAxis(Qn, e);
    }
    translateZ(e) {
      return this.translateOnAxis($n, e);
    }
    localToWorld(e) {
      return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld));
    }
    worldToLocal(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(Kn.copy(this.matrixWorld).invert())
      );
    }
    lookAt(e, t, n) {
      e.isVector3 ? qn.copy(e) : qn.set(e, t, n);
      let r = this.parent;
      (this.updateWorldMatrix(!0, !1),
        Jn.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? Kn.lookAt(Jn, qn, this.up)
          : Kn.lookAt(qn, Jn, this.up),
        this.quaternion.setFromRotationMatrix(Kn),
        r &&
          (Kn.extractRotation(r.matrixWorld),
          Gn.setFromRotationMatrix(Kn),
          this.quaternion.premultiply(Gn.invert())));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this;
      }
      return e === this
        ? (kt(`Object3D.add: object can't be added as a child of itself.`, e),
          this)
        : (e && e.isObject3D
            ? (e.removeFromParent(),
              (e.parent = this),
              this.children.push(e),
              e.dispatchEvent(er),
              (nr.child = e),
              this.dispatchEvent(nr),
              (nr.child = null))
            : kt(`Object3D.add: object not an instance of THREE.Object3D.`, e),
          this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        return this;
      }
      let t = this.children.indexOf(e);
      return (
        t !== -1 &&
          ((e.parent = null),
          this.children.splice(t, 1),
          e.dispatchEvent(tr),
          (rr.child = e),
          this.dispatchEvent(rr),
          (rr.child = null)),
        this
      );
    }
    removeFromParent() {
      let e = this.parent;
      return (e !== null && e.remove(this), this);
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        Kn.copy(this.matrixWorld).invert(),
        e.parent !== null &&
          (e.parent.updateWorldMatrix(!0, !1),
          Kn.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(Kn),
        e.removeFromParent(),
        (e.parent = this),
        this.children.push(e),
        e.updateWorldMatrix(!1, !0),
        e.dispatchEvent(er),
        (nr.child = e),
        this.dispatchEvent(nr),
        (nr.child = null),
        this
      );
    }
    getObjectById(e) {
      return this.getObjectByProperty(`id`, e);
    }
    getObjectByName(e) {
      return this.getObjectByProperty(`name`, e);
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, r = this.children.length; n < r; n++) {
        let r = this.children[n].getObjectByProperty(e, t);
        if (r !== void 0) return r;
      }
    }
    getObjectsByProperty(e, t, n = []) {
      this[e] === t && n.push(this);
      let r = this.children;
      for (let i = 0, a = r.length; i < a; i++)
        r[i].getObjectsByProperty(e, t, n);
      return n;
    }
    getWorldPosition(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Jn, e, Yn),
        e
      );
    }
    getWorldScale(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Jn, Xn, e),
        e
      );
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      let t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {}
    intersectsFrustum() {}
    traverse(e) {
      e(this);
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
    }
    traverseVisible(e) {
      if (this.visible === !1) return;
      e(this);
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
      let t = this.parent;
      t !== null && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      let e = this.pivot;
      if (e !== null) {
        let t = e.x,
          n = e.y,
          r = e.z,
          i = this.matrix.elements;
        ((i[12] += t - i[0] * t - i[4] * n - i[8] * r),
          (i[13] += n - i[1] * t - i[5] * n - i[9] * r),
          (i[14] += r - i[2] * t - i[6] * n - i[10] * r));
      }
      this.matrixWorldNeedsUpdate = !0;
    }
    updateMatrixWorld(e) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) &&
          (this.matrixWorldAutoUpdate === !0 &&
            (this.parent === null
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix,
                )),
          (this.matrixWorldNeedsUpdate = !1),
          (e = !0)));
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
    }
    updateWorldMatrix(e, t, n = !1) {
      let r = this.parent;
      if (
        (e === !0 && r !== null && r.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || n) &&
          (this.matrixWorldAutoUpdate === !0 &&
            (this.parent === null
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix,
                )),
          (this.matrixWorldNeedsUpdate = !1),
          (n = !0)),
        t === !0)
      ) {
        let e = this.children;
        for (let t = 0, r = e.length; t < r; t++)
          e[t].updateWorldMatrix(!1, !0, n);
      }
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`,
        n = {};
      t &&
        ((e = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {},
        }),
        (n.metadata = {
          version: 4.7,
          type: `Object`,
          generator: `Object3D.toJSON`,
        }));
      let r = {};
      ((r.uuid = this.uuid),
        (r.type = this.type),
        (r.name = this.name),
        (r.castShadow = this.castShadow),
        (r.receiveShadow = this.receiveShadow),
        (r.visible = this.visible),
        (r.frustumCulled = this.frustumCulled),
        (r.renderOrder = this.renderOrder),
        (r.static = this.static),
        (r.matrixAutoUpdate = this.matrixAutoUpdate),
        Object.keys(this.userData).length > 0 && (r.userData = this.userData),
        (r.layers = this.layers.mask),
        (r.matrix = this.matrix.toArray()),
        (r.up = this.up.toArray()),
        this.pivot !== null && (r.pivot = this.pivot.toArray()),
        this.morphTargetDictionary !== void 0 &&
          (r.morphTargetDictionary = Object.assign(
            {},
            this.morphTargetDictionary,
          )),
        this.morphTargetInfluences !== void 0 &&
          (r.morphTargetInfluences = this.morphTargetInfluences.slice()),
        this.isInstancedMesh &&
          ((r.type = `InstancedMesh`),
          (r.count = this.count),
          (r.instanceMatrix = this.instanceMatrix.toJSON()),
          this.instanceColor !== null &&
            (r.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh &&
          ((r.type = `BatchedMesh`),
          (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
          (r.sortObjects = this.sortObjects),
          (r.drawRanges = this._drawRanges),
          (r.reservedRanges = this._reservedRanges),
          (r.geometryInfo = this._geometryInfo.map((e) => ({
            ...e,
            boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
            boundingSphere: e.boundingSphere
              ? e.boundingSphere.toJSON()
              : void 0,
          }))),
          (r.instanceInfo = this._instanceInfo.map((e) => ({ ...e }))),
          (r.availableInstanceIds = this._availableInstanceIds.slice()),
          (r.availableGeometryIds = this._availableGeometryIds.slice()),
          (r.nextIndexStart = this._nextIndexStart),
          (r.nextVertexStart = this._nextVertexStart),
          (r.geometryCount = this._geometryCount),
          (r.maxInstanceCount = this._maxInstanceCount),
          (r.maxVertexCount = this._maxVertexCount),
          (r.maxIndexCount = this._maxIndexCount),
          (r.geometryInitialized = this._geometryInitialized),
          (r.matricesTexture = this._matricesTexture.toJSON(e)),
          (r.indirectTexture = this._indirectTexture.toJSON(e)),
          this._colorsTexture !== null &&
            (r.colorsTexture = this._colorsTexture.toJSON(e)),
          this.boundingSphere !== null &&
            (r.boundingSphere = this.boundingSphere.toJSON()),
          this.boundingBox !== null &&
            (r.boundingBox = this.boundingBox.toJSON())));
      function i(t, n) {
        return (t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid);
      }
      if (this.isScene)
        (this.background &&
          (this.background.isColor
            ? (r.background = this.background.toJSON())
            : this.background.isTexture &&
              (r.background = this.background.toJSON(e).uuid)),
          this.environment &&
            this.environment.isTexture &&
            this.environment.isRenderTargetTexture !== !0 &&
            (r.environment = this.environment.toJSON(e).uuid));
      else if (this.isMesh || this.isLine || this.isPoints) {
        r.geometry = i(e.geometries, this.geometry);
        let t = this.geometry.parameters;
        if (t !== void 0 && t.shapes !== void 0) {
          let n = t.shapes;
          if (Array.isArray(n))
            for (let t = 0, r = n.length; t < r; t++) {
              let r = n[t];
              i(e.shapes, r);
            }
          else i(e.shapes, n);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((r.bindMode = this.bindMode),
          (r.bindMatrix = this.bindMatrix.toArray()),
          this.skeleton !== void 0 &&
            (i(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
        this.material !== void 0)
      ) {
        if (Array.isArray(this.material)) {
          let t = [];
          for (let n = 0, r = this.material.length; n < r; n++)
            t.push(i(e.materials, this.material[n]));
          r.material = t;
        } else r.material = i(e.materials, this.material);
      }
      if (this.children.length > 0) {
        r.children = [];
        for (let t = 0; t < this.children.length; t++)
          r.children.push(this.children[t].toJSON(e).object);
      }
      if (this.animations.length > 0) {
        r.animations = [];
        for (let t = 0; t < this.animations.length; t++) {
          let n = this.animations[t];
          r.animations.push(i(e.animations, n));
        }
      }
      if (t) {
        let t = a(e.geometries),
          r = a(e.materials),
          i = a(e.textures),
          o = a(e.images),
          s = a(e.shapes),
          c = a(e.skeletons),
          l = a(e.animations),
          u = a(e.nodes);
        (t.length > 0 && (n.geometries = t),
          r.length > 0 && (n.materials = r),
          i.length > 0 && (n.textures = i),
          o.length > 0 && (n.images = o),
          s.length > 0 && (n.shapes = s),
          c.length > 0 && (n.skeletons = c),
          l.length > 0 && (n.animations = l),
          u.length > 0 && (n.nodes = u));
      }
      return ((n.object = r), n);
      function a(e) {
        let t = [];
        for (let n in e) {
          let r = e[n];
          (delete r.metadata, t.push(r));
        }
        return t;
      }
    }
    clone(e) {
      return new this.constructor().copy(this, e);
    }
    copy(e, t = !0) {
      if (
        ((this.name = e.name),
        this.up.copy(e.up),
        this.position.copy(e.position),
        (this.rotation.order = e.rotation.order),
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        (this.pivot = e.pivot === null ? null : e.pivot.clone()),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
        (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
        (this.layers.mask = e.layers.mask),
        (this.visible = e.visible),
        (this.castShadow = e.castShadow),
        (this.receiveShadow = e.receiveShadow),
        (this.frustumCulled = e.frustumCulled),
        (this.renderOrder = e.renderOrder),
        (this.static = e.static),
        (this.animations = e.animations.slice()),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        t === !0)
      )
        for (let t = 0; t < e.children.length; t++) {
          let n = e.children[t];
          this.add(n.clone());
        }
      return this;
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  };
((ir.DEFAULT_UP = new M(0, 1, 0)),
  (ir.DEFAULT_MATRIX_AUTO_UPDATE = !0),
  (ir.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0));
var ar = class extends ir {
    constructor() {
      (super(), (this.isGroup = !0), (this.type = `Group`));
    }
  },
  or = { type: `move` },
  sr = class {
    constructor() {
      ((this._targetRay = null), (this._grip = null), (this._hand = null));
    }
    getHandSpace() {
      return (
        this._hand === null &&
          ((this._hand = new ar()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        this._targetRay === null &&
          ((this._targetRay = new ar()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new M()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new M())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        this._grip === null &&
          ((this._grip = new ar()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new M()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new M()),
          (this._grip.eventsEnabled = !1)),
        this._grip
      );
    }
    dispatchEvent(e) {
      return (
        this._targetRay !== null && this._targetRay.dispatchEvent(e),
        this._grip !== null && this._grip.dispatchEvent(e),
        this._hand !== null && this._hand.dispatchEvent(e),
        this
      );
    }
    connect(e) {
      if (e && e.hand) {
        let t = this._hand;
        if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
      }
      return (this.dispatchEvent({ type: `connected`, data: e }), this);
    }
    disconnect(e) {
      return (
        this.dispatchEvent({ type: `disconnected`, data: e }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
      );
    }
    update(e, t, n) {
      let r = null,
        i = null,
        a = null,
        o = this._targetRay,
        s = this._grip,
        c = this._hand;
      if (e && t.session.visibilityState !== `visible-blurred`) {
        if (c && e.hand) {
          a = !0;
          for (let r of e.hand.values()) {
            let e = t.getJointPose(r, n),
              i = this._getHandJoint(c, r);
            (e !== null &&
              (i.matrix.fromArray(e.transform.matrix),
              i.matrix.decompose(i.position, i.rotation, i.scale),
              (i.matrixWorldNeedsUpdate = !0),
              (i.jointRadius = e.radius)),
              (i.visible = e !== null));
          }
          let r = c.joints[`index-finger-tip`],
            i = c.joints[`thumb-tip`],
            o = r.position.distanceTo(i.position);
          c.inputState.pinching && o > 0.025
            ? ((c.inputState.pinching = !1),
              this.dispatchEvent({
                type: `pinchend`,
                handedness: e.handedness,
                target: this,
              }))
            : !c.inputState.pinching &&
              o <= 0.015 &&
              ((c.inputState.pinching = !0),
              this.dispatchEvent({
                type: `pinchstart`,
                handedness: e.handedness,
                target: this,
              }));
        } else
          s !== null &&
            e.gripSpace &&
            ((i = t.getPose(e.gripSpace, n)),
            i !== null &&
              (s.matrix.fromArray(i.transform.matrix),
              s.matrix.decompose(s.position, s.rotation, s.scale),
              (s.matrixWorldNeedsUpdate = !0),
              i.linearVelocity
                ? ((s.hasLinearVelocity = !0),
                  s.linearVelocity.copy(i.linearVelocity))
                : (s.hasLinearVelocity = !1),
              i.angularVelocity
                ? ((s.hasAngularVelocity = !0),
                  s.angularVelocity.copy(i.angularVelocity))
                : (s.hasAngularVelocity = !1),
              s.eventsEnabled &&
                s.dispatchEvent({
                  type: `gripUpdated`,
                  data: e,
                  target: this,
                })));
        o !== null &&
          ((r = t.getPose(e.targetRaySpace, n)),
          r === null && i !== null && (r = i),
          r !== null &&
            (o.matrix.fromArray(r.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            (o.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((o.hasLinearVelocity = !0),
                o.linearVelocity.copy(r.linearVelocity))
              : (o.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((o.hasAngularVelocity = !0),
                o.angularVelocity.copy(r.angularVelocity))
              : (o.hasAngularVelocity = !1),
            this.dispatchEvent(or)));
      }
      return (
        o !== null && (o.visible = r !== null),
        s !== null && (s.visible = i !== null),
        c !== null && (c.visible = a !== null),
        this
      );
    }
    _getHandJoint(e, t) {
      if (e.joints[t.jointName] === void 0) {
        let n = new ar();
        ((n.matrixAutoUpdate = !1),
          (n.visible = !1),
          (e.joints[t.jointName] = n),
          e.add(n));
      }
      return e.joints[t.jointName];
    }
  },
  cr = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  lr = { h: 0, s: 0, l: 0 },
  ur = { h: 0, s: 0, l: 0 };
function dr(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * 6 * (2 / 3 - n)
          : e
  );
}
var P = class {
    constructor(e, t, n) {
      return (
        (this.isColor = !0),
        (this.r = 1),
        (this.g = 1),
        (this.b = 1),
        this.set(e, t, n)
      );
    }
    set(e, t, n) {
      if (t === void 0 && n === void 0) {
        let t = e;
        t && t.isColor
          ? this.copy(t)
          : typeof t == `number`
            ? this.setHex(t)
            : typeof t == `string` && this.setStyle(t);
      } else this.setRGB(e, t, n);
      return this;
    }
    setScalar(e) {
      return ((this.r = e), (this.g = e), (this.b = e), this);
    }
    setHex(e, t = ft) {
      return (
        (e = Math.floor(e)),
        (this.r = ((e >> 16) & 255) / 255),
        (this.g = ((e >> 8) & 255) / 255),
        (this.b = (e & 255) / 255),
        gn.colorSpaceToWorking(this, t),
        this
      );
    }
    setRGB(e, t, n, r = gn.workingColorSpace) {
      return (
        (this.r = e),
        (this.g = t),
        (this.b = n),
        gn.colorSpaceToWorking(this, r),
        this
      );
    }
    setHSL(e, t, n, r = gn.workingColorSpace) {
      if (((e = Bt(e, 1)), (t = zt(t, 0, 1)), (n = zt(n, 0, 1)), t === 0))
        this.r = this.g = this.b = n;
      else {
        let r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
          i = 2 * n - r;
        ((this.r = dr(i, r, e + 1 / 3)),
          (this.g = dr(i, r, e)),
          (this.b = dr(i, r, e - 1 / 3)));
      }
      return (gn.colorSpaceToWorking(this, r), this);
    }
    setStyle(e, t = ft) {
      function n(t) {
        t !== void 0 &&
          parseFloat(t) < 1 &&
          Ot(`Color: Alpha component of ` + e + ` will be ignored.`);
      }
      let r;
      if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
        let i,
          a = r[1],
          o = r[2];
        switch (a) {
          case `rgb`:
          case `rgba`:
            if (
              (i =
                /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  o,
                ))
            )
              return (
                n(i[4]),
                this.setRGB(
                  Math.min(255, parseInt(i[1], 10)) / 255,
                  Math.min(255, parseInt(i[2], 10)) / 255,
                  Math.min(255, parseInt(i[3], 10)) / 255,
                  t,
                )
              );
            if (
              (i =
                /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  o,
                ))
            )
              return (
                n(i[4]),
                this.setRGB(
                  Math.min(100, parseInt(i[1], 10)) / 100,
                  Math.min(100, parseInt(i[2], 10)) / 100,
                  Math.min(100, parseInt(i[3], 10)) / 100,
                  t,
                )
              );
            break;
          case `hsl`:
          case `hsla`:
            if (
              (i =
                /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  o,
                ))
            )
              return (
                n(i[4]),
                this.setHSL(
                  parseFloat(i[1]) / 360,
                  parseFloat(i[2]) / 100,
                  parseFloat(i[3]) / 100,
                  t,
                )
              );
            break;
          default:
            Ot(`Color: Unknown color model ` + e);
        }
      } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
        let n = r[1],
          i = n.length;
        if (i === 3)
          return this.setRGB(
            parseInt(n.charAt(0), 16) / 15,
            parseInt(n.charAt(1), 16) / 15,
            parseInt(n.charAt(2), 16) / 15,
            t,
          );
        if (i === 6) return this.setHex(parseInt(n, 16), t);
        Ot(`Color: Invalid hex color ` + e);
      } else if (e && e.length > 0) return this.setColorName(e, t);
      return this;
    }
    setColorName(e, t = ft) {
      let n = cr[e.toLowerCase()];
      return (
        n === void 0 ? Ot(`Color: Unknown color ` + e) : this.setHex(n, t),
        this
      );
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
      return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
    }
    copySRGBToLinear(e) {
      return ((this.r = _n(e.r)), (this.g = _n(e.g)), (this.b = _n(e.b)), this);
    }
    copyLinearToSRGB(e) {
      return ((this.r = vn(e.r)), (this.g = vn(e.g)), (this.b = vn(e.b)), this);
    }
    convertSRGBToLinear() {
      return (this.copySRGBToLinear(this), this);
    }
    convertLinearToSRGB() {
      return (this.copyLinearToSRGB(this), this);
    }
    getHex(e = ft) {
      return (
        gn.workingToColorSpace(fr.copy(this), e),
        Math.round(zt(fr.r * 255, 0, 255)) * 65536 +
          Math.round(zt(fr.g * 255, 0, 255)) * 256 +
          Math.round(zt(fr.b * 255, 0, 255))
      );
    }
    getHexString(e = ft) {
      return (`000000` + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = gn.workingColorSpace) {
      gn.workingToColorSpace(fr.copy(this), t);
      let n = fr.r,
        r = fr.g,
        i = fr.b,
        a = Math.max(n, r, i),
        o = Math.min(n, r, i),
        s,
        c,
        l = (o + a) / 2;
      if (o === a) ((s = 0), (c = 0));
      else {
        let e = a - o;
        switch (((c = l <= 0.5 ? e / (a + o) : e / (2 - a - o)), a)) {
          case n:
            s = (r - i) / e + (r < i ? 6 : 0);
            break;
          case r:
            s = (i - n) / e + 2;
            break;
          case i:
            s = (n - r) / e + 4;
        }
        s /= 6;
      }
      return ((e.h = s), (e.s = c), (e.l = l), e);
    }
    getRGB(e, t = gn.workingColorSpace) {
      return (
        gn.workingToColorSpace(fr.copy(this), t),
        (e.r = fr.r),
        (e.g = fr.g),
        (e.b = fr.b),
        e
      );
    }
    getStyle(e = ft) {
      gn.workingToColorSpace(fr.copy(this), e);
      let t = fr.r,
        n = fr.g,
        r = fr.b;
      return e === `srgb`
        ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`
        : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
    }
    offsetHSL(e, t, n) {
      return (this.getHSL(lr), this.setHSL(lr.h + e, lr.s + t, lr.l + n));
    }
    add(e) {
      return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
    }
    addColors(e, t) {
      return (
        (this.r = e.r + t.r),
        (this.g = e.g + t.g),
        (this.b = e.b + t.b),
        this
      );
    }
    addScalar(e) {
      return ((this.r += e), (this.g += e), (this.b += e), this);
    }
    sub(e) {
      return (
        (this.r = Math.max(0, this.r - e.r)),
        (this.g = Math.max(0, this.g - e.g)),
        (this.b = Math.max(0, this.b - e.b)),
        this
      );
    }
    multiply(e) {
      return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
    }
    multiplyScalar(e) {
      return ((this.r *= e), (this.g *= e), (this.b *= e), this);
    }
    lerp(e, t) {
      return (
        (this.r += (e.r - this.r) * t),
        (this.g += (e.g - this.g) * t),
        (this.b += (e.b - this.b) * t),
        this
      );
    }
    lerpColors(e, t, n) {
      return (
        (this.r = e.r + (t.r - e.r) * n),
        (this.g = e.g + (t.g - e.g) * n),
        (this.b = e.b + (t.b - e.b) * n),
        this
      );
    }
    lerpHSL(e, t) {
      (this.getHSL(lr), e.getHSL(ur));
      let n = Ut(lr.h, ur.h, t),
        r = Ut(lr.s, ur.s, t),
        i = Ut(lr.l, ur.l, t);
      return (this.setHSL(n, r, i), this);
    }
    setFromVector3(e) {
      return ((this.r = e.x), (this.g = e.y), (this.b = e.z), this);
    }
    applyMatrix3(e) {
      let t = this.r,
        n = this.g,
        r = this.b,
        i = e.elements;
      return (
        (this.r = i[0] * t + i[3] * n + i[6] * r),
        (this.g = i[1] * t + i[4] * n + i[7] * r),
        (this.b = i[2] * t + i[5] * n + i[8] * r),
        this
      );
    }
    equals(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
      return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
    }
    fromBufferAttribute(e, t) {
      return (
        (this.r = e.getX(t)),
        (this.g = e.getY(t)),
        (this.b = e.getZ(t)),
        this
      );
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      (yield this.r, yield this.g, yield this.b);
    }
  },
  fr = new P();
P.NAMES = cr;
var pr = class extends ir {
    constructor() {
      (super(),
        (this.isScene = !0),
        (this.type = `Scene`),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.backgroundBlurriness = 0),
        (this.backgroundIntensity = 1),
        (this.backgroundRotation = new Vn()),
        (this.environmentIntensity = 1),
        (this.environmentRotation = new Vn()),
        (this.overrideMaterial = null),
        typeof __THREE_DEVTOOLS__ < `u` &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent(`observe`, { detail: this }),
          ));
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        e.background !== null && (this.background = e.background.clone()),
        e.environment !== null && (this.environment = e.environment.clone()),
        e.fog !== null && (this.fog = e.fog.clone()),
        (this.backgroundBlurriness = e.backgroundBlurriness),
        (this.backgroundIntensity = e.backgroundIntensity),
        this.backgroundRotation.copy(e.backgroundRotation),
        (this.environmentIntensity = e.environmentIntensity),
        this.environmentRotation.copy(e.environmentRotation),
        e.overrideMaterial !== null &&
          (this.overrideMaterial = e.overrideMaterial.clone()),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        this.fog !== null && (t.object.fog = this.fog.toJSON()),
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
        (t.object.backgroundIntensity = this.backgroundIntensity),
        (t.object.backgroundRotation = this.backgroundRotation.toArray()),
        (t.object.environmentIntensity = this.environmentIntensity),
        (t.object.environmentRotation = this.environmentRotation.toArray()),
        t
      );
    }
  },
  mr = new M(),
  hr = new M(),
  gr = new M(),
  _r = new M(),
  vr = new M(),
  yr = new M(),
  br = new M(),
  xr = new M(),
  Sr = new M(),
  Cr = new M(),
  wr = new Dn(),
  Tr = new Dn(),
  Er = new Dn(),
  Dr = class e {
    constructor(e = new M(), t = new M(), n = new M()) {
      ((this.a = e), (this.b = t), (this.c = n));
    }
    static getNormal(e, t, n, r) {
      (r.subVectors(n, t), mr.subVectors(e, t), r.cross(mr));
      let i = r.lengthSq();
      return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, r, i) {
      (mr.subVectors(r, t), hr.subVectors(n, t), gr.subVectors(e, t));
      let a = mr.dot(mr),
        o = mr.dot(hr),
        s = mr.dot(gr),
        c = hr.dot(hr),
        l = hr.dot(gr),
        u = a * c - o * o;
      if (u === 0) return (i.set(0, 0, 0), null);
      let d = 1 / u,
        f = (c * s - o * l) * d,
        p = (a * l - o * s) * d;
      return i.set(1 - f - p, p, f);
    }
    static containsPoint(e, t, n, r) {
      return (
        this.getBarycoord(e, t, n, r, _r) !== null &&
        _r.x >= 0 &&
        _r.y >= 0 &&
        _r.x + _r.y <= 1
      );
    }
    static getInterpolation(e, t, n, r, i, a, o, s) {
      return this.getBarycoord(e, t, n, r, _r) === null
        ? ((s.x = 0),
          (s.y = 0),
          `z` in s && (s.z = 0),
          `w` in s && (s.w = 0),
          null)
        : (s.setScalar(0),
          s.addScaledVector(i, _r.x),
          s.addScaledVector(a, _r.y),
          s.addScaledVector(o, _r.z),
          s);
    }
    static getInterpolatedAttribute(e, t, n, r, i, a) {
      return (
        wr.setScalar(0),
        Tr.setScalar(0),
        Er.setScalar(0),
        wr.fromBufferAttribute(e, t),
        Tr.fromBufferAttribute(e, n),
        Er.fromBufferAttribute(e, r),
        a.setScalar(0),
        a.addScaledVector(wr, i.x),
        a.addScaledVector(Tr, i.y),
        a.addScaledVector(Er, i.z),
        a
      );
    }
    static isFrontFacing(e, t, n, r) {
      return (
        mr.subVectors(n, t),
        hr.subVectors(e, t),
        mr.cross(hr).dot(r) < 0
      );
    }
    set(e, t, n) {
      return (this.a.copy(e), this.b.copy(t), this.c.copy(n), this);
    }
    setFromPointsAndIndices(e, t, n, r) {
      return (this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this);
    }
    setFromAttributeAndIndices(e, t, n, r) {
      return (
        this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, r),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this);
    }
    getArea() {
      return (
        mr.subVectors(this.c, this.b),
        hr.subVectors(this.a, this.b),
        mr.cross(hr).length() * 0.5
      );
    }
    getMidpoint(e) {
      return e
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return e.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, n) {
      return e.getBarycoord(t, this.a, this.b, this.c, n);
    }
    getInterpolation(t, n, r, i, a) {
      return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
    }
    containsPoint(t) {
      return e.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return e.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      let n = this.a,
        r = this.b,
        i = this.c,
        a,
        o;
      (vr.subVectors(r, n), yr.subVectors(i, n), xr.subVectors(e, n));
      let s = vr.dot(xr),
        c = yr.dot(xr);
      if (s <= 0 && c <= 0) return t.copy(n);
      Sr.subVectors(e, r);
      let l = vr.dot(Sr),
        u = yr.dot(Sr);
      if (l >= 0 && u <= l) return t.copy(r);
      let d = s * u - l * c;
      if (d <= 0 && s >= 0 && l <= 0)
        return ((a = s / (s - l)), t.copy(n).addScaledVector(vr, a));
      Cr.subVectors(e, i);
      let f = vr.dot(Cr),
        p = yr.dot(Cr);
      if (p >= 0 && f <= p) return t.copy(i);
      let m = f * c - s * p;
      if (m <= 0 && c >= 0 && p <= 0)
        return ((o = c / (c - p)), t.copy(n).addScaledVector(yr, o));
      let h = l * p - f * u;
      if (h <= 0 && u - l >= 0 && f - p >= 0)
        return (
          br.subVectors(i, r),
          (o = (u - l) / (u - l + (f - p))),
          t.copy(r).addScaledVector(br, o)
        );
      let g = 1 / (h + m + d);
      return (
        (a = m * g),
        (o = d * g),
        t.copy(n).addScaledVector(vr, a).addScaledVector(yr, o)
      );
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  },
  Or = class {
    constructor(
      e = new M(1 / 0, 1 / 0, 1 / 0),
      t = new M(-1 / 0, -1 / 0, -1 / 0),
    ) {
      ((this.isBox3 = !0), (this.min = e), (this.max = t));
    }
    set(e, t) {
      return (this.min.copy(e), this.max.copy(t), this);
    }
    setFromArray(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t += 3)
        this.expandByPoint(Ar.fromArray(e, t));
      return this;
    }
    setFromBufferAttribute(e) {
      this.makeEmpty();
      for (let t = 0, n = e.count; t < n; t++)
        this.expandByPoint(Ar.fromBufferAttribute(e, t));
      return this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      let n = Ar.copy(t).multiplyScalar(0.5);
      return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
    }
    setFromObject(e, t = !1) {
      return (this.makeEmpty(), this.expandByObject(e, t));
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (this.min.copy(e.min), this.max.copy(e.max), this);
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(e) {
      return this.isEmpty()
        ? e.set(0, 0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return (this.min.min(e), this.max.max(e), this);
    }
    expandByVector(e) {
      return (this.min.sub(e), this.max.add(e), this);
    }
    expandByScalar(e) {
      return (this.min.addScalar(-e), this.max.addScalar(e), this);
    }
    expandByObject(e, t = !1) {
      e.updateWorldMatrix(!1, !1);
      let n = e.geometry;
      if (n !== void 0) {
        let r = n.getAttribute(`position`);
        if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
          for (let t = 0, n = r.count; t < n; t++)
            (e.isMesh === !0
              ? e.getVertexPosition(t, Ar)
              : Ar.fromBufferAttribute(r, t),
              Ar.applyMatrix4(e.matrixWorld),
              this.expandByPoint(Ar));
        else
          (e.boundingBox === void 0
            ? (n.boundingBox === null && n.computeBoundingBox(),
              jr.copy(n.boundingBox))
            : (e.boundingBox === null && e.computeBoundingBox(),
              jr.copy(e.boundingBox)),
            jr.applyMatrix4(e.matrixWorld),
            this.union(jr));
      }
      let r = e.children;
      for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
      return this;
    }
    containsPoint(e) {
      return (
        e.x >= this.min.x &&
        e.x <= this.max.x &&
        e.y >= this.min.y &&
        e.y <= this.max.y &&
        e.z >= this.min.z &&
        e.z <= this.max.z
      );
    }
    containsBox(e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y &&
        this.min.z <= e.min.z &&
        e.max.z <= this.max.z
      );
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
        (e.z - this.min.z) / (this.max.z - this.min.z),
      );
    }
    intersectsBox(e) {
      return (
        e.max.x >= this.min.x &&
        e.min.x <= this.max.x &&
        e.max.y >= this.min.y &&
        e.min.y <= this.max.y &&
        e.max.z >= this.min.z &&
        e.min.z <= this.max.z
      );
    }
    intersectsSphere(e) {
      return (
        this.clampPoint(e.center, Ar),
        Ar.distanceToSquared(e.center) <= e.radius * e.radius
      );
    }
    intersectsPlane(e) {
      let t, n;
      return (
        e.normal.x > 0
          ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
          : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
        e.normal.y > 0
          ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
          : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
        e.normal.z > 0
          ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
          : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
        t <= -e.constant && n >= -e.constant
      );
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return !1;
      (this.getCenter(Rr),
        zr.subVectors(this.max, Rr),
        Mr.subVectors(e.a, Rr),
        Nr.subVectors(e.b, Rr),
        Pr.subVectors(e.c, Rr),
        Fr.subVectors(Nr, Mr),
        Ir.subVectors(Pr, Nr),
        Lr.subVectors(Mr, Pr));
      let t = [
        0,
        -Fr.z,
        Fr.y,
        0,
        -Ir.z,
        Ir.y,
        0,
        -Lr.z,
        Lr.y,
        Fr.z,
        0,
        -Fr.x,
        Ir.z,
        0,
        -Ir.x,
        Lr.z,
        0,
        -Lr.x,
        -Fr.y,
        Fr.x,
        0,
        -Ir.y,
        Ir.x,
        0,
        -Lr.y,
        Lr.x,
        0,
      ];
      return !Hr(t, Mr, Nr, Pr, zr) ||
        ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Hr(t, Mr, Nr, Pr, zr))
        ? !1
        : (Br.crossVectors(Fr, Ir),
          (t = [Br.x, Br.y, Br.z]),
          Hr(t, Mr, Nr, Pr, zr));
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return this.clampPoint(e, Ar).distanceTo(e);
    }
    getBoundingSphere(e) {
      return (
        this.isEmpty()
          ? e.makeEmpty()
          : (this.getCenter(e.center),
            (e.radius = this.getSize(Ar).length() * 0.5)),
        e
      );
    }
    intersect(e) {
      return (
        this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(e) {
      return (this.min.min(e.min), this.max.max(e.max), this);
    }
    applyMatrix4(e) {
      return this.isEmpty()
        ? this
        : (kr[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
          kr[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
          kr[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
          kr[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
          kr[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
          kr[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
          kr[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
          kr[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
          this.setFromPoints(kr),
          this);
    }
    translate(e) {
      return (this.min.add(e), this.max.add(e), this);
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
    toJSON() {
      return { min: this.min.toArray(), max: this.max.toArray() };
    }
    fromJSON(e) {
      return (this.min.fromArray(e.min), this.max.fromArray(e.max), this);
    }
  },
  kr = [new M(), new M(), new M(), new M(), new M(), new M(), new M(), new M()],
  Ar = new M(),
  jr = new Or(),
  Mr = new M(),
  Nr = new M(),
  Pr = new M(),
  Fr = new M(),
  Ir = new M(),
  Lr = new M(),
  Rr = new M(),
  zr = new M(),
  Br = new M(),
  Vr = new M();
function Hr(e, t, n, r, i) {
  for (let a = 0, o = e.length - 3; a <= o; a += 3) {
    Vr.fromArray(e, a);
    let o = i.x * Math.abs(Vr.x) + i.y * Math.abs(Vr.y) + i.z * Math.abs(Vr.z),
      s = t.dot(Vr),
      c = n.dot(Vr),
      l = r.dot(Vr);
    if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
  }
  return !0;
}
var Ur = new M(),
  Wr = new j(),
  Gr = 0,
  Kr = class extends Nt {
    constructor(e, t, n = !1) {
      if ((super(), Array.isArray(e)))
        throw TypeError(
          `THREE.BufferAttribute: array should be a Typed Array.`,
        );
      ((this.isBufferAttribute = !0),
        Object.defineProperty(this, "id", { value: Gr++ }),
        (this.name = ``),
        (this.array = e),
        (this.itemSize = t),
        (this.count = e === void 0 ? 0 : e.length / t),
        (this.normalized = n),
        (this.usage = _t),
        (this.updateRanges = []),
        (this.gpuType = ae),
        (this.version = 0));
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    setUsage(e) {
      return ((this.usage = e), this);
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({ start: e, count: t });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.array = new e.array.constructor(e.array)),
        (this.itemSize = e.itemSize),
        (this.count = e.count),
        (this.normalized = e.normalized),
        (this.usage = e.usage),
        (this.gpuType = e.gpuType),
        this
      );
    }
    copyAt(e, t, n) {
      ((e *= this.itemSize), (n *= t.itemSize));
      for (let r = 0, i = this.itemSize; r < i; r++)
        this.array[e + r] = t.array[n + r];
      return this;
    }
    copyArray(e) {
      return (this.array.set(e), this);
    }
    applyMatrix3(e) {
      if (this.itemSize === 2)
        for (let t = 0, n = this.count; t < n; t++)
          (Wr.fromBufferAttribute(this, t),
            Wr.applyMatrix3(e),
            this.setXY(t, Wr.x, Wr.y));
      else if (this.itemSize === 3)
        for (let t = 0, n = this.count; t < n; t++)
          (Ur.fromBufferAttribute(this, t),
            Ur.applyMatrix3(e),
            this.setXYZ(t, Ur.x, Ur.y, Ur.z));
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (Ur.fromBufferAttribute(this, t),
          Ur.applyMatrix4(e),
          this.setXYZ(t, Ur.x, Ur.y, Ur.z));
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (Ur.fromBufferAttribute(this, t),
          Ur.applyNormalMatrix(e),
          this.setXYZ(t, Ur.x, Ur.y, Ur.z));
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (Ur.fromBufferAttribute(this, t),
          Ur.transformDirection(e),
          this.setXYZ(t, Ur.x, Ur.y, Ur.z));
      return this;
    }
    set(e, t = 0) {
      return (this.array.set(e, t), this);
    }
    getComponent(e, t) {
      let n = this.array[e * this.itemSize + t];
      return (this.normalized && (n = an(n, this.array)), n);
    }
    setComponent(e, t, n) {
      return (
        this.normalized && (n = on(n, this.array)),
        (this.array[e * this.itemSize + t] = n),
        this
      );
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return (this.normalized && (t = an(t, this.array)), t);
    }
    setX(e, t) {
      return (
        this.normalized && (t = on(t, this.array)),
        (this.array[e * this.itemSize] = t),
        this
      );
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return (this.normalized && (t = an(t, this.array)), t);
    }
    setY(e, t) {
      return (
        this.normalized && (t = on(t, this.array)),
        (this.array[e * this.itemSize + 1] = t),
        this
      );
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return (this.normalized && (t = an(t, this.array)), t);
    }
    setZ(e, t) {
      return (
        this.normalized && (t = on(t, this.array)),
        (this.array[e * this.itemSize + 2] = t),
        this
      );
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return (this.normalized && (t = an(t, this.array)), t);
    }
    setW(e, t) {
      return (
        this.normalized && (t = on(t, this.array)),
        (this.array[e * this.itemSize + 3] = t),
        this
      );
    }
    setXY(e, t, n) {
      return (
        (e *= this.itemSize),
        this.normalized && ((t = on(t, this.array)), (n = on(n, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, r) {
      return (
        (e *= this.itemSize),
        this.normalized &&
          ((t = on(t, this.array)),
          (n = on(n, this.array)),
          (r = on(r, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = r),
        this
      );
    }
    setXYZW(e, t, n, r, i) {
      return (
        (e *= this.itemSize),
        this.normalized &&
          ((t = on(t, this.array)),
          (n = on(n, this.array)),
          (r = on(r, this.array)),
          (i = on(i, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = r),
        (this.array[e + 3] = i),
        this
      );
    }
    onUpload(e) {
      return ((this.onUploadCallback = e), this);
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      let e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized,
      };
      return (
        (e.name = this.name),
        (e.usage = this.usage),
        (e.gpuType = this.gpuType),
        e
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  },
  qr = class extends Kr {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  },
  Jr = class extends Kr {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  },
  F = class extends Kr {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  },
  Yr = new Or(),
  Xr = new M(),
  Zr = new M(),
  Qr = class {
    constructor(e = new M(), t = -1) {
      ((this.isSphere = !0), (this.center = e), (this.radius = t));
    }
    set(e, t) {
      return (this.center.copy(e), (this.radius = t), this);
    }
    setFromPoints(e, t) {
      let n = this.center;
      t === void 0 ? Yr.setFromPoints(e).getCenter(n) : n.copy(t);
      let r = 0;
      for (let t = 0, i = e.length; t < i; t++)
        r = Math.max(r, n.distanceToSquared(e[t]));
      return ((this.radius = Math.sqrt(r)), this);
    }
    copy(e) {
      return (this.center.copy(e.center), (this.radius = e.radius), this);
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return (this.center.set(0, 0, 0), (this.radius = -1), this);
    }
    containsPoint(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
      return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
      let t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
      return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
      let n = this.center.distanceToSquared(e);
      return (
        t.copy(e),
        n > this.radius * this.radius &&
          (t.sub(this.center).normalize(),
          t.multiplyScalar(this.radius).add(this.center)),
        t
      );
    }
    getBoundingBox(e) {
      return this.isEmpty()
        ? (e.makeEmpty(), e)
        : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
      return (
        this.center.applyMatrix4(e),
        (this.radius *= e.getMaxScaleOnAxis()),
        this
      );
    }
    translate(e) {
      return (this.center.add(e), this);
    }
    expandByPoint(e) {
      if (this.isEmpty()) return (this.center.copy(e), (this.radius = 0), this);
      Xr.subVectors(e, this.center);
      let t = Xr.lengthSq();
      if (t > this.radius * this.radius) {
        let e = Math.sqrt(t),
          n = (e - this.radius) * 0.5;
        (this.center.addScaledVector(Xr, n / e), (this.radius += n));
      }
      return this;
    }
    union(e) {
      return e.isEmpty()
        ? this
        : this.isEmpty()
          ? (this.copy(e), this)
          : (this.center.equals(e.center) === !0
              ? (this.radius = Math.max(this.radius, e.radius))
              : (Zr.subVectors(e.center, this.center).setLength(e.radius),
                this.expandByPoint(Xr.copy(e.center).add(Zr)),
                this.expandByPoint(Xr.copy(e.center).sub(Zr))),
            this);
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      return { radius: this.radius, center: this.center.toArray() };
    }
    fromJSON(e) {
      return ((this.radius = e.radius), this.center.fromArray(e.center), this);
    }
  },
  $r = 0,
  ei = new N(),
  ti = new ir(),
  ni = new M(),
  ri = new Or(),
  ii = new Or(),
  ai = new M(),
  oi = class e extends Nt {
    constructor() {
      (super(),
        (this.isBufferGeometry = !0),
        Object.defineProperty(this, "id", { value: $r++ }),
        (this.uuid = Rt()),
        (this.name = ``),
        (this.type = `BufferGeometry`),
        (this.index = null),
        (this.indirect = null),
        (this.indirectOffset = 0),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {}),
        (this._transformed = !1));
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return (
        (this.index = Array.isArray(e) ? new (xt(e) ? Jr : qr)(e, 1) : e),
        this
      );
    }
    setIndirect(e, t = 0) {
      return ((this.indirect = e), (this.indirectOffset = t), this);
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    setAttribute(e, t) {
      return ((this.attributes[e] = t), this);
    }
    deleteAttribute(e) {
      return (delete this.attributes[e], this);
    }
    hasAttribute(e) {
      return this.attributes[e] !== void 0;
    }
    addGroup(e, t, n = 0) {
      this.groups.push({ start: e, count: t, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e, t) {
      ((this.drawRange.start = e), (this.drawRange.count = t));
    }
    applyMatrix4(e) {
      let t = this.attributes.position;
      t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
      let n = this.attributes.normal;
      if (n !== void 0) {
        let t = new dn().getNormalMatrix(e);
        (n.applyNormalMatrix(t), (n.needsUpdate = !0));
      }
      let r = this.attributes.tangent;
      return (
        r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        (this._transformed = !0),
        this
      );
    }
    applyQuaternion(e) {
      return (ei.makeRotationFromQuaternion(e), this.applyMatrix4(ei), this);
    }
    rotateX(e) {
      return (ei.makeRotationX(e), this.applyMatrix4(ei), this);
    }
    rotateY(e) {
      return (ei.makeRotationY(e), this.applyMatrix4(ei), this);
    }
    rotateZ(e) {
      return (ei.makeRotationZ(e), this.applyMatrix4(ei), this);
    }
    translate(e, t, n) {
      return (ei.makeTranslation(e, t, n), this.applyMatrix4(ei), this);
    }
    scale(e, t, n) {
      return (ei.makeScale(e, t, n), this.applyMatrix4(ei), this);
    }
    lookAt(e) {
      return (
        ti.lookAt(e),
        ti.updateMatrix(),
        this.applyMatrix4(ti.matrix),
        this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(ni).negate(),
        this.translate(ni.x, ni.y, ni.z),
        this
      );
    }
    setFromPoints(e) {
      let t = this.getAttribute(`position`);
      if (t === void 0) {
        let t = [];
        for (let n = 0, r = e.length; n < r; n++) {
          let r = e[n];
          t.push(r.x, r.y, r.z || 0);
        }
        this.setAttribute(`position`, new F(t, 3));
      } else {
        let n = Math.min(e.length, t.count);
        for (let r = 0; r < n; r++) {
          let n = e[r];
          t.setXYZ(r, n.x, n.y, n.z || 0);
        }
        (e.length > t.count &&
          Ot(
            `BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`,
          ),
          (t.needsUpdate = !0));
      }
      return this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new Or());
      let e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        (kt(
          `BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,
          this,
        ),
          this.boundingBox.set(
            new M(-1 / 0, -1 / 0, -1 / 0),
            new M(1 / 0, 1 / 0, 1 / 0),
          ));
        return;
      }
      if (e !== void 0) {
        if ((this.boundingBox.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            let n = t[e];
            (ri.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (ai.addVectors(this.boundingBox.min, ri.min),
                  this.boundingBox.expandByPoint(ai),
                  ai.addVectors(this.boundingBox.max, ri.max),
                  this.boundingBox.expandByPoint(ai))
                : (this.boundingBox.expandByPoint(ri.min),
                  this.boundingBox.expandByPoint(ri.max)));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        kt(
          `BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,
          this,
        );
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new Qr());
      let e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        (kt(
          `BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,
          this,
        ),
          this.boundingSphere.set(new M(), 1 / 0));
        return;
      }
      if (e) {
        let n = this.boundingSphere.center;
        if ((ri.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            let n = t[e];
            (ii.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (ai.addVectors(ri.min, ii.min),
                  ri.expandByPoint(ai),
                  ai.addVectors(ri.max, ii.max),
                  ri.expandByPoint(ai))
                : (ri.expandByPoint(ii.min), ri.expandByPoint(ii.max)));
          }
        ri.getCenter(n);
        let r = 0;
        for (let t = 0, i = e.count; t < i; t++)
          (ai.fromBufferAttribute(e, t),
            (r = Math.max(r, n.distanceToSquared(ai))));
        if (t)
          for (let i = 0, a = t.length; i < a; i++) {
            let a = t[i],
              o = this.morphTargetsRelative;
            for (let t = 0, i = a.count; t < i; t++)
              (ai.fromBufferAttribute(a, t),
                o && (ni.fromBufferAttribute(e, t), ai.add(ni)),
                (r = Math.max(r, n.distanceToSquared(ai))));
          }
        ((this.boundingSphere.radius = Math.sqrt(r)),
          isNaN(this.boundingSphere.radius) &&
            kt(
              `BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,
              this,
            ));
      }
    }
    computeTangents() {
      let e = this.index,
        t = this.attributes;
      if (
        e === null ||
        t.position === void 0 ||
        t.normal === void 0 ||
        t.uv === void 0
      ) {
        kt(
          `BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`,
        );
        return;
      }
      let n = t.position,
        r = t.normal,
        i = t.uv,
        a = this.getAttribute(`tangent`);
      (a === void 0 || a.count !== n.count) &&
        ((a = new Kr(new Float32Array(4 * n.count), 4)),
        this.setAttribute(`tangent`, a));
      let o = [],
        s = [];
      for (let e = 0; e < n.count; e++) ((o[e] = new M()), (s[e] = new M()));
      let c = new M(),
        l = new M(),
        u = new M(),
        d = new j(),
        f = new j(),
        p = new j(),
        m = new M(),
        h = new M();
      function g(e, t, r) {
        (c.fromBufferAttribute(n, e),
          l.fromBufferAttribute(n, t),
          u.fromBufferAttribute(n, r),
          d.fromBufferAttribute(i, e),
          f.fromBufferAttribute(i, t),
          p.fromBufferAttribute(i, r),
          l.sub(c),
          u.sub(c),
          f.sub(d),
          p.sub(d));
        let a = 1 / (f.x * p.y - p.x * f.y);
        isFinite(a) &&
          (m
            .copy(l)
            .multiplyScalar(p.y)
            .addScaledVector(u, -f.y)
            .multiplyScalar(a),
          h
            .copy(u)
            .multiplyScalar(f.x)
            .addScaledVector(l, -p.x)
            .multiplyScalar(a),
          o[e].add(m),
          o[t].add(m),
          o[r].add(m),
          s[e].add(h),
          s[t].add(h),
          s[r].add(h));
      }
      let _ = this.groups;
      _.length === 0 && (_ = [{ start: 0, count: e.count }]);
      for (let t = 0, n = _.length; t < n; ++t) {
        let n = _[t],
          r = n.start,
          i = n.count;
        for (let t = r, n = r + i; t < n; t += 3)
          g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
      }
      let v = new M(),
        y = new M(),
        b = new M(),
        x = new M();
      function S(e) {
        (b.fromBufferAttribute(r, e), x.copy(b));
        let t = o[e];
        (v.copy(t),
          v.sub(b.multiplyScalar(b.dot(t))).normalize(),
          y.crossVectors(x, t));
        let n = y.dot(s[e]) < 0 ? -1 : 1;
        a.setXYZW(e, v.x, v.y, v.z, n);
      }
      for (let t = 0, n = _.length; t < n; ++t) {
        let n = _[t],
          r = n.start,
          i = n.count;
        for (let t = r, n = r + i; t < n; t += 3)
          (S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2)));
      }
      this._transformed = !0;
    }
    computeVertexNormals() {
      let e = this.index,
        t = this.getAttribute(`position`);
      if (t !== void 0) {
        let n = this.getAttribute(`normal`);
        if (n === void 0 || n.count !== t.count)
          ((n = new Kr(new Float32Array(t.count * 3), 3)),
            this.setAttribute(`normal`, n));
        else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
        let r = new M(),
          i = new M(),
          a = new M(),
          o = new M(),
          s = new M(),
          c = new M(),
          l = new M(),
          u = new M();
        if (e)
          for (let d = 0, f = e.count; d < f; d += 3) {
            let f = e.getX(d + 0),
              p = e.getX(d + 1),
              m = e.getX(d + 2);
            (r.fromBufferAttribute(t, f),
              i.fromBufferAttribute(t, p),
              a.fromBufferAttribute(t, m),
              l.subVectors(a, i),
              u.subVectors(r, i),
              l.cross(u),
              o.fromBufferAttribute(n, f),
              s.fromBufferAttribute(n, p),
              c.fromBufferAttribute(n, m),
              o.add(l),
              s.add(l),
              c.add(l),
              n.setXYZ(f, o.x, o.y, o.z),
              n.setXYZ(p, s.x, s.y, s.z),
              n.setXYZ(m, c.x, c.y, c.z));
          }
        else
          for (let e = 0, o = t.count; e < o; e += 3)
            (r.fromBufferAttribute(t, e + 0),
              i.fromBufferAttribute(t, e + 1),
              a.fromBufferAttribute(t, e + 2),
              l.subVectors(a, i),
              u.subVectors(r, i),
              l.cross(u),
              n.setXYZ(e + 0, l.x, l.y, l.z),
              n.setXYZ(e + 1, l.x, l.y, l.z),
              n.setXYZ(e + 2, l.x, l.y, l.z));
        (this.normalizeNormals(), (n.needsUpdate = !0));
      }
    }
    normalizeNormals() {
      let e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++)
        (ai.fromBufferAttribute(e, t),
          ai.normalize(),
          e.setXYZ(t, ai.x, ai.y, ai.z));
    }
    toNonIndexed() {
      function t(e, t) {
        let n = e.array,
          r = e.itemSize,
          i = e.normalized,
          a = new n.constructor(t.length * r),
          o = 0,
          s = 0;
        for (let i = 0, c = t.length; i < c; i++) {
          o = e.isInterleavedBufferAttribute
            ? t[i] * e.data.stride + e.offset
            : t[i] * r;
          for (let e = 0; e < r; e++) a[s++] = n[o++];
        }
        return new Kr(a, r, i);
      }
      if (this.index === null)
        return (
          Ot(
            `BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`,
          ),
          this
        );
      let n = new e(),
        r = this.index.array,
        i = this.attributes;
      for (let e in i) {
        let a = i[e],
          o = t(a, r);
        n.setAttribute(e, o);
      }
      let a = this.morphAttributes;
      for (let e in a) {
        let i = [],
          o = a[e];
        for (let e = 0, n = o.length; e < n; e++) {
          let n = o[e],
            a = t(n, r);
          i.push(a);
        }
        n.morphAttributes[e] = i;
      }
      n.morphTargetsRelative = this.morphTargetsRelative;
      let o = this.groups;
      for (let e = 0, t = o.length; e < t; e++) {
        let t = o[e];
        n.addGroup(t.start, t.count, t.materialIndex);
      }
      return n;
    }
    toJSON() {
      let e = {
        metadata: {
          version: 4.7,
          type: `BufferGeometry`,
          generator: `BufferGeometry.toJSON`,
        },
      };
      if (
        ((e.uuid = this.uuid),
        (e.type =
          this.parameters !== void 0 && this._transformed === !0
            ? `BufferGeometry`
            : this.type),
        (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0 && this._transformed !== !0)
      ) {
        let t = this.parameters;
        for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
        return e;
      }
      e.data = { attributes: {} };
      let t = this.index;
      t !== null &&
        (e.data.index = {
          type: t.array.constructor.name,
          array: Array.prototype.slice.call(t.array),
        });
      let n = this.attributes;
      for (let t in n) {
        let r = n[t];
        e.data.attributes[t] = r.toJSON(e.data);
      }
      let r = {},
        i = !1;
      for (let t in this.morphAttributes) {
        let n = this.morphAttributes[t],
          a = [];
        for (let t = 0, r = n.length; t < r; t++) {
          let r = n[t];
          a.push(r.toJSON(e.data));
        }
        a.length > 0 && ((r[t] = a), (i = !0));
      }
      i &&
        ((e.data.morphAttributes = r),
        (e.data.morphTargetsRelative = this.morphTargetsRelative));
      let a = this.groups;
      a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
      let o = this.boundingSphere;
      return (o !== null && (e.data.boundingSphere = o.toJSON()), e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      ((this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null));
      let t = {};
      this.name = e.name;
      let n = e.index;
      n !== null && this.setIndex(n.clone());
      let r = e.attributes;
      for (let e in r) {
        let n = r[e];
        this.setAttribute(e, n.clone(t));
      }
      let i = e.morphAttributes;
      for (let e in i) {
        let n = [],
          r = i[e];
        for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
        this.morphAttributes[e] = n;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      let a = e.groups;
      for (let e = 0, t = a.length; e < t; e++) {
        let t = a[e];
        this.addGroup(t.start, t.count, t.materialIndex);
      }
      let o = e.boundingBox;
      o !== null && (this.boundingBox = o.clone());
      let s = e.boundingSphere;
      return (
        s !== null && (this.boundingSphere = s.clone()),
        (this.drawRange.start = e.drawRange.start),
        (this.drawRange.count = e.drawRange.count),
        (this.userData = e.userData),
        (this._transformed = e._transformed),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  },
  si = class {
    constructor(e, t) {
      ((this.isInterleavedBuffer = !0),
        (this.array = e),
        (this.stride = t),
        (this.count = e === void 0 ? 0 : e.length / t),
        (this.usage = _t),
        (this.updateRanges = []),
        (this.version = 0),
        (this.uuid = Rt()));
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    setUsage(e) {
      return ((this.usage = e), this);
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({ start: e, count: t });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(e) {
      return (
        (this.array = new e.array.constructor(e.array)),
        (this.count = e.count),
        (this.stride = e.stride),
        (this.usage = e.usage),
        this
      );
    }
    copyAt(e, t, n) {
      ((e *= this.stride), (n *= t.stride));
      for (let r = 0, i = this.stride; r < i; r++)
        this.array[e + r] = t.array[n + r];
      return this;
    }
    set(e, t = 0) {
      return (this.array.set(e, t), this);
    }
    clone(e) {
      (e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Rt()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
          (e.arrayBuffers[this.array.buffer._uuid] =
            this.array.slice(0).buffer));
      let t = new this.array.constructor(
          e.arrayBuffers[this.array.buffer._uuid],
        ),
        n = new this.constructor(t, this.stride);
      return (n.setUsage(this.usage), n);
    }
    onUpload(e) {
      return ((this.onUploadCallback = e), this);
    }
    toJSON(e) {
      (e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Rt()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
          (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
            new Uint32Array(this.array.buffer),
          )));
      let t = {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      };
      return ((t.usage = this.usage), t);
    }
  },
  ci = new M(),
  li = class e {
    constructor(e, t, n, r = !1) {
      ((this.isInterleavedBufferAttribute = !0),
        (this.name = ``),
        (this.data = e),
        (this.itemSize = t),
        (this.offset = n),
        (this.normalized = r));
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(e) {
      this.data.needsUpdate = e;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.data.count; t < n; t++)
        (ci.fromBufferAttribute(this, t),
          ci.applyMatrix4(e),
          this.setXYZ(t, ci.x, ci.y, ci.z));
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (ci.fromBufferAttribute(this, t),
          ci.applyNormalMatrix(e),
          this.setXYZ(t, ci.x, ci.y, ci.z));
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (ci.fromBufferAttribute(this, t),
          ci.transformDirection(e),
          this.setXYZ(t, ci.x, ci.y, ci.z));
      return this;
    }
    getComponent(e, t) {
      let n = this.array[e * this.data.stride + this.offset + t];
      return (this.normalized && (n = an(n, this.array)), n);
    }
    setComponent(e, t, n) {
      return (
        this.normalized && (n = on(n, this.array)),
        (this.data.array[e * this.data.stride + this.offset + t] = n),
        this
      );
    }
    setX(e, t) {
      return (
        this.normalized && (t = on(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset] = t),
        this
      );
    }
    setY(e, t) {
      return (
        this.normalized && (t = on(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 1] = t),
        this
      );
    }
    setZ(e, t) {
      return (
        this.normalized && (t = on(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 2] = t),
        this
      );
    }
    setW(e, t) {
      return (
        this.normalized && (t = on(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 3] = t),
        this
      );
    }
    getX(e) {
      let t = this.data.array[e * this.data.stride + this.offset];
      return (this.normalized && (t = an(t, this.array)), t);
    }
    getY(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 1];
      return (this.normalized && (t = an(t, this.array)), t);
    }
    getZ(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 2];
      return (this.normalized && (t = an(t, this.array)), t);
    }
    getW(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 3];
      return (this.normalized && (t = an(t, this.array)), t);
    }
    setXY(e, t, n) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized && ((t = on(t, this.array)), (n = on(n, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, r) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized &&
          ((t = on(t, this.array)),
          (n = on(n, this.array)),
          (r = on(r, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = r),
        this
      );
    }
    setXYZW(e, t, n, r, i) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized &&
          ((t = on(t, this.array)),
          (n = on(n, this.array)),
          (r = on(r, this.array)),
          (i = on(i, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = r),
        (this.data.array[e + 3] = i),
        this
      );
    }
    clone(t) {
      if (t === void 0) {
        Et(
          `InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`,
        );
        let e = [];
        for (let t = 0; t < this.count; t++) {
          let n = t * this.data.stride + this.offset;
          for (let t = 0; t < this.itemSize; t++)
            e.push(this.data.array[n + t]);
        }
        return new Kr(
          new this.array.constructor(e),
          this.itemSize,
          this.normalized,
        );
      }
      return (
        t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
        t.interleavedBuffers[this.data.uuid] === void 0 &&
          (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
        new e(
          t.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized,
        )
      );
    }
    toJSON(e) {
      if (e === void 0) {
        Et(
          `InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`,
        );
        let e = [];
        for (let t = 0; t < this.count; t++) {
          let n = t * this.data.stride + this.offset;
          for (let t = 0; t < this.itemSize; t++)
            e.push(this.data.array[n + t]);
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: e,
          normalized: this.normalized,
        };
      }
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
    }
  },
  ui = new M(),
  di = new M(),
  fi = new dn(),
  pi = class {
    constructor(e = new M(1, 0, 0), t = 0) {
      ((this.isPlane = !0), (this.normal = e), (this.constant = t));
    }
    set(e, t) {
      return (this.normal.copy(e), (this.constant = t), this);
    }
    setComponents(e, t, n, r) {
      return (this.normal.set(e, t, n), (this.constant = r), this);
    }
    setFromNormalAndCoplanarPoint(e, t) {
      return (this.normal.copy(e), (this.constant = -t.dot(this.normal)), this);
    }
    setFromCoplanarPoints(e, t, n) {
      let r = ui.subVectors(n, t).cross(di.subVectors(e, t)).normalize();
      return (this.setFromNormalAndCoplanarPoint(r, e), this);
    }
    copy(e) {
      return (this.normal.copy(e.normal), (this.constant = e.constant), this);
    }
    normalize() {
      let e = 1 / this.normal.length();
      return (this.normal.multiplyScalar(e), (this.constant *= e), this);
    }
    negate() {
      return ((this.constant *= -1), this.normal.negate(), this);
    }
    distanceToPoint(e) {
      return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
      return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
      return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
    }
    intersectLine(e, t, n = !0) {
      let r = e.delta(ui),
        i = this.normal.dot(r);
      if (i === 0)
        return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
      let a = -(e.start.dot(this.normal) + this.constant) / i;
      return n === !0 && (a < 0 || a > 1)
        ? null
        : t.copy(e.start).addScaledVector(r, a);
    }
    intersectsLine(e) {
      let t = this.distanceToPoint(e.start),
        n = this.distanceToPoint(e.end);
      return (t < 0 && n > 0) || (n < 0 && t > 0);
    }
    intersectsBox(e) {
      return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
      return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
      return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
      let n = t || fi.getNormalMatrix(e),
        r = this.coplanarPoint(ui).applyMatrix4(e),
        i = this.normal.applyMatrix3(n).normalize();
      return ((this.constant = -r.dot(i)), this);
    }
    translate(e) {
      return ((this.constant -= e.dot(this.normal)), this);
    }
    equals(e) {
      return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      return { normal: this.normal.toArray(), constant: this.constant };
    }
    fromJSON(e) {
      return (
        this.normal.fromArray(e.normal),
        (this.constant = e.constant),
        this
      );
    }
  },
  mi = 0,
  hi = class extends Nt {
    constructor() {
      (super(),
        (this.isMaterial = !0),
        Object.defineProperty(this, "id", { value: mi++ }),
        (this.uuid = Rt()),
        (this.name = ``),
        (this.type = `Material`),
        (this.blending = 1),
        (this.side = 0),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.alphaHash = !1),
        (this.blendSrc = 204),
        (this.blendDst = 205),
        (this.blendEquation = 100),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.blendColor = new P(0, 0, 0)),
        (this.blendAlpha = 0),
        (this.depthFunc = 3),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = 519),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = gt),
        (this.stencilZFail = gt),
        (this.stencilZPass = gt),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.forceSinglePass = !1),
        (this.allowOverride = !0),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0));
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(e) {
      (this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e));
    }
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(e) {
      if (e !== void 0)
        for (let t in e) {
          let n = e[t];
          if (n === void 0) {
            Ot(`Material: parameter '${t}' has value of undefined.`);
            continue;
          }
          let r = this[t];
          if (r === void 0) {
            Ot(`Material: '${t}' is not a property of THREE.${this.type}.`);
            continue;
          }
          r && r.isColor
            ? r.set(n)
            : (r && r.isVector2 && n && n.isVector2) ||
                (r && r.isEuler && n && n.isEuler) ||
                (r && r.isVector3 && n && n.isVector3)
              ? r.copy(n)
              : (this[t] = n);
        }
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`;
      t && (e = { textures: {}, images: {} });
      let n = {
        metadata: {
          version: 4.7,
          type: `Material`,
          generator: `Material.toJSON`,
        },
      };
      ((n.uuid = this.uuid),
        (n.type = this.type),
        (n.blending = this.blending),
        (n.side = this.side),
        (n.shadowSide = this.shadowSide),
        (n.vertexColors = this.vertexColors),
        (n.opacity = this.opacity),
        (n.transparent = this.transparent),
        (n.blendSrc = this.blendSrc),
        (n.blendDst = this.blendDst),
        (n.blendEquation = this.blendEquation),
        (n.blendSrcAlpha = this.blendSrcAlpha),
        (n.blendDstAlpha = this.blendDstAlpha),
        (n.blendEquationAlpha = this.blendEquationAlpha),
        (n.blendColor = this.blendColor.getHex()),
        (n.blendAlpha = this.blendAlpha),
        (n.depthFunc = this.depthFunc),
        (n.depthTest = this.depthTest),
        (n.depthWrite = this.depthWrite),
        (n.colorWrite = this.colorWrite),
        (n.clipIntersection = this.clipIntersection),
        (n.clipShadows = this.clipShadows),
        (n.stencilWriteMask = this.stencilWriteMask),
        (n.stencilFunc = this.stencilFunc),
        (n.stencilRef = this.stencilRef),
        (n.stencilFuncMask = this.stencilFuncMask),
        (n.stencilFail = this.stencilFail),
        (n.stencilZFail = this.stencilZFail),
        (n.stencilZPass = this.stencilZPass),
        (n.stencilWrite = this.stencilWrite),
        (n.polygonOffset = this.polygonOffset),
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
        (n.dithering = this.dithering),
        (n.alphaTest = this.alphaTest),
        (n.alphaHash = this.alphaHash),
        (n.alphaToCoverage = this.alphaToCoverage),
        (n.premultipliedAlpha = this.premultipliedAlpha),
        (n.forceSinglePass = this.forceSinglePass),
        (n.allowOverride = this.allowOverride),
        (n.visible = this.visible),
        (n.toneMapped = this.toneMapped),
        (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity !== void 0 &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        this.sheenColorMap &&
          this.sheenColorMap.isTexture &&
          (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
        this.sheenRoughnessMap &&
          this.sheenRoughnessMap.isTexture &&
          (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
        this.dispersion !== void 0 && (n.dispersion = this.dispersion),
        this.retroreflectivity !== void 0 &&
          (n.retroreflectivity = this.retroreflectivity),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 &&
          (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 &&
          (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap &&
          this.iridescenceMap.isTexture &&
          (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap &&
          this.iridescenceThicknessMap.isTexture &&
          (n.iridescenceThicknessMap =
            this.iridescenceThicknessMap.toJSON(e).uuid),
        this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 &&
          (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap &&
          this.anisotropyMap.isTexture &&
          (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(e).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(e).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(e).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(e).uuid),
          this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapRotation !== void 0 &&
          (n.envMapRotation = this.envMapRotation.toArray()),
        this.envMapIntensity !== void 0 &&
          (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        this.attenuationDistance !== void 0 &&
          (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.sizeAttenuation !== void 0 &&
          (n.sizeAttenuation = this.sizeAttenuation),
        Array.isArray(this.clippingPlanes) &&
          this.clippingPlanes.length > 0 &&
          (n.clippingPlanes = this.clippingPlanes.map((e) => e.toJSON())),
        this.rotation !== void 0 && (n.rotation = this.rotation),
        this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking),
        this.linewidth !== void 0 && (n.linewidth = this.linewidth),
        this.linecap !== void 0 && (n.linecap = this.linecap),
        this.linejoin !== void 0 && (n.linejoin = this.linejoin),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.wireframe !== void 0 && (n.wireframe = this.wireframe),
        this.wireframeLinewidth !== void 0 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== void 0 &&
          (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== void 0 &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading !== void 0 && (n.flatShading = this.flatShading),
        this.fog !== void 0 && (n.fog = this.fog),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData));
      function r(e) {
        let t = [];
        for (let n in e) {
          let r = e[n];
          (delete r.metadata, t.push(r));
        }
        return t;
      }
      if (t) {
        let t = r(e.textures),
          i = r(e.images);
        (t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i));
      }
      return n;
    }
    fromJSON(e, t) {
      if (
        (e.uuid !== void 0 && (this.uuid = e.uuid),
        e.name !== void 0 && (this.name = e.name),
        e.color !== void 0 &&
          this.color !== void 0 &&
          this.color.setHex(e.color),
        e.roughness !== void 0 && (this.roughness = e.roughness),
        e.metalness !== void 0 && (this.metalness = e.metalness),
        e.sheen !== void 0 && (this.sheen = e.sheen),
        e.sheenColor !== void 0 &&
          (this.sheenColor = new P().setHex(e.sheenColor)),
        e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness),
        e.emissive !== void 0 &&
          this.emissive !== void 0 &&
          this.emissive.setHex(e.emissive),
        e.specular !== void 0 &&
          this.specular !== void 0 &&
          this.specular.setHex(e.specular),
        e.specularIntensity !== void 0 &&
          (this.specularIntensity = e.specularIntensity),
        e.specularColor !== void 0 &&
          this.specularColor !== void 0 &&
          this.specularColor.setHex(e.specularColor),
        e.shininess !== void 0 && (this.shininess = e.shininess),
        e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat),
        e.clearcoatRoughness !== void 0 &&
          (this.clearcoatRoughness = e.clearcoatRoughness),
        e.dispersion !== void 0 && (this.dispersion = e.dispersion),
        e.retroreflectivity !== void 0 &&
          (this.retroreflectivity = e.retroreflectivity),
        e.iridescence !== void 0 && (this.iridescence = e.iridescence),
        e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR),
        e.iridescenceThicknessRange !== void 0 &&
          (this.iridescenceThicknessRange = e.iridescenceThicknessRange),
        e.transmission !== void 0 && (this.transmission = e.transmission),
        e.thickness !== void 0 && (this.thickness = e.thickness),
        e.attenuationDistance !== void 0 &&
          (this.attenuationDistance = e.attenuationDistance),
        e.attenuationColor !== void 0 &&
          this.attenuationColor !== void 0 &&
          this.attenuationColor.setHex(e.attenuationColor),
        e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy),
        e.anisotropyRotation !== void 0 &&
          (this.anisotropyRotation = e.anisotropyRotation),
        e.fog !== void 0 && (this.fog = e.fog),
        e.flatShading !== void 0 && (this.flatShading = e.flatShading),
        e.blending !== void 0 && (this.blending = e.blending),
        e.combine !== void 0 && (this.combine = e.combine),
        e.side !== void 0 && (this.side = e.side),
        e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide),
        e.opacity !== void 0 && (this.opacity = e.opacity),
        e.transparent !== void 0 && (this.transparent = e.transparent),
        e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest),
        e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash),
        e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc),
        e.depthTest !== void 0 && (this.depthTest = e.depthTest),
        e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite),
        e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite),
        e.clippingPlanes !== void 0 &&
          (this.clippingPlanes = e.clippingPlanes.map((e) =>
            new pi().fromJSON(e),
          )),
        e.clipIntersection !== void 0 &&
          (this.clipIntersection = e.clipIntersection),
        e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows),
        e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking),
        e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc),
        e.blendDst !== void 0 && (this.blendDst = e.blendDst),
        e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation),
        e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha),
        e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha),
        e.blendEquationAlpha !== void 0 &&
          (this.blendEquationAlpha = e.blendEquationAlpha),
        e.blendColor !== void 0 &&
          this.blendColor !== void 0 &&
          this.blendColor.setHex(e.blendColor),
        e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha),
        e.stencilWriteMask !== void 0 &&
          (this.stencilWriteMask = e.stencilWriteMask),
        e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc),
        e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef),
        e.stencilFuncMask !== void 0 &&
          (this.stencilFuncMask = e.stencilFuncMask),
        e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail),
        e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail),
        e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass),
        e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite),
        e.wireframe !== void 0 && (this.wireframe = e.wireframe),
        e.wireframeLinewidth !== void 0 &&
          (this.wireframeLinewidth = e.wireframeLinewidth),
        e.wireframeLinecap !== void 0 &&
          (this.wireframeLinecap = e.wireframeLinecap),
        e.wireframeLinejoin !== void 0 &&
          (this.wireframeLinejoin = e.wireframeLinejoin),
        e.rotation !== void 0 && (this.rotation = e.rotation),
        e.linewidth !== void 0 && (this.linewidth = e.linewidth),
        e.linecap !== void 0 && (this.linecap = e.linecap),
        e.linejoin !== void 0 && (this.linejoin = e.linejoin),
        e.dashSize !== void 0 && (this.dashSize = e.dashSize),
        e.gapSize !== void 0 && (this.gapSize = e.gapSize),
        e.scale !== void 0 && (this.scale = e.scale),
        e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset),
        e.polygonOffsetFactor !== void 0 &&
          (this.polygonOffsetFactor = e.polygonOffsetFactor),
        e.polygonOffsetUnits !== void 0 &&
          (this.polygonOffsetUnits = e.polygonOffsetUnits),
        e.dithering !== void 0 && (this.dithering = e.dithering),
        e.alphaToCoverage !== void 0 &&
          (this.alphaToCoverage = e.alphaToCoverage),
        e.premultipliedAlpha !== void 0 &&
          (this.premultipliedAlpha = e.premultipliedAlpha),
        e.forceSinglePass !== void 0 &&
          (this.forceSinglePass = e.forceSinglePass),
        e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride),
        e.visible !== void 0 && (this.visible = e.visible),
        e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped),
        e.userData !== void 0 && (this.userData = e.userData),
        e.vertexColors !== void 0 &&
          (this.vertexColors =
            typeof e.vertexColors == `number`
              ? e.vertexColors > 0
              : e.vertexColors),
        e.size !== void 0 && (this.size = e.size),
        e.sizeAttenuation !== void 0 &&
          (this.sizeAttenuation = e.sizeAttenuation),
        e.map !== void 0 && (this.map = t[e.map] || null),
        e.matcap !== void 0 && (this.matcap = t[e.matcap] || null),
        e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null),
        e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null),
        e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale),
        e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null),
        e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType),
        e.normalScale !== void 0)
      ) {
        let t = e.normalScale;
        (Array.isArray(t) === !1 && (t = [t, t]),
          (this.normalScale = new j().fromArray(t)));
      }
      return (
        e.displacementMap !== void 0 &&
          (this.displacementMap = t[e.displacementMap] || null),
        e.displacementScale !== void 0 &&
          (this.displacementScale = e.displacementScale),
        e.displacementBias !== void 0 &&
          (this.displacementBias = e.displacementBias),
        e.roughnessMap !== void 0 &&
          (this.roughnessMap = t[e.roughnessMap] || null),
        e.metalnessMap !== void 0 &&
          (this.metalnessMap = t[e.metalnessMap] || null),
        e.emissiveMap !== void 0 &&
          (this.emissiveMap = t[e.emissiveMap] || null),
        e.emissiveIntensity !== void 0 &&
          (this.emissiveIntensity = e.emissiveIntensity),
        e.specularMap !== void 0 &&
          (this.specularMap = t[e.specularMap] || null),
        e.specularIntensityMap !== void 0 &&
          (this.specularIntensityMap = t[e.specularIntensityMap] || null),
        e.specularColorMap !== void 0 &&
          (this.specularColorMap = t[e.specularColorMap] || null),
        e.envMap !== void 0 && (this.envMap = t[e.envMap] || null),
        e.envMapRotation !== void 0 &&
          this.envMapRotation.fromArray(e.envMapRotation),
        e.envMapIntensity !== void 0 &&
          (this.envMapIntensity = e.envMapIntensity),
        e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity),
        e.refractionRatio !== void 0 &&
          (this.refractionRatio = e.refractionRatio),
        e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null),
        e.lightMapIntensity !== void 0 &&
          (this.lightMapIntensity = e.lightMapIntensity),
        e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null),
        e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity),
        e.gradientMap !== void 0 &&
          (this.gradientMap = t[e.gradientMap] || null),
        e.clearcoatMap !== void 0 &&
          (this.clearcoatMap = t[e.clearcoatMap] || null),
        e.clearcoatRoughnessMap !== void 0 &&
          (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null),
        e.clearcoatNormalMap !== void 0 &&
          (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null),
        e.clearcoatNormalScale !== void 0 &&
          (this.clearcoatNormalScale = new j().fromArray(
            e.clearcoatNormalScale,
          )),
        e.iridescenceMap !== void 0 &&
          (this.iridescenceMap = t[e.iridescenceMap] || null),
        e.iridescenceThicknessMap !== void 0 &&
          (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null),
        e.transmissionMap !== void 0 &&
          (this.transmissionMap = t[e.transmissionMap] || null),
        e.thicknessMap !== void 0 &&
          (this.thicknessMap = t[e.thicknessMap] || null),
        e.anisotropyMap !== void 0 &&
          (this.anisotropyMap = t[e.anisotropyMap] || null),
        e.sheenColorMap !== void 0 &&
          (this.sheenColorMap = t[e.sheenColorMap] || null),
        e.sheenRoughnessMap !== void 0 &&
          (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      ((this.name = e.name),
        (this.blending = e.blending),
        (this.side = e.side),
        (this.vertexColors = e.vertexColors),
        (this.opacity = e.opacity),
        (this.transparent = e.transparent),
        (this.blendSrc = e.blendSrc),
        (this.blendDst = e.blendDst),
        (this.blendEquation = e.blendEquation),
        (this.blendSrcAlpha = e.blendSrcAlpha),
        (this.blendDstAlpha = e.blendDstAlpha),
        (this.blendEquationAlpha = e.blendEquationAlpha),
        this.blendColor.copy(e.blendColor),
        (this.blendAlpha = e.blendAlpha),
        (this.depthFunc = e.depthFunc),
        (this.depthTest = e.depthTest),
        (this.depthWrite = e.depthWrite),
        (this.stencilWriteMask = e.stencilWriteMask),
        (this.stencilFunc = e.stencilFunc),
        (this.stencilRef = e.stencilRef),
        (this.stencilFuncMask = e.stencilFuncMask),
        (this.stencilFail = e.stencilFail),
        (this.stencilZFail = e.stencilZFail),
        (this.stencilZPass = e.stencilZPass),
        (this.stencilWrite = e.stencilWrite));
      let t = e.clippingPlanes,
        n = null;
      if (t !== null) {
        let e = t.length;
        n = Array(e);
        for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = e.clipIntersection),
        (this.clipShadows = e.clipShadows),
        (this.shadowSide = e.shadowSide),
        (this.colorWrite = e.colorWrite),
        (this.precision = e.precision),
        (this.polygonOffset = e.polygonOffset),
        (this.polygonOffsetFactor = e.polygonOffsetFactor),
        (this.polygonOffsetUnits = e.polygonOffsetUnits),
        (this.dithering = e.dithering),
        (this.alphaTest = e.alphaTest),
        (this.alphaHash = e.alphaHash),
        (this.alphaToCoverage = e.alphaToCoverage),
        (this.premultipliedAlpha = e.premultipliedAlpha),
        (this.forceSinglePass = e.forceSinglePass),
        (this.allowOverride = e.allowOverride),
        (this.visible = e.visible),
        (this.toneMapped = e.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
  },
  gi = class extends hi {
    constructor(e) {
      (super(),
        (this.isSpriteMaterial = !0),
        (this.type = `SpriteMaterial`),
        (this.color = new P(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.rotation = 0),
        (this.sizeAttenuation = !0),
        (this.transparent = !0),
        (this.fog = !0),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.rotation = e.rotation),
        (this.sizeAttenuation = e.sizeAttenuation),
        (this.fog = e.fog),
        this
      );
    }
  },
  _i,
  vi = new M(),
  yi = new M(),
  bi = new M(),
  xi = new j(),
  Si = new j(),
  Ci = new N(),
  wi = new M(),
  Ti = new M(),
  Ei = new M(),
  Di = new j(),
  Oi = new j(),
  ki = new j(),
  Ai = class extends ir {
    constructor(e = new gi()) {
      if (
        (super(), (this.isSprite = !0), (this.type = `Sprite`), _i === void 0)
      ) {
        _i = new oi();
        let e = new si(
          new Float32Array([
            -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5,
            0.5, 0, 0, 1,
          ]),
          5,
        );
        (_i.setIndex([0, 1, 2, 0, 2, 3]),
          _i.setAttribute(`position`, new li(e, 3, 0, !1)),
          _i.setAttribute(`uv`, new li(e, 2, 3, !1)));
      }
      ((this.geometry = _i),
        (this.material = e),
        (this.center = new j(0.5, 0.5)),
        (this.count = 1));
    }
    intersectsFrustum(e) {
      return e.intersectsSprite(this);
    }
    raycast(e, t) {
      (e.camera === null &&
        kt(
          `Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`,
        ),
        yi.setFromMatrixScale(this.matrixWorld),
        Ci.copy(e.camera.matrixWorld),
        this.modelViewMatrix.multiplyMatrices(
          e.camera.matrixWorldInverse,
          this.matrixWorld,
        ),
        bi.setFromMatrixPosition(this.modelViewMatrix),
        e.camera.isPerspectiveCamera &&
          this.material.sizeAttenuation === !1 &&
          yi.multiplyScalar(-bi.z));
      let n = this.material.rotation,
        r,
        i;
      n !== 0 && ((i = Math.cos(n)), (r = Math.sin(n)));
      let a = this.center;
      (ji(wi.set(-0.5, -0.5, 0), bi, a, yi, r, i),
        ji(Ti.set(0.5, -0.5, 0), bi, a, yi, r, i),
        ji(Ei.set(0.5, 0.5, 0), bi, a, yi, r, i),
        Di.set(0, 0),
        Oi.set(1, 0),
        ki.set(1, 1));
      let o = e.ray.intersectTriangle(wi, Ti, Ei, !1, vi);
      if (
        o === null &&
        (ji(Ti.set(-0.5, 0.5, 0), bi, a, yi, r, i),
        Oi.set(0, 1),
        (o = e.ray.intersectTriangle(wi, Ei, Ti, !1, vi)),
        o === null)
      )
        return;
      let s = e.ray.origin.distanceTo(vi);
      s < e.near ||
        s > e.far ||
        t.push({
          distance: s,
          point: vi.clone(),
          uv: Dr.getInterpolation(vi, wi, Ti, Ei, Di, Oi, ki, new j()),
          face: null,
          object: this,
        });
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        e.center !== void 0 && this.center.copy(e.center),
        (this.material = e.material),
        this
      );
    }
  };
function ji(e, t, n, r, i, a) {
  (xi.subVectors(e, n).addScalar(0.5).multiply(r),
    i === void 0
      ? Si.copy(xi)
      : ((Si.x = a * xi.x - i * xi.y), (Si.y = i * xi.x + a * xi.y)),
    e.copy(t),
    (e.x += Si.x),
    (e.y += Si.y),
    e.applyMatrix4(Ci));
}
var Mi = new M(),
  Ni = new M(),
  Pi = new M(),
  Fi = new M(),
  Ii = class {
    constructor(e = new M(), t = new M(0, 0, -1)) {
      ((this.origin = e), (this.direction = t));
    }
    set(e, t) {
      return (this.origin.copy(e), this.direction.copy(t), this);
    }
    copy(e) {
      return (
        this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
      );
    }
    at(e, t) {
      return t.copy(this.origin).addScaledVector(this.direction, e);
    }
    lookAt(e) {
      return (this.direction.copy(e).sub(this.origin).normalize(), this);
    }
    recast(e) {
      return (this.origin.copy(this.at(e, Mi)), this);
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      let n = t.dot(this.direction);
      return n < 0
        ? t.copy(this.origin)
        : t.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      let t = Mi.subVectors(e, this.origin).dot(this.direction);
      return t < 0
        ? this.origin.distanceToSquared(e)
        : (Mi.copy(this.origin).addScaledVector(this.direction, t),
          Mi.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, r) {
      (Ni.copy(e).add(t).multiplyScalar(0.5),
        Pi.copy(t).sub(e).normalize(),
        Fi.copy(this.origin).sub(Ni));
      let i = e.distanceTo(t) * 0.5,
        a = -this.direction.dot(Pi),
        o = Fi.dot(this.direction),
        s = -Fi.dot(Pi),
        c = Fi.lengthSq(),
        l = Math.abs(1 - a * a),
        u,
        d,
        f,
        p;
      if (l > 0) {
        if (((u = a * s - o), (d = a * o - s), (p = i * l), u >= 0)) {
          if (d >= -p) {
            if (d <= p) {
              let e = 1 / l;
              ((u *= e),
                (d *= e),
                (f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c));
            } else
              ((d = i),
                (u = Math.max(0, -(a * d + o))),
                (f = -u * u + d * (d + 2 * s) + c));
          } else
            ((d = -i),
              (u = Math.max(0, -(a * d + o))),
              (f = -u * u + d * (d + 2 * s) + c));
        } else
          d <= -p
            ? ((u = Math.max(0, -(-a * i + o))),
              (d = u > 0 ? -i : Math.min(Math.max(-i, -s), i)),
              (f = -u * u + d * (d + 2 * s) + c))
            : d <= p
              ? ((u = 0),
                (d = Math.min(Math.max(-i, -s), i)),
                (f = d * (d + 2 * s) + c))
              : ((u = Math.max(0, -(a * i + o))),
                (d = u > 0 ? i : Math.min(Math.max(-i, -s), i)),
                (f = -u * u + d * (d + 2 * s) + c));
      } else
        ((d = a > 0 ? -i : i),
          (u = Math.max(0, -(a * d + o))),
          (f = -u * u + d * (d + 2 * s) + c));
      return (
        n && n.copy(this.origin).addScaledVector(this.direction, u),
        r && r.copy(Ni).addScaledVector(Pi, d),
        f
      );
    }
    intersectSphere(e, t) {
      if (e.radius < 0) return null;
      Mi.subVectors(e.center, this.origin);
      let n = Mi.dot(this.direction),
        r = Mi.dot(Mi) - n * n,
        i = e.radius * e.radius;
      if (r > i) return null;
      let a = Math.sqrt(i - r),
        o = n - a,
        s = n + a;
      return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
    }
    intersectsSphere(e) {
      return e.radius < 0
        ? !1
        : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      let t = e.normal.dot(this.direction);
      if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
      let n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      let n = this.distanceToPlane(e);
      return n === null ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      let t = e.distanceToPoint(this.origin);
      return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
      let n,
        r,
        i,
        a,
        o,
        s,
        c = 1 / this.direction.x,
        l = 1 / this.direction.y,
        u = 1 / this.direction.z,
        d = this.origin;
      return (
        c >= 0
          ? ((n = (e.min.x - d.x) * c), (r = (e.max.x - d.x) * c))
          : ((n = (e.max.x - d.x) * c), (r = (e.min.x - d.x) * c)),
        l >= 0
          ? ((i = (e.min.y - d.y) * l), (a = (e.max.y - d.y) * l))
          : ((i = (e.max.y - d.y) * l), (a = (e.min.y - d.y) * l)),
        n > a ||
        i > r ||
        ((i > n || isNaN(n)) && (n = i),
        (a < r || isNaN(r)) && (r = a),
        u >= 0
          ? ((o = (e.min.z - d.z) * u), (s = (e.max.z - d.z) * u))
          : ((o = (e.max.z - d.z) * u), (s = (e.min.z - d.z) * u)),
        n > s || o > r) ||
        ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0)
          ? null
          : this.at(n >= 0 ? n : r, t)
      );
    }
    intersectsBox(e) {
      return this.intersectBox(e, Mi) !== null;
    }
    intersectTriangle(e, t, n, r, i) {
      let a = this.origin,
        o = this.direction,
        s = o.x,
        c = o.y,
        l = o.z,
        u = e.x - a.x,
        d = e.y - a.y,
        f = e.z - a.z,
        p = t.x - a.x,
        m = t.y - a.y,
        h = t.z - a.z,
        g = n.x - a.x,
        _ = n.y - a.y,
        v = n.z - a.z,
        y = Math.abs(s),
        b = Math.abs(c),
        x = Math.abs(l),
        S,
        C,
        w,
        T,
        E,
        D,
        O,
        k,
        A,
        ee,
        te,
        ne;
      if (
        (y >= b && y >= x
          ? ((w = s),
            (D = u),
            (A = p),
            (ne = g),
            s >= 0
              ? ((S = c),
                (C = l),
                (T = d),
                (E = f),
                (O = m),
                (k = h),
                (ee = _),
                (te = v))
              : ((S = l),
                (C = c),
                (T = f),
                (E = d),
                (O = h),
                (k = m),
                (ee = v),
                (te = _)))
          : b >= x
            ? ((w = c),
              (D = d),
              (A = m),
              (ne = _),
              c >= 0
                ? ((S = l),
                  (C = s),
                  (T = f),
                  (E = u),
                  (O = h),
                  (k = p),
                  (ee = v),
                  (te = g))
                : ((S = s),
                  (C = l),
                  (T = u),
                  (E = f),
                  (O = p),
                  (k = h),
                  (ee = g),
                  (te = v)))
            : ((w = l),
              (D = f),
              (A = h),
              (ne = v),
              l >= 0
                ? ((S = s),
                  (C = c),
                  (T = u),
                  (E = d),
                  (O = p),
                  (k = m),
                  (ee = g),
                  (te = _))
                : ((S = c),
                  (C = s),
                  (T = d),
                  (E = u),
                  (O = m),
                  (k = p),
                  (ee = _),
                  (te = g))),
        w === 0)
      )
        return null;
      let re = S / w,
        ie = C / w,
        ae = 1 / w,
        oe = T - re * D,
        se = E - ie * D,
        ce = O - re * A,
        le = k - ie * A,
        ue = ee - re * ne,
        de = te - ie * ne,
        fe = ue * le - de * ce,
        pe = oe * de - se * ue,
        me = ce * se - le * oe;
      if (r) {
        if (fe < 0 || pe < 0 || me < 0) return null;
      } else if ((fe < 0 || pe < 0 || me < 0) && (fe > 0 || pe > 0 || me > 0))
        return null;
      let he = fe + pe + me;
      if (he === 0) return null;
      let ge = ae * (fe * D + pe * A + me * ne);
      return (he > 0 ? ge < 0 : ge > 0) ? null : this.at(ge / he, i);
    }
    applyMatrix4(e) {
      return (
        this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
      );
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  Li = class extends hi {
    constructor(e) {
      (super(),
        (this.isMeshBasicMaterial = !0),
        (this.type = `MeshBasicMaterial`),
        (this.color = new P(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new Vn()),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = `round`),
        (this.wireframeLinejoin = `round`),
        (this.fog = !0),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        this.envMapRotation.copy(e.envMapRotation),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.fog = e.fog),
        this
      );
    }
  },
  Ri = new N(),
  zi = new Ii(),
  Bi = new Qr(),
  Vi = new M(),
  Hi = new M(),
  Ui = new M(),
  Wi = new M(),
  Gi = new M(),
  Ki = new M(),
  qi = new M(),
  Ji = new M(),
  Yi = class extends ir {
    constructor(e = new oi(), t = new Li()) {
      (super(),
        (this.isMesh = !0),
        (this.type = `Mesh`),
        (this.geometry = e),
        (this.material = t),
        (this.morphTargetDictionary = void 0),
        (this.morphTargetInfluences = void 0),
        (this.count = 1),
        this.updateMorphTargets());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        e.morphTargetInfluences !== void 0 &&
          (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        e.morphTargetDictionary !== void 0 &&
          (this.morphTargetDictionary = Object.assign(
            {},
            e.morphTargetDictionary,
          )),
        (this.material = Array.isArray(e.material)
          ? e.material.slice()
          : e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes,
        t = Object.keys(e);
      if (t.length > 0) {
        let n = e[t[0]];
        if (n !== void 0) {
          ((this.morphTargetInfluences = []),
            (this.morphTargetDictionary = {}));
          for (let e = 0, t = n.length; e < t; e++) {
            let t = n[e].name || String(e);
            (this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[t] = e));
          }
        }
      }
    }
    getVertexPosition(e, t) {
      let n = this.geometry,
        r = n.attributes.position,
        i = n.morphAttributes.position,
        a = n.morphTargetsRelative;
      t.fromBufferAttribute(r, e);
      let o = this.morphTargetInfluences;
      if (i && o) {
        Ki.set(0, 0, 0);
        for (let n = 0, r = i.length; n < r; n++) {
          let r = o[n],
            s = i[n];
          r !== 0 &&
            (Gi.fromBufferAttribute(s, e),
            a ? Ki.addScaledVector(Gi, r) : Ki.addScaledVector(Gi.sub(t), r));
        }
        t.add(Ki);
      }
      return t;
    }
    intersectsFrustum(e) {
      return e.intersectsObject(this);
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.material,
        i = this.matrixWorld;
      r !== void 0 &&
        (n.boundingSphere === null && n.computeBoundingSphere(),
        Bi.copy(n.boundingSphere),
        Bi.applyMatrix4(i),
        zi.copy(e.ray).recast(e.near),
        !(
          Bi.containsPoint(zi.origin) === !1 &&
          (zi.intersectSphere(Bi, Vi) === null ||
            zi.origin.distanceToSquared(Vi) > (e.far - e.near) ** 2)
        ) &&
          (Ri.copy(i).invert(),
          zi.copy(e.ray).applyMatrix4(Ri),
          (n.boundingBox === null || zi.intersectsBox(n.boundingBox) !== !1) &&
            this._computeIntersections(e, t, zi)));
    }
    _computeIntersections(e, t, n) {
      let r,
        i = this.geometry,
        a = this.material,
        o = i.index,
        s = i.attributes.position,
        c = i.attributes.uv,
        l = i.attributes.uv1,
        u = i.attributes.normal,
        d = i.groups,
        f = i.drawRange;
      if (o !== null) {
        if (Array.isArray(a))
          for (let i = 0, s = d.length; i < s; i++) {
            let s = d[i],
              p = a[s.materialIndex],
              m = Math.max(s.start, f.start),
              h = Math.min(
                o.count,
                Math.min(s.start + s.count, f.start + f.count),
              );
            for (let i = m, a = h; i < a; i += 3) {
              let a = o.getX(i),
                d = o.getX(i + 1),
                f = o.getX(i + 2);
              ((r = Zi(this, p, e, n, c, l, u, a, d, f)),
                r &&
                  ((r.faceIndex = Math.floor(i / 3)),
                  (r.face.materialIndex = s.materialIndex),
                  t.push(r)));
            }
          }
        else {
          let i = Math.max(0, f.start),
            s = Math.min(o.count, f.start + f.count);
          for (let d = i, f = s; d < f; d += 3) {
            let i = o.getX(d),
              s = o.getX(d + 1),
              f = o.getX(d + 2);
            ((r = Zi(this, a, e, n, c, l, u, i, s, f)),
              r && ((r.faceIndex = Math.floor(d / 3)), t.push(r)));
          }
        }
      } else if (s !== void 0) {
        if (Array.isArray(a))
          for (let i = 0, o = d.length; i < o; i++) {
            let o = d[i],
              p = a[o.materialIndex],
              m = Math.max(o.start, f.start),
              h = Math.min(
                s.count,
                Math.min(o.start + o.count, f.start + f.count),
              );
            for (let i = m, a = h; i < a; i += 3) {
              let a = i,
                s = i + 1,
                d = i + 2;
              ((r = Zi(this, p, e, n, c, l, u, a, s, d)),
                r &&
                  ((r.faceIndex = Math.floor(i / 3)),
                  (r.face.materialIndex = o.materialIndex),
                  t.push(r)));
            }
          }
        else {
          let i = Math.max(0, f.start),
            o = Math.min(s.count, f.start + f.count);
          for (let s = i, d = o; s < d; s += 3) {
            let i = s,
              o = s + 1,
              d = s + 2;
            ((r = Zi(this, a, e, n, c, l, u, i, o, d)),
              r && ((r.faceIndex = Math.floor(s / 3)), t.push(r)));
          }
        }
      }
    }
  };
function Xi(e, t, n, r, i, a, o, s) {
  let c;
  if (
    ((c =
      t.side === 1
        ? r.intersectTriangle(o, a, i, !0, s)
        : r.intersectTriangle(i, a, o, t.side === 0, s)),
    c === null)
  )
    return null;
  (Ji.copy(s), Ji.applyMatrix4(e.matrixWorld));
  let l = n.ray.origin.distanceTo(Ji);
  return l < n.near || l > n.far
    ? null
    : { distance: l, point: Ji.clone(), object: e };
}
function Zi(e, t, n, r, i, a, o, s, c, l) {
  (e.getVertexPosition(s, Hi),
    e.getVertexPosition(c, Ui),
    e.getVertexPosition(l, Wi));
  let u = Xi(e, t, n, r, Hi, Ui, Wi, qi);
  if (u) {
    let e = new M();
    (Dr.getBarycoord(qi, Hi, Ui, Wi, e),
      i && (u.uv = Dr.getInterpolatedAttribute(i, s, c, l, e, new j())),
      a && (u.uv1 = Dr.getInterpolatedAttribute(a, s, c, l, e, new j())),
      o &&
        ((u.normal = Dr.getInterpolatedAttribute(o, s, c, l, e, new M())),
        u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1)));
    let t = { a: s, b: c, c: l, normal: new M(), materialIndex: 0 };
    (Dr.getNormal(Hi, Ui, Wi, t.normal), (u.face = t), (u.barycoord = e));
  }
  return u;
}
var Qi = new Dn(),
  $i = new Dn(),
  ea = new Dn(),
  ta = new Dn(),
  na = new N(),
  ra = new M(),
  ia = new Qr(),
  aa = new N(),
  oa = new Ii(),
  sa = class extends Yi {
    constructor(e, t) {
      (super(e, t),
        (this.isSkinnedMesh = !0),
        (this.type = `SkinnedMesh`),
        (this.bindMode = y),
        (this.bindMatrix = new N()),
        (this.bindMatrixInverse = new N()),
        (this.boundingBox = null),
        (this.boundingSphere = null));
    }
    computeBoundingBox() {
      let e = this.geometry;
      (this.boundingBox === null && (this.boundingBox = new Or()),
        this.boundingBox.makeEmpty());
      let t = e.getAttribute(`position`);
      for (let e = 0; e < t.count; e++)
        (this.getVertexPosition(e, ra), this.boundingBox.expandByPoint(ra));
    }
    computeBoundingSphere() {
      let e = this.geometry;
      (this.boundingSphere === null && (this.boundingSphere = new Qr()),
        this.boundingSphere.makeEmpty());
      let t = e.getAttribute(`position`);
      for (let e = 0; e < t.count; e++)
        (this.getVertexPosition(e, ra), this.boundingSphere.expandByPoint(ra));
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.bindMode = e.bindMode),
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        (this.skeleton = e.skeleton),
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null &&
          (this.boundingSphere = e.boundingSphere.clone()),
        this
      );
    }
    raycast(e, t) {
      let n = this.material,
        r = this.matrixWorld;
      n !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        ia.copy(this.boundingSphere),
        ia.applyMatrix4(r),
        e.ray.intersectsSphere(ia) !== !1 &&
          (aa.copy(r).invert(),
          oa.copy(e.ray).applyMatrix4(aa),
          (this.boundingBox === null ||
            oa.intersectsBox(this.boundingBox) !== !1) &&
            this._computeIntersections(e, t, oa)));
    }
    getVertexPosition(e, t) {
      return (super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t);
    }
    bind(e, t) {
      ((this.skeleton = e),
        t === void 0 &&
          (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          (t = this.matrixWorld)),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert());
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      let e = new Dn(),
        t = this.geometry.attributes.skinWeight;
      for (let n = 0, r = t.count; n < r; n++) {
        e.fromBufferAttribute(t, n);
        let r = 1 / e.manhattanLength();
        (r === 1 / 0 ? e.set(1, 0, 0, 0) : e.multiplyScalar(r),
          t.setXYZW(n, e.x, e.y, e.z, e.w));
      }
    }
    updateMatrixWorld(e) {
      (super.updateMatrixWorld(e),
        this.bindMode === `attached`
          ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
          : this.bindMode === `detached`
            ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
            : Ot(`SkinnedMesh: Unrecognized bindMode: ` + this.bindMode));
    }
    applyBoneTransform(e, t) {
      let n = this.skeleton,
        r = this.geometry;
      ($i.fromBufferAttribute(r.attributes.skinIndex, e),
        ea.fromBufferAttribute(r.attributes.skinWeight, e),
        t.isVector4
          ? (Qi.copy(t), t.set(0, 0, 0, 0))
          : (Qi.set(...t, 1), t.set(0, 0, 0)),
        Qi.applyMatrix4(this.bindMatrix));
      for (let e = 0; e < 4; e++) {
        let r = ea.getComponent(e);
        if (r !== 0) {
          let i = $i.getComponent(e);
          (na.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]),
            t.addScaledVector(ta.copy(Qi).applyMatrix4(na), r));
        }
      }
      return (
        t.isVector4 && (t.w = Qi.w),
        t.applyMatrix4(this.bindMatrixInverse)
      );
    }
  },
  ca = class extends ir {
    constructor() {
      (super(), (this.isBone = !0), (this.type = `Bone`));
    }
  },
  la = class extends En {
    constructor(e = null, t = 1, n = 1, r, i, a, o, s, c = w, l = w, u, d) {
      (super(null, a, o, s, c, l, r, i, u, d),
        (this.isDataTexture = !0),
        (this.image = { data: e, width: t, height: n }),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1));
    }
  },
  ua = new N(),
  da = new N(),
  fa = class e {
    constructor(e = [], t = []) {
      ((this.uuid = Rt()),
        (this.bones = e.slice(0)),
        (this.boneInverses = t),
        (this.boneMatrices = null),
        (this.boneTexture = null),
        this.init());
    }
    init() {
      let e = this.bones,
        t = this.boneInverses;
      if (
        ((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0)
      )
        this.calculateInverses();
      else if (e.length !== t.length) {
        (Ot(
          `Skeleton: Number of inverse bone matrices does not match amount of bones.`,
        ),
          (this.boneInverses = []));
        for (let e = 0, t = this.bones.length; e < t; e++)
          this.boneInverses.push(new N());
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = new N();
        (this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(),
          this.boneInverses.push(t));
      }
    }
    pose() {
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = this.bones[e];
        t && t.matrixWorld.copy(this.boneInverses[e]).invert();
      }
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = this.bones[e];
        t &&
          (t.parent && t.parent.isBone
            ? (t.matrix.copy(t.parent.matrixWorld).invert(),
              t.matrix.multiply(t.matrixWorld))
            : t.matrix.copy(t.matrixWorld),
          t.matrix.decompose(t.position, t.quaternion, t.scale));
      }
    }
    update() {
      let e = this.bones,
        t = this.boneInverses,
        n = this.boneMatrices,
        r = this.boneTexture;
      for (let r = 0, i = e.length; r < i; r++) {
        let i = e[r] ? e[r].matrixWorld : da;
        (ua.multiplyMatrices(i, t[r]), ua.toArray(n, r * 16));
      }
      r !== null && (r.needsUpdate = !0);
    }
    clone() {
      return new e(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let e = Math.sqrt(this.bones.length * 4);
      ((e = Math.ceil(e / 4) * 4), (e = Math.max(e, 4)));
      let t = new Float32Array(e * e * 4);
      t.set(this.boneMatrices);
      let n = new la(t, e, e, me, ae);
      return (
        (n.needsUpdate = !0),
        (this.boneMatrices = t),
        (this.boneTexture = n),
        this
      );
    }
    getBoneByName(e) {
      for (let t = 0, n = this.bones.length; t < n; t++) {
        let n = this.bones[t];
        if (n.name === e) return n;
      }
    }
    dispose() {
      this.boneTexture !== null &&
        (this.boneTexture.dispose(), (this.boneTexture = null));
    }
    fromJSON(e, t) {
      this.uuid = e.uuid;
      for (let n = 0, r = e.bones.length; n < r; n++) {
        let r = e.bones[n],
          i = t[r];
        (i === void 0 &&
          (Ot(`Skeleton: No bone found with UUID:`, r), (i = new ca())),
          this.bones.push(i),
          this.boneInverses.push(new N().fromArray(e.boneInverses[n])));
      }
      return (this.init(), this);
    }
    toJSON() {
      let e = {
        metadata: {
          version: 4.7,
          type: `Skeleton`,
          generator: `Skeleton.toJSON`,
        },
        bones: [],
        boneInverses: [],
      };
      e.uuid = this.uuid;
      let t = this.bones,
        n = this.boneInverses;
      for (let r = 0, i = t.length; r < i; r++) {
        let i = t[r];
        e.bones.push(i.uuid);
        let a = n[r];
        e.boneInverses.push(a.toArray());
      }
      return e;
    }
  },
  pa = class extends Kr {
    constructor(e, t, n, r = 1) {
      (super(e, t, n),
        (this.isInstancedBufferAttribute = !0),
        (this.meshPerAttribute = r));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.meshPerAttribute = e.meshPerAttribute),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.meshPerAttribute = this.meshPerAttribute),
        (e.isInstancedBufferAttribute = !0),
        e
      );
    }
  },
  ma = new N(),
  ha = new N(),
  ga = [],
  _a = new Or(),
  va = new N(),
  ya = new Yi(),
  ba = new Qr(),
  xa = class extends Yi {
    constructor(e, t, n) {
      (super(e, t),
        (this.isInstancedMesh = !0),
        (this.instanceMatrix = new pa(new Float32Array(n * 16), 16)),
        (this.instanceColor = null),
        (this.morphTexture = null),
        (this.count = n),
        (this.boundingBox = null),
        (this.boundingSphere = null));
      for (let e = 0; e < n; e++) this.setMatrixAt(e, va);
    }
    computeBoundingBox() {
      let e = this.geometry,
        t = this.count;
      (this.boundingBox === null && (this.boundingBox = new Or()),
        e.boundingBox === null && e.computeBoundingBox(),
        this.boundingBox.makeEmpty());
      for (let n = 0; n < t; n++)
        (this.getMatrixAt(n, ma),
          _a.copy(e.boundingBox).applyMatrix4(ma),
          this.boundingBox.union(_a));
    }
    computeBoundingSphere() {
      let e = this.geometry,
        t = this.count;
      (this.boundingSphere === null && (this.boundingSphere = new Qr()),
        e.boundingSphere === null && e.computeBoundingSphere(),
        this.boundingSphere.makeEmpty());
      for (let n = 0; n < t; n++)
        (this.getMatrixAt(n, ma),
          ba.copy(e.boundingSphere).applyMatrix4(ma),
          this.boundingSphere.union(ba));
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.instanceMatrix.copy(e.instanceMatrix),
        e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
        e.instanceColor !== null &&
          (this.instanceColor = e.instanceColor.clone()),
        (this.count = e.count),
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null &&
          (this.boundingSphere = e.boundingSphere.clone()),
        this
      );
    }
    getColorAt(e, t) {
      return this.instanceColor === null
        ? t.setRGB(1, 1, 1)
        : t.fromArray(this.instanceColor.array, e * 3);
    }
    getMatrixAt(e, t) {
      return t.fromArray(this.instanceMatrix.array, e * 16);
    }
    getMorphAt(e, t) {
      let n = t.morphTargetInfluences,
        r = this.morphTexture.source.data.data,
        i = e * (n.length + 1) + 1;
      for (let e = 0; e < n.length; e++) n[e] = r[i + e];
    }
    raycast(e, t) {
      let n = this.matrixWorld,
        r = this.count;
      if (
        ((ya.geometry = this.geometry),
        (ya.material = this.material),
        ya.material !== void 0 &&
          (this.boundingSphere === null && this.computeBoundingSphere(),
          ba.copy(this.boundingSphere),
          ba.applyMatrix4(n),
          e.ray.intersectsSphere(ba) !== !1))
      )
        for (let i = 0; i < r; i++) {
          (this.getMatrixAt(i, ma),
            ha.multiplyMatrices(n, ma),
            (ya.matrixWorld = ha),
            ya.raycast(e, ga));
          for (let e = 0, n = ga.length; e < n; e++) {
            let n = ga[e];
            ((n.instanceId = i), (n.object = this), t.push(n));
          }
          ga.length = 0;
        }
    }
    setColorAt(e, t) {
      return (
        this.instanceColor === null &&
          (this.instanceColor = new pa(
            new Float32Array(this.instanceMatrix.count * 3).fill(1),
            3,
          )),
        t.toArray(this.instanceColor.array, e * 3),
        this
      );
    }
    setMatrixAt(e, t) {
      return (t.toArray(this.instanceMatrix.array, e * 16), this);
    }
    setMorphAt(e, t) {
      let n = t.morphTargetInfluences,
        r = n.length + 1;
      this.morphTexture === null &&
        (this.morphTexture = new la(
          new Float32Array(r * this.count),
          r,
          this.count,
          _e,
          ae,
        ));
      let i = this.morphTexture.source.data.data,
        a = 0;
      for (let e = 0; e < n.length; e++) a += n[e];
      let o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
        s = r * e;
      return ((i[s] = o), i.set(n, s + 1), this);
    }
    updateMorphTargets() {}
    dispose() {
      (super.dispose(),
        this.morphTexture !== null &&
          (this.morphTexture.dispose(), (this.morphTexture = null)));
    }
  },
  Sa = new Qr(),
  Ca = new j(0.5, 0.5),
  wa = new M(),
  Ta = class {
    constructor(
      e = new pi(),
      t = new pi(),
      n = new pi(),
      r = new pi(),
      i = new pi(),
      a = new pi(),
    ) {
      this.planes = [e, t, n, r, i, a];
    }
    set(e, t, n, r, i, a) {
      let o = this.planes;
      return (
        o[0].copy(e),
        o[1].copy(t),
        o[2].copy(n),
        o[3].copy(r),
        o[4].copy(i),
        o[5].copy(a),
        this
      );
    }
    copy(e) {
      let t = this.planes;
      for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
      return this;
    }
    setFromProjectionMatrix(e, t = bt, n = !1) {
      let r = this.planes,
        i = e.elements,
        a = i[0],
        o = i[1],
        s = i[2],
        c = i[3],
        l = i[4],
        u = i[5],
        d = i[6],
        f = i[7],
        p = i[8],
        m = i[9],
        h = i[10],
        g = i[11],
        _ = i[12],
        v = i[13],
        y = i[14],
        b = i[15];
      if (
        (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(),
        r[1].setComponents(c + a, f + l, g + p, b + _).normalize(),
        r[2].setComponents(c + o, f + u, g + m, b + v).normalize(),
        r[3].setComponents(c - o, f - u, g - m, b - v).normalize(),
        n)
      )
        (r[4].setComponents(s, d, h, y).normalize(),
          r[5].setComponents(c - s, f - d, g - h, b - y).normalize());
      else if (
        (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3)
      )
        r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
      else if (t === 2001) r[5].setComponents(s, d, h, y).normalize();
      else
        throw Error(
          `THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ` +
            t,
        );
      return this;
    }
    intersectsObject(e) {
      if (e.boundingSphere !== void 0)
        (e.boundingSphere === null && e.computeBoundingSphere(),
          Sa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld));
      else {
        let t = e.geometry;
        (t.boundingSphere === null && t.computeBoundingSphere(),
          Sa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld));
      }
      return this.intersectsSphere(Sa);
    }
    intersectsSprite(e) {
      return (
        Sa.center.set(0, 0, 0),
        (Sa.radius = 0.7071067811865476 + Ca.distanceTo(e.center)),
        Sa.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(Sa)
      );
    }
    intersectsSphere(e) {
      let t = this.planes,
        n = e.center,
        r = -e.radius;
      for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
      return !0;
    }
    intersectsBox(e) {
      let t = this.planes;
      for (let n = 0; n < 6; n++) {
        let r = t[n];
        if (
          ((wa.x = r.normal.x > 0 ? e.max.x : e.min.x),
          (wa.y = r.normal.y > 0 ? e.max.y : e.min.y),
          (wa.z = r.normal.z > 0 ? e.max.z : e.min.z),
          r.distanceToPoint(wa) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(e) {
      let t = this.planes;
      for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  Ea = class extends hi {
    constructor(e) {
      (super(),
        (this.isLineBasicMaterial = !0),
        (this.type = `LineBasicMaterial`),
        (this.color = new P(16777215)),
        (this.map = null),
        (this.linewidth = 1),
        (this.linecap = `round`),
        (this.linejoin = `round`),
        (this.fog = !0),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.linewidth = e.linewidth),
        (this.linecap = e.linecap),
        (this.linejoin = e.linejoin),
        (this.fog = e.fog),
        this
      );
    }
  },
  Da = new M(),
  Oa = new M(),
  ka = new N(),
  Aa = new Ii(),
  ja = new Qr(),
  Ma = new M(),
  Na = new M(),
  Pa = class extends ir {
    constructor(e = new oi(), t = new Ea()) {
      (super(),
        (this.isLine = !0),
        (this.type = `Line`),
        (this.geometry = e),
        (this.material = t),
        (this.morphTargetDictionary = void 0),
        (this.morphTargetInfluences = void 0),
        this.updateMorphTargets());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.material = Array.isArray(e.material)
          ? e.material.slice()
          : e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    computeLineDistances() {
      let e = this.geometry;
      if (e.index === null) {
        let t = e.attributes.position,
          n = [0];
        for (let e = 1, r = t.count; e < r; e++)
          (Da.fromBufferAttribute(t, e - 1),
            Oa.fromBufferAttribute(t, e),
            (n[e] = n[e - 1]),
            (n[e] += Da.distanceTo(Oa)));
        e.setAttribute(`lineDistance`, new F(n, 1));
      } else
        Ot(
          `Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`,
        );
      return this;
    }
    intersectsFrustum(e) {
      return e.intersectsObject(this);
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.matrixWorld,
        i = e.params.Line.threshold,
        a = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        ja.copy(n.boundingSphere),
        ja.applyMatrix4(r),
        (ja.radius += i),
        e.ray.intersectsSphere(ja) === !1)
      )
        return;
      (ka.copy(r).invert(), Aa.copy(e.ray).applyMatrix4(ka));
      let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        s = o * o,
        c = this.isLineSegments ? 2 : 1,
        l = n.index,
        u = n.attributes.position;
      if (l !== null) {
        let n = Math.max(0, a.start),
          r = Math.min(l.count, a.start + a.count);
        for (let i = n, a = r - 1; i < a; i += c) {
          let n = l.getX(i),
            r = l.getX(i + 1),
            a = Fa(this, e, Aa, s, n, r, i);
          a && t.push(a);
        }
        if (this.isLineLoop) {
          let i = l.getX(r - 1),
            a = l.getX(n),
            o = Fa(this, e, Aa, s, i, a, r - 1);
          o && t.push(o);
        }
      } else {
        let n = Math.max(0, a.start),
          r = Math.min(u.count, a.start + a.count);
        for (let i = n, a = r - 1; i < a; i += c) {
          let n = Fa(this, e, Aa, s, i, i + 1, i);
          n && t.push(n);
        }
        if (this.isLineLoop) {
          let i = Fa(this, e, Aa, s, r - 1, n, r - 1);
          i && t.push(i);
        }
      }
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes,
        t = Object.keys(e);
      if (t.length > 0) {
        let n = e[t[0]];
        if (n !== void 0) {
          ((this.morphTargetInfluences = []),
            (this.morphTargetDictionary = {}));
          for (let e = 0, t = n.length; e < t; e++) {
            let t = n[e].name || String(e);
            (this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[t] = e));
          }
        }
      }
    }
  };
function Fa(e, t, n, r, i, a, o) {
  let s = e.geometry.attributes.position;
  if (
    (Da.fromBufferAttribute(s, i),
    Oa.fromBufferAttribute(s, a),
    n.distanceSqToSegment(Da, Oa, Ma, Na) > r)
  )
    return;
  Ma.applyMatrix4(e.matrixWorld);
  let c = t.ray.origin.distanceTo(Ma);
  if (!(c < t.near || c > t.far))
    return {
      distance: c,
      point: Na.clone().applyMatrix4(e.matrixWorld),
      index: o,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: e,
    };
}
var Ia = new M(),
  La = new M(),
  Ra = class extends Pa {
    constructor(e, t) {
      (super(e, t), (this.isLineSegments = !0), (this.type = `LineSegments`));
    }
    computeLineDistances() {
      let e = this.geometry;
      if (e.index === null) {
        let t = e.attributes.position,
          n = [];
        for (let e = 0, r = t.count; e < r; e += 2)
          (Ia.fromBufferAttribute(t, e),
            La.fromBufferAttribute(t, e + 1),
            (n[e] = e === 0 ? 0 : n[e - 1]),
            (n[e + 1] = n[e] + Ia.distanceTo(La)));
        e.setAttribute(`lineDistance`, new F(n, 1));
      } else
        Ot(
          `LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`,
        );
      return this;
    }
  },
  za = class extends hi {
    constructor(e) {
      (super(),
        (this.isPointsMaterial = !0),
        (this.type = `PointsMaterial`),
        (this.color = new P(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.size = 1),
        (this.sizeAttenuation = !0),
        (this.fog = !0),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.size = e.size),
        (this.sizeAttenuation = e.sizeAttenuation),
        (this.fog = e.fog),
        this
      );
    }
  },
  Ba = new N(),
  Va = new Ii(),
  Ha = new Qr(),
  Ua = new M(),
  Wa = class extends ir {
    constructor(e = new oi(), t = new za()) {
      (super(),
        (this.isPoints = !0),
        (this.type = `Points`),
        (this.geometry = e),
        (this.material = t),
        (this.morphTargetDictionary = void 0),
        (this.morphTargetInfluences = void 0),
        this.updateMorphTargets());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.material = Array.isArray(e.material)
          ? e.material.slice()
          : e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    intersectsFrustum(e) {
      return e.intersectsObject(this);
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.matrixWorld,
        i = e.params.Points.threshold,
        a = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        Ha.copy(n.boundingSphere),
        Ha.applyMatrix4(r),
        (Ha.radius += i),
        e.ray.intersectsSphere(Ha) === !1)
      )
        return;
      (Ba.copy(r).invert(), Va.copy(e.ray).applyMatrix4(Ba));
      let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        s = o * o,
        c = n.index,
        l = n.attributes.position;
      if (c !== null) {
        let n = Math.max(0, a.start),
          i = Math.min(c.count, a.start + a.count);
        for (let a = n, o = i; a < o; a++) {
          let n = c.getX(a);
          (Ua.fromBufferAttribute(l, n), Ga(Ua, n, s, r, e, t, this));
        }
      } else {
        let n = Math.max(0, a.start),
          i = Math.min(l.count, a.start + a.count);
        for (let a = n, o = i; a < o; a++)
          (Ua.fromBufferAttribute(l, a), Ga(Ua, a, s, r, e, t, this));
      }
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes,
        t = Object.keys(e);
      if (t.length > 0) {
        let n = e[t[0]];
        if (n !== void 0) {
          ((this.morphTargetInfluences = []),
            (this.morphTargetDictionary = {}));
          for (let e = 0, t = n.length; e < t; e++) {
            let t = n[e].name || String(e);
            (this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[t] = e));
          }
        }
      }
    }
  };
function Ga(e, t, n, r, i, a, o) {
  let s = Va.distanceSqToPoint(e);
  if (s < n) {
    let n = new M();
    (Va.closestPointToPoint(e, n), n.applyMatrix4(r));
    let c = i.ray.origin.distanceTo(n);
    if (c < i.near || c > i.far) return;
    a.push({
      distance: c,
      distanceToRay: Math.sqrt(s),
      point: n,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: o,
    });
  }
}
var Ka = class extends En {
    constructor(e, t, n, r, i, a, o, s, c, l, u, d) {
      (super(null, a, o, s, c, l, r, i, u, d),
        (this.isCompressedTexture = !0),
        (this.image = { width: t, height: n }),
        (this.mipmaps = e),
        (this.flipY = !1),
        (this.generateMipmaps = !1));
    }
  },
  qa = class extends En {
    constructor(e = [], t = 301, n, r, i, a, o, s, c, l) {
      (super(e, t, n, r, i, a, o, s, c, l),
        (this.isCubeTexture = !0),
        (this.flipY = !1));
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  },
  Ja = class extends En {
    constructor(e, t, n, r, i, a, o, s, c) {
      (super(e, t, n, r, i, a, o, s, c),
        (this.isCanvasTexture = !0),
        (this.needsUpdate = !0));
    }
  },
  Ya = class extends En {
    constructor(e, t, n = ie, r, i, a, o = w, s = w, c, l = he, u = 1) {
      if (l !== 1026 && l !== 1027)
        throw Error(
          `THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`,
        );
      (super({ width: e, height: t, depth: u }, r, i, a, o, s, l, n, c),
        (this.isDepthTexture = !0),
        (this.flipY = !1),
        (this.generateMipmaps = !1),
        (this.compareFunction = null));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.source = new Sn(Object.assign({}, e.image))),
        (this.compareFunction = e.compareFunction),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return ((t.compareFunction = this.compareFunction), t);
    }
  },
  Xa = class extends Ya {
    constructor(e, t = ie, n = 301, r, i, a = w, o = w, s, c = he) {
      let l = { width: e, height: e, depth: 1 },
        u = [l, l, l, l, l, l];
      (super(e, e, t, n, r, i, a, o, s, c),
        (this.image = u),
        (this.isCubeDepthTexture = !0),
        (this.isCubeTexture = !0));
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  },
  Za = class extends En {
    constructor(e = null) {
      (super(), (this.sourceTexture = e), (this.isExternalTexture = !0));
    }
    copy(e) {
      return (super.copy(e), (this.sourceTexture = e.sourceTexture), this);
    }
  },
  Qa = class e extends oi {
    constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
      (super(),
        (this.type = `BoxGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          depth: n,
          widthSegments: r,
          heightSegments: i,
          depthSegments: a,
        }));
      let o = this;
      ((r = Math.floor(r)), (i = Math.floor(i)), (a = Math.floor(a)));
      let s = [],
        c = [],
        l = [],
        u = [],
        d = 0,
        f = 0;
      (p(`z`, `y`, `x`, -1, -1, n, t, e, a, i, 0),
        p(`z`, `y`, `x`, 1, -1, n, t, -e, a, i, 1),
        p(`x`, `z`, `y`, 1, 1, e, n, t, r, a, 2),
        p(`x`, `z`, `y`, 1, -1, e, n, -t, r, a, 3),
        p(`x`, `y`, `z`, 1, -1, e, t, n, r, i, 4),
        p(`x`, `y`, `z`, -1, -1, e, t, -n, r, i, 5),
        this.setIndex(s),
        this.setAttribute(`position`, new F(c, 3)),
        this.setAttribute(`normal`, new F(l, 3)),
        this.setAttribute(`uv`, new F(u, 2)));
      function p(e, t, n, r, i, a, p, m, h, g, _) {
        let v = a / h,
          y = p / g,
          b = a / 2,
          x = p / 2,
          S = m / 2,
          C = h + 1,
          w = g + 1,
          T = 0,
          E = 0,
          D = new M();
        for (let a = 0; a < w; a++) {
          let o = a * y - x;
          for (let s = 0; s < C; s++)
            ((D[e] = (s * v - b) * r),
              (D[t] = o * i),
              (D[n] = S),
              c.push(D.x, D.y, D.z),
              (D[e] = 0),
              (D[t] = 0),
              (D[n] = m > 0 ? 1 : -1),
              l.push(D.x, D.y, D.z),
              u.push(s / h),
              u.push(1 - a / g),
              (T += 1));
        }
        for (let e = 0; e < g; e++)
          for (let t = 0; t < h; t++) {
            let n = d + t + C * e,
              r = d + t + C * (e + 1),
              i = d + (t + 1) + C * (e + 1),
              a = d + (t + 1) + C * e;
            (s.push(n, r, a), s.push(r, i, a), (E += 6));
          }
        (o.addGroup(f, E, _), (f += E), (d += T));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments,
      );
    }
  },
  $a = class e extends oi {
    constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
      (super(),
        (this.type = `CircleGeometry`),
        (this.parameters = {
          radius: e,
          segments: t,
          thetaStart: n,
          thetaLength: r,
        }),
        (t = Math.max(3, t)));
      let i = [],
        a = [],
        o = [],
        s = [],
        c = new M(),
        l = new j();
      (a.push(0, 0, 0), o.push(0, 0, 1), s.push(0.5, 0.5));
      for (let i = 0, u = 3; i <= t; i++, u += 3) {
        let d = n + (i / t) * r;
        ((c.x = e * Math.cos(d)),
          (c.y = e * Math.sin(d)),
          a.push(c.x, c.y, c.z),
          o.push(0, 0, 1),
          (l.x = (a[u] / e + 1) / 2),
          (l.y = (a[u + 1] / e + 1) / 2),
          s.push(l.x, l.y));
      }
      for (let e = 1; e <= t; e++) i.push(e, e + 1, 0);
      (this.setIndex(i),
        this.setAttribute(`position`, new F(a, 3)),
        this.setAttribute(`normal`, new F(o, 3)),
        this.setAttribute(`uv`, new F(s, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.radius, t.segments, t.thetaStart, t.thetaLength);
    }
  },
  eo = class e extends oi {
    constructor(
      e = 1,
      t = 1,
      n = 1,
      r = 32,
      i = 1,
      a = !1,
      o = 0,
      s = Math.PI * 2,
    ) {
      (super(),
        (this.type = `CylinderGeometry`),
        (this.parameters = {
          radiusTop: e,
          radiusBottom: t,
          height: n,
          radialSegments: r,
          heightSegments: i,
          openEnded: a,
          thetaStart: o,
          thetaLength: s,
        }));
      let c = this;
      ((r = Math.floor(r)), (i = Math.floor(i)));
      let l = [],
        u = [],
        d = [],
        f = [],
        p = 0,
        m = [],
        h = n / 2,
        g = 0;
      (_(),
        a === !1 && (e > 0 && v(!0), t > 0 && v(!1)),
        this.setIndex(l),
        this.setAttribute(`position`, new F(u, 3)),
        this.setAttribute(`normal`, new F(d, 3)),
        this.setAttribute(`uv`, new F(f, 2)));
      function _() {
        let a = new M(),
          _ = new M(),
          v = 0,
          y = (t - e) / n;
        for (let c = 0; c <= i; c++) {
          let l = [],
            g = c / i,
            v = g * (t - e) + e;
          for (let e = 0; e <= r; e++) {
            let t = e / r,
              i = t * s + o,
              c = Math.sin(i),
              m = Math.cos(i);
            ((_.x = v * c),
              (_.y = -g * n + h),
              (_.z = v * m),
              u.push(_.x, _.y, _.z),
              a.set(c, y, m).normalize(),
              d.push(a.x, a.y, a.z),
              f.push(t, 1 - g),
              l.push(p++));
          }
          m.push(l);
        }
        for (let n = 0; n < r; n++)
          for (let r = 0; r < i; r++) {
            let a = m[r][n],
              o = m[r + 1][n],
              s = m[r + 1][n + 1],
              c = m[r][n + 1];
            ((e > 0 || r !== 0) && (l.push(a, o, c), (v += 3)),
              (t > 0 || r !== i - 1) && (l.push(o, s, c), (v += 3)));
          }
        (c.addGroup(g, v, 0), (g += v));
      }
      function v(n) {
        let i = p,
          a = new j(),
          m = new M(),
          _ = 0,
          v = n === !0 ? e : t,
          y = n === !0 ? 1 : -1;
        for (let e = 1; e <= r; e++)
          (u.push(0, h * y, 0), d.push(0, y, 0), f.push(0.5, 0.5), p++);
        let b = p;
        for (let e = 0; e <= r; e++) {
          let t = (e / r) * s + o,
            n = Math.cos(t),
            i = Math.sin(t);
          ((m.x = v * i),
            (m.y = h * y),
            (m.z = v * n),
            u.push(m.x, m.y, m.z),
            d.push(0, y, 0),
            (a.x = n * 0.5 + 0.5),
            (a.y = i * 0.5 * y + 0.5),
            f.push(a.x, a.y),
            p++);
        }
        for (let e = 0; e < r; e++) {
          let t = i + e,
            r = b + e;
          (n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), (_ += 3));
        }
        (c.addGroup(g, _, n === !0 ? 1 : 2), (g += _));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  to = new M(),
  no = new M(),
  ro = new M(),
  io = new Dr(),
  ao = class extends oi {
    constructor(e = null, t = 1) {
      if (
        (super(),
        (this.type = `EdgesGeometry`),
        (this.parameters = { geometry: e, thresholdAngle: t }),
        e !== null)
      ) {
        let n = 1e4,
          r = Math.cos(It * t),
          i = e.getIndex(),
          a = e.getAttribute(`position`),
          o = i ? i.count : a.count,
          s = [0, 0, 0],
          c = [`a`, `b`, `c`],
          l = [, , ,],
          u = {},
          d = [];
        for (let e = 0; e < o; e += 3) {
          i
            ? ((s[0] = i.getX(e)),
              (s[1] = i.getX(e + 1)),
              (s[2] = i.getX(e + 2)))
            : ((s[0] = e), (s[1] = e + 1), (s[2] = e + 2));
          let { a: t, b: o, c: f } = io;
          if (
            (t.fromBufferAttribute(a, s[0]),
            o.fromBufferAttribute(a, s[1]),
            f.fromBufferAttribute(a, s[2]),
            io.getNormal(ro),
            (l[0] = `${Math.round(t.x * n)},${Math.round(t.y * n)},${Math.round(t.z * n)}`),
            (l[1] = `${Math.round(o.x * n)},${Math.round(o.y * n)},${Math.round(o.z * n)}`),
            (l[2] = `${Math.round(f.x * n)},${Math.round(f.y * n)},${Math.round(f.z * n)}`),
            l[0] !== l[1] && l[1] !== l[2] && l[2] !== l[0])
          )
            for (let e = 0; e < 3; e++) {
              let t = (e + 1) % 3,
                n = l[e],
                i = l[t],
                a = io[c[e]],
                o = io[c[t]],
                f = `${n}_${i}`,
                p = `${i}_${n}`;
              p in u && u[p]
                ? (ro.dot(u[p].normal) <= r &&
                    (d.push(a.x, a.y, a.z), d.push(o.x, o.y, o.z)),
                  (u[p] = null))
                : f in u ||
                  (u[f] = { index0: s[e], index1: s[t], normal: ro.clone() });
            }
        }
        for (let e in u)
          if (u[e]) {
            let { index0: t, index1: n } = u[e];
            (to.fromBufferAttribute(a, t),
              no.fromBufferAttribute(a, n),
              d.push(to.x, to.y, to.z),
              d.push(no.x, no.y, no.z));
          }
        this.setAttribute(`position`, new F(d, 3));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
  },
  oo = class {
    constructor() {
      ((this.type = `Curve`),
        (this.arcLengthDivisions = 200),
        (this.needsUpdate = !1),
        (this.cacheArcLengths = null));
    }
    getPoint() {
      Ot(`Curve: .getPoint() not implemented.`);
    }
    getPointAt(e, t) {
      let n = this.getUtoTmapping(e);
      return this.getPoint(n, t);
    }
    getPoints(e = 5) {
      let t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
      return t;
    }
    getSpacedPoints(e = 5) {
      let t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
      return t;
    }
    getLength() {
      let e = this.getLengths();
      return e[e.length - 1];
    }
    getLengths(e = this.arcLengthDivisions) {
      if (
        this.cacheArcLengths &&
        this.cacheArcLengths.length === e + 1 &&
        !this.needsUpdate
      )
        return this.cacheArcLengths;
      this.needsUpdate = !1;
      let t = [],
        n,
        r = this.getPoint(0),
        i = 0;
      t.push(0);
      for (let a = 1; a <= e; a++)
        ((n = this.getPoint(a / e)),
          (i += n.distanceTo(r)),
          t.push(i),
          (r = n));
      return ((this.cacheArcLengths = t), t);
    }
    updateArcLengths() {
      ((this.needsUpdate = !0), this.getLengths());
    }
    getUtoTmapping(e, t = null) {
      let n = this.getLengths(),
        r = 0,
        i = n.length,
        a;
      a = t || e * n[i - 1];
      let o = 0,
        s = i - 1,
        c;
      for (; o <= s; )
        if (((r = Math.floor(o + (s - o) / 2)), (c = n[r] - a), c < 0))
          o = r + 1;
        else if (c > 0) s = r - 1;
        else {
          s = r;
          break;
        }
      if (((r = s), n[r] === a)) return r / (i - 1);
      let l = n[r],
        u = n[r + 1] - l,
        d = (a - l) / u;
      return (r + d) / (i - 1);
    }
    getTangent(e, t) {
      let n = 1e-4,
        r = e - n,
        i = e + n;
      (r < 0 && (r = 0), i > 1 && (i = 1));
      let a = this.getPoint(r),
        o = this.getPoint(i),
        s = t || (a.isVector2 ? new j() : new M());
      return (s.copy(o).sub(a).normalize(), s);
    }
    getTangentAt(e, t) {
      let n = this.getUtoTmapping(e);
      return this.getTangent(n, t);
    }
    computeFrenetFrames(e, t = !1) {
      let n = new M(),
        r = [],
        i = [],
        a = [],
        o = new M(),
        s = new N();
      for (let t = 0; t <= e; t++) {
        let n = t / e;
        r[t] = this.getTangentAt(n, new M());
      }
      ((i[0] = new M()), (a[0] = new M()));
      let c = Number.MAX_VALUE,
        l = Math.abs(r[0].x),
        u = Math.abs(r[0].y),
        d = Math.abs(r[0].z);
      (l <= c && ((c = l), n.set(1, 0, 0)),
        u <= c && ((c = u), n.set(0, 1, 0)),
        d <= c && n.set(0, 0, 1),
        o.crossVectors(r[0], n).normalize(),
        i[0].crossVectors(r[0], o),
        a[0].crossVectors(r[0], i[0]));
      for (let t = 1; t <= e; t++) {
        if (
          ((i[t] = i[t - 1].clone()),
          (a[t] = a[t - 1].clone()),
          o.crossVectors(r[t - 1], r[t]),
          o.length() > 2 ** -52)
        ) {
          o.normalize();
          let e = Math.acos(zt(r[t - 1].dot(r[t]), -1, 1));
          i[t].applyMatrix4(s.makeRotationAxis(o, e));
        }
        a[t].crossVectors(r[t], i[t]);
      }
      if (t === !0) {
        let t = Math.acos(zt(i[0].dot(i[e]), -1, 1));
        ((t /= e), r[0].dot(o.crossVectors(i[0], i[e])) > 0 && (t = -t));
        for (let n = 1; n <= e; n++)
          (i[n].applyMatrix4(s.makeRotationAxis(r[n], t * n)),
            a[n].crossVectors(r[n], i[n]));
      }
      return { tangents: r, normals: i, binormals: a };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return ((this.arcLengthDivisions = e.arcLengthDivisions), this);
    }
    toJSON() {
      let e = {
        metadata: { version: 4.7, type: `Curve`, generator: `Curve.toJSON` },
      };
      return (
        (e.arcLengthDivisions = this.arcLengthDivisions),
        (e.type = this.type),
        e
      );
    }
    fromJSON(e) {
      return ((this.arcLengthDivisions = e.arcLengthDivisions), this);
    }
  },
  so = class extends oo {
    constructor(
      e = 0,
      t = 0,
      n = 1,
      r = 1,
      i = 0,
      a = Math.PI * 2,
      o = !1,
      s = 0,
    ) {
      (super(),
        (this.isEllipseCurve = !0),
        (this.type = `EllipseCurve`),
        (this.aX = e),
        (this.aY = t),
        (this.xRadius = n),
        (this.yRadius = r),
        (this.aStartAngle = i),
        (this.aEndAngle = a),
        (this.aClockwise = o),
        (this.aRotation = s));
    }
    getPoint(e, t = new j()) {
      let n = t,
        r = Math.PI * 2,
        i = this.aEndAngle - this.aStartAngle,
        a = Math.abs(i) < 2 ** -52;
      for (; i < 0; ) i += r;
      for (; i > r; ) i -= r;
      (i < 2 ** -52 && (i = a ? 0 : r),
        this.aClockwise === !0 && !a && (i === r ? (i = -r) : (i -= r)));
      let o = this.aStartAngle + e * i,
        s = this.aX + this.xRadius * Math.cos(o),
        c = this.aY + this.yRadius * Math.sin(o);
      if (this.aRotation !== 0) {
        let e = Math.cos(this.aRotation),
          t = Math.sin(this.aRotation),
          n = s - this.aX,
          r = c - this.aY;
        ((s = n * e - r * t + this.aX), (c = n * t + r * e + this.aY));
      }
      return n.set(s, c);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.aX = e.aX),
        (this.aY = e.aY),
        (this.xRadius = e.xRadius),
        (this.yRadius = e.yRadius),
        (this.aStartAngle = e.aStartAngle),
        (this.aEndAngle = e.aEndAngle),
        (this.aClockwise = e.aClockwise),
        (this.aRotation = e.aRotation),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.aX = this.aX),
        (e.aY = this.aY),
        (e.xRadius = this.xRadius),
        (e.yRadius = this.yRadius),
        (e.aStartAngle = this.aStartAngle),
        (e.aEndAngle = this.aEndAngle),
        (e.aClockwise = this.aClockwise),
        (e.aRotation = this.aRotation),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        (this.aX = e.aX),
        (this.aY = e.aY),
        (this.xRadius = e.xRadius),
        (this.yRadius = e.yRadius),
        (this.aStartAngle = e.aStartAngle),
        (this.aEndAngle = e.aEndAngle),
        (this.aClockwise = e.aClockwise),
        (this.aRotation = e.aRotation),
        this
      );
    }
  },
  co = class extends so {
    constructor(e, t, n, r, i, a) {
      (super(e, t, n, n, r, i, a),
        (this.isArcCurve = !0),
        (this.type = `ArcCurve`));
    }
  };
function lo() {
  let e = 0,
    t = 0,
    n = 0,
    r = 0;
  function i(i, a, o, s) {
    ((e = i),
      (t = o),
      (n = -3 * i + 3 * a - 2 * o - s),
      (r = 2 * i - 2 * a + o + s));
  }
  return {
    initCatmullRom: function (e, t, n, r, a) {
      i(t, n, a * (n - e), a * (r - t));
    },
    initNonuniformCatmullRom: function (e, t, n, r, a, o, s) {
      let c = (t - e) / a - (n - e) / (a + o) + (n - t) / o,
        l = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
      ((c *= o), (l *= o), i(t, n, c, l));
    },
    calc: function (i) {
      let a = i * i,
        o = a * i;
      return e + t * i + n * a + r * o;
    },
  };
}
var uo = new M(),
  fo = new M(),
  po = new lo(),
  mo = new lo(),
  ho = new lo(),
  go = class extends oo {
    constructor(e = [], t = !1, n = `centripetal`, r = 0.5) {
      (super(),
        (this.isCatmullRomCurve3 = !0),
        (this.type = `CatmullRomCurve3`),
        (this.points = e),
        (this.closed = t),
        (this.curveType = n),
        (this.tension = r));
    }
    getPoint(e, t = new M()) {
      let n = t,
        r = this.points,
        i = r.length,
        a = (i - +!this.closed) * e,
        o = Math.floor(a),
        s = a - o;
      this.closed
        ? (o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i)
        : s === 0 && o === i - 1 && ((o = i - 2), (s = 1));
      let c, l;
      this.closed || o > 0
        ? (c = r[(o - 1) % i])
        : (fo.subVectors(r[0], r[1]).add(r[0]), (c = fo));
      let u = r[o % i],
        d = r[(o + 1) % i];
      if (
        (this.closed || o + 2 < i
          ? (l = r[(o + 2) % i])
          : (uo.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), (l = uo)),
        this.curveType === `centripetal` || this.curveType === `chordal`)
      ) {
        let e = this.curveType === `chordal` ? 0.5 : 0.25,
          t = c.distanceToSquared(u) ** +e,
          n = u.distanceToSquared(d) ** +e,
          r = d.distanceToSquared(l) ** +e;
        (n < 1e-4 && (n = 1),
          t < 1e-4 && (t = n),
          r < 1e-4 && (r = n),
          po.initNonuniformCatmullRom(c.x, u.x, d.x, l.x, t, n, r),
          mo.initNonuniformCatmullRom(c.y, u.y, d.y, l.y, t, n, r),
          ho.initNonuniformCatmullRom(c.z, u.z, d.z, l.z, t, n, r));
      } else
        this.curveType === `catmullrom` &&
          (po.initCatmullRom(c.x, u.x, d.x, l.x, this.tension),
          mo.initCatmullRom(c.y, u.y, d.y, l.y, this.tension),
          ho.initCatmullRom(c.z, u.z, d.z, l.z, this.tension));
      return (n.set(po.calc(s), mo.calc(s), ho.calc(s)), n);
    }
    copy(e) {
      (super.copy(e), (this.points = []));
      for (let t = 0, n = e.points.length; t < n; t++) {
        let n = e.points[t];
        this.points.push(n.clone());
      }
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      e.points = [];
      for (let t = 0, n = this.points.length; t < n; t++) {
        let n = this.points[t];
        e.points.push(n.toArray());
      }
      return (
        (e.closed = this.closed),
        (e.curveType = this.curveType),
        (e.tension = this.tension),
        e
      );
    }
    fromJSON(e) {
      (super.fromJSON(e), (this.points = []));
      for (let t = 0, n = e.points.length; t < n; t++) {
        let n = e.points[t];
        this.points.push(new M().fromArray(n));
      }
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }
  };
function _o(e, t, n, r, i) {
  let a = (r - t) * 0.5,
    o = (i - n) * 0.5,
    s = e * e,
    c = e * s;
  return (
    (2 * n - 2 * r + a + o) * c + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n
  );
}
function vo(e, t) {
  let n = 1 - e;
  return n * n * t;
}
function yo(e, t) {
  return 2 * (1 - e) * e * t;
}
function bo(e, t) {
  return e * e * t;
}
function xo(e, t, n, r) {
  return vo(e, t) + yo(e, n) + bo(e, r);
}
function So(e, t) {
  let n = 1 - e;
  return n * n * n * t;
}
function Co(e, t) {
  let n = 1 - e;
  return 3 * n * n * e * t;
}
function wo(e, t) {
  return 3 * (1 - e) * e * e * t;
}
function To(e, t) {
  return e * e * e * t;
}
function Eo(e, t, n, r, i) {
  return So(e, t) + Co(e, n) + wo(e, r) + To(e, i);
}
var Do = class extends oo {
    constructor(e = new j(), t = new j(), n = new j(), r = new j()) {
      (super(),
        (this.isCubicBezierCurve = !0),
        (this.type = `CubicBezierCurve`),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n),
        (this.v3 = r));
    }
    getPoint(e, t = new j()) {
      let n = t,
        r = this.v0,
        i = this.v1,
        a = this.v2,
        o = this.v3;
      return (n.set(Eo(e, r.x, i.x, a.x, o.x), Eo(e, r.y, i.y, a.y, o.y)), n);
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        (e.v3 = this.v3.toArray()),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
      );
    }
  },
  Oo = class extends oo {
    constructor(e = new M(), t = new M(), n = new M(), r = new M()) {
      (super(),
        (this.isCubicBezierCurve3 = !0),
        (this.type = `CubicBezierCurve3`),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n),
        (this.v3 = r));
    }
    getPoint(e, t = new M()) {
      let n = t,
        r = this.v0,
        i = this.v1,
        a = this.v2,
        o = this.v3;
      return (
        n.set(
          Eo(e, r.x, i.x, a.x, o.x),
          Eo(e, r.y, i.y, a.y, o.y),
          Eo(e, r.z, i.z, a.z, o.z),
        ),
        n
      );
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        (e.v3 = this.v3.toArray()),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
      );
    }
  },
  ko = class extends oo {
    constructor(e = new j(), t = new j()) {
      (super(),
        (this.isLineCurve = !0),
        (this.type = `LineCurve`),
        (this.v1 = e),
        (this.v2 = t));
    }
    getPoint(e, t = new j()) {
      let n = t;
      return (
        e === 1
          ? n.copy(this.v2)
          : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
        n
      );
    }
    getPointAt(e, t) {
      return this.getPoint(e, t);
    }
    getTangent(e, t = new j()) {
      return t.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(e, t) {
      return this.getTangent(e, t);
    }
    copy(e) {
      return (super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this);
    }
    toJSON() {
      let e = super.toJSON();
      return ((e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e);
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }
  },
  Ao = class extends oo {
    constructor(e = new M(), t = new M()) {
      (super(),
        (this.isLineCurve3 = !0),
        (this.type = `LineCurve3`),
        (this.v1 = e),
        (this.v2 = t));
    }
    getPoint(e, t = new M()) {
      let n = t;
      return (
        e === 1
          ? n.copy(this.v2)
          : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
        n
      );
    }
    getPointAt(e, t) {
      return this.getPoint(e, t);
    }
    getTangent(e, t = new M()) {
      return t.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(e, t) {
      return this.getTangent(e, t);
    }
    copy(e) {
      return (super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this);
    }
    toJSON() {
      let e = super.toJSON();
      return ((e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e);
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }
  },
  jo = class extends oo {
    constructor(e = new j(), t = new j(), n = new j()) {
      (super(),
        (this.isQuadraticBezierCurve = !0),
        (this.type = `QuadraticBezierCurve`),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n));
    }
    getPoint(e, t = new j()) {
      let n = t,
        r = this.v0,
        i = this.v1,
        a = this.v2;
      return (n.set(xo(e, r.x, i.x, a.x), xo(e, r.y, i.y, a.y)), n);
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }
  },
  Mo = class extends oo {
    constructor(e = new M(), t = new M(), n = new M()) {
      (super(),
        (this.isQuadraticBezierCurve3 = !0),
        (this.type = `QuadraticBezierCurve3`),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n));
    }
    getPoint(e, t = new M()) {
      let n = t,
        r = this.v0,
        i = this.v1,
        a = this.v2;
      return (
        n.set(xo(e, r.x, i.x, a.x), xo(e, r.y, i.y, a.y), xo(e, r.z, i.z, a.z)),
        n
      );
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }
  },
  No = class extends oo {
    constructor(e = []) {
      (super(),
        (this.isSplineCurve = !0),
        (this.type = `SplineCurve`),
        (this.points = e));
    }
    getPoint(e, t = new j()) {
      let n = t,
        r = this.points,
        i = (r.length - 1) * e,
        a = Math.floor(i),
        o = i - a,
        s = r[a === 0 ? a : a - 1],
        c = r[a],
        l = r[a > r.length - 2 ? r.length - 1 : a + 1],
        u = r[a > r.length - 3 ? r.length - 1 : a + 2];
      return (n.set(_o(o, s.x, c.x, l.x, u.x), _o(o, s.y, c.y, l.y, u.y)), n);
    }
    copy(e) {
      (super.copy(e), (this.points = []));
      for (let t = 0, n = e.points.length; t < n; t++) {
        let n = e.points[t];
        this.points.push(n.clone());
      }
      return this;
    }
    toJSON() {
      let e = super.toJSON();
      e.points = [];
      for (let t = 0, n = this.points.length; t < n; t++) {
        let n = this.points[t];
        e.points.push(n.toArray());
      }
      return e;
    }
    fromJSON(e) {
      (super.fromJSON(e), (this.points = []));
      for (let t = 0, n = e.points.length; t < n; t++) {
        let n = e.points[t];
        this.points.push(new j().fromArray(n));
      }
      return this;
    }
  },
  Po = Object.freeze({
    __proto__: null,
    ArcCurve: co,
    CatmullRomCurve3: go,
    CubicBezierCurve: Do,
    CubicBezierCurve3: Oo,
    EllipseCurve: so,
    LineCurve: ko,
    LineCurve3: Ao,
    QuadraticBezierCurve: jo,
    QuadraticBezierCurve3: Mo,
    SplineCurve: No,
  }),
  Fo = class extends oo {
    constructor() {
      (super(),
        (this.type = `CurvePath`),
        (this.curves = []),
        (this.autoClose = !1));
    }
    add(e) {
      this.curves.push(e);
    }
    closePath() {
      let e = this.curves[0].getPoint(0),
        t = this.curves[this.curves.length - 1].getPoint(1);
      if (!e.equals(t)) {
        let n = e.isVector2 === !0 ? `LineCurve` : `LineCurve3`;
        this.curves.push(new Po[n](t, e));
      }
      return this;
    }
    getPoint(e, t) {
      let n = e * this.getLength(),
        r = this.getCurveLengths(),
        i = 0;
      for (; i < r.length; ) {
        if (r[i] >= n) {
          let e = r[i] - n,
            a = this.curves[i],
            o = a.getLength(),
            s = o === 0 ? 0 : 1 - e / o;
          return a.getPointAt(s, t);
        }
        i++;
      }
      return null;
    }
    getLength() {
      let e = this.getCurveLengths();
      return e[e.length - 1];
    }
    updateArcLengths() {
      ((this.needsUpdate = !0),
        (this.cacheLengths = null),
        this.getCurveLengths());
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
      let e = [],
        t = 0;
      for (let n = 0, r = this.curves.length; n < r; n++)
        ((t += this.curves[n].getLength()), e.push(t));
      return ((this.cacheLengths = e), e);
    }
    getSpacedPoints(e = 40) {
      let t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
      return (this.autoClose && t.push(t[0]), t);
    }
    getPoints(e = 12) {
      let t = [],
        n;
      for (let r = 0, i = this.curves; r < i.length; r++) {
        let a = i[r],
          o = a.isEllipseCurve
            ? e * 2
            : a.isLineCurve || a.isLineCurve3
              ? 1
              : a.isSplineCurve
                ? e * a.points.length
                : e,
          s = a.getPoints(o);
        for (let e = 0; e < s.length; e++) {
          let r = s[e];
          (n && n.equals(r)) || (t.push(r), (n = r));
        }
      }
      return (
        this.autoClose &&
          t.length > 1 &&
          !t[t.length - 1].equals(t[0]) &&
          t.push(t[0]),
        t
      );
    }
    copy(e) {
      (super.copy(e), (this.curves = []));
      for (let t = 0, n = e.curves.length; t < n; t++) {
        let n = e.curves[t];
        this.curves.push(n.clone());
      }
      return ((this.autoClose = e.autoClose), this);
    }
    toJSON() {
      let e = super.toJSON();
      ((e.autoClose = this.autoClose), (e.curves = []));
      for (let t = 0, n = this.curves.length; t < n; t++) {
        let n = this.curves[t];
        e.curves.push(n.toJSON());
      }
      return e;
    }
    fromJSON(e) {
      (super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []));
      for (let t = 0, n = e.curves.length; t < n; t++) {
        let n = e.curves[t];
        this.curves.push(new Po[n.type]().fromJSON(n));
      }
      return this;
    }
  },
  Io = class extends Fo {
    constructor(e) {
      (super(),
        (this.type = `Path`),
        (this.currentPoint = new j()),
        e && this.setFromPoints(e));
    }
    setFromPoints(e) {
      this.moveTo(e[0].x, e[0].y);
      for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
      return this;
    }
    moveTo(e, t) {
      return (this.currentPoint.set(e, t), this);
    }
    lineTo(e, t) {
      let n = new ko(this.currentPoint.clone(), new j(e, t));
      return (this.curves.push(n), this.currentPoint.set(e, t), this);
    }
    quadraticCurveTo(e, t, n, r) {
      let i = new jo(this.currentPoint.clone(), new j(e, t), new j(n, r));
      return (this.curves.push(i), this.currentPoint.set(n, r), this);
    }
    bezierCurveTo(e, t, n, r, i, a) {
      let o = new Do(
        this.currentPoint.clone(),
        new j(e, t),
        new j(n, r),
        new j(i, a),
      );
      return (this.curves.push(o), this.currentPoint.set(i, a), this);
    }
    splineThru(e) {
      let t = new No([this.currentPoint.clone()].concat(e));
      return (
        this.curves.push(t),
        this.currentPoint.copy(e[e.length - 1]),
        this
      );
    }
    arc(e, t, n, r, i, a) {
      let o = this.currentPoint.x,
        s = this.currentPoint.y;
      return (this.absarc(e + o, t + s, n, r, i, a), this);
    }
    absarc(e, t, n, r, i, a) {
      return (this.absellipse(e, t, n, n, r, i, a), this);
    }
    ellipse(e, t, n, r, i, a, o, s) {
      let c = this.currentPoint.x,
        l = this.currentPoint.y;
      return (this.absellipse(e + c, t + l, n, r, i, a, o, s), this);
    }
    absellipse(e, t, n, r, i, a, o, s) {
      let c = new so(e, t, n, r, i, a, o, s);
      if (this.curves.length > 0) {
        let e = c.getPoint(0);
        e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
      }
      this.curves.push(c);
      let l = c.getPoint(1);
      return (this.currentPoint.copy(l), this);
    }
    copy(e) {
      return (super.copy(e), this.currentPoint.copy(e.currentPoint), this);
    }
    toJSON() {
      let e = super.toJSON();
      return ((e.currentPoint = this.currentPoint.toArray()), e);
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.currentPoint.fromArray(e.currentPoint),
        this
      );
    }
  },
  Lo = class extends Io {
    constructor(e) {
      (super(e), (this.uuid = Rt()), (this.type = `Shape`), (this.holes = []));
    }
    getPointsHoles(e) {
      let t = [];
      for (let n = 0, r = this.holes.length; n < r; n++)
        t[n] = this.holes[n].getPoints(e);
      return t;
    }
    extractPoints(e) {
      return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
    }
    copy(e) {
      (super.copy(e), (this.holes = []));
      for (let t = 0, n = e.holes.length; t < n; t++) {
        let n = e.holes[t];
        this.holes.push(n.clone());
      }
      return this;
    }
    toJSON() {
      let e = super.toJSON();
      ((e.uuid = this.uuid), (e.holes = []));
      for (let t = 0, n = this.holes.length; t < n; t++) {
        let n = this.holes[t];
        e.holes.push(n.toJSON());
      }
      return e;
    }
    fromJSON(e) {
      (super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []));
      for (let t = 0, n = e.holes.length; t < n; t++) {
        let n = e.holes[t];
        this.holes.push(new Io().fromJSON(n));
      }
      return this;
    }
  };
function Ro(e, t, n = 2) {
  let r = t && t.length,
    i = r ? t[0] * n : e.length,
    a = zo(e, 0, i, n, !0),
    o = [];
  if (!a || a.next === a.prev) return o;
  let s, c, l;
  if ((r && (a = Ko(e, t, a, n)), e.length > 80 * n)) {
    ((s = e[0]), (c = e[1]));
    let t = s,
      r = c;
    for (let a = n; a < i; a += n) {
      let n = e[a],
        i = e[a + 1];
      (n < s && (s = n), i < c && (c = i), n > t && (t = n), i > r && (r = i));
    }
    ((l = Math.max(t - s, r - c)), (l = l === 0 ? 0 : 32767 / l));
  }
  return (Vo(a, o, n, s, c, l, 0), o);
}
function zo(e, t, n, r, i) {
  let a;
  if (i === gs(e, t, n, r) > 0)
    for (let i = t; i < n; i += r) a = ps((i / r) | 0, e[i], e[i + 1], a);
  else
    for (let i = n - r; i >= t; i -= r) a = ps((i / r) | 0, e[i], e[i + 1], a);
  return (a && as(a, a.next) && (ms(a), (a = a.next)), a);
}
function Bo(e, t) {
  if (!e) return e;
  t ||= e;
  let n = e,
    r;
  do
    if (
      ((r = !1), !n.steiner && (as(n, n.next) || is(n.prev, n, n.next) === 0))
    ) {
      if ((ms(n), (n = t = n.prev), n === n.next)) break;
      r = !0;
    } else n = n.next;
  while (r || n !== t);
  return t;
}
function Vo(e, t, n, r, i, a, o) {
  if (!e) return;
  !o && a && Zo(e, r, i, a);
  let s = e;
  for (; e.prev !== e.next; ) {
    let c = e.prev,
      l = e.next;
    if (a ? Uo(e, r, i, a) : Ho(e)) {
      (t.push(c.i, e.i, l.i), ms(e), (e = l.next), (s = l.next));
      continue;
    }
    if (((e = l), e === s)) {
      o
        ? o === 1
          ? ((e = Wo(Bo(e), t)), Vo(e, t, n, r, i, a, 2))
          : o === 2 && Go(e, t, n, r, i, a)
        : Vo(Bo(e), t, n, r, i, a, 1);
      break;
    }
  }
}
function Ho(e) {
  let t = e.prev,
    n = e,
    r = e.next;
  if (is(t, n, r) >= 0) return !1;
  let i = t.x,
    a = n.x,
    o = r.x,
    s = t.y,
    c = n.y,
    l = r.y,
    u = Math.min(i, a, o),
    d = Math.min(s, c, l),
    f = Math.max(i, a, o),
    p = Math.max(s, c, l),
    m = r.next;
  for (; m !== t; ) {
    if (
      m.x >= u &&
      m.x <= f &&
      m.y >= d &&
      m.y <= p &&
      ns(i, s, a, c, o, l, m.x, m.y) &&
      is(m.prev, m, m.next) >= 0
    )
      return !1;
    m = m.next;
  }
  return !0;
}
function Uo(e, t, n, r) {
  let i = e.prev,
    a = e,
    o = e.next;
  if (is(i, a, o) >= 0) return !1;
  let s = i.x,
    c = a.x,
    l = o.x,
    u = i.y,
    d = a.y,
    f = o.y,
    p = Math.min(s, c, l),
    m = Math.min(u, d, f),
    h = Math.max(s, c, l),
    g = Math.max(u, d, f),
    _ = $o(p, m, t, n, r),
    v = $o(h, g, t, n, r),
    y = e.prevZ,
    b = e.nextZ;
  for (; y && y.z >= _ && b && b.z <= v; ) {
    if (
      (y.x >= p &&
        y.x <= h &&
        y.y >= m &&
        y.y <= g &&
        y !== i &&
        y !== o &&
        ns(s, u, c, d, l, f, y.x, y.y) &&
        is(y.prev, y, y.next) >= 0) ||
      ((y = y.prevZ),
      b.x >= p &&
        b.x <= h &&
        b.y >= m &&
        b.y <= g &&
        b !== i &&
        b !== o &&
        ns(s, u, c, d, l, f, b.x, b.y) &&
        is(b.prev, b, b.next) >= 0)
    )
      return !1;
    b = b.nextZ;
  }
  for (; y && y.z >= _; ) {
    if (
      y.x >= p &&
      y.x <= h &&
      y.y >= m &&
      y.y <= g &&
      y !== i &&
      y !== o &&
      ns(s, u, c, d, l, f, y.x, y.y) &&
      is(y.prev, y, y.next) >= 0
    )
      return !1;
    y = y.prevZ;
  }
  for (; b && b.z <= v; ) {
    if (
      b.x >= p &&
      b.x <= h &&
      b.y >= m &&
      b.y <= g &&
      b !== i &&
      b !== o &&
      ns(s, u, c, d, l, f, b.x, b.y) &&
      is(b.prev, b, b.next) >= 0
    )
      return !1;
    b = b.nextZ;
  }
  return !0;
}
function Wo(e, t) {
  let n = e;
  do {
    let r = n.prev,
      i = n.next.next;
    (!as(r, i) &&
      os(r, n, n.next, i) &&
      us(r, i) &&
      us(i, r) &&
      (t.push(r.i, n.i, i.i), ms(n), ms(n.next), (n = e = i)),
      (n = n.next));
  } while (n !== e);
  return Bo(n);
}
function Go(e, t, n, r, i, a) {
  let o = e;
  do {
    let e = o.next.next;
    for (; e !== o.prev; ) {
      if (o.i !== e.i && rs(o, e)) {
        let s = fs(o, e);
        ((o = Bo(o, o.next)),
          (s = Bo(s, s.next)),
          Vo(o, t, n, r, i, a, 0),
          Vo(s, t, n, r, i, a, 0));
        return;
      }
      e = e.next;
    }
    o = o.next;
  } while (o !== e);
}
function Ko(e, t, n, r) {
  let i = [];
  for (let n = 0, a = t.length; n < a; n++) {
    let o = zo(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
    (o === o.next && (o.steiner = !0), i.push(es(o)));
  }
  i.sort(qo);
  for (let e = 0; e < i.length; e++) n = Jo(i[e], n);
  return n;
}
function qo(e, t) {
  let n = e.x - t.x;
  return (
    n === 0 &&
      ((n = e.y - t.y),
      n === 0 &&
        (n =
          (e.next.y - e.y) / (e.next.x - e.x) -
          (t.next.y - t.y) / (t.next.x - t.x))),
    n
  );
}
function Jo(e, t) {
  let n = Yo(e, t);
  if (!n) return t;
  let r = fs(n, e);
  return (Bo(r, r.next), Bo(n, n.next));
}
function Yo(e, t) {
  let n = t,
    r = e.x,
    i = e.y,
    a = -1 / 0,
    o;
  if (as(e, n)) return n;
  do {
    if (as(e, n.next)) return n.next;
    if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
      let e = n.x + ((i - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
      if (
        e <= r &&
        e > a &&
        ((a = e), (o = n.x < n.next.x ? n : n.next), e === r)
      )
        return o;
    }
    n = n.next;
  } while (n !== t);
  if (!o) return null;
  let s = o,
    c = o.x,
    l = o.y,
    u = 1 / 0;
  n = o;
  do {
    if (
      r >= n.x &&
      n.x >= c &&
      r !== n.x &&
      ts(i < l ? r : a, i, c, l, i < l ? a : r, i, n.x, n.y)
    ) {
      let t = Math.abs(i - n.y) / (r - n.x);
      us(n, e) &&
        (t < u || (t === u && (n.x > o.x || (n.x === o.x && Xo(o, n))))) &&
        ((o = n), (u = t));
    }
    n = n.next;
  } while (n !== s);
  return o;
}
function Xo(e, t) {
  return is(e.prev, e, t.prev) < 0 && is(t.next, e, e.next) < 0;
}
function Zo(e, t, n, r) {
  let i = e;
  do
    (i.z === 0 && (i.z = $o(i.x, i.y, t, n, r)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next));
  while (i !== e);
  ((i.prevZ.nextZ = null), (i.prevZ = null), Qo(i));
}
function Qo(e) {
  let t,
    n = 1;
  do {
    let r = e,
      i;
    e = null;
    let a = null;
    for (t = 0; r; ) {
      t++;
      let o = r,
        s = 0;
      for (let e = 0; e < n && (s++, (o = o.nextZ), o); e++);
      let c = n;
      for (; s > 0 || (c > 0 && o); )
        (s !== 0 && (c === 0 || !o || r.z <= o.z)
          ? ((i = r), (r = r.nextZ), s--)
          : ((i = o), (o = o.nextZ), c--),
          a ? (a.nextZ = i) : (e = i),
          (i.prevZ = a),
          (a = i));
      r = o;
    }
    ((a.nextZ = null), (n *= 2));
  } while (t > 1);
  return e;
}
function $o(e, t, n, r, i) {
  return (
    (e = ((e - n) * i) | 0),
    (t = ((t - r) * i) | 0),
    (e = (e | (e << 8)) & 16711935),
    (e = (e | (e << 4)) & 252645135),
    (e = (e | (e << 2)) & 858993459),
    (e = (e | (e << 1)) & 1431655765),
    (t = (t | (t << 8)) & 16711935),
    (t = (t | (t << 4)) & 252645135),
    (t = (t | (t << 2)) & 858993459),
    (t = (t | (t << 1)) & 1431655765),
    e | (t << 1)
  );
}
function es(e) {
  let t = e,
    n = e;
  do ((t.x < n.x || (t.x === n.x && t.y < n.y)) && (n = t), (t = t.next));
  while (t !== e);
  return n;
}
function ts(e, t, n, r, i, a, o, s) {
  return (
    (i - o) * (t - s) >= (e - o) * (a - s) &&
    (e - o) * (r - s) >= (n - o) * (t - s) &&
    (n - o) * (a - s) >= (i - o) * (r - s)
  );
}
function ns(e, t, n, r, i, a, o, s) {
  return (e !== o || t !== s) && ts(e, t, n, r, i, a, o, s);
}
function rs(e, t) {
  return (
    e.next.i !== t.i &&
    e.prev.i !== t.i &&
    !ls(e, t) &&
    ((us(e, t) &&
      us(t, e) &&
      ds(e, t) &&
      (is(e.prev, e, t.prev) || is(e, t.prev, t))) ||
      (as(e, t) && is(e.prev, e, e.next) > 0 && is(t.prev, t, t.next) > 0))
  );
}
function is(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function as(e, t) {
  return e.x === t.x && e.y === t.y;
}
function os(e, t, n, r) {
  let i = cs(is(e, t, n)),
    a = cs(is(e, t, r)),
    o = cs(is(n, r, e)),
    s = cs(is(n, r, t));
  return !!(
    (i !== a && o !== s) ||
    (i === 0 && ss(e, n, t)) ||
    (a === 0 && ss(e, r, t)) ||
    (o === 0 && ss(n, e, r)) ||
    (s === 0 && ss(n, t, r))
  );
}
function ss(e, t, n) {
  return (
    t.x <= Math.max(e.x, n.x) &&
    t.x >= Math.min(e.x, n.x) &&
    t.y <= Math.max(e.y, n.y) &&
    t.y >= Math.min(e.y, n.y)
  );
}
function cs(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function ls(e, t) {
  let n = e;
  do {
    if (
      n.i !== e.i &&
      n.next.i !== e.i &&
      n.i !== t.i &&
      n.next.i !== t.i &&
      os(n, n.next, e, t)
    )
      return !0;
    n = n.next;
  } while (n !== e);
  return !1;
}
function us(e, t) {
  return is(e.prev, e, e.next) < 0
    ? is(e, t, e.next) >= 0 && is(e, e.prev, t) >= 0
    : is(e, t, e.prev) < 0 || is(e, e.next, t) < 0;
}
function ds(e, t) {
  let n = e,
    r = !1,
    i = (e.x + t.x) / 2,
    a = (e.y + t.y) / 2;
  do
    (n.y > a != n.next.y > a &&
      n.next.y !== n.y &&
      i < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x &&
      (r = !r),
      (n = n.next));
  while (n !== e);
  return r;
}
function fs(e, t) {
  let n = hs(e.i, e.x, e.y),
    r = hs(t.i, t.x, t.y),
    i = e.next,
    a = t.prev;
  return (
    (e.next = t),
    (t.prev = e),
    (n.next = i),
    (i.prev = n),
    (r.next = n),
    (n.prev = r),
    (a.next = r),
    (r.prev = a),
    r
  );
}
function ps(e, t, n, r) {
  let i = hs(e, t, n);
  return (
    r
      ? ((i.next = r.next), (i.prev = r), (r.next.prev = i), (r.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  );
}
function ms(e) {
  ((e.next.prev = e.prev),
    (e.prev.next = e.next),
    e.prevZ && (e.prevZ.nextZ = e.nextZ),
    e.nextZ && (e.nextZ.prevZ = e.prevZ));
}
function hs(e, t, n) {
  return {
    i: e,
    x: t,
    y: n,
    prev: null,
    next: null,
    z: 0,
    prevZ: null,
    nextZ: null,
    steiner: !1,
  };
}
function gs(e, t, n, r) {
  let i = 0;
  for (let a = t, o = n - r; a < n; a += r)
    ((i += (e[o] - e[a]) * (e[a + 1] + e[o + 1])), (o = a));
  return i;
}
var _s = class {
    static triangulate(e, t, n = 2) {
      return Ro(e, t, n);
    }
  },
  vs = class e {
    static area(e) {
      let t = e.length,
        n = 0;
      for (let r = t - 1, i = 0; i < t; r = i++)
        n += e[r].x * e[i].y - e[i].x * e[r].y;
      return n * 0.5;
    }
    static isClockWise(t) {
      return e.area(t) < 0;
    }
    static triangulateShape(e, t) {
      let n = [],
        r = [],
        i = [];
      (ys(e), bs(n, e));
      let a = e.length;
      t.forEach(ys);
      for (let e = 0; e < t.length; e++)
        (r.push(a), (a += t[e].length), bs(n, t[e]));
      let o = _s.triangulate(n, r);
      for (let e = 0; e < o.length; e += 3) i.push(o.slice(e, e + 3));
      return i;
    }
  };
function ys(e) {
  let t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function bs(e, t) {
  for (let n = 0; n < t.length; n++) (e.push(t[n].x), e.push(t[n].y));
}
var xs = class e extends oi {
    constructor(
      e = new Lo([
        new j(0.5, 0.5),
        new j(-0.5, 0.5),
        new j(-0.5, -0.5),
        new j(0.5, -0.5),
      ]),
      t = {},
    ) {
      (super(),
        (this.type = `ExtrudeGeometry`),
        (this.parameters = { shapes: e, options: t }),
        (e = Array.isArray(e) ? e : [e]));
      let n = this,
        r = [],
        i = [];
      for (let t = 0, n = e.length; t < n; t++) {
        let n = e[t];
        a(n);
      }
      (this.setAttribute(`position`, new F(r, 3)),
        this.setAttribute(`uv`, new F(i, 2)),
        this.computeVertexNormals());
      function a(e) {
        let a = [],
          o = t.curveSegments === void 0 ? 12 : t.curveSegments,
          s = t.steps === void 0 ? 1 : t.steps,
          c = t.depth === void 0 ? 1 : t.depth,
          l = t.bevelEnabled === void 0 || t.bevelEnabled,
          u = t.bevelThickness === void 0 ? 0.2 : t.bevelThickness,
          d = t.bevelSize === void 0 ? u - 0.1 : t.bevelSize,
          f = t.bevelOffset === void 0 ? 0 : t.bevelOffset,
          p = t.bevelSegments === void 0 ? 3 : t.bevelSegments,
          m = t.extrudePath,
          h = t.UVGenerator === void 0 ? Ss : t.UVGenerator,
          g,
          _ = !1,
          v,
          y,
          b,
          x;
        if (m) {
          ((g = m.getSpacedPoints(s)), (_ = !0), (l = !1));
          let e = m.isCatmullRomCurve3 ? m.closed : !1;
          ((v = m.computeFrenetFrames(s, e)),
            (y = new M()),
            (b = new M()),
            (x = new M()));
        }
        l || ((p = 0), (u = 0), (d = 0), (f = 0));
        let S = e.extractPoints(o),
          C = S.shape,
          w = S.holes;
        if (!vs.isClockWise(C)) {
          C = C.reverse();
          for (let e = 0, t = w.length; e < t; e++) {
            let t = w[e];
            vs.isClockWise(t) && (w[e] = t.reverse());
          }
        }
        function T(e) {
          let t = e[0];
          for (let n = 1; n <= e.length; n++) {
            let r = n % e.length,
              i = e[r],
              a = i.x - t.x,
              o = i.y - t.y,
              s = a * a + o * o,
              c = Math.max(
                Math.abs(i.x),
                Math.abs(i.y),
                Math.abs(t.x),
                Math.abs(t.y),
              );
            if (s <= 10000000000000001e-36 * c * c) {
              (e.splice(r, 1), n--);
              continue;
            }
            t = i;
          }
        }
        (T(C), w.forEach(T));
        let E = w.length,
          D = C;
        for (let e = 0; e < E; e++) {
          let t = w[e];
          C = C.concat(t);
        }
        function O(e, t, n) {
          return (
            t || kt(`ExtrudeGeometry: vec does not exist`),
            e.clone().addScaledVector(t, n)
          );
        }
        let k = C.length;
        function A(e, t, n) {
          let r,
            i,
            a,
            o = e.x - t.x,
            s = e.y - t.y,
            c = n.x - e.x,
            l = n.y - e.y,
            u = o * o + s * s,
            d = o * l - s * c;
          if (Math.abs(d) > 2 ** -52) {
            let d = Math.sqrt(u),
              f = Math.sqrt(c * c + l * l),
              p = t.x - s / d,
              m = t.y + o / d,
              h = n.x - l / f,
              g = n.y + c / f,
              _ = ((h - p) * l - (g - m) * c) / (o * l - s * c);
            ((r = p + o * _ - e.x), (i = m + s * _ - e.y));
            let v = r * r + i * i;
            if (v <= 2) return new j(r, i);
            a = Math.sqrt(v / 2);
          } else {
            let e = !1;
            (o > 2 ** -52
              ? c > 2 ** -52 && (e = !0)
              : o < -(2 ** -52)
                ? c < -(2 ** -52) && (e = !0)
                : Math.sign(s) === Math.sign(l) && (e = !0),
              e
                ? ((r = -s), (i = o), (a = Math.sqrt(u)))
                : ((r = o), (i = s), (a = Math.sqrt(u / 2))));
          }
          return new j(r / a, i / a);
        }
        let ee = [];
        for (
          let e = 0, t = D.length, n = t - 1, r = e + 1;
          e < t;
          e++, n++, r++
        )
          (n === t && (n = 0),
            r === t && (r = 0),
            (ee[e] = A(D[e], D[n], D[r])));
        let te = [],
          ne,
          re = ee.concat();
        for (let e = 0, t = E; e < t; e++) {
          let t = w[e];
          ne = [];
          for (
            let e = 0, n = t.length, r = n - 1, i = e + 1;
            e < n;
            e++, r++, i++
          )
            (r === n && (r = 0),
              i === n && (i = 0),
              (ne[e] = A(t[e], t[r], t[i])));
          (te.push(ne), (re = re.concat(ne)));
        }
        let ie;
        if (p === 0) ie = vs.triangulateShape(D, w);
        else {
          let e = [],
            t = [];
          for (let n = 0; n < p; n++) {
            let r = n / p,
              i = u * Math.cos((r * Math.PI) / 2),
              a = d * Math.sin((r * Math.PI) / 2) + f;
            for (let t = 0, n = D.length; t < n; t++) {
              let n = O(D[t], ee[t], a);
              (ue(n.x, n.y, -i), r === 0 && e.push(n));
            }
            for (let e = 0, n = E; e < n; e++) {
              let n = w[e];
              ne = te[e];
              let o = [];
              for (let e = 0, t = n.length; e < t; e++) {
                let t = O(n[e], ne[e], a);
                (ue(t.x, t.y, -i), r === 0 && o.push(t));
              }
              r === 0 && t.push(o);
            }
          }
          ie = vs.triangulateShape(e, t);
        }
        let ae = ie.length,
          oe = d + f;
        for (let e = 0; e < k; e++) {
          let t = l ? O(C[e], re[e], oe) : C[e];
          _
            ? (b.copy(v.normals[0]).multiplyScalar(t.x),
              y.copy(v.binormals[0]).multiplyScalar(t.y),
              x.copy(g[0]).add(b).add(y),
              ue(x.x, x.y, x.z))
            : ue(t.x, t.y, 0);
        }
        for (let e = 1; e <= s; e++)
          for (let t = 0; t < k; t++) {
            let n = l ? O(C[t], re[t], oe) : C[t];
            _
              ? (b.copy(v.normals[e]).multiplyScalar(n.x),
                y.copy(v.binormals[e]).multiplyScalar(n.y),
                x.copy(g[e]).add(b).add(y),
                ue(x.x, x.y, x.z))
              : ue(n.x, n.y, (c / s) * e);
          }
        for (let e = p - 1; e >= 0; e--) {
          let t = e / p,
            n = u * Math.cos((t * Math.PI) / 2),
            r = d * Math.sin((t * Math.PI) / 2) + f;
          for (let e = 0, t = D.length; e < t; e++) {
            let t = O(D[e], ee[e], r);
            ue(t.x, t.y, c + n);
          }
          for (let e = 0, t = w.length; e < t; e++) {
            let t = w[e];
            ne = te[e];
            for (let e = 0, i = t.length; e < i; e++) {
              let i = O(t[e], ne[e], r);
              _
                ? ue(i.x, i.y + g[s - 1].y, g[s - 1].x + n)
                : ue(i.x, i.y, c + n);
            }
          }
        }
        (se(), ce());
        function se() {
          let e = r.length / 3;
          if (l) {
            let e = 0,
              t = k * e;
            for (let e = 0; e < ae; e++) {
              let n = ie[e];
              de(n[2] + t, n[1] + t, n[0] + t);
            }
            ((e = s + p * 2), (t = k * e));
            for (let e = 0; e < ae; e++) {
              let n = ie[e];
              de(n[0] + t, n[1] + t, n[2] + t);
            }
          } else {
            for (let e = 0; e < ae; e++) {
              let t = ie[e];
              de(t[2], t[1], t[0]);
            }
            for (let e = 0; e < ae; e++) {
              let t = ie[e];
              de(t[0] + k * s, t[1] + k * s, t[2] + k * s);
            }
          }
          n.addGroup(e, r.length / 3 - e, 0);
        }
        function ce() {
          let e = r.length / 3,
            t = 0;
          (le(D, t), (t += D.length));
          for (let e = 0, n = w.length; e < n; e++) {
            let n = w[e];
            (le(n, t), (t += n.length));
          }
          n.addGroup(e, r.length / 3 - e, 1);
        }
        function le(e, t) {
          let n = e.length;
          for (; --n >= 0; ) {
            let r = n,
              i = n - 1;
            i < 0 && (i = e.length - 1);
            for (let e = 0, n = s + p * 2; e < n; e++) {
              let n = k * e,
                a = k * (e + 1);
              fe(t + r + n, t + i + n, t + i + a, t + r + a);
            }
          }
        }
        function ue(e, t, n) {
          (a.push(e), a.push(t), a.push(n));
        }
        function de(e, t, i) {
          (pe(e), pe(t), pe(i));
          let a = r.length / 3,
            o = h.generateTopUV(n, r, a - 3, a - 2, a - 1);
          (me(o[0]), me(o[1]), me(o[2]));
        }
        function fe(e, t, i, a) {
          (pe(e), pe(t), pe(a), pe(t), pe(i), pe(a));
          let o = r.length / 3,
            s = h.generateSideWallUV(n, r, o - 6, o - 3, o - 2, o - 1);
          (me(s[0]), me(s[1]), me(s[3]), me(s[1]), me(s[2]), me(s[3]));
        }
        function pe(e) {
          (r.push(a[e * 3 + 0]), r.push(a[e * 3 + 1]), r.push(a[e * 3 + 2]));
        }
        function me(e) {
          (i.push(e.x), i.push(e.y));
        }
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    toJSON() {
      let e = super.toJSON(),
        t = this.parameters.shapes,
        n = this.parameters.options;
      return Cs(t, n, e);
    }
    static fromJSON(t, n) {
      let r = [];
      for (let e = 0, i = t.shapes.length; e < i; e++) {
        let i = n[t.shapes[e]];
        r.push(i);
      }
      let i = t.options.extrudePath;
      return (
        i !== void 0 && (t.options.extrudePath = new Po[i.type]().fromJSON(i)),
        new e(r, t.options)
      );
    }
  },
  Ss = {
    generateTopUV: function (e, t, n, r, i) {
      let a = t[n * 3],
        o = t[n * 3 + 1],
        s = t[r * 3],
        c = t[r * 3 + 1],
        l = t[i * 3],
        u = t[i * 3 + 1];
      return [new j(a, o), new j(s, c), new j(l, u)];
    },
    generateSideWallUV: function (e, t, n, r, i, a) {
      let o = t[n * 3],
        s = t[n * 3 + 1],
        c = t[n * 3 + 2],
        l = t[r * 3],
        u = t[r * 3 + 1],
        d = t[r * 3 + 2],
        f = t[i * 3],
        p = t[i * 3 + 1],
        m = t[i * 3 + 2],
        h = t[a * 3],
        g = t[a * 3 + 1],
        _ = t[a * 3 + 2];
      return Math.abs(s - u) < Math.abs(o - l)
        ? [new j(o, 1 - c), new j(l, 1 - d), new j(f, 1 - m), new j(h, 1 - _)]
        : [new j(s, 1 - c), new j(u, 1 - d), new j(p, 1 - m), new j(g, 1 - _)];
    },
  };
function Cs(e, t, n) {
  if (((n.shapes = []), Array.isArray(e)))
    for (let t = 0, r = e.length; t < r; t++) {
      let r = e[t];
      n.shapes.push(r.uuid);
    }
  else n.shapes.push(e.uuid);
  return (
    (n.options = Object.assign({}, t)),
    t.extrudePath !== void 0 &&
      (n.options.extrudePath = t.extrudePath.toJSON()),
    n
  );
}
var ws = class e extends oi {
    constructor(e = 1, t = 1, n = 1, r = 1) {
      (super(),
        (this.type = `PlaneGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          widthSegments: n,
          heightSegments: r,
        }));
      let i = e / 2,
        a = t / 2,
        o = Math.floor(n),
        s = Math.floor(r),
        c = o + 1,
        l = s + 1,
        u = e / o,
        d = t / s,
        f = [],
        p = [],
        m = [],
        h = [];
      for (let e = 0; e < l; e++) {
        let t = e * d - a;
        for (let n = 0; n < c; n++) {
          let r = n * u - i;
          (p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s));
        }
      }
      for (let e = 0; e < s; e++)
        for (let t = 0; t < o; t++) {
          let n = t + c * e,
            r = t + c * (e + 1),
            i = t + 1 + c * (e + 1),
            a = t + 1 + c * e;
          (f.push(n, r, a), f.push(r, i, a));
        }
      (this.setIndex(f),
        this.setAttribute(`position`, new F(p, 3)),
        this.setAttribute(`normal`, new F(m, 3)),
        this.setAttribute(`uv`, new F(h, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  },
  Ts = class e extends oi {
    constructor(e = 0.5, t = 1, n = 32, r = 1, i = 0, a = Math.PI * 2) {
      (super(),
        (this.type = `RingGeometry`),
        (this.parameters = {
          innerRadius: e,
          outerRadius: t,
          thetaSegments: n,
          phiSegments: r,
          thetaStart: i,
          thetaLength: a,
        }),
        (n = Math.max(3, n)),
        (r = Math.max(1, r)));
      let o = [],
        s = [],
        c = [],
        l = [],
        u = e,
        d = (t - e) / r,
        f = new M(),
        p = new j();
      for (let e = 0; e <= r; e++) {
        for (let e = 0; e <= n; e++) {
          let r = i + (e / n) * a;
          ((f.x = u * Math.cos(r)),
            (f.y = u * Math.sin(r)),
            s.push(f.x, f.y, f.z),
            c.push(0, 0, 1),
            (p.x = (f.x / t + 1) / 2),
            (p.y = (f.y / t + 1) / 2),
            l.push(p.x, p.y));
        }
        u += d;
      }
      for (let e = 0; e < r; e++) {
        let t = e * (n + 1);
        for (let e = 0; e < n; e++) {
          let r = e + t,
            i = r,
            a = r + n + 1,
            s = r + n + 2,
            c = r + 1;
          (o.push(i, a, c), o.push(a, s, c));
        }
      }
      (this.setIndex(o),
        this.setAttribute(`position`, new F(s, 3)),
        this.setAttribute(`normal`, new F(c, 3)),
        this.setAttribute(`uv`, new F(l, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.innerRadius,
        t.outerRadius,
        t.thetaSegments,
        t.phiSegments,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  Es = class e extends oi {
    constructor(
      e = new Lo([new j(0, 0.5), new j(-0.5, -0.5), new j(0.5, -0.5)]),
      t = 12,
    ) {
      (super(),
        (this.type = `ShapeGeometry`),
        (this.parameters = { shapes: e, curveSegments: t }));
      let n = [],
        r = [],
        i = [],
        a = [],
        o = 0,
        s = 0;
      if (Array.isArray(e) === !1) c(e);
      else
        for (let t = 0; t < e.length; t++)
          (c(e[t]), this.addGroup(o, s, t), (o += s), (s = 0));
      (this.setIndex(n),
        this.setAttribute(`position`, new F(r, 3)),
        this.setAttribute(`normal`, new F(i, 3)),
        this.setAttribute(`uv`, new F(a, 2)));
      function c(e) {
        let o = r.length / 3,
          c = e.extractPoints(t),
          l = c.shape,
          u = c.holes;
        vs.isClockWise(l) === !1 && (l = l.reverse());
        for (let e = 0, t = u.length; e < t; e++) {
          let t = u[e];
          vs.isClockWise(t) === !0 && (u[e] = t.reverse());
        }
        let d = vs.triangulateShape(l, u);
        for (let e = 0, t = u.length; e < t; e++) {
          let t = u[e];
          l = l.concat(t);
        }
        for (let e = 0, t = l.length; e < t; e++) {
          let t = l[e];
          (r.push(t.x, t.y, 0), i.push(0, 0, 1), a.push(t.x, t.y));
        }
        for (let e = 0, t = d.length; e < t; e++) {
          let t = d[e],
            r = t[0] + o,
            i = t[1] + o,
            a = t[2] + o;
          (n.push(r, i, a), (s += 3));
        }
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    toJSON() {
      let e = super.toJSON(),
        t = this.parameters.shapes;
      return Ds(t, e);
    }
    static fromJSON(t, n) {
      let r = [];
      for (let e = 0, i = t.shapes.length; e < i; e++) {
        let i = n[t.shapes[e]];
        r.push(i);
      }
      return new e(r, t.curveSegments);
    }
  };
function Ds(e, t) {
  if (((t.shapes = []), Array.isArray(e)))
    for (let n = 0, r = e.length; n < r; n++) {
      let r = e[n];
      t.shapes.push(r.uuid);
    }
  else t.shapes.push(e.uuid);
  return t;
}
var Os = class e extends oi {
    constructor(
      e = 1,
      t = 32,
      n = 16,
      r = 0,
      i = Math.PI * 2,
      a = 0,
      o = Math.PI,
    ) {
      (super(),
        (this.type = `SphereGeometry`),
        (this.parameters = {
          radius: e,
          widthSegments: t,
          heightSegments: n,
          phiStart: r,
          phiLength: i,
          thetaStart: a,
          thetaLength: o,
        }),
        (t = Math.max(3, Math.floor(t))),
        (n = Math.max(2, Math.floor(n))));
      let s = Math.min(a + o, Math.PI),
        c = 0,
        l = [],
        u = new M(),
        d = new M(),
        f = [],
        p = [],
        m = [],
        h = [];
      for (let f = 0; f <= n; f++) {
        let g = [],
          _ = f / n,
          v = a + _ * o,
          y = e * Math.cos(v),
          b = Math.sqrt(e * e - y * y),
          x = 0;
        f === 0 && a === 0
          ? (x = 0.5 / t)
          : f === n && s === Math.PI && (x = -0.5 / t);
        for (let e = 0; e <= t; e++) {
          let n = e / t,
            a = r + n * i;
          ((u.x = -b * Math.cos(a)),
            (u.y = y),
            (u.z = b * Math.sin(a)),
            p.push(u.x, u.y, u.z),
            d.copy(u).normalize(),
            m.push(d.x, d.y, d.z),
            h.push(n + x, 1 - _),
            g.push(c++));
        }
        l.push(g);
      }
      for (let e = 0; e < n; e++)
        for (let r = 0; r < t; r++) {
          let t = l[e][r + 1],
            i = l[e][r],
            o = l[e + 1][r],
            c = l[e + 1][r + 1];
          ((e !== 0 || a > 0) && f.push(t, i, c),
            (e !== n - 1 || s < Math.PI) && f.push(i, o, c));
        }
      (this.setIndex(f),
        this.setAttribute(`position`, new F(p, 3)),
        this.setAttribute(`normal`, new F(m, 3)),
        this.setAttribute(`uv`, new F(h, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  ks = class e extends oi {
    constructor(
      e = 1,
      t = 0.4,
      n = 12,
      r = 48,
      i = Math.PI * 2,
      a = 0,
      o = Math.PI * 2,
    ) {
      (super(),
        (this.type = `TorusGeometry`),
        (this.parameters = {
          radius: e,
          tube: t,
          radialSegments: n,
          tubularSegments: r,
          arc: i,
          thetaStart: a,
          thetaLength: o,
        }),
        (n = Math.floor(n)),
        (r = Math.floor(r)));
      let s = [],
        c = [],
        l = [],
        u = [],
        d = new M(),
        f = new M(),
        p = new M();
      for (let s = 0; s <= n; s++) {
        let m = a + (s / n) * o;
        for (let a = 0; a <= r; a++) {
          let o = (a / r) * i;
          ((f.x = (e + t * Math.cos(m)) * Math.cos(o)),
            (f.y = (e + t * Math.cos(m)) * Math.sin(o)),
            (f.z = t * Math.sin(m)),
            c.push(f.x, f.y, f.z),
            (d.x = e * Math.cos(o)),
            (d.y = e * Math.sin(o)),
            p.subVectors(f, d).normalize(),
            l.push(p.x, p.y, p.z),
            u.push(a / r),
            u.push(s / n));
        }
      }
      for (let e = 1; e <= n; e++)
        for (let t = 1; t <= r; t++) {
          let n = (r + 1) * e + t - 1,
            i = (r + 1) * (e - 1) + t - 1,
            a = (r + 1) * (e - 1) + t,
            o = (r + 1) * e + t;
          (s.push(n, i, o), s.push(i, a, o));
        }
      (this.setIndex(s),
        this.setAttribute(`position`, new F(c, 3)),
        this.setAttribute(`normal`, new F(l, 3)),
        this.setAttribute(`uv`, new F(u, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.tube,
        t.radialSegments,
        t.tubularSegments,
        t.arc,
        t.thetaStart,
        t.thetaLength,
      );
    }
  };
function As(e) {
  let t = {};
  for (let n in e) {
    t[n] = {};
    for (let r in e[n]) {
      let i = e[n][r];
      if (Ms(i))
        i.isRenderTargetTexture
          ? (Ot(
              `UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`,
            ),
            (t[n][r] = null))
          : (t[n][r] = i.clone());
      else if (Array.isArray(i)) {
        if (Ms(i[0])) {
          let e = [];
          for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
          t[n][r] = e;
        } else t[n][r] = i.slice();
      } else t[n][r] = i;
    }
  }
  return t;
}
function js(e) {
  let t = {};
  for (let n = 0; n < e.length; n++) {
    let r = As(e[n]);
    for (let e in r) t[e] = r[e];
  }
  return t;
}
function Ms(e) {
  return (
    e &&
    (e.isColor ||
      e.isMatrix3 ||
      e.isMatrix4 ||
      e.isVector2 ||
      e.isVector3 ||
      e.isVector4 ||
      e.isTexture ||
      e.isQuaternion)
  );
}
function Ns(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) t.push(e[n].clone());
  return t;
}
function Ps(e) {
  let t = e.getRenderTarget();
  return t === null
    ? e.outputColorSpace
    : t.isXRRenderTarget === !0
      ? t.texture.colorSpace
      : gn.workingColorSpace;
}
var Fs = { clone: As, merge: js },
  Is = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Ls = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,
  Rs = class extends hi {
    constructor(e) {
      (super(),
        (this.isShaderMaterial = !0),
        (this.type = `ShaderMaterial`),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.uniformsGroups = []),
        (this.vertexShader = Is),
        (this.fragmentShader = Ls),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.forceSinglePass = !0),
        (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv1: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        e !== void 0 && this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.fragmentShader = e.fragmentShader),
        (this.vertexShader = e.vertexShader),
        (this.uniforms = As(e.uniforms)),
        (this.uniformsGroups = Ns(e.uniformsGroups)),
        (this.defines = Object.assign({}, e.defines)),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.fog = e.fog),
        (this.lights = e.lights),
        (this.clipping = e.clipping),
        (this.extensions = Object.assign({}, e.extensions)),
        (this.glslVersion = e.glslVersion),
        (this.defaultAttributeValues = Object.assign(
          {},
          e.defaultAttributeValues,
        )),
        (this.index0AttributeName = e.index0AttributeName),
        (this.uniformsNeedUpdate = e.uniformsNeedUpdate),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      ((t.glslVersion = this.glslVersion), (t.uniforms = {}));
      for (let n in this.uniforms) {
        let r = this.uniforms[n].value;
        r && r.isTexture
          ? (t.uniforms[n] = { type: `t`, value: r.toJSON(e).uuid })
          : r && r.isColor
            ? (t.uniforms[n] = { type: `c`, value: r.getHex() })
            : r && r.isVector2
              ? (t.uniforms[n] = { type: `v2`, value: r.toArray() })
              : r && r.isVector3
                ? (t.uniforms[n] = { type: `v3`, value: r.toArray() })
                : r && r.isVector4
                  ? (t.uniforms[n] = { type: `v4`, value: r.toArray() })
                  : r && r.isMatrix3
                    ? (t.uniforms[n] = { type: `m3`, value: r.toArray() })
                    : r && r.isMatrix4
                      ? (t.uniforms[n] = { type: `m4`, value: r.toArray() })
                      : (t.uniforms[n] = { value: r });
      }
      (Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        (t.vertexShader = this.vertexShader),
        (t.fragmentShader = this.fragmentShader),
        (t.lights = this.lights),
        (t.clipping = this.clipping));
      let n = {};
      for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
      return (Object.keys(n).length > 0 && (t.extensions = n), t);
    }
    fromJSON(e, t) {
      if ((super.fromJSON(e, t), e.uniforms !== void 0))
        for (let n in e.uniforms) {
          let r = e.uniforms[n];
          switch (((this.uniforms[n] = {}), r.type)) {
            case `t`:
              this.uniforms[n].value = t[r.value] || null;
              break;
            case `c`:
              this.uniforms[n].value = new P().setHex(r.value);
              break;
            case `v2`:
              this.uniforms[n].value = new j().fromArray(r.value);
              break;
            case `v3`:
              this.uniforms[n].value = new M().fromArray(r.value);
              break;
            case `v4`:
              this.uniforms[n].value = new Dn().fromArray(r.value);
              break;
            case `m3`:
              this.uniforms[n].value = new dn().fromArray(r.value);
              break;
            case `m4`:
              this.uniforms[n].value = new N().fromArray(r.value);
              break;
            default:
              this.uniforms[n].value = r.value;
          }
        }
      if (
        (e.defines !== void 0 && (this.defines = e.defines),
        e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader),
        e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader),
        e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion),
        e.extensions !== void 0)
      )
        for (let t in e.extensions) this.extensions[t] = e.extensions[t];
      return (
        e.lights !== void 0 && (this.lights = e.lights),
        e.clipping !== void 0 && (this.clipping = e.clipping),
        this
      );
    }
  },
  zs = class extends Rs {
    constructor(e) {
      (super(e),
        (this.isRawShaderMaterial = !0),
        (this.type = `RawShaderMaterial`));
    }
  },
  Bs = class extends hi {
    constructor(e) {
      (super(),
        (this.isMeshDepthMaterial = !0),
        (this.type = `MeshDepthMaterial`),
        (this.depthPacking = dt),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.depthPacking = e.depthPacking),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        this
      );
    }
  },
  Vs = class extends hi {
    constructor(e) {
      (super(),
        (this.isMeshDistanceMaterial = !0),
        (this.type = `MeshDistanceMaterial`),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        this
      );
    }
  };
function Hs(e, t) {
  return !e || e.constructor === t
    ? e
    : typeof t.BYTES_PER_ELEMENT == `number`
      ? new t(e)
      : Array.prototype.slice.call(e);
}
function Us(e) {
  return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
var Ws = class {
    constructor(e, t, n, r) {
      ((this.parameterPositions = e),
        (this._cachedIndex = 0),
        (this.resultBuffer = r === void 0 ? new t.constructor(n) : r),
        (this.sampleValues = t),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {}));
    }
    evaluate(e) {
      let t = this.parameterPositions,
        n = this._cachedIndex,
        r = t[n],
        i = t[n - 1];
      validate_interval: {
        seek: {
          let a;
          linear_scan: {
            forward_scan: if (!(e < r)) {
              for (let a = n + 2; ; ) {
                if (r === void 0) {
                  if (e < i) break forward_scan;
                  return (
                    (n = t.length),
                    (this._cachedIndex = n),
                    this.copySampleValue_(n - 1)
                  );
                }
                if (n === a) break;
                if (((i = r), (r = t[++n]), e < r)) break seek;
              }
              a = t.length;
              break linear_scan;
            }
            if (!(e >= i)) {
              let o = t[1];
              e < o && ((n = 2), (i = o));
              for (let a = n - 2; ; ) {
                if (i === void 0)
                  return ((this._cachedIndex = 0), this.copySampleValue_(0));
                if (n === a) break;
                if (((r = i), (i = t[--n - 1]), e >= i)) break seek;
              }
              ((a = n), (n = 0));
              break linear_scan;
            }
            break validate_interval;
          }
          for (; n < a; ) {
            let r = (n + a) >>> 1;
            e < t[r] ? (a = r) : (n = r + 1);
          }
          if (((r = t[n]), (i = t[n - 1]), i === void 0))
            return ((this._cachedIndex = 0), this.copySampleValue_(0));
          if (r === void 0)
            return (
              (n = t.length),
              (this._cachedIndex = n),
              this.copySampleValue_(n - 1)
            );
        }
        ((this._cachedIndex = n), this.intervalChanged_(n, i, r));
      }
      return this.interpolate_(n, i, e, r);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r;
      for (let e = 0; e !== r; ++e) t[e] = n[i + e];
      return t;
    }
    interpolate_() {
      throw Error(`THREE.Interpolant: Call to abstract method.`);
    }
    intervalChanged_() {}
  },
  Gs = class extends Ws {
    constructor(e, t, n, r) {
      (super(e, t, n, r),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: ct, endingEnd: ct }));
    }
    intervalChanged_(e, t, n) {
      let r = this.parameterPositions,
        i = e - 2,
        a = e + 1,
        o = r[i],
        s = r[a];
      if (o === void 0)
        switch (this.getSettings_().endingStart) {
          case lt:
            ((i = e), (o = 2 * t - n));
            break;
          case ut:
            ((i = r.length - 2), (o = t + r[i] - r[i + 1]));
            break;
          default:
            ((i = e), (o = n));
        }
      if (s === void 0)
        switch (this.getSettings_().endingEnd) {
          case lt:
            ((a = e), (s = 2 * n - t));
            break;
          case ut:
            ((a = 1), (s = n + r[1] - r[0]));
            break;
          default:
            ((a = e - 1), (s = t));
        }
      let c = (n - t) * 0.5,
        l = this.valueSize;
      ((this._weightPrev = c / (t - o)),
        (this._weightNext = c / (s - n)),
        (this._offsetPrev = i * l),
        (this._offsetNext = a * l));
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this._offsetPrev,
        u = this._offsetNext,
        d = this._weightPrev,
        f = this._weightNext,
        p = (n - t) / (r - t),
        m = p * p,
        h = m * p,
        g = -d * h + 2 * d * m - d * p,
        _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-0.5 + d) * p + 1,
        v = (-1 - f) * h + (1.5 + f) * m + 0.5 * p,
        y = f * h - f * m;
      for (let e = 0; e !== o; ++e)
        i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
      return i;
    }
  },
  Ks = class extends Ws {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = (n - t) / (r - t),
        u = 1 - l;
      for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
      return i;
    }
  },
  qs = class extends Ws {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  },
  Js = class extends Ws {
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this.inTangents,
        u = this.outTangents;
      if (!l || !u) {
        let e = (n - t) / (r - t),
          l = 1 - e;
        for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
        return i;
      }
      let d = o * 2,
        f = e - 1;
      for (let p = 0; p !== o; ++p) {
        let o = a[c + p],
          m = a[s + p],
          h = f * d + p * 2,
          g = u[h],
          _ = u[h + 1],
          v = e * d + p * 2,
          y = l[v],
          b = l[v + 1],
          x = Zs(n, t, g, y, r);
        i[p] = Ys(x, o, _, b, m);
      }
      return i;
    }
  };
function Ys(e, t, n, r, i) {
  let a = 1 - e;
  return a * a * a * t + 3 * a * a * e * n + 3 * a * e * e * r + e * e * e * i;
}
function Xs(e, t, n, r, i) {
  let a = 1 - e;
  return 3 * a * a * (n - t) + 6 * a * e * (r - n) + 3 * e * e * (i - r);
}
function Zs(e, t, n, r, i) {
  let a = (e - t) / (i - t);
  for (let o = 0; o < 8; o++) {
    let o = Ys(a, t, n, r, i) - e;
    if (Math.abs(o) < 1e-10) break;
    let s = Xs(a, t, n, r, i);
    if (Math.abs(s) < 1e-10) break;
    a = Math.max(0, Math.min(1, a - o / s));
  }
  return a;
}
var Qs = class {
  constructor(e, t, n, r) {
    if (e === void 0)
      throw Error(`THREE.KeyframeTrack: track name is undefined`);
    if (t === void 0 || t.length === 0)
      throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e);
    ((this.name = e),
      (this.times = Hs(t, this.TimeBufferType)),
      (this.values = Hs(n, this.ValueBufferType)),
      this.setInterpolation(r || this.DefaultInterpolation));
  }
  static toJSON(e) {
    let t = e.constructor,
      n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Hs(e.times, Array),
        values: Hs(e.values, Array),
      };
      let t = e.getInterpolation();
      (t !== e.DefaultInterpolation && (n.interpolation = t),
        Us(e.settings) &&
          (n.settings = {
            inTangents: Hs(e.settings.inTangents, Array),
            outTangents: Hs(e.settings.outTangents, Array),
          }));
    }
    return ((n.type = e.ValueTypeName), n);
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new qs(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Ks(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Gs(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodBezier(e) {
    let t = new Js(this.times, this.values, this.getValueSize(), e);
    return (
      this.settings &&
        ((t.inTangents = this.settings.inTangents),
        (t.outTangents = this.settings.outTangents)),
      t
    );
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case it:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case at:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case ot:
        t = this.InterpolantFactoryMethodSmooth;
        break;
      case st:
        t = this.InterpolantFactoryMethodBezier;
    }
    if (t === void 0) {
      let t =
        `unsupported interpolation for ` +
        this.ValueTypeName +
        ` keyframe track named ` +
        this.name;
      if (this.createInterpolant === void 0) {
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw Error(t);
      }
      return (Ot(`KeyframeTrack:`, t), this);
    }
    return ((this.createInterpolant = t), this);
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return it;
      case this.InterpolantFactoryMethodLinear:
        return at;
      case this.InterpolantFactoryMethodSmooth:
        return ot;
      case this.InterpolantFactoryMethodBezier:
        return st;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      let t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      let t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
      Us(this.settings) &&
        ($s(this.settings.inTangents, e), $s(this.settings.outTangents, e));
    }
    return this;
  }
  trim(e, t) {
    let n = this.times,
      r = n.length,
      i = 0,
      a = r - 1;
    for (; i !== r && n[i] < e; ) ++i;
    for (; a !== -1 && n[a] > t; ) --a;
    if ((++a, i !== 0 || a !== r)) {
      i >= a && ((a = Math.max(a, 1)), (i = a - 1));
      let e = this.getValueSize();
      ((this.times = n.slice(i, a)),
        (this.values = this.values.slice(i * e, a * e)));
    }
    return this;
  }
  validate() {
    let e = !0,
      t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (kt(`KeyframeTrack: Invalid value size in track.`, this), (e = !1));
    let n = this.times,
      r = this.values,
      i = n.length;
    i === 0 && (kt(`KeyframeTrack: Track is empty.`, this), (e = !1));
    let a = null;
    for (let t = 0; t !== i; t++) {
      let r = n[t];
      if (typeof r == `number` && isNaN(r)) {
        (kt(`KeyframeTrack: Time is not a valid number.`, this, t, r),
          (e = !1));
        break;
      }
      if (a !== null && a > r) {
        (kt(`KeyframeTrack: Out of order keys.`, this, t, r, a), (e = !1));
        break;
      }
      a = r;
    }
    if (r !== void 0 && St(r))
      for (let t = 0, n = r.length; t !== n; ++t) {
        let n = r[t];
        if (isNaN(n)) {
          (kt(`KeyframeTrack: Value is not a valid number.`, this, t, n),
            (e = !1));
          break;
        }
      }
    return e;
  }
  optimize() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      r = this.getInterpolation() === ot,
      i = e.length - 1,
      a = 1;
    for (let o = 1; o < i; ++o) {
      let i = !1,
        s = e[o];
      if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
        if (r) i = !0;
        else {
          let e = o * n,
            r = e - n,
            a = e + n;
          for (let o = 0; o !== n; ++o) {
            let n = t[e + o];
            if (n !== t[r + o] || n !== t[a + o]) {
              i = !0;
              break;
            }
          }
        }
      }
      if (i) {
        if (o !== a) {
          e[a] = e[o];
          let r = o * n,
            i = a * n;
          for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
        }
        ++a;
      }
    }
    if (i > 0) {
      e[a] = e[i];
      for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
      ++a;
    }
    return (
      a === e.length
        ? ((this.times = e), (this.values = t))
        : ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n))),
      this
    );
  }
  clone() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      r = new n(this.name, e, t);
    return (
      (r.createInterpolant = this.createInterpolant),
      Us(this.settings) &&
        (r.settings = {
          inTangents: this.settings.inTangents.slice(),
          outTangents: this.settings.outTangents.slice(),
        }),
      r
    );
  }
};
function $s(e, t) {
  for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t;
}
((Qs.prototype.ValueTypeName = ``),
  (Qs.prototype.TimeBufferType = Float32Array),
  (Qs.prototype.ValueBufferType = Float32Array),
  (Qs.prototype.DefaultInterpolation = at));
var ec = class extends Qs {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
((ec.prototype.ValueTypeName = `bool`),
  (ec.prototype.ValueBufferType = Array),
  (ec.prototype.DefaultInterpolation = it),
  (ec.prototype.InterpolantFactoryMethodLinear = void 0),
  (ec.prototype.InterpolantFactoryMethodSmooth = void 0));
var tc = class extends Qs {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
tc.prototype.ValueTypeName = `color`;
var nc = class extends Qs {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
nc.prototype.ValueTypeName = `number`;
var rc = class extends Ws {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = (n - t) / (r - t),
        c = e * o;
      for (let e = c + o; c !== e; c += 4)
        cn.slerpFlat(i, 0, a, c - o, a, c, s);
      return i;
    }
  },
  ic = class extends Qs {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    InterpolantFactoryMethodLinear(e) {
      return new rc(this.times, this.values, this.getValueSize(), e);
    }
  };
((ic.prototype.ValueTypeName = `quaternion`),
  (ic.prototype.InterpolantFactoryMethodSmooth = void 0));
var ac = class extends Qs {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
((ac.prototype.ValueTypeName = `string`),
  (ac.prototype.ValueBufferType = Array),
  (ac.prototype.DefaultInterpolation = it),
  (ac.prototype.InterpolantFactoryMethodLinear = void 0),
  (ac.prototype.InterpolantFactoryMethodSmooth = void 0));
var oc = class extends Qs {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
oc.prototype.ValueTypeName = `vector`;
var sc = new M(),
  cc = new cn(),
  lc = new M(),
  uc = class extends ir {
    constructor() {
      (super(),
        (this.isCamera = !0),
        (this.type = `Camera`),
        (this.matrixWorldInverse = new N()),
        (this.projectionMatrix = new N()),
        (this.projectionMatrixInverse = new N()),
        (this.coordinateSystem = bt),
        (this._reversedDepth = !1));
    }
    get reversedDepth() {
      return this._reversedDepth;
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        (this.coordinateSystem = e.coordinateSystem),
        this
      );
    }
    getWorldDirection(e) {
      return super.getWorldDirection(e).negate();
    }
    updateMatrixWorld(e) {
      (super.updateMatrixWorld(e),
        this.matrixWorld.decompose(sc, cc, lc),
        lc.x === 1 && lc.y === 1 && lc.z === 1
          ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
          : this.matrixWorldInverse.compose(sc, cc, lc.set(1, 1, 1)).invert());
    }
    updateWorldMatrix(e, t, n = !1) {
      (super.updateWorldMatrix(e, t, n),
        this.matrixWorld.decompose(sc, cc, lc),
        lc.x === 1 && lc.y === 1 && lc.z === 1
          ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
          : this.matrixWorldInverse.compose(sc, cc, lc.set(1, 1, 1)).invert());
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  dc = new M(),
  fc = new j(),
  pc = new j(),
  mc = class extends uc {
    constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
      (super(),
        (this.isPerspectiveCamera = !0),
        (this.type = `PerspectiveCamera`),
        (this.fov = e),
        (this.zoom = 1),
        (this.near = n),
        (this.far = r),
        (this.focus = 10),
        (this.aspect = t),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.fov = e.fov),
        (this.zoom = e.zoom),
        (this.near = e.near),
        (this.far = e.far),
        (this.focus = e.focus),
        (this.aspect = e.aspect),
        (this.view = e.view === null ? null : Object.assign({}, e.view)),
        (this.filmGauge = e.filmGauge),
        (this.filmOffset = e.filmOffset),
        this
      );
    }
    setFocalLength(e) {
      let t = (0.5 * this.getFilmHeight()) / e;
      ((this.fov = Lt * 2 * Math.atan(t)), this.updateProjectionMatrix());
    }
    getFocalLength() {
      let e = Math.tan(It * 0.5 * this.fov);
      return (0.5 * this.getFilmHeight()) / e;
    }
    getEffectiveFOV() {
      return Lt * 2 * Math.atan(Math.tan(It * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(e, t, n) {
      (dc.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        t.set(dc.x, dc.y).multiplyScalar(-e / dc.z),
        dc.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        n.set(dc.x, dc.y).multiplyScalar(-e / dc.z));
    }
    getViewSize(e, t) {
      return (this.getViewBounds(e, fc, pc), t.subVectors(pc, fc));
    }
    setViewOffset(e, t, n, r, i, a) {
      ((this.aspect = e / t),
        this.view === null &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = r),
        (this.view.width = i),
        (this.view.height = a),
        this.updateProjectionMatrix());
    }
    clearViewOffset() {
      (this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix());
    }
    updateProjectionMatrix() {
      let e = this.near,
        t = (e * Math.tan(It * 0.5 * this.fov)) / this.zoom,
        n = 2 * t,
        r = this.aspect * n,
        i = -0.5 * r,
        a = this.view;
      if (this.view !== null && this.view.enabled) {
        let e = a.fullWidth,
          o = a.fullHeight;
        ((i += (a.offsetX * r) / e),
          (t -= (a.offsetY * n) / o),
          (r *= a.width / e),
          (n *= a.height / o));
      }
      let o = this.filmOffset;
      (o !== 0 && (i += (e * o) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(
          i,
          i + r,
          t,
          t - n,
          e,
          this.far,
          this.coordinateSystem,
          this.reversedDepth,
        ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        (t.object.fov = this.fov),
        (t.object.zoom = this.zoom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        (t.object.focus = this.focus),
        (t.object.aspect = this.aspect),
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        (t.object.filmGauge = this.filmGauge),
        (t.object.filmOffset = this.filmOffset),
        t
      );
    }
  },
  hc = class extends uc {
    constructor(e = -1, t = 1, n = 1, r = -1, i = 0.1, a = 2e3) {
      (super(),
        (this.isOrthographicCamera = !0),
        (this.type = `OrthographicCamera`),
        (this.zoom = 1),
        (this.view = null),
        (this.left = e),
        (this.right = t),
        (this.top = n),
        (this.bottom = r),
        (this.near = i),
        (this.far = a),
        this.updateProjectionMatrix());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.left = e.left),
        (this.right = e.right),
        (this.top = e.top),
        (this.bottom = e.bottom),
        (this.near = e.near),
        (this.far = e.far),
        (this.zoom = e.zoom),
        (this.view = e.view === null ? null : Object.assign({}, e.view)),
        this
      );
    }
    setViewOffset(e, t, n, r, i, a) {
      (this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = r),
        (this.view.width = i),
        (this.view.height = a),
        this.updateProjectionMatrix());
    }
    clearViewOffset() {
      (this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix());
    }
    updateProjectionMatrix() {
      let e = (this.right - this.left) / (2 * this.zoom),
        t = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        r = (this.top + this.bottom) / 2,
        i = n - e,
        a = n + e,
        o = r + t,
        s = r - t;
      if (this.view !== null && this.view.enabled) {
        let e = (this.right - this.left) / this.view.fullWidth / this.zoom,
          t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        ((i += e * this.view.offsetX),
          (a = i + e * this.view.width),
          (o -= t * this.view.offsetY),
          (s = o - t * this.view.height));
      }
      (this.projectionMatrix.makeOrthographic(
        i,
        a,
        o,
        s,
        this.near,
        this.far,
        this.coordinateSystem,
        this.reversedDepth,
      ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        (t.object.zoom = this.zoom),
        (t.object.left = this.left),
        (t.object.right = this.right),
        (t.object.top = this.top),
        (t.object.bottom = this.bottom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t
      );
    }
  },
  gc = -90,
  _c = 1,
  vc = class extends ir {
    constructor(e, t, n) {
      (super(),
        (this.type = `CubeCamera`),
        (this.renderTarget = n),
        (this.coordinateSystem = null),
        (this.activeMipmapLevel = 0));
      let r = new mc(gc, _c, e, t);
      ((r.layers = this.layers), this.add(r));
      let i = new mc(gc, _c, e, t);
      ((i.layers = this.layers), this.add(i));
      let a = new mc(gc, _c, e, t);
      ((a.layers = this.layers), this.add(a));
      let o = new mc(gc, _c, e, t);
      ((o.layers = this.layers), this.add(o));
      let s = new mc(gc, _c, e, t);
      ((s.layers = this.layers), this.add(s));
      let c = new mc(gc, _c, e, t);
      ((c.layers = this.layers), this.add(c));
    }
    updateCoordinateSystem() {
      let e = this.coordinateSystem,
        t = this.children.concat(),
        [n, r, i, a, o, s] = t;
      for (let e of t) this.remove(e);
      if (e === 2e3)
        (n.up.set(0, 1, 0),
          n.lookAt(1, 0, 0),
          r.up.set(0, 1, 0),
          r.lookAt(-1, 0, 0),
          i.up.set(0, 0, -1),
          i.lookAt(0, 1, 0),
          a.up.set(0, 0, 1),
          a.lookAt(0, -1, 0),
          o.up.set(0, 1, 0),
          o.lookAt(0, 0, 1),
          s.up.set(0, 1, 0),
          s.lookAt(0, 0, -1));
      else if (e === 2001)
        (n.up.set(0, -1, 0),
          n.lookAt(-1, 0, 0),
          r.up.set(0, -1, 0),
          r.lookAt(1, 0, 0),
          i.up.set(0, 0, 1),
          i.lookAt(0, 1, 0),
          a.up.set(0, 0, -1),
          a.lookAt(0, -1, 0),
          o.up.set(0, -1, 0),
          o.lookAt(0, 0, 1),
          s.up.set(0, -1, 0),
          s.lookAt(0, 0, -1));
      else
        throw Error(
          `THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ` +
            e,
        );
      for (let e of t) (this.add(e), e.updateMatrixWorld());
    }
    update(e, t) {
      this.parent === null && this.updateMatrixWorld();
      let { renderTarget: n, activeMipmapLevel: r } = this;
      this.coordinateSystem !== e.coordinateSystem &&
        ((this.coordinateSystem = e.coordinateSystem),
        this.updateCoordinateSystem());
      let [i, a, o, s, c, l] = this.children,
        u = e.getRenderTarget(),
        d = e.getActiveCubeFace(),
        f = e.getActiveMipmapLevel(),
        p = e.xr.enabled;
      e.xr.enabled = !1;
      let m = n.texture.generateMipmaps;
      n.texture.generateMipmaps = !1;
      let h = !1;
      ((h =
        e.isWebGLRenderer === !0
          ? e.state.buffers.depth.getReversed()
          : e.reversedDepthBuffer),
        e.setRenderTarget(n, 0, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, i),
        e.setRenderTarget(n, 1, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, a),
        e.setRenderTarget(n, 2, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, o),
        e.setRenderTarget(n, 3, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, s),
        e.setRenderTarget(n, 4, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, c),
        (n.texture.generateMipmaps = m),
        e.setRenderTarget(n, 5, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, l),
        e.setRenderTarget(u, d, f),
        (e.xr.enabled = p),
        (n.texture.needsPMREMUpdate = !0));
    }
  },
  yc = class extends mc {
    constructor(e = []) {
      (super(),
        (this.isArrayCamera = !0),
        (this.isMultiViewCamera = !1),
        (this.cameras = e));
    }
  },
  bc = `\\[\\]\\.:\\/`,
  xc = RegExp(`[\\[\\]\\.:\\/]`, `g`),
  Sc = `[^\\[\\]\\.:\\/]`,
  Cc = `[^` + bc.replace(`\\.`, ``) + `]`,
  wc = `((?:WC+[\\/:])*)`.replace(`WC`, Sc),
  Tc = `(WCOD+)?`.replace(`WCOD`, Cc),
  Ec = `(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`, Sc),
  Dc = `\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`, Sc),
  Oc = RegExp(`^` + wc + Tc + Ec + Dc + `$`),
  kc = [`material`, `materials`, `bones`, `map`],
  Ac = class {
    constructor(e, t, n) {
      let r = n || jc.parseTrackName(t);
      ((this._targetGroup = e), (this._bindings = e.subscribe_(t, r)));
    }
    getValue(e, t) {
      this.bind();
      let n = this._targetGroup.nCachedObjects_,
        r = this._bindings[n];
      r !== void 0 && r.getValue(e, t);
    }
    setValue(e, t) {
      let n = this._bindings;
      for (
        let r = this._targetGroup.nCachedObjects_, i = n.length;
        r !== i;
        ++r
      )
        n[r].setValue(e, t);
    }
    bind() {
      let e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].bind();
    }
    unbind() {
      let e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].unbind();
    }
  },
  jc = class e {
    constructor(t, n, r) {
      ((this.path = n),
        (this.parsedPath = r || e.parseTrackName(n)),
        (this.node = e.findNode(t, this.parsedPath.nodeName)),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
    static create(t, n, r) {
      return t && t.isAnimationObjectGroup
        ? new e.Composite(t, n, r)
        : new e(t, n, r);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, `_`).replace(xc, ``);
    }
    static parseTrackName(e) {
      let t = Oc.exec(e);
      if (t === null)
        throw Error(`THREE.PropertyBinding: Cannot parse trackName: ` + e);
      let n = {
          nodeName: t[2],
          objectName: t[3],
          objectIndex: t[4],
          propertyName: t[5],
          propertyIndex: t[6],
        },
        r = n.nodeName && n.nodeName.lastIndexOf(`.`);
      if (r !== void 0 && r !== -1) {
        let e = n.nodeName.substring(r + 1);
        kc.indexOf(e) !== -1 &&
          ((n.nodeName = n.nodeName.substring(0, r)), (n.objectName = e));
      }
      if (n.propertyName === null || n.propertyName.length === 0)
        throw Error(
          `THREE.PropertyBinding: can not parse propertyName from trackName: ` +
            e,
        );
      return n;
    }
    static findNode(e, t) {
      if (
        t === void 0 ||
        t === `` ||
        t === `.` ||
        t === -1 ||
        t === e.name ||
        t === e.uuid
      )
        return e;
      if (e.skeleton) {
        let n = e.skeleton.getBoneByName(t);
        if (n !== void 0) return n;
      }
      if (e.children) {
        let n = function (e) {
            for (let r = 0; r < e.length; r++) {
              let i = e[r];
              if (i.name === t || i.uuid === t) return i;
              let a = n(i.children);
              if (a) return a;
            }
            return null;
          },
          r = n(e.children);
        if (r) return r;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      ((this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      ((this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_array(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      ((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      ((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      (this.resolvedProperty.fromArray(e, t),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      (this.resolvedProperty.fromArray(e, t),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _getValue_unbound(e, t) {
      (this.bind(), this.getValue(e, t));
    }
    _setValue_unbound(e, t) {
      (this.bind(), this.setValue(e, t));
    }
    bind() {
      let t = this.node,
        n = this.parsedPath,
        r = n.objectName,
        i = n.propertyName,
        a = n.propertyIndex;
      if (
        (t || ((t = e.findNode(this.rootNode, n.nodeName)), (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      ) {
        Ot(
          `PropertyBinding: No target node found for track: ` + this.path + `.`,
        );
        return;
      }
      if (r) {
        let e = n.objectIndex;
        switch (r) {
          case `materials`:
            if (!t.material) {
              kt(
                `PropertyBinding: Can not bind to material as node does not have a material.`,
                this,
              );
              return;
            }
            if (!t.material.materials) {
              kt(
                `PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,
                this,
              );
              return;
            }
            t = t.material.materials;
            break;
          case `bones`:
            if (!t.skeleton) {
              kt(
                `PropertyBinding: Can not bind to bones as node does not have a skeleton.`,
                this,
              );
              return;
            }
            t = t.skeleton.bones;
            for (let n = 0; n < t.length; n++)
              if (t[n].name === e) {
                e = n;
                break;
              }
            break;
          case `map`:
            if (`map` in t) {
              t = t.map;
              break;
            }
            if (!t.material) {
              kt(
                `PropertyBinding: Can not bind to material as node does not have a material.`,
                this,
              );
              return;
            }
            if (!t.material.map) {
              kt(
                `PropertyBinding: Can not bind to material.map as node.material does not have a map.`,
                this,
              );
              return;
            }
            t = t.material.map;
            break;
          default:
            if (t[r] === void 0) {
              kt(
                `PropertyBinding: Can not bind to objectName of node undefined.`,
                this,
              );
              return;
            }
            t = t[r];
        }
        if (e !== void 0) {
          if (t[e] === void 0) {
            kt(
              `PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,
              this,
              t,
            );
            return;
          }
          t = t[e];
        }
      }
      let o = t[i];
      if (o === void 0) {
        let e = n.nodeName;
        kt(
          `PropertyBinding: Trying to update property for track: ` +
            e +
            `.` +
            i +
            ` but it wasn't found.`,
          t,
        );
        return;
      }
      let s = this.Versioning.None;
      ((this.targetObject = t),
        t.isMaterial === !0
          ? (s = this.Versioning.NeedsUpdate)
          : t.isObject3D === !0 &&
            (s = this.Versioning.MatrixWorldNeedsUpdate));
      let c = this.BindingType.Direct;
      if (a !== void 0) {
        if (i === `morphTargetInfluences`) {
          if (!t.geometry) {
            kt(
              `PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,
              this,
            );
            return;
          }
          if (!t.geometry.morphAttributes) {
            kt(
              `PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,
              this,
            );
            return;
          }
          t.morphTargetDictionary[a] !== void 0 &&
            (a = t.morphTargetDictionary[a]);
        }
        ((c = this.BindingType.ArrayElement),
          (this.resolvedProperty = o),
          (this.propertyIndex = a));
      } else
        o.fromArray !== void 0 && o.toArray !== void 0
          ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = o))
          : Array.isArray(o)
            ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = o))
            : (this.propertyName = i);
      ((this.getValue = this.GetterByBindingType[c]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[c][s]));
    }
    unbind() {
      ((this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
  };
((jc.Composite = Ac),
  (jc.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (jc.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (jc.prototype.GetterByBindingType = [
    jc.prototype._getValue_direct,
    jc.prototype._getValue_array,
    jc.prototype._getValue_arrayElement,
    jc.prototype._getValue_toArray,
  ]),
  (jc.prototype.SetterByBindingTypeAndVersioning = [
    [
      jc.prototype._setValue_direct,
      jc.prototype._setValue_direct_setNeedsUpdate,
      jc.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      jc.prototype._setValue_array,
      jc.prototype._setValue_array_setNeedsUpdate,
      jc.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      jc.prototype._setValue_arrayElement,
      jc.prototype._setValue_arrayElement_setNeedsUpdate,
      jc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      jc.prototype._setValue_fromArray,
      jc.prototype._setValue_fromArray_setNeedsUpdate,
      jc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]));
var Mc = new N(),
  Nc = class {
    constructor(e, t, n = 0, r = 1 / 0) {
      ((this.ray = new Ii(e, t)),
        (this.near = n),
        (this.far = r),
        (this.camera = null),
        (this.layers = new Hn()),
        (this.params = {
          Mesh: {},
          Line: { threshold: 1 },
          LOD: {},
          Points: { threshold: 1 },
          Sprite: {},
        }));
    }
    set(e, t) {
      this.ray.set(e, t);
    }
    setFromCamera(e, t) {
      t.isPerspectiveCamera
        ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
          this.ray.direction
            .set(e.x, e.y, 0.5)
            .unproject(t)
            .sub(this.ray.origin)
            .normalize(),
          (this.camera = t))
        : t.isOrthographicCamera
          ? (this.ray.origin
              .set(e.x, e.y, t.projectionMatrix.elements[14])
              .unproject(t),
            this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
            (this.camera = t))
          : kt(`Raycaster: Unsupported camera type: ` + t.type);
    }
    setFromXRController(e) {
      return (
        Mc.identity().extractRotation(e.matrixWorld),
        this.ray.origin.setFromMatrixPosition(e.matrixWorld),
        this.ray.direction.set(0, 0, -1).applyMatrix4(Mc),
        this
      );
    }
    intersectObject(e, t = !0, n = []) {
      return (Fc(e, this, n, t), n.sort(Pc), n);
    }
    intersectObjects(e, t = !0, n = []) {
      for (let r = 0, i = e.length; r < i; r++) Fc(e[r], this, n, t);
      return (n.sort(Pc), n);
    }
  };
function Pc(e, t) {
  return e.distance - t.distance;
}
function Fc(e, t, n, r) {
  let i = !0;
  if (
    (e.layers.test(t.layers) && e.raycast(t, n) === !1 && (i = !1),
    i === !0 && r === !0)
  ) {
    let r = e.children;
    for (let e = 0, i = r.length; e < i; e++) Fc(r[e], t, n, !0);
  }
}
(class e {
  static {
    e.prototype.isMatrix2 = !0;
  }
  constructor(e, t, n, r) {
    ((this.elements = [1, 0, 0, 1]), e !== void 0 && this.set(e, t, n, r));
  }
  identity() {
    return (this.set(1, 0, 0, 1), this);
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
    return this;
  }
  set(e, t, n, r) {
    let i = this.elements;
    return ((i[0] = e), (i[2] = t), (i[1] = n), (i[3] = r), this);
  }
});
function Ic(e, t, n, r) {
  let i = Lc(r);
  switch (n) {
    case fe:
      return e * t;
    case _e:
      return ((e * t) / i.components) * i.byteLength;
    case ve:
      return ((e * t) / i.components) * i.byteLength;
    case ye:
      return ((e * t * 2) / i.components) * i.byteLength;
    case be:
      return ((e * t * 2) / i.components) * i.byteLength;
    case pe:
      return ((e * t * 3) / i.components) * i.byteLength;
    case me:
      return ((e * t * 4) / i.components) * i.byteLength;
    case xe:
      return ((e * t * 4) / i.components) * i.byteLength;
    case Se:
    case Ce:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case we:
    case Te:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case De:
    case ke:
      return (Math.max(e, 16) * Math.max(t, 8)) / 4;
    case Ee:
    case Oe:
      return (Math.max(e, 8) * Math.max(t, 8)) / 2;
    case Ae:
    case je:
    case Ne:
    case Pe:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Me:
    case Fe:
    case Ie:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Le:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Re:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case ze:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Be:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Ve:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case He:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Ue:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case We:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Ge:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Ke:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case qe:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Je:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Ye:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Xe:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Ze:
    case Qe:
    case $e:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case et:
    case tt:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case nt:
    case rt:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
  }
  throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function Lc(e) {
  switch (e) {
    case A:
    case ee:
      return { byteLength: 1, components: 1 };
    case ne:
    case te:
    case oe:
      return { byteLength: 2, components: 1 };
    case se:
    case ce:
      return { byteLength: 2, components: 4 };
    case ie:
    case re:
    case ae:
      return { byteLength: 4, components: 1 };
    case ue:
    case de:
      return { byteLength: 4, components: 3 };
  }
  throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
(typeof __THREE_DEVTOOLS__ < `u` &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent(`register`, { detail: { revision: `186` } }),
  ),
  typeof window < `u` &&
    (window.__THREE__
      ? Ot(`WARNING: Multiple instances of Three.js being imported.`)
      : (window.__THREE__ = `186`)));
var Rc = `/assets/bunnyhop_core-CRpj0v-F.wasm`,
  I = (e, t) => [e[0] + t[0], e[1] + t[1], e[2] + t[2]],
  L = (e, t) => [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
  R = (e, t) => [e[0] * t, e[1] * t, e[2] * t],
  zc = (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
  Bc = (e, t) => [
    e[1] * t[2] - e[2] * t[1],
    e[2] * t[0] - e[0] * t[2],
    e[0] * t[1] - e[1] * t[0],
  ],
  Vc = (e) => Math.hypot(e[0], e[1], e[2]),
  z = (e) => {
    let t = Vc(e) || 1;
    return [e[0] / t, e[1] / t, e[2] / t];
  },
  Hc = (e, t, n) => [
    e[0] + (t[0] - e[0]) * n,
    e[1] + (t[1] - e[1]) * n,
    e[2] + (t[2] - e[2]) * n,
  ],
  Uc = (e, t, n) => (e < t ? t : e > n ? n : e),
  B = (e, t, n) => {
    let r = Uc((n - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  },
  Wc = (e, t, n) =>
    n <= 0.001
      ? [[e, 1]]
      : n >= 0.999
        ? [[t, 1]]
        : [
            [e, 1 - n],
            [t, n],
          ];
function Gc(e, t) {
  if (e <= t[0][0]) return [[t[0][1], 1]];
  for (let n = 0; n + 1 < t.length; n++) {
    let [r, i] = t[n],
      [a, o] = t[n + 1];
    if (e <= a) return Wc(i, o, (e - r) / (a - r));
  }
  return [[t[t.length - 1][1], 1]];
}
function Kc(...e) {
  let t = new Map();
  for (let [n, r] of e)
    if (r > 0) for (let [e, i] of n) t.set(e, (t.get(e) ?? 0) + i * r);
  return [...t];
}
function qc(e, t) {
  e = z(e);
  let n = L(t, R(e, zc(t, e)));
  return (
    Vc(n) < 1e-4 && (n = L([0, 0, 1], R(e, e[2]))),
    (n = z(n)),
    [e, n, Bc(e, n)]
  );
}
function V(e, t, n, r, i, a, o = 2, s = 0) {
  let c = [];
  for (let l = 0; l < a; l++) {
    let u = s + (l / a) * Math.PI * 2,
      d = Math.cos(u),
      f = Math.sin(u),
      p = Math.sign(d) * Math.abs(d) ** (2 / o) * r,
      m = Math.sign(f) * Math.abs(f) ** (2 / o) * i;
    c.push(I(e, I(R(t, p), R(n, m))));
  }
  return c;
}
function Jc(e, t) {
  let n = Uc(Math.floor(t), 0, e.length - 2),
    r = t - n,
    i = e[Math.max(0, n - 1)],
    a = e[n],
    o = e[n + 1],
    s = e[Math.min(e.length - 1, n + 2)];
  return (
    0.5 *
    (2 * a +
      (-i + o) * r +
      (2 * i - 5 * a + 4 * o - s) * r * r +
      (-i + 3 * a - 3 * o + s) * r * r * r)
  );
}
var Yc = class {
    P = [];
    N = [];
    C = [];
    A = [];
    SI = [];
    SW = [];
    F = [];
    hasF = !1;
    col = new P();
    finish = null;
    vert(e, t, n, r) {
      if (
        (this.P.push(e[0], e[1], e[2]),
        this.N.push(t[0], t[1], t[2]),
        this.col.set(n.color ?? 16777215),
        this.C.push(this.col.r, this.col.g, this.col.b),
        this.A.push(n.code),
        this.finish)
      ) {
        let t = this.finish(e);
        (this.F.push(t[0], t[1], t[2], t[3]), (this.hasF = !0));
      } else this.F.push(0, 0, 0, 0);
      let i = r
          .filter(([, e]) => e > 1e-4)
          .sort((e, t) => t[1] - e[1])
          .slice(0, 4),
        a = i.reduce((e, [, t]) => e + t, 0) || 1;
      for (let e = 0; e < 4; e++)
        (this.SI.push(i[e] ? i[e][0] : 0),
          this.SW.push(i[e] ? i[e][1] / a : 0));
    }
    tri(e, t, n, r, i, a, o, s, c, l) {
      let u = Bc(L(t, e), L(n, e));
      Vc(u) < 1e-7 ||
        (zc(u, I(I(r, i), a)) < 0 &&
          (([t, n] = [n, t]), ([i, a] = [a, i]), ([c, l] = [l, c])),
        this.vert(e, r, o, s),
        this.vert(t, i, o, c),
        this.vert(n, a, o, l));
    }
    surface(e, t) {
      let n = e.length,
        r = e[0].length,
        i = t.closed ?? !0,
        a = e.map((e) =>
          R(
            e.reduce((e, t) => I(e, t), [0, 0, 0]),
            1 / e.length,
          ),
        ),
        o = e.map((e, n) => e.map((e, r) => t.weight(e, n, r))),
        s = e.map((o, s) =>
          o.map((c, l) => {
            let u = i ? (l + 1) % r : Math.min(r - 1, l + 1),
              d = i ? (l - 1 + r) % r : Math.max(0, l - 1),
              f = Math.min(n - 1, s + 1),
              p = Math.max(0, s - 1),
              m = Bc(L(o[u], o[d]), L(e[f][l], e[p][l])),
              h = t.out ? t.out(s, l) : L(c, a[s]);
            return (
              Vc(m) < 1e-6 && (m = h),
              zc(m, h) < 0 && (m = R(m, -1)),
              z(m)
            );
          }),
        ),
        c = i ? r : r - 1;
      for (let i = 0; i + 1 < n; i++)
        for (let n = 0; n < c; n++) {
          let a = (n + 1) % r,
            c = e[i][n],
            l = e[i][a],
            u = e[i + 1][a],
            d = e[i + 1][n],
            f = s[i][n],
            p = s[i][a],
            m = s[i + 1][a],
            h = s[i + 1][n];
          if (t.flat) {
            let e = z(Bc(L(u, c), L(d, l)));
            (zc(e, I(I(f, p), I(m, h))) < 0 && (e = R(e, -1)),
              (f = p = m = h = e));
          }
          let g = t.paint(i, n);
          (this.tri(c, l, u, f, p, m, g, o[i][n], o[i][a], o[i + 1][a]),
            this.tri(c, u, d, f, m, h, g, o[i][n], o[i + 1][a], o[i + 1][n]));
        }
      let l = (n, s, c) => {
        let l = a[n],
          u = z(L(a[n], a[s])),
          d = t.weight(l, n, 0);
        for (let t = 0; t < r; t++) {
          let a = (t + 1) % r;
          if (!i && a === 0) break;
          this.tri(l, e[n][t], e[n][a], u, u, u, c, d, o[n][t], o[n][a]);
        }
      };
      (t.capStart && l(0, 1, t.capStart),
        t.capEnd && l(n - 1, n - 2, t.capEnd));
    }
    ellipsoidRows(e, t, n, r, i, a, o = 0, s = Math.PI) {
      let [c, l, u] = qc(n, r),
        d = [];
      for (let n = 0; n <= a; n++) {
        let r = o + ((s - o) * n) / a,
          f = [];
        for (let n = 0; n < i; n++) {
          let a = (n / i) * Math.PI * 2,
            o = I(
              I(R(c, Math.cos(r)), R(l, Math.sin(r) * Math.cos(a))),
              R(u, Math.sin(r) * Math.sin(a)),
            );
          f.push([e[0] + o[0] * t[0], e[1] + o[1] * t[1], e[2] + o[2] * t[2]]);
        }
        d.push(f);
      }
      return d;
    }
    tube(e, t, n, r, i, a, o = !0) {
      let s = e.map((i, a) => {
        let [, o, s] = qc(
            z(L(e[Math.min(e.length - 1, a + 1)], e[Math.max(0, a - 1)])),
            r,
          ),
          c = typeof t == `number` ? t : t(a);
        return V(i, o, s, c, c, n);
      });
      this.surface(s, {
        paint: (e) => i(e),
        weight: (e, t) => a(e, t),
        capStart: o ? i(0) : null,
        capEnd: o ? i(e.length - 2) : null,
      });
    }
    get vertexCount() {
      return this.P.length / 3;
    }
    geometry() {
      let e = new oi();
      return (
        e.setAttribute(`position`, new F(this.P, 3)),
        e.setAttribute(`normal`, new F(this.N, 3)),
        e.setAttribute(`partColor`, new F(this.C, 3)),
        e.setAttribute(`accent`, new F(this.A, 1)),
        e.setAttribute(`skinIndex`, new qr(this.SI, 4)),
        e.setAttribute(`skinWeight`, new F(this.SW, 4)),
        this.hasF && e.setAttribute(`finishUV`, new F(this.F, 4)),
        e.computeBoundingBox(),
        (e.boundingSphere = new Qr(new M(0, 0, 38), 56)),
        e
      );
    }
  },
  Xc = {
    about: `CS:S player skeleton (ValveBiped) bind pose from models/player/ct_urban.mdl: structural data only (names, parents, bone-local position + quaternion xyzw, Source axes). Generated by tools/model/skeleton.ts.`,
    bones: [
      {
        name: `ValveBiped.Bip01_Pelvis`,
        parent: -1,
        pos: [0, -0.55494, 40.10959],
        quat: [0.70711, 0, 0, 0.70711],
      },
      {
        name: `ValveBiped.Bip01_L_Thigh`,
        parent: 0,
        pos: [4.04606, 0, 0],
        quat: [-0.48811, 0.51143, -0.48563, 0.51415],
      },
      {
        name: `ValveBiped.Bip01_L_Calf`,
        parent: 1,
        pos: [18.5621, 0, 0],
        quat: [0, 0, 0.0171, 0.99985],
      },
      {
        name: `ValveBiped.Bip01_L_Foot`,
        parent: 2,
        pos: [17.18626, 0, 0],
        quat: [-0.02081, -0.01155, -0.51061, 0.85948],
      },
      {
        name: `ValveBiped.Bip01_L_Toe0`,
        parent: 3,
        pos: [7.15463, 0, 0],
        quat: [-0.00555, -0.00113, -0.28805, 0.9576],
      },
      {
        name: `ValveBiped.Bip01_R_Thigh`,
        parent: 0,
        pos: [-4.04606, 0, 0],
        quat: [-0.48559, 0.51411, -0.48816, 0.51147],
      },
      {
        name: `ValveBiped.Bip01_R_Calf`,
        parent: 5,
        pos: [18.5621, 0, 0],
        quat: [0, 0, 0.0171, 0.99985],
      },
      {
        name: `ValveBiped.Bip01_R_Foot`,
        parent: 6,
        pos: [17.18626, 0, 0],
        quat: [0.02865, 0.0068, -0.5107, 0.85926],
      },
      {
        name: `ValveBiped.Bip01_R_Toe0`,
        parent: 7,
        pos: [7.15463, 0, 0],
        quat: [-0.04109, 0.00978, -0.28788, 0.95673],
      },
      {
        name: `ValveBiped.Bip01_Spine`,
        parent: 0,
        pos: [0, 3.47894, -3.10117],
        quat: [0.47878, 0.52036, 0.47878, 0.52036],
      },
      {
        name: `ValveBiped.Bip01_Spine1`,
        parent: 9,
        pos: [4.15567, 0, 0],
        quat: [0, 0, -0.01441, 0.9999],
      },
      {
        name: `ValveBiped.Bip01_Spine2`,
        parent: 10,
        pos: [3.66112, 0, 0],
        quat: [0, 0, 0.04863, 0.99882],
      },
      {
        name: `ValveBiped.Bip01_Spine4`,
        parent: 11,
        pos: [9.27834, 0, 0],
        quat: [0, 0, 0.09307, 0.99566],
      },
      {
        name: `ValveBiped.Bip01_Neck1`,
        parent: 12,
        pos: [3.43861, 0, 0],
        quat: [0.97946, 0.20166, 0, 0],
      },
      {
        name: `ValveBiped.Bip01_Head1`,
        parent: 13,
        pos: [3.74608, 0, 0],
        quat: [0, 0, 0.20114, 0.97956],
      },
      {
        name: `ValveBiped.Bip01_L_Clavicle`,
        parent: 12,
        pos: [2.14191, 1.01704, 2.01517],
        quat: [0.47275, 0.52836, 0.59876, -0.3726],
      },
      {
        name: `ValveBiped.Bip01_L_UpperArm`,
        parent: 15,
        pos: [6.26927, 0, 0],
        quat: [-0.62501, 0.20695, -0.19928, 0.72582],
      },
      {
        name: `ValveBiped.Bip01_L_Forearm`,
        parent: 16,
        pos: [12.16026, 0, 0],
        quat: [0, 0, -0.03018, 0.99954],
      },
      {
        name: `ValveBiped.Bip01_L_Hand`,
        parent: 17,
        pos: [11.94094, 0, -3e-5],
        quat: [0.70622, -98e-5, 0.02641, 0.7075],
      },
      {
        name: `ValveBiped.Bip01_L_Finger2`,
        parent: 18,
        pos: [4.03663, 0.22328, 0.41627],
        quat: [0.04642, 0.00401, -0.25745, 0.96517],
      },
      {
        name: `ValveBiped.Bip01_L_Finger21`,
        parent: 19,
        pos: [1.78836, 0, 0],
        quat: [46e-5, 0.00246, -0.18222, 0.98325],
      },
      {
        name: `ValveBiped.Bip01_L_Finger22`,
        parent: 20,
        pos: [1.25754, 0, 0],
        quat: [15e-5, 0.00139, -0.10799, 0.99415],
      },
      {
        name: `ValveBiped.Bip01_L_Finger1`,
        parent: 18,
        pos: [4.02614, 0.12212, 1.35294],
        quat: [0.16687, -0.05609, -0.22345, 0.95869],
      },
      {
        name: `ValveBiped.Bip01_L_Finger11`,
        parent: 22,
        pos: [1.78821, 0, 0],
        quat: [46e-5, 0.00251, -0.1805, 0.98357],
      },
      {
        name: `ValveBiped.Bip01_L_Finger12`,
        parent: 23,
        pos: [1.14365, 0, 0],
        quat: [2e-4, 0.00162, -0.12186, 0.99255],
      },
      {
        name: `ValveBiped.Bip01_L_Finger0`,
        parent: 18,
        pos: [0.87238, -0.31229, 1.36529],
        quat: [-0.6114, -0.05453, -0.44986, 0.64873],
      },
      {
        name: `ValveBiped.Bip01_L_Finger01`,
        parent: 25,
        pos: [1.86138, 0, 0],
        quat: [12e-5, -0.00107, 0.11407, 0.99347],
      },
      {
        name: `ValveBiped.Bip01_L_Finger02`,
        parent: 26,
        pos: [1.25528, 0, 0],
        quat: [3e-4, -0.00162, 0.18051, 0.98357],
      },
      {
        name: `ValveBiped.Bip01_R_Clavicle`,
        parent: 12,
        pos: [2.14191, 1.01704, -2.01517],
        quat: [-0.45907, -0.54952, 0.5794, -0.38934],
      },
      {
        name: `ValveBiped.Bip01_R_UpperArm`,
        parent: 28,
        pos: [6.26927, 1e-5, 0],
        quat: [0.65884, -0.20234, -0.20444, 0.69512],
      },
      {
        name: `ValveBiped.Bip01_R_Forearm`,
        parent: 29,
        pos: [12.16026, 0, 0],
        quat: [0, 0, -0.03018, 0.99954],
      },
      {
        name: `ValveBiped.Bip01_R_Hand`,
        parent: 30,
        pos: [11.94096, 0, 0],
        quat: [-0.70328, 0.00109, 0.02641, 0.71042],
      },
      {
        name: `ValveBiped.Bip01_R_Finger2`,
        parent: 31,
        pos: [4.0366, 0.21982, -0.41811],
        quat: [-0.04696, -0.006, -0.25741, 0.96514],
      },
      {
        name: `ValveBiped.Bip01_R_Finger21`,
        parent: 32,
        pos: [1.78836, 0, 0],
        quat: [-69e-5, -0.00373, -0.1822, 0.98325],
      },
      {
        name: `ValveBiped.Bip01_R_Finger22`,
        parent: 33,
        pos: [1.25755, 0, 0],
        quat: [-23e-5, -0.00211, -0.10798, 0.99415],
      },
      {
        name: `ValveBiped.Bip01_R_Finger1`,
        parent: 31,
        pos: [4.02611, 0.11089, -1.35391],
        quat: [-0.1673, 0.05433, -0.22388, 0.95861],
      },
      {
        name: `ValveBiped.Bip01_R_Finger11`,
        parent: 35,
        pos: [1.78821, 0, 0],
        quat: [-7e-4, -0.0038, -0.18048, 0.98357],
      },
      {
        name: `ValveBiped.Bip01_R_Finger12`,
        parent: 36,
        pos: [1.14365, 0, 0],
        quat: [-3e-4, -0.00245, -0.12184, 0.99255],
      },
      {
        name: `ValveBiped.Bip01_R_Finger0`,
        parent: 31,
        pos: [0.87236, -0.32363, -1.36265],
        quat: [0.61031, 0.05155, -0.45021, 0.64975],
      },
      {
        name: `ValveBiped.Bip01_R_Finger01`,
        parent: 38,
        pos: [1.86137, 0, 0],
        quat: [-19e-5, 0.00163, 0.11406, 0.99347],
      },
      {
        name: `ValveBiped.Bip01_R_Finger02`,
        parent: 39,
        pos: [1.25528, 0, 0],
        quat: [-45e-5, 0.00246, 0.1805, 0.98357],
      },
      {
        name: `ValveBiped.Bip01_R_Wrist`,
        parent: 30,
        pos: [11.94096, 0, 0],
        quat: [0.00426, 0, 0, 0.99999],
      },
      {
        name: `ValveBiped.Bip01_L_Wrist`,
        parent: 17,
        pos: [11.94096, 0, 0],
        quat: [-5e-4, 0, 0, 1],
      },
      {
        name: `ValveBiped.Bip01_L_Ulna`,
        parent: 17,
        pos: [5.97048, 0, 0],
        quat: [-27e-5, 0, 0, 1],
      },
      {
        name: `ValveBiped.Bip01_R_Ulna`,
        parent: 30,
        pos: [5.97048, 0, 0],
        quat: [0.0023, 0, 0, 1],
      },
      {
        name: `ValveBiped.weapon_bone`,
        parent: 9,
        pos: [-43.64849, -1.08162, 3e-5],
        quat: [-0.47878, -0.52036, -0.47878, 0.52036],
      },
      {
        name: `ValveBiped.weapon_bone_RHand`,
        parent: 45,
        pos: [-2, 4, -2.35468],
        quat: [0.40301, -0.9137, -0.05075, 0.01241],
      },
      {
        name: `ValveBiped.weapon_bone_LHand`,
        parent: 46,
        pos: [-3.60665, -3.344, -2.88334],
        quat: [-0.73406, 0.67479, -0.01042, 0.07559],
      },
      {
        name: `ValveBiped.weapon_bone_Clip`,
        parent: 47,
        pos: [0, 0, 0],
        quat: [0, 0, 0, 1],
      },
    ],
  },
  Zc = [`bunny.EarL`, `bunny.EarL2`, `bunny.EarR`, `bunny.EarR2`],
  Qc = `bunny.Knife`,
  $c = {
    base: [2.25, 1.35, 74.3],
    dir: [0.27, 0.36, 0.893],
    seg: 4.4,
    length: 9.6,
  };
function el(e, t, n, r = 0) {
  let [i, a, o, s] = [e[0], e[1], e[2], e[3]];
  ((n[r] = 1 - 2 * a * a - 2 * o * o),
    (n[r + 1] = 2 * i * a - 2 * s * o),
    (n[r + 2] = 2 * i * o + 2 * s * a),
    (n[r + 3] = t[0]),
    (n[r + 4] = 2 * i * a + 2 * s * o),
    (n[r + 5] = 1 - 2 * i * i - 2 * o * o),
    (n[r + 6] = 2 * a * o - 2 * s * i),
    (n[r + 7] = t[1]),
    (n[r + 8] = 2 * i * o - 2 * s * a),
    (n[r + 9] = 2 * a * o + 2 * s * i),
    (n[r + 10] = 1 - 2 * i * i - 2 * a * a),
    (n[r + 11] = t[2]));
}
function tl(e, t, n, r) {
  let i = e[t],
    a = e[t + 1],
    o = e[t + 2],
    s = e[t + 3],
    c = e[t + 4],
    l = e[t + 5],
    u = e[t + 6],
    d = e[t + 7],
    f = e[t + 8],
    p = e[t + 9],
    m = e[t + 10],
    h = e[t + 11];
  ((n[r] = i),
    (n[r + 1] = c),
    (n[r + 2] = f),
    (n[r + 3] = -(i * s + c * d + f * h)),
    (n[r + 4] = a),
    (n[r + 5] = l),
    (n[r + 6] = p),
    (n[r + 7] = -(a * s + l * d + p * h)),
    (n[r + 8] = o),
    (n[r + 9] = u),
    (n[r + 10] = m),
    (n[r + 11] = -(o * s + u * d + m * h)));
}
function nl(e, t, n) {
  return [
    e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2] + e[t + 3],
    e[t + 4] * n[0] + e[t + 5] * n[1] + e[t + 6] * n[2] + e[t + 7],
    e[t + 8] * n[0] + e[t + 9] * n[1] + e[t + 10] * n[2] + e[t + 11],
  ];
}
var rl = null;
function il() {
  if (rl) return rl;
  let e = Xc.bones,
    t = e.length + Zc.length + 1,
    n = [...e.map((e) => e.name), ...Zc, Qc],
    r = new Int16Array(t),
    i = new Float32Array(t * 12),
    a = new Float32Array(12);
  e.forEach((e, t) => {
    ((r[t] = e.parent),
      el(e.quat, e.pos, a),
      e.parent < 0 ? i.set(a, t * 12) : H(i, e.parent * 12, a, 0, i, t * 12));
  });
  let o = n.indexOf(`ValveBiped.Bip01_Head1`),
    s = (e) => {
      let t = [$c.base[0] * e, $c.base[1], $c.base[2]];
      return [
        t,
        [
          t[0] + $c.dir[0] * e * $c.seg,
          t[1] + $c.dir[1] * $c.seg,
          t[2] + $c.dir[2] * $c.seg,
        ],
      ];
    },
    [c, l] = s(1),
    [u, d] = s(-1);
  [c, l, u, d].forEach((t, n) => {
    let a = e.length + n;
    ((r[a] = n % 2 == 0 ? o : a - 1), el([0, 0, 0, 1], t, i, a * 12));
  });
  {
    let e = n.indexOf(`ValveBiped.Bip01_R_Hand`);
    ((r[t - 1] = e), i.copyWithin((t - 1) * 12, e * 12, e * 12 + 12));
  }
  let f = new Map(n.map((e, t) => [e.toLowerCase(), t])),
    p = (e) => f.get(e.toLowerCase()) ?? -1,
    m = (e) => {
      let t = p(e.includes(`.`) ? e : `ValveBiped.Bip01_${e}`);
      if (t < 0) throw Error(`bunny rig: no bone ${e}`);
      return t;
    };
  return (
    (rl = {
      names: n,
      parent: r,
      bind: i,
      csBones: e.length,
      index: p,
      bone: m,
      at: (e) => {
        let t = m(e);
        return [i[t * 12 + 3], i[t * 12 + 7], i[t * 12 + 11]];
      },
    }),
    rl
  );
}
function H(e, t, n, r, i, a) {
  for (let o = 0; o < 3; o++) {
    let s = e[t + o * 4],
      c = e[t + o * 4 + 1],
      l = e[t + o * 4 + 2],
      u = e[t + o * 4 + 3];
    ((i[a + o * 4] = s * n[r] + c * n[r + 4] + l * n[r + 8]),
      (i[a + o * 4 + 1] = s * n[r + 1] + c * n[r + 5] + l * n[r + 9]),
      (i[a + o * 4 + 2] = s * n[r + 2] + c * n[r + 6] + l * n[r + 10]),
      (i[a + o * 4 + 3] = s * n[r + 3] + c * n[r + 7] + l * n[r + 11] + u));
  }
}
var al = Math.PI / 180;
function ol(e, t, n, r, i, a, o, s = 0) {
  let c = Math.sin(e * al),
    l = Math.cos(e * al),
    u = Math.sin(t * al),
    d = Math.cos(t * al),
    f = Math.sin(n * al),
    p = Math.cos(n * al);
  ((o[s] = l * d),
    (o[s + 4] = l * u),
    (o[s + 8] = -c),
    (o[s + 1] = f * c * d - p * u),
    (o[s + 5] = f * c * u + p * d),
    (o[s + 9] = f * l),
    (o[s + 2] = p * c * d + f * u),
    (o[s + 6] = p * c * u - f * d),
    (o[s + 10] = p * l),
    (o[s + 3] = r),
    (o[s + 7] = i),
    (o[s + 11] = a));
}
function sl(e, t, n, r, i = 0) {
  let [a, o, s] = [e[0], e[1], e[2]],
    c = Math.cos(t),
    l = Math.sin(t),
    u = 1 - c,
    d = u * a * a + c,
    f = u * a * o - l * s,
    p = u * a * s + l * o,
    m = u * a * o + l * s,
    h = u * o * o + c,
    g = u * o * s - l * a,
    _ = u * a * s - l * o,
    v = u * o * s + l * a,
    y = u * s * s + c,
    b = n[0],
    x = n[1],
    S = n[2];
  ((r[i] = d),
    (r[i + 1] = f),
    (r[i + 2] = p),
    (r[i + 3] = b - (d * b + f * x + p * S)),
    (r[i + 4] = m),
    (r[i + 5] = h),
    (r[i + 6] = g),
    (r[i + 7] = x - (m * b + h * x + g * S)),
    (r[i + 8] = _),
    (r[i + 9] = v),
    (r[i + 10] = y),
    (r[i + 11] = S - (_ * b + v * x + y * S)));
}
function cl(e, t, n, r, i, a = 0) {
  ((i[a] = e[0]),
    (i[a + 1] = t[0]),
    (i[a + 2] = n[0]),
    (i[a + 3] = r[0]),
    (i[a + 4] = e[1]),
    (i[a + 5] = t[1]),
    (i[a + 6] = n[1]),
    (i[a + 7] = r[1]),
    (i[a + 8] = e[2]),
    (i[a + 9] = t[2]),
    (i[a + 10] = n[2]),
    (i[a + 11] = r[2]));
}
function ll(e, t = 0) {
  for (let n = 0; n < 12; n++) e[t + n] = +(n === 0 || n === 5 || n === 10);
}
function ul(e, t, n) {
  return [
    e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2],
    e[t + 4] * n[0] + e[t + 5] * n[1] + e[t + 6] * n[2],
    e[t + 8] * n[0] + e[t + 9] * n[1] + e[t + 10] * n[2],
  ];
}
var dl = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  fl = (e, t, n) => dl((e - t) / (n - t)),
  pl = {
    about: `CS:S knife viewmodel skeleton from models/weapons/v_knife_t.mdl: structural data only (names, parents, bone-local position + quaternion xyzw, Source axes). Generated by tools/model/viewmodel-skeleton.ts.`,
    bones: [
      {
        name: `v_weapon.knife_Parent`,
        parent: -1,
        pos: [-4.77031, -17.80471, -8.51876],
        quat: [0.70711, 0, 0, 0.70711],
      },
      {
        name: `v_weapon.Knife_Handle`,
        parent: 0,
        pos: [4.77146, -5.56479, 3.60534],
        quat: [0.02796, 0.03382, -0.63765, 0.76907],
      },
      {
        name: `v_weapon`,
        parent: -1,
        pos: [0, 0, 0],
        quat: [0.70711, 0, 0, 0.70711],
      },
      {
        name: `v_weapon.Hands_parent`,
        parent: 2,
        pos: [-0.05671, 0, -3.09491],
        quat: [0, 0, 0, 1],
      },
      {
        name: `v_weapon.Root34`,
        parent: 3,
        pos: [6.83363, 1.30233, 6.67147],
        quat: [-0.11193, 0.87962, 0.38527, 0.25555],
      },
      {
        name: `v_weapon.Left_Arm`,
        parent: 4,
        pos: [0, 0, 0],
        quat: [-0.39868, -0.86429, 0.12847, -0.2785],
      },
      {
        name: `v_weapon.eff16`,
        parent: 5,
        pos: [8.56328, 0, 0],
        quat: [0, 0, 0, 1],
      },
      {
        name: `v_weapon.Root16`,
        parent: 6,
        pos: [0, 0, 0],
        quat: [-0.71814, -0.62743, -0.03731, 0.29869],
      },
      {
        name: `v_weapon.Left_Hand`,
        parent: 7,
        pos: [0, 0, 0],
        quat: [-0.06511, 0.07605, 0.65006, 0.75326],
      },
      {
        name: `v_weapon.eff2`,
        parent: 8,
        pos: [3.02659, 0, 0],
        quat: [0, 0, 0, 1],
      },
      {
        name: `v_weapon.Root17`,
        parent: 9,
        pos: [-2.65734, -0.36556, -0.32476],
        quat: [-0.99465, 0.03422, 0.09019, 0.0369],
      },
      {
        name: `v_weapon.Left_Thumb01`,
        parent: 10,
        pos: [0, 0, 0],
        quat: [0.03846, -0.11546, 0.35117, 0.92837],
      },
      {
        name: `v_weapon.Left_Thumb_02`,
        parent: 11,
        pos: [1.88721, 0, 0],
        quat: [0, 0, -0.17862, 0.98392],
      },
      {
        name: `v_weapon.Left_Thumb03`,
        parent: 12,
        pos: [1.00187, 0, 0],
        quat: [-0.01297, -0.05686, -0.09808, 0.99347],
      },
      {
        name: `v_weapon.Root18`,
        parent: 9,
        pos: [-0.45169, 1.21395, -0.05802],
        quat: [-0.65613, 0.0507, 0.05678, 0.7508],
      },
      {
        name: `v_weapon.Left_Pinky01`,
        parent: 14,
        pos: [0, 0, 0],
        quat: [0.00226, -0.02657, 0.19401, 0.98064],
      },
      {
        name: `v_weapon.Left_Pinky02`,
        parent: 15,
        pos: [0.96385, 0, 0],
        quat: [-0.0012, -0.00454, -0.00575, 0.99997],
      },
      {
        name: `v_weapon.Left_Pinky03`,
        parent: 16,
        pos: [0.632, 0, 0],
        quat: [8e-5, 0.00129, 0.13632, 0.99066],
      },
      {
        name: `v_weapon.Root19`,
        parent: 9,
        pos: [-0.12665, 0.62019, -0.03931],
        quat: [-0.73136, 0.06054, 0.05704, 0.67689],
      },
      {
        name: `v_weapon.Left_Ring01`,
        parent: 18,
        pos: [0, 0, 0],
        quat: [-0.00408, -0.01325, 0.11736, 0.99299],
      },
      {
        name: `v_weapon.Left_Ring02`,
        parent: 19,
        pos: [1.20823, 0, 0],
        quat: [8e-5, 43e-5, 0.1222, 0.99251],
      },
      {
        name: `v_weapon.Left_Ring03`,
        parent: 20,
        pos: [0.76307, 0, 0],
        quat: [6e-5, 52e-5, 0.02902, 0.99958],
      },
      {
        name: `v_weapon.Root20`,
        parent: 9,
        pos: [0, 0, 0],
        quat: [-0.74367, 0.08104, 0.03529, 0.66268],
      },
      {
        name: `v_weapon.Left_Middle01`,
        parent: 22,
        pos: [0, 0, 0],
        quat: [99e-5, -0.03278, 0.03022, 0.99901],
      },
      {
        name: `v_weapon.Left_Middle02`,
        parent: 23,
        pos: [1.25058, 0, 0],
        quat: [16e-5, 48e-5, 0.23639, 0.97166],
      },
      {
        name: `v_weapon.Left_Middle03`,
        parent: 24,
        pos: [0.93263, 0, 0],
        quat: [14e-5, 0.00118, -0.08749, 0.99616],
      },
      {
        name: `v_weapon.Root21`,
        parent: 9,
        pos: [-0.09376, -0.65773, 0.06288],
        quat: [-0.74756, 0.08765, 0.02791, 0.65779],
      },
      {
        name: `v_weapon.Left_Index01`,
        parent: 26,
        pos: [0, 0, 0],
        quat: [72e-5, -0.01582, 0.04568, 0.99883],
      },
      {
        name: `v_weapon.Left_Index02`,
        parent: 27,
        pos: [1.28097, 0, 0],
        quat: [-6e-5, -22e-5, 0.14651, 0.98921],
      },
      {
        name: `v_weapon.Left_Index03`,
        parent: 28,
        pos: [0.74937, 0, 0],
        quat: [-1e-5, -24e-5, -0.05919, 0.99825],
      },
      {
        name: `v_weapon.Root99`,
        parent: 5,
        pos: [8.56328, 0, 0],
        quat: [-0.58659, -0.61977, 0.3964, -0.33863],
      },
      {
        name: `v_weapon.L_wrist_helper`,
        parent: 30,
        pos: [0, 0, 0],
        quat: [0, 0, 0, 1],
      },
      {
        name: `v_weapon.Root36`,
        parent: 3,
        pos: [-4.65418, -1.41528, 6.9022],
        quat: [-0.11193, 0.87962, 0.38527, 0.25555],
      },
      {
        name: `v_weapon.Right_Arm`,
        parent: 32,
        pos: [0, 0, 0],
        quat: [-0.39346, -0.86725, 0.12604, -0.27782],
      },
      {
        name: `v_weapon.eff18`,
        parent: 33,
        pos: [8.54364, 0, 0],
        quat: [0, 0, 0, 1],
      },
      {
        name: `v_weapon.Root23`,
        parent: 34,
        pos: [0, 0, 0],
        quat: [-0.51897, 0.02961, -0.01167, 0.8542],
      },
      {
        name: `v_weapon.Right_Hand`,
        parent: 35,
        pos: [0, 0, 0],
        quat: [0.002, -0.10423, 0.02272, 0.99429],
      },
      {
        name: `v_weapon.eff9`,
        parent: 36,
        pos: [3.01353, 0, 0],
        quat: [0, 0, 0, 1],
      },
      {
        name: `v_weapon.Root24`,
        parent: 37,
        pos: [-2.65901, 0.31609, -0.31441],
        quat: [-0.99057, 0.02734, 0.13037, 0.0319],
      },
      {
        name: `v_weapon.Right_Thumb01`,
        parent: 38,
        pos: [0, 0, 0],
        quat: [-0.05603, -0.14089, -0.37904, 0.91287],
      },
      {
        name: `v_weapon.Right_Thumb02`,
        parent: 39,
        pos: [1.97848, 0, 0],
        quat: [0, 0, 0.24389, 0.9698],
      },
      {
        name: `v_weapon.Right_Thumb03`,
        parent: 40,
        pos: [0.98243, 0, 0],
        quat: [0, 0, 0.07703, 0.99703],
      },
      {
        name: `v_weapon.Root25`,
        parent: 37,
        pos: [-0.08926, 0.65988, 0.06722],
        quat: [0.73192, 0.07799, -0.10982, 0.66795],
      },
      {
        name: `v_weapon.Right_Index01`,
        parent: 42,
        pos: [0, 0, 0],
        quat: [0.00101, -47e-5, -0.02282, 0.99974],
      },
      {
        name: `v_weapon.Right_Index02`,
        parent: 43,
        pos: [1.29297, 0, 0],
        quat: [0, 0, -0.17705, 0.9842],
      },
      {
        name: `v_weapon.Right_Index03`,
        parent: 44,
        pos: [0.75247, 0, 0],
        quat: [0, 0, 0.12697, 0.99191],
      },
      {
        name: `v_weapon.Root26`,
        parent: 37,
        pos: [0, 0, 0],
        quat: [0.7372, 0.07182, -0.1161, 0.66174],
      },
      {
        name: `v_weapon.Right_Middle01`,
        parent: 46,
        pos: [0, 0, 0],
        quat: [-0.01722, -0.01241, -0.06186, 0.99786],
      },
      {
        name: `v_weapon.Right_Middle02`,
        parent: 47,
        pos: [1.26122, 0, 0],
        quat: [0, 0, -0.11483, 0.99339],
      },
      {
        name: `v_weapon.Right_Middle03`,
        parent: 48,
        pos: [0.94323, 0, 0],
        quat: [0, 0, -0.02093, 0.99978],
      },
      {
        name: `v_weapon.Root27`,
        parent: 37,
        pos: [-0.10852, -0.60796, -0.0442],
        quat: [0.74377, 0.0811, -0.10517, 0.65511],
      },
      {
        name: `v_weapon.Right_Ring01`,
        parent: 50,
        pos: [0, 0, 0],
        quat: [-0.01464, -0.04785, -0.12643, 0.99071],
      },
      {
        name: `v_weapon.Right_Ring02`,
        parent: 51,
        pos: [1.20837, 0, 0],
        quat: [0, 0, -0.07757, 0.99699],
      },
      {
        name: `v_weapon.Right_Ring03`,
        parent: 52,
        pos: [0.74194, 0, 0],
        quat: [0, 0, -0.04264, 0.99909],
      },
      {
        name: `v_weapon.Root28`,
        parent: 37,
        pos: [-0.4798, -1.1917, -0.06183],
        quat: [0.70838, 0.10467, -0.08454, 0.69289],
      },
      {
        name: `v_weapon.Right_Pinky01`,
        parent: 54,
        pos: [0, 0, 0],
        quat: [0.02329, -0.10405, -0.1244, 0.98649],
      },
      {
        name: `v_weapon.Right_Pinky02`,
        parent: 55,
        pos: [0.99622, 0, 0],
        quat: [0, 0, -0.09167, 0.99579],
      },
      {
        name: `v_weapon.Right_Pinky03`,
        parent: 56,
        pos: [0.61469, 0, 0],
        quat: [0, 0, -0.0184, 0.99983],
      },
      {
        name: `v_weapon.Root98`,
        parent: 33,
        pos: [8.54364, 0, 0],
        quat: [-0.64655, -0.72511, -0.15355, 0.18056],
      },
      {
        name: `v_weapon.R_wrist_helper`,
        parent: 58,
        pos: [0, 0, 0],
        quat: [0, 0, 0, 1],
      },
    ],
  },
  ml = { pinZ: 2.35, pinY: 0.3 },
  hl = [
    {
      name: `v_weapon.Bfly_Blade`,
      parent: `v_weapon.Knife_Handle`,
      pos: [0, ml.pinY, ml.pinZ],
    },
    {
      name: `v_weapon.Bfly_Bite`,
      parent: `v_weapon.Bfly_Blade`,
      pos: [0, -2 * ml.pinY, 0],
    },
  ],
  gl = null;
function _l() {
  if (gl) return gl;
  let e = pl.bones,
    t = (t) => e.findIndex((e) => e.name === t),
    n = [...e];
  for (let e of hl) {
    let r = Math.max(
      t(e.parent),
      n.findIndex((t) => t.name === e.parent),
    );
    n.push({ name: e.name, parent: r, pos: e.pos, quat: [0, 0, 0, 1] });
  }
  let r = n.length,
    i = n.map((e) => e.name),
    a = new Int16Array(r),
    o = new Float32Array(r * 12),
    s = new Float32Array(r * 12),
    c = new Float32Array(12);
  n.forEach((e, t) => {
    ((a[t] = e.parent),
      el(e.quat, e.pos, c),
      e.parent < 0 ? o.set(c, t * 12) : H(o, e.parent * 12, c, 0, o, t * 12),
      tl(o, t * 12, s, t * 12));
  });
  let l = new Map(i.map((e, t) => [e.toLowerCase(), t])),
    u = (e) => l.get(e.toLowerCase()) ?? -1,
    d = (e) => {
      let t = u(e.startsWith(`v_weapon`) ? e : `v_weapon.${e}`);
      if (t < 0) throw Error(`viewmodel rig: no bone ${e}`);
      return t;
    };
  return (
    (gl = {
      names: i,
      parent: a,
      bind: o,
      inv: s,
      extra: e.length,
      index: u,
      bone: d,
      at: (e) => {
        let t = d(e) * 12;
        return [o[t + 3], o[t + 7], o[t + 11]];
      },
      axis: (e, t) => {
        let n = d(e) * 12;
        return [o[n + t], o[n + 4 + t], o[n + 8 + t]];
      },
      subtree: (e) => {
        let t = [e];
        for (let n = 0; n < r; n++) {
          let r = a[n];
          for (; r >= 0 && r !== e; ) r = a[r];
          r === e && n !== e && t.push(n);
        }
        return t;
      },
    }),
    gl
  );
}
var U = { none: 0, blade: 1, guard: 2, grip: 3, glove: 4, cuff: 5 },
  W = (e) => ({ code: 0, color: e }),
  vl = { code: 1 },
  yl = W(16742938),
  bl = W(14244364),
  xl = W(5817930),
  Sl = W(3112244),
  Cl = (e, t) => Math.max(B(0.6, 1, t), B(0.85, 1, e)),
  wl = [1, 0, 0],
  Tl = class {
    b;
    view;
    toModel;
    weightOf;
    v0;
    constructor(e, t, n, r) {
      ((this.b = e),
        (this.view = t),
        (this.toModel = n),
        (this.weightOf = r),
        (this.v0 = e.vertexCount));
    }
    get tris() {
      return (this.b.vertexCount - this.v0) / 3;
    }
    seg(e) {
      return this.view === `fp` ? e : Math.max(5, Math.round(e * 0.6));
    }
    L(e) {
      return this.toModel(e);
    }
    D(e) {
      return L(this.toModel(e), this.toModel([0, 0, 0]));
    }
    w(e) {
      return this.weightOf(e);
    }
    surface(e, t) {
      let n = e.map((e) => e.map((e) => this.toModel(e))),
        r = t.part ?? U.none,
        i = this.weightOf(t.bone);
      if (t.fin) {
        let e = new Map(),
          i = (e) => `${e[0].toFixed(4)},${e[1].toFixed(4)},${e[2].toFixed(4)}`;
        n.forEach((n, a) => {
          n.forEach((n, o) => {
            let [s, c, l] = t.fin(a, o);
            e.set(i(n), [s, c, r, l]);
          });
          let o = R(
              n.reduce((e, t) => I(e, t), [0, 0, 0]),
              1 / n.length,
            ),
            [s, , c] = t.fin(a, 0);
          e.has(i(o)) || e.set(i(o), [s, 0, r, c]);
        });
        let a = [0, 0, r, 0];
        this.b.finish = (t) => e.get(i(t)) ?? a;
      } else {
        let e = [0, 0, r, 0];
        this.b.finish = () => e;
      }
      let a = t.out;
      (this.b.surface(n, {
        paint: t.paint,
        weight: () => i,
        capStart: t.capStart,
        capEnd: t.capEnd,
        closed: t.closed,
        flat: t.flat,
        out: a ? (e, t) => this.D(a(e, t)) : void 0,
      }),
        (this.b.finish = null));
    }
    tube(e, t, n, r, i, a = {}) {
      let o = e.map((i, a) => {
          let o = z(L(e[Math.min(e.length - 1, a + 1)], e[Math.max(0, a - 1)])),
            s = L(r, R(o, zc(r, o)));
          (Vc(s) < 1e-4 && (s = L([0, 0, 1], R(o, o[2]))), (s = z(s)));
          let c = Bc(o, s),
            l = typeof t == `number` ? t : t(a);
          return V(i, s, c, l, l, n);
        }),
        s = a.caps ?? !0;
      this.surface(o, {
        paint: (e) => i(e),
        bone: a.bone,
        part: a.part,
        capStart: s ? i(0) : null,
        capEnd: s ? i(e.length - 2) : null,
      });
    }
    leaf(e, t, n, r, i, a = {}) {
      let o = this.view === `fp` ? (a.sides ?? 8) : 6,
        s = e.map((i, a) => {
          let s = z(L(e[Math.min(e.length - 1, a + 1)], e[Math.max(0, a - 1)])),
            c = z(L(r, R(s, zc(r, s)))),
            l = Bc(s, c),
            u = t(a);
          return V(i, l, c, u, Math.min(n, u * 0.6 + 0.01), o, 1.6);
        });
      this.surface(s, {
        paint: (e) => i(e),
        bone: a.bone,
        part: a.part ?? U.grip,
        capStart: i(0),
        capEnd: i(e.length - 2),
      });
    }
    loop(e, t, n, r, i, a = {}) {
      let o = e.length,
        s = [...e, e[0]].map((i, a) => {
          let s = z(L(e[(a + 1) % o], e[(a - 1 + o) % o])),
            c = z(L(r, R(s, zc(r, s)))),
            l = Bc(s, c),
            u = typeof t == `number` ? t : t(a % o);
          return V(i, c, l, u, u, n);
        });
      this.surface(s, { paint: (e) => i(e % o), bone: a.bone, part: a.part });
    }
    blade(e) {
      let t = this.view === `fp` ? e.n : Math.max(6, Math.round(e.n * 0.65)),
        n =
          this.view === `fp`
            ? (e.m ?? 14)
            : Math.max(8, Math.round((e.m ?? 14) * 0.65)),
        r = e.ex ?? 2.2,
        i = e.edge ?? 0,
        a = e.bands ?? !0,
        o = [],
        s = [],
        c = e.twist ?? 0,
        l = 0.001;
      for (let u = 0; u <= t; u++) {
        let d = u / t,
          f = e.center(d),
          p = z(
            Bc(
              z(L(e.center(Math.min(1, d + l)), e.center(Math.max(0, d - l)))),
              wl,
            ),
          ),
          m = a && u % 3 == 1 && u < t ? 0.94 : 1,
          h = e.width(d) * m,
          g = e.thick(d) * m,
          _ = e.shift?.(d) ?? 0,
          v = [],
          y = [];
        for (let e = 0; e < n; e++) {
          let t = (e / n) * Math.PI * 2 + c * u,
            a = Math.sin(t),
            o = Math.cos(t),
            s = Math.sign(o) * Math.abs(o) ** (2 / r);
          y.push(s);
          let l = Math.sign(a) * Math.abs(a) ** (2 / r),
            d = i === 0 ? 1 : 0.1 + 0.9 * Uc(0.5 - 0.5 * i * s, 0, 1) ** 0.7;
          v.push(I(I(f, R(p, h * s + _)), R(wl, g * l * d)));
        }
        (s.push(v), o.push(y));
      }
      let u = e.paint ?? ((e) => (a && e % 3 == 1 ? bl : yl));
      return (
        this.surface(s, {
          paint: u,
          bone: e.bone,
          part: U.blade,
          fin: (e, n) => {
            let r = e / t,
              a = o[e][n];
            return [
              r,
              a,
              Cl(r, i === 0 ? Math.abs(a) : Math.max(0, i * a * 1.1)),
            ];
          },
          capStart: e.capStart === void 0 ? yl : e.capStart,
          capEnd: yl,
        }),
        s
      );
    }
  };
function El(e) {
  let t = _l(),
    n = t.bone(`Knife_Handle`),
    r = t.bind.subarray(n * 12, n * 12 + 12);
  return new Tl(
    e,
    `fp`,
    (e) => nl(r, 0, e),
    (e) => [[e ? t.bone(e) : n, 1]],
  );
}
var Dl = { o: [2.05, -1.45, 3.1], z: [0.53, 0.1, -0.84], y: [0, 1, 0], s: 1.6 };
function Ol(e, t = Dl) {
  let n = il(),
    r = n.bone(`R_Hand`),
    i = n.bind.subarray(r * 12, r * 12 + 12),
    a = n.index(Qc),
    o = z(t.z),
    s = z(L(t.y, R(o, zc(t.y, o)))),
    c = Bc(s, o),
    l = t.s,
    u = [[a >= 0 ? a : r, 1]];
  return new Tl(
    e,
    `tp`,
    (e) =>
      nl(i, 0, I(t.o, I(I(R(c, e[0] * l), R(s, e[1] * l)), R(o, e[2] * l)))),
    () => u,
  );
}
var kl = [1, 0, 0],
  Al = [0, 1, 0],
  jl = (e) => [0, 0, e],
  Ml = { blade: yl, ring: bl, grip: Sl, guard: vl, leaf: xl, leafDark: Sl };
function Nl(e, t = Ml) {
  let n = [];
  for (let e = 0; e <= 10; e++) {
    let t = -2.3 + (4 * e) / 10,
      r = 0.5 + (e % 2 ? 0.05 : 0);
    n.push(V(jl(t), kl, Al, r * 0.9, r, 12));
  }
  e.surface(n, {
    paint: () => t.grip,
    part: U.grip,
    capStart: t.grip,
    capEnd: t.grip,
  });
  let r = [
    V(jl(1.6), kl, Al, 0.8, 1.05, 14),
    V(jl(1.95), kl, Al, 0.92, 1.22, 14),
    V(jl(2.3), kl, Al, 0.78, 1.02, 14),
  ];
  e.surface(r, {
    paint: () => t.guard,
    part: U.guard,
    capStart: t.guard,
    capEnd: t.guard,
  });
  let i = [],
    a = [];
  for (let e = 0; e <= 18; e++) {
    let t = e / 18,
      n = 2.3 + t * 8.9,
      r = (0.8 * (1 - t) ** 0.85 + 0.04) * (e % 3 == 1 ? 0.93 : 1);
    (a.push(r), i.push(V(jl(n), kl, Al, r * 0.8, r, 14, 2, 0.3 * e)));
  }
  e.surface(i, {
    paint: (e) => (e % 3 == 1 ? t.ring : t.blade),
    part: U.blade,
    fin: (e, t) => {
      let n = e / 18,
        r = Math.max(
          -1,
          Math.min(
            1,
            i[e][t][1] / Math.max(0.8 * (1 - n) ** 0.85 + 0.04, 0.05),
          ),
        );
      return [n, r, Cl(n, Math.abs(r))];
    },
    capStart: t.blade,
  });
  for (let n = 0; n < 3; n++) {
    let r = (n - 1) * 0.5,
      i = z([0.25, Math.sin(r) * 0.9, -1]),
      a = [];
    for (let e = 0; e <= 4; e++) {
      let t = e / 4,
        r = I(R(i, t * (2.1 + (n === 1 ? 0.7 : 0))), [-0.45 * t * t, 0, 0]);
      a.push(I(jl(-2.3), r));
    }
    e.tube(
      a,
      (e) => 0.38 * Math.sin(((e + 0.5) / 5) * Math.PI) + 0.07,
      6,
      kl,
      () => (n === 1 ? t.leaf : t.leafDark),
      { part: U.grip },
    );
  }
}
function Pl(e, t = Ml) {
  let n = [-1, 0, 0],
    r = [];
  for (let e = 0; e <= 8; e++) {
    let t = -0.4 + (5 * e) / 8,
      i = 0.7 + (e % 2 ? 0.07 : 0);
    r.push(V(jl(t), Al, n, i, i, 10));
  }
  e.surface(r, {
    paint: () => t.grip,
    part: U.grip,
    capStart: t.grip,
    capEnd: t.grip,
  });
  let i = [
    V(jl(4.5), Al, n, 1.35, 1, 12),
    V(jl(4.9), Al, n, 1.5, 1.12, 12),
    V(jl(5.3), Al, n, 1.3, 0.95, 12),
  ];
  e.surface(i, {
    paint: () => t.guard,
    part: U.guard,
    capStart: t.guard,
    capEnd: t.guard,
  });
  let a = [];
  for (let e = 0; e <= 14; e++) {
    let t = e / 14,
      r = 5.3 + t * 10.3,
      i = (1.25 * (1 - t) ** 0.85 + 0.05) * (e % 3 == 1 ? 0.93 : 1);
    a.push(V(jl(r), Al, n, i * 0.78, i, 10, 2, 0.3 * e));
  }
  e.surface(a, {
    paint: (e) => (e % 3 == 1 ? t.ring : t.blade),
    part: U.blade,
    fin: (e, t) => {
      let n = e / 14,
        r = Math.max(
          -1,
          Math.min(
            1,
            -a[e][t][0] / Math.max(1.25 * (1 - n) ** 0.85 + 0.05, 0.05),
          ),
        );
      return [n, r, Cl(n, Math.abs(r))];
    },
    capStart: t.blade,
  });
  for (let r = 0; r < 3; r++) {
    let i = (r - 1) * 0.45,
      a = z(I(R(jl(1), -1), I(R(Al, Math.sin(i) * 0.9), R(n, 0.25)))),
      o = [];
    for (let e = 0; e <= 4; e++) {
      let t = e / 4,
        i = I(R(a, t * (2.6 + (r === 1 ? 0.9 : 0))), R(n, -0.5 * t * t));
      o.push(I(jl(-0.4), i));
    }
    e.tube(
      o,
      (e) => 0.48 * Math.sin(((e + 0.5) / 5) * Math.PI) + 0.08,
      6,
      Al,
      () => (r === 1 ? t.leaf : t.leafDark),
      { part: U.grip },
    );
  }
}
var Fl = {
    id: `carrot`,
    cosmeticId: `knife-carrot`,
    name: `Carrot Blade`,
    rarity: 1,
    blurb: `The original carrot blade.`,
    build: (e) => (e.view === `fp` ? Nl(e) : Pl(e)),
    tp: { o: [2.05, -1.45, 3.1], z: [0.53, 0.1, -0.84], y: [0, 1, 0], s: 1.15 },
  },
  Il = Math.PI / 180,
  Ll = [`Index`, `Middle`, `Ring`, `Pinky`],
  Rl = {
    index: { c: [78, 92, 75] },
    middle: { c: [82, 95, 75] },
    ring: { c: [86, 95, 75] },
    pinky: { c: [90, 92, 75] },
    thumb: { c: [15, 40, 60], spread: 20 },
    wrap: {
      fingers: [`Index`, `Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
  },
  zl = { c: [15, 40, 60], spread: 20 },
  Bl = { c: [18, 40, 60], spread: 30 },
  Vl = 0.94,
  Hl = {
    Index: [0.92, 0.4],
    Middle: [0.98, 0.42],
    Ring: [0.92, 0.4],
    Pinky: [0.8, 0.35],
    Thumb: [1.02, 0.46],
  },
  Ul = [1, 0.95, 0.85],
  Wl = {
    knit: { finger: 0, thumb: 0 },
    sport: { finger: 0, thumb: 0 },
    driver: { finger: -0.012, thumb: -0.015 },
    wraps: { finger: 0, thumb: 0.05 },
    moto: { finger: 0, thumb: 0.1 },
    specialist: { finger: 0, thumb: 0 },
    paws: { finger: 0, thumb: 0.05 },
    garden: { finger: 0, thumb: 0 },
  };
function Gl(e, t, n, r) {
  let i = r[0] - n[0],
    a = r[1] - n[1],
    o = r[2] - n[2],
    s = e[t] - n[0],
    c = e[t + 1] - n[1],
    l = e[t + 2] - n[2],
    u = i * i + a * a + o * o,
    d = u > 1e-9 ? Math.max(0, Math.min(1, (s * i + c * a + l * o) / u)) : 0,
    f = s - i * d,
    p = c - a * d,
    m = l - o * d;
  return Math.sqrt(f * f + p * p + m * m);
}
var Kl = new Map();
function ql(e) {
  let t = Kl.get(e.id);
  if (t) return t;
  let n = new Yc();
  e.build(
    new Tl(
      n,
      `fp`,
      (e) => e,
      () => [[0, 1]],
    ),
  );
  let r = n.geometry(),
    i = r.getAttribute(`position`),
    a = r.getAttribute(`finishUV`),
    o = new Set(),
    s = [],
    c = [];
  for (let e = 0; e < i.count; e++) {
    let t = i.getX(e),
      n = i.getY(e),
      r = i.getZ(e),
      l = `${Math.round(t * 100)},${Math.round(n * 100)},${Math.round(r * 100)}`;
    o.has(l) ||
      (o.add(l),
      s.push(t, n, r),
      c.push(a && Math.round(a.getZ(e)) === U.grip ? 1 : 0));
  }
  return (
    (t = { p: Float32Array.from(s), grip: Uint8Array.from(c), n: c.length }),
    Kl.set(e.id, t),
    t
  );
}
function Jl(e, t, n, r, i) {
  let a = [],
    o = [];
  for (let s = 0; s < e.n; s++) {
    let c = e.p[s * 3 + 2],
      l = nl(t, 0, [e.p[s * 3], e.p[s * 3 + 1], c]);
    (l[0] - n[0]) ** 2 + (l[1] - n[1]) ** 2 + (l[2] - n[2]) ** 2 > r * r ||
      (a.push(l[0], l[1], l[2]),
      o.push(e.grip[s] && (!i || (c >= i[0] && c <= i[1])) ? 1 : 0));
  }
  return { p: Float32Array.from(a), grip: Uint8Array.from(o), n: o.length };
}
function Yl(e, t) {
  let n = [
    [-1.1, 0.92],
    [-0.2, 0.95],
    [0.5, 0.92],
    [t * 0.55, 0.86],
    [t - 0.25, 0.74],
    [t + 0.3, 0.6],
  ];
  if (e <= n[0][0]) return n[0][1] + 0.08;
  for (let t = 0; t + 1 < n.length; t++)
    if (e <= n[t + 1][0])
      return (
        n[t][1] +
        ((n[t + 1][1] - n[t][1]) * (e - n[t][0])) / (n[t + 1][0] - n[t][0]) +
        0.08
      );
  return n[n.length - 1][1] + 0.08;
}
function Xl(e, t) {
  let n = 1 / 0;
  for (let r = 0; r < t.n; r++) {
    if (!t.grip[r]) continue;
    let i = [
        t.p[r * 3] - e.wrist[0],
        t.p[r * 3 + 1] - e.wrist[1],
        t.p[r * 3 + 2] - e.wrist[2],
      ],
      a = zc(i, e.ax),
      o = zc(i, e.across);
    a < 0.3 ||
      a > e.palmL + 0.2 ||
      Math.abs(o) > 1.45 ||
      (n = Math.min(n, zc(i, e.n) - Yl(a, e.palmL)));
  }
  return n;
}
function Zl(e, t, n, r, i) {
  let a = [1, 2, 3].map((n) => e.joint(`${t}0${n}`)),
    o = e.bone(`${t}03`),
    [s, c] = Hl[t],
    l = nl(o, 0, [s, 0, 0]),
    u = [
      [a[0], a[1]],
      [a[1], a[2]],
      [a[2], l],
    ];
  for (let e = 0; e < 3; e++) {
    let t = 1 / 0,
      a = 1 / 0,
      o = c * Ul[e] + r;
    for (let r = 0; r < n.n; r++) {
      let i = Gl(n.p, r * 3, u[e][0], u[e][1]) - o;
      (i < a && (a = i), n.grip[r] && i < t && (t = i));
    }
    ((i[e][0] = t), (i[e][1] = a));
  }
}
function Ql(e, t, n, r) {
  let i = new Float32Array(3),
    a = 1 / 0;
  for (let o = 0; o <= 6; o++) {
    let s = o / 6;
    ((i[0] = e[0] + (t[0] - e[0]) * s),
      (i[1] = e[1] + (t[1] - e[1]) * s),
      (i[2] = e[2] + (t[2] - e[2]) * s),
      (a = Math.min(a, Gl(i, 0, n, r))),
      (i[0] = n[0] + (r[0] - n[0]) * s),
      (i[1] = n[1] + (r[1] - n[1]) * s),
      (i[2] = n[2] + (r[2] - n[2]) * s),
      (a = Math.min(a, Gl(i, 0, e, t))));
  }
  return a;
}
function $l(e, t, n) {
  let r = [1, 2, 3].map((n) => e.joint(`${t}0${n}`)),
    [i, a] = Hl[t],
    o = nl(e.bone(`${t}03`), 0, [i, 0, 0]);
  return [
    [r[0], r[1]],
    [r[1], r[2]],
    [r[2], o],
  ].map(([e, t], r) => ({ a: e, b: t, r: a * Ul[r] + n }));
}
var eu = [10, 22],
  tu = [4, 14, 10],
  nu = [2, 1, 0.8];
function ru(e, t, n, r, i, a = `knit`) {
  let o = new Map(),
    s = I(e.wrist, R(e.ax, e.palmL)),
    c = Jl(ql(i), n, s, 7, r.gripZ),
    l = [
      [0, 0],
      [0, 0],
      [0, 0],
    ];
  for (let n of r.fingers) {
    let i = t[n.toLowerCase()],
      s = n === `Thumb` ? Wl[a].thumb : Wl[a].finger,
      u = n === `Thumb` ? $l(e, `Index`, Wl[a].finger) : null,
      d = (t) => {
        (e.curl(n, { c: t, spread: i.spread }),
          Zl(e, n, c, s, l),
          u &&
            $l(e, n, Wl[a].finger).forEach((e, t) => {
              if (t === 0) return;
              let n = 1 / 0;
              for (let t of u)
                n = Math.min(n, Ql(e.a, e.b, t.a, t.b) - e.r - t.r);
              ((l[t][0] = Math.min(l[t][0], n)),
                (l[t][1] = Math.min(l[t][1], n)));
            }));
      },
      f = (e) => {
        for (let t = e; t < 3; t++) if (l[t][1] < -0.06) return !0;
        return !1;
      },
      p = (e, t) => {
        let n = [e[0], e[1], e[2]],
          r = [t, !1, !1];
        d(e);
        for (let t = 0; t < 120 && !(r[0] && r[1] && r[2]); t++)
          for (let t = 0; t < 3; t++) {
            if (r[t]) continue;
            let a = e[t];
            ((e[t] = Math.min(
              i.c[t],
              e[t] + Math.max(0.5, ((i.c[t] - n[t]) / 60) * nu[t]),
            )),
              d(e),
              f(t)
                ? ((e[t] = a), (r[t] = !0), d(e))
                : (l[t][0] <= -0.03 || e[t] >= i.c[t]) && (r[t] = !0));
          }
        return Math.min(l[0][0], l[1][0], l[2][0]) <= 0.010000000000000002;
      },
      m;
    if (n !== `Thumb` && r.rooted?.includes(n))
      ((m = [i.c[0], (r.from ?? [0, 6, 4])[1], (r.from ?? [0, 6, 4])[2]]),
        p(m, !0));
    else if (n !== `Thumb`) ((m = [...(r.from ?? [0, 6, 4])]), p(m, !1));
    else {
      m = [i.c[0], Math.min(eu[0], i.c[1]), Math.min(eu[1], i.c[2])];
      for (
        let e = 1;
        e >= 0 &&
        ((m = [
          i.c[0],
          Math.min(eu[0], i.c[1]) * e,
          Math.min(eu[1], i.c[2]) * e,
        ]),
        d(m),
        f(0));
        e -= 0.25
      );
      p(m, !0);
    }
    (e.curl(n, { c: m, spread: i.spread }), o.set(n, m));
  }
  return o;
}
function iu(e, t, n, r, i, a) {
  let o = I(e.wrist, R(e.ax, e.palmL)),
    s = (t) => Xl(e, Jl(ql(n), t, o, 7, a));
  if (!i) {
    let n = s(t);
    if (!Number.isFinite(n)) return t;
    let i = new Float32Array(t),
      a = r - n;
    return (
      (i[3] += e.n[0] * a),
      (i[7] += e.n[1] * a),
      (i[11] += e.n[2] * a),
      i
    );
  }
  let c = z(Bc([t[2], t[6], t[10]], e.n)),
    l = [
      t[0] * c[0] + t[4] * c[1] + t[8] * c[2],
      t[1] * c[0] + t[5] * c[1] + t[9] * c[2],
      t[2] * c[0] + t[6] * c[1] + t[10] * c[2],
    ],
    u = (e) => {
      let n = new Float32Array(12),
        r = new Float32Array(12);
      return (sl(l, e * Il, i, n), H(t, 0, n, 0, r, 0), r);
    },
    d = (e) => s(u(e)) - r,
    f = d(0);
  if (!Number.isFinite(f) || Math.abs(f) < 0.005) return t;
  let p = d(4) > d(-4) ? (f < 0 ? 1 : -1) : f < 0 ? -1 : 1,
    m = 0,
    h = 0;
  for (let e = 2; e <= 40; e += 2) {
    let t = d(p * e);
    if (!Number.isFinite(t)) break;
    if (Math.sign(t) !== Math.sign(f)) {
      h = p * e;
      break;
    }
    m = p * e;
  }
  if (!h) return u(m);
  for (let e = 0; e < 12; e++) {
    let e = (m + h) / 2;
    Math.sign(d(e)) === Math.sign(f) ? (m = e) : (h = e);
  }
  return u((m + h) / 2);
}
function au(e, t, n) {
  let r = t.place ? t.place(e) : e.carrot;
  return t.wrap?.seat === void 0
    ? r
    : iu(e, r, n, t.wrap.seat, t.wrap.pivot, t.wrap.gripZ);
}
function ou(e, t = _l(), n = Fl, r = `knit`) {
  if (!e.wrap) return e;
  let i = cu(e, t),
    a = ru(i, e, au(i, e, n), e.wrap, n, r),
    o = { ...e };
  for (let [t, n] of a)
    o[t.toLowerCase()] = { c: n, spread: e[t.toLowerCase()].spread };
  return o;
}
function su(e, t, n = [0, 0, 0]) {
  let r = new Float32Array(12),
    i = new Float32Array(12),
    a = new Float32Array(12),
    o = new Float32Array(12);
  return (
    sl([1, 0, 0], n[0] * Il, [0, 0, 0], r),
    sl([0, 1, 0], n[1] * Il, [0, 0, 0], i),
    H(r, 0, i, 0, o, 0),
    sl([0, 0, 1], n[2] * Il, [0, 0, 0], i),
    H(o, 0, i, 0, r, 0),
    (r[3] = t[0]),
    (r[7] = t[1]),
    (r[11] = t[2]),
    H(e, 0, r, 0, a, 0),
    a
  );
}
function cu(e, t = _l()) {
  let n = (e) => t.at(e),
    r = (e) => t.bone(e),
    i = n(`Right_Hand`),
    a = Ll.map((e) => n(`Right_${e}01`)),
    o = R(
      a.reduce((e, t) => I(e, t), [0, 0, 0]),
      0.25,
    ),
    s = z(L(o, i)),
    c = L(a[0], a[3]);
  c = z(L(c, R(s, zc(c, s))));
  let l = Bc(s, c);
  zc(l, L(n(`Right_Thumb02`), i)) < 0 && (l = R(l, -1));
  let u = Vc(L(o, i)),
    d = new Map(),
    f = new Float32Array(12),
    p = new Float32Array(12),
    m = new Float32Array(12),
    h = (e, i, a) => {
      (ll(p),
        i.spread && (sl(l, i.spread * Il, n(e[0]), f), p.set(f)),
        e.forEach((e, o) => {
          (sl(a, (i.c[o] * Math.PI) / 180, n(e), f),
            H(p, 0, f, 0, m, 0),
            p.set(m));
          let s = new Float32Array(12);
          (H(p, 0, t.bind, r(e) * 12, s, 0), d.set(e.replace(`Right_`, ``), s));
        }));
    },
    g = z(Bc(s, l)),
    _ = z(Bc(z(L(n(`Right_Thumb02`), n(`Right_Thumb01`))), l)),
    v = (e, t) =>
      h(
        [1, 2, 3].map((t) => `Right_${e}0${t}`),
        t,
        e === `Thumb` ? _ : g,
      );
  for (let t of Ll) v(t, e[t.toLowerCase()]);
  v(`Thumb`, e.thumb);
  let y = (e, t, n) => {
      let r = z(t),
        i = z(L(n, R(r, zc(n, r)))),
        a = Bc(i, r),
        o = new Float32Array(12);
      return (cl(a, i, r, e, o), o);
    },
    b = I(I(i, R(s, u * Vl)), R(l, 1.35)),
    x = z(I(c, R(s, 0.12))),
    S = z(L(s, R(x, zc(s, x)))),
    C = new Float32Array(12);
  cl(S, Bc(x, S), x, b, C);
  let w = (e) => {
    let t = d.get(e);
    if (!t) throw Error(`hold: no finger bone ${e}`);
    return t;
  };
  return {
    wrist: i,
    ax: s,
    across: c,
    n: l,
    palmL: u,
    carrot: C,
    bone: w,
    joint: (e) => {
      let t = w(e);
      return [t[3], t[7], t[11]];
    },
    dir: (e) => {
      let t = w(e);
      return z([t[0], t[4], t[8]]);
    },
    frame: y,
    curl: v,
  };
}
var lu = new WeakMap();
function uu(e, t, n) {
  let r = e.hold ?? Rl,
    i = lu.get(t);
  i || lu.set(t, (i = new Map()));
  let a = `${e.id}|${n}`,
    o = i.get(a);
  if (o && o.spec === r) return o.grip;
  let s = cu(r, t),
    c = au(s, r, e),
    l = r.wrap ? ru(s, r, c, r.wrap, e, n) : new Map(),
    u = t.bone(`Right_Hand`),
    d = new Float32Array(12);
  tl(t.bind, u * 12, d, 0);
  let f = [],
    p = [];
  for (let e of [...Ll, `Thumb`])
    for (let n = 1; n <= 3; n++) {
      let r = `${e}0${n}`;
      (f.push(t.bone(`Right_${r}`)), p.push(s.bone(r)));
    }
  (f.push(t.bone(`Knife_Handle`)), p.push(c));
  let m = new Float32Array(f.length * 12);
  p.forEach((e, t) => H(d, 0, e, 0, m, t * 12));
  let h = {
    bones: f,
    L: m,
    invHand: d,
    loose: {
      h: s,
      spec: r,
      curls: Ll.map((e) => l.get(e) ?? r[e.toLowerCase()].c),
    },
  };
  return (i.set(a, { spec: r, grip: h }), h);
}
function du(e, t, n = _l()) {
  let r = [...e],
    i = globalThis,
    a =
      typeof i.requestIdleCallback == `function`
        ? (e) => i.requestIdleCallback(e, { timeout: 2e3 })
        : (e) => setTimeout(e, 50),
    o = () => {
      let e = r.shift();
      e && (uu(e, n, t), a(o));
    };
  a(o);
}
var fu = class {
  def;
  r;
  glove;
  state;
  bones;
  L;
  hand;
  kb;
  kp;
  joints;
  H = new Float32Array(12);
  R = new Float32Array(12);
  T = new Float32Array(12);
  T2 = new Float32Array(12);
  rest;
  devPose = null;
  right;
  arm;
  helper;
  M = new Float32Array(12);
  loose;
  invHand;
  Lf = new Float32Array(12);
  constructor(e, t = _l(), n = `knit`) {
    ((this.def = e), (this.r = t), (this.glove = n));
    let r = uu(e, t, n);
    ((this.loose = r.loose),
      (this.invHand = r.invHand),
      (this.hand = t.bone(`Right_Hand`)),
      (this.kb = t.bone(`Knife_Handle`)),
      (this.kp = t.bone(`knife_Parent`)),
      (this.bones = r.bones),
      (this.L = r.L),
      (this.joints = (e.joints ?? []).map((e) => {
        let n = t.bone(e),
          r = t.parent[n],
          i = new Float32Array(12),
          a = new Float32Array(12);
        return (
          tl(t.bind, r * 12, i, 0),
          H(i, 0, t.bind, n * 12, a, 0),
          { i: n, parent: r, local: a }
        );
      })),
      (this.rest = this.joints.map(() => 0)),
      (this.state = {
        arm: { o: [0, 0, 0], a: [0, 0, 0] },
        wrist: [0, 0, 0],
        offset: [0, 0, 0],
        local: null,
        angles: [...this.rest],
        show: 0,
        loosen: 0,
      }),
      (this.right = [...t.subtree(t.bone(`Root36`)), this.kp, this.kb]),
      (this.arm = t.bone(`Right_Arm`)),
      (this.helper = [`Root98`, `R_wrist_helper`].map((e) => t.bone(e))));
  }
  get overridden() {
    return this.bones;
  }
  apply(e, t, n, r = `procedural`) {
    let i = this.state;
    ((i.wrist[0] = i.wrist[1] = i.wrist[2] = 0),
      (i.arm.o[0] = i.arm.o[1] = i.arm.o[2] = 0),
      (i.arm.a[0] = i.arm.a[1] = i.arm.a[2] = 0),
      (i.offset[0] = i.offset[1] = i.offset[2] = 0),
      (i.local = null),
      (i.loosen = 0));
    for (let e = 0; e < this.rest.length; e++) i.angles[e] = this.rest[e];
    (this.def.pose?.(t, n, i, r), this.devPose?.(i));
    let a = this.hand * 12,
      o = this.H,
      s = i.arm.o,
      c = i.arm.a;
    if (s[0] || s[1] || s[2] || c[0] || c[1] || c[2]) {
      let t = this.arm * 12,
        n = [e[a + 3], e[a + 7], e[a + 11]],
        r = [e[t + 3], e[t + 7], e[t + 11]];
      (sl(z([n[0] - r[0], n[1] - r[1], n[2] - r[2]]), c[2] * Il, n, this.T),
        ol(c[0], c[1], 0, 0, 0, 0, this.R),
        (this.R[3] =
          r[0] -
          (this.R[0] * r[0] + this.R[1] * r[1] + this.R[2] * r[2]) +
          s[0]),
        (this.R[7] =
          r[1] -
          (this.R[4] * r[0] + this.R[5] * r[1] + this.R[6] * r[2]) +
          s[1]),
        (this.R[11] =
          r[2] -
          (this.R[8] * r[0] + this.R[9] * r[1] + this.R[10] * r[2]) +
          s[2]));
      let i = this.M;
      H(this.R, 0, this.T, 0, i, 0);
      for (let t of this.right)
        (H(i, 0, e, t * 12, this.T, 0), e.set(this.T, t * 12));
    }
    if (i.wrist[0] || i.wrist[1] || i.wrist[2]) {
      let t = [e[a + 3], e[a + 7], e[a + 11]],
        n = this.R;
      (ol(i.wrist[0], i.wrist[1], i.wrist[2], 0, 0, 0, n),
        (n[3] = t[0] - (n[0] * t[0] + n[1] * t[1] + n[2] * t[2])),
        (n[7] = t[1] - (n[4] * t[0] + n[5] * t[1] + n[6] * t[2])),
        (n[11] = t[2] - (n[8] * t[0] + n[9] * t[1] + n[10] * t[2])),
        H(n, 0, e, a, o, 0),
        e.set(o, a),
        ol(i.wrist[0] * 0.5, i.wrist[1] * 0.5, i.wrist[2] * 0.5, 0, 0, 0, n),
        (n[3] = t[0] - (n[0] * t[0] + n[1] * t[1] + n[2] * t[2])),
        (n[7] = t[1] - (n[4] * t[0] + n[5] * t[1] + n[6] * t[2])),
        (n[11] = t[2] - (n[8] * t[0] + n[9] * t[1] + n[10] * t[2])));
      for (let t of this.helper)
        (H(n, 0, e, t * 12, this.T2, 0), e.set(this.T2, t * 12));
    } else o.set(e.subarray(a, a + 12));
    let l = this.bones.length;
    for (let t = 0; t < l; t++) H(o, 0, this.L, t * 12, e, this.bones[t] * 12);
    i.loosen > 0 && this.loosenFingers(e, o, Math.min(1, i.loosen));
    let u = this.kb * 12;
    ((i.offset[0] || i.offset[1] || i.offset[2]) &&
      (ll(this.T),
      (this.T[3] = i.offset[0]),
      (this.T[7] = i.offset[1]),
      (this.T[11] = i.offset[2]),
      H(e, u, this.T, 0, this.T2, 0),
      e.set(this.T2, u)),
      e.copyWithin(this.kp * 12, u, u + 12));
  }
  loosenFingers(e, t, n) {
    let { h: r, spec: i, curls: a } = this.loose;
    Ll.forEach((o, s) => {
      let c = o === `Index` ? n * 0.85 : n,
        l = a[s];
      r.curl(o, {
        c: [
          l[0] + (tu[0] - l[0]) * c,
          l[1] + (tu[1] - l[1]) * c,
          l[2] + (tu[2] - l[2]) * c,
        ],
        spread: i[o.toLowerCase()].spread,
      });
      for (let n = 1; n <= 3; n++)
        (H(this.invHand, 0, r.bone(`${o}0${n}`), 0, this.Lf, 0),
          H(t, 0, this.Lf, 0, e, this.r.bone(`Right_${o}0${n}`) * 12));
      r.curl(o, { c: l, spread: i[o.toLowerCase()].spread });
    });
  }
  applyLocal(e) {
    let t = this.state.local;
    if (!t) return;
    let n = this.kb * 12;
    (H(e, n, t, 0, this.T2, 0),
      e.set(this.T2, n),
      e.copyWithin(this.kp * 12, n, n + 12));
  }
  solve(e) {
    this.applyLocal(e);
    let t = this.state.angles;
    this.joints.forEach((n, r) => {
      (sl([1, 0, 0], -t[r] * Il, [0, 0, 0], this.R),
        H(n.local, 0, this.R, 0, this.T, 0),
        H(e, n.parent * 12, this.T, 0, e, n.i * 12));
    });
  }
};
function pu(e = [0, 0, 0], t = [0, 0, 40], n = zl) {
  return {
    ...Rl,
    thumb: n,
    index: { c: [80, 94, 75] },
    middle: { c: [84, 98, 75] },
    ring: { c: [88, 98, 75] },
    pinky: { c: [92, 96, 75] },
    wrap: {
      fingers: [`Index`, `Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    place: (n) => su(n.carrot, e, [t[0], t[1], 90 + t[2]]),
  };
}
var mu = [1, 0, 0],
  hu = [0, 1, 0],
  gu = ml.pinY,
  _u = ml.pinZ,
  vu = -2.7,
  yu = _u + 0.3,
  bu = gu * 0.98,
  xu = 0.33,
  Su = _u + 0.28,
  Cu = _u + 4.85,
  wu = (e) =>
    e <= 0 ? 0 : e >= 1 ? 1 : 1 + 2.2 * (e - 1) ** 3 + 1.2 * (e - 1) ** 2;
function Tu(e, t, n) {
  let r = e.view === `fp`,
    i = r ? 15 : 8,
    a = [];
  for (let e = 0; e <= i; e++) {
    let n = e / i,
      o = vu + (yu - vu) * n,
      s = Math.min(1, Math.min(n, 1 - n) / 0.06),
      c =
        (0.55 + 0.45 * Math.sqrt(s)) *
        (1 - 0.06 * Math.sin(n * Math.PI * 2) ** 2) *
        (r && e % 3 == 2 && e > 1 && e < i - 1 ? 1.05 : 1);
    a.push(
      V(
        [0, t * gu * (0.98 + 0.02 * c), o],
        mu,
        hu,
        xu * c,
        bu * c,
        r ? 12 : 8,
        3.2,
      ),
    );
  }
  e.surface(a, {
    paint: (e) => (e % 3 == 2 && e > 1 && e < i - 1 ? xl : Sl),
    bone: n,
    part: U.grip,
    capStart: Sl,
    capEnd: Sl,
  });
  for (let i of [_u, -2.1500000000000004]) {
    let a = i === _u ? 0.14 : 0.09,
      o = [
        V([-0.37, t * gu, i], hu, [0, 0, 1], a, a, r ? 10 : 6),
        V([0.37, t * gu, i], hu, [0, 0, 1], a, a, r ? 10 : 6),
      ];
    e.surface(o, {
      paint: () => vl,
      bone: n,
      part: U.guard,
      capStart: vl,
      capEnd: vl,
    });
  }
  if (t < 0)
    for (let t of [-1, 1]) {
      let r = [];
      for (let e = 0; e <= 4; e++) {
        let n = e / 4;
        r.push([
          t * (0.1 + 0.16 * n),
          -gu - 0.06 * n,
          -2.6500000000000004 - 0.85 * n + 0.1 * n * n,
        ]);
      }
      e.leaf(
        r,
        (e) => 0.2 * Math.sin(((e + 0.4) / 4.8) * Math.PI) + 0.03,
        0.07,
        [0, 1, 0],
        () => vl,
        { bone: n, part: U.guard },
      );
    }
}
function Eu(e) {
  let t = e.view === `fp`,
    n = t ? `Bfly_Blade` : void 0;
  e.blade({
    n: 18,
    m: 12,
    center: (e) => [0, 0.06 * e * e, Su + (Cu - Su) * e],
    width: (e) => 0.4 * Math.min(1, (1 - e) / 0.42) ** 0.75 + 0.015,
    thick: (e) => 0.1 * (1 - 0.6 * e) + 0.015,
    edge: -1,
    ex: 2.6,
    bone: n,
    capStart: bl,
  });
  {
    let r = [_u - 0.32, _u - 0.2, _u + 0.2, _u + 0.3].map((e, n) =>
      V(
        [0, 0, e],
        mu,
        hu,
        [0.08, 0.11, 0.11, 0.09][n],
        [0.3, 0.42, 0.42, 0.38][n],
        t ? 12 : 8,
        3,
      ),
    );
    e.surface(r, {
      paint: () => vl,
      bone: n,
      part: U.guard,
      capStart: vl,
      capEnd: vl,
    });
  }
  (Tu(e, 1), Tu(e, -1, t ? `Bfly_Bite` : void 0));
}
var Du = {
    id: `bunnyfly`,
    cosmeticId: `knife-bunnyfly`,
    name: `Bunnyfly`,
    rarity: 4,
    blurb: `A carrot balisong with bunny-ear latches that flicks open on every swing.`,
    build: Eu,
    joints: [`Bfly_Blade`, `Bfly_Bite`],
    pivots: {
      pinA: { p: [0, gu, _u], axis: [1, 0, 0] },
      pinB: { p: [0, -gu, _u], axis: [1, 0, 0] },
    },
    tp: { o: [3.16, -1.24, 1.34], z: [0.53, 0.1, -0.84], y: [1, 0, 0], s: 1.6 },
    hold: {
      index: { c: [80, 94, 75] },
      middle: { c: [84, 98, 75] },
      ring: { c: [88, 98, 75] },
      pinky: { c: [92, 96, 75] },
      thumb: { c: [12, 40, 60], spread: 16 },
      wrap: {
        fingers: [`Index`, `Middle`, `Ring`, `Pinky`, `Thumb`],
        seat: -0.02,
      },
      place: (e) => su(e.carrot, [0, 0, 0.3], [0, 0, 125]),
    },
    pose(e, t, n) {
      let r = 0,
        i = 0;
      (e === `draw` &&
        ((r = 1 - dl((t - 0.26) / 0.2)),
        (i = 1 - dl((t - 0.32) / 0.24)),
        (n.loosen = dl((t - 0.2) / 0.08) - wu((t - 0.56) / 0.16))),
        (n.angles[0] = -180 * r),
        (n.angles[1] = 180 * Math.max(r, i)),
        (n.offset[1] = -2 * gu * dl(r)));
    },
  },
  Ou = [1, 0, 0],
  ku = [0, 1, 0],
  Au = W(14690870),
  ju = W(16315630),
  Mu = W(4706196),
  Nu = (e, t) => {
    let n = ((e / t) * 2) % 1;
    return n < 0.36 ? Au : n > 0.5 && n < 0.6 ? Mu : ju;
  },
  Pu = 0.85,
  Fu = -1.9,
  Iu = 2.05,
  Lu = 0.36,
  Ru = 0.82,
  zu = [0, -0.82, Fu];
function Bu(e) {
  let t = e.view === `fp`,
    n = t ? 12 : 10;
  e.blade({
    n: 22,
    m: n,
    twist: (Pu * 7.55) / (t ? 22 : 14),
    center: (e) => [0, 0, Iu + 7.55 * e],
    width: (e) => Lu * (1 - e) ** 0.7 + 0.012,
    thick: (e) => Lu * (1 - e) ** 0.7 * (1 - 0.45 * e) + 0.012,
    ex: 2,
    bands: !1,
    paint: (e, t) => Nu(t, n),
    capStart: ju,
  });
  {
    let n = t ? 32 : 16,
      r = (e, t) => V([0, 0, e], Ou, ku, t, t, n),
      i = [
        r(1.69, 0.55),
        r(1.7399999999999998, 0.92),
        r(1.9999999999999998, 0.92),
        r(Iu, 0.55),
      ];
    e.surface(i, {
      paint: (e, t) =>
        e === 1
          ? ju
          : Math.floor((t / n) * 8 + (e === 2 ? 0.5 : 0)) % 2
            ? Au
            : ju,
      part: U.guard,
      capStart: ju,
      capEnd: ju,
    });
  }
  {
    let r = [],
      i = t ? 12 : 6;
    for (let e = 0; e <= i; e++) r.push([0, 0, 1.67 + (e / i) * -3.57]);
    let a = t ? 18 : 9;
    for (let e = 1; e <= a; e++) {
      let t = (e / a) * Math.PI * 1.08;
      r.push([0, zu[1] + Math.cos(t) * Ru, zu[2] - Math.sin(t) * Ru]);
    }
    let o = [0];
    for (let e = 1; e < r.length; e++)
      o.push(
        o[e - 1] +
          Math.hypot(
            r[e][0] - r[e - 1][0],
            r[e][1] - r[e - 1][1],
            r[e][2] - r[e - 1][2],
          ),
      );
    let s = r.map((e, t) => {
      let i =
          t + 1 < r.length
            ? [r[t + 1][0] - e[0], r[t + 1][1] - e[1], r[t + 1][2] - e[2]]
            : [
                r[t][0] - r[t - 1][0],
                r[t][1] - r[t - 1][1],
                r[t][2] - r[t - 1][2],
              ],
        a = Math.hypot(i[0], i[1], i[2]) || 1,
        s = [i[0] / a, i[1] / a, i[2] / a],
        c = [0, -s[2], s[1]],
        l = t === r.length - 1 ? 0.8 : 1;
      return V(e, Ou, c, Lu * l, Lu * l, n, 2, -0.85 * o[t]);
    });
    e.surface(s, {
      paint: (e, t) => Nu(t, n),
      part: U.grip,
      capStart: Au,
      capEnd: ju,
    });
  }
}
var Vu = {
    id: `candycane`,
    cosmeticId: `knife-candycane`,
    name: `Candy Cane Shiv`,
    rarity: 5,
    blurb: `A sharpened candy cane with a peppermint guard, from the winter event.`,
    build: Bu,
    pivots: { hook: { p: zu, axis: [1, 0, 0] } },
    tp: { o: [3.16, -1.24, 1.34], z: [0.53, 0.1, -0.84], y: [1, 0, 0], s: 1.6 },
    hold: pu([0, 0, 0], void 0, Bl),
  },
  Hu = [1, 0, 0],
  Uu = [0, 1, 0],
  Wu = W(13624024),
  Gu = W(11125430),
  Ku = W(16055287),
  qu = W(1054236),
  Ju = 1.95,
  Yu = [0, -0.45, 6.75],
  Xu = 0.62;
function Zu(e) {
  let t = e.view === `fp`;
  e.blade({
    n: 14,
    m: 14,
    center: (e) => [0, -0.815, Ju + 6.6499999999999995 * e],
    width: (e) =>
      1.2349999999999999 *
      Math.min(1, Math.sqrt(Math.min(1, e / 0.06)) * 0.25 + 0.75) *
      (e > 0.86
        ? Math.sqrt(Math.max(0, 1 - ((e - 0.86) / 0.14) ** 2)) * 0.92 + 0.08
        : 1),
    thick: (e) => 0.17 - 0.03 * e,
    shift: (e) => (e > 0.86 ? 0.35 * ((e - 0.86) / 0.14) ** 2 : 0),
    edge: -1,
    ex: 6,
    bands: !1,
    paint: (e, t) => {
      let n = Math.cos((t / 14) * Math.PI * 2);
      return n < -0.72 ? Ku : n > 0.82 ? Gu : Wu;
    },
    capStart: Gu,
  });
  for (let n of [-1, 1]) {
    let r = n * 0.165,
      i = t ? 28 : 16,
      a = (e) => {
        let t = [];
        for (let n = 0; n < i; n++) {
          let a = (n / i) * Math.PI * 2 + Math.PI / 4,
            o = Math.abs(Math.sin(2 * a)),
            s =
              e *
              (0.38 + 0.62 * o ** 0.6) *
              (1 - 0.18 * Math.abs(Math.cos(4 * a)) ** 6 * o);
          t.push([r, Yu[1] + Math.cos(a) * s, Yu[2] + Math.sin(a) * s]);
        }
        return t;
      },
      o = a(Xu),
      s = [r + n * 0.004, Yu[1], Yu[2]];
    (e.surface([o.map(() => s), o.map((e) => [e[0] + n * 0.004, e[1], e[2]])], {
      paint: () => qu,
      part: U.none,
      closed: !0,
    }),
      e.loop(
        a(Xu * 1.04),
        t ? 0.055 : 0.07,
        4,
        [1, 0, 0],
        (e) => (e % 2 ? xl : Sl),
        { part: U.guard },
      ));
  }
  {
    let n = [1.53, 1.5899999999999999, 1.97, 2.07].map((e, n) =>
      V(
        [0, 0, e],
        Hu,
        Uu,
        [0.36, 0.44, 0.42, 0.24][n],
        [0.48, 0.58, 0.56, 0.4][n],
        t ? 14 : 10,
      ),
    );
    e.surface(n, { paint: () => vl, part: U.guard, capStart: vl, capEnd: vl });
    let r = t ? 14 : 7,
      i = [];
    for (let e = 0; e <= r; e++) {
      let n = e / r,
        a = -2.55 + 4.1 * n,
        o =
          (0.5 + 0.08 * Math.sin(n * Math.PI)) *
          Math.min(1, 0.55 + 0.45 * Math.sqrt(Math.min(1, n / 0.08))) *
          (e % 3 == 1 ? 0.95 : 1);
      i.push(V([0, 0, a], Hu, Uu, o * 0.86, o, t ? 14 : 10, 2, 0.3 * e));
    }
    e.surface(i, {
      paint: (e) => (e % 3 == 1 ? bl : yl),
      part: U.grip,
      capStart: yl,
      capEnd: yl,
    });
    for (let t = 0; t < 3; t++) {
      let n = (t - 1) * 0.55,
        r = [];
      for (let e = 0; e <= 5; e++) {
        let i = e / 5;
        r.push(
          I(
            [0, Math.sin(n) * 1 * i, -2.5 - (1 + (t === 1 ? 0.4 : 0)) * i],
            R([-0.5, 0, 0], i * i),
          ),
        );
      }
      e.leaf(
        r,
        (e) => 0.24 * Math.sin(((e + 0.3) / 5.6) * Math.PI) + 0.03,
        0.05,
        [1, 0, 0],
        () => (t === 1 ? xl : Sl),
      );
    }
  }
}
var Qu = {
    id: `cleaver`,
    cosmeticId: `knife-cleaver`,
    name: `Clover Cleaver`,
    rarity: 3,
    blurb: `A chunky cleaver with a four-leaf clover cut through it.`,
    build: Zu,
    pivots: { hole: { p: Yu, axis: [1, 0, 0] } },
    tp: { o: [3.16, -1.24, 1.34], z: [0.53, 0.1, -0.84], y: [1, 0, 0], s: 1.6 },
    hold: pu([0, 0, 0.2]),
  },
  $u = [1, 0, 0],
  ed = [0, 1, 0],
  td = W(16052712),
  nd = W(14867919),
  rd = W(14018744),
  id = W(16777215),
  ad = W(2907699),
  od = W(15393484),
  sd = 2.45,
  cd = -2.7;
function ld(e) {
  let t = e.view === `fp`;
  e.blade({
    n: 20,
    m: 14,
    center: (e) => [0, 0.42 * e * e, sd + 9.75 * e],
    width: (e) =>
      (e < 0.86
        ? 0.5 - 0.1 * e
        : (0.5 - 0.086) * Math.max(0, (1 - e) / 0.14) ** 0.65) + 0.012,
    thick: (e) => 0.13 * (1 - 0.55 * e) + 0.015,
    shift: (e) => (e > 0.86 ? 0.12 * ((e - 0.86) / 0.14) : 0),
    edge: -1,
    ex: 2.8,
    bands: !1,
    paint: (e, t) =>
      Math.cos((t / 14) * Math.PI * 2) < -0.55
        ? id
        : e < 3
          ? rd
          : e % 4 == 2
            ? nd
            : td,
    capStart: vl,
  });
  {
    let n = [
      2.0300000000000002, 2.0700000000000003, 2.47, 2.5300000000000002,
    ].map((e, n) =>
      V(
        [0, 0, e],
        $u,
        ed,
        [0.17, 0.21, 0.19, 0.15][n],
        [0.5, 0.56, 0.52, 0.47][n],
        t ? 12 : 8,
        2.6,
      ),
    );
    e.surface(n, { paint: () => vl, part: U.guard, capStart: vl, capEnd: vl });
  }
  {
    let n = t ? 30 : 15,
      r = (e, t) => {
        let r = [];
        for (let i = 0; i < n; i++) {
          let a = (i / n) * Math.PI * 2,
            o = (1.3 + 0.26 * Math.cos(5 * a) + 0.07 * Math.cos(10 * a)) * t;
          r.push([Math.cos(a) * o * 0.82, Math.sin(a) * o - 0.08, e]);
        }
        return r;
      },
      i = [r(1.77, 0.8), r(1.8, 1), r(1.99, 1), r(2.02, 0.8)];
    e.surface(i, {
      paint: (e) => (e === 1 ? Sl : xl),
      part: U.guard,
      capStart: xl,
      capEnd: xl,
    });
    for (let t of [1.755, 2.045]) {
      let n = r(t, 0.55).filter((e, t) => t % 2 == 0);
      e.loop(n, 0.035, 3, [0, 0, 1], () => Sl, { part: U.guard });
    }
  }
  {
    let n = t ? 11 : 7,
      r = [];
    for (let e = 0; e <= n; e++) {
      let t = e / n,
        i = cd + 4.45 * t,
        a = 1 - 0.07 * Math.sin(t * Math.PI);
      r.push(
        V(
          [0, 0, i],
          $u,
          ed,
          0.34 * a,
          0.46 * a,
          8,
          2.4,
          e % 2 ? Math.PI / 8 : 0,
        ),
      );
    }
    e.surface(r, {
      paint: (e, t) => ((e + t) % 2 ? ad : od),
      part: U.grip,
      capStart: ad,
      capEnd: ad,
    });
  }
  {
    let n = [-2.9800000000000004, -2.9200000000000004, -2.68].map((e, n) =>
      V(
        [0, 0, e],
        $u,
        ed,
        [0.22, 0.33, 0.36][n],
        [0.3, 0.45, 0.48][n],
        t ? 12 : 8,
        2.4,
      ),
    );
    e.surface(n, { paint: () => vl, part: U.guard, capStart: vl, capEnd: vl });
    for (let t of [-1, 1]) {
      let n = [];
      for (let e = 0; e <= 6; e++) {
        let r = e / 6;
        n.push(
          I(
            [0.1 * t * r, t * 0.55 * r, -2.95 - 1.5 * r],
            R([-0.4, 0, 0], r * r),
          ),
        );
      }
      e.leaf(
        n,
        (e) => 0.26 * Math.sin(((e + 0.3) / 6.6) * Math.PI) + 0.02,
        0.05,
        [1, 0, 0],
        () => (t > 0 ? xl : Sl),
      );
    }
  }
}
var ud = {
    id: `daikon`,
    cosmeticId: `knife-daikon`,
    name: `Daikon-tana`,
    rarity: 4,
    blurb: `A short katana grown from a daikon, with a radish-leaf tsuba.`,
    build: ld,
    tp: {
      o: [3.16, -1.24, 1.34],
      z: [0.53, 0.1, -0.84],
      y: [1, 0, 0],
      s: 1.55,
    },
    hold: pu([0, 0, 0.3], void 0, Bl),
  },
  dd = W(16761402),
  fd = W(16774064),
  pd = W(14258202),
  md = {
    blade: dd,
    ring: fd,
    grip: W(2050602),
    guard: pd,
    leaf: dd,
    leafDark: pd,
  };
function hd(e) {
  if (e.view !== `fp`) return Pl(e, md);
  Nl(e, md);
  for (let t = 0; t < 6; t++) {
    let n = (t / 6) * Math.PI * 2 + Math.PI / 6,
      r = [Math.cos(n) * 0.8, Math.sin(n), 0],
      i = [];
    for (let e = 0; e <= 3; e++) {
      let t = e / 3,
        n = 0.95 + 0.3 * t;
      i.push([r[0] * n, r[1] * n, 2.15 + 0.75 * t]);
    }
    e.leaf(
      i,
      (e) => 0.15 * (1 - e / 3.4) + 0.02,
      0.05,
      [r[0], r[1], 0],
      () => (t % 2 ? dd : pd),
      { part: U.guard },
    );
  }
  let t = [-0.45, -0.3, -0.15].map((e, t) =>
    V(
      [0, 0, e],
      [1, 0, 0],
      [0, 1, 0],
      [0.5, 0.56, 0.5][t],
      [0.55, 0.62, 0.55][t],
      12,
    ),
  );
  e.surface(t, { paint: () => dd, part: U.guard, capStart: dd, capEnd: dd });
}
var gd = {
    id: `golden`,
    cosmeticId: `knife-golden`,
    name: `Golden Carrot`,
    rarity: 5,
    blurb: `The carrot blade in polished gold, held by world record holders.`,
    build: hd,
    tp: Fl.tp,
  },
  _d = [1, 0, 0],
  vd = [0, 1, 0],
  yd = [0, 0, 0],
  bd = [0, 0, 0],
  xd = [5.06, -1.41, 0.19, -17.75, 16.25, -19, -9.75, 9.5, -2.75],
  Sd = [4.2, 0.5, 2.6, 0, 10, 0, -35, 55, 30],
  Cd = -1.42,
  wd = 0.64,
  Td = 0.15,
  Ed = -0.66,
  Dd = 1.02,
  Od = 1.32,
  kd = 4.7,
  Ad = (Math.PI / 180) * 140,
  jd = (e) => [
    0,
    -0.12 *
      Math.sin(
        Math.max(0, Math.min(1, (e - Ed) / 1.6800000000000002)) * Math.PI,
      ),
    e,
  ];
function Md(e) {
  let t = Math.max(1, Math.round(28 * e)),
    n = 0,
    r = Od,
    i = (e * kd) / t;
  for (let a = 0; a < t; a++) {
    let o = Ad * (((a + 0.5) / t) * e) ** 1.25;
    ((n += Math.sin(o) * i), (r += Math.cos(o) * i));
  }
  return [0, n, r];
}
function Nd(e) {
  let t = e.view === `fp`;
  e.blade({
    n: 18,
    m: 12,
    center: Md,
    width: (e) =>
      (0.5 + 0.26 * Math.sin(Math.min(1, e * 2.4) * Math.PI * 0.5)) *
        (1 - e) ** 0.62 +
      0.025,
    thick: (e) => 0.19 * (1 - e) ** 0.7 + 0.03,
    shift: (e) => -0.06 * Math.sin(e * Math.PI),
    edge: 1,
    ex: 2.3,
  });
  {
    let n = [0.96, 1.1400000000000001, 1.36].map((e, n) =>
      V(
        jd(Math.min(e, Dd)).map((t, n) => (n === 2 ? e : t)),
        _d,
        vd,
        [0.33, 0.39, 0.3][n],
        [0.52, 0.62, 0.5][n],
        t ? 14 : 10,
      ),
    );
    e.surface(n, { paint: () => vl, part: U.guard, capStart: vl, capEnd: vl });
  }
  {
    let n = t ? 10 : 6,
      r = [];
    for (let e = 0; e <= n; e++) {
      let i = Ed + (1.6800000000000002 * e) / n,
        a = e % 2 ? 1.08 : 1;
      r.push(V(jd(i), _d, vd, 0.3 * a, 0.42 * a, t ? 12 : 8));
    }
    e.surface(r, {
      paint: (e) => (e % 4 == 1 ? xl : Sl),
      part: U.grip,
      capStart: Sl,
      capEnd: Sl,
    });
  }
  {
    let n = [-0.8599999999999999, -0.78, -0.61].map((e, n) =>
      V(
        [0, 0, e],
        _d,
        vd,
        [0.22, 0.32, 0.29][n],
        [0.3, 0.44, 0.4][n],
        t ? 12 : 8,
      ),
    );
    e.surface(n, { paint: () => vl, part: U.guard, capStart: vl, capEnd: vl });
  }
  {
    let n = t ? 22 : 14,
      r = t ? 2 : 1;
    for (let i = 0; i < r; i++) {
      let a = [];
      for (let e = 0; e < n; e++) {
        let t = (e / n) * Math.PI * 2,
          o = [0, Math.sin(t) * wd, Cd + Math.cos(t) * wd];
        if (r === 1) {
          a.push(o);
          continue;
        }
        let s = z(L(o, [0, 0, Cd])),
          c = t * 4 + i * Math.PI;
        a.push(
          I(o, I(R(s, Math.cos(c) * Td * 0.5), R(_d, Math.sin(c) * Td * 0.5))),
        );
      }
      e.loop(a, r === 1 ? Td : Td * 0.68, t ? 5 : 6, _d, () => (i ? xl : Sl), {
        part: U.grip,
      });
    }
  }
  for (let t of [-1, 1]) {
    let n = [];
    for (let e = 0; e <= 6; e++) {
      let r = e / 6;
      n.push([
        0.04 * t * r,
        t * (0.24 + 0.85 * r - 0.1 * r * r),
        -0.74 - 0.25 * r - 0.3 * r * r,
      ]);
    }
    e.leaf(
      n,
      (e) => 0.19 * Math.sin(((e + 0.35) / 6.7) * Math.PI) + 0.02,
      0.06,
      _d,
      () => (t > 0 ? xl : Sl),
    );
  }
}
var Pd = {
    id: `karrotbit`,
    cosmeticId: `knife-karrotbit`,
    name: `Karrotbit`,
    rarity: 3,
    blurb: `A hooked carrot with a leaf-braid finger ring that spins around your index finger.`,
    build: Nd,
    pivots: { ring: { p: [0, 0, Cd], axis: [1, 0, 0] } },
    tp: {
      o: [3.85, -1.12, 0.25],
      z: [-0.53, -0.1, 0.84],
      y: [1, 0, 0],
      s: 1.75,
    },
    hold: {
      index: { c: [62, 84, 52], spread: 4 },
      middle: { c: [84, 96, 58] },
      ring: { c: [88, 96, 58] },
      pinky: { c: [92, 94, 56] },
      thumb: { c: [12, 40, 60] },
      wrap: {
        fingers: [`Index`, `Middle`, `Ring`, `Pinky`, `Thumb`],
        from: [-20, 0, 0],
        gripZ: [Ed, 1.32],
        rooted: [`Index`],
      },
      place(e) {
        let t = I(R(e.joint(`Index01`), 0.45), R(e.joint(`Index02`), 0.55)),
          n = e.dir(`Index01`),
          r = z(
            L(
              I([e.carrot[3], e.carrot[7], e.carrot[11]], R(e.across, -1.4)),
              t,
            ),
          );
        return su(e.frame(L(t, R(r, Cd)), r, Bc(r, n)), yd, bd);
      },
    },
    pose(e, t, n) {
      let r = n.show * n.show * (3 - 2 * n.show),
        i = (e) => xd[e] + (Sd[e] - xd[e]) * r;
      ((n.arm.o[0] = i(0)),
        (n.arm.o[1] = i(1)),
        (n.arm.o[2] = i(2)),
        (n.arm.a[0] = i(3)),
        (n.arm.a[1] = i(4)),
        (n.arm.a[2] = i(5)),
        (n.wrist[0] = i(6)),
        (n.wrist[1] = i(7)),
        (n.wrist[2] = i(8)));
    },
  },
  Fd = [1, 0, 0],
  Id = [0, 1, 0],
  Ld = W(13226970),
  Rd = W(9872301),
  zd = W(15857144),
  Bd = W(10990524),
  Vd = (e) => 0.8 * Math.max(1 - e, 0) ** 0.85 + 0.04;
function Hd(e) {
  let t = e.z1 - e.z0,
    n = new Float32Array(401),
    r = 0;
  for (let i = 0; i < 400; i++) {
    let a = (i + 0.5) / 400,
      o = Math.max(0.03, (e.spine(a) - e.edge(a)) / 2);
    ((r = Math.min(0.995, r + (Vd(r) / (8.9 * o)) * (t / 400))),
      (n[i + 1] = r));
  }
  return (e) => {
    let t = Uc(e, 0, 1) * 400,
      r = Math.min(399, Math.floor(t));
    return n[r] + (n[r + 1] - n[r]) * (t - r);
  };
}
function Ud(e, t) {
  let n = e.view === `fp`,
    r = Hd(t),
    i = { steel: Ld, spine: Rd, bevel: zd, fuller: Bd, ...t.paint },
    [a, o] = t.fuller.c,
    s = n
      ? [
          { c: t.grind, t: 1, crease: !0 },
          { c: a, t: 1, crease: !0 },
          { c: a + (o - a) * 0.3, t: 1, fuller: 1 },
          { c: a + (o - a) * 0.7, t: 1, fuller: 1 },
          { c: o, t: 1, crease: !0 },
          { c: 0.86, t: 1, crease: !0 },
          { c: 1, t: 0.6, crease: !0 },
        ]
      : [
          { c: t.grind, t: 1 },
          { c: 0.86, t: 1 },
          { c: 1, t: 0.6 },
        ],
    c = [{ c: -1, side: 0, p: null }];
  for (let e of s)
    for (let t = 0; t < (e.crease ? 2 : 1); t++)
      c.push({ c: e.c, side: 1, p: e });
  for (let e = s.length - 1; e >= 0; e--)
    for (let t = 0; t < (s[e].crease ? 2 : 1); t++)
      c.push({ c: s[e].c, side: -1, p: s[e] });
  let l = c.map((e, t) => {
      let r = c[(t + 1) % c.length];
      if (e.side === 0 || r.side === 0) return i.bevel;
      let s = Math.min(e.c, r.c);
      return s >= 0.859999
        ? i.spine
        : n && s >= a - 1e-6 && s < o - 1e-6
          ? i.fuller
          : i.steel;
    }),
    u = n ? t.rows : Math.max(8, Math.round(t.rows * 0.6)),
    d = [],
    f = [];
  for (let e = 0; e <= u; e++) {
    let i = e / u,
      s = t.z0 + (t.z1 - t.z0) * i,
      l = t.spine(i),
      p = t.edge(i),
      m = (l + p) / 2,
      h = Math.max(0.006, (l - p) / 2),
      g = Math.max(0.006, t.thick(i)),
      [_, v] = t.fuller.s,
      y = B(_, _ + 0.1, i) * (1 - B(v - 0.14, v, i)),
      b = t.fuller.depth * Math.sqrt(y),
      x = (a + o) / 2,
      S = 1 - 0.8 * B(t.clip, t.clip + 0.12, i),
      C = r(i),
      w = [],
      T = [];
    for (let e of c) {
      let t =
          n && e.p && e.c >= a - 1e-6 && e.c <= o + 1e-6
            ? x + (e.c - x) * (0.04 + 0.96 * y)
            : e.c,
        r = 0;
      (e.p &&
        ((r = e.p.t),
        e.p.fuller && (r *= 1 - b),
        e.c >= 0.99 ? (r *= S) : e.c > 0.5 && (r *= 0.55 + 0.45 * S)),
        w.push([e.side * g * r, m + t * h, s]),
        T.push([C, t, Cl(C, Math.max(0, -t * 1.1))]));
    }
    (d.push(w), f.push(T));
  }
  let p = c.map((e) =>
    e.side === 0 ? [0, -1, 0] : [e.side, e.c >= 0.99 ? 0.6 : 0, 0],
  );
  return (
    e.surface(d, {
      paint: (e, t) => l[t],
      part: U.blade,
      fin: (e, t) => f[e][t],
      capStart: null,
      capEnd: null,
      out: (e, t) => p[t],
    }),
    r
  );
}
function Wd(e, t, n, r, i, a, o, s) {
  let c = [],
    l = [],
    u = a * 2;
  for (let e = 0; e <= u; e++) {
    let s = r + ((i - r) * (Math.floor(e / 2) + (e % 2 ? 0.22 : 0))) / a,
      u = t.z0 + (t.z1 - t.z0) * s,
      d = t.spine(s),
      f = t.thick(s) * 0.5,
      p = e % 2 ? o : 0.012;
    (c.push([
      [f, d - 0.05, u],
      [f, d + p, u],
      [-f, d + p, u],
      [-f, d - 0.05, u],
    ]),
      l.push([n(s), 1, 0.4]));
  }
  e.surface(c, {
    paint: () => s,
    part: U.blade,
    fin: (e, t) => [l[e][0], t === 0 || t === 3 ? 0.62 : 1, l[e][2]],
    flat: !0,
    capStart: s,
    capEnd: s,
  });
}
function Gd(e, t) {
  let n = e.view === `fp`,
    r = n ? t.ribs * 2 : Math.max(6, t.ribs),
    i = n ? 12 : 8,
    a = [];
  for (let e = 0; e <= r; e++) {
    let o = e / r,
      s = t.z0 + (t.z1 - t.z0) * o,
      c =
        1 +
        0.07 * Math.sin(Math.PI * Uc((o - 0.05) / 0.75, 0, 1)) -
        0.05 * B(0.85, 1, o),
      l = n && e % 2 == 1 && e < r ? (t.wrap ? 1.05 : 1.07) : 1;
    a.push(
      V(
        [0, t.cy ?? 0, s],
        Fd,
        Id,
        t.rx * c * l,
        t.ry * c * l,
        i,
        2.4,
        t.wrap && e % 2 ? Math.PI / i : 0,
      ),
    );
  }
  e.surface(a, {
    paint: (e, n) => (t.wrap ? ((e + n) % 2 ? t.a : t.b) : e % 2 ? t.b : t.a),
    part: U.grip,
    capStart: t.a,
    capEnd: t.a,
  });
}
function Kd(e, t, n, r, i, a, o = U.guard, s = 3.2) {
  let c = e.view === `fp` ? 16 : 10,
    l = t.map((e, t) => V([0, i, e], Fd, Id, n[t], r[t], c, s));
  e.surface(l, { paint: () => a, part: o, capStart: a, capEnd: a });
}
var qd = (e) => pu(e, void 0, Bl),
  Jd,
  Yd = () => {
    if (Jd === void 0) {
      let e = globalThis.matchMedia;
      Jd =
        typeof e == `function` ? e(`(prefers-reduced-motion: reduce)`) : null;
    }
    return !!Jd?.matches;
  },
  Xd = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  Zd = (e, t, n) => Xd((e - t) / (n - t)),
  Qd = (e, t, n) =>
    e <= t || e >= n ? 0 : Math.sin((Math.PI * (e - t)) / (n - t)) ** 2;
function $d(e, t, n, r, i = [0, 0, 0]) {
  let a = z(t),
    o = (n * Math.PI) / 180,
    s = Math.cos(o),
    c = Math.sin(o),
    l = 1 - s,
    [u, d, f] = a;
  ((e[0] = l * u * u + s),
    (e[1] = l * u * d - c * f),
    (e[2] = l * u * f + c * d),
    (e[4] = l * u * d + c * f),
    (e[5] = l * d * d + s),
    (e[6] = l * d * f - c * u),
    (e[8] = l * u * f - c * d),
    (e[9] = l * d * f + c * u),
    (e[10] = l * f * f + s));
  for (let t = 0; t < 3; t++)
    e[t * 4 + 3] =
      r[t] -
      (e[t * 4] * r[0] + e[t * 4 + 1] * r[1] + e[t * 4 + 2] * r[2]) +
      i[t];
  return e;
}
var ef = new Map();
function tf(e) {
  let t = ef.get(e.id);
  if (t) return t;
  let n = e.hold,
    r = cu(n),
    i = au(r, n, e),
    a = [i[0], i[4], i[8]],
    o = [i[1], i[5], i[9]],
    s = [i[2], i[6], i[10]];
  return ((t = z([zc(r.n, a), zc(r.n, o), zc(r.n, s)])), ef.set(e.id, t), t);
}
function nf(e, t, n, r) {
  if (e === `slash1` || e === `slash2`) {
    let i = e === `slash1` ? 1 : -1,
      a = Qd(t, 0, 0.16),
      o = Qd(t, 0.08, 0.42);
    ((n.wrist[0] += -6 * a + r.snap * o),
      (n.wrist[2] += i * (r.roll * o - 8 * a)));
  } else if (e === `stab`) {
    let e = Zd(t, 0.12, 0.34) * (1 - Zd(t, 0.62, 1)),
      i = Qd(t, 0.36, 0.7);
    ((n.wrist[2] += r.twist * e + 10 * i),
      (n.wrist[0] += -4 * Qd(t, 0.05, 0.3)));
  }
}
function rf(e, t) {
  let n = ((globalThis.performance?.now() ?? 0) / 1e3) % 3600,
    r = t * (Yd() ? 0.4 : 1);
  ((e.wrist[0] += r * Math.sin(n * 1.3)),
    (e.wrist[1] += r * 0.6 * Math.sin(n * 0.65 + 0.8)));
}
var af = W(9345444),
  of = W(5974638),
  sf = W(4530522),
  cf = W(11823832),
  lf = W(8667824),
  uf = -2.25,
  df = 1.3,
  ff = 1.42,
  pf = 1.74,
  mf = {
    z0: 1.72,
    z1: 8.2,
    spine: (e) => (e < 0.68 ? 0.3 : 0.3 - 0.36 * ((e - 0.68) / 0.32) ** 0.9),
    edge: (e) =>
      e < 0.06
        ? -0.34 - 0.08 * B(0, 0.06, e)
        : e < 0.7
          ? -0.42
          : -0.42 + 0.36 * ((e - 0.7) / 0.3) ** 2,
    thick: (e) => 0.112 - 0.03 * e - 0.055 * B(0.75, 1, e),
    grind: -0.08,
    fuller: { s: [0.05, 0.48], c: [0.16, 0.5], depth: 0.45 },
    clip: 0.64,
    rows: 22,
  };
function hf(e, t, n, r, i, a) {
  return V([0, -0.04, e], Fd, Id, t, t, n, 2, a).map((e) => {
    let t = Math.atan2(e[1] + 0.04, e[0]) - a,
      n = 1 + i * Math.cos(r * t);
    return [e[0] * n, (e[1] + 0.04) * n - 0.04, e[2]];
  });
}
function gf(e) {
  let t = e.view === `fp`;
  (Ud(e, mf),
    Kd(
      e,
      [ff, 1.46, 1.7, pf],
      [0.32, 0.37, 0.37, 0.32],
      [0.62, 0.68, 0.68, 0.62],
      -0.06,
      af,
    ));
  for (let n of [-1, 1]) {
    let r = n * 0.6 - 0.06;
    e.tube(
      [
        [0, r, 3.16 / 2],
        [0, r + n * 0.2, 3.16 / 2],
        [0, r + n * 0.3, 3.16 / 2],
      ],
      (e) => [0.14, 0.15, 0.11][e],
      t ? 8 : 6,
      [1, 0, 0],
      () => af,
      { part: U.guard },
    );
  }
  (Kd(
    e,
    [1.28, 1.34, 1.41, 1.44],
    [0.31, 0.37, 0.37, 0.33],
    [0.42, 0.5, 0.5, 0.46],
    -0.04,
    vl,
    U.guard,
    2.4,
  ),
    Gd(e, {
      z0: uf,
      z1: df,
      rx: 0.33,
      ry: 0.44,
      cy: -0.04,
      ribs: 7,
      a: of,
      b: sf,
      wrap: !0,
    }));
  {
    let n = t ? 16 : 10,
      r = [
        hf(-2.21, 0.3, n, 8, 0, 0),
        hf(-2.35, 0.34, n, 8, 0.12, 0),
        hf(-2.55, 0.36, n, 8, 0.26, 0),
        hf(-2.69, 0.27, n, 8, 0.14, 0),
      ];
    e.surface(r, {
      paint: (e) => (e === 1 ? xl : Sl),
      part: U.guard,
      capStart: Sl,
      capEnd: null,
    });
    let i = [
      hf(-2.65, 0.26, n, 8, 0.12, Math.PI / 8),
      hf(-2.85, 0.36, n, 8, 0.4, Math.PI / 8),
      hf(-3.15, 0.4, n, 8, 0.62, Math.PI / 8),
      hf(-3.3899999999999997, 0.26, n, 8, 0.55, Math.PI / 8),
      hf(-3.51, 0.08, n, 8, 0.25, Math.PI / 8),
    ];
    e.surface(i, {
      paint: (e) => (e % 2 ? cf : lf),
      part: U.guard,
      capStart: null,
      capEnd: cf,
    });
  }
}
var _f = new Float32Array(12),
  vf = [0, 0, ff],
  yf = {
    id: `thistle`,
    cosmeticId: `knife-thistle`,
    name: `Thistle`,
    rarity: 4,
    blurb: `A slim bayonet with a thistle-head pommel, balanced to spin round your fingers.`,
    build: gf,
    pivots: {
      guard: { p: vf, axis: [1, 0, 0] },
      crook: { p: [0, -0.88, 1], axis: [1, 0, 0] },
    },
    tp: { o: [3.16, -1.24, 1.34], z: [0.53, 0.1, -0.84], y: [1, 0, 0], s: 1.6 },
    hold: qd([0, 0, 0.18]),
    pose(e, t, n) {
      if (e === `idle`) return rf(n, 1);
      if (e === `draw`) {
        let e = Yd();
        if (!e) {
          let e = tf(yf),
            r = Math.min(1, Math.max(0, (t - 0.16) / 0.26)),
            i = 2.7 * (Zd(t, 0.1, 0.19) - Zd(t, 0.42, 0.5));
          ((i > 0 || (r > 0 && r < 1)) &&
            (n.local = $d(_f, e, -360 * r, vf, [e[0] * i, e[1] * i, e[2] * i])),
            (n.loosen = Zd(t, 0.06, 0.13) * (1 - Zd(t, 0.44, 0.54))));
        }
        let r = e ? 0.4 : 1;
        ((n.arm.o[1] += r * 0.8 * Qd(t, 0.05, 0.62)),
          (n.arm.o[2] += r * 1.8 * Qd(t, 0.05, 0.62)),
          (n.wrist[0] += r * (-10 * Qd(t, 0, 0.3) + 6 * Qd(t, 0.46, 0.8))));
        return;
      }
      nf(e, t, n, { roll: 12, snap: 7, twist: 14 });
    },
  },
  bf = W(3883852),
  xf = W(1919568),
  Sf = W(2844784),
  Cf = W(11187903),
  wf = -2.42,
  Tf = 1.5,
  Ef = 1.86,
  Df = {
    z0: 1.84,
    z1: 9.25,
    spine: (e) => (e < 0.6 ? 0.42 : 0.42 - 0.6 * ((e - 0.6) / 0.4) ** 0.85),
    edge: (e) =>
      e < 0.08
        ? -0.5 - 0.24 * B(0, 0.08, e)
        : e < 0.64
          ? -0.74
          : -0.74 + 0.56 * ((e - 0.64) / 0.36) ** 2.1,
    thick: (e) => 0.135 - 0.04 * e - 0.065 * B(0.72, 1, e),
    grind: -0.2,
    fuller: { s: [0.07, 0.56], c: [0.1, 0.52], depth: 0.5 },
    clip: 0.6,
    rows: 24,
  };
function Of(e) {
  let t = e.view === `fp`,
    n = Ud(e, Df);
  (t
    ? Wd(e, Df, n, 0.1, 0.47, 8, 0.2, Cf)
    : Wd(e, Df, n, 0.1, 0.47, 5, 0.22, Cf),
    Kd(
      e,
      [Tf, 1.54, 1.82, Ef],
      [0.36, 0.42, 0.42, 0.36],
      [0.8, 0.86, 0.86, 0.8],
      -0.12,
      bf,
    ));
  {
    let n = [],
      r = t ? 6 : 4;
    for (let e = 0; e <= r; e++) {
      let t = e / r;
      n.push([0, -0.86 - 0.62 * t, 1.68 + 0.42 * t * t]);
    }
    e.tube(
      n,
      (e) => 0.17 - (e / r) * 0.035,
      t ? 8 : 6,
      [1, 0, 0],
      () => bf,
      { part: U.guard },
    );
  }
  {
    let n = t ? 18 : 10,
      r = 0.36,
      i = [0, 1.04, 3.3600000000000003 / 2],
      a = [];
    for (let e = 0; e < n; e++) {
      let t = (e / n) * Math.PI * 2;
      a.push([Math.cos(t) * r, i[1] + Math.sin(t) * r, i[2]]);
    }
    e.loop(a, 0.1, t ? 6 : 5, [0, 0, 1], () => vl, { part: U.guard });
  }
  (Gd(e, {
    z0: wf,
    z1: Tf,
    rx: 0.37,
    ry: 0.5,
    cy: -0.04,
    ribs: 7,
    a: xf,
    b: Sf,
  }),
    Kd(
      e,
      [-2.95, -2.86, -2.46, wf],
      [0.3, 0.44, 0.44, 0.4],
      [0.42, 0.6, 0.6, 0.55],
      -0.04,
      bf,
    ),
    t &&
      e.tube(
        [
          [0, 0.5, -2.66],
          [0, 0.7, -2.66],
        ],
        0.11,
        8,
        [0, 0, 1],
        () => vl,
        { part: U.guard },
      ));
}
var kf = {
    id: `thornback`,
    cosmeticId: `knife-thornback`,
    name: `Thornback`,
    rarity: 4,
    blurb: `A sawback bayonet with a muzzle ring and a row of thorn teeth on its spine.`,
    build: Of,
    pivots: {
      guard: { p: [0, 0, 1.68], axis: [1, 0, 0] },
      balance: { p: [0, 0, 3.2], axis: [1, 0, 0] },
    },
    tp: { o: [3.16, -1.24, 1.34], z: [0.53, 0.1, -0.84], y: [1, 0, 0], s: 1.6 },
    hold: qd([0, 0, 0.12]),
    pose(e, t, n) {
      if (e === `idle`) return rf(n, 1.1);
      if (e === `draw`) {
        let e = Yd();
        if (!e) {
          let e = 1 - (1 - Zd(t, 0.16, 0.48)) ** 2,
            r = 0.4 * Qd(t, 0.12, 0.54),
            i = tf(kf);
          (e > 0 &&
            e < 1 &&
            (n.local = $d(
              Af,
              [0, 0, 1],
              -360 * e,
              [0, 0, 0],
              [i[0] * r, i[1] * r, i[2] * r],
            )),
            (n.loosen = 0.75 * Qd(t, 0.12, 0.54)));
        }
        let r = e ? 0.4 : 1;
        ((n.arm.o[1] += r * 0.8 * Qd(t, 0.05, 0.6)),
          (n.arm.o[2] += r * 1.6 * Qd(t, 0.05, 0.6)),
          (n.wrist[0] += r * (-16 * Qd(t, 0, 0.34) + 7 * Qd(t, 0.4, 0.75))),
          (n.wrist[2] += r * 22 * Qd(t, 0, 0.42)));
        return;
      }
      nf(e, t, n, { roll: 16, snap: 9, twist: 18 });
    },
  },
  Af = new Float32Array(12),
  jf = [Fl, Pd, Du, ud, Qu, Vu, gd, kf, yf],
  Mf = new Map(
    jf.flatMap((e) => [
      [e.id, e],
      [e.cosmeticId, e],
    ]),
  );
function Nf(e) {
  return e ? Mf.get(e) : void 0;
}
var Pf = [0, 1, 86.9],
  Ff = 4.7,
  If = (e) => Math.PI / 4 + (e * Math.PI) / 2,
  Lf = [0, 0.9, 86.7],
  Rf = [0, 0.26, 0.966],
  zf = [0, 1, 87.9],
  Bf = [0, 0.55, 73],
  Vf = 16,
  Hf = 0.22,
  Uf = 3,
  Wf = 7,
  Gf = 0.38,
  Kf = 3.2,
  qf = 3.6,
  Jf = (e) => `vec3(${e.map((e) => e.toFixed(3)).join(`, `)})`,
  Yf = `
varying float vFx;
varying vec3 vFxP;
uniform float uFinTime;
const vec3 FX_ORBIT_C = ${Jf(Pf)};
const vec3 FX_HALO_C = ${Jf(Lf)};
const vec3 FX_CROWN_C = ${Jf(Bf)};
const vec3 FX_AURORA_C = ${Jf(zf)};
// vFx: 1 orbit, 2 halo, 3 halo inset, 4 circlet line (codes 12-15), 5 aurora ribbon (code 11), 0 none.
float fxCode() { return accent > 11.5 && accent < 15.5 ? floor(accent - 11.0 + 0.5) : accent > 10.5 && accent < 11.5 ? 5.0 : 0.0; }
vec2 fxRot(vec2 p, float a) { float c = cos(a), s = sin(a); return vec2(c * p.x - s * p.y, s * p.x + c * p.y); }
float fxBob() { return ${Gf.toFixed(3)} * sin(uFinTime * ${((Math.PI * 2) / Kf).toFixed(4)}); }
// Gem Orbit: which gem a bind-space point belongs to (by its angle round the ring), that gem's rest centre, its own
// spin (alternate gems turn the other way, at slightly different speeds), the ring's turn, and the pop of the gem whose
// turn it is (0..1, the first 0.12 s of its cycle).
float fxGem(vec3 p) { vec3 d = p - FX_ORBIT_C; return floor(mod(atan(d.y, d.x) / 1.5708 + 4.0, 4.0)); }
vec3 fxGemC(float i) { float a = 0.7854 + i * 1.5708; return FX_ORBIT_C + vec3(cos(a), sin(a), 0.0) * ${Ff.toFixed(3)}; }
float fxSelf(float i) { return (mod(i, 2.0) < 0.5 ? 1.0 : -1.0) * uFinTime * (1.1 + 0.2 * i) + i * 1.3; }
float fxRing() { return uFinTime * ${((Math.PI * 2) / Vf).toFixed(4)}; }
float fxPop(float i) {
  float ph = fract(uFinTime / ${Uf.toFixed(2)});
  return abs(mod(floor(uFinTime / ${Uf.toFixed(2)}), 4.0) - i) < 0.5 ? sin(3.14159 * clamp(ph / 0.04, 0.0, 1.0)) * step(ph, 0.04) : 0.0;
}`,
  Xf = `
  if (fxCode() == 1.0) objectNormal.xy = fxRot(objectNormal.xy, fxSelf(fxGem(position)) + fxRing());`,
  Zf = `
  vFx = fxCode();
  vFxP = vec3(0.0);
  if (vFx == 1.0) {
    float gi = fxGem(transformed);
    vec3 c = fxGemC(gi);
    vec3 d = transformed - c;
    vFxP = vec3(gi, d.z, 0.0);
    d.xy = fxRot(d.xy, fxSelf(gi));
    d *= 1.0 + 0.22 * fxPop(gi);
    vec3 q = c + d + vec3(0.0, 0.0, ${Hf.toFixed(3)} * sin(uFinTime * 2.4 + gi * 1.7)) - FX_ORBIT_C;
    q.xy = fxRot(q.xy, fxRing());
    transformed = FX_ORBIT_C + q;
  } else if (vFx == 2.0 || vFx == 3.0) {
    vFxP = transformed - FX_HALO_C;
    transformed.z += fxBob() * 0.8;
  } else if (vFx == 4.0) {
    vFxP = transformed - FX_CROWN_C;
  } else if (vFx == 5.0) {
    vFxP = transformed - FX_AURORA_C;
    transformed.z += fxBob() * 0.8;
  }`,
  Qf = `
varying float vFx;
varying vec3 vFxP;
#ifndef FINISH
uniform float uFinTime;
#endif
// A light running round a ring (local point p, ring in the xy plane): bright head, fading tail.
float fxComet(vec3 p, float lap) {
  float a = atan(p.y, p.x);
  float head = fract(uFinTime / lap) * 6.28318 - 3.14159;
  float d = mod(head - a, 6.28318);
  return exp(-d * 5.0) + 0.7 * exp(-(6.28318 - d) * 40.0);
}
// A light sweeping to and fro across the front of a band round the hood (p: from its centre, -y the front).
float fxScan(vec3 p) {
  float a = atan(p.x, -p.y);
  float s = 1.15 * sin(uFinTime * ${((Math.PI * 2) / qf).toFixed(4)});
  return exp(-(a - s) * (a - s) * 18.0);
}
// Gem Orbit: the shine that crosses gem gi top to bottom just after its pop (local height h), 0 the rest of the time.
float fxGlint(float gi, float h) {
  float ph = fract(uFinTime / ${Uf.toFixed(2)});
  if (abs(mod(floor(uFinTime / ${Uf.toFixed(2)}), 4.0) - gi) > 0.5 || ph > 0.2) return 0.0;
  float s = mix(1.4, -1.4, clamp((ph - 0.03) / 0.15, 0.0, 1.0));
  return exp(-(h - s) * (h - s) * 7.0);
}
vec3 fxCrystal(vec3 base, vec3 n, vec3 V, vec3 L, vec3 ambient, float key, float glow) {
  float ndv = max(dot(n, V), 0.0);
  vec3 lit = base * (ambient * 0.55 + key * vec3(0.55, 0.53, 0.5));
  // Inner glow: brighter where the facet faces away from the eye (light through the far side), breathing slowly.
  float breathe = 0.85 + 0.15 * sin(uFinTime * 1.9);
  vec3 inner = base * (0.38 + 0.32 * (1.0 - ndv)) * glow * breathe;
  float rim = pow(1.0 - ndv, 2.5);
  vec3 R = reflect(-V, n);
  float glint = pow(max(dot(R, L), 0.0), 28.0);
  return lit + inner + rim * mix(base, vec3(1.0), 0.55) * 0.8 + glint * vec3(1.0, 1.0, 1.0) * 0.9;
}`,
  $f = `
  if (vFx == 1.0) {
    // A Gem Orbit gem: flat 2-3 tone facets (the geometry's colours, little inner glow), a dark edge where a facet turns
    // away from the eye, and the shine.
    col = fxCrystal(vColor, n, V, L, ambient, key, 0.45);
    col = mix(col, vColor * 0.3, smoothstep(0.62, 0.9, 1.0 - max(dot(n, V), 0.0)) * 0.55);
    col += vec3(1.0) * fxGlint(vFxP.x, vFxP.y / 1.6) * 1.3;
  } else if (vFx > 0.5) {
    col = fxCrystal(vColor, n, V, L, ambient, key, 1.0);
    if (vFx == 2.0 || vFx == 3.0) col += mix(vColor, vec3(1.0), 0.6) * fxComet(vFxP, ${Wf.toFixed(2)}) * 1.3;
    if (vFx == 4.0) col = vColor * 1.25 + 0.06 + mix(vColor, vec3(1.0), 0.65) * fxScan(vFxP) * 1.4;
    if (vFx == 5.0) {
      // Self-lit, a brighter swell flowing round the ribbon.
      float a = atan(vFxP.y, vFxP.x);
      col = vColor * (1.05 + 0.45 * sin(a * 3.0 - uFinTime * 1.3)) + vColor * vColor * 0.2;
    }
  }`,
  ep = `
  if (vFx > 0.5) {
    float lit = vFx == 5.0 ? 0.8 : vFx == 1.0 ? fxGlint(vFxP.x, vFxP.y / 1.6) : vFx == 2.0 || vFx == 3.0 ? fxComet(vFxP, ${Wf.toFixed(2)}) : vFx == 4.0 ? 0.6 + fxScan(vFxP) : 0.0;
    col += mix(uGhost, vec3(1.0), 0.45) * (0.35 + lit);
    a = max(a, uOpacity * 0.55);
  }`,
  tp = `
vec2 fh22(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float fh21(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float gnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(dot(fh22(i), f), dot(fh22(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
             mix(dot(fh22(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)), dot(fh22(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
}
#ifdef FINISH_LOD
#define FBM_OCTAVES 3
#else
#define FBM_OCTAVES 5
#endif
float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < FBM_OCTAVES; i++) { s += a * gnoise(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p; a *= 0.5; }
  return s; // ~[-0.6, 0.6]
}
/** 3 octaves: low-frequency masks (glove grime, broad finish tints). */
float fbm3(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) { s += a * gnoise(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p; a *= 0.5; }
  return s;
}
`,
  np = `
#ifdef GLOVE
uniform vec3 uGlove[5];
varying float vGMat;
varying vec4 vGl;
varying vec3 vGP;
varying vec3 vGN;
#endif`,
  rp = `
#ifdef GLOVE
  vGMat = -1.0;
  if (accent > 15.5) {
    float g = floor(accent - 16.0 + 0.5);
    float slot = mod(g, 8.0);
    vGMat = floor(g / 8.0 + 0.01);
    vColor = slot > 4.5 ? uPalette[6] : uGlove[int(slot + 0.5)];
  }
  vGl = finishUV;
  vGP = position;
  vGN = normal;
#endif`,
  ip = `
#ifdef GLOVE
uniform vec3 uGlove[5];
varying float vGMat;
varying vec4 vGl;
varying vec3 vGP;
varying vec3 vGN;
vec2 gProj(vec3 p, vec3 n) {
  vec3 a = abs(n);
  return a.x > a.y && a.x > a.z ? p.yz : a.y > a.z ? p.xz : p.xy;
}
// Albedo of a glove fragment, plus its specular strength / power and sheen (rim) for gloveLight().
vec3 gloveAlbedo(vec3 alb, out float spec, out float pw, out float sheen) {
  float m = vGMat;
  vec2 q = gProj(vGP, normalize(vGN));
  float seam = vGl.x, along = vGl.y;
  float g = gnoise(q * 9.0);
  spec = 0.06; pw = 10.0; sheen = 0.0;
  if (m < 0.5) {
    // Neoprene / knit: fine ribs across the part.
    alb *= 0.95 + 0.05 * sin(along * 34.0) + 0.04 * g;
    spec = 0.12; pw = 14.0; sheen = 0.12;
  } else if (m < 2.5) {
    // Leather: two scales of grain, a soft sheen.
    float gr = gnoise(q * 15.0) * 0.6 + gnoise(q * 41.0) * 0.4;
    alb *= 0.92 + 0.14 * gr;
    spec = 0.32 + 0.1 * gr; pw = 26.0; sheen = 0.18;
    if (m > 1.5) {
      // Punched perforations on a staggered grid.
      vec2 c = q * 5.2;
      c.x += 0.5 * mod(floor(c.y), 2.0);
      float hole = smoothstep(0.2, 0.12, length(fract(c) - 0.5));
      alb *= 1.0 - 0.72 * hole;
      spec *= 1.0 - hole;
    }
  } else if (m < 3.5) {
    // Cloth wrap: overlapping turns (a shadowed edge every turn) and a fine weave.
    float turn = fract(along * 1.6 + 0.3 * (q.x + q.y));
    alb *= 0.68 + 0.32 * smoothstep(0.0, 0.14, turn) + 0.08 * (1.0 - smoothstep(0.86, 1.0, turn));
    alb *= 0.94 + 0.06 * sin(q.x * 95.0) * sin(q.y * 95.0) + 0.04 * g;
    spec = 0.04; pw = 8.0; sheen = 0.1;
  } else if (m < 4.5) {
    // Rubber / padding: matte pebble.
    alb *= 0.93 + 0.07 * gnoise(q * 24.0);
    spec = 0.16; pw = 12.0;
  } else if (m < 5.5) {
    // Fuzz: clumpy, lighter tufts, a soft rim.
    float f = gnoise(q * 15.0) * 0.55 + gnoise(q * 43.0) * 0.45;
    alb *= 0.86 + 0.3 * f;
    spec = 0.0; sheen = 0.55;
  } else if (m < 6.5) {
    // Hard plate: glossy clear coat.
    alb *= 0.97 + 0.03 * g;
    spec = 0.95; pw = 64.0; sheen = 0.22;
  } else if (m < 7.5) {
    // Canvas: coarse weave and garden dirt.
    alb *= 0.9 + 0.08 * sin(q.x * 70.0) * sin(q.y * 70.0) + 0.06 * g;
    float d = smoothstep(0.08, 0.42, fbm3(q * 1.1 + 7.0));
    alb = mix(alb, alb * vec3(0.7, 0.6, 0.48), d * 0.45);
    spec = 0.02; pw = 8.0;
  } else if (m < 8.5) {
    // Velcro: dense hook speckle.
    alb *= 0.72 + 0.38 * step(0.5, fh21(floor(q * 55.0)));
    spec = 0.03;
  } else {
    // Metal snap / rivet.
    alb *= 1.15;
    spec = 1.3; pw = 90.0; sheen = 0.4;
  }
  // Seams: a pressed groove with a dashed stitch line beside it (detail colour); not on fuzz or metal.
  if (seam < 0.3 && m < 8.5 && abs(m - 5.0) > 0.5) {
    alb *= 0.78 + 0.22 * smoothstep(0.0, 0.05, seam);
    float st = smoothstep(0.026, 0.01, abs(seam - 0.1)) * step(0.45, fract(dot(vGP, vec3(6.1, 6.3, 6.7))));
    alb = mix(alb, uGlove[4], st * 0.9);
  }
  // Worn edges: lighter, scuffed.
  float wn = smoothstep(0.4, 0.95, vGl.w * (0.75 + 0.7 * gnoise(q * 6.0)));
  alb = mix(alb, alb * 1.2 + 0.025, wn * 0.55);
  return alb;
}
// Specular + sheen on top of the toon shade (n front-facing, V to the eye, L key light).
vec3 gloveLight(vec3 alb, vec3 n, vec3 V, vec3 L, float key, float spec, float pw, float sheen) {
  vec3 H = normalize(L + V);
  float s = pow(max(dot(n, H), 0.0), pw) * spec * (0.35 + 0.65 * key);
  float rim = pow(1.0 - max(dot(n, V), 0.0), 2.0);
  return vec3(s) + sheen * rim * (alb * 0.6 + 0.08);
}
#endif`,
  ap = `
#ifdef GLOVE
  float gSpec = 0.0, gPow = 8.0, gSheen = 0.0;
  if (vGMat > -0.5) albedo = gloveAlbedo(albedo, gSpec, gPow, gSheen);
#endif`,
  op = `
#ifdef GLOVE
  if (vGMat > -0.5) col += gloveLight(albedo, n, V, L, key, gSpec, gPow, gSheen) * back;
#endif`,
  sp = {
    none: 0,
    sunset: 1,
    ember: 2,
    tigerlily: 3,
    nebula: 4,
    dewweb: 5,
    frost: 6,
    heartbeet: 7,
    fourleaf: 8,
    founder: 9,
    geode: 10,
    rift: 11,
    spectrum: 12,
    goldleaf: 13,
    aurora: 14,
  };
function cp(e) {
  return { kind: g(e.finish).kind };
}
var lp = Object.freeze({ finish: 0, glove: !1 }),
  up = (e, t) => ({
    finish: e ? sp[e.kind] : 0,
    glove: !!t && t.style !== `knit`,
  }),
  dp = (e, t) => e.finish === t.finish && e.glove === t.glove,
  fp =
    typeof matchMedia == `function` && matchMedia(`(pointer: coarse)`).matches;
function pp(e) {
  let t = {};
  return (
    e.finish > 0 && (t.FINISH = e.finish),
    e.glove && (t.GLOVE = 1),
    e.finish > 0 && (fp || mp) && (t.FINISH_LOD = 1),
    t
  );
}
var mp =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`still`) === `1`,
  hp = 2.15;
function gp(e) {
  mp = e;
}
var _p = {
  get value() {
    return mp ? hp : (performance.now() / 1e3) % 3600;
  },
  set value(e) {},
};
function vp() {
  return {
    uFinTime: _p,
    uGlove: { value: [new P(), new P(), new P(), new P(), new P()] },
  };
}
function yp(e, t) {}
function bp(e, t) {
  if (!t || t.style === `knit`) return;
  let n = [t.base, t.fingers, t.tips, t.strap, t.detail];
  e.uGlove.value.forEach((e, t) => e.setHex(n[t]));
}
function xp(e, t, n) {
  let r = n === void 0 ? (t ? cp(t) : null) : n,
    i = t ? h(t.glove) : null;
  return (bp(e, i), up(r && r.kind !== `none` ? r : null, i));
}
var Sp = `
#if defined(FINISH) || defined(GLOVE)
attribute vec4 finishUV;
#endif
#ifdef FINISH
varying vec4 vFin;
#endif
${np}`,
  Cp = `
#ifdef FINISH
  vFin = finishUV;
#endif
${rp}`,
  wp = `
#if defined(FINISH) || defined(GLOVE)
${tp}
#endif
${ip}
#ifdef FINISH
varying vec4 vFin;
uniform float uFinTime;
vec2 finRot(vec2 p, float a) { float c = cos(a), s = sin(a); return vec2(c * p.x - s * p.y, s * p.x + c * p.y); }
// The carrot blade's half width along it (viewmodel/knives carrot): turns across -1..1 back into pattern units.
float finRad(float u) { return 0.8 * pow(max(1.0 - u, 0.0), 0.85) + 0.04; }

// Every recipe: (u along 0..1, v across -1..1, P = pattern units: x 2.3 .. 11.2 along, y about -0.84 .. 0.84 across)
// -> linear albedo, plus how metallic it is and any sparkle. All placements are fixed constants.
vec3 finishAlbedo(float u, float v, vec2 P, out float metal, out float sparkle, out vec3 emit) {
  metal = 0.85; sparkle = 0.0; emit = vec3(0.0);
#if FINISH == 1
  // SUNSET: a warm sky from gold at the guard through coral and rose to violet and dusk blue at the tip, slightly
  // tilted, with soft pale cloud streaks drifting along the middle of the blade.
  float s = (u - 0.5) * 0.993 + v * 0.022 + 0.53 + 0.03 * gnoise(P * 1.5);
  vec3 c0 = vec3(0.99, 0.84, 0.30), c1 = vec3(0.99, 0.52, 0.32), c2 = vec3(0.94, 0.30, 0.50), c3 = vec3(0.58, 0.26, 0.78), c4 = vec3(0.24, 0.28, 0.72);
  vec3 c = mix(c0, c1, smoothstep(0.05, 0.32, s));
  c = mix(c, c2, smoothstep(0.30, 0.55, s));
  c = mix(c, c3, smoothstep(0.55, 0.80, s));
  c = mix(c, c4, smoothstep(0.82, 1.05, s));
  float cloud = smoothstep(0.05, 0.38, fbm(vec2(P.x * 0.32, P.y * 3.6) + vec2(3.1, 7.4))) * smoothstep(0.95, 0.35, abs(v));
  c = mix(c, vec3(1.0, 0.86, 0.80), cloud * 0.4 * smoothstep(0.1, 0.45, s) * smoothstep(1.0, 0.7, s));
  metal = 0.7;
  return c * c;
#elif FINISH == 2
  // EMBER GLAZE: a kiln-fired glaze. A broad heat field runs from charcoal through ember red and orange to gold, with a
  // fine dark crackle over it.
  vec2 q = finRot(P * 0.2, 0.6) + vec2(41.0, 17.0);
  float n = (fbm(q) + 0.35 * fbm(q * 3.1 + 11.0)) * 1.25 + 0.5;
  vec3 coal = vec3(0.05, 0.03, 0.03), red = vec3(0.42, 0.04, 0.02), orange = vec3(0.92, 0.30, 0.04), gold = vec3(1.0, 0.70, 0.22);
  vec3 c = mix(coal, red, smoothstep(0.22, 0.40, n));
  c = mix(c, orange, smoothstep(0.44, 0.58, n));
  c = mix(c, gold, smoothstep(0.64, 0.82, n));
  float cr = abs(gnoise(P * vec2(2.2, 3.4) + 5.0)) + 0.5 * abs(gnoise(P * vec2(4.6, 6.8) + 9.0));
  c = mix(c, coal, (1.0 - smoothstep(0.0, 0.03, cr)) * 0.75);
  metal = 0.7;
  return c;
#elif FINISH == 3
  // TIGER LILY: petal orange, paler toward the guard, faint veins along the blade and dark maroon freckles, thickest
  // near the guard like the throat of the flower.
  vec3 c = mix(vec3(1.0, 0.66, 0.24), vec3(0.98, 0.40, 0.07), smoothstep(0.0, 0.6, u));
  float vein = smoothstep(0.7, 1.0, sin(v * 13.0 + 1.6 * gnoise(P * vec2(0.6, 1.5) + 2.0)));
  c = mix(c, vec3(1.0, 0.85, 0.55), vein * 0.25);
  vec2 g = P * vec2(1.5, 3.2);
  vec2 gi = floor(g), gf = fract(g);
  float spot = 0.0;
  for (int j = -1; j <= 1; j++)
    for (int i = -1; i <= 1; i++) {
      vec2 cell = gi + vec2(float(i), float(j));
      float h = fh21(cell + 3.7);
      vec2 pt = vec2(float(i), float(j)) + 0.5 + 0.32 * fh22(cell + 1.9);
      float r = 0.13 + 0.1 * fh21(cell + 8.1);
      float d = length((gf - pt) * vec2(0.75, 1.0));
      spot = max(spot, step(mix(0.3, 0.85, u), h) * (1.0 - smoothstep(r * 0.7, r, d)));
    }
  c = mix(c, vec3(0.42, 0.06, 0.04), spot);
  metal = 0.75;
  return c * c;
#elif FINISH == 4
  // NEBULA: deep space with violet, blue and magenta gas clouds and a field of small stars that twinkle.
  vec2 q = finRot(P * vec2(0.45, 0.8), 0.4) + vec2(12.0, 30.0);
  vec2 w = vec2(fbm(q * 0.8), fbm(q * 0.8 + 5.2));
  float n = fbm(q + 2.0 * w);
  float n2 = fbm(q * 1.7 + 3.0 * w + 7.7);
  vec3 c = vec3(0.012, 0.006, 0.03);
  c = mix(c, vec3(0.26, 0.07, 0.50), smoothstep(-0.12, 0.32, n));
  c = mix(c, vec3(0.08, 0.20, 0.80), smoothstep(0.05, 0.42, n2) * 0.6);
  c = mix(c, vec3(0.90, 0.20, 0.58), smoothstep(0.22, 0.52, n) * 0.75);
  vec2 sg = P * 20.0;
  vec2 sf = fract(sg) - 0.5;
  float sh = fh21(floor(sg));
  float star = step(0.93, sh) * (1.0 - smoothstep(0.0, 0.16 + 0.14 * fract(sh * 37.0), length(sf)));
  c += vec3(1.0, 0.94, 0.88) * star * (0.65 + 0.35 * sin(uFinTime * 2.0 + sh * 50.0)) * 1.4;
#ifndef FINISH_LOD
  sparkle = step(0.985, sh) * star * max(0.0, sin(uFinTime * 1.7 + sh * 90.0)) * 1.2;
#endif
  metal = 0.55;
  return c;
#elif FINISH == 5
  // DEWDROP WEB: a dawn-blue blade (navy at the guard, dusk violet at the tip) under a fine silver spider web, with
  // dew beads glinting where the threads cross.
  vec3 c = mix(vec3(0.025, 0.04, 0.13), vec3(0.14, 0.13, 0.34), smoothstep(0.0, 1.0, u));
  c *= 0.85 + 0.3 * fbm3(P * 0.9 + 4.0);
  vec2 d = vec2(u, v * 0.35) - vec2(0.56, 0.04);
  float r = length(d) * 13.0, a = atan(d.y, d.x) + 0.35;
  float spokes = abs(sin(a * 4.0)) * (0.3 + r);
  float rings = abs(fract(r * (1.0 + 0.1 * abs(sin(a * 4.0)))) - 0.5);
  float thread = (1.0 - smoothstep(0.03, 0.11, spokes)) + (1.0 - smoothstep(0.012, 0.05, rings));
  c = mix(c, vec3(0.72, 0.78, 0.88), clamp(thread, 0.0, 1.0) * 0.85);
  float cell = fh21(vec2(floor(a * 4.0 / 3.14159 + 0.5), floor(r)));
  float dew = (1.0 - smoothstep(0.07, 0.15, length(vec2(spokes, rings * 1.3)))) * step(0.3, cell);
  c = mix(c, vec3(0.92, 0.97, 1.05), dew);
#ifndef FINISH_LOD
  sparkle = dew * max(0.0, sin(uFinTime * 2.2 + cell * 40.0)) * 0.9;
#endif
  metal = 0.6;
  return c;
#elif FINISH == 6
  // FROST: frosted ice. Pale glacier blue with deeper blue hollows, white frost ferns feathering across it, and a
  // fine sparkle.
  vec3 c = mix(vec3(0.18, 0.42, 0.72), vec3(0.62, 0.80, 0.95), smoothstep(-0.35, 0.35, fbm(P * 0.55 + vec2(8.0, 2.0))));
  vec2 q = P * 1.5 + vec2(4.0, 9.0);
  q += vec2(fbm(q * 0.5), fbm(q * 0.5 + 3.3)) * 1.6;
  float fern = 0.0, amp = 0.65;
  for (int i = 0; i < 4; i++) {
    fern += amp * pow(1.0 - min(1.0, abs(gnoise(q) * 2.2)), 7.0);
    q = mat2(1.7, 1.1, -1.1, 1.7) * q;
    amp *= 0.6;
  }
  c = mix(c, vec3(0.96, 0.98, 1.0), clamp(fern, 0.0, 1.0) * 0.85);
#ifndef FINISH_LOD
  float g = fh21(floor(P * 80.0));
  sparkle = step(0.992, g) * max(0.0, sin(uFinTime * 2.8 + g * 40.0)) * 1.3;
#endif
  metal = 0.8;
  return c;
#elif FINISH == 7
  // HEARTBEET: a sliced beetroot. Glossy crimson with darker and pinker rings around a heart in the middle of the
  // blade, a little uneven, like the real thing.
  vec2 d = (P - vec2(6.4, 0.05)) * vec2(0.5, 1.0);
  float r = length(d) + 0.13 * fbm(P * 1.2 + 2.0);
  float ring = 0.5 + 0.5 * sin(r * 12.0);
  vec3 c = mix(vec3(0.20, 0.0, 0.05), vec3(0.62, 0.02, 0.16), smoothstep(0.1, 0.6, ring));
  c = mix(c, vec3(0.95, 0.36, 0.60), smoothstep(0.78, 0.98, ring) * (0.4 + 0.6 * smoothstep(3.0, 0.3, r)));
  c *= 0.88 + 0.24 * gnoise(P * 6.0 + 3.0);
  metal = 0.8;
  return c;
#elif FINISH == 8
  // FOUR-LEAF: an emerald meadow with little four-leaf clovers scattered over it; about one in eight is gold.
  vec3 c = mix(vec3(0.01, 0.16, 0.06), vec3(0.05, 0.48, 0.18), smoothstep(-0.3, 0.4, fbm(P * 0.7 + vec2(21.0, 5.0))));
  vec2 g = P * vec2(1.25, 1.5);
  vec2 gi = floor(g);
  float h = fh21(gi + 7.0);
  float leaf = 0.0, vein = 0.0;
  if (h > 0.35) {
    vec2 p = fract(g) - 0.5 - 0.1 * fh22(gi + 2.0);
    p = finRot(p, h * 40.0) / (0.3 + 0.08 * fract(h * 13.0));
    float dm = 1e3;
    for (int k = 0; k < 4; k++) {
      float an = float(k) * 1.5708 + 0.7854;
      vec2 dir = vec2(cos(an), sin(an)), side = vec2(-dir.y, dir.x);
      // Each leaf: two lobes (a heart pointing at the middle).
      dm = min(dm, length(p - dir * 0.5 - side * 0.17) - 0.27);
      dm = min(dm, length(p - dir * 0.5 + side * 0.17) - 0.27);
      dm = min(dm, length(p - dir * 0.2) - 0.18);
    }
    vec2 sp = p - vec2(0.1, -0.7);
    dm = min(dm, max(abs(sp.x + sp.y * 0.3) - 0.05, abs(sp.y) - 0.38));
    leaf = 1.0 - smoothstep(-0.03, 0.05, dm);
    // Pale veins: the leaf diagonals.
    vein = leaf * (1.0 - smoothstep(0.02, 0.06, min(abs(p.x - p.y), abs(p.x + p.y)) / 1.41)) * step(length(p), 0.8);
  }
  float lucky = step(0.93, h);
  c = mix(c, mix(vec3(0.24, 0.72, 0.30), vec3(1.0, 0.72, 0.18), lucky), leaf);
  c = mix(c, mix(vec3(0.62, 0.95, 0.60), vec3(1.0, 0.92, 0.6), lucky), vein * 0.5);
#ifndef FINISH_LOD
  sparkle = leaf * lucky * max(0.0, sin(uFinTime * 2.4 + h * 60.0)) * 0.9;
#endif
  metal = mix(0.7, 0.95, leaf * lucky);
  return c;
#elif FINISH == 9
  // FOUNDER'S GOLD (the owner's): polished gold over slow molten ripples (carrot-orange in the troughs, pale gold on
  // the crests), a bright shimmer band sweeping guard -> tip every ~3.5 s, and fine glitter.
  vec2 q = finRot(P * vec2(0.5, 0.9), 1.1) + vec2(17.0, 41.0);
  float n = fbm(q * 0.8 + vec2(uFinTime * 0.06, -uFinTime * 0.02));
  vec3 deep = vec3(0.50, 0.15, 0.01), gold = vec3(0.95, 0.58, 0.10), pale = vec3(1.0, 0.86, 0.45);
  vec3 c = mix(deep, gold, smoothstep(-0.42, 0.05, n));
  c = mix(c, pale, smoothstep(0.22, 0.6, n) * 0.45);
  float band = fract(uFinTime / 3.5) * 1.9 - 0.45;
  float d = u + v * 0.22 - band;
  float sh = exp(-d * d * 140.0);
  c = mix(c, pale * 1.3, sh * 0.7);
#ifndef FINISH_LOD
  float g = fh21(floor(P * 72.0));
  sparkle = step(0.988, g) * max(0.0, sin(uFinTime * 3.2 + g * 40.0)) * 1.4 + sh * 0.35;
#else
  sparkle = sh * 0.35;
#endif
  metal = 0.97;
  return c;
#elif FINISH == 10
  // GEODE (the Supporter's): a split geode. A dark stone rim at the edges with two agate bands inside it (their widths
  // wander along the blade); the middle is a bed of big crystal facets, each a little pyramid in three close flat tones
  // of muted teal through violet toward the tip, a few pale. Every 4.5 s one shine crosses the blade guard -> tip in
  // ~0.8 s and lights the facets it passes, then nothing (a long hold, one quick glint); the crystal glows faintly.
  float edge = abs(v);
  vec2 g = P * vec2(0.8, 1.55);
  vec2 gi = floor(g), gf = fract(g);
  float d1 = 9.0, d2 = 9.0;
  vec2 c1 = vec2(0.0), o1 = vec2(0.0);
  for (int j = -1; j <= 1; j++)
    for (int i = -1; i <= 1; i++) {
      vec2 cell = gi + vec2(float(i), float(j));
      vec2 o = vec2(float(i), float(j)) + 0.5 + 0.32 * fh22(cell + 4.1);
      float d = length((gf - o) * vec2(1.0, 0.85));
      if (d < d1) { d2 = d1; d1 = d; c1 = cell; o1 = o; } else if (d < d2) d2 = d;
    }
  float h = fh21(c1 + 2.3);
  // Facet tone: the side of the little pyramid the point is on, lit from the upper left; 3 close flat values.
  vec2 dir = normalize(gf - o1 + 1e-4);
  float side = dot(dir, normalize(vec2(-0.6, 0.8)));
  float tone = side > 0.3 ? 1.0 : side > -0.3 ? 0.8 : 0.62;
  vec3 teal = vec3(0.02, 0.42, 0.42), viol = vec3(0.20, 0.10, 0.62), pale = vec3(0.55, 0.92, 0.86);
  vec3 cc = mix(teal, viol, clamp(u * 1.05 + (h - 0.5) * 0.45, 0.0, 1.0));
  cc = mix(cc, pale * 0.87, step(0.93, h) * 0.6);
  vec3 c = cc * tone;
  float seam = 1.0 - smoothstep(0.01, 0.035, d2 - d1);
  c = mix(c, cc * 0.35, seam * 0.8);
  // The shine: crosses the blade in ~0.8 s every 4.5 s, lighting whole facets (by their centres).
  float cyc = 4.5;
  float sw = fract(uFinTime / cyc) * cyc / 0.8 * 1.4 - 0.2;
  float cu = (c1.x + o1.x) / 0.8;
  float fu = (cu - 2.3) / 8.9 + (c1.y + o1.y) / 1.55 * 0.12;
  float lit = exp(-(fu - sw) * (fu - sw) * 90.0);
  c = mix(c, mix(cc, pale, 0.6) * 1.15, lit * (0.25 + 0.35 * tone));
  emit = cc * 0.1 * (0.85 + 0.15 * sin(uFinTime * 1.7 + h * 6.0)) + pale * lit * 0.22 * tone;
  // Stone rim and two agate bands, uneven: their widths wander along the blade.
  float e = edge + 0.025 * gnoise(vec2(P.x * 0.9, 1.7));
  // Each band's width wanders about ±35% along the blade.
  float w1 = 0.04 * (1.0 + 0.7 * gnoise(vec2(P.x * 0.7, 4.1)));
  float w2 = 0.03 * (1.0 + 0.7 * gnoise(vec2(P.x * 0.8, 9.3)));
  float band1 = smoothstep(0.73 - w1, 0.74 - w1, e) * (1.0 - smoothstep(0.77, 0.78, e));
  float band2 = smoothstep(0.81 - w2, 0.82 - w2, e) * (1.0 - smoothstep(0.85, 0.86, e));
  c = mix(c, vec3(0.50, 0.48, 0.66), band1 * 0.8);
  c = mix(c, vec3(0.22, 0.16, 0.42), band2 * 0.8);
  float shell = smoothstep(0.895, 0.915, e);
  vec3 stone = vec3(0.05, 0.045, 0.055) * (0.75 + 0.5 * fbm3(P * 6.0 + 3.0));
  c = mix(c, stone, shell);
  emit *= 1.0 - max(max(band1, band2), shell);
  sparkle = lit * 0.45 * tone;
  metal = mix(0.15, 0.3, shell);
  return c;
#elif FINISH == 11
  // RIFT (the Supporter's): a dark plum blade cracked through by a few angular fractures of lavender light (straight
  // runs that break off and start again), with a rare aqua spark where cracks meet. Every 3.8 s a pulse runs up the
  // cracks guard -> tip in ~1.2 s, then they settle to a low glow.
  float t = uFinTime;
  vec3 c = mix(vec3(0.035, 0.012, 0.045), vec3(0.085, 0.03, 0.10), smoothstep(-0.4, 0.5, fbm3(P * vec2(0.5, 1.2) + 7.0)));
  vec2 g = finRot(P, 0.5) * vec2(0.75, 1.5);
  vec2 gi = floor(g), gf = fract(g);
  float d1 = 9.0, d2 = 9.0;
  vec2 c1 = vec2(0.0), c2 = vec2(0.0);
  for (int j = -1; j <= 1; j++)
    for (int i = -1; i <= 1; i++) {
      vec2 cell = gi + vec2(float(i), float(j));
      vec2 o = vec2(float(i), float(j)) + 0.5 + 0.42 * fh22(cell + 1.3);
      float d = length(gf - o);
      if (d < d1) { d2 = d1; c2 = c1; d1 = d; c1 = cell; } else if (d < d2) { d2 = d; c2 = cell; }
    }
  // Only some cell borders are cracks, and those break along their length.
  float pairH = fh21(c1 + c2 + 0.37 * (c1 * c2) + 5.0);
  float on = step(0.45, pairH) * step(0.28, fract(dot(gf, vec2(2.3, 1.1)) * 1.6 + pairH * 7.0));
  float dEdge = d2 - d1;
  float crack = (1.0 - smoothstep(0.024, 0.052, dEdge)) * on;
  float core = (1.0 - smoothstep(0.004, 0.014, dEdge)) * on;
  float glowW = exp(-dEdge * 24.0) * on;
  // A junction: close to a third cell too (the cell corner), rarely.
  float junction = (1.0 - smoothstep(0.0, 0.07, dEdge + abs(d1 - 0.5 * (d1 + d2)))) * step(0.82, fh21(c1 + 9.0));
  float pulse = fract(t / 3.8) * 3.8 / 1.2 * 1.5 - 0.25;
  float pu = exp(-(u - pulse) * (u - pulse) * 40.0);
  float level = 0.85 + 0.9 * pu;
  vec3 lav = vec3(0.62, 0.48, 1.0), hot = vec3(0.92, 0.88, 1.0);
  emit = (lav * crack * 0.85 + lav * glowW * 0.35 + hot * core * (0.35 + 0.6 * pu)) * level;
  emit += vec3(0.3, 1.0, 0.9) * junction * on * (0.6 + 0.8 * pu);
  c = mix(c, lav * 0.2, glowW * 0.25);
  sparkle = crack * pu * 0.3;
  metal = 0.12;
  return c;
#elif FINISH == 12
  // SPECTRUM (the Supporter's): a black blade printed with a halftone grid of little hexagons (each a little different
  // in size and place, a few missing); one or two broad bands of colour (aqua, azure, amethyst) drift guard -> tip
  // through it over ~6 s, the hexagons swelling slightly where a band is bright.
  float t = uFinTime;
  vec2 Pg = P;
  // Hex grid (pattern units), rotated a little; hexagonal dots (hex distance).
  vec2 hp = finRot(Pg, 0.35) * 2.4;
  vec2 r = vec2(1.0, 1.7320508);
  vec2 ha = mod(hp, r) - r * 0.5, hb = mod(hp - r * 0.5, r) - r * 0.5;
  bool inA = dot(ha, ha) < dot(hb, hb);
  vec2 hc = inA ? ha : hb;
  // Each dot is its own: a stable size (±12%), a nudge (±8%), and about one in eight left out.
  vec2 hid = floor(inA ? hp / r : (hp - r * 0.5) / r) + (inA ? vec2(0.0) : vec2(0.5));
  float hh = fh21(hid + 3.1);
  hc -= 0.08 * fh22(hid + 7.7);
  vec2 ah = abs(hc);
  float hd = max(ah.x * 0.866 + ah.y * 0.5, ah.y);
  // The drifting colour field: ~1.3 colour cycles across the blade, one cycle passing every ~6 s.
  float f = (Pg.x - 2.3) / 8.9 * 1.3 - t / 6.0 + 0.04 * Pg.y;
  vec3 c0 = vec3(0.05, 0.85, 0.75), c1 = vec3(0.08, 0.38, 1.0), c2 = vec3(0.48, 0.16, 0.95);
  float x = fract(f) * 3.0;
  vec3 col = x < 1.0 ? mix(c0, c1, smoothstep(0.0, 1.0, x)) : x < 2.0 ? mix(c1, c2, smoothstep(1.0, 2.0, x)) : mix(c2, c0, smoothstep(2.0, 3.0, x));
  float bright = 0.5 + 0.5 * sin(fract(f) * 6.28318);
  float rad = 0.30 * (0.88 + 0.24 * hh) * (1.0 + 0.06 * bright);
  float dotM = (1.0 - smoothstep(rad - 0.035, rad, hd)) * step(0.12, fract(hh * 13.7));
  vec3 c = vec3(0.01, 0.01, 0.016);
  emit = col * dotM * (0.4 + 0.3 * bright);
  c = mix(c, col * 0.25, dotM);
  sparkle = 0.0;
  metal = 0.3;
  return c;
#elif FINISH == 13
  // GOLD LEAF (the Supporter's High Roller): torn sheets of gold leaf laid on black lacquer, fine cracks through the
  // leaf, a soft sheen crossing guard -> tip every 5 s and a few glints on the gold.
  float t = uFinTime;
  float leafN = fbm(P * vec2(0.55, 1.3) + vec2(9.0, 4.0)) + 0.25 * gnoise(P * 3.2 + 1.7);
  float leaf = smoothstep(-0.02, 0.03, leafN);
  vec3 lacquer = vec3(0.012, 0.010, 0.012) + vec3(0.02, 0.012, 0.004) * smoothstep(0.0, 0.25, leafN + 0.1);
  vec3 gold = mix(vec3(0.62, 0.34, 0.05), vec3(1.0, 0.74, 0.26), smoothstep(-0.2, 0.4, gnoise(P * 1.8 + 6.0)));
  float crack = 1.0 - smoothstep(0.0, 0.035, abs(gnoise(P * vec2(2.6, 4.2) + 11.0)));
  gold = mix(gold, gold * 0.35, crack * 0.8);
  // The leaf's torn edge catches a little light.
  float rim = smoothstep(-0.02, 0.0, leafN) * (1.0 - smoothstep(0.0, 0.03, leafN));
  vec3 c = mix(lacquer, gold, leaf);
  c = mix(c, vec3(1.0, 0.86, 0.5), rim * 0.6);
  float band = fract(t / 5.0) * 1.8 - 0.4;
  float d = u + v * 0.18 - band;
  float sh = exp(-d * d * 120.0) * leaf;
  c = mix(c, vec3(1.0, 0.9, 0.62), sh * 0.6);
  emit = vec3(1.0, 0.78, 0.35) * sh * 0.25;
#ifndef FINISH_LOD
  float g = fh21(floor(P * 60.0));
  sparkle = step(0.985, g) * leaf * max(0.0, sin(t * 3.0 + g * 50.0)) * 1.3 + sh * 0.3;
#else
  sparkle = sh * 0.3;
#endif
  metal = mix(0.25, 0.97, leaf);
  return c;
#elif FINISH == 14
  // AURORA (the Supporter's Borealis): a night-blue blade under curtains of aurora light that ripple along it, green at
  // the cutting edge's side rising into violet, fine vertical rays through them, and a few faint stars behind.
  float t = uFinTime;
  vec3 c = mix(vec3(0.004, 0.008, 0.03), vec3(0.01, 0.02, 0.06), smoothstep(-0.8, 0.8, v));
  float sway = fbm3(vec2(P.x * 0.35 + t * 0.06, 2.0)) * 3.0;
  float curtain = 0.5 + 0.5 * sin(P.x * 1.6 + sway + t * 0.5);
  curtain = smoothstep(0.35, 1.0, curtain);
  float rays = 0.65 + 0.35 * sin(P.x * 34.0 + gnoise(vec2(P.x * 3.0, t * 0.3)) * 3.0);
  // Height in the curtain: bright low (v near -1), fading upward; the lower edge ripples.
  float base = -0.75 + 0.18 * sin(P.x * 2.3 + t * 0.7);
  float hgt = clamp((v - base) / 1.5, 0.0, 1.0);
  float body = smoothstep(0.0, 0.08, v - base) * (1.0 - hgt) * (1.0 - hgt * 0.4);
  vec3 col = mix(vec3(0.15, 1.0, 0.55), vec3(0.55, 0.25, 1.0), smoothstep(0.15, 0.85, hgt));
  float a = curtain * rays * body;
  emit = col * a * 0.95;
  c += col * a * 0.12;
#ifndef FINISH_LOD
  vec2 sg = P * 16.0;
  float shh = fh21(floor(sg));
  float star = step(0.96, shh) * (1.0 - smoothstep(0.0, 0.16, length(fract(sg) - 0.5)));
  emit += vec3(0.85, 0.9, 1.0) * star * (0.35 + 0.25 * sin(t * 1.7 + shh * 40.0)) * (1.0 - a);
#endif
  metal = 0.35;
  return c;
#else
  return vColor;
#endif
}

// The finished blade's shaded colour (n: front-facing normal, V: to the eye, L: key light, ambient, key).
vec3 finishShade(vec3 n, vec3 V, vec3 L, vec3 ambient, float key) {
  float u = clamp(vFin.x, 0.0, 1.0), v = clamp(vFin.y, -1.0, 1.0);
  vec2 P = vec2(2.3 + u * 8.9, v * finRad(u));
  float metal, sparkle;
  vec3 emit;
  vec3 alb = finishAlbedo(u, v, P, metal, sparkle, emit);
  // Keep the carrot's growth rings as faint grooves under the paint.
  alb *= mix(0.86, 1.0, step(0.15, vColor.g));
  // The player material's toon key + ambient, plus a stylised metal reflection (sky / ground, sharp highlight).
  vec3 R = reflect(-V, n);
  float envT = smoothstep(-0.25, 0.75, R.y);
  vec3 env = mix(vec3(0.12, 0.11, 0.13), vec3(1.05, 1.08, 1.15), envT);
  float spec = pow(max(dot(R, L), 0.0), 48.0);
  vec3 diffuse = alb * (ambient + key * vec3(0.78, 0.74, 0.68));
  vec3 metallic = alb * (env * 0.75 + key * 0.45);
  vec3 col = mix(diffuse, metallic, metal);
  col += spec * mix(vec3(1.0), alb * 2.0, 0.3) * (0.35 + 0.65 * metal);
  col += sparkle * vec3(1.0) * (0.4 + 0.6 * pow(max(dot(n, V), 0.0), 2.0));
  float rim = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  col += rim * 0.18 * mix(vec3(1.0), alb, 0.5);
  // Self-lit parts (the Supporter finishes' veins, dots and glints): not shaded, so they glow in any light.
  col += emit;
  return col;
}
#endif`,
  Tp = `abs(vFin.z - 1.0) < 0.5`;
function Ep() {
  return {
    uAccent: { value: new P(16757818) },
    uGhost: { value: new P(16762178) },
    uGhostRim: { value: new P(16762178) },
    uOpacity: { value: 0.6 },
    uAxisA: { value: new M() },
    uAxisB: { value: new M(0, 64, 0) },
    uNearFade: { value: new j(14, 60) },
    uPalette: { value: Array.from({ length: 8 }, () => new P(16777215)) },
    ...vp(),
  };
}
var Dp = `
attribute vec3 partColor;
attribute float accent;
uniform vec3 uAccent;
uniform vec3 uPalette[8];
varying vec3 vColor;
varying float vGlow;
varying vec3 vNormalW;
varying vec3 vWorldPos;
${Sp}
${Yf}
#include <common>
#include <skinning_pars_vertex>
void main() {
  #include <beginnormal_vertex>
${Xf}
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <begin_vertex>
${Zf}
  #include <skinning_vertex>
  #include <project_vertex>
  vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vNormalW = normalize(mat3(modelMatrix) * objectNormal);
  // accent: 0 = partColor, 1 = style accent, 2 = accent + glow, 3 + k = palette slot k (k < 8), 12..15 hat crystal
  // (player/hat-fx.ts), >= 16 a glove style's face
  // (viewmodel/gloves/paint.ts; VERTEX_MAIN recolours it under GLOVE, else it reads as the colourway's glove slot).
  vColor = accent > 15.5 ? uPalette[6] : accent > 10.5 ? partColor : accent > 2.5 ? uPalette[int(accent - 2.5)] : accent > 0.5 ? uAccent : partColor;
  vGlow = accent > 1.5 && accent < 2.5 ? 1.0 : 0.0;
${Cp}
}`,
  Op = `
uniform vec3 uAxisA, uAxisB;
uniform vec2 uNearFade;
float nearFade() {
  if (uNearFade.y <= uNearFade.x) return 1.0;
  vec3 ab = uAxisB - uAxisA;
  float h = clamp(dot(cameraPosition - uAxisA, ab) / max(dot(ab, ab), 1e-3), 0.0, 1.0);
  float d = length(cameraPosition - (uAxisA + ab * h));
  return smoothstep(uNearFade.x, uNearFade.y, d);
}
float bayer4(vec2 p) {
  ivec2 i = ivec2(mod(p, 4.0));
  int idx = i.x + i.y * 4;
  float m[16] = float[16](0., 8., 2., 10., 12., 4., 14., 6., 3., 11., 1., 9., 15., 7., 13., 5.);
  return (m[idx] + 0.5) / 16.0;
}`,
  kp = `
uniform vec3 uAccent;
varying vec3 vColor;
varying float vGlow;
varying vec3 vNormalW;
varying vec3 vWorldPos;
${wp}
${Qf}
void main() {
  vec3 n = normalize(vNormalW);
  float back = gl_FrontFacing ? 1.0 : 0.0;
  if (!gl_FrontFacing) n = -n;
  vec3 V = normalize(cameraPosition - vWorldPos);
  vec3 L = normalize(vec3(0.42, 0.78, 0.46));
  float ndl = dot(n, L);
  float key = smoothstep(-0.05, 0.55, ndl);
  vec3 sky = vec3(0.70, 0.76, 0.88), ground = vec3(0.30, 0.27, 0.26);
  vec3 ambient = mix(ground, sky, n.y * 0.5 + 0.5) * 0.62;
  vec3 albedo = vColor;
${ap}
  vec3 col = albedo * (ambient + key * vec3(0.78, 0.74, 0.68));
  float rim = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  col += rim * 0.22 * mix(vec3(1.0), uAccent, 0.35);
${op}
  col = mix(col * 0.38, col, back); // inside of the hood
  col = mix(col, vColor * 1.6 + 0.15, vGlow);
${$f}
#ifdef FINISH
  if (${Tp}) col = finishShade(n, V, L, ambient, key);
#endif
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,
  Ap = `
uniform vec3 uGhost, uGhostRim;
uniform float uOpacity;
varying vec3 vColor;
varying float vGlow;
varying vec3 vNormalW;
varying vec3 vWorldPos;
${Qf}
${Op}
void main() {
  vec3 n = normalize(vNormalW);
  if (!gl_FrontFacing) n = -n;
  vec3 V = normalize(cameraPosition - vWorldPos);
  float fres = pow(1.0 - clamp(abs(dot(n, V)), 0.0, 1.0), 2.2);
  float lum = dot(vColor, vec3(0.2126, 0.7152, 0.0722));
  float up = n.y * 0.5 + 0.5;
  vec3 col = uGhost * (0.3 + 0.7 * sqrt(lum)) * (0.7 + 0.45 * up);
  // Rim glow: the tint, or a second colour pushed a little further from the tint so it reads at the silhouette
  // (identical to the plain tint rim when uGhostRim == uGhost).
  vec3 rimC = uGhostRim + (uGhostRim - uGhost) * 0.6;
  col = max(col + rimC * fres * 1.6, 0.0) + vec3(1.0) * fres * fres * 0.35;
  col += mix(uGhost, vec3(1.0), 0.45) * vGlow * 1.1;
  float a = uOpacity * (0.38 + 0.62 * fres) + vGlow * 0.35 * uOpacity;
${ep}
  a = clamp(a * nearFade(), 0.0, 1.0);
#ifdef DITHER
  if (a < bayer4(gl_FragCoord.xy) * 0.999 + 0.0005) discard;
  gl_FragColor = vec4(col, 1.0);
#else
  if (a < 0.004) discard;
  gl_FragColor = vec4(col, a);
#endif
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,
  jp = `
varying vec3 vNormalW;
varying vec3 vWorldPos;
void main() {
  vec3 n = normalize(vNormalW);
  if (!gl_FrontFacing) n = -n;
  vec3 V = normalize(cameraPosition - vWorldPos);
  // (Linear values: the output is sRGB-encoded, so these read as near-black with a thin cool edge.)
  float rim = pow(1.0 - clamp(abs(dot(n, V)), 0.0, 1.0), 3.5);
  // A whisper of top light so overlapping shapes (hair over the visor, wings) separate.
  float top = smoothstep(0.3, 1.0, n.y) * 0.004;
  vec3 col = vec3(0.0035, 0.004, 0.005) + vec3(top) + rim * vec3(0.11, 0.125, 0.15);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,
  Mp = `
uniform float uOpacity;
${Op}
void main() {
  if (uOpacity * nearFade() < 0.02) discard;
  gl_FragColor = vec4(0.0);
}`;
function Np(e, t = lp) {
  let n = new Rs({
    uniforms: e,
    vertexShader: Dp,
    fragmentShader: kp,
    side: 2,
    defines: pp(t),
  });
  return ((n.defaultAttributeValues.finishUV = [0, 0, 0, 0]), n);
}
function Pp(e, t) {
  return new Rs({
    uniforms: e,
    vertexShader: Dp,
    fragmentShader: Ap,
    side: 2,
    transparent: !t,
    depthWrite: t,
    depthFunc: 3,
    defines: t ? { DITHER: 1 } : {},
  });
}
function Fp(e) {
  let t = new Rs({
    uniforms: e,
    vertexShader: Dp,
    fragmentShader: jp,
    side: 2,
  });
  return ((t.defaultAttributeValues.finishUV = [0, 0, 0, 0]), t);
}
function Ip(e) {
  return new Rs({
    uniforms: e,
    vertexShader: Dp,
    fragmentShader: Mp,
    side: 2,
    transparent: !0,
    colorWrite: !1,
    depthWrite: !0,
  });
}
var Lp = [
    `root`,
    `hips`,
    `spine`,
    `chest`,
    `neck`,
    `head`,
    `earL`,
    `earR`,
    `upperArmL`,
    `foreArmL`,
    `handL`,
    `upperArmR`,
    `foreArmR`,
    `handR`,
    `thighL`,
    `shinL`,
    `footL`,
    `thighR`,
    `shinR`,
    `footR`,
  ],
  Rp = Object.fromEntries(Lp.map((e, t) => [e, t])),
  zp = {
    root: [null, 0, 0, 0],
    hips: [`root`, 0, 32, 0],
    spine: [`hips`, 0, 38, 0],
    chest: [`spine`, 0, 45, 0],
    neck: [`chest`, 0, 54.5, 0],
    head: [`neck`, 0, 57, 0.3],
    earL: [`head`, 2.6, 66.3, -1.6],
    earR: [`head`, -2.6, 66.3, -1.6],
    upperArmL: [`chest`, 10.7, 52.5, 0],
    foreArmL: [`upperArmL`, 10.7, 44, 0],
    handL: [`foreArmL`, 10.7, 36.4, 0],
    upperArmR: [`chest`, -10.7, 52.5, 0],
    foreArmR: [`upperArmR`, -10.7, 44, 0],
    handR: [`foreArmR`, -10.7, 36.4, 0],
    thighL: [`hips`, 4.3, 32, 0],
    shinL: [`thighL`, 4.3, 17, 0],
    footL: [`shinL`, 4.3, 3, 0],
    thighR: [`hips`, -4.3, 32, 0],
    shinR: [`thighR`, -4.3, 17, 0],
    footR: [`shinR`, -4.3, 3, 0],
  },
  Bp = { thigh: 15, shin: 14, ankle: 3, hip: 32 };
function Vp() {
  let e = Lp.map((e) => {
    let t = new ca();
    return ((t.name = e), t);
  });
  for (let t of Lp) {
    let [n, r, i, a] = zp[t],
      o = e[Rp[t]];
    if (n) {
      let [, t, s, c] = zp[n];
      (o.position.set(r - t, i - s, a - c), e[Rp[n]].add(o));
    } else o.position.set(r, i, a);
  }
  return e;
}
var Hp = {
    hoodie: 15328215,
    hoodieShade: 13222064,
    face: 1711397,
    pants: 2830395,
    pantsShade: 2106413,
    shoe: 15988216,
    glove: 2764344,
    accent: 16757818,
  },
  Up = (e, t) => [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
  Wp = (e, t) => [e[0] + t[0], e[1] + t[1], e[2] + t[2]],
  Gp = (e, t) => [e[0] * t, e[1] * t, e[2] * t],
  Kp = (e, t) => [
    e[1] * t[2] - e[2] * t[1],
    e[2] * t[0] - e[0] * t[2],
    e[0] * t[1] - e[1] * t[0],
  ],
  qp = (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
  Jp = (e) => {
    let t = Math.hypot(e[0], e[1], e[2]) || 1;
    return [e[0] / t, e[1] / t, e[2] / t];
  },
  Yp = class {
    P = [];
    N = [];
    C = [];
    A = [];
    SI = [];
    SW = [];
    vert(e, t, n, r) {
      (this.P.push(...e),
        this.N.push(...t),
        this.C.push(n[0].r, n[0].g, n[0].b),
        this.A.push(n[1]),
        typeof r == `number`
          ? (this.SI.push(r, 0, 0, 0), this.SW.push(1, 0, 0, 0))
          : (this.SI.push(r[0], r[1], 0, 0),
            this.SW.push(r[2], 1 - r[2], 0, 0)));
    }
    tri(e, t, n, r, i, a, o, s) {
      let c = Kp(Up(t, e), Up(n, e));
      if (Math.hypot(c[0], c[1], c[2]) < 1e-6) return;
      let l = Jp(c),
        u = Gp(Wp(Wp(e, t), n), 1 / 3);
      (qp(l, Up(u, r)) < 0 && (([t, n, o, s] = [n, t, s, o]), (l = Gp(l, -1))),
        this.vert(e, l, i, a),
        this.vert(t, l, i, o),
        this.vert(n, l, i, s));
    }
    quad(e, t, n, r, i, a, o, s, c, l) {
      (this.tri(e, t, n, i, a, o, s, c), this.tri(e, n, r, i, a, o, c, l));
    }
    loft(e, t, n, r = !0, i = !0) {
      let a = e.map((e) =>
          Gp(
            e.reduce((e, t) => Wp(e, t), [0, 0, 0]),
            1 / e.length,
          ),
        ),
        o = e[0].length;
      for (let r = 0; r + 1 < e.length; r++) {
        let i = Gp(Wp(a[r], a[r + 1]), 0.5);
        for (let a = 0; a < o; a++) {
          let s = (a + 1) % o;
          this.quad(
            e[r][a],
            e[r][s],
            e[r + 1][s],
            e[r + 1][a],
            i,
            n(r, a),
            t[r],
            t[r],
            t[r + 1],
            t[r + 1],
          );
        }
      }
      let s = (r, i) => {
        let s = a[r],
          c = Wp(s, Gp(Up(a[i], s), 0.5));
        for (let i = 0; i < o; i++)
          this.tri(
            s,
            e[r][i],
            e[r][(i + 1) % o],
            c,
            n(Math.min(r, e.length - 2), i),
            t[r],
            t[r],
            t[r],
          );
      };
      (r && s(0, 1), i && s(e.length - 1, e.length - 2));
    }
    ellipsoid(e, t, n, r, i, a, o, s, c = 0) {
      let l = Jp(Kp(n, r)),
        u = [];
      for (let o = 0; o <= a; o++) {
        let s = c + ((Math.PI - c) * o) / a,
          d = [];
        for (let a = 0; a < i; a++) {
          let o = (a / i) * Math.PI * 2,
            c = Wp(
              Wp(Gp(n, Math.cos(s)), Gp(r, Math.sin(s) * Math.cos(o))),
              Gp(l, Math.sin(s) * Math.sin(o)),
            );
          d.push([e[0] + c[0] * t[0], e[1] + c[1] * t[1], e[2] + c[2] * t[2]]);
        }
        u.push(d);
      }
      for (let t = 0; t < a; t++)
        for (let n = 0; n < i; n++) {
          let r = (n + 1) % i,
            a = u[t][n],
            c = u[t][r],
            l = u[t + 1][r],
            d = u[t + 1][n],
            f = Gp(Wp(Wp(a, c), Wp(l, d)), 0.25),
            p = typeof s == `function` ? s(Jp(Up(f, e))) : s;
          (this.tri(a, c, l, e, p, o, o, o), this.tri(a, l, d, e, p, o, o, o));
        }
      return u[0];
    }
    box(e, t, n, r) {
      let [i, a, o] = e,
        [s, c, l] = t,
        u = [(i + s) / 2, (a + c) / 2, (o + l) / 2],
        d = (e, t, n) => [e, t, n],
        f = [
          [d(i, a, l), d(s, a, l), d(s, c, l), d(i, c, l)],
          [d(i, a, o), d(i, c, o), d(s, c, o), d(s, a, o)],
          [d(i, c, o), d(i, c, l), d(s, c, l), d(s, c, o)],
          [d(i, a, o), d(s, a, o), d(s, a, l), d(i, a, l)],
          [d(s, a, o), d(s, c, o), d(s, c, l), d(s, a, l)],
          [d(i, a, o), d(i, a, l), d(i, c, l), d(i, c, o)],
        ];
      for (let e of f) this.quad(e[0], e[1], e[2], e[3], u, r, n, n, n, n);
    }
    tube(e, t, n, r, i) {
      let a = e.length,
        o = [];
      for (let r = 0; r < a; r++) {
        let i = Jp(Up(e[(r + 1) % a], e[(r + a - 1) % a])),
          s = Jp(Kp(i, Math.abs(i[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0])),
          c = Kp(i, s),
          l = [];
        for (let i = 0; i < n; i++) {
          let a = (i / n) * Math.PI * 2;
          l.push(Wp(e[r], Wp(Gp(s, Math.cos(a) * t), Gp(c, Math.sin(a) * t))));
        }
        o.push(l);
      }
      for (let t = 0; t < a; t++) {
        let s = (t + 1) % a;
        for (let a = 0; a < n; a++) {
          let c = (a + 1) % n;
          this.quad(
            o[t][a],
            o[t][c],
            o[s][c],
            o[s][a],
            Gp(Wp(e[t], e[s]), 0.5),
            i,
            r,
            r,
            r,
            r,
          );
        }
      }
    }
    geometry() {
      let e = new oi();
      return (
        e.setAttribute(`position`, new F(this.P, 3)),
        e.setAttribute(`normal`, new F(this.N, 3)),
        e.setAttribute(`partColor`, new F(this.C, 3)),
        e.setAttribute(`accent`, new F(this.A, 1)),
        e.setAttribute(`skinIndex`, new qr(this.SI, 4)),
        e.setAttribute(`skinWeight`, new F(this.SW, 4)),
        (e.boundingSphere = new Qr(new M(0, 36, 0), 46)),
        e
      );
    }
  };
function Xp(e, t, n, r, i, a, o = 0) {
  let s = [];
  for (let c = 0; c < a; c++) {
    let l = o + (c / a) * Math.PI * 2;
    s.push(Wp(e, Wp(Gp(t, Math.cos(l) * r), Gp(n, Math.sin(l) * i))));
  }
  return s;
}
var Zp = [1, 0, 0],
  Qp = [0, 1, 0],
  $p = [0, 0, 1];
function em(e, t, n, r, i) {
  let a = Math.max(0, Math.min(1, (e - i) / (r - i)));
  return a >= 0.999 ? t : a <= 0.001 ? n : [t, n, a];
}
var tm = null;
function nm() {
  if (tm) return tm;
  let e = new Yp(),
    t = (e) => new P(e),
    n = {
      hoodie: [t(Hp.hoodie), 0],
      hoodieShade: [t(Hp.hoodieShade), 0],
      face: [t(Hp.face), 0],
      pants: [t(Hp.pants), 0],
      pantsShade: [t(Hp.pantsShade), 0],
      shoe: [t(Hp.shoe), 0],
      glove: [t(Hp.glove), 0],
      accent: [t(Hp.accent), 1],
      glow: [t(Hp.accent), 2],
    };
  {
    let t = [
        [31.6, 8.4, 5.5, 0],
        [34, 8.1, 5.3, 0],
        [38, 7.7, 5.1, 0.1],
        [42, 8.1, 5.4, 0.3],
        [46, 8.8, 5.8, 0.45],
        [50, 9.2, 5.9, 0.4],
        [53, 8.3, 5.4, 0.2],
        [55.2, 4.6, 3.9, 0],
      ],
      r = t.map(([e, t, n, r]) =>
        Xp([0, e, r], Zp, $p, t, n, 12, Math.PI / 12),
      ),
      i = t.map(([e]) =>
        e < 38
          ? em(e, Rp.hips, Rp.spine, 33, 40)
          : e < 46
            ? em(e, Rp.spine, Rp.chest, 39, 46)
            : Rp.chest,
      );
    e.loft(r, i, () => n.hoodie, !1, !0);
    let a = [
      [29.6, 8.8, 5.9],
      [31.4, 8.75, 5.85],
      [32.8, 8.1, 5.3],
    ].map(([e, t, n]) => Xp([0, e, 0], Zp, $p, t, n, 12, Math.PI / 12));
    (e.loft(a, [Rp.hips, Rp.hips, Rp.hips], () => n.hoodieShade, !0, !1),
      e.box(
        [-5.2, 33.2, 4.3],
        [5.2, 39.2, 5.95],
        [Rp.hips, Rp.spine, 0.5],
        n.hoodieShade,
      ));
    for (let t of [1, -1])
      (e.box(
        [t * 1.7 - 0.3, 47.2, 5.7],
        [t * 1.7 + 0.3, 54, 6.55],
        Rp.chest,
        n.accent,
      ),
        e.box(
          [t * 1.7 - 0.45, 45.9, 5.75],
          [t * 1.7 + 0.45, 47.4, 6.75],
          Rp.chest,
          n.hoodieShade,
        ));
    e.loft(
      [
        Xp([0, 53, 0], Zp, $p, 2.6, 2.4, 8),
        Xp([0, 58, 0.3], Zp, $p, 2.3, 2.2, 8),
      ],
      [Rp.chest, Rp.neck],
      () => n.face,
      !1,
      !1,
    );
  }
  {
    let t = [0, 60.4, 0.9],
      r = [4.8, 5.4, 5];
    e.ellipsoid(t, r, Qp, Zp, 12, 7, Rp.head, n.face);
    {
      let i = [-0.06, 0.2],
        a = [r[0] + 0.45, r[1] + 0.45, r[2] + 0.45],
        o = i.map((e) =>
          Array.from({ length: 11 }, (n, r) => {
            let i = -1.15 + (2.3 * r) / 10,
              o = [
                Math.sin(i) * Math.cos(e),
                Math.sin(e),
                Math.cos(i) * Math.cos(e),
              ];
            return [
              t[0] + o[0] * a[0],
              t[1] + 0.3 + o[1] * a[1],
              t[2] + o[2] * a[2],
            ];
          }),
        );
      for (let r = 0; r < 10; r++)
        e.quad(
          o[0][r],
          o[0][r + 1],
          o[1][r + 1],
          o[1][r],
          t,
          n.glow,
          Rp.head,
          Rp.head,
          Rp.head,
          Rp.head,
        );
    }
    let i = [0, 61.4, -0.8],
      a = [6.3, 6.9, 6.7],
      o = Jp([0, -0.12, 1]),
      s = Math.acos(0.5),
      c = e.ellipsoid(i, a, o, Zp, 14, 6, Rp.head, n.hoodie, s);
    e.tube(c, 0.75, 5, Rp.head, n.hoodieShade);
    for (let t of [1, -1]) {
      let r = t > 0 ? Rp.earL : Rp.earR,
        [, i, a, o] = zp[t > 0 ? `earL` : `earR`],
        s = [
          [0, 1.5, 0.95],
          [0.22, 2.2, 0.9],
          [0.5, 2.3, 0.8],
          [0.75, 1.9, 0.65],
          [0.92, 1.1, 0.45],
          [1, 0.25, 0.25],
        ],
        c = s.map(([e]) => {
          let n = 0.42 + 0.55 * e * e,
            r = t * (0.2 + 0.1 * e);
          return Jp([Math.sin(r), Math.cos(n), -Math.sin(n)]);
        }),
        l = [[i, a, o]];
      for (let e = 1; e < s.length; e++) {
        let t = (s[e][0] - s[e - 1][0]) * 9;
        l.push(Wp(l[e - 1], Gp(c[e], t)));
      }
      let u = [Math.cos(t * 0.2), -Math.sin(t * 0.2) * 0.3, 0],
        d = s.map(([, e, t], n) => {
          let r = Jp(Kp(u, c[n]));
          return Xp(l[n], Jp(u), r, e, t, 8, Math.PI / 8);
        });
      e.loft(
        d,
        s.map((e, t) => (t === 0 ? [Rp.head, r, 0.5] : r)),
        () => n.hoodie,
        !0,
        !1,
      );
      let f = s.slice(1, 5).map(([, e], t) => {
        let n = t + 1,
          r = Jp(Kp(u, c[n])),
          i = r[2] > 0 ? r : Gp(r, -1);
        return Xp(
          Wp(l[n], Gp(i, s[n][2] * 0.85)),
          Jp(u),
          i,
          e * 0.55,
          0.2,
          6,
          Math.PI / 6,
        );
      });
      e.loft(
        f,
        f.map(() => r),
        () => n.accent,
        !0,
        !0,
      );
    }
  }
  for (let t of [1, -1]) {
    let r = t > 0 ? Rp.upperArmL : Rp.upperArmR,
      i = t > 0 ? Rp.foreArmL : Rp.foreArmR,
      a = t > 0 ? Rp.handL : Rp.handR,
      o = 10.7 * t,
      s = [
        [55, 1.6, -1.7],
        [53.6, 2.85, -0.6],
        [51, 3, 0],
        [47.5, 2.75, 0],
        [45.2, 2.6, 0],
        [43.6, 2.5, 0],
        [41.5, 2.4, 0],
        [39, 2.35, 0],
        [38.2, 2.45, 0],
      ],
      c = s.map(([e, n, r]) => Xp([o + r * t, e, 0], Zp, $p, n, n * 1.04, 10)),
      l = s.map(([e]) => em(e, r, i, 46.2, 42.6));
    (e.loft(c, l, () => n.hoodie, !0, !1),
      e.loft(
        [
          Xp([o, 39, 0], Zp, $p, 2.3, 2.35, 10),
          Xp([o, 38.2, 0], Zp, $p, 2.6, 2.65, 10),
          Xp([o, 36.2, 0], Zp, $p, 2.45, 2.5, 10),
        ],
        [i, i, i],
        () => n.hoodieShade,
        !1,
        !0,
      ),
      e.ellipsoid([o, 33.8, 0.35], [1.9, 2.6, 2.1], Qp, Zp, 8, 5, a, n.glove));
  }
  for (let t of [1, -1]) {
    let r = t > 0 ? Rp.thighL : Rp.thighR,
      i = t > 0 ? Rp.shinL : Rp.shinR,
      a = t > 0 ? Rp.footL : Rp.footR,
      o = 4.3 * t,
      s = [
        [35, 3.7, 4.3],
        [31, 4.1, 4.3],
        [25, 3.8, 3.9],
        [20, 3.3, 3.45],
        [17, 3.15, 3.3],
        [14, 3, 3.1],
        [10, 2.8, 2.9],
        [6.6, 2.65, 2.75],
      ],
      c = s.map(([e, n, r]) =>
        Xp(
          [o - (e > 30 ? 0.3 * t : 0), e, e > 25 ? 0 : 0.2],
          Zp,
          $p,
          n,
          r,
          10,
          Math.PI / 10,
        ),
      ),
      l = s.map(([e]) => (e > 30 ? [Rp.hips, r, 0] : em(e, r, i, 19.5, 14.5)));
    l[0] = r;
    let u = t > 0 ? 9 : 4;
    (e.loft(
      c,
      l,
      (e, t) => (t === u && e < c.length - 1 ? n.accent : n.pants),
      !1,
      !1,
    ),
      e.loft(
        [
          Xp([o, 7.6, 0.2], Zp, $p, 2.55, 2.65, 10),
          Xp([o, 6.6, 0.2], Zp, $p, 2.9, 3, 10),
          Xp([o, 4.4, 0.2], Zp, $p, 2.75, 2.85, 10),
        ],
        [i, i, a],
        () => n.pantsShade,
        !1,
        !0,
      ));
    let d = [
        [-3.4, 2.3, 5.2],
        [-1.8, 2.7, 5.6],
        [1.5, 2.8, 4.6],
        [4.6, 2.6, 3.5],
        [6.8, 1.9, 2.5],
      ],
      f = d.map(([e, t, n]) =>
        Xp([o, (n + 1.1) / 2, e], Zp, Qp, t, (n - 1.1) / 2, 8, Math.PI / 8),
      );
    e.loft(
      f,
      f.map(() => a),
      () => n.shoe,
    );
    let p = d.map(([e, t]) =>
      Xp(
        [o, 0.65, e + (e > 0 ? 0.25 : -0.25)],
        Zp,
        Qp,
        t + 0.3,
        0.65,
        8,
        Math.PI / 8,
      ),
    );
    e.loft(
      p,
      p.map(() => a),
      () => n.accent,
    );
  }
  return ((tm = e.geometry()), tm);
}
var rm = () => new Float32Array(26),
  im = Math.PI / 180,
  am = (e, t, n) => (e < t ? t : e > n ? n : e),
  om = (e, t, n, r) => e + (t - e) * (1 - Math.exp(-n * r)),
  sm = (e) => ((((e + 180) % 360) + 360) % 360) - 180;
function cm(e, t, n, r) {
  for (let i = 0; i < 26; i++) e[i] = t[i] + (n[i] - t[i]) * r;
  return e;
}
function lm(e, t) {
  let n = Bp.thigh,
    r = Bp.shin,
    i = am(Math.hypot(e, t), Math.abs(n - r) + 0.1, n + r - 0.01),
    a = Math.PI - Math.acos(am((n * n + r * r - i * i) / (2 * n * r), -1, 1));
  return [
    (Math.atan2(e, t) +
      Math.acos(am((n * n + i * i - r * r) / (2 * n * i), -1, 1))) /
      im,
    a / im,
  ];
}
var um = {
    root: 0,
    hips: 1,
    spine: 2,
    chest: 3,
    neck: 4,
    head: 5,
    earL: 6,
    earR: 7,
    upperArmL: 8,
    foreArmL: 9,
    handL: 10,
    upperArmR: 11,
    foreArmR: 12,
    handR: 13,
    thighL: 14,
    shinL: 15,
    footL: 16,
    thighR: 17,
    shinR: 18,
    footR: 19,
  },
  dm = null,
  fm = class {
    root = new ar();
    uniforms;
    body = new ar();
    bones;
    skeleton;
    mesh;
    depthMesh;
    style = `solid`;
    dither = !1;
    baseRenderOrder = 20;
    pose = null;
    lastPos = new M();
    hasLast = !1;
    vel = [0, 0, 0];
    bodyYaw = 0;
    viewYaw = 0;
    viewPitch = 0;
    yawRate = 0;
    lastYaw = NaN;
    legYaw = 0;
    ground = 1;
    crouch = 0;
    tuck = 0;
    runAmp = 0;
    phase = 0;
    lean = 0;
    airTime = 0;
    wasGrounded = !0;
    squash = 0;
    squashV = 0;
    ears = [0, 0, 0, 0];
    earTwitch = 2;
    time = Math.random() * 10;
    snapNext = !0;
    p = {
      idle: rm(),
      run: rm(),
      crouch: rm(),
      air: rm(),
      airCrouch: rm(),
      g: rm(),
      a: rm(),
      out: rm(),
    };
    constructor(e = {}, t = Ep()) {
      this.uniforms = t;
      let n = nm();
      this.bones = Vp();
      let r = this.bones[0];
      (this.body.add(r),
        this.root.add(this.body),
        (dm ||=
          (r.updateMatrixWorld(!0),
          this.bones.map((e) => e.matrixWorld.clone().invert()))),
        (this.skeleton = new fa(this.bones, dm)));
      let i = new N();
      ((this.mesh = new sa(n, Np(this.uniforms))),
        (this.depthMesh = new sa(n, Ip(this.uniforms))));
      for (let e of [this.mesh, this.depthMesh])
        (e.bind(this.skeleton, i),
          (e.boundingSphere = n.boundingSphere.clone()),
          this.body.add(e));
      ((this.depthMesh.material.forceSinglePass = !0),
        (this.root.name = `player-model`),
        this.setStyle(e.style ?? `solid`, e.color, e.dither));
    }
    setStyle(e, t, n = this.dither) {
      let r = e !== this.style || n !== this.dither || !this.mesh.material;
      if (
        ((this.style = e),
        (this.dither = n),
        e === `solid`
          ? this.uniforms.uAccent.value.set(t ?? Hp.accent)
          : t !== void 0 && this.uniforms.uGhost.value.set(t),
        r)
      ) {
        this.mesh.material.dispose();
        let t = e === `solid` ? Np(this.uniforms) : Pp(this.uniforms, n);
        ((t.forceSinglePass = !0), (this.mesh.material = t));
      }
      ((this.depthMesh.visible = e === `ghost` && !n),
        this.setRenderOrder(this.baseRenderOrder));
    }
    get currentStyle() {
      return this.style;
    }
    setOpacity(e) {
      this.uniforms.uOpacity.value = e;
    }
    setNearFade(e, t) {
      this.uniforms.uNearFade.value.set(e, t);
    }
    setRenderOrder(e) {
      ((this.baseRenderOrder = e),
        (this.depthMesh.renderOrder = e),
        (this.mesh.renderOrder = e + 1));
    }
    setState(e) {
      this.pose = e;
    }
    snap() {
      this.snapNext = !0;
    }
    update(e) {
      let t = this.pose;
      if (!t) return;
      ((e = am(e, 0, 0.1)), (this.time += e));
      let n = t.position,
        r = n[0],
        i = n[2],
        a = -n[1],
        o = this.lastPos;
      this.hasLast &&
        (o.x - r) ** 2 + (o.y - i) ** 2 + (o.z - a) ** 2 > 25600 &&
        (this.snapNext = !0);
      let s = this.snapNext;
      if (((this.snapNext = !1), t.velocity))
        ((this.vel[0] = t.velocity[0]),
          (this.vel[1] = t.velocity[1]),
          (this.vel[2] = t.velocity[2]));
      else if (this.hasLast && e > 0 && !s) {
        let t = 1 - Math.exp(-20 * e);
        ((this.vel[0] += ((r - this.lastPos.x) / e - this.vel[0]) * t),
          (this.vel[1] += (-(a - this.lastPos.z) / e - this.vel[1]) * t),
          (this.vel[2] += ((i - this.lastPos.y) / e - this.vel[2]) * t));
      } else this.vel[0] = this.vel[1] = this.vel[2] = 0;
      (this.lastPos.set(r, i, a),
        (this.hasLast = !0),
        this.root.position.set(r, i, a));
      let [c, l, u] = this.vel,
        d = Math.hypot(c, l),
        f =
          Number.isNaN(this.lastYaw) || s || e <= 0
            ? 0
            : sm(t.yaw - this.lastYaw) / e;
      if (
        ((this.lastYaw = t.yaw),
        Math.abs(f) > 3e3 && (f = 0),
        (this.yawRate = s ? 0 : om(this.yawRate, f, 10, e)),
        (this.viewYaw = t.yaw),
        (this.viewPitch = am(t.pitch, -89, 89)),
        s)
      )
        this.bodyYaw = t.yaw;
      else {
        this.bodyYaw += sm(t.yaw - this.bodyYaw) * (1 - Math.exp(-9 * e));
        let n = sm(t.yaw - this.bodyYaw);
        Math.abs(n) > 50 && (this.bodyYaw = t.yaw - Math.sign(n) * 50);
      }
      let p = this.bodyYaw * im,
        m = c * Math.cos(p) + l * Math.sin(p),
        h = -c * Math.sin(p) + l * Math.cos(p),
        g = t.grounded;
      (g &&
        !this.wasGrounded &&
        this.airTime > 0.12 &&
        (this.squashV += am(-this.vel[2] / 900, 0.15, 0.7) * 2.2),
        (this.airTime = g ? 0 : this.airTime + e),
        (this.wasGrounded = g));
      let _ = +!!g;
      ((this.ground = s ? _ : om(this.ground, _, _ > this.ground ? 9 : 22, e)),
        (this.crouch = s
          ? +t.crouched
          : om(this.crouch, +!!t.crouched, 14, e)));
      let v = u > 0 ? 1 : am(1 + u / 520, 0.2, 1);
      this.tuck = s ? v : om(this.tuck, v, 7, e);
      let y = am(d / 250, 0, 1) ** 0.8;
      this.runAmp = s ? y : om(this.runAmp, y, 8, e);
      let b = Math.atan2(h, m) / im,
        x = !1;
      Math.abs(b) > 100 && ((x = !0), (b = sm(b + 180)));
      let S = am(50 + d * 0.18, 50, 115);
      this.phase +=
        (x ? -1 : 1) *
        ((d / S) * Math.PI * 2 * e) *
        (0.35 + 0.65 * this.ground);
      let C = d > 30 ? am(b, -65, 65) * this.ground : 0;
      this.legYaw = s ? C : om(this.legYaw, C, 8, e);
      let w = t.sidemove ?? 0,
        T =
          am(this.yawRate * 0.055 - (w / 450) * 7, -26, 26) *
          (0.35 + 0.65 * (1 - this.ground)) *
          am(d / 200, 0.2, 1);
      this.lean = s ? T : om(this.lean, T, 6, e);
      let E = this.p;
      (this.idlePose(E.idle),
        this.runPose(E.run),
        this.crouchPose(E.crouch),
        this.airPose(E.air, !1),
        this.airPose(E.airCrouch, !0),
        cm(E.g, E.idle, E.run, this.runAmp),
        cm(E.g, E.g, E.crouch, this.crouch),
        cm(E.a, E.air, E.airCrouch, this.crouch));
      let D = cm(E.out, E.a, E.g, this.ground);
      (s && (this.squash = this.squashV = 0),
        (this.squashV += (-240 * this.squash - 15 * this.squashV) * e),
        (this.squash += this.squashV * e),
        (this.squash = am(this.squash, -0.08, 0.16)));
      let O = this.ears;
      ((this.earTwitch -= e),
        this.earTwitch < 0 &&
          ((this.earTwitch = 2.5 + Math.random() * 4),
          d < 40 && (O[1] += 260 * (Math.random() < 0.5 ? 1 : -1))));
      let k =
          -am(d * 0.028, 0, 26) - am(u * 0.035, -22, 22) * (1 - this.ground),
        A = this.lean * 0.7;
      ((O[1] += (110 * (k - O[0]) - 7 * O[1]) * e),
        (O[0] += O[1] * e),
        (O[3] += (110 * (A - O[2]) - 7 * O[3]) * e),
        (O[2] += O[3] * e),
        s && ((O[0] = k), (O[1] = 0), (O[2] = A), (O[3] = 0)),
        this.apply(D));
    }
    idlePose(e) {
      e.fill(0);
      let t = this.time,
        n = Math.sin(t * 1.7);
      ((e[3] = Math.sin(t * 0.6) * 1.2),
        (e[4] = 2 + n * 0.7),
        (e[6] = -1 - n * 0.9),
        (e[10] = n * 0.4));
      for (let [n, r, i, a, o] of [
        [12, 13, 14, 15, 1],
        [16, 17, 18, 19, -1],
      ])
        ((e[n] = 3),
          (e[i] = 6),
          (e[r] = 3 - o * Math.sin(t * 0.6) * 1.2),
          (e[a] = 0));
      ((e[20] = 4 + n),
        (e[23] = 4 + n),
        (e[21] = 7 + n * 0.8),
        (e[24] = 7 + n * 0.8),
        (e[22] = 14),
        (e[25] = 14));
    }
    runPose(e) {
      e.fill(0);
      let t = this.phase,
        n = Math.sin(t),
        r = Math.cos(t);
      ((e[0] = -1.6 * (1 + Math.cos(2 * t)) * 0.5 - 0.6),
        (e[2] = -8 * n),
        (e[4] = 9),
        (e[5] = 4 * n),
        (e[6] = 4),
        (e[7] = 8 * n),
        (e[10] = -6));
      let i = (t, n, r, i, a) => {
        ((e[r] = 40 * t + 6),
          (e[i] = 14 + 22 * Math.max(0, -t) + 62 * Math.max(0, n) ** 1.4),
          (e[a] = 12 * t - 6));
      };
      (i(n, r, 12, 14, 15),
        i(-n, -r, 16, 18, 19),
        (e[13] = e[17] = 2),
        (e[20] = -44 * n + 6),
        (e[23] = 44 * n + 6),
        (e[21] = e[24] = 9),
        (e[22] = 78 + 18 * n),
        (e[25] = 78 - 18 * n));
    }
    crouchPose(e) {
      e.fill(0);
      let t = this.runAmp,
        n = Math.sin(this.phase);
      ((e[0] = -14.5),
        (e[1] = 0),
        (e[4] = 20),
        (e[6] = 10),
        (e[9] = -12),
        (e[10] = -10));
      for (let [r, i, a, o, s] of [
        [12, 13, 14, 15, 1],
        [16, 17, 18, 19, -1],
      ]) {
        let [c, l] = lm(
          1 + s * n * t * 9,
          Bp.hip -
            14.5 -
            Bp.ankle +
            Math.max(0, s * Math.cos(this.phase)) * t * 3 * -1,
        );
        ((e[r] = c), (e[a] = l), (e[o] = 0), (e[i] = 7));
      }
      ((e[20] = 28 - 14 * n * t),
        (e[23] = 28 + 14 * n * t),
        (e[21] = e[24] = 12),
        (e[22] = e[25] = 62));
    }
    airPose(e, t) {
      e.fill(0);
      let n = this.tuck;
      (t
        ? ((e[0] = -13),
          (e[4] = 14),
          (e[6] = 6),
          (e[9] = -8),
          (e[10] = -6),
          (e[12] = 88),
          (e[14] = 128),
          (e[16] = 76),
          (e[18] = 120),
          (e[15] = e[19] = -14),
          (e[13] = e[17] = 10))
        : ((e[0] = 0),
          (e[4] = 5 + 4 * n),
          (e[6] = 2),
          (e[10] = -4),
          (e[12] = 18 + 42 * n),
          (e[14] = 22 + 70 * n),
          (e[16] = 6 + 30 * n),
          (e[18] = 34 + 52 * n),
          (e[15] = -18 + 6 * n),
          (e[19] = -22 + 8 * n),
          (e[13] = 5),
          (e[17] = 4)),
        (e[20] = 14),
        (e[23] = 8),
        (e[21] = 26 + 12 * n),
        (e[24] = 24 + 12 * n),
        (e[22] = 38),
        (e[25] = 44));
    }
    apply(e) {
      let t = this.bones,
        n = um,
        r = (e, n, r, i, a = `YXZ`) =>
          t[e].rotation.set(n * im, r * im, i * im, a);
      this.root.rotation.y = this.bodyYaw * im + Math.PI / 2;
      let i = this.squash;
      this.body.scale.set(1 + i * 0.45, 1 - i, 1 + i * 0.45);
      let a = sm(this.viewYaw - this.bodyYaw),
        o = this.viewPitch,
        s = this.lean,
        c = this.legYaw;
      ((t[n.hips].position.y = 32 + e[0] - i * 10),
        r(n.hips, e[1], e[2] + c, e[3] - s),
        r(n.spine, e[4] + o * 0.08, e[5] - c * 0.5 + a * 0.2, s * 0.15),
        r(n.chest, e[6] + o * 0.15, e[7] - c * 0.5 + a * 0.3, e[8] + s * 0.1),
        r(n.neck, e[9] + o * 0.25, a * 0.2, 0),
        r(n.head, e[10] + am(o * 0.45, -38, 40), a * 0.3, e[11] + s * 0.45),
        r(n.thighL, -e[12], 0, e[13] + Math.max(0, -s) * 0.3, `XZY`),
        r(n.shinL, e[14], 0, 0, `XYZ`),
        r(n.footL, -(e[15] + e[14] - e[12]) * 0.85, 0, 0, `XYZ`),
        r(n.thighR, -e[16], 0, -e[17] - Math.max(0, s) * 0.3, `XZY`),
        r(n.shinR, e[18], 0, 0, `XYZ`),
        r(n.footR, -(e[19] + e[18] - e[16]) * 0.85, 0, 0, `XYZ`),
        r(n.upperArmL, -e[20], 0, e[21] - s * 0.9, `XZY`),
        r(n.foreArmL, -e[22], 0, 0, `XYZ`),
        r(n.upperArmR, -e[23], 0, -e[24] - s * 0.9, `XZY`),
        r(n.foreArmR, -e[25], 0, 0, `XYZ`));
      let l = this.ears;
      (r(n.earL, l[0], 0, -l[2] - 4 + Math.sin(this.time * 2.1) * 1.5, `XZY`),
        r(
          n.earR,
          l[0] * 0.92,
          0,
          -l[2] + 4 - Math.sin(this.time * 2.3 + 1) * 1.5,
          `XZY`,
        ),
        (this.uniforms.uAxisA.value.copy(this.root.position).y += 8),
        (this.uniforms.uAxisB.value.copy(this.root.position).y += 60));
    }
    dispose() {
      (this.root.removeFromParent(),
        this.mesh.material.dispose(),
        this.depthMesh.material.dispose(),
        this.skeleton.dispose());
    }
  },
  pm = class {
    core;
    handle;
    info;
    bones;
    parent;
    restQ;
    restP;
    poseToBone;
    seqs;
    vertices;
    indices;
    seqByName = new Map();
    animCache;
    constructor(e, t) {
      ((this.core = e),
        (this.handle = t),
        (this.info = JSON.parse(e.studioInfo(t))));
      let n = (this.bones = this.info.bones.length);
      ((this.parent = new Int16Array(n)),
        (this.restQ = new Float32Array(n * 4)),
        (this.restP = new Float32Array(n * 3)),
        (this.poseToBone = new Float32Array(n * 12)),
        this.info.bones.forEach((e, t) => {
          ((this.parent[t] = e.parent),
            this.restQ.set(e.quat, t * 4),
            this.restP.set(e.pos, t * 3),
            this.poseToBone.set(e.poseToBone, t * 12));
        }),
        (this.seqs = this.info.seqs.map((e, t) => {
          let r = Float32Array.from(
              e.weights.length === n ? e.weights : Array(n).fill(1),
            ),
            i = [];
          for (let e = 0; e < n; e++) r[e] > 0 && i.push(e);
          return {
            ...e,
            index: t,
            looping: !!(e.flags & 1),
            delta: !!(e.flags & 4),
            post: !!(e.flags & 16),
            w: r,
            active: Uint8Array.from(i),
          };
        })),
        this.seqs.forEach((e, t) => {
          let n = e.name.toLowerCase();
          this.seqByName.has(n) || this.seqByName.set(n, t);
        }),
        (this.vertices = e.studioVertices(t)),
        (this.indices = e.studioIndices(t)),
        (this.animCache = Array(this.info.anims.length).fill(null)));
    }
    seq(e) {
      return this.seqByName.get(e.toLowerCase()) ?? -1;
    }
    seqForActivity(e) {
      return this.seqs.findIndex((t) => t.activity === e);
    }
    pose(e) {
      return this.info.poseParams.findIndex(
        (t) => t.name.toLowerCase() === e.toLowerCase(),
      );
    }
    bone(e) {
      let t = e.toLowerCase();
      return this.info.bones.findIndex((e) => e.name.toLowerCase() === t);
    }
    anim(e) {
      let t = this.animCache[e];
      if (!t) {
        if (
          ((t = this.core.studioAnim(this.handle, e)),
          t.length !== this.info.anims[e].frames * this.bones * 7)
        ) {
          let n = this.info.anims[e].frames,
            r = !!(this.info.anims[e].flags & 4);
          t = new Float32Array(n * this.bones * 7);
          for (let e = 0; e < n; e++)
            for (let n = 0; n < this.bones; n++) {
              let i = (e * this.bones + n) * 7;
              r
                ? (t[i + 3] = 1)
                : (t.set(this.restQ.subarray(n * 4, n * 4 + 4), i),
                  t.set(this.restP.subarray(n * 3, n * 3 + 3), i + 4));
            }
        }
        this.animCache[e] = t;
      }
      return t;
    }
    warm(e) {
      let t = new Set(),
        n = (e) => {
          if (e < 0 || t.has(e)) return;
          t.add(e);
          let r = this.seqs[e];
          for (let e of r.anims) this.anim(e);
          for (let e of r.layers) n(e.seq);
        };
      e.forEach(n);
    }
    get decodedBytes() {
      return this.animCache.reduce((e, t) => e + (t ? t.byteLength : 0), 0);
    }
  },
  mm = 0.5,
  hm = 175,
  gm = 100,
  _m = 250,
  vm = 85,
  ym = 45,
  bm = 720,
  xm = 3,
  Sm = 90,
  Cm = 0.2,
  wm = (e) => ((e %= 360), e > 180 && (e -= 360), e < -180 && (e += 360), e),
  Tm = class {
    queue = [];
    blank() {
      return { seq: -1, cycle: 0, rate: 1, animtime: 0, fadeOut: 0, weight: 1 };
    }
    check(e, t, n, r) {
      this.queue.length || this.queue.push(this.blank());
      let i = this.queue[this.queue.length - 1];
      if (i.animtime && (i.seq !== t || n)) {
        let n = e.seqs[t];
        if (!n || n.flags & 2 || !r) this.queue.length = 0;
        else {
          let t = e.seqs[i.seq];
          i.fadeOut = Math.min(t ? t.fadeOut : 0, n.fadeIn);
        }
        (this.queue.push(this.blank()),
          (i = this.queue[this.queue.length - 1]));
      }
      ((i.seq = -1), (i.animtime = 0), (i.fadeOut = 0));
    }
    update(e, t, n, r) {
      this.queue.length || this.queue.push(this.blank());
      let i = this.queue[this.queue.length - 1];
      ((i.seq = e),
        (i.animtime = r),
        (i.cycle = t),
        (i.rate = n),
        (i.weight = 1));
      for (let e = 0; e < this.queue.length - 1; ) {
        let t = this.queue[e],
          n = t.fadeOut <= 0 ? 0 : 1 - (r - t.animtime) / t.fadeOut;
        (n > 0 && n <= 1 ? (n = 3 * n * n - 2 * n * n * n) : n > 1 && (n = 1),
          n > 0 ? ((t.weight = n), e++) : this.queue.splice(e, 1));
      }
    }
  },
  Em = 4,
  Dm = class {
    d;
    bs;
    suffix = `KNIFE`;
    now = 0;
    seq = -1;
    cycle = 0;
    activity = `ACT_IDLE`;
    parity = 0;
    prevParity = 0;
    main = new Tm();
    jumping = !1;
    firstJumpFrame = !1;
    jumpStart = 0;
    groundTime = 0;
    jumps = 0;
    feetInit = !1;
    goalFeetYaw = 0;
    feetYaw = 0;
    lastTurnTime = 0;
    gaitYaw = 0;
    eyeYaw = 0;
    eyePitch = 0;
    bodyYaw = 0;
    maxGroundSpeed = 0;
    playbackRate = 1;
    idleT = new Tm();
    runT = new Tm();
    layers = Array.from({ length: Em }, () => ({
      seq: -1,
      cycle: 0,
      weight: 0,
    }));
    speed = 0;
    vx = 0;
    vy = 0;
    pMoveX;
    pMoveY;
    pBodyYaw;
    pBodyPitch;
    seqCache = new Map();
    fireSeq = -1;
    fireCycle = 0;
    constructor(e, t) {
      ((this.d = e),
        (this.bs = t),
        (this.pMoveX = e.pose(`move_x`)),
        (this.pMoveY = e.pose(`move_y`)),
        (this.pBodyYaw = e.pose(`body_yaw`)),
        (this.pBodyPitch = e.pose(`body_pitch`)));
    }
    sequences() {
      let e = [
          `Idle_Upper_`,
          `Walk_Upper_`,
          `Run_Upper_`,
          `Crouch_Idle_Upper_`,
          `Crouch_Walk_Upper_`,
          `Idle_Shoot_`,
          `Walk_Shoot_`,
          `Run_Shoot_`,
          `Crouch_Idle_Shoot_`,
          `Crouch_Walk_Shoot_`,
        ].map((e) => e + this.suffix),
        t = [
          `ACT_IDLE`,
          `ACT_WALK`,
          `ACT_RUN`,
          `ACT_CROUCHIDLE`,
          `ACT_RUN_CROUCH`,
          `ACT_HOP`,
        ];
      return [
        ...e.map((e) => this.d.seq(e)),
        ...t.map((e) => this.d.seqForActivity(e)),
      ].filter((e) => e >= 0);
    }
    fire() {
      let e = `Idle_Shoot_`;
      switch (this.activity) {
        case `ACT_RUN`:
          e = `Run_Shoot_`;
          break;
        case `ACT_WALK`:
          e = `Walk_Shoot_`;
          break;
        case `ACT_CROUCHIDLE`:
          e = `Crouch_Idle_Shoot_`;
          break;
        case `ACT_RUN_CROUCH`:
          e = `Crouch_Walk_Shoot_`;
      }
      ((this.fireSeq = this.seqIndex(e + this.suffix)), (this.fireCycle = 0));
    }
    reset() {
      ((this.fireSeq = -1),
        (this.feetInit = !1),
        (this.main.queue.length = 0),
        (this.idleT.queue.length = 0),
        (this.runT.queue.length = 0),
        (this.jumping = !1),
        (this.firstJumpFrame = !1),
        (this.seq = -1));
    }
    startAirborne(e) {
      let t = this.d.seqForActivity(`ACT_HOP`);
      t < 0 ||
        ((this.jumping = !0),
        (this.firstJumpFrame = !1),
        (this.jumpStart = this.now - e),
        (this.seq = t),
        (this.activity = `ACT_HOP`),
        (this.cycle = Math.max(0, Math.min(1, e * this.bs.cycleRate(t)))));
    }
    seqIndex(e) {
      let t = this.seqCache.get(e);
      return (
        t === void 0 && ((t = this.d.seq(e)), this.seqCache.set(e, t)),
        t
      );
    }
    update(e, t) {
      ((this.now += e),
        (this.vx = t.vel[0]),
        (this.vy = t.vel[1]),
        (this.speed = Math.hypot(this.vx, this.vy)),
        (this.groundTime = t.onGround ? this.groundTime + e : 0),
        t.jumped &&
          ((this.jumping = !0),
          (this.firstJumpFrame = !0),
          (this.jumpStart = this.now)),
        (this.eyeYaw = wm(t.eyeYaw)),
        (this.eyePitch = wm(t.eyePitch)),
        this.computeMainSequence(t),
        (this.maxGroundSpeed = this.currentMaxGroundSpeed()),
        this.bs.setPoseParam(
          this.pBodyPitch,
          Math.max(-90, Math.min(90, this.eyePitch)),
        ),
        this.computeBodyYaw(e),
        this.computeMoveYaw());
      let n = this.bs.cycleRate(this.seq),
        r = this.d.seqs[this.seq]?.looping ?? !0,
        i = this.cycle + e * n * this.playbackRate;
      ((i < 0 || i >= 1) && (i = r ? i - Math.floor(i) : i < 0 ? 0 : 1),
        (this.cycle = i),
        this.main.check(this.d, this.seq, this.parity !== this.prevParity, !0),
        (this.prevParity = this.parity),
        this.main.update(this.seq, this.cycle, this.playbackRate, this.now),
        this.computeAimSequence(),
        this.fireSeq >= 0 &&
          ((this.fireCycle += e * this.bs.cycleRate(this.fireSeq)),
          this.fireCycle > 1 && (this.fireSeq = -1)));
    }
    apply() {
      let e = this.bs;
      (e.initPose(), e.accumulate(this.seq, this.cycle, 1));
      let t = this.main.queue;
      for (let n = t.length - 2; n >= 0; n--) {
        let r = t[n];
        if (r.seq < 0) continue;
        let i = r.cycle + (this.now - r.animtime) * r.rate * e.cycleRate(r.seq),
          a = this.d.seqs[r.seq]?.looping ?? !0;
        ((i < 0 || i >= 1) && (i = a ? i - Math.floor(i) : i < 0 ? 0 : 1),
          e.accumulate(r.seq, i, r.weight));
      }
      for (let t of this.layers)
        t.weight > 0 && t.seq >= 0 && e.accumulate(t.seq, t.cycle, t.weight);
      this.fireSeq >= 0 && e.accumulate(this.fireSeq, this.fireCycle, 1);
    }
    handleJumping(e) {
      return (
        this.jumping &&
          (this.firstJumpFrame &&
            ((this.firstJumpFrame = !1),
            this.activity === `ACT_HOP` && this.parity++,
            (this.cycle = 0),
            this.jumps++),
          this.now - this.jumpStart > Cm &&
            e.onGround &&
            this.groundTime >= 0.025 &&
            ((this.jumping = !1), (this.cycle = 0))),
        this.jumping
      );
    }
    calcMainActivity(e) {
      return this.handleJumping(e)
        ? `ACT_HOP`
        : e.ducking
          ? this.speed > mm
            ? `ACT_RUN_CROUCH`
            : `ACT_CROUCHIDLE`
          : this.speed > mm
            ? this.speed > hm
              ? `ACT_RUN`
              : `ACT_WALK`
            : `ACT_IDLE`;
    }
    computeMainSequence(e) {
      let t = this.calcMainActivity(e);
      this.activity = t;
      let n = this.d.seqForActivity(t);
      n < 0 && (n = 0);
      let r = this.seq >= 0 ? this.d.seqs[this.seq].activity : ``;
      if (this.seq >= 0 && r === this.d.seqs[n].activity) return;
      let i = n !== this.seq;
      ((this.seq = n), (i || !this.d.seqs[n].looping) && this.parity++);
    }
    currentMaxGroundSpeed() {
      let e = this.d.seqs[this.seq]?.activity;
      return e === `ACT_WALK` || e === `ACT_IDLE`
        ? gm
        : e === `ACT_RUN`
          ? _m
          : e === `ACT_RUN_CROUCH`
            ? vm
            : 0;
    }
    movementRate() {
      if (this.speed <= mm) return [1, !1];
      let e = this.maxGroundSpeed;
      return e < 0.001
        ? [0.01, !0]
        : [Math.max(0.01, Math.min(10, this.speed / e)), !0];
    }
    aimSequence(e) {
      let t = this.suffix,
        n = this.activity;
      if (e)
        return this.seqIndex(
          (n === `ACT_CROUCHIDLE` ? `Crouch_Idle_Upper_` : `Idle_Upper_`) + t,
        );
      switch (n) {
        case `ACT_RUN`:
          return this.seqIndex(`Run_Upper_` + t);
        case `ACT_WALK`:
        case `ACT_RUNTOIDLE`:
        case `ACT_IDLETORUN`:
          return this.seqIndex(`Walk_Upper_` + t);
        case `ACT_CROUCHIDLE`:
          return this.seqIndex(`Crouch_Idle_Upper_` + t);
        case `ACT_RUN_CROUCH`:
          return this.seqIndex(`Crouch_Walk_Upper_` + t);
        default:
          return this.seqIndex(`Idle_Upper_` + t);
      }
    }
    updateAimLayers(e, t, n, r, i) {
      let a = this.aimSequence(n);
      (a < 0 && (a = 0),
        r.check(this.d, a, !1, !0),
        r.update(a, e, this.playbackRate, this.now));
      let o = this.layers[t],
        s = this.layers[t + 1],
        c = r.queue;
      (c.length === 1
        ? ((o.seq = c[0].seq), (o.weight = 1), (s.weight = 0))
        : ((o.seq = c[0].seq),
          (s.seq = c[1].seq),
          (o.weight = c[0].weight),
          (s.weight = 1 - o.weight)),
        (o.weight = Math.max(0, Math.min(1, o.weight * i))),
        (s.weight = Math.max(0, Math.min(1, s.weight * i))),
        (o.cycle = s.cycle = e));
    }
    computeAimSequence() {
      for (let e of this.layers) e.weight = 0;
      let e = this.cycle;
      this.updateAimLayers(e, 0, !0, this.idleT, 1);
      let t = this.activity;
      if (
        t === `ACT_RUN` ||
        t === `ACT_WALK` ||
        t === `ACT_RUNTOIDLE` ||
        t === `ACT_RUN_CROUCH`
      ) {
        let [t, n] = this.movementRate();
        n && this.updateAimLayers(e, 2, !1, this.runT, t);
      }
      let n = 0;
      for (let e = 1; e < Em; e++)
        this.layers[e].weight > 0 && (n += this.layers[e].weight);
      let r = this.layers[0];
      r.weight > 0 && (r.weight = Math.max(0, 1 - n));
      let i = -1;
      for (let e = 0; e < Em; e++) this.layers[e].weight > 0.99 && (i = e);
      for (let e = i - 1; e >= 0; e--) this.layers[e].weight = 0;
    }
    computeBodyYaw(e) {
      let t = this.speed > mm;
      if (!this.feetInit)
        ((this.feetInit = !0),
          (this.goalFeetYaw = this.feetYaw = this.eyeYaw),
          (this.lastTurnTime = 0));
      else if (t) this.goalFeetYaw = this.eyeYaw;
      else if (this.now - this.lastTurnTime > xm)
        this.goalFeetYaw = this.eyeYaw;
      else {
        let e = wm(this.goalFeetYaw - this.eyeYaw);
        Math.abs(e) > Sm && (this.goalFeetYaw += e > 0 ? -90 : Sm);
      }
      ((this.goalFeetYaw = wm(this.goalFeetYaw)),
        this.feetYaw !== this.goalFeetYaw &&
          (this.convergeFeet(e), (this.lastTurnTime = this.now)),
        (this.bodyYaw = this.bs.setPoseParam(
          this.pBodyYaw,
          wm(this.eyeYaw - this.feetYaw),
        )));
    }
    convergeFeet(e) {
      let t = wm(this.goalFeetYaw - this.feetYaw),
        n = Math.abs(t),
        r = 1;
      n <= ym && (r = Math.max(0.01, Math.min(1, n / ym)));
      let i = bm * e * r;
      (n > Sm && (i = n - Sm),
        n < i
          ? (this.feetYaw = this.goalFeetYaw)
          : (this.feetYaw += t > 0 ? i : -i),
        (this.feetYaw = wm(this.feetYaw)));
    }
    computeMoveYaw() {
      this.speed > mm &&
        (this.gaitYaw = wm((Math.atan2(this.vy, this.vx) * 180) / Math.PI));
      let e = -(this.eyeYaw - this.gaitYaw);
      ((e -= Math.trunc(e / 360) * 360),
        e < -180 ? (e += 360) : e > 180 && (e -= 360));
      let [t, n] = this.movementRate(),
        r = 0,
        i = 0;
      (n &&
        ((r = Math.cos((e * Math.PI) / 180) * t),
        (i = -Math.sin((e * Math.PI) / 180) * t)),
        this.bs.setPoseParam(this.pMoveX, r),
        this.bs.setPoseParam(this.pMoveY, i));
    }
  },
  Om = 1e-6;
function km(e, t, n, r, i, a, o) {
  let s = Math.sqrt(e * e + t * t + n * n);
  s > 1 && (s = 1);
  let c = Math.sin(Math.asin(s) * i),
    l = c / (s + Om);
  ((a[o] = e * l), (a[o + 1] = t * l), (a[o + 2] = n * l));
  let u = Math.sqrt(Math.max(0, 1 - c * c));
  a[o + 3] = r < 0 ? -u : u;
}
var Am = new Float32Array(4),
  jm = class {
    d;
    q;
    p;
    poseParams;
    world;
    tq = [];
    tp = [];
    layersThisFrame = 0;
    constructor(e) {
      this.d = e;
      let t = e.bones;
      ((this.q = new Float32Array(t * 4)),
        (this.p = new Float32Array(t * 3)),
        (this.world = new Float32Array(t * 12)),
        (this.poseParams = new Float32Array(e.info.poseParams.length)),
        e.info.poseParams.forEach((e, t) => this.setPoseParam(t, 0)));
    }
    temp(e) {
      for (; this.tq.length <= e; )
        (this.tq.push(new Float32Array(this.d.bones * 4)),
          this.tp.push(new Float32Array(this.d.bones * 3)));
      return [this.tq[e], this.tp[e]];
    }
    setPoseParam(e, t) {
      if (e < 0) return t;
      let n = this.d.info.poseParams[e];
      if (n.loop) {
        let e = (n.start + n.end) / 2 + n.loop / 2,
          r = n.loop - e;
        t -= n.loop * Math.floor((t + r) / n.loop);
      }
      let r = (t - n.start) / (n.end - n.start);
      return (
        (r = r < 0 ? 0 : r > 1 ? 1 : r),
        (this.poseParams[e] = r),
        r * (n.end - n.start) + n.start
      );
    }
    getPoseParam(e) {
      if (e < 0) return 0;
      let t = this.d.info.poseParams[e];
      return this.poseParams[e] * (t.end - t.start) + t.start;
    }
    localPose(e, t, n) {
      let r = e.params[t];
      if (r < 0) {
        ((n[0] = 0), (n[1] = 0));
        return;
      }
      let i = this.d.info.poseParams[r],
        a = this.poseParams[r],
        o = e.groupSize[t];
      if (e.poseKeys.length) {
        a = a * (i.end - i.start) + i.start;
        let r = e.poseKeys,
          s = t === 0 ? 0 : e.groupSize[0],
          c = 0,
          l = 0;
        for (;;) {
          if (
            ((l = (a - r[s + c]) / (r[s + c + 1] - r[s + c])),
            c < o - 2 && l > 1)
          ) {
            c++;
            continue;
          }
          break;
        }
        ((n[0] = l < 0 ? 0 : l > 1 ? 1 : l), (n[1] = c));
      } else {
        let r = (e.paramStart[t] - i.start) / (i.end - i.start),
          s = (e.paramEnd[t] - i.start) / (i.end - i.start),
          c = (a - r) / (s - r);
        c = c < 0 ? 0 : c > 1 ? 1 : c;
        let l = 0;
        (o > 2 &&
          ((l = Math.floor(c * (o - 1))),
          l === o - 1 && (l = o - 2),
          (c = c * (o - 1) - l)),
          (n[0] = c),
          (n[1] = l));
      }
    }
    lp0 = [0, 0];
    lp1 = [0, 0];
    cornerA = new Int32Array(4);
    cornerW = new Float32Array(4);
    seqAnims(e) {
      (this.localPose(e, 0, this.lp0), this.localPose(e, 1, this.lp1));
      let [t, n] = this.lp0,
        [r, i] = this.lp1,
        a = e.groupSize[0],
        o = e.groupSize[1],
        s = e.anims.length - 1,
        c = Math.min(n + 1, a - 1),
        l = Math.min(i + 1, o - 1),
        u = 0,
        d = (t, n, r) => {
          r <= 0.001 ||
            ((this.cornerA[u] = e.anims[Math.min(s, n * a + t)]),
            (this.cornerW[u] = r),
            u++);
        };
      return (
        d(n, i, (1 - t) * (1 - r)),
        d(c, i, t * (1 - r)),
        d(n, l, (1 - t) * r),
        d(c, l, t * r),
        u
      );
    }
    cycleRate(e) {
      let t = this.d.seqs[e];
      if (!t) return 0;
      let n = this.seqAnims(t),
        r = 0;
      for (let e = 0; e < n; e++) {
        let t = this.d.info.anims[this.cornerA[e]];
        t.frames > 1 && (r += (t.fps / (t.frames - 1)) * this.cornerW[e]);
      }
      return r;
    }
    initPose() {
      (this.q.set(this.d.restQ),
        this.p.set(this.d.restP),
        (this.layersThisFrame = 0));
    }
    calcPoseSingle(e, t, n, r) {
      (t < 0 || t >= 1) &&
        (e.looping
          ? ((t -= Math.trunc(t)), t < 0 && (t += 1))
          : (t = t < 0 ? 0 : 1));
      let i = this.seqAnims(e),
        a = this.d.bones,
        o = e.active;
      for (let e = 0; e < i; e++) {
        let i = this.cornerA[e],
          s = this.cornerW[e],
          c = this.d.info.anims[i],
          l = this.d.anim(i),
          u = t * (c.frames - 1),
          d = Math.min(c.frames - 1, Math.floor(u)),
          f = Math.min(c.frames - 1, d + 1),
          p = u - d,
          m = d * a * 7,
          h = f * a * 7;
        for (let t = 0; t < o.length; t++) {
          let i = o[t],
            a = m + i * 7,
            c = h + i * 7,
            u = l[a],
            d = l[a + 1],
            f = l[a + 2],
            g = l[a + 3];
          if (p > 0) {
            let e = l[c],
              t = l[c + 1],
              n = l[c + 2],
              r = l[c + 3];
            (u * e + d * t + f * n + g * r < 0 &&
              ((e = -e), (t = -t), (n = -n), (r = -r)),
              (u += (e - u) * p),
              (d += (t - d) * p),
              (f += (n - f) * p),
              (g += (r - g) * p));
          }
          let _ = l[a + 4] + (l[c + 4] - l[a + 4]) * p,
            v = l[a + 5] + (l[c + 5] - l[a + 5]) * p,
            y = l[a + 6] + (l[c + 6] - l[a + 6]) * p,
            b = i * 4,
            x = i * 3;
          if (e === 0)
            ((n[b] = u * s),
              (n[b + 1] = d * s),
              (n[b + 2] = f * s),
              (n[b + 3] = g * s),
              (r[x] = _ * s),
              (r[x + 1] = v * s),
              (r[x + 2] = y * s));
          else {
            let e =
              n[b] * u + n[b + 1] * d + n[b + 2] * f + n[b + 3] * g < 0
                ? -s
                : s;
            ((n[b] += u * e),
              (n[b + 1] += d * e),
              (n[b + 2] += f * e),
              (n[b + 3] += g * e),
              (r[x] += _ * s),
              (r[x + 1] += v * s),
              (r[x + 2] += y * s));
          }
        }
      }
      let s = 0;
      for (let e = 0; e < i; e++) s += this.cornerW[e];
      let c = s > 0 ? 1 / s : 1;
      for (let e = 0; e < o.length; e++) {
        let t = o[e] * 4,
          i = Math.hypot(n[t], n[t + 1], n[t + 2], n[t + 3]) || 1;
        if (
          ((n[t] /= i),
          (n[t + 1] /= i),
          (n[t + 2] /= i),
          (n[t + 3] /= i),
          c !== 1)
        ) {
          let t = o[e] * 3;
          ((r[t] *= c), (r[t + 1] *= c), (r[t + 2] *= c));
        }
      }
    }
    slerpBones(e, t, n, r) {
      if (r <= 0) return;
      r > 1 && (r = 1);
      let i = this.q,
        a = this.p,
        o = e.active,
        s = e.w;
      if (e.delta) {
        for (let c = 0; c < o.length; c++) {
          let l = o[c],
            u = r * s[l];
          if (u <= 0) continue;
          let d = l * 4,
            f = l * 3;
          km(t[d], t[d + 1], t[d + 2], t[d + 3], u, Am, 0);
          let p = Am[0],
            m = Am[1],
            h = Am[2],
            g = Am[3],
            _ = i[d],
            v = i[d + 1],
            y = i[d + 2],
            b = i[d + 3],
            x,
            S,
            C,
            w;
          e.post
            ? ((x = b * p + _ * g + v * h - y * m),
              (S = b * m - _ * h + v * g + y * p),
              (C = b * h + _ * m - v * p + y * g),
              (w = b * g - _ * p - v * m - y * h))
            : ((x = g * _ + p * b + m * y - h * v),
              (S = g * v - p * y + m * b + h * _),
              (C = g * y + p * v - m * _ + h * b),
              (w = g * b - p * _ - m * v - h * y));
          let T = Math.hypot(x, S, C, w) || 1;
          ((i[d] = x / T),
            (i[d + 1] = S / T),
            (i[d + 2] = C / T),
            (i[d + 3] = w / T),
            (a[f] += n[f] * u),
            (a[f + 1] += n[f + 1] * u),
            (a[f + 2] += n[f + 2] * u));
        }
        return;
      }
      for (let e = 0; e < o.length; e++) {
        let c = o[e],
          l = r * s[c];
        if (l <= 0) continue;
        let u = c * 4,
          d = c * 3;
        if (l >= 1) {
          ((i[u] = t[u]),
            (i[u + 1] = t[u + 1]),
            (i[u + 2] = t[u + 2]),
            (i[u + 3] = t[u + 3]),
            (a[d] = n[d]),
            (a[d + 1] = n[d + 1]),
            (a[d + 2] = n[d + 2]));
          continue;
        }
        let f = 1 - l,
          p = t[u],
          m = t[u + 1],
          h = t[u + 2],
          g = t[u + 3];
        i[u] * p + i[u + 1] * m + i[u + 2] * h + i[u + 3] * g < 0 &&
          ((p = -p), (m = -m), (h = -h), (g = -g));
        let _ = i[u] * f + p * l,
          v = i[u + 1] * f + m * l,
          y = i[u + 2] * f + h * l,
          b = i[u + 3] * f + g * l,
          x = Math.hypot(_, v, y, b) || 1;
        ((i[u] = _ / x),
          (i[u + 1] = v / x),
          (i[u + 2] = y / x),
          (i[u + 3] = b / x),
          (a[d] = a[d] * f + n[d] * l),
          (a[d + 1] = a[d + 1] * f + n[d + 1] * l),
          (a[d + 2] = a[d + 2] * f + n[d + 2] * l));
      }
    }
    accumulate(e, t, n, r = 0) {
      if (e < 0 || n <= 0 || r > 6) return;
      n > 1 && (n = 1);
      let i = this.d.seqs[e];
      if (!i) return;
      this.layersThisFrame++;
      let [a, o] = this.temp(r);
      (this.calcPoseSingle(i, t, a, o), this.slerpBones(i, a, o, n));
      for (let e of i.layers) {
        if (e.flags & 4096) continue;
        let i = t,
          a = n;
        if (e.start !== e.end) {
          let r = 1,
            o;
          if (
            ((o =
              e.flags & 16384
                ? e.pose >= 0
                  ? this.getPoseParam(e.pose)
                  : 0
                : t),
            o < e.start || o >= e.end)
          )
            continue;
          (o < e.peak && e.start !== e.peak
            ? (r = (o - e.start) / (e.peak - e.start))
            : o > e.tail &&
              e.end !== e.tail &&
              (r = (e.end - o) / (e.end - e.tail)),
            e.flags & 64 && (r = r * r * (3 - 2 * r)),
            (a =
              e.flags & 128 && o > e.tail
                ? (r * n) / (1 - n + r * n)
                : e.flags & 512
                  ? r
                  : n * r),
            e.flags & 16384 || (i = (t - e.start) / (e.end - e.start)));
        }
        this.accumulate(e.seq, i, a, r + 1);
      }
    }
    buildMatrices() {
      let e = this.q,
        t = this.p,
        n = this.world,
        r = this.d.parent,
        i = this.d.bones;
      for (let a = 0; a < i; a++) {
        let i = e[a * 4],
          o = e[a * 4 + 1],
          s = e[a * 4 + 2],
          c = e[a * 4 + 3],
          l = 1 - 2 * o * o - 2 * s * s,
          u = 2 * i * o - 2 * c * s,
          d = 2 * i * s + 2 * c * o,
          f = 2 * i * o + 2 * c * s,
          p = 1 - 2 * i * i - 2 * s * s,
          m = 2 * o * s - 2 * c * i,
          h = 2 * i * s - 2 * c * o,
          g = 2 * o * s + 2 * c * i,
          _ = 1 - 2 * i * i - 2 * o * o,
          v = t[a * 3],
          y = t[a * 3 + 1],
          b = t[a * 3 + 2],
          x = a * 12,
          S = r[a];
        if (S < 0)
          ((n[x] = l),
            (n[x + 1] = u),
            (n[x + 2] = d),
            (n[x + 3] = v),
            (n[x + 4] = f),
            (n[x + 5] = p),
            (n[x + 6] = m),
            (n[x + 7] = y),
            (n[x + 8] = h),
            (n[x + 9] = g),
            (n[x + 10] = _),
            (n[x + 11] = b));
        else {
          let e = S * 12;
          for (let t = 0; t < 3; t++) {
            let r = n[e + t * 4],
              i = n[e + t * 4 + 1],
              a = n[e + t * 4 + 2],
              o = n[e + t * 4 + 3];
            ((n[x + t * 4] = r * l + i * f + a * h),
              (n[x + t * 4 + 1] = r * u + i * p + a * g),
              (n[x + t * 4 + 2] = r * d + i * m + a * _),
              (n[x + t * 4 + 3] = r * v + i * y + a * b + o));
          }
        }
      }
      return n;
    }
  };
function Mm(e, t, n, r, i, a) {
  for (let o = 0; o < 3; o++) {
    let s = e[t + o * 4],
      c = e[t + o * 4 + 1],
      l = e[t + o * 4 + 2],
      u = e[t + o * 4 + 3];
    ((i[a + o] = s * n[r] + c * n[r + 4] + l * n[r + 8]),
      (i[a + 4 + o] = s * n[r + 1] + c * n[r + 5] + l * n[r + 9]),
      (i[a + 8 + o] = s * n[r + 2] + c * n[r + 6] + l * n[r + 10]),
      (i[a + 12 + o] = s * n[r + 3] + c * n[r + 7] + l * n[r + 11] + u));
  }
  ((i[a + 3] = 0), (i[a + 7] = 0), (i[a + 11] = 0), (i[a + 15] = 1));
}
function Nm(e, t, n, r, i, a) {
  for (let o = 0; o < 3; o++) {
    let s = e[t + o * 4],
      c = e[t + o * 4 + 1],
      l = e[t + o * 4 + 2],
      u = e[t + o * 4 + 3];
    ((i[a + o * 4] = s * n[r] + c * n[r + 4] + l * n[r + 8]),
      (i[a + o * 4 + 1] = s * n[r + 1] + c * n[r + 5] + l * n[r + 9]),
      (i[a + o * 4 + 2] = s * n[r + 2] + c * n[r + 6] + l * n[r + 10]),
      (i[a + o * 4 + 3] = s * n[r + 3] + c * n[r + 7] + l * n[r + 11] + u));
  }
}
var Pm = { hoodie: 0, trim: 1, glove: 6 },
  Fm = { base: 0, fingers: 1, tips: 2, strap: 3, detail: 4, paw: 5 },
  G = {
    knit: 0,
    leather: 1,
    perf: 2,
    wrap: 3,
    rubber: 4,
    fuzz: 5,
    plate: 6,
    canvas: 7,
    velcro: 8,
    metal: 9,
  },
  Im = new Map();
function Lm(e, t) {
  let n = 16 + e + 8 * t,
    r = Im.get(n);
  return (r || Im.set(n, (r = { code: n })), r);
}
var Rm = (e) => ({ code: 3 + e }),
  zm = Rm(Pm.hoodie),
  Bm = Rm(Pm.trim),
  Vm = Rm(Pm.glove),
  Hm = { code: 1 },
  Um = {
    R: {
      arm: `Right_Arm`,
      hand: `Right_Hand`,
      wrist: `R_wrist_helper`,
      thumb: [`Right_Thumb01`, `Right_Thumb02`, `Right_Thumb03`],
      f: `Right_`,
    },
    L: {
      arm: `Left_Arm`,
      hand: `Left_Hand`,
      wrist: `L_wrist_helper`,
      thumb: [`Left_Thumb01`, `Left_Thumb_02`, `Left_Thumb03`],
      f: `Left_`,
    },
  },
  Wm = [
    [`Index`, 0.4, 0.92],
    [`Middle`, 0.42, 0.98],
    [`Ring`, 0.4, 0.92],
    [`Pinky`, 0.35, 0.8],
  ],
  Gm = (e) => [
    [-1.1, 1.3, 0.92],
    [-0.2, 1.42, 0.95],
    [0.5, 1.5, 0.92],
    [e * 0.55, 1.62, 0.86],
    [e - 0.25, 1.62, 0.74],
    [e + 0.3, 1.42, 0.6],
  ],
  Km = [1.05, 1.02, 0.98, 0.95, 0.93, 0.9, 0.86, 0.76, 0.42],
  qm = [0.72, 0.62, 0.5, 0.47, 0.46, 0.43, 0.37, 0.2];
function Jm(e, t) {
  let n = Um[t],
    r = (t) => e.bone(t),
    i = (t) => e.at(t),
    a = r(n.arm),
    o = r(n.hand),
    s = r(n.wrist),
    c = i(n.arm),
    l = i(n.hand),
    u = z(L(l, c)),
    d = Vc(L(l, c)),
    f = Wm.map(([e]) => i(`${n.f}${e}01`)),
    p = R(
      f.reduce((e, t) => I(e, t), [0, 0, 0]),
      1 / f.length,
    ),
    m = z(L(p, l)),
    [, h, g] = qc(m, z(L(f[0], f[3]))),
    _ = zc(g, L(i(n.thumb[1]), l)) > 0 ? g : R(g, -1),
    v = Vc(L(p, l)),
    [, y, b] = qc(u, Math.abs(u[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0]),
    x = [];
  for (let [t, a, s] of Wm) {
    let c = [1, 2, 3].map((e) => `${n.f}${t}0${e}`),
      l = c.map(r),
      u = c.map(i),
      d = e.axis(c[2], 0),
      f = z(L(u[1], u[0])),
      p = I(u[2], R(d, s)),
      m = [
        L(u[0], R(f, 0.6)),
        u[0],
        Hc(u[0], u[1], 0.5),
        u[1],
        Hc(u[1], u[2], 0.5),
        u[2],
        Hc(u[2], p, 0.55),
        L(p, R(d, 0.16)),
        p,
      ],
      g = [
        [[o, 1]],
        Wc(o, l[0], 0.5),
        [[l[0], 1]],
        Wc(l[0], l[1], 0.5),
        [[l[1], 1]],
        Wc(l[1], l[2], 0.5),
        [[l[2], 1]],
        [[l[2], 1]],
        [[l[2], 1]],
      ];
    x.push({
      thumb: !1,
      path: m,
      ru: Km.map((e) => a * e * 1.04),
      rv: Km.map((e) => a * e * 0.94),
      w: g,
      ref: () => h,
      bones: l,
    });
  }
  {
    let t = n.thumb.map(r),
      a = n.thumb.map(i),
      s = e.axis(n.thumb[2], 0),
      c = I(a[2], R(s, 1.02)),
      l = [
        L(a[0], R(z(L(a[1], a[0])), 0.4)),
        Hc(a[0], a[1], 0.45),
        a[1],
        Hc(a[1], a[2], 0.5),
        a[2],
        Hc(a[2], c, 0.55),
        L(c, R(s, 0.16)),
        c,
      ],
      u = [
        [
          [o, 0.6],
          [t[0], 0.4],
        ],
        [[t[0], 1]],
        Wc(t[0], t[1], 0.5),
        [[t[1], 1]],
        Wc(t[1], t[2], 0.5),
        [[t[2], 1]],
        [[t[2], 1]],
        [[t[2], 1]],
      ];
    x.push({
      thumb: !0,
      path: l,
      ru: qm.map((e) => e * 1.05),
      rv: qm.map((e) => e * 0.95),
      w: u,
      ref: (e) => Bc(e, _),
      bones: t,
    });
  }
  return {
    side: t,
    arm: a,
    hand: o,
    twist: s,
    root: c,
    wrist: l,
    dA: u,
    L: d,
    ax: m,
    wAx: h,
    palmN: _,
    palmL: v,
    digits: x,
    fu: y,
    fv: b,
  };
}
var Ym = (e) => `${e[0].toFixed(4)},${e[1].toFixed(4)},${e[2].toFixed(4)}`,
  Xm = 4;
function Zm(e, t, n) {
  let r = e.length,
    i = e[0].length,
    a = n ? i : i - 1,
    o = e
      .slice(0, -1)
      .map((e, n) => Array.from({ length: a }, (e, r) => t(n, r).code)),
    s = e.map((e, t) =>
      e.map((e, i) => {
        let s = new Set();
        for (let e of [t - 1, t])
          if (!(e < 0 || e >= r - 1))
            for (let t of [i - 1, i]) {
              let r = n ? (t + a) % a : t;
              r < 0 || r >= a || s.add(o[e][r]);
            }
        return s.size > 1 ? 0 : 9;
      }),
    );
  for (let t = 0, a = !0; a && t < r + i; t++) {
    a = !1;
    for (let t = 0; t < r; t++)
      for (let o = 0; o < i; o++) {
        let c = [
          [t - 1, o],
          [t + 1, o],
          [t, n ? (o + 1) % i : o + 1],
          [t, n ? (o - 1 + i) % i : o - 1],
        ];
        for (let [n, l] of c) {
          if (n < 0 || n >= r || l < 0 || l >= i) continue;
          let c = s[n][l] + Vc(L(e[n][l], e[t][o]));
          c < s[t][o] - 1e-6 && ((s[t][o] = c), (a = !0));
        }
      }
  }
  return s.map((e) => e.map((e) => Math.min(9, e)));
}
function Qm(e, t, n) {
  let r = new Map(),
    i = n.fin ?? (() => [9, 0, 0]),
    a = Zm(t, n.paint, n.closed ?? !0);
  t.forEach((e, t) => {
    e.forEach((e, n) => {
      let [o, s, c] = i(t, n);
      r.set(Ym(e), [Math.min(o, a[t][n]), s, Xm, c]);
    });
    let n = R(
        e.reduce((e, t) => I(e, t), [0, 0, 0]),
        1 / e.length,
      ),
      [, o, s] = i(t, 0);
    r.has(Ym(n)) || r.set(Ym(n), [9, o, Xm, s]);
  });
  let o = [9, 0, Xm, 0];
  ((e.finish = (e) => r.get(Ym(e)) ?? o),
    e.surface(t, {
      paint: n.paint,
      weight: (e, t, r) => n.weight(t, r),
      capStart: n.capStart,
      capEnd: n.capEnd,
      closed: n.closed,
    }),
    (e.finish = null));
}
function $m(e) {
  let t = [0];
  for (let n = 1; n < e.length; n++) t.push(t[n - 1] + Vc(L(e[n], e[n - 1])));
  return t;
}
function eh(e, t) {
  let n = 9;
  for (let r of t) n = Math.min(n, Math.abs(e - r));
  return n;
}
function th(e, t, n) {
  let r = Gm(t.palmL),
    i = (e) => {
      if (e <= r[0][0]) return [r[0][1], r[0][2]];
      for (let t = 0; t + 1 < r.length; t++) {
        let [n, i, a] = r[t],
          [o, s, c] = r[t + 1];
        if (e <= o) {
          let t = (e - n) / (o - n);
          return [i + (s - i) * t, a + (c - a) * t];
        }
      }
      let t = r[r.length - 1];
      return [t[1], t[2]];
    },
    a = [...new Set([...r.map((e) => e[0]), ...(n.rows ?? [])])].sort(
      (e, t) => e - t,
    ),
    o = (e) => -Math.sin((e / 16) * Math.PI * 2),
    s = (e) => Math.cos((e / 16) * Math.PI * 2),
    c = a.map((e, r) => {
      let [a, c] = i(e),
        l = I(I(t.wrist, R(t.ax, e)), R(t.palmN, 0.08)),
        u = V(l, t.wAx, t.palmN, a, c, 16, 2.7);
      return n.bulge
        ? u.map((t, i) => {
            let a = n.bulge({ i: r, s: e, bn: o(i), ac: s(i) });
            return a ? I(t, R(z(L(t, l)), a)) : t;
          })
        : u;
    }),
    l = (e) => (a[e] + a[Math.min(a.length - 1, e + 1)]) / 2;
  Qm(e, c, {
    paint: (e, t) => n.paint({ i: e, s: l(e), bn: o(t + 0.5), ac: s(t + 0.5) }),
    weight: (e) =>
      a[e] < 0.3
        ? [
            [t.hand, 0.6],
            [t.twist, 0.4],
          ]
        : [[t.hand, 1]],
    fin: (e, t) => {
      let r = { i: e, s: a[e], bn: o(t), ac: s(t) };
      return [9, a[e], n.wear?.(r) ?? 0];
    },
    capStart: n.paint({ i: 0, s: a[0], bn: 0, ac: 0 }),
    capEnd: n.paint({ i: a.length - 1, s: a[a.length - 1], bn: 0.3, ac: 0 }),
  });
}
function nh(e, t, n) {
  t.digits.forEach((r, i) => {
    let a = r.path.length,
      o = $m(r.path),
      s = n.scale ?? 1,
      c = r.path,
      l = r.path.map((e, t) => {
        let n = z(
            L(r.path[Math.min(a - 1, t + 1)], r.path[Math.max(0, t - 1)]),
          ),
          [, i, o] = qc(n, r.ref(n));
        return [i, o];
      }),
      u = (e, n) => {
        let r = (n / 10) * Math.PI * 2,
          [i, a] = l[e];
        return -zc(z(I(R(i, Math.cos(r)), R(a, Math.sin(r)))), t.palmN);
      },
      d = (e, n) => {
        let r = (n / 10) * Math.PI * 2,
          [i, a] = l[e];
        return zc(z(I(R(i, Math.cos(r)), R(a, Math.sin(r)))), t.wAx);
      };
    Qm(
      e,
      c.map((e, t) => {
        let [a, c] = l[t],
          f = V(e, a, c, r.ru[t] * s, r.rv[t] * s, 10, 2.25);
        return n.bulge
          ? f.map((r, a) => {
              let s = u(t, a);
              if (s <= 0) return r;
              let c =
                n.bulge({ i: t, s: o[t], bn: s, ac: d(t, a) }, i) *
                B(0, 0.6, s);
              return c ? I(r, R(z(L(r, e)), c)) : r;
            })
          : f;
      }),
      {
        paint: (e, t) =>
          n.paint(
            {
              i: e,
              s: (o[e] + o[Math.min(a - 1, e + 1)]) / 2,
              bn: (u(e, t) + u(e, t + 1)) / 2,
              ac: (d(e, t) + d(e, t + 1)) / 2,
            },
            i,
          ),
        weight: (e) => r.w[e],
        fin: (e, t) => {
          let r = { i: e, s: o[e], bn: u(e, t), ac: d(e, t) };
          return [9, o[e], n.wear?.(r, i) ?? 0];
        },
        capStart: n.paint({ i: 0, s: 0, bn: 0, ac: 0 }, i),
        capEnd: n.paint({ i: a - 2, s: o[a - 1], bn: 0, ac: 0 }, i),
      },
    );
  });
}
function rh(e, t, n, r = 0) {
  let i = Gm(e.palmL),
    a = i[i.length - 1][1],
    o = i[i.length - 1][2];
  for (let e = 0; e + 1 < i.length; e++)
    if (t <= i[e + 1][0]) {
      let n = Uc((t - i[e][0]) / (i[e + 1][0] - i[e][0]), 0, 1);
      ((a = i[e][1] + (i[e + 1][1] - i[e][1]) * n),
        (o = i[e][2] + (i[e + 1][2] - i[e][2]) * n));
      break;
    }
  let s = n * a,
    c = o * Math.max(0, 1 - Math.abs(n) ** 2.7) ** (1 / 2.7);
  return I(I(I(e.wrist, R(e.ax, t)), R(e.palmN, 0.08 - c - r)), R(e.wAx, s));
}
function ih(e, t, n, r, i, a = {}) {
  let o = Gm(t.palmL),
    s = a.N ?? 16,
    c = (e) => {
      for (let t = 0; t + 1 < o.length; t++)
        if (e <= o[t + 1][0]) {
          let n = Uc((e - o[t][0]) / (o[t + 1][0] - o[t][0]), 0, 1);
          return [
            o[t][1] + (o[t + 1][1] - o[t][1]) * n,
            o[t][2] + (o[t + 1][2] - o[t][2]) * n,
          ];
        }
      return [o[o.length - 1][1], o[o.length - 1][2]];
    };
  Qm(
    e,
    n.map((e, n) => {
      let [i, a] = c(e),
        o = I(I(t.wrist, R(t.ax, e)), R(t.palmN, 0.08)),
        l = [];
      for (let e = 0; e < s; e++) {
        let c = r(n, e);
        l.push(V(o, t.wAx, t.palmN, i + c, a + c, s, 2.7)[e]);
      }
      return l;
    }),
    {
      paint: i,
      weight: (e) =>
        n[e] < 0.3
          ? [
              [t.hand, 0.6],
              [t.twist, 0.4],
            ]
          : [[t.hand, 1]],
      fin: (e) => [eh(n[e], a.seams ?? []), n[e], a.wear?.(e) ?? 0],
    },
  );
}
function ah(e, t, n, r, i = {}) {
  let a = i.N ?? 16;
  Qm(
    e,
    n.map(([e, n], r) => {
      let o = I(t.root, R(t.dA, e)),
        s = V(o, t.fu, t.fv, n * 0.86, n * 0.84, a, 2.15);
      return i.wobble
        ? s.map((e, t) =>
            I(e, R(z(L(e, o)), i.wobble(r, (t / a) * Math.PI * 2))),
          )
        : s;
    }),
    {
      paint: r,
      weight: (e) => {
        let r = n[e][0],
          i = Uc((r - (t.L - 3.2)) / 3.4, 0, 1),
          a = B(t.L - 0.2, t.L + 1.6, r) * 0.55;
        return i <= 0
          ? [[t.arm, 1]]
          : [
              [t.arm, (1 - 0.45 * i) * (1 - a)],
              [t.twist, 0.45 * i * (1 - a)],
              [t.hand, a],
            ];
      },
      fin: (e) => [eh(n[e][0], i.seams ?? []), n[e][0], i.wear?.(e) ?? 0],
    },
  );
}
function oh(e, t, n, r, i, a, o, s, c, l = 8, u = { seam: 9, wear: 0 }) {
  let [, d] = qc(n, r),
    f = Bc(n, d);
  Qm(
    e,
    [
      V(L(t, R(n, 0.07)), d, f, i, a, l),
      V(I(t, R(n, o * 0.62)), d, f, i * 0.86, a * 0.86, l),
      V(I(t, R(n, o)), d, f, i * 0.45, a * 0.45, l),
    ],
    {
      paint: () => s,
      weight: () => c,
      fin: (e) => [e === 0 ? 0.02 : u.seam, e, u.wear],
      capEnd: s,
    },
  );
}
function sh(e, t, n, r, i, a, o, s = 0) {
  let c = t.map((e, a) => {
      let o = z(L(t[Math.min(t.length - 1, a + 1)], t[Math.max(0, a - 1)])),
        s = z(L(i(a), R(o, zc(i(a), o))));
      return V(e, Bc(o, s), s, n(a), r, 6, 3);
    }),
    l = $m(t);
  Qm(e, c, {
    paint: () => a,
    weight: (e) => o(e),
    fin: (e) => [9, l[e], s * (e / (t.length - 1))],
    capStart: a,
    capEnd: a,
  });
}
function ch(e, t, n = 1 / 0) {
  let r = t.L,
    i = [
      [-14, 2.55, 0],
      [-7, 2.45, 0],
      [-2, 2.35, 0],
      [2, 2.22, 0],
      [r - 3.2, 2, 0],
      [r - 1.35, 1.9, 0],
      [r - 1.15, 2.12, 1],
      [r - 0.2, 2.16, 1],
      [r + 0.35, 2.1, 1],
      [r + 0.62, 1.78, 1],
    ].filter((e) => e[0] <= n),
    a = i.map(([e, n], r) => {
      let i = r === 5 ? 0.97 : 1;
      return V(
        I(t.root, R(t.dA, e)),
        t.fu,
        t.fv,
        n * 0.86 * i,
        n * 0.84 * i,
        18,
        2.15,
      );
    });
  e.surface(a, {
    paint: (e) => (i[e][2] ? Bm : zm),
    weight: (e, n) => {
      let a = i[n][0],
        o = Math.max(0, Math.min(1, (a - (r - 3.2)) / 3.4));
      return o <= 0
        ? [[t.arm, 1]]
        : [
            [t.arm, 1 - 0.45 * o],
            [t.twist, 0.45 * o],
          ];
    },
    capStart: zm,
    capEnd: i[i.length - 1][2] ? Bm : zm,
  });
}
function lh(e, t) {
  let { wrist: n, ax: r, wAx: i, palmN: a, palmL: o, hand: s, twist: c } = t,
    l = Gm(o),
    u = l.map(([e, t, o]) =>
      V(I(I(n, R(r, e)), R(a, 0.08)), i, a, t, o, 16, 2.7),
    );
  e.surface(u, {
    paint: () => Vm,
    weight: (e, t) =>
      l[t][0] < 0.3
        ? [
            [s, 0.6],
            [c, 0.4],
          ]
        : [[s, 1]],
    capStart: Vm,
    capEnd: Vm,
  });
  let d = o * 0.3,
    f = [];
  for (let e = 0; e <= 6; e++) f.push(rh(t, d, -0.9 + (1.8 * e) / 6, 0.02));
  e.tube(
    f,
    0.17,
    6,
    r,
    () => Hm,
    () => [
      [s, 0.75],
      [c, 0.25],
    ],
  );
  for (let n of t.digits) {
    let t = n.path.length,
      r = n.path.map((e, r) => {
        let i = z(
            L(n.path[Math.min(t - 1, r + 1)], n.path[Math.max(0, r - 1)]),
          ),
          [, a, o] = qc(i, n.ref(i));
        return V(e, a, o, n.ru[r], n.rv[r], 10, 2.25);
      });
    e.surface(r, {
      paint: () => Vm,
      weight: (e, t) => n.w[t],
      capStart: Vm,
      capEnd: Vm,
    });
  }
}
var K = Lm,
  q = Fm,
  uh = (e, t) => (t < 4 ? e.i >= 5 : e.i >= 4),
  dh = (e, t) => (t < 4 ? e.i >= 1 && e.i <= 2 : e.i >= 2 && e.i <= 3),
  fh = (e, t) =>
    Math.max(
      uh(e, t) ? 0.4 + 0.6 * B(0.85, 1, e.s / 4.2) : 0,
      e.bn > 0.6 && (t < 4 ? e.i === 1 || e.i === 3 : e.i === 2) ? 0.7 : 0,
    ),
  ph = (e) => (t) => (t.bn > 0.55 && t.s > e.palmL - 0.4 ? 0.8 : 0),
  mh = (e, t) => {
    let n = t.palmL,
      r = 1.38,
      i = n - 0.2,
      a = n * 0.62,
      o = n * 0.72;
    (th(e, t, {
      rows: [r, a, o, i],
      paint: (e) =>
        e.bn > 0.42 && e.s > r && e.s < i
          ? e.s > a && e.s < o
            ? K(q.tips, G.knit)
            : K(q.fingers, G.rubber)
          : e.bn < -0.55 && e.s > r
            ? K(q.fingers, G.rubber)
            : K(q.base, G.knit),
      bulge: (e) =>
        e.bn > 0.3 && e.s > r && e.s < i
          ? 0.13 * B(0.3, 0.75, e.bn) * B(r, 1.73, e.s) * B(i, i - 0.35, e.s)
          : 0,
      wear: ph(t),
    }),
      nh(e, t, {
        paint: (e, t) =>
          Math.abs(e.bn) < 0.42 && e.i >= 1 && !uh(e, t)
            ? K(q.fingers, G.perf)
            : t === 4 && e.i <= 1 && e.bn < -0.2
              ? K(q.fingers, G.rubber)
              : K(q.base, G.knit),
        wear: fh,
      }),
      ih(
        e,
        t,
        [0.6, 0.68, 1.2, 1.28],
        (e) => (e === 0 || e === 3 ? 0.06 : 0.13),
        () => K(q.strap, G.knit),
        { seams: [0.68, 1.2], wear: (e) => (e === 0 || e === 3 ? 0.6 : 0) },
      ),
      sh(
        e,
        [0.15, -0.2, -0.55, -0.82].map((e) => rh(t, 0.94, e, 0.17)),
        (e) => (e === 3 ? 0.22 : 0.27),
        0.05,
        () => R(t.palmN, -1),
        K(q.tips, G.knit),
        () => [[t.hand, 1]],
        0.5,
      ));
  },
  hh = (e, t) => {
    let n = t.palmL,
      r = 0.62,
      i = 1.45,
      a = n * 0.62;
    (th(e, t, {
      rows: [r, i, a],
      paint: (e) =>
        e.bn > 0.5 && e.s > 0.57 && e.s < i
          ? K(q.paw, G.fuzz)
          : e.bn > 0.35 && e.s > a
            ? K(q.base, G.perf)
            : e.s < r
              ? K(q.strap, G.leather)
              : K(q.base, G.leather),
      wear: ph(t),
    }),
      nh(e, t, {
        scale: 0.97,
        paint: (e, t) =>
          e.bn > 0.35 && dh(e, t)
            ? K(q.base, G.perf)
            : uh(e, t) && e.bn < -0.3
              ? K(q.tips, G.leather)
              : K(t === 4 ? q.base : q.fingers, G.leather),
        wear: fh,
      }),
      sh(
        e,
        [-0.78, -0.4, 0, 0.4, 0.78].map((e) => rh(t, 1.05, e, 0.035)),
        (e) => (e === 0 || e === 4 ? 0.2 : 0.24),
        0.045,
        () => R(t.palmN, -1),
        K(q.strap, G.leather),
        () => [[t.hand, 1]],
        0.4,
      ),
      oh(
        e,
        rh(t, 1.05, 0.38, 0.09),
        R(t.palmN, -1),
        t.ax,
        0.16,
        0.16,
        0.09,
        K(q.detail, G.metal),
        [[t.hand, 1]],
        8,
      ),
      ih(
        e,
        t,
        [0.5, 0.58, 0.68],
        (e) => (e === 1 ? 0.09 : 0.04),
        () => K(q.strap, G.leather),
        { wear: () => 0.5 },
      ));
  },
  gh = (e, t) => {
    let n = t.palmL;
    (th(e, t, {
      rows: [0.62, n * 0.62],
      paint: (e) => (e.s < 0.6 ? K(q.paw, G.fuzz) : K(q.base, G.wrap)),
      bulge: (e) =>
        e.s > 0.6
          ? 0.05 + (e.bn > 0.4 && e.s > n * 0.62 ? 0.09 * B(0.4, 0.8, e.bn) : 0)
          : 0,
      wear: ph(t),
    }),
      nh(e, t, {
        paint: (e, t) =>
          (t < 4 ? e.i <= 2 : e.i <= 1)
            ? K(q.fingers, G.wrap)
            : K(q.paw, G.fuzz),
        bulge: (e, t) => ((t < 4 ? e.i <= 3 : e.i <= 2) ? 0.06 : 0),
        wear: (e, t) => ((t < 4 ? e.i === 3 : e.i === 2) ? 0.8 : 0),
      }),
      ih(
        e,
        t,
        [0.5, 0.58, 0.82, 0.9, 1.15, 1.25],
        (e) => [0.08, 0.2, 0.2, 0.15, 0.17, 0.08][e],
        () => K(q.strap, G.wrap),
        { seams: [0.86], wear: (e) => (e === 0 || e === 5 ? 0.7 : 0.2) },
      ));
    for (let [n, r, i] of [
      [-0.95, 1.5, 0],
      [-0.8, 1.15, 0.22],
    ]) {
      let a = rh(t, 0.95 + i, n, 0.16),
        o = [];
      for (let e = 0; e <= 4; e++) {
        let n = e / 4;
        o.push(
          I(
            I(I(a, R(t.ax, -r * n * 0.35)), R(t.wAx, -r * n * 0.6)),
            R(t.palmN, 0.7 * r * n * n),
          ),
        );
      }
      sh(
        e,
        o,
        (e) => 0.24 - e * 0.02,
        0.035,
        () => t.wAx,
        K(q.base, G.wrap),
        (e) =>
          e < 2
            ? [[t.hand, 1]]
            : [
                [t.hand, 0.6],
                [t.twist, 0.4],
              ],
        0.9,
      );
    }
  },
  _h = (e, t) => {
    let n = t.palmL,
      r = n * 0.66;
    (th(e, t, {
      rows: [1, r],
      paint: (e) =>
        e.bn > 0.4 && e.s > 1 && e.s < r
          ? K(q.fingers, G.rubber)
          : e.bn < -0.5 && e.s > 1
            ? K(q.fingers, G.leather)
            : K(q.base, G.knit),
      bulge: (e) =>
        e.bn > 0.3 && e.s > 1 && e.s < r
          ? 0.1 * B(0.3, 0.7, e.bn) * B(1, 1.3, e.s) * B(r, r - 0.3, e.s)
          : 0,
      wear: ph(t),
    }),
      nh(e, t, {
        paint: (e, t) =>
          e.bn > 0.35 && (t < 4 ? e.i === 3 || e.i === 4 : e.i === 3)
            ? K(q.fingers, G.rubber)
            : K(q.base, G.knit),
        bulge: (e, t) =>
          (t < 4 ? e.i >= 3 && e.i <= 4 : e.i === 3) ? 0.06 : 0,
        wear: fh,
      }));
    {
      let r = n - 0.12,
        i = [];
      for (let e = 0; e <= 6; e++)
        i.push(rh(t, r, -0.86 + (1.72 * e) / 6, 0.1));
      Qm(
        e,
        i.map((e, n) => {
          let r = z(L(i[Math.min(6, n + 1)], i[Math.max(0, n - 1)])),
            a = z(L(R(t.palmN, -1), R(r, zc(R(t.palmN, -1), r))));
          return V(e, z(Bc(a, r)), a, 0.5, 0.17, 8, 3.2);
        }),
        {
          paint: () => K(q.tips, G.plate),
          weight: () => [[t.hand, 1]],
          fin: (e, t) => [
            t === 0 || t === 4 ? 0.12 : 9,
            e * 0.3,
            e === 0 || e === 6 ? 0.8 : 0.35,
          ],
          capStart: K(q.tips, G.plate),
          capEnd: K(q.tips, G.plate),
        },
      );
    }
    for (let n of t.digits) {
      let [r, i] = n.thumb ? [2, 4] : [1, 3],
        a = Hc(n.path[r], n.path[i], 0.55),
        o = z(L(n.path[i], n.path[r])),
        s = z(L(R(t.palmN, -1), R(o, zc(R(t.palmN, -1), o)))),
        c = n.thumb
          ? z(
              I(
                s,
                R(z(Bc(o, t.palmN)), zc(Bc(o, t.palmN), t.wAx) > 0 ? -xh : xh),
              ),
            )
          : s;
      oh(
        e,
        I(a, R(c, (n.thumb ? n.ru[r + 1] : n.rv[2]) * 0.92)),
        c,
        o,
        n.thumb ? 0.5 : 0.42,
        0.3,
        0.14,
        K(q.tips, G.plate),
        [[n.bones[+!!n.thumb], 1]],
        6,
        { seam: 9, wear: 0.6 },
      );
    }
    let i = t.L;
    (ah(
      e,
      t,
      [
        [i - 1.45, 2.14],
        [i - 1.3, 2.26],
        [i + 0.1, 2.3],
        [i + 0.5, 2.18],
        [i + 0.68, 1.96],
      ],
      () => K(q.strap, G.leather),
      {
        N: 16,
        seams: [i - 1.3, i + 0.5],
        wear: (e) => (e === 0 || e === 4 ? 0.8 : 0.15),
      },
    ),
      ah(
        e,
        t,
        [
          [i - 0.75, 2.33],
          [i - 0.45, 2.41],
          [i - 0.15, 2.34],
        ],
        () => K(q.tips, G.rubber),
        { N: 16, seams: [i - 0.6, i - 0.3], wear: () => 0.3 },
      ));
  },
  vh = (e, t) => {
    let n = t.palmL,
      r = n - 0.35;
    (th(e, t, {
      rows: [1, n * 0.5, r],
      paint: (e) =>
        e.bn > 0.35 && e.s > r
          ? K(q.tips, G.rubber)
          : e.bn < -0.45 && e.s > 1
            ? K(q.fingers, G.rubber)
            : e.bn > 0.6 && e.s > n * 0.5
              ? K(q.fingers, G.knit)
              : K(q.base, G.leather),
      bulge: (e) => (e.bn > 0.3 && e.s > r ? 0.08 * B(0.3, 0.7, e.bn) : 0),
      wear: ph(t),
    }),
      nh(e, t, {
        paint: (e, t) =>
          uh(e, t)
            ? K(q.paw, G.fuzz)
            : e.bn < -0.3 && e.i >= 1
              ? K(q.fingers, G.rubber)
              : K(q.base, G.leather),
        wear: (e, t) => ((t < 4 ? e.i === 4 : e.i === 3) ? 0.9 : fh(e, t)),
      }));
    let i = t.L;
    (ah(
      e,
      t,
      [
        [i - 1.9, 2.2],
        [i - 1.75, 2.36],
        [i - 0.6, 2.3],
        [i + 0.3, 2.2],
        [i + 0.5, 2.12],
        [i + 0.68, 1.96],
      ],
      () => K(q.strap, G.leather),
      { seams: [i - 1.75, i + 0.5], wear: (e) => (e <= 1 ? 0.8 : 0.1) },
    ),
      ah(
        e,
        t,
        [
          [i - 1, 2.31],
          [i - 0.95, 2.4],
          [i - 0.2, 2.34],
          [i - 0.15, 2.25],
        ],
        () => K(q.fingers, G.velcro),
        { seams: [i - 0.95, i - 0.2] },
      ));
    {
      let n = I(t.root, R(t.dA, i - 1.75)),
        r = R(t.fv, -1);
      sh(
        e,
        [0, 0.35, 0.7].map((e) =>
          I(I(n, R(r, 2.36 * 0.84 - 0.02)), R(t.dA, -e)),
        ),
        () => 0.3,
        0.05,
        () => r,
        K(q.tips, G.rubber),
        () => [[t.arm, 1]],
        0.6,
      );
    }
  },
  yh = (e, t) => {
    let n = t.palmL;
    (th(e, t, {
      paint: () => K(q.base, G.fuzz),
      bulge: (e) => (e.bn > 0.2 ? 0.04 : 0),
    }),
      nh(e, t, {
        paint: (e, t) =>
          uh(e, t) && (e.bn < -0.25 || e.i >= (t < 4 ? 7 : 6))
            ? K(q.tips, G.rubber)
            : K(q.fingers, G.fuzz),
        bulge: () => 0.05,
      }));
    let r = R(t.palmN, -1);
    oh(
      e,
      rh(t, n * 0.42, 0.04, 0.02),
      r,
      t.ax,
      0.62,
      0.52,
      0.13,
      K(q.tips, G.rubber),
      [[t.hand, 1]],
      10,
    );
    for (let [i, a, o] of [
      [n * 0.75, -0.6, 0.21],
      [n * 0.82, -0.2, 0.23],
      [n * 0.82, 0.22, 0.23],
      [n * 0.75, 0.62, 0.21],
    ])
      oh(
        e,
        rh(t, i, a, 0.02),
        r,
        t.ax,
        o * 1.15,
        o,
        0.1,
        K(q.tips, G.rubber),
        [[t.hand, 1]],
        8,
      );
    ih(
      e,
      t,
      [0.45, 0.6, 0.85, 1.1, 1.22],
      (e, t) =>
        [0.06, 0.26, 0.32, 0.24, 0.06][e] +
        (e > 0 && e < 4 ? 0.07 * Math.sin(t * 2.1 + e) : 0),
      () => K(q.strap, G.fuzz),
      { N: 18 },
    );
  },
  bh = (e, t) => {
    let n = t.palmL;
    (th(e, t, {
      rows: [n * 0.45],
      paint: (e) =>
        e.bn < -0.5 && e.s > n * 0.45
          ? K(q.tips, G.rubber)
          : K(q.base, G.canvas),
      wear: ph(t),
    }),
      nh(e, t, {
        paint: (e, t) =>
          (t < 4 ? e.i >= 4 : e.i >= 3)
            ? K(q.tips, G.rubber)
            : K(q.fingers, G.canvas),
        wear: fh,
      }),
      ih(
        e,
        t,
        [0.5, 0.58, 1.1, 1.18],
        (e) => (e === 0 || e === 3 ? 0.06 : 0.13),
        () => K(q.strap, G.knit),
        { seams: [0.58, 1.1], wear: (e) => (e === 3 ? 0.6 : 0.1) },
      ));
  },
  xh = -2.5,
  Sh = {
    sport: mh,
    driver: hh,
    wraps: gh,
    moto: _h,
    specialist: vh,
    paws: yh,
    garden: bh,
  },
  Ch = { moto: -1.3, specialist: -1.3 };
function wh(e, t = `knit`) {
  let n = _l();
  for (let r of [`R`, `L`]) {
    let i = Jm(n, r),
      a = Ch[t];
    (ch(e, i, a === void 0 ? 1 / 0 : i.L + a),
      t === `knit` ? lh(e, i) : Sh[t](e, i));
  }
}
var Th = { code: 3 + Pm.glove },
  J = Lm,
  Y = Fm;
function Eh(e, t) {
  let n = il(),
    r = (e) => n.at(`${t}_${e}`),
    i = n.bone(`${t}_Hand`),
    a = n.bone(`${t}_Forearm`),
    o = r(`Hand`),
    s = r(`Forearm`),
    c = r(`Finger1`),
    l = r(`Finger2`),
    u = Hc(c, l, 0.62),
    d = z(L(u, o)),
    [, f, p] = qc(d, z(L(c, l))),
    m = Dh(p, L(r(`Finger0`), o)) > 0 ? p : R(p, -1),
    h = [
      [[`Finger1`, `Finger11`, `Finger12`], 0.62, 0.6, 0],
      [[`Finger2`, `Finger21`, `Finger22`], 1.25, 0.66, -0.55],
      [[`Finger0`, `Finger01`, `Finger02`], 0.62, 0.62, 0],
    ].map(([e, i, a, o]) => {
      let s = e.map((e) => r(e)),
        c = s[s.length - 1],
        l = z(L(c, s[s.length - 2])),
        u = [L(s[0], R(z(L(s[1], s[0])), 0.7)), ...s, I(c, R(l, 1.05))];
      return {
        names: [...e],
        hw: i,
        ht: a,
        shift: o,
        path: u,
        bones: e.map((e) => n.bone(`${t}_${e}`)),
      };
    });
  return {
    b: e,
    hand: i,
    fore: a,
    wr: o,
    d2: z(L(o, s)),
    el: s,
    L2: Vc(L(o, s)),
    ax: d,
    wAx: f,
    palmN: m,
    nAx: p,
    palmL: Vc(L(u, o)),
    fingers: h,
  };
}
var Dh = (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
function Oh(e) {
  return [
    [-0.9, 1.25, 0.95],
    [0.1, 1.65, 1.08],
    [e.palmL * 0.5, 1.85, 1],
    [e.palmL - 0.2, 1.85, 0.88],
    [e.palmL + 0.45, 1.55, 0.72],
  ];
}
function kh(e, t) {
  let n = Oh(e);
  if (t <= n[0][0]) return [n[0][1], n[0][2]];
  for (let e = 0; e + 1 < n.length; e++)
    if (t <= n[e + 1][0]) {
      let r = (t - n[e][0]) / (n[e + 1][0] - n[e][0]);
      return [
        n[e][1] + (n[e + 1][1] - n[e][1]) * r,
        n[e][2] + (n[e + 1][2] - n[e][2]) * r,
      ];
    }
  let r = n[n.length - 1];
  return [r[1], r[2]];
}
var Ah = 14,
  jh = (e, t) => I(I(e.wr, R(e.ax, t)), R(e.wAx, -0.25));
function Mh(e, t) {
  let n = [...new Set([...Oh(e).map((e) => e[0]), ...(t.rows ?? [])])].sort(
      (e, t) => e - t,
    ),
    r = Dh(e.nAx, e.palmN) > 0 ? 1 : -1,
    i = (e) => -Math.sin((e / Ah) * Math.PI * 2) * r,
    a = (e) => Math.cos((e / Ah) * Math.PI * 2),
    o = n.map((n, r) => {
      let [o, s] = kh(e, n),
        c = jh(e, n),
        l = V(c, e.wAx, e.nAx, o, s, Ah, 2.6);
      return t.bulge
        ? l.map((e, o) => {
            let s = t.bulge({ i: r, s: n, bn: i(o), ac: a(o) });
            return s ? I(e, R(z(L(e, c)), s)) : e;
          })
        : l;
    }),
    s = (e) => (n[e] + n[Math.min(n.length - 1, e + 1)]) / 2;
  Qm(e.b, o, {
    paint: (e, n) => t.paint({ i: e, s: s(e), bn: i(n + 0.5), ac: a(n + 0.5) }),
    weight: () => [[e.hand, 1]],
    fin: (e, r) => [
      9,
      n[e],
      t.wear?.({ i: e, s: n[e], bn: i(r), ac: a(r) }) ?? 0,
    ],
    capStart: t.paint({ i: 0, s: n[0], bn: 0, ac: 0 }),
    capEnd: t.paint({ i: n.length - 1, s: n[n.length - 1], bn: 0.3, ac: 0 }),
  });
}
function Nh(e, t) {
  e.fingers.forEach((n, r) => {
    let i = n.path.length,
      a = n.path.map((t, r) => {
        let [, a, o] = qc(
          z(L(n.path[Math.min(i - 1, r + 1)], n.path[Math.max(0, r - 1)])),
          e.wAx,
        );
        return [a, o];
      }),
      o = (e, t) => {
        let n = (t / 10) * Math.PI * 2,
          [r, i] = a[e];
        return z(I(R(r, Math.cos(n)), R(i, Math.sin(n))));
      },
      s = (t, n) => -Dh(o(t, n), e.palmN),
      c = (t, n) => Dh(o(t, n), e.wAx),
      l = [0];
    for (let e = 1; e < i; e++)
      l.push(l[e - 1] + Vc(L(n.path[e], n.path[e - 1])));
    let u = n.path.map((e, o) => {
      let [u, d] = a[o],
        f = o === i - 1 ? 0.55 : 1,
        p = I(e, R(u, n.shift)),
        m = V(p, u, d, n.hw * f, n.ht * f, 10, 2.3);
      return t.bulge
        ? m.map((e, n) => {
            let i = s(o, n);
            if (i <= 0) return e;
            let a =
              t.bulge({ i: o, s: l[o], bn: i, ac: c(o, n) }, r) * B(0, 0.6, i);
            return a ? I(e, R(z(L(e, p)), a)) : e;
          })
        : m;
    });
    Qm(e.b, u, {
      paint: (e, n) =>
        t.paint(
          {
            i: e,
            s: (l[e] + l[Math.min(i - 1, e + 1)]) / 2,
            bn: (s(e, n) + s(e, n + 1)) / 2,
            ac: (c(e, n) + c(e, n + 1)) / 2,
          },
          r,
        ),
      weight: (t) =>
        t === 0
          ? Wc(e.hand, n.bones[0], 0.5)
          : [[n.bones[Math.min(n.bones.length - 1, t - 1)], 1]],
      fin: (e, n) => [
        9,
        l[e],
        t.wear?.({ i: e, s: l[e], bn: s(e, n), ac: c(e, n) }, r) ?? 0,
      ],
      capStart: t.paint({ i: 0, s: 0, bn: 0, ac: 0 }, r),
      capEnd: t.paint({ i: i - 2, s: l[i - 1], bn: -1, ac: 0 }, r),
    });
  });
}
function Ph(e, t, n, r, i = 0.3, a = 12) {
  let o = t.map((t, r) => {
    let [i, o] = kh(e, t),
      s = [];
    for (let c = 0; c < a; c++)
      s.push(V(jh(e, t), e.wAx, e.nAx, i + n(r, c), o + n(r, c), a, 2.6)[c]);
    return s;
  });
  Qm(e.b, o, {
    paint: () => r,
    weight: () => [[e.hand, 1]],
    fin: (e) => [e === 0 || e === t.length - 1 ? 0.12 : 9, t[e], i],
  });
}
function Fh(e, t, n, r, i = 12) {
  let [, a, o] = qc(e.d2, [0, 1, 0]),
    s = t.map(([t, n], s) => {
      let c = I(e.wr, R(e.d2, t)),
        l = V(c, a, o, n * 1.04, n, i);
      return r
        ? l.map((e, t) => I(e, R(z(L(e, c)), r(s, (t / i) * Math.PI * 2))))
        : l;
    });
  Qm(e.b, s, {
    paint: () => n,
    weight: (n) => {
      let r = t[n][0],
        i = Uc((r + 0.6) / 1.4, 0, 1);
      return i <= 0
        ? [[e.fore, 1]]
        : [
            [e.fore, 1 - i * 0.7],
            [e.hand, i * 0.7],
          ];
    },
    fin: (e) => [
      e === 1 || e === t.length - 2 ? 0.1 : 9,
      t[e][0],
      e === 0 || e === t.length - 1 ? 0.7 : 0.15,
    ],
  });
}
function Ih(e, t, n, r = 0) {
  let [i, a] = kh(e, t),
    o = a * Math.max(0, 1 - Math.abs(n) ** 2.6) ** (1 / 2.6);
  return I(I(jh(e, t), R(e.wAx, n * i)), R(e.palmN, -(o + r)));
}
var Lh = (e) => e.i >= 3,
  Rh = (e) => (t) => (t.bn > 0.55 && t.s > e.palmL - 0.4 ? 0.8 : 0),
  zh = (e) => (Lh(e) || (e.bn > 0.6 && e.i === 1) ? 0.6 : 0),
  Bh = (e) => R(e.palmN, -1),
  Vh = {
    sport: (e) => {
      let t = e.palmL;
      (Mh(e, {
        rows: [1, t - 0.1],
        paint: (e) =>
          (e.bn > 0.42 && e.s > 1 && e.s < t - 0.1) || (e.bn < -0.55 && e.s > 1)
            ? J(Y.fingers, G.rubber)
            : J(Y.base, G.knit),
        bulge: (e) => (e.bn > 0.4 && e.s > 1 && e.s < t - 0.1 ? 0.12 : 0),
        wear: Rh(e),
      }),
        Nh(e, {
          paint: (e) =>
            Math.abs(e.bn) < 0.4 && e.i >= 1 && !Lh(e)
              ? J(Y.fingers, G.perf)
              : J(Y.base, G.knit),
          wear: zh,
        }),
        Ph(
          e,
          [-0.45, -0.35, 0.75, 0.85],
          (e) => (e === 0 || e === 3 ? 0.08 : 0.16),
          J(Y.strap, G.knit),
        ));
    },
    driver: (e) => {
      let t = e.palmL;
      (Mh(e, {
        rows: [-0.4, 1.2, t * 0.62],
        paint: (e) =>
          e.bn > 0.5 && e.s > -0.4 && e.s < 1.2
            ? J(Y.paw, G.fuzz)
            : e.bn > 0.35 && e.s > t * 0.62
              ? J(Y.base, G.perf)
              : e.s < -0.4
                ? J(Y.strap, G.leather)
                : J(Y.base, G.leather),
        wear: Rh(e),
      }),
        Nh(e, {
          paint: (e, t) =>
            e.bn > 0.35 && e.i === 1
              ? J(Y.base, G.perf)
              : J(t === 2 ? Y.base : Y.fingers, G.leather),
          wear: zh,
        }));
      let n = [-0.75, 0, 0.75].map((t) => Ih(e, 0.4, t, 0.04));
      (sh(
        e.b,
        n,
        () => 0.3,
        0.06,
        () => Bh(e),
        J(Y.strap, G.leather),
        () => [[e.hand, 1]],
        0.4,
      ),
        oh(
          e.b,
          Ih(e, 0.4, 0.4, 0.1),
          Bh(e),
          e.ax,
          0.2,
          0.2,
          0.1,
          J(Y.detail, G.metal),
          [[e.hand, 1]],
          6,
        ));
    },
    wraps: (e) => {
      let t = e.palmL;
      (Mh(e, {
        rows: [-0.4, t * 0.62],
        paint: (e) => (e.s < -0.4 ? J(Y.paw, G.fuzz) : J(Y.base, G.wrap)),
        bulge: (e) =>
          e.s > -0.4 ? 0.06 + (e.bn > 0.4 && e.s > t * 0.62 ? 0.1 : 0) : 0,
        wear: Rh(e),
      }),
        Nh(e, {
          paint: (e, t) => (e.i <= 1 ? J(Y.fingers, G.wrap) : J(Y.paw, G.fuzz)),
          bulge: (e) => (e.i <= 1 ? 0.07 : 0),
          wear: (e) => (e.i === 2 ? 0.8 : 0),
        }),
        Ph(
          e,
          [-0.55, -0.45, 0.35, 0.45],
          (e) => (e === 0 || e === 3 ? 0.1 : 0.22),
          J(Y.strap, G.wrap),
          0.4,
        ));
      for (let [t, n] of [
        [-0.92, 2.4],
        [-0.7, 1.8],
      ]) {
        let r = Ih(e, 0, t, 0.2),
          i = [0, 0.33, 0.66, 1].map((t) =>
            I(
              I(I(r, R(e.ax, -n * t * 0.35)), R(e.wAx, -n * t * 0.6)),
              R(e.palmN, 0.7 * n * t * t),
            ),
          );
        sh(
          e.b,
          i,
          (e) => 0.3 - e * 0.03,
          0.05,
          () => e.wAx,
          J(Y.base, G.wrap),
          () => [[e.hand, 1]],
          0.9,
        );
      }
    },
    moto: (e) => {
      let t = e.palmL;
      (Mh(e, {
        rows: [0.9, t * 0.66],
        paint: (e) =>
          e.bn > 0.4 && e.s > 0.9 && e.s < t * 0.66
            ? J(Y.fingers, G.rubber)
            : e.bn < -0.5 && e.s > 0.9
              ? J(Y.fingers, G.leather)
              : J(Y.base, G.knit),
        bulge: (e) => (e.bn > 0.4 && e.s > 0.9 && e.s < t * 0.66 ? 0.1 : 0),
        wear: Rh(e),
      }),
        Nh(e, {
          paint: (e) =>
            e.bn > 0.35 && e.i === 1
              ? J(Y.tips, G.plate)
              : e.bn > 0.35 && e.i === 2
                ? J(Y.fingers, G.rubber)
                : J(Y.base, G.knit),
          bulge: (e) => (e.i === 1 ? 0.1 : 0),
          wear: zh,
        }));
      let n = [];
      for (let r = 0; r <= 4; r++)
        n.push(Ih(e, t - 0.1, -0.85 + (1.7 * r) / 4, 0.12));
      let r = n.map((t, r) => {
        let i = z(L(n[Math.min(4, r + 1)], n[Math.max(0, r - 1)])),
          a = z(L(Bh(e), R(i, Dh(Bh(e), i))));
        return V(
          t,
          z([
            i[1] * a[2] - i[2] * a[1],
            i[2] * a[0] - i[0] * a[2],
            i[0] * a[1] - i[1] * a[0],
          ]),
          a,
          0.6,
          0.22,
          6,
          2.6,
        );
      });
      (Qm(e.b, r, {
        paint: () => J(Y.tips, G.plate),
        weight: () => [[e.hand, 1]],
        fin: (e) => [9, e * 0.4, e === 0 || e === 4 ? 0.8 : 0.3],
        capStart: J(Y.tips, G.plate),
        capEnd: J(Y.tips, G.plate),
      }),
        Fh(
          e,
          [
            [-2.1, 2.84],
            [-1.95, 2.96],
            [-0.5, 2.96],
            [0.2, 2.5],
            [0.45, 2.2],
          ],
          J(Y.strap, G.leather),
        ),
        Fh(
          e,
          [
            [-1.5, 2.99],
            [-1.2, 3.07],
            [-0.9, 3],
          ],
          J(Y.tips, G.rubber),
        ));
    },
    specialist: (e) => {
      let t = e.palmL;
      (Mh(e, {
        rows: [0.9, t - 0.35],
        paint: (e) =>
          e.bn > 0.35 && e.s > t - 0.35
            ? J(Y.tips, G.rubber)
            : e.bn < -0.45 && e.s > 0.9
              ? J(Y.fingers, G.rubber)
              : J(Y.base, G.leather),
        bulge: (e) => (e.bn > 0.35 && e.s > t - 0.35 ? 0.09 : 0),
        wear: Rh(e),
      }),
        Nh(e, {
          paint: (e) =>
            Lh(e)
              ? J(Y.paw, G.fuzz)
              : e.bn < -0.3 && e.i >= 1
                ? J(Y.fingers, G.rubber)
                : J(Y.base, G.leather),
          wear: (e) => (e.i === 2 ? 0.9 : 0),
        }),
        Fh(
          e,
          [
            [-2.6, 2.84],
            [-2.45, 2.98],
            [-0.9, 2.94],
            [0.2, 2.5],
            [0.45, 2.2],
          ],
          J(Y.strap, G.leather),
        ),
        Fh(
          e,
          [
            [-1.5, 2.96],
            [-1.4, 3.05],
            [-0.6, 3],
            [-0.5, 2.92],
          ],
          J(Y.fingers, G.velcro),
        ));
    },
    paws: (e) => {
      let t = e.palmL;
      (Mh(e, {
        paint: () => J(Y.base, G.fuzz),
        bulge: (e) => (e.bn > 0.2 ? 0.05 : 0),
      }),
        Nh(e, {
          paint: (e) =>
            Lh(e) && e.bn < -0.2 ? J(Y.tips, G.rubber) : J(Y.fingers, G.fuzz),
          bulge: () => 0.05,
        }),
        oh(
          e.b,
          Ih(e, t * 0.42, 0, 0.02),
          Bh(e),
          e.ax,
          0.78,
          0.66,
          0.16,
          J(Y.tips, G.rubber),
          [[e.hand, 1]],
          8,
        ));
      for (let n of [-0.55, 0, 0.55])
        oh(
          e.b,
          Ih(e, t * 0.8 - Math.abs(n) * 0.3, n, 0.02),
          Bh(e),
          e.ax,
          0.3,
          0.27,
          0.12,
          J(Y.tips, G.rubber),
          [[e.hand, 1]],
          6,
        );
      (oh(
        e.b,
        I(jh(e, t * 0.45), R(e.palmN, kh(e, t * 0.45)[1] + 0.02)),
        e.palmN,
        e.ax,
        0.75,
        0.65,
        0.12,
        J(Y.tips, G.rubber),
        [[e.hand, 1]],
        8,
      ),
        Ph(
          e,
          [-0.65, -0.45, 0.05, 0.45, 0.6],
          (e, t) =>
            [0.08, 0.35, 0.42, 0.32, 0.08][e] +
            (e > 0 && e < 4 ? 0.1 * Math.sin(t * 2.1 + e) : 0),
          J(Y.strap, G.fuzz),
          0,
          14,
        ));
    },
    garden: (e) => {
      let t = e.palmL;
      (Mh(e, {
        rows: [t * 0.45],
        paint: (e) =>
          e.bn < -0.5 && e.s > t * 0.45
            ? J(Y.tips, G.rubber)
            : J(Y.base, G.canvas),
        wear: Rh(e),
      }),
        Nh(e, {
          paint: (e) =>
            e.i >= 2 ? J(Y.tips, G.rubber) : J(Y.fingers, G.canvas),
          bulge: (e) => (e.i >= 2 ? 0.04 : 0),
          wear: zh,
        }),
        Ph(
          e,
          [-0.55, -0.45, 0.35, 0.45],
          (e) => (e === 0 || e === 3 ? 0.08 : 0.17),
          J(Y.strap, G.knit),
        ));
    },
  };
function Hh(e) {
  let t = Oh(e).map(([t, n, r]) => V(jh(e, t), e.wAx, e.nAx, n, r, 14, 2.6));
  e.b.surface(t, {
    paint: () => Th,
    weight: () => [[e.hand, 1]],
    capStart: Th,
    capEnd: Th,
  });
  for (let t of e.fingers) {
    let n = t.path.length,
      r = t.path.map((r, i) => {
        let [, a, o] = qc(
            z(L(t.path[Math.min(n - 1, i + 1)], t.path[Math.max(0, i - 1)])),
            e.wAx,
          ),
          s = i === n - 1 ? 0.55 : 1;
        return V(I(r, R(a, t.shift)), a, o, t.hw * s, t.ht * s, 10, 2.3);
      });
    e.b.surface(r, {
      paint: () => Th,
      weight: (n, r) =>
        r === 0
          ? Wc(e.hand, t.bones[0], 0.5)
          : [[t.bones[Math.min(t.bones.length - 1, r - 1)], 1]],
      capStart: Th,
      capEnd: Th,
    });
  }
}
function Uh(e, t, n = `knit`) {
  let r = Eh(e, t);
  n === `knit` ? Hh(r) : Vh[n](r);
}
var Wh = (e) => (e === `outfit-tek` ? `tek` : `bunny`),
  Gh = (e) => ({ code: 0, color: e }),
  Kh = Gh(15718083),
  qh = Gh(13938328),
  Jh = Gh(12160889),
  Yh = Gh(12619898),
  Xh = Gh(9198930),
  Zh = [Gh(6590348), Gh(8431262), Gh(455e4)],
  X = {
    pale: Gh(10928793),
    sage: Gh(8367740),
    mid: Gh(5214028),
    deep: Gh(3501883),
    deepest: Gh(2644529),
  },
  Qh = Gh(15659240),
  $h = Gh(13620948),
  eg = Gh(14147529),
  tg = Gh(15723744),
  ng = Gh(12272969),
  rg = Gh(12104872),
  ig = Gh(8663087),
  ag = Gh(12765637),
  og = [1, 0, 0],
  sg = [0, 1, 0],
  cg = [0, 0, 1];
function lg(e, t, n, r, i) {
  let a = z(n),
    o = z(L(r, R(a, zc(a, r)))),
    s = z(Bc(a, o)),
    c = i.seg ?? 5,
    l = Array.from({ length: c + 1 }, (e, t) => t / c),
    u = l.map((e) =>
      V(
        I(I(t, R(a, i.len * e)), R(s, (i.curl ?? 0) * i.len * e * e)),
        o,
        s,
        Math.max(0.02, i.width(e)),
        i.th * (1 - 0.7 * e),
        6,
      ),
    );
  e.surface(u, {
    paint: (e) => i.paint(l[e]),
    weight: (e, t) => i.weight(e, l[t]),
    capStart: i.paint(0),
    flat: !0,
  });
}
function ug(e, t, n, r, i) {
  let a = z(n),
    o = z(Bc(a, r)),
    s = z(Bc(o, a)),
    c = Array.from({ length: 6 }, (e, t) => t / 5),
    l = c.map((e) => {
      let n = Math.max(
          0.03,
          i.w *
            (e < 0.32
              ? Math.sin((Math.PI / 2) * Math.min(1, 0.12 + e / 0.32))
              : (1 - e) / 0.68),
        ),
        r = I(I(t, R(a, i.len * e)), R(s, -(i.curl ?? 0.12) * i.len * e * e)),
        c = 0.2 * n,
        l = R(o, (i.bend ?? 0) * i.len * e * e);
      return [
        I(I(r, l), I(R(o, -n), R(s, c))),
        I(I(r, l), R(s, 0.07)),
        I(I(r, l), I(R(o, n), R(s, c))),
        I(I(r, l), R(s, -0.05)),
      ];
    });
  e.surface(l, {
    paint: (e, t) => (t === 0 ? i.paint : i.shade),
    weight: (e, t) => i.weight(e, c[t]),
    capStart: i.shade,
    flat: !0,
  });
}
var dg = (e) => (t) =>
  e *
  (0.55 + 0.45 * Math.sin(Math.PI * Math.min(1, t * 0.9))) *
  (t > 0.82 ? Math.sqrt(Math.max(0, (1 - t) / 0.18)) : 1);
function fg(e, t, n, r, i, a, o = Qh) {
  let s = z(n),
    c = z(Bc(s, r)),
    l = z(Bc(c, s)),
    u = [
      [0.1, 0.78],
      [0.5, 1],
      [0.92, 0.8],
    ];
  (u.forEach(([n, r], d) => {
    let f = z(I(R(l, Math.cos(n)), R(c, Math.sin(n))));
    lg(e, I(t, R(s, 0.14 * i * (u.length - d))), f, Bc(s, f), {
      len: 5 * i * r,
      width: dg(0.85 * i),
      th: 0.24 * i,
      curl: 0.06,
      seg: 5,
      paint: (e) => (e < 0.16 ? $h : o),
      weight: (e) => a(e),
    });
  }),
    e.surface(e.ellipsoidRows(t, [0.6 * i, 0.6 * i, 0.6 * i], s, cg, 8, 4), {
      paint: () => $h,
      weight: (e) => a(e),
      closed: !0,
    }));
}
var pg = [
    [74, 0.7, -0.6, 1.6],
    [73.4, 2.4, -2.3, 2.8],
    [72.3, 3.35, -3.4, 4.1],
    [70.9, 3.75, -4.2, 4.4],
    [69.6, 3.8, -4.55, 4.3],
    [68.4, 3.6, -4.55, 3.9],
    [67.3, 3.1, -4.4, 2.6],
    [66.6, 2.6, -4.15, 1],
    [66.2, 2.2, -4.2, 0],
    [65.95, 2, -4, -0.9],
    [65.75, 1.85, -4.07, -1.5],
    [65.45, 1.55, -3.8, -2.3],
    [65.2, 1.15, -3.72, -2.9],
    [65.05, 0.5, -3.4, -3.05],
  ],
  mg = 2.25;
function hg(e) {
  if (e >= pg[0][0]) return [pg[0][1], pg[0][2], pg[0][3]];
  for (let t = 0; t + 1 < pg.length; t++) {
    let [n, r, i, a] = pg[t],
      [o, s, c, l] = pg[t + 1];
    if (e >= o) {
      let t = (n - e) / (n - o);
      return [r + (s - r) * t, i + (c - i) * t, a + (l - a) * t];
    }
  }
  let t = pg[pg.length - 1];
  return [t[1], t[2], t[3]];
}
function gg(e, t) {
  let [n, r, i] = hg(e),
    a = Math.cos(t),
    o = Math.sin(t);
  return [
    Math.sign(a) * Math.abs(a) ** (2 / mg) * n,
    (o < 0 ? -r : i) * Math.sign(o) * Math.abs(o) ** (2 / mg),
    e,
  ];
}
function _g(e) {
  if (e[2] > pg[0][0] || e[2] < pg[pg.length - 1][0]) return !1;
  let [t, n, r] = hg(e[2]),
    i = e[1] < 0 ? e[1] / n : e[1] / r;
  return Math.abs(e[0] / t) ** +mg + Math.abs(i) ** +mg <= 1;
}
var vg = [0, -0.2, 69.4],
  yg = (e, t) => [
    Math.sin(e) * Math.cos(t),
    -Math.cos(e) * Math.cos(t),
    Math.sin(t),
  ];
function bg(e) {
  let t = 0,
    n = 9;
  for (let r = 0; r < 22; r++) {
    let r = (t + n) / 2;
    _g(I(vg, R(e, r))) ? (t = r) : (n = r);
  }
  return t;
}
var xg = (e, t, n = 0) => {
    let r = yg(e, t);
    return I(vg, R(r, bg(r) + n));
  },
  Sg = [0, 0.25, 69.4],
  Cg = [4.55, 5.05, 4.9],
  wg = (e) => 1.12 + 1.25 * ((1 - Math.cos(e)) / 2) ** 1.25,
  Tg = (e, t) => [
    Math.sin(t) * Math.sin(e),
    -Math.sin(t) * Math.cos(e),
    Math.cos(t),
  ],
  Eg = (e, t, n = 0) => {
    let r = Tg(e, t);
    return [
      Sg[0] + r[0] * (Cg[0] + n),
      Sg[1] + r[1] * (Cg[1] + n),
      Sg[2] + r[2] * (Cg[2] + n),
    ];
  },
  Dg = (e) =>
    z([
      (e[0] - Sg[0]) / (Cg[0] * Cg[0]),
      (e[1] - Sg[1]) / (Cg[1] * Cg[1]),
      (e[2] - Sg[2]) / (Cg[2] * Cg[2]),
    ]);
function Og(e) {
  let t = L(vg, Sg),
    n = (e[0] / Cg[0]) ** 2 + (e[1] / Cg[1]) ** 2 + (e[2] / Cg[2]) ** 2,
    r =
      2 *
      ((t[0] * e[0]) / Cg[0] ** 2 +
        (t[1] * e[1]) / Cg[1] ** 2 +
        (t[2] * e[2]) / Cg[2] ** 2),
    i = (t[0] / Cg[0]) ** 2 + (t[1] / Cg[1]) ** 2 + (t[2] / Cg[2]) ** 2 - 1;
  return (-r + Math.sqrt(Math.max(0, r * r - 4 * n * i))) / (2 * n);
}
var kg = Math.PI / 180;
function Ag(e) {
  let t = il(),
    n = t.bone(`Head1`),
    r = t.bone(`Neck1`),
    i = t.bone(`Spine4`),
    a = (e) =>
      Gc(e[2], [
        [62.8, i],
        [64.6, r],
        [66.6, n],
      ]),
    o = (e) =>
      Gc(e[2] + Math.max(0, -e[1] - 0.5) * 0.9, [
        [64, r],
        [65.6, n],
      ]),
    s = [[n, 1]];
  e.surface(
    [62.2, 64, 65.8, 67.2, 68.4].map((e) =>
      V([0, 1.9 - (e - 62.2) * 0.42, e], og, sg, 2.05, 2.05, 12),
    ),
    { paint: (e) => (e >= 2 ? qh : Jh), weight: (e) => a(e) },
  );
  {
    let t = pg.map(([e]) =>
      Array.from({ length: 24 }, (t, n) => gg(e, (n / 24) * Math.PI * 2)),
    );
    e.surface(t, {
      paint: (e) => (e >= pg.length - 2 ? qh : Kh),
      weight: (e) => o(e),
      capStart: Kh,
      capEnd: qh,
    });
  }
  {
    let t = xg(0, -0.16, -0.05),
      n = I(xg(0, -0.36, 0), [0, -0.45, -0.05]),
      r = xg(0.14, -0.42, -0.02),
      i = xg(-0.14, -0.42, -0.02),
      a = xg(0, -0.45, 0.05),
      o = (t, n, r, i) => {
        let a = z(Bc(L(n, t), L(r, t)));
        (a[1] > 0 && (a = R(a, -1)), e.tri(t, n, r, a, a, a, i, s, s, s));
      };
    (o(t, r, n, Kh), o(t, n, i, Kh), o(r, a, n, Kh), o(n, a, i, Kh));
  }
  {
    let t = [-0.15, -0.075, 0, 0.075, 0.15],
      n = t.map((e) => xg(e, -0.729, 0.02)),
      r = t.map((e) => xg(e, -0.751, 0.02));
    e.surface([n, r], {
      closed: !1,
      paint: () => Xh,
      weight: () => s,
      out: () => [0, -1, 0],
    });
  }
  for (let t of [1, -1]) {
    let n = [t * 3.72, 0.55, 68.5],
      r = 14 * kg,
      i = (e) => {
        let t = L(e, n);
        return I(n, [
          t[0],
          t[1] * Math.cos(r) + t[2] * Math.sin(r),
          -t[1] * Math.sin(r) + t[2] * Math.cos(r),
        ]);
      },
      a = e
        .ellipsoidRows(n, [0.5, 0.78, 1.25], og, cg, 8, 4)
        .map((e) => e.map(i));
    e.surface(a, { paint: () => Kh, weight: () => s, flat: !0 });
    let o = e
      .ellipsoidRows(
        I(n, [t * 0.3, -0.05, -0.05]),
        [0.22, 0.48, 0.85],
        og,
        cg,
        8,
        3,
      )
      .map((e) => e.map(i));
    e.surface(o, { paint: () => Yh, weight: () => s, flat: !0 });
  }
  {
    let t = [0, 0.16, 0.32, 0.5, 0.72, 0.88, 1, 1.12, 1.26, 1.4],
      n = [
        ...t
          .slice(1)
          .reverse()
          .map((e) => -e),
        ...t,
      ],
      r = (e) => 0.31 + 0.36 * B(0.05, 1.4, e) ** 0.85,
      i = (e) =>
        -0.2 -
        0.04 * Math.exp(-((e / 0.3) ** 2)) +
        0.87 * Uc((e - 0.45) / 0.95, 0, 1) ** 1.3,
      a = (e, t, n) => {
        let r = Math.abs(e),
          i = yg(Math.sign(e) * (r + 0.55 * t * B(0, 0.2, r)), t),
          a = bg(i),
          o = Og(i),
          s = L(I(vg, R(i, o)), Sg),
          c = Math.acos(
            Uc(
              s[2] /
                Cg[2] /
                Math.hypot(s[0] / Cg[0], s[1] / Cg[1], s[2] / Cg[2]),
              -1,
              1,
            ),
          ),
          l = B(-0.05, 0.12, wg(Math.atan2(s[0] / Cg[0], -s[1] / Cg[1])) - c);
        return I(vg, R(i, a + (Math.max(a, o + 0.85) - a) * l + n));
      },
      o = n.map((e) => {
        let t = Math.abs(e),
          n = r(t),
          o = i(t),
          s = Math.max(n, o + 0.012);
        return [a(e, s, 0.16), a(e, s, 0.38), a(e, o, 0.38), a(e, o, 0.16)];
      }),
      c = (e) =>
        R(
          e.reduce((e, t) => I(e, t), [0, 0, 0]),
          1 / e.length,
        );
    for (let [e, t, n] of [
      [0, 1, 2],
      [o.length - 1, o.length - 2, o.length - 3],
    ]) {
      let r = c(o[t]),
        i = I(r, R(L(r, c(o[n])), 1.1));
      o[e] = [i, i, i, i];
    }
    let l = (e) => {
      let t = Math.abs((n[e] + n[e + 1]) / 2);
      return t < 0.5 || (t > 0.72 && t < 1);
    };
    e.surface(o, {
      paint: (e, t) => (t % 2 ? (l(e) ? ng : tg) : l(e) ? ig : rg),
      weight: () => s,
      flat: !0,
    });
  }
  {
    let t = [];
    for (let e = 0; e <= 9; e++)
      t.push(
        Array.from({ length: 26 }, (t, n) => {
          let r = (n / 26) * Math.PI * 2;
          return Eg(r, 0.08 + (wg(r) - 0.08) * (e / 9));
        }),
      );
    e.surface(t, {
      paint: (e, t) => {
        let n = (1 - Math.cos(((t + 0.5) / 26) * Math.PI * 2)) / 2;
        if (e >= 7) return Zh[2];
        if (e < 4 && n > 0.5) return X.sage;
        let r = 0.07 * Math.sin(t * 2.7 + e * 1.9);
        return n > 0.84 + r ? X.deep : n > 0.72 + r ? X.mid : Zh[0];
      },
      weight: (e) => a(e),
      capStart: Zh[0],
    });
  }
  let c = [...Zh, X.sage, X.mid],
    l = (t, n, r, i, o, s, l) => {
      let u = Eg(t * kg, n * kg, -0.35),
        d = Dg(u),
        f = z(r);
      lg(e, u, f, Bc(f, d), {
        len: i,
        width: (e) =>
          o *
          (1 - e) ** 0.85 *
          (0.8 + 0.4 * Math.sin(Math.PI * Math.min(1, e * 1.6))),
        th: o * 0.36,
        curl: s,
        seg: 4,
        paint: () => c[l],
        weight: (e) => a(e),
      });
    };
  for (let [e, t, n, r, i, a, o] of [
    [-56, 44, [-0.5, -0.55, -0.67], 3.7, 1.45, 0.06, 0],
    [-26, 30, [-0.28, -0.75, -0.6], 4.6, 1.6, 0.05, 1],
    [2, 26, [-0.1, -0.8, -0.6], 4.7, 1.55, 0.05, 0],
    [22, 26, [0.08, -0.8, -0.6], 3.4, 1.35, 0.06, 2],
    [-30, 16, [-0.62, -0.6, -0.5], 4.2, 1.9, 0.26, 1],
    [22, 20, [-0.42, -0.7, -0.57], 3.8, 1.8, 0.26, 0],
    [30, 12, [-0.55, -0.7, -0.35], 4, 1.5, 0.18, 1],
    [-6, 16, [-0.5, -0.72, -0.4], 3.6, 1.4, 0.18, 0],
    [-20, 8, [-0.25, 0.8, 0.55], 3.6, 1.5, 0.22, 1],
    [20, 10, [0.3, 0.8, 0.5], 3.4, 1.5, 0.22, 3],
    [-62, 26, [-0.55, 0.75, 0.35], 3.6, 1.45, 0.2, 3],
    [128, 30, [0.45, 0.85, 0.25], 3, 1.35, 0.22, 2],
    [-108, 46, [-0.6, 0.75, 0.05], 3.4, 1.45, 0.2, 2],
    [0, 2, [0.05, 0.9, 0.45], 3.8, 1.5, 0.24, 0],
    [-74, 74, [-0.12, -0.36, -0.92], 3.5, 0.8, 0.1, 0],
    [-104, 82, [-0.35, 0.65, -0.68], 2.8, 0.7, 0.14, 2],
    [74, 74, [0.08, -0.5, -0.86], 3.4, 0.75, 0.08, 2],
    [104, 82, [0.35, 0.65, -0.68], 2.8, 0.75, 0.14, 2],
    [-120, 80, [-0.4, 0.45, -0.8], 3.2, 1.25, 0.16, 2],
    [120, 80, [0.4, 0.45, -0.8], 3, 1.25, 0.16, 0],
    [150, 50, [0.25, 0.9, -0.2], 3, 1.3, 0.2, 0],
    [-160, 56, [-0.2, 0.9, -0.3], 3, 1.3, 0.2, 2],
    [80, 42, [0.4, 0.8, -0.45], 3.6, 1.6, 0.2, 3],
    [104, 58, [0.35, 0.85, -0.35], 3.4, 1.5, 0.2, 4],
    [58, 56, [0.2, 0.1, -0.97], 2.2, 0.95, 0.1, 1],
    [-78, 44, [-0.35, 0.75, -0.55], 3.6, 1.7, 0.2, 2],
    [-104, 58, [-0.35, 0.85, -0.35], 3.4, 1.5, 0.2, 4],
    [-62, 58, [-0.3, 0.5, -0.8], 2.8, 1.15, 0.16, 1],
    [158, 112, [0.25, 0.55, -0.8], 2.6, 1.2, 0.14, 2],
    [180, 114, [0, 0.6, -0.8], 2.9, 1.25, 0.14, 0],
    [-158, 112, [-0.25, 0.55, -0.8], 2.6, 1.2, 0.14, 2],
  ])
    l(e, t, n, r, i, a, o);
  let u = $c.seg / $c.length,
    d = (e, n, r) => {
      let i = t.index(e > 0 ? `bunny.EarL` : `bunny.EarR`),
        a = t.index(e > 0 ? `bunny.EarL2` : `bunny.EarR2`),
        o = r * B(0, 0.2, n);
      return Kc(
        [s, 1 - o],
        [
          n < u
            ? [[i, 1]]
            : [
                [i, 0.4],
                [a, 0.6],
              ],
          o,
        ],
      );
    },
    f = [
      [118, 36, [0.6, 0.7, 0.4], 3.4, 1.4, X.mid, X.deep, 0.6],
      [100, 22, [0.55, 0.75, 0.4], 3, 1.2, X.sage, X.mid, 0.6],
      [-112, 34, [-0.6, 0.72, 0.35], 2.8, 1.2, X.mid, X.deep, 0.6],
      [126, 90, [0.55, 0.7, -0.4], 2.6, 1.3, X.deep, X.deepest, 0],
      [-128, 88, [-0.55, 0.7, -0.4], 2.4, 1.25, X.deepest, X.deep, 0],
      [86, 62, [0.18, -0.5, -0.85], 4.2, 1.05, X.mid, X.deep, 0],
      [110, 84, [0.35, 0.35, -0.87], 2.2, 0.75, X.sage, X.mid, 0],
      [172, 52, [0.3, 0.92, 0.1], 3, 1.2, X.mid, X.deep, 0],
      [-170, 70, [-0.3, 0.9, 0.1], 2.6, 1.1, X.mid, X.deep, 0],
      [130, 74, [0.72, 0.62, -0.2], 3, 1.2, X.sage, X.mid, 0],
      [-136, 76, [-0.72, 0.6, -0.25], 2.8, 1.15, X.mid, X.deep, 0],
      [184, 84, [0, 0.5, -0.86], 2.6, 1.15, X.sage, X.mid, 0],
      [176, 64, [0.05, 0.55, -0.83], 3.2, 1.4, X.mid, X.deep, 0],
      [152, 80, [0.3, 0.45, -0.84], 2.6, 1.2, X.sage, X.mid, 0],
      [-158, 82, [-0.3, 0.45, -0.84], 2.6, 1.2, X.mid, X.deep, 0],
      [60, 16, [0.4, 0.85, 0.3], 2.3, 0.85, X.pale, X.sage, 0],
      [-82, 46, [-0.55, 0.78, 0.2], 2.1, 0.8, X.pale, X.sage, 0],
    ];
  {
    let t = z([0.15, 1, 0.12]);
    [
      [-32, 2.5, 1, 0.55, X.deep, X.deepest],
      [14, 6.4, 1.25, 0.42, X.mid, X.deep],
      [48, 4.2, 1.3, 0.4, X.deep, X.deepest],
      [76, 2.6, 1, 0.7, X.sage, X.mid],
      [106, 4.6, 1.35, 0.32, X.mid, X.deep],
      [140, 3.2, 1.15, 0.6, X.deep, X.deepest],
      [180, 2.3, 1, 0.6, X.mid, X.deep],
    ].forEach(([n, r, i, a, o, s], c) => {
      let l = [Math.cos(n * kg), 0, Math.sin(n * kg)],
        u = z(I(R(t, 0.85), R(l, a))),
        f = z(I(R(t, 0.75), R(l, 0.6))),
        p = [
          Sg[0] + f[0] * (Cg[0] - 0.3),
          Sg[1] + f[1] * (Cg[1] - 0.3),
          Sg[2] + f[2] * (Cg[2] - 0.3),
        ],
        m = l[0] >= 0 ? 1 : -1,
        h = Math.sin(n * kg) > 0.4 ? 0.7 : 0.2;
      ug(e, p, u, Dg(p), {
        len: r,
        w: i,
        paint: o,
        shade: s,
        curl: [0.16, 0.06, 0.12][c % 3],
        bend: r < 3.5 ? [0.3, -0.28][c % 2] : [0.06, -0.08][c % 2],
        weight: (e, t) => d(m, t, h),
      });
    });
  }
  for (let [t, n, r, i, a, o, c, l] of f) {
    let u = Eg(t * kg, n * kg, -0.2),
      f = Math.sin(t * kg) >= 0 ? 1 : -1;
    ug(e, u, r, Dg(u), {
      len: i,
      w: a,
      paint: o,
      shade: c,
      curl: l > 0 ? 0.1 : 0.16,
      weight: (e, t) => (l > 0 ? d(f, t, l) : s),
    });
  }
  for (let t of [1, -1])
    fg(
      e,
      Eg(t * 120 * kg, 88 * kg, -0.25),
      [t, 0.3, 0.1],
      [t * 0.2, 1, 0.1],
      0.3,
      () => s,
      eg,
    );
}
function jg(e, t, n, r, i) {
  let a = il(),
    o = a.bone(`Neck1`),
    s = a.bone(`Spine4`),
    c = (e) =>
      Gc(e[2], [
        [62, s],
        [65.5, o],
      ]),
    l = 0.16,
    u = Array.from(
      { length: 23 },
      (e, t) => -Math.PI / 2 + l + ((2 * Math.PI - 2 * l) * t) / 22,
    ),
    d = (e) => 64.2 + 2.6 * ((1 + Math.sin(e)) / 2) ** 0.8,
    f = (e, t, n) => {
      let r = 61.4 + (d(e) - 61.4) * t,
        i = (r - 61.4) / 5.4,
        a = 2.1 - i * 1.25,
        o = 4.55 - i * 0.85 + n,
        s = 4.1 - i * 0.75 + n;
      return [Math.cos(e) * o, a + Math.sin(e) * s, r];
    },
    p = [0, 0.3, 0.6, 0.85, 1],
    m = p.map((e) => u.map((t) => f(t, e, 0))),
    h = [...p].reverse().map((e) => u.map((t) => f(t, e, -0.55)));
  (e.surface(m, {
    closed: !1,
    paint: () => r,
    weight: (e) => c(e),
    out: (e, t) => [Math.cos(u[t]), Math.sin(u[t]), 0],
  }),
    e.surface(h, {
      closed: !1,
      paint: () => i,
      weight: (e) => c(e),
      out: (e, t) => [-Math.cos(u[t]), -Math.sin(u[t]), 0],
    }));
  let g = [
    u.map((e) => f(e, 1, 0)),
    u.map((e) => I(f(e, 1, -0.27), [0, 0, 0.14])),
    u.map((e) => f(e, 1, -0.55)),
  ];
  e.surface(g, {
    closed: !1,
    paint: () => i,
    weight: (e) => c(e),
    out: () => cg,
  });
  for (let t of [u[0], u[22]]) {
    let n = [p.map((e) => f(t, e, 0)), p.map((e) => f(t, e, -0.55))];
    e.surface(n, {
      closed: !1,
      paint: () => i,
      weight: (e) => c(e),
      out: () => [Math.sign(Math.cos(t)) * 0.3, -1, 0],
    });
  }
  let _ = [];
  for (let e = 36.4; e <= 62; e += 2.2) _.push(n(0, e, -1, 0.16)[0]);
  for (let e of [0.15, 0.45, 0.75, 1])
    _.push(I(f(-Math.PI / 2, e, 0.06), [0, -0.05, 0]));
  (_.reverse(),
    e.tube(
      _,
      0.17,
      4,
      og,
      () => ag,
      (e) => (e[2] > 62.5 ? c(e) : t(e)),
    ));
  let v = f(-Math.PI / 2, 0.82, 0.3);
  e.surface(
    e.ellipsoidRows(I(v, [0, -0.05, -0.75]), [0.38, 0.14, 0.75], cg, og, 4, 2),
    { paint: () => ag, weight: (e) => c(e), flat: !0 },
  );
  let y = (e, t, r = 0.16) => n(e, t, 1, r)[0],
    b = (n, r, i, a = 0.16) => {
      let o = [],
        s = [];
      (n.forEach(([e, t], i) => {
        let [c, l] = n[Math.min(n.length - 1, i + 1)],
          [u, d] = n[Math.max(0, i - 1)],
          f = c - u,
          p = l - d,
          m = Math.hypot(f, p) || 1,
          h = r(i / (n.length - 1)) / 2;
        (o.push(y(e - (p / m) * h, t + (f / m) * h, a)),
          s.push(y(e + (p / m) * h, t - (f / m) * h, a)));
      }),
        e.surface([o, s], {
          closed: !1,
          paint: () => i,
          weight: (e) => t(e),
          out: () => [0, 1, 0],
        }));
    };
  for (let e of [1, -1])
    [
      [3.9, 2.2, 0.95],
      [3.4, 1, 0.85],
      [2.7, 0, 0.75],
    ].forEach(([t, n, r]) => {
      let i = Array.from({ length: 7 }, (r, i) => {
        let a = i / 6;
        return [
          e * (0.5 + t * a),
          55.2 + n * a ** 1.4 + 0.35 * Math.sin(Math.PI * a),
        ];
      });
      b(i, (e) => r * (1 - 0.85 * e ** 1.6), Qh);
    });
}
function Mg(e, t, n, r) {
  let i = t === `L` ? 1 : -1;
  fg(e, [n + i * 2.6, 3.5, 5], [i, 0, 0.1], z([i * 0.1, 1, 0.15]), 0.85, r);
}
var Ng = {
    hoodie: 0,
    trim: 1,
    pants: 2,
    pantsTrim: 3,
    shoe: 4,
    face: 5,
    glove: 6,
    detail: 7,
  },
  Pg = (e) => ({ code: 3 + e }),
  Fg = Pg(Ng.hoodie),
  Ig = Pg(Ng.trim),
  Lg = Pg(Ng.pants),
  Rg = Pg(Ng.pantsTrim),
  zg = Pg(Ng.shoe),
  Bg = Pg(Ng.face);
Pg(Ng.glove);
var Vg = Pg(Ng.detail),
  Hg = { code: 1 },
  Ug = { code: 2 },
  Wg = { code: 1 },
  Gg = (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
  Kg = [1, 0, 0],
  qg = [0, 1, 0],
  Jg = [0, 0, 1],
  Yg = [
    [35.4, 9.3, 6.75, 0.6, 2.5],
    [36.5, 9.7, 7.1, 0.65, 2.5],
    [37.9, 9.55, 6.95, 0.7, 2.5],
    [40.5, 9, 6.4, 0.9, 2.5],
    [43, 8.5, 5.95, 1.15, 2.45],
    [45.5, 8.4, 5.8, 1.4, 2.4],
    [49, 8.95, 6, 1.7, 2.4],
    [52.5, 9.45, 6.1, 1.9, 2.5],
    [55.5, 9.45, 6, 2, 2.6],
    [58.5, 9, 5.7, 2.15, 2.6],
    [61, 8, 5.1, 2.3, 2.5],
    [62.9, 6.6, 4.5, 2.4, 2.3],
    [64.1, 4.8, 3.7, 2.45, 2.2],
    [64.8, 3.2, 3, 2.45, 2],
  ];
function Xg(e) {
  let t = Yg.map((e) => e[0]),
    n = 0;
  for (; n < t.length - 2 && e > t[n + 1]; ) n++;
  let r = n + Uc((e - t[n]) / (t[n + 1] - t[n]), 0, 1),
    i = (e) =>
      Jc(
        Yg.map((t) => t[e]),
        r,
      );
  return { a: i(1), b: i(2), c: i(3), e: i(4) };
}
function Zg(e, t, n = 0) {
  let { a: r, b: i, c: a, e: o } = Xg(e),
    s = Math.cos(t),
    c = Math.sin(t);
  return [
    Math.sign(s) * Math.abs(s) ** (2 / o) * (r + n),
    a + Math.sign(c) * Math.abs(c) ** (2 / o) * (i + n),
    e,
  ];
}
function Qg(e, t, n, r) {
  let { a: i, b: a, c: o, e: s } = Xg(t),
    c = Uc(Math.abs(e) / i, 0, 0.995),
    l = (1 - c ** +s) ** (1 / s) * a,
    u = z([(Math.sign(e) * c ** (s - 1)) / i, n * ((l / a) ** (s - 1) / a), 0]);
  return [I([e, o + n * l, t], R(u, r)), u];
}
function $g(e, t = `knit`, n = `bunny`) {
  let r = n === `tek`,
    i = il(),
    a = new Yc(),
    o = (e) => i.bone(e),
    s = (e) => i.at(e),
    c = o(`Pelvis`),
    l = o(`Spine`),
    u = o(`Spine1`),
    d = o(`Spine2`),
    f = o(`Spine4`),
    p = o(`Neck1`),
    m = o(`Head1`),
    h = (e) => {
      let t = Gc(e[2], [
          [39, c],
          [44.5, l],
          [48.8, u],
          [54, d],
          [60.5, f],
          [64.5, f],
          [66.5, p],
        ]),
        n = Math.abs(e[0]),
        r = B(4.5, 9.5, n) * B(55, 60.5, e[2]) * 0.6,
        i = B(8.2, 10.4, n) * B(57.5, 61, e[2]) * 0.25,
        a =
          B(48, 40, e[2]) *
          B(0.3, 3.4, n) *
          (0.25 * B(5.5, 2.5, e[1]) + 0.65 * B(1, -4.5, e[1])),
        s = e[0] >= 0 ? `L` : `R`;
      return Kc(
        [t, 1 - r - i - a],
        [[[o(`${s}_Clavicle`), 1]], r],
        [[[o(`${s}_UpperArm`), 1]], i],
        [[[o(`${s}_Thigh`), 1]], a],
      );
    };
  {
    let e = [];
    for (let t = 0; t + 1 < Yg.length; t++) {
      let n = Yg[t + 1][0] - Yg[t][0] > 2.5 ? 3 : 2;
      for (let r = 0; r < n; r++)
        e.push(Yg[t][0] + ((Yg[t + 1][0] - Yg[t][0]) * r) / n);
    }
    e.push(Yg[Yg.length - 1][0]);
    let t = e.map((e) =>
      Array.from({ length: 28 }, (t, n) => Zg(e, (n / 28) * Math.PI * 2)),
    );
    a.surface(t, {
      paint: (t) => (e[t] < 37.89 ? Ig : Fg),
      weight: (e) => h(e),
    });
  }
  {
    let e = [
      [42, 7.2, 4.9, 0.9],
      [38, 7.9, 5.3, 0.8],
      [34.5, 8.1, 5.4, 0.7],
      [32.2, 7.7, 5.1, 0.6],
      [30.6, 6.2, 4.4, 0.6],
      [29.9, 3.2, 3, 0.6],
    ].map(([e, t, n, r]) => V([0, r, e], Kg, qg, t, n, 24, 2.4));
    a.surface(e, {
      paint: () => Lg,
      weight: (e) => {
        let t = B(37, 31, e[2]) * B(0.5, 4, Math.abs(e[0])) * 0.7;
        return Kc(
          [[[c, 1]], 1 - t],
          [[[o(e[0] >= 0 ? `L_Thigh` : `R_Thigh`), 1]], t],
        );
      },
      capEnd: Lg,
    });
  }
  for (let e of [`L`, `R`]) {
    let t = e === `L` ? 1 : -1,
      n = o(`${e}_Thigh`),
      i = o(`${e}_Calf`),
      l = o(`${e}_Foot`),
      u = o(`${e}_Toe0`),
      d = s(`${e}_Thigh`),
      f = s(`${e}_Calf`),
      p = s(`${e}_Foot`),
      m = z(L(f, d)),
      h = z(L(p, f)),
      g = Vc(L(f, d)),
      _ = [
        [-2.2, 3.4, 0],
        [-0.5, 3.9, 0],
        [3, 4.1, 0],
        [7, 4.1, 0],
        [11, 3.9, 0],
        [15, 3.7, 0],
        [g, 3.45, 0],
        [g + 3, 3.4, 0],
        [g + 6.5, 3.35, 0],
        [g + 10, 3.05, 0],
        [g + 12.6, 2.85, 1],
        [g + 13, 3.1, 1],
        [g + 14.6, 3.2, 1],
        [g + 15.9, 3, 1],
        [g + 16.4, 2.5, 1],
      ],
      v = (e) => (e <= g ? I(d, R(m, e)) : I(f, R(h, e - g))),
      y = _.map(([e, n]) => {
        let r = Uc((e - (g - 2.5)) / 5, 0, 1),
          [, i, a] = qc(z(Hc(m, h, r)), Kg),
          o = v(e);
        return V(
          e < 6 ? I(o, [t * 0.3 * (1 - Math.max(0, e) / 6), 0, 0]) : o,
          i,
          a,
          n,
          n * (e < 7 ? 0.94 : 1.04),
          24,
          2,
          Math.PI / 24,
        );
      }),
      b = (e) => {
        let n = Math.PI / 24 + ((e + 0.5) / 24) * Math.PI * 2;
        return Math.cos(n) * t;
      };
    a.surface(y, {
      paint: (e, t) =>
        _[e][2] ? Rg : b(t) > 0.985 && e >= 2 && e < _.length - 5 ? Hg : Lg,
      weight: (e, t) => {
        let r = _[t][0],
          a = Gc(r, [
            [-1, n],
            [g - 2.2, n],
            [g + 2.2, i],
            [g + 14, i],
            [g + 17.5, l],
          ]),
          o = B(2.5, -2.2, r) * 0.45;
        return Kc([a, 1 - o], [[[c, 1]], o]);
      },
      capEnd: Rg,
    });
    let x = p[0] + t * 0.15,
      S = [
        [5.15, 1.5, 4],
        [4.5, 2.2, 6.1],
        [3, 2.5, 6.9],
        [1, 2.62, 6.6],
        [-1.2, 2.72, 5.1],
        [-3.4, 2.78, 3.95],
        [-5.6, 2.6, 3.2],
        [-7.2, 2.1, 2.6],
        [-8.3, 1.2, 2],
      ],
      C = 1.05,
      w = (e) => Wc(l, u, B(-2.2, -4.6, e[1])),
      T = S.map(([e, t, n]) =>
        V([x, e, (n + C) / 2], Kg, Jg, t, (n - C) / 2, 16, 2.6),
      );
    a.surface(T, {
      closed: !0,
      paint: (e, t) => (e === 1 && t >= 2 && t <= 6 ? Hg : zg),
      weight: w,
      capStart: zg,
      capEnd: zg,
      out: (e, t) => L(T[e][t], [x, S[e][0], (S[e][2] + C) / 2]),
    });
    let E = [
      [5.55, 1.7],
      [4.6, 2.5],
      [2, 2.85],
      [-1.5, 3],
      [-5, 2.95],
      [-7.4, 2.4],
      [-8.75, 1.35],
    ].map(([e, t]) => V([x, e, 0.62], Kg, Jg, t, 0.62, 16, 3.2));
    (a.surface(E, { paint: () => Hg, weight: w, capStart: Hg, capEnd: Hg }),
      r && Mg(a, e, x, w));
    for (let e of [-0.6, -2, -3.4]) {
      let t = 6.6 + (3.95 - 6.6) * Uc((1 - e) / 4.4, 0, 1) + 0.12;
      a.tube(
        [
          [x - 1.3, e, t - 0.35],
          [x, e - 0.1, t],
          [x + 1.3, e, t - 0.35],
        ],
        0.32,
        6,
        qg,
        () => Vg,
        (e) => w(e),
      );
    }
  }
  for (let e of [`L`, `R`]) {
    let n = o(`${e}_Clavicle`),
      r = o(`${e}_UpperArm`),
      i = o(`${e}_Forearm`);
    o(`${e}_Hand`);
    let c = s(`${e}_UpperArm`),
      l = s(`${e}_Forearm`),
      u = s(`${e}_Hand`),
      d = z(L(l, c)),
      f = z(L(u, l)),
      p = Vc(L(l, c)),
      m = [
        [-2.6, 2.3, 0],
        [-1.6, 3.15, 0],
        [0.2, 3.3, 0],
        [3, 3.15, 0],
        [6.5, 2.95, 0],
        [9.5, 2.85, 0],
        [p, 2.85, 0],
        [p + 3, 2.8, 0],
        [p + 6, 2.62, 0],
        [p + 8.6, 2.45, 0],
        [p + 9, 2.7, 1],
        [p + 10.8, 2.72, 1],
        [p + 11.3, 2.35, 1],
      ],
      h = (e) => (e <= p ? I(c, R(d, e)) : I(l, R(f, e - p))),
      g = m.map(([e, t]) => {
        let n = Uc((e - (p - 2)) / 4, 0, 1),
          [, r, i] = qc(z(Hc(d, f, n)), qg);
        return V(
          I(
            h(e),
            e < 1 ? [0, 0, 0.6 * (1 - Math.abs(e + 0.6) / 2)] : [0, 0, 0],
          ),
          r,
          i,
          t * 1.04,
          t,
          16,
        );
      });
    (a.surface(g, {
      paint: (e) => (m[e][2] ? Ig : Fg),
      weight: (e, t) => {
        let a = m[t][0],
          o = Gc(a, [
            [0.5, r],
            [p - 1.8, r],
            [p + 1.8, i],
          ]),
          s = B(2.5, -2.6, a) * 0.45;
        return Kc([o, 1 - s], [[[n, 1]], s]);
      },
      capStart: Fg,
      capEnd: Ig,
    }),
      Uh(a, e, t));
  }
  if ((r && (Ag(a), jg(a, h, Qg, Fg, Ig)), !r)) {
    let e = [0, -0.55, 68.7],
      t = [4.05, 4.35, 4.85],
      n = (e) =>
        Gc(e[2], [
          [62.8, f],
          [64.6, p],
          [66.6, m],
        ]);
    {
      let r = [62.2, 64, 65.8].map((e) =>
        V([0, 2 - (e - 62.2) * 0.4, e], Kg, qg, 2.6, 2.5, 12),
      );
      a.surface(r, { paint: () => Bg, weight: (e) => n(e) });
      let i = a.ellipsoidRows(e, t, Jg, Kg, 22, 12);
      a.surface(i, { paint: () => Bg, weight: (e) => n(e) });
      let o = [0.04, 0.09, 0.3, 0.35],
        s = [0.12, 0.42, 0.42, 0.12],
        c = o.map((n, r) =>
          Array.from({ length: 19 }, (i, a) => {
            let o = -1.22 + (2.44 * a) / 18,
              c = [
                Math.sin(o) * Math.cos(n),
                -Math.cos(o) * Math.cos(n),
                Math.sin(n),
              ];
            return [
              e[0] + c[0] * (t[0] + s[r]),
              e[1] + c[1] * (t[1] + s[r]),
              e[2] + c[2] * (t[2] + s[r]),
            ];
          }),
        );
      a.surface(c, {
        closed: !1,
        paint: () => Wg,
        weight: () => [[m, 1]],
        out: (t, n) => L(c[t][n], e),
      });
      for (let n of [1, -1]) {
        let r = 0.42 * n,
          i = 0.19,
          o = [
            Math.sin(r) * Math.cos(i),
            -Math.cos(r) * Math.cos(i),
            Math.sin(i),
          ],
          s = [
            e[0] + o[0] * (t[0] + 0.42),
            e[1] + o[1] * (t[1] + 0.42),
            e[2] + o[2] * (t[2] + 0.42),
          ],
          [, c, l] = qc(o, Jg),
          u = a.ellipsoidRows(s, [1, 1, 1], o, c, 12, 6).map((e) =>
            e.map((e) => {
              let t = L(e, s),
                n = Gg(t, l),
                r = Gg(t, c),
                i = Gg(t, o);
              return I(s, I(I(R(l, n * 0.78), R(c, r * 0.52)), R(o, i * 0.22)));
            }),
          );
        a.surface(u, { paint: () => Ug, weight: () => [[m, 1]] });
      }
      let l = a.ellipsoidRows(
        [0, e[1] - t[1] + 0.05, e[2] - 1.05],
        [0.62, 0.45, 0.45],
        qg,
        Kg,
        10,
        6,
      );
      a.surface(l, { paint: () => Hg, weight: () => [[m, 1]] });
    }
    {
      let e = [0, 0.55, 69.35],
        t = [5.55, 6.05, 6],
        n = z([0, -1, -0.12]),
        r = a.ellipsoidRows(e, t, n, Jg, 28, 14, 0.98, Math.PI),
        o = (e) => {
          let t = B(67.5, 63.6, e[2]) * B(-1, 3, e[1]);
          return Kc(
            [[[m, 1]], 1 - t],
            [
              [
                [p, 0.45],
                [f, 0.55],
              ],
              t,
            ],
          );
        };
      a.surface(r, { paint: () => Fg, weight: o, capEnd: Fg });
      let s = r[0],
        c = R(
          s.reduce((e, t) => I(e, t), [0, 0, 0]),
          1 / s.length,
        ),
        l = [];
      for (let e = 0; e <= s.length; e++) {
        let t = s[e % s.length],
          [, n, r] = qc(
            z(L(s[(e + 1) % s.length], s[(e - 1 + s.length) % s.length])),
            z(L(t, c)),
          );
        l.push(V(t, n, r, 0.8, 0.8, 8));
      }
      a.surface(l, {
        paint: () => Ig,
        weight: o,
        out: (e, t) => L(l[e][t], s[e % s.length]),
      });
      for (let e of [`L`, `R`]) {
        let t = e === `L` ? 1 : -1,
          n = i.index(`bunny.Ear${e}`),
          r = i.index(`bunny.Ear${e}2`),
          o = [$c.base[0] * t, $c.base[1], $c.base[2]],
          s = [$c.dir[0] * t, $c.dir[1], $c.dir[2]],
          c = z([0.32 * t, 0.8, 0.5]),
          l = [
            [-0.06, 1.45, 1.05],
            [0.08, 1.9, 1],
            [0.25, 2.35, 0.9],
            [0.45, 2.5, 0.82],
            [0.65, 2.3, 0.72],
            [0.8, 1.9, 0.62],
            [0.92, 1.25, 0.5],
            [1, 0.3, 0.3],
          ],
          u = [],
          d = I(o, R(s, l[0][0] * $c.length));
        for (let e = 0; e < l.length; e++) {
          if (e > 0) {
            let t = z(Hc(s, c, B(0.3, 1, (l[e][0] + l[e - 1][0]) / 2)));
            d = I(d, R(t, (l[e][0] - l[e - 1][0]) * $c.length));
          }
          u.push(d);
        }
        let f = $c.seg / $c.length,
          p = l.map(([e, n, r], i) => {
            let [, a, o] = qc(z(Hc(s, c, B(0.3, 1, e))), [
                Math.cos(0.25) * t,
                0,
                -Math.sin(0.25) * 0.3,
              ]),
              l = o[1] > 0 ? R(o, -1) : o;
            return V(u[i], a, l, n, r, 14, 2.2);
          });
        a.surface(p, {
          paint: (e, t) => {
            let n = ((t + 0.5) / 14) * Math.PI * 2;
            return Math.sin(n) > 0.8 && e >= 2 && e <= 5 ? Hg : Fg;
          },
          weight: (e, t) => {
            let i = l[t][0];
            return i < 0.05
              ? Wc(m, n, B(-0.06, 0.05, i))
              : Wc(n, r, B(f - 0.08, f + 0.12, i));
          },
          capStart: Fg,
          capEnd: Fg,
        });
      }
    }
    {
      let e = [],
        t = [];
      for (let n = 0; n <= 5; n++) {
        let r = 39.2 + (5.6 * n) / 5,
          i = 5.9 - (n / 5) * 1.1,
          a = [],
          o = [];
        for (let e = 0; e <= 9; e++) {
          let t = -i + (2 * i * e) / 9;
          (a.push(Qg(t, r, -1, 0.42)[0]), o.push(Qg(t, r, -1, -0.05)[0]));
        }
        (e.push(a), t.push(o));
      }
      a.surface(e, {
        closed: !1,
        paint: () => Ig,
        weight: (e) => h(e),
        out: () => [0, -1, 0],
      });
      let n = [],
        r = [];
      for (let i = 0; i <= 9; i++) (n.push(e[0][i]), r.push(t[0][i]));
      for (let i = 1; i <= 5; i++) (n.push(e[i][9]), r.push(t[i][9]));
      for (let i = 8; i >= 0; i--) (n.push(e[5][i]), r.push(t[5][i]));
      for (let i = 4; i >= 1; i--) (n.push(e[i][0]), r.push(t[i][0]));
      a.surface([n, r], { closed: !0, paint: () => Ig, weight: (e) => h(e) });
      for (let e of [1, -1]) {
        let t = [];
        for (let n = 63.4; n >= 53.2; n -= 1.7) {
          let r = e * (1.7 + (63.4 - n) * 0.035);
          t.push(Qg(r, n, -1, 0.45)[0]);
        }
        a.tube(
          t,
          0.3,
          6,
          Kg,
          () => Hg,
          (e) => h(e),
        );
        let n = t[t.length - 1];
        a.tube(
          [I(n, [0, 0, 0.3]), I(n, [0, -0.05, -1.5])],
          0.46,
          8,
          Kg,
          () => Vg,
          (e) => h(e),
        );
      }
      let i = (e, t, n, r, i) => {
        let o = [
            [
              [8, 47],
              [14.5, 33],
              [21, 47],
            ],
            [
              [21, 47],
              [29, 25],
              [37, 47],
            ],
            [
              [37, 47],
              [46.5, 15],
              [56, 47],
            ],
          ],
          s = n / 48,
          c = (n, i) => [e + r * -(n - 32) * s, t - (i - 31) * s],
          l = [];
        for (let [e, t, n] of o)
          for (let r = +!!l.length; r <= 10; r++) {
            let i = r / 10,
              a =
                (1 - i) * (1 - i) * e[0] +
                2 * (1 - i) * i * t[0] +
                i * i * n[0],
              o =
                (1 - i) * (1 - i) * e[1] +
                2 * (1 - i) * i * t[1] +
                i * i * n[1];
            l.push(c(a, o));
          }
        let u = [],
          d = [];
        for (let e = 0; e < l.length; e++) {
          let [t, n] = l[e],
            [a, o] = l[Math.min(l.length - 1, e + 1)],
            [s, c] = l[Math.max(0, e - 1)],
            f = a - s,
            p = o - c,
            m = Math.hypot(f, p) || 1,
            h = (-p / m) * i * 0.5,
            g = (f / m) * i * 0.5;
          (u.push(Qg(t + h, n + g, r, 0.16)[0]),
            d.push(Qg(t - h, n - g, r, 0.16)[0]));
        }
        a.surface([u, d], {
          closed: !1,
          paint: () => Hg,
          weight: (e) => h(e),
          out: () => [0, r, 0],
        });
        let [f, p] = c(56, 47),
          m = 4.5 * s,
          g = [];
        for (let e = 0; e < 12; e++) {
          let t = (e / 12) * Math.PI * 2;
          g.push(Qg(f + Math.cos(t) * m, p + Math.sin(t) * m, r, 0.18)[0]);
        }
        let _ = Qg(f, p, r, 0.2)[0];
        a.surface([g.map(() => _), g], {
          paint: () => Ug,
          weight: (e) => h(e),
          out: () => [0, r, 0],
        });
      };
      (i(0, 52.5, 11, 1, 1.05), i(4.6, 56.4, 3.6, -1, 0.5));
    }
  }
  {
    let t = e ?? Fl;
    t.build(Ol(a, t.tp));
  }
  return a.geometry();
}
var e_ = new Map();
function t_(e, t = `knit`, n = `bunny`) {
  let r = `${e?.id ?? `carrot`}|${t}|${n}`,
    i = e_.get(r);
  return (i || e_.set(r, (i = $g(e, t, n))), i);
}
var n_ = () => new Float32Array(26),
  r_ = Math.PI / 180,
  i_ = (e, t, n) => (e < t ? t : e > n ? n : e),
  a_ = (e, t, n, r) => e + (t - e) * (1 - Math.exp(-n * r)),
  o_ = (e) => ((((e + 180) % 360) + 360) % 360) - 180;
function s_(e, t, n, r) {
  for (let i = 0; i < 26; i++) e[i] = t[i] + (n[i] - t[i]) * r;
  return e;
}
var c_ = new cn().setFromAxisAngle(new M(1, 0, 0), Math.PI / 2),
  l_ = c_.clone().invert(),
  u_ = 1.25,
  d_ = class {
    r = il();
    joints;
    q = new cn();
    e = new Vn();
    m = new N();
    rot = new Float32Array(12);
    local;
    idx = {};
    curl = [];
    bodyYaw = 0;
    viewYaw = 0;
    viewPitch = 0;
    yawRate = 0;
    lastYaw = NaN;
    legYaw = 0;
    ground = 1;
    crouch = 0;
    tuck = 0;
    runAmp = 0;
    phase = 0;
    lean = 0;
    airTime = 0;
    wasGrounded = !0;
    dip = 0;
    dipV = 0;
    time = Math.random() * 10;
    p = {
      idle: n_(),
      run: n_(),
      crouch: n_(),
      air: n_(),
      airCrouch: n_(),
      g: n_(),
      a: n_(),
      out: n_(),
    };
    state = `idle`;
    thigh;
    shin;
    hipZ;
    constructor() {
      let e = this.r,
        t = e.csBones;
      this.local = Array.from({ length: t }, () => new cn());
      for (let t of [
        `Pelvis`,
        `Spine`,
        `Spine1`,
        `Spine2`,
        `Spine4`,
        `Neck1`,
        `Head1`,
        `L_Thigh`,
        `L_Calf`,
        `L_Foot`,
        `R_Thigh`,
        `R_Calf`,
        `R_Foot`,
        `L_UpperArm`,
        `L_Forearm`,
        `L_Hand`,
        `R_UpperArm`,
        `R_Forearm`,
        `R_Hand`,
      ])
        this.idx[t] = e.bone(t);
      let n = (t) => [
          e.bind[t * 12 + 3],
          e.bind[t * 12 + 7],
          e.bind[t * 12 + 11],
        ],
        r = new Map();
      for (let i of [`L`, `R`]) {
        let a = n(e.bone(`${i}_UpperArm`)),
          o = n(e.bone(`${i}_Forearm`)),
          s = new M(o[0] - a[0], o[1] - a[1], o[2] - a[2]).normalize(),
          c = new M(i === `L` ? 0.06 : -0.06, 0, -1).normalize(),
          l = new cn().setFromUnitVectors(s, c),
          u = [e.bone(`${i}_UpperArm`)];
        for (; u.length; ) {
          let n = u.pop();
          r.set(n, l);
          for (let r = 0; r < t; r++) e.parent[r] === n && u.push(r);
        }
      }
      let i = new cn();
      this.joints = Array.from({ length: t }, (t, a) => ({
        bone: a,
        parent: e.parent[a],
        pivot: n(a),
        c: r.get(a) ?? i,
        cpInv:
          (e.parent[a] >= 0 ? r.get(e.parent[a]) : void 0)?.clone().invert() ??
          i,
      }));
      for (let t of [`L`, `R`]) {
        let r = n(e.bone(`${t}_Hand`)),
          i = n(e.bone(`${t}_Finger1`)),
          a = n(e.bone(`${t}_Finger2`)),
          o = new M(
            (i[0] + a[0]) / 2 - r[0],
            (i[1] + a[1]) / 2 - r[1],
            (i[2] + a[2]) / 2 - r[2],
          ).normalize(),
          s = new M(t === `L` ? -1 : 1, 0, 0);
        s.addScaledVector(o, -s.dot(o)).normalize();
        let c = new M().crossVectors(o, s).normalize(),
          l = t === `R`;
        for (let [n, r] of [
          [`Finger1`, 45],
          [`Finger11`, 55],
          [`Finger12`, 35],
          [`Finger2`, 50],
          [`Finger21`, 55],
          [`Finger22`, 35],
          [`Finger0`, 15],
          [`Finger01`, 25],
          [`Finger02`, 20],
        ]) {
          let i = n.startsWith(`Finger0`);
          this.curl.push({
            bone: e.bone(`${t}_${n}`),
            axis: i ? c.clone().negate().applyAxisAngle(o, 0) : c,
            amount: (l ? r : r * 0.45) * r_ * (i ? 0.8 : 1),
          });
        }
      }
      let a = (t, r) => {
        let i = n(e.bone(t)),
          a = n(e.bone(r));
        return Math.hypot(i[0] - a[0], i[1] - a[1], i[2] - a[2]);
      };
      ((this.thigh = a(`L_Thigh`, `L_Calf`)),
        (this.shin = a(`L_Calf`, `L_Foot`)),
        (this.hipZ = n(e.bone(`L_Thigh`))[2]));
    }
    legIK(e, t) {
      let n = this.thigh,
        r = this.shin,
        i = i_(Math.hypot(e, t), Math.abs(n - r) + 0.1, n + r - 0.01),
        a =
          Math.PI - Math.acos(i_((n * n + r * r - i * i) / (2 * n * r), -1, 1));
      return [
        (Math.atan2(e, t) +
          Math.acos(i_((n * n + i * i - r * r) / (2 * n * i), -1, 1))) /
          r_,
        a / r_,
      ];
    }
    update(e, t, n, r, i, a) {
      this.time += e;
      let [o, s, c] = n,
        l = Math.hypot(o, s),
        u =
          Number.isNaN(this.lastYaw) || r || e <= 0
            ? 0
            : o_(t.yaw - this.lastYaw) / e;
      if (
        ((this.lastYaw = t.yaw),
        Math.abs(u) > 3e3 && (u = 0),
        (this.yawRate = r ? 0 : a_(this.yawRate, u, 10, e)),
        (this.viewYaw = t.yaw),
        (this.viewPitch = i_(t.pitch, -89, 89)),
        r)
      )
        this.bodyYaw = t.yaw;
      else {
        this.bodyYaw += o_(t.yaw - this.bodyYaw) * (1 - Math.exp(-9 * e));
        let n = o_(t.yaw - this.bodyYaw);
        Math.abs(n) > 50 && (this.bodyYaw = t.yaw - Math.sign(n) * 50);
      }
      let d = this.bodyYaw * r_,
        f = o * Math.cos(d) + s * Math.sin(d),
        p = -o * Math.sin(d) + s * Math.cos(d),
        m = t.grounded;
      (m &&
        !this.wasGrounded &&
        this.airTime > 0.12 &&
        (this.dipV += i_(-c / 900, 0.15, 0.7) * 2.2),
        (this.airTime = m ? 0 : this.airTime + e),
        (this.wasGrounded = m));
      let h = +!!m;
      ((this.ground = r ? h : a_(this.ground, h, h > this.ground ? 9 : 22, e)),
        (this.crouch = r
          ? +t.crouched
          : a_(this.crouch, +!!t.crouched, 14, e)));
      let g = c > 0 ? 1 : i_(1 + c / 520, 0.2, 1);
      this.tuck = r ? g : a_(this.tuck, g, 7, e);
      let _ = i_(l / 250, 0, 1) ** 0.8;
      this.runAmp = r ? _ : a_(this.runAmp, _, 8, e);
      let v = Math.atan2(p, f) / r_,
        y = !1;
      Math.abs(v) > 100 && ((y = !0), (v = o_(v + 180)));
      let b = i_(60 + l * 0.22, 60, 140);
      this.phase +=
        (y ? -1 : 1) *
        ((l / b) * Math.PI * 2 * e) *
        (0.35 + 0.65 * this.ground);
      let x = l > 30 ? i_(v, -65, 65) * this.ground : 0;
      this.legYaw = r ? x : a_(this.legYaw, x, 8, e);
      let S = t.sidemove ?? 0,
        C =
          i_(this.yawRate * 0.055 - (S / 450) * 7, -26, 26) *
          (0.35 + 0.65 * (1 - this.ground)) *
          i_(l / 200, 0.2, 1);
      ((this.lean = r ? C : a_(this.lean, C, 6, e)),
        r && (this.dip = this.dipV = 0),
        (this.dipV += (-240 * this.dip - 15 * this.dipV) * e),
        (this.dip = i_(this.dip + this.dipV * e, -0.08, 0.16)),
        (this.state =
          this.ground < 0.5
            ? `air`
            : this.crouch > 0.5
              ? `crouch`
              : l > 30
                ? `run`
                : `idle`));
      let w = this.p;
      return (
        this.idlePose(w.idle),
        this.runPose(w.run),
        this.crouchPose(w.crouch),
        this.airPose(w.air, !1),
        this.airPose(w.airCrouch, !0),
        s_(w.g, w.idle, w.run, this.runAmp),
        s_(w.g, w.g, w.crouch, this.crouch),
        s_(w.a, w.air, w.airCrouch, this.crouch),
        this.apply(s_(w.out, w.a, w.g, this.ground), a),
        this.bodyYaw
      );
    }
    idlePose(e) {
      e.fill(0);
      let t = this.time,
        n = Math.sin(t * 1.7);
      ((e[3] = Math.sin(t * 0.6) * 1.2),
        (e[4] = 2 + n * 0.7),
        (e[6] = -1 - n * 0.9),
        (e[10] = n * 0.4));
      for (let [n, r, i, a] of [
        [12, 13, 14, 1],
        [16, 17, 18, -1],
      ])
        ((e[n] = 3), (e[i] = 6), (e[r] = 3 - a * Math.sin(t * 0.6) * 1.2));
      ((e[20] = 4 + n),
        (e[21] = 9 + n * 0.8),
        (e[22] = 16),
        (e[23] = 24 + n),
        (e[24] = 10),
        (e[25] = 62));
    }
    runPose(e) {
      e.fill(0);
      let t = this.phase,
        n = Math.sin(t),
        r = Math.cos(t);
      ((e[0] = -1.6 * (1 + Math.cos(2 * t)) * 0.5 - 0.6),
        (e[2] = -8 * n),
        (e[4] = 9),
        (e[5] = 4 * n),
        (e[6] = 4),
        (e[7] = 8 * n),
        (e[10] = -6));
      let i = (t, n, r, i, a) => {
        ((e[r] = 38 * t + 6),
          (e[i] = 14 + 22 * Math.max(0, -t) + 62 * Math.max(0, n) ** 1.4),
          (e[a] = 12 * t - 6));
      };
      (i(n, r, 12, 14, 15),
        i(-n, -r, 16, 18, 19),
        (e[13] = e[17] = 2),
        (e[20] = -40 * n + 6),
        (e[23] = 26 * n + 22),
        (e[21] = e[24] = 10),
        (e[22] = 78 + 18 * n),
        (e[25] = 80 - 12 * n));
    }
    crouchPose(e) {
      e.fill(0);
      let t = 14.5 * u_,
        n = this.runAmp,
        r = Math.sin(this.phase);
      ((e[0] = -14.5), (e[4] = 20), (e[6] = 10), (e[9] = -12), (e[10] = -10));
      for (let [i, a, o, s, c] of [
        [12, 13, 14, 15, 1],
        [16, 17, 18, 19, -1],
      ]) {
        let l = c * r * n * 11,
          [u, d] = this.legIK(
            1 + l,
            this.hipZ -
              t -
              4.5 -
              Math.max(0, c * Math.cos(this.phase)) * n * 3.5,
          );
        ((e[i] = u), (e[o] = d), (e[s] = 0), (e[a] = 7));
      }
      ((e[20] = 28 - 14 * r * n),
        (e[23] = 34 + 10 * r * n),
        (e[21] = e[24] = 12),
        (e[22] = 62),
        (e[25] = 70));
    }
    airPose(e, t) {
      e.fill(0);
      let n = this.tuck;
      (t
        ? ((e[0] = -13),
          (e[4] = 14),
          (e[6] = 6),
          (e[9] = -8),
          (e[10] = -6),
          (e[12] = 88),
          (e[14] = 128),
          (e[16] = 76),
          (e[18] = 120),
          (e[15] = e[19] = -14),
          (e[13] = e[17] = 10))
        : ((e[4] = 5 + 4 * n),
          (e[6] = 2),
          (e[10] = -4),
          (e[12] = 18 + 48 * n),
          (e[14] = 22 + 76 * n),
          (e[16] = 6 + 34 * n),
          (e[18] = 34 + 56 * n),
          (e[15] = -18 + 6 * n),
          (e[19] = -22 + 8 * n),
          (e[13] = 5),
          (e[17] = 4)),
        (e[20] = 14),
        (e[23] = 26),
        (e[21] = 26 + 12 * n),
        (e[24] = 18 + 10 * n),
        (e[22] = 38),
        (e[25] = 64));
    }
    set(e, t, n, r, i = `YXZ`) {
      (this.e.set(t * r_, n * r_, r * r_, i),
        this.local[e].setFromEuler(this.e));
    }
    apply(e, t) {
      let n = this.idx;
      for (let e of this.local) e.identity();
      let r = o_(this.viewYaw - this.bodyYaw),
        i = this.viewPitch,
        a = this.lean,
        o = this.legYaw;
      (this.set(n.Pelvis, e[1], e[2] + o, e[3] - a),
        this.set(
          n.Spine,
          (e[4] + i * 0.08) * 0.5,
          (e[5] - o * 0.5 + r * 0.2) * 0.5,
          a * 0.08,
        ),
        this.set(
          n.Spine1,
          (e[4] + i * 0.08) * 0.5,
          (e[5] - o * 0.5 + r * 0.2) * 0.5,
          a * 0.07,
        ),
        this.set(
          n.Spine2,
          (e[6] + i * 0.15) * 0.5,
          (e[7] - o * 0.5 + r * 0.3) * 0.5,
          (e[8] + a * 0.1) * 0.5,
        ),
        this.set(
          n.Spine4,
          (e[6] + i * 0.15) * 0.5,
          (e[7] - o * 0.5 + r * 0.3) * 0.5,
          (e[8] + a * 0.1) * 0.5,
        ),
        this.set(n.Neck1, e[9] + i * 0.25, r * 0.2, 0),
        this.set(
          n.Head1,
          e[10] + i_(i * 0.45, -38, 40),
          r * 0.3,
          e[11] + a * 0.45,
        ),
        this.set(n.L_Thigh, -e[12], 0, e[13] + Math.max(0, -a) * 0.3, `XZY`),
        this.set(n.L_Calf, e[14], 0, 0, `XYZ`),
        this.set(n.L_Foot, -(e[15] + e[14] - e[12]) * 0.85, 0, 0, `XYZ`),
        this.set(n.R_Thigh, -e[16], 0, -e[17] - Math.max(0, a) * 0.3, `XZY`),
        this.set(n.R_Calf, e[18], 0, 0, `XYZ`),
        this.set(n.R_Foot, -(e[19] + e[18] - e[16]) * 0.85, 0, 0, `XYZ`),
        this.set(n.L_UpperArm, -e[20], 0, e[21] - a * 0.9, `XZY`),
        this.set(n.L_Forearm, -e[22], 0, 0, `XYZ`),
        this.set(n.R_UpperArm, -e[23], 0, -e[24] - a * 0.9, `XZY`),
        this.set(n.R_Forearm, -e[25], 0, 0, `XYZ`),
        this.set(n.R_Hand, 20, -35, 0, `XYZ`));
      let s = this.r.csBones,
        c = this.q,
        l = this.m.elements,
        u = this.rot,
        d = (e[0] - this.dip * 10) * u_;
      for (let e = 0; e < s; e++) {
        let n = this.joints[e];
        c.copy(n.cpInv)
          .multiply(c_)
          .multiply(this.local[e])
          .multiply(l_)
          .multiply(n.c);
        for (let t of this.curl)
          t.bone === e &&
            c.multiply(new cn().setFromAxisAngle(t.axis, t.amount));
        this.m.makeRotationFromQuaternion(c);
        let [r, i, a] = n.pivot;
        if (
          ((u[0] = l[0]),
          (u[1] = l[4]),
          (u[2] = l[8]),
          (u[4] = l[1]),
          (u[5] = l[5]),
          (u[6] = l[9]),
          (u[8] = l[2]),
          (u[9] = l[6]),
          (u[10] = l[10]),
          (u[3] = r - (u[0] * r + u[1] * i + u[2] * a)),
          (u[7] = i - (u[4] * r + u[5] * i + u[6] * a)),
          (u[11] = a - (u[8] * r + u[9] * i + u[10] * a)),
          n.parent < 0)
        ) {
          let n = e * 12;
          for (let e = 0; e < 4; e++) {
            let r = u[e],
              i = u[4 + e],
              a = u[8 + e] + (e === 3 ? d : 0);
            ((t[n + e] = -i), (t[n + 4 + e] = r), (t[n + 8 + e] = a));
          }
        } else {
          let r = n.parent * 12,
            i = e * 12;
          for (let e = 0; e < 3; e++) {
            let n = t[r + e * 4],
              a = t[r + e * 4 + 1],
              o = t[r + e * 4 + 2],
              s = t[r + e * 4 + 3];
            ((t[i + e * 4] = n * u[0] + a * u[4] + o * u[8]),
              (t[i + e * 4 + 1] = n * u[1] + a * u[5] + o * u[9]),
              (t[i + e * 4 + 2] = n * u[2] + a * u[6] + o * u[10]),
              (t[i + e * 4 + 3] = n * u[3] + a * u[7] + o * u[11] + s));
          }
        }
      }
    }
  },
  f_ = (e, t) => nl(e, 0, t),
  p_ = { idle: 4, draw: 1, slash1: 1, slash2: 1, stab: 1.3 },
  m_ = (e, t, n) => ({ t: e, o: t, a: n }),
  h_ = {
    draw: [
      m_(0, [-2, -1.5, -8], [-25, 0, 50]),
      m_(0.3, [0.4, 0.3, 0.5], [6, 0, -10]),
      m_(0.55, [0, 0, 0], [-2, 0, 3]),
      m_(0.8, [0, 0, 0], [0, 0, 0]),
    ],
    slash1: [
      m_(0, [0, 0, 0], [0, 0, 0]),
      m_(0.07, [-0.4, -1.4, 1], [-8, 0, 38]),
      m_(0.19, [2.2, 5.5, -0.6], [36, 18, -70]),
      m_(0.3, [1.4, 4.8, -1.4], [26, 14, -60]),
      m_(0.62, [0, 0, 0], [0, 0, 0]),
    ],
    slash2: [
      m_(0, [0, 0, 0], [0, 0, 0]),
      m_(0.08, [0.3, 3.2, 1.2], [-6, 8, -45]),
      m_(0.2, [2.2, -1.5, -0.6], [34, -12, 62]),
      m_(0.31, [1.2, -1.8, -1.3], [24, -8, 50]),
      m_(0.62, [0, 0, 0], [0, 0, 0]),
    ],
    stab: [
      m_(0, [0, 0, 0], [0, 0, 0]),
      m_(0.22, [-1.4, 0.2, 0.9], [-16, 0, 6]),
      m_(0.36, [4.5, 4.2, 2.6], [78, 12, -6]),
      m_(0.6, [4.2, 4, 2.4], [76, 11, -6]),
      m_(1.05, [0, 0, 0], [0, 0, 0]),
    ],
  };
function g_(e, t, n, r) {
  let i = 0;
  for (; i < e.length - 2 && t > e[i + 1].t; ) i++;
  let a = e[i],
    o = e[Math.min(e.length - 1, i + 1)],
    s = o.t > a.t ? fl(t, a.t, o.t) : 1;
  for (let e = 0; e < 3; e++)
    ((n[e] = a.o[e] + (o.o[e] - a.o[e]) * s),
      (r[e] = a.a[e] + (o.a[e] - a.a[e]) * s));
}
var __ = class {
    r;
    rest;
    right;
    pivot;
    m = new Float32Array(12);
    m2 = new Float32Array(12);
    o = [0, 0, 0];
    a = [0, 0, 0];
    constructor(e) {
      this.r = e;
      let t = e.names.length,
        n = (this.rest = new Float32Array(t * 12));
      for (let r = 0; r < t; r++)
        (n.set(e.bind.subarray(r * 12, r * 12 + 12), r * 12),
          (n[r * 12 + 11] -= 600));
      let r = (t) => e.at(t),
        i = (t) => e.bone(t),
        a = r(`Right_Hand`),
        o = [`Index`, `Middle`, `Ring`, `Pinky`].map((e) => r(`Right_${e}01`)),
        s = R(
          o.reduce((e, t) => I(e, t), [0, 0, 0]),
          0.25,
        ),
        c = z(L(s, a)),
        l = L(o[0], o[3]);
      l = z(L(l, R(c, zc(l, c))));
      let u = Bc(c, l);
      (zc(u, L(r(`Right_Thumb02`), a)) < 0 && (u = R(u, -1)), zc(u, Bc(c, l)));
      let d = I(I(a, R(c, Vc(L(s, a)) * Vl)), R(u, 1.35)),
        f = z(I(l, R(c, 0.12))),
        p = z(L(c, R(f, zc(c, f)))),
        m = Bc(f, p),
        h = new Float32Array(12);
      cl(p, m, f, d, h);
      let g = z([0.267, -0.131, 0.955]),
        _ = z(L([0.89, 0.413, -0.192], R(g, zc([0.89, 0.413, -0.192], g)))),
        v = Bc(g, _),
        y = new Float32Array(12),
        b = new Float32Array(12),
        x = new Float32Array(12);
      (cl(_, v, g, [14.4, -4.08, -5.19], y),
        b.set([
          p[0],
          p[1],
          p[2],
          -zc(p, d),
          m[0],
          m[1],
          m[2],
          -zc(m, d),
          f[0],
          f[1],
          f[2],
          -zc(f, d),
        ]),
        H(y, 0, b, 0, x, 0));
      let S = f_(x, a),
        C = (t, r) => H(t, 0, e.bind, r * 12, n, r * 12),
        w = i(`Right_Hand`);
      for (let t of e.subtree(w)) C(x, t);
      (C(x, i(`R_wrist_helper`)), C(x, i(`Root98`)));
      let T = z(Bc(c, u)),
        E = new Float32Array(12),
        D = new Float32Array(12),
        O = new Float32Array(12),
        k = (t, a, o, s = 0) => {
          (D.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]),
            s && sl(u, (s * Math.PI) / 180, r(t[0]), D),
            t.forEach((t, s) => {
              let c = i(t),
                l = r(t);
              (sl(o, (a[s] * Math.PI) / 180, l, E),
                H(D, 0, E, 0, O, 0),
                D.set(O),
                H(x, 0, D, 0, E, 0),
                H(E, 0, e.bind, c * 12, n, c * 12));
            }));
        },
        A = ou(Rl, e);
      (k(
        [`Right_Index01`, `Right_Index02`, `Right_Index03`],
        A.index.c,
        T,
        A.index.spread,
      ),
        k(
          [`Right_Middle01`, `Right_Middle02`, `Right_Middle03`],
          A.middle.c,
          T,
          A.middle.spread,
        ),
        k(
          [`Right_Ring01`, `Right_Ring02`, `Right_Ring03`],
          A.ring.c,
          T,
          A.ring.spread,
        ),
        k(
          [`Right_Pinky01`, `Right_Pinky02`, `Right_Pinky03`],
          A.pinky.c,
          T,
          A.pinky.spread,
        ));
      {
        let e = r(`Right_Thumb01`),
          t = z(Bc(z(L(r(`Right_Thumb02`), e)), u));
        k(
          [`Right_Thumb01`, `Right_Thumb02`, `Right_Thumb03`],
          A.thumb.c,
          t,
          A.thumb.spread,
        );
      }
      i(`Right_Arm`);
      let ee = z(L(a, r(`Right_Arm`))),
        te = z([0.9, 0.3, 0.26]),
        ne = ul(x, 0, ee),
        re = Bc(ne, te),
        ie = Vc(re),
        ae = new Float32Array(12);
      ie > 1e-6
        ? sl(R(re, 1 / ie), Math.atan2(ie, zc(ne, te)), S, ae)
        : ae.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]);
      let oe = new Float32Array(12);
      H(ae, 0, x, 0, oe, 0);
      for (let e of [`Root36`, `Right_Arm`, `eff18`, `Root23`]) C(oe, i(e));
      ((this.pivot = S),
        (this.armDir = te),
        (this.armLen = Vc(L(a, r(`Right_Arm`)))));
      for (let e of [`knife_Parent`, `Knife_Handle`])
        H(x, 0, h, 0, n, i(e) * 12);
      ((this.right = [
        ...e.subtree(i(`Root36`)),
        i(`knife_Parent`),
        i(`Knife_Handle`),
      ]),
        (this.arm = [`Root36`, `Right_Arm`, `eff18`, `Root23`].map(i)),
        (this.hand = this.right.filter((e) => !this.arm.includes(e))));
    }
    armDir;
    armLen;
    arm;
    hand;
    swing = new Float32Array(12);
    pose(e, t, n) {
      if ((n.set(this.rest), e === `idle`)) return;
      g_(h_[e], t, this.o, this.a);
      let r = this.pivot;
      (ol(this.a[0], this.a[1], this.a[2], 0, 0, 0, this.m),
        (this.m[3] =
          r[0] -
          (this.m[0] * r[0] + this.m[1] * r[1] + this.m[2] * r[2]) +
          this.o[0]),
        (this.m[7] =
          r[1] -
          (this.m[4] * r[0] + this.m[5] * r[1] + this.m[6] * r[2]) +
          this.o[1]),
        (this.m[11] =
          r[2] -
          (this.m[8] * r[0] + this.m[9] * r[1] + this.m[10] * r[2]) +
          this.o[2]));
      for (let e of this.hand)
        (H(this.m, 0, this.rest, e * 12, this.m2, 0), n.set(this.m2, e * 12));
      let i = this.o,
        a = this.armDir,
        o = this.armLen,
        s = z([
          a[0] * o + i[0] * 0.6,
          a[1] * o + i[1] * 0.6,
          a[2] * o + i[2] * 0.6,
        ]),
        c = Bc(a, s),
        l = Vc(c);
      (l > 1e-6
        ? sl(R(c, 1 / l), Math.atan2(l, zc(a, s)), r, this.swing)
        : this.swing.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]),
        (this.swing[3] += i[0]),
        (this.swing[7] += i[1]),
        (this.swing[11] += i[2]));
      for (let e of this.arm)
        (H(this.swing, 0, this.rest, e * 12, this.m2, 0),
          n.set(this.m2, e * 12));
    }
  },
  v_ = Math.PI / 180,
  y_ = (e, t) => [e[0] + t[0], e[1] + t[1], e[2] + t[2]],
  b_ = (e, t) => [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
  x_ = (e, t) => [e[0] * t, e[1] * t, e[2] * t],
  S_ = (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
  C_ = (e, t) => [
    e[1] * t[2] - e[2] * t[1],
    e[2] * t[0] - e[0] * t[2],
    e[0] * t[1] - e[1] * t[0],
  ],
  w_ = (e) => {
    let t = Math.hypot(e[0], e[1], e[2]) || 1;
    return [e[0] / t, e[1] / t, e[2] / t];
  },
  T_ = (e, t) => [e[t * 12 + 3], e[t * 12 + 7], e[t * 12 + 11]],
  E_ = (e, t, n) => [e[t * 12 + n], e[t * 12 + 4 + n], e[t * 12 + 8 + n]],
  D_ = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e),
  Z = {
    lin: (e) => D_(e),
    io: (e) => ((e = D_(e)), e * e * (3 - 2 * e)),
    whip: (e) => ((e = D_(e)), e * e * e * (e * (e * 6 - 15) + 10)),
    out: (e) => ((e = D_(e)), 1 - (1 - e) ** 3),
    out2: (e) => ((e = D_(e)), 1 - (1 - e) ** 2),
    in: (e) => ((e = D_(e)), e * e * e),
    in2: (e) => ((e = D_(e)), e * e),
    back: (e) => ((e = D_(e)), 1 + 3.2 * (e - 1) ** 3 + 2.2 * (e - 1) ** 2),
  };
function Q(e) {
  return (t) => {
    if (t <= e[0][0]) return e[0][1];
    for (let n = 1; n < e.length; n++) {
      let [r, i, a] = e[n];
      if (t <= r) {
        let [o, s] = e[n - 1],
          c = r > o ? (a ?? Z.io)((t - o) / (r - o)) : 1;
        return s + (i - s) * c;
      }
    }
    return e[e.length - 1][1];
  };
}
function O_(e) {
  return (t) => {
    if (t <= e[0][0]) return e[0][1];
    for (let n = 1; n < e.length; n++) {
      let [r, i, a] = e[n];
      if (t <= r) {
        let [o, s, c] = e[n - 1],
          l = r - o,
          u = (t - o) / l,
          d = u * u,
          f = d * u;
        return (
          (2 * f - 3 * d + 1) * s +
          (f - 2 * d + u) * l * c +
          (-2 * f + 3 * d) * i +
          (f - d) * l * a
        );
      }
    }
    return e[e.length - 1][1];
  };
}
var k_ = (e, t, n) => {
    if (e <= t || e >= n) return 0;
    let r = (e - t) / (n - t);
    return Math.sin(Math.PI * r) * Math.exp(-2.2 * r) * 1.9;
  },
  A_ = (e, t, n, r) => {
    if (e <= t || e >= n) return 0;
    let i = (e - t) / (n - t);
    return 4 * r * i * (1 - i);
  },
  j_ = class {
    m = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]);
    t = new Float32Array(12);
    u = new Float32Array(12);
    reset() {
      return (this.m.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]), this);
    }
    rot(e, t, n = [0, 0, 0]) {
      return t
        ? (sl(w_(e), t * v_, n, this.t),
          H(this.t, 0, this.m, 0, this.u, 0),
          this.m.set(this.u),
          this)
        : this;
    }
    move(e) {
      return (
        (this.m[3] += e[0]),
        (this.m[7] += e[1]),
        (this.m[11] += e[2]),
        this
      );
    }
  },
  M_ = [1, 0, 0],
  N_ = [0, 1, 0],
  P_ = [0, 0, 1],
  F_ = class {
    r;
    forearm;
    helper;
    hand;
    knife;
    all;
    fingers;
    kb;
    handBone;
    armBone;
    T = new Float32Array(12);
    T2 = new Float32Array(12);
    T3 = new Float32Array(12);
    H = new Float32Array(12);
    Hi = new Float32Array(12);
    nSign = 1;
    constructor(e = _l()) {
      this.r = e;
      let t = (t) => e.bone(t);
      ((this.forearm = [`Root36`, `Right_Arm`, `eff18`, `Root23`].map(t)),
        (this.helper = [`Root98`, `R_wrist_helper`].map(t)),
        (this.handBone = t(`Right_Hand`)),
        (this.armBone = t(`Right_Arm`)),
        (this.hand = e.subtree(this.handBone)),
        (this.kb = t(`Knife_Handle`)),
        (this.knife = [t(`knife_Parent`), this.kb]),
        (this.all = [
          ...this.forearm,
          ...this.helper,
          ...this.hand,
          ...this.knife,
        ]));
      let n = (e) => [1, 2, 3].map((n) => t(`Right_${e}0${n}`));
      this.fingers = {
        index: n(`Index`),
        middle: n(`Middle`),
        ring: n(`Ring`),
        pinky: n(`Pinky`),
        thumb: n(`Thumb`),
      };
      let r = this.frame(e.bind);
      this.nSign =
        S_(C_(r.ax, r.w), b_(T_(e.bind, this.fingers.thumb[1]), r.wrist)) < 0
          ? -1
          : 1;
    }
    frame(e, t) {
      let n = T_(e, this.handBone),
        r = T_(e, this.armBone),
        i = [`index`, `middle`, `ring`, `pinky`].map((t) =>
          T_(e, this.fingers[t][0]),
        ),
        a = x_(y_(y_(i[0], i[1]), y_(i[2], i[3])), 0.25),
        o = w_(b_(a, n)),
        s = b_(i[0], i[3]);
      s = w_(b_(s, x_(o, S_(s, o))));
      let c = x_(C_(o, s), this.nSign),
        l = t ?? {};
      return (
        (l.wrist = n),
        (l.elbow = r),
        (l.fore = w_(b_(n, r))),
        (l.ax = o),
        (l.w = s),
        (l.n = c),
        (l.palmL = Math.hypot(a[0] - n[0], a[1] - n[1], a[2] - n[2])),
        (l.grip = T_(e, this.kb)),
        l
      );
    }
    rigid(e, t, n) {
      for (let r of n) (H(t, 0, e, r * 12, this.T3, 0), e.set(this.T3, r * 12));
    }
    arm(e, t, n, r, i = [0, 0, 0]) {
      if (!t && !n && !r && !i[0] && !i[1] && !i[2]) return;
      let a = this.frame(e);
      (sl(a.fore, t * v_, a.wrist, this.T),
        sl([0, 0, 1], r * v_, a.elbow, this.T2),
        H(this.T2, 0, this.T, 0, this.H, 0),
        sl(w_(C_(a.fore, [0, 0, 1])), n * v_, a.elbow, this.T2),
        H(this.T2, 0, this.H, 0, this.T, 0),
        (this.T[3] += i[0]),
        (this.T[7] += i[1]),
        (this.T[11] += i[2]),
        this.rigid(e, this.T, this.all));
    }
    wrist(e, t, n) {
      if (!t && !n) return;
      let r = this.frame(e),
        i = w_(C_(r.ax, r.n));
      (sl(i, t * v_, r.wrist, this.T),
        sl(r.n, n * v_, r.wrist, this.T2),
        H(this.T2, 0, this.T, 0, this.H, 0),
        this.rigid(e, this.H, this.hand),
        this.rigid(e, this.H, this.knife),
        sl(i, t * 0.5 * v_, r.wrist, this.T),
        sl(r.n, n * 0.5 * v_, r.wrist, this.T2),
        H(this.T2, 0, this.T, 0, this.H, 0),
        this.rigid(e, this.H, this.helper));
    }
    curl(e, t, n, r = 0, i = this.frame(e)) {
      let a = this.fingers[t],
        o;
      ((o = w_(
        C_(t === `thumb` ? w_(b_(T_(e, a[1]), T_(e, a[0]))) : i.ax, i.n),
      )),
        r && (sl(i.n, r * v_, T_(e, a[0]), this.T), this.rigid(e, this.T, a)));
      for (let t = 0; t < 3; t++)
        n[t] &&
          (sl(o, n[t] * v_, T_(e, a[t]), this.T),
          this.rigid(e, this.T, a.slice(t)));
    }
    knifeXf(e, t, n = this.frame(e)) {
      (this.handMatrix(n, this.H, this.Hi),
        H(this.H, 0, t.m, 0, this.T, 0),
        H(this.T, 0, this.Hi, 0, this.T2, 0),
        this.rigid(e, this.T2, this.knife));
    }
    handMatrix(e, t, n) {
      let { ax: r, w: i, n: a, grip: o } = e;
      (t.set([
        r[0],
        i[0],
        a[0],
        o[0],
        r[1],
        i[1],
        a[1],
        o[1],
        r[2],
        i[2],
        a[2],
        o[2],
      ]),
        n.set([
          r[0],
          r[1],
          r[2],
          -S_(r, o),
          i[0],
          i[1],
          i[2],
          -S_(i, o),
          a[0],
          a[1],
          a[2],
          -S_(a, o),
        ]));
    }
    toModel(e, t) {
      return [
        e.grip[0] + e.ax[0] * t[0] + e.w[0] * t[1] + e.n[0] * t[2],
        e.grip[1] + e.ax[1] * t[0] + e.w[1] * t[1] + e.n[1] * t[2],
        e.grip[2] + e.ax[2] * t[0] + e.w[2] * t[1] + e.n[2] * t[2],
      ];
    }
    toHand(e, t) {
      let n = b_(t, e.grip);
      return [S_(n, e.ax), S_(n, e.w), S_(n, e.n)];
    }
  },
  I_ = new Float64Array(4),
  L_ = new Float64Array(4);
function R_(e, t, n) {
  let r = e[t],
    i = e[t + 1],
    a = e[t + 2],
    o = e[t + 4],
    s = e[t + 5],
    c = e[t + 6],
    l = e[t + 8],
    u = e[t + 9],
    d = e[t + 10],
    f = r + s + d;
  if (f > 0) {
    let e = Math.sqrt(f + 1) * 2;
    ((n[3] = 0.25 * e),
      (n[0] = (u - c) / e),
      (n[1] = (a - l) / e),
      (n[2] = (o - i) / e));
  } else if (r > s && r > d) {
    let e = Math.sqrt(1 + r - s - d) * 2;
    ((n[3] = (u - c) / e),
      (n[0] = 0.25 * e),
      (n[1] = (i + o) / e),
      (n[2] = (a + l) / e));
  } else if (s > d) {
    let e = Math.sqrt(1 + s - r - d) * 2;
    ((n[3] = (a - l) / e),
      (n[0] = (i + o) / e),
      (n[1] = 0.25 * e),
      (n[2] = (c + u) / e));
  } else {
    let e = Math.sqrt(1 + d - r - s) * 2;
    ((n[3] = (o - i) / e),
      (n[0] = (a + l) / e),
      (n[1] = (c + u) / e),
      (n[2] = 0.25 * e));
  }
}
function z_(e, t, n, r) {
  if (!(n <= 0))
    for (let i of r) {
      let r = i * 12;
      if (n >= 1) {
        e.set(t.subarray(r, r + 12), r);
        continue;
      }
      (R_(e, r, I_), R_(t, r, L_));
      let a =
          I_[0] * L_[0] + I_[1] * L_[1] + I_[2] * L_[2] + I_[3] * L_[3] < 0
            ? -1
            : 1,
        o = I_[0] + (L_[0] * a - I_[0]) * n,
        s = I_[1] + (L_[1] * a - I_[1]) * n,
        c = I_[2] + (L_[2] * a - I_[2]) * n,
        l = I_[3] + (L_[3] * a - I_[3]) * n,
        u = Math.hypot(o, s, c, l) || 1;
      ((o /= u), (s /= u), (c /= u), (l /= u));
      let d = e[r + 3] + (t[r + 3] - e[r + 3]) * n,
        f = e[r + 7] + (t[r + 7] - e[r + 7]) * n,
        p = e[r + 11] + (t[r + 11] - e[r + 11]) * n;
      ((e[r] = 1 - 2 * (s * s + c * c)),
        (e[r + 1] = 2 * (o * s - c * l)),
        (e[r + 2] = 2 * (o * c + s * l)),
        (e[r + 3] = d),
        (e[r + 4] = 2 * (o * s + c * l)),
        (e[r + 5] = 1 - 2 * (o * o + c * c)),
        (e[r + 6] = 2 * (s * c - o * l)),
        (e[r + 7] = f),
        (e[r + 8] = 2 * (o * c - s * l)),
        (e[r + 9] = 2 * (s * c + o * l)),
        (e[r + 10] = 1 - 2 * (o * o + s * s)),
        (e[r + 11] = p));
    }
}
var B_ = new Float32Array(12),
  V_ = new Float32Array(12),
  H_ = new Float32Array(12),
  U_ = new Float32Array(),
  W_ = new Float32Array(),
  G_ = new Float32Array();
function K_(e, t, n, r, i, a) {
  if (n <= 0 && !(a && a.w > 0)) return;
  let o = e.length;
  (U_.length < o &&
    ((U_ = new Float32Array(o)),
    (W_ = new Float32Array(o)),
    (G_ = new Float32Array(o))),
    G_.set(e));
  let s = new Set(r);
  for (let e of r) {
    let n = i(e),
      r = e * 12;
    n >= 0 && s.has(n)
      ? (q_(G_, n * 12, H_),
        H(H_, 0, G_, r, U_, r),
        q_(t, n * 12, H_),
        H(H_, 0, t, r, W_, r))
      : (U_.set(G_.subarray(r, r + 12), r), W_.set(t.subarray(r, r + 12), r));
  }
  a
    ? (z_(
        U_,
        W_,
        n,
        r.filter((e) => !a.bones.has(e)),
      ),
      z_(
        U_,
        W_,
        a.w,
        r.filter((e) => a.bones.has(e)),
      ))
    : z_(U_, W_, n, r);
  for (let t of r) {
    let n = i(t),
      r = t * 12;
    n >= 0 && s.has(n)
      ? (B_.set(U_.subarray(r, r + 12)),
        H(e, n * 12, B_, 0, V_, 0),
        e.set(V_, r))
      : e.set(U_.subarray(r, r + 12), r);
  }
}
function q_(e, t, n) {
  let r = e[t],
    i = e[t + 1],
    a = e[t + 2],
    o = e[t + 3],
    s = e[t + 4],
    c = e[t + 5],
    l = e[t + 6],
    u = e[t + 7],
    d = e[t + 8],
    f = e[t + 9],
    p = e[t + 10],
    m = e[t + 11];
  ((n[0] = r),
    (n[1] = s),
    (n[2] = d),
    (n[3] = -(r * o + s * u + d * m)),
    (n[4] = i),
    (n[5] = c),
    (n[6] = f),
    (n[7] = -(i * o + c * u + f * m)),
    (n[8] = a),
    (n[9] = l),
    (n[10] = p),
    (n[11] = -(a * o + l * u + p * m)));
}
var J_ = Math.PI / 180,
  Y_ = 180 / Math.PI,
  X_ = [`index`, `middle`, `ring`, `pinky`, `thumb`],
  Z_ = {
    finger: {
      flex: [
        { min: -15, max: 125 },
        { min: -10, max: 115 },
        { min: -15, max: 95 },
      ],
      abd: { min: -25, max: 25 },
    },
    thumb: {
      flex: [
        { min: 0, max: 70 },
        { min: -15, max: 75 },
        { min: -20, max: 95 },
      ],
    },
  },
  Q_ = (e, t) => [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
  $_ = (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
  ev = (e, t) => [
    e[1] * t[2] - e[2] * t[1],
    e[2] * t[0] - e[0] * t[2],
    e[0] * t[1] - e[1] * t[0],
  ],
  tv = (e) => {
    let t = Math.hypot(e[0], e[1], e[2]) || 1;
    return [e[0] / t, e[1] / t, e[2] / t];
  },
  nv = (e, t) => [e[t * 12 + 3], e[t * 12 + 7], e[t * 12 + 11]],
  rv = (e, t) => tv([e[t * 12], e[t * 12 + 4], e[t * 12 + 8]]);
function iv(e, t, n) {
  let r = Q_(e, [n[0] * $_(e, n), n[1] * $_(e, n), n[2] * $_(e, n)]),
    i = Q_(t, [n[0] * $_(t, n), n[1] * $_(t, n), n[2] * $_(t, n)]);
  return Math.atan2($_(ev(r, i), n), $_(r, i)) * Y_;
}
var av = new WeakMap();
function ov(e, t) {
  let n = nv(e, t.hand),
    r = [`index`, `middle`, `ring`, `pinky`].map((n) => nv(e, t.chains[n][0])),
    i = tv(
      Q_(
        [
          (r[0][0] + r[1][0] + r[2][0] + r[3][0]) / 4,
          (r[0][1] + r[1][1] + r[2][1] + r[3][1]) / 4,
          (r[0][2] + r[1][2] + r[2][2] + r[3][2]) / 4,
        ],
        n,
      ),
    ),
    a = Q_(r[0], r[3]),
    o = $_(a, i);
  a = tv([a[0] - i[0] * o, a[1] - i[1] * o, a[2] - i[2] * o]);
  let s = ev(i, a),
    c = [s[0] * t.nSign, s[1] * t.nSign, s[2] * t.nSign];
  return { wrist: n, ax: i, w: a, n: c, c: tv(ev(i, c)) };
}
var sv = (e, t) => [$_(t, e.ax), $_(t, e.w), $_(t, e.n)],
  cv = (e, t) => [
    e.ax[0] * t[0] + e.w[0] * t[1] + e.n[0] * t[2],
    e.ax[1] * t[0] + e.w[1] * t[1] + e.n[1] * t[2],
    e.ax[2] * t[0] + e.w[2] * t[1] + e.n[2] * t[2],
  ];
function lv(e) {
  let t = av.get(e);
  if (t) return t;
  t = [];
  for (let [n, r, i] of [
    [`R`, `Right_`, [`Right_Thumb01`, `Right_Thumb02`, `Right_Thumb03`]],
    [`L`, `Left_`, [`Left_Thumb01`, `Left_Thumb_02`, `Left_Thumb03`]],
  ]) {
    let a = (t) => e.bone(t),
      o = (e) => [1, 2, 3].map((t) => a(`${r}${e}0${t}`)),
      s = {
        index: o(`Index`),
        middle: o(`Middle`),
        ring: o(`Ring`),
        pinky: o(`Pinky`),
        thumb: i.map(a),
      },
      c = { hand: a(`${r}Hand`), chains: s, nSign: 1 },
      l = ov(e.bind, c);
    c.nSign = $_(l.n, Q_(nv(e.bind, s.thumb[1]), l.wrist)) < 0 ? -1 : 1;
    let u = ov(e.bind, c),
      d = {};
    for (let t of X_) {
      let n = s[t];
      d[t] =
        Math.asin(
          Math.max(
            -1,
            Math.min(1, $_(tv(Q_(nv(e.bind, n[1]), nv(e.bind, n[0]))), u.c)),
          ),
        ) * Y_;
    }
    let f = tv(Q_(nv(e.bind, s.thumb[1]), nv(e.bind, s.thumb[0])));
    t.push({
      side: n,
      ...c,
      abd0: d,
      thumbD1: sv(u, f),
      thumbAxis: sv(u, tv(ev(f, u.n))),
    });
  }
  return (av.set(e, t), t);
}
var uv = new Float32Array(12),
  dv = new Float32Array(12);
function fv(e, t, n, r, i, a) {
  sl(r, i * J_, a, uv);
  for (let r = n; r < t.length; r++) {
    let n = t[r];
    (H(uv, 0, e, n * 12, dv, 0), e.set(dv, n * 12));
  }
}
var pv = (e, t) => (e < t.min ? t.min - e : e > t.max ? t.max - e : 0);
function mv(e, t, n = `R`) {
  let r = 0;
  for (let i of lv(t)) {
    if (n === `R` && i.side !== `R`) continue;
    let t = ov(e, i);
    for (let n of X_) {
      let a = i.chains[n];
      if (n === `thumb`) {
        let n = tv(cv(t, i.thumbAxis));
        for (let t of [1, 2]) {
          let i = a.map((t) => nv(e, t)),
            o = tv(Q_(i[1], i[0])),
            s = tv(Q_(i[2], i[1])),
            c = pv(
              t === 1 ? iv(o, s, n) : iv(s, rv(e, a[2]), n),
              Z_.thumb.flex[t],
            );
          Math.abs(c) > 0.001 && (fv(e, a, t, n, c, i[t]), r++);
        }
        continue;
      }
      {
        let o = nv(e, a[0]),
          s = tv(Q_(nv(e, a[1]), o)),
          c = pv(
            Math.asin(Math.max(-1, Math.min(1, $_(s, t.c)))) * Y_ - i.abd0[n],
            Z_.finger.abd,
          );
        if (Math.abs(c) > 0.001) {
          let n = $_(ev(t.n, s), t.c) >= 0 ? 1 : -1;
          (fv(e, a, 0, t.n, c * n, o), r++);
        }
      }
      for (let n = 0; n < 3; n++) {
        let i = a.map((t) => nv(e, t)),
          o = pv(
            iv(
              n === 0 ? t.ax : tv(Q_(i[n], i[n - 1])),
              n < 2 ? tv(Q_(i[n + 1], i[n])) : rv(e, a[2]),
              t.c,
            ),
            Z_.finger.flex[n],
          );
        Math.abs(o) > 0.001 && (fv(e, a, n, t.c, o, i[n]), r++);
      }
    }
  }
  return r;
}
function hv(e, t, n) {
  let r = lv(t)[0],
    i = ov(e, r);
  return n === `thumb` ? tv(cv(i, r.thumbAxis)) : i.c;
}
function gv(e, t, n, r) {
  let i = lv(t)[0],
    a = ov(e, i),
    o = i.chains[n],
    s = o.map((t) => nv(e, t)),
    c = (t) => (t < 2 ? tv(Q_(s[t + 1], s[t])) : rv(e, o[2]));
  return n === `thumb`
    ? r === 0
      ? NaN
      : iv(c(r - 1), c(r), tv(cv(a, i.thumbAxis)))
    : iv(r === 0 ? a.ax : c(r - 1), c(r), a.c);
}
var _v = { roll: 62, pitch: 13, yaw: 15, shift: [1, 1.4, 1.3] };
function vv(e, t, n, r) {
  return e <= 0 || e >= r
    ? 0
    : e < t
      ? Z.out(e / t)
      : e > n
        ? 1 - Z.io((e - n) / (r - n))
        : 1;
}
var yv = -50,
  bv = { root: -35, spread: -15, detour: -65 },
  xv = { root: yv, spread: 0, detour: 0 };
function Sv(e) {
  return e.knife?.hold ?? Rl;
}
var Cv = {
  index: [4, 8, 4],
  middle: [6, 9, 6],
  ring: [12, 11, 7],
  pinky: [12, 14, 9],
};
function wv(e, t, n, r, i, a, o = [0, 0, 0], s = 0, c = !1) {
  if (r === `thumb`) return Tv(e, t, n, i, c);
  let l = e.arm.r,
    u = a ?? Cv[r],
    d = i <= 0 ? i : c ? Math.max(0, (i - 0.3) / 0.7) : i,
    f = i <= 0 ? 0 : c ? Math.min(1, i / 0.75) : i;
  s && i > 0 && e.arm.curl(t, r, [0, 0, 0], s * Math.min(1, i), n);
  let p = Z_.finger.flex;
  for (let i of [0, 1, 2]) {
    let a = i === 0 ? d : f;
    if ((!a && !o[i]) || Number.isNaN(u[i])) continue;
    let s = gv(t, l, r, i),
      c = (u[i] - s) * a + o[i];
    c = Math.max(p[i].min + 2 - s, Math.min(p[i].max - 3 - s, c));
    let m = [0, 0, 0];
    ((m[i] = c), Math.abs(c) > 1e-4 && e.arm.curl(t, r, m, 0, n));
  }
}
function Tv(e, t, n, r, i = !1) {
  if (!r) return;
  let a = Sv(e).thumb.c,
    o = (e) => Math.min(1, Math.max(0, e)),
    s = r < 0 ? r : o(i ? (r - 0.4) / 0.6 : r / 0.6),
    c = r < 0 ? r : o(i ? r / 0.6 : (r - 0.4) / 0.6),
    l = Sv(e).thumb.spread ?? 0,
    u = Math.abs(s),
    d = Sv(e).thumb.c[0] > 0 ? bv : xv;
  (e.arm.curl(
    t,
    `thumb`,
    [0, 0, 0],
    (d.spread - l) * s +
      d.detour * Math.sin(Math.PI * Math.min(1, u)) * Math.sign(s),
    n,
  ),
    e.arm.curl(t, `thumb`, [(d.root - a[0]) * s, 0, 0], 0, n));
  let f = e.arm.r,
    p = e.arm.fingers.thumb,
    m = Z_.thumb.flex,
    h = hv(t, f, `thumb`);
  for (let n of [1, 2]) {
    let r = gv(t, f, `thumb`, n),
      i = (Ev[n - 1] - r) * c;
    ((i = Math.max(m[n].min + 2 - r, Math.min(m[n].max - 3 - r, i))),
      !(Math.abs(i) < 1e-4) &&
        (sl(h, i * v_, T_(t, p[n]), Dv), e.arm.rigid(t, Dv, p.slice(n))));
  }
}
var Ev = [10, 8],
  Dv = new Float32Array(12),
  Ov = (e) => (
    (e = Math.min(1, Math.max(0, e))),
    1 + 2.3 * (e - 1) ** 3 + 1.3 * (e - 1) ** 2
  ),
  kv = [-7, -2.5, 2.5, 6];
function Av(e, t, n, r, i, a = 0, o) {
  let s = t.arm.frame(e);
  [`index`, `middle`, `ring`, `pinky`].forEach((c, l) => {
    let u = r + l * 0.012,
      d = i - l * 0.012,
      f = 0,
      p = n >= d;
    n >= u && n < d
      ? (f = Z.out((n - u) / 0.09))
      : n >= d && n < d + 0.16 && (f = 1 - Ov((n - d) / 0.16));
    let m = [0, 0, 0];
    if (a && o && n > u + 0.1 && n < d) {
      let e = ((n - o[0]) / (o[1] - o[0])) * Math.PI * 2 - l * 0.9,
        t = a * Math.sin(e);
      m = [t, t * 0.6, t * 0.3];
    }
    wv(t, e, s, c, f, void 0, m, kv[l] * Math.max(0, Math.min(1, f)), p);
  });
  let c = 0;
  (n > r - 0.1 && n < r
    ? (c = 0.5 * Z.io((n - (r - 0.1)) / 0.1))
    : n >= r && n < i + 0.06
      ? (c = 0.5 + 0.5 * Z.out((n - r) / 0.06))
      : n >= i + 0.06 && n < i + 0.26 && (c = 1 - Ov((n - (i + 0.06)) / 0.2)),
    Tv(t, e, s, c, n >= i + 0.06));
}
var jv = 0.065,
  Mv = 0.14,
  Nv = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  Pv = class {
    spec;
    cur = null;
    prev = null;
    prevT = 0;
    fade = 0;
    fadeLen = 0;
    buffered = !1;
    queued = !1;
    loops = 0;
    held = !1;
    out = [];
    constructor(e) {
      this.spec = e;
    }
    setSpec(e) {
      e !== this.spec && ((this.spec = e), this.reset());
    }
    get active() {
      return this.cur !== null && this.fadeLen === 0;
    }
    get trick() {
      return this.active ? this.cur.trick : -1;
    }
    get time() {
      return this.active ? this.cur.t : -1;
    }
    get isQueued() {
      return this.queued;
    }
    get loopCount() {
      return this.loops;
    }
    press() {
      let e = [],
        t = this.spec.tricks;
      if (!t.length) return e;
      if (!this.active)
        return (this.begin(0, 0), e.push({ type: `start`, trick: 0 }), e);
      let n = this.cur;
      if (n.trick + 1 >= t.length || this.queued) return e;
      let r = t[n.trick];
      return (
        n.t >= r.exit
          ? this.advance(e)
          : n.t >= r.open
            ? (this.queued = !0)
            : (this.buffered = !0),
        e
      );
    }
    cancel(e) {
      let t = [];
      if (!this.cur) return t;
      let n = this.active;
      return (
        (this.buffered = this.queued = !1),
        e === `draw`
          ? ((this.cur = this.prev = null), (this.fadeLen = 0))
          : n && ((this.fadeLen = jv), (this.fade = 0)),
        n && t.push({ type: `cancel`, reason: e }),
        t
      );
    }
    seek(e, t) {
      (this.reset(),
        !(e < 0 || e >= this.spec.tricks.length) &&
          (this.cur = {
            trick: e,
            t: Math.max(0, Math.min(t, this.spec.tricks[e].len - 1e-6)),
          }));
    }
    reset() {
      ((this.cur = this.prev = null),
        (this.fadeLen = 0),
        (this.buffered = this.queued = !1),
        (this.loops = 0));
    }
    remote(e) {
      let t = [];
      return (
        e === 1
          ? (this.begin(0, 0), t.push({ type: `start`, trick: 0 }))
          : e === 2 &&
            (this.active
              ? this.cur.trick + 1 < this.spec.tricks.length && this.advance(t)
              : this.spec.tricks.length > 1 &&
                (this.begin(1, this.spec.tricks[1].enter),
                t.push({ type: `trick`, trick: 1 }))),
        t
      );
    }
    update(e, t) {
      let n = this.out;
      if (((n.length = 0), (this.held = t), !this.cur)) return n;
      if (this.fadeLen > 0)
        return (
          (this.fade += e),
          this.fade >= this.fadeLen &&
            ((this.cur = this.prev = null), (this.fadeLen = 0)),
          n
        );
      this.prev &&
        ((this.prevT += e),
        (this.prev.t = Math.min(
          this.prev.t + e,
          this.spec.tricks[this.prev.trick].len,
        )),
        this.prevT >= 0.14 && (this.prev = null));
      let r = this.spec.tricks,
        i = this.cur,
        a = r[i.trick],
        o = i.t,
        s = o + e;
      this.buffered &&
        s >= a.open &&
        ((this.buffered = !1), i.trick + 1 < r.length && (this.queued = !0));
      let c = a.loop,
        l = this.spec.maxLoops ?? 6;
      if (c && t && !this.queued && this.loops < l && o <= c[1] && s > c[1])
        return (
          this.cues(i.trick, o, c[1], n),
          (s = c[0] + (s - c[1])),
          this.loops++,
          n.push({ type: `loop`, trick: i.trick, loops: this.loops }),
          this.cues(i.trick, c[0], s, n, !0),
          (i.t = s),
          n
        );
      if (this.queued && s >= a.exit) {
        (this.cues(i.trick, o, a.exit, n), (i.t = a.exit));
        let e = s - a.exit;
        if ((this.advance(n), (i = this.cur), (a = r[i.trick]), e > 0)) {
          let t = i.t;
          ((i.t = Math.min(a.len, i.t + e)), this.cues(i.trick, t, i.t, n));
        }
        return n;
      }
      return (
        this.cues(i.trick, o, s, n),
        s >= a.len
          ? ((this.cur = this.prev = null),
            (this.buffered = this.queued = !1),
            n.push({ type: `end` }),
            n)
          : ((i.t = s), n)
      );
    }
    pose(e = { cur: null, prev: null, mix: 1, weight: 0 }) {
      return (
        (e.cur = this.cur),
        (e.prev = this.fadeLen > 0 ? null : this.prev),
        (e.mix = e.prev ? Nv(this.prevT / Mv) : 1),
        (e.weight = this.cur
          ? this.fadeLen > 0
            ? 1 - Nv(this.fade / this.fadeLen)
            : 1
          : 0),
        e
      );
    }
    get holding() {
      return this.held && this.active;
    }
    begin(e, t) {
      (this.cur
        ? ((this.prev = { trick: this.cur.trick, t: this.cur.t }),
          (this.prevT = 0))
        : (this.prev = null),
        (this.cur = { trick: e, t }),
        (this.fadeLen = 0),
        (this.buffered = this.queued = !1),
        (this.loops = 0));
    }
    advance(e) {
      let t = this.cur.trick + 1;
      (this.begin(t, this.spec.tricks[t].enter),
        e.push({ type: `trick`, trick: t }));
    }
    cues(e, t, n, r, i = !1) {
      let a = this.spec.tricks[e].cues;
      if (a)
        for (let o of a)
          (i ? o.t >= t : o.t > t) &&
            o.t <= n &&
            r.push({ type: `cue`, trick: e, cue: o.type });
    }
  };
function Fv(e, t, n) {
  return { id: e, clips: t, spec: { tricks: t, maxLoops: n } };
}
var Iv = new j_();
function Lv(e, t, n, r, i, a, o, s, c) {
  let l = _v.shift;
  (t.arm.arm(e, _v.roll * n + r, _v.pitch * n + i, _v.yaw * n + a, [
    l[0] * n + o[0],
    l[1] * n + o[1],
    l[2] * n + o[2],
  ]),
    t.arm.wrist(e, s, c));
}
function Rv(e, t, n) {
  let r = t.arm,
    i = r.frame(e),
    a = (e) => [S_(e, i.ax), S_(e, i.w), S_(e, i.n)],
    o = E_(e, r.kb, 2),
    s = E_(e, r.kb, 0),
    c = T_(e, r.kb),
    l = [c[0] + o[0] * n, c[1] + o[1] * n, c[2] + o[2] * n];
  return { x: w_(a(s)), z: w_(a(o)), pivot: r.toHand(i, l) };
}
var zv = (e) => e.knife?.pivots?.balance?.p[2] ?? 3;
function Bv(e, t, n, r) {
  let i = n.catch - n.toss,
    a = Q([
      [n.toss + 0.02, 0],
      [n.catch - 0.12, 360 * n.turns, Z.lin],
    ]);
  return {
    id: e,
    name: t,
    len: n.len,
    enter: n.enter,
    exit: n.exit,
    open: n.open,
    free: [[n.toss, n.catch]],
    cues: [
      { t: n.toss, type: `flip` },
      { t: (n.toss + n.catch) / 2, type: `spin` },
      { t: n.catch, type: `catch` },
    ],
    apply(e, t, o) {
      let s = vv(t, n.enter, n.exit, n.len),
        c = Q([
          [n.toss - 0.24, 0],
          [n.toss - 0.06, 1, Z.io],
          [n.toss + 0.04, -0.8, Z.out],
          [n.toss + 0.3, 0, Z.io],
        ])(t),
        l = k_(t, n.catch - 0.01, n.catch + 0.45) * 1.5,
        u =
          Math.sin(Math.PI * Math.min(1, Math.max(0, (t - n.toss) / i))) * 0.8,
        d = Q([
          [n.toss, 0],
          [n.toss + 0.14, 1, Z.out],
          [n.catch - 0.12, 1],
          [n.catch, 0, Z.io],
        ])(t),
        f = r(t);
      (Lv(
        e,
        o,
        s,
        f.roll,
        f.pitch + 6 * c - 14 * l - 9 * u,
        f.yaw,
        [f.shift[0], f.shift[1], f.shift[2] - 0.9 * c - 1.4 * l - 1.4 * u],
        f.flex + 14 * c + 20 * l - 14 * d,
        f.dev,
      ),
        Av(e, o, t, n.toss - 0.07, n.catch - 0.03));
      let p = A_(t, n.toss, n.catch, n.height),
        m = A_(t, n.toss, n.catch, 1),
        h = a(t);
      if (p || h) {
        let t = Rv(e, o, zv(o));
        (Iv.reset()
          .rot(t.x, h, t.pivot)
          .move([t.z[0] * p, t.z[1] * p, t.z[2] * p + m * n.out]),
          o.arm.knifeXf(e, Iv));
      }
    },
  };
}
var Vv = Fv(`thornback`, [
    Bv(
      `thorn-toss`,
      `Thorn Toss`,
      {
        len: 3.15,
        enter: 0.34,
        exit: 2.55,
        open: 0.55,
        toss: 1.02,
        catch: 1.8,
        height: 2.4,
        out: 5,
        turns: 1,
      },
      (e) => {
        let t = Q([
            [0.36, 0],
            [0.62, 1, Z.io],
            [0.8, 1],
            [0.98, 0, Z.io],
          ])(e),
          n = Q([
            [2, 0],
            [2.3, -115, Z.whip],
            [2.45, -115],
            [2.7, 0, Z.io],
          ])(e);
        return {
          roll: -48 * t + n,
          pitch: -2 * t,
          yaw: -8 * t,
          shift: [0, 0, -0.6 * t],
          flex: -6 * t,
          dev: 14 * t,
        };
      },
    ),
    Bv(
      `double-toss`,
      `Double Toss`,
      {
        len: 3.3,
        enter: 0.34,
        exit: 2.7,
        open: 9,
        toss: 0.62,
        catch: 1.62,
        height: 2.6,
        out: 6,
        turns: 2,
      },
      (e) => {
        let t = Q([
            [1.86, 0],
            [2.2, -130, Z.whip],
            [2.42, -130],
            [2.75, 0, Z.io],
          ])(e),
          n = Q([
            [1.86, 0],
            [2.08, 1, Z.out],
            [2.3, 0, Z.io],
          ])(e);
        return {
          roll: t,
          pitch: 0,
          yaw: 0,
          shift: [0, 0, 0],
          flex: -10 * n,
          dev: 12 * n,
        };
      },
    ),
  ]),
  Hv = [118, 108, 72],
  Uv = [0, 4, 3],
  Wv = (e) => {
    let t = e.knife?.pivots?.crook?.p;
    return t ? [t[0], t[1], t[2]] : [0, -0.86, 1];
  },
  Gv = new Float32Array(12),
  Kv = new Float32Array(12),
  qv = 2.6,
  Jv = 0.3,
  Yv = new Float32Array();
function Xv(e, t, n, r) {
  let i = n.release + 0.06,
    a = Q([
      [n.release, 0],
      [i, qv, Z.out],
      [n.on, 0, Z.io],
      [n.off, 0],
      [n.off + 0.1, qv, Z.io],
      [n.catch - 0.1, qv],
      [n.catch, 0, Z.io],
    ]),
    o = Q([
      [i, 0],
      [n.on, 1, Z.io],
      [n.off, 1],
      [n.off + 0.12, 0, Z.io],
    ]),
    s = Q([
      [n.release - 0.08, 0],
      [n.release + 0.02, 1, Z.out],
      [n.catch - 0.02, 1],
      [n.catch + 0.16, 0, Z.io],
    ]),
    c = Q([
      [n.release - 0.12, 0],
      [n.release - 0.02, 0.6, Z.io],
      [n.catch + 0.04, 0.6],
      [n.catch + 0.24, 0, Z.io],
    ]),
    l = Q([
      [i, 0],
      [i + 0.08, 1, Z.out],
      [n.catch - 0.16, 1],
      [n.catch - 0.08, 0, Z.io],
    ]),
    u = Q([
      [n.release, 0],
      [n.on, 1, Z.io],
      [n.off, 1],
      [n.catch, 0, Z.io],
    ]);
  return {
    id: e,
    name: t,
    len: n.len,
    enter: n.enter,
    exit: n.exit,
    open: n.open,
    loop: n.loop,
    free: [[n.release, n.catch]],
    cues: n.cues,
    apply(e, t, d) {
      let f = d.arm,
        p = vv(t, n.enter, n.exit, n.len),
        m = k_(t, n.on - 0.04, n.on + 0.3),
        h = k_(t, n.catch - 0.02, n.catch + 0.42),
        g = r(t);
      Lv(
        e,
        d,
        p,
        g.roll,
        g.pitch + 4 * m - 9 * h,
        0,
        [0, 0, -0.7 * h],
        g.flex - 10 * m + 12 * h,
        g.dev,
      );
      let _ = f.frame(e);
      [`middle`, `ring`, `pinky`].forEach((r, a) => {
        let o = n.release - 0.1 + a * 0.012,
          s = n.catch - 0.01 + (2 - a) * 0.012,
          c = l(t);
        if (c > 0.001) return wv(d, e, _, r, c, Hv);
        let u = 0;
        (t >= o && t < i
          ? (u = 0.85 * Z.out((t - o) / 0.07))
          : t >= n.catch - 0.08 && t < s
            ? (u = 0.85)
            : t >= s && t < s + 0.16 && (u = 0.85 * (1 - Ov((t - s) / 0.16))),
          u && wv(d, e, _, r, u, void 0, [0, 0, 0], 0, t >= s));
      });
      let v = s(t);
      v > 0.001 && wv(d, e, _, `index`, v, Uv, [0, 0, 0], 0, t > n.catch);
      let y = c(t);
      y > 0.001 && Tv(d, e, _, y, t > n.catch);
      let b = Jv * u(t);
      if (b > 0.001) {
        let n = T_(e, f.fingers.index[1]),
          r = T_(e, f.fingers.index[2]),
          i = w_(b_(r, n)),
          a = w_(r),
          o = [
            i[1] * a[2] - i[2] * a[1],
            i[2] * a[0] - i[0] * a[2],
            i[0] * a[1] - i[1] * a[0],
          ],
          s = Math.hypot(o[0], o[1], o[2]);
        if (s > 1e-4) {
          sl(
            [o[0] / s, o[1] / s, o[2] / s],
            Math.atan2(s, S_(i, a)) * b,
            T_(e, f.armBone),
            Gv,
          );
          let n = [
            Gv[0] * r[0] + Gv[1] * r[1] + Gv[2] * r[2] + Gv[3],
            Gv[4] * r[0] + Gv[5] * r[1] + Gv[6] * r[2] + Gv[7],
            Gv[8] * r[0] + Gv[9] * r[1] + Gv[10] * r[2] + Gv[11],
          ];
          ((Gv[3] += r[0] - n[0] + 2.2 * u(t)),
            (Gv[7] += r[1] - n[1]),
            (Gv[11] += r[2] - n[2] - 0.6 * u(t)),
            f.rigid(e, Gv, f.all));
        }
      }
      let x = o(t),
        S = a(t),
        C = n.spin(t);
      if (x <= 0 && !C && !S) return;
      let w = f.fingers.index,
        T = T_(e, w[1]),
        E = T_(e, w[2]),
        D = w_(b_(E, T)),
        O = [(T[0] + E[0]) / 2, (T[1] + E[1]) / 2, (T[2] + E[2]) / 2],
        k = f.kb * 12,
        A = E_(e, f.kb, 2),
        ee = S_(A, D),
        te = w_([A[0] - D[0] * ee, A[1] - D[1] * ee, A[2] - D[2] * ee]),
        ne = [
          te[1] * D[2] - te[2] * D[1],
          te[2] * D[0] - te[0] * D[2],
          te[0] * D[1] - te[1] * D[0],
        ],
        re = S_(ne, _.n) * -(Wv(d)[1] || -1) < 0 ? -1 : 1,
        ie = [D[0] * re, D[1] * re, D[2] * re],
        ae = [ne[0] * re, ne[1] * re, ne[2] * re],
        oe = Wv(d),
        se = [0, 1, 2].map(
          (e) => O[e] - (ie[e] * oe[0] + ae[e] * oe[1] + te[e] * oe[2]),
        );
      (Yv.length < e.length && (Yv = new Float32Array(e.length)),
        Yv.set(
          [
            ie[0],
            ae[0],
            te[0],
            se[0],
            ie[1],
            ae[1],
            te[1],
            se[1],
            ie[2],
            ae[2],
            te[2],
            se[2],
          ],
          k,
        ),
        x > 0 && z_(e, Yv, x, [f.kb]),
        (e[k + 3] += _.n[0] * S),
        (e[k + 7] += _.n[1] * S),
        (e[k + 11] += _.n[2] * S),
        C && (sl(D, C * v_, O, Gv), H(Gv, 0, e, k, Kv, 0), e.set(Kv, k)));
      for (let t of f.knife) t !== f.kb && e.copyWithin(t * 12, k, k + 12);
    },
  };
}
var Zv = Fv(`thistle`, [
    Xv(
      `pinwheel`,
      `Pinwheel`,
      {
        len: 3.05,
        enter: 0.32,
        exit: 2.5,
        open: 0.5,
        release: 0.42,
        on: 0.62,
        off: 1.42,
        catch: 1.7,
        spin: O_([
          [0.62, 0, 0],
          [0.7, -56, -1400],
          [1.22, -784, -1400],
          [1.38, -1080, 0],
        ]),
        loop: [0.77, 1.0271428571428571],
        cues: [
          { t: 0.44, type: `flip` },
          { t: 0.82, type: `spin` },
          { t: 1.12, type: `spin` },
          { t: 1.7, type: `catch` },
        ],
      },
      (e) => {
        let t = Q([
          [1.92, 0],
          [2.17, 1, Z.whip],
          [2.32, 1],
          [2.62, 0, Z.io],
        ])(e);
        return { roll: -90 * t, pitch: 0, flex: 0, dev: 8 * t };
      },
    ),
    Xv(
      `backspin`,
      `Backspin`,
      {
        len: 3.1,
        enter: 0.32,
        exit: 2.55,
        open: 9,
        release: 0.4,
        on: 0.6,
        off: 1.7,
        catch: 1.98,
        spin: O_([
          [0.6, 0, 0],
          [0.68, -70, -1650],
          [1, -598, -1650],
          [1.1, -720, 0],
          [1.24, -720, 0],
          [1.34, -660, 1e3],
          [1.58, -380, 500],
          [1.68, -360, 0],
        ]),
        cues: [
          { t: 0.42, type: `flip` },
          { t: 0.82, type: `spin` },
          { t: 1.42, type: `spin` },
          { t: 1.98, type: `catch` },
        ],
      },
      (e) => {
        let t = Q([
          [2.1, 0],
          [2.2, 1, Z.out],
          [2.34, -0.35, Z.io],
          [2.52, 0, Z.io],
        ])(e);
        return { roll: 22 * t, pitch: 6 * t, flex: -30 * t, dev: 16 * t };
      },
    ),
  ]),
  Qv = new j_(),
  $v = 2 * ml.pinY;
function ey(e, t, n, r) {
  let i = t.state;
  if (!i || i.angles.length < 2) return;
  ((i.angles[0] = n), (i.angles[1] = r));
  let a = Math.min(1, Math.abs(n) / 180),
    o = -$v * a * a * (3 - 2 * a) - i.offset[1];
  if (Math.abs(o) > 1e-4) {
    let n = t.arm.kb * 12,
      r = e[n + 1] * o,
      i = e[n + 5] * o,
      a = e[n + 9] * o;
    for (let n of t.arm.knife)
      ((e[n * 12 + 3] += r), (e[n * 12 + 7] += i), (e[n * 12 + 11] += a));
  }
}
function ty(e, t, n, r, i = !1) {
  let a = t.arm.frame(e),
    o = 0,
    s = !1;
  for (let [e, t] of r)
    n >= e && n < t
      ? (o = Math.max(o, Z.out((n - e) / 0.08)))
      : n >= t &&
        n < t + 0.16 &&
        ((o = Math.max(o, 1 - Ov((n - t) / 0.16))), (s = !0));
  o &&
    ([`middle`, `ring`, `pinky`].forEach((n) =>
      wv(t, e, a, n, o, void 0, void 0, 0, s),
    ),
    i
      ? (wv(t, e, a, `index`, o, void 0, void 0, 0, s), Tv(t, e, a, o, s))
      : wv(t, e, a, `index`, o * 0.6, void 0, void 0, 0, s));
}
function ny(e, t, n, r, i, a, o, s = [0, 0, 0]) {
  let c = _v.shift;
  (t.arm.arm(e, _v.roll * 0.7 * n + r, _v.pitch * n + i, _v.yaw * n, [
    c[0] * n + s[0],
    c[1] * n + s[1],
    c[2] * n + s[2],
  ]),
    t.arm.wrist(e, a, o));
}
var ry = { len: 2.85, enter: 0.32, exit: 2.3, open: 0.5 },
  iy = Q([
    [0.4, 0],
    [0.56, -180, Z.out],
    [0.86, -180],
    [1.02, 0, Z.out],
  ]),
  ay = (e) => -iy(e),
  oy = {
    id: `flick-open`,
    name: `Flick Flip`,
    len: ry.len,
    enter: ry.enter,
    exit: ry.exit,
    open: ry.open,
    cues: [
      { t: 0.4, type: `flip` },
      { t: 0.62, type: `catch` },
      { t: 0.86, type: `flip` },
      { t: 1.2, type: `catch` },
    ],
    apply(e, t, n) {
      let r = vv(t, ry.enter, ry.exit, ry.len),
        i = k_(t, 0.38, 0.66) + k_(t, 0.84, 1.12),
        a = k_(t, 0.6, 0.9) + k_(t, 1.18, 1.5);
      (ny(
        e,
        n,
        r,
        Q([
          [1.3, 0],
          [1.55, -85, Z.whip],
          [1.72, -85],
          [1.95, 35, Z.whip],
          [2.12, 0, Z.io],
        ])(t),
        4 * i - 5 * a,
        -14 * i + 8 * a,
        8 * i,
      ),
        ty(e, n, t, [
          [0.38, 0.62],
          [0.84, 1.2],
        ]),
        ey(e, n, iy(t), ay(t)));
    },
  },
  sy = { len: 2.9, enter: 0.32, exit: 2.3, open: 0.6, t0: 0.42, P: 0.42, n: 3 },
  cy = sy.t0 + sy.P * sy.n,
  ly = {
    id: `fan-flips`,
    name: `Fan Flips`,
    len: sy.len,
    enter: sy.enter,
    exit: sy.exit,
    open: sy.open,
    loop: [sy.t0 + sy.P, sy.t0 + 2 * sy.P],
    cues: [
      ...Array.from({ length: sy.n }, (e, t) => ({
        t: sy.t0 + t * sy.P,
        type: `flip`,
      })),
      { t: sy.t0 + sy.P * 1.5, type: `spin` },
      { t: cy, type: `catch` },
    ],
    apply(e, t, n) {
      let r = vv(t, sy.enter, sy.exit, sy.len),
        i = t > sy.t0 && t < cy ? ((t - sy.t0) / sy.P) % 1 : 0,
        a = Math.sin(i * Math.PI * 2),
        o = -(90 - 90 * Math.cos(i * Math.PI * 2)),
        s = -o,
        c = +(t > sy.t0 - 0.05 && t < cy + 0.1),
        l = k_(t, cy - 0.02, cy + 0.4);
      (ny(
        e,
        n,
        r,
        20 * a * c,
        3 * Math.abs(a) * c - 5 * l,
        -10 * a * c + 7 * l,
        12 * Math.cos(i * Math.PI * 2) * c - 12 * c,
      ),
        ty(e, n, t, [[sy.t0 - 0.06, cy]]),
        ey(e, n, o, s));
    },
  },
  uy = { len: 2.8, enter: 0.32, exit: 2.25, open: 9, toss: 0.52, catch: 1.36 },
  dy = (e) => A_(e, uy.toss, uy.catch, 10),
  fy = (e) =>
    e <= uy.toss || e >= uy.catch
      ? 0
      : 3.6 *
        Math.sqrt(Math.sin((Math.PI * (e - uy.toss)) / (uy.catch - uy.toss))),
  py = O_([
    [0.72, 0, 0],
    [0.94, 180, 1400],
    [1.16, 360, 0],
  ]),
  my = Q([
    [0.2, 0],
    [0.36, -180, Z.out],
    [0.8, -180],
    [1, 0, Z.out],
  ]),
  hy = Q([
    [0.24, 0],
    [0.42, 180, Z.in2],
    [0.95, 180],
    [1.18, 0, Z.io],
  ]),
  gy = Fv(
    `bunnyfly`,
    [
      oy,
      ly,
      {
        id: `aerial`,
        name: `Aerial`,
        len: uy.len,
        enter: uy.enter,
        exit: uy.exit,
        open: uy.open,
        free: [[uy.toss, uy.catch]],
        cues: [
          { t: uy.toss, type: `flip` },
          { t: 0.94, type: `spin` },
          { t: uy.catch, type: `catch` },
        ],
        apply(e, t, n) {
          let r = vv(t, uy.enter, uy.exit, uy.len),
            i = Q([
              [0.32, 0],
              [0.48, 1, Z.io],
              [0.56, -0.8, Z.out],
              [0.8, 0, Z.io],
            ])(t),
            a = k_(t, uy.catch - 0.02, uy.catch + 0.55),
            o = Q([
              [0.52, 0],
              [0.66, 1, Z.out],
              [1.24, 1],
              [1.36, 0, Z.io],
            ])(t),
            s = Q([
              [1.6, 0],
              [1.85, -70, Z.whip],
              [1.96, -70],
              [2.1, 0, Z.io],
            ])(t),
            c = k_(t, 0.18, 0.46);
          (ny(
            e,
            n,
            r,
            s,
            6 * i - 11 * a,
            14 * i + 14 * a - 14 * o - 10 * c,
            6 * c,
            [0, 0, -0.9 * i - 1 * a],
          ),
            ty(
              e,
              n,
              t,
              [
                [0.16, 0.5],
                [uy.toss - 0.07, uy.catch + 0.04],
              ],
              !0,
            ),
            ey(e, n, my(t), t < uy.toss ? -my(t) : hy(t)));
          let l = dy(t),
            u = fy(t),
            d = py(t);
          (l || d) &&
            (Qv.reset().rot(M_, d).move([0, l, u]), n.arm.knifeXf(e, Qv));
        },
      },
    ],
    8,
  ),
  _y = new j_();
function vy(e, t, n, r, i, a, o, s, c) {
  let l = _v.shift;
  (t.arm.arm(e, _v.roll * n + r, _v.pitch * n + i, _v.yaw * n + a, [
    l[0] * n + o[0],
    l[1] * n + o[1],
    l[2] * n + o[2],
  ]),
    t.arm.wrist(e, s, c));
}
var yy = {
    len: 2.85,
    enter: 0.34,
    exit: 2.25,
    open: 0.5,
    release: 0.38,
    catch: 1.2,
    loop: [0.6, 0.9],
  },
  by = O_([
    [0.48, 0, 0],
    [0.6, -70, -1200],
    [0.9, -430, -1200],
    [1.18, -720, -260],
    [1.27, -723, 0],
    [1.38, -720, 0],
  ]),
  xy = Q([
    [0.48, 0],
    [0.6, 1.95, Z.out],
    [0.9, 1.95],
    [1.18, 0.3, Z.in],
    [1.36, 0, Z.io],
  ]),
  Sy = Q([
    [1.34, 0],
    [1.72, -128, Z.whip],
    [1.98, -128],
    [2.25, 0, Z.io],
  ]),
  Cy = {
    id: `hop-flip`,
    name: `Hop Flip`,
    len: yy.len,
    enter: yy.enter,
    exit: yy.exit,
    open: yy.open,
    loop: yy.loop,
    free: [[0.48, yy.catch - 0.02]],
    cues: [
      { t: 0.45, type: `flip` },
      { t: 0.75, type: `spin` },
      { t: yy.catch, type: `catch` },
    ],
    apply(e, t, n) {
      let r = vv(t, yy.enter, yy.exit, yy.len),
        i = Q([
          [0.34, 0],
          [0.43, 1, Z.io],
          [0.5, -0.7, Z.out],
          [0.7, 0, Z.io],
        ])(t),
        a = k_(t, yy.catch - 0.03, yy.catch + 0.42),
        o = Q([
          [1.76, 0],
          [1.96, 1, Z.io],
          [2.25, 0, Z.io],
        ])(t),
        s = Q([
          [0.46, 0],
          [0.62, 1, Z.out],
          [1.08, 1],
          [1.2, 0, Z.io],
        ])(t);
      (vy(
        e,
        n,
        r,
        Sy(t),
        3 * i - 6 * a,
        0,
        [0, 0, -0.5 * a],
        10 * i + 9 * a - 12 * s,
        9 * o,
      ),
        Av(e, n, t, yy.release, yy.catch + 0.03, 7, yy.loop));
      let c = by(t),
        l = xy(t);
      if (c || l) {
        let r = Math.min(1, (l / 1.95) * 1.6),
          i =
            6 *
            Math.sin(
              ((t - yy.loop[0]) / (yy.loop[1] - yy.loop[0])) * Math.PI * 2,
            ) *
            r;
        (_y
          .reset()
          .rot(P_, c)
          .rot(M_, i)
          .rot(N_, 12 * r)
          .move([0, 0, l]),
          n.arm.knifeXf(e, _y));
      }
    },
  },
  wy = {
    len: 2.75,
    enter: 0.34,
    exit: 2.15,
    open: 0.62,
    release: 0.35,
    f2: 0.84,
    catch: 1.4,
  },
  Ty = O_([
    [0.42, 0, 0],
    [0.47, 6, 0],
    [0.62, -255, -1300],
    [0.8, -360, -350],
    [0.86, -372, -350],
    [1, -560, -1550],
    [1.38, -1080, -380],
    [1.47, -1083, 0],
    [1.58, -1080, 0],
  ]),
  Ey = Q([
    [0.45, 0],
    [0.6, 1.7, Z.out],
    [0.8, 0.5, Z.in2],
    [0.84, 0.45],
    [1.04, 2.7, Z.out],
    [1.38, 0.3, Z.in],
    [1.55, 0, Z.io],
  ]),
  Dy = Q([
    [1.6, 0],
    [1.88, 95, Z.whip],
    [1.98, 95],
    [2.15, 0, Z.io],
  ]),
  Oy = {
    id: `double-flip`,
    name: `Double Flip`,
    len: wy.len,
    enter: wy.enter,
    exit: wy.exit,
    open: wy.open,
    free: [[0.46, wy.catch - 0.02]],
    cues: [
      { t: 0.46, type: `flip` },
      { t: wy.f2, type: `flip` },
      { t: 1.12, type: `spin` },
      { t: wy.catch, type: `catch` },
    ],
    apply(e, t, n) {
      let r = vv(t, wy.enter, wy.exit, wy.len),
        i = k_(t, 0.44, 0.74) + 1.3 * k_(t, wy.f2 - 0.02, wy.f2 + 0.3),
        a = k_(t, 0.78, 0.98),
        o = k_(t, wy.catch - 0.02, wy.catch + 0.48),
        s = Q([
          [0.44, 0],
          [0.6, 1, Z.out],
          [1.28, 1],
          [1.4, 0, Z.io],
        ])(t);
      (vy(
        e,
        n,
        r,
        Dy(t),
        4 * i - 3 * a - 8 * o,
        0,
        [0, 0, 0.3 * i - 0.7 * o],
        -8 * i + 4 * a + 12 * o - 12 * s,
        0,
      ),
        Av(e, n, t, wy.release, wy.catch + 0.03, 5, [0.9, 1.2]));
      let c = Ty(t),
        l = Ey(t);
      if (c || l) {
        let t = Math.min(1, (l / 1.95) * 1.6);
        (_y
          .reset()
          .rot(P_, c)
          .rot(N_, 12 * t)
          .move([0, 0, l]),
          n.arm.knifeXf(e, _y));
      }
    },
  },
  ky = { len: 3, enter: 0.34, exit: 2.35, open: 9, toss: 0.56, catch: 1.42 },
  Ay = (e) => A_(e, ky.toss, ky.catch, 12),
  jy = (e) =>
    e <= ky.toss || e >= ky.catch
      ? 0
      : 4.4 *
        Math.sqrt(Math.sin((Math.PI * (e - ky.toss)) / (ky.catch - ky.toss))),
  My = O_([
    [0.76, 0, 0],
    [0.99, 180, 1350],
    [1.22, 360, 0],
  ]),
  Ny = Q([
    [1.62, 0],
    [1.95, -120, Z.whip],
    [2.12, -120],
    [2.35, 0, Z.io],
  ]),
  Py = Fv(`carrot`, [
    Cy,
    Oy,
    {
      id: `toss-catch`,
      name: `Toss & Catch`,
      len: ky.len,
      enter: ky.enter,
      exit: ky.exit,
      open: ky.open,
      free: [[ky.toss, ky.catch]],
      cues: [
        { t: ky.toss, type: `flip` },
        { t: 0.99, type: `spin` },
        { t: ky.catch, type: `catch` },
      ],
      apply(e, t, n) {
        let r = vv(t, ky.enter, ky.exit, ky.len),
          i = Q([
            [0.34, 0],
            [0.52, 1, Z.io],
            [0.6, -0.8, Z.out],
            [0.85, 0, Z.io],
          ])(t),
          a = k_(t, ky.catch - 0.02, ky.catch + 0.55),
          o = Q([
            [0.56, 0],
            [0.7, 1, Z.out],
            [1.3, 1],
            [1.42, 0, Z.io],
          ])(t);
        (vy(
          e,
          n,
          r,
          Ny(t),
          6 * i - 11 * a,
          0,
          [0, 0, -0.9 * i - 1 * a],
          14 * i + 14 * a - 14 * o,
          0,
        ),
          Av(e, n, t, ky.toss - 0.07, ky.catch + 0.04));
        let s = Ay(t),
          c = jy(t),
          l = My(t);
        (s || l) &&
          (_y.reset().rot(M_, l).move([0, s, c]), n.arm.knifeXf(e, _y));
      },
    },
  ]),
  Fy = new Float32Array(12),
  Iy = new Float32Array(12),
  Ly = new Float32Array(12),
  Ry = {
    id: `classic`,
    name: `Classic`,
    len: 2.6,
    enter: 0.45,
    exit: 2,
    open: 0.6,
    cues: [{ t: 1.3, type: `spin` }],
    apply(e, t, n) {
      let r = n.arm,
        i = r.handBone * 12,
        a = r.armBone * 12,
        o = [e[i + 3], e[i + 7], e[i + 11]],
        s = [e[a + 3], e[a + 7], e[a + 11]],
        c = [o[0] - s[0], o[1] - s[1], o[2] - s[2]],
        l = Math.hypot(c[0], c[1], c[2]) || 1;
      c = [c[0] / l, c[1] / l, c[2] / l];
      let u =
          -95 * fl(t, 0.1, 0.5) + 150 * fl(t, 1.25, 1.65) - 55 * fl(t, 2, 2.5),
        d = fl(t, 0.05, 0.45) - fl(t, 2, 2.55);
      (sl(c, u * v_, o, Fy),
        ol(-14 * d, 16 * d, 0, 0, 0, 0, Iy),
        (Iy[3] = s[0] - (Iy[0] * s[0] + Iy[1] * s[1] + Iy[2] * s[2]) + 1.2 * d),
        (Iy[7] = s[1] - (Iy[4] * s[0] + Iy[5] * s[1] + Iy[6] * s[2]) + 0.8 * d),
        (Iy[11] =
          s[2] - (Iy[8] * s[0] + Iy[9] * s[1] + Iy[10] * s[2]) + 0.6 * d),
        H(Iy, 0, Fy, 0, Ly, 0),
        r.rigid(e, Ly, r.all));
    },
  },
  zy = new j_();
function By(e, t, n, r, i, a, o, s, c) {
  let l = _v.shift;
  (t.arm.arm(e, _v.roll * 0.8 * n + r, _v.pitch * 0.6 * n + i, _v.yaw * n + a, [
    l[0] * n + o[0],
    l[1] * n + o[1],
    l[2] * 0.5 * n + o[2],
  ]),
    t.arm.wrist(e, s, c));
}
function Vy(e, t, n, r) {
  if (!n && !r) return;
  let i = Math.min(1, r * 0.8);
  (zy
    .reset()
    .rot(P_, n)
    .rot(N_, 14 * i)
    .move([0, 0, r]),
    t.arm.knifeXf(e, zy));
}
var Hy = {
    len: 2.6,
    enter: 0.32,
    exit: 2.05,
    open: 0.5,
    release: 0.4,
    per: 0.46,
  },
  Uy = Hy.release + 0.06,
  Wy = Uy + Hy.per,
  Gy = O_([
    [Hy.release, 0, 0],
    [Uy - 0.035, 10, 0],
    [Uy, 0, -360 / Hy.per],
    [Wy, -360, -360 / Hy.per],
    [Wy + 0.07, -364, 0],
    [Wy + 0.2, -360, 0],
  ]),
  Ky = Q([
    [Uy - 0.07, 0],
    [Uy, 1.6, Z.out],
    [Wy, 1.6],
    [Wy + 0.1, 0.3, Z.in2],
    [Wy + 0.22, 0, Z.io],
  ]),
  qy = {
    id: `twirl`,
    name: `Twirl`,
    len: Hy.len,
    enter: Hy.enter,
    exit: Hy.exit,
    open: Hy.open,
    loop: [Uy, Wy],
    free: [[Uy - 0.06, Wy + 0.1]],
    cues: [
      { t: Uy, type: `flip` },
      { t: Uy + Hy.per / 2, type: `spin` },
      { t: Wy, type: `catch` },
    ],
    apply(e, t, n) {
      let r = vv(t, Hy.enter, Hy.exit, Hy.len),
        i = k_(t, Wy - 0.02, Wy + 0.45),
        a = Q([
          [Uy - 0.04, 0],
          [Uy + 0.1, 1, Z.out],
          [Wy - 0.04, 1],
          [Wy + 0.1, 0, Z.io],
        ])(t);
      (By(
        e,
        n,
        r,
        Q([
          [1.3, 0],
          [1.6, -75, Z.whip],
          [1.75, -75],
          [2.05, 0, Z.io],
        ])(t),
        -6 * i,
        0,
        [0, 0, -0.5 * i],
        10 * i - 12 * a,
        0,
      ),
        Av(e, n, t, Hy.release - 0.04, Wy + 0.1),
        Vy(e, n, Gy(t), Ky(t)));
    },
  },
  Jy = { len: 3.1, enter: 0.32, exit: 2.6, open: 9 },
  Yy = {
    id: `blade-check`,
    name: `Blade Check`,
    len: Jy.len,
    enter: Jy.enter,
    exit: Jy.exit,
    open: Jy.open,
    cues: [
      { t: 0.5, type: `spin` },
      { t: 1.55, type: `spin` },
    ],
    apply(e, t, n) {
      let r = vv(t, Jy.enter, Jy.exit, Jy.len),
        i = Q([
          [0.36, 0],
          [0.7, 1, Z.out],
          [2.25, 1],
          [2.6, 0, Z.io],
        ])(t),
        a = Q([
          [0.75, 0],
          [1.4, 1, Z.io],
          [1.5, 1],
          [2.2, 0, Z.io],
        ])(t),
        o = Q([
          [1.42, 0],
          [1.72, 1, Z.whip],
          [2.05, 1],
          [2.3, 0, Z.io],
        ])(t);
      By(
        e,
        n,
        r,
        -40 * i + 170 * o,
        8 * i,
        18 * i + 6 * a,
        [-0.8 * a, 1.2 * a, 0.6 * i],
        0,
        -55 * i,
      );
    },
  },
  Xy = { len: 3.3, enter: 0.32, exit: 2.75, open: 9 },
  Zy = O_([
    [0.4, 0, 0],
    [0.46, 8, 0],
    [0.5, 0, -900],
    [0.7, -180, -500],
    [0.78, -182, 0],
    [0.86, -180, 0],
    [1.9, -180, 0],
    [1.96, -188, 0],
    [2, -180, 900],
    [2.2, 0, 500],
    [2.28, 2, 0],
    [2.36, 0, 0],
  ]),
  Qy = Q([
    [0.48, 0],
    [0.55, 1.6, Z.out],
    [0.66, 1.6],
    [0.74, 0, Z.io],
    [1.98, 0],
    [2.05, 1.6, Z.out],
    [2.16, 1.6],
    [2.24, 0, Z.io],
  ]),
  $y = Fv(`daikon`, [
    qy,
    Yy,
    {
      id: `reverse-sheath`,
      name: `Reverse Sheath`,
      len: Xy.len,
      enter: Xy.enter,
      exit: Xy.exit,
      open: Xy.open,
      free: [
        [0.5, 0.72],
        [2, 2.22],
      ],
      cues: [
        { t: 0.5, type: `flip` },
        { t: 0.72, type: `catch` },
        { t: 2, type: `flip` },
        { t: 2.22, type: `catch` },
      ],
      apply(e, t, n) {
        let r = vv(t, Xy.enter, Xy.exit, Xy.len),
          i = Q([
            [0.85, 0],
            [1.25, 1, Z.io],
            [1.6, 1],
            [1.9, 0, Z.io],
          ])(t),
          a = k_(t, 0.7, 1.1) + k_(t, 2.2, 2.6);
        (By(
          e,
          n,
          r,
          60 * i,
          -10 * i - 5 * a,
          -12 * i,
          [-2.2 * i, -0.6 * i, -1.6 * i],
          8 * a,
          0,
        ),
          Av(e, n, t, 0.44, 0.74),
          Av(e, n, t, 1.94, 2.24),
          Vy(e, n, Zy(t), Qy(t)));
      },
    },
  ]),
  eb = { p: [0, 0, -1.42], axis: [1, 0, 0] },
  tb = new Float32Array(12),
  nb = new Float32Array(12),
  rb = new Float32Array(12),
  ib = new Float32Array(12),
  ab = new Float32Array(12),
  ob = [118, 108, 72],
  sb = { roll: 20, pitch: 3, yaw: 12, shift: [-1.8, 1.3, 0.6] };
function cb(e) {
  return e?.pivots?.ring ?? eb;
}
function lb(e, t, n) {
  if (!n) return;
  let r = t.arm.kb * 12,
    { p: i, axis: a } = cb(t.knife),
    o = [
      e[r] * i[0] + e[r + 1] * i[1] + e[r + 2] * i[2] + e[r + 3],
      e[r + 4] * i[0] + e[r + 5] * i[1] + e[r + 6] * i[2] + e[r + 7],
      e[r + 8] * i[0] + e[r + 9] * i[1] + e[r + 10] * i[2] + e[r + 11],
    ],
    s = [
      e[r] * a[0] + e[r + 1] * a[1] + e[r + 2] * a[2],
      e[r + 4] * a[0] + e[r + 5] * a[1] + e[r + 6] * a[2],
      e[r + 8] * a[0] + e[r + 9] * a[1] + e[r + 10] * a[2],
    ],
    c = Math.hypot(s[0], s[1], s[2]) || 1;
  sl([s[0] / c, s[1] / c, s[2] / c], n * v_, o, tb);
  for (let n of t.arm.knife) (H(tb, 0, e, n * 12, nb, 0), e.set(nb, n * 12));
}
function ub(e) {
  let t = 0.32,
    n = e.release,
    r = n + 0.12,
    i = 360 / e.per,
    a = r + e.per * e.turns,
    o = 360 * e.turns,
    s = [
      [n, 0, 0],
      [r - 0.035, -12, 0],
      [r, 0, i],
      [a, o, i],
      [a + 0.07, o + 5, 0],
      [a + 0.2, o, 0],
    ],
    c = a;
  e.reverse &&
    (s.splice(4),
    s.push(
      [a + 0.2, o + 150, i * 0.2],
      [a + 0.34, o + 120, -400],
      [a + 0.5, o, -120],
      [a + 0.58, o - 3, 0],
      [a + 0.7, o, 0],
    ),
    (c = a + 0.5));
  let l = O_(s),
    u = c + 1.05,
    d = u + 0.55,
    f = Q([
      [c + 0.22, 0],
      [c + 0.62, 1, Z.io],
      [u, 1],
      [d, 0, Z.io],
    ]),
    p = e.loop ? [r, r + e.per] : void 0,
    m = [
      { t: r, type: `flip` },
      { t: c, type: `catch` },
    ];
  for (let t = 0; t < e.turns; t++)
    m.push({ t: r + e.per * (t + 0.5), type: `spin` });
  return {
    id: e.id,
    name: e.name,
    len: d,
    enter: t,
    exit: u,
    open: r + 0.05,
    loop: p,
    free: [[r, c]],
    cues: m.filter((e) => e.t < d),
    show: f,
    apply(i, a, o) {
      let s = o.arm,
        p = vv(a, t, u, d),
        m = k_(a, r - 0.02, r + 0.3) * +(a < r + e.per),
        h = k_(a, c - 0.02, c + 0.45),
        g = sb.shift,
        _ = p * (1 - f(a));
      (s.arm(i, sb.roll * _, sb.pitch * _ + 4 * m - 7 * h, sb.yaw * _, [
        g[0] * _,
        g[1] * _,
        g[2] * _ - 0.5 * h,
      ]),
        s.wrist(i, -12 * m + 12 * h, 6 * m));
      let v = s.frame(i),
        y = s.fingers.index[0];
      (tl(i, y * 12, rb, 0),
        H(rb, 0, i, s.kb * 12, ib, 0),
        [`middle`, `ring`, `pinky`].forEach((e, t) => {
          let s = n - 0.1 + t * 0.012,
            l = Q([
              [s, 0],
              [s + 0.08, 0.85, Z.out],
              [r + 0.06, 0.85],
              [r + 0.14, 0, Z.io],
            ])(a),
            u = Q([
              [r + 0.06, 0],
              [r + 0.14, 1, Z.out],
              [c - 0.02 + (2 - t) * 0.015, 1],
              [c + 0.16 + (2 - t) * 0.015, 0, Z.io],
            ])(a);
          u > 0.001 ? wv(o, i, v, e, u, ob) : l > 0.001 && wv(o, i, v, e, l);
        }),
        wv(
          o,
          i,
          v,
          `index`,
          Q([
            [r - 0.03, 0],
            [r + 0.08, 1, Z.out],
            [c, 1],
            [c + 0.16, 0, Z.io],
          ])(a),
          [12, 22, 18],
        ),
        H(i, y * 12, ib, 0, ab, 0));
      for (let e of s.knife) i.set(ab, e * 12);
      lb(i, o, l(a));
    },
  };
}
var db = Fv(
    `karrotbit`,
    [
      ub({
        id: `ring-spin`,
        name: `Ring Spin`,
        turns: 1,
        release: 0.38,
        per: 0.34,
        loop: !0,
      }),
      ub({
        id: `ring-spin-2`,
        name: `Double Ring Spin`,
        turns: 2,
        release: 0.38,
        per: 0.3,
        loop: !0,
      }),
      ub({
        id: `ring-spin-3`,
        name: `Triple Spin + Reverse Catch`,
        turns: 3,
        release: 0.38,
        per: 0.27,
        reverse: !0,
        loop: !0,
      }),
    ],
    8,
  ),
  fb = Fv(`default`, [Ry, Cy]);
function pb(e) {
  switch (e?.id ?? `carrot`) {
    case `carrot`:
    case `golden`:
      return Py;
    case `karrotbit`:
      return db;
    case `bunnyfly`:
      return gy;
    case `daikon`:
      return $y;
    case `thornback`:
      return Vv;
    case `thistle`:
      return Zv;
    default:
      return fb;
  }
}
var mb = 60,
  hb = new WeakMap();
function gb(e, t, n) {
  let r = e[0],
    i = e[1],
    a = e[2],
    o = e[4],
    s = e[5],
    c = e[6],
    l = e[8],
    u = e[9],
    d = e[10],
    f = r + s + d,
    p,
    m,
    h,
    g;
  if (f > 0) {
    let e = Math.sqrt(f + 1) * 2;
    ((g = 0.25 * e), (p = (u - c) / e), (m = (a - l) / e), (h = (o - i) / e));
  } else if (r > s && r > d) {
    let e = Math.sqrt(1 + r - s - d) * 2;
    ((g = (u - c) / e), (p = 0.25 * e), (m = (i + o) / e), (h = (a + l) / e));
  } else if (s > d) {
    let e = Math.sqrt(1 + s - r - d) * 2;
    ((g = (a - l) / e), (p = (i + o) / e), (m = 0.25 * e), (h = (c + u) / e));
  } else {
    let e = Math.sqrt(1 + d - r - s) * 2;
    ((g = (o - i) / e), (p = (a + l) / e), (m = (c + u) / e), (h = 0.25 * e));
  }
  (n >= 4 &&
    p * t[n - 4] + m * t[n - 3] + h * t[n - 2] + g * t[n - 1] < 0 &&
    ((p = -p), (m = -m), (h = -h), (g = -g)),
    (t[n] = p),
    (t[n + 1] = m),
    (t[n + 2] = h),
    (t[n + 3] = g));
}
function _b(e, t) {
  let n = hb.get(e);
  n || hb.set(e, (n = new Map()));
  let r = t?.id ?? `carrot`,
    i = n.get(r);
  if (i) return i;
  let a = _l(),
    o = new __(a),
    s = new F_(a),
    c = t ? new fu(t, a) : null,
    l = new Float32Array(a.names.length * 12),
    u = { arm: s, knife: t, state: c?.state ?? null },
    d = (e) => {
      let t = new Float32Array(12);
      (tl(l, s.handBone * 12, t, 0), H(t, 0, l, s.kb * 12, e, 0));
    },
    f = () => {
      (o.pose(`idle`, 0, l), c?.apply(l, `idle`, 0));
    };
  f();
  let p = new Float32Array(12),
    m = new Float32Array(12),
    h = new Float32Array(12),
    g = new Float32Array(12);
  (d(p), tl(p, 0, m, 0));
  let _ = Math.ceil(e.len * mb) + 1;
  i = { q: new Float32Array(_ * 4), p: new Float32Array(_ * 3), n: _ };
  for (let t = 0; t < _; t++)
    (f(),
      e.apply(l, Math.min(e.len, t / mb), u),
      d(h),
      H(m, 0, h, 0, g, 0),
      gb(g, i.q, t * 4),
      (i.p[t * 3] = g[3]),
      (i.p[t * 3 + 1] = g[7]),
      (i.p[t * 3 + 2] = g[11]));
  return (n.set(r, i), i);
}
function vb(e, t, n) {
  let r = Math.max(0, Math.min(e.n - 1, t * mb)),
    i = Math.min(e.n - 2, Math.floor(r)),
    a = Math.max(0, r - i),
    o = e.q,
    s = e.p,
    c = o[i * 4] + (o[i * 4 + 4] - o[i * 4]) * a,
    l = o[i * 4 + 1] + (o[i * 4 + 5] - o[i * 4 + 1]) * a,
    u = o[i * 4 + 2] + (o[i * 4 + 6] - o[i * 4 + 2]) * a,
    d = o[i * 4 + 3] + (o[i * 4 + 7] - o[i * 4 + 3]) * a,
    f = Math.hypot(c, l, u, d) || 1;
  ((c /= f),
    (l /= f),
    (u /= f),
    (d /= f),
    (n[0] = 1 - 2 * (l * l + u * u)),
    (n[1] = 2 * (c * l - u * d)),
    (n[2] = 2 * (c * u + l * d)),
    (n[4] = 2 * (c * l + u * d)),
    (n[5] = 1 - 2 * (c * c + u * u)),
    (n[6] = 2 * (l * u - c * d)),
    (n[8] = 2 * (c * u - l * d)),
    (n[9] = 2 * (l * u + c * d)),
    (n[10] = 1 - 2 * (c * c + l * l)),
    (n[3] = s[i * 3] + (s[i * 3 + 3] - s[i * 3]) * a),
    (n[7] = s[i * 3 + 1] + (s[i * 3 + 4] - s[i * 3 + 1]) * a),
    (n[11] = s[i * 3 + 2] + (s[i * 3 + 5] - s[i * 3 + 2]) * a));
}
var yb = new WeakMap();
function bb(e, t, n) {
  if (yb.has(t)) return yb.get(t);
  let r = (t) => e.index(`ValveBiped.Bip01_${t}`),
    i = r(`R_Forearm`),
    a = r(`R_Hand`),
    o = r(`R_Finger1`),
    s = r(`R_Finger2`),
    c = r(`R_Finger0`),
    l = e.index(n),
    u = null;
  if (i >= 0 && a >= 0 && o >= 0 && s >= 0 && l >= 0) {
    let t = [];
    for (let n = 0; n < e.count; n++) {
      let r = n;
      for (; r >= 0 && r !== i; ) r = e.parent[r];
      r === i && n !== l && t.push(n);
    }
    u = { fore: i, hand: a, index: o, middle: s, thumb: c, arm: t, knife: l };
  }
  return (yb.set(t, u), u);
}
var xb = w_([1, 0.55, 0.62]),
  Sb = class {
    combo;
    set;
    knife = null;
    held = !1;
    pz = { cur: null, prev: null, mix: 1, weight: 0 };
    A = new Float32Array(12);
    B = new Float32Array(12);
    M = new Float32Array(12);
    M2 = new Float32Array(12);
    P = new Float32Array(12);
    D = new Float32Array(12);
    D2 = new Float32Array(12);
    F = new Float32Array(12);
    Fi = new Float32Array(12);
    constructor(e = null) {
      ((this.knife = e),
        (this.set = pb(e)),
        (this.combo = new Pv(this.set.spec)));
    }
    setKnife(e) {
      (e?.id === `carrot` && (e = null),
        e !== this.knife &&
          ((this.knife = e),
          (this.set = pb(e)),
          this.combo.setSpec(this.set.spec)));
    }
    get active() {
      return this.pz.weight > 0 || this.combo.active;
    }
    signal(e) {
      return this.combo.remote(e);
    }
    setHeld(e) {
      this.held = e;
    }
    cancel(e) {
      this.combo.cancel(e);
    }
    reset() {
      (this.combo.reset(), (this.pz.weight = 0));
    }
    update(e) {
      let t = this.combo.update(e, this.held);
      return (this.combo.pose(this.pz), t);
    }
    get playing() {
      return this.pz.cur ? this.set.clips[this.pz.cur.trick].id : null;
    }
    apply(e, t, n, r) {
      let i = this.pz;
      if (!i.cur || i.weight <= 0) return;
      let a = bb(e, t, n);
      if (!a) return;
      let o = this.set.clips,
        s = i.weight,
        c = o[i.cur.trick],
        l = vv(i.cur.t, c.enter, c.exit, c.len);
      if ((vb(_b(c, this.knife), i.cur.t, this.D), i.prev && i.mix < 1)) {
        let e = o[i.prev.trick];
        ((l = vv(i.prev.t, e.enter, e.exit, e.len) * (1 - i.mix) + l * i.mix),
          vb(_b(e, this.knife), i.prev.t, this.D2),
          Eb(this.D2, this.D, i.mix, this.D));
      }
      ((l *= s),
        s < 1 && Eb(Cb, this.D, s, this.D),
        e.posed(a.fore, this.A),
        e.posed(a.hand, this.B));
      let u = [this.A[3], this.A[7], this.A[11]],
        d = w_(b_([this.B[3], this.B[7], this.B[11]], u));
      if (l > 0.001) {
        let t = C_(d, xb),
          n = Math.hypot(t[0], t[1], t[2]),
          r = Math.atan2(n, S_(d, xb)) * 0.75 * l;
        (n > 1e-6
          ? sl([t[0] / n, t[1] / n, t[2] / n], r, u, this.M)
          : this.M.set(Cb),
          sl(
            w_([
              this.M[0] * d[0] + this.M[1] * d[1] + this.M[2] * d[2],
              this.M[4] * d[0] + this.M[5] * d[1] + this.M[6] * d[2],
              this.M[8] * d[0] + this.M[9] * d[1] + this.M[10] * d[2],
            ]),
            -70 * l * v_,
            u,
            this.M2,
          ),
          H(this.M2, 0, this.M, 0, this.P, 0));
        for (let t of a.arm) e.pre(t, this.P);
        e.pre(a.knife, this.P);
      }
      if ((e.posed(a.hand, this.B), r)) {
        let e = w_(r.z),
          t = r.y,
          n = S_(t, e),
          i = w_([t[0] - e[0] * n, t[1] - e[1] * n, t[2] - e[2] * n]),
          a = C_(i, e);
        (this.A.set([
          a[0],
          i[0],
          e[0],
          r.o[0],
          a[1],
          i[1],
          e[1],
          r.o[1],
          a[2],
          i[2],
          e[2],
          r.o[2],
        ]),
          H(this.B, 0, this.A, 0, this.F, 0),
          (this.D[3] *= r.s),
          (this.D[7] *= r.s),
          (this.D[11] *= r.s));
      } else {
        (e.posed(a.index, this.A),
          e.posed(a.middle, this.M),
          e.posed(a.knife, this.M2));
        let t = [this.M2[3], this.M2[7], this.M2[11]],
          n = w_(
            b_(
              [
                (this.A[3] + this.M[3]) / 2,
                (this.A[7] + this.M[7]) / 2,
                (this.A[11] + this.M[11]) / 2,
              ],
              [this.B[3], this.B[7], this.B[11]],
            ),
          ),
          r = b_(
            [this.A[3], this.A[7], this.A[11]],
            [this.M[3], this.M[7], this.M[11]],
          ),
          i = S_(r, n);
        r = w_([r[0] - n[0] * i, r[1] - n[1] * i, r[2] - n[2] * i]);
        let o = C_(r, n);
        (this.F.set([
          n[0],
          o[0],
          r[0],
          t[0],
          n[1],
          o[1],
          r[1],
          t[1],
          n[2],
          o[2],
          r[2],
          t[2],
        ]),
          (this.D[3] *= 1.3),
          (this.D[7] *= 1.3),
          (this.D[11] *= 1.3));
      }
      (tl(this.F, 0, this.Fi, 0),
        H(this.F, 0, this.D, 0, this.A, 0),
        H(this.A, 0, this.Fi, 0, this.M, 0),
        e.pre(a.knife, this.M));
    }
  },
  Cb = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]),
  wb = new Float32Array(4),
  Tb = new Float32Array(4);
function Eb(e, t, n, r) {
  (gb(e, wb, 0), gb(t, Tb, 0));
  let i =
      wb[0] * Tb[0] + wb[1] * Tb[1] + wb[2] * Tb[2] + wb[3] * Tb[3] < 0
        ? -1
        : 1,
    a = e[3] + (t[3] - e[3]) * n,
    o = e[7] + (t[7] - e[7]) * n,
    s = e[11] + (t[11] - e[11]) * n,
    c = wb[0] + (Tb[0] * i - wb[0]) * n,
    l = wb[1] + (Tb[1] * i - wb[1]) * n,
    u = wb[2] + (Tb[2] * i - wb[2]) * n,
    d = wb[3] + (Tb[3] * i - wb[3]) * n,
    f = Math.hypot(c, l, u, d) || 1;
  ((c /= f),
    (l /= f),
    (u /= f),
    (d /= f),
    (r[0] = 1 - 2 * (l * l + u * u)),
    (r[1] = 2 * (c * l - u * d)),
    (r[2] = 2 * (c * u + l * d)),
    (r[3] = a),
    (r[4] = 2 * (c * l + u * d)),
    (r[5] = 1 - 2 * (c * c + u * u)),
    (r[6] = 2 * (l * u - c * d)),
    (r[7] = o),
    (r[8] = 2 * (c * u - l * d)),
    (r[9] = 2 * (l * u + c * d)),
    (r[10] = 1 - 2 * (c * c + l * l)),
    (r[11] = s));
}
var Db = { none: 0, blade: 1, guard: 2, grip: 3, glove: 4, cuff: 5 },
  Ob = new WeakSet(),
  kb = (e, t, n, r) =>
    Math.abs(e.r - t) + Math.abs(e.g - n) + Math.abs(e.b - r) < 0.02,
  Ab = new P(16742938),
  jb = new P(14244364),
  Mb = (e, t, n) => kb(Ab, e, t, n) || kb(jb, e, t, n),
  Nb = (e, t) => Math.max(B(0.6, 1, Math.abs(t)), B(0.85, 1, e));
function Pb(e) {
  let t = e.getAttribute(`finishUV`);
  return (
    t ||
      ((t = new F(new Float32Array(e.getAttribute(`position`).count * 4), 4)),
      e.setAttribute(`finishUV`, t)),
    t
  );
}
var Fb = (e) => {
  for (let t = 0; t < e.count; t++)
    if (Math.abs(e.getZ(t) - Db.blade) < 0.5) return !0;
  return !1;
};
function Ib(e) {
  if (Ob.has(e)) return;
  Ob.add(e);
  let t = _l(),
    n = Pb(e);
  if (!Fb(n)) {
    let r = t.bone(`Knife_Handle`),
      i = new Float32Array(12);
    tl(t.bind, r * 12, i, 0);
    let a = e.getAttribute(`position`),
      o = e.getAttribute(`partColor`),
      s = e.getAttribute(`accent`),
      c = e.getAttribute(`skinIndex`),
      l = e.getAttribute(`skinWeight`);
    for (let e = 0; e < a.count; e++) {
      if (c.getX(e) !== r || l.getX(e) < 0.99) continue;
      let t = nl(i, 0, [a.getX(e), a.getY(e), a.getZ(e)]),
        u = Math.round(s.getX(e));
      if (u === 1) n.setXYZW(e, 0, 0, Db.guard, 0);
      else if (u === 0 && t[2] > 2.25 && Mb(o.getX(e), o.getY(e), o.getZ(e))) {
        let r = Math.min(1, Math.max(0, (t[2] - 2.3) / 8.9)),
          i = 0.8 * (1 - r) ** 0.85 + 0.04,
          a = Math.min(1, Math.max(-1, t[1] / i));
        n.setXYZW(e, r, a, Db.blade, Nb(r, a));
      } else u === 0 && t[2] < 1.7 && n.setXYZW(e, 0, 0, Db.grip, 0);
    }
  }
  n.needsUpdate = !0;
}
function Lb(e) {
  if (Ob.has(e)) return;
  Ob.add(e);
  let t = il(),
    n = Pb(e);
  if (!Fb(n)) {
    let r = t.bone(`R_Hand`),
      i = new Float32Array(12);
    tl(t.bind, r * 12, i, 0);
    let a = [2.05, -1.45, 3.1],
      o = z([0.53, 0.1, -0.84]),
      [, , s] = qc(o, [0, 1, 0]),
      c = e.getAttribute(`position`),
      l = e.getAttribute(`partColor`),
      u = e.getAttribute(`accent`),
      d = e.getAttribute(`skinIndex`);
    for (let e = 0; e < c.count; e++) {
      if (
        d.getX(e) !== r ||
        Math.round(u.getX(e)) !== 0 ||
        !Mb(l.getX(e), l.getY(e), l.getZ(e))
      )
        continue;
      let t = nl(i, 0, [c.getX(e), c.getY(e), c.getZ(e)]),
        f = [t[0] - a[0], t[1] - a[1], t[2] - a[2]],
        p = f[0] * o[0] + f[1] * o[1] + f[2] * o[2],
        m = Math.min(1, Math.max(0, (p - 5.3) / 10.3)),
        h = 1.25 * (1 - m) ** 0.85 + 0.05,
        g = Math.min(
          1,
          Math.max(-1, (f[0] * s[0] + f[1] * s[1] + f[2] * s[2]) / h),
        );
      n.setXYZW(e, m, g, Db.blade, Nb(m, g));
    }
  }
  n.needsUpdate = !0;
}
var Rb = {
    1: { metal: 16764733, dark: 13142302, gem: 14688571 },
    2: { metal: 14673648, dark: 9411504, gem: 2780656 },
    3: { metal: 14259022, dark: 9394734, gem: 1620058 },
  },
  zb = (e) => ({ code: 0, color: e });
function Bb(e) {
  let t = [[il().bone(`Head1`), 1]],
    n = Rb[e],
    r = new Yc(),
    i = (e) => [0, 0.45, e],
    a = [1, 0, 0],
    o = [0, 1, 0],
    s = (e) =>
      Math.max(0, Math.cos((e / 40) * Math.PI * 2 * 5 + Math.PI / 2)) ** 3,
    c = [
      V(i(73.6), a, o, 3.55, 3.85, 40),
      V(i(74.3), a, o, 3.62, 3.92, 40),
      V(i(75.3), a, o, 3.7, 4, 40),
    ],
    l = V(i(75.3), a, o, 3.78, 4.08, 40).map((e, t) => [
      e[0],
      e[1],
      e[2] + 2.3 * s(t),
    ]);
  (r.surface([...c, l], {
    paint: (e) => zb(e === 0 ? n.dark : n.metal),
    weight: () => t,
  }),
    r.surface(
      [
        V(i(73.45), a, o, 3.5, 3.8, 40),
        V(i(73.6), a, o, 3.72, 4.02, 40),
        V(i(73.85), a, o, 3.68, 3.98, 40),
      ],
      { paint: () => zb(n.dark), weight: () => t },
    ));
  let u = (e, n, i) =>
    r.surface(r.ellipsoidRows(e, [n, n, n], [0, 0, 1], [1, 0, 0], 10, 6), {
      paint: () => zb(i),
      weight: () => t,
      closed: !0,
    });
  (u([0, 0.45 - 4.05, 74.55], 0.62, n.gem),
    u([-3.3, 0.45 - 2.3, 74.5], 0.42, n.gem),
    u([3.3, 0.45 - 2.3, 74.5], 0.42, n.gem),
    l.forEach((e, t) => {
      s(t) > 0.999 && u([e[0], e[1], e[2] + 0.25], 0.32, n.metal);
    }));
  let d = r.geometry();
  return ((d.boundingSphere = new Qr(new M(0, 0, 70), 60)), d);
}
var Vb = new Map();
function Hb(e) {
  let t = Vb.get(e);
  return (t || Vb.set(e, (t = Bb(e))), t);
}
var Ub = (e) => ({ code: 0, color: e }),
  Wb = [0, 0.55, 69.35],
  Gb = [5.55, 6.05, 6];
function Kb() {
  return [[il().bone(`Head1`), 1]];
}
function qb() {
  let e = Kb(),
    t = new Yc(),
    n = 2758240,
    r = 4190463,
    i = [0, 0.45, 73.15],
    a = (e) => [
      i[0] + (e[0] - i[0]) * 1.2,
      i[1] + (e[1] - i[1]) * 1.2,
      i[2] + (e[2] - i[2]) * 1.6,
    ],
    o = (e) => [0, 0.45, e],
    s = [1, 0, 0],
    c = [0, 1, 0],
    l = (e, t, n) => V(o(e), s, c, t, n, 96).map(a),
    u = [
      [214, 14, 2],
      [242, 14, 2.4],
      [270, 14, 2.9],
      [298, 14, 2.4],
      [326, 14, 2],
      [90, 18, 2],
    ],
    d = (e, t) => Math.abs(((e - t + 540) % 360) - 180),
    f = (e) =>
      Math.max(
        0,
        ...u.map(
          ([t, n, r]) =>
            r *
            Math.max(
              0,
              Math.cos((Math.PI / 2) * Math.min(1, d((e / 96) * 360, t) / n)),
            ) **
              0.85,
        ),
      ),
    p = [l(73.5, 3.55, 3.85), l(74.4, 3.64, 3.94), l(75.2, 3.72, 4.02)],
    m = V(o(75.2), s, c, 3.8, 4.1, 96).map((e, t) =>
      a([e[0], e[1], e[2] + f(t)]),
    );
  (t.surface([...p, m], {
    paint: (e) => Ub(e < 2 ? 16742938 : 10976511),
    weight: () => e,
  }),
    t.surface([l(73.3, 3.5, 3.8), l(73.5, 3.74, 4.04), l(73.8, 3.7, 4)], {
      paint: () => Ub(n),
      weight: () => e,
    }));
  let h = (n, r, i) =>
    t.surface(t.ellipsoidRows(n, R(r, 1.4), [0, 0, 1], [1, 0, 0], 10, 6), {
      paint: () => Ub(i),
      weight: () => e,
      closed: !0,
    });
  for (let [e, , t] of u) {
    let n = (e * Math.PI) / 180;
    h(
      a([3.876 * Math.cos(n), 0.45 + 4.1 * 1.02 * Math.sin(n), 75.2 + t + 0.2]),
      [0.42, 0.42, 0.42],
      r,
    );
  }
  let g = a([0, -3.7, 74.35]);
  h(g, [0.72, 0.42, 0.85], r);
  for (let e of [-1, 1])
    h(I(g, [0.42 * e, 0.07, 1.47]), [0.2, 0.2, 0.5], 4177754);
  for (let e of [-1, 1])
    h(a([3.35 * e, 0.45 - 2.3, 74.35]), [0.42, 0.42, 0.42], n);
  let _ = t.geometry();
  return ((_.boundingSphere = new Qr(new M(0, 0, 70), 60)), _);
}
function Jb() {
  let e = Kb(),
    t = new Yc(),
    n = 2301235,
    r = z([0.12, -0.15, 1]),
    i = [0, -2.6, 75.1],
    a = z([1, 0, -r[0]]),
    o = z([0, 1, -r[1]]),
    s = 1.65,
    c = (e) => I(i, R(r, e * s)),
    l = (e, t) => V(c(e), a, o, t * 1.12 * s, t * 1.15, 28),
    u = R(r, -1);
  t.surface(
    [[...Array(28)].map(() => c(-0.05)), l(-0.05, 1.4), l(-0.05, 2.25)],
    { paint: () => Ub(n), weight: () => e, out: () => u },
  );
  let d = [l(-0.05, 2.25), l(0.12, 2.38), l(0.2, 2.15), l(0.18, 1.3)];
  t.surface(d, {
    paint: () => Ub(n),
    weight: () => e,
    out: (e, t) => (e < 2 ? I(d[e][t], R(c(0), -1)) : r),
  });
  let f = (e, t) => V(c(e), a, o, t * s, t * 1.2999999999999998, 28),
    p = [
      f(0.15, 1.3),
      f(0.3, 1.3),
      f(0.75, 1.31),
      f(0.85, 1.32),
      f(2.9, 1.42),
      f(3.05, 1.4),
    ];
  t.surface(p, {
    paint: (e) => Ub(e === 1 || e === 2 ? 16742938 : e >= 4 ? 3813712 : n),
    weight: () => e,
    capEnd: Ub(n),
  });
  let m = t.geometry();
  return ((m.boundingSphere = new Qr(new M(0, 0, 70), 60)), m);
}
function Yb() {
  let e = Kb(),
    t = new Yc(),
    n = 4177754,
    r = z([0, 0.32, 1]),
    i = [Gb[0] + 0.32, Gb[1] + 0.32, Gb[2] + 0.3],
    a = (e, n) =>
      t.ellipsoidRows(
        Wb,
        [i[0] + e, i[1] + e, i[2] + e],
        r,
        [1, 0, 0],
        32,
        1,
        n,
        n,
      )[0],
    o = t.ellipsoidRows(Wb, i, r, [1, 0, 0], 32, 10, 0, 0.98);
  (t.surface(o, {
    paint: (e, t) => Ub(t % 2 ? 15230222 : 16742938),
    weight: () => e,
  }),
    t.surface(
      [
        a(0, 0.99),
        a(0.42, 0.985),
        a(0.5, 0.92),
        a(0.5, 0.82),
        a(0.4, 0.765),
        a(0, 0.76),
      ],
      { paint: () => Ub(14244364), weight: () => e },
    ));
  let s = I(Wb, [r[0] * i[0], r[1] * i[1], r[2] * i[2]]),
    c = (n, r, i) =>
      t.surface(t.ellipsoidRows(n, r, [0, 0, 1], [1, 0, 0], 10, 6), {
        paint: () => Ub(i),
        weight: () => e,
        closed: !0,
      }),
    l = 1.35;
  c(I(s, [0, 0, 0.55 * l]), [0.95 * l, 0.95 * l, 0.8 * l], n);
  for (let e = 0; e < 5; e++) {
    let t = (e / 5) * Math.PI * 2;
    c(
      I(s, [Math.cos(t) * 0.75 * l, Math.sin(t) * 0.75 * l, 0.9 * l]),
      [0.42 * l, 0.42 * l, 0.7 * l],
      e % 2 ? 3119688 : n,
    );
  }
  let u = t.geometry();
  return ((u.boundingSphere = new Qr(new M(0, 0, 70), 60)), u);
}
var Xb = {
    pale: 14090232,
    aqua: 6288095,
    aqua2: 3459526,
    teal: 1473164,
    violet: 10124543,
    violet2: 7493866,
    violet3: 4534942,
  },
  Zb = { aurora: 11, orbit: 12, halo: 13, haloInset: 14, line: 15 },
  Qb = (e, t) => ({ code: e, color: t });
function $b(e, t, n, r, i, a, o, s, c, l = 0) {
  let u = [1, 0, 0],
    d = [0, 1, 0],
    f = 1.45;
  [r, i, a, o] = [r * f, i * f, a * f, o * f];
  let p = (e) => [t[0], t[1], t[2] + e],
    m = [
      V(p(-i), u, d, 0, 0, n, 2, l),
      V(p(0), u, d, r, r, n, 2, l),
      V(p(a), u, d, o, o, n, 2, l),
    ];
  (o > 0 && m.push(V(p(a), u, d, 0, 0, n, 2, l)),
    e.surface(m, {
      paint: (e, t) => s(e, t),
      weight: () => c,
      flat: !0,
      out: (e, t) =>
        e === 0
          ? [0, 0, -1]
          : e === 3
            ? [0, 0, 1]
            : L(m[e][t], p(e === 2 ? a - 1 : 0)),
    }));
}
var ex = (() => {
  let e = (e) =>
      (Math.round(((e >> 16) & 255) * 0.65) << 16) |
      (Math.round(((e >> 8) & 255) * 0.65) << 8) |
      Math.round((e & 255) * 0.65),
    t = (t, n) => (r, i, a) => {
      let o = e(n),
        s = ((i + 0.5) / a) * Math.PI * 2,
        c = Math.cos(s - 2.4),
        l = c > 0.35 ? t : c > -0.35 ? n : o;
      return Qb(Zb.orbit, r === 0 ? (l === t ? n : o) : l);
    },
    n = t(15922682, 12831446),
    r = t(14268671, 10181877),
    i = t(9435087, 2279822),
    a = t(10275071, 4161264);
  return [
    {
      cut: (e, t, r) =>
        $b(e, t, 4, 1.15, 0.45, 1.35, 0, (e, t) => n(e, t, 4), r, Math.PI / 4),
    },
    {
      cut: (e, t, n) => $b(e, t, 4, 0.85, 1.3, 1.3, 0, (e, t) => r(e, t, 4), n),
    },
    {
      cut: (e, t, n) =>
        $b(e, t, 5, 1.1, 1.14, 0.6, 0.62, (e, t) => i(e, t, 5), n, Math.PI / 2),
    },
    {
      cut: (e, t, n) =>
        $b(
          e,
          t,
          8,
          1.15,
          1.14,
          0.54,
          0.66,
          (e, t) => a(e, t, 8),
          n,
          Math.PI / 8,
        ),
    },
  ];
})();
function tx() {
  let e = Kb(),
    t = new Yc();
  ex.forEach((n, r) => {
    let i = If(r);
    n.cut(t, I(Pf, [Math.cos(i) * Ff, Math.sin(i) * Ff, 0]), e);
  });
  let n = t.geometry();
  return ((n.boundingSphere = new Qr(new M(0, 0, 70), 60)), n);
}
function nx() {
  let e = Kb(),
    t = new Yc(),
    [, n, r] = qc(Rf, [1, 0, 0]),
    i = 3.4,
    a = (e, t, a) =>
      I(
        I(Lf, R(Rf, a)),
        I(R(n, Math.cos(e) * (i + t)), R(r, Math.sin(e) * (i + t))),
      ),
    o = Array.from({ length: 6 }, (e, t) => [
      Math.cos((t / 6) * Math.PI * 2) * 0.92,
      Math.sin((t / 6) * Math.PI * 2) * 0.64,
    ]),
    s = [];
  for (let e = 0; e <= 48; e++)
    s.push(o.map(([t, n]) => a((e / 48) * Math.PI * 2, t, n)));
  let c = (e, t, n, r, i) => {
      let a = Math.sin(((e + 0.5) / 6) * Math.PI * 2),
        o = Math.cos(((e + 0.5) / 6) * Math.PI * 2);
      return a > 0.6 ? t : a < -0.6 ? i : o > 0 ? n : r;
    },
    l = (e) => [8, 24, 40].some((t) => Math.abs(e - t) <= 1),
    u = (e) => [8, 24, 40].some((t) => Math.abs(e - t) === 2);
  t.surface(s, {
    closed: !0,
    paint: (e, t) =>
      u(e)
        ? Qb(Zb.haloInset, c(t, Xb.violet3, 2760550, 2760550, 1840198))
        : l(e)
          ? Qb(Zb.haloInset, c(t, 12166911, Xb.violet, Xb.violet2, Xb.violet3))
          : Qb(Zb.halo, c(t, 10482664, Xb.aqua, Xb.aqua2, 1007468)),
    weight: () => e,
    flat: !0,
    out: (e, t) => L(s[e][t], a((e / 48) * Math.PI * 2, 0, 0)),
  });
  let d = t.geometry();
  return ((d.boundingSphere = new Qr(new M(0, 0, 70), 60)), d);
}
function rx() {
  let e = Kb(),
    t = new Yc(),
    n = (e) => Math.sqrt(Math.max(0.04, 1 - ((e - Wb[2]) / Gb[2]) ** 2)),
    r = (e, t, r, i) => {
      let a = n(r);
      return [
        Wb[0] + Math.sin(e) * (Gb[0] * a + i),
        Wb[1] - Math.cos(e) * (Gb[1] * a + i),
        t,
      ];
    },
    i = (e) => Math.max(0, Math.cos(e)) ** 1.6,
    a = (e) => 72 + 1.9 * (0.5 + 0.5 * Math.cos(e)),
    o = (e) => Math.abs(Math.atan2(Math.sin(e), Math.cos(e))),
    s = (e) => Math.max(0, 1 - o(e) / 0.62),
    c = (e) => Math.max(0, 1 - (Math.PI - o(e)) / 0.42),
    l = (e) => 0.42 + 0.6 * i(e) + 2 * s(e) + 0.75 * c(e),
    u = [
      [0, 0.05],
      [0, 0.42],
      [0.3, 0.5],
      [0.44, 0.56],
      [0.54, 0.56],
      [0.72, 0.5],
      [1, 0.4],
      [1, 0.02],
    ],
    d = u.map(([e, t]) =>
      Array.from({ length: 26 }, (n, o) => {
        let s = (o / 26) * Math.PI * 2,
          c = a(s),
          u = l(s);
        return r(s, c + e * u, c + e * u * 0.55, t + 0.15 * i(s) * e);
      }),
    ),
    f = 2300754,
    p = 9401087;
  t.surface(d, {
    closed: !0,
    flat: !0,
    paint: (e, t) => {
      let n = ((t + 0.5) / 26) * Math.PI * 2;
      return e === 3
        ? i(n) > 0.12 && Math.abs(o(n) - 0.5) > 0.09
          ? Qb(Zb.line, Xb.aqua)
          : Ub(p)
        : Ub(
            e === 5
              ? p
              : e === 0 || e === 1
                ? i(n) > 0.5
                  ? 1380147
                  : f
                : e === 6
                  ? f
                  : t % 2
                    ? 3418744
                    : e < 3
                      ? f
                      : 5062566,
          );
    },
    weight: () => e,
    out: (e, t) =>
      L(d[e][t], [
        Wb[0],
        Wb[1],
        d[e][t][2] - (e === 0 ? 1 : e === u.length - 1 ? -1 : 0),
      ]),
  });
  let m = t.geometry();
  return ((m.boundingSphere = new Qr(new M(0, 0, 70), 60)), m);
}
function ix(e, t, n, r) {
  let [, i, a] = qc(n, [0, 0, 1]),
    o = 1.35,
    s = 0.2,
    c = (e) => I(t, R(n, e)),
    l = 13210143,
    u = [
      V(c(-0.2), i, a, 0, 0, 18),
      V(c(-0.2), i, a, o, o, 18),
      V(c(s), i, a, o, o, 18),
      V(c(s), i, a, 0, 0, 18),
    ];
  e.surface(u, {
    paint: (e, t) => Qb(Zb.orbit, e === 1 ? (t % 2 ? l : 11040282) : 16764746),
    weight: () => r,
    flat: !0,
    out: (e, t) => (e === 0 ? R(n, -1) : e === 3 ? n : L(u[e][t], c(0))),
  });
  for (let t of [-1, 1]) {
    let u = [
      V(c(t * s), i, a, o * 0.66, o * 0.66, 18),
      V(c(t * 0.29000000000000004), i, a, o * 0.6, o * 0.6, 18),
      V(c(t * 0.29000000000000004), i, a, 0, 0, 18),
    ];
    e.surface(u, {
      paint: (e) => Qb(Zb.orbit, e === 0 ? l : 16769162),
      weight: () => r,
      flat: !0,
      out: (e, r) => (e === 2 ? R(n, t) : L(u[e][r], c(0))),
    });
    let d = [
      V(I(c(t * 0.29000000000000004), R(a, 0.38)), i, n, 0.12, 0.06, 6),
      V(I(c(t * 0.29000000000000004), R(a, -0.38)), i, n, 0.12, 0.06, 6),
    ];
    e.surface(d, {
      paint: () => Qb(Zb.orbit, l),
      weight: () => r,
      capStart: Qb(Zb.orbit, l),
      capEnd: Qb(Zb.orbit, l),
    });
  }
}
function ax() {
  let e = Kb(),
    t = new Yc();
  for (let n = 0; n < 4; n++) {
    let r = If(n);
    ix(
      t,
      I(Pf, [Math.cos(r) * Ff, Math.sin(r) * Ff, 0]),
      [Math.cos(r), Math.sin(r), 0],
      e,
    );
  }
  let n = t.geometry();
  return ((n.boundingSphere = new Qr(new M(0, 0, 70), 60)), n);
}
function ox() {
  let e = Kb(),
    t = new Yc(),
    n = (e) => Math.sqrt(Math.max(0.04, 1 - ((e - Wb[2]) / Gb[2]) ** 2)),
    r = (e, t, r) => {
      let i = n(t);
      return [
        Wb[0] + Math.sin(e) * (Gb[0] * i + r),
        Wb[1] - Math.cos(e) * (Gb[1] * i + r),
        t,
      ];
    },
    i = (e) => 72.3 + 1.5 * (0.5 + 0.5 * Math.cos(e)),
    a = [
      [0, 0.04],
      [0, 0.32],
      [0.15, 0.36],
      [0.85, 0.36],
      [1, 0.32],
      [1, 0.04],
    ].map(([e, t]) =>
      Array.from({ length: 32 }, (n, a) => {
        let o = (a / 32) * Math.PI * 2;
        return r(o, i(o) + e * 0.75, t);
      }),
    );
  t.surface(a, {
    closed: !0,
    paint: (e) => Ub(e === 2 || e === 4 ? 14725434 : 1118742),
    weight: () => e,
    out: (e, t) => L(a[e][t], [Wb[0], Wb[1], a[e][t][2]]),
  });
  let o = (75 * Math.PI) / 180,
    s = [0, 0.35, 0.7, 1].map((e) =>
      Array.from({ length: 14 }, (t, n) => {
        let a = -o + (2 * o * n) / 13;
        return I(
          r(a, i(a) + 0.7, 0.36),
          I(
            R(
              z([Math.sin(a), -Math.cos(a), 0]),
              3.1 * (0.75 + 0.25 * Math.cos(a)) * e,
            ),
            [0, 0, -0.95 * e * e + 0.25 * e],
          ),
        );
      }),
    );
  t.surface(s, {
    closed: !1,
    paint: (e) => Ub(e === 2 ? 6281366 : e === 1 ? 1473095 : 2005594),
    weight: () => e,
    out: () => [0, 0, 1],
  });
  let c = t.geometry();
  return ((c.boundingSphere = new Qr(new M(0, 0, 70), 60)), c);
}
function sx() {
  let e = Kb(),
    t = new Yc(),
    n = [0, 0.33, 0.66, 1].map((e) =>
      Array.from({ length: 60 }, (t, n) => {
        let r = (n / 60) * Math.PI * 2,
          i = 3.6 + 0.25 * Math.sin(r * 2 + 0.6);
        return I(zf, [
          Math.cos(r) * i,
          Math.sin(r) * i,
          0.4 * Math.sin(r * 3) +
            (e - 0.5) * 1.35 * (0.8 + 0.2 * Math.cos(r * 3)),
        ]);
      }),
    ),
    r = [4190368, 3135176, 9071615];
  t.surface(n, {
    closed: !0,
    paint: (e) => Qb(Zb.aurora, r[e]),
    weight: () => e,
    out: (e, t) => L(n[e][t], [zf[0], zf[1], n[e][t][2]]),
  });
  let i = t.geometry();
  return ((i.boundingSphere = new Qr(new M(0, 0, 70), 60)), i);
}
var cx = {
    "hat-founder-crown": qb,
    "hat-tophat": Jb,
    "hat-beanie": Yb,
    "hat-gem-orbit": tx,
    "hat-halo": nx,
    "hat-circlet": rx,
    "hat-dealer-visor": ox,
    "hat-lucky-coins": ax,
    "hat-aurora": sx,
  },
  lx = new Map();
function ux(e) {
  let t = cx[e];
  if (!t) return null;
  let n = lx.get(e);
  return (n || lx.set(e, (n = t())), n);
}
function dx(e) {
  return (e?.hat ? ux(e.hat) : null) ?? (e?.crown ? Hb(e.crown) : null);
}
var fx = (e) => (typeof e == `function` ? e : () => e),
  px = (e) => (e && e !== `Gun` ? `Gun_${e}` : `Gun_Body`);
function mx(e, t = 0.12, n = 2) {
  let r = [],
    i = e.length;
  for (let a = 0; a < i; a++) {
    let o = e[a],
      s = e[(a - 1 + i) % i],
      c = e[(a + 1) % i],
      l = typeof t == `number` ? t : (t[a] ?? 0.12),
      u = [s[0] - o[0], s[1] - o[1]],
      d = [c[0] - o[0], c[1] - o[1]],
      f = Math.hypot(u[0], u[1]),
      p = Math.hypot(d[0], d[1]);
    if (l <= 0 || f < 1e-6 || p < 1e-6) {
      r.push(o);
      continue;
    }
    let m = Math.min(l, f * 0.45, p * 0.45),
      h = [o[0] + (u[0] / f) * m, o[1] + (u[1] / f) * m],
      g = [o[0] + (d[0] / p) * m, o[1] + (d[1] / p) * m];
    for (let e = 0; e <= n; e++) {
      let t = e / n,
        i = 1 - t;
      r.push([
        i * i * h[0] + 2 * i * t * o[0] + t * t * g[0],
        i * i * h[1] + 2 * i * t * o[1] + t * t * g[1],
      ]);
    }
  }
  return r;
}
function hx(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = e[(r + 1) % e.length],
      o = Math.max(1, Math.ceil(Math.hypot(a[0] - i[0], a[1] - i[1]) / t));
    for (let e = 0; e < o; e++)
      n.push([i[0] + ((a[0] - i[0]) * e) / o, i[1] + ((a[1] - i[1]) * e) / o]);
  }
  return n;
}
function gx(e, t) {
  let n = e.length,
    r = 0;
  for (let t = 0; t < n; t++)
    r += e[t][0] * e[(t + 1) % n][1] - e[(t + 1) % n][0] * e[t][1];
  let i = r > 0 ? 1 : -1;
  return e.map((r, a) => {
    let o = e[(a - 1 + n) % n],
      s = e[(a + 1) % n],
      c = [s[0] - o[0], s[1] - o[1]],
      l = Math.hypot(c[0], c[1]) || 1;
    return [r[0] - (c[1] / l) * t * i, r[1] + (c[0] / l) * t * i];
  });
}
function _x(e) {
  let t = 1 / 0,
    n = -1 / 0,
    r = 1 / 0,
    i = -1 / 0;
  for (let [a, o] of e)
    ((t = Math.min(t, a)),
      (n = Math.max(n, a)),
      (r = Math.min(r, o)),
      (i = Math.max(i, o)));
  return { x0: t, x1: n, z0: r, z1: i };
}
function $(e, t, n, r, i) {
  let a =
      i.round === 0
        ? t
        : mx(t, i.round ?? 0.1, e.view === `fp` ? (i.seg ?? 2) : 1),
    o = _x(a),
    s = Math.hypot(o.x1 - o.x0, o.z1 - o.z0) > 2.5,
    c =
      e.view === `fp` && (i.part === U.grip || s)
        ? hx(a, i.part === U.grip ? 0.35 : 0.6)
        : a,
    l = Math.min(i.bevel ?? 0.07, (r - n) * 0.3),
    u = gx(c, l * 0.8),
    d = (e, t) => e.map(([e, n]) => [e, t, n]),
    f = [d(u, n), d(c, n + l), d(c, r - l), d(u, r)],
    p = _x(c),
    m = fx(i.paint),
    h = i.part ?? U.none,
    g = (p.z0 + p.z1) / 2,
    _ = Math.max(0.001, (p.z1 - p.z0) / 2);
  e.surface(f, {
    paint: (e, t) => m(e, t),
    bone: px(i.bone),
    part: h,
    fin:
      h === U.blade || h === U.grip
        ? (e, t) => [
            (f[e][t][0] - p.x0) / Math.max(0.001, p.x1 - p.x0),
            (f[e][t][2] - g) / _,
            0,
          ]
        : void 0,
    capStart: i.cap ?? m(0, 0),
    capEnd: i.cap ?? m(0, 0),
  });
}
function vx(e, t, n, r) {
  $(
    e,
    [
      [t[0] - n[0], t[2] - n[2]],
      [t[0] + n[0], t[2] - n[2]],
      [t[0] + n[0], t[2] + n[2]],
      [t[0] - n[0], t[2] + n[2]],
    ],
    t[1] - n[1],
    t[1] + n[1],
    { ...r, round: r.round ?? Math.min(0.12, n[0] * 0.4, n[2] * 0.4) },
  );
}
function yx(e, t, n) {
  let r =
      e.view === `fp`
        ? (n.sides ?? 12)
        : Math.max(6, Math.round((n.sides ?? 12) * 0.6)),
    [i, a] = n.c ?? [0, 0],
    o = n.e ?? 2,
    s = n.ry ?? 1,
    c = n.rz ?? 1,
    l = t.map(([e, t]) => {
      let l = [];
      for (let u = 0; u < r; u++) {
        let d = (n.phase ?? 0) + (u / r) * Math.PI * 2,
          f = Math.cos(d),
          p = Math.sin(d),
          m = Math.sign(f) * Math.abs(f) ** (2 / o),
          h = Math.sign(p) * Math.abs(p) ** (2 / o);
        l.push([e, i + m * t * s, a + h * t * c]);
      }
      return l;
    }),
    u = fx(n.paint),
    d = n.part ?? U.none,
    f = t[0][0],
    p = t[t.length - 1][0];
  e.surface(l, {
    paint: (e, t) => u(e, t),
    bone: px(n.bone),
    part: d,
    fin:
      d === U.blade
        ? (e, t) => [
            (l[e][t][0] - f) / Math.max(0.001, p - f),
            Math.cos((t / r) * Math.PI * 2),
            0,
          ]
        : void 0,
    capStart: n.capStart === !1 || t[0][1] < 1e-4 ? null : (n.cap ?? u(0, 0)),
    capEnd:
      n.capEnd === !1 || t[t.length - 1][1] < 1e-4
        ? null
        : (n.cap ?? u(t.length - 2, 0)),
  });
}
function bx(e, t, n, r, i) {
  let a = fx(i.paint);
  e.tube(
    [t, n],
    r,
    e.view === `fp` ? (i.sides ?? 8) : 6,
    Math.abs(n[2] - t[2]) > Math.abs(n[0] - t[0]) ? [1, 0, 0] : [0, 0, 1],
    (e) => a(e, 0),
    { bone: px(i.bone), part: i.part },
  );
}
function xx(e, t, n, r) {
  let i = r.y ?? 0,
    a = mx(t, 0.25, e.view === `fp` ? 3 : 1),
    o = fx(r.paint);
  if (r.open) {
    e.tube(
      a.map(([e, t]) => [e, i, t]),
      n,
      e.view === `fp` ? 7 : 5,
      [0, 1, 0],
      (e) => o(e, 0),
      { bone: px(r.bone), part: r.part },
    );
    return;
  }
  e.loop(
    a.map(([e, t]) => [e, i, t]),
    n,
    e.view === `fp` ? 7 : 5,
    [0, 1, 0],
    (e) => o(e, 0),
    { bone: px(r.bone), part: r.part },
  );
}
function Sx(e, t, n, r, i) {
  let a = e.view === `fp` ? (i.sides ?? 10) : 6,
    o = e.view === `fp` ? 4 : 2,
    s = R(n, 1 / (Math.hypot(n[0], n[1], n[2]) || 1)),
    c = Math.abs(s[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0],
    l = I(c, R(s, -(c[0] * s[0] + c[1] * s[1] + c[2] * s[2]))),
    u = Math.hypot(l[0], l[1], l[2]),
    d = [l[0] / u, l[1] / u, l[2] / u],
    f = [
      s[1] * d[2] - s[2] * d[1],
      s[2] * d[0] - s[0] * d[2],
      s[0] * d[1] - s[1] * d[0],
    ],
    p = i.h ?? r,
    m = [];
  for (let e = 0; e <= o; e++) {
    let n = (e / o) * (Math.PI / 2),
      i = Math.cos(n) * r,
      c = Math.sin(n) * p,
      l = [];
    for (let e = 0; e < a; e++) {
      let n = (e / a) * Math.PI * 2;
      l.push(
        I(
          I(t, R(s, c)),
          I(
            R(d, Math.cos(n) * Math.max(i, 0.001)),
            R(f, Math.sin(n) * Math.max(i, 0.001)),
          ),
        ),
      );
    }
    m.push(l);
  }
  let h = fx(i.paint);
  e.surface(m, {
    paint: (e, t) => h(e, t),
    bone: px(i.bone),
    part: i.part,
    capStart: i.cap ?? h(0, 0),
    capEnd: null,
  });
}
function Cx(e, t, n, r) {
  let i = e.view === `fp` ? (r.sides ?? 10) : 6,
    a = e.view === `fp` ? 6 : 4,
    o = [];
  for (let e = 1; e < a; e++) {
    let r = (e / a) * Math.PI,
      s = [];
    for (let e = 0; e < i; e++) {
      let a = (e / i) * Math.PI * 2;
      s.push([
        t[0] + Math.cos(r) * n[0],
        t[1] + Math.sin(r) * Math.cos(a) * n[1],
        t[2] + Math.sin(r) * Math.sin(a) * n[2],
      ]);
    }
    o.push(s);
  }
  let s = fx(r.paint);
  e.surface(o, {
    paint: (e, t) => s(e, t),
    bone: px(r.bone),
    part: r.part,
    capStart: r.cap ?? s(0, 0),
    capEnd: r.cap ?? s(0, 0),
  });
}
var wx = W(3817029),
  Tx = W(2500910),
  Ex = W(7311696),
  Dx = W(5600061),
  Ox = W(3817287),
  kx = W(8028556),
  Ax = W(1052948),
  jx = W(3108723),
  Mx = W(16742938),
  Nx = 1,
  Px = 2.95,
  Fx = (22 * Math.PI) / 180,
  Ix = [Math.sin(Fx), Math.cos(Fx)],
  Lx = [Math.cos(Fx), -Math.sin(Fx)],
  Rx = [-0.5, -0.3],
  zx = 3.4,
  Bx = 1.75,
  Vx = (e, t, n) => [
    e[0] - Ix[0] * t + Lx[0] * n,
    e[1] - Ix[1] * t + Lx[1] * n,
  ];
function Hx(e) {
  let t = e.view === `fp`;
  if (
    ($(
      e,
      [
        [-0.8, -0.35],
        [5.8, -0.35],
        [5.9, 1.55],
        [-0.6, 1.55],
        [-0.9, 1.1],
      ],
      -0.62,
      0.62,
      { paint: wx, part: U.blade, round: 0.14, bevel: 0.1 },
    ),
    vx(e, [3, 0.63, 1.3], [0.9, 0.03, 0.12], { paint: Tx, bevel: 0.01 }),
    yx(
      e,
      [
        [-1.1, 0],
        [-1.1, 0.2],
        [-0.95, 0.3],
        [-0.6, 0.3],
      ],
      { c: [0, 1.2], paint: kx, sides: 10, bone: `Pump` },
    ),
    bx(e, [2.7, 0.55, 1.3], [2.75, 1.2, 1.05], 0.1, {
      paint: kx,
      bone: `Pump`,
    }),
    Cx(e, [2.75, 1.3, 1], [0.24, 0.24, 0.24], {
      paint: kx,
      bone: `Pump`,
      sides: 8,
    }),
    yx(
      e,
      [
        [5.8, 0.4],
        [24.6, 0.3],
        [24.6, 0.44],
        [26.4, 0.44],
        [26.4, 0.2],
        [26.1, 0.2],
      ],
      {
        c: [0, Nx],
        paint: (e) => (e >= 4 ? Ax : e >= 2 ? Tx : Ox),
        sides: 12,
        part: U.blade,
      },
    ),
    t)
  )
    for (let t of [25.15, 25.75])
      for (let n of [-1, 1])
        vx(e, [t, n * 0.42, Nx], [0.16, 0.04, 0.22], { paint: Ax, round: 0 });
  (yx(
    e,
    [
      [-0.8, 0.5],
      [-0.3, 0.6],
      [0.6, 0.6],
      [1.1, 0.42],
      [5.4, 0.42],
      [6.1, 0.66],
      [7.5, 0.7],
    ],
    {
      c: [0, Px],
      paint: (e) => (e === 0 || e === 5 ? Tx : Ox),
      cap: Tx,
      sides: 14,
    },
  ),
    yx(
      e,
      [
        [7.5, 0.6],
        [7.52, 0.6],
      ],
      { c: [0, Px], paint: jx, cap: jx, sides: 14 },
    ),
    yx(
      e,
      [
        [7.45, 0.74],
        [7.7, 0.74],
      ],
      { c: [0, Px], paint: Mx, sides: 14, capStart: !1, capEnd: !1 },
    ),
    bx(e, [3.2, 0, 3.33], [3.2, 0, 3.7300000000000004], 0.22, { paint: Tx }),
    bx(e, [3.2, 0.38, Px], [3.2, 0.74, Px], 0.2, { paint: Tx }));
  for (let t of [1.6, 4.6])
    vx(e, [t, 0, 4.1 / 2], [0.28, 0.26, 0.56], { paint: Tx, round: 0.08 });
  ($(
    e,
    [
      [5.5, -0.6],
      [15, -0.45],
      [15.3, 0.25],
      [15, 0.85],
      [5.5, 0.85],
    ],
    -0.7,
    0.7,
    { paint: Ex, part: U.grip, round: 0.3, bevel: 0.16 },
  ),
    xx(
      e,
      [
        [3.5, -0.35],
        [3.4, -1.3],
        [2.2, -1.45],
        [1.4, -1.2],
        [1.35, -0.65],
      ],
      0.14,
      { paint: Dx, open: !0 },
    ),
    bx(e, [2.55, 0, -0.35], [2.68, 0, -0.75], 0.075, { paint: kx }),
    bx(e, [2.68, 0, -0.75], [2.58, 0, -1.02], 0.075, { paint: kx }));
  let n = Rx;
  if (
    ($(
      e,
      [
        Vx(n, 0, -0.05),
        Vx(n, -0.05, 1),
        [1.25, -0.5],
        Vx(n, 1.1, Bx),
        Vx(n, zx, 1.65),
        Vx(n, zx, 0.05),
        Vx(n, 1.5, -0.05),
      ],
      -0.6,
      0.6,
      { paint: Ex, part: U.grip, round: 0.25, bevel: 0.15 },
    ),
    t)
  )
    for (let t of [-1, 1])
      $(
        e,
        [Vx(n, 0.6, 0.3), Vx(n, 0.6, 1.45), Vx(n, 3.1, 1.35), Vx(n, 3.1, 0.3)],
        t > 0 ? 0.58 : -0.62,
        t > 0 ? 0.62 : -0.58,
        { paint: Dx, part: U.grip, round: 0.15, bevel: 0.02 },
      );
  ($(
    e,
    [
      [-0.85, 1.35],
      [-9.4, 1.35],
      [-9.6, -2],
      [-8.4, -2.1],
      [-3, -1],
      [-0.9, -0.35],
    ],
    -0.6,
    0.6,
    { paint: Ex, round: 0.32, bevel: 0.15 },
  ),
    vx(e, [-5.4, 0, 1.55], [2.2, 0.48, 0.25], { paint: Dx, round: 0.2 }),
    vx(e, [-9.65, 0, -0.32], [0.22, 0.62, 1.6], { paint: Tx, round: 0.18 }),
    vx(e, [5.1, 0, -0.95], [0.45, 0.4, 0.68], {
      paint: Tx,
      bone: `Mag`,
      round: 0.12,
    }),
    vx(e, [5.1, 0, -1.68], [0.52, 0.46, 0.08], {
      paint: Mx,
      bone: `Mag`,
      round: 0.05,
    }));
}
var Ux = {
    id: `awp`,
    name: `Beanpole`,
    archetype: `Sniper rifle`,
    blurb: `A very long, very green bolt-action rifle.`,
    cls: `sniper`,
    build: Hx,
    right: {
      o: [-1.03, 0, -0.49],
      up: [-0.2, 0, 0.98],
      fwd: [0.965, 0.174, 0.197],
      index: { c: [16, 34, 20], spread: -4 },
      middle: { c: [84, 98, 75] },
      ring: { c: [88, 98, 75] },
      pinky: { c: [92, 96, 75] },
      thumb: { c: [12, 10, 6], spread: -10 },
      wrap: [`Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    left: {
      o: [10.9, 0, 0],
      up: [1, 0, 0],
      fwd: [0, -0.97, 0.179],
      index: { c: [60, 80, 60] },
      middle: { c: [64, 84, 64] },
      ring: { c: [68, 86, 64] },
      pinky: { c: [72, 86, 64] },
      thumb: { c: [14, 40, 40], spread: -6 },
      wrap: [`Index`, `Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    places: {
      mag: { o: [5.1, 0, -2.3], up: [0, 0, 1], fwd: [1, 0, 0] },
      rack: { o: [2.75, 1.9, 1], up: [0, 0, 1], fwd: [1, 0, 0] },
    },
    frame: { o: [16, -6.2, -6.2], a: [-1, 4, -4] },
    elbows: { R: [8, -18, -18], L: [24, -6, -26] },
    muzzle: [26.5, 0, Nx],
    eject: { p: [3, -0.6, 1.2], dir: [-0.15, -0.9, 0.4] },
    shell: `smg`,
    mag: { p: [5.1, 0, -0.3], out: [0, 0, -1] },
    timing: {
      cycle: 1.455,
      ammo: 10,
      reload: 3.7,
      draw: 1,
      pump: { at: 0.35, dur: 0.6 },
    },
    recoil: {
      kick: 8,
      back: 1.5,
      roll: 1.2,
      settle: 130,
      slide: 0,
      slideTime: 0,
    },
    sounds: {
      fire: `gun_jackrabbit_fire`,
      fireRate: 0.72,
      magOut: `gun_mag_out`,
      magIn: `gun_mag_in`,
      pump: `gun_bolt`,
    },
    tp: { o: [1.2, -0.8, 0.4], x: [0.15, 0.1, -0.98], z: [0, 1, 0], s: 1.35 },
  },
  Wx = W(5988457),
  Gx = W(4145994),
  Kx = W(3817287),
  qx = W(6975610),
  Jx = W(1052948),
  Yx = W(9395510),
  Xx = W(7029798),
  Zx = W(5817930),
  Qx = W(3112244),
  $x = W(16742938),
  eS = W(12860460),
  tS = W(14198336),
  nS = 1.25,
  rS = 0.25,
  iS = 9.5,
  aS = (24 * Math.PI) / 180,
  oS = [Math.sin(aS), Math.cos(aS)],
  sS = [Math.cos(aS), -Math.sin(aS)],
  cS = [-0.5, -0.25],
  lS = 3.4,
  uS = 1.7,
  dS = (e, t, n) => [
    e[0] - oS[0] * t + sS[0] * n,
    e[1] - oS[1] * t + sS[1] * n,
  ];
function fS(e) {
  let t = e.view === `fp`;
  ($(
    e,
    [
      [-0.7, -0.3],
      [5.2, -0.3],
      [5.3, 1.75],
      [4.8, 1.95],
      [-0.4, 1.95],
      [-0.8, 1.4],
    ],
    -0.74,
    0.74,
    { paint: Wx, part: U.blade, round: 0.15, bevel: 0.1 },
  ),
    vx(e, [2.4, 0, -0.32], [1.2, 0.42, 0.03], { paint: Gx, bevel: 0.01 }),
    vx(e, [2.4, -0.75, 1.2], [0.85, 0.03, 0.32], { paint: Gx, bevel: 0.01 }),
    yx(
      e,
      [
        [5.1, 0.45],
        [23.6, 0.42],
        [24, 0.42],
        [24, 0.24],
        [23.7, 0.24],
      ],
      {
        c: [0, nS],
        paint: (e) => (e >= 2 ? Jx : Kx),
        sides: 14,
        part: U.blade,
      },
    ),
    vx(e, [14.4, 0, 1.73], [9.2, 0.12, 0.06], { paint: qx, bevel: 0.02 }),
    Sx(e, [23.55, 0, 1.78], [0, 0, 1], 0.12, { paint: $x, h: 0.12, sides: 8 }),
    yx(
      e,
      [
        [5.1, 0.42],
        [21.9, 0.42],
        [22.3, 0.36],
        [22.45, 0],
      ],
      { c: [0, rS], paint: Kx, sides: 12 },
    ),
    vx(e, [21.3, 0, 1.5 / 2], [0.3, 0.46, 0.75], { paint: qx, round: 0.2 }));
  let n = [];
  for (let e = 0; e <= 12; e++) {
    let t = iS + (6.5 * e) / 12,
      r = e === 0 || e === 12 ? 0.82 : 1;
    n.push([t, (e % 2 ? 0.86 : 0.8) * r]);
  }
  if (
    (yx(e, n, {
      c: [0, 0.35],
      ry: 0.95,
      rz: 0.82,
      e: 2.4,
      sides: t ? 16 : 10,
      paint: (e) => (e % 2 ? Yx : Xx),
      bone: `Pump`,
      part: U.grip,
    }),
    t)
  )
    for (let t of [-0.45, 0.45])
      bx(e, [5.3, t, 0.45], [9.7, t, 0.45], 0.07, { paint: qx, bone: `Pump` });
  (xx(
    e,
    [
      [3.3, -0.3],
      [3.2, -1.25],
      [2, -1.38],
      [1.3, -1.15],
      [1.25, -0.6],
    ],
    0.13,
    { paint: Wx, open: !0 },
  ),
    bx(e, [2.35, 0, -0.3], [2.48, 0, -0.68], 0.075, { paint: qx }),
    bx(e, [2.48, 0, -0.68], [2.38, 0, -0.95], 0.075, { paint: qx }));
  let r = cS;
  if (
    ($(
      e,
      [
        dS(r, 0, -0.05),
        dS(r, -0.05, 1),
        [1.15, -0.45],
        dS(r, 1.1, uS),
        dS(r, lS, 1.5999999999999999),
        dS(r, lS, 0.05),
        dS(r, 1.5, -0.05),
      ],
      -0.62,
      0.62,
      { paint: Yx, part: U.grip, round: 0.25, bevel: 0.15 },
    ),
    $(
      e,
      [
        dS(r, lS, -0.05),
        dS(r, lS, 1.65),
        dS(r, 3.6799999999999997, 1.55),
        dS(r, 3.6799999999999997, 0.05),
      ],
      -0.64,
      0.64,
      { paint: $x, round: 0.12 },
    ),
    $(
      e,
      [
        [-0.75, 1.55],
        [-4.2, 1.35],
        [-4.2, -1.4],
        [-2.4, -1.05],
        [-1.2, -0.75],
        [-0.75, -0.2],
      ],
      -0.6,
      0.6,
      { paint: Yx, round: 0.3, bevel: 0.15 },
    ),
    t)
  )
    for (let [t, n] of [
      [-2.9, Zx],
      [-3.15, Qx],
    ])
      $(
        e,
        [
          [t + 0.1, 1.48],
          [t - 0.1, 1.47],
          [t - 0.1, -1.18],
          [t + 0.1, -1.2],
        ],
        -0.63,
        0.63,
        { paint: n, round: 0.06, bevel: 0.03 },
      );
  yx(
    e,
    [
      [1.5, 0.33],
      [1.62, 0.33],
      [1.62, 0.3],
      [2.75, 0.29],
      [2.8, 0.2],
    ],
    { c: [0, rS], paint: (e) => (e < 1 ? tS : eS), sides: 10, bone: `Aux` },
  );
}
var pS = {
    id: `m3`,
    name: `Broadfork`,
    archetype: `Pump shotgun`,
    blurb: `A long pump shotgun with a ridged walnut pump and a carrot bead.`,
    cls: `shotgun`,
    build: fS,
    right: {
      o: [-1.53, 0, -1.85],
      up: [-0.2, 0, 0.98],
      fwd: [0.751, 0.643, 0.153],
      index: { c: [16, 34, 20], spread: -4 },
      middle: { c: [84, 98, 75] },
      ring: { c: [88, 98, 75] },
      pinky: { c: [92, 96, 75] },
      thumb: { c: [12, 10, 6], spread: -10 },
      wrap: [`Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    left: {
      o: [11.6, 0, -0.05],
      up: [1, 0, 0],
      fwd: [0, -0.924, 0.345],
      index: { c: [60, 80, 60] },
      middle: { c: [64, 84, 64] },
      ring: { c: [68, 86, 64] },
      pinky: { c: [72, 86, 64] },
      thumb: { c: [14, 40, 40], spread: -6 },
      wrap: [`Index`, `Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
      part: `Pump`,
    },
    places: { port: { o: [2, 0, -1.25], up: [1, 0, 0], fwd: [0, -1, 0.3] } },
    frame: { o: [16, -6.2, -5.9], a: [-1, 4, -4] },
    elbows: { R: [8, -18, -18], L: [24, -6, -26] },
    muzzle: [24.1, 0, nS],
    eject: { p: [2.4, -0.8, 1.2], dir: [-0.15, -0.9, 0.4] },
    shell: `shotgun`,
    timing: {
      cycle: 0.88,
      ammo: 8,
      shells: { start: 0.45, each: 0.5, end: 0.7 },
      draw: 1,
      pump: { at: 0.3, dur: 0.48 },
    },
    recoil: {
      kick: 7,
      back: 1.3,
      roll: 1.5,
      settle: 140,
      slide: 0,
      slideTime: 0,
    },
    sounds: {
      fire: `gun_broadfork_fire`,
      pump: `gun_pump`,
      shell: `gun_shell_in`,
    },
    tp: { o: [1.2, -0.8, 0.4], x: [0.15, 0.1, -0.98], z: [0, 1, 0], s: 1.35 },
  },
  mS = W(14209215),
  hS = W(10985357),
  gS = W(3423312),
  _S = W(2501692),
  vS = W(16184300),
  yS = W(14867922),
  bS = W(1316378),
  xS = W(16777215),
  SS = W(16742938),
  CS = W(9146521),
  wS = (15 * Math.PI) / 180,
  TS = [Math.sin(wS), Math.cos(wS)],
  ES = [Math.cos(wS), -Math.sin(wS)],
  DS = [-0.45, -0.05],
  OS = 3.5,
  kS = 1.8,
  AS = (e, t, n) => [
    e[0] - TS[0] * t + ES[0] * n,
    e[1] - TS[1] * t + ES[1] * n,
  ],
  jS = (e, t) => {
    let n = AS(DS, e, t);
    return [n[0], 0, n[1]];
  },
  MS = 0.8,
  NS = 5.82,
  PS = 0.42,
  FS = 0.56;
function IS(e) {
  let t = e.view === `fp`,
    n = NS,
    r = { c: [0, MS], bone: `Sil` };
  yx(
    e,
    [
      [n, 0.4600000000000001],
      [5.88, 0.54],
      [6.12, 0.5800000000000001],
      [6.42, 0.5800000000000001],
      [6.720000000000001, 0.5800000000000001],
      [6.800000000000001, 0.53],
    ],
    { ...r, paint: mS, cap: hS, part: U.grip, sides: 8, phase: Math.PI / 8 },
  );
  let i = [];
  for (let e = 6.78; e <= 10.4; e += t ? 0.3 : 4) i.push([e, FS]);
  (i.push([10.42, FS]),
    yx(e, i, {
      ...r,
      paint: gS,
      part: U.grip,
      sides: t ? 16 : 8,
      capStart: !1,
      capEnd: !1,
    }),
    yx(
      e,
      [
        [10.4, 0.5700000000000001],
        [10.82 - 0.12, 0.5700000000000001],
        [10.8, 0.48000000000000004],
        [10.82, 0.3400000000000001],
        [10.82, 0.17],
      ],
      {
        ...r,
        paint: mS,
        part: U.grip,
        sides: t ? 16 : 8,
        capStart: !1,
        capEnd: !1,
      },
    ),
    yx(
      e,
      [
        [10.74, 0.17],
        [10.82 + 0.005, 0.17],
      ],
      { ...r, paint: bS, cap: bS, sides: 10, capStart: !1 },
    ),
    vx(e, [8.600000000000001, 0, 1.34], [3.5 / 2, 0.09, 0.05], {
      paint: SS,
      bone: `Sil`,
      bevel: 0.02,
      round: 0.03,
    }));
}
var LS = {
  build: IS,
  axis: [0, MS],
  seat: NS,
  thread: PS,
  tip: [10.82, 0, MS],
  grip: {
    o: [8.72, 0, MS],
    up: [-1, 0, 0],
    fwd: [0, 0.35, 0.94],
    index: { c: [70, 80, 60] },
    middle: { c: [75, 85, 65] },
    ring: { c: [80, 88, 65] },
    pinky: { c: [85, 90, 65] },
    thumb: { c: [10, 60, 50], spread: -22 },
    wrap: [`Index`, `Middle`, `Ring`, `Pinky`, `Thumb`],
    seat: -0.02,
  },
};
function RS(e) {
  let t = e.view === `fp`;
  if (
    ($(
      e,
      [
        [-0.5, 0.1],
        [5.55, 0.1],
        [5.75, 0.6],
        [5.45, 1.52],
        [-0.4, 1.52],
        [-0.55, 0.9],
      ],
      -0.5,
      0.5,
      { paint: mS, bone: `Slide`, part: U.blade, round: 0.28, bevel: 0.12 },
    ),
    t)
  )
    for (let t = 0; t < 4; t++)
      for (let n of [-1, 1])
        vx(e, [-0.1 + t * 0.2, n * 0.5, 0.85], [0.04, 0.02, 0.45], {
          paint: hS,
          bone: `Slide`,
          bevel: 0.01,
          round: 0,
        });
  if (
    (vx(e, [2.3, -0.2, 1.53], [0.6, 0.22, 0.03], {
      paint: hS,
      bone: `Slide`,
      bevel: 0.01,
    }),
    vx(e, [-0.15, 0, 1.62], [0.13, 0.38, 0.1], { paint: _S, bone: `Slide` }),
    t)
  )
    for (let t of [-0.22, 0.22])
      Sx(e, [-0.29, t, 1.64], [-1, 0, 0], 0.05, {
        paint: xS,
        bone: `Slide`,
        h: 0.02,
        sides: 6,
      });
  (vx(e, [5.15, 0, 1.62], [0.1, 0.07, 0.1], { paint: _S, bone: `Slide` }),
    Sx(e, [5.04, 0, 1.66], [-1, 0, 0], 0.05, {
      paint: xS,
      bone: `Slide`,
      h: 0.02,
      sides: 6,
    }),
    yx(
      e,
      [
        [5.6, 0.26],
        [5.8, 0.26],
        [5.8, 0.16],
        [5.68, 0.16],
      ],
      {
        c: [0, 0.8],
        paint: (e) => (e >= 2 ? bS : CS),
        sides: 12,
        bone: `Slide`,
      },
    ));
  let n = [
    [4.3, 0.15],
    [5.84, 0.15],
  ];
  if (t)
    for (let e = 5.88; e < 6.2; e += 0.08) n.push([e, 0.18], [e + 0.04, 0.15]);
  if (
    (n.push([6.24, 0.15], [6.26, 0.11]),
    yx(e, n, { c: [0, MS], paint: CS, cap: bS, sides: 10 }),
    Cx(e, [-0.95, 0, 1], [0.42, 0.42, 0.42], {
      paint: vS,
      bone: `Aux`,
      sides: 10,
    }),
    t)
  )
    for (let [t, n, r] of [
      [-1.12, 0.22, 1.22],
      [-1.15, -0.22, 1.18],
      [-1.05, 0, 0.72],
    ])
      Cx(e, [t, n, r], [0.22, 0.22, 0.22], {
        paint: yS,
        bone: `Aux`,
        sides: 7,
      });
  ($(
    e,
    [
      [-0.45, 0.15],
      [5.25, 0.15],
      [5.35, -0.15],
      [4.8, -0.48],
      [2, -0.55],
      [0.6, -0.48],
      [-0.45, -0.2],
    ],
    -0.46,
    0.46,
    { paint: gS, part: U.blade, round: 0.12 },
  ),
    xx(
      e,
      [
        [3.25, -0.48],
        [3.2, -1.42],
        [2.2, -1.58],
        [1.45, -1.3],
        [1.38, -0.78],
      ],
      0.13,
      { paint: gS, open: !0 },
    ),
    bx(e, [2.4, 0, -0.48], [2.52, 0, -0.88], 0.075, { paint: SS }),
    bx(e, [2.52, 0, -0.88], [2.42, 0, -1.16], 0.075, { paint: SS }));
  let r = DS;
  if (
    ($(
      e,
      [
        AS(r, 0, -0.15),
        AS(r, -0.05, 0.9),
        [1.28, -0.6],
        AS(r, 1, kS),
        AS(r, OS, 1.75),
        AS(r, OS, 0.02),
        AS(r, 1.5, -0.05),
      ],
      -0.56,
      0.56,
      { paint: gS, part: U.grip, round: 0.25, bevel: 0.14 },
    ),
    t)
  )
    for (let t = 0; t < 5; t++)
      for (let n of [-1, 1]) {
        let i = 0.95 + t * 0.5;
        $(
          e,
          [
            AS(r, i, 0.25),
            AS(r, i, 1.55),
            AS(r, i + 0.18, 1.53),
            AS(r, i + 0.18, 0.25),
          ],
          n > 0 ? 0.54 : -0.58,
          n > 0 ? 0.58 : -0.54,
          { paint: _S, round: 0, bevel: 0.015 },
        );
      }
  ($(
    e,
    [
      [-0.4, 0.12],
      [-0.8, 0.06],
      [-0.82, -0.08],
      [-0.42, -0.1],
    ],
    -0.36,
    0.36,
    { paint: gS, round: 0.08 },
  ),
    $(
      e,
      [AS(r, 0.35, 0.3), AS(r, 0.35, 1.4), AS(r, 3.48, 1.35), AS(r, 3.48, 0.3)],
      -0.4,
      0.4,
      { paint: _S, bone: `Mag`, round: 0.08 },
    ),
    $(
      e,
      [
        AS(r, 3.45, -0.05),
        AS(r, 3.45, kS),
        AS(r, 3.75, 1.7),
        AS(r, 3.75, 0.02),
      ],
      -0.58,
      0.58,
      { paint: _S, bone: `Mag`, round: 0.14, bevel: 0.1 },
    ));
  let i = AS(r, 3.62, 0.05);
  vx(e, [i[0], 0, i[1]], [0.14, 0.5, 0.12], { paint: SS, bone: `Mag` });
}
var zS = {
    id: `usp`,
    name: `Cottontail`,
    archetype: `Compact pistol`,
    blurb: `A short, soft-cornered pistol with a fluffy tail.`,
    cls: `pistol`,
    build: RS,
    right: {
      o: [-0.36, 0, -2.38],
      up: [-0.28, 0, 0.96],
      fwd: [0.96, 0, 0.28],
      index: { c: [18, 38, 22], spread: -4 },
      middle: { c: [84, 98, 75] },
      ring: { c: [88, 98, 75] },
      pinky: { c: [92, 96, 75] },
      thumb: { c: [8, 6, 4], spread: -18 },
      wrap: [`Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    left: {
      o: [-0.14, 0, -2.67],
      up: [0.45, 0, 0.89],
      fwd: [0.89, 0, -0.45],
      index: { c: [62, 70, 50] },
      middle: { c: [70, 80, 60] },
      ring: { c: [76, 84, 62] },
      pinky: { c: [80, 84, 60] },
      thumb: { c: [10, 4, 4], spread: -26 },
      wrap: [`Index`, `Middle`, `Ring`, `Pinky`],
      proxy: [[jS(0.9, 2.35), jS(3.3, 2.3), 0.75]],
    },
    places: {
      mag: { o: jS(4, 0.95), up: [TS[0], 0, TS[1]], fwd: [ES[0], 0, ES[1]] },
      rack: { o: [0.25, 0.95, 0.75], up: [-1, 0, 0], fwd: [0, 0, 1] },
      tail: { o: [-1, 1.3, 1], up: [0, 0, 1], fwd: [1, 0, 0] },
    },
    frame: { o: [18, -5.2, -3.65], a: [0, 6, -5] },
    silencer: LS,
    muzzle: [5.85, 0, 0.8],
    eject: { p: [2.3, -0.3, 1.55], dir: [-0.1, -0.85, 0.5] },
    shell: `pistol`,
    mag: { p: [...jS(OS, 0.9)], out: [-TS[0], 0, -TS[1]] },
    timing: { cycle: 0.15, ammo: 12, reload: 2.7, draw: 1 },
    recoil: {
      kick: 5,
      back: 0.6,
      roll: 1,
      settle: 240,
      slide: 1.1,
      slideTime: 0.09,
    },
    sounds: {
      fire: `gun_cottontail_fire`,
      silenced: `gun_cottontail_silenced`,
      magOut: `gun_mag_out`,
      magIn: `gun_mag_in`,
      slide: `gun_slide`,
    },
    tp: { o: [1.6, -0.9, 0.2], x: [0.15, 0.1, -0.98], z: [0, 1, 0], s: 1.7 },
  },
  BS = W(4146230),
  VS = W(2764325),
  HS = W(10119742),
  US = W(7621674),
  WS = W(14205066),
  GS = W(3817287),
  KS = W(7370626),
  qS = W(1052948),
  JS = W(16742938),
  YS = W(14048788),
  XS = W(5817930),
  ZS = 1.2,
  QS = (22 * Math.PI) / 180,
  $S = [Math.sin(QS), Math.cos(QS)],
  eC = [Math.cos(QS), -Math.sin(QS)],
  tC = [-0.5, -0.3],
  nC = 3.4,
  rC = 1.75,
  iC = (e, t, n) => [
    e[0] - $S[0] * t + eC[0] * n,
    e[1] - $S[1] * t + eC[1] * n,
  ],
  aC = [4.35, 0, -0.3],
  oC = [0.415, 0, -0.91],
  sC = [0.91, 0.415],
  cC = (e, t = 0) => [
    aC[0] + oC[0] * e + sC[0] * t,
    aC[2] + oC[2] * e + sC[1] * t,
  ];
function lC(e) {
  let t = e.view === `fp`;
  ($(
    e,
    [
      [-0.8, -0.35],
      [6.4, -0.35],
      [6.5, 1.75],
      [-0.6, 1.75],
      [-0.9, 1.2],
    ],
    -0.62,
    0.62,
    { paint: BS, part: U.blade, round: 0.14, bevel: 0.1 },
  ),
    vx(e, [2.8, 0, 1.82], [3, 0.36, 0.08], { paint: VS, round: 0.04 }),
    vx(e, [3, -0.63, 1.1], [0.8, 0.03, 0.28], { paint: VS, bevel: 0.01 }),
    vx(e, [4.6, 0.63, 1.15], [0.95, 0.03, 0.1], { paint: VS, bevel: 0.01 }),
    bx(e, [4.6, 0.6, 1.15], [4.6, 1.05, 1.15], 0.1, {
      paint: KS,
      bone: `Slide`,
    }),
    Cx(e, [4.6, 1.15, 1.15], [0.18, 0.18, 0.18], {
      paint: KS,
      bone: `Slide`,
      sides: 8,
    }),
    vx(e, [0.15, 0, 1.97], [0.18, 0.3, 0.14], { paint: VS }),
    yx(
      e,
      [
        [6.4, 0.36],
        [19.2, 0.32],
        [19.2, 0.42],
        [20.5, 0.42],
        [20.5, 0.2],
        [20.2, 0.2],
      ],
      {
        c: [0, ZS],
        paint: (e) => (e >= 4 ? qS : e >= 2 ? VS : GS),
        sides: 12,
        part: U.blade,
      },
    ),
    e.tube(
      [
        [18.4, 0, 1.5],
        [18.45, 0, 2],
      ],
      0.06,
      6,
      [1, 0, 0],
      () => XS,
    ));
  for (let t of [-1, 1])
    e.leaf(
      [
        [18.45, 0, 1.96],
        [18.45 + t * 0.25, 0, 2.16],
        [18.45 + t * 0.5, 0, 2.2199999999999998],
      ],
      (e) => [0.04, 0.14, 0.04][e] ?? 0.04,
      0.03,
      [0, 1, 0],
      () => XS,
      { part: U.none },
    );
  $(
    e,
    [
      [6.5, -0.5],
      [13.2, -0.4],
      [13.45, 0.6],
      [13.2, 1.7],
      [6.5, 1.7],
    ],
    -0.72,
    0.72,
    { paint: HS, part: U.grip, round: 0.3, bevel: 0.16 },
  );
  for (let t of [7.2, 12.6])
    $(
      e,
      [
        [t - 0.22, -0.56],
        [t + 0.22, -0.54],
        [t + 0.22, 1.76],
        [t - 0.22, 1.76],
      ],
      -0.77,
      0.77,
      { paint: WS, round: 0.12, bevel: 0.05 },
    );
  (xx(
    e,
    [
      [3.5, -0.35],
      [3.4, -1.3],
      [2.2, -1.45],
      [1.4, -1.2],
      [1.35, -0.65],
    ],
    0.14,
    { paint: BS, open: !0 },
  ),
    bx(e, [2.55, 0, -0.35], [2.68, 0, -0.75], 0.075, { paint: KS }),
    bx(e, [2.68, 0, -0.75], [2.58, 0, -1.02], 0.075, { paint: KS }));
  let n = tC;
  if (
    ($(
      e,
      [
        iC(n, 0, -0.05),
        iC(n, -0.05, 1),
        [1.25, -0.5],
        iC(n, 1.1, rC),
        iC(n, nC, 1.65),
        iC(n, nC, 0.05),
        iC(n, 1.5, -0.05),
      ],
      -0.6,
      0.6,
      { paint: HS, part: U.grip, round: 0.25, bevel: 0.15 },
    ),
    t)
  )
    for (let t of [-1, 1])
      $(
        e,
        [iC(n, 0.6, 0.3), iC(n, 0.6, 1.45), iC(n, 3.1, 1.35), iC(n, 3.1, 0.3)],
        t > 0 ? 0.58 : -0.62,
        t > 0 ? 0.62 : -0.58,
        { paint: US, part: U.grip, round: 0.15, bevel: 0.02 },
      );
  if (
    ($(
      e,
      [
        [-0.85, 1.6],
        [-8.6, 1.2],
        [-8.8, -1.7],
        [-7.6, -1.8],
        [-2.6, -0.9],
        [-0.9, -0.4],
      ],
      -0.58,
      0.58,
      { paint: HS, round: 0.3, bevel: 0.15 },
    ),
    vx(e, [-8.85, 0, -0.25], [0.22, 0.6, 1.5], { paint: US, round: 0.18 }),
    $(
      e,
      [cC(0, -0.62), cC(0, 0.62), cC(2.3, 0.62), cC(2.3, -0.62)],
      -0.42,
      0.42,
      { paint: JS, bone: `Mag`, round: 0.2, bevel: 0.12 },
    ),
    $(
      e,
      [
        cC(2.2, -0.62),
        cC(2.2, 0.62),
        cC(3.5, 0.75),
        cC(4.45, 0.3),
        cC(4.5, 0.05),
        cC(3.6, -0.35),
      ],
      -0.4,
      0.4,
      { paint: JS, bone: `Mag`, round: 0.25, bevel: 0.12 },
    ),
    t)
  )
    for (let t of [0.9, 1.9, 2.9, 3.7]) {
      let n = t > 3 ? 0.5 : 0.66;
      $(
        e,
        [cC(t - 0.05, -n), cC(t - 0.05, n), cC(t + 0.05, n), cC(t + 0.05, -n)],
        -0.45,
        0.45,
        { paint: YS, bone: `Mag`, round: 0, bevel: 0.02 },
      );
    }
}
var uC = {
    id: `ak47`,
    name: `Furrow`,
    archetype: `Rifle`,
    blurb: `A walnut garden rifle fed from a carrot.`,
    cls: `rifle`,
    build: lC,
    right: {
      o: [-1.03, 0, -0.49],
      up: [-0.2, 0, 0.98],
      fwd: [0.965, 0.174, 0.197],
      index: { c: [16, 34, 20], spread: -4 },
      middle: { c: [84, 98, 75] },
      ring: { c: [88, 98, 75] },
      pinky: { c: [92, 96, 75] },
      thumb: { c: [12, 10, 6], spread: -10 },
      wrap: [`Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    left: {
      o: [10.2, 0, 0.2],
      up: [1, 0, 0],
      fwd: [0, -0.986, 0.008],
      index: { c: [60, 80, 60] },
      middle: { c: [64, 84, 64] },
      ring: { c: [68, 86, 64] },
      pinky: { c: [72, 86, 64] },
      thumb: { c: [14, 40, 40], spread: -6 },
      wrap: [`Index`, `Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    places: {
      mag: {
        o: ((e) => [aC[0] + oC[0] * e, 0, aC[2] + oC[2] * e])(3),
        up: [-oC[0], 0, -oC[2]],
        fwd: [sC[0], 0, sC[1]],
      },
      rack: { o: [4.6, 2, 1.15], up: [0, 0, 1], fwd: [1, 0, 0] },
    },
    frame: { o: [16, -6.2, -6], a: [-1, 4, -4] },
    elbows: { R: [8, -18, -18], L: [24, -6, -26] },
    muzzle: [20.6, 0, ZS],
    eject: { p: [3, -0.7, 1.1], dir: [-0.15, -0.9, 0.4] },
    shell: `smg`,
    mag: { p: aC, out: oC },
    timing: { cycle: 0.1, ammo: 30, reload: 2.5, draw: 1 },
    recoil: {
      kick: 2.6,
      back: 0.5,
      roll: 0.8,
      settle: 320,
      slide: 1,
      slideTime: 0.07,
    },
    sounds: {
      fire: `gun_seeddrill_fire`,
      fireRate: 0.82,
      magOut: `gun_mag_out`,
      magIn: `gun_mag_in`,
      slide: `gun_bolt`,
    },
    tp: { o: [1.2, -0.8, 0.4], x: [0.15, 0.1, -0.98], z: [0, 1, 0], s: 1.35 },
  },
  dC = W(3422271),
  fC = W(2369324),
  pC = W(5602631),
  mC = W(3955763),
  hC = W(1911322),
  gC = W(3817287),
  _C = W(7370626),
  vC = W(1052948),
  yC = W(8377194),
  bC = W(12860460),
  xC = W(14198336),
  SC = 1.35,
  CC = 0.3,
  wC = (22 * Math.PI) / 180,
  TC = [Math.sin(wC), Math.cos(wC)],
  EC = [Math.cos(wC), -Math.sin(wC)],
  DC = [-0.5, -0.3],
  OC = 3.4,
  kC = 1.75,
  AC = (e, t, n) => [
    e[0] - TC[0] * t + EC[0] * n,
    e[1] - TC[1] * t + EC[1] * n,
  ];
function jC(e) {
  let t = e.view === `fp`;
  if (
    ($(
      e,
      [
        [-0.8, -0.35],
        [6.2, -0.35],
        [6.3, 2.05],
        [-0.6, 2.05],
        [-0.9, 1.5],
      ],
      -0.76,
      0.76,
      { paint: dC, part: U.blade, round: 0.14, bevel: 0.1 },
    ),
    vx(e, [2.6, 0, 2.12], [2.8, 0.3, 0.08], { paint: fC, round: 0.04 }),
    vx(e, [2.6, 0, -0.37], [1.25, 0.42, 0.03], { paint: fC, bevel: 0.01 }),
    vx(e, [2.6, -0.77, 1.3], [0.9, 0.03, 0.35], { paint: fC, bevel: 0.01 }),
    bx(e, [3.2, 0.7, 1.3], [3.2, 1.25, 1.3], 0.11, {
      paint: _C,
      bone: `Slide`,
    }),
    Cx(e, [3.2, 1.35, 1.3], [0.2, 0.2, 0.2], {
      paint: _C,
      bone: `Slide`,
      sides: 8,
    }),
    vx(e, [3.2, 0.77, 1.3], [0.6, 0.03, 0.12], { paint: fC, bevel: 0.01 }),
    yx(
      e,
      [
        [6.2, 0.42],
        [21.6, 0.4],
        [22, 0.4],
        [22, 0.23],
        [21.7, 0.23],
      ],
      {
        c: [0, SC],
        paint: (e) => (e >= 2 ? vC : gC),
        sides: 14,
        part: U.blade,
      },
    ),
    yx(
      e,
      [
        [6.2, 0.4],
        [19.3, 0.4],
        [19.6, 0.32],
        [19.7, 0],
      ],
      { c: [0, CC], paint: gC, sides: 12 },
    ),
    vx(e, [21.2, 0, 1.9000000000000001], [0.18, 0.06, 0.2], {
      paint: yC,
      round: 0.05,
    }),
    $(
      e,
      [
        [6.3, -0.55],
        [15.5, -0.45],
        [15.7, 1],
        [15.4, 1.95],
        [6.3, 1.95],
      ],
      -0.82,
      0.82,
      {
        paint: (e) => (e === 0 || e === 3 ? mC : pC),
        part: U.grip,
        round: 0.3,
        bevel: 0.16,
      },
    ),
    t)
  )
    for (let t of [-1, 1])
      for (let n = 0; n < 5; n++) {
        let r = 7.6 + n * 1.6;
        e.leaf(
          [
            [r - 0.45, t * 0.83, 0.75],
            [r, t * 0.84, 0.95],
            [r + 0.45, t * 0.83, 1.15],
          ],
          (e) => [0.06, 0.2, 0.06][e] ?? 0.06,
          0.03,
          [0, t, 0],
          () => hC,
        );
      }
  (xx(
    e,
    [
      [3.5, -0.35],
      [3.4, -1.3],
      [2.2, -1.45],
      [1.4, -1.2],
      [1.35, -0.65],
    ],
    0.14,
    { paint: dC, open: !0 },
  ),
    bx(e, [2.55, 0, -0.35], [2.68, 0, -0.75], 0.075, { paint: _C }),
    bx(e, [2.68, 0, -0.75], [2.58, 0, -1.02], 0.075, { paint: _C }));
  let n = DC;
  if (
    ($(
      e,
      [
        AC(n, 0, -0.05),
        AC(n, -0.05, 1),
        [1.25, -0.5],
        AC(n, 1.1, kC),
        AC(n, OC, 1.65),
        AC(n, OC, 0.05),
        AC(n, 1.5, -0.05),
      ],
      -0.6,
      0.6,
      { paint: dC, part: U.grip, round: 0.25, bevel: 0.15 },
    ),
    t)
  )
    for (let t of [-1, 1])
      $(
        e,
        [AC(n, 0.6, 0.3), AC(n, 0.6, 1.45), AC(n, 3.1, 1.35), AC(n, 3.1, 0.3)],
        t > 0 ? 0.58 : -0.62,
        t > 0 ? 0.62 : -0.58,
        { paint: mC, part: U.grip, round: 0.15, bevel: 0.02 },
      );
  (xx(
    e,
    [
      [-0.85, 1.55],
      [-6.5, 1.25],
      [-6.6, -1.6],
      [-2.2, -1],
      [-0.9, -0.5],
    ],
    0.22,
    { paint: dC },
  ),
    vx(e, [-6.6, 0, -0.15], [0.35, 0.55, 1.75], { paint: fC, round: 0.25 }),
    yx(
      e,
      [
        [1.6, 0.33],
        [1.72, 0.33],
        [1.72, 0.3],
        [2.85, 0.29],
        [2.9, 0.2],
      ],
      { c: [0, CC], paint: (e) => (e < 1 ? xC : bC), sides: 10, bone: `Aux` },
    ));
}
var MC = {
    id: `xm1014`,
    name: `Hedgerow`,
    archetype: `Auto shotgun`,
    blurb: `A self-loading shotgun with a leafy green handguard.`,
    cls: `shotgun`,
    build: jC,
    right: {
      o: [-1.03, 0, -0.49],
      up: [-0.2, 0, 0.98],
      fwd: [0.965, 0.174, 0.197],
      index: { c: [16, 34, 20], spread: -4 },
      middle: { c: [84, 98, 75] },
      ring: { c: [88, 98, 75] },
      pinky: { c: [92, 96, 75] },
      thumb: { c: [12, 10, 6], spread: -10 },
      wrap: [`Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    left: {
      o: [9.9, 0, 0],
      up: [1, 0, 0],
      fwd: [0, -0.986, 0.008],
      index: { c: [60, 80, 60] },
      middle: { c: [64, 84, 64] },
      ring: { c: [68, 86, 64] },
      pinky: { c: [72, 86, 64] },
      thumb: { c: [14, 40, 40], spread: -6 },
      wrap: [`Index`, `Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    places: {
      port: { o: [2.1, 0, -1.3], up: [1, 0, 0], fwd: [0, -1, 0.3] },
      rack: { o: [3.2, 2.2, 1.3], up: [0, 0, 1], fwd: [1, 0, 0] },
    },
    frame: { o: [16, -6.2, -6], a: [-1, 4, -4] },
    elbows: { R: [8, -18, -18], L: [24, -6, -26] },
    muzzle: [22.1, 0, SC],
    eject: { p: [2.6, -0.85, 1.3], dir: [-0.15, -0.9, 0.4] },
    shell: `shotgun`,
    timing: {
      cycle: 0.25,
      ammo: 7,
      shells: { start: 0.45, each: 0.45, end: 0.6 },
      draw: 1,
    },
    recoil: {
      kick: 6,
      back: 1.1,
      roll: 1.3,
      settle: 170,
      slide: 1.4,
      slideTime: 0.1,
    },
    sounds: {
      fire: `gun_hedgerow_fire`,
      slide: `gun_bolt`,
      shell: `gun_shell_in`,
    },
    tp: { o: [1.2, -0.8, 0.4], x: [0.15, 0.1, -0.98], z: [0, 1, 0], s: 1.35 },
  },
  NC = W(9071685),
  PC = W(7230772),
  FC = W(5192998),
  IC = W(2894897),
  LC = W(2039587),
  RC = W(9071685),
  zC = W(15771816),
  BC = W(1184534),
  VC = W(16742938),
  HC = W(10133672),
  UC = (20 * Math.PI) / 180,
  WC = [Math.sin(UC), Math.cos(UC)],
  GC = [Math.cos(UC), -Math.sin(UC)],
  KC = [-0.55, -0.05],
  qC = 3.9,
  JC = 1.95,
  YC = (e, t, n) => [
    e[0] - WC[0] * t + GC[0] * n,
    e[1] - WC[1] * t + GC[1] * n,
  ],
  XC = (e, t) => {
    let n = YC(KC, e, t);
    return [n[0], 0, n[1]];
  };
function ZC(e) {
  let t = e.view === `fp`;
  if (
    ($(
      e,
      [
        [-0.65, 0.1],
        [7.7, 0.1],
        [7.75, 1.5],
        [-0.6, 1.5],
      ],
      -0.56,
      0.56,
      { paint: NC, bone: `Slide`, part: U.blade, round: 0.12, bevel: 0.1 },
    ),
    vx(e, [3.6, 0, 1.53], [3.9, 0.3, 0.05], {
      paint: PC,
      bone: `Slide`,
      bevel: 0.02,
    }),
    t)
  ) {
    for (let t = 0; t < 3; t++)
      vx(e, [6.65 + t * 0.36, 0, 1.53], [0.1, 0.42, 0.04], {
        paint: FC,
        bone: `Slide`,
        bevel: 0.01,
      });
    for (let t = 0; t < 3; t++)
      for (let n of [-1, 1])
        vx(e, [-0.25 + t * 0.3, n * 0.56, 0.8], [0.07, 0.025, 0.5], {
          paint: FC,
          bone: `Slide`,
          bevel: 0.01,
          round: 0.03,
        });
  }
  vx(e, [2.8, -0.22, 1.55], [0.7, 0.22, 0.03], {
    paint: FC,
    bone: `Slide`,
    bevel: 0.01,
  });
  for (let n of [-0.24, 0.24]) {
    let r = [];
    for (let e = 0; e <= 5; e++) {
      let t = e / 5;
      r.push([-0.25 - 0.35 * t * t, n * (1 + 0.5 * t), 1.5 + 1.05 * t]);
    }
    (e.leaf(
      r,
      (e) => 0.2 * Math.sin(((e + 0.4) / 5.5) * Math.PI) + 0.03,
      0.08,
      [0, n > 0 ? 1 : -1, 0],
      () => RC,
      { bone: px(`Slide`), part: U.guard },
    ),
      t &&
        e.leaf(
          r.slice(1, 5).map((e) => [e[0] + 0.02, e[1] * 1.02, e[2]]),
          (e) => 0.1 * Math.sin(((e + 0.4) / 4) * Math.PI) + 0.02,
          0.05,
          [0, n > 0 ? 1 : -1, 0],
          () => zC,
          { bone: px(`Slide`), part: U.guard },
        ));
  }
  (vx(e, [7.3, 0, 1.6], [0.12, 0.07, 0.1], { paint: VC, bone: `Slide` }),
    yx(
      e,
      [
        [7.6, 0.3],
        [7.82, 0.3],
        [7.82, 0.2],
        [7.7, 0.2],
      ],
      {
        c: [0, 0.8],
        paint: (e) => (e >= 2 ? BC : HC),
        sides: 12,
        bone: `Slide`,
      },
    ),
    $(
      e,
      [
        [-0.55, 0.15],
        [7.2, 0.15],
        [7.2, -0.3],
        [6.4, -0.6],
        [2.4, -0.62],
        [0.7, -0.52],
        [-0.55, -0.22],
      ],
      -0.5,
      0.5,
      { paint: IC, part: U.blade, round: 0.08 },
    ),
    xx(
      e,
      [
        [3.75, -0.55],
        [3.7, -1.55],
        [2.6, -1.72],
        [1.65, -1.45],
        [1.55, -0.85],
      ],
      0.14,
      { paint: IC, open: !0 },
    ),
    bx(e, [2.8, 0, -0.52], [2.95, 0, -0.95], 0.08, { paint: HC }),
    bx(e, [2.95, 0, -0.95], [2.82, 0, -1.28], 0.08, { paint: HC }));
  let n = KC;
  if (
    ($(
      e,
      [
        YC(n, 0, -0.12),
        YC(n, -0.08, 0.95),
        [1.45, -0.66],
        YC(n, 1.1, JC),
        YC(n, qC, 1.9),
        YC(n, qC, 0),
        YC(n, 1.6, -0.08),
      ],
      -0.6,
      0.6,
      { paint: IC, part: U.grip, round: 0.2, bevel: 0.15 },
    ),
    t)
  )
    for (let t of [-1, 1])
      $(
        e,
        [
          YC(n, 0.6, 0.3),
          YC(n, 0.6, 1.63),
          YC(n, 3.6, 1.5499999999999998),
          YC(n, 3.6, 0.3),
        ],
        t > 0 ? 0.58 : -0.62,
        t > 0 ? 0.62 : -0.58,
        { paint: LC, part: U.grip, round: 0.15, bevel: 0.02 },
      );
  ($(
    e,
    [
      [-0.5, 0.12],
      [-1.15, 0.05],
      [-1.2, -0.15],
      [-0.55, -0.15],
    ],
    -0.42,
    0.42,
    { paint: IC, round: 0.1 },
  ),
    $(
      e,
      [
        YC(n, 0.35, 0.3),
        YC(n, 0.35, 1.5499999999999998),
        YC(n, 3.88, 1.5),
        YC(n, 3.88, 0.3),
      ],
      -0.44,
      0.44,
      { paint: FC, bone: `Mag`, round: 0.08 },
    ),
    $(
      e,
      [YC(n, 3.85, -0.05), YC(n, 3.85, 2), YC(n, 4.2, 1.9), YC(n, 4.2, 0.02)],
      -0.62,
      0.62,
      { paint: LC, bone: `Mag`, round: 0.12, bevel: 0.1 },
    ));
}
var QC = {
    id: `fiveseven`,
    name: `Jackrabbit`,
    archetype: `Heavy pistol`,
    blurb: `A long, heavy pistol with its ears up.`,
    cls: `pistol`,
    build: ZC,
    right: {
      o: [-0.89, 0, -3.02],
      up: [-0.28, 0, 0.96],
      fwd: [0.831, 0.5, 0.242],
      index: { c: [16, 36, 22], spread: -4 },
      middle: { c: [84, 98, 75] },
      ring: { c: [88, 98, 75] },
      pinky: { c: [92, 96, 75] },
      thumb: { c: [8, 6, 4], spread: -18 },
      wrap: [`Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    left: {
      o: [-1.59, 0, -1.78],
      up: [0.45, 0, 0.89],
      fwd: [0.876, -0.173, -0.443],
      index: { c: [62, 70, 50] },
      middle: { c: [70, 80, 60] },
      ring: { c: [76, 84, 62] },
      pinky: { c: [80, 84, 60] },
      thumb: { c: [10, 4, 4], spread: -26 },
      wrap: [`Index`, `Middle`, `Ring`, `Pinky`],
      proxy: [[XC(0.9, 2.5), XC(3.6999999999999997, 2.45), 0.75]],
    },
    places: {
      mag: { o: XC(4.45, 1), up: [WC[0], 0, WC[1]], fwd: [GC[0], 0, GC[1]] },
      rack: { o: [0.25, 0.95, 0.75], up: [-1, 0, 0], fwd: [0, 0, 1] },
    },
    frame: { o: [18.5, -5.2, -3.8], a: [0, 6, -5] },
    muzzle: [7.9, 0, 0.8],
    eject: { p: [2.8, -0.3, 1.58], dir: [-0.1, -0.85, 0.5] },
    shell: `pistol`,
    mag: { p: [...XC(qC, 0.95)], out: [-WC[0], 0, -WC[1]] },
    timing: { cycle: 0.15, ammo: 20, reload: 3.1, draw: 1 },
    recoil: {
      kick: 6.5,
      back: 0.75,
      roll: 1.4,
      settle: 200,
      slide: 1.4,
      slideTime: 0.1,
    },
    sounds: {
      fire: `gun_jackrabbit_fire`,
      magOut: `gun_mag_out`,
      magIn: `gun_mag_in`,
      slide: `gun_slide`,
    },
    tp: { o: [1.6, -0.9, 0.2], x: [0.15, 0.1, -0.98], z: [0, 1, 0], s: 1.6 },
  },
  $C = W(13483929),
  ew = W(11575932),
  tw = W(6714442),
  nw = W(5003063),
  rw = W(9425258),
  iw = W(6268227),
  aw = W(10936444),
  ow = W(5817930),
  sw = W(1184534),
  cw = W(7370626),
  lw = W(16742938),
  uw = (12 * Math.PI) / 180,
  dw = [Math.sin(uw), Math.cos(uw)],
  fw = [Math.cos(uw), -Math.sin(uw)],
  pw = [-0.2, -0.45],
  mw = 3,
  hw = 1.6,
  gw = (e, t, n) => [
    e[0] - dw[0] * t + fw[0] * n,
    e[1] - dw[1] * t + fw[1] * n,
  ],
  _w = -5.8,
  vw = 1.75;
function yw(e) {
  let t = e.view === `fp`;
  ($(
    e,
    [
      [-8.2, -0.5],
      [7.4, -0.5],
      [8.6, 0.1],
      [8.4, 1.1],
      [7.2, 1.3],
      [-8, 1.3],
      [-8.6, 0.5],
    ],
    -0.95,
    0.95,
    { paint: $C, part: U.blade, round: 0.6, bevel: 0.25 },
  ),
    $(
      e,
      [
        [-8.4, -0.4],
        [-2.4, -0.4],
        [-1.6, -1.6],
        [-3.2, -3.1],
        [-8, -3.4],
        [-8.6, -2.2],
      ],
      -0.9,
      0.9,
      { paint: tw, round: 0.55, bevel: 0.22 },
    ));
  let n = pw;
  if (
    ($(
      e,
      [
        gw(n, 0, -0.1),
        gw(n, 0, hw),
        gw(n, mw, 1.55),
        gw(n, 3.2, 0.7),
        gw(n, mw, -0.05),
      ],
      -0.6,
      0.6,
      { paint: tw, part: U.grip, round: 0.3, bevel: 0.15 },
    ),
    xx(e, [[-1.6, -1.6], [-1.3, -3.6], gw(n, 3.3, 0.4)], 0.22, {
      paint: nw,
      open: !0,
    }),
    xx(
      e,
      [[2.4, -0.55], [2.5, -2], gw(n, mw * 0.55, 1.7000000000000002)],
      0.16,
      { paint: nw, open: !0, part: U.grip },
    ),
    e.tube(
      [
        [1.75, 0, -0.5],
        [1.85, 0, -0.95],
        [1.75, 0, -1.25],
      ],
      0.08,
      t ? 6 : 5,
      [0, 1, 0],
      () => lw,
    ),
    $(
      e,
      [
        [3, -0.4],
        [7.2, -0.4],
        [7.6, -1.2],
        [6.8, -1.55],
        [4, -1.45],
        [3.2, -2.3],
        [2.7, -1],
      ],
      -0.82,
      0.82,
      { paint: tw, part: U.grip, round: 0.35, bevel: 0.18 },
    ),
    yx(
      e,
      [
        [8.4, 0.38],
        [9.2, 0.36],
        [9.2, 0.22],
        [8.95, 0.22],
      ],
      { c: [0, 0.35], paint: (e) => (e >= 2 ? sw : cw), sides: 12 },
    ),
    vx(e, [4.6, 0.98, 0.55], [0.35, 0.08, 0.16], {
      paint: nw,
      bone: `Slide`,
      round: 0.06,
    }),
    Cx(e, [4.6, 1.12, 0.55], [0.17, 0.12, 0.17], {
      paint: nw,
      bone: `Slide`,
      sides: 8,
    }),
    t)
  )
    for (let t = 0; t < 4; t++)
      vx(e, [-6.5 + t * 0.5, 0, 1.31], [0.12, 0.6, 0.02], {
        paint: ew,
        bevel: 0.01,
      });
  let r = [];
  for (let e = 0; e <= 14; e++) {
    let t = e / 14;
    r.push([_w + 12.2 * t, 0.62 * Math.sin(Math.PI * t) ** 0.55 + 0.001]);
  }
  if (
    (yx(e, r, {
      c: [0, vw],
      rz: 0.82,
      sides: t ? 14 : 8,
      paint: (e, t) => (t === 0 || t === 7 ? iw : rw),
      bone: `Mag`,
      part: U.blade,
    }),
    t)
  )
    for (let t = 0; t < 8; t++)
      Cx(e, [-4.199999999999999 + t * 1.12, 0.5, 1.8], [0.34, 0.24, 0.34], {
        paint: aw,
        bone: `Mag`,
        sides: 8,
      });
  (e.tube(
    [
      [-5.8999999999999995, 0, vw],
      [-6.3, 0, 2],
      [-6.3999999999999995, 0, 2.4],
    ],
    0.1,
    t ? 6 : 5,
    [0, 1, 0],
    () => iw,
    { bone: px(`Aux`) },
  ),
    e.tube(
      [
        [5.9, 0, 1.3],
        [5.95, 0, 1.75],
      ],
      0.06,
      6,
      [1, 0, 0],
      () => ow,
    ));
  for (let t of [-1, 1])
    e.leaf(
      [
        [5.95, 0, 1.72],
        [5.95 + t * 0.25, 0, 1.92],
        [5.95 + t * 0.5, 0, 1.98],
      ],
      (e) => [0.04, 0.14, 0.04][e] ?? 0.04,
      0.03,
      [0, 1, 0],
      () => ow,
    );
}
var bw = {
    id: `p90`,
    name: `Seed Drill`,
    archetype: `Bullpup SMG`,
    blurb: `A pebble-smooth bullpup fed from a pea pod.`,
    cls: `smg`,
    build: yw,
    right: {
      o: [0.2, 0, -1.4],
      up: [-0.1, 0, 0.99],
      fwd: [0.172, 0.979, 0.017],
      index: { c: [14, 30, 18], spread: -4 },
      middle: { c: [84, 98, 75] },
      ring: { c: [88, 98, 75] },
      pinky: { c: [92, 96, 75] },
      thumb: { c: [14, 14, 8], spread: -6 },
      wrap: [`Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    left: {
      o: [5.2, 0, -1.6],
      up: [1, 0, 0.1],
      fwd: [0.018, -1.045, 0.172],
      index: { c: [70, 90, 66] },
      middle: { c: [76, 95, 72] },
      ring: { c: [84, 100, 76] },
      pinky: { c: [88, 100, 76] },
      thumb: { c: [14, 40, 40], spread: -6 },
      wrap: [`Index`, `Middle`, `Ring`, `Pinky`, `Thumb`],
      seat: -0.02,
    },
    places: {
      mag: { o: [0.6, 0, 1.95], up: [-1, 0, 0], fwd: [0, -1, 0] },
      rack: { o: [4.6, 2, 0.6], up: [0, 0, 1], fwd: [1, 0, 0] },
    },
    frame: { o: [21, -6.4, -6.2], a: [-1, 4, -4] },
    elbows: { R: [8, -18, -18], L: [22, 8, -30] },
    muzzle: [9.3, 0, 0.35],
    eject: { p: [-2.5, 0, -0.6], dir: [0, -0.2, -1] },
    shell: `smg`,
    mag: { p: [0.3, 0, vw], out: [0, 0, 1] },
    timing: { cycle: 0.07, ammo: 50, reload: 3.3, draw: 1 },
    recoil: {
      kick: 1.6,
      back: 0.35,
      roll: 0.6,
      settle: 420,
      slide: 0,
      slideTime: 0,
    },
    sounds: {
      fire: `gun_seeddrill_fire`,
      magOut: `gun_pod_out`,
      magIn: `gun_pod_in`,
      slide: `gun_bolt`,
    },
    tp: { o: [1.2, -0.8, 0.4], x: [0.15, 0.1, -0.98], z: [0, 1, 0], s: 1.35 },
  },
  xw = W(5067356),
  Sw = W(3553858),
  Cw = W(7309930),
  ww = W(5664858),
  Tw = W(16742938),
  Ew = W(1316378),
  Dw = W(15771808),
  Ow = W(16237756),
  kw = W(9146521),
  Aw = (18 * Math.PI) / 180,
  jw = [Math.sin(Aw), Math.cos(Aw)],
  Mw = [Math.cos(Aw), -Math.sin(Aw)],
  Nw = [-0.5, -0.05],
  Pw = 3.75,
  Fw = 1.85,
  Iw = (e, t, n) => [
    e[0] - jw[0] * t + Mw[0] * n,
    e[1] - jw[1] * t + Mw[1] * n,
  ];
function Lw(e) {
  let t = e.view === `fp`;
  if (
    ($(
      e,
      [
        [-0.55, 0.1],
        [6.5, 0.1],
        [6.68, 0.75],
        [6.42, 1.42],
        [-0.5, 1.42],
        [-0.62, 0.8],
      ],
      -0.48,
      0.48,
      { paint: xw, bone: `Slide`, part: U.blade, round: 0.16, bevel: 0.1 },
    ),
    t)
  )
    for (let t = 0; t < 4; t++)
      for (let n of [-1, 1])
        vx(e, [-0.15 + t * 0.22, n * 0.49, 0.82], [0.045, 0.02, 0.42], {
          paint: Sw,
          bone: `Slide`,
          bevel: 0.01,
          round: 0.02,
        });
  (vx(e, [2.7, -0.18, 1.43], [0.75, 0.24, 0.03], {
    paint: Sw,
    bone: `Slide`,
    bevel: 0.01,
  }),
    vx(e, [-0.25, 0, 1.52], [0.14, 0.36, 0.1], { paint: Sw, bone: `Slide` }),
    vx(e, [6.05, 0, 1.52], [0.12, 0.08, 0.11], { paint: Tw, bone: `Slide` }));
  for (let t = 0; t < 3; t++)
    Sx(e, [4.35 + t * 0.36, 0.48, 0.95], [0, 1, 0], 0.11, {
      paint: Tw,
      bone: `Slide`,
      h: 0.05,
      sides: 8,
    });
  (yx(
    e,
    [
      [6.55, 0.27],
      [6.72, 0.27],
      [6.72, 0.17],
      [6.6, 0.17],
    ],
    {
      c: [0, 0.78],
      paint: (e) => (e >= 2 ? Ew : kw),
      sides: 12,
      bone: `Slide`,
    },
  ),
    $(
      e,
      [
        [-0.45, 0.15],
        [6.2, 0.15],
        [6.25, -0.2],
        [5.55, -0.52],
        [2.2, -0.58],
        [0.6, -0.5],
        [-0.45, -0.2],
      ],
      -0.44,
      0.44,
      { paint: Cw, part: U.blade, round: 0.1 },
    ),
    xx(
      e,
      [
        [3.55, -0.5],
        [3.42, -1.48],
        [2.4, -1.62],
        [1.6, -1.35],
        [1.5, -0.8],
      ],
      0.13,
      { paint: Cw, open: !0 },
    ),
    bx(e, [2.62, 0, -0.5], [2.74, 0, -0.9], 0.075, { paint: Tw }),
    bx(e, [2.74, 0, -0.9], [2.66, 0, -1.2], 0.075, { paint: Tw }));
  let n = Nw;
  if (
    ($(
      e,
      [
        Iw(n, 0, -0.12),
        Iw(n, -0.1, 0.9),
        [1.42, -0.62],
        Iw(n, 1.05, Fw),
        Iw(n, 1.9, 1.9100000000000001),
        Iw(n, 2.75, 1.8900000000000001),
        Iw(n, Pw, 1.77),
        Iw(n, Pw, 0.05),
        Iw(n, 1.6, -0.04),
      ],
      -0.55,
      0.55,
      { paint: Cw, part: U.grip, round: 0.22, bevel: 0.14 },
    ),
    t)
  )
    for (let t of [-1, 1])
      $(
        e,
        [
          Iw(n, 0.7, 0.35),
          Iw(n, 0.7, 1.5),
          Iw(n, 3.4, 1.4000000000000001),
          Iw(n, 3.4, 0.35),
        ],
        t > 0 ? 0.53 : -0.57,
        t > 0 ? 0.57 : -0.53,
        { paint: ww, part: U.grip, round: 0.2, bevel: 0.02 },
      );
  $(
    e,
    [
      [-0.45, 0.12],
      [-0.95, 0.02],
      [-0.98, -0.12],
      [-0.5, -0.12],
    ],
    -0.38,
    0.38,
    { paint: Cw, round: 0.1 },
  );
  let r = Iw(n, 0.35, 0.3),
    i = Iw(n, 3.73, 0.3);
  ($(
    e,
    [r, Iw(n, 0.35, 1.4500000000000002), Iw(n, 3.73, 1.4000000000000001), i],
    -0.4,
    0.4,
    { paint: Sw, bone: `Mag`, round: 0.08 },
  ),
    $(
      e,
      [
        Iw(n, 3.7, -0.08),
        Iw(n, 3.7, 1.87),
        Iw(n, 4.07, 1.75),
        Iw(n, 4.07, 0.02),
      ],
      -0.6,
      0.6,
      { paint: Dw, bone: `Mag`, round: 0.16, bevel: 0.12 },
    ));
  for (let t = 0; t < 3; t++) {
    let r = Iw(n, 4.08, 0.45 + t * 0.5);
    Sx(e, [r[0], (t - 1) * 0.12, r[1]], [-jw[0], 0, -jw[1]], 0.2, {
      paint: Ow,
      bone: `Mag`,
      h: 0.1,
      sides: 8,
    });
  }
}
var Rw = (e, t) => {
    let n = Iw(Nw, e, t);
    return [n[0], 0, n[1]];
  },
  zw = [
    {
      id: `glock`,
      name: `Thumper`,
      archetype: `Burst pistol`,
      blurb: `A compact pistol that thumps out three at a time.`,
      cls: `pistol`,
      build: Lw,
      right: {
        o: [-0.66, 0, -1.9],
        up: [-0.28, 0, 0.96],
        fwd: [0.96, 0, 0.28],
        index: { c: [18, 38, 22], spread: -4 },
        middle: { c: [84, 98, 75] },
        ring: { c: [88, 98, 75] },
        pinky: { c: [92, 96, 75] },
        thumb: { c: [8, 6, 4], spread: -18 },
        wrap: [`Middle`, `Ring`, `Pinky`, `Thumb`],
        seat: -0.02,
      },
      left: {
        o: [-0.51, 0, -3.02],
        up: [0.45, 0, 0.89],
        fwd: [0.876, -0.173, -0.443],
        index: { c: [62, 70, 50] },
        middle: { c: [70, 80, 60] },
        ring: { c: [76, 84, 62] },
        pinky: { c: [80, 84, 60] },
        thumb: { c: [10, 4, 4], spread: -26 },
        wrap: [`Index`, `Middle`, `Ring`, `Pinky`],
        proxy: [[Rw(0.9, 2.4000000000000004), Rw(3.55, 2.35), 0.75]],
      },
      places: {
        mag: {
          o: Rw(4.3, 0.95),
          up: [jw[0], 0, jw[1]],
          fwd: [Mw[0], 0, Mw[1]],
        },
        rack: { o: [0.25, 0.95, 0.75], up: [-1, 0, 0], fwd: [0, 0, 1] },
      },
      frame: { o: [18, -5.2, -3.6], a: [0, 6, -5] },
      muzzle: [6.8, 0, 0.78],
      eject: { p: [2.7, -0.3, 1.45], dir: [-0.1, -0.85, 0.5] },
      shell: `pistol`,
      mag: { p: [...Rw(Pw, 0.9)], out: [-jw[0], 0, -jw[1]] },
      timing: {
        cycle: 0.15,
        ammo: 20,
        reload: 2.2,
        draw: 1,
        burst: { n: 3, gap: 0.05 },
      },
      recoil: {
        kick: 4.5,
        back: 0.55,
        roll: 1.2,
        settle: 260,
        slide: 1.25,
        slideTime: 0.085,
      },
      sounds: {
        fire: `gun_thumper_fire`,
        magOut: `gun_mag_out`,
        magIn: `gun_mag_in`,
        slide: `gun_slide`,
      },
      tp: { o: [1.6, -0.9, 0.2], x: [0.15, 0.1, -0.98], z: [0, 1, 0], s: 1.7 },
    },
    zS,
    QC,
    pS,
    MC,
    bw,
    uC,
    Ux,
  ],
  Bw = new Map(zw.map((e) => [e.id, e])),
  Vw = {
    p228: `usp`,
    elite: `usp`,
    deagle: `fiveseven`,
    mac10: `p90`,
    tmp: `p90`,
    mp5navy: `p90`,
    ump45: `p90`,
    galil: `ak47`,
    famas: `ak47`,
    m4a1: `ak47`,
    sg552: `ak47`,
    aug: `ak47`,
    m249: `ak47`,
    scout: `awp`,
    g3sg1: `awp`,
    sg550: `awp`,
  };
function Hw(e) {
  if (e) return Bw.get(e) ?? Bw.get(Vw[e] ?? ``);
}
var Uw = new Map();
function Ww(e) {
  let t = Uw.get(e.id);
  if (t) return t;
  let n = new Yc();
  return (
    e.build(
      new Tl(
        n,
        `tp`,
        (e) => e,
        () => [[0, 1]],
      ),
    ),
    (t = n.geometry()),
    t.computeBoundingSphere(),
    Uw.set(e.id, t),
    t
  );
}
var Gw = new Map();
function Kw(e, t) {
  return Jw(e, t, e.build, ``);
}
function qw(e, t) {
  return e.silencer ? Jw(e, t, e.silencer.build, `|sil`) : null;
}
function Jw(e, t, n, r) {
  let i = `${e.id}|${t}${r}`,
    a = Gw.get(i);
  if (a) return a;
  let o = il(),
    s = o.bone(`R_Hand`),
    c = o.bind.subarray(s * 12, s * 12 + 12),
    l = e.tp,
    u = Yw(l.x),
    d = Yw(l.z),
    f = u[0] * d[0] + u[1] * d[1] + u[2] * d[2],
    p = Yw([d[0] - u[0] * f, d[1] - u[1] * f, d[2] - u[2] * f]),
    m = [
      p[1] * u[2] - p[2] * u[1],
      p[2] * u[0] - p[0] * u[2],
      p[0] * u[1] - p[1] * u[0],
    ],
    h = l.s,
    g = new Yc();
  return (
    n(
      new Tl(
        g,
        `tp`,
        (e) =>
          nl(c, 0, [
            l.o[0] + (u[0] * e[0] + m[0] * e[1] + p[0] * e[2]) * h,
            l.o[1] + (u[1] * e[0] + m[1] * e[1] + p[1] * e[2]) * h,
            l.o[2] + (u[2] * e[0] + m[2] * e[1] + p[2] * e[2]) * h,
          ]),
        () => [[t, 1]],
      ),
    ),
    (a = g.geometry()),
    Gw.set(i, a),
    a
  );
}
function Yw(e) {
  let t = Math.hypot(e[0], e[1], e[2]) || 1;
  return [e[0] / t, e[1] / t, e[2] / t];
}
var Xw = Math.PI / 180,
  Zw = (e, t, n) => (e < t ? t : e > n ? n : e),
  Qw = new M(),
  $w = class extends fa {
    constructor(e) {
      super(
        Array.from({ length: e }, () => new ca()),
        Array.from({ length: e }, () => new N()),
      );
    }
    update() {
      this.boneTexture && (this.boneTexture.needsUpdate = !0);
    }
  },
  eT = null;
function tT(e) {
  if (eT) return eT;
  eT = new Float32Array(e.bind.length);
  for (let t = 0; t < e.names.length; t++) tl(e.bind, t * 12, eT, t * 12);
  return eT;
}
var nT = new WeakMap();
function rT(e, t) {
  let n = nT.get(t);
  if (!n) {
    n = new Int16Array(e.names.length).fill(-1);
    for (let r = 0; r < e.csBones; r++) n[r] = t.bone(e.names[r]);
    nT.set(t, n);
  }
  return n;
}
function iT(e, t, n, r, i, a) {
  let o = e[1] * t[2] - e[2] * t[1],
    s = e[2] * t[0] - e[0] * t[2],
    c = e[0] * t[1] - e[1] * t[0],
    l = Math.hypot(o, s, c),
    u = e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
    d = Math.atan2(l, u);
  (l < 1e-6 ? ((o = 1), (s = c = 0), (d = 0)) : ((o /= l), (s /= l), (c /= l)),
    (d = Math.min(d, i) * r));
  let f = Math.cos(d),
    p = Math.sin(d),
    m = 1 - f,
    h = m * o * o + f,
    g = m * o * s - p * c,
    _ = m * o * c + p * s,
    v = m * o * s + p * c,
    y = m * s * s + f,
    b = m * s * c - p * o,
    x = m * o * c - p * s,
    S = m * s * c + p * o,
    C = m * c * c + f,
    [w, T, E] = [n[0], n[1], n[2]];
  ((a[0] = h),
    (a[1] = g),
    (a[2] = _),
    (a[3] = w - (h * w + g * T + _ * E)),
    (a[4] = v),
    (a[5] = y),
    (a[6] = b),
    (a[7] = T - (v * w + y * T + b * E)),
    (a[8] = x),
    (a[9] = S),
    (a[10] = C),
    (a[11] = E - (x * w + S * T + C * E)));
}
var aT = class {
    root = new ar();
    uniforms;
    kind = `bunny`;
    src = new ar();
    yawG = new ar();
    mesh;
    depthMesh;
    skeleton;
    r = il();
    inv = tT(this.r);
    S;
    style = `solid`;
    dither = !1;
    silhouette = !1;
    baseRenderOrder = 20;
    colours;
    bodyLook;
    knife = null;
    accentOverride;
    loadout = null;
    crown = null;
    gun = null;
    gunId = null;
    silencer = null;
    silencerOn = !1;
    look = lp;
    cs = null;
    proc = new d_();
    pose = null;
    lastPos = new M();
    hasLast = !1;
    vel = [0, 0, 0];
    snapNext = !0;
    time = Math.random() * 10;
    vzHist = [];
    lastJump = -1;
    wasGrounded = !0;
    yaw = 0;
    head = this.r.bone(`Head1`);
    ears = [1, -1].map((e) => {
      let t = this.r.index(e > 0 ? `bunny.EarL` : `bunny.EarR`),
        n = this.r.bind,
        r = [n[t * 12 + 3], n[t * 12 + 7], n[t * 12 + 11]],
        i = [$c.dir[0] * e, $c.dir[1], $c.dir[2]];
      return {
        bone: t,
        base: r,
        mid: r.map((e, t) => e + i[t] * $c.seg),
        dir0: i,
        p: new Float64Array(3),
        v: new Float64Array(3),
        wb: new Float64Array(3),
        hasBase: !1,
        side: e,
      };
    });
    earTwitch = 3;
    tmp = new Float32Array(12);
    tmp2 = new Float32Array(12);
    tp = null;
    tpBones = null;
    knifeBone = this.r.index(Qc);
    handBone = this.r.bone(`R_Hand`);
    lastUpdateMs = 0;
    constructor(e = {}, t = Ep(), n = null) {
      ((this.uniforms = t),
        (this.knife = e.knife ?? null),
        (this.bodyLook = Wh(e.outfit)));
      let r = t_(this.knife, h(e.loadout?.glove).style, this.bodyLook),
        i = this.r.names.length;
      this.S = new Float32Array(i * 12);
      for (let e = 0; e < i; e++)
        this.S.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], e * 12);
      ((this.skeleton = new $w(i)),
        (this.mesh = new sa(r, Np(this.uniforms))),
        (this.depthMesh = new sa(r, Ip(this.uniforms))));
      let a = new N();
      for (let e of [this.mesh, this.depthMesh])
        ((e.bindMode = b),
          e.bind(this.skeleton, a),
          (e.boundingSphere = new Qr(new M(0, 0, 38), 58)),
          this.yawG.add(e));
      ((this.depthMesh.material.forceSinglePass = !0),
        (this.src.rotation.x = -Math.PI / 2),
        this.src.add(this.yawG),
        this.root.add(this.src),
        (this.root.name = `player-model:bunny`),
        (this.colours = _(e.outfit)),
        (this.accentOverride = e.color),
        this.applyColours(),
        this.setStyle(e.style ?? `solid`, e.color, e.dither),
        this.setLoadout(e.loadout ?? null),
        n && this.setAnimations(n));
    }
    setAnimations(e) {
      if (!e) {
        this.cs = null;
        return;
      }
      if (this.cs?.d === e) return;
      let t = new jm(e),
        n = new Dm(e, t);
      (e.warm(n.sequences()),
        (this.cs = { d: e, bs: t, anim: n, map: rT(this.r, e) }),
        (this.snapNext = !0));
    }
    get animSource() {
      return this.cs ? `cs` : `procedural`;
    }
    bodyBox(e) {
      e.makeEmpty();
      let t = this.S;
      for (let n of [this.mesh, this.crown]) {
        if (!n) continue;
        let r = n.geometry.getAttribute(`position`),
          i = n.geometry.getAttribute(`skinIndex`);
        for (let n = 0; n < r.count; n += 5) {
          let a = i.getX(n);
          if (this.gun && a === this.knifeBone) continue;
          let o = a * 12,
            s = r.getX(n),
            c = r.getY(n),
            l = r.getZ(n);
          e.expandByPoint(
            Qw.set(
              t[o] * s + t[o + 1] * c + t[o + 2] * l + t[o + 3],
              t[o + 4] * s + t[o + 5] * c + t[o + 6] * l + t[o + 7],
              t[o + 8] * s + t[o + 9] * c + t[o + 10] * l + t[o + 11],
            ),
          );
        }
      }
      return e;
    }
    get feetYaw() {
      return this.yaw;
    }
    get stats() {
      return {
        source: this.animSource,
        activity: this.cs ? this.cs.anim.activity : this.proc.state,
        feetYaw: this.yaw,
        ms: this.lastUpdateMs,
      };
    }
    setKnife(e) {
      (e?.id === `carrot` && (e = null),
        e !== this.knife && ((this.knife = e), this.applyLook()));
    }
    setOutfit(e) {
      ((this.colours = _(e)), this.applyColours());
      let t = Wh(e);
      t !== this.bodyLook &&
        ((this.bodyLook = t), this.applyLook(), this.setCrown(this.headwear()));
    }
    headwear() {
      return this.bodyLook === `tek` ? null : dx(this.loadout);
    }
    applyColours() {
      let e = v(this.colours);
      (this.uniforms.uPalette.value.forEach((t, n) => t.set(e[n])),
        this.style === `solid` &&
          this.uniforms.uAccent.value.set(
            this.accentOverride ?? this.colours.accent,
          ));
    }
    setStyle(e, t, n = this.dither) {
      let r = e !== this.style || n !== this.dither;
      ((this.style = e),
        (this.dither = n),
        e === `solid`
          ? (t !== void 0 && (this.accentOverride = t),
            this.uniforms.uAccent.value.set(
              this.accentOverride ?? this.colours.accent,
            ))
          : t !== void 0 && this.uniforms.uGhost.value.set(t),
        r && this.rebuildMaterial(),
        (this.depthMesh.visible = e === `ghost` && !n && !this.silhouette),
        this.setRenderOrder(this.baseRenderOrder));
    }
    setLoadout(e) {
      ((this.loadout = e), this.applyLook(), this.setCrown(this.headwear()));
    }
    setGun(e) {
      if (e === this.gunId) return;
      ((this.gunId = e),
        this.gun?.removeFromParent(),
        (this.gun = null),
        this.silencer?.removeFromParent(),
        (this.silencer = null));
      let t = e ? Hw(e) : void 0;
      if (!t) return;
      ((this.gun = this.handMesh(Kw(t, this.handBone))),
        this.yawG.add(this.gun));
      let n = qw(t, this.handBone);
      n &&
        ((this.silencer = this.handMesh(n)),
        (this.silencer.visible = this.silencerOn),
        this.yawG.add(this.silencer));
    }
    setGunSilencer(e) {
      ((this.silencerOn = e), this.silencer && (this.silencer.visible = e));
    }
    handMesh(e) {
      let t = new sa(e, this.mesh.material);
      return (
        (t.bindMode = b),
        t.bind(this.skeleton, new N()),
        (t.boundingSphere = new Qr(new M(0, 0, 38), 58)),
        (t.renderOrder = this.mesh.renderOrder),
        t
      );
    }
    setCrown(e) {
      if (
        this.crown?.geometry === e ||
        (this.crown?.removeFromParent(), (this.crown = null), !e)
      )
        return;
      let t = new sa(e, this.mesh.material);
      ((t.bindMode = b),
        t.bind(this.skeleton, new N()),
        (t.boundingSphere = new Qr(new M(0, 0, 38), 58)),
        (t.renderOrder = this.mesh.renderOrder),
        (this.crown = t),
        this.yawG.add(t));
    }
    applyLook() {
      let e = t_(this.knife, h(this.loadout?.glove).style, this.bodyLook);
      (this.mesh.geometry !== e &&
        ((this.mesh.geometry = e), (this.depthMesh.geometry = e)),
        Lb(this.mesh.geometry));
      let t = xp(this.uniforms, this.loadout);
      dp(t, this.look) ||
        ((this.look = t),
        !(this.style !== `solid` || this.silhouette) && this.rebuildMaterial());
    }
    setSilhouette(e) {
      e !== this.silhouette &&
        ((this.silhouette = e),
        this.rebuildMaterial(),
        (this.depthMesh.visible =
          this.style === `ghost` && !this.dither && !e));
    }
    rebuildMaterial() {
      this.mesh.material.dispose();
      let e = this.silhouette
        ? Fp(this.uniforms)
        : this.style === `solid`
          ? Np(this.uniforms, this.look)
          : Pp(this.uniforms, this.dither);
      ((e.forceSinglePass = !0), (this.mesh.material = e));
      for (let t of [this.gun, this.silencer, this.crown])
        t && (t.material = e);
    }
    get currentStyle() {
      return this.style;
    }
    setOpacity(e) {
      this.uniforms.uOpacity.value = e;
    }
    setNearFade(e, t) {
      this.uniforms.uNearFade.value.set(e, t);
    }
    setRenderOrder(e) {
      ((this.baseRenderOrder = e),
        (this.depthMesh.renderOrder = e),
        (this.mesh.renderOrder = e + 1));
    }
    setState(e) {
      this.pose = e;
    }
    snap() {
      this.snapNext = !0;
    }
    update(e) {
      let t = this.pose;
      if (!t) return;
      let n = performance.now();
      ((e = Zw(e, 0, 0.1)), (this.time += e));
      let r = t.position,
        i = r[0],
        a = r[2],
        o = -r[1],
        s = this.lastPos;
      this.hasLast &&
        (s.x - i) ** 2 + (s.y - a) ** 2 + (s.z - o) ** 2 > 25600 &&
        (this.snapNext = !0);
      let c = this.snapNext;
      if (((this.snapNext = !1), t.velocity))
        ((this.vel[0] = t.velocity[0]),
          (this.vel[1] = t.velocity[1]),
          (this.vel[2] = t.velocity[2]));
      else if (this.hasLast && e > 0 && !c) {
        let t = 1 - Math.exp(-20 * e);
        ((this.vel[0] += ((i - s.x) / e - this.vel[0]) * t),
          (this.vel[1] += (-(o - s.z) / e - this.vel[1]) * t),
          (this.vel[2] += ((a - s.y) / e - this.vel[2]) * t));
      } else this.vel[0] = this.vel[1] = this.vel[2] = 0;
      (s.set(i, a, o), (this.hasLast = !0), this.root.position.set(i, a, o));
      let l = t.jumped ?? this.detectJump(t, c),
        u = this.S,
        d = this.inv,
        f = this.r;
      if (this.cs) {
        let { anim: n, bs: r, map: i } = this.cs;
        if (c && (n.reset(), !t.grounded)) {
          let e = (301.993 - this.vel[2]) / 800;
          e >= 0 && e < 2 && n.startAirborne(e);
        }
        (t.attack && n.fire(),
          n.update(c ? 0 : e, {
            vel: this.vel,
            eyeYaw: t.yaw,
            eyePitch: t.pitch,
            ducking: t.crouched,
            onGround: t.grounded,
            jumped: l,
          }),
          n.apply());
        let a = r.buildMatrices();
        for (let e = 0; e < f.csBones; e++) {
          let t = i[e];
          t >= 0
            ? H(a, t * 12, d, e * 12, u, e * 12)
            : f.parent[e] >= 0 &&
              u.copyWithin(e * 12, f.parent[e] * 12, f.parent[e] * 12 + 12);
        }
        this.yaw = n.feetYaw;
      } else this.yaw = this.proc.update(c ? 0 : e, t, this.vel, c, l, u);
      (this.updateEars(e, c, t),
        this.knifeBone >= 0 &&
          u.copyWithin(
            this.knifeBone * 12,
            this.handBone * 12,
            this.handBone * 12 + 12,
          ),
        this.inspectLayer(t, c, e),
        this.gun &&
          this.knifeBone >= 0 &&
          u.fill(0, this.knifeBone * 12, this.knifeBone * 12 + 12));
      let p = this.skeleton.boneMatrices,
        m = f.names.length;
      for (let e = 0; e < m; e++) {
        let t = e * 12,
          n = e * 16;
        ((p[n] = u[t]),
          (p[n + 1] = u[t + 4]),
          (p[n + 2] = u[t + 8]),
          (p[n + 3] = 0),
          (p[n + 4] = u[t + 1]),
          (p[n + 5] = u[t + 5]),
          (p[n + 6] = u[t + 9]),
          (p[n + 7] = 0),
          (p[n + 8] = u[t + 2]),
          (p[n + 9] = u[t + 6]),
          (p[n + 10] = u[t + 10]),
          (p[n + 11] = 0),
          (p[n + 12] = u[t + 3]),
          (p[n + 13] = u[t + 7]),
          (p[n + 14] = u[t + 11]),
          (p[n + 15] = 1));
      }
      ((this.yawG.rotation.z = this.yaw * Xw),
        (this.uniforms.uAxisA.value.copy(this.root.position).y += 8),
        (this.uniforms.uAxisB.value.copy(this.root.position).y += 60),
        this.gun &&
          ((this.gun.material = this.mesh.material),
          (this.gun.renderOrder = this.mesh.renderOrder)),
        this.silencer &&
          ((this.silencer.material = this.mesh.material),
          (this.silencer.renderOrder = this.mesh.renderOrder)),
        this.crown &&
          ((this.crown.material = this.mesh.material),
          (this.crown.renderOrder = this.mesh.renderOrder)),
        (this.lastUpdateMs = performance.now() - n));
    }
    updateEars(e, t, n) {
      let r = this.S,
        i = this.head * 12,
        a = Math.cos(this.yaw * Xw),
        o = Math.sin(this.yaw * Xw),
        s = n.position,
        c = 6.5;
      this.earTwitch -= e;
      let l = 0;
      this.earTwitch < 0 &&
        ((this.earTwitch = 2.5 + Math.random() * 4.5),
        Math.hypot(this.vel[0], this.vel[1]) < 40 &&
          (l = Math.random() < 0.5 ? 1 : -1));
      for (let n of this.ears) {
        let u = n.side,
          { bone: d, base: f, dir0: p } = n,
          m = [0, 0, 0],
          h = [0, 0, 0];
        for (let e = 0; e < 3; e++)
          ((m[e] =
            r[i + e * 4] * f[0] +
            r[i + e * 4 + 1] * f[1] +
            r[i + e * 4 + 2] * f[2] +
            r[i + e * 4 + 3]),
            (h[e] =
              r[i + e * 4] * p[0] +
              r[i + e * 4 + 1] * p[1] +
              r[i + e * 4 + 2] * p[2]));
        let g = [
            s[0] + a * m[0] - o * m[1],
            s[1] + o * m[0] + a * m[1],
            s[2] + m[2],
          ],
          _ = [a * h[0] - o * h[1], o * h[0] + a * h[1], h[2]],
          v = [g[0] + _[0] * c, g[1] + _[1] * c, g[2] + _[2] * c],
          y = [0, 0, 0];
        if (n.hasBase && e > 0 && !t)
          for (let t = 0; t < 3; t++) y[t] = (g[t] - n.wb[t]) / e;
        if (t || !n.hasBase)
          for (let e = 0; e < 3; e++) ((n.p[e] = v[e]), (n.v[e] = y[e]));
        else {
          let t = Math.max(1, Math.ceil(e / (1 / 120))),
            r = e / t;
          l && ((n.v[0] += -_[1] * 70 * l * u), (n.v[1] += _[0] * 70 * l * u));
          for (let e = 0; e < t; e++)
            for (let e = 0; e < 3; e++) {
              let t =
                320 * (v[e] - n.p[e]) -
                21 * (n.v[e] - y[e]) -
                1 * n.v[e] -
                (e === 2 ? 30 : 0);
              ((n.v[e] += t * r), (n.p[e] += n.v[e] * r));
            }
        }
        let b = n.p[0] - g[0],
          x = n.p[1] - g[1],
          S = n.p[2] - g[2],
          C = Math.hypot(b, x, S) || 1;
        ((b /= C), (x /= C), (S /= C));
        for (let e = 0; e < 3; e++) n.p[e] = g[e] + [b, x, S][e] * c;
        for (let e = 0; e < 3; e++) n.wb[e] = g[e];
        n.hasBase = !0;
        let w = a * b + o * x,
          T = -o * b + a * x,
          E = S,
          D = [
            r[i] * w + r[i + 4] * T + r[i + 8] * E,
            r[i + 1] * w + r[i + 5] * T + r[i + 9] * E,
            r[i + 2] * w + r[i + 6] * T + r[i + 10] * E,
          ],
          O = this.tmp,
          k = this.tmp2;
        (iT(p, D, f, 1, 1.1, O),
          H(r, i, O, 0, r, d * 12),
          iT(p, D, n.mid, 0.5, 1.1, k),
          H(r, d * 12, k, 0, r, (d + 1) * 12));
      }
    }
    inspectLayer(e, t, n) {
      if (!this.tp) {
        if (!e.inspect) return;
        this.tp = new Sb(this.knife);
        let t = this.S,
          n = this.r.bind,
          r = this.tmp;
        this.tpBones = {
          index: (e) => this.r.index(e),
          parent: this.r.parent,
          count: this.r.names.length,
          posed: (e, r) => H(t, e * 12, n, e * 12, r, 0),
          pre: (e, n) => {
            (H(n, 0, t, e * 12, r, 0), t.set(r, e * 12));
          },
        };
      }
      let r = this.tp;
      (r.setKnife(this.knife),
        t && r.reset(),
        e.attack && r.cancel(`attack`),
        e.inspect && r.signal(e.inspect),
        r.setHeld(!!e.inspectHeld),
        r.update(t ? 0 : n),
        r.apply(this.tpBones, this.r, Qc, this.knife?.tp ?? Dl));
    }
    detectJump(e, t) {
      let n = this.vel[2],
        r = this.time,
        i = this.vzHist;
      for (i.push({ t: r, vz: n }); i.length > 2 && r - i[0].t > 0.08; )
        i.shift();
      let a = this.wasGrounded;
      if (
        ((this.wasGrounded = e.grounded),
        t || n < 120 || (this.lastJump >= 0 && r - this.lastJump < 0.2))
      )
        return !1;
      let o = n;
      for (let e of i) e.vz < o && (o = e.vz);
      return n - o > 220 || (a && !e.grounded && n > 150)
        ? ((this.lastJump = r), !0)
        : !1;
    }
    dispose() {
      (this.root.removeFromParent(),
        this.mesh.material.dispose(),
        this.depthMesh.material.dispose(),
        this.skeleton.dispose());
    }
  },
  oT = null,
  sT = new Set();
function cT() {
  return oT;
}
function lT(e) {
  if ((e?.id === `carrot` && (e = null), e !== oT)) {
    oT = e;
    for (let t of sT) t(e);
  }
}
function uT(e) {
  return (sT.add(e), () => sT.delete(e));
}
var dT = !1,
  fT = (e) => {
    let t = Nf(e?.knife);
    return t && t.id !== `carrot` ? t : null;
  };
function pT() {
  dT || ((dT = !0), lT(fT(l())), u((e) => lT(fT(e))));
}
var mT = [`rt`, `lf`, `bk`, `ft`, `up`, `dn`];
function hT(e) {
  let t = e.trim().toLowerCase();
  return t ? mT.map((e) => `skybox/${t}${e}`) : [];
}
function gT(e, t) {
  return `${e.replace(/_dir\.vpk$/, ``)}_${String(t).padStart(3, `0`)}.vpk`;
}
async function _T(e, t) {
  return e.archive === 4294967295
    ? t.fetchListed
      ? t.fetchListed(e.path)
      : null
    : e.length === 0
      ? new Uint8Array()
      : t.readRange(gT(e.mount, e.archive), e.offset, e.length);
}
async function vT(e, t, n) {
  let r = 0;
  await Promise.all(
    Array.from({ length: Math.min(t, e.length) }, async () => {
      for (; r < e.length; ) await n(e[r++]);
    }),
  );
}
async function yT(e, t, n = [], r, i) {
  let a = i ?? { rounds: 0, fetched: new Map(), bytesRead: 0, failed: [] },
    o = new Set(a.failed);
  for (let i = 0; ; i++) {
    (e.contentResolve(typeof n == `function` ? n() : n), r?.());
    let s = e.contentPending().filter((e) => !o.has(e.path));
    if (!s.length || !t || i >= 16) break;
    a.rounds++;
    let c = [];
    await vT(s, 16, async (e) => {
      try {
        c.push([e, await _T(e, t)]);
      } catch (t) {
        (console.warn(`content: reading ${e.path} failed`, t),
          c.push([e, null]));
      }
    });
    for (let [t, n] of c)
      n && e.contentProvide(t.path, n)
        ? ((a.bytesRead += n.length),
          a.fetched.set(t.path, e.contentFile(t.path) ?? new Uint8Array()),
          a.origin?.set(t.path, t.mount))
        : (n && console.warn(`content: ${e.lastError()}`), o.add(t.path));
  }
  return ((a.failed = [...o]), a);
}
var bT = null,
  xT = new Set();
function ST(e) {
  let t =
    !bT ||
    bT.base !== e.base ||
    Object.keys(bT.group.files).length !== Object.keys(e.group.files).length;
  if (((bT = e), t)) for (let t of xT) t(e);
}
function CT() {
  return bT;
}
function wT(e) {
  return (xT.add(e), bT && e(bT), () => xT.delete(e));
}
var TT = class extends Error {
    status;
    retryable;
    aborted;
    constructor(e, t, n, r = !1) {
      (super(e),
        (this.status = t),
        (this.retryable = n),
        (this.aborted = r),
        (this.name = `FetchFailure`));
    }
  },
  ET = new Set([408, 425, 429]);
function DT(e, t, n = Math.random) {
  let r = t * 3 ** Math.max(0, e - 2);
  return Math.round(r * (0.75 + n() * 0.5));
}
function OT(e, t) {
  return new Promise((n, r) => {
    if (t?.aborted) return r(new TT(`aborted`, null, !1, !0));
    let i = setTimeout(a, e);
    function a() {
      (t?.removeEventListener(`abort`, o), n());
    }
    function o() {
      (clearTimeout(i), r(new TT(`aborted`, null, !1, !0)));
    }
    t?.addEventListener(`abort`, o, { once: !0 });
  });
}
function kT(e, t, n, r) {
  return new Promise((i, a) => {
    let o = () => {
        clearTimeout(s);
        for (let e of r) e.removeEventListener(`abort`, c);
      },
      s = setTimeout(() => {
        (o(),
          a(new TT(`timed out (${n}, ${Math.round(t / 1e3)} s)`, null, !0)));
      }, t),
      c = () => {
        (o(), a(new TT(`aborted`, null, !1, !0)));
      };
    for (let e of r) {
      if (e.aborted) return c();
      e.addEventListener(`abort`, c, { once: !0 });
    }
    e.then(
      (e) => (o(), i(e)),
      (e) => (o(), a(e)),
    );
  });
}
function AT(e) {
  let t = (e.headers.get(`content-encoding`) ?? ``).trim().toLowerCase();
  return t && t !== `identity`
    ? null
    : Number(e.headers.get(`content-length`)) || null;
}
async function jT(e, t, n) {
  let r = new AbortController(),
    i = n ? [n, r.signal] : [r.signal],
    a = () => r.abort();
  n?.addEventListener(`abort`, a, { once: !0 });
  try {
    let a;
    try {
      a = await kT(
        (t.fetch ?? fetch)(e, { ...t.init, signal: r.signal }),
        t.headerTimeoutMs ?? 2e4,
        `no response`,
        i,
      );
    } catch (e) {
      throw e instanceof TT
        ? e
        : n?.aborted
          ? new TT(`aborted`, null, !1, !0)
          : new TT(e?.message || `network error`, null, !0);
    }
    if (!a.ok)
      throw (
        a.body?.cancel().catch(() => {}),
        new TT(
          `HTTP ${a.status}`,
          a.status,
          a.status >= 500 || ET.has(a.status),
        )
      );
    let o = t.accept?.(a) ?? null;
    if (o) throw (a.body?.cancel().catch(() => {}), new TT(o, a.status, !1));
    let s = AT(a),
      c = (e) => {
        s !== null && e > s && (s = null);
        let n =
          (typeof t.expectedSize == `function`
            ? t.expectedSize()
            : t.expectedSize) || s;
        return n ? Math.max(n, e) : null;
      },
      l = t.idleTimeoutMs ?? 2e4;
    if (!a.body) {
      let e = new Uint8Array(
        await kT(a.arrayBuffer(), l, `download stalled`, i),
      );
      return (t.onProgress?.(e.length, c(e.length)), e);
    }
    let u = a.body.getReader(),
      d = [],
      f = 0;
    try {
      for (;;) {
        let { done: e, value: n } = await kT(
          u.read(),
          l,
          `download stalled`,
          i,
        );
        if (e) break;
        (d.push(n), (f += n.length), t.onProgress?.(f, c(f)));
      }
    } catch (e) {
      throw (
        u.cancel().catch(() => {}),
        e instanceof TT
          ? e
          : n?.aborted
            ? new TT(`aborted`, null, !1, !0)
            : new TT(e?.message || `download interrupted`, null, !0)
      );
    }
    if (d.length === 1) return d[0];
    let p = new Uint8Array(f),
      m = 0;
    for (let e of d) (p.set(e, m), (m += e.length));
    return p;
  } finally {
    (n?.removeEventListener(`abort`, a), r.abort());
  }
}
async function MT(e, t = {}) {
  let n = Math.max(1, t.attempts ?? 3),
    r = t.sleep ?? OT;
  for (let i = 1; ; i++)
    try {
      return await jT(e, t, t.signal);
    } catch (e) {
      let a = e instanceof TT ? e : new TT(String(e?.message ?? e), null, !0);
      if (t.signal?.aborted) throw new TT(`aborted`, null, !1, !0);
      if (!a.retryable || i >= n) throw a;
      let o = DT(i + 1, t.backoffMs ?? 600, t.random);
      (t.onRetry?.(i + 1, a, o), await r(o, t.signal));
    }
}
function NT(e, t, n) {
  return new Promise((r, i) => {
    let a = setTimeout(() => r(n), t);
    e.then(
      (e) => (clearTimeout(a), r(e)),
      (e) => (clearTimeout(a), i(e)),
    );
  });
}
var PT = {
    BASE_URL: `/`,
    DEV: !1,
    MODE: `production`,
    PROD: !0,
    SSR: !1,
    VITE_API_URL: `/api`,
  },
  FT = String(PT.VITE_CONTENT_URL || a || ``).replace(/\/+$/, ``),
  IT = null;
function LT() {
  return IT && { ...IT };
}
async function RT(e) {
  let t = await crypto.subtle.digest(`SHA-256`, e);
  return [...new Uint8Array(t)]
    .map((e) => e.toString(16).padStart(2, `0`))
    .join(``);
}
async function zT(e, t) {
  let n = [FT];
  PT.DEV && FT && n.push(``);
  for (let r of n)
    try {
      let n = await MT(`${r}/${m(e)}`, {
          attempts: 3,
          headerTimeoutMs: 15e3,
          idleTimeoutMs: 15e3,
          signal: t,
          accept: (e) =>
            (e.headers.get(`content-type`) ?? ``).includes(`json`)
              ? null
              : `not a manifest`,
        }),
        i = JSON.parse(new TextDecoder().decode(n));
      if (p(i) && i.mapSha256 === e) return Object.assign(i, { base: r });
    } catch (e) {
      e?.message !== `HTTP 404` &&
        e?.message !== `not a manifest` &&
        console.warn(`content: manifest unavailable (${e?.message ?? e})`);
    }
  return null;
}
async function BT(e, t, n) {
  let r = 0;
  await Promise.all(
    Array.from({ length: Math.min(t, e.length) }, async () => {
      for (; r < e.length; ) await n(e[r++]);
    }),
  );
}
async function VT(e, r = {}) {
  if (!e.hasContentApi()) return { sky: null, extra: [], propMaterials: [] };
  let i = performance.now(),
    a =
      e
        .entities()
        .find((e) => e.classname === `worldspawn`)
        ?.skyname?.trim() || null,
    o = a ? hT(a) : [],
    l = e.mesh().materials.length,
    u = () =>
      e
        .materials()
        .slice(0, l)
        .filter((e) => e.kind === n.Missing).length;
  (e.contentMaterialOverrides({}), e.contentResolve(o));
  let d = u(),
    f = r.mapSha256 ?? (r.bsp ? await RT(r.bsp) : null),
    p = f ? await zT(f, r.signal) : null;
  (p?.materialOverrides && e.contentMaterialOverrides(p.materialOverrides),
    p?.optional?.player && ST({ group: p.optional.player, base: p.base ?? FT }),
    p?.optional?.sounds && c({ group: p.optional.sounds, base: p.base ?? FT }));
  let m = 0,
    h = 0,
    g = 0,
    _ = 0;
  if (p) {
    let n = p.base ?? FT,
      i = [],
      a = p.physics?.files ?? {},
      c = Object.entries(p.files).sort(
        ([e], [t]) => Number(t in a) - Number(e in a),
      ),
      l = r.skip ? c.filter(([e]) => e in a) : c;
    g = c.length - l.length;
    let u = {
      files: l.length,
      done: 0,
      failed: 0,
      bytes: 0,
      totalBytes: l.reduce((e, [, t]) => e + (t.size || 0), 0),
    };
    (r.onProgress?.({ ...u }),
      await BT(l, 12, async ([e, t]) => {
        let o = e in a;
        if (r.signal?.aborted && !o) {
          g++;
          return;
        }
        let c = 0;
        try {
          let a = await MT(`${n}/${s(t.sha256)}`, {
            attempts: 3,
            headerTimeoutMs: 15e3,
            idleTimeoutMs: 15e3,
            signal: o ? void 0 : r.signal,
            expectedSize: t.size,
            onProgress: (e) => {
              ((u.bytes += e - c), (c = e), r.onProgress?.({ ...u }));
            },
            onRetry: (t, n) =>
              console.warn(`content: ${e}: ${n.message}, retrying (${t}/3)`),
          });
          if ((await RT(a)) !== t.sha256) throw Error(`hash mismatch`);
          i.push([e, a]);
        } catch (t) {
          ((u.bytes -= c),
            r.signal?.aborted && !o
              ? g++
              : (h++,
                u.failed++,
                console.warn(`content: ${e} unavailable (${t.message})`)));
        }
        (u.done++, r.onProgress?.({ ...u }));
      }));
    for (let [t, n] of i) (e.contentAddFile(t, n), (_ += n.length), m++);
    e.contentResolve(o);
    let d = p.physics?.files ?? {};
    (t(i.filter(([e]) => e in d)), e.physicsReload());
    let f = e.physicsMissing();
    f.length &&
      console.warn(
        `content: no collision model for ${f.length} prop model(s): ${f.slice(0, 5).join(`, `)}`,
      );
  }
  let v = [],
    y = { instances: 0, models: 0, missingModels: 0 };
  if (r.bsp && e.propsLoad(r.bsp).length) {
    ((v = e.propsBuild()), e.contentResolve([...o, ...v]));
    let t = e.propsMesh();
    y = {
      instances: t.instances,
      models: t.models,
      missingModels: t.missingModels,
    };
  }
  let b = e.materials();
  return (
    (IT = {
      materials: l,
      missing: u(),
      missingWithoutContent: d,
      sky: a,
      skyResolved:
        o.length > 0 && b.slice(l, l + 4).every((e) => e.texture >= 0),
      source: p ? (p.base ?? FT) : null,
      manifest: !!p,
      files: p ? Object.keys(p.files).length : 0,
      loaded: m,
      failed: h,
      skipped: g,
      bytes: _,
      props: y,
      ms: Math.round(performance.now() - i),
    }),
    console.info(
      `content: ${IT.missing}/${l} materials missing (${d} with the pakfile alone); ` +
        (p
          ? `${m}/${IT.files} hosted files (${(_ / 1e6).toFixed(2)} MB${g ? `, ${g} skipped: playing without textures` : ``})`
          : `no hosted manifest`) +
        `; sky ${a ?? `-`}${IT.skyResolved ? `` : ` (gradient)`}; props ${y.instances} (${y.models} models${y.missingModels ? `, ${y.missingModels} unavailable` : ``}); ${IT.ms} ms`,
    ),
    { sky: a, extra: o, propMaterials: v }
  );
}
PT.DEV &&
  typeof window < `u` &&
  Object.assign(window, {
    __bunnyhopContent: { mapContentStatus: LT, CONTENT_BASE: FT },
  });
var HT = {
    uWaterCount: { value: 0 },
    uWaterMin: { value: Array.from({ length: 24 }, () => new M()) },
    uWaterMax: { value: Array.from({ length: 24 }, () => new M()) },
    uWaterColor: { value: Array.from({ length: 24 }, () => new Dn()) },
    uWaterRange: { value: Array.from({ length: 24 }, () => new j()) },
    uWaterRect: { value: Array.from({ length: 24 }, () => new Dn()) },
    uWaterTime: { value: 0 },
  },
  UT = `
#define WATER_MAX 24
uniform int uWaterCount;
uniform vec3 uWaterMin[WATER_MAX];
uniform vec3 uWaterMax[WATER_MAX];
uniform vec4 uWaterColor[WATER_MAX];
uniform vec2 uWaterRange[WATER_MAX];
// Each volume's screen rectangle (NDC min xy, max xy; the whole screen when it reaches behind the camera).
uniform vec4 uWaterRect[WATER_MAX];
varying vec3 vWaterWorld;
// Clip-space x, y, w of the fragment (divided per fragment: NDC).
varying vec3 vWaterClip;
// Length of the camera -> p segment inside each water box; fog by the total, coloured by the boxes it crossed.
vec3 applyWaterFog(vec3 col, vec3 p) {
  vec3 c = cameraPosition;
  vec3 d = p - c;
  float len = length(d);
  float total = 0.0;
  vec3 fogCol = vec3(0.0);
  vec2 range = vec2(0.0);
  vec2 ndc = vWaterClip.xy / vWaterClip.z;
  vec3 inv = 1.0 / (d + vec3(equal(d, vec3(0.0))) * 1e-6);
  for (int i = 0; i < WATER_MAX; i++) {
    if (i >= uWaterCount) break;
    // The view ray through this pixel can only cross a box inside the box's screen rectangle.
    vec4 r = uWaterRect[i];
    if (ndc.x < r.x || ndc.y < r.y || ndc.x > r.z || ndc.y > r.w) continue;
    vec3 t0 = (uWaterMin[i] - c) * inv;
    vec3 t1 = (uWaterMax[i] - c) * inv;
    vec3 tmin = min(t0, t1), tmax = max(t0, t1);
    float a = max(max(max(tmin.x, tmin.y), tmin.z), 0.0);
    float b = min(min(min(tmax.x, tmax.y), tmax.z), 1.0);
    if (b > a) {
      float inside = (b - a) * len;
      total += inside;
      fogCol += uWaterColor[i].rgb * inside;
      range += uWaterRange[i] * inside;
    }
  }
  if (total <= 0.0) return col;
  fogCol /= total;
  range /= total;
  float f = clamp((total - range.x) / max(range.y - range.x, 1.0), 0.0, 1.0);
  return mix(col, fogCol, f);
}
`;
function WT(e, t = {}) {
  let n = t.sky
      ? `cameraPosition + normalize(vWaterWorld - cameraPosition) * 1.0e5`
      : `vWaterWorld`,
    r = e.onBeforeCompile,
    i = e.customProgramCacheKey;
  return (
    (e.onBeforeCompile = (t, i) => {
      (r.call(e, t, i),
        Object.assign(t.uniforms, HT),
        (t.vertexShader = t.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vWaterWorld;
varying vec3 vWaterClip;`,
          )
          .replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
  vWaterWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vWaterClip = gl_Position.xyw;`,
          )),
        (t.fragmentShader = t.fragmentShader
          .replace(`#include <common>`, `#include <common>\n${UT}`)
          .replace(
            `#include <fog_fragment>`,
            `gl_FragColor.rgb = applyWaterFog(gl_FragColor.rgb, ${n});\n#include <fog_fragment>`,
          )));
    }),
    (e.customProgramCacheKey = () =>
      `${i.call(e)}+waterfog${t.sky ? `-sky` : ``}`),
    e
  );
}
var GT = new P(11125203);
function KT(e, t, n = {}) {
  let r = new P(...e.color),
    i = new P(4026252).lerp(r, 0.45).offsetHSL(0, 0, 0.06),
    a = t?.aboveWater ?? !0;
  return new Rs({
    transparent: !0,
    depthWrite: !1,
    side: n.doubleSided ? 2 : 0,
    polygonOffset: !0,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -4,
    uniforms: {
      ...HT,
      uTint: { value: new M(i.r, i.g, i.b) },
      uFog: { value: new M(r.r, r.g, r.b) },
      uSky: { value: new M(GT.r, GT.g, GT.b) },
      uAbove: { value: +!!a },
    },
    vertexShader: `
      varying vec3 vWaterWorld;
      varying vec3 vWaterClip;
      varying vec3 vNormalW;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWaterWorld = w.xyz;
        vNormalW = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
        vWaterClip = gl_Position.xyw;
      }`,
    fragmentShader: `
      ${UT}
      uniform float uWaterTime;
      uniform vec3 uTint, uFog, uSky;
      uniform int uAbove;
      varying vec3 vNormalW;
      // Cheap ripples: a few travelling waves perturbing the surface normal.
      vec3 ripple(vec3 n, vec2 p, float t) {
        vec2 g = vec2(0.0);
        g += vec2(0.8, 0.6) * cos(dot(p, vec2(0.8, 0.6)) * 0.045 + t * 1.3) * 0.5;
        g += vec2(-0.5, 0.86) * cos(dot(p, vec2(-0.5, 0.86)) * 0.071 + t * 1.7) * 0.35;
        g += vec2(0.2, -0.98) * cos(dot(p, vec2(0.2, -0.98)) * 0.113 + t * 2.3) * 0.2;
        return normalize(n + vec3(g.x, 0.0, g.y) * 0.08);
      }
      void main() {
        vec3 v = normalize(cameraPosition - vWaterWorld);
        vec3 n = normalize(vNormalW);
        bool fromAbove = uAbove == 1 && gl_FrontFacing;
        if (!gl_FrontFacing) n = -n;
        n = ripple(n, vWaterWorld.xz, uWaterTime);
        float cosv = clamp(abs(dot(n, v)), 0.0, 1.0);
        vec3 col;
        float alpha;
        if (fromAbove) {
          float fres = 0.02 + 0.98 * pow(1.0 - cosv, 5.0);
          col = mix(uTint, uSky, clamp(fres * 0.85, 0.0, 1.0));
          // Light sparkle on the wave crests.
          col += vec3(0.05) * smoothstep(0.985, 1.0, dot(n, normalize(v + vec3(0.3, 0.8, 0.2))));
          alpha = mix(0.38, 0.9, fres);
        } else {
          // Seen from below: Snell's window straight up (see-through, bright), total internal reflection
          // (opaque, fog-coloured) towards grazing angles.
          float window = smoothstep(0.55, 0.85, cosv);
          col = mix(uFog * 1.6 + uTint * 0.3, uSky * 0.9 + uTint * 0.2, window);
          alpha = mix(0.92, 0.35, window);
        }
        col = applyWaterFog(col, vWaterWorld);
        gl_FragColor = vec4(col, alpha);
      }`,
  });
}
function qT(e) {
  let t = new P(...e.color);
  return (
    t.r > 0.97 && t.g > 0.97 && t.b > 0.97 && t.set(14215408),
    new Rs({
      transparent: !0,
      depthWrite: !1,
      uniforms: { ...HT, uTint: { value: new M(t.r, t.g, t.b) } },
      vertexShader: `
      varying vec3 vWaterWorld;
      varying vec3 vWaterClip;
      varying vec3 vNormalW;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWaterWorld = w.xyz;
        vNormalW = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
        vWaterClip = gl_Position.xyw;
      }`,
      fragmentShader: `
      ${UT}
      uniform vec3 uTint;
      varying vec3 vNormalW;
      void main() {
        vec3 v = normalize(cameraPosition - vWaterWorld);
        float cosv = clamp(abs(dot(normalize(vNormalW), v)), 0.0, 1.0);
        float fres = pow(1.0 - cosv, 3.0);
        vec3 col = mix(uTint, vec3(1.0), fres * 0.35);
        float alpha = mix(0.28, 0.6, fres);
        gl_FragColor = vec4(applyWaterFog(col, vWaterWorld), alpha);
      }`,
    })
  );
}
function JT(e, t) {
  let n = t[0];
  return e.map(([e, r, i, a, o, s]) => {
    let c =
        t.find(
          (t) =>
            Math.abs(t.z - s) < 2 &&
            t.x >= e - 1 &&
            t.x <= a + 1 &&
            t.y >= r - 1 &&
            t.y <= o + 1,
        ) ?? n,
      l = c?.desc.color ?? [0.2, 0.3, 0.35],
      u = c?.params?.fogStart ?? 0,
      d = c?.params?.fogEnd ?? 0;
    return (
      d > u || ([u, d] = [0, 400]),
      {
        min: new M(e, i, -o),
        max: new M(a, s, -r),
        color: new Dn(l[0], l[1], l[2], 1),
        range: new j(u, d),
      }
    );
  });
}
var YT = new N(),
  XT = new Dn(),
  ZT = new M(),
  QT = new Float64Array(8),
  $T = new Float64Array(8),
  eE = new Float64Array(8),
  tE = new Float32Array(),
  nE = new Float32Array(),
  rE = [],
  iE = 0.002,
  aE = 1e9,
  oE = 4;
function sE(e, t, n, r) {
  let i = aE,
    a = aE,
    o = -1e9,
    s = -1e9,
    c = (e, t) => {
      (e < i && (i = e), e > o && (o = e), t < a && (a = t), t > s && (s = t));
    };
  if (r <= 0 || n <= (oE * r) ** 2) ((i = a = -1e9), (o = s = aE));
  else {
    for (let t = 0; t < 8; t++)
      (XT.set(
        t & 1 ? e.max.x : e.min.x,
        t & 2 ? e.max.y : e.min.y,
        t & 4 ? e.max.z : e.min.z,
        1,
      ).applyMatrix4(YT),
        (QT[t] = XT.x),
        ($T[t] = XT.y),
        (eE[t] = XT.w),
        XT.w >= r && c(XT.x / XT.w, XT.y / XT.w));
    for (let e = 0; e < 8; e++)
      for (let t = 1; t < 8; t <<= 1) {
        if (e & t) continue;
        let n = e | t;
        if (eE[e] >= r == eE[n] >= r) continue;
        let i = (r - eE[e]) / (eE[n] - eE[e]);
        c((QT[e] + (QT[n] - QT[e]) * i) / r, ($T[e] + ($T[n] - $T[e]) * i) / r);
      }
    if (i > o) return !1;
  }
  return (
    (tE[t * 4] = i - iE),
    (tE[t * 4 + 1] = a - iE),
    (tE[t * 4 + 2] = o + iE),
    (tE[t * 4 + 3] = s + iE),
    o >= -1.002 && i <= 1.002 && s >= -1.002 && a <= 1.002
  );
}
function cE(e, t) {
  ((HT.uWaterTime.value = performance.now() / 1e3),
    tE.length < e.length * 4 &&
      ((tE = new Float32Array(e.length * 4)),
      (nE = new Float32Array(e.length))),
    YT.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
    t.getWorldPosition(ZT));
  let n = t.isPerspectiveCamera ? t.near : 0;
  rE.length = 0;
  for (let t = 0; t < e.length; t++) {
    let r = e[t],
      i = Math.max(r.min.x - ZT.x, 0, ZT.x - r.max.x),
      a = Math.max(r.min.y - ZT.y, 0, ZT.y - r.max.y),
      o = Math.max(r.min.z - ZT.z, 0, ZT.z - r.max.z);
    ((nE[t] = i * i + a * a + o * o), sE(r, t, nE[t], n) && rE.push(t));
  }
  (rE.length > 24 && (rE.sort((e, t) => nE[e] - nE[t]), (rE.length = 24)),
    (HT.uWaterCount.value = rE.length));
  for (let t = 0; t < rE.length; t++) {
    let n = rE[t],
      r = e[n];
    (HT.uWaterMin.value[t].copy(r.min),
      HT.uWaterMax.value[t].copy(r.max),
      HT.uWaterColor.value[t].copy(r.color),
      HT.uWaterRange.value[t].copy(r.range),
      HT.uWaterRect.value[t].set(
        tE[n * 4],
        tE[n * 4 + 1],
        tE[n * 4 + 2],
        tE[n * 4 + 3],
      ));
  }
}
var lE = 64,
  uE = 2,
  dE = 1 / 30,
  fE = (e, t) => {
    if (t in e) return e[t];
    let n = t.toLowerCase();
    for (let [t, r] of Object.entries(e)) if (t.toLowerCase() === n) return r;
  },
  pE = (e) => {
    let t = (e ?? ``).trim().split(/\s+/).map(Number);
    return [t[0] || 0, t[1] || 0, t[2] || 0];
  },
  mE = (e, t) => {
    let n = Number(e);
    return Number.isFinite(n) ? n : t;
  },
  hE = Math.PI / 180;
function gE(e, t, n, r = new N()) {
  return r.makeRotationFromEuler(new Vn(n * hE, e * hE, t * hE, `ZYX`));
}
function _E(e) {
  let t = e.toLowerCase(),
    n = /blue/.test(t)
      ? [0.18, 0.55, 1]
      : /purple/.test(t)
        ? [0.62, 0.25, 1]
        : /orange|ember|fire/.test(t)
          ? [1, 0.55, 0.15]
          : [0.85, 0.85, 0.85];
  return new P().setRGB(n[0], n[1], n[2], ft);
}
function vE() {
  let e = new Uint8Array(512),
    t = (e) =>
      e < 0.04045 ? e * 0.0773993808 : (e * 0.9478672986 + 0.0521327014) ** 2.4;
  for (let n = 0; n < 32; n++) {
    let r = Math.abs((n + 0.5) / 32 - 0.5) * 2,
      i = t(Math.max(0, 1 - r) ** 1.6),
      a = t(Math.max(0, 1 - r / 0.28) ** 2);
    for (let t = 0; t < 4; t++) {
      let r = (n * 4 + t) * 4;
      ((e[r] = a * 255), (e[r + 1] = i * 255), (e[r + 3] = 255));
    }
  }
  let n = new la(e, 4, 32, me, A);
  return (
    (n.colorSpace = ``),
    (n.magFilter = D),
    (n.minFilter = D),
    (n.needsUpdate = !0),
    n
  );
}
var yE = `
attribute vec3 neighbor;
attribute float side;
attribute float width;
attribute vec3 tint;
attribute vec3 glow;
varying vec3 vTint;
varying vec3 vGlow;
varying float vAcross;
void main() {
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  vec4 q = modelViewMatrix * vec4(neighbor, 1.0);
  vec3 along = q.xyz - p.xyz;
  // Perpendicular to the trail and to the line of sight.
  vec3 across = cross(along, p.xyz);
  float len = length(across);
  across = len > 1e-6 ? across / len : vec3(0.0, 1.0, 0.0);
  p.xyz += across * side * width * 0.5;
  vTint = tint;
  vGlow = glow;
  vAcross = side * 0.5 + 0.5;
  gl_Position = projectionMatrix * p;
}`,
  bE = `
uniform sampler2D map;
varying vec3 vTint;
varying vec3 vGlow;
varying float vAcross;
void main() {
  vec2 profile = texture2D(map, vec2(0.5, vAcross)).rg;
  vec3 c = (vec3(profile.r) + profile.g * vGlow) * vTint;
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`;
function xE(e) {
  let t = new Map();
  for (let n of e) {
    let e = fE(n, `targetname`);
    e && !t.has(e.toLowerCase()) && t.set(e.toLowerCase(), n);
  }
  let n = [],
    r = new N();
  for (let i of e) {
    if (fE(i, `classname`)?.toLowerCase() !== `env_spritetrail`) continue;
    let e = t.get((fE(i, `parentname`) ?? ``).split(`,`)[0].toLowerCase()),
      a =
        e && /^\*\d+$/.test(fE(e, `model`) ?? ``)
          ? Number(fE(e, `model`).slice(1))
          : -1;
    if (a < 0) continue;
    let o = pE(fE(e, `origin`)),
      s = pE(fE(e, `angles`)),
      c = pE(fE(i, `origin`));
    r.copy(gE(s[0], s[1], s[2])).transpose();
    let l = new M(c[0] - o[0], c[1] - o[1], c[2] - o[2]).applyMatrix4(r),
      u = pE(fE(i, `rendercolor`) ?? `255 255 255`);
    n.push({
      model: a,
      local: l,
      life: Math.max(0.05, mE(fE(i, `lifetime`), 1)),
      startWidth: mE(fE(i, `startwidth`), 8),
      endWidth: mE(fE(i, `endwidth`), 1),
      color: new P()
        .setRGB(u[0] / 255, u[1] / 255, u[2] / 255, ft)
        .multiplyScalar(
          Math.min(1, Math.max(0, mE(fE(i, `renderamt`), 255) / 255)),
        ),
      glow: _E(fE(i, `spritename`) ?? ``),
      points: new Float32Array(256),
      head: 0,
      count: 0,
    });
  }
  if (!n.length) return null;
  let i = n.length * lE * 2,
    a = new Kr(new Float32Array(i * 3), 3).setUsage(vt),
    o = new Kr(new Float32Array(i * 3), 3).setUsage(vt),
    s = new Kr(new Float32Array(i), 1).setUsage(vt),
    c = new Kr(new Float32Array(i * 3), 3).setUsage(vt),
    l = new Kr(new Float32Array(i * 3), 3);
  n.forEach((e, t) => {
    for (let n = t * lE * 2; n < (t + 1) * lE * 2; n++)
      e.glow.toArray(l.array, n * 3);
  });
  let u = new Kr(new Float32Array(i), 1);
  for (let e = 0; e < i; e++) u.array[e] = e & 1 ? 1 : -1;
  let d = new Uint32Array(n.length * 63 * 6),
    f = new oi();
  (f.setAttribute(`position`, a),
    f.setAttribute(`neighbor`, o),
    f.setAttribute(`width`, s),
    f.setAttribute(`tint`, c),
    f.setAttribute(`glow`, l),
    f.setAttribute(`side`, u),
    f.setIndex(new Kr(d, 1).setUsage(vt)));
  let p = new Yi(
    f,
    new Rs({
      uniforms: { map: { value: vE() } },
      vertexShader: yE,
      fragmentShader: bE,
      transparent: !0,
      blending: 2,
      depthWrite: !1,
      side: 2,
    }),
  );
  ((p.frustumCulled = !1), (p.name = `env_spritetrail`), (p.renderOrder = 2));
  let m = new N(),
    h = new M();
  return {
    root: p,
    count: n.length,
    update(e, t) {
      let r = 0;
      for (let i = 0; i < n.length; i++) {
        let l = n[i],
          u = e.get(l.model);
        if (u && !(u.length > 6 && u[6] === 0)) {
          (gE(u[3], u[4], u[5], m), h.copy(l.local).applyMatrix4(m));
          let e = h.x + u[0],
            n = h.y + u[1],
            r = h.z + u[2],
            i = l.count ? (l.head + lE - 1) % lE : -1,
            a = l.points;
          if (
            (i < 0
              ? 1 / 0
              : Math.hypot(e - a[i * 4], n - a[i * 4 + 1], r - a[i * 4 + 2])) >
            0.01
          ) {
            let o = l.count >= 2 ? (l.head + lE - 2) % lE : -1,
              s =
                o < 0 ||
                Math.hypot(e - a[o * 4], n - a[o * 4 + 1], r - a[o * 4 + 2]) >=
                  uE ||
                t - a[o * 4 + 3] >= dE,
              c = s ? l.head : i;
            ((a[c * 4] = e),
              (a[c * 4 + 1] = n),
              (a[c * 4 + 2] = r),
              (a[c * 4 + 3] = t),
              s &&
                ((l.head = (l.head + 1) % lE),
                (l.count = Math.min(lE, l.count + 1))));
          }
        } else l.count = 0;
        for (
          ;
          l.count &&
          t - l.points[((l.head - l.count + lE) % lE) * 4 + 3] > l.life;

        )
          l.count--;
        let f = i * lE,
          p = l.points;
        for (let e = 0; e < l.count; e++) {
          let n = (l.head - 1 - e + 128) % lE,
            i =
              e + 1 < l.count
                ? (l.head - 2 - e + 128) % lE
                : (l.head + 128 - e) % lE,
            u = Math.min(1, Math.max(0, (t - p[n * 4 + 3]) / l.life)),
            m = l.startWidth + (l.endWidth - l.startWidth) * u,
            h = 1 - u;
          for (let t of [0, 1]) {
            let r = (f + e) * 2 + t;
            ((a.array[r * 3] = p[n * 4]),
              (a.array[r * 3 + 1] = p[n * 4 + 1]),
              (a.array[r * 3 + 2] = p[n * 4 + 2]));
            let u = e + 1 < l.count ? 1 : -1;
            ((o.array[r * 3] = p[n * 4] + u * (p[i * 4] - p[n * 4])),
              (o.array[r * 3 + 1] =
                p[n * 4 + 1] + u * (p[i * 4 + 1] - p[n * 4 + 1])),
              (o.array[r * 3 + 2] =
                p[n * 4 + 2] + u * (p[i * 4 + 2] - p[n * 4 + 2])),
              (s.array[r] = m),
              (c.array[r * 3] = l.color.r * h),
              (c.array[r * 3 + 1] = l.color.g * h),
              (c.array[r * 3 + 2] = l.color.b * h));
          }
          if (e + 1 < l.count) {
            let t = (f + e) * 2,
              n = t + 2;
            ((d[r++] = t),
              (d[r++] = t + 1),
              (d[r++] = n),
              (d[r++] = n),
              (d[r++] = t + 1),
              (d[r++] = n + 1));
          }
        }
      }
      (f.setDrawRange(0, r),
        (a.needsUpdate = o.needsUpdate = s.needsUpdate = c.needsUpdate = !0),
        (f.index.needsUpdate = !0),
        (p.visible = r > 0));
    },
  };
}
var SE = 0.75,
  CE = 1024,
  wE = 2048,
  TE = 1,
  EE = 4,
  DE = -32,
  OE = 16,
  kE = Array.from({ length: 49 }, (e, t) => 2 ** (t + DE) / 255),
  AE = 0,
  jE = 6,
  ME = 7,
  NE = 8,
  PE = 53,
  FE = 56,
  IE = 72,
  LE = {
    0: `m`,
    1: `mmnmmommommnonmmonqnmmo`,
    2: `abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba`,
    3: `mmmmmaaaaammmmmaaaaaabcdefgabcdefg`,
    4: `mamamamamama`,
    5: `jklmnopqrstuvwxyzyxwvutsrqponmlkj`,
    6: `nmonqnmomnmomomno`,
    7: `mmmaaaabcdefgmmmmaaaammmaamm`,
    8: `mmmaaammmaaammmabcdefaaaammmmabcdefmmmaaaa`,
    9: `aaaaaaaazzzzzzzz`,
    10: `mmamammmmammamamaaamammma`,
    11: `abcdefghijklmnopqrrqponmlkjihgfedcba`,
    12: `mmnnmmnnnmmnn`,
    63: `a`,
  };
function RE(e) {
  let t = e.toLowerCase().replace(/[^a-z]/g, ``);
  if (!t) return 256 / 264;
  let n = 0;
  for (let e = 0; e < t.length; e++) n += (t.charCodeAt(e) - 97) * 22;
  return n / t.length / 264;
}
function zE(e) {
  let t = new Map();
  for (let [e, n] of Object.entries(LE)) t.set(+e, RE(n));
  let n = new Map();
  for (let t of e) {
    if (!/^light(_spot)?$/i.test(t.classname ?? ``)) continue;
    let e = parseInt(t.style ?? `0`, 10);
    if (!(e >= 32 && e < 64) || !t.targetname) continue;
    let r = parseInt(t.defaultstyle ?? `0`, 10),
      i = t.pattern || (r > 0 ? (LE[r] ?? `m`) : `m`),
      a = {
        style: e,
        on: !((parseInt(t.spawnflags ?? `0`, 10) || 0) & 1),
        pattern: i,
      },
      o = t.targetname.toLowerCase();
    n.set(o, [...(n.get(o) ?? []), a]);
  }
  let r = /^on(mapspawn|newgame|multinewmap|multinewround)$/i,
    i = [];
  for (let t of e)
    if ((t.classname ?? ``).toLowerCase() === `logic_auto`)
      for (let [e, n] of t.outputs ?? []) {
        if (!r.test(e)) continue;
        let t = n.split(n.includes(`\x1B`) ? `\x1B` : `,`).map((e) => e.trim());
        /^(turnon|turnoff|toggle)$/i.test(t[1] ?? ``) &&
          i.push({
            target: (t[0] ?? ``).toLowerCase(),
            input: t[1].toLowerCase(),
            delay: parseFloat(t[3] ?? `0`) || 0,
          });
      }
  i.sort((e, t) => e.delay - t.delay);
  for (let e of i) {
    let t = e.target.endsWith(`*`) ? e.target.slice(0, -1) : null;
    for (let [r, i] of n)
      if (!(t === null ? r !== e.target : !r.startsWith(t)))
        for (let t of i)
          t.on = e.input === `turnon` || (e.input !== `turnoff` && !t.on);
  }
  for (let e of n.values())
    for (let n of e) t.set(n.style, n.on ? RE(n.pattern) : 0);
  return t;
}
function BE(e, t) {
  return e.get(t) ?? 256 / 264;
}
function VE(e) {
  let t = [];
  for (let n of e.matchAll(/\{([^{}]*)\}/g)) {
    let e = {},
      r = [];
    for (let t of n[1].matchAll(/"([^"]*)"\s*"([^"]*)"/g))
      (/^on/i.test(t[1]) && r.push([t[1], t[2]]),
        t[1] in e || (e[t[1]] = t[2]));
    ((e.outputs = r), t.push(e));
  }
  return t;
}
function HE(e, t) {
  let n = [],
    r = EE,
    i = 0,
    a = EE;
  for (let o of e) {
    let e = o.w + 2,
      s = o.h + 2;
    (r + e > t && ((i += a), (r = 0), (a = 0)),
      n.push([r, i]),
      (r += e),
      (a = Math.max(a, s)));
  }
  return { pos: n, height: i + a };
}
function UE(e) {
  let t = 1;
  for (; t < e; ) t *= 2;
  return t;
}
function WE(e) {
  let t = new Float64Array(256);
  for (let n = 1; n < 256; n++) {
    let r = (n - 0.5) / 255,
      i = r <= 0.04045 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
    t[n] = (i / e) ** (1 / SE);
  }
  return (e) => {
    let n = 0;
    for (let r = 128; r; r >>= 1) n + r < 256 && e >= t[n + r] && (n += r);
    return n;
  };
}
function GE(e, t) {
  let n = (e, t = 0) => ({ faces: 0, styledFaces: t, skipped: e });
  if (t.length < 1036) return n(`not a BSP`);
  let r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  if (r.getUint32(0, !0) !== 1347633750) return n(`not a VBSP`);
  let i = (e) => {
      let n = 8 + e * 16,
        i = r.getInt32(n, !0),
        a = r.getInt32(n + 4, !0),
        o =
          r.getInt32(n + 12, !0) !== 0 ||
          (a >= 4 && i + 4 <= t.length && r.getUint32(i, !0) === 1095588428);
      return {
        ofs: i,
        len: i >= 0 && i + a <= t.length ? a : 0,
        compressed: o,
      };
    },
    a = i(ME),
    o = i(jE),
    s = i(NE);
  if (
    (s.len === 0 && (s = i(PE)), a.compressed || o.compressed || s.compressed)
  )
    return n(`compressed lumps`);
  let c = Math.floor(a.len / FE),
    l = Math.floor(o.len / IE),
    u = Math.floor(s.len / 4),
    d = [],
    f = 0;
  for (let e = 0; e < c; e++) {
    let n = a.ofs + e * FE,
      i = r.getInt16(n + 10, !0),
      s = Math.max(i, 0);
    if (s >= l) continue;
    let c = r.getInt32(o.ofs + s * IE + 64, !0),
      p = r.getInt32(n + 20, !0),
      m = [0, 1, 2, 3].map((e) => t[n + 16 + e]);
    if (i < 0 || c & CE || p < 0 || m[0] === 255) continue;
    let h = r.getInt32(n + 36, !0) + 1,
      g = r.getInt32(n + 40, !0) + 1;
    if (h <= 0 || g <= 0 || h > 1024 || g > 1024) continue;
    let _ = Math.floor(p / 4);
    if (_ + h * g > u) continue;
    let v = m.indexOf(255),
      y = m.slice(0, v < 0 ? 4 : v);
    (y.length > 1 && f++,
      d.push({
        face: e,
        w: h,
        h: g,
        first: _,
        styles: y,
        bumped: (c & wE) !== 0,
      }));
  }
  if (f === 0) return n(`no switchable light styles`);
  let p = s.ofs;
  if (
    !d.some((e) => {
      for (let n = e.first; n < e.first + e.w * e.h; n++) {
        let e = s.ofs + n * 4;
        if (
          Math.max(t[e], t[e + 1], t[e + 2]) * 2 ** ((t[e + 3] << 24) >> 24) >=
          1
        )
          return !0;
      }
      return !1;
    })
  )
    return n(`fullbright map`, f);
  let m = d
      .map((e, t) => ({ it: e, i: t }))
      .sort((e, t) => t.it.h - e.it.h || t.it.w - e.it.w || e.i - t.i)
      .map((e) => e.it),
    h = m.reduce((e, t) => e + (t.w + 2) * (t.h + 2), 0) + 64,
    g = Math.min(4096, Math.max(256, UE(Math.floor(Math.sqrt(h * 1.15))))),
    _ = HE(m, g);
  for (; !(_.height <= Math.max(g, 4096) || g >= 16384); )
    ((g *= 2), (_ = HE(m, g)));
  let v = Math.ceil(Math.max(_.height, EE) / 4) * 4;
  if (g !== e.width || v !== e.height)
    return n(`atlas layout differs (${g}x${v} vs ${e.width}x${e.height})`, f);
  let y = zE(VE(KE(t, i(AE)))),
    b = WE(e.scale),
    x = [];
  for (let e = 0; e < m.length; e++) {
    let t = m[e];
    if (t.styles.length < 2) continue;
    let n = t.styles.map((e) => BE(y, e)),
      r = t.bumped ? 4 : 1,
      i = t.w * t.h;
    t.styles.some((e, n) => t.first + (n * r + 1) * i > u) ||
      (n[0] === 1 && n.slice(1).every((e) => e === 0)) ||
      x.push({ it: t, x: _.pos[e][0], y: _.pos[e][1], weights: n });
  }
  let S = e.data,
    C = new Int16Array(kE.length * 256).fill(-1),
    w = (e, t) => {
      let n = (t << 8) | e;
      return C[n] >= 0 ? C[n] : (C[n] = b(e * kE[t]));
    };
  for (let { it: r, x: i, y: a } of x)
    for (let o = 0; o < r.h; o++)
      for (let c = 0; c < r.w; c++) {
        let l = s.ofs + (r.first + o * r.w + c) * 4,
          u = Math.min(OE, Math.max(DE, (t[l + 3] << 24) >> 24)) - DE,
          d = ((a + TE + o) * e.width + i + TE + c) * 4;
        for (let e = 0; e < 3; e++)
          if (Math.abs(S[d + e] - w(t[l + e], u)) > 1)
            return n(
              `atlas block of face ${r.face} doesn't match its style-0 light`,
              f,
            );
      }
  for (let { it: n, x: r, y: i, weights: a } of x) {
    let o = n.bumped ? 4 : 1,
      s = n.w * n.h,
      c = new Float64Array(s * 3);
    for (let e = 0; e < a.length; e++) {
      let r = a[e];
      if (r === 0) continue;
      let i = p + (n.first + e * o * s) * 4;
      for (let e = 0; e < s * 3; e += 3, i += 4) {
        let n = r * kE[Math.min(OE, Math.max(DE, (t[i + 3] << 24) >> 24)) - DE];
        ((c[e] += t[i] * n),
          (c[e + 1] += t[i + 1] * n),
          (c[e + 2] += t[i + 2] * n));
      }
    }
    let l = new Uint8Array(s * 3);
    for (let e = 0; e < s * 3; e++) l[e] = b(c[e]);
    for (let t = 0; t < n.h + 2; t++) {
      let a = Math.min(n.h - 1, Math.max(0, t - TE));
      for (let o = 0; o < n.w + 2; o++) {
        let s = Math.min(n.w - 1, Math.max(0, o - TE)),
          c = (a * n.w + s) * 3,
          u = ((i + t) * e.width + r + o) * 4;
        ((S[u] = l[c]),
          (S[u + 1] = l[c + 1]),
          (S[u + 2] = l[c + 2]),
          (S[u + 3] = 255));
      }
    }
  }
  return { faces: x.length, styledFaces: f };
}
function KE(e, t) {
  if (t.compressed || t.len <= 0) return ``;
  let n = t.ofs + t.len;
  for (; n > t.ofs && e[n - 1] === 0; ) n--;
  let r = ``;
  for (let i = t.ofs; i < n; i += 32768)
    r += String.fromCharCode(...e.subarray(i, Math.min(n, i + 32768)));
  return r;
}
var qE = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4),
  JE = Float32Array.from({ length: 256 }, (e, t) => qE(t / 255));
function YE(e) {
  let t = e,
    n = e.colorSpace === ft,
    r = (e) => (n ? JE[e] : e / 255),
    i = 0,
    a = 0,
    o = 0,
    s = 0,
    c = 0;
  if (t.isCompressedTexture) {
    let e = t.mipmaps;
    if (!e?.length) return null;
    let n = e[0];
    for (let t of e) t.width >= 4 && t.height >= 4 && (n = t);
    let l = t.format,
      u = l === 33776 || l === 33777,
      d = u ? 8 : 16,
      f = Math.floor(n.data.length / d),
      p = Math.max(1, Math.floor(f / 1024)),
      m = new Float32Array(16),
      h = new Float32Array(8);
    for (let e = 0; e < f; e += p) {
      let t = e * d,
        f = n.data,
        p = u ? t : t + 8,
        g = f[p] | (f[p + 1] << 8),
        _ = f[p + 2] | (f[p + 3] << 8);
      for (let [e, t] of [
        [0, g],
        [1, _],
      ])
        ((m[e * 4] = ((t >> 11) & 31) / 31),
          (m[e * 4 + 1] = ((t >> 5) & 63) / 63),
          (m[e * 4 + 2] = (t & 31) / 31),
          (m[e * 4 + 3] = 1));
      let v = !u || g > _;
      for (let e = 0; e < 3; e++) {
        let t = m[e],
          n = m[4 + e];
        ((m[8 + e] = v ? (2 * t + n) / 3 : (t + n) / 2),
          (m[12 + e] = v ? (t + 2 * n) / 3 : 0));
      }
      if (((m[11] = 1), (m[15] = v ? 1 : l === 33777 ? 0 : 1), l === 33779)) {
        let e = f[t] / 255,
          n = f[t + 1] / 255;
        ((h[0] = e), (h[1] = n));
        for (let t = 2; t < 8; t++)
          h[t] =
            e > n
              ? ((8 - t) * e + (t - 1) * n) / 7
              : t < 6
                ? ((6 - t) * e + (t - 1) * n) / 5
                : t === 6
                  ? 0
                  : 1;
      }
      let y =
        f[p + 4] | (f[p + 5] << 8) | (f[p + 6] << 16) | (f[p + 7] * 16777216);
      for (let e = 0; e < 16; e++) {
        let n = (y >>> (e * 2)) & 3;
        ((i += r(Math.round(m[n * 4] * 255))),
          (a += r(Math.round(m[n * 4 + 1] * 255))),
          (o += r(Math.round(m[n * 4 + 2] * 255))));
        let u = m[n * 4 + 3];
        if (l === 33778) u = ((f[t + (e >> 1)] >> ((e & 1) * 4)) & 15) / 15;
        else if (l === 33779) {
          let n = e * 3,
            r = t + 2 + (n >> 3);
          u = h[((f[r] | ((f[r + 1] ?? 0) << 8)) >> (n & 7)) & 7];
        }
        ((s += u), c++);
      }
    }
  } else {
    let t = e.image,
      n = t?.data;
    if (!n || !t.width || !t.height) return null;
    let l = t.width * t.height,
      u = Math.max(1, Math.floor(l / 4096));
    for (let e = 0; e < l; e += u)
      ((i += r(n[e * 4])),
        (a += r(n[e * 4 + 1])),
        (o += r(n[e * 4 + 2])),
        (s += n[e * 4 + 3] / 255),
        c++);
  }
  return c ? [i / c, a / c, o / c, s / c] : null;
}
function XE(e, t, n, r) {
  let i = e.getIndex().array,
    a = new Map();
  for (let t of e.groups) {
    let e = n(t.materialIndex ?? 0);
    e &&
      (
        a.get(e.key) ?? a.set(e.key, { slot: e, ranges: [] }).get(e.key)
      ).ranges.push([t.start, t.count]);
  }
  let o = 0;
  for (let e of a.values()) for (let [, t] of e.ranges) o += t;
  let s = new Uint32Array(o),
    c = new oi();
  for (let [t, n] of Object.entries(e.attributes)) c.setAttribute(t, n);
  t && c.setAttribute(`color`, t);
  let l = [],
    u = 0;
  for (let [e, t] of a) {
    let n = u;
    for (let [e, n] of t.ranges) (s.set(i.subarray(e, e + n), u), (u += n));
    let a = r.get(e);
    (a || r.set(e, (a = t.slot.material())),
      c.addGroup(n, u - n, l.length),
      l.push(a));
  }
  return (c.setIndex(new Kr(s, 1)), { geometry: c, materials: l });
}
var ZE = 64;
function QE(e) {
  return (
    (e.onBeforeCompile = (e) => {
      ((e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
varying vec3 vGridPos;
varying vec3 vGridN;`,
        )
        .replace(
          `#include <project_vertex>`,
          `#include <project_vertex>
  vGridPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vGridN = mat3(modelMatrix) * normal;`,
        )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vGridPos;
varying vec3 vGridN;`,
          )
          .replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
  {
    vec3 an = abs(vGridN);
    vec2 q = (an.x > an.y && an.x > an.z ? vGridPos.yz : an.y > an.z ? vGridPos.xz : vGridPos.xy) / ${ZE.toFixed(1)};
    vec2 w = fwidth(q);
    vec2 d = abs(fract(q - 0.5) - 0.5) / max(w, vec2(1e-4));
    float line = 1.0 - clamp(min(d.x, d.y) - 0.5, 0.0, 1.0);
    float fade = 1.0 - smoothstep(0.08, 0.3, max(w.x, w.y));
    diffuseColor.rgb *= 1.0 - 0.16 * line * fade;
  }`,
          )));
    }),
    (e.customProgramCacheKey = () => `potato-grid`),
    e
  );
}
var $E = { [i.DXT1]: Se, [i.DXT1A]: Ce, [i.DXT3]: we, [i.DXT5]: Te };
function eD(e, t, n = ft) {
  let r = e.levels[0],
    a;
  if (e.format === i.RGBA8)
    ((a = new la(r.data, r.width, r.height, me, A)),
      (a.generateMipmaps = !0),
      (a.minFilter = k));
  else {
    let t = e.levels.map((e) => ({
      data: e.data,
      width: e.width,
      height: e.height,
    }));
    ((a = new Ka(t, r.width, r.height, $E[e.format])),
      (a.generateMipmaps = !1),
      (a.minFilter = t.length > 1 ? k : D));
  }
  return (
    (a.magFilter = D),
    (a.wrapS = a.wrapT = x),
    (a.colorSpace = n),
    (a.anisotropy = t.anisotropy),
    (a.needsUpdate = !0),
    a
  );
}
function tD(e) {
  let t = new la(e.data, e.width, e.height, me, A);
  return (
    (t.colorSpace = ft),
    (t.minFilter = D),
    (t.magFilter = D),
    (t.generateMipmaps = !1),
    (t.channel = 1),
    (t.needsUpdate = !0),
    t
  );
}
function nD(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return ((t >>> 0) % 360) / 360;
}
function rD(e) {
  return e
    .replace(/^maps\/[^/]+\//, ``)
    .replace(/_-?\d+_-?\d+_-?\d+$/, ``)
    .replace(/_wvt_patch$/, ``);
}
var iD = null;
function aD(e) {
  if (iD) return iD;
  let t = document.createElement(`canvas`);
  t.width = t.height = 64;
  let n = t.getContext(`2d`);
  return (
    (n.fillStyle = `#c8c8c8`),
    n.fillRect(0, 0, 64, 64),
    (n.fillStyle = `#b4b4b4`),
    n.fillRect(0, 0, 32, 32),
    n.fillRect(32, 32, 32, 32),
    (n.strokeStyle = `#9a9a9a`),
    n.strokeRect(0.5, 0.5, 63, 63),
    (iD = new Ja(t)),
    (iD.wrapS = iD.wrapT = x),
    (iD.colorSpace = ft),
    (iD.anisotropy = e),
    iD
  );
}
function oD(e, t, n, r) {
  let i = rD(e.name),
    a = new P().setHSL(nD(i), 0.12, 0.62, ft);
  return /glass|window/.test(i)
    ? new Li({
        color: 12375782,
        transparent: !0,
        opacity: 0.3,
        depthWrite: !1,
        side: 2,
      })
    : /^(effects|decals|overlays|sprites)\//.test(i) || i.includes(`{`)
      ? new Li({ color: a, transparent: !0, opacity: 0.15, depthWrite: !1 })
      : new Li({
          map: aD(r.anisotropy),
          color: a,
          lightMap: t,
          lightMapIntensity: n,
        });
}
function sD(e, t, n, r) {
  let i = !!(e.flags & 9),
    a = !(e.flags & 16);
  return new Li({
    map: t,
    color: new P(...e.color),
    lightMap: a ? n : null,
    lightMapIntensity: r,
    transparent: i,
    opacity: e.alpha,
    depthWrite: !i,
    blending: e.flags & 8 ? 2 : 1,
    alphaTest: e.flags & 2 ? e.alphaRef : 0,
    side: e.flags & 4 ? 2 : 0,
  });
}
function cD(e, t, n) {
  let r = !!(e.flags & 9);
  return new Li({
    color: new P(...e.color),
    lightMap: e.flags & 16 ? null : t,
    lightMapIntensity: n,
    transparent: r,
    opacity: e.alpha,
    depthWrite: !r,
    blending: e.flags & 8 ? 2 : 1,
    side: e.flags & 4 ? 2 : 0,
  });
}
function lD(e, t, n, r) {
  if (!t && !n) return;
  let i = `${t ? `blend` : ``}${n ? `+detail` : ``}`;
  ((e.customProgramCacheKey = () => i),
    (e.onBeforeCompile = (e) => {
      let i = ``,
        a = `#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D( map, vMapUv );
`;
      (t &&
        ((e.uniforms.map2 = { value: t }),
        (i += `uniform sampler2D map2;
varying float vBlend;
`),
        (a += `  sampledDiffuseColor = mix( sampledDiffuseColor, texture2D( map2, vMapUv ), clamp( vBlend, 0.0, 1.0 ) );
`),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
attribute float blend;
varying float vBlend;`,
          )
          .replace(
            `#include <uv_vertex>`,
            `#include <uv_vertex>
  vBlend = blend;`,
          ))),
        (a += `  diffuseColor *= sampledDiffuseColor;
`),
        n &&
          ((e.uniforms.detailMap = { value: n }),
          (e.uniforms.detailScale = { value: r?.detailScale ?? 4 }),
          (e.uniforms.detailBlend = { value: r?.detailBlend ?? 1 }),
          (i += `uniform sampler2D detailMap;
uniform float detailScale;
uniform float detailBlend;
`),
          (a += `  diffuseColor.rgb *= mix( vec3( 1.0 ), texture2D( detailMap, vMapUv * detailScale ).rgb * 2.0, detailBlend );
`)),
        (a += `#endif
`),
        (e.fragmentShader = e.fragmentShader
          .replace(`#include <common>`, `#include <common>\n${i}`)
          .replace(`#include <map_fragment>`, a)));
    }));
}
var uD = new M(0.35, 0.45, 0.82).normalize();
function dD(e, t, r) {
  if (r.toLowerCase().startsWith(`tools/`)) return new Li({ visible: !1 });
  if (e?.kind === n.Glass) return qT(e);
  if (e?.kind === n.Flat)
    return new Li({ color: new P(...e.color), vertexColors: !0 });
  if (!e || !t)
    return new Li({
      color: new P().setHSL(nD(r), 0.1, 0.55, ft),
      vertexColors: !0,
    });
  let i = !!(e.flags & 9);
  return new Li({
    map: t,
    color: new P(...e.color),
    vertexColors: !0,
    transparent: i,
    opacity: e.alpha,
    depthWrite: !i,
    blending: e.flags & 8 ? 2 : 1,
    alphaTest: e.flags & 2 ? e.alphaRef : 0,
    side: e.flags & 4 ? 2 : 0,
  });
}
function fD(e, t, n) {
  let r = e.vertices.length / 8,
    i = new Float32Array(r * 3);
  for (let t = 0; t < r; t++) {
    let n = t * 8,
      r =
        0.5 +
        0.5 *
          Math.max(
            0,
            e.vertices[n + 3] * uD.x +
              e.vertices[n + 4] * uD.y +
              e.vertices[n + 5] * uD.z,
          );
    i[t * 3] = i[t * 3 + 1] = i[t * 3 + 2] = r;
  }
  let a = new si(e.vertices, 8),
    o = new oi();
  (o.setAttribute(`position`, new li(a, 3, 0)),
    o.setAttribute(`normal`, new li(a, 3, 3)),
    o.setAttribute(`uv`, new li(a, 2, 6)),
    o.setAttribute(`color`, new Kr(i, 3)),
    o.setIndex(new Kr(e.indices, 1)));
  let s = null;
  for (let t of e.groups)
    if (n && t.sky3d) {
      if (!s) {
        let e = new oi();
        for (let t of [`position`, `normal`, `uv`, `color`])
          e.setAttribute(t, o.getAttribute(t));
        (e.setIndex(o.getIndex()),
          (s = new Yi(e, n)),
          (s.name = `sky3d-props`),
          (s.frustumCulled = !1));
      }
      s.geometry.addGroup(t.firstIndex, t.indexCount, t.material);
    } else o.addGroup(t.firstIndex, t.indexCount, t.material);
  let c = new Yi(o, t);
  ((c.name = `static-props`), (c.frustumCulled = !1));
  let l = new Map();
  for (let n of e.dynamicGroups) {
    let e = l.get(n.entity);
    if (!e) {
      let r = new oi();
      for (let e of [`position`, `normal`, `uv`, `color`])
        r.setAttribute(e, o.getAttribute(e));
      (r.setIndex(o.getIndex()),
        (e = new Yi(r, t)),
        (e.name = `prop-${n.entity}`),
        (e.frustumCulled = !1),
        l.set(n.entity, e));
    }
    e.geometry.addGroup(n.firstIndex, n.indexCount, n.material);
  }
  return { mesh: c, sky: s, moving: l };
}
function pD(e) {
  let t = 1e3,
    n = [
      (e, n) => [t, -e * t, n * t],
      (e, n) => [-1e3, e * t, n * t],
      (e, n) => [e * t, t, n * t],
      (e, n) => [-e * t, -1e3, n * t],
      (e, n) => [-n * t, -e * t, t],
      (e, n) => [n * t, -e * t, -1e3],
    ],
    r = [],
    i = [],
    a = [],
    o = new oi(),
    s = [];
  (e.forEach((e, t) => {
    let c = e?.image,
      l = t < 4 && !!c?.width && c.height * 2 === c.width,
      u = r.length / 3;
    for (let [e, a] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ]) {
      let [o, s, c] = n[t](e, a);
      (r.push(o, c, -s), i.push((e + 1) / 2, l ? 1 - a : (1 - a) / 2));
    }
    (a.push(u, u + 1, u + 2, u, u + 2, u + 3),
      o.addGroup(t * 6, 6, t),
      e && ((e.wrapS = e.wrapT = S), (e.needsUpdate = !0)),
      s.push(
        e
          ? new Li({ map: e, depthWrite: !1, depthTest: !1, side: 2, fog: !1 })
          : new Li({
              color: t === 5 ? 3815994 : 9417689,
              depthWrite: !1,
              depthTest: !1,
              side: 2,
              fog: !1,
            }),
      ));
  }),
    o.setAttribute(`position`, new F(r, 3)),
    o.setAttribute(`uv`, new F(i, 2)),
    o.setIndex(a));
  let c = new Yi(o, s);
  return (
    (c.name = `skybox`),
    (c.frustumCulled = !1),
    (c.renderOrder = -1e3),
    (c.onBeforeRender = (e, t, n) => {
      (c.position.copy(n.position), c.updateMatrixWorld());
    }),
    c
  );
}
function mD() {
  let e = new Rs({
      side: 1,
      depthWrite: !1,
      depthTest: !1,
      uniforms: {
        zenith: { value: new P(4157365) },
        horizon: { value: new P(13229292) },
        ground: { value: new P(8227478) },
        sunDir: { value: new M(0.45, 0.35, -0.6).normalize() },
      },
      vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,
      fragmentShader: `
      uniform vec3 zenith, horizon, ground, sunDir;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0
          ? mix(horizon, zenith, pow(d.y, 0.55))
          : mix(horizon, ground, pow(min(-d.y * 3.0, 1.0), 0.7));
        float sun = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.92, 0.75) * (pow(sun, 600.0) * 1.5 + pow(sun, 12.0) * 0.18);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
    }),
    t = new Yi(new Os(1e3, 32, 16), e);
  return (
    (t.frustumCulled = !1),
    (t.renderOrder = -1e3),
    (t.onBeforeRender = (e, n, r) => {
      (t.position.copy(r.position), t.updateMatrixWorld());
    }),
    t
  );
}
var hD = -999;
function gD(e) {
  let t = new Map();
  if (!e.indices.length) return t;
  let n = new Li({
    colorWrite: !1,
    depthWrite: !0,
    depthTest: !0,
    fog: !1,
    polygonOffset: !0,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 2,
  });
  n.name = `sky-faces`;
  let r = new Kr(e.vertices, 3),
    i = new Kr(e.indices, 1);
  for (let a of e.groups) {
    let e = new oi();
    (e.setAttribute(`position`, r),
      e.setIndex(i),
      e.addGroup(a.firstIndex, a.indexCount, 0));
    let o = new Yi(e, [n]);
    ((o.name = `sky-faces`),
      (o.frustumCulled = !1),
      (o.renderOrder = hD),
      t.set(a.model, o));
  }
  return t;
}
var _D = -999.5;
function vD(e, t) {
  let n = e.blending === 2,
    r = e.onBeforeCompile,
    i = e.customProgramCacheKey;
  return (
    (e.onBeforeCompile = (i, a) => {
      (r.call(e, i, a),
        Object.assign(i.uniforms, t),
        (i.vertexShader = i.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying float vSkyFogDepth;`,
          )
          .replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
  vSkyFogDepth = - mvPosition.z;`,
          )));
      let o = n ? `vec3( 0.0 )` : `uSkyFogColor`;
      i.fragmentShader = i.fragmentShader
        .replace(
          `#include <common>`,
          `#include <common>
uniform vec3 uSkyFogColor;
uniform vec3 uSkyFogRange;
varying float vSkyFogDepth;`,
        )
        .replace(
          `#include <fog_fragment>`,
          `gl_FragColor.rgb = mix( gl_FragColor.rgb, ${o}, clamp( min( uSkyFogRange.z, ( vSkyFogDepth - uSkyFogRange.x ) / max( uSkyFogRange.y - uSkyFogRange.x, 1e-3 ) ), 0.0, 1.0 ) );\n#include <fog_fragment>`,
        );
    }),
    (e.customProgramCacheKey = () => `${i.call(e)}+skyfog${n ? `-add` : ``}`),
    e
  );
}
function yD(e) {
  let t = 0;
  return (
    e.traverse((e) => {
      let n = e;
      n.isMesh && (t += Math.max(1, n.geometry.groups.length));
    }),
    t
  );
}
var bD = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4);
function xD(e, t, n, r, i, a) {
  let o = new oi();
  o.setAttribute(`position`, new F([], 3));
  let s = new Yi(
    o,
    new Li({ colorWrite: !1, depthWrite: !1, depthTest: !1, fog: !1 }),
  );
  ((s.name = `sky3d-pass`), (s.frustumCulled = !1), (s.renderOrder = _D));
  let c = new mc();
  c.layers.set(1);
  let l = new M(),
    u = new cn(),
    d = new M(),
    f = new M(),
    p = new N(),
    m = new M(...n.origin),
    h = new M(...n.fog.dir).normalize(),
    g = !1;
  return (
    (s.onBeforeRender = (o, s, _) => {
      if (!i.enabled || g || s.overrideMaterial || !_.isPerspectiveCamera)
        return;
      if (
        ((g = !0),
        _.matrixWorld.decompose(l, u, d),
        p.copy(e.matrixWorld).invert(),
        l
          .applyMatrix4(p)
          .divideScalar(n.scale)
          .add(m)
          .applyMatrix4(e.matrixWorld),
        c.position.copy(l),
        c.quaternion.copy(u),
        c.updateMatrixWorld(),
        c.projectionMatrix.copy(_.projectionMatrix),
        c.projectionMatrixInverse.copy(_.projectionMatrixInverse),
        r)
      ) {
        let e = n.fog.color;
        if (n.fog.blend) {
          _.getWorldDirection(f).transformDirection(p);
          let t = 0.5 * f.dot(h) + 0.5;
          e = [0, 1, 2].map(
            (e) => n.fog.color[e] * t + n.fog.color2[e] * (1 - t),
          );
        }
        let t = o.getRenderTarget() !== null || o.outputColorSpace !== `srgb`;
        r.uSkyFogColor.value.set(...e.map((e) => (t ? bD(e / 255) : e / 255)));
      }
      let v = o.autoClear;
      o.autoClear = !1;
      try {
        (a(c), o.render(t, c));
      } finally {
        ((o.autoClear = v), (g = !1), a(_));
      }
      o.clearDepth();
    }),
    s
  );
}
async function SD(t, r, i = {}) {
  let a = performance.now(),
    o = await VT(t, { ...i.content, bsp: i.bsp }).catch(
      (e) => (
        console.warn(`game content:`, e),
        { sky: null, extra: [], propMaterials: [] }
      ),
    ),
    { vertices: s, indices: c, stride: l, groups: u, materials: d } = t.mesh(),
    f = {
      s3tc:
        !new URLSearchParams(location.search).has(`nos3tc`) &&
        r.extensions.has(`WEBGL_compressed_texture_s3tc`) &&
        r.extensions.has(`WEBGL_compressed_texture_s3tc_srgb`),
      anisotropy: Math.min(8, r.capabilities.getMaxAnisotropy()),
    },
    p = t.lightmap(),
    m =
      i.bsp && !new URLSearchParams(location.search).has(`nolightstyles`)
        ? GE(p, i.bsp)
        : null;
  m?.skipped &&
    m.styledFaces &&
    console.warn(`light styles not applied: ${m.skipped}`);
  let h = tD(p),
    g = Math.PI / p.scale,
    _ = (() => {
      let e = t.materials(),
        r = t.materialExtras(),
        i = new Set();
      for (let t of e) t.texture >= 0 && t.flags & 3 && i.add(t.texture);
      let a = new Map(),
        s = (e, n = ft) => {
          let r = `${e}:${n}`;
          if (!a.has(r)) {
            let o = t.texture(e, f.s3tc, i.has(e));
            (o || console.warn(`texture decode failed:`, t.lastError()),
              a.set(r, o ? eD(o, f, n) : null));
          }
          return a.get(r);
        },
        c = t.materialWater(),
        l = e.some((e, t) => e.kind === n.Water && c[t]?.aboveWater === !1),
        u = t.waterVolumes().length > 0,
        p = (e) => (u ? WT(e) : e),
        m = (t, i) => {
          let a = d[t],
            o = e[t];
          if (o?.kind === n.Water)
            return KT(o, c[t], { doubleSided: !l && c[t]?.aboveWater !== !1 });
          if (o?.kind === n.Glass) return qT(o);
          if (o?.kind === n.Flat) return i(cD(o, h, g));
          let u = o && o.texture >= 0 ? s(o.texture) : null;
          if (!u) return i(oD(a, h, g, f));
          let p = sD(o, u, h, g),
            m = r[t];
          return (
            lD(
              p,
              m && m.texture2 >= 0 ? s(m.texture2) : null,
              m && m.detail >= 0 ? s(m.detail, ``) : null,
              m,
            ),
            i(p)
          );
        },
        _ = d.map((e, t) => m(t, p)),
        v = o.extra.length,
        y = (v === 6 ? e.slice(d.length, d.length + 6) : []).map((e) =>
          e.texture >= 0 ? s(e.texture) : null,
        ),
        b = y.length && y.slice(0, 4).every(Boolean) ? pD(y) : mD();
      if (u && b.name === `skybox`)
        for (let e of b.material) WT(e, { sky: !0 });
      let x = (t, n) => {
        let r = e[d.length + v + t],
          i = dD(
            r,
            r && r.texture >= 0 ? s(r.texture) : null,
            o.propMaterials[t],
          );
        return i instanceof Rs ? i : n(i);
      };
      return {
        mats: _,
        sky: b,
        propMats: o.propMaterials.map((e, t) => x(t, p)),
        textures: a,
        missing: e.slice(0, d.length).filter((e) => e.kind === n.Missing)
          .length,
        worldMaterial: m,
        propMaterialAt: x,
        descs: e,
        texture: s,
        water: c,
        hasBeneath: l,
        skyCount: v,
        skyFaces: y,
      };
    })(),
    v = t.materials(),
    y = t.materialWater(),
    b = [];
  for (let e of u) {
    let t = v[e.material];
    if (t?.kind === n.Water && y[e.material]?.aboveWater !== !1)
      for (let n = e.firstIndex; n < e.firstIndex + e.indexCount; n += 3) {
        let [r, i, a] = [c[n] * l, c[n + 1] * l, c[n + 2] * l];
        s[r + 5] < 0.9 ||
          b.push({
            x: (s[r] + s[i] + s[a]) / 3,
            y: (s[r + 1] + s[i + 1] + s[a + 1]) / 3,
            z: (s[r + 2] + s[i + 2] + s[a + 2]) / 3,
            desc: t,
            params: y[e.material],
          });
      }
  }
  let x = JT(t.waterVolumes(), b),
    S = _.sky.onBeforeRender;
  _.sky.onBeforeRender = (e, t, n, r, i, a) => {
    (S.call(_.sky, e, t, n, r, i, a), cE(x, n));
  };
  let C = new si(s, l),
    w = new li(C, 3, 0),
    T = new li(C, 3, 3),
    E = new li(C, 2, 6),
    D = new li(C, 2, 8),
    O = t.meshBlend(),
    k = O && O.length * l === s.length ? new Kr(O, 1) : null,
    A = new Kr(c, 1),
    ee = new ar();
  ee.rotation.x = -Math.PI / 2;
  let te = new URLSearchParams(location.search),
    ne = te.get(`sky3d`) === `0` ? null : t.skyCamera(),
    re = new ar();
  re.name = `sky3d`;
  let ie =
      ne?.fog.enable && ne.fog.end > ne.fog.start && te.get(`sky3dfog`) !== `0`
        ? {
            uSkyFogColor: { value: new M(1, 1, 1) },
            uSkyFogRange: {
              value: new M(
                ne.fog.start / ne.scale,
                ne.fog.end / ne.scale,
                ne.fog.maxDensity,
              ),
            },
          }
        : null,
    ae = (e, t, n) => {
      if (!ie) return e;
      let r = e.slice();
      for (let i of t) r[i] = e[i] instanceof Rs ? e[i] : n(i);
      return r;
    },
    oe = ae(
      _.mats,
      new Set(u.filter((e) => ne && e.sky3d).map((e) => e.material)),
      (e) => _.worldMaterial(e, (e) => vD(e, ie)),
    ),
    se = new Map(),
    ce = new Map(),
    le = [];
  for (let e of u) {
    let t = !!ne && !!e.sky3d,
      n = t && e.model === 0 ? ce : se,
      r = n.get(e.model);
    if (!r) {
      let i = new oi();
      (i.setAttribute(`position`, w),
        i.setAttribute(`normal`, T),
        i.setAttribute(`uv`, E),
        i.setAttribute(`uv1`, D),
        k && i.setAttribute(`blend`, k),
        i.setIndex(A),
        (r = new Yi(i, t ? oe : _.mats)),
        (r.frustumCulled = !1),
        t && (r.name = `sky3d-model-${e.model}`),
        n.set(e.model, r),
        (t ? re : ee).add(r),
        t || le.push(r));
    }
    r.geometry.addGroup(e.firstIndex, e.indexCount, e.material);
  }
  let ue = gD(
    t.skyMesh() ?? {
      vertices: new Float32Array(),
      indices: new Uint32Array(),
      groups: [],
    },
  );
  for (let [e, t] of ue) {
    let n = se.get(e);
    n ? n.add(t) : (se.set(e, t), ee.add(t));
  }
  let de = 0,
    fe = null;
  if (_.propMats.length) {
    let n = t.propsMesh();
    if (n.indices.length) {
      let t = ne
          ? ae(
              _.propMats,
              new Set(n.groups.filter((e) => e.sky3d).map((e) => e.material)),
              (e) => _.propMaterialAt(e, (e) => vD(e, ie)),
            )
          : null,
        { mesh: r, sky: i, moving: a } = fD(n, _.propMats, t);
      (ee.add(r), i && re.add(i));
      for (let [t, n] of a) (se.set(e + t, n), ee.add(n));
      ((de = n.indices.length / 3),
        (fe = { pm: n, meshes: [r, ...a.values()] }));
    }
  }
  let pe = xE(t.entities());
  pe && ee.add(pe.root);
  let me = new ar();
  me.add(_.sky, ee);
  let he =
    ne && re.children.length ? { camera: ne, root: re, enabled: !0 } : null;
  he &&
    (ee.add(re),
    re.traverse((e) => e.layers.set(1)),
    me.add(xD(ee, re, he.camera, ie, he, (e) => cE(x, e))));
  let ge = null,
    _e = !1,
    ve = () => {
      let e = performance.now(),
        { descs: t, water: r } = _,
        i = s.length / l,
        a = (e) => {
          let t = e.texture >= 0 ? _.texture(e.texture) : null,
            n = (t && YE(t)) ?? [0.5, 0.5, 0.5, 1];
          return [
            n[0] * e.color[0],
            n[1] * e.color[1],
            n[2] * e.color[2],
            n[3],
          ];
        },
        f = (e) => {
          let r = t[e];
          if (!r || r.kind === n.Missing) {
            let t = new P()
              .setHSL(nD(rD(d[e].name)), 0.12, 0.62, ft)
              .multiplyScalar(0.52);
            return [t.r, t.g, t.b, 1];
          }
          return r.kind === n.Flat ? [...r.color, 1] : a(r);
        },
        p = d.map((e, t) => f(t)),
        m = new Float32Array(i * 3);
      for (let e of u) {
        let t = p[e.material];
        for (let n = e.firstIndex; n < e.firstIndex + e.indexCount; n++) {
          let e = c[n] * 3;
          ((m[e] = t[0]), (m[e + 1] = t[1]), (m[e + 2] = t[2]));
        }
      }
      let v = new Kr(m, 3),
        y = (e, t, n) =>
          new Li({
            color: new P(e[0], e[1], e[2]),
            lightMap: n ? h : null,
            lightMapIntensity: g,
            transparent: !0,
            opacity: t.alpha * e[3],
            depthWrite: !1,
            blending: t.flags & 8 ? 2 : 1,
            side: t.flags & 4 ? 2 : 0,
          }),
        b = (e, t, n) =>
          new Li({
            color: e,
            transparent: !0,
            opacity: t,
            depthWrite: !1,
            side: n,
            polygonOffset: !0,
            polygonOffsetFactor: -1,
            polygonOffsetUnits: -4,
          }),
        x = (e, t) => () =>
          QE(
            new Li({
              vertexColors: !0,
              lightMap: e ? h : null,
              lightMapIntensity: g,
              side: t,
            }),
          ),
        S = (e) => {
          let i = t[e],
            a = rD(d[e].name);
          if (!i || i.kind === n.Missing)
            return /^(effects|decals|overlays|sprites)\//.test(a) ||
              a.includes(`{`)
              ? null
              : /glass|window/.test(a)
                ? { key: `g${e}`, material: () => b(12375782, 0.3, 2) }
                : { key: `lit`, material: x(!0, 0) };
          if (i.kind === n.Water) {
            let t = new P(4026252).lerp(new P(...i.color), 0.45),
              n = !_.hasBeneath && r[e]?.aboveWater !== !1 ? 2 : 0;
            return { key: `w${e}`, material: () => b(t, 0.6, n) };
          }
          if (i.kind === n.Glass)
            return {
              key: `g${e}`,
              material: () => b(new P(...i.color), 0.3, 0),
            };
          let o = !(i.flags & 16),
            s = i.flags & 4 ? 2 : 0;
          if (i.flags & 9)
            return /^(decals|overlays)\//.test(a)
              ? null
              : { key: `t${e}`, material: () => y(p[e], i, o) };
          let c =
            i.kind === n.Textured && i.texture >= 0
              ? _.texture(i.texture)
              : null;
          return i.flags & 2 && c
            ? { key: `a${e}`, material: () => sD(i, c, h, g) }
            : {
                key: `${o ? `lit` : `unlit`}${s === 2 ? `2` : ``}`,
                material: x(o, s),
              };
        },
        C = new Map(),
        w = [],
        T = 0,
        E = 0;
      for (let e of le) {
        let t = XE(e.geometry, v, S, C);
        (w.push({
          mesh: e,
          normal: [e.geometry, e.material],
          potato: [t.geometry, t.materials],
        }),
          (T += e.geometry.groups.length),
          (E += t.geometry.groups.length));
      }
      if (fe) {
        let { pm: e, meshes: r } = fe,
          i = d.length + _.skyCount,
          s = o.propMaterials.map((e, n) =>
            t[i + n] ? a(t[i + n]) : [0.45, 0.45, 0.45, 1],
          ),
          c = r[0].geometry.getAttribute(`color`).array,
          l = new Float32Array(c.length);
        for (let t of [...e.groups, ...e.dynamicGroups]) {
          let n = s[t.material];
          for (let r = t.firstIndex; r < t.firstIndex + t.indexCount; r++) {
            let t = e.indices[r] * 3;
            ((l[t] = c[t] * n[0]),
              (l[t + 1] = c[t + 1] * n[1]),
              (l[t + 2] = c[t + 2] * n[2]));
          }
        }
        let u = new Kr(l, 3),
          f = (e) => {
            let r = t[i + e],
              a = o.propMaterials[e];
            if (a.toLowerCase().startsWith(`tools/`)) return null;
            if (r?.kind === n.Glass)
              return {
                key: `pg${e}`,
                material: () => b(new P(...r.color), 0.3, 0),
              };
            let c = r && r.flags & 4 ? 2 : 0,
              l =
                r && r.kind === n.Textured && r.texture >= 0
                  ? _.texture(r.texture)
                  : null;
            return r && r.flags & 2 && l
              ? {
                  key: `pa${e}`,
                  material: () => {
                    let t = dD(r, l, a),
                      n = s[e];
                    return (
                      t.color.multiply(
                        new P(
                          1 / Math.max(n[0], 0.02),
                          1 / Math.max(n[1], 0.02),
                          1 / Math.max(n[2], 0.02),
                        ),
                      ),
                      t
                    );
                  },
                }
              : r && r.flags & 9
                ? {
                    key: `pt${e}`,
                    material: () =>
                      new Li({
                        vertexColors: !0,
                        transparent: !0,
                        opacity: r.alpha * s[e][3],
                        depthWrite: !1,
                        blending: r.flags & 8 ? 2 : 1,
                        side: c,
                      }),
                  }
                : {
                    key: `prop${c === 2 ? `2` : ``}`,
                    material: () => new Li({ vertexColors: !0, side: c }),
                  };
          },
          p = new Map();
        for (let e of r) {
          let t = XE(e.geometry, u, f, p);
          (w.push({
            mesh: e,
            normal: [e.geometry, e.material],
            potato: [t.geometry, t.materials],
          }),
            (T += e.geometry.groups.length),
            (E += t.geometry.groups.length));
        }
      }
      let D = _.skyFaces
          .slice(0, 4)
          .map((e) => (e ? YE(e) : null))
          .filter((e) => !!e),
        O = new Li({
          color: D.length
            ? new P(
                ...[0, 1, 2].map(
                  (e) => D.reduce((t, n) => t + n[e], 0) / D.length,
                ),
              )
            : new P(10337240),
          depthWrite: !1,
          depthTest: !1,
          side: 2,
          fog: !1,
        }),
        k = _.sky.material,
        A = Array.isArray(k) ? k.map(() => O) : O;
      return (
        console.info(
          `potato: ${T} → ${E} draws, built in ${(performance.now() - e).toFixed(0)} ms`,
        ),
        {
          set(e) {
            for (let t of w)
              [t.mesh.geometry, t.mesh.material] = e ? t.potato : t.normal;
            ((_.sky.material = e ? A : k),
              he && (he.enabled = !e),
              pe && (pe.root.visible = !e));
          },
        }
      );
    };
  return (
    console.info(
      `world: ${d.length} materials (${_.missing} missing), ${t.textureCount()} textures (${f.s3tc ? `S3TC` : `RGBA`}), sky ${_.sky.name === `skybox` ? o.sky : `gradient`}, props ${de} tris / ${_.propMats.length} materials, sky faces ${[...ue.values()].reduce((e, t) => e + t.geometry.groups[0].count / 3, 0)} tris,` +
        (pe ? ` ${pe.count} sprite trails,` : ``) +
        (he && ne
          ? ` 3D skybox (scale ${ne.scale}${ie ? `, fog` : ``}) ≤${yD(re)} draws,`
          : ``) +
        ` lightmap ${p.width}x${p.height}${m?.faces ? ` (+light styles on ${m.faces} faces)` : ``}, built in ${(performance.now() - a).toFixed(0)} ms`,
    ),
    {
      root: me,
      skyFaces: [...ue.values()],
      sky3d: he,
      update(e) {
        let t = Math.PI / 180;
        for (let [n, r] of e) {
          let e = se.get(n);
          e &&
            (e.position.set(r[0], r[1], r[2]),
            e.rotation.set(r[5] * t, r[3] * t, r[4] * t, `ZYX`),
            r.length > 6 && (e.visible = r[6] !== 0));
        }
        pe?.update(e, performance.now() / 1e3);
      },
      setPotato(e) {
        e !== _e && ((_e = e), (ge ??= ve()).set(e));
      },
    }
  );
}
var CD = `
attribute vec4 aTangent;
varying vec2 vUv;
varying vec3 vNormalW;
varying vec4 vTangentW;
varying vec3 vWorldPos;
#include <common>
#include <skinning_pars_vertex>
void main() {
  vUv = uv;
  #include <beginnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <begin_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  vec3 objT = aTangent.xyz;
  #ifdef USE_SKINNING
    objT = (skinMatrix * vec4(objT, 0.0)).xyz;
  #endif
  vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vNormalW = normalize(mat3(modelMatrix) * objectNormal);
  vTangentW = vec4(normalize(mat3(modelMatrix) * objT), aTangent.w);
}`,
  wD = `
uniform vec3 uAxisA, uAxisB;
uniform vec2 uNearFade;
float nearFade() {
  if (uNearFade.y <= uNearFade.x) return 1.0;
  vec3 ab = uAxisB - uAxisA;
  float h = clamp(dot(cameraPosition - uAxisA, ab) / max(dot(ab, ab), 1e-3), 0.0, 1.0);
  float d = length(cameraPosition - (uAxisA + ab * h));
  return smoothstep(uNearFade.x, uNearFade.y, d);
}
float bayer4(vec2 p) {
  ivec2 i = ivec2(mod(p, 4.0));
  int idx = i.x + i.y * 4;
  float m[16] = float[16](0., 8., 2., 10., 12., 4., 14., 6., 3., 11., 1., 9., 15., 7., 13., 5.);
  return (m[idx] + 0.5) / 16.0;
}
uniform sampler2D map;
uniform sampler2D normalMap;
uniform float uHasNormal;
varying vec2 vUv;
varying vec3 vNormalW;
varying vec4 vTangentW;
varying vec3 vWorldPos;
vec3 surfaceNormal() {
  vec3 n = normalize(vNormalW);
  if (!gl_FrontFacing) n = -n;
  if (uHasNormal > 0.5) {
    vec3 t = normalize(vTangentW.xyz - n * dot(n, vTangentW.xyz));
    vec3 b = cross(n, t) * (vTangentW.w < 0.0 ? -1.0 : 1.0);
    vec3 nm = texture2D(normalMap, vUv).xyz * 2.0 - 1.0;
    // Source normal maps are Y-down (DirectX).
    n = normalize(t * nm.x - b * nm.y + n * max(nm.z, 0.2));
  }
  return n;
}`,
  TD = `
uniform float uAlphaTest;
uniform float uTranslucent;
uniform float uPhong;
uniform float uPhongExp;
uniform float uPhongBoost;
uniform float uOpacity;
uniform float uBright;
${wD}
void main() {
  vec4 tex = texture2D(map, vUv);
  if (uAlphaTest > 0.0 && tex.a < uAlphaTest) discard;
  vec3 n = surfaceNormal();
  vec3 V = normalize(cameraPosition - vWorldPos);
  vec3 L = normalize(vec3(0.42, 0.78, 0.46));
  // Half-Lambert key (VertexLitGeneric $halflambert) + hemisphere ambient.
  float hl = dot(n, L) * 0.5 + 0.5;
  float key = hl * hl;
  vec3 sky = vec3(0.62, 0.66, 0.74), ground = vec3(0.26, 0.24, 0.23);
  vec3 ambient = mix(ground, sky, n.y * 0.5 + 0.5) * 0.85;
  vec3 col = tex.rgb * (ambient + key * vec3(1.05, 1.0, 0.92)) * uBright;
  if (uPhong > 0.5) {
    float mask = uHasNormal > 0.5 ? texture2D(normalMap, vUv).a : 1.0;
    vec3 H = normalize(L + V);
    col += pow(max(dot(n, H), 0.0), uPhongExp) * uPhongBoost * mask * 0.35 * vec3(1.0, 0.97, 0.92);
  }
  float rim = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  col += rim * 0.12 * (ambient + 0.2);
  float a = uTranslucent > 0.5 ? tex.a : 1.0;
  gl_FragColor = vec4(col, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,
  ED = `
uniform vec3 uGhost, uGhostRim;
uniform float uOpacity;
uniform float uAlphaTest;
${wD}
void main() {
  vec4 tex = texture2D(map, vUv);
  if (uAlphaTest > 0.0 && tex.a < uAlphaTest) discard;
  vec3 n = surfaceNormal();
  vec3 V = normalize(cameraPosition - vWorldPos);
  float fres = pow(1.0 - clamp(abs(dot(n, V)), 0.0, 1.0), 2.2);
  float lum = dot(tex.rgb, vec3(0.2126, 0.7152, 0.0722));
  float up = n.y * 0.5 + 0.5;
  vec3 col = uGhost * (0.25 + 0.95 * sqrt(lum)) * (0.7 + 0.45 * up);
  // Rim glow: the tint, or a second colour pushed a little further from the tint so it reads at the silhouette
  // (identical to the plain tint rim when uGhostRim == uGhost).
  vec3 rimC = uGhostRim + (uGhostRim - uGhost) * 0.6;
  col = max(col + rimC * fres * 1.6, 0.0) + vec3(1.0) * fres * fres * 0.35;
  float a = uOpacity * (0.38 + 0.62 * fres);
  a = clamp(a * nearFade(), 0.0, 1.0);
#ifdef DITHER
  if (a < bayer4(gl_FragCoord.xy) * 0.999 + 0.0005) discard;
  gl_FragColor = vec4(col, 1.0);
#else
  if (a < 0.004) discard;
  gl_FragColor = vec4(col, a);
#endif
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,
  DD = `
uniform float uOpacity;
uniform float uAlphaTest;
${wD}
void main() {
  if (uAlphaTest > 0.0 && texture2D(map, vUv).a < uAlphaTest) discard;
  if (uOpacity * nearFade() < 0.02) discard;
  gl_FragColor = vec4(0.0);
}`,
  OD = null,
  kD = null;
function AD(e) {
  return e
    ? (kD ||
        ((kD = new la(new Uint8Array([128, 128, 255, 255]), 1, 1)),
        (kD.needsUpdate = !0)),
      kD)
    : (OD ||
        ((OD = new la(new Uint8Array([150, 150, 150, 255]), 1, 1)),
        (OD.colorSpace = ft),
        (OD.needsUpdate = !0)),
      OD);
}
function jD(e, t, n) {
  return {
    ...e,
    map: { value: n.map ?? AD(!1) },
    normalMap: { value: n.normal ?? AD(!0) },
    uHasNormal: { value: +!!n.normal },
    uAlphaTest: { value: t.alphatest ? t.alphaRef : 0 },
    uTranslucent: { value: +!!t.translucent },
    uPhong: { value: +!!t.phong },
    uPhongExp: { value: Math.max(1, t.phongExponent) },
    uPhongBoost: { value: t.phongBoost },
    uBright: { value: t.selfillum ? 1.15 : 1 },
  };
}
function MD(e, t) {
  ((e.uniforms.map.value = t.map ?? AD(!1)),
    (e.uniforms.normalMap.value = t.normal ?? AD(!0)),
    (e.uniforms.uHasNormal.value = +!!t.normal));
}
function ND(e, t, n) {
  let r = t.translucent || t.additive;
  return new Rs({
    uniforms: jD(e, t, n),
    vertexShader: CD,
    fragmentShader: TD,
    side: t.nocull ? 2 : 0,
    transparent: r,
    depthWrite: !r,
    blending: t.additive ? 2 : 1,
  });
}
function PD(e, t, n, r) {
  return new Rs({
    uniforms: jD(e, t, n),
    vertexShader: CD,
    fragmentShader: ED,
    side: 0,
    transparent: !r,
    depthWrite: r,
    depthFunc: 3,
    defines: r ? { DITHER: 1 } : {},
  });
}
function FD(e, t, n) {
  return new Rs({
    uniforms: jD(e, t, n),
    vertexShader: CD,
    fragmentShader: DD,
    side: 0,
    transparent: !0,
    colorWrite: !1,
    depthWrite: !0,
  });
}
var ID = Math.PI / 180,
  LD = (e, t, n) => (e < t ? t : e > n ? n : e),
  RD = class extends fa {
    constructor(e) {
      super(
        Array.from({ length: e }, () => new ca()),
        Array.from({ length: e }, () => new N()),
      );
    }
    update() {
      this.boneTexture && (this.boneTexture.needsUpdate = !0);
    }
  },
  zD = new WeakMap();
function BD(e) {
  let t = zD.get(e);
  if (t) return t;
  let n = e.vertices,
    r = n.length / 18,
    i = new si(n, 18);
  ((t = new oi()),
    t.setAttribute(`position`, new li(i, 3, 0)),
    t.setAttribute(`normal`, new li(i, 3, 3)),
    t.setAttribute(`uv`, new li(i, 2, 6)),
    t.setAttribute(`aTangent`, new li(i, 4, 8)));
  let a = new Uint16Array(r * 4),
    o = new Float32Array(r * 4);
  for (let e = 0; e < r; e++) {
    let t = e * 18,
      r = 0;
    for (let i = 0; i < 3; i++)
      ((o[e * 4 + i] = n[t + 12 + i]),
        (a[e * 4 + i] = n[t + 15 + i]),
        (r += n[t + 12 + i]));
    r <= 0 && (o[e * 4] = 1);
  }
  return (
    t.setAttribute(`skinIndex`, new qr(a, 4)),
    t.setAttribute(`skinWeight`, new F(o, 4)),
    t.setIndex(new Kr(e.indices, 1)),
    e.info.groups.forEach(([e, n, r], i) => t.addGroup(n, r, i)),
    zD.set(e, t),
    t
  );
}
var VD = new WeakMap();
function HD(e, t, n) {
  let r = VD.get(t);
  if (r) return r;
  let a = {
      s3tc:
        n.extensions.has(`WEBGL_compressed_texture_s3tc`) &&
        n.extensions.has(`WEBGL_compressed_texture_s3tc_srgb`),
      anisotropy: Math.min(4, n.capabilities.getMaxAnisotropy()),
    },
    o = new Map(),
    s = (t, n) => {
      if (!t) return null;
      let r = `${t}|${n}`;
      if (!o.has(r)) {
        let s = e.textures.get(t, a.s3tc, !1),
          c = null;
        (s &&
          ((c = eD(s, a, n ? `` : ft)),
          (c.wrapS = c.wrapT = x),
          n && s.format === i.DXT1 && (c.userData.noAlpha = !0)),
          o.set(r, c));
      }
      return o.get(r) ?? null;
    };
  return (
    (r = t.info.groups.map(([e]) => {
      let n = t.info.materials[e];
      return { map: s(n?.base ?? null, !1), normal: s(n?.bump ?? null, !0) };
    })),
    VD.set(t, r),
    r
  );
}
var UD = class {
    asset;
    root = new ar();
    uniforms;
    kind;
    src = new ar();
    yawG = new ar();
    mesh;
    depthMesh;
    skeleton;
    weapon = null;
    bs;
    anim;
    style = `solid`;
    dither = !1;
    baseRenderOrder = 20;
    maps = null;
    weaponMaps = null;
    pose = null;
    lastPos = new M();
    hasLast = !1;
    vel = [0, 0, 0];
    snapNext = !0;
    vzHist = [];
    time = 0;
    lastJump = -1;
    airTime = 0;
    wasGrounded = !0;
    sinceGround = 0;
    lastUpdateMs = 0;
    tmp12 = new Float32Array(12);
    tp = null;
    tpW = null;
    tpBones = null;
    constructor(e, t = {}, n = Ep()) {
      ((this.asset = e), (this.uniforms = n), (this.kind = e.skin));
      let r = e.data;
      ((this.bs = new jm(r)),
        (this.anim = new Dm(r, this.bs)),
        r.warm(this.anim.sequences()));
      let i = BD(r);
      ((this.skeleton = new RD(r.bones)),
        (this.mesh = new sa(i, [])),
        (this.depthMesh = new sa(i, [])));
      let a = new N();
      for (let e of [this.mesh, this.depthMesh])
        ((e.bindMode = b),
          e.bind(this.skeleton, a),
          (e.boundingSphere = new Qr(new M(0, 0, 36), 56)),
          (e.frustumCulled = !0),
          this.yawG.add(e));
      ((this.mesh.onBeforeRender = (e) => this.ensureTextures(e)),
        e.weapon && this.buildWeapon(e.weapon),
        (this.src.rotation.x = -Math.PI / 2),
        this.src.add(this.yawG),
        this.root.add(this.src),
        (this.root.name = `player-model:${e.skin}`),
        this.setStyle(t.style ?? `solid`, t.color, t.dither));
    }
    buildWeapon(e) {
      let t = this.asset.data,
        n = new Int16Array(e.bones);
      for (let r = 0; r < e.bones; r++) n[r] = t.bone(e.info.bones[r].name);
      let r = BD(e),
        i = new RD(e.bones),
        a = new N(),
        o = () => {
          let e = new sa(r, []);
          return (
            (e.bindMode = b),
            e.bind(i, a),
            (e.boundingSphere = new Qr(new M(0, 0, 36), 60)),
            this.yawG.add(e),
            e
          );
        };
      this.weapon = {
        mesh: o(),
        depth: o(),
        skeleton: i,
        map: n,
        world: new Float32Array(e.bones * 12),
      };
    }
    ensureTextures(e) {
      this.maps ||
        ((this.maps = HD(this.asset, this.asset.data, e)),
        this.asset.weapon &&
          (this.weaponMaps = HD(this.asset, this.asset.weapon, e)),
        this.applyMaps());
    }
    applyMaps() {
      let e = (e, t) => {
        t && e.material.forEach((e, n) => t[n] && MD(e, t[n]));
      };
      (e(this.mesh, this.maps),
        e(this.depthMesh, this.maps),
        this.weapon &&
          (e(this.weapon.mesh, this.weaponMaps),
          e(this.weapon.depth, this.weaponMaps)));
    }
    materials(e, t) {
      return e.info.groups.map(([n]) => {
        let r = e.info.materials[n] ?? {
            name: ``,
            shader: ``,
            base: null,
            bump: null,
            translucent: !1,
            alphatest: !1,
            alphaRef: 0.5,
            nocull: !1,
            additive: !1,
            selfillum: !1,
            phong: !1,
            phongExponent: 5,
            phongBoost: 1,
          },
          i = { map: null, normal: null },
          a =
            t === `solid`
              ? ND(this.uniforms, r, i)
              : t === `ghost`
                ? PD(this.uniforms, r, i, this.dither)
                : FD(this.uniforms, r, i);
        return ((a.forceSinglePass = !0), a);
      });
    }
    setStyle(e, t, n = this.dither) {
      let r =
        e !== this.style || n !== this.dither || !this.mesh.material.length;
      if (
        ((this.style = e),
        (this.dither = n),
        e === `solid` && t !== void 0
          ? this.uniforms.uAccent.value.set(t)
          : e === `ghost` && t !== void 0 && this.uniforms.uGhost.value.set(t),
        r)
      ) {
        let t = (e, t) => {
            for (let t of e.material) t.dispose();
            e.material = t;
          },
          n = this.asset.data;
        (t(this.mesh, this.materials(n, e === `solid` ? `solid` : `ghost`)),
          t(this.depthMesh, this.materials(n, `depth`)),
          this.weapon &&
            this.asset.weapon &&
            (t(
              this.weapon.mesh,
              this.materials(
                this.asset.weapon,
                e === `solid` ? `solid` : `ghost`,
              ),
            ),
            t(this.weapon.depth, this.materials(this.asset.weapon, `depth`))),
          this.applyMaps());
      }
      let i = e === `ghost` && !n;
      ((this.depthMesh.visible = i),
        this.weapon && (this.weapon.depth.visible = i),
        this.setRenderOrder(this.baseRenderOrder));
    }
    get currentStyle() {
      return this.style;
    }
    setOpacity(e) {
      this.uniforms.uOpacity.value = e;
    }
    setNearFade(e, t) {
      this.uniforms.uNearFade.value.set(e, t);
    }
    setRenderOrder(e) {
      ((this.baseRenderOrder = e),
        (this.depthMesh.renderOrder = e),
        (this.mesh.renderOrder = e + 1),
        this.weapon &&
          ((this.weapon.depth.renderOrder = e),
          (this.weapon.mesh.renderOrder = e + 1)));
    }
    setState(e) {
      this.pose = e;
    }
    snap() {
      this.snapNext = !0;
    }
    get stats() {
      let e = this.anim;
      return {
        layers: this.bs.layersThisFrame,
        activity: e.activity,
        cycle: e.cycle,
        feetYaw: e.feetYaw,
        bodyYaw: e.bodyYaw,
        jumps: e.jumps,
      };
    }
    update(e) {
      let t = this.pose;
      if (!t) return;
      let n = performance.now();
      ((e = LD(e, 0, 0.1)), (this.time += e));
      let r = t.position,
        i = r[0],
        a = r[2],
        o = -r[1],
        s = this.lastPos;
      this.hasLast &&
        (s.x - i) ** 2 + (s.y - a) ** 2 + (s.z - o) ** 2 > 25600 &&
        (this.snapNext = !0);
      let c = this.snapNext;
      if (((this.snapNext = !1), t.velocity))
        ((this.vel[0] = t.velocity[0]),
          (this.vel[1] = t.velocity[1]),
          (this.vel[2] = t.velocity[2]));
      else if (this.hasLast && e > 0 && !c) {
        let t = 1 - Math.exp(-20 * e);
        ((this.vel[0] += ((i - s.x) / e - this.vel[0]) * t),
          (this.vel[1] += (-(o - s.z) / e - this.vel[1]) * t),
          (this.vel[2] += ((a - s.y) / e - this.vel[2]) * t));
      } else this.vel[0] = this.vel[1] = this.vel[2] = 0;
      if (
        (s.set(i, a, o),
        (this.hasLast = !0),
        this.root.position.set(i, a, o),
        c &&
          (this.anim.reset(),
          (this.vzHist.length = 0),
          (this.lastJump = -1),
          !t.grounded))
      ) {
        let e = (301.993 - this.vel[2]) / 800;
        e >= 0 && e < 2 && this.anim.startAirborne(e);
      }
      let l = t.jumped ?? this.detectJump(t, c, e);
      (t.attack && this.anim.fire(),
        this.anim.update(c ? 0 : e, {
          vel: this.vel,
          eyeYaw: t.yaw,
          eyePitch: t.pitch,
          ducking: t.crouched,
          onGround: t.grounded,
          jumped: l,
        }),
        this.anim.apply());
      let u = this.bs.buildMatrices(),
        d = this.asset.data;
      this.inspectLayer(t, c, e, u);
      let f = this.skeleton.boneMatrices;
      for (let e = 0; e < d.bones; e++)
        Mm(u, e * 12, d.poseToBone, e * 12, f, e * 16);
      (this.weapon &&
        this.asset.weapon &&
        this.poseWeapon(this.asset.weapon, u),
        (this.yawG.rotation.z = this.anim.feetYaw * ID),
        (this.uniforms.uAxisA.value.copy(this.root.position).y += 8),
        (this.uniforms.uAxisB.value.copy(this.root.position).y += 60),
        (this.lastUpdateMs = performance.now() - n));
    }
    inspectLayer(e, t, n, r) {
      if (!this.tp) {
        if (!e.inspect) return;
        this.tp = new Sb();
        let t = this.asset.data,
          n = this.tmp12;
        this.tpBones = {
          index: (e) => t.bone(e),
          parent: t.parent,
          count: t.bones,
          posed: (e, t) => t.set(this.tpW.subarray(e * 12, e * 12 + 12)),
          pre: (e, t) => {
            (Nm(t, 0, this.tpW, e * 12, n, 0), this.tpW.set(n, e * 12));
          },
        };
      }
      this.tpW = r;
      let i = this.tp;
      (t && i.reset(),
        e.attack && i.cancel(`attack`),
        e.inspect && i.signal(e.inspect),
        i.setHeld(!!e.inspectHeld),
        i.update(t ? 0 : n),
        i.apply(this.tpBones, this.asset.data, `ValveBiped.weapon_bone`, null));
    }
    poseWeapon(e, t) {
      let n = this.weapon,
        r = n.world,
        i = this.tmp12;
      for (let a = 0; a < e.bones; a++) {
        let o = n.map[a];
        if (o >= 0) r.set(t.subarray(o * 12, o * 12 + 12), a * 12);
        else {
          let t = e.restQ.subarray(a * 4, a * 4 + 4),
            n = e.restP.subarray(a * 3, a * 3 + 3),
            [o, s, c, l] = t;
          i.set([
            1 - 2 * s * s - 2 * c * c,
            2 * o * s - 2 * l * c,
            2 * o * c + 2 * l * s,
            n[0],
            2 * o * s + 2 * l * c,
            1 - 2 * o * o - 2 * c * c,
            2 * s * c - 2 * l * o,
            n[1],
            2 * o * c - 2 * l * s,
            2 * s * c + 2 * l * o,
            1 - 2 * o * o - 2 * s * s,
            n[2],
          ]);
          let u = e.parent[a];
          u < 0 ? r.set(i, a * 12) : Nm(r, u * 12, i, 0, r, a * 12);
        }
      }
      let a = n.skeleton.boneMatrices;
      for (let t = 0; t < e.bones; t++)
        Mm(r, t * 12, e.poseToBone, t * 12, a, t * 16);
    }
    detectJump(e, t, n) {
      let r = this.vel[2],
        i = this.time,
        a = this.vzHist;
      for (a.push({ t: i, vz: r }); a.length > 2 && i - a[0].t > 0.08; )
        a.shift();
      this.sinceGround = e.grounded ? 0 : this.sinceGround + n;
      let o = this.wasGrounded;
      if (
        ((this.wasGrounded = e.grounded),
        (this.airTime = e.grounded ? 0 : this.airTime + n),
        t || r < 120 || (this.lastJump >= 0 && i - this.lastJump < 0.2))
      )
        return !1;
      let s = r;
      for (let e of a) e.vz < s && (s = e.vz);
      let c = r - s > 220,
        l = o && !e.grounded && r > 150;
      return c || l ? ((this.lastJump = i), !0) : !1;
    }
    dispose() {
      this.root.removeFromParent();
      for (let e of [
        this.mesh,
        this.depthMesh,
        this.weapon?.mesh,
        this.weapon?.depth,
      ])
        if (e) for (let t of e.material) t.dispose();
      (this.skeleton.dispose(), this.weapon?.skeleton.dispose());
    }
  },
  WD = (e) => `models/player/${e}.mdl`,
  GD = (e) =>
    e.startsWith(`t_`)
      ? `models/weapons/w_knife_t.mdl`
      : `models/weapons/w_knife_ct.mdl`,
  KD = null,
  qD = null,
  JD = new Map(),
  YD = new Map(),
  XD = 0;
async function ZD(e) {
  let t = await crypto.subtle.digest(`SHA-256`, e);
  return [...new Uint8Array(t)]
    .map((e) => e.toString(16).padStart(2, `0`))
    .join(``);
}
function QD(e) {
  return KD && qD === e
    ? KD
    : ((qD = e),
      (KD = (async () => {
        let t = await r.create(fetch(Rc));
        return (t.contentMountListing(`player`, Object.keys(e.group.files)), t);
      })()),
      KD);
}
function $D(e) {
  return {
    readRange: () => Promise.reject(Error(`no VPKs mounted`)),
    fetchListed: async (t) => {
      let n = e.group.files[t];
      if (!n) return null;
      let r = await fetch(`${e.base}/${s(n.sha256)}`);
      if (!r.ok) throw Error(`${t}: HTTP ${r.status}`);
      let i = new Uint8Array(await r.arrayBuffer());
      if ((await ZD(i)) !== n.sha256) throw Error(`${t}: hash mismatch`);
      return ((XD += i.length), i);
    },
  };
}
var eO = Promise.resolve();
function tO(e, t, n) {
  let r = eO.then(() => nO(e, t, n));
  return ((eO = r.catch(() => void 0)), r);
}
async function nO(e, t, n) {
  let r = 0;
  if (
    (await yT(e, $D(t), [], () => {
      r ||= e.studioLoad(n);
    }),
    (r ||= e.studioLoad(n)),
    !r)
  )
    throw Error(`${n}: ${e.lastError()}`);
  return r;
}
function rO(e) {
  let t = CT();
  return !!t && WD(e) in t.group.files;
}
function iO(e) {
  let t = CT();
  if (!t) return Promise.reject(Error(`no player content`));
  let n = JD.get(e);
  return (
    n ||
      ((n = (async () => {
        let n = performance.now(),
          r = XD,
          i = await QD(t),
          a = new pm(i, await tO(i, t, WD(e))),
          o = null,
          s = GD(e);
        if (s in t.group.files)
          try {
            o = new pm(i, await tO(i, t, s));
          } catch (e) {
            console.warn(`player model: knife unavailable`, e);
          }
        let c = new Map(),
          l = {
            skin: e,
            data: a,
            weapon: o,
            textures: {
              get: (e, t, n) => {
                let r = `${e}|${t}|${n}`;
                return (
                  c.has(r) || c.set(r, i.texturePath(e, t, n)),
                  c.get(r) ?? null
                );
              },
            },
            ms: performance.now() - n,
            bytes: XD - r,
          };
        return (
          YD.set(e, l),
          console.info(
            `player model: ${e} loaded in ${l.ms.toFixed(0)} ms (${(XD / 1e6).toFixed(1)} MB of player content fetched so far; ${a.info.bones.length} bones, ${a.info.seqs.length} sequences, ${a.info.vertexCount} vertices)`,
          ),
          l
        );
      })()),
      n.catch(() => JD.delete(e)),
      JD.set(e, n)),
    n
  );
}
var aO = `models/player/cs_player_shared.mdl`,
  oO = null,
  sO = null;
function cO() {
  let e = CT();
  return !!e && `models/player/cs_player_shared.mdl` in e.group.files;
}
function lO() {
  let e = CT();
  return e
    ? (oO ||
        ((oO = (async () => {
          let t = performance.now(),
            n = XD,
            r = await QD(e),
            i = new pm(r, await tO(r, e, aO));
          return (
            (sO = i),
            console.info(
              `player model: CS:S animations loaded in ${(performance.now() - t).toFixed(0)} ms (${((XD - n) / 1e6).toFixed(1)} MB; ${i.info.bones.length} bones, ${i.info.seqs.length} sequences)`,
            ),
            i
          );
        })()),
        oO.catch(() => (oO = null))),
      oO)
    : Promise.reject(Error(`no player content`));
}
function uO() {
  return sO;
}
var dO = `models/weapons/v_knife_t.mdl`,
  fO = null,
  pO = null;
function mO() {
  let e = CT();
  return !!e && `models/weapons/v_knife_t.mdl` in e.group.files;
}
function hO() {
  let e = CT();
  return e
    ? (fO ||
        ((fO = (async () => {
          let t = performance.now(),
            n = XD,
            r = await QD(e),
            i = new pm(r, await tO(r, e, dO));
          return (
            (pO = i),
            console.info(
              `viewmodel: CS:S knife animations loaded in ${(performance.now() - t).toFixed(0)} ms (${((XD - n) / 1e6).toFixed(1)} MB; ${i.info.bones.length} bones, ${i.info.seqs.length} sequences)`,
            ),
            i
          );
        })()),
        fO.catch(() => (fO = null))),
      fO)
    : Promise.reject(Error(`no player content`));
}
function gO() {
  return pO;
}
function _O(e) {
  return YD.get(e) ?? null;
}
function vO(e) {
  let t = o.get().models,
    n =
      e.model ??
      (e.style === `ghost` && t.ghost !== `same` ? t.ghost : t.player);
  return (
    n === `css` && (n = t.team),
    n === `ct` ? (n = t.ct) : n === `t` && (n = t.t),
    n
  );
}
var yO = class {
  root = new ar();
  uniforms = Ep();
  impl;
  o;
  opacity = null;
  nearFade = null;
  renderOrder = null;
  gun = null;
  gunSilencer = !1;
  pose = null;
  wanted = ``;
  pendingSkin = null;
  updated = !1;
  disposed = !1;
  unsub = [];
  constructor(e = {}) {
    ((this.o = { ...e }),
      pT(),
      (this.root.name = `player-model`),
      (this.impl = this.bunny()),
      this.root.add(this.impl.root),
      this.choose(),
      this.syncRim(),
      this.unsub.push(o.watch(() => this.choose())),
      this.unsub.push(
        wT(() => {
          (this.choose(), this.loadAnims());
        }),
      ),
      this.unsub.push(
        f((e) => {
          !this.o.outfit && this.impl instanceof aT && this.impl.setOutfit(e);
        }),
      ),
      this.unsub.push(
        u((e) => {
          this.o.loadout === void 0 &&
            this.impl instanceof aT &&
            this.impl.setLoadout(e);
        }),
      ),
      this.unsub.push(
        uT((e) => {
          this.o.knife === void 0 &&
            this.o.loadout === void 0 &&
            this.impl instanceof aT &&
            this.impl.setKnife(e);
        }),
      ));
  }
  get kind() {
    return this.impl instanceof UD
      ? this.impl.kind
      : this.impl instanceof aT
        ? `bunny`
        : `runner`;
  }
  get bunnyModel() {
    return this.impl instanceof aT ? this.impl : null;
  }
  bunny() {
    return new aT(
      {
        ...this.o,
        outfit: this.o.outfit ?? d(),
        knife: this.knifeChoice(),
        loadout: this.o.loadout === void 0 ? l() : this.o.loadout,
      },
      this.uniforms,
      uO(),
    );
  }
  knifeChoice() {
    return this.o.knife === void 0
      ? this.o.loadout === void 0
        ? cT()
        : fT(this.o.loadout)
      : this.o.knife;
  }
  setLoadout(e) {
    ((this.o.loadout = e),
      this.impl instanceof aT &&
        (this.impl.setLoadout(e === void 0 ? l() : e),
        this.impl.setKnife(this.knifeChoice())));
  }
  setKnife(e) {
    ((this.o.knife = e),
      this.impl instanceof aT && this.impl.setKnife(this.knifeChoice()));
  }
  setGun(e) {
    ((this.gun = e), this.impl instanceof aT && this.impl.setGun(e));
  }
  setGunSilencer(e) {
    ((this.gunSilencer = e),
      this.impl instanceof aT && this.impl.setGunSilencer(e));
  }
  loadAnims() {
    if (
      !(this.impl instanceof aT) ||
      this.impl.animSource === `cs` ||
      !this.updated ||
      this.disposed
    )
      return;
    let e = uO();
    if (e) {
      this.impl.setAnimations(e);
      return;
    }
    cO() &&
      lO().then(
        (e) => {
          !this.disposed &&
            this.impl instanceof aT &&
            this.impl.setAnimations(e);
        },
        (e) =>
          console.warn(
            `player model: CS:S animations unavailable, the bunny keeps its procedural animation`,
            e,
          ),
      );
  }
  get cs() {
    return this.impl instanceof UD ? this.impl : null;
  }
  choose() {
    if (this.disposed) return;
    let e = vO(this.o);
    if (e === this.wanted) return;
    if (((this.wanted = e), (this.pendingSkin = null), e === `runner`)) {
      this.impl instanceof fm || this.swap(new fm(this.o, this.uniforms));
      return;
    }
    if (e === `bunny` || !rO(e)) {
      (e !== `bunny` && (this.wanted = ``),
        this.impl instanceof aT || this.swap(this.bunny()),
        this.loadAnims());
      return;
    }
    let t = _O(e);
    if (t) {
      this.swap(new UD(t, this.o, this.uniforms));
      return;
    }
    ((this.pendingSkin = e), this.updated && this.load());
  }
  load() {
    let e = this.pendingSkin;
    e &&
      ((this.pendingSkin = null),
      iO(e).then(
        (t) => {
          this.disposed ||
            this.wanted !== e ||
            this.swap(new UD(t, this.o, this.uniforms));
        },
        (t) =>
          console.warn(`player model: ${e} unavailable, using the bunny`, t),
      ));
  }
  swap(e) {
    let t = this.impl;
    ((this.impl = e),
      t.dispose(),
      this.root.add(e.root),
      this.syncRim(),
      this.opacity !== null && e.setOpacity(this.opacity),
      this.nearFade && e.setNearFade(...this.nearFade),
      this.renderOrder !== null && e.setRenderOrder(this.renderOrder),
      this.gun && e instanceof aT && e.setGun(this.gun),
      e instanceof aT && e.setGunSilencer(this.gunSilencer),
      this.pose &&
        (e.setState(this.pose), e.snap(), e.update(0), this.place()));
  }
  place() {
    (this.root.position.copy(this.impl.root.position),
      this.impl.root.position.set(0, 0, 0));
  }
  setStyle(e, t, n, r) {
    let i = (e === `ghost`) != (this.o.style === `ghost`);
    ((this.o.style = e),
      t === void 0
        ? r !== void 0 && (this.o.rim = r)
        : ((this.o.color = t), (this.o.rim = r ?? null)),
      n !== void 0 && (this.o.dither = n),
      this.impl.setStyle(e, t, n),
      i && ((this.wanted = ``), this.choose()),
      this.syncRim());
  }
  syncRim() {
    let e = this.uniforms;
    this.o.rim == null
      ? e.uGhostRim.value.copy(e.uGhost.value)
      : e.uGhostRim.value.set(this.o.rim);
  }
  get currentStyle() {
    return this.impl.currentStyle;
  }
  setOpacity(e) {
    ((this.opacity = e), this.impl.setOpacity(e));
  }
  setNearFade(e, t) {
    ((this.nearFade = [e, t]), this.impl.setNearFade(e, t));
  }
  setRenderOrder(e) {
    ((this.renderOrder = e), this.impl.setRenderOrder(e));
  }
  setState(e) {
    ((this.pose = e), this.impl.setState(e));
  }
  snap() {
    this.impl.snap();
  }
  update(e) {
    (this.updated || ((this.updated = !0), this.load(), this.loadAnims()),
      this.impl.update(e),
      this.place());
  }
  dispose() {
    this.disposed = !0;
    for (let e of this.unsub) e();
    ((this.unsub = []), this.impl.dispose(), this.root.removeFromParent());
  }
};
export {
  cl as $,
  pe as $n,
  wt as $r,
  Ea as $t,
  Ep as A,
  me as An,
  Os as Ar,
  jn as At,
  jf as B,
  ze as Bn,
  le as Br,
  Nt as Bt,
  k_ as C,
  za as Cn,
  Rs as Cr,
  S as Ct,
  __ as D,
  nt as Dn,
  fa as Dr,
  Xa as Dt,
  p_ as E,
  Lt as En,
  te as Er,
  vc as Et,
  up as F,
  qe as Fn,
  qr as Fr,
  Ya as Ft,
  iu as G,
  We as Gn,
  ne as Gr,
  Ta as Gt,
  Vl as H,
  Ve as Hn,
  ie as Hr,
  xs as Ht,
  dp as I,
  Ye as In,
  Jr as Ir,
  b as It,
  Tl as J,
  ke as Jn,
  Dn as Jr,
  oe as Jt,
  ru as K,
  Ze as Kn,
  j as Kr,
  yt as Kt,
  gp as L,
  Xe as Ln,
  Fs as Lr,
  vt as Lt,
  sp as M,
  Je as Mn,
  gi as Mr,
  la as Mt,
  lp as N,
  Ge as Nn,
  En as Nr,
  he as Nt,
  wh as O,
  et as On,
  sa as Or,
  qa as Ot,
  xp as P,
  Ke as Pn,
  ks as Pr,
  ge as Pt,
  ol as Q,
  Te as Qn,
  As as Qr,
  Pa as Qt,
  yp as R,
  Le as Rn,
  A as Rr,
  ao as Rt,
  K_ as S,
  Wa as Sn,
  pr as Sr,
  $a as St,
  Q as T,
  Ne as Tn,
  Es as Tr,
  gn as Tt,
  fu as U,
  He as Un,
  se as Ur,
  F as Ut,
  Nf as V,
  Be as Vn,
  ue as Vr,
  Za as Vt,
  du as W,
  Ue as Wn,
  ce as Wr,
  ae as Wt,
  U as X,
  Ce as Xn,
  kn as Xr,
  re as Xt,
  El as Y,
  Oe as Yn,
  bt as Yr,
  xa as Yt,
  _l as Z,
  we as Zn,
  sr as Zr,
  Hn as Zt,
  pb as _,
  hc as _n,
  rt as _r,
  Qa as _t,
  SD as a,
  js as ai,
  mt as an,
  Ee as ar,
  I as at,
  F_ as b,
  pi as bn,
  ft as br,
  ee as bt,
  wT as c,
  At as ci,
  N as cn,
  be as cr,
  Vc as ct,
  cT as d,
  Bs as dn,
  _e as dr,
  L as dt,
  Ct as ei,
  Ra as en,
  Qe as er,
  ll as et,
  uT as f,
  Vs as fn,
  ve as fr,
  Rc as ft,
  Ib as g,
  T as gn,
  Pe as gr,
  Or as gt,
  ux as h,
  E as hn,
  Ts as hr,
  ca as ht,
  gO as i,
  Et as ii,
  pt as in,
  De as ir,
  Yc as it,
  Np as j,
  xe as jn,
  Ai as jr,
  An as jt,
  jm as k,
  Fe as kn,
  Qr as kr,
  eo as kt,
  CT as l,
  Yi as ln,
  zs as lr,
  z as lt,
  Hw as m,
  w as mn,
  Mt as mr,
  yc as mt,
  mO as n,
  Ic as ni,
  k as nn,
  Ae as nr,
  H as nt,
  MT as o,
  jt as oi,
  sn as on,
  Se as or,
  Bc as ot,
  Ww as p,
  C as pn,
  x as pr,
  fe as pt,
  Fl as q,
  Me as qn,
  M as qr,
  ar as qt,
  hO as r,
  Ps as ri,
  O as rn,
  je as rr,
  tl as rt,
  NT as s,
  Ot as si,
  dn as sn,
  ye as sr,
  zc as st,
  yO as t,
  kt as ti,
  D as tn,
  $e as tr,
  sl as tt,
  pT as u,
  Li as un,
  Nc as ur,
  R as ut,
  Pv as v,
  Io as vn,
  tt as vr,
  Kr as vt,
  A_ as w,
  cn as wn,
  Lo as wr,
  P as wt,
  Z as x,
  ws as xn,
  ht as xr,
  Ja as xt,
  mv as y,
  mc as yn,
  Ie as yr,
  oi as yt,
  cp as z,
  Re as zn,
  de as zr,
  Vn as zt,
};
