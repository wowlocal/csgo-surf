const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/panel-DkPis1l6.js",
      "assets/community-D2zu9OMJ.js",
      "assets/preload-helper-DjzSQ1t3.js",
      "assets/api-B2Jj-kgC.js",
      "assets/dom-CUDFsJPS.js",
      "assets/creators-DkuwYE0A.js",
      "assets/nav-IlBYMvil.js",
      "assets/notify-CvHg_wVW.js",
      "assets/palettes-YJRmTQgw.js",
      "assets/notify-B1xuBBxO.css",
      "assets/account-panel-CPsaGxem.js",
      "assets/account-state-BYMidhZ9.js",
      "assets/core-GuI4LXND.js",
      "assets/cosmetics-PGh_ZGfu.js",
      "assets/styles-DzitlxVO.js",
      "assets/loadout-DopA3xcw.js",
      "assets/replay-B40kiN_v.js",
      "assets/events-Q3WT0NU4.js",
      "assets/avatar-kqcwn86P.js",
      "assets/account-state-Bl3cc_Rk.css",
      "assets/account-email-Bsoylshj.js",
      "assets/account-email-Rh3xavDF.css",
      "assets/feedback-B4S53b19.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper-DjzSQ1t3.js";
import { i as t } from "./api-B2Jj-kgC.js";
import { a as n } from "./dom-CUDFsJPS.js";
import { p as r, s as i } from "./notify-CvHg_wVW.js";
var a = 6e4,
  o = 0,
  s = !1,
  c = 0,
  l = null,
  u = 0,
  d = new Set();
function f(e) {
  o = Math.max(0, Math.floor(e) || 0);
  for (let e of [...d]) e(o);
}
function p() {
  let e = document.getElementById(`overlay`);
  return (
    !!e &&
    !e.classList.contains(`hidden`) &&
    !document.pointerLockElement &&
    document.visibilityState === `visible`
  );
}
function m(e = !1) {
  return t.available()
    ? l ||
        (!e && Date.now() - c < 58e3
          ? Promise.resolve()
          : ((c = Date.now()),
            (l = (async () => {
              try {
                await t.me();
                let e = await t.inboxUnread(),
                  n = s && e > o;
                ((s = !0),
                  f(e),
                  n &&
                    r(
                      e === 1
                        ? `New message in your Inbox`
                        : `${e} unread messages in your Inbox`,
                      {
                        key: `inbox`,
                        action: { label: `Open`, run: () => _() },
                      },
                    ));
              } catch {
              } finally {
                l = null;
              }
            })()),
            l))
    : Promise.resolve();
}
function h() {
  u ||= window.setInterval(() => {
    d.size && p() && m();
  }, a);
}
function g(e, t = `Inbox`) {
  let r = n(`span.ib-badge`, { "aria-hidden": `true`, hidden: !0 });
  (e.querySelector(`.mb-title, .ri-label`) ?? e).append(r);
  let a = !1,
    s = !0,
    c = (n) => {
      if (!e.isConnected) {
        a && d.delete(c);
        return;
      }
      a = !0;
      let o = r.hidden ? 0 : Number(r.dataset.n ?? 0);
      ((r.dataset.n = String(n)),
        n > o &&
          o >= 0 &&
          a &&
          r.isConnected &&
          !s &&
          requestAnimationFrame(() => i(r)),
        (s = !1),
        (r.hidden = n <= 0),
        (r.textContent = n > 99 ? `99+` : String(n)),
        e.setAttribute(`aria-label`, n > 0 ? `${t}, ${n} unread` : t));
    };
  return (d.add(c), requestAnimationFrame(() => c(o)), h(), m(), e);
}
function _() {
  e(
    () => import(`./panel-DkPis1l6.js`).then((e) => e.showInbox()),
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22,
    ]),
  );
}
export { f as n, g as r, _ as t };
