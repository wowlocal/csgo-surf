import { a as e } from "./dom-CUDFsJPS.js";
import {
  A as t,
  E as n,
  a as r,
  c as i,
  f as a,
  h as o,
  j as s,
  r as c,
  s as l,
  v as u,
  x as d,
  y as f,
} from "./creators-DkuwYE0A.js";
var p = (e) =>
    `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${e}</svg>`,
  m = `Verified: this is really them`;
function h(t) {
  return e(`span.nm-staff.${t}`, {
    role: `img`,
    "aria-label": o[t],
    title: o[t],
    html: p(u[t]),
  });
}
function g() {
  return e(`span.nm-verified`, {
    role: `img`,
    "aria-label": `Verified`,
    title: m,
    html: p(n),
  });
}
function _() {
  return e(`span.nm-booster`, {
    role: `img`,
    "aria-label": c,
    title: c,
    html: p(r),
  });
}
function v() {
  return e(`span.nm-supporter`, {
    role: `img`,
    "aria-label": f,
    title: f,
    html: p(d),
  });
}
var y = `#eef1f6`;
function b(e, n) {
  let r = t(e?.nameColor),
    i = s(e?.nameEffect);
  if (!r && !i) return n ? { style: `color:${n}` } : {};
  let a = r ?? y,
    o = t(e?.nameColor2);
  return {
    style: `color:${a};--nm-c:${a}${o ? `;--nm-c2:${o}` : ``}`,
    class: i ? `nm-fx nm-fx-${i}` : void 0,
  };
}
function x(t, n = {}) {
  return !t ||
    (!t.staff && !t.verified && !t.creator && !t.booster && !t.supporter)
    ? null
    : e(
        `span.nm-marks`,
        null,
        t.staff ? h(t.staff) : null,
        t.verified ? g() : null,
        t.creator
          ? e(
              `span.nm-creator.${t.creator}${n.label ? `.labelled` : ``}`,
              { role: `img`, "aria-label": l[t.creator], title: l[t.creator] },
              e(`span.nm-icon`, { html: p(i[t.creator]) }),
              n.label ? e(`span.nm-label`, null, `Creator`) : null,
            )
          : null,
        t.booster ? _() : null,
        t.supporter ? v() : null,
      );
}
var S = {
  youtube: i.youtube,
  twitch: i.twitch,
  x: `<path d="M4 3.5h4.3l4 5.5 4.8-5.5h2.6l-6.2 7.1 6.9 9.9h-4.3l-4.4-6.1-5.4 6.1H3.7l6.6-7.6z" fill="currentColor"/>`,
  tiktok: `<path d="M13.6 3h3.1c.3 2.1 1.7 3.6 3.9 3.9v3.1c-1.5 0-2.8-.4-3.9-1.1v6.3a5.8 5.8 0 1 1-5.8-5.8h.6v3.1h-.6a2.7 2.7 0 1 0 2.7 2.7z" fill="currentColor"/>`,
};
function C(t) {
  return e(`span.lk-icon.${t}`, { html: p(S[t]) });
}
function w(t) {
  return t?.length
    ? e(
        `div.lk-chips`,
        { "aria-label": `Links` },
        ...t.map((t) =>
          e(
            `a.lk-chip`,
            {
              href: t.url,
              target: `_blank`,
              rel: `nofollow ugc noopener`,
              title: `${a[t.platform]}: ${t.label}`,
            },
            C(t.platform),
            e(`span`, null, t.label),
          ),
        ),
      )
    : null;
}
export { x as a, g as c, b as i, w as n, h as o, C as r, v as s, _ as t };
