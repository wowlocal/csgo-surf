import { t as e } from "./community-D2zu9OMJ.js";
import {
  Sr as t,
  St as n,
  ln as r,
  t as i,
  un as a,
  yn as o,
} from "./model-CJn1vZL3.js";
import { t as s } from "./three.module-CTHJQ_H0.js";
import { i as c } from "./api-B2Jj-kgC.js";
import {
  C as l,
  a as u,
  l as d,
  r as f,
  t as p,
} from "./account-state-BYMidhZ9.js";
import { a as m } from "./dom-CUDFsJPS.js";
import {
  E as h,
  c as g,
  d as _,
  i as v,
  r as y,
} from "./cosmetics-PGh_ZGfu.js";
import {
  F as b,
  I as x,
  L as S,
  M as C,
  S as w,
  d as T,
} from "./loadout-DopA3xcw.js";
import { l as E } from "./lessons-CcKVOcxG.js";
import {
  b as D,
  c as O,
  o as ee,
  r as te,
  s as ne,
  t as k,
  u as re,
} from "./maps-DK5lovd-.js";
import { r as A, t as j } from "./account-email-Bsoylshj.js";
import {
  a as M,
  i as N,
  o as P,
  r as F,
  t as I,
} from "./account-panel-CPsaGxem.js";
var L = 301.993,
  R = 800,
  z = (2 * L) / R;
function B(e = { w: 300, h: 340 }) {
  let c = document.createElement(`canvas`);
  c.className = `ob-preview`;
  let l;
  try {
    l = new s({ canvas: c, antialias: !0, alpha: !0 });
  } catch {
    return null;
  }
  (l.setPixelRatio(Math.min(devicePixelRatio, 2)), l.setSize(e.w, e.h, !1));
  let u = new t(),
    d = new o(30, e.w / e.h, 1, 4e3);
  (d.position.set(118, 78, 118), d.lookAt(0, 36, 0));
  let f = new r(
    new n(26, 40).rotateX(-Math.PI / 2),
    new a({ color: 0, transparent: !0, opacity: 0.35, depthWrite: !1 }),
  );
  u.add(f);
  let p = new i({ model: `bunny`, style: `solid` });
  u.add(p.root);
  let m = 0,
    h = 0,
    g = performance.now(),
    _ = matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    v = (e) => {
      m = requestAnimationFrame(v);
      let t = Math.min(0.05, (e - g) / 1e3);
      ((g = e), (h += t));
      let n = _ ? 0 : (((h - 0.4) % z) + z) % z,
        r = h < 0.4 || _ ? 0 : Math.max(0, L * n - 0.5 * R * n * n),
        i = h < 0.4 || _ ? 0 : L - R * n,
        a = -60 + (_ ? 0 : h * 22),
        o = (a * Math.PI) / 180;
      (p.setState({
        position: [0, 0, r],
        velocity: [Math.cos(o) * 320, Math.sin(o) * 320, i],
        yaw: a,
        pitch: 6,
        crouched: !1,
        grounded: r <= 0.01,
        sidemove: Math.sin(h * 3) > 0 ? -450 : 450,
      }),
        p.update(t),
        f.scale.setScalar(1 - Math.min(0.5, r / 120)),
        l.render(u, d));
    };
  return (
    (m = requestAnimationFrame(v)),
    {
      el: c,
      dispose() {
        (cancelAnimationFrame(m),
          p.dispose(),
          l.dispose(),
          l.forceContextLoss());
      },
    }
  );
}
var V = p,
  H = k,
  U = [
    [`name`, `Name`],
    [`look`, `Bunny`],
    [`sens`, `Mouse`],
    [`map`, `Go`],
  ],
  W = [
    { id: `cs`, label: `CS2 / CS:GO / CS:S`, yaw: 0.022 },
    { id: `source`, label: `TF2 / Apex / other Source`, yaw: 0.022 },
    { id: `valorant`, label: `Valorant`, yaw: 0.07 },
    { id: `overwatch`, label: `Overwatch 2`, yaw: 0.0066 },
    { id: `quake`, label: `Quake Champions`, yaw: 0.022 },
  ],
  G = (e, t) => Math.round(((e * t) / 0.022) * 1e3) / 1e3,
  K = (e, t) => (360 / (e * 0.022) / Math.max(1, t)) * 2.54;
function q() {
  if (
    localStorage.getItem(`bunnyhop:last-map`) ||
    localStorage.getItem(`bunnyhop:stats`)
  )
    return !0;
  for (let e = 0; e < localStorage.length; e++)
    if (localStorage.key(e)?.startsWith(`bunnyhop:pb:`)) return !0;
  return !1;
}
function J() {
  try {
    localStorage.setItem(V, String(Date.now()));
  } catch {}
}
var Y = null;
function ie(e) {
  let t = new URL(location.origin + `/`);
  (t.searchParams.set(`map`, e), location.assign(t.toString()));
}
var X = !1;
async function Z(e) {
  if (((Y = e), new URLSearchParams(location.search).get(`intro`) === `1`)) {
    let e = new URL(location.href);
    return (
      e.searchParams.delete(`intro`),
      history.replaceState(null, ``, e),
      Q()
    );
  }
  if (localStorage.getItem(V)) return;
  if (q()) return J();
  let t = await u();
  if (t?.onboarded) return J();
  new URLSearchParams(location.search).has(`map`) || Q(t);
}
function Q(t) {
  if (X) return;
  X = !0;
  let n = 0,
    r = null,
    i = {},
    a = I(`ob-dialog`, `Welcome to bunnyhop.lol`, () => {
      (r?.(), (X = !1));
    });
  a.addEventListener(`cancel`, () => z());
  let o = m(`ol.ob-steps`, { "aria-label": `Steps` }),
    s = m(`div.ob-stage`),
    u = m(
      `button.btn.ob-back`,
      { type: `button`, onclick: () => V(n - 1) },
      `Back`,
    ),
    p = m(`button.btn.primary.ob-next`, { type: `button` }, `Next`),
    k = m(
      `button.link-btn.ob-skipstep`,
      { type: `button`, onclick: () => V(n + 1) },
      `Skip this step`,
    ),
    L = m(
      `button.link-btn.ob-skip`,
      { type: `button`, onclick: () => z() },
      `Skip intro`,
    );
  (a.append(
    m(
      `header.ob-head`,
      null,
      m(`span.ob-brand`, null, `bunnyhop`, m(`b`, null, `.lol`)),
      o,
      L,
    ),
    s,
    m(`footer.ob-foot`, null, u, m(`span.ob-spacer`), k, p),
  ),
    a.addEventListener(`keydown`, (e) => {
      e.key === `Enter` &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLButtonElement) &&
        !(e.target instanceof HTMLAnchorElement) &&
        p.click();
    }));
  let R = (e) => {
    c.available() && c.saveOnboarding(e).catch(() => void 0);
  };
  function z(e, t) {
    (t && (i[t] = !0),
      J(),
      R({ steps: i, done: !0 }),
      a.open && a.close(),
      e && (Y?.pick ?? ie)(e));
  }
  function V(e) {
    if (e < 0 || e >= U.length) return;
    (s.childElementCount && l(e < n ? `ui_back` : `ui_confirm`, 0.7),
      r?.(),
      (r = null),
      (n = e),
      o.replaceChildren(
        ...U.map(([t, n], r) =>
          m(
            `li${r === e ? `.on` : r < e ? `.past` : ``}`,
            { "aria-current": r === e ? `step` : void 0 },
            m(`span.ob-dot`, { "aria-hidden": `true` }, String(r + 1)),
            m(`span.ob-label`, null, n),
            i[t] ? m(`span.sr-only`, null, ` (done)`) : null,
          ),
        ),
      ),
      (u.hidden = e === 0),
      (k.hidden = e === U.length - 1),
      (p.hidden = !1),
      (p.disabled = !1),
      (p.textContent = `Next`));
    let [t] = U[e],
      a = t === `name` ? Z() : t === `look` ? Q() : t === `sens` ? oe() : se();
    (s.replaceChildren(a),
      s.classList.remove(`in`),
      s.offsetWidth,
      s.classList.add(`in`));
  }
  let q = (e) => {
    ((i[e] = !0), R({ steps: { [e]: !0 } }));
  };
  function Z() {
    let e = t && !M(t.name) ? t.name : P(),
      r = N({
        initial: e,
        label: `Display name`,
        autofocus: !0,
        onSaved: (e) => f(e ?? void 0),
      });
    (requestAnimationFrame(() => r.input.select()),
      (p.onclick = async () => {
        p.disabled = !0;
        let e = await r.save();
        ((p.disabled = !1), e && (q(`name`), V(n + 1)));
      }),
      r.input.addEventListener(`keydown`, (e) => {
        e.key === `Enter` && p.click();
      }));
    let i = m(`div.ob-signin`),
      a = m(
        `button.link-btn`,
        {
          type: `button`,
          onclick: async () => {
            a.remove();
            let e = await c
              .providers()
              .catch(() => ({ discord: !1, email: !1 }));
            i.replaceChildren(
              ...[
                m(
                  `p.dim`,
                  null,
                  `Sign in to bring your runs, name and unlocks here.`,
                ),
                e.discord
                  ? m(
                      `a.btn.discord`,
                      { href: c.discordLoginUrl(location.href) },
                      `Sign in with Discord`,
                    )
                  : null,
                e.email
                  ? j({
                      onDone: (e, n) => {
                        if (e.onboarded) return (z(), A(n));
                        (f(e), (t = e), F(n), V(1));
                      },
                    })
                  : null,
              ].filter((e) => !!e),
            );
          },
        },
        `Already play? Sign in`,
      );
    return m(
      `section.ob-step.ob-name`,
      null,
      m(`h2`, null, `Pick a name`),
      m(
        `p.ob-sub`,
        null,
        `It shows on the boards, your profile and in servers.`,
      ),
      r.el,
      c.available() ? m(`div.ob-alt`, null, a, i) : null,
    );
  }
  function Q() {
    let t = v(),
      i = T.filter(
        (n) =>
          n.slot === `outfit` &&
          ((n.unlock.kind !== `role` &&
            !C(n) &&
            !x(n) &&
            (n.unlock.kind !== `achievement` || e(w(n.unlock.id)))) ||
            t.has(n.id)),
      ),
      a = B();
    r = () => a?.dispose();
    let o = m(`div.ob-swatches`, {
        role: `radiogroup`,
        "aria-label": `Colourway`,
      }),
      s = m(`p.ob-caption`),
      u = () => {
        let e = y();
        for (let t of o.querySelectorAll(`button`))
          (t.setAttribute(`aria-checked`, String(t.dataset.id === e)),
            t.classList.toggle(`on`, t.dataset.id === e));
        let t = i.find((t) => t.id === e);
        s.textContent = t ? t.name : ``;
      };
    for (let e of i) {
      let n = e.unlock.kind === `free` || t.has(e.id);
      o.append(
        m(
          `button.ob-swatch${n ? `` : `.locked`}`,
          {
            type: `button`,
            role: `radio`,
            "data-id": e.id,
            disabled: !n,
            title: n ? e.name : `${e.name}: unlocks at ${S(e)}`,
            "aria-label": n ? e.name : `${e.name}, locked: ${S(e)}`,
            style: `--sw:${e.color}`,
            onclick: () => {
              (_(e.id),
                l(`ui_toggle`, 0.7),
                c.available() &&
                  c.saveCosmetics({ outfit: e.id }).catch(() => void 0),
                u());
            },
          },
          n ? null : m(`span.ob-lock`, { "aria-hidden": `true`, html: ae }),
        ),
      );
    }
    return (
      c.available() &&
        c
          .myCosmetics()
          .then((e) => {
            g(e.unlocked);
            for (let t of o.querySelectorAll(`button.locked`))
              e.unlocked.includes(t.dataset.id) &&
                ((t.disabled = !1),
                t.classList.remove(`locked`),
                t.querySelector(`.ob-lock`)?.remove());
          })
          .catch(() => void 0),
      u(),
      (p.onclick = () => {
        (q(`look`), V(n + 1));
      }),
      m(
        `section.ob-step.ob-look`,
        null,
        m(
          `div.ob-look-art`,
          null,
          a
            ? a.el
            : m(`div.ob-preview.ob-preview-off`, {
                style: `--sw:${i.find((e) => e.id === y())?.color ?? `#ece5d8`}`,
              }),
        ),
        m(
          `div.ob-look-side`,
          null,
          m(`h2`, null, `Your bunny`),
          m(
            `p.ob-sub`,
            null,
            `What you wear in third person, replays and servers. More colourways unlock as you play.`,
          ),
          o,
          s,
        ),
      )
    );
  }
  function oe() {
    let e = h.get(),
      t = m(
        `select.ob-game`,
        { "aria-label": `Game` },
        ...W.map((e) => m(`option`, { value: e.id }, e.label)),
      ),
      r = m(`input.ob-num`, {
        type: `number`,
        min: `0.01`,
        max: `100`,
        step: `0.01`,
        value: String(e.sensitivity),
        "aria-label": `Your sensitivity in that game`,
      }),
      i = m(`input.ob-num`, {
        type: `number`,
        min: `100`,
        max: `32000`,
        step: `50`,
        value: String(e.dpi),
        "aria-label": `Mouse DPI`,
      }),
      a = m(`div.ob-sens-result`),
      o = () => {
        let e = W.find((e) => e.id === t.value) ?? W[0],
          n = Number(r.value),
          o = Number(i.value);
        if (!(n > 0) || !(n < 1e3))
          return void a.replaceChildren(
            m(`span.dim`, null, `Enter your sensitivity.`),
          );
        let s = Math.max(0.01, G(n, e.yaw));
        (h.update((e) => {
          ((e.sensitivity = s),
            o >= 100 && o <= 32e3 && (e.dpi = Math.round(o)));
        }),
          a.replaceChildren(
            m(`b.ob-sens-big`, null, String(s)),
            m(`span`, null, ` here (CS:S units)`),
            m(
              `small.dim`,
              null,
              ` · ${K(s, h.get().dpi).toFixed(1)} cm/360° at ${h.get().dpi} DPI`,
            ),
          ));
      };
    for (let e of [t, r, i]) e.addEventListener(`input`, o);
    return (
      o(),
      (p.onclick = () => {
        (q(`sens`), V(n + 1));
      }),
      m(
        `section.ob-step.ob-sens`,
        null,
        m(`h2`, null, `Mouse`),
        m(
          `p.ob-sub`,
          null,
          `Same units as Counter-Strike: Source, so your config value works as is. If you're not sure, 2 at 800 DPI is a fine start.`,
        ),
        m(
          `div.ob-sens-row`,
          null,
          m(`span`, null, `I play`),
          t,
          m(`span`, null, `at`),
          r,
          m(`span`, null, `with`),
          i,
          m(`span`, null, `DPI`),
        ),
        a,
        m(
          `p.ob-note.dim`,
          null,
          `Change it any time in Settings → Mouse & view.`,
        ),
      )
    );
  }
  function se() {
    let e = m(`div.ob-maps`, null, $(H, null, !0));
    ((async () => {
      let [t, n] = await Promise.all([te(), ee().catch(() => null)]),
        r = t.filter((e) => e.name !== H && O(e, n?.get(e.name)) === 1),
        i = r.filter((e) => n?.get(e.name)?.ranked),
        a = i.length >= 2 ? i : r,
        o = b(
          a.map((e) => ({ name: e.name, tier: 1 })),
          new Set(),
          2,
        );
      for (let r of o) {
        let i = t.find((e) => e.name === r.map);
        e.append(
          $(r.map, n?.get(r.map)?.thumbnailUrl ?? i?.thumbnail ?? null, !1),
        );
      }
      let s = t.find((e) => e.name === H);
      s &&
        e.firstElementChild.replaceWith(
          $(H, n?.get(H)?.thumbnailUrl ?? s.thumbnail ?? null, !0),
        );
    })(),
      (p.textContent = `Play ${H}`),
      (p.onclick = () => {
        z(H, `map`);
      }));
    let n = !t || t.provider === `guest`;
    return m(
      `section.ob-step.ob-map`,
      null,
      m(`h2`, null, `You're set`),
      m(
        `p.ob-sub`,
        null,
        `Start on a tier 1 map. Leave the green zone to start the timer, touch the red one to finish. `,
        m(`kbd`, null, `Esc`),
        ` opens the menu.`,
      ),
      E()
        ? m(
            `p.ob-note`,
            null,
            m(
              `button.link-btn`,
              {
                type: `button`,
                onclick: () => (z(void 0, `map`), re(Y?.pick)),
              },
              `Learn to bhop first`,
            ),
            ` if you've never bhopped: four short lessons with a live strafe guide.`,
          )
        : null,
      e,
      c.available() && n
        ? m(
            `p.ob-note`,
            null,
            `Runs are saved in this browser. `,
            m(
              `button.link-btn`,
              {
                type: `button`,
                onclick: () => {
                  (z(), d(`save`));
                },
              },
              `Save progress with Discord or email`,
            ),
            ` to keep them on any device.`,
          )
        : null,
    );
  }
  function $(e, t, n) {
    let r = D(e, t, { className: `ob-map-art` });
    return m(
      `button.ob-mapcard${n ? `.primary` : ``}`,
      { type: `button`, onclick: () => z(e, `map`) },
      r,
      m(`span.ob-map-name`, null, m(`b`, null, e), ne(1)),
    );
  }
  (a.showModal(), V(0));
}
var ae = `<svg viewBox="0 0 24 24" width="1em" height="1em"><rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
export {
  W as GAMES,
  K as cm360,
  Z as maybeStartOnboarding,
  Q as openOnboarding,
  G as toCssSens,
};
