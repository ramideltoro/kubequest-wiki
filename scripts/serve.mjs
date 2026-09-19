import http from "node:http";
import fs from "node:fs";
import path from "node:path";
export function serve(port = 0) {
  const root = path.resolve("dist"),
    base = "/kubequest-wiki";
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    if (!url.pathname.startsWith(base + "/")) {
      res.writeHead(404).end();
      return;
    }
    let file = path.resolve(
      root,
      decodeURIComponent(url.pathname.slice(base.length + 1)),
    );
    if (!file.startsWith(root + "/") && file !== root) {
      res.writeHead(403).end();
      return;
    }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory())
      file += "/index.html";
    if (!fs.existsSync(file)) {
      res.writeHead(404).end("Not found");
      return;
    }
    res.setHeader(
      "Content-Type",
      {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "application/javascript",
        ".svg": "image/svg+xml",
        ".json": "application/json",
        ".ttf": "font/ttf",
        ".puml": "text/plain",
        ".md": "text/plain",
      }[path.extname(file)] || "application/octet-stream",
    );
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) =>
    server.listen(port, "127.0.0.1", () => resolve(server)),
  );
}
