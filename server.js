import express from "express";
import http from "node:http";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

import { server as wisp } from "@mercuryworkshop/wisp-js/server";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const app = express();
const server = http.createServer(app);

const root = fileURLToPath(new URL(".", import.meta.url));
const publicPath = join(root, "public");
const port = Number(process.env.PORT) || 8080;

const AI_API_URL = process.env.AI_API_URL || "https://sbhub-ai.onrender.com/api/chat";
const GOOGLE_CSE_API_KEY = process.env.GOOGLE_CSE_API_KEY || "";
const GOOGLE_CSE_ID = process.env.GOOGLE_CSE_ID || "";
const imageSearchRequests = new Map();

app.use((req, res, next) => {
  if (req.path.startsWith("/api/")) {
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_ORIGIN || "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
    res.setHeader("Vary", "Origin");
    if (req.method === "OPTIONS") return res.status(204).end();
  }
  next();
});
app.use(express.json({ limit: "64kb" }));

app.get("/health", (_req, res) => {
  res.json({ status: "ok", proxy: "ultraviolet", wisp: "/wisp/", aiBridge: Boolean(AI_API_URL) });
});

app.post("/api/chat", async (req, res) => {
  try {
    const upstream = await fetch(AI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(req.body || {}),
      signal: AbortSignal.timeout(45000),
    });
    const body = await upstream.text();
    if ((upstream.headers.get("content-type") || "").includes("text/html") || /^\s*</.test(body)) {
      return res.status(502).json({ error: "AI backend returned HTML instead of JSON. Check AI_API_URL." });
    }
    res.status(upstream.status).type("application/json").send(body);
  } catch (error) {
    console.error("AI bridge failed:", error);
    res.status(502).json({ error: "Couldn't reach the SB HUB AI backend. Check AI_API_URL and the AI service status." });
  }
});

app.get("/api/game-image", async (req, res) => {
  const name = String(req.query.name || "").trim().slice(0, 120);
  if (!name) return res.status(400).json({ error: "A game name is required." });

  const now = Date.now();
  const key = req.ip || req.socket.remoteAddress || "unknown";
  const recent = (imageSearchRequests.get(key) || []).filter((time) => now - time < 60000);
  if (recent.length >= 10) return res.status(429).json({ error: "Image search limit reached. Try again in a minute." });
  recent.push(now);
  imageSearchRequests.set(key, recent);

  if (!GOOGLE_CSE_API_KEY || !GOOGLE_CSE_ID) {
    return res.status(503).json({ error: "Google Images fallback is not configured. Set GOOGLE_CSE_API_KEY and GOOGLE_CSE_ID." });
  }
  try {
    const search = new URL("https://www.googleapis.com/customsearch/v1");
    search.searchParams.set("key", GOOGLE_CSE_API_KEY);
    search.searchParams.set("cx", GOOGLE_CSE_ID);
    search.searchParams.set("q", name + " video game icon cover");
    search.searchParams.set("searchType", "image");
    search.searchParams.set("num", "1");
    search.searchParams.set("safe", "active");
    const response = await fetch(search, { signal: AbortSignal.timeout(10000) });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      console.error("Google image search failed:", response.status, data?.error?.message || "");
      return res.status(502).json({ error: "Google image search failed." });
    }
    const imageUrl = data?.items?.[0]?.link;
    if (typeof imageUrl !== "string" || !/^https:\/\//i.test(imageUrl)) {
      return res.status(404).json({ error: "No suitable image was found." });
    }
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.json({ imageUrl });
  } catch (error) {
    console.error("Google image search error:", error);
    return res.status(502).json({ error: "Google image search is temporarily unavailable." });
  }
});

// Small, allowlisted image relay for the site's own CDN assets. This is not an open proxy.
app.get("/relay", async (req, res) => {
  let target;
  try { target = new URL(String(req.query.url || "")); }
  catch { return res.status(400).type("text/plain").send("Invalid image URL"); }
  const allowedHosts = new Set([
    "cdn.jsdelivr.net", "raw.githubusercontent.com", "upload.wikimedia.org",
    "images.unsplash.com", "images.pexels.com", "avatars.githubusercontent.com"
  ]);
  if (target.protocol !== "https:" || !allowedHosts.has(target.hostname.toLowerCase())) {
    return res.status(403).type("text/plain").send("Image host not allowed");
  }
  try {
    const upstream = await fetch(target, { redirect: "follow", signal: AbortSignal.timeout(12000) });
    const finalUrl = new URL(upstream.url);
    if (!allowedHosts.has(finalUrl.hostname.toLowerCase())) {
      return res.status(403).type("text/plain").send("Redirect host not allowed");
    }
    if (!upstream.ok) return res.status(upstream.status).end();
    const contentType = upstream.headers.get("content-type") || "";
    if (!contentType.toLowerCase().startsWith("image/")) {
      return res.status(415).type("text/plain").send("Not an image");
    }
    const bytes = Buffer.from(await upstream.arrayBuffer());
    if (bytes.length > 5 * 1024 * 1024) return res.status(413).type("text/plain").send("Image too large");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.setHeader("Content-Type", contentType);
    return res.status(200).send(bytes);
  } catch (error) {
    console.error("Image relay failed:", error);
    return res.status(502).type("text/plain").send("Image relay failed");
  }
});


// No COEP/COOP — avoids breaking embeds, MessagePort channels, and images.
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "frame-ancestors *");
  next();
});

app.get("/sw.js", (req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.sendFile(join(publicPath, "sw.js"));
});

app.get("/proxy-boot.html", (req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.sendFile(join(publicPath, "proxy-boot.html"));
});

app.use(express.static(publicPath));

app.use("/uv/", express.static(uvPath));
app.use("/epoxy/", express.static(epoxyPath));
app.use("/libcurl/", express.static(libcurlPath));
app.use("/baremux/", express.static(baremuxPath));

app.get("/{*splat}", (req, res) => {
  res.sendFile(join(publicPath, "index.html"));
});

server.on("upgrade", (request, socket, head) => {
  const url = request.url || "";
  if (url.includes("/wisp/")) {
    wisp.routeRequest(request, socket, head);
  } else {
    socket.end();
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`SB HUB Ultraviolet proxy running on port ${port}`);
});
