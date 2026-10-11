import { i as e, n as t } from "./api-B2Jj-kgC.js";
import { a as n } from "./dom-CUDFsJPS.js";
var r = {
    linked: `Progress saved. Sign in with this email on any device.`,
    merged: `Signed in. This browser's runs were added to your account.`,
    signed_in: `Signed in.`,
    created: `Signed in with a new account.`,
  },
  i = {
    bad_email: `That doesn't look like an email address.`,
    rate_limited: `Too many codes. Try again in an hour.`,
    email_busy: `Too many sign-in emails today. Try again tomorrow.`,
    email_failed: `The email didn't send. Try again in a minute.`,
    undeliverable: `That address can't receive email.`,
    email_unavailable: `Email sign-in isn't set up yet.`,
  };
function a(a) {
  let o = n(`div.email-signin`),
    s = ``,
    c = (r = ``) => {
      let c = n(`input.es-input`, {
          type: `email`,
          autocomplete: `email`,
          inputmode: `email`,
          required: !0,
          maxlength: `254`,
          placeholder: `you@example.com`,
          "aria-label": `Email`,
          value: s,
        }),
        u = n(`p.es-msg`, { role: `alert`, "data-kind": r ? `err` : `` }, r),
        d = n(`button.btn.primary`, { type: `submit` }, `Send code`),
        f = n(
          `form.es-form`,
          { novalidate: !0 },
          n(`p.es-sub.dim`, null, `We'll email you a 6-digit code to sign in.`),
          n(`div.es-row`, null, c, d),
          u,
        );
      (f.addEventListener(`submit`, async (n) => {
        if (
          (n.preventDefault(), (s = c.value.trim()), !/^\S+@\S+\.\S+$/.test(s))
        ) {
          ((u.textContent = i.bad_email), (u.dataset.kind = `err`), c.focus());
          return;
        }
        ((d.disabled = !0), (d.textContent = `Sending…`));
        try {
          let t = await e.emailStart(s);
          l(t.devCode ?? null);
        } catch (e) {
          ((d.disabled = !1),
            (d.textContent = `Send code`),
            (u.textContent =
              e instanceof t
                ? (i[e.code] ?? e.message)
                : `Couldn't reach the server. Try again.`),
            (u.dataset.kind = `err`));
        }
      }),
        o.replaceChildren(f),
        a.autofocus !== !1 && requestAnimationFrame(() => c.focus()));
    },
    l = (u) => {
      let d = n(`input.es-code`, {
          type: `text`,
          inputmode: `numeric`,
          autocomplete: `one-time-code`,
          pattern: `[0-9 ]*`,
          maxlength: `7`,
          placeholder: `000000`,
          "aria-label": `6-digit code`,
        }),
        f = n(`p.es-msg`, { role: `alert` }),
        p = n(`button.btn.primary`, { type: `submit` }, `Sign in`),
        m = n(
          `form.es-form`,
          { novalidate: !0 },
          n(
            `p.es-sub`,
            null,
            `We sent a code to `,
            n(`b`, null, s),
            `. It works once, for 15 minutes.`,
          ),
          n(`div.es-row`, null, d, p),
          f,
          u
            ? n(
                `p.es-dev`,
                null,
                `Local dev: the email wasn't sent. Code `,
                n(`code`, null, u),
              )
            : null,
          n(
            `p.es-links`,
            null,
            n(
              `button.link-btn`,
              { type: `button`, onclick: () => c() },
              `Use another email`,
            ),
            n(
              `button.link-btn`,
              { type: `button`, onclick: () => void g() },
              `Send a new code`,
            ),
          ),
        ),
        h = async () => {
          let n = d.value.replace(/\D/g, ``);
          if (n.length === 6) {
            p.disabled = !0;
            try {
              let t = await e.emailVerify({ code: n });
              a.onDone(t.user, r[t.outcome] ?? `Signed in.`);
            } catch (e) {
              ((p.disabled = !1),
                (f.dataset.kind = `err`),
                (f.textContent =
                  e instanceof t
                    ? e.message
                    : `Couldn't reach the server. Try again.`),
                e instanceof t && e.code === `code_expired`
                  ? (d.disabled = !0)
                  : d.select());
            }
          }
        },
        g = async () => {
          try {
            let t = await e.emailStart(s);
            l(t.devCode ?? null);
          } catch (e) {
            ((f.dataset.kind = `err`),
              (f.textContent =
                e instanceof t
                  ? (i[e.code] ?? e.message)
                  : `Couldn't reach the server. Try again.`));
          }
        };
      (d.addEventListener(`input`, () => {
        ((d.value = d.value.replace(/[^\d ]/g, ``)),
          (f.textContent = ``),
          d.value.replace(/\D/g, ``).length === 6 && h());
      }),
        m.addEventListener(`submit`, (e) => (e.preventDefault(), void h())),
        o.replaceChildren(m),
        requestAnimationFrame(() => d.focus()));
    };
  return (c(), o);
}
var o = `bunnyhop:toast`;
function s(e) {
  try {
    sessionStorage.setItem(o, e);
  } catch {}
  location.reload();
}
var c = { discord_not_configured: `Discord sign-in isn't set up yet.` };
async function l() {
  let n = sessionStorage.getItem(o);
  if (n) return (sessionStorage.removeItem(o), n);
  let i = new URL(location.href),
    a = i.searchParams.get(`signin`),
    s = i.searchParams.get(`login`),
    l = i.searchParams.get(`login_error`);
  if (!a && !s && !l) return null;
  for (let e of [`signin`, `login`, `login_error`, `member`])
    i.searchParams.delete(e);
  if ((history.replaceState(null, ``, i), l))
    return c[l] ?? `Discord sign-in didn't finish. Try again.`;
  if (s === `discord`) return `Signed in with Discord.`;
  if (!a || !e.available()) return null;
  try {
    return r[(await e.emailVerify({ token: a })).outcome] ?? `Signed in.`;
  } catch (e) {
    return e instanceof t
      ? e.message
      : `Couldn't reach the server to finish signing in.`;
  }
}
export { l as n, s as r, a as t };
