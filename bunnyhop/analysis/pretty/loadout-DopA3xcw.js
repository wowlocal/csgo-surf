import "./styles-DzitlxVO.js";
var e = [1, 2, 3, 4, 5, 6];
function t(e) {
  return e == null || !Number.isFinite(e) || e < 1
    ? null
    : Math.min(6, Math.max(1, Math.round(e)));
}
function n(e) {
  let n = t(e);
  return n ? `T${n}` : `T?`;
}
var r = {
  1: `Very easy`,
  2: `Easy`,
  3: `Medium`,
  4: `Hard`,
  5: `Very hard`,
  6: `Extreme`,
};
function i(e) {
  let n = t(e);
  return n ? r[n] : `Unrated`;
}
function a(e) {
  let t = Math.max(0, Math.floor(e) - 1);
  return 100 * t + 25 * t * (t - 1);
}
function o(e) {
  e = Math.max(0, Math.floor(e));
  let t = 1;
  for (; a(t + 1) <= e; ) t++;
  let n = a(t),
    r = a(t + 1) - n;
  return {
    level: t,
    xp: e,
    into: e - n,
    need: r,
    fraction: r ? (e - n) / r : 0,
  };
}
var s = (e, t) => [Math.min(e, t), t],
  c = {
    1: void 0,
    2: void 0,
    3: `Climber`,
    4: `Daredevil`,
    5: `Untouchable`,
    6: `Ascended`,
  },
  l = { 1: 0, 2: 0, 3: 1, 4: 1, 5: 2, 6: 3 },
  u = [
    { map: `bhop_eazy`, seconds: 60, name: `Eazy Does It`, ring: 0 },
    {
      map: `bhop_eazy`,
      seconds: 30,
      name: `Eazy Money`,
      ring: 2,
      title: `Eazy`,
    },
  ],
  d = `play_with_owner`,
  f = `discord_link`,
  p = `discord_member`,
  m = `discord_booster`,
  h = `early_hopper`,
  g = `supporter`,
  _ = (e) =>
    e >= 60
      ? `${Math.floor(e / 60)}:${String(e % 60).padStart(2, `0`)}`
      : `${e}s`,
  v = [
    {
      id: `first_finish`,
      name: `First Hop`,
      desc: `Finish a run on any map`,
      group: `start`,
      icon: `flag`,
      ring: 0,
      title: `Hopper`,
      progress: (e) => s(e.runs, 1),
    },
    ...[1, 2, 3, 4, 5, 6].map((e) => ({
      id: `tier_${e}`,
      name: `First T${e}`,
      desc: `Finish the main track of a tier ${e} map`,
      group: `tier`,
      icon: `t${e}`,
      ring: l[e],
      title: c[e],
      progress: (t) => s(+!!t.clearsByTier[e], 1),
    })),
    ...[1, 2, 3, 4, 5, 6].map((e) => ({
      id: `sweep_${e}`,
      name: `T${e} Sweep`,
      desc: `Finish every ranked tier ${e} map`,
      group: `sweep`,
      icon: `t${e}`,
      ring: Math.min(3, l[e] + 1),
      title: e >= 4 ? `T${e} Sweeper` : void 0,
      progress: (t) =>
        t.rankedByTier[e] ? s(t.clearsByTier[e], t.rankedByTier[e]) : [0, 1],
    })),
    {
      id: `maps_10`,
      name: `Explorer`,
      desc: `Finish 10 different maps`,
      group: `maps`,
      icon: `map`,
      ring: 0,
      progress: (e) => s(e.maps, 10),
    },
    {
      id: `maps_25`,
      name: `Globetrotter`,
      desc: `Finish 25 different maps`,
      group: `maps`,
      icon: `map`,
      ring: 1,
      title: `Globetrotter`,
      progress: (e) => s(e.maps, 25),
    },
    {
      id: `maps_100`,
      name: `Centurion`,
      desc: `Finish 100 different maps`,
      group: `maps`,
      icon: `map`,
      ring: 3,
      title: `Centurion`,
      progress: (e) => s(e.maps, 100),
    },
    {
      id: `pbs_10`,
      name: `Personal Best`,
      desc: `Hold 10 personal bests`,
      group: `records`,
      icon: `pb`,
      ring: 0,
      progress: (e) => s(e.pbs, 10),
    },
    {
      id: `pbs_50`,
      name: `Best of the Best`,
      desc: `Hold 50 personal bests`,
      group: `records`,
      icon: `pb`,
      ring: 2,
      progress: (e) => s(e.pbs, 50),
    },
    {
      id: `top10_1`,
      name: `Top 10`,
      desc: `Hold a top-10 place on any board`,
      group: `records`,
      icon: `podium`,
      ring: 1,
      progress: (e) => s(e.top10s, 1),
    },
    {
      id: `top10_10`,
      name: `Regular Contender`,
      desc: `Hold 10 top-10 places at once`,
      group: `records`,
      icon: `podium`,
      ring: 2,
      title: `Contender`,
      progress: (e) => s(e.top10s, 10),
    },
    {
      id: `wr_1`,
      name: `World Record`,
      desc: `Hold a world record`,
      group: `records`,
      icon: `crown`,
      ring: 2,
      title: `Record Holder`,
      progress: (e) => s(e.wrs, 1),
    },
    {
      id: `wr_5`,
      name: `Record Collector`,
      desc: `Hold 5 world records at once`,
      group: `records`,
      icon: `crown`,
      ring: 3,
      title: `Record Collector`,
      progress: (e) => s(e.wrs, 5),
    },
    {
      id: `bonus_1`,
      name: `Bonus Round`,
      desc: `Finish a bonus track`,
      group: `maps`,
      icon: `bonus`,
      ring: 0,
      progress: (e) => s(e.bonuses, 1),
    },
    {
      id: `bonus_10`,
      name: `Bonus Hunter`,
      desc: `Finish 10 bonus tracks`,
      group: `maps`,
      icon: `bonus`,
      ring: 1,
      title: `Bonus Hunter`,
      progress: (e) => s(e.bonuses, 10),
    },
    {
      id: `style_legit`,
      name: `Scroll Wheel`,
      desc: `Finish a map in Legit Scroll`,
      group: `style`,
      icon: `scroll`,
      ring: 1,
      progress: (e) => s(e.styleMaps.legit ?? 0, 1),
    },
    {
      id: `style_wonly`,
      name: `W Only`,
      desc: `Finish a map in W-Only`,
      group: `style`,
      icon: `w`,
      ring: 1,
      progress: (e) => s(e.styleMaps.wonly ?? 0, 1),
    },
    {
      id: `style_sideways`,
      name: `Sideways`,
      desc: `Finish a map in Sideways`,
      group: `style`,
      icon: `sw`,
      ring: 1,
      progress: (e) => s(e.styleMaps.sideways ?? 0, 1),
    },
    {
      id: `style_hsw`,
      name: `Half and Half`,
      desc: `Finish a map in Half-Sideways`,
      group: `style`,
      icon: `hsw`,
      ring: 1,
      progress: (e) => s(e.styleMaps.hsw ?? 0, 1),
    },
    {
      id: `style_all`,
      name: `Stylist`,
      desc: `Finish a map in every style`,
      group: `style`,
      icon: `styles`,
      ring: 2,
      title: `Stylist`,
      progress: (e) =>
        s(
          [`autohop`, `legit`, `wonly`, `sideways`, `hsw`].filter(
            (t) => (e.styleMaps[t] ?? 0) > 0,
          ).length,
          5,
        ),
    },
    {
      id: `style_t4`,
      name: `Off the Beaten Path`,
      desc: `Finish a T4+ map in a style other than Normal`,
      group: `style`,
      icon: `styles`,
      ring: 3,
      title: `Stylish`,
      progress: (e) => s(+(e.altStyleMaxTier >= 4), 1),
    },
    {
      id: `scroll_10`,
      name: `Wheel Warrior`,
      desc: `Finish 10 maps in Legit Scroll`,
      group: `style`,
      icon: `scroll`,
      ring: 2,
      title: `Scroller`,
      progress: (e) => s(e.styleMaps.legit ?? 0, 10),
    },
    ...u.map((e) => ({
      id: `time_${e.map}_${e.seconds}`,
      name: e.name,
      desc: `Finish ${e.map} under ${_(e.seconds)} (Normal)`,
      group: `time`,
      icon: `clock`,
      ring: e.ring,
      title: e.title,
      progress: (t) =>
        s(
          +(t.bestNormal[e.map] !== void 0 && t.bestNormal[e.map] < e.seconds),
          1,
        ),
    })),
    {
      id: `sync_90`,
      name: `In Sync`,
      desc: `Finish a T2+ map with 90% sync or better`,
      group: `time`,
      icon: `sync`,
      ring: 1,
      progress: (e) => s(+(e.bestSync >= 90), 1),
    },
    {
      id: `jumps_1k`,
      name: `Bunny`,
      desc: `1,000 jumps in finished runs`,
      group: `lifetime`,
      icon: `jump`,
      ring: 0,
      progress: (e) => s(e.jumps, 1e3),
    },
    {
      id: `jumps_10k`,
      name: `Jackrabbit`,
      desc: `10,000 jumps in finished runs`,
      group: `lifetime`,
      icon: `jump`,
      ring: 1,
      progress: (e) => s(e.jumps, 1e4),
    },
    {
      id: `jumps_100k`,
      name: `Hare Raiser`,
      desc: `100,000 jumps in finished runs`,
      group: `lifetime`,
      icon: `jump`,
      ring: 3,
      title: `Hare Raiser`,
      progress: (e) => s(e.jumps, 1e5),
    },
    {
      id: `clock_1h`,
      name: `Clocked In`,
      desc: `Play for one hour`,
      group: `lifetime`,
      icon: `clock`,
      ring: 0,
      progress: (e) => s(Math.floor(e.playtime), 3600),
    },
    {
      id: `clock_10h`,
      name: `Overtime`,
      desc: `Play for ten hours`,
      group: `lifetime`,
      icon: `clock`,
      ring: 2,
      title: `Workhorse`,
      progress: (e) => s(Math.floor(e.playtime), 36e3),
    },
    {
      id: `level_10`,
      name: `Level 10`,
      desc: `Reach level 10`,
      group: `level`,
      icon: `level`,
      ring: 0,
      progress: (e) => s(e.level, 10),
    },
    {
      id: `level_25`,
      name: `Level 25`,
      desc: `Reach level 25`,
      group: `level`,
      icon: `level`,
      ring: 2,
      title: `Veteran`,
      progress: (e) => s(e.level, 25),
    },
    {
      id: `level_50`,
      name: `Level 50`,
      desc: `Reach level 50`,
      group: `level`,
      icon: `level`,
      ring: 3,
      title: `Legend of the Hop`,
      progress: (e) => s(e.level, 50),
    },
    {
      id: d,
      name: `Play with the Owner`,
      desc: `Be on a multiplayer server at the same time as Huddled, who made bunnyhop.lol, for 30 seconds`,
      group: `social`,
      icon: `together`,
      ring: 2,
      title: `Hopped with Huddled`,
      event: !0,
      progress: () => [0, 1],
    },
    {
      id: f,
      name: `Linked Up`,
      desc: `Link a Discord account to your bunnyhop.lol account`,
      goal: `Link Discord`,
      group: `social`,
      icon: `link`,
      ring: 0,
      event: !0,
      progress: () => [0, 1],
    },
    {
      id: p,
      name: `In the Burrow`,
      desc: `Join the bunnyhop.lol Discord server. It stays yours if you leave`,
      goal: `Join the Discord server`,
      group: `social`,
      icon: `burrow`,
      ring: 1,
      event: !0,
      availability: `discord_server`,
      progress: () => [0, 1],
    },
    {
      id: m,
      name: `Burrow Booster`,
      desc: `Boost the bunnyhop.lol Discord server. The Afterglow set stays yours after the boost ends`,
      goal: `Boost the Discord server`,
      group: `social`,
      icon: `spark`,
      ring: 3,
      event: !0,
      availability: `discord_server`,
      progress: () => [0, 1],
    },
    {
      id: h,
      name: `Early Hopper`,
      desc: `Finished a run in the early alpha, before v0.0.8`,
      goal: `Played before v0.0.8`,
      group: `social`,
      icon: `sprout`,
      ring: 2,
      title: `Early Hopper`,
      event: !0,
      availability: `closed`,
      progress: () => [0, 1],
    },
    {
      id: g,
      name: `Supporter`,
      desc: `Supported bunnyhop.lol with a donation. Every supporter set is yours to keep`,
      goal: `Supporter item`,
      group: `social`,
      icon: `heart`,
      ring: 3,
      title: `Supporter`,
      event: !0,
      availability: `support`,
      progress: () => [0, 1],
    },
  ],
  y = `wings`,
  b = `bhop_lol_hermes`,
  x = `Earn your wings.`;
v.push({
  id: y,
  name: `Winged Feet`,
  desc: `Clear ${b}`,
  goal: `Clear ${b}`,
  group: `records`,
  icon: `wing`,
  ring: 3,
  hidden: !0,
  event: !0,
  progress: () => [0, 1],
});
var S = (e) => !!e?.hidden,
  ee = () => `??? · ${x}`,
  C = new Map(v.map((e) => [e.id, e])),
  w = (e) => C.get(e) ?? null;
function T(e, t) {
  return e === `owner` ? t === `owner` : t === `owner` || t === `admin`;
}
var E = (e) => (e === `owner` ? `Owner only` : `Staff only`);
function te(e) {
  let t = {};
  for (let n of e) n.rank && (t[n.scope] = n.rank);
  return t;
}
function ne(e) {
  let t = e?.all;
  return t === 1 || t === 2 || t === 3 ? t : null;
}
var re = {
    1: { name: `Garden`, color: `#9cbf8a` },
    2: { name: `Market`, color: `#4fa8ff` },
    3: { name: `Prize`, color: `#b67cff` },
    4: { name: `Heirloom`, color: `#ff6fb5` },
    5: { name: `Golden`, color: `#ffd45e` },
  },
  D = { kind: `free` },
  O = (e) => ({ kind: `level`, level: e }),
  k = (e) => ({ kind: `achievement`, id: e }),
  A = (e, t = `all`) => ({ kind: `rank`, max: e, scope: t }),
  j = (e) => ({ kind: `role`, role: e }),
  M = [
    {
      id: `bg-night`,
      slot: `background`,
      name: `Night`,
      unlock: D,
      color: `#151a26`,
    },
    {
      id: `bg-dusk`,
      slot: `background`,
      name: `Dusk`,
      unlock: O(3),
      color: `#3a2546`,
    },
    {
      id: `bg-grid`,
      slot: `background`,
      name: `Blueprint`,
      unlock: O(6),
      color: `#14304a`,
    },
    {
      id: `bg-meadow`,
      slot: `background`,
      name: `Meadow`,
      unlock: k(`sweep_1`),
      color: `#1f4a33`,
    },
    {
      id: `bg-arcade`,
      slot: `background`,
      name: `Arcade`,
      unlock: O(12),
      color: `#2b1450`,
    },
    {
      id: `bg-ember`,
      slot: `background`,
      name: `Ember`,
      unlock: k(`tier_5`),
      color: `#4a1a14`,
    },
    {
      id: `bg-void`,
      slot: `background`,
      name: `Void`,
      unlock: k(`tier_6`),
      color: `#1a0f2e`,
    },
    {
      id: `bg-aurora`,
      slot: `background`,
      name: `Aurora`,
      unlock: O(20),
      color: `#0f3a3a`,
    },
    {
      id: `bg-gold`,
      slot: `background`,
      name: `Gilded`,
      unlock: k(`wr_1`),
      color: `#4a3a12`,
    },
    {
      id: `bg-prism`,
      slot: `background`,
      name: `Prism`,
      unlock: k(`style_all`),
      color: `#3a2a5a`,
    },
    {
      id: `bg-geode`,
      slot: `background`,
      name: `Geode`,
      unlock: k(g),
      color: `#15161f`,
      rarity: 4,
    },
    {
      id: `bg-highroller`,
      slot: `background`,
      name: `High Roller`,
      unlock: k(g),
      color: `#0f4a30`,
      rarity: 4,
    },
    {
      id: `bg-borealis`,
      slot: `background`,
      name: `Borealis`,
      unlock: k(g),
      color: `#0b1530`,
      rarity: 4,
    },
    {
      id: `frame-plain`,
      slot: `frame`,
      name: `Plain`,
      unlock: D,
      color: `#2a3040`,
    },
    {
      id: `frame-steel`,
      slot: `frame`,
      name: `Steel`,
      unlock: O(5),
      color: `#9aa4b5`,
    },
    {
      id: `frame-mint`,
      slot: `frame`,
      name: `Mint`,
      unlock: k(`sweep_1`),
      color: `#5ee08a`,
    },
    {
      id: `frame-tiers`,
      slot: `frame`,
      name: `Tier Ramp`,
      unlock: k(`tier_4`),
      color: `#ff9a3c`,
    },
    {
      id: `frame-ember`,
      slot: `frame`,
      name: `Ember`,
      unlock: k(`tier_5`),
      color: `#ff5468`,
    },
    {
      id: `frame-violet`,
      slot: `frame`,
      name: `Ascended`,
      unlock: k(`tier_6`),
      color: `#c477ff`,
    },
    {
      id: `frame-gold`,
      slot: `frame`,
      name: `Gold`,
      unlock: k(`wr_1`),
      color: `#ffd45e`,
    },
    {
      id: `frame-holo`,
      slot: `frame`,
      name: `Holo`,
      unlock: O(30),
      color: `#79d2ff`,
    },
    {
      id: `frame-podium`,
      slot: `frame`,
      name: `Podium`,
      unlock: A(3),
      color: `#e8b931`,
      rarity: 5,
    },
    {
      id: `frame-reigning`,
      slot: `frame`,
      name: `Reigning`,
      unlock: A(1),
      color: `#fff2b0`,
      rarity: 5,
    },
    {
      id: `frame-founder`,
      slot: `frame`,
      name: `Founder`,
      unlock: j(`owner`),
      color: `#ff7a1a`,
      rarity: 5,
    },
    {
      id: `frame-geode`,
      slot: `frame`,
      name: `Geode`,
      unlock: k(g),
      color: `#5ff2df`,
      rarity: 4,
    },
    {
      id: `frame-highroller`,
      slot: `frame`,
      name: `High Roller`,
      unlock: k(g),
      color: `#e0b13a`,
      rarity: 4,
    },
    {
      id: `frame-borealis`,
      slot: `frame`,
      name: `Borealis`,
      unlock: k(g),
      color: `#3ff0a0`,
      rarity: 4,
    },
    {
      id: `ghost-gold`,
      slot: `ghost`,
      name: `Gold`,
      unlock: D,
      color: `#ffc23d`,
    },
    {
      id: `ghost-mint`,
      slot: `ghost`,
      name: `Mint`,
      unlock: O(2),
      color: `#5ee08a`,
    },
    {
      id: `ghost-cyan`,
      slot: `ghost`,
      name: `Cyan`,
      unlock: O(4),
      color: `#3fd0c9`,
    },
    {
      id: `ghost-rose`,
      slot: `ghost`,
      name: `Rose`,
      unlock: O(8),
      color: `#ff7aa8`,
    },
    {
      id: `ghost-ember`,
      slot: `ghost`,
      name: `Ember`,
      unlock: k(`tier_4`),
      color: `#ff6a3c`,
    },
    {
      id: `ghost-violet`,
      slot: `ghost`,
      name: `Violet`,
      unlock: k(`tier_6`),
      color: `#c477ff`,
    },
    {
      id: `ghost-white`,
      slot: `ghost`,
      name: `Pearl`,
      unlock: O(15),
      color: `#f2f5ff`,
    },
    {
      id: `ghost-lime`,
      slot: `ghost`,
      name: `Lime`,
      unlock: k(`style_all`),
      color: `#c6ff4d`,
    },
    {
      id: `ghost-reigning`,
      slot: `ghost`,
      name: `Reigning`,
      unlock: A(1),
      color: `#fff2b0`,
      rarity: 5,
    },
    {
      id: `ghost-founder`,
      slot: `ghost`,
      name: `Founder`,
      unlock: j(`owner`),
      color: `#3ff0ff`,
      rarity: 5,
    },
    {
      id: `ghost-geode`,
      slot: `ghost`,
      name: `Geode`,
      unlock: k(g),
      color: `#5ff2df`,
      color2: `#8f72ff`,
      rarity: 4,
    },
    {
      id: `ghost-highroller`,
      slot: `ghost`,
      name: `High Roller`,
      unlock: k(g),
      color: `#2fbf73`,
      color2: `#ffcf4a`,
      rarity: 4,
    },
    {
      id: `ghost-borealis`,
      slot: `ghost`,
      name: `Borealis`,
      unlock: k(g),
      color: `#4dffb0`,
      color2: `#a77cff`,
      rarity: 4,
    },
    {
      id: `trail-gold`,
      slot: `trail`,
      name: `Gold`,
      unlock: D,
      color: `#ffc23d`,
    },
    {
      id: `trail-sky`,
      slot: `trail`,
      name: `Sky`,
      unlock: O(3),
      color: `#66b3ff`,
    },
    {
      id: `trail-mint`,
      slot: `trail`,
      name: `Mint`,
      unlock: k(`tier_2`),
      color: `#5ee08a`,
    },
    {
      id: `trail-rose`,
      slot: `trail`,
      name: `Rose`,
      unlock: O(10),
      color: `#ff7aa8`,
    },
    {
      id: `trail-ember`,
      slot: `trail`,
      name: `Ember`,
      unlock: k(`tier_5`),
      color: `#ff5468`,
    },
    {
      id: `trail-violet`,
      slot: `trail`,
      name: `Violet`,
      unlock: k(`jumps_10k`),
      color: `#c477ff`,
    },
    {
      id: `trail-white`,
      slot: `trail`,
      name: `Pearl`,
      unlock: k(`wr_1`),
      color: `#f2f5ff`,
    },
    {
      id: `trail-podium`,
      slot: `trail`,
      name: `Podium`,
      unlock: A(3),
      color: `#e8b931`,
      rarity: 5,
    },
    {
      id: `trail-reigning`,
      slot: `trail`,
      name: `Reigning`,
      unlock: A(1),
      color: `#fff2b0`,
      rarity: 5,
    },
    {
      id: `trail-founder`,
      slot: `trail`,
      name: `Founder`,
      unlock: j(`owner`),
      color: `#ff7a1a`,
      rarity: 5,
    },
    {
      id: `trail-afterglow`,
      slot: `trail`,
      name: `Afterglow`,
      unlock: k(m),
      color: `#f47fff`,
    },
    {
      id: `trail-geode`,
      slot: `trail`,
      name: `Geode`,
      unlock: k(g),
      color: `#5ff2df`,
      color2: `#8f72ff`,
      rarity: 4,
    },
    {
      id: `trail-highroller`,
      slot: `trail`,
      name: `High Roller`,
      unlock: k(g),
      color: `#ffcf4a`,
      color2: `#1f9a5c`,
      rarity: 4,
    },
    {
      id: `trail-borealis`,
      slot: `trail`,
      name: `Borealis`,
      unlock: k(g),
      color: `#3ff0a0`,
      color2: `#9a6bff`,
      rarity: 4,
    },
    {
      id: `outfit-cream`,
      slot: `outfit`,
      name: `Cream`,
      unlock: D,
      color: `#ece5d8`,
    },
    {
      id: `outfit-midnight`,
      slot: `outfit`,
      name: `Midnight`,
      unlock: D,
      color: `#262b38`,
    },
    {
      id: `outfit-neon`,
      slot: `outfit`,
      name: `Neon`,
      unlock: D,
      color: `#7dff4a`,
    },
    {
      id: `outfit-carrot`,
      slot: `outfit`,
      name: `Carrot`,
      unlock: O(3),
      color: `#ff8a2a`,
    },
    {
      id: `outfit-mint`,
      slot: `outfit`,
      name: `Mint`,
      unlock: k(`tier_2`),
      color: `#c9f2dc`,
    },
    {
      id: `outfit-sakura`,
      slot: `outfit`,
      name: `Sakura`,
      unlock: O(8),
      color: `#ffd3e2`,
    },
    {
      id: `outfit-arctic`,
      slot: `outfit`,
      name: `Arctic`,
      unlock: O(15),
      color: `#f3f7fb`,
    },
    {
      id: `outfit-ember`,
      slot: `outfit`,
      name: `Ember`,
      unlock: k(`tier_5`),
      color: `#ff5a36`,
    },
    {
      id: `outfit-void`,
      slot: `outfit`,
      name: `Void`,
      unlock: k(`tier_6`),
      color: `#c477ff`,
    },
    {
      id: `outfit-gold`,
      slot: `outfit`,
      name: `Gilded`,
      unlock: k(`wr_1`),
      color: `#ffd45e`,
    },
    {
      id: `outfit-blurple`,
      slot: `outfit`,
      name: `Blurple`,
      unlock: k(p),
      color: `#5865f2`,
    },
    {
      id: `outfit-afterglow`,
      slot: `outfit`,
      name: `Afterglow`,
      unlock: k(m),
      color: `#f47fff`,
    },
    {
      id: `outfit-geode`,
      slot: `outfit`,
      name: `Geode`,
      unlock: k(g),
      color: `#1d6b74`,
      rarity: 4,
    },
    {
      id: `outfit-highroller`,
      slot: `outfit`,
      name: `High Roller`,
      unlock: k(g),
      color: `#0f5a3a`,
      rarity: 4,
    },
    {
      id: `outfit-borealis`,
      slot: `outfit`,
      name: `Borealis`,
      unlock: k(g),
      color: `#101a33`,
      rarity: 4,
    },
    {
      id: `outfit-bronzehare`,
      slot: `outfit`,
      name: `Bronze Hare`,
      unlock: A(3),
      color: `#c98a52`,
      rarity: 5,
    },
    {
      id: `outfit-silverhare`,
      slot: `outfit`,
      name: `Silver Hare`,
      unlock: A(2),
      color: `#dfe5ee`,
      rarity: 5,
    },
    {
      id: `outfit-reigning`,
      slot: `outfit`,
      name: `Reigning`,
      unlock: A(1),
      color: `#ffd45e`,
      rarity: 5,
    },
    {
      id: `outfit-founder`,
      slot: `outfit`,
      name: `Founder`,
      unlock: j(`owner`),
      color: `#2a1660`,
      rarity: 5,
    },
    {
      id: `knife-carrot`,
      slot: `knife`,
      name: `Carrot Blade`,
      unlock: D,
      color: `#ff7a1a`,
      rarity: 1,
    },
    {
      id: `knife-bayonet`,
      slot: `knife`,
      name: `Carrot Bayonet`,
      unlock: D,
      color: `#ff8a2a`,
      rarity: 2,
    },
    {
      id: `knife-parsnip`,
      slot: `knife`,
      name: `Parsnip Stiletto`,
      unlock: D,
      color: `#efe2b8`,
      rarity: 2,
    },
    {
      id: `knife-karrotbit`,
      slot: `knife`,
      name: `Karrotbit`,
      unlock: D,
      color: `#ff7a1a`,
      rarity: 3,
    },
    {
      id: `knife-radish`,
      slot: `knife`,
      name: `Radish Kukri`,
      unlock: D,
      color: `#ff5c8a`,
      rarity: 3,
    },
    {
      id: `knife-leek`,
      slot: `knife`,
      name: `Leek Saber`,
      unlock: D,
      color: `#8fdc6a`,
      rarity: 3,
    },
    {
      id: `knife-cleaver`,
      slot: `knife`,
      name: `Clover Cleaver`,
      unlock: D,
      color: `#5ee08a`,
      rarity: 3,
    },
    {
      id: `knife-bunnyfly`,
      slot: `knife`,
      name: `Bunnyfly`,
      unlock: D,
      color: `#ff9a3c`,
      rarity: 4,
    },
    {
      id: `knife-daikon`,
      slot: `knife`,
      name: `Daikon-tana`,
      unlock: D,
      color: `#f3f1ea`,
      rarity: 4,
    },
    {
      id: `knife-sprouts`,
      slot: `knife`,
      name: `Twin Sprouts`,
      unlock: D,
      color: `#ffb04a`,
      rarity: 4,
    },
    {
      id: `knife-candycane`,
      slot: `knife`,
      name: `Candy Cane Shiv`,
      unlock: D,
      color: `#e8333f`,
      rarity: 5,
    },
    {
      id: `knife-golden`,
      slot: `knife`,
      name: `Golden Carrot`,
      unlock: D,
      color: `#ffd45e`,
      rarity: 5,
    },
    {
      id: `knife-thornback`,
      slot: `knife`,
      name: `Thornback`,
      unlock: k(g),
      color: `#2b6870`,
      rarity: 4,
    },
    {
      id: `knife-thistle`,
      slot: `knife`,
      name: `Thistle`,
      unlock: k(g),
      color: `#b46ad8`,
      rarity: 4,
    },
    {
      id: `fin-garden`,
      slot: `finish`,
      name: `Garden Fresh`,
      unlock: D,
      color: `#ff7a1a`,
      rarity: 1,
    },
    {
      id: `fin-sunset`,
      slot: `finish`,
      name: `Sunset`,
      unlock: O(20),
      color: `#f86a7c`,
      rarity: 3,
    },
    {
      id: `fin-ember`,
      slot: `finish`,
      name: `Ember Glaze`,
      unlock: k(`jumps_10k`),
      color: `#e0582a`,
      rarity: 3,
    },
    {
      id: `fin-tigerlily`,
      slot: `finish`,
      name: `Tiger Lily`,
      unlock: k(`style_t4`),
      color: `#f5862a`,
      rarity: 3,
    },
    {
      id: `fin-nebula`,
      slot: `finish`,
      name: `Nebula`,
      unlock: k(`tier_4`),
      color: `#6a3ad0`,
      rarity: 3,
      legacy: [k(`maps_25`), O(30), k(`wr_5`)],
    },
    {
      id: `fin-dewweb`,
      slot: `finish`,
      name: `Dewdrop Web`,
      unlock: k(`tier_5`),
      color: `#3a5a9a`,
      rarity: 4,
      legacy: [k(`sweep_5`)],
    },
    {
      id: `fin-frost`,
      slot: `finish`,
      name: `Frost`,
      unlock: k(`tier_6`),
      color: `#9fd8ff`,
      rarity: 4,
      legacy: [k(`top10_1`)],
    },
    {
      id: `fin-heartbeet`,
      slot: `finish`,
      name: `Heartbeet`,
      unlock: k(`wr_1`),
      color: `#c0144a`,
      rarity: 5,
    },
    {
      id: `fin-fourleaf`,
      slot: `finish`,
      name: `Four-Leaf`,
      unlock: k(`level_50`),
      color: `#1aa851`,
      rarity: 5,
    },
    {
      id: `fin-founder`,
      slot: `finish`,
      name: `Founder's Gold`,
      unlock: j(`owner`),
      color: `#ffc23d`,
      rarity: 5,
    },
    {
      id: `fin-geode`,
      slot: `finish`,
      name: `Geode`,
      unlock: k(g),
      color: `#5ff2df`,
      rarity: 4,
    },
    {
      id: `fin-rift`,
      slot: `finish`,
      name: `Rift`,
      unlock: k(g),
      color: `#6a2cff`,
      rarity: 4,
    },
    {
      id: `fin-spectrum`,
      slot: `finish`,
      name: `Spectrum`,
      unlock: k(g),
      color: `#2a8cff`,
      rarity: 4,
    },
    {
      id: `fin-goldleaf`,
      slot: `finish`,
      name: `Gold Leaf`,
      unlock: k(g),
      color: `#e0b13a`,
      rarity: 4,
    },
    {
      id: `fin-aurora`,
      slot: `finish`,
      name: `Aurora`,
      unlock: k(g),
      color: `#3ff0a0`,
      rarity: 4,
    },
    {
      id: `glove-knit`,
      slot: `glove`,
      name: `Knit`,
      unlock: D,
      color: `#2a2e38`,
      rarity: 1,
    },
    {
      id: `glove-garden-classic`,
      slot: `glove`,
      name: `Garden · Classic`,
      unlock: k(`first_finish`),
      color: `#2e7d4a`,
      rarity: 1,
    },
    {
      id: `glove-wraps-ducttape`,
      slot: `glove`,
      name: `Hand Wraps · Duct Tape`,
      unlock: k(`bonus_1`),
      color: `#a3a9b1`,
      rarity: 1,
    },
    {
      id: `glove-sport-carrot`,
      slot: `glove`,
      name: `Sport · Carrot`,
      unlock: O(5),
      color: `#ff8a2a`,
      rarity: 2,
    },
    {
      id: `glove-garden-tulip`,
      slot: `glove`,
      name: `Garden · Tulip`,
      unlock: k(`maps_10`),
      color: `#e0457b`,
      rarity: 2,
    },
    {
      id: `glove-wraps-spruce`,
      slot: `glove`,
      name: `Hand Wraps · Spruce`,
      unlock: k(`clock_1h`),
      color: `#3f7a5a`,
      rarity: 2,
    },
    {
      id: `glove-sport-vice`,
      slot: `glove`,
      name: `Sport · Vice`,
      unlock: O(12),
      color: `#ff6fae`,
      rarity: 2,
    },
    {
      id: `glove-driver-tan`,
      slot: `glove`,
      name: `Driver · Tan`,
      unlock: O(15),
      color: `#c08a55`,
      rarity: 2,
    },
    {
      id: `glove-garden-moss`,
      slot: `glove`,
      name: `Garden · Moss`,
      unlock: k(`maps_25`),
      color: `#4d6b2a`,
      rarity: 2,
    },
    {
      id: `glove-paws-cocoa`,
      slot: `glove`,
      name: `Paw Pads · Cocoa`,
      unlock: k(`jumps_10k`),
      color: `#7a5236`,
      rarity: 2,
    },
    {
      id: `glove-driver-cocoa`,
      slot: `glove`,
      name: `Driver · Cocoa`,
      unlock: k(`pbs_10`),
      color: `#4a3326`,
      rarity: 2,
    },
    {
      id: `glove-sport-pandora`,
      slot: `glove`,
      name: `Sport · Pandora`,
      unlock: O(20),
      color: `#5b2a86`,
      rarity: 3,
    },
    {
      id: `glove-sport-superconductor`,
      slot: `glove`,
      name: `Sport · Superconductor`,
      unlock: k(`tier_4`),
      color: `#2a62e8`,
      rarity: 3,
    },
    {
      id: `glove-driver-racing`,
      slot: `glove`,
      name: `Driver · Racing Green`,
      unlock: k(`tier_3`),
      color: `#2f5a3a`,
      rarity: 3,
    },
    {
      id: `glove-wraps-ember`,
      slot: `glove`,
      name: `Hand Wraps · Ember`,
      unlock: k(`bonus_10`),
      color: `#d8433a`,
      rarity: 3,
    },
    {
      id: `glove-moto-boom`,
      slot: `glove`,
      name: `Moto · Boom`,
      unlock: k(`sync_90`),
      color: `#ff7a3c`,
      rarity: 3,
    },
    {
      id: `glove-moto-spearmint`,
      slot: `glove`,
      name: `Moto · Spearmint`,
      unlock: k(`top10_10`),
      color: `#2fd39a`,
      rarity: 3,
    },
    {
      id: `glove-paws-snow`,
      slot: `glove`,
      name: `Paw Pads · Snow`,
      unlock: O(30),
      color: `#f7f4ef`,
      rarity: 3,
    },
    {
      id: `glove-moto-eclipse`,
      slot: `glove`,
      name: `Moto · Eclipse`,
      unlock: k(`clock_10h`),
      color: `#ffb43c`,
      rarity: 4,
    },
    {
      id: `glove-specialist-forest`,
      slot: `glove`,
      name: `Specialist · Forest`,
      unlock: k(`tier_5`),
      color: `#3d5a3a`,
      rarity: 4,
    },
    {
      id: `glove-specialist-crimson`,
      slot: `glove`,
      name: `Specialist · Crimson`,
      unlock: k(`sweep_5`),
      color: `#b02a3a`,
      rarity: 4,
    },
    {
      id: `glove-specialist-arctic`,
      slot: `glove`,
      name: `Specialist · Arctic`,
      unlock: k(`tier_6`),
      color: `#49b6ff`,
      rarity: 4,
    },
    {
      id: `glove-paws-sakura`,
      slot: `glove`,
      name: `Paw Pads · Sakura`,
      unlock: k(`jumps_100k`),
      color: `#ff7aa8`,
      rarity: 4,
    },
    {
      id: `glove-sport-blurple`,
      slot: `glove`,
      name: `Sport · Blurple`,
      unlock: k(f),
      color: `#5865f2`,
      rarity: 2,
    },
    {
      id: `glove-moto-afterglow`,
      slot: `glove`,
      name: `Moto · Afterglow`,
      unlock: k(m),
      color: `#f47fff`,
      rarity: 4,
    },
    {
      id: `glove-specialist-geode`,
      slot: `glove`,
      name: `Specialist · Geode`,
      unlock: k(g),
      color: `#1d6b74`,
      rarity: 4,
    },
    {
      id: `glove-driver-highroller`,
      slot: `glove`,
      name: `Driver · High Roller`,
      unlock: k(g),
      color: `#17181c`,
      rarity: 4,
    },
    {
      id: `glove-sport-borealis`,
      slot: `glove`,
      name: `Sport · Borealis`,
      unlock: k(g),
      color: `#14203d`,
      rarity: 4,
    },
  ],
  N = (e) =>
    e
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, `-`)
      .replace(/^-|-$/g, ``);
for (let e of v)
  e.title &&
    M.push({
      id: `title-${N(e.title)}`,
      slot: `title`,
      name: e.title,
      unlock: k(e.id),
    });
for (let [e, t] of [
  [1, `Newcomer`],
  [5, `Regular`],
  [15, `Seasoned`],
])
  M.push({
    id: `title-${N(t)}`,
    slot: `title`,
    name: t,
    unlock: e === 1 ? D : O(e),
  });
(M.push({
  id: `title-reigning-champion`,
  slot: `title`,
  name: `Reigning Champion`,
  unlock: A(1),
  rarity: 5,
}),
  M.push({
    id: `title-style-champion`,
    slot: `title`,
    name: `Style Champion`,
    unlock: A(1, `style`),
    rarity: 5,
  }),
  M.push({
    id: `title-owner`,
    slot: `title`,
    name: `Owner`,
    unlock: j(`owner`),
    rarity: 5,
  }),
  M.push({
    id: `title-staff`,
    slot: `title`,
    name: `Staff`,
    unlock: j(`staff`),
    rarity: 5,
  }),
  M.push(
    {
      id: `hat-founder-crown`,
      slot: `hat`,
      name: `Founder Crown`,
      unlock: j(`owner`),
      color: `#7a3cff`,
      rarity: 5,
    },
    {
      id: `hat-tophat`,
      slot: `hat`,
      name: `Tiny Top Hat`,
      unlock: j(`owner`),
      color: `#2a2340`,
      rarity: 5,
    },
    {
      id: `hat-beanie`,
      slot: `hat`,
      name: `Carrot Beanie`,
      unlock: j(`owner`),
      color: `#ff7a1a`,
      rarity: 5,
    },
    {
      id: `hat-gem-orbit`,
      slot: `hat`,
      name: `Gem Orbit`,
      unlock: k(g),
      color: `#9b5cf5`,
      rarity: 4,
    },
    {
      id: `hat-halo`,
      slot: `hat`,
      name: `Halo`,
      unlock: k(g),
      color: `#8f72ff`,
      rarity: 4,
    },
    {
      id: `hat-circlet`,
      slot: `hat`,
      name: `Circlet`,
      unlock: k(g),
      color: `#342a78`,
      rarity: 4,
    },
    {
      id: `hat-dealer-visor`,
      slot: `hat`,
      name: `Dealer's Visor`,
      unlock: k(g),
      color: `#1e9a5a`,
      rarity: 4,
    },
    {
      id: `hat-lucky-coins`,
      slot: `hat`,
      name: `Lucky Coins`,
      unlock: k(g),
      color: `#ffcf4a`,
      rarity: 4,
    },
    {
      id: `hat-aurora`,
      slot: `hat`,
      name: `Aurora`,
      unlock: k(g),
      color: `#3ff0a0`,
      rarity: 4,
    },
  ),
  M.push({
    id: `outfit-tek`,
    slot: `outfit`,
    name: `Tek`,
    unlock: k(y),
    color: `#1f4a33`,
    rarity: 5,
  }));
function ie(e) {
  return e?.unlock.kind === `achievement` && S(w(e.unlock.id));
}
M.push(
  {
    id: `title-high-roller`,
    slot: `title`,
    name: `High Roller`,
    unlock: k(g),
    rarity: 4,
  },
  {
    id: `title-stargazer`,
    slot: `title`,
    name: `Stargazer`,
    unlock: k(g),
    rarity: 4,
  },
);
var P = [
  {
    id: `geode`,
    name: `Geode`,
    items: [
      `bg-geode`,
      `frame-geode`,
      `ghost-geode`,
      `trail-geode`,
      `outfit-geode`,
      `fin-geode`,
      `fin-rift`,
      `fin-spectrum`,
      `glove-specialist-geode`,
      `hat-gem-orbit`,
      `hat-halo`,
      `hat-circlet`,
    ],
    look: {
      finish: `fin-geode`,
      glove: `glove-specialist-geode`,
      outfit: `outfit-geode`,
      hat: `hat-gem-orbit`,
      ghost: `ghost-geode`,
      trail: `trail-geode`,
    },
  },
  {
    id: `highroller`,
    name: `High Roller`,
    items: [
      `bg-highroller`,
      `frame-highroller`,
      `ghost-highroller`,
      `trail-highroller`,
      `outfit-highroller`,
      `fin-goldleaf`,
      `glove-driver-highroller`,
      `hat-dealer-visor`,
      `hat-lucky-coins`,
      `title-high-roller`,
    ],
    look: {
      finish: `fin-goldleaf`,
      glove: `glove-driver-highroller`,
      outfit: `outfit-highroller`,
      hat: `hat-lucky-coins`,
      ghost: `ghost-highroller`,
      trail: `trail-highroller`,
    },
  },
  {
    id: `borealis`,
    name: `Borealis`,
    items: [
      `bg-borealis`,
      `frame-borealis`,
      `ghost-borealis`,
      `trail-borealis`,
      `outfit-borealis`,
      `fin-aurora`,
      `glove-sport-borealis`,
      `hat-aurora`,
      `title-stargazer`,
    ],
    look: {
      finish: `fin-aurora`,
      glove: `glove-sport-borealis`,
      outfit: `outfit-borealis`,
      hat: `hat-aurora`,
      ghost: `ghost-borealis`,
      trail: `trail-borealis`,
    },
  },
];
for (let e of P)
  for (let t of e.items) {
    let n = M.find((e) => e.id === t);
    n && (n.set = e.id);
  }
var F = {
    "fin-fade": `fin-sunset`,
    "fin-case": `fin-ember`,
    "fin-tiger": `fin-tigerlily`,
    "fin-web": `fin-dewweb`,
    "fin-doppelhop-p1": `fin-nebula`,
    "fin-doppelhop-p2": `fin-nebula`,
    "fin-doppelhop-p4": `fin-nebula`,
    "fin-doppelhop-blackpearl": `fin-nebula`,
    "fin-doppelhop-p3": `fin-frost`,
    "fin-doppelhop-sapphire": `fin-frost`,
    "fin-doppelhop-ruby": `fin-heartbeet`,
    "fin-gamma-emerald": `fin-fourleaf`,
  },
  I = new Map(M.map((e) => [e.id, e])),
  L = (e) => (e ? (I.get(e) ?? I.get(F[e] ?? ``) ?? null) : null),
  R = {
    background: `bg-night`,
    frame: `frame-plain`,
    title: null,
    ghost: `ghost-gold`,
    trail: `trail-gold`,
    outfit: `outfit-cream`,
    knife: `knife-carrot`,
    finish: `fin-garden`,
    glove: `glove-knit`,
    hat: null,
  };
function z(e, t) {
  return e.unlock.kind === `role` || !T(`staff`, t) || (B(e) && t !== `owner`)
    ? !1
    : e.unlock.kind !== `rank` || t === `owner`;
}
P[0].look;
var B = (e) => e.unlock.kind === `achievement` && e.unlock.id === `supporter`;
function ae(e, t, n, r = {}, i = null, a = !0) {
  if (a && z(e, i)) return !0;
  let o = (e) => (Array.isArray(n) ? n.includes(e) : n.has(e)),
    s = (e) => {
      switch (e.kind) {
        case `free`:
          return !0;
        case `level`:
          return t >= e.level;
        case `achievement`:
          return o(e.id);
        case `rank`:
          return e.scope === `all`
            ? (r.all ?? 1 / 0) <= e.max
            : Object.entries(r).some(([t, n]) => t !== `all` && n <= e.max);
        case `role`:
          return T(e.role, i);
      }
    };
  return s(e.unlock) || !!e.legacy?.some(s);
}
function oe(e) {
  switch (e.unlock.kind) {
    case `free`:
      return `Free`;
    case `level`:
      return `Level ${e.unlock.level}`;
    case `achievement`: {
      let t = w(e.unlock.id);
      return S(t) ? `???` : (t?.goal ?? t?.name ?? e.unlock.id);
    }
    case `rank`:
      return V(e.unlock);
    case `role`:
      return E(e.unlock.role);
  }
}
function V(e) {
  return e.scope === `style`
    ? e.max === 1
      ? `Hold #1 in a style`
      : `Hold top ${e.max} in a style`
    : e.max === 1
      ? `Hold overall #1`
      : `Hold overall top ${e.max}`;
}
function H(e, n, r = 3) {
  let i = new Map();
  for (let n of e) {
    let e = t(n.tier);
    e && i.set(e, [...(i.get(e) ?? []), n]);
  }
  let a = [];
  for (let e = 1; e <= 6 && a.length < r; e++) {
    let t = i.get(e) ?? [];
    if (!t.length) continue;
    let o = t.filter((e) => n.has(e.name)).length,
      s = o >= Math.min(3, t.length),
      c = t
        .filter((e) => !n.has(e.name))
        .sort(
          (e, t) =>
            (t.players ?? 0) - (e.players ?? 0) || e.name.localeCompare(t.name),
        );
    if (!s)
      for (let n of c) {
        if (a.length >= r) break;
        a.push({
          map: n.name,
          tier: e,
          reason:
            o === 0
              ? e === 1
                ? `Start here`
                : `Your first T${e}`
              : `${o}/${Math.min(3, t.length)} T${e} clears to move up`,
        });
      }
  }
  if (a.length < r) {
    let i = e
      .filter(
        (e) => t(e.tier) && !n.has(e.name) && !a.some((t) => t.map === e.name),
      )
      .sort(
        (e, n) =>
          t(e.tier) - t(n.tier) ||
          (n.players ?? 0) - (e.players ?? 0) ||
          e.name.localeCompare(n.name),
      );
    for (let e of i.slice(0, r - a.length))
      a.push({
        map: e.name,
        tier: t(e.tier),
        reason: `Uncleared T${t(e.tier)}`,
      });
  }
  return a;
}
var U = R.knife,
  W = R.finish,
  G = R.glove,
  K = Object.freeze({ knife: U, finish: W, glove: G }),
  q = {
    "fin-garden": { kind: `none` },
    "fin-sunset": { kind: `sunset` },
    "fin-ember": { kind: `ember` },
    "fin-tigerlily": { kind: `tigerlily` },
    "fin-nebula": { kind: `nebula` },
    "fin-dewweb": { kind: `dewweb` },
    "fin-frost": { kind: `frost` },
    "fin-heartbeet": { kind: `heartbeet` },
    "fin-fourleaf": { kind: `fourleaf` },
    "fin-founder": { kind: `founder` },
    "fin-geode": { kind: `geode` },
    "fin-rift": { kind: `rift` },
    "fin-spectrum": { kind: `spectrum` },
    "fin-goldleaf": { kind: `goldleaf` },
    "fin-aurora": { kind: `aurora` },
  },
  se = (e) => q[L(e)?.id ?? ``] ?? q[W],
  ce = [
    `knit`,
    `sport`,
    `driver`,
    `wraps`,
    `moto`,
    `specialist`,
    `paws`,
    `garden`,
  ],
  J = (e, t, n, r, i, a) => ({
    style: e,
    base: t,
    fingers: n,
    tips: r,
    strap: i,
    detail: a,
  }),
  Y = {
    "glove-knit": J(`knit`, 0, 0, 0, 0, 0),
    "glove-sport-carrot": J(
      `sport`,
      16747050,
      3112244,
      5817930,
      16773600,
      16773600,
    ),
    "glove-sport-vice": J(
      `sport`,
      16740270,
      4182756,
      4182756,
      16053496,
      16777215,
    ),
    "glove-sport-pandora": J(
      `sport`,
      5974662,
      13215999,
      13215999,
      15853823,
      16757820,
    ),
    "glove-sport-superconductor": J(
      `sport`,
      10134192,
      2777832,
      2777832,
      15265528,
      1843760,
    ),
    "glove-sport-blurple": J(
      `sport`,
      5793266,
      2303534,
      5763719,
      16053759,
      16777215,
    ),
    "glove-driver-tan": J(
      `driver`,
      12618325,
      11828554,
      9067059,
      7029798,
      15918800,
    ),
    "glove-driver-racing": J(
      `driver`,
      3103290,
      2773556,
      2047271,
      15525336,
      16757820,
    ),
    "glove-driver-cocoa": J(
      `driver`,
      4862758,
      4403234,
      3351578,
      16747050,
      16747050,
    ),
    "glove-wraps-ember": J(
      `wraps`,
      14172986,
      12728882,
      14172986,
      2764344,
      15918800,
    ),
    "glove-wraps-ducttape": J(
      `wraps`,
      10725809,
      9738915,
      10725809,
      6120300,
      2764344,
    ),
    "glove-wraps-spruce": J(
      `wraps`,
      4160090,
      3698257,
      4160090,
      15525336,
      16757820,
    ),
    "glove-moto-spearmint": J(
      `moto`,
      15332847,
      2376250,
      3134362,
      2376250,
      3134362,
    ),
    "glove-moto-eclipse": J(
      `moto`,
      1909040,
      2830658,
      16757820,
      1316638,
      16757820,
    ),
    "glove-moto-boom": J(
      `moto`,
      16742972,
      16732043,
      1776418,
      1776418,
      16766046,
    ),
    "glove-moto-afterglow": J(
      `moto`,
      3416158,
      2233407,
      16023551,
      1839152,
      16762111,
    ),
    "glove-specialist-crimson": J(
      `specialist`,
      8003371,
      1907234,
      11545146,
      8003371,
      16757820,
    ),
    "glove-specialist-forest": J(
      `specialist`,
      4020794,
      2304546,
      7311194,
      4020794,
      15260864,
    ),
    "glove-specialist-arctic": J(
      `specialist`,
      15265526,
      9413560,
      4830975,
      15265526,
      4830975,
    ),
    "glove-paws-snow": J(
      `paws`,
      16250095,
      16250095,
      16753600,
      16777215,
      16753600,
    ),
    "glove-paws-cocoa": J(
      `paws`,
      8016438,
      8016438,
      15902624,
      15325124,
      15902624,
    ),
    "glove-paws-sakura": J(
      `paws`,
      16765922,
      16765922,
      16743080,
      16777215,
      16743080,
    ),
    "glove-garden-classic": J(
      `garden`,
      15260864,
      15260864,
      3046730,
      3046730,
      12165754,
    ),
    "glove-garden-tulip": J(
      `garden`,
      15853270,
      15853270,
      14697851,
      16766046,
      13214330,
    ),
    "glove-garden-moss": J(
      `garden`,
      13222563,
      13222563,
      5073706,
      9067051,
      9405798,
    ),
    "glove-driver-highroller": J(
      `driver`,
      1513500,
      1908259,
      1006138,
      14725434,
      14725434,
    ),
    "glove-sport-borealis": J(
      `sport`,
      1318973,
      4190368,
      10120191,
      15267583,
      6160304,
    ),
    "glove-specialist-geode": J(
      `specialist`,
      1928052,
      2302766,
      8019176,
      1928052,
      6288095,
    ),
  },
  X = (e) => (e && Y[e]) || Y[G],
  Z = (e, t, n) => {
    let r = typeof t == `string` ? L(t) : null;
    return r && r.slot === e ? r.id : n;
  };
function Q(e, t = null) {
  let n = e ?? {},
    r = {
      knife: Z(`knife`, n.knife, U),
      finish: Z(`finish`, n.finish, W),
      glove: Z(`glove`, n.glove, G),
    };
  t && (r.crown = t);
  let i = Z(`hat`, n.hat, ``);
  return (i && (r.hat = i), r);
}
var le = (e) => (e === 1 || e === 2 || e === 3 ? e : null);
function $(e) {
  if (!e || typeof e != `object`) return null;
  let t = e;
  return Q(t, le(t.crown));
}
var ue = (e, t) =>
    !!e &&
    !!t &&
    e.knife === t.knife &&
    e.finish === t.finish &&
    e.glove === t.glove &&
    (e.crown ?? null) === (t.crown ?? null) &&
    (e.hat ?? null) === (t.hat ?? null),
  de = `2`;
function fe(e) {
  let t = e.hat ? [e.crown ?? ``, e.hat] : e.crown ? [e.crown] : [];
  return [de, e.knife, e.finish, e.glove, ...t].join(`;`);
}
function pe(e) {
  if (!e || e.length > 200) return null;
  let t = e.split(`;`);
  return t[0] === `2` && t.length >= 4
    ? $({
        knife: t[1],
        finish: t[2],
        glove: t[3],
        crown: t[4] ? Number(t[4]) : null,
        hat: t[5],
      })
    : t[0] === `1` && t.length >= 6
      ? !Number.isInteger(Number(t[3])) || !Number.isInteger(Number(t[4]))
        ? null
        : $({
            knife: t[1],
            finish: t[2],
            glove: t[5],
            crown: t[6] ? Number(t[6]) : null,
          })
      : null;
}
export {
  V as A,
  n as B,
  L as C,
  S as D,
  T as E,
  H as F,
  B as I,
  oe as L,
  ie as M,
  ee as N,
  ae as O,
  z as P,
  e as R,
  w as S,
  te as T,
  i as V,
  d as _,
  X as a,
  P as b,
  ue as c,
  M as d,
  R as f,
  h as g,
  p as h,
  se as i,
  E as j,
  o as k,
  pe as l,
  f as m,
  ce as n,
  Q as o,
  m as p,
  $ as r,
  fe as s,
  K as t,
  v as u,
  re as v,
  ne as w,
  x,
  g as y,
  t as z,
};
