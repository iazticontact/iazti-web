import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Intentamos localizar dist en el sitio correcto (Hostinger a veces cambia el cwd)
const candidates = [
  path.join(__dirname, "dist"),
  path.join(process.cwd(), "dist"),
];

let distPath = "";
for (const p of candidates) {
  if (fs.existsSync(path.join(p, "index.html"))) {
    distPath = p;
    break;
  }
}

// Health check para saber qué está pasando
app.get("/__health", (req, res) => {
  res.json({
    ok: true,
    cwd: process.cwd(),
    dirname: __dirname,
    distPath: distPath || null,
    distIndexExists: distPath ? fs.existsSync(path.join(distPath, "index.html")) : false,
  });
});

if (!distPath) {
  // Si no existe dist, mostramos una página clara en vez de negro
  app.get("*", (req, res) => {
    res
      .status(500)
      .send(
        `<h1>ERROR: No encuentro la carpeta dist</h1>
         <p>Tu build no está generando dist/index.html o no está en la ruta esperada.</p>
         <p>Abre /__health para ver rutas.</p>`
      );
  });
} else {
  // Servir assets de Vite (dist/assets)
  app.use("/assets", express.static(path.join(distPath, "assets"), { immutable: true, maxAge: "1y" }));
  // Servir el resto (dist/index.html, favicon, etc.)
  app.use(express.static(distPath, { index: false }));

  // SPA fallback
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port:", PORT);
});
