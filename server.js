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

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

// IMPORTANT: public files come first.
app.use(express.static(publicPath));

// Vendor files are fallback files.
app.use("/uv/", express.static(uvPath));
app.use("/epoxy/", express.static(epoxyPath));
app.use("/libcurl/", express.static(libcurlPath));
app.use("/baremux/", express.static(baremuxPath));

app.get("/{*splat}", (req, res) => {
  res.sendFile(join(publicPath, "index.html"));
});

server.on("upgrade", (request, socket, head) => {
  if (request.url && request.url.endsWith("/wisp/")) {
    wisp.routeRequest(request, socket, head);
  } else {
    socket.end();
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`SB HUB Ultraviolet proxy running on port ${port}`);
});
