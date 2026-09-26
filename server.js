```js
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

app.use("/uv/", express.static(uvPath));
app.use("/epoxy/", express.static(epoxyPath));
app.use("/libcurl/", express.static(libcurlPath));
app.use("/baremux/", express.static(baremuxPath));

app.use(express.static(join(root, "public")));

app.get("/{*splat}", (req, res) => {
  res.sendFile(join(root, "public", "index.html"));
});

server.on("upgrade", (request, socket, head) => {
  if (request.url?.endsWith("/wisp/")) {
    wisp.routeRequest(request, socket, head);
  } else {
    socket.end();
  }
});

server.listen(port, () => {
  console.log(`SB HUB Ultraviolet proxy running at http://localhost:${port}`);
});
```
