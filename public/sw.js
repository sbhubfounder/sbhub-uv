/*
 * SB HUB Ultraviolet service worker.
 *
 * Ultraviolet's service worker needs the bundle + config globals in scope
 * BEFORE uv.sw.js is imported, otherwise `self.Ultraviolet` is undefined and
 * the worker throws on startup (which is what makes every /uv/service/ URL
 * fail). It also needs to claim clients immediately, otherwise the very first
 * page load is uncontrolled and proxied images/pages 404.
 */
importScripts("/uv/uv.bundle.js");
importScripts("/uv/uv.config.js");
importScripts("/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Lets the page force a takeover on the first load.
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "claim") {
    event.waitUntil(self.clients.claim());
  }
});

self.addEventListener("fetch", (event) => {
  event.respondWith(sw.fetch(event));
});
