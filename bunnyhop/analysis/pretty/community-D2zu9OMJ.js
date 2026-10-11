const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/modal-sOY9O5dF.js",
      "assets/api-B2Jj-kgC.js",
      "assets/account-state-BYMidhZ9.js",
      "assets/preload-helper-DjzSQ1t3.js",
      "assets/core-GuI4LXND.js",
      "assets/dom-CUDFsJPS.js",
      "assets/cosmetics-PGh_ZGfu.js",
      "assets/styles-DzitlxVO.js",
      "assets/loadout-DopA3xcw.js",
      "assets/replay-B40kiN_v.js",
      "assets/notify-CvHg_wVW.js",
      "assets/palettes-YJRmTQgw.js",
      "assets/notify-B1xuBBxO.css",
      "assets/events-Q3WT0NU4.js",
      "assets/avatar-kqcwn86P.js",
      "assets/account-state-Bl3cc_Rk.css",
      "assets/presence-B4W1kThY.js",
      "assets/account-panel-CPsaGxem.js",
      "assets/account-email-Bsoylshj.js",
      "assets/account-email-Rh3xavDF.css",
      "assets/feedback-B4S53b19.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper-DjzSQ1t3.js";
import { i as t } from "./api-B2Jj-kgC.js";
import { a as n } from "./dom-CUDFsJPS.js";
import { D as r } from "./creators-DkuwYE0A.js";
import { t as i } from "./nav-IlBYMvil.js";
var a = 20,
  o = [],
  s = (e, t) => (e.length > t ? `${e.slice(0, t)}…` : e);
function c(e) {
  if (e instanceof Error) return `${e.name}: ${e.message}`;
  if (typeof e == `string`) return e;
  try {
    return JSON.stringify(e) ?? String(e);
  } catch {
    return String(e);
  }
}
function l(e) {
  (o.push({
    ...e,
    msg: s(e.msg, 400),
    stack: e.stack ? s(e.stack, 900) : void 0,
  }),
    o.length > a && o.shift());
}
var u = () => o.slice(),
  d = !1;
function f() {
  if (d || typeof window > `u`) return;
  ((d = !0),
    addEventListener(`error`, (e) => {
      l({
        at: Date.now(),
        kind: `error`,
        msg: e.message || c(e.error),
        src: e.filename ? `${e.filename}:${e.lineno}:${e.colno}` : void 0,
        stack: e.error instanceof Error ? e.error.stack : void 0,
      });
    }),
    addEventListener(`unhandledrejection`, (e) => {
      l({
        at: Date.now(),
        kind: `rejection`,
        msg: c(e.reason),
        stack: e.reason instanceof Error ? e.reason.stack : void 0,
      });
    }));
  let e = console.error,
    t = !1;
  console.error = function (...n) {
    if (!t) {
      t = !0;
      try {
        l({
          at: Date.now(),
          kind: `console`,
          msg: n.map(c).join(` `),
          stack: n.find((e) => e instanceof Error)?.stack,
        });
      } catch {
      } finally {
        t = !1;
      }
    }
    return e.apply(console, n);
  };
}
f();
var p = null;
function m(e) {
  p = e;
}
function h() {
  try {
    return p?.() ?? null;
  } catch {
    return null;
  }
}
var g = null,
  _ = (e) => void (e && (g = e)),
  v = () => g;
function y(t = {}) {
  e(
    () => import(`./modal-sOY9O5dF.js`).then((e) => e.showFeedback(t)),
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]),
  );
}
var b = `<svg viewBox="0 0 24 24" aria-hidden="true" width="1.1em" height="1.1em"><path fill="currentColor" d="M20.3 4.4A19.6 19.6 0 0 0 15.4 3l-.6 1.3a18 18 0 0 0-5.6 0L8.6 3a19.5 19.5 0 0 0-4.9 1.5C.6 9.1-.3 13.6.1 18a19.7 19.7 0 0 0 6 3l1.3-2a12.7 12.7 0 0 1-2-1l.5-.4a14 14 0 0 0 12.2 0l.5.4-2 1 1.3 2a19.6 19.6 0 0 0 6-3c.5-5.1-.8-9.6-3.6-13.6ZM8 15.3c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.5 8 10.5s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Z"/></svg>`,
  x = null,
  S = null;
function C() {
  return t.available()
    ? ((x ??= t
        .config()
        .then(
          (e) =>
            (S = {
              invite: r(e.discordInvite),
              membership: e.discordMembership === !0,
            }),
        )
        .catch(() => ((x = null), { invite: null, membership: !1 }))),
      x)
    : Promise.resolve({ invite: null, membership: !1 });
}
var w = () => S?.membership ?? !1;
function T(e) {
  return (
    !e?.availability ||
    e.availability === `support` ||
    (e.availability === `discord_server` && w())
  );
}
function E() {
  return C().then((e) => e.invite);
}
function D(e = `recruit-note`, r = {}) {
  let i = n(`a.recruit-link`, { target: `_blank`, rel: `noopener` }, `Discord`),
    a = n(`span`, { hidden: !0 }, `, or ask in the `, i),
    o = n(
      `button.recruit-link`,
      {
        type: `button`,
        onclick: () => (r.beforeApply?.(), y({ category: `application` })),
      },
      `apply in Feedback`,
    ),
    s = n(
      `p.${e}`,
      { hidden: !t.available() },
      `We're looking for moderators: `,
      o,
      a,
      `.`,
    );
  return (
    E().then((e) => {
      e && ((i.href = e), (a.hidden = !1));
    }),
    s
  );
}
function O(e = `discord-link`, t = `Join the Discord`) {
  let r = n(`a.${e}`, {
    hidden: !0,
    target: `_blank`,
    rel: `noopener`,
    html: `${b}<span>${t}</span>`,
  });
  return (
    E().then((e) => {
      e && ((r.href = e), (r.hidden = !1));
    }),
    r
  );
}
function k(e = `support-link`) {
  return n(
    `a.${e}`,
    {
      href: `/?support`,
      onclick: (e) => {
        (e.preventDefault(), i({ screen: `support` }));
      },
    },
    `Support bunnyhop.lol`,
  );
}
export {
  k as a,
  _ as c,
  m as d,
  D as i,
  y as l,
  C as n,
  h as o,
  O as r,
  v as s,
  T as t,
  u,
};
