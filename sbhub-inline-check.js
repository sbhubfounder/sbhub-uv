
/* ==========================================================================
   1. Config
   ========================================================================== */

const CONFIG = {
  brand: "SB HUB",
  logo: "https://raw.githubusercontent.com/sbhubfounder/sbsbsbsbsbsb/main/icons/sbsblogo.png",
  scheme: "sbx",
  discord: "https://discord.gg/fuSsYP6MPD",
  requestFeature: "https://discord.gg/3G7UcMpFNR",
  // Footer links. Put a URL in any of these and the link becomes active.
  legal: { tos: "", privacy: "", dmca: "" },
};

const CDN_GAMES_URL = "https://cdn.jsdelivr.net/gh/sbhubfounder/sbsbsbsbsbsb@main/gms.json";
const CDN_KEYS_URL = "https://cdn.jsdelivr.net/gh/sbhubfounder/sbsbsbsbsbsb@main/keys.json";
const CDN_EXCLUSIVE_GAMES_URL = "https://cdn.jsdelivr.net/gh/sbhubfounder/sbsbsbsbsbsb@main/exclusive-games.json";
const CDN_UPDATE_LOG_URL = "https://cdn.jsdelivr.net/gh/sbhubfounder/sbsbsbsbsbsb@main/updatelog.json";
const PROXY_PREFIX = "/uv/service/";
const DEFAULT_CITY_BACKGROUND = "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=85";
const BACKGROUND_PRESETS = [
  { name: "Neon city", accent: "#48a9ff", url: DEFAULT_CITY_BACKGROUND },
  { name: "Night skyline", accent: "#8ab4ff", url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=85" },
  { name: "Mountain dusk", accent: "#d4a373", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85" },
  { name: "Ocean horizon", accent: "#42d6c5", url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=85" },
  { name: "Aurora night", accent: "#8df58d", url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=2400&q=85" },
  { name: "Desert road", accent: "#ffb45c", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=2400&q=85" },
  { name: "Forest mist", accent: "#75d69b", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=85" },
  { name: "Cyber street", accent: "#ff4fd8", url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2400&q=85" },
  { name: "Snow peaks", accent: "#d9f4ff", url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=2400&q=85" },
  { name: "Coastal cliffs", accent: "#5aa9ff", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85" },
  { name: "RGB battlestation", accent: "#ff4fd8", url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=2400&q=85" },
  { name: "Console setup", accent: "#5aa9ff", url: "https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=2400&q=85" },
  { name: "Controller close-up", accent: "#8ab4ff", url: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=2400&q=85" },
  { name: "Arcade lights", accent: "#ff4fd8", url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2400&q=85" },
  { name: "Gaming laptop", accent: "#48a9ff", url: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=2400&q=85" },
  { name: "Keyboard glow", accent: "#8df58d", url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=2400&q=85" },
  { name: "Desk neon", accent: "#ffb45c", url: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=2400&q=85" },
  { name: "Retro controller", accent: "#d4a373", url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2400&q=85" },
  { name: "PC tower", accent: "#42d6c5", url: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=2400&q=85" },
  { name: "Game room", accent: "#ff4fd8", url: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=2400&q=85" },
  { name: "Headset station", accent: "#5aa9ff", url: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=2400&q=85" },
  { name: "Handheld play", accent: "#ffb45c", url: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=2400&q=85" },
  { name: "Neon arcade", accent: "#8df58d", url: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=2400&q=85" },
  { name: "Esports arena", accent: "#ff4fd8", url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2400&q=85" },
  { name: "Blue playroom", accent: "#48a9ff", url: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&w=2400&q=85" },
  { name: "Pixel colors", accent: "#d9f4ff", url: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=2400&q=85" },
  { name: "VR headset", accent: "#8ab4ff", url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=2400&q=85" },
  { name: "Streaming desk", accent: "#ff4fd8", url: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=2400&q=85" },
  { name: "Futuristic room", accent: "#42d6c5", url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=85" },
  { name: "Purple horizon", accent: "#b18cff", url: "https://images.unsplash.com/photo-1534791547706-9b8f9d854c85?auto=format&fit=crop&w=2400&q=85" },
  { name: "Deep space", accent: "#8ab4ff", url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2400&q=85" },
  { name: "Moon surface", accent: "#d9f4ff", url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2400&q=85" },
  { name: "Galaxy cloud", accent: "#ff4fd8", url: "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=2400&q=85" },
  { name: "Star field", accent: "#8df58d", url: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=2400&q=85" },
  { name: "Planet rings", accent: "#ffb45c", url: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=2400&q=85" },
  { name: "Blue nebula", accent: "#48a9ff", url: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=2400&q=85" },
  { name: "Rainy downtown", accent: "#5aa9ff", url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=2400&q=85" },
  { name: "Tokyo glow", accent: "#ff4fd8", url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2400&q=85" },
  { name: "Neon alley", accent: "#8df58d", url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=85&sat=40" },
  { name: "Future skyline", accent: "#42d6c5", url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2400&q=85" },
  { name: "City lights", accent: "#ffb45c", url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=85&sat=35" },
  { name: "Electric sunset", accent: "#ff6b6b", url: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=2400&q=85" },
  { name: "Rain window", accent: "#8ab4ff", url: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=2400&q=85" },
  { name: "Lone island", accent: "#42d6c5", url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=85&sat=20" },
  { name: "Tropical night", accent: "#8df58d", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85&sat=20" },
  { name: "Calm lake", accent: "#5aa9ff", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=85" },
  { name: "Autumn valley", accent: "#ffb45c", url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=85&hue=20" },
  { name: "Misty forest", accent: "#75d69b", url: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2400&q=85" },
  { name: "Bamboo trail", accent: "#8df58d", url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2400&q=85" },
  { name: "Red canyon", accent: "#ff6b6b", url: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=2400&q=85" },
  { name: "Volcanic coast", accent: "#ff4fd8", url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=85&hue=300" },
  { name: "Golden dunes", accent: "#ffd166", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=2400&q=85&hue=25" },
  { name: "Frozen lake", accent: "#d9f4ff", url: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=2400&q=85" },
  { name: "Winter cabin", accent: "#8ab4ff", url: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=2400&q=85" },
  { name: "Ocean storm", accent: "#5aa9ff", url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=2400&q=85" },
  { name: "Pastel clouds", accent: "#ffb4d9", url: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=2400&q=85&hue=320" },
  { name: "Ink abstract", accent: "#b18cff", url: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=2400&q=85" },
  { name: "Blue waves", accent: "#48a9ff", url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=85" },
  { name: "Prism light", accent: "#ff4fd8", url: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=2400&q=85" },
  { name: "Orange gradient", accent: "#ff8c42", url: "https://images.unsplash.com/photo-1557682260-96773eb01377?auto=format&fit=crop&w=2400&q=85" },
  { name: "Violet gradient", accent: "#b18cff", url: "https://images.unsplash.com/photo-1557682257-2f9c9e9f0b6b?auto=format&fit=crop&w=2400&q=85" },
  { name: "Grid horizon", accent: "#42d6c5", url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2400&q=85&hue=180" },
  { name: "Glitch dark", accent: "#ff4fd8", url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2400&q=85&hue=280" },
  { name: "Minimal black", accent: "#d9f4ff", url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2400&q=85&sat=-80" },
];

/* Sidebar categories. "games" is the built-in library; the rest are link pages
   that open in a real browser tab. Edit these lists freely. */
const CATEGORIES = {
  games: { label: "Games", icon: "gamepad", kind: "games" },
  apps: {
    label: "Apps", icon: "window", kind: "links",
    links: [
      ["Google Docs", "https://docs.google.com"], ["Google Drive", "https://drive.google.com"],
      ["Gmail", "https://mail.google.com"], ["Notion", "https://www.notion.so"],
      ["Canva", "https://www.canva.com"], ["Photopea", "https://www.photopea.com"],
      ["Excalidraw", "https://excalidraw.com"], ["Figma", "https://www.figma.com"],
    ],
  },
  ai: {
    label: "AI", icon: "bot", kind: "links",
    links: [
      ["ChatGPT", "https://chatgpt.com"], ["Claude", "https://claude.ai"],
      ["Gemini", "https://gemini.google.com"], ["Perplexity", "https://www.perplexity.ai"],
      ["Copilot", "https://copilot.microsoft.com"], ["Le Chat", "https://chat.mistral.ai"],
    ],
  },
  music: {
    label: "Music", icon: "music", kind: "links",
    links: [
      ["Spotify", "https://open.spotify.com"], ["YouTube Music", "https://music.youtube.com"],
      ["SoundCloud", "https://soundcloud.com"], ["Apple Music", "https://music.apple.com"],
      ["Pandora", "https://www.pandora.com"], ["Bandcamp", "https://bandcamp.com"],
    ],
  },
  movies: {
    label: "Movies", icon: "film", kind: "links",
    links: [
      ["YouTube", "https://www.youtube.com"], ["Netflix", "https://www.netflix.com"],
      ["Tubi", "https://tubitv.com"], ["Pluto TV", "https://pluto.tv"],
      ["Twitch", "https://www.twitch.tv"], ["Disney+", "https://www.disneyplus.com"],
      ["Crunchyroll", "https://www.crunchyroll.com"],
    ],
  },
  chat: {
    label: "Chat", icon: "bubble", kind: "links",
    links: [
      ["Discord", "https://discord.com/app"], ["WhatsApp Web", "https://web.whatsapp.com"],
      ["Messenger", "https://www.messenger.com"], ["Telegram", "https://web.telegram.org"],
      ["Slack", "https://slack.com"], ["Google Chat", "https://chat.google.com"],
    ],
  },
  tools: {
    label: "Tools", icon: "wrench", kind: "links",
    links: [
      ["Desmos Graphing", "https://www.desmos.com/calculator"], ["Desmos Scientific", "https://www.desmos.com/scientific"],
      ["Google Translate", "https://translate.google.com"], ["Wolfram Alpha", "https://www.wolframalpha.com"],
      ["Google Calendar", "https://calendar.google.com"], ["Speedtest", "https://www.speedtest.net"],
    ],
  },
};

const QUICK_ROW = ["games", "ai", "music", "movies", "apps", "chat"];
const DEFAULT_SHORTCUTS = [
  { name: "Instagram", url: "https://www.instagram.com" },
  { name: "Spotify", url: "https://open.spotify.com" },
  { name: "TikTok", url: "https://www.tiktok.com" },
];
const ENGINES = {
  default: { label: "Default", full: "Google", url: "https://www.google.com/search?q=" },
  ddg: { label: "DuckDuckGo", full: "DuckDuckGo", url: "https://duckduckgo.com/?q=" },
  bing: { label: "Bing", full: "Bing", url: "https://www.bing.com/search?q=" },
  brave: { label: "Brave", full: "Brave Search", url: "https://search.brave.com/search?q=" },
};

/* ==========================================================================
   2. Small helpers
   ========================================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const store = {
  get(key, fallback = null) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : v; } catch { return fallback; }
  },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* storage unavailable */ } },
  del(key) { try { localStorage.removeItem(key); } catch { /* storage unavailable */ } },
  json(key, fallback) {
    try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; }
  },
  setJson(key, value) { this.set(key, JSON.stringify(value)); },
};

const ico = (name, cls = "") => `<svg class="ico ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return ""; }
}

function faviconEl(url, size = 64) {
  const host = hostOf(url);
  const wrap = document.createElement("span");
  wrap.className = "fav";
  const img = new Image();
  img.alt = "";
  img.loading = "lazy";
  img.onerror = () => { img.remove(); wrap.textContent = (host[0] || "?").toUpperCase(); };
  img.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=${size}`;
  wrap.appendChild(img);
  return wrap;
}

function openExternal(url) {
  const w = window.open(url, "_blank");
  if (w) { try { w.opener = null; } catch { /* cross-origin */ } }
  else showToast("Popup blocked â€” allow popups for this page.");
}

function proxyUrl(url) {
  if (!/^https?:\/\//i.test(url)) return null;
  if (!window.__uv$config || typeof window.__uv$config.encodeUrl !== "function") return null;
  return PROXY_PREFIX + window.__uv$config.encodeUrl(url);
}

function openProxied(url) {
  const encoded = proxyUrl(url);
  if (!encoded) {
    showToast("Proxy is unavailable. Run SB HUB through the Shadow Node server.");
    return false;
  }
  const w = window.open(encoded, "_blank");
  if (w) { try { w.opener = null; } catch { /* cross-origin */ } }
  else showToast("Popup blocked â€” allow popups for this page.");
  return true;
}

async function registerProxyServiceWorker() {
  if (!window.isSecureContext || !("serviceWorker" in navigator)) return false;
  try {
    await navigator.serviceWorker.register("/sw.js", { scope: "/" });
    return true;
  } catch (error) {
    console.error("SB HUB proxy service worker registration failed:", error);
    showToast("Proxy setup failed. Make sure SB HUB is hosted by Shadow.");
    return false;
  }
}

let toastTimeout = null;
function showToast(text) {
  const toast = $("#toast");
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3000);
}

/* Modals */
function openModal(id) { $("#" + id).classList.add("show"); }
function closeModal(id) { $("#" + id).classList.remove("show"); }

/* Popover (one at a time, anchored to a button) */
let popAnchor = null;
function openPopover(anchor, node, opts = {}) {
  closePopover();
  const pop = $("#popover");
  pop.replaceChildren(node);
  pop.hidden = false;
  const r = anchor.getBoundingClientRect();
  const pw = pop.offsetWidth, ph = pop.offsetHeight;
  let left = opts.align === "right" ? r.right - pw : r.left;
  left = Math.max(8, Math.min(left, innerWidth - pw - 8));
  let top = r.bottom + 6;
  if (top + ph > innerHeight - 8) top = Math.max(8, r.top - ph - 6);
  pop.style.left = left + "px";
  pop.style.top = top + "px";
  popAnchor = anchor;
}
function closePopover() {
  const pop = $("#popover");
  if (!pop.hidden) { pop.hidden = true; pop.replaceChildren(); }
  popAnchor = null;
}
function togglePopover(anchor, build, opts) {
  if (popAnchor === anchor) { closePopover(); return; }
  openPopover(anchor, build(), opts);
}
document.addEventListener("pointerdown", (e) => {
  if (popAnchor && !e.target.closest("#popover") && !popAnchor.contains(e.target)) closePopover();
});

function popItem(iconName, label, onClick, extra = {}) {
  const b = document.createElement("button");
  b.className = "pop-item" + (extra.selected ? " sel" : "");
  b.innerHTML = `${iconName ? ico(iconName) : ""}<span class="pi-text"><span>${esc(label)}</span>${extra.hint ? `<small>${esc(extra.hint)}</small>` : ""}</span>`;
  b.onclick = () => { closePopover(); onClick(); };
  return b;
}

/* ==========================================================================
   3. Themes  (accent + surface colours; the shell reads these CSS variables)
   ========================================================================== */

const THEMES = {
  sbhub:   { label: "SB HUB", accent: "#1677ff", accentHover: "#0b5dcc", bg: "#000000", surface: "#071a36", surfaceHover: "#0d2b55", border: "#1d5ca8", tint: 0.12, particles: ["#ffffff", "#1677ff"] },
  midnight: { label: "Midnight", accent: "#4f8cff", accentHover: "#3a72dd", bg: "#070c18", surface: "#0d1526", surfaceHover: "#16213a", border: "#24314f", tint: 0, particles: ["#ffffff", "#7fa6ff"] },
  black:  { label: "Black",  accent: "#5865F2", accentHover: "#4752C4", bg: "#000000", surface: "#0a0a0a", surfaceHover: "#141414", border: "#262626", tint: 0, particles: ["#ffffff", "#aaaaaa"] },
  red:    { label: "Red",    accent: "#E53935", accentHover: "#C62828", bg: "#120202", surface: "#1a0505", surfaceHover: "#240808", border: "#3a1414", tint: 0.3, particles: ["#ff8a80", "#e53935"] },
  blue:   { label: "Blue",   accent: "#2196F3", accentHover: "#1769AA", bg: "#020a12", surface: "#05121c", surfaceHover: "#081826", border: "#14283a", tint: 0.2, particles: ["#82c8ff", "#2196F3"] },
  orange: { label: "Orange", accent: "#FB8C00", accentHover: "#E07800", bg: "#120a02", surface: "#1c1105", surfaceHover: "#261708", border: "#3a2414", tint: 0.3, particles: ["#ffcc80", "#FB8C00"] },
  green:  { label: "Green",  accent: "#43A047", accentHover: "#2E7D32", bg: "#021205", surface: "#051c0c", surfaceHover: "#082610", border: "#143a1e", tint: 0.3, particles: ["#a5d6a7", "#43A047"] },
  purple: { label: "Purple", accent: "#8E24AA", accentHover: "#6A1B9A", bg: "#0a0212", surface: "#12051c", surfaceHover: "#180826", border: "#28143a", tint: 0.3, particles: ["#ce93d8", "#8E24AA"] },
  pink:   { label: "Pink",   accent: "#EC407A", accentHover: "#C2185B", bg: "#120209", surface: "#1c0511", surfaceHover: "#260817", border: "#3a1428", tint: 0.3, particles: ["#f8bbd0", "#EC407A"] },
};
const DEFAULT_THEME = "sbhub";

function getSavedTheme() { return store.get("sbxTheme", DEFAULT_THEME); }

function applyThemeVars(key) {
  if (key === "custom") {
    applyThemeVarsObject(computeThemeFromAccent(store.get("sbxCustomColor", "#5865F2")));
    store.set("sbxTheme", "custom");
    return;
  }
  applyThemeVarsObject(THEMES[key] || THEMES[DEFAULT_THEME]);
  store.set("sbxTheme", THEMES[key] ? key : DEFAULT_THEME);
}

function applyThemeVarsObject(theme) {
  const root = document.documentElement.style;
  root.setProperty("--accent-color", theme.accent);
  root.setProperty("--accent-hover", theme.accentHover);
  root.setProperty("--bg-color", theme.bg);
  root.setProperty("--surface-color", theme.surface);
  root.setProperty("--surface-hover", theme.surfaceHover);
  root.setProperty("--border-color", theme.border);
  root.setProperty("--tint", String(theme.tint ?? 0.3));
}

function applyTheme(key) {
  stopRainbowTheme();
  applyThemeVars(key);
  renderThemeGrid();
  reinitParticles((THEMES[key] || THEMES[DEFAULT_THEME]).particles);
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return { r: parseInt(h.substring(0, 2), 16), g: parseInt(h.substring(2, 4), 16), b: parseInt(h.substring(4, 6), 16) };
}
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
}

function computeThemeFromAccent(hex) {
  const c = hexToRgb(hex);
  const scale = (k) => rgbToHex(c.r * k, c.g * k, c.b * k);
  const light = rgbToHex(Math.min(255, c.r * 0.6 + 130), Math.min(255, c.g * 0.6 + 130), Math.min(255, c.b * 0.6 + 130));
  return {
    accent: hex, accentHover: scale(0.82),
    bg: scale(0.045), surface: scale(0.08), surfaceHover: scale(0.11), border: scale(0.2),
    tint: 0.3, particles: [light, hex],
  };
}

function applyCustomColor(hex) {
  stopRainbowTheme();
  store.set("sbxCustomColor", hex);
  store.set("sbxTheme", "custom");
  const theme = computeThemeFromAccent(hex);
  applyThemeVarsObject(theme);
  renderThemeGrid();
  reinitParticles(theme.particles);
  const swatch = $("#wheelPreviewSwatch"), label = $("#wheelPreviewLabel");
  if (swatch) swatch.style.background = hex;
  if (label) label.textContent = hex.toUpperCase();
  showToast(`Custom color applied: ${hex.toUpperCase()}`);
}

function applyTextGlowColor(hex) {
  store.set("sbxTextGlowColor", hex);
  document.documentElement.style.setProperty("--logo-text-glow-color", hex);
  const swatch = $("#textGlowWheelPreviewSwatch"), label = $("#textGlowWheelPreviewLabel");
  if (swatch) swatch.style.background = hex;
  if (label) label.textContent = hex.toUpperCase();
  showToast(`Text glow color applied: ${hex.toUpperCase()}`);
}

function hsvToRgb(h, s, v) {
  const c = v * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = v - c;
  let r = 0, g = 0, b = 0;
  if (h < 60) { r = c; g = x; }
  else if (h < 120) { r = x; g = c; }
  else if (h < 180) { g = c; b = x; }
  else if (h < 240) { g = x; b = c; }
  else if (h < 300) { r = x; b = c; }
  else { r = c; b = x; }
  return [(r + m) * 255, (g + m) * 255, (b + m) * 255];
}

function drawColorWheel(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height, cx = w / 2, cy = h / 2;
  const radius = Math.min(cx, cy) - 2;
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = x - cx, dy = y - cy, r = Math.sqrt(dx * dx + dy * dy), i = (y * w + x) * 4;
      if (r <= radius) {
        let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        if (angle < 0) angle += 360;
        const [rr, gg, bb] = hsvToRgb(angle, r / radius, 1);
        img.data[i] = rr; img.data[i + 1] = gg; img.data[i + 2] = bb; img.data[i + 3] = 255;
      }
    }
  }
  ctx.putImageData(img, 0, 0);
}

function setupColorWheel(canvasId, onPick) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || canvas.dataset.bound) return;
  canvas.dataset.bound = "true";
  drawColorWheel(canvasId);
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) * (canvas.width / rect.width));
    const y = Math.floor((e.clientY - rect.top) * (canvas.height / rect.height));
    const px = canvas.getContext("2d").getImageData(x, y, 1, 1).data;
    if (px[3] === 0) return;
    onPick(rgbToHex(px[0], px[1], px[2]));
  });
}

function renderThemeGrid() {
  const grid = $("#themeGrid");
  if (!grid) return;
  const current = getSavedTheme();
  grid.innerHTML = "";
  Object.entries(THEMES).forEach(([key, t]) => {
    const el = document.createElement("div");
    el.className = "theme-swatch" + (key === current ? " selected" : "");
    el.innerHTML = `<div class="swatch-circle${key === "sbhub" ? " sbhub" : ""}" style="${key === "sbhub" ? "" : `background:${t.accent}`}"></div><span>${t.label}</span>`;
    el.onclick = () => { applyTheme(key); showToast(`${t.label} theme applied`); };
    grid.appendChild(el);
  });
  const rb = document.createElement("div");
  rb.className = "theme-swatch" + (current === "rainbow" ? " selected" : "");
  rb.innerHTML = `<div class="swatch-circle rainbow"></div><span>Rainbow</span>`;
  rb.onclick = () => { startRainbowTheme(); showToast("Rainbow theme applied"); };
  grid.appendChild(rb);
}

let rainbowIntervalId = null, rainbowHue = 0;
function startRainbowTheme() {
  store.set("sbxTheme", "rainbow");
  stopRainbowTheme();
  rainbowIntervalId = setInterval(rainbowTick, 60);
  rainbowTick();
  renderThemeGrid();
}
function stopRainbowTheme() {
  if (rainbowIntervalId) { clearInterval(rainbowIntervalId); rainbowIntervalId = null; }
}
function rainbowTick() {
  rainbowHue = (rainbowHue + 2) % 360;
  const [r, g, b] = hsvToRgb(rainbowHue, 1, 1);
  const theme = computeThemeFromAccent(rgbToHex(r, g, b));
  applyThemeVarsObject(theme);
  if (rainbowHue % 20 === 0) reinitParticles(theme.particles);
}

/* ==========================================================================
   4. Background: rainy city (canvas), particles.js, or plain
   ========================================================================== */

const Rain = (() => {
  const base = document.getElementById("bg");
  const fx = document.getElementById("bgFx");
  const bctx = base.getContext("2d");
  const fctx = fx.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");

  let W = 0, H = 0, dpr = 1, sceneFull = null, runners = [];
  let raf = 0, lastT = 0, painted = false;
  let enabled = false, viewActive = true;

  const rng = (seed) => () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const motionOn = () => store.get("sbxRainMotion", "true") !== "false";

  /* A low-resolution night skyline: two layers of towers with lit windows,
     mist at the horizon, and a stretched reflection on the water below.
     It is drawn small and scaled up, which is what makes the lights soft. */
  function buildScene(w, h) {
    const s = 0.25;
    const lw = Math.max(8, Math.round(w * s)), lh = Math.max(8, Math.round(h * s));
    const c = document.createElement("canvas");
    c.width = lw; c.height = lh;
    const g = c.getContext("2d");
    const r = rng(90210);
    const hz = lh * 0.6;

    const sky = g.createLinearGradient(0, 0, 0, hz);
    sky.addColorStop(0, "#050a1c");
    sky.addColorStop(0.5, "#122148");
    sky.addColorStop(1, "#3b5b94");
    g.fillStyle = sky;
    g.fillRect(0, 0, lw, hz);

    const layers = [
      { count: 30, minH: 0.18, maxH: 0.62, fill: "#16264d", lit: 0.3, alpha: 0.8, cols: ["#a9c2f0", "#c9d9ff", "#8fb0f0"] },
      { count: 14, minH: 0.3, maxH: 0.95, fill: "#060c1c", lit: 0.44, alpha: 1, cols: ["#cfe0ff", "#8fb0f0", "#f6e7c6", "#7fa0e6"] },
    ];
    for (const L of layers) {
      let x = -r() * 8;
      const avgW = lw / L.count;
      while (x < lw) {
        const bw = avgW * (0.6 + r() * 1.1);
        const bh = hz * (L.minH + r() * (L.maxH - L.minH));
        g.globalAlpha = L.alpha;
        g.fillStyle = L.fill;
        g.fillRect(x, hz - bh, bw, bh);
        const cols = Math.floor(bw / 2.6), rows = Math.floor(bh / 3);
        for (let ry = 0; ry < rows; ry++) {
          for (let cx = 0; cx < cols; cx++) {
            if (r() < L.lit) {
              g.globalAlpha = L.alpha * (0.35 + r() * 0.65);
              g.fillStyle = L.cols[Math.floor(r() * L.cols.length)];
              g.fillRect(x + 1 + cx * 2.6, hz - bh + 1.2 + ry * 3, 1.5, 1.8);
            }
          }
        }
        x += bw + r() * 1.5;
      }
      g.globalAlpha = 1;
    }

    const mist = g.createRadialGradient(lw * 0.45, hz, 0, lw * 0.45, hz, lw * 0.55);
    mist.addColorStop(0, "rgba(140,175,235,.30)");
    mist.addColorStop(1, "rgba(140,175,235,0)");
    g.fillStyle = mist;
    g.fillRect(0, hz * 0.5, lw, hz * 0.6);

    // water: smeared, flipped copy of the skyline
    const copy = document.createElement("canvas");
    copy.width = lw; copy.height = Math.ceil(hz);
    copy.getContext("2d").drawImage(c, 0, 0, lw, hz, 0, 0, lw, hz);
    const sy = 0.68;
    g.fillStyle = "#08122a";
    g.fillRect(0, hz, lw, lh - hz);
    g.save();
    g.beginPath(); g.rect(0, hz, lw, lh - hz); g.clip();
    for (let k = 0; k < 7; k++) {
      g.globalAlpha = 0.17;
      g.setTransform(1, 0, 0, -sy, 0, hz + hz * sy + k * 1.3);
      g.drawImage(copy, 0, 0);
    }
    g.restore();
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.globalAlpha = 1;
    const water = g.createLinearGradient(0, hz, 0, lh);
    water.addColorStop(0, "rgba(6,12,28,.05)");
    water.addColorStop(1, "rgba(3,6,15,.6)");
    g.fillStyle = water;
    g.fillRect(0, hz, lw, lh - hz);
    return c;
  }

  function blurInto(dst, src, px) {
    const g = dst.getContext("2d");
    g.imageSmoothingEnabled = true;
    g.imageSmoothingQuality = "high";
    g.filter = `blur(${px}px)`; // ignored where unsupported; the upscale already softens
    g.drawImage(src, -px * 2, -px * 2, dst.width + px * 4, dst.height + px * 4);
    g.filter = "none";
  }

  /* One water drop. Larger drops show a small upside-down copy of the scene
     behind them, like real glass; small ones are just a glint. */
  function drop(g, src, x, y, r, alpha = 1) {
    const rx = r, ry = r * 1.3, TAU = Math.PI * 2;
    g.save();
    g.globalAlpha = alpha;
    g.beginPath();
    g.ellipse(x, y, rx, ry, 0, 0, TAU);
    if (r >= 1.6) {
      g.save();
      g.clip();
      const k = 3.4, sw = rx * 2 * k, sh = ry * 2 * k;
      g.translate(x, y);
      g.rotate(Math.PI);
      g.drawImage(src, (x - sw / 2) * dpr, (y - sh / 2) * dpr, sw * dpr, sh * dpr, -rx, -ry, rx * 2, ry * 2);
      g.restore();
      const gr = g.createRadialGradient(x - rx * 0.25, y - ry * 0.3, r * 0.1, x, y, ry);
      gr.addColorStop(0, "rgba(255,255,255,.14)");
      gr.addColorStop(0.65, "rgba(10,20,45,.12)");
      gr.addColorStop(1, "rgba(0,0,0,.6)");
      g.fillStyle = gr;
      g.fill();
      g.beginPath();
      g.ellipse(x - rx * 0.38, y - ry * 0.42, rx * 0.22, ry * 0.16, -0.5, 0, TAU);
      g.fillStyle = "rgba(240,248,255,.9)";
      g.fill();
      g.beginPath();
      g.ellipse(x + rx * 0.15, y + ry * 0.55, rx * 0.55, ry * 0.22, 0, 0, Math.PI);
      g.strokeStyle = "rgba(200,222,255,.45)";
      g.lineWidth = Math.max(0.5, r * 0.14);
      g.stroke();
    } else {
      g.fillStyle = "rgba(150,185,235,.3)";
      g.fill();
      g.beginPath();
      g.arc(x - rx * 0.3, y - ry * 0.3, Math.max(0.35, r * 0.28), 0, TAU);
      g.fillStyle = "rgba(240,248,255,.8)";
      g.fill();
    }
    g.restore();
  }

  function makeRunner(initial) {
    return {
      x: Math.random() * W,
      y: initial ? Math.random() * H : -10 - Math.random() * H * 0.3,
      r: 2.4 + Math.random() * 2.6,
      v: 18 + Math.random() * 60,
      wait: initial ? Math.random() * 2 : 0,
      sway: Math.random() * 6.28,
      trail: [],
    };
  }

  function paint() {
    W = innerWidth; H = innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    for (const c of [base, fx]) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
    const low = buildScene(W, H);
    sceneFull = document.createElement("canvas");
    sceneFull.width = base.width; sceneFull.height = base.height;
    blurInto(sceneFull, low, 3 * dpr);
    bctx.setTransform(1, 0, 0, 1, 0, 0);
    bctx.drawImage(sceneFull, 0, 0);
    bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const r = rng(1337), count = Math.round((W * H) / 900);
    for (let i = 0; i < count; i++) {
      const k = r();
      const size = k < 0.45 ? 0.6 + r() * 0.9 : k < 0.85 ? 1.6 + r() * 1.2 : 2.8 + r() * 2.6;
      drop(bctx, sceneFull, r() * W, r() * H, size);
    }
    bctx.setTransform(1, 0, 0, 1, 0, 0);
    runners = Array.from({ length: Math.max(6, Math.min(18, Math.round(W / 110))) }, () => makeRunner(true));
    painted = true;
    drawFx();
  }

  function tick(dt) {
    for (const d of runners) {
      if (d.wait > 0) { d.wait -= dt; continue; }
      d.sway += dt * 2.2;
      d.y += d.v * dt * (0.6 + 0.4 * Math.sin(d.sway));
      d.x += Math.sin(d.sway * 0.7) * 6 * dt;
      d.trail.push(d.x, d.y);
      if (d.trail.length > 60) d.trail.splice(0, 2);
      if (Math.random() < 0.004) d.wait = 0.4 + Math.random() * 1.4;
      if (d.y > H + 20) Object.assign(d, makeRunner(false));
    }
  }

  function drawFx() {
    fctx.setTransform(1, 0, 0, 1, 0, 0);
    fctx.clearRect(0, 0, fx.width, fx.height);
    fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    fctx.lineCap = "round";
    for (const d of runners) {
      const n = d.trail.length;
      for (let i = 2; i < n; i += 2) {
        const t = i / n;
        fctx.strokeStyle = `rgba(170,200,245,${(t * 0.2).toFixed(3)})`;
        fctx.lineWidth = d.r * 0.55 * t;
        fctx.beginPath();
        fctx.moveTo(d.trail[i - 2], d.trail[i - 1]);
        fctx.lineTo(d.trail[i], d.trail[i + 1]);
        fctx.stroke();
      }
      drop(fctx, sceneFull, d.x, d.y, d.r);
    }
    fctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  function loop(t) {
    raf = requestAnimationFrame(loop);
    if (t - lastT < 33) return; // ~30 fps is plenty for drifting drops
    const dt = Math.min((t - lastT) / 1000, 0.1);
    lastT = t;
    tick(dt);
    drawFx();
  }

  function update() {
    const should = enabled && viewActive && motionOn() && !document.hidden && !reduce.matches && painted;
    if (should && !raf) { lastT = performance.now(); raf = requestAnimationFrame(loop); }
    else if (!should && raf) { cancelAnimationFrame(raf); raf = 0; }
  }

  let resizeTimer = 0;
  addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (enabled) { paint(); update(); } else painted = false; }, 150);
  });
  document.addEventListener("visibilitychange", update);
  reduce.addEventListener?.("change", update);

  return {
    enable(on) { enabled = on; if (on && !painted) paint(); update(); },
    setViewActive(on) { viewActive = on; update(); },
    refresh: update,
  };
})();

/* particles.js (optional, loaded from a CDN) */
function getParticleDensity() { return parseInt(store.get("sbxParticleDensity", "40"), 10); }
function getParticleShape() { return store.get("sbxParticleShape", "circle"); }
function getBackground() { return store.get("sbxBackground", "custom"); }
function getCustomBackgroundUrl() { return store.get("sbxCustomBackgroundUrl", DEFAULT_CITY_BACKGROUND); }
function updateClockAccent() {
  const preset = BACKGROUND_PRESETS.find((item) => item.url === getCustomBackgroundUrl());
  document.documentElement.style.setProperty("--clock-color", preset ? preset.accent : "var(--accent-color)");
}
function renderBackgroundPresets() {
  const grid = $("#backgroundPresets");
  if (!grid) return;
  const current = getCustomBackgroundUrl();
  const expanded = grid.classList.contains("expanded");
  grid.innerHTML = "";
  BACKGROUND_PRESETS.forEach((preset, index) => {
    const button = document.createElement("button");
    button.className = "background-preset" + (index >= 5 ? " extra" : "") + (getBackground() === "custom" && current === preset.url ? " selected" : "");
    button.type = "button";
    button.title = `Use ${preset.name} background`;
    button.innerHTML = `<img src="${index < 5 || expanded ? preset.url : ""}" alt="" loading="lazy"><span>${preset.name}</span>`;
    button.onclick = () => selectBackgroundPreset(preset);
    grid.appendChild(button);
  });
  if (BACKGROUND_PRESETS.length > 5) {
    const more = document.createElement("button");
    more.className = "background-more";
    more.type = "button";
    more.textContent = expanded ? "âˆ’" : `${BACKGROUND_PRESETS.length - 5}+`;
    more.title = expanded ? "Show fewer backgrounds" : "Show more backgrounds";
    more.setAttribute("aria-label", more.title);
    more.onclick = () => {
      grid.classList.toggle("expanded");
      renderBackgroundPresets();
    };
    grid.appendChild(more);
  }
}
function selectBackgroundPreset(preset) {
  store.set("sbxCustomBackgroundUrl", preset.url);
  store.set("sbxBackground", "custom");
  applyBackground();
  renderBackgroundPresets();
  $("#customBackgroundUrl").value = preset.url;
  showToast(`${preset.name} background applied`);
}

function initParticles(colors) {
  if (typeof particlesJS !== "function") return;
  particlesJS("particles-js", {
    particles: {
      number: { value: getParticleDensity(), density: { enable: true, value_area: 1000 } },
      color: { value: colors || ["#ffffff", "#aaaaaa"] },
      shape: { type: getParticleShape() },
      opacity: { value: 0.15, random: true },
      size: { value: 2, random: true },
      line_linked: { enable: true, distance: 200, color: (colors && colors[1]) || "#5865F2", opacity: 0.15, width: 1 },
      move: { enable: true, speed: 0.8 },
    },
    interactivity: { detect_on: "canvas", events: { onhover: { enable: false }, onclick: { enable: false } } },
    retina_detect: true,
  });
}
function destroyParticles() {
  if (window.pJSDom && window.pJSDom.length) {
    try { window.pJSDom[0].pJS.fn.vendors.destroypJS(); } catch (e) { console.error(e); }
    window.pJSDom = [];
  }
}
function reinitParticles(colors) {
  if (!["particles", "custom"].includes(getBackground())) return;
  destroyParticles();
  initParticles(colors);
}
function getCurrentParticleColors() {
  const key = getSavedTheme();
  if (key === "custom") return computeThemeFromAccent(store.get("sbxCustomColor", "#5865F2")).particles;
  if (key === "rainbow") {
    const [r, g, b] = hsvToRgb(rainbowHue, 1, 1);
    return computeThemeFromAccent(rgbToHex(r, g, b)).particles;
  }
  return (THEMES[key] || THEMES[DEFAULT_THEME]).particles;
}

function applyBackground() {
  const mode = getBackground();
  updateClockAccent();
  const rain = mode === "rain";
  $("#bg").style.display = $("#bgFx").style.display = rain ? "block" : "none";
  $("#particles-js").style.display = ["particles", "custom"].includes(mode) ? "block" : "none";
  $("#bgImage").style.display = mode === "custom" && getCustomBackgroundUrl() ? "block" : "none";
  $("#bgImage").style.backgroundImage = mode === "custom" && getCustomBackgroundUrl()
    ? `url("${getCustomBackgroundUrl().replace(/["\\)]/g, (c) => c === ")" ? "%29" : "")}")`
    : "none";
  $("#bgDim").classList.toggle("plain", mode === "plain");
  $("#bgTint").style.display = rain || mode === "custom" ? "block" : "none";
  destroyParticles();
  if (["particles", "custom"].includes(mode)) initParticles(getCurrentParticleColors());
  Rain.enable(rain);
  $$("#bgSeg [data-bg]").forEach((b) => b.classList.toggle("on", b.dataset.bg === mode));
}
function setBackground(mode) {
  store.set("sbxBackground", mode);
  applyBackground();
  renderBackgroundPresets();
}
function saveCustomBackground() {
  const input = $("#customBackgroundUrl");
  const value = input.value.trim();
  let url;
  try { url = new URL(value); } catch { showToast("Enter a valid image URL."); return; }
  if (!["http:", "https:"].includes(url.protocol)) {
    showToast("Use an http or https image URL.");
    return;
  }
  store.set("sbxCustomBackgroundUrl", url.href);
  store.set("sbxBackground", "custom");
  applyBackground();
  renderBackgroundPresets();
  showToast("Custom background applied");
}

function toggleRainMotion() {
  store.set("sbxRainMotion", String(store.get("sbxRainMotion", "true") === "false"));
  renderRainMotionBtn();
  Rain.refresh();
}
function renderRainMotionBtn() {
  const btn = $("#rainMotionBtn");
  if (btn) btn.textContent = store.get("sbxRainMotion", "true") === "false" ? "Rain animation: Off" : "Rain animation: On";
}

function updateParticleDensity(value) {
  store.set("sbxParticleDensity", String(value));
  const label = $("#particleDensityLabel");
  if (label) label.textContent = String(value);
  reinitParticles(getCurrentParticleColors());
}
function setParticleShape(shape) {
  store.set("sbxParticleShape", shape);
  renderShapeButtons();
  reinitParticles(getCurrentParticleColors());
  showToast(`Particle shape: ${shape}`);
}
function renderShapeButtons() {
  const shape = getParticleShape();
  const map = { circle: "shapeBtnCircle", triangle: "shapeBtnTriangle", star: "shapeBtnStar", edge: "shapeBtnEdge" };
  Object.entries(map).forEach(([key, id]) => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.toggle("on", key === shape);
  });
}

/* Interface size */
function applyUiScale(pct) {
  document.documentElement.style.setProperty("--ui-scale", String(pct / 100));
  const slider = $("#uiScale"), label = $("#uiScaleLabel");
  if (slider) slider.value = pct;
  if (label) label.textContent = pct + "%";
}
function setUiScale(pct) {
  pct = Math.max(70, Math.min(140, parseInt(pct, 10) || 100));
  store.set("sbxUiScale", String(pct));
  applyUiScale(pct);
}


/* ==========================================================================
   5. Data + game helpers
   ========================================================================== */

let games = [];
let exclusiveGames = [];
let validKeys = [];
let gamesState = "loading"; // loading | ready | error

function getFavorites() { return store.json("sbxFavorites", []); }
function isFavorite(name) { return getFavorites().includes(name); }
function toggleFavorite(name) {
  let favs = getFavorites();
  if (favs.includes(name)) { favs = favs.filter((f) => f !== name); showToast(`Removed ${name} from favorites`); }
  else { favs.push(name); showToast(`Added ${name} to favorites`); }
  store.setJson("sbxFavorites", favs);
  refreshGameViews();
}

function getRecent() { return store.json("sbxRecent", []); }
function addRecent(game) {
  const item = { name: game.name, url: game.url, thumb: game.thumb, tag: game.tag, desc: game.desc };
  const recent = [item, ...getRecent().filter((g) => g.name !== game.name)].slice(0, 30);
  store.setJson("sbxRecent", recent);
  refreshGameViews();
}
function clearRecent() {
  store.del("sbxRecent");
  refreshGameViews();
  showToast("Recently played cleared");
}
function bumpPlayCount(name) {
  const counts = store.json("sbxPlayCounts", {});
  counts[name] = (counts[name] || 0) + 1;
  store.setJson("sbxPlayCounts", counts);
}
function ensureFirstVisitRecorded() {
  if (!store.get("sbxFirstVisit")) store.set("sbxFirstVisit", String(Date.now()));
}
function incrementGamesPlayed() {
  store.set("sbxGamesPlayedCount", String(parseInt(store.get("sbxGamesPlayedCount", "0"), 10) + 1));
}
function renderSiteStats() {
  const el = $("#statGamesPlayed");
  if (el) el.textContent = store.get("sbxGamesPlayedCount", "0");
}

async function fetchJson(url, bust) {
  const res = await fetch(url + "?v=" + bust);
  if (!res.ok) throw new Error("Fetch failed " + res.status);
  return res.json();
}
async function loadGames() {
  gamesState = "loading";
  refreshGameViews();
  try {
    games = await fetchJson(CDN_GAMES_URL, 2);
    gamesState = "ready";
  } catch (err) {
    console.error(err);
    gamesState = "error";
    showToast("Could not load the game list â€” check your connection.");
  }
  refreshGameViews();
}
async function loadValidKeys() {
  try { const d = await fetchJson(CDN_KEYS_URL, Date.now()); validKeys = Array.isArray(d) ? d : []; }
  catch (err) { console.error(err); validKeys = []; }
}
async function loadExclusiveGames() {
  try { const d = await fetchJson(CDN_EXCLUSIVE_GAMES_URL, Date.now()); exclusiveGames = Array.isArray(d) ? d : []; }
  catch (err) { console.error(err); exclusiveGames = []; }
}
async function deleteCache() {
  showToast("Refreshing data...");
  await Promise.all([loadGames(), loadValidKeys(), loadExclusiveGames()]);
  showToast("Cache cleared â€” data refreshed");
}

/* ==========================================================================
   6. Tabs
   ========================================================================== */

const tabs = [];
let activeId = null;
let tabSeq = 0;
const gameViews = new Set();

const activeTab = () => tabs.find((t) => t.id === activeId);
const currentView = (t) => t.hist[t.i];

function viewMeta(v) {
  const S = CONFIG.scheme;
  switch (v.type) {
    case "newtab": return { title: "New Tab", url: `${S}://newtab` };
    case "category": return { title: CATEGORIES[v.key].label, url: `${S}://${v.key}` };
    case "saved": return { title: "Saved", url: `${S}://saved` };
    case "history": return { title: "History", url: `${S}://history` };
    case "game": return { title: v.game.name, url: `${S}://games/${slug(v.game.name)}`, thumb: v.game.thumb };
    case "locked": return { title: "Locked", url: `${S}://locked` };
    default: return { title: "Tab", url: `${S}://` };
  }
}

function createTab(view, activate = true) {
  const tab = { id: ++tabSeq, hist: [view], i: 0, el: document.createElement("div"), cleanup: null, frame: null };
  tab.el.className = "tab-view";
  $("#views").appendChild(tab.el);
  tabs.push(tab);
  renderView(tab);
  if (activate) activateTab(tab.id); else renderSidebarTabs();
  return tab;
}
function openTab(view) { closeSidebarOnMobile(); return createTab(view); }

function renderView(tab) {
  if (tab.cleanup) { tab.cleanup(); tab.cleanup = null; }
  tab.frame = null;
  const v = currentView(tab);
  tab.el.dataset.view = v.type;
  tab.el.replaceChildren();
  tab.el.scrollTop = 0;
  if (v.type === "newtab") buildNewTab(tab);
  else if (v.type === "locked") buildLockedView(tab);
  else if (v.type === "category") { CATEGORIES[v.key].kind === "games" ? buildGamesPage(tab, "library") : buildLinksPage(tab, v.key); }
  else if (v.type === "saved") buildGamesPage(tab, "saved");
  else if (v.type === "history") buildGamesPage(tab, "history");
  else if (v.type === "game") buildGameView(tab, v.game);
}

function navigate(tab, view) {
  tab.hist = tab.hist.slice(0, tab.i + 1);
  tab.hist.push(view);
  tab.i = tab.hist.length - 1;
  renderView(tab);
  renderSidebarTabs();
  if (tab.id === activeId) updateChrome();
}

/* Navigate the active tab. A running game is never replaced; a new tab opens instead. */
function go(view) {
  closeSidebarOnMobile();
  const t = activeTab();
  if (!t || currentView(t).type === "game") { createTab(view); return; }
  navigate(t, view);
}

function step(tab, delta) {
  const next = tab.i + delta;
  if (next < 0 || next >= tab.hist.length) return;
  tab.i = next;
  renderView(tab);
  renderSidebarTabs();
  if (tab.id === activeId) updateChrome();
}

function activateTab(id) {
  activeId = id;
  tabs.forEach((t) => t.el.classList.toggle("active", t.id === id));
  renderSidebarTabs();
  updateChrome();
  const t = activeTab();
  if (t && currentView(t).type === "newtab") { /* keep focus wherever the user is */ }
}

function closeTab(id) {
  const idx = tabs.findIndex((t) => t.id === id);
  if (idx < 0) return;
  const [t] = tabs.splice(idx, 1);
  if (t.cleanup) t.cleanup();
  t.el.remove();
  if (!tabs.length) { createTab({ type: "newtab" }); return; }
  if (activeId === id) activateTab(tabs[Math.min(idx, tabs.length - 1)].id);
  else { renderSidebarTabs(); updateChrome(); }
}

function renderSidebarTabs() {
  const list = $("#tabList");
  list.replaceChildren();
  tabs.forEach((t) => {
    const meta = viewMeta(currentView(t));
    const row = document.createElement("div");
    row.className = "tab-row";
    const btn = document.createElement("button");
    btn.className = "tab-item" + (t.id === activeId ? " active" : "");
    btn.title = meta.title;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", t.id === activeId ? "true" : "false");
    const av = document.createElement("span");
    av.className = "tab-avatar";
    if (meta.thumb) {
      const im = new Image(); im.alt = ""; im.src = meta.thumb;
      im.onerror = () => { im.remove(); av.textContent = meta.title[0].toUpperCase(); };
      av.appendChild(im);
    } else av.textContent = meta.title[0].toUpperCase();
    const title = document.createElement("span");
    title.className = "tab-title";
    title.textContent = meta.title;
    btn.append(av, title);
    btn.onclick = () => { activateTab(t.id); closeSidebarOnMobile(); };
    btn.onauxclick = (e) => { if (e.button === 1) { e.preventDefault(); closeTab(t.id); } };
    const x = document.createElement("button");
    x.className = "tab-close";
    x.setAttribute("aria-label", "Close tab");
    x.innerHTML = ico("x");
    x.onclick = (e) => { e.stopPropagation(); closeTab(t.id); };
    row.append(btn, x);
    list.appendChild(row);
  });
}

function updateChrome() {
  const t = activeTab();
  if (!t) return;
  const v = currentView(t);
  const addr = $("#addr");
  if (document.activeElement !== addr) addr.value = viewMeta(v).url;
  $("#navBack").disabled = t.i === 0;
  $("#navFwd").disabled = t.i >= t.hist.length - 1;
  $$(".cat-btn").forEach((b) => b.classList.toggle("on", v.type === "category" && b.dataset.cat === v.key));
  $$(".sb-link[data-route]").forEach((b) => b.classList.toggle("on", v.type === b.dataset.route));
  $("#stTabs").textContent = `${tabs.length} tab${tabs.length === 1 ? "" : "s"}`;
  Rain.setViewActive(v.type !== "game");
}

/* ==========================================================================
   7. Search / address bar
   ========================================================================== */

function getEngineKey() { return ENGINES[store.get("sbxEngine")] ? store.get("sbxEngine") : "default"; }
function setEngine(key) {
  store.set("sbxEngine", key);
  renderEngineSeg();
  showToast(`${ENGINES[key].label} selected`);
}
function renderEngineSeg() {
  const seg = $("#engineSeg");
  if (!seg) return;
  seg.replaceChildren();
  Object.entries(ENGINES).forEach(([key, e]) => {
    const b = document.createElement("button");
    b.className = "btn sm" + (key === getEngineKey() ? " on" : "");
    b.textContent = key === "default" ? `Default (${e.full})` : e.label;
    b.onclick = () => setEngine(key);
    seg.appendChild(b);
  });
}

function looksLikeUrl(q) {
  if (/^https?:\/\//i.test(q)) return true;
  if (/\s/.test(q)) return false;
  return /^localhost(:\d+)?(\/.*)?$/i.test(q) || /^[^\s/]+\.[a-z]{2,}(:\d+)?(\/.*)?$/i.test(q);
}
const toUrl = (q) => (/^https?:\/\//i.test(q) ? q : "https://" + q);
const webSearch = (q) => openProxied(ENGINES[getEngineKey()].url + encodeURIComponent(q));

const ROUTES = {
  newtab: () => ({ type: "newtab" }),
  saved: () => ({ type: "saved" }),
  history: () => ({ type: "history" }),
};

/* Handles text typed into the address bar */
function submitQuery(raw) {
  const q = raw.trim();
  if (!q) return;
  const internal = q.match(new RegExp("^" + CONFIG.scheme + "://([a-z0-9-]*)", "i"));
  if (internal) {
    const key = internal[1].toLowerCase();
    if (ROUTES[key]) go(ROUTES[key]());
    else if (CATEGORIES[key]) go({ type: "category", key });
    else if (key === "settings") openSettings();
    else go({ type: "newtab" });
    return;
  }
  const exact = games.find((g) => g.name.toLowerCase() === q.toLowerCase());
  if (exact) return openGame(exact);
  if (looksLikeUrl(q)) return openProxied(toUrl(q));
  webSearch(q);
}

function rankGame(g, s) {
  const n = g.name.toLowerCase();
  if (n.startsWith(s)) return 0;
  if (n.split(/\s+/).some((w) => w.startsWith(s))) return 1;
  return n.includes(s) ? 2 : 3;
}
function suggestFor(q) {
  const s = q.trim().toLowerCase();
  const items = [];
  if (!s) return items;
  games
    .filter((g) => g.name.toLowerCase().includes(s) || (g.desc || "").toLowerCase().includes(s))
    .sort((a, b) => rankGame(a, s) - rankGame(b, s))
    .slice(0, 5)
    .forEach((g) => items.push({ kind: "game", game: g }));
  items.push(looksLikeUrl(q.trim()) ? { kind: "url", q: q.trim() } : { kind: "web", q: q.trim() });
  return items;
}

/* Address bar behaviour */
(function initAddressBar() {
  const addr = $("#addr");
  addr.addEventListener("focus", () => addr.select());
  addr.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { submitQuery(addr.value); addr.blur(); updateChrome(); }
    if (e.key === "Escape") { updateChrome(); addr.blur(); }
  });
  addr.addEventListener("blur", updateChrome);
  $("#navBack").onclick = () => { const t = activeTab(); if (t) step(t, -1); };
  $("#navFwd").onclick = () => { const t = activeTab(); if (t) step(t, 1); };
  $("#navReload").onclick = () => {
    const t = activeTab();
    if (!t) return;
    const type = currentView(t).type;
    if (gamesState === "error" && ["category", "saved", "history"].includes(type)) loadGames();
    renderView(t);
    showToast("Reloaded");
  };
})();

/* ==========================================================================
   8. Views
   ========================================================================== */

/* ----- New tab ----- */

function getShortcuts() { return store.json("sbxShortcuts", null) || DEFAULT_SHORTCUTS; }

function renderShortcutBars() {
  $$(".shortcuts").forEach((bar) => {
    bar.replaceChildren();
    getShortcuts().forEach((s, idx) => {
      const a = document.createElement("a");
      a.className = "sc";
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.title = s.name || hostOf(s.url);
      a.appendChild(faviconEl(s.url));
      a.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        if (confirm(`Remove ${a.title} from your shortcuts?`)) {
          const list = getShortcuts().slice();
          list.splice(idx, 1);
          store.setJson("sbxShortcuts", list);
          renderShortcutBars();
        }
      });
      bar.appendChild(a);
    });
    const add = document.createElement("button");
    add.className = "sc sc-add";
    add.title = "Add shortcut";
    add.setAttribute("aria-label", "Add shortcut");
    add.innerHTML = ico("plus");
    add.onclick = openShortcutModal;
    bar.appendChild(add);
  });
}
function openShortcutModal() {
  $("#scUrl").value = "";
  $("#scName").value = "";
  openModal("shortcutModal");
  setTimeout(() => $("#scUrl").focus(), 50);
}
function saveShortcut() {
  const raw = $("#scUrl").value.trim();
  if (!raw || !looksLikeUrl(raw)) { showToast("Enter a website address, like example.com"); return; }
  const url = toUrl(raw);
  const list = getShortcuts().slice();
  list.push({ name: $("#scName").value.trim() || hostOf(url), url });
  store.setJson("sbxShortcuts", list);
  closeModal("shortcutModal");
  renderShortcutBars();
  showToast("Shortcut added");
}

function buildLockedView(tab) {
  const el = tab.el;
  el.innerHTML = `
    <div class="locked-view">
      <div class="locked-icon">${ico("lock")}</div>
      <h2 class="locked-title">Not Available Yet</h2>
      <p class="locked-msg">This feature is coming soon. Check back later for updates!</p>
    </div>`;
}

function buildNewTab(tab) {
  const el = tab.el;
  el.innerHTML = `
    <div class="nt">
      <div class="nt-corner nt-tl">
        <div class="nt-corner-actions">
          <button class="icon-btn" title="Settings" aria-label="Settings"><svg class="ico"><use href="#i-settings"/></svg></button>
          <button class="icon-btn" title="Themes" aria-label="Themes"><svg class="ico"><use href="#i-star"/></svg></button>
        </div>
      </div>
      <div class="nt-corner nt-tr">
        <button class="pill discord-btn home-lockable" data-locked="true">${ico("bubble")}Discord<span class="home-lock-badge" aria-hidden="true">${ico("lock")}</span></button>
      </div>
      <div class="nt-hero">
        <h1 class="nt-title">${esc(CONFIG.brand)}</h1>
        <div class="nt-clock" aria-live="polite">Current time Â· --:--</div>
        <div class="searchbox">
          <label class="sx sx-locked">
            ${ico("search")}
            <span class="home-proxy-lock" title="Powered by Shadow Proxy" aria-label="Powered by Shadow Proxy">${ico("shield")}</span>
            <input class="nt-input" type="text" placeholder="Search or enter URL..." autocomplete="off" spellcheck="false" aria-label="Search or enter URL">
            <span class="kbd">${isMac ? "âŒ˜K" : "Ctrl+K"}</span>
          </label>
          <div class="sg" hidden></div>
        </div>
        <div class="quick"></div>
      </div>
    </div>`;

  $(".nt-tl .icon-btn:first-child", el).onclick = () => openSettings();
  $(".nt-tl .icon-btn:last-child", el).onclick = () => openSettings("themes");
  $(".discord-btn", el).onclick = (e) => { if (e.target.closest("[data-locked]")) go({ type: "locked" }); else openExternal(CONFIG.discord); };
  $(".home-proxy-lock", el).onclick = () => showToast("Search is routed through Shadow Proxy when hosted.");

  const quick = $(".quick", el);
  QUICK_ROW.forEach((key) => {
    const c = CATEGORIES[key];
    const b = document.createElement("button");
    b.className = "q-btn" + (key === "games" ? "" : " home-lockable");
    b.title = c.label;
    b.setAttribute("aria-label", c.label);
    if (key !== "games") b.setAttribute("data-locked", "true");
    b.innerHTML = ico(c.icon) + (key === "games" ? "" : `<span class="home-lock-badge" aria-hidden="true">${ico("lock")}</span>`);
    if (key === "games") {
      b.onclick = () => go({ type: "category", key });
    } else {
      b.onclick = () => go({ type: "locked" });
    }
    quick.appendChild(b);
  });
  const plus = document.createElement("button");
  plus.className = "q-btn home-lockable";
  plus.title = "Add shortcut";
  plus.setAttribute("aria-label", "Add shortcut");
  plus.setAttribute("data-locked", "true");
  plus.innerHTML = `${ico("plus")}<span class="home-lock-badge" aria-hidden="true">${ico("lock")}</span>`;
  plus.onclick = () => go({ type: "locked" });
  quick.appendChild(plus);

  // search box with suggestions
  const input = $(".nt-input", el), box = $(".sg", el);
  let items = [], sel = 0;
  const hide = () => { box.hidden = true; box.replaceChildren(); items = []; };
  const choose = (it) => {
    hide();
    input.value = "";
    if (it.kind === "game") openGame(it.game);
    else if (it.kind === "url") openProxied(toUrl(it.q));
    else webSearch(it.q);
  };
  const paint = () => {
    box.replaceChildren();
    items.forEach((it, idx) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "sg-item" + (idx === sel ? " on" : "");
      if (it.kind === "game") {
        b.innerHTML = `<span class="sg-thumb" style="background-image:url('${esc(it.game.thumb || "")}')"></span><span class="sg-name">${esc(it.game.name)}</span><span class="sg-hint">Play</span>`;
      } else if (it.kind === "url") {
        b.innerHTML = `<span class="sg-thumb">${ico("globe")}</span><span class="sg-name">Open ${esc(hostOf(toUrl(it.q)) || it.q)}</span><span class="sg-hint">New browser tab</span>`;
      } else {
        b.innerHTML = `<span class="sg-thumb">${ico("search")}</span><span class="sg-name">Search the web for "${esc(it.q)}"</span><span class="sg-hint">${esc(ENGINES[getEngineKey()].full)}</span>`;
      }
      b.onpointerdown = (e) => e.preventDefault(); // keep focus in the input
      b.onmouseenter = () => { sel = idx; $$(".sg-item", box).forEach((n, j) => n.classList.toggle("on", j === sel)); };
      b.onclick = () => choose(it);
      box.appendChild(b);
    });
    box.hidden = !items.length;
  };
  input.addEventListener("input", () => { items = suggestFor(input.value); sel = 0; paint(); });
  input.addEventListener("focus", () => { if (input.value.trim()) { items = suggestFor(input.value); sel = 0; paint(); } });
  input.addEventListener("blur", () => setTimeout(hide, 120));
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" && items.length) { e.preventDefault(); sel = (sel + 1) % items.length; paint(); }
    else if (e.key === "ArrowUp" && items.length) { e.preventDefault(); sel = (sel - 1 + items.length) % items.length; paint(); }
    else if (e.key === "Enter") {
      e.preventDefault();
      const list = items.length ? items : suggestFor(input.value);
      if (list.length) choose(list[Math.min(sel, list.length - 1)]);
    } else if (e.key === "Escape") { hide(); input.blur(); }
  });
}

/* ----- Games library / Saved / History ----- */

function buildGameCard(g) {
  const card = document.createElement("div");
  card.className = "game-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", g.name);
  const thumbSrc = g.thumb && g.thumb.trim() ? g.thumb : "https://via.placeholder.com/200x100/0a0a0a/5865F2?text=" + encodeURIComponent(g.name);
  card.innerHTML = `
    <div class="tag">${esc(g.tag || "GAME")}</div>
    <div class="fav-star ${isFavorite(g.name) ? "active" : ""}" title="Toggle favorite" role="button" aria-label="Toggle favorite">â˜…</div>
    <div class="thumb"><img src="${esc(thumbSrc)}" alt="${esc(g.name)}" loading="lazy"><div class="cap">${esc(g.name)}</div></div>`;
  $("img", card).onerror = function () { this.onerror = null; this.src = "https://via.placeholder.com/200x100/0a0a0a/5865F2?text=Error"; };
  $(".fav-star", card).onclick = (e) => { e.stopPropagation(); toggleFavorite(g.name); };
  card.onclick = () => openGame(g);
  card.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openGame(g); } };
  return card;
}

function refreshGameViews() { gameViews.forEach((fn) => fn()); }

function buildGamesPage(tab, mode) {
  const titles = { library: ["gamepad", "Games"], saved: ["bookmark", "Saved"], history: ["history", "History"] };
  const [iconName, title] = titles[mode];
  const el = tab.el;
  const showTools = mode !== "history";
  const sortOptions = mode === "library"
    ? `<option value="az">Aâ€“Z</option><option value="za">Zâ€“A</option><option value="newest">Newest</option><option value="favorites">Favorites</option>`
    : `<option value="az">Aâ€“Z</option><option value="za">Zâ€“A</option><option value="newest">Newest</option>`;
  el.innerHTML = `
    <div class="page">
      <div class="page-head">
        <h2>${ico(iconName)}<span>${title}</span></h2>
        <div class="tools">
          ${showTools ? `<input class="field pg-search" type="search" placeholder="Search gamesâ€¦ ( / )" aria-label="Search games"><select class="field pg-filter" aria-label="Sort">${sortOptions}</select>` : ""}
          ${mode === "library" ? `<button class="btn pg-random" title="Jump into a random game">${ico("shuffle")}Random</button>` : ""}
          ${mode === "history" ? `<button class="btn pg-clear">Clear history</button>` : ""}
        </div>
      </div>
      ${mode === "library" ? `<div class="sec-title"><span>Recently Played</span><button class="btn sm pg-clear">Clear</button></div><div class="grid pg-recent"></div>` : ""}
      ${mode === "library" ? `<div class="sec-title"><span>Games Library<small class="pg-count"></small></span></div>` : `<div style="height:1.4rem"></div>`}
      <div class="grid pg-grid"></div>
    </div>`;

  const search = $(".pg-search", el), filter = $(".pg-filter", el);
  const grid = $(".pg-grid", el), recentGrid = $(".pg-recent", el), count = $(".pg-count", el);

  const emptyMsg = (html) => { const d = document.createElement("div"); d.className = "empty-state"; d.innerHTML = html; return d; };

  const render = () => {
    if (recentGrid) {
      recentGrid.replaceChildren();
      const recent = getRecent().slice(0, 6);
      if (!recent.length) recentGrid.appendChild(emptyMsg("No games played yet â€” jump into something from the library below!"));
      recent.forEach((g) => recentGrid.appendChild(buildGameCard(g)));
    }
    grid.replaceChildren();
    if (mode === "history") {
      const recent = getRecent();
      if (!recent.length) grid.appendChild(emptyMsg("Nothing here yet. Games you play show up in your history."));
      recent.forEach((g) => grid.appendChild(buildGameCard(g)));
      return;
    }
    if (gamesState === "loading" && !games.length) { grid.appendChild(emptyMsg("Loading gamesâ€¦")); return; }
    if (gamesState === "error" && !games.length) {
      const m = emptyMsg("Couldn't load the game list.");
      const retry = document.createElement("button");
      retry.className = "btn sm";
      retry.textContent = "Try again";
      retry.onclick = loadGames;
      m.appendChild(retry);
      grid.appendChild(m);
      return;
    }
    const q = (search.value || "").toLowerCase().trim();
    const f = mode === "saved" ? "saved" : filter.value;
    let list = games.filter((g) => g.name.toLowerCase().includes(q) || (g.desc || "").toLowerCase().includes(q));
    if (f === "favorites" || f === "saved") { const favs = getFavorites(); list = list.filter((g) => favs.includes(g.name)); }
    if (mode === "saved") {
      if (filter.value === "za") list.sort((a, b) => b.name.localeCompare(a.name));
      else if (filter.value === "newest") list.reverse();
      else list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (f === "az") list.sort((a, b) => a.name.localeCompare(b.name));
    else if (f === "za") list.sort((a, b) => b.name.localeCompare(a.name));
    else if (f === "newest") list.reverse();
    if (count) count.textContent = list.length ? String(list.length) : "";
    if (!list.length) {
      grid.appendChild(emptyMsg(mode === "saved" && !q ? "Nothing saved yet â€” tap the â˜… on a game to keep it here." : "No games match your search."));
      return;
    }
    list.forEach((g) => grid.appendChild(buildGameCard(g)));
  };

  if (search) search.addEventListener("input", render);
  if (filter) filter.addEventListener("change", render);
  const rnd = $(".pg-random", el);
  if (rnd) rnd.onclick = playRandomGame;
  $$(".pg-clear", el).forEach((b) => (b.onclick = clearRecent));

  gameViews.add(render);
  tab.cleanup = () => gameViews.delete(render);
  render();
}

function playRandomGame() {
  if (!games.length) { showToast("Games haven't loaded yet â€” try again in a sec."); return; }
  openGame(games[Math.floor(Math.random() * games.length)]);
}

/* ----- Link pages (Apps, AI, Music, ...) ----- */

function buildLinksPage(tab, key) {
  const cat = CATEGORIES[key];
  const el = tab.el;
  el.innerHTML = `
    <div class="page">
      <div class="page-head">
        <h2>${ico(cat.icon)}<span>${esc(cat.label)}</span></h2>
        <div class="tools"><input class="field pg-search" type="search" placeholder="Filterâ€¦" aria-label="Filter"></div>
      </div>
      <p class="page-note">These open in a new browser tab.</p>
      <div class="grid pg-grid"></div>
    </div>`;
  const grid = $(".pg-grid", el), search = $(".pg-search", el);
  const render = () => {
    grid.replaceChildren();
    const q = search.value.toLowerCase().trim();
    const list = cat.links.filter(([name, url]) => name.toLowerCase().includes(q) || url.includes(q));
    if (!list.length) { const d = document.createElement("div"); d.className = "empty-state"; d.textContent = "Nothing matches that filter."; grid.appendChild(d); return; }
    list.forEach(([name, url]) => {
      const a = document.createElement("a");
      a.className = "link-card";
      a.href = url; a.target = "_blank"; a.rel = "noopener";
      a.appendChild(faviconEl(url));
      const text = document.createElement("span");
      text.className = "lc-text";
      text.innerHTML = `<strong>${esc(name)}</strong><small>${esc(hostOf(url))}</small>`;
      a.appendChild(text);
      a.insertAdjacentHTML("beforeend", ico("external"));
      grid.appendChild(a);
    });
  };
  search.addEventListener("input", render);
  render();
}

/* ----- Game player ----- */

async function fetchGameHtml(game) {
  let gameUrl;
  try { gameUrl = new URL(game.url); }
  catch { throw new Error("The game has an invalid repository URL."); }
  if (gameUrl.protocol !== "https:") throw new Error("The game URL must use HTTPS.");

  const requestUrl = new URL(gameUrl);
  requestUrl.searchParams.set("_sbx_cache", String(Date.now()));
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  let html;
  try {
    const res = await fetch(requestUrl.href, { signal: controller.signal, cache: "no-store" });
    if (!res.ok) throw new Error(`Repository returned HTTP ${res.status}.`);
    html = await res.text();
  } catch (error) {
    if (error.name === "AbortError") throw new Error("The game download timed out. Check your connection and retry.");
    throw error;
  } finally {
    clearTimeout(timeout);
  }

  const gameDocument = new DOMParser().parseFromString(html, "text/html");
  if (!gameDocument.documentElement) throw new Error("The repository response was not valid HTML.");
  let base = gameDocument.head.querySelector("base");
  if (!base) {
    base = gameDocument.createElement("base");
    gameDocument.head.prepend(base);
  }
  if (!base.getAttribute("href")?.trim()) base.href = new URL(".", gameUrl).href;
  return `<!doctype html>\n${gameDocument.documentElement.outerHTML}`;
}

function buildGameView(tab, game) {
  tab.el.innerHTML = `
    <div class="game-view">
      <div class="game-bar">
        <div class="game-name">${esc(game.name)}</div>
        <div class="game-actions">
          <div class="volume-wrap">${ico("volume")}<input class="vol" type="range" min="0" max="100" value="100" aria-label="Volume"></div>
          <button class="icon-btn gb-newtab" title="Open in a new browser tab" aria-label="Open in a new browser tab">${ico("external")}</button>
          <button class="icon-btn gb-full" title="Fullscreen" aria-label="Fullscreen">${ico("maximize")}</button>
          <button class="icon-btn gb-reload" title="Refresh game" aria-label="Refresh game">${ico("reload")}</button>
          <button class="icon-btn gb-close" title="Close game" aria-label="Close game">${ico("x")}</button>
        </div>
      </div>
      <div class="game-load-status" role="status">Loading ${esc(game.name)} from the game repositoryâ€¦</div>
      <iframe class="game-frame" allow="autoplay; fullscreen; gamepad; pointer-lock; clipboard-read; clipboard-write" allowfullscreen title="${esc(game.name)}"></iframe>
    </div>`;
  const frame = $(".game-frame", tab.el);
  const status = $(".game-load-status", tab.el);
  tab.frame = frame;
  $(".vol", tab.el).addEventListener("input", (e) => showToast("Volume: " + e.target.value + "% (Requires game support)"));
  $(".gb-newtab", tab.el).onclick = () => openGameInBrowserTab(game);
  $(".gb-full", tab.el).onclick = () => (frame.requestFullscreen ? frame.requestFullscreen() : showToast("Fullscreen not supported by browser."));
  $(".gb-reload", tab.el).onclick = () => { showToast("Refreshing..."); renderView(tab); };
  $(".gb-close", tab.el).onclick = () => (tab.i > 0 ? step(tab, -1) : closeTab(tab.id));

  let loadTimeout;
  const showError = (message) => {
    if (!status.isConnected) return;
    status.replaceChildren(document.createTextNode(message));
    const retry = document.createElement("button");
    retry.className = "btn sm primary";
    retry.textContent = "Retry";
    retry.onclick = () => renderView(tab);
    status.appendChild(retry);
    const open = document.createElement("button");
    open.className = "btn sm";
    open.textContent = "Open in a new browser tab";
    open.onclick = () => openGameInBrowserTab(game);
    status.appendChild(open);
    status.hidden = false;
  };

  fetchGameHtml(game).then((html) => {
    if (!frame.isConnected || !frame.contentDocument) return;
    status.textContent = `Starting ${game.name}â€¦`;
    frame.addEventListener("load", () => {
      clearTimeout(loadTimeout);
      status.hidden = true;
      addRecent(game);
      incrementGamesPlayed();
      bumpPlayCount(game.name);
      showToast(`Playing ${game.name}`);
    }, { once: true });
    loadTimeout = setTimeout(() => {
      showError(`${game.name} is taking too long to start. Retry the download or open it in a new browser tab.`);
    }, 45000);
    frame.contentDocument.open();
    frame.contentDocument.write(html);
    frame.contentDocument.close();
  }).catch((error) => {
    console.error(`Failed to load ${game.name} from the game repository:`, error);
    showError(`Couldn't load ${game.name}: ${error.message || "repository request failed"}`);
    showToast(`Couldn't load ${game.name}.`);
  });
  tab.cleanup = () => clearTimeout(loadTimeout);
}

function openGame(game) { go({ type: "game", game }); }

async function openGameInBrowserTab(game) {
  const w = window.open("about:blank", "_blank");
  if (!w) { showToast("Popup blocked! Please allow popups."); return; }
  w.document.body.textContent = `Loading ${game.name} from the game repositoryâ€¦`;
  try {
    const html = await fetchGameHtml(game);
    w.document.open(); w.document.write(html); w.document.close();
  } catch (error) {
    console.error(`Failed to open ${game.name} from the game repository:`, error);
    w.document.body.textContent = `Couldn't load ${game.name}: ${error.message || "repository request failed"}`;
  }
}

/* ==========================================================================
   9. Chrome: sidebar, menu, notes, links, status bar
   ========================================================================== */

const isMobile = () => matchMedia("(max-width: 720px)").matches;
function toggleSidebar() {
  const app = $("#app");
  if (isMobile()) app.classList.toggle("sb-open");
  else { app.classList.toggle("collapsed"); store.set("sbxSidebarCollapsed", String(app.classList.contains("collapsed"))); }
}
function closeSidebarOnMobile() { if (isMobile()) $("#app").classList.remove("sb-open"); }

function toggleNotes(force) {
  const panel = $("#notes");
  const show = force ?? panel.hidden;
  panel.hidden = !show;
  if (show) $("#notesArea").focus();
}

function openLinks() {
  const url = location.href.split("#")[0];
  $("#linkUrl").value = url;
  $("#linkNote").textContent = location.protocol === "file:"
    ? "You're viewing a local file. Host this page online to get a link others can open."
    : "Anyone with this address can open the page.";
  openModal("linksModal");
}
async function copyLink() {
  const input = $("#linkUrl");
  try { await navigator.clipboard.writeText(input.value); }
  catch { input.select(); document.execCommand("copy"); }
  showToast("Link copied");
}

function openMenu() {
  const box = document.createElement("div");
  box.appendChild(popItem("plus", "New tab", () => openTab({ type: "newtab" })));
  box.appendChild(popItem("gamepad", "Games", () => go({ type: "category", key: "games" })));
  box.appendChild(popItem("bookmark", "Saved", () => go({ type: "saved" })));
  box.appendChild(popItem("history", "History", () => go({ type: "history" })));
  const sep = document.createElement("div"); sep.className = "pop-sep"; box.appendChild(sep);
  box.appendChild(popItem("note", "Notes", () => toggleNotes(true)));
  box.appendChild(popItem("panel", "Toggle sidebar", toggleSidebar));
  box.appendChild(popItem("maximize", "Fullscreen page", () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  }));
  box.appendChild(popItem("settings", "Settings", () => openSettings()));
  return box;
}

function initStatusBar() {
  const clock = () => {
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });
    $("#stClock").textContent = time;
    $$(".nt-clock").forEach((el) => { el.textContent = `Current time Â· ${time}`; });
  };
  clock();
  setInterval(clock, 1000);

  const secure = $("#stSecure");
  const proto = location.protocol;
  $("span", secure).textContent = proto === "https:" ? "Secure" : proto === "file:" ? "Local file" : "Not secure";
  if (proto !== "https:") secure.classList.add("dim");

  const wifi = $("#stWifi");
  const net = () => { wifi.style.opacity = navigator.onLine ? "1" : "0.35"; wifi.parentElement.title = navigator.onLine ? "Online" : "Offline"; };
  net();
  addEventListener("online", net);
  addEventListener("offline", net);

  [["stTos", "tos", "Terms of Service"], ["stPrivacy", "privacy", "Privacy"], ["stDmca", "dmca", "DMCA"]].forEach(([id, key, label]) => {
    const a = $("#" + id);
    const url = CONFIG.legal[key];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
    else {
      a.classList.add("dim");
      a.addEventListener("click", (e) => { e.preventDefault(); showToast(`No ${label} page linked yet â€” set it in CONFIG.legal.`); });
    }
  });

  $("#menuBtn").onclick = (e) => togglePopover(e.currentTarget, openMenu, { align: "right" });

  const notes = $("#notesArea");
  notes.value = store.get("sbxNotes", "");
  notes.addEventListener("input", () => store.set("sbxNotes", notes.value));

  $$(".cat-btn").forEach((b) => (b.onclick = () => go({ type: "category", key: b.dataset.cat })));
  $$(".sb-link[data-route]").forEach((b) => (b.onclick = () => go({ type: b.dataset.route })));
}


/* ==========================================================================
   10. Settings
   ========================================================================== */

function openSettings(tab = "themes") {
  openModal("settingsModal");
  renderThemeGrid();
  showSettingsTab(tab);
  setupColorWheel("colorWheel", applyCustomColor);
  setupColorWheel("textGlowWheel", applyTextGlowColor);
  setupColorWheel("cursorColorWheel", applyCursorColor);
  renderClickSoundsBtn();
  renderShapeButtons();
  renderRainMotionBtn();
  renderEngineSeg();
  renderCursorToggleBtn();
  renderCursorRainbowBtn();
  applyUiScale(parseInt(store.get("sbxUiScale", "100"), 10) || 100);
  $$("#bgSeg [data-bg]").forEach((b) => b.classList.toggle("on", b.dataset.bg === getBackground()));
  $("#customBackgroundUrl").value = getCustomBackgroundUrl();
  renderBackgroundPresets();

  const preview = (swatchId, labelId, key) => {
    const hex = store.get(key), sw = $("#" + swatchId), lb = $("#" + labelId);
    if (hex && sw && lb) { sw.style.background = hex; lb.textContent = hex.toUpperCase(); }
  };
  preview("wheelPreviewSwatch", "wheelPreviewLabel", "sbxCustomColor");
  preview("textGlowWheelPreviewSwatch", "textGlowWheelPreviewLabel", "sbxTextGlowColor");
  preview("cursorWheelPreviewSwatch", "cursorWheelPreviewLabel", "sbxCursorColor");

  const density = getParticleDensity();
  $("#particleDensitySlider").value = density;
  $("#particleDensityLabel").textContent = String(density);
}
function closeSettings() { closeModal("settingsModal"); }

function showSettingsTab(tab) {
  const ids = { themes: "Themes", interface: "Interface", redeem: "Redeem", tabcloak: "TabCloak", extras: "Extras", shortcuts: "Shortcuts", cursor: "Cursor" };
  Object.entries(ids).forEach(([key, name]) => {
    $("#panel" + name).classList.toggle("active", key === tab);
    $("#tabBtn" + name).classList.toggle("active", key === tab);
  });
  if (tab === "extras") renderSiteStats();
}

function forgetData() {
  if (!confirm("Are you sure you would like to delete your data?")) return;
  try { localStorage.clear(); sessionStorage.clear(); } catch { /* storage unavailable */ }
  location.reload();
}

function resetCosmeticSettings() {
  if (!confirm("Reset theme, colors, and particle settings to default?")) return;
  stopRainbowTheme();
  ["sbxTheme", "sbxCustomColor", "sbxTextGlowColor", "sbxParticleDensity", "sbxParticleShape", "sbxCustomBackgroundUrl"].forEach((k) => store.del(k));
  document.documentElement.style.removeProperty("--logo-text-glow-color");
  applyThemeVars(DEFAULT_THEME);
  renderThemeGrid();
  renderShapeButtons();
  $("#particleDensitySlider").value = 40;
  $("#particleDensityLabel").textContent = "40";
  $("#customBackgroundUrl").value = DEFAULT_CITY_BACKGROUND;
  setBackground("custom");
  reinitParticles(THEMES[DEFAULT_THEME].particles);
  showToast("Reset to defaults");
}

/* Tab cloak: change the browser tab's title and icon */
function applyTabPreset(v) {
  const map = {
    "Google Docs": ["Google Docs", "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico"],
    "Google Drive": ["Google Drive", "https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_32dp.png"],
    "Gmail": ["Gmail", "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"],
    "Canvas": ["Canvas", "https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico"],
    "Google Classroom": ["Google Classroom", "https://ssl.gstatic.com/classroom/favicon.png"],
    "New Tab": ["New Tab", "https://www.google.com/favicon.ico"],
  };
  if (map[v]) { $("#customTabTitle").value = map[v][0]; $("#customFavicon").value = map[v][1]; }
}
function saveTabCloak() {
  const title = $("#customTabTitle").value, icon = $("#customFavicon").value;
  if (title) store.set("tabTitle", title);
  if (icon) store.set("tabIcon", icon);
  applyTabCloak();
  showToast("Tab cloak saved!");
}
function resetTabCloak() {
  store.del("tabTitle");
  store.del("tabIcon");
  location.reload();
}
function applyTabCloak() {
  const title = store.get("tabTitle"), icon = store.get("tabIcon");
  if (title) document.title = title;
  if (icon) {
    let link = document.querySelector("link[rel*='icon']");
    if (!link) { link = document.createElement("link"); link.rel = "shortcut icon"; document.head.appendChild(link); }
    link.href = icon;
  }
}

/* ==========================================================================
   11. Fun stuff: cursor, confetti, screen shake, click sounds
   ========================================================================== */

let cursorDotEl = null, cursorRainbowIntervalId = null, cursorRainbowHue = 0;
const isCustomCursorOn = () => store.get("sbxCustomCursor") === "true";
const isCursorRainbowOn = () => store.get("sbxCursorRainbow") === "true";
const getCursorColor = () => store.get("sbxCursorColor", "#5865F2");

function ensureCursorDot() {
  if (cursorDotEl) return cursorDotEl;
  const dot = document.createElement("div");
  dot.id = "sbxCustomCursorDot";
  dot.style.cssText = "position:fixed;top:0;left:0;width:16px;height:16px;border-radius:50%;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:background-color .1s linear;box-shadow:0 0 8px currentColor;display:none;";
  document.body.appendChild(dot);
  cursorDotEl = dot;
  document.addEventListener("mousemove", (e) => {
    cursorDotEl.style.left = e.clientX + "px";
    cursorDotEl.style.top = e.clientY + "px";
  });
  return dot;
}
function applyCustomCursorState() {
  const dot = ensureCursorDot(), on = isCustomCursorOn();
  dot.style.display = on ? "block" : "none";
  document.body.style.cursor = on ? "none" : "";
  document.documentElement.classList.toggle("no-native-cursor", on);
  if (on && isCursorRainbowOn()) startCursorRainbow();
  else {
    stopCursorRainbow();
    if (on) { const hex = getCursorColor(); dot.style.backgroundColor = hex; dot.style.color = hex; }
  }
}
function toggleCustomCursor() {
  const on = !isCustomCursorOn();
  store.set("sbxCustomCursor", String(on));
  applyCustomCursorState();
  renderCursorToggleBtn();
  showToast(on ? "Custom cursor enabled" : "Custom cursor disabled");
}
function renderCursorToggleBtn() {
  const b = $("#cursorToggleBtn");
  if (b) b.textContent = isCustomCursorOn() ? "Custom Cursor: On" : "Custom Cursor: Off";
}
function applyCursorColor(hex) {
  store.set("sbxCursorColor", hex);
  if (isCursorRainbowOn()) { store.set("sbxCursorRainbow", "false"); stopCursorRainbow(); renderCursorRainbowBtn(); }
  applyCustomCursorState();
  const sw = $("#cursorWheelPreviewSwatch"), lb = $("#cursorWheelPreviewLabel");
  if (sw) sw.style.background = hex;
  if (lb) lb.textContent = hex.toUpperCase();
  showToast(`Cursor color applied: ${hex.toUpperCase()}`);
}
function toggleCursorRainbow() {
  const on = !isCursorRainbowOn();
  store.set("sbxCursorRainbow", String(on));
  renderCursorRainbowBtn();
  applyCustomCursorState();
  showToast(on ? "Rainbow cursor enabled" : "Rainbow cursor disabled");
}
function renderCursorRainbowBtn() {
  const b = $("#cursorRainbowBtn");
  if (b) b.textContent = isCursorRainbowOn() ? "Rainbow Cursor: On" : "Rainbow Cursor: Off";
}
function startCursorRainbow() {
  stopCursorRainbow();
  cursorRainbowIntervalId = setInterval(() => {
    cursorRainbowHue = (cursorRainbowHue + 4) % 360;
    const [r, g, b] = hsvToRgb(cursorRainbowHue, 1, 1);
    const hex = rgbToHex(r, g, b);
    if (cursorDotEl) { cursorDotEl.style.backgroundColor = hex; cursorDotEl.style.color = hex; }
  }, 40);
}
function stopCursorRainbow() {
  if (cursorRainbowIntervalId) { clearInterval(cursorRainbowIntervalId); cursorRainbowIntervalId = null; }
}

function spawnConfetti() {
  const canvas = document.createElement("canvas");
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  canvas.style.cssText = "position:fixed;inset:0;z-index:5000;pointer-events:none;";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  const colors = ["#5865F2", "#E53935", "#43A047", "#FB8C00", "#EC407A", "#8E24AA", "#2196F3", "#ffffff"];
  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width, y: -20 - Math.random() * canvas.height * 0.3,
    size: 4 + Math.random() * 6, color: colors[Math.floor(Math.random() * colors.length)],
    speedY: 2 + Math.random() * 3, speedX: (Math.random() - 0.5) * 2,
    rotation: Math.random() * 360, spin: (Math.random() - 0.5) * 10,
  }));
  const start = Date.now();
  (function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      p.y += p.speedY; p.x += p.speedX; p.rotation += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    if (Date.now() - start < 3200) requestAnimationFrame(frame); else canvas.remove();
  })();
}

function shakeScreen() {
  const target = $("#app");
  target.style.transition = "transform 0.05s";
  let count = 0;
  const timer = setInterval(() => {
    target.style.transform = `translate(${(Math.random() - 0.5) * 12}px, ${(Math.random() - 0.5) * 12}px)`;
    if (++count > 12) { clearInterval(timer); target.style.transform = ""; }
  }, 40);
}

let sbxAudioCtx = null;
const isClickSoundsOn = () => store.get("sbxClickSounds") === "true";
function playClickBlip() {
  try {
    sbxAudioCtx = sbxAudioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = sbxAudioCtx.createOscillator(), gain = sbxAudioCtx.createGain(), t = sbxAudioCtx.currentTime;
    osc.type = "sine";
    osc.frequency.setValueAtTime(520, t);
    gain.gain.setValueAtTime(0.06, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    osc.connect(gain);
    gain.connect(sbxAudioCtx.destination);
    osc.start();
    osc.stop(t + 0.12);
  } catch (e) { console.error(e); }
}
function toggleClickSounds() {
  const on = !isClickSoundsOn();
  store.set("sbxClickSounds", String(on));
  renderClickSoundsBtn();
  if (on) playClickBlip();
}
function renderClickSoundsBtn() {
  const b = $("#clickSoundsBtn");
  if (b) b.textContent = isClickSoundsOn() ? "Click Sounds: On" : "Click Sounds: Off";
}
document.addEventListener("click", (e) => {
  if (isClickSoundsOn() && e.target.closest(".btn, .icon-btn, .q-btn, .pill")) playClickBlip();
});

/* ==========================================================================
   12. Supporter games + update log
   ========================================================================== */

const isSupporter = () => store.get("sbxSupporter") === "true";
function grantSupporter() { store.set("sbxSupporter", "true"); updateSupporterUI(); }
function updateSupporterUI() {
  const btn = $("#appsBtn");
  if (btn) btn.style.display = isSupporter() ? "grid" : "none";
}
function openApps() {
  const list = $("#appsList");
  list.replaceChildren();
  if (!exclusiveGames.length) {
    list.innerHTML = `<div class="empty-state">No exclusive games available yet â€” check back soon.</div>`;
  } else {
    exclusiveGames.forEach((g) => {
      const b = document.createElement("button");
      b.className = "btn";
      b.style.cssText = "width:100%;justify-content:space-between;text-align:left;";
      b.innerHTML = `<span>${esc(g.name)}</span><span style="font-size:.8rem;color:var(--text-muted);text-transform:uppercase">${esc(g.tag || "EXCLUSIVE")}</span>`;
      b.onclick = () => { closeApps(); openGame(g); };
      list.appendChild(b);
    });
  }
  openModal("appsModal");
}
function closeApps() { closeModal("appsModal"); }

async function checkUpdateLog() {
  try {
    const data = await fetchJson(CDN_UPDATE_LOG_URL, Date.now());
    if (!data || !data.version) return;
    if (store.get("sbxLastSeenUpdateVersion") === String(data.version)) return;
    showUpdateLog(data);
    store.set("sbxLastSeenUpdateVersion", String(data.version));
  } catch (err) { console.error(err); }
}
function showUpdateLog(data) {
  $("#updateLogTitle").textContent = data.title || "What's New";
  $("#updateLogVersion").textContent = `Version ${data.version}`;
  const body = $("#updateLogBody");
  const changes = Array.isArray(data.changes) ? data.changes : [];
  if (changes.length) {
    body.innerHTML = `<ul style="padding-left:1.4rem;display:flex;flex-direction:column;gap:.5rem">${changes.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>`;
  } else body.textContent = data.message || "";
  openModal("updateLogModal");
}
function closeUpdateLog() { closeModal("updateLogModal"); }

/* ==========================================================================
   13. Keyboard, global handlers, start-up
   ========================================================================== */

function focusSearch() {
  const t = activeTab();
  const target = (t && ($(".nt-input", t.el) || $(".pg-search", t.el))) || $("#addr");
  if (target) { target.focus(); target.select?.(); }
}

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); focusSearch(); return; }
  if (e.key === "Escape") {
    if (!$("#popover").hidden) { closePopover(); return; }
    const open = $$(".modal-overlay.show");
    if (open.length) { open[open.length - 1].classList.remove("show"); return; }
    if (!$("#notes").hidden) { toggleNotes(false); return; }
    if ($("#app").classList.contains("sb-open")) toggleSidebar();
  }
  if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey) {
    const a = document.activeElement;
    const typing = a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.tagName === "SELECT" || a.isContentEditable);
    if (!typing) { e.preventDefault(); focusSearch(); }
  }
  if (e.keyCode === 123) e.preventDefault(); // F12 block carried over from the original page â€” delete this line to allow DevTools
});

document.addEventListener("mousedown", (e) => {
  if (e.target.classList && e.target.classList.contains("modal-overlay")) e.target.classList.remove("show");
});

$("#particleDensitySlider").addEventListener("input", (e) => updateParticleDensity(e.target.value));
$("#uiScale").addEventListener("input", (e) => setUiScale(e.target.value));
$("#scUrl").addEventListener("keydown", (e) => { if (e.key === "Enter") saveShortcut(); });
$("#scName").addEventListener("keydown", (e) => { if (e.key === "Enter") saveShortcut(); });

function initApp() {
  registerProxyServiceWorker();
  applyUiScale(parseInt(store.get("sbxUiScale", "100"), 10) || 100);
  if (store.get("sbxSidebarCollapsed") === "true" && !isMobile()) $("#app").classList.add("collapsed");

  const logo = $("#brandLogo");
  logo.src = CONFIG.logo;
  logo.onerror = () => { logo.replaceWith(Object.assign(document.createElement("span"), { textContent: CONFIG.brand[0], style: "font-weight:700;font-size:1.3rem" })); };
  $("#brandName").textContent = CONFIG.brand;

  const saved = getSavedTheme();
  if (saved === "rainbow") startRainbowTheme();
  else applyThemeVars(saved === "custom" ? "custom" : saved);
  renderThemeGrid();

  const glow = store.get("sbxTextGlowColor");
  if (glow) document.documentElement.style.setProperty("--logo-text-glow-color", glow);

  applyBackground();
  if (getBackground() === "particles" && typeof particlesJS !== "function") addEventListener("load", applyBackground);

  initStatusBar();
  applyCustomCursorState();
  applyTabCloak();
  updateSupporterUI();
  ensureFirstVisitRecorded();

  createTab({ type: "newtab" });

  loadGames();
  loadValidKeys();
  loadExclusiveGames();
  checkUpdateLog();
}

document.addEventListener("DOMContentLoaded", initApp);


