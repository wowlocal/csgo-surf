// Extracted unchanged from the public Surfd production bundle.
// Original minified identifiers retained; readable aliases exported below.
// Bundle provenance and SHA-256: manifest.json. This is not original source.
const ae = (i = 0, e = 0, t = 0) => ({ x: i, y: e, z: t }),
  Wn = (i) => ({ ...i }),
  dn = (i, e) => ae(i.x + e.x, i.y + e.y, i.z + e.z),
  Un = (i, e) => ae(i.x - e.x, i.y - e.y, i.z - e.z),
  yn = (i, e) => ae(i.x * e, i.y * e, i.z * e),
  Gt = (i, e) => i.x * e.x + i.y * e.y + i.z * e.z,
  Jr = (i, e) =>
    ae(i.y * e.z - i.z * e.y, i.z * e.x - i.x * e.z, i.x * e.y - i.y * e.x),
  cs = (i) => Math.hypot(i.x, i.y, i.z),
  Si = (i) => Math.hypot(i.x, i.y),
  sr = (i) => {
    const e = cs(i);
    return e > 1e-12 ? yn(i, 1 / e) : ae();
  },
  ah = (i, e, t) => dn(i, yn(Un(e, i), t)),
  Ts = (i, e, t) => Math.max(e, Math.min(t, i)),
  If = (i) => ae(Math.fround(i.x), Math.fround(i.y), Math.fround(i.z));
function oh(i, e, t, n = "ramp", s = "#62c3cc") {
  const r = yn(
      e.reduce((h, d) => dn(h, d), ae()),
      1 / e.length,
    ),
    a = [],
    o = (h, d) => {
      a.some(
        (f) => Gt(f.normal, h) > 1 - 1e-7 && Math.abs(f.distance - d) < 0.001,
      ) || a.push({ normal: h, distance: d });
    };
  for (const h of t) {
    let d = sr(Jr(Un(e[h[1]], e[h[0]]), Un(e[h[2]], e[h[0]])));
    (Gt(d, Un(r, e[h[0]])) > 0 && (d = yn(d, -1)), o(d, Gt(d, e[h[0]])));
  }
  const c = [ae(1, 0, 0), ae(0, 1, 0), ae(0, 0, 1)];
  for (const h of c)
    for (const d of [-1, 1]) {
      const f = yn(h, d);
      o(f, Math.max(...e.map((g) => Gt(g, f))));
    }
  for (const h of t)
    for (let d = 0; d < h.length; d++) {
      const f = Un(e[h[(d + 1) % h.length]], e[h[d]]);
      for (const g of c) {
        const y = Jr(f, g);
        if (!(cs(y) < 1e-8))
          for (const m of [-1, 1]) {
            const p = yn(sr(y), m),
              E = Gt(p, e[h[d]]);
            e.every((x) => Gt(x, p) <= E + 0.001) && o(p, E);
          }
      }
    }
  const l = ae(...["x", "y", "z"].map((h) => Math.min(...e.map((d) => d[h])))),
    u = ae(...["x", "y", "z"].map((h) => Math.max(...e.map((d) => d[h]))));
  return {
    id: i,
    vertices: e,
    faces: t,
    planes: a,
    min: l,
    max: u,
    kind: n,
    color: s,
    friction: 1,
  };
}
const _t = (i, e, t, n = "stone", s = "#72828e") =>
  oh(
    i,
    [
      ae(e.x, e.y, e.z),
      ae(t.x, e.y, e.z),
      ae(t.x, t.y, e.z),
      ae(e.x, t.y, e.z),
      ae(e.x, e.y, t.z),
      ae(t.x, e.y, t.z),
      ae(t.x, t.y, t.z),
      ae(e.x, t.y, t.z),
    ],
    [
      [0, 3, 2, 1],
      [4, 5, 6, 7],
      [0, 1, 5, 4],
      [1, 2, 6, 5],
      [2, 3, 7, 6],
      [3, 0, 4, 7],
    ],
    n,
    s,
  );
function Df(i) {
  const e = (a, o) =>
      i.z + i.side * i.slope * (o - i.y) - i.descent * (a - i.x0),
    t = i.y - i.width / 2,
    n = i.y + i.width / 2,
    s = i.thickness ?? 80,
    r = [
      ae(i.x0, t, e(i.x0, t)),
      ae(i.x1, t, e(i.x1, t)),
      ae(i.x1, n, e(i.x1, n)),
      ae(i.x0, n, e(i.x0, n)),
    ];
  return oh(
    i.id,
    [...r.map((a) => ae(a.x, a.y, a.z - s)), ...r],
    [
      [0, 3, 2, 1],
      [4, 5, 6, 7],
      [0, 1, 5, 4],
      [1, 2, 6, 5],
      [2, 3, 7, 6],
      [3, 0, 4, 7],
    ],
    "ramp",
    i.side === 1 ? "#59b8c9" : "#81c9d1",
  );
}
const qn = "#c98243",
  ei = "#628da3",
  hi = "#a0a29d",
  zn = "#575d61",
  Di = (i, e, t, n = 0, s = 0) => ({
    position: ae(i, e, t + 0.03125),
    yaw: n,
    pitch: s,
  }),
  Mu = [
    {
      id: "lab-left-face",
      x0: 700,
      x1: 4500,
      y: 0,
      width: 1200,
      z: 1360,
      side: 1,
      slope: 1.25,
      descent: 0.16,
    },
    {
      id: "lab-right-face",
      x0: 4660,
      x1: 8700,
      y: 0,
      width: 1300,
      z: 520,
      side: -1,
      slope: 1.25,
      descent: 0.16,
    },
  ],
  kf = [
    {
      position: ae(570, 0, 2450),
      yaw: 180,
      width: 940,
      height: 210,
      title: "01 / LEFT FACE",
      subtitle: "W TO THE EDGE  /  RELEASE W  /  HOLD A",
      accent: qn,
    },
    {
      position: ae(4550, 0, 1840),
      yaw: 180,
      width: 820,
      height: 200,
      title: "02 / TRANSFER",
      subtitle: "CROSS THE GAP  /  CHANGE TO D",
      accent: ei,
    },
    {
      position: ae(10350, 0, 1e3),
      yaw: 180,
      width: 2700,
      height: 560,
      title: "SURF TRAINING",
      subtitle: "MOVEMENT LABORATORY  /  SOURCE UNITS",
      accent: qn,
    },
    {
      position: ae(2600, 1670, 1350),
      yaw: -90,
      width: 1300,
      height: 420,
      title: "A",
      subtitle: "STRAFE INTO THE ORANGE FACE",
      accent: qn,
    },
    {
      position: ae(6500, 1670, 600),
      yaw: -90,
      width: 1300,
      height: 420,
      title: "D",
      subtitle: "STRAFE INTO THE BLUE FACE",
      accent: ei,
    },
    {
      position: ae(-680, -2780, -1550),
      yaw: 90,
      width: 540,
      height: 200,
      title: "GROUND MOVEMENT",
      subtitle: "ACCELERATION  /  STOPPING  /  BHOP",
      accent: qn,
    },
    {
      position: ae(2300, -2780, -1550),
      yaw: 90,
      width: 650,
      height: 200,
      title: "JUMP HEIGHT",
      subtitle: "45 UNITS  /  56 UNITS",
      accent: qn,
    },
    {
      position: ae(3500, -2780, -1450),
      yaw: 90,
      width: 600,
      height: 200,
      title: "18 UNIT STEPS",
      subtitle: "WALK UP  /  NO JUMP REQUIRED",
      accent: qn,
    },
    {
      position: ae(4700, -2780, -1510),
      yaw: 90,
      width: 620,
      height: 200,
      title: "49 UNIT CLEARANCE",
      subtitle: "CROUCH THROUGH  /  STAND WHEN CLEAR",
      accent: ei,
    },
    {
      position: ae(6350, -2780, -1450),
      yaw: 90,
      width: 620,
      height: 200,
      title: "COPLANAR SEAM",
      subtitle: "TWO BRUSHES  /  ONE LEVEL SURFACE",
      accent: ei,
    },
    {
      position: ae(7850, -2780, -1320),
      yaw: 90,
      width: 660,
      height: 200,
      title: "1 UNIT WALL",
      subtitle: "SWEPT HULL  /  HIGH SPEED IMPACT",
      accent: qn,
    },
    {
      position: ae(4800, -1450, 1490),
      yaw: 90,
      width: 470,
      height: 180,
      title: "RIGHT RAMP ENTRY",
      subtitle: "WALK FORWARD  /  TURN LEFT  /  HOLD D",
      accent: ei,
    },
  ];
function Uf() {
  const i = Di(-300, 0, 2200, 0, 8),
    e = [
      { name: "01 · Left ramp & transfer", spawn: i },
      { name: "02 · Right ramp entry", spawn: Di(4880, -1200, 1320, 90, 8) },
      { name: "03 · Ground movement", spawn: Di(-650, -2150, -1800) },
      { name: "04 · Jump heights", spawn: Di(1870, -2150, -1800) },
      { name: "05 · 18 unit steps", spawn: Di(3e3, -2150, -1800) },
      { name: "06 · Crouch tunnel", spawn: Di(4140, -2150, -1800) },
      { name: "07 · Coplanar seam", spawn: Di(5950, -2150, -1764) },
      { name: "08 · Thin wall", spawn: Di(7500, -2150, -1800) },
    ],
    t = [
      _t(
        "lab-floor",
        ae(-1150, -2950, -1896),
        ae(10500, 1850, -1800),
        "test",
        hi,
      ),
      _t(
        "lab-west-wall",
        ae(-1250, -3050, -1896),
        ae(-1150, 1950, 3e3),
        "test",
        zn,
      ),
      _t(
        "lab-east-wall",
        ae(10500, -3050, -1896),
        ae(10600, 1950, 3e3),
        "test",
        zn,
      ),
      _t(
        "lab-south-wall",
        ae(-1150, -3050, -1896),
        ae(10500, -2950, 3e3),
        "test",
        hi,
      ),
      _t(
        "lab-north-wall",
        ae(-1150, 1850, -1896),
        ae(10500, 1950, 3e3),
        "test",
        hi,
      ),
      _t("lab-roof", ae(-1250, -3050, 3e3), ae(10600, 1950, 3096), "test", zn),
      _t(
        "lab-start-deck",
        ae(-1150, -550, 2080),
        ae(720, 550, 2200),
        "test",
        hi,
      ),
      _t(
        "lab-start-left-rail",
        ae(-1150, 550, 2200),
        ae(420, 582, 2272),
        "test",
        zn,
      ),
      _t(
        "lab-start-right-rail",
        ae(-1150, -582, 2200),
        ae(420, -550, 2272),
        "test",
        zn,
      ),
      ...Mu.map((n, s) => ({ ...Df(n), color: s ? ei : qn })),
      _t(
        "lab-right-entry",
        ae(4660, -1450, 1240),
        ae(5220, -680, 1320),
        "test",
        hi,
      ),
      _t(
        "lab-catch-deck",
        ae(8900, -1300, -800),
        ae(10450, 1300, -680),
        "test",
        hi,
      ),
      _t(
        "lab-jump-45",
        ae(2150, -2400, -1800),
        ae(2310, -1900, -1755),
        "test",
        qn,
      ),
      _t(
        "lab-jump-56",
        ae(2510, -2400, -1800),
        ae(2670, -1900, -1744),
        "test",
        ei,
      ),
      _t(
        "lab-duck-ceiling",
        ae(4410, -2440, -1751),
        ae(5070, -1860, -1703),
        "test",
        ei,
      ),
      _t(
        "lab-duck-side-a",
        ae(4410, -2472, -1800),
        ae(5070, -2440, -1703),
        "test",
        zn,
      ),
      _t(
        "lab-duck-side-b",
        ae(4410, -1860, -1800),
        ae(5070, -1828, -1703),
        "test",
        zn,
      ),
      _t(
        "lab-seam-a",
        ae(5750, -2450, -1800),
        ae(6350, -1850, -1764),
        "test",
        ei,
      ),
      _t(
        "lab-seam-b",
        ae(6350, -2450, -1800),
        ae(6980, -1850, -1764),
        "test",
        ei,
      ),
      _t(
        "lab-seam-step",
        ae(5686, -2450, -1800),
        ae(5750, -1850, -1782),
        "test",
        hi,
      ),
      _t(
        "lab-thin-wall",
        ae(7850, -2460, -1800),
        ae(7851, -1840, -1440),
        "test",
        qn,
      ),
      _t(
        "lab-corner-a",
        ae(9150, -2600, -1800),
        ae(9166, -2100, -1430),
        "test",
        zn,
      ),
      _t(
        "lab-corner-b",
        ae(8650, -2616, -1800),
        ae(9166, -2600, -1430),
        "test",
        zn,
      ),
    ];
  for (let n = 0; n < 6; n++)
    t.push(
      _t(
        `lab-step-${n + 1}`,
        ae(3250 + n * 64, -2400, -1800),
        ae(3250 + (n + 1) * 64, -1900, -1800 + (n + 1) * 18),
        "test",
        n % 2 ? hi : qn,
      ),
    );
  for (let n = 0; n < 63; n++)
    t.push(
      _t(
        `lab-return-step-${n}`,
        ae(8900 + n * 24, 1320, -1800),
        ae(8900 + (n + 1) * 24, 1730, -680 - n * 18),
        "test",
        hi,
      ),
    );
  for (let n = -1024; n < 10500; n += 1024) {
    t.push(
      _t(
        `lab-roof-beam-${n}`,
        ae(n, -2950, 2790),
        ae(n + 40, 1850, 3e3),
        "test",
        zn,
      ),
    );
    for (const s of [-2950, 1786])
      t.push(
        _t(
          `lab-column-${n}-${s}`,
          ae(n, s, -1800),
          ae(n + 64, s + 64, 2790),
          "test",
          zn,
        ),
      );
  }
  return {
    id: "laboratory",
    version: "lab-chamber-2",
    name: "MOVEMENT LAB",
    brushes: t,
    ramps: Mu,
    spawn: i,
    practiceSpawns: e.map((n) => n.spawn),
    practiceStations: e,
    zones: [],
    fallZ: -2100,
    markers: [],
  };
}
const Eo = JSON.parse(
  '[{"id":"surf_boreas","slug":"boreas","name":"surf_boreas","version":"bsp-9bd9daa0-v1","boardId":"e14aaf75268c9161a8a895a86e40a2ceef78973ac0780638d85bbceb487a4a64","geometrySha256":"405341fbe52c7c93037cb981eac1377f3a9082470684b8189e7f8e9b6e6b7cea","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":5000,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_utopia_njv","slug":"utopia","name":"surf_utopia_njv","version":"bsp-50b99557-localzones-v1","boardId":"5012373e9d708f156650939b52d8f46c5613ef91edc6dbb2f4bfe9232a9503ce","geometrySha256":"3bafbef3784c70668b146bf9d444972316d5d8a925564349d1d6332091159592","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_mesa_fixed","slug":"mesa","name":"surf_mesa_fixed","version":"bsp-f4897c24-localzones-v1","boardId":"f98befd62cdc6531cf012611afae3ced1a676e8182a1e8448b496340991d5594","geometrySha256":"3747f561194f77a0684f584c52a3fdf3d70fe3a37fc80ed91c8a22a14afeb117","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_demise","slug":"demise","name":"surf_demise","version":"bsp-15b16c31-localzones-v1","boardId":"1f05711e34722e56b34873d4980b1b4630cf34390356dc6cbbc45d9bb9a52a27","geometrySha256":"6b0e7e23541348d379d0972ef05bcec07cd010ac9e4d84988d185c11ed562e0b","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":5000,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_kitsune","slug":"kitsune","name":"surf_kitsune","version":"bsp-41ff082a-localzones-v1","boardId":"3d2a2ce1448b12bff5ca93d91b109c50c81beb67321e4873e7d95a217a642ce0","geometrySha256":"3cb29933cdf22c3a2b8d4d4e5c118094eaf287dd72e31527f891ff7ee9fb42f4","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_aircontrol_ksf","slug":"aircontrol","name":"surf_aircontrol_ksf","version":"bsp-3c3b754f-localzones-v1","boardId":"543cfb254c8f40308ec25b839bc938b436275b50803e61cb027da30e7bf8ad33","geometrySha256":"ee235689708f3182d54a420e38f0e5b37234a29af7adc8b9a14e3468172ce87e","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":10000,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_lux","slug":"lux","name":"surf_lux","version":"bsp-54745509-localzones-v1","boardId":"cbec22278d30afd5f7f3854ebfba69f9f7f62e773ba506272f35bca0b0f2c74b","geometrySha256":"e0aab65768f3770f7edff658a5b46684fc914df20f0d5bf841502b6333ffa0f6","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_nyx","slug":"nyx","name":"surf_nyx","version":"bsp-152ead15-localzones-v1","boardId":"d9799e867897db2d71b0b36835d81d3a51e07b5f86031999756d303502abf785","geometrySha256":"7ae1ce0f6d5f166b2c11acd0469beaf49cd8e12a6564093100b0167bd9ae2279","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":4000,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_reprise","slug":"reprise","name":"surf_reprise","version":"bsp-0e826d0d-localzones-v1","boardId":"89f6c9dcafc7936c6449bf373f4d87ad942a1cd28700a7d05ceceb9da58a7552","geometrySha256":"28bdfa5caaff3fa51595c9638960e99f33abc3c2749ba27649194eb3017b7933","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":4000,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_fornax","slug":"fornax","name":"surf_fornax","version":"bsp-2194b0e9-localzones-v1","boardId":"1c81d0eee7f64b6923a6e3ea73ab4388e6cb3c5a38b6c379d2bfc74969e67ee4","geometrySha256":"152d5dedb69be2de10e942e36e5e9886709f7ae74e5c9e8f73f33df032700451","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":5000,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_beginner","slug":"beginner","name":"surf_beginner","version":"bsp-812ca218-localzones-v1","boardId":"75d371445d4d71adcf533a987f8aed759384f610369096aa2b22a5351e8e2a37","geometrySha256":"e5b129bba29bddfbb432450ed2a1119dbd02029e6ac1b27158d768868a0257e5","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_year3000","slug":"year3000","name":"surf_year3000","version":"bsp-f65b3d9f-localzones-v1","boardId":"51a9dee24a4ed60233621752d1d256c06385a0bd325080af67d94a8de33c17df","geometrySha256":"6d62ab68eb246f4dc6efa9d38840b7dec8f76c38e15ea8f63a8a2bb1ed92e6f5","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_ace","slug":"ace","name":"surf_ace","version":"bsp-f84f89ac-localzones-v1","boardId":"2bd361b5f831cec07795041c5cec64364c4f4c1f0d4f046dacd6a22e77163933","geometrySha256":"be878251d2c0337ccf4d011a77a3626159c829e0b0788bc343671fca6b4b5451","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_legends","slug":"legends","name":"surf_legends","version":"bsp-aadafc6e-localzones-v1","boardId":"ad2b7b614d7376f3ef84a69e77c44b44d50b51da800a815a0079e73c4d1e6ec7","geometrySha256":"655256dcc8104c3665f8b712483ea4613b97ff2983dcfd6218eddbcd69f24a09","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_eclipse","slug":"eclipse","name":"surf_eclipse","version":"bsp-d3c52f25-localzones-v1","boardId":"498fc32f1895b89851705b4bf34244ef885510c0a1d368319e693ad192eda7f9","geometrySha256":"fb4019087b94968421228ecde36562b0cfc483d123155654c49f904848dee1df","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_summer_ksf","slug":"summer","name":"surf_summer_ksf","version":"bsp-53ba357a-localzones-v1","boardId":"96feb61093aca02b9e324716ac2b7fd12817486c1de734868e27095dc81ffe40","geometrySha256":"f6a10d26f08215c41c6dcbe472be9090b81ff7c6af497a56a8377bf3d228daea","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_forbidden_ways_ksf","slug":"forbidden-ways","name":"surf_forbidden_ways_ksf","version":"bsp-2592c054-localzones-v1","boardId":"4062367b4ebceef9b1ad9b2603cd3d8384e868a097cfa763dda4293bbb4a6ddc","geometrySha256":"2e7ea5a5c38241969997e08b7056509ff47ccb8f83258077a251b5adeb3b021c","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_tendies","slug":"tendies","name":"surf_tendies","version":"bsp-db28a17b-localzones-v1","boardId":"90079a67689158157f09a75edee0638d5abd637c4d622af83d982b6719ece3ff","geometrySha256":"3be3687fd13d14306f24de7c892602f46c327bd62b5120761f747962958c8535","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":5000,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_derpis_ksf","slug":"derpis","name":"surf_derpis_ksf","version":"bsp-9732ac6e-localzones-v1","boardId":"c22c8ec63aa55b17f11d41e19cbbe8057cfe07b140f2426f824a51635bc15f47","geometrySha256":"a4ac4b4c26dc8af800c179e9acf391276fd452def102b67efbe1f73d1c8ae17a","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}},{"id":"surf_prelude_fix","slug":"prelude","name":"surf_prelude_fix","version":"bsp-23c97af4-localzones-v1","boardId":"7f8b2b5bc8058835519d18d53587d627b20b06fff009feed181c8c52f04c75ac","geometrySha256":"222cb0f68fc06a652b89fd9d8ff0c183d3c454849457fa2f783604813f1be7d7","physicsSha256":"7b22d5508bc7f98703eb31a17eb0450a6da54885909c6d87e3c86658cefb6bdc","config":{"version":"css-surf-capped-1","dt":0.014999999664723873,"gravity":800,"airAccelerate":150,"accelerate":5,"friction":4,"stopSpeed":75,"maxSpeed":260,"airCap":30,"maxVelocity":3500,"jumpImpulse":301.9933776855469,"stepSize":18,"groundNormal":0.7,"autoBhop":true,"standHeight":62,"duckHeight":45,"standEye":64,"duckEye":47,"duckTime":0.4,"unduckTime":0.2,"float32":true,"unrestrictedStart":false,"startPolicy":"boreas","inclineFix":true}}]',
);
async function ch(i) {
  if (!i.body) return i.json();
  const e = i.body.getReader(),
    t = [];
  let n = 0;
  for (; n < 2; ) {
    const o = await e.read();
    if (o.done) break;
    (t.push(o.value), (n += o.value.length));
  }
  const s = t.flatMap((o) => Array.from(o.subarray(0, 2))).slice(0, 2),
    r = new ReadableStream({
      start(o) {
        for (const c of t) o.enqueue(c);
      },
      async pull(o) {
        try {
          const c = await e.read();
          c.done ? o.close() : o.enqueue(c.value);
        } catch (c) {
          o.error(c);
        }
      },
      cancel(o) {
        return e.cancel(o);
      },
    }),
    a =
      s[0] === 31 && s[1] === 139
        ? r.pipeThrough(new DecompressionStream("gzip"))
        : r;
  return new Response(a).json();
}
class Wc extends Error {
  constructor(e, t, n, s) {
    (super(
      e === "challenge"
        ? "Browser verification needed to download this map."
        : `Map download failed (${t}).`,
    ),
      (this.kind = e),
      (this.status = t),
      (this.name = "AssetDownloadError"),
      (this.path = new URL(n, "https://surfd.invalid").pathname));
    const r = s.get("x-vercel-id");
    this.requestId = r && /^[a-zA-Z0-9:._-]{1,200}$/.test(r) ? r : null;
    const a = s.get("retry-after"),
      o =
        a && /^\d+$/.test(a)
          ? Number(a)
          : a
            ? Math.ceil((Date.parse(a) - Date.now()) / 1e3)
            : NaN;
    this.retryAfterSeconds = Number.isFinite(o)
      ? Math.max(0, Math.min(3600, o))
      : null;
  }
  kind;
  status;
  at = new Date().toISOString();
  path;
  requestId;
  retryAfterSeconds;
  details(e) {
    return [
      "Surfd map download",
      `Map: ${e}`,
      `Time (UTC): ${this.at}`,
      `File: ${this.path}`,
      `HTTP status: ${this.status}`,
      `Reason: ${this.kind}`,
      `Vercel request ID: ${this.requestId ?? "not provided"}`,
    ].join(`
`);
  }
}
async function Nf(i) {
  if (!i.body) return "";
  const e = i.body.getReader(),
    t = new TextDecoder();
  let n = "",
    s = 0;
  try {
    for (; s < 16384; ) {
      const r = await e.read();
      if (r.done) break;
      const a = r.value.subarray(0, 16384 - s);
      ((n += t.decode(a, { stream: !0 })), (s += a.length));
    }
    return n + t.decode();
  } finally {
    await e.cancel().catch(() => {});
  }
}
async function qc(i, e) {
  const t = await fetch(i, { signal: e }),
    n = t.headers.get("x-vercel-mitigated")?.toLowerCase(),
    s = t.headers.get("content-type")?.toLowerCase().includes("text/html");
  if (t.ok && !s && n !== "challenge") return t;
  const r =
    n === "challenge" ||
    (s &&
      /Vercel Security Checkpoint|<title>\s*Vercel Challenge/i.test(
        await Nf(t),
      ));
  throw (
    t.bodyUsed || (await t.body?.cancel().catch(() => {})),
    new Wc(
      r
        ? "challenge"
        : t.status === 403
          ? "blocked"
          : t.status === 429
            ? "rate-limit"
            : "unavailable",
      t.status,
      i,
      t.headers,
    )
  );
}
const uo = (i) =>
    i.stages
      ? `Staged · ${i.stages} stages`
      : `Linear · ${i.checkpoints} checkpoints`,
  jn = [
    {
      id: "surf_boreas",
      slug: "boreas",
      name: "surf_boreas",
      title: "Boreas",
      previewAlt: "Snowy ravines and glass surf ramps",
      author: "Syncronyze",
      checkpoints: 2,
      tier: 1,
      description: "Snowy ravines, long glass ramps and high-speed transfers.",
      ambience: "boreas",
    },
    {
      id: "surf_utopia_njv",
      slug: "utopia",
      name: "surf_utopia_njv",
      title: "Utopia",
      previewAlt: "Concrete surf ramps in the orange-trimmed Utopia course",
      author: "Panzer",
      checkpoints: 3,
      tier: 1,
      description:
        "The classic concrete course. Long lines, wide turns, room to learn.",
      ambience: "utopia",
    },
    {
      id: "surf_mesa_fixed",
      slug: "mesa",
      name: "surf_mesa_fixed",
      title: "Mesa",
      previewAlt: "Blue-edged surf ramps winding through rocky chambers",
      author: "Arblarg",
      checkpoints: 3,
      tier: 1,
      description:
        "Rocky chambers, blue-edged ramps and a flowing descent to the finish.",
      ambience: "mesa",
    },
    {
      id: "surf_demise",
      slug: "demise",
      name: "surf_demise",
      title: "Demise",
      previewAlt: "Purple-lit cavern and curved stone ramps in Demise",
      author: "elly",
      checkpoints: 2,
      tier: 1,
      description: "A long descent through wooded valleys and stone passages.",
      ambience: "mesa",
    },
    {
      id: "surf_kitsune",
      slug: "kitsune",
      name: "surf_kitsune",
      title: "Kitsune",
      previewAlt: "Red surf ramps inside Kitsune’s black-walled first stage",
      author: "Arblarg",
      checkpoints: 8,
      stages: 9,
      tier: 1,
      description:
        "Nine colour-coded stages, from short opening ramps to the long white finale.",
      ambience: "utopia",
    },
    {
      id: "surf_aircontrol_ksf",
      slug: "aircontrol",
      name: "surf_aircontrol_ksf",
      title: "Aircontrol",
      previewAlt: "Long ramps and sweeping turns in surf_aircontrol_ksf",
      author: "SnoopSh",
      checkpoints: 5,
      tier: 1,
      description:
        "Wide ramps, sweeping corners and a fast continuous descent.",
      ambience: "utopia",
    },
    {
      id: "surf_lux",
      slug: "lux",
      name: "surf_lux",
      title: "Lux",
      previewAlt: "Clean geometric ramps along the Lux course",
      author: "SSStormy",
      checkpoints: 3,
      tier: 1,
      description:
        "Two connected sections with fast transfers and a momentum-preserving portal.",
      ambience: "boreas",
    },
    {
      id: "surf_nyx",
      slug: "nyx",
      name: "surf_nyx",
      title: "Nyx",
      previewAlt: "Glass surf ramps winding through Nyx’s illuminated caves",
      author: "Syncronyze & Shadow Sheep",
      checkpoints: 2,
      tier: 1,
      description:
        "Curved glass ramps and a fast descent through crystal-lit caves.",
      ambience: "mesa",
    },
    {
      id: "surf_reprise",
      slug: "reprise",
      name: "surf_reprise",
      title: "Reprise",
      previewAlt: "Geometric surf ramps across Reprise’s connected chambers",
      author: "TeMP",
      checkpoints: 3,
      tier: 2,
      description:
        "A longer course with precise transfers and two seamless portals.",
      ambience: "utopia",
    },
    {
      id: "surf_fornax",
      slug: "fornax",
      name: "surf_fornax",
      title: "Fornax",
      previewAlt: "Illuminated ramps and industrial chambers in Fornax",
      author: "iNooVa",
      checkpoints: 2,
      tier: 1,
      description:
        "A continuous descent through a vast, illuminated space station.",
      ambience: "utopia",
    },
    {
      id: "surf_beginner",
      slug: "beginner",
      name: "surf_beginner",
      title: "Beginner",
      previewAlt: "Sunset above Beginner’s stone ramps",
      author: "Kiiru",
      checkpoints: 6,
      stages: 7,
      tier: 1,
      description:
        "Seven classic stages, with short ramps and momentum-carrying portals.",
      ambience: "utopia",
    },
    {
      id: "surf_year3000",
      slug: "year3000",
      name: "surf_year3000",
      title: "Year3000",
      previewAlt: "Industrial surf ramps in Year3000",
      author: "ArchAngel",
      checkpoints: 1,
      stages: 2,
      tier: 1,
      description: "Two long stages through an industrial complex.",
      ambience: "utopia",
    },
    {
      id: "surf_ace",
      slug: "ace",
      name: "surf_ace",
      title: "Ace",
      previewAlt: "Torch-lit Egyptian chambers and ramps in Ace",
      author: "Juxtapo",
      checkpoints: 7,
      stages: 8,
      tier: 1,
      description:
        "Eight connected stages. Keep your speed through the torch-lit chambers.",
      ambience: "utopia",
    },
    {
      id: "surf_legends",
      slug: "legends",
      name: "surf_legends",
      title: "Legends",
      previewAlt: "Stone surf ramps along the Legends course",
      author: "SintaxError",
      checkpoints: 4,
      tier: 1,
      description:
        "A long classic course with fast drops and a seamless portal.",
      ambience: "mesa",
    },
    {
      id: "surf_eclipse",
      slug: "eclipse",
      name: "surf_eclipse",
      title: "Eclipse",
      previewAlt: "Wide curved surf ramps in Eclipse",
      author: "Paper-Cut",
      checkpoints: 2,
      stages: 3,
      tier: 2,
      description:
        "Three substantial stages with sweeping turns and longer transfers.",
      ambience: "boreas",
    },
    {
      id: "surf_summer_ksf",
      slug: "summer",
      name: "surf_summer_ksf",
      title: "Summer",
      previewAlt: "Sunlit seaside ramps in Summer",
      author: "Hardex & Tioga060",
      checkpoints: 10,
      stages: 11,
      tier: 2,
      description:
        "Eleven summer stages, from the beach and skatepark to the waterpark.",
      ambience: "boreas",
    },
    {
      id: "surf_forbidden_ways_ksf",
      slug: "forbidden-ways",
      name: "surf_forbidden_ways_ksf",
      title: "Forbidden Ways",
      previewAlt: "Stone ramps and sweeping passages in Forbidden Ways",
      author: "Krusty",
      checkpoints: 6,
      tier: 2,
      description:
        "A classic stone course with long turns and three momentum-carrying portals.",
      ambience: "mesa",
    },
    {
      id: "surf_tendies",
      slug: "tendies",
      name: "surf_tendies",
      title: "Tendies",
      previewAlt: "A curved roadside ramp and autumn trees in Tendies",
      author: "granis",
      checkpoints: 4,
      tier: 1,
      description:
        "Leave the house, surf the streets and find your tendies. Four checkpoints.",
      ambience: "boreas",
    },
    {
      id: "surf_derpis_ksf",
      slug: "derpis",
      name: "surf_derpis_ksf",
      title: "Derpis",
      previewAlt: "Metal ramps against Derpis’s blue sky",
      author: "felix",
      checkpoints: 5,
      stages: 6,
      tier: 1,
      description: "Six classic stages with wide ramps and quick transfers.",
      ambience: "utopia",
    },
    {
      id: "surf_prelude_fix",
      slug: "prelude",
      name: "surf_prelude_fix",
      title: "Prelude",
      previewAlt: "White-edged ramps and strip lights in Prelude",
      author: "nappa",
      checkpoints: 3,
      tier: 1,
      description:
        "A flowing classic through dark chambers and white-edged ramps, with three checkpoints.",
      ambience: "utopia",
    },
  ],
  an = (i) => jn.find((e) => e.id === i);
async function lh(i, e) {
  const t = Eo.find((a) => a.id === i.id),
    n = t
      ? `/packed/${t.geometrySha256}.json.gz`
      : `/maps/${i.slug}-collision.json`,
    s = await qc(n, e),
    r = await ch(s);
  if (
    r.id !== i.id ||
    !r.brushes?.length ||
    !r.zones?.some((a) => a.kind === "start") ||
    !r.zones.some((a) => a.kind === "finish")
  )
    throw Error(`Invalid ${i.name} geometry`);
  return r;
}
const Jl = Object.freeze({
    version: "css-surf-1",
    dt: Math.fround(0.015),
    gravity: 800,
    airAccelerate: 150,
    accelerate: 5,
    friction: 4,
    stopSpeed: 75,
    maxSpeed: 260,
    airCap: 30,
    maxVelocity: 5e3,
    jumpImpulse: Math.fround(301.99337741082996),
    stepSize: 18,
    groundNormal: 0.7,
    autoBhop: !1,
    standHeight: 62,
    duckHeight: 45,
    standEye: 64,
    duckEye: 47,
    duckTime: 0.4,
    unduckTime: 0.2,
    float32: !0,
  }),
  uh = Object.freeze({
    ...Jl,
    version: "css-surf-bhop-3",
    autoBhop: !0,
    unrestrictedStart: !0,
    startPolicy: "boreas",
    inclineFix: !0,
  }),
  dh = Object.freeze({
    ...uh,
    version: "css-surf-capped-1",
    unrestrictedStart: !1,
  }),
  rr = (i) => JSON.stringify(i),
  Xc = ["x", "y", "z"],
  Eu = (i, e) => Xc.every((t) => i.min[t] <= e.max[t] && i.max[t] >= e.min[t]);
class Ff {
  constructor(e, t = 12) {
    this.bounds = e;
    const n = (s) => {
      const r = { x: 1 / 0, y: 1 / 0, z: 1 / 0 },
        a = { x: -1 / 0, y: -1 / 0, z: -1 / 0 };
      for (const l of s)
        for (const u of Xc)
          ((r[u] = Math.min(r[u], e[l].min[u])),
            (a[u] = Math.max(a[u], e[l].max[u])));
      if (s.length <= t) return { min: r, max: a, items: s };
      const o = Xc.reduce((l, u) => (a[u] - r[u] > a[l] - r[l] ? u : l));
      s.sort(
        (l, u) =>
          e[l].min[o] + e[l].max[o] - (e[u].min[o] + e[u].max[o]) || l - u,
      );
      const c = s.length >> 1;
      return { min: r, max: a, left: n(s.slice(0, c)), right: n(s.slice(c)) };
    };
    this.root = e.length ? n(e.map((s, r) => r)) : null;
  }
  bounds;
  root;
  query(e) {
    const t = [],
      n = (s) => {
        if (Eu(s, e))
          if (s.items)
            for (const r of s.items) Eu(this.bounds[r], e) && t.push(r);
          else (n(s.left), n(s.right));
      };
    return (this.root && n(this.root), t.sort((s, r) => s - r));
  }
}
const Xn = 0.03125,
  Ma = ["x", "y", "z"];
class hh {
  constructor(e, t = []) {
    ((this.brushes = e),
      (this.triangles = t),
      (this.triangleBounds = t.map((n) => ({
        min: ae(...Ma.map((s) => Math.min(...n.vertices.map((r) => r[s])))),
        max: ae(...Ma.map((s) => Math.max(...n.vertices.map((r) => r[s])))),
      }))),
      (this.tree = new Ff([...e, ...this.triangleBounds])));
  }
  brushes;
  triangles;
  tree;
  triangleBounds;
  triangleCache = new Map();
  triangleBrush(e) {
    const t = this.triangleCache.get(e);
    if (t) return t;
    const n = this.triangles[e],
      s = n.vertices,
      r = [ae(1, 0, 0), ae(0, 1, 0), ae(0, 0, 1)],
      o = [sr(Jr(Un(s[1], s[0]), Un(s[2], s[0]))), ...r];
    for (let u = 0; u < 3; u++)
      for (const h of r) o.push(Jr(Un(s[(u + 1) % 3], s[u]), h));
    const c = [];
    for (const u of o)
      if (!(cs(u) < 1e-8))
        for (const h of [1, -1]) {
          const d = yn(sr(u), h);
          c.some((f) => Gt(f.normal, d) > 1 - 1e-9) ||
            c.push({
              normal: d,
              distance: Math.max(...s.map((f) => Gt(d, f))),
            });
        }
    const l = {
      id: `disp-${n.surfaceId}-${n.triangleId}`,
      vertices: s,
      faces: [[0, 1, 2]],
      planes: c,
      ...this.triangleBounds[e],
      color: "#d4dadd",
      friction: 1,
      kind: "snow",
    };
    return (this.triangleCache.set(e, l), l);
  }
  trace(e, t, n) {
    const s = {
        fraction: 1,
        end: { ...t },
        normal: ae(),
        startSolid: !1,
        allSolid: !1,
        brush: null,
      },
      r = { min: ae(), max: ae() };
    for (const a of Ma)
      ((r.min[a] = Math.min(e[a], t[a]) + n.min[a] - Xn),
        (r.max[a] = Math.max(e[a], t[a]) + n.max[a] + Xn));
    for (const a of this.tree.query(r)) {
      const o =
        a < this.brushes.length
          ? this.brushes[a]
          : this.triangleBrush(a - this.brushes.length);
      if (
        Ma.some(
          (m) =>
            Math.max(e[m], t[m]) + n.max[m] < o.min[m] - Xn ||
            Math.min(e[m], t[m]) + n.min[m] > o.max[m] + Xn,
        )
      )
        continue;
      let c = -1,
        l = 1,
        u = ae(),
        h = !1,
        d = !1,
        f = !1,
        g = -1 / 0,
        y = 1 / 0;
      for (const m of o.planes) {
        const p = m.normal,
          E =
            p.x * (p.x < 0 ? n.max.x : n.min.x) +
            p.y * (p.y < 0 ? n.max.y : n.min.y) +
            p.z * (p.z < 0 ? n.max.z : n.min.z),
          x = m.distance - E,
          v = Gt(e, p) - x,
          A = Gt(t, p) - x;
        if (
          (o.collisionModel === "vphysics" &&
            (v > A
              ? (g = Math.max(g, v / (v - A)))
              : v < A && (y = Math.min(y, v / (v - A)))),
          v > 0 && (h = !0),
          A > 0 && (d = !0),
          v > 0 && A > 0 && (!o.collisionModel || A >= v - 1e-5))
        ) {
          f = !0;
          break;
        }
        if (!(v <= 0 && A <= 0))
          if (v > A) {
            const M = Math.max(0, (v - Xn) / (v - A));
            M > c && ((c = M), (u = p));
          } else l = Math.min(l, (v + Xn) / (v - A));
      }
      if (!(f || (y < 1 && g > y))) {
        if (!h) {
          if (((s.startSolid = !0), !d))
            return (
              (s.allSolid = !0),
              (s.fraction = 0),
              (s.end = { ...e }),
              (s.brush = o),
              s
            );
          continue;
        }
        c < l &&
          c > -1 &&
          c < s.fraction &&
          ((s.fraction = Math.max(0, c)), (s.normal = { ...u }), (s.brush = o));
      }
    }
    return ((s.end = ah(e, t, s.fraction)), s);
  }
}
function ec(i, e = 0, t = 0) {
  return {
    position: Wn(i),
    velocity: ae(),
    grounded: !1,
    groundId: null,
    ducked: !1,
    duckFraction: 0,
    eyeHeight: 64,
    jumpHeld: !1,
    surfaceFriction: 1,
    yaw: e,
    pitch: t,
    tick: 0,
  };
}
const Kt = (i, e) => ({
  min: ae(-16, -16, 0),
  max: ae(16, 16, i.ducked ? e.duckHeight : e.standHeight),
});
function tc(i, e, t = (n) => n) {
  const n = t(Gt(i, e));
  let s = ae(t(i.x - e.x * n), t(i.y - e.y * n), t(i.z - e.z * n));
  const r = Gt(s, e);
  return (r < 0 && (s = Un(s, yn(e, r))), s);
}
class Of {
  constructor(e, t = { ...Jl }) {
    ((this.world = e), (this.config = t));
  }
  world;
  config;
  r = (e) => (this.config.float32 ? Math.fround(e) : e);
  vector = (e) => (this.config.float32 ? If(e) : e);
  checkVelocity(e) {
    for (const t of ["x", "y", "z"])
      e.velocity[t] = this.r(
        Ts(
          Number.isFinite(e.velocity[t]) ? e.velocity[t] : 0,
          -this.config.maxVelocity,
          this.config.maxVelocity,
        ),
      );
  }
  categorize(e) {
    const t = this.config;
    if (((e.surfaceFriction = 1), e.velocity.z > 140)) {
      ((e.grounded = !1), (e.groundId = null));
      return;
    }
    const n = Kt(e, t),
      s = dn(e.position, ae(0, 0, -2));
    let r = this.world.trace(e.position, s, n);
    if (!r.brush || r.normal.z < t.groundNormal)
      for (const [a, o] of [
        [-1, -1],
        [1, 1],
        [-1, 1],
        [1, -1],
      ]) {
        const c = {
            min: ae(a < 0 ? -16 : 0, o < 0 ? -16 : 0, 0),
            max: ae(a < 0 ? 0 : 16, o < 0 ? 0 : 16, n.max.z),
          },
          l = this.world.trace(e.position, s, c);
        if (l.brush && l.normal.z >= t.groundNormal && !l.allSolid) {
          r = { ...l, end: r.end, fraction: r.fraction };
          break;
        }
      }
    ((e.grounded = !!r.brush && r.normal.z >= t.groundNormal && !r.allSolid),
      (e.groundId = e.grounded ? r.brush.id : null),
      e.grounded
        ? (e.surfaceFriction = Math.min(1, r.brush.friction * 1.25))
        : e.velocity.z > 0 && (e.surfaceFriction = 0.25));
  }
  duck(e, t) {
    const n = this.config,
      s = (n.standHeight - n.duckHeight) / 2;
    if (t.duck)
      ((e.duckFraction = Ts(e.duckFraction + n.dt / n.duckTime, 0, 1)),
        !e.ducked &&
          (!e.grounded || e.duckFraction >= 1) &&
          (e.grounded || (e.position.z = this.r(e.position.z + s)),
          (e.ducked = !0),
          (e.duckFraction = 1),
          this.categorize(e)));
    else if (e.duckFraction > 0 || e.ducked) {
      const a = dn(e.position, ae(0, 0, !e.grounded && e.ducked ? -s : 0)),
        o = { min: ae(-16, -16, 0), max: ae(16, 16, n.standHeight) },
        c = this.world.trace(a, a, o);
      !c.startSolid && !c.allSolid
        ? ((e.duckFraction = Ts(e.duckFraction - n.dt / n.unduckTime, 0, 1)),
          e.ducked &&
            (!e.grounded || e.duckFraction === 0) &&
            ((e.position = this.vector(a)),
            (e.ducked = !1),
            (e.duckFraction = 0),
            this.categorize(e)))
        : (e.duckFraction = 1);
    }
    const r = e.duckFraction * e.duckFraction * (3 - 2 * e.duckFraction);
    e.eyeHeight = n.standEye + (n.duckEye - n.standEye) * r;
  }
  wish(e, t) {
    const n = (t.yaw * Math.PI) / 180,
      s = Ts(t.forward, -400, 400),
      r = Ts(t.side, -400, 400),
      a = ae(
        Math.cos(n) * s + Math.sin(n) * r,
        Math.sin(n) * s - Math.cos(n) * r,
        0,
      );
    let o = Math.min(cs(a), this.config.maxSpeed);
    return (
      (t.duck || e.ducked || e.duckFraction > 0) && (o *= 0.34),
      { direction: this.vector(sr(a)), speed: this.r(o) }
    );
  }
  accelerate(e, t, n, s) {
    const r = this.config,
      a = this.r((s ? Math.min(n, r.airCap) : n) - this.r(Gt(e.velocity, t)));
    if (a <= 0) return;
    const o = this.r(
      this.r(this.r((s ? r.airAccelerate : r.accelerate) * r.dt) * n) *
        e.surfaceFriction,
    );
    e.velocity = this.vector(dn(e.velocity, yn(t, Math.min(a, o))));
  }
  friction(e) {
    const t = cs(e.velocity);
    if (t < 0.1) return;
    const n =
      Math.max(t, this.config.stopSpeed) *
      this.config.friction *
      e.surfaceFriction *
      this.config.dt;
    e.velocity = this.vector(yn(e.velocity, Math.max(0, t - n) / t));
  }
  recoverContact(e, t) {
    const n = Kt(e, this.config),
      s = [];
    for (const r of t.planes) {
      const a = r.normal,
        o =
          a.x * (a.x < 0 ? n.max.x : n.min.x) +
          a.y * (a.y < 0 ? n.max.y : n.min.y) +
          a.z * (a.z < 0 ? n.max.z : n.min.z),
        c = Gt(e.position, a) + o - r.distance;
      c >= -Xn && c <= Xn && s.push(a);
    }
    if (!s.length) return !1;
    for (const r of [0, -1, 1])
      for (const a of [0, -1, 1])
        for (const o of [0, 1, -1]) (r || a || o) && s.push(ae(r, a, o));
    for (const r of s) {
      const a = this.vector(dn(e.position, yn(r, Xn * 2))),
        o = this.world.trace(a, a, n);
      if (!o.startSolid && !o.allSolid) return ((e.position = a), !0);
    }
    return !1;
  }
  slide(e, t) {
    let n = this.config.dt,
      s = 0,
      r = Wn(e.velocity);
    const a = Wn(e.velocity);
    let o = [],
      c = 0;
    for (let l = 0; l < 4 && !(cs(e.velocity) < 1e-10); l++) {
      let u = Wn(e.position),
        h = dn(u, yn(e.velocity, n)),
        d = this.world.trace(u, h, Kt(e, this.config));
      if (
        (d.allSolid &&
          d.brush &&
          this.recoverContact(e, d.brush) &&
          (t.segments.push({
            from: u,
            to: Wn(e.position),
            startFraction: s / this.config.dt,
            endFraction: s / this.config.dt,
          }),
          (u = Wn(e.position)),
          (h = dn(u, yn(e.velocity, n))),
          (d = this.world.trace(u, h, Kt(e, this.config)))),
        (c += d.fraction),
        d.allSolid)
      ) {
        ((e.velocity = ae()), (t.blocked = !0));
        break;
      }
      if (
        (d.fraction > 0 &&
          ((e.position = this.vector(d.end)),
          (r = Wn(e.velocity)),
          (o = []),
          t.segments.push({
            from: u,
            to: Wn(e.position),
            startFraction: s / this.config.dt,
            endFraction: (s + n * d.fraction) / this.config.dt,
          })),
        d.fraction === 1)
      )
        break;
      if (
        (t.contacts.push({
          normal: Wn(d.normal),
          brushId: d.brush?.id ?? "unknown",
        }),
        this.config.inclineFix &&
          l === 0 &&
          !e.grounded &&
          r.z <= 140 &&
          d.normal.z >= this.config.groundNormal &&
          d.normal.z < 1 &&
          r.x * d.normal.x + r.y * d.normal.y < 0 &&
          Si(tc(r, d.normal, this.r)) <= Si(r))
      ) {
        ((e.position.z = this.r(e.position.z + 0.1)),
          t.segments.length &&
            (t.segments[t.segments.length - 1].to = Wn(e.position)),
          (e.velocity.z = 0));
        break;
      }
      if (
        ((s += n * d.fraction),
        (n *= 1 - d.fraction),
        o.push(d.normal),
        o.length > 5)
      ) {
        e.velocity = ae();
        break;
      }
      if (o.length === 1 && !e.grounded)
        ((e.velocity = this.vector(tc(r, d.normal, this.r))),
          (r = Wn(e.velocity)));
      else {
        let f = null;
        for (let g = 0; g < o.length; g++) {
          const y = tc(r, o[g], this.r);
          if (o.every((m, p) => g === p || Gt(y, m) >= 0)) {
            f = y;
            break;
          }
        }
        if (f) e.velocity = this.vector(f);
        else if (o.length === 2) {
          const g = sr(Jr(o[0], o[1]));
          e.velocity = this.vector(yn(g, Gt(g, e.velocity)));
        } else {
          e.velocity = ae();
          break;
        }
        if (Gt(e.velocity, a) <= 0) {
          e.velocity = ae();
          break;
        }
      }
    }
    c === 0 && (e.velocity = ae());
  }
  walk(e, t) {
    if (((e.velocity.z = 0), cs(e.velocity) < 1)) {
      e.velocity = ae();
      return;
    }
    const n = structuredClone(e),
      s = t.segments.length,
      r = t.contacts.length;
    if ((this.slide(e, t), t.contacts.length > r)) {
      const c = structuredClone(e),
        l = t.segments.slice(s),
        u = t.contacts.slice(r),
        h = t.blocked;
      (Object.assign(e, structuredClone(n)),
        (t.segments.length = s),
        (t.contacts.length = r),
        (t.blocked = !1));
      const d = this.world.trace(
        e.position,
        dn(e.position, ae(0, 0, this.config.stepSize + Xn)),
        Kt(e, this.config),
      );
      (!d.startSolid && !d.allSolid && (e.position = this.vector(d.end)),
        this.slide(e, t));
      const f = this.world.trace(
        e.position,
        dn(e.position, ae(0, 0, -this.config.stepSize - Xn)),
        Kt(e, this.config),
      );
      !f.allSolid && !f.startSolid && (e.position = this.vector(f.end));
      const g = Si(Un(c.position, n.position)),
        y = Si(Un(e.position, n.position));
      f.normal.z < this.config.groundNormal || g > y
        ? (Object.assign(e, c),
          t.segments.splice(s, 1 / 0, ...l),
          t.contacts.splice(r, 1 / 0, ...u),
          (t.blocked = h))
        : (e.velocity.z = c.velocity.z);
    }
    const a = this.world.trace(
        e.position,
        dn(e.position, ae(0, 0, 2)),
        Kt(e, this.config),
      ),
      o = this.world.trace(
        a.end,
        dn(e.position, ae(0, 0, -this.config.stepSize)),
        Kt(e, this.config),
      );
    o.fraction > 0 &&
      o.fraction < 1 &&
      !o.startSolid &&
      o.normal.z >= this.config.groundNormal &&
      Math.abs(e.position.z - o.end.z) > 0.015625 &&
      (e.position = this.vector(o.end));
  }
  tick(e, t, n) {
    const s = this.config,
      r = {
        segments: [],
        contacts: [],
        wishDirection: ae(),
        wishSpeed: 0,
        jumped: !1,
        landed: !1,
        blocked: !1,
      };
    ((e.yaw = t.yaw), (e.pitch = Ts(t.pitch, -89, 89)), this.duck(e, t));
    const a = e.grounded;
    ((e.velocity.z = this.r(e.velocity.z - this.r(s.gravity * s.dt * 0.5))),
      n?.z && (e.velocity.z = this.r(e.velocity.z + this.r(n.z * s.dt))),
      this.checkVelocity(e),
      t.jump &&
        e.grounded &&
        (!e.jumpHeld || s.autoBhop) &&
        ((e.grounded = !1),
        (e.groundId = null),
        (e.velocity.z = this.r(
          (e.ducked || e.duckFraction > 0 ? 0 : e.velocity.z) + s.jumpImpulse,
        )),
        (e.velocity.z = this.r(e.velocity.z - this.r(s.gravity * s.dt * 0.5))),
        (r.jumped = !0)),
      (e.jumpHeld = t.jump),
      e.grounded && ((e.velocity.z = 0), this.friction(e)),
      this.checkVelocity(e));
    const o = this.wish(e, t);
    return (
      (r.wishDirection = o.direction),
      (r.wishSpeed = o.speed),
      this.accelerate(e, o.direction, o.speed, !e.grounded),
      n && (e.velocity = this.vector(dn(e.velocity, ae(n.x, n.y, 0)))),
      e.grounded ? this.walk(e, r) : this.slide(e, r),
      n && (e.velocity = this.vector(Un(e.velocity, ae(n.x, n.y, 0)))),
      this.categorize(e),
      this.checkVelocity(e),
      (e.velocity.z = this.r(e.velocity.z - this.r(s.gravity * s.dt * 0.5))),
      this.checkVelocity(e),
      e.grounded && (e.velocity.z = 0),
      (e.position = this.vector(e.position)),
      (r.landed = !a && e.grounded),
      e.tick++,
      r
    );
  }
}
function To(i, e, t, n) {
  if (t.hulls) return fh(i, e, t, n)[0] ?? null;
  let s = 0,
    r = 1;
  for (const a of ["x", "y", "z"]) {
    const o = t.min[a] - n.max[a],
      c = t.max[a] - n.min[a],
      l = e[a] - i[a];
    if (Math.abs(l) < 1e-12) {
      if (i[a] < o || i[a] > c) return null;
      continue;
    }
    const u = (o - i[a]) / l,
      h = (c - i[a]) / l;
    if (
      ((s = Math.max(s, Math.min(u, h))),
      (r = Math.min(r, Math.max(u, h))),
      s > r)
    )
      return null;
  }
  return [s, r];
}
function fh(i, e, t, n) {
  if (!t.hulls) {
    const o = To(i, e, t, n);
    return o ? [o] : [];
  }
  const s = { ...t, hulls: void 0 };
  if (!To(i, e, s, n)) return [];
  const r = [];
  for (const o of t.hulls) {
    let c = 0,
      l = 1,
      u = !1;
    for (const h of o.planes) {
      const d = h.normal,
        f =
          d.x * (d.x < 0 ? n.max.x : n.min.x) +
          d.y * (d.y < 0 ? n.max.y : n.min.y) +
          d.z * (d.z < 0 ? n.max.z : n.min.z),
        g = Gt(i, d) - h.distance + f,
        y = Gt(e, d) - h.distance + f;
      if (g > 0 && y > 0) {
        u = !0;
        break;
      }
      if (g <= 0 && y <= 0) continue;
      const m = g / (g - y);
      if ((g > y ? (c = Math.max(c, m)) : (l = Math.min(l, m)), c > l)) {
        u = !0;
        break;
      }
    }
    u || r.push([c, l]);
  }
  r.sort((o, c) => o[0] - c[0]);
  const a = [];
  for (const o of r) {
    const c = a.at(-1);
    c && o[0] <= c[1] ? (c[1] = Math.max(c[1], o[1])) : a.push(o);
  }
  return a;
}
const ms = (i, e, t) => !!To(i, i, e, t);
class Bf {
  constructor(e, t, n = !0, s = "historical") {
    ((this.zones = e),
      (this.dt = t),
      (this.restrictStart = n),
      (this.startPolicy = s));
  }
  zones;
  dt;
  restrictStart;
  startPolicy;
  state = {
    phase: "ready",
    startTick: null,
    endTick: null,
    splits: [],
    invalidReason: null,
    elapsed: 0,
  };
  armed = !1;
  prehops = 0;
  reset(e, t) {
    ((this.state = {
      phase: "ready",
      startTick: null,
      endTick: null,
      splits: [],
      invalidReason: null,
      elapsed: 0,
    }),
      (this.prehops = 0),
      (this.armed = this.zones.some((n) => n.kind === "start" && ms(e, n, t))));
  }
  invalidate(e) {
    this.state.invalidReason ??= e;
  }
  noteStartJump() {
    this.state.phase === "ready" &&
      this.armed &&
      ++this.prehops > 4 &&
      this.restrictStart &&
      this.startPolicy === "historical" &&
      this.invalidate("More than four start prehops");
  }
  startSpeedCap(e) {
    return this.startPolicy === "historical" && this.prehops
      ? 270
      : e
        ? 325
        : 350;
  }
  step(e, t, n, s, r = !1) {
    const a = [];
    for (const c of t)
      for (const l of this.zones) {
        const u = fh(c.from, c.to, l, n);
        for (const h of u) {
          const d = c.endFraction - c.startFraction;
          l.kind === "start"
            ? ((this.armed = !0),
              ms(c.to, l, n) ||
                a.push({
                  at: e + c.startFraction + h[1] * d,
                  zone: l,
                  exit: !0,
                }))
            : a.push({ at: e + c.startFraction + h[0] * d, zone: l, exit: !1 });
        }
      }
    a.sort(
      (c, l) => c.at - l.at || (c.zone.order ?? 99) - (l.zone.order ?? 99),
    );
    const o = [];
    for (const c of a) {
      const l = this.state,
        u = c.zone;
      if (u.kind === "start" && this.armed && l.phase === "ready") {
        ((l.phase = "running"), (l.startTick = c.at));
        const h = this.startSpeedCap(r);
        (this.restrictStart &&
          this.startPolicy === "historical" &&
          s > h + 0.01 &&
          this.invalidate(`Start speed exceeds ${h} u/s`),
          o.push("start"));
      } else if (
        u.kind === "checkpoint" &&
        l.phase === "running" &&
        u.order === l.splits.length + 1
      )
        (l.splits.push((c.at - l.startTick) * this.dt), o.push(u.id));
      else if (
        u.kind === "finish" &&
        l.phase === "running" &&
        l.splits.length ===
          this.zones.filter((h) => h.kind === "checkpoint").length
      )
        ((l.phase = "finished"),
          (l.endTick = c.at),
          (l.elapsed = (c.at - l.startTick) * this.dt),
          o.push("finish"));
      else if (u.kind === "reset" && l.phase !== "finished") {
        o.push("fall");
        break;
      }
    }
    return (
      this.state.phase === "running" &&
        (this.state.elapsed = (e + 1 - this.state.startTick) * this.dt),
      o
    );
  }
}
function zf(i, e, t, n) {
  const s = Kt(e, t),
    r = i.noJumpZones?.find((a) =>
      ms(e.position, { ...a, name: a.id, kind: "checkpoint" }, s),
    );
  return r
    ? {
        command: { ...n, jump: !1 },
        config: { ...t, dt: Math.fround(t.dt * r.movementScale) },
      }
    : { command: n, config: t };
}
function Hf(i, e, t) {
  const n = t.float32 ? Math.fround : (r) => r;
  let s;
  for (const r of i.pushZones ?? [])
    if (
      !(!(r.spawnflags & 65) || r.spawnflags & 128) &&
      ms(e.position, { ...r, kind: "checkpoint", name: r.id }, Kt(e, t))
    ) {
      s ??= { x: 0, y: 0, z: 0 };
      for (const a of ["x", "y", "z"])
        s[a] = n(s[a] + n(r.direction[a] * r.speed));
    }
  if (s)
    return (
      s.z > 0 &&
        e.grounded &&
        ((e.grounded = !1),
        (e.groundId = null),
        (e.position.z = n(e.position.z + 1))),
      (e.baseVelocity = { x: s.x, y: s.y, z: 0 }),
      s
    );
  if (e.baseVelocity) {
    const r = n(1 + t.dt * 0.5);
    for (const a of ["x", "y", "z"])
      e.velocity[a] = n(e.velocity[a] + n(e.baseVelocity[a] * r));
    delete e.baseVelocity;
  }
}
function Vf(i, e, t) {
  if (!i.playerOutputZones?.length) return;
  const n = (e.mapOutputState ??= {
      contacts: [],
      accepted: [],
      targetname: "",
    }),
    s = Kt(e, t),
    r = [],
    a = new Set(n.accepted),
    o = [];
  for (const c of i.playerOutputZones)
    if (ms(e.position, { ...c, kind: "checkpoint", name: c.id }, s)) {
      if ((r.push(c.id), !n.contacts.includes(c.id))) {
        const u = c.filter;
        (!u || (n.targetname === u.targetname) !== u.negated) &&
          (a.add(c.id), o.push(...c.onStart));
      }
    } else a.delete(c.id) && o.push(...c.onEnd);
  ((n.contacts = r), (n.accepted = [...a]));
  for (const c of o)
    c.property === "targetname"
      ? (n.targetname = c.value)
      : (e.baseVelocity = { ...c.value });
}
function Gf(i, e, t) {
  let n = null;
  for (const s of e)
    for (const r of i.teleportZones ?? []) {
      const a = To(s.from, s.to, { ...r, kind: "checkpoint", name: r.id }, t);
      if (!a) continue;
      const o = s.startFraction + a[0] * (s.endFraction - s.startFraction);
      (!n || o < n.at) && (n = { zone: r, at: o });
    }
  return n;
}
function Wf(i, e) {
  return i
    .filter((t) => t.startFraction <= e)
    .map((t) => {
      if (t.endFraction <= e) return t;
      const n = (e - t.startFraction) / (t.endFraction - t.startFraction);
      return {
        ...t,
        to: {
          x: t.from.x + (t.to.x - t.from.x) * n,
          y: t.from.y + (t.to.y - t.from.y) * n,
          z: t.from.z + (t.to.z - t.from.z) * n,
        },
        endFraction: e,
      };
    });
}
function Tu(i, e, t, n) {
  const s = e.stage ? t.stages?.[e.stage - 1]?.spawn : e.destination;
  if (!s) throw Error("Missing reviewed teleport destination");
  if (e.landmark && !e.stage) {
    const r = (a) =>
      Math.fround(
        Math.fround(i.position[a] - Math.fround(e.landmark[a])) +
          Math.fround(s.position[a]),
      );
    i.position = { x: r("x"), y: r("y"), z: r("z") };
  } else
    ((i.position = { ...s.position }), (i.yaw = s.yaw), (i.pitch = s.pitch));
  ((i.grounded = !1),
    (i.groundId = null),
    (i.surfaceFriction = 1),
    delete i.baseVelocity,
    e.stage !== void 0 && (i.stage = e.stage),
    e.velocity === "stage" &&
      (i.velocity = { x: 0, y: 0, z: Math.fround(-n.gravity * n.dt * 0.5) }));
}
const Au = new WeakMap();
class fa {
  constructor(e, t = { ...Jl }) {
    ((this.map = e), (this.config = t));
    let n = Au.get(e.brushes);
    (n ||
      ((n = new hh(e.brushes, e.displacementTriangles)), Au.set(e.brushes, n)),
      (this.movement = new Of(n, t)),
      (this.state = ec(e.spawn.position, e.spawn.yaw, e.spawn.pitch)),
      this.movement.categorize(this.state),
      (this.timer = new Bf(e.zones, t.dt, !t.unrestrictedStart, t.startPolicy)),
      this.timer.reset(this.state.position, Kt(this.state, t)),
      (this.previous = structuredClone(this.state)),
      (this.initialState = structuredClone(this.state)),
      e.id === "laboratory" && this.setPractice(!0));
  }
  map;
  config;
  movement;
  state;
  timer;
  practice = !1;
  lastResult = null;
  previous;
  saved = null;
  commands = [];
  initialState;
  restart() {
    ((this.state = ec(
      this.map.spawn.position,
      this.map.spawn.yaw,
      this.map.spawn.pitch,
    )),
      this.movement.categorize(this.state),
      (this.previous = structuredClone(this.state)),
      (this.initialState = structuredClone(this.state)),
      (this.commands = []),
      (this.lastResult = null),
      this.timer.reset(this.state.position, Kt(this.state, this.config)),
      this.practice && this.timer.invalidate("Practice mode"));
  }
  setPractice(e) {
    ((this.practice = e),
      e ? this.timer.invalidate("Practice mode") : this.restart());
  }
  save() {
    (this.setPractice(!0), (this.saved = structuredClone(this.state)));
  }
  restore() {
    return this.saved
      ? (this.setPractice(!0),
        (this.state = structuredClone(this.saved)),
        (this.previous = structuredClone(this.state)),
        (this.initialState = structuredClone(this.state)),
        (this.commands = []),
        (this.lastResult = null),
        this.timer.reset(this.state.position, Kt(this.state, this.config)),
        this.timer.invalidate("Practice restore"),
        !0)
      : !1;
  }
  visitStation(e) {
    ((this.practice = !0),
      (this.state = ec(e.position, e.yaw, e.pitch)),
      this.movement.categorize(this.state));
    const t =
      e.practiceStage !== void 0
        ? e.practiceStage - 1
        : this.map.stages?.findIndex(
            (n) =>
              n.spawn === e || JSON.stringify(n.spawn) === JSON.stringify(e),
          );
    (t !== void 0 &&
      t >= 0 &&
      t < (this.map.stages?.length ?? 0) &&
      (this.state.stage = t + 1),
      (this.previous = structuredClone(this.state)),
      (this.initialState = structuredClone(this.state)),
      (this.commands = []),
      (this.lastResult = null),
      this.timer.reset(this.state.position, Kt(this.state, this.config)),
      this.timer.invalidate("Practice station"));
  }
  invalidate(e) {
    this.timer.state.phase === "running" && this.timer.invalidate(e);
  }
  step(e) {
    this.previous = structuredClone(this.state);
    const t = this.state.tick;
    if ((this.commands.push({ ...e }), this.state.pendingStageTeleport)) {
      const u = this.state.pendingStageTeleport;
      return (
        delete this.state.pendingStageTeleport,
        Tu(
          this.state,
          {
            min: this.state.position,
            max: this.state.position,
            destination: this.map.stages[u - 1].spawn,
            stage: u,
            velocity: "stage",
          },
          this.map,
          this.config,
        ),
        this.state.tick++,
        (this.previous = structuredClone(this.state)),
        (this.lastResult = null),
        this.timer.step(t, [], Kt(this.state, this.config), 0, !1),
        ["teleport"]
      );
    }
    const n = zf(this.map, this.state, this.config, e),
      s = Hf(this.map, this.state, n.config);
    ((this.movement.config = n.config),
      (this.lastResult = this.movement.tick(this.state, n.command, s)),
      (this.movement.config = this.config),
      Vf(this.map, this.state, this.config),
      this.lastResult.jumped && this.timer.noteStartJump());
    const r = Kt(this.state, this.config),
      a = Gf(this.map, this.lastResult.segments, r),
      o = a ? Wf(this.lastResult.segments, a.at) : this.lastResult.segments,
      c = this.timer.step(
        t,
        o,
        r,
        Si(this.state.velocity),
        this.state.grounded,
      );
    if (
      (this.map.stageProgression === "continuous" &&
        c.some((u) =>
          this.map.zones.some((h) => h.id === u && h.kind === "checkpoint"),
        ) &&
        (this.state.stage = this.timer.state.splits.length + 1),
      a && !c.includes("finish") && !c.includes("fall"))
    ) {
      const u = a.zone;
      (u.velocity === "preserve" &&
        u.checkpoint &&
        u.stage !== (this.state.stage ?? 1) + 1 &&
        this.timer.invalidate("Stages completed out of order"),
        u.velocity === "stage"
          ? (u.checkpoint &&
              u.stage !== (this.state.stage ?? 1) + 1 &&
              this.timer.invalidate("Stages completed out of order"),
            (this.state.pendingStageTeleport = u.stage),
            (this.previous = structuredClone(this.state)),
            u.checkpoint || c.push("stage-return"))
          : (Tu(this.state, u, this.map, this.config),
            (this.previous = structuredClone(this.state)),
            c.push("teleport")));
    }
    const l = this.map.stages?.[(this.state.stage ?? 1) - 1]?.start;
    if (
      l &&
      this.map.stageProgression !== "continuous" &&
      !this.config.unrestrictedStart &&
      ms(this.previous.position, l, r) &&
      !ms(this.state.position, l, r)
    ) {
      const u = Si(this.state.velocity),
        h = this.state.grounded ? 325 : 350;
      u > h &&
        ((this.state.velocity.x = Math.fround((this.state.velocity.x * h) / u)),
        (this.state.velocity.y = Math.fround((this.state.velocity.y * h) / u)));
    }
    if (
      c.includes("start") &&
      !this.config.unrestrictedStart &&
      this.config.startPolicy === "boreas"
    ) {
      const u = Si(this.state.velocity),
        h = this.timer.startSpeedCap(this.state.grounded);
      u > h &&
        ((this.state.velocity.x = Math.fround((this.state.velocity.x * h) / u)),
        (this.state.velocity.y = Math.fround((this.state.velocity.y * h) / u)));
    }
    return (
      (c.includes("fall") ||
        this.state.position.z < this.map.fallZ ||
        Math.abs(this.state.position.x) > 32768 ||
        Math.abs(this.state.position.y) > 32768 ||
        this.lastResult.blocked) &&
        (this.restart(), c.includes("fall") || c.push("fall")),
      c
    );
  }
  replay() {
    return {
      format: 1,
      mapId: this.map.id,
      mapVersion: this.map.version,
      config: { ...this.config },
      initialState: structuredClone(this.initialState),
      commands: this.commands.map((e) => ({ ...e })),
    };
  }
  loadReplay(e) {
    if (
      e.format !== 1 ||
      e.mapId !== this.map.id ||
      e.mapVersion !== this.map.version ||
      rr(e.config) !== rr(this.config)
    )
      throw new Error("Replay map or physics version mismatch");
    ((this.practice = !0),
      (this.state = structuredClone(e.initialState)),
      (this.previous = structuredClone(this.state)),
      (this.initialState = structuredClone(this.state)),
      (this.commands = []),
      this.timer.reset(this.state.position, Kt(this.state, this.config)),
      this.timer.invalidate("Watching recorded route"));
  }
}
class Wo {
  constructor(e) {
    this.dt = e;
  }
  dt;
  accumulator = 0;
  reset() {
    this.accumulator = 0;
  }
  advance(e, t, n) {
    if (!Number.isFinite(e) || e < 0 || e > 0.25) return (this.reset(), n(), 0);
    this.accumulator += e;
    let s = 0;
    for (; this.accumulator + 1e-12 >= this.dt; )
      (t(), (this.accumulator -= this.dt), s++);
    return s;
  }
}

export { fa as GameSession, Of as Movement, hh as CollisionWorld, Ff as BVH, Wo as FixedStepper, Kt as playerHull, dh as rankedConfig };
