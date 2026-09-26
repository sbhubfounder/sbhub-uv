importScripts("/uv/uv.sw.js");

self.addEventListener("fetch", async (event) => {
  if (event.request.url.includes("/uv/service/")) {
    event.respondWith(uv.fetch(event));
  }
});
