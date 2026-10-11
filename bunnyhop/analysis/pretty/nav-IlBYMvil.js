var e = null;
function t(t) {
  if (e) e(t);
  else {
    let e = new URL(location.href);
    ((e.search = ``),
      t.screen === `profile`
        ? (e.pathname = `/u/${encodeURIComponent(t.id)}`)
        : t.screen === `ranks`
          ? ((e.pathname = `/ranks`),
            t.scope &&
              t.scope !== `all` &&
              e.searchParams.set(`style`, t.scope),
            t.page && t.page > 1 && e.searchParams.set(`page`, String(t.page)))
          : t.screen === `maps`
            ? (e.pathname = t.focus
                ? `/maps/${encodeURIComponent(t.focus)}`
                : `/maps`)
            : t.screen === `loadout`
              ? (e.pathname = `/`)
              : t.screen === `support`
                ? ((e.pathname = `/`), e.searchParams.set(`support`, ``))
                : (e.pathname = `/servers`),
      (location.href = e.toString()));
  }
}
function n(t) {
  e = t;
}
function r(e) {
  return `${location.origin}/u/${encodeURIComponent(e)}`;
}
function i() {
  let e = new URLSearchParams(location.search),
    t = location.pathname.replace(/\/+$/, ``),
    n = e.get(`u`) ?? /^\/u\/([\w-]+)$/.exec(t)?.[1] ?? null;
  if (n) return { screen: `profile`, id: n };
  let r = e.get(`ranks`),
    i = Math.max(1, Number.parseInt(e.get(`page`) ?? `1`, 10) || 1);
  if (r !== null) return { screen: `ranks`, scope: r || `all`, page: i };
  if (t === `/ranks`)
    return { screen: `ranks`, scope: e.get(`style`) || `all`, page: i };
  if (t === `/maps`) return { screen: `maps` };
  let a = /^\/maps\/([\w.-]+)$/.exec(t);
  return a
    ? { screen: `maps`, focus: decodeURIComponent(a[1]) }
    : t === `/servers`
      ? { screen: `servers` }
      : e.has(`support`)
        ? { screen: `support` }
        : null;
}
function a(e) {
  e();
}
export { i as a, a as i, n, r, t };
