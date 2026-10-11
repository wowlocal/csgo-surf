function e(e, t = {}) {
  if (`achievement` in e) {
    let t = e.achievement;
    return {
      kind: `medal`,
      key: `medal:${t.id}`,
      ring: t.ring,
      icon: t.icon,
      achievement: t.id,
    };
  }
  let n = e.cosmetic,
    r = t.knife || `knife-carrot`,
    i = t.finish || `fin-garden`,
    a = t.outfit || `outfit-cream`;
  switch (n.slot) {
    case `knife`:
      return {
        kind: `knife`,
        key: `knife:${n.id}:${i}:${a}`,
        knife: n.id,
        finish: i,
        outfit: a,
      };
    case `finish`:
      return {
        kind: `knife`,
        key: `knife:${r}:${n.id}:${a}`,
        knife: r,
        finish: n.id,
        outfit: a,
      };
    case `glove`:
      return {
        kind: `glove`,
        key: `glove:${n.id}:${a}`,
        glove: n.id,
        outfit: a,
      };
    case `hat`:
      return { kind: `hat`, key: `hat:${n.id}`, hat: n.id };
    case `outfit`:
      return { kind: `bunny`, key: `bunny:${n.id}`, outfit: n.id };
    case `ghost`:
    case `trail`:
      return n.color
        ? n.color2
          ? {
              kind: n.slot,
              key: `${n.slot}:${n.color}:${n.color2}`,
              color: n.color,
              color2: n.color2,
            }
          : { kind: n.slot, key: `${n.slot}:${n.color}`, color: n.color }
        : null;
    case `title`: {
      let e = n.rarity === 5 ? `#ffd45e` : `#d9a441`;
      return {
        kind: `plaque`,
        key: `plaque:${n.name}:${e}`,
        label: n.name,
        color: e,
      };
    }
    case `frame`:
      return n.color
        ? { kind: `frame`, key: `frame:${n.id}`, color: n.color }
        : null;
    case `background`:
      return n.color
        ? { kind: `card`, key: `card:${n.id}`, color: n.color }
        : null;
    default:
      return null;
  }
}
var t = {
  knife: { yaw: -0.5, tilt: 0.18, fill: 1 },
  glove: { yaw: 0.1, tilt: 0.2, fill: 0.9 },
  hat: { yaw: -0.55, tilt: 0.32, fill: 0.78 },
  bunny: { yaw: -0.5, tilt: 0.12, fill: 0.95 },
  ghost: { yaw: -0.5, tilt: 0.12, fill: 0.95 },
  trail: { yaw: -0.35, tilt: 0.16, fill: 0.92 },
  plaque: { yaw: -0.42, tilt: 0.12, fill: 0.9 },
  medal: { yaw: -0.45, tilt: 0.1, fill: 0.68 },
  frame: { yaw: -0.45, tilt: 0.12, fill: 0.74 },
  card: { yaw: -0.45, tilt: 0.12, fill: 0.74 },
};
function n(e, n, r, i = 0.5) {
  let a = t[e];
  if (!Number.isFinite(n))
    return { yaw: a.yaw, tilt: a.tilt, scale: 1, lift: 0 };
  let o = 1 - (1 - Math.min(1, Math.max(0, n / 560))) ** 3,
    s = e === `trail` ? 0 : i,
    c =
      a.yaw +
      (s * Math.max(0, n)) / 1e3 -
      (e === `trail` ? 0.9 : 2.45) * (1 - o),
    l = a.tilt + 0.05 * Math.sin(Math.max(0, n) / 900),
    u = r(Math.max(0, n));
  return {
    yaw: c,
    tilt: l,
    scale: 0.35 + 0.65 * u,
    lift: 1 - Math.min(1.2, u),
  };
}
export { e as n, n as r, t };
