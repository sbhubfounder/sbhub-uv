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
const port = process.env.PORT || 8080;

// Ultraviolet files
app.use("/uv/", express.static(uvPath));

// Transport files
app.use("/epoxy/", express.static(epoxyPath));
app.use("/libcurl/", express.static(libcurlPath));
app.use("/baremux/", express.static(baremuxPath));

// Website files
app.use(express.static(join(root, "public")));

// Send index.html for other normal routes
app.get("/{*splat}", (req, res) => {
  res.sendFile(join(root, "public", "index.html"));
});

// Wisp WebSocket
server.on("upgrade", (request, socket, head) => {
  if (request.url && request.url.endsWith("/wisp/")) {
    wisp.routeRequest(request, socket, head);
  } else {
    socket.end();
  }
});

// Start server
server.listen(port, () => {
  console.log(`SB HUB Ultraviolet proxy running at http://localhost:${port}`);
});
