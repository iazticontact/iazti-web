import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Detectar dist aunque Hostinger cambie el cwd
const candidates = [
  path.join(__dirname, "dist"),
  path.join(process.cwd(), "dist"),
  path.join(__dirname, "..", "dist"),
  path.join(process.cwd(), "..", "dist"),
];

const distPath = candidates.find((p) => fs.existsSync(path.join(p, "index.html")));

if (!distPath) {
  // Página de debug si dist no existe (así sabemos el problema exacto)
  app.get("*", (req, res) => {
    res.status(500).send(
      `<h1>ERROR: dist no encontrado</h1>
       <p>El build no se ha generado o no está en la ruta esperada.</p>
       <pre>${candidates.join("\n")}</pre>`
    );
  });

  app.listen(PORT, () => console.log("IAzti (DEBUG) on", PORT));
} else {
  app.use(express.static(distPath));

  // SPA fallback
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });

  app.listen(PORT, () => console.log("IAzti running on", PORT, "dist:", distPath));
}



