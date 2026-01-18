import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

const distPath = path.join(__dirname, "dist");
const indexHtml = path.join(distPath, "index.html");

// ✅ prueba rápida para saber si estás pasando por Node
app.get("/__health", (_req, res) => {
  res.type("text").send("ok");
});

// Si no existe dist/index.html, es que NO se ha construido
app.get("/__debug_dist", (_req, res) => {
  res.json({
    distPath,
    existsDist: fs.existsSync(distPath),
    existsIndex: fs.existsSync(indexHtml),
  });
});

// Cache fuerte SOLO para assets compilados
app.use(
  "/assets",
  express.static(path.join(distPath, "assets"), {
    maxAge: "365d",
    immutable: true,
  })
);

// Resto de estáticos (sin index automático)
app.use(express.static(distPath, { index: false }));

// SPA fallback
app.get("*", (_req, res) => {
  if (!fs.existsSync(indexHtml)) {
    res
      .status(500)
      .type("text")
      .send("ERROR: dist/index.html no existe. No se ha ejecutado el build.");
    return;
  }
  res.sendFile(indexHtml);
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});

