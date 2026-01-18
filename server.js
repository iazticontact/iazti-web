import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.disable("x-powered-by");

// ✅ 1) Confirmar que el dominio entra por Node
app.get("/__health", (_req, res) => res.type("text/plain").send("ok"));

// ✅ 2) Ver si existe el build (dist) en producción
app.get("/__debug", (_req, res) => {
  const distPath = path.join(__dirname, "dist");
  res.json({
    cwd: process.cwd(),
    dirname: __dirname,
    distPath,
    distIndexExists: fs.existsSync(path.join(distPath, "index.html")),
    distAssetsExists: fs.existsSync(path.join(distPath, "assets")),
  });
});

const port = Number(process.env.PORT) || 3000;
const distPath = path.join(__dirname, "dist");

// Servir Vite build
app.use(express.static(distPath));

// SPA fallback
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});

