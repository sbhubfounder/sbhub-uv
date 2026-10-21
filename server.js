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
