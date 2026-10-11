var e = {
    youtube: `YouTube creator`,
    twitch: `Twitch creator`,
    tiktok: `TikTok creator`,
    x: `X creator`,
  },
  t = [
    { id: `rose`, name: `Rose`, hex: `#ffa8cb` },
    { id: `peach`, name: `Peach`, hex: `#ffab8f` },
    { id: `sand`, name: `Sand`, hex: `#d2c2a5` },
    { id: `lime`, name: `Lime`, hex: `#c4ee6a` },
    { id: `aqua`, name: `Aqua`, hex: `#6ff0f0` },
    { id: `periwinkle`, name: `Periwinkle`, hex: `#a8b8ff` },
  ],
  n = (e) => typeof e == `string` && t.some((t) => t.id === e),
  r = [
    { id: `glow`, name: `Glow` },
    { id: `paint`, name: `Gradient` },
    { id: `sparkle`, name: `Shine` },
  ],
  i = (e) => typeof e == `string` && r.some((t) => t.id === e),
  a = (e) => e === `paint`,
  o = (e) => (e === `shimmer` ? `paint` : i(e) ? e : null),
  s = (e) => (n(e) ? t.find((t) => t.id === e).hex : null),
  c = [`developer`, `admin`, `moderator`],
  l = { developer: `Developer`, admin: `Admin`, moderator: `Moderator` };
function u(e) {
  return e === `owner`
    ? `developer`
    : e === `admin`
      ? `admin`
      : e === `moderator`
        ? `moderator`
        : null;
}
var d = `Server Booster`,
  f = `#3b9eff`,
  p = `M7 12.4l3.3 3.3L17.2 8.8`,
  m = {
    youtube: `#ff3d3d`,
    twitch: `#a970ff`,
    tiktok: `#25f4ee`,
    x: `#e7e9ea`,
  },
  h = { x: 2.5, y: 2.5, size: 19, r: 5 },
  g = `M7.8 15.4a2.7 2.7 0 1 0 5.4 0a2.7 2.7 0 1 0-5.4 0M13.2 15.4V6.2c.5 2 1.9 3.1 3.9 3.3`,
  _ = {
    tiktok: {
      tile: `#121318`,
      edge: `#3a3d48`,
      strokes: [
        { d: g, color: `#25f4ee`, width: 2.1, dx: -0.7, dy: -0.5 },
        { d: g, color: `#fe2c55`, width: 2.1, dx: 0.7, dy: 0.5 },
        { d: g, color: `#fff`, width: 2.1 },
      ],
    },
    x: {
      tile: `#0b0c0f`,
      edge: `#3a3d48`,
      strokes: [
        { d: `M7.6 6.8 16.4 17.2`, color: `#fff`, width: 2.8 },
        { d: `M16.4 6.8 7.6 17.2`, color: `#fff`, width: 1.4 },
      ],
    },
  },
  v = (e) =>
    `<rect x="${h.x}" y="${h.y}" width="${h.size}" height="${h.size}" rx="${h.r}" fill="${e.tile}" stroke="${e.edge}" stroke-width="1"/>` +
    e.strokes
      .map(
        (e) =>
          `<path d="${e.d}"${e.dx || e.dy ? ` transform="translate(${e.dx ?? 0} ${e.dy ?? 0})"` : ``} fill="none" stroke="${e.color}" stroke-width="${e.width}" stroke-linecap="round" stroke-linejoin="round"/>`,
      )
      .join(``),
  y = `<circle cx="12" cy="12" r="11" fill="${f}"/><path d="${p}" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`,
  b = `#e05cf3`,
  x = `M8.7 6.8h6.6l3.3 4L12 18.4 5.4 10.8z`,
  S = `M5.4 10.8h13.2`,
  C = `<circle cx="12" cy="12" r="11" fill="${b}"/><path d="${x}" fill="#fff" stroke="#fff" stroke-width="0.6" stroke-linejoin="round"/><path d="${S}" stroke="${b}" stroke-width="1.5"/>`,
  w = `Supporter`,
  T = `heart`,
  E = `#10202a`,
  D = [
    {
      d: `M1.8 12a10.2 10.2 0 1 0 20.4 0a10.2 10.2 0 1 0 -20.4 0z`,
      fill: `#f4bf3a`,
      stroke: `#7a4f0c`,
      width: 1,
    },
    {
      d: `M4.3 12a7.7 7.7 0 1 0 15.4 0a7.7 7.7 0 1 0 -15.4 0z`,
      stroke: `#c98a1a`,
      width: 0.9,
    },
  ],
  O = {
    coin: [
      ...D,
      {
        d: `M15 8.9c-.45-1.05-1.6-1.75-3-1.75-1.75 0-3 .95-3 2.3 0 3.2 6.1 1.7 6.1 5.1 0 1.45-1.35 2.5-3.15 2.5-1.5 0-2.75-.75-3.25-1.9M12 5.4v13.2`,
        stroke: `#6b4208`,
        width: 1.9,
      },
    ],
    heart: [
      {
        d: `M12 20.8C6.2 16.7 2.7 13.4 2.7 9.3 2.7 6.6 4.8 4.6 7.3 4.6c2 0 3.6 1 4.7 2.7 1.1-1.7 2.7-2.7 4.7-2.7 2.5 0 4.6 2 4.6 4.7 0 4.1-3.5 7.4-9.3 11.5z`,
        fill: `#ff5a6e`,
        stroke: `#7a1424`,
        width: 0.9,
      },
      { d: `M6.4 7.6c-.9.4-1.4 1.2-1.4 2.2`, stroke: `#ffd0d6`, width: 1.3 },
    ],
    star: [
      ...D,
      {
        d: `M12 6.9 13.35 10.44 17.14 10.63 14.19 13.01 15.17 16.67 12 14.6 8.83 16.67 9.81 13.01 6.86 10.63 10.65 10.44z`,
        fill: `#8a5a0c`,
      },
    ],
    crystal: [
      { d: `M18.2 5.8 15 9.6 14.4 21.6H18.4L18.6 10.4z`, fill: `#5ff2df` },
      { d: `M18.2 5.8 18.6 10.4 18.4 21.6H20.8L22 10.2z`, fill: `#1a8f9c` },
      { d: `M18.2 5.8 22 10.2 20.8 21.6H14.4L15 9.6z`, stroke: E, width: 0.8 },
      { d: `M9.4 1.6 3.8 6.8 9.6 7.8z`, fill: `#ddd2ff` },
      { d: `M9.4 1.6 9.6 7.8 15.4 6.2z`, fill: `#a58bff` },
      { d: `M3.8 6.8 9.6 7.8 9.8 21.6H4.8z`, fill: `#9a7cff` },
      { d: `M9.6 7.8 15.4 6.2 14.8 21.6H9.8z`, fill: `#5a40cc` },
      { d: `M9.4 1.6 15.4 6.2 14.8 21.6H4.8L3.8 6.8z`, stroke: E, width: 0.8 },
    ],
  }[T],
  k = ((e) =>
    e
      .map(
        (e) =>
          `<path d="${e.d}" fill="${e.fill ?? `none`}"${e.stroke ? ` stroke="${e.stroke}" stroke-width="${e.width ?? 1}" stroke-linecap="round" stroke-linejoin="round"` : ``}/>`,
      )
      .join(``))(O),
  A = `M12 1.4 20.8 4.6v6.6c0 5.4-3.7 9.6-8.8 11.3-5.1-1.7-8.8-5.9-8.8-11.3V4.6z`,
  j = `#0b0d12`,
  M = { developer: `#ffc23d`, admin: `#79d2ff`, moderator: `#7fe0b0` },
  N = {
    moderator: [{ d: `M7.6 14 12 9.8l4.4 4.2`, width: 2.6 }],
    admin: [
      { d: `M7.6 11.2 12 7.2l4.4 4`, width: 2.4 },
      { d: `M7.6 16.2 12 12.2l4.4 4`, width: 2.4 },
    ],
    developer: [
      { d: `M9.2 7.9 5.9 11.8l3.3 3.9M14.8 7.9l3.3 3.9-3.3 3.9`, width: 2.3 },
      { d: `M13 7.6l-2 8.4`, width: 1.9 },
    ],
  },
  P = Object.fromEntries(
    c.map((e) => [
      e,
      `<path d="${A}" fill="${M[e]}"/>` +
        N[e]
          .map(
            (e) =>
              `<path d="${e.d}" fill="none" stroke="${j}" stroke-width="${e.width}" stroke-linecap="round" stroke-linejoin="round"/>`,
          )
          .join(``),
    ]),
  ),
  F = {
    youtube: `<rect x="1.5" y="4.8" width="21" height="14.4" rx="4.4" fill="${m.youtube}"/><path d="M10 8.7v6.6l5.6-3.3z" fill="#fff"/>`,
    twitch: `<path d="M5 2.5 3 6.6v13h4.6V22h2.6l2.4-2.4h3.8L21 15V2.5z" fill="${m.twitch}"/><path d="M10.6 7h2v5.6h-2zM15.2 7h2v5.6h-2z" fill="#fff"/>`,
    tiktok: v(_.tiktok),
    x: v(_.x),
  },
  I = [`youtube`, `twitch`, `x`, `tiktok`],
  L = { youtube: `YouTube`, twitch: `Twitch`, x: `X`, tiktok: `TikTok` },
  R = /^UC[A-Za-z0-9_-]{22}$/,
  z = {
    youtube: {
      hosts: `(?:www\\.|m\\.)?youtube\\.com`,
      ok: (e) =>
        R.test(e) ||
        /^[A-Za-z0-9_-](?:[A-Za-z0-9._-]{1,28})[A-Za-z0-9_-]$/.test(e),
      hint: `Your @handle: 3-30 letters, numbers, _ - .`,
    },
    twitch: {
      hosts: `(?:www\\.|m\\.)?twitch\\.tv`,
      ok: (e) => /^[A-Za-z0-9][A-Za-z0-9_]{3,24}$/.test(e),
      hint: `Your channel name: 4-25 letters, numbers and _`,
    },
    x: {
      hosts: `(?:www\\.|mobile\\.)?(?:x|twitter)\\.com`,
      ok: (e) => /^[A-Za-z0-9_]{1,15}$/.test(e),
      hint: `Your @handle: up to 15 letters, numbers and _`,
    },
    tiktok: {
      hosts: `(?:www\\.|m\\.)?tiktok\\.com`,
      ok: (e) => /^[A-Za-z0-9_.]{1,23}[A-Za-z0-9_]$/.test(e),
      hint: `Your @handle: 2-24 letters, numbers, _ and .`,
    },
  },
  B = (e) => z[e].hint;
function V(e, t) {
  let n = t.trim();
  if (!n) return { handle: `` };
  if (n.length > 120)
    return { error: `That doesn't look like a ${L[e]} handle.` };
  let r = RegExp(`^(?:https?://)?${z[e].hosts}/(.*)$`, `i`).exec(n);
  if (r)
    ((n = r[1].replace(/[?#].*$/, ``).replace(/\/+$/, ``)),
      e === `youtube` && /^channel\//i.test(n) && (n = n.slice(8)));
  else if (/[/:]/.test(n))
    return {
      error: `Enter your ${L[e]} handle or a link to your ${L[e]} page.`,
    };
  return (
    (n = n.replace(/^@/, ``)),
    z[e].ok(n) ? { handle: n } : { error: `${z[e].hint}.` }
  );
}
function H(e, t) {
  if (!z[e]?.ok(t)) return null;
  let n = encodeURIComponent(t);
  switch (e) {
    case `youtube`:
      return R.test(t)
        ? `https://www.youtube.com/channel/${n}`
        : `https://www.youtube.com/@${n}`;
    case `twitch`:
      return `https://www.twitch.tv/${n}`;
    case `x`:
      return `https://x.com/${n}`;
    case `tiktok`:
      return `https://www.tiktok.com/@${n}`;
  }
}
var U = (e, t) =>
  e === `twitch` || (e === `youtube` && R.test(t)) ? t : `@${t}`;
function W(e) {
  return I.flatMap((t) => {
    let n = e[t],
      r = n ? H(t, n) : null;
    return n && r ? [{ platform: t, handle: n, label: U(t, n), url: r }] : [];
  });
}
function G(e) {
  if (typeof e != `string`) return null;
  let t = e.trim();
  return /^https:\/\/(?:discord\.gg|discord\.com\/invite)\/[A-Za-z0-9-]{2,32}$/.test(
    t,
  )
    ? t
    : null;
}
export {
  s as A,
  h as C,
  G as D,
  y as E,
  V as M,
  u as N,
  B as O,
  a as P,
  _ as S,
  p as T,
  N as _,
  C as a,
  O as b,
  F as c,
  r as d,
  L as f,
  A as g,
  l as h,
  b as i,
  o as j,
  W as k,
  I as l,
  j as m,
  S as n,
  m as o,
  M as p,
  d as r,
  e as s,
  x as t,
  t as u,
  P as v,
  f as w,
  k as x,
  w as y,
};
