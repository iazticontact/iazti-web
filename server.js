import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Hostinger a veces cambia el cwd / ubicación real del build.
// Probamos varias rutas candidatas donde podría estar el dist.
const candidates = [
  path.join(process.cwd(), "dist"),
  path.join(__dirname, "dist"),
  path.join(process.cwd(), ".builds", "source", "repository", "dist"),
  path.join(process.cwd(), "public_html", "dist"),
];

const distPath = candidates.find((p) => fs.existsSync(p) && fs.existsSync(path.join(p, "index.html")));

// Endpoint de diagnóstico (NO enseña secretos, solo rutas)
app.get("/health", (req, res) => {
  const info = {
    cwd: process.cwd(),
    __dirname,
    distFound: Boolean(distPath),
    distPath: distPath || null,
    candidates: candidates.map((p) => ({
      path: p,
      exists: fs.existsSync(p),
      hasIndex: fs.existsSync(path.join(p, "index.html")),
    })),
    hasEnv: {
      PORT: Boolean(process.env.PORT),
      // si usas variables VITE_ en server no sirven, pero lo dejo por si acaso:
      VITE_SUPABASE_URL: Boolean(process.env.VITE_SUPABASE_URL),
      VITE_SUPABASE_ANON_KEY: Boolean(process.env.VITE_SUPABASE_ANON_KEY),
      VITE_GEMINI_API_KEY: Boolean(process.env.VITE_GEMINI_API_KEY),
    },
  };
  res.json(info);
});

// Si no existe dist, mostramos una página útil en vez de negro
if (!distPath) {
  app.get("*", (req, res) => {
    res
      .status(500)
      .send(
        `<h1>IAzti deploy: dist no encontrado</h1>
         <p>Abre <a href="/health">/health</a> y copia aquí el JSON.</p>`
      );
  });
} else {
  // Servir frontend compilado
  app.use(express.static(distPath));

  // SPA fallback
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Serving on port", port, "dist:", distPath));
