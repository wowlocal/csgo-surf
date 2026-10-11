import {
  A as e,
  Ar as t,
  Cr as n,
  Ht as r,
  P as i,
  Pr as a,
  Sr as o,
  St as s,
  Tr as c,
  V as l,
  Z as u,
  br as d,
  cn as f,
  gt as p,
  h as m,
  j as h,
  kt as ee,
  ln as g,
  on as _,
  q as v,
  qr as y,
  qt as b,
  t as te,
  un as ne,
  vn as re,
  vt as x,
  wn as S,
  wr as ie,
  wt as C,
  xt as w,
  yt as T,
  z as E,
} from "./model-CJn1vZL3.js";
import { S as D, a as ae, r as oe, t as O } from "./loadout-DopA3xcw.js";
import { n as se, r as ce } from "./palettes-YJRmTQgw.js";
import { n as le } from "./badges-BcPRw2oa.js";
import { t as k } from "./trail-Ci5rx2WO.js";
import { t as A } from "./mesh-C0szPPnc.js";
import { t as j } from "./showcase-s3hPAh4D.js";
var M =
  (e, t = !1) =>
  () =>
    e.traverse((e) => {
      let n = e;
      if (n.isMesh) {
        t && n.geometry.dispose();
        for (let e of Array.isArray(n.material) ? n.material : [n.material])
          (e.uniforms?.uMap?.value?.dispose?.(), e.dispose());
      }
    });
function N() {
  let e = new o(),
    t = new b();
  return (e.add(t), { scene: e, pivot: t });
}
function P(e, t) {
  let n = se(t),
    r = ce(n);
  (e.uPalette.value.forEach((e, t) => e.set(r[t])),
    e.uAccent.value.set(n.accent));
}
function F() {
  let e = new f().makeBasis(new y(0, 0, 1), new y(0, -1, 0), new y(1, 0, 0));
  return new S().setFromRotationMatrix(e);
}
function I(e) {
  let { scene: t, pivot: n } = N(),
    r = new j();
  return (
    r.setKnife(l(e.knife) ?? v),
    r.setFinish(E({ finish: e.finish ?? O.finish })),
    r.setColours(e.outfit),
    r.root.quaternion.copy(
      F().premultiply(new S().setFromAxisAngle(new y(0, 0, 1), 0.62)),
    ),
    n.add(r.root),
    { scene: t, pivot: n, radius: r.radius, dispose: () => r.dispose() }
  );
}
var L = new Map();
function R(e) {
  let t = L.get(e);
  if (t) return t;
  let n = A(v, e),
    r = u(),
    i = new Set(
      r.names
        .map((e, t) =>
          /Right_(Hand|Index|Middle|Ring|Pinky|Thumb)|R_wrist/.test(e) ? t : -1,
        )
        .filter((e) => e >= 0),
    ),
    a = n.getAttribute(`skinIndex`),
    o = n.getAttribute(`skinWeight`),
    s = (e) => {
      let t = 0;
      for (let n = 1; n < 4; n++)
        o.getComponent(e, n) > o.getComponent(e, t) && (t = n);
      return a.getComponent(e, t);
    },
    c = [],
    l = n.getAttribute(`position`).count;
  for (let e = 0; e + 2 < l; e += 3)
    i.has(s(e)) && i.has(s(e + 1)) && i.has(s(e + 2)) && c.push(e);
  t = new T();
  for (let [e, r] of Object.entries(n.attributes)) {
    let n = r,
      i = new n.array.constructor(c.length * 3 * n.itemSize);
    (c.forEach((e, t) =>
      i.set(
        n.array.subarray(e * n.itemSize, (e + 3) * n.itemSize),
        t * 3 * n.itemSize,
      ),
    ),
      t.setAttribute(e, new x(i, n.itemSize, n.normalized)));
  }
  return (t.computeBoundingBox(), t.computeBoundingSphere(), L.set(e, t), t);
}
function z(t) {
  let { scene: n, pivot: r } = N(),
    a = R(ae(t.glove).style),
    o = e();
  P(o, t.outfit);
  let s = i(o, oe({ ...O, glove: t.glove }) ?? O),
    c = new g(a, h(o, s));
  c.frustumCulled = !1;
  let l = new b();
  (l.quaternion.setFromRotationMatrix(
    new f().makeBasis(new y(0, 0, -1), new y(0, -1, 0), new y(-1, 0, 0)),
  ),
    l.quaternion.premultiply(new S().setFromAxisAngle(new y(0, 0, 1), -0.32)));
  let u = a.boundingBox.getCenter(new y());
  return (
    c.position.copy(u).multiplyScalar(-1),
    l.add(c),
    r.add(l),
    {
      scene: n,
      pivot: r,
      radius: a.boundingBox.getSize(new y()).length() / 2,
      dispose: M(n),
    }
  );
}
function B(t) {
  let n = t.hat ? m(t.hat) : null;
  if (!n) throw Error(`no hat ${t.hat}`);
  let { scene: r, pivot: i } = N(),
    a = e();
  n.computeBoundingBox();
  let o = new g(n, h(a));
  o.frustumCulled = !1;
  let s = new b();
  return (
    (s.rotation.x = -Math.PI / 2),
    o.position.copy(n.boundingBox.getCenter(new y())).multiplyScalar(-1),
    s.add(o),
    i.add(s),
    {
      scene: r,
      pivot: i,
      radius: n.boundingBox.getSize(new y()).length() / 2,
      dispose: M(r),
    }
  );
}
function V(e, t) {
  let { scene: n, pivot: r } = N(),
    i = new te(
      t
        ? { model: `bunny`, style: `ghost`, color: e.color, rim: e.color2 }
        : { model: `bunny`, style: `solid`, outfit: e.outfit },
    );
  (i.setNearFade(0, 0),
    t && i.setOpacity(0.8),
    e.veil && i.bunnyModel?.setSilhouette(!0));
  let a = {
      position: [0, 0, 0],
      velocity: [0, 0, 0],
      yaw: 270,
      pitch: 4,
      crouched: !1,
      grounded: !0,
    },
    o = new b();
  o.add(i.root);
  let s = new p(),
    c = new y(),
    l = (e) => {
      (i.setState(a), i.update(e));
      let t = i.bunnyModel;
      if (!t || t.bodyBox(s).isEmpty()) return void o.position.set(0, -37, 0);
      s.getCenter(c);
      let n = _.degToRad(t.feetYaw);
      o.position.set(
        -(c.x * Math.cos(n) - c.y * Math.sin(n)),
        -c.z,
        c.x * Math.sin(n) + c.y * Math.cos(n),
      );
    };
  return (
    i.snap(),
    l(1 / 60),
    r.add(o),
    {
      scene: n,
      pivot: r,
      radius: 42,
      frame(e) {
        l(e);
      },
      dispose: () => i.dispose(),
    }
  );
}
function H(e) {
  let { scene: n, pivot: r } = N(),
    i = e.color ?? `#ffc23d`,
    a = new k(i, 120, e.color2 ?? null);
  n.add(a.mesh);
  let o = new g(new t(8, 16, 10), new ne({ color: i }));
  r.add(o);
  let s = new y(),
    c = (e, t, n) => {
      let r = -150 + (300 * e) / 119,
        i = ((((r - t) % 100) + 100) % 100) / 100;
      return n.set(r, 232 * i * (1 - i) - 58 * 0.55, 22 * Math.sin(r / 55));
    },
    l = new Float32Array(360),
    u = 0;
  return {
    scene: n,
    pivot: r,
    radius: Math.hypot(150, 58) + 8,
    frame(e, t, n) {
      ((u += e * 130), r.updateMatrixWorld(!0));
      let i = Math.max(2, Math.round(120 * n));
      for (let e = 0; e < i; e++)
        (c(e, u, s).applyMatrix4(r.matrixWorld),
          (l[e * 3] = s.x),
          (l[e * 3 + 1] = s.y),
          (l[e * 3 + 2] = s.z));
      (c(i - 1, u, o.position), a.set(l, i, t.position, 1, 10 * r.scale.x));
    },
    dispose: () => {
      (a.dispose(), o.geometry.dispose(), o.material.dispose());
    },
  };
}
var U = `
varying vec3 vN;
varying vec3 vW;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,
  ue = `
uniform vec3 uColor;
uniform float uMetal;
#ifdef HAS_MAP
uniform sampler2D uMap;
#endif
varying vec3 vN;
varying vec3 vW;
varying vec2 vUv;
void main() {
  vec3 n = normalize(vN);
  if (!gl_FrontFacing) n = -n;
  vec3 V = normalize(cameraPosition - vW);
  vec3 L = normalize(vec3(0.42, 0.78, 0.46));
  float key = smoothstep(-0.05, 0.55, dot(n, L));
  vec3 ambient = mix(vec3(0.30, 0.27, 0.26), vec3(0.70, 0.76, 0.88), n.y * 0.5 + 0.5) * 0.62;
  vec3 albedo = uColor;
#ifdef HAS_MAP
  vec4 tx = texture2D(uMap, vUv);
  albedo = mix(albedo, tx.rgb, tx.a);
#endif
  vec3 col = albedo * (ambient + key * vec3(0.78, 0.74, 0.68));
  float spec = pow(max(dot(n, normalize(L + V)), 0.0), mix(18.0, 64.0, uMetal)) * mix(0.1, 0.9, uMetal);
  col += spec * mix(vec3(1.0), albedo * 1.3 + 0.25, uMetal);
  col += pow(1.0 - max(dot(n, V), 0.0), 3.0) * 0.22;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;
function W(e, t, r) {
  return new n({
    uniforms: {
      uColor: { value: new C(e) },
      uMetal: { value: t },
      ...(r ? { uMap: { value: r } } : {}),
    },
    defines: r ? { HAS_MAP: 1 } : {},
    vertexShader: U,
    fragmentShader: ue,
  });
}
function G(e) {
  let t = new w(e);
  return ((t.colorSpace = d), (t.anisotropy = 4), t);
}
function K(e, t) {
  let n = document.createElement(`canvas`);
  return ((n.width = e), (n.height = t), [n, n.getContext(`2d`)]);
}
function q(e, t, n, r) {
  let i = (e, t, n, r) => {
      let i = -t / 2,
        a = -n / 2;
      (e.moveTo(i + r, a),
        e.lineTo(i + t - r, a),
        e.quadraticCurveTo(i + t, a, i + t, a + r),
        e.lineTo(i + t, a + n - r),
        e.quadraticCurveTo(i + t, a + n, i + t - r, a + n),
        e.lineTo(i + r, a + n),
        e.quadraticCurveTo(i, a + n, i, a + n - r),
        e.lineTo(i, a + r),
        e.quadraticCurveTo(i, a, i + r, a));
    },
    a = new ie();
  if ((i(a, e, t, n), r)) {
    let e = new re();
    (i(e, ...r), a.holes.push(e));
  }
  return a;
}
function J(e, t, n = 0.045) {
  let i = new r(e, {
    depth: t,
    bevelEnabled: !0,
    bevelThickness: n,
    bevelSize: n,
    bevelSegments: 2,
    curveSegments: 5,
  });
  return (i.translate(0, 0, -t / 2), i.computeVertexNormals(), i);
}
function Y(e, t) {
  let n = new c(e, 6);
  n.computeBoundingBox();
  let r = n.boundingBox,
    i = n.getAttribute(`position`),
    a = n.getAttribute(`uv`);
  for (let e = 0; e < i.count; e++)
    a.setXY(
      e,
      (i.getX(e) - r.min.x) / (r.max.x - r.min.x),
      (i.getY(e) - r.min.y) / (r.max.y - r.min.y),
    );
  return (n.translate(0, 0, t), n);
}
var X = () =>
    getComputedStyle(document.body).fontFamily ||
    `ui-sans-serif, system-ui, sans-serif`,
  Z = (e, t, n) => `#${new C(e).lerp(new C(t), n).getHexString()}`;
function de(e, t, n, r, i) {
  ((e.fillStyle = `rgba(255, 248, 225, 0.45)`),
    e.fillText(t, n, r + 2),
    (e.fillStyle = i),
    e.fillText(t, n, r));
}
async function fe(e) {
  let { scene: t, pivot: n } = N(),
    r = e.color ?? `#d9a441`,
    i = 2.3,
    a = 0.9,
    [o, s] = K(560, 219),
    c = s.createLinearGradient(0, 0, 0, o.height);
  (c.addColorStop(0, Z(r, `#fff6dc`, 0.35)),
    c.addColorStop(0.55, r),
    c.addColorStop(1, Z(r, `#3a2408`, 0.3)),
    (s.fillStyle = c),
    s.fillRect(0, 0, o.width, o.height));
  for (let e = 0; e < 90; e++)
    ((s.fillStyle = `rgba(255, 255, 255, ${0.025 + Math.random() * 0.03})`),
      s.fillRect(0, Math.random() * o.height, o.width, 1));
  ((s.strokeStyle = Z(r, `#2a1a06`, 0.55)),
    (s.lineWidth = 4),
    s.beginPath(),
    s.roundRect(22, 22, o.width - 44, o.height - 44, 26),
    s.stroke(),
    await document.fonts?.ready);
  let l = e.label ?? ``,
    u = 104;
  for (
    s.font = `800 ${u}px ${X()}`;
    s.measureText(l).width > o.width - 90 && u > 30;

  )
    s.font = `800 ${(u -= 4)}px ${X()}`;
  ((s.textAlign = `center`),
    (s.textBaseline = `middle`),
    de(s, l, o.width / 2, o.height / 2 + 4, Z(r, `#1e1204`, 0.78)));
  let d = q(i, a, 0.16),
    f = new g(J(d, 0.14), W(Z(r, `#5a3a0c`, 0.25), 0.8)),
    p = new g(Y(q(i, a, 0.16), 0.117), W(r, 0.75, G(o)));
  return (
    n.add(f, p),
    {
      scene: t,
      pivot: n,
      radius: Math.hypot(i, a) / 2 + 0.05,
      dispose: M(t, !0),
    }
  );
}
var pe = [`#c98a50`, `#a3adbf`, `#f2b628`, `#b98cff`];
async function Q(e, t) {
  let n = D(e),
    r = n ? le(n).querySelector(`svg`) : null;
  if (!r) return null;
  (r.setAttribute(`xmlns`, `http://www.w3.org/2000/svg`),
    r.setAttribute(`width`, `256`),
    r.setAttribute(`height`, `256`),
    r.setAttribute(`color`, t));
  let i = new Image();
  i.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(r.outerHTML)}`;
  try {
    return (await i.decode(), i);
  } catch {
    return null;
  }
}
async function me(e) {
  let { scene: t, pivot: n } = N(),
    r = e.ring ?? 0,
    i = pe[r],
    [o, c] = K(512, 512),
    l = c.createRadialGradient(194.56, 163.84, 25.6, 256, 256, 317.44);
  (r === 3
    ? (l.addColorStop(0, `#ffe2f0`),
      l.addColorStop(0.45, `#9fdcff`),
      l.addColorStop(1, `#8a5ae0`))
    : (l.addColorStop(0, Z(i, `#fffbe8`, 0.3)),
      l.addColorStop(0.6, i),
      l.addColorStop(1, Z(i, `#1a1206`, 0.4))),
    (c.fillStyle = l),
    c.fillRect(0, 0, 512, 512),
    (c.strokeStyle = Z(i, `#1a1206`, 0.45)),
    (c.lineWidth = 7),
    c.beginPath(),
    c.arc(256, 256, 204.8, 0, Math.PI * 2),
    c.stroke());
  let u = Z(i, `#120c04`, 0.75),
    [d, f] = await Promise.all([
      Q(e.achievement ?? ``, `rgba(255,250,235,0.5)`),
      Q(e.achievement ?? ``, u),
    ]),
    p = 317.44;
  (d && c.drawImage(d, 194.56 / 2, 102.28, p, p),
    f && c.drawImage(f, 194.56 / 2, 194.56 / 2, p, p));
  let m = 0.2,
    h = W(Z(i, `#2a1a08`, 0.15), 0.85),
    _ = new g(new ee(1, 1, m, 48).rotateX(Math.PI / 2), h),
    v = new g(new a(0.965, 0.07, 8, 48).translate(0, 0, m / 2), h),
    y = new g(new a(0.965, 0.07, 8, 48).translate(0, 0, -0.2 / 2), h),
    b = new g(
      new s(0.94, 48).translate(0, 0, 0.10300000000000001),
      W(i, 0.45, G(o)),
    );
  return (
    n.add(_, v, y, b),
    { scene: t, pivot: n, radius: 1.08, dispose: M(t, !0) }
  );
}
function he(e, t, n) {
  let [r, i] = K(Math.round(t * 220), Math.round(n * 220)),
    a = r.width,
    o = r.height,
    s = i.createLinearGradient(0, 0, a, o);
  (s.addColorStop(0, Z(e, `#ffffff`, 0.16)),
    s.addColorStop(1, Z(e, `#000000`, 0.25)),
    (i.fillStyle = s),
    i.fillRect(0, 0, a, o));
  let c = o * 0.2;
  ((i.fillStyle = `rgba(255, 255, 255, 0.16)`),
    i.beginPath(),
    i.arc(o * 0.34, o * 0.4, c, 0, Math.PI * 2),
    i.fill(),
    (i.fillStyle = `rgba(255, 255, 255, 0.55)`),
    i.beginPath(),
    i.roundRect(o * 0.64, o * 0.28, a * 0.42, o * 0.09, o * 0.045),
    i.fill(),
    (i.fillStyle = `rgba(255, 255, 255, 0.24)`),
    i.beginPath(),
    i.roundRect(o * 0.64, o * 0.44, a * 0.28, o * 0.07, o * 0.035),
    i.fill());
  for (let e = 0; e < 3; e++)
    ((i.fillStyle = `rgba(255, 255, 255, 0.14)`),
      i.beginPath(),
      i.roundRect(o * 0.2 + e * o * 0.2, o * 0.7, o * 0.14, o * 0.14, o * 0.04),
      i.fill());
  return r;
}
function $(e, t) {
  let { scene: n, pivot: r } = N(),
    i = 2.5,
    a = 1.6,
    o = 0.16,
    s = t ? `#283044` : (e.color ?? `#151a26`),
    c = G(he(s, i, a));
  if (t) {
    let t = new g(
        J(q(2.84, 1.9400000000000002, 0.33, [i, a, o]), 0.16),
        W(e.color ?? `#9aa4b5`, 0.7),
      ),
      n = new g(Y(q(i, a, o), -0.02), W(s, 0.1, c)),
      l = new g(
        J(q(i, a, o), 0.08, 0.01).translate(0, 0, -0.07),
        W(Z(s, `#000`, 0.3), 0.1),
      );
    r.add(t, n, l);
  } else {
    let e = new g(J(q(i, a, o), 0.08, 0.025), W(Z(s, `#000`, 0.25), 0.15)),
      t = new g(Y(q(i, a, o), 0.067), W(s, 0.25, c));
    r.add(e, t);
  }
  return {
    scene: n,
    pivot: r,
    radius: Math.hypot(i, a) / 2 + 0.2,
    dispose: M(n, !0),
  };
}
async function ge(e) {
  switch (e.kind) {
    case `knife`:
      return I(e);
    case `glove`:
      return z(e);
    case `hat`:
      return B(e);
    case `bunny`:
      return V(e, !1);
    case `ghost`:
      return V(e, !0);
    case `trail`:
      return H(e);
    case `plaque`:
      return fe(e);
    case `medal`:
      return me(e);
    case `frame`:
      return $(e, !0);
    case `card`:
      return $(e, !1);
  }
}
export { ge as buildItemScene };
