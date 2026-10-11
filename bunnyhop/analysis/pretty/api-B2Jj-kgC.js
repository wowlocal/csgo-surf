function e(e = !1) {
  try {
    let t = document.getElementById(`game`)?.getContext(`webgl2`) ?? null;
    if (
      (!t && e && (t = document.createElement(`canvas`).getContext(`webgl2`)),
      !t)
    )
      return null;
    let n = t.getExtension(`WEBGL_debug_renderer_info`);
    return {
      renderer: String(
        t.getParameter(n ? n.UNMASKED_RENDERER_WEBGL : t.RENDERER),
      ),
      vendor: String(t.getParameter(n ? n.UNMASKED_VENDOR_WEBGL : t.VENDOR)),
      version: String(t.getParameter(t.VERSION)),
      maxTexture: t.getParameter(t.MAX_TEXTURE_SIZE),
    };
  } catch {
    return null;
  }
}
function t() {
  try {
    let e = document.getElementById(`game`),
      t =
        (e ? e.getContext(`webgl2`) : null) ??
        document.createElement(`canvas`).getContext(`webgl2`);
    if (!t) return ``;
    let n = [
      t.MAX_RENDERBUFFER_SIZE,
      t.MAX_VERTEX_ATTRIBS,
      t.MAX_VARYING_VECTORS,
      t.MAX_COMBINED_TEXTURE_IMAGE_UNITS,
      t.MAX_SAMPLES,
    ].map((e) => String(t.getParameter(e)));
    return (
      [...(t.getSupportedExtensions() ?? [])].sort().join(`,`) +
      `|` +
      n.join(`,`)
    );
  } catch {
    return ``;
  }
}
var n = `bh_did`,
  r = /^[0-9a-z]{6,12}-[\w-]{16,32}$/,
  i = (e) => parseInt(e.split(`-`)[0], 36);
function a() {
  let e = crypto.getRandomValues(new Uint8Array(16)),
    t = btoa(String.fromCharCode(...e))
      .replace(/\+/g, `-`)
      .replace(/\//g, `_`)
      .replace(/=+$/, ``);
  return `${Date.now().toString(36)}-${t}`;
}
function o() {
  let e = /(?:^|;\s*)bh_did=([^;]+)/.exec(document.cookie);
  return e ? decodeURIComponent(e[1]) : null;
}
function s(e) {
  try {
    document.cookie = `${n}=${encodeURIComponent(e)}; Path=/; Max-Age=63072000; SameSite=Lax${location.protocol === `https:` ? `; Secure` : ``}`;
  } catch {}
}
function c(e, t) {
  return new Promise((n) => {
    try {
      let r = indexedDB.open(`bunnyhop-device`, 1);
      ((r.onupgradeneeded = () => r.result.createObjectStore(`kv`)),
        (r.onerror = () => n(null)),
        (r.onsuccess = () => {
          try {
            let i = e(r.result.transaction(`kv`, t).objectStore(`kv`));
            ((i.onsuccess = () => n(i.result ?? null)),
              (i.onerror = () => n(null)));
          } catch {
            n(null);
          }
        }));
    } catch {
      n(null);
    }
  });
}
var l = null,
  u = null;
function d(e) {
  let t =
    e
      .filter((e) => typeof e == `string` && r.test(e))
      .sort((e, t) => i(e) - i(t))[0] ??
    l ??
    a();
  l = t;
  try {
    localStorage.setItem(n, t);
  } catch {}
  return (s(t), t);
}
function f() {
  if (l) return l;
  let e = null;
  try {
    e = localStorage.getItem(n);
  } catch {}
  return d([e, o()]);
}
function p() {
  return (
    (u ??= (async () => {
      let e = f(),
        t = await c((e) => e.get(n), `readonly`),
        r = d([e, t]);
      return (t !== r && (await c((e) => e.put(r, n), `readwrite`)), r);
    })()),
    u
  );
}
async function m(e, t = 32) {
  let n = new Uint8Array(
    await crypto.subtle.digest(`SHA-256`, new TextEncoder().encode(e)),
  );
  return Array.from(n, (e) => e.toString(16).padStart(2, `0`))
    .join(``)
    .slice(0, t);
}
function h() {
  try {
    let e = document.createElement(`canvas`);
    ((e.width = 220), (e.height = 40));
    let t = e.getContext(`2d`);
    if (!t) return ``;
    let n = t.createLinearGradient(0, 0, 220, 0);
    return (
      n.addColorStop(0, `#f60`),
      n.addColorStop(1, `#06c`),
      (t.fillStyle = n),
      t.fillRect(0, 0, 220, 40),
      (t.font = `16px Arial, sans-serif`),
      (t.fillStyle = `rgba(20,20,20,0.8)`),
      t.fillText(`bunnyhop.lol 🐇 0.123`, 4, 24),
      t.beginPath(),
      t.arc(190, 20, 14, 0, Math.PI * 1.7),
      (t.strokeStyle = `#fff`),
      t.stroke(),
      e.toDataURL()
    );
  } catch {
    return ``;
  }
}
var g = null;
function _() {
  return (
    (g ??= (async () => {
      let n = e(!0),
        r = navigator,
        i = /Chrom(?:e|ium)\/(\d+)/.exec(r.userAgent),
        a = /Firefox\/(\d+)/.exec(r.userAgent),
        [o, s] = await Promise.all([m(t(), 16), m(h(), 16)]),
        c = {
          renderer: n?.renderer.slice(0, 128),
          vendor: n?.vendor.slice(0, 64),
          maxTex: n?.maxTexture,
          screen: `${screen.width}x${screen.height}`,
          dpr: Math.round(devicePixelRatio * 100) / 100,
          tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
          langs: (r.languages ?? [r.language]).join(`,`).slice(0, 96),
          cores: r.hardwareConcurrency,
          mem: r.deviceMemory,
          platform: (r.userAgentData?.platform ?? r.platform ?? ``).slice(
            0,
            32,
          ),
          brands: r.userAgentData?.brands
            ?.map((e) => e.brand)
            .filter((e) => !/not.?a.?brand/i.test(e))
            .join(`,`)
            .slice(0, 96),
          uaMajor: i ? Number(i[1]) : a ? Number(a[1]) : void 0,
          glHash: o,
          canvasHash: s,
        },
        { uaMajor: l, ...u } = c;
      return { hash: await m(JSON.stringify(u)), components: c };
    })()),
    g
  );
}
async function v() {
  try {
    let [e, t] = await Promise.all([p(), _()]);
    return { "x-bh-device": e, "x-bh-fp": t.hash };
  } catch {
    return {};
  }
}
var y = [400, 1500],
  b = 1200;
async function x(e) {
  let t = async () => {
      for (let t = 0; ; t++)
        try {
          return await e.ask();
        } catch (n) {
          if (!e.transient(n) || t >= y.length) throw n;
          await e.wait(y[t]);
        }
    },
    n = await t();
  if (n) return n;
  let r = e.known();
  return r && r.provider !== `guest` && (await e.wait(b), (n = await t()), n)
    ? n
    : (e.forget(), e.guest());
}
var S = `/api`.replace(/\/+$/, ``) ?? null,
  C = class extends Error {
    constructor() {
      super(`API unavailable`);
    }
  },
  w = class extends Error {
    status;
    code;
    body;
    constructor(e, t, n, r = {}) {
      (super(n), (this.status = e), (this.code = t), (this.body = r));
    }
  };
function T() {
  if (S === null) throw new C();
  return S;
}
async function E(e) {
  if ((e.method ?? `GET`).toUpperCase() !== `POST`) return e;
  let t = new Headers(e.headers);
  for (let [e, n] of Object.entries(await v())) t.set(e, n);
  return { ...e, headers: t };
}
async function D(e, t = {}) {
  let n;
  try {
    n = await fetch(T() + e, { credentials: `include`, ...(await E(t)) });
  } catch (e) {
    throw e instanceof C ? e : new C();
  }
  if (n.status >= 500) throw new C();
  return n;
}
async function O(e, t = {}) {
  let n = await D(e, t),
    r = await n.json().catch(() => null);
  if (!n.ok)
    throw new w(
      n.status,
      r?.error ?? `error`,
      r?.message ?? `HTTP ${n.status}`,
      r ?? {},
    );
  return r;
}
async function k(e, t) {
  let n;
  try {
    n = await fetch(T() + e, { credentials: `include`, ...(await E(t)) });
  } catch (e) {
    throw e instanceof C ? e : new C();
  }
  let r = await n.json().catch(() => null);
  if (!n.ok)
    throw r?.error
      ? new w(n.status, r.error, r.message ?? `HTTP ${n.status}`, r)
      : new C();
  return r;
}
var A = (e) => ({
    method: `POST`,
    headers: { "content-type": `application/json` },
    body: e === void 0 ? void 0 : JSON.stringify(e),
  }),
  j = `bunnyhop:last-me`;
function M() {
  try {
    let e = JSON.parse(localStorage.getItem(j) ?? `null`);
    return !e ||
      typeof e.id != `string` ||
      typeof e.name != `string` ||
      typeof e.provider != `string`
      ? null
      : {
          id: e.id,
          name: e.name,
          avatarUrl: typeof e.avatarUrl == `string` ? e.avatarUrl : null,
          provider: e.provider,
        };
  } catch {
    return null;
  }
}
function N(e) {
  try {
    e
      ? localStorage.setItem(
          j,
          JSON.stringify({
            id: e.id,
            name: e.name,
            avatarUrl: e.avatarUrl,
            provider: e.provider,
          }),
        )
      : localStorage.removeItem(j);
  } catch {}
}
var P = (e) => new Promise((t) => setTimeout(t, e));
async function F() {
  let e = await D(`/me`, { cache: `no-store` });
  if (!e.ok) throw new w(e.status, `error`, `HTTP ${e.status}`);
  let t;
  try {
    t = JSON.parse(await e.text());
  } catch {
    throw new C();
  }
  if (t === null) return null;
  if (t && typeof t == `object` && typeof t.id == `string`) return t;
  throw new C();
}
var I = null,
  L = !1;
function R(e) {
  ((I = Promise.resolve(e)), (L = !1), N(e));
}
var z = {
  available() {
    return S !== null;
  },
  async me() {
    return z.available()
      ? ((I ??= x({
          ask: F,
          transient: (e) => e instanceof C,
          guest: () => O(`/auth/guest`, A({})),
          known: M,
          forget: () => N(null),
          wait: P,
        }).then(
          (e) => ((L = !1), N(e), e),
          () => ((I = null), (L = !0), M()),
        )),
        I)
      : null;
  },
  meStale() {
    return L;
  },
  setMe(e) {
    R(e);
  },
  discordLoginUrl(e) {
    return `${T()}/auth/discord/login?returnTo=${encodeURIComponent(e)}`;
  },
  async setDisplayName(e) {
    let t = await O(`/me/name`, A({ name: e }));
    return (R(t), t);
  },
  async checkName(e) {
    return O(`/names/check?name=${encodeURIComponent(e)}`, {
      cache: `no-store`,
    });
  },
  async providers() {
    return O(`/auth/providers`);
  },
  async config() {
    return O(`/config`);
  },
  async links() {
    return O(`/me/links`, { cache: `no-cache` });
  },
  async saveLinks(e) {
    return O(`/me/links`, A(e));
  },
  async saveBooster(e) {
    return O(`/me/booster`, A({ show: e }));
  },
  async mySupport() {
    return O(`/me/supporter`, { cache: `no-store` });
  },
  async saveSupporter(e) {
    return O(`/me/supporter`, A(e));
  },
  async supportCheckout(e) {
    return k(`/support/checkout`, A({ amountCents: e }));
  },
  async supporters() {
    return O(`/supporters`);
  },
  async account() {
    return O(`/me/account`, { cache: `no-store` });
  },
  async unlink(e) {
    let t = await O(`/me/unlink`, A({ provider: e }));
    return (R(t.user), t);
  },
  async emailStart(e, t = location.href) {
    return k(`/auth/email/start`, A({ email: e, returnTo: t }));
  },
  async emailVerify(e) {
    let t = await O(`/auth/email/verify`, A(e));
    return (R(t.user), t);
  },
  async onboarding() {
    return O(`/me/onboarding`, { cache: `no-store` });
  },
  async saveOnboarding(e) {
    return O(`/me/onboarding`, A(e));
  },
  async setUseDiscordAvatar(e) {
    let t = await O(`/me/avatar`, A({ useDiscord: e }));
    return (R(t), t);
  },
  async logout(e = !1) {
    ((I = null),
      N(null),
      z.available() &&
        (await D(`/auth/logout`, A(e ? { everywhere: !0 } : {}))));
  },
  forgetMe() {
    I = null;
  },
  async maps(e = `autohop`) {
    return O(`/maps?style=${encodeURIComponent(e)}`);
  },
  async recentRecords(e = `autohop`, t = 6) {
    return O(`/records/recent?style=${encodeURIComponent(e)}&limit=${t}`);
  },
  async mapDetail(e) {
    return O(`/maps/${encodeURIComponent(e)}`);
  },
  async leaderboard(e, t, n, r = {}) {
    let i = new URLSearchParams();
    return (
      n?.offset !== void 0 && i.set(`offset`, String(n.offset)),
      n?.limit !== void 0 && i.set(`limit`, String(n.limit)),
      n?.track && i.set(`track`, String(n.track)),
      n?.around && i.set(`around`, n.around),
      n?.q && i.set(`q`, n.q),
      O(
        `/leaderboards/${encodeURIComponent(e)}/${encodeURIComponent(t)}${i.size ? `?${i}` : ``}`,
        { cache: `no-cache`, ...r },
      )
    );
  },
  async submitRun(e, t = {}) {
    let n = t.room ? `/runs?room=${encodeURIComponent(t.room)}` : `/runs`,
      r = {
        method: `POST`,
        headers: { "content-type": `application/octet-stream` },
        body: e,
      };
    if (t.beats?.length) {
      let n = new FormData();
      (n.append(
        `replay`,
        new Blob([e], { type: `application/octet-stream` }),
        `run.bhr`,
      ),
        n.append(`beats`, JSON.stringify(t.beats)),
        (r = { method: `POST`, body: n }));
    }
    let i = await D(n, r),
      a = await i.json().catch(() => null);
    return !i.ok || !a
      ? {
          id: ``,
          status: `rejected`,
          reason: a?.message ?? `HTTP ${i.status}`,
          code: a?.error ?? `error`,
        }
      : ((I = null), a);
  },
  async runBeat(e) {
    return O(`/runs/beat`, { ...A(e), keepalive: !0 });
  },
  async submission(e) {
    return O(`/submissions/${encodeURIComponent(e)}`);
  },
  async runDiagnostics(e, t) {
    try {
      await D(`/runs/${encodeURIComponent(e)}/diagnostics`, {
        ...A(t),
        keepalive: !0,
      });
    } catch {}
  },
  async version() {
    return O(`/version`, { cache: `no-store` });
  },
  async profile(e) {
    return O(`/players/${encodeURIComponent(e)}`, { cache: `no-cache` });
  },
  async playerRuns(e, t = {}) {
    let n = new URLSearchParams({
      offset: String(t.offset ?? 0),
      limit: String(t.limit ?? 20),
    });
    return (
      t.pbOnly && n.set(`pb`, `1`),
      O(`/players/${encodeURIComponent(e)}/runs?${n}`)
    );
  },
  async ranks(e = `all`, t = {}, n = {}) {
    let r = new URLSearchParams({
      offset: String(t.offset ?? 0),
      limit: String(t.limit ?? 50),
    });
    return (
      t.around && r.set(`around`, t.around),
      t.q && r.set(`q`, t.q),
      O(`/ranks/${encodeURIComponent(e)}?${r}`, { cache: `no-cache`, ...n })
    );
  },
  async addNotices(e, t) {
    await O(`/me/notices`, {
      ...A({ user: e, ids: t }),
      keepalive: t.length <= 200,
    });
  },
  async favorites() {
    return (await O(`/me/favorites`, { cache: `no-store` })).maps;
  },
  async saveFavorites(e, t, n) {
    return (
      await O(`/me/favorites`, {
        ...A({ user: e, add: t, remove: n }),
        keepalive: !0,
      })
    ).maps;
  },
  async myCosmetics() {
    return O(`/me/cosmetics`, { cache: `no-cache` });
  },
  async saveCosmetics(e) {
    return O(`/me/cosmetics`, A(e));
  },
  async saveFeatured(e) {
    return (await O(`/me/featured`, A({ runs: e }))).runs;
  },
  async saveBadges(e) {
    return (await O(`/me/badges`, A({ badges: e }))).badges;
  },
  replayUrl(e) {
    return `${T()}/runs/${encodeURIComponent(e)}/replay`;
  },
  async servers() {
    return O(`/servers`, { cache: `no-cache` });
  },
  async serverPing(e) {
    let t = performance.now();
    return (
      await O(`/servers/${encodeURIComponent(e)}/ping`, { cache: `no-store` }),
      performance.now() - t
    );
  },
  roomSocketUrl(e, t, n) {
    let r = new URL(
      `${T()}/servers/${encodeURIComponent(e)}/ws`,
      location.href,
    );
    return (
      (r.protocol = r.protocol === `https:` ? `wss:` : `ws:`),
      r.searchParams.set(`v`, String(t)),
      r.searchParams.set(`style`, n),
      r.toString()
    );
  },
  async replay(e) {
    let t = await D(`/runs/${encodeURIComponent(e)}/replay`);
    if (!t.ok) throw new w(t.status, `not_found`, `replay not available`);
    return new Uint8Array(await t.arrayBuffer());
  },
  async sendFeedback(e, t) {
    if (!t) return O(`/feedback`, A(e));
    let n = new FormData();
    return (
      n.set(`data`, JSON.stringify(e)),
      n.set(`screenshot`, t, `screenshot.jpg`),
      O(`/feedback`, { method: `POST`, body: n })
    );
  },
  async inbox() {
    return O(`/me/inbox`, { cache: `no-store` });
  },
  async inboxUnread() {
    return (await O(`/me/inbox?view=count`, { cache: `no-store` })).unread;
  },
  async markInboxRead(e) {
    return (await O(`/me/inbox/read`, A(e ? { ids: e } : {}))).unread;
  },
  async replyToTicket(e, t) {
    return O(`/feedback/${encodeURIComponent(e)}/reply`, A({ body: t }));
  },
};
export { M as a, e as c, z as i, w as n, p as o, C as r, _ as s, S as t };
