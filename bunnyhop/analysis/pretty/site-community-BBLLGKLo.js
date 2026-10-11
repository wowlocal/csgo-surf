import { D as e } from "./creators-DkuwYE0A.js";
var t = `/api`.replace(/\/+$/, ``);
if (t) {
  fetch(`${t}/config`, { credentials: `omit` })
    .then((e) => (e.ok ? e.json() : null))
    .then((t) => {
      let n = e(t?.discordInvite);
      if (n)
        for (let e of document.querySelectorAll(`[data-discord]`)) {
          let t = e instanceof HTMLAnchorElement ? e : e.querySelector(`a`);
          (t && (t.href = n), (e.hidden = !1));
        }
    })
    .catch(() => void 0);
  let n = document.querySelector(`[data-supporters]`);
  n &&
    fetch(`${t}/supporters`, { credentials: `omit` })
      .then((e) => (e.ok ? e.json() : null))
      .then((e) => {
        let t = Array.isArray(e?.names)
          ? e.names.filter((e) => typeof e == `string` && !!e.trim())
          : [];
        if (!t.length) return;
        let r = n.querySelector(`.thanks-names`);
        (r && (r.textContent = t.join(`, `)), (n.hidden = !1));
      })
      .catch(() => void 0);
}
