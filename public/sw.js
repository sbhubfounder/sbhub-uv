importScripts("/uv/uv.bundle.js");
importScripts("/uv/uv.config.js");
importScripts("/uv/uv.sw.js");

const uv = new UVServiceWorker();

self.addEventListener("fetch", async (event) => {
  if (uv.route(event)) {
    event.respondWith(uv.fetch(event));
  }
});
