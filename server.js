import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// 1) Servir el build de Vite
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath, {
  maxAge: "1y",
  setHeaders(res, filePath) {
    // HTML sin cache para que los cambios se vean rápido
    if (filePath.endsWith(".html")) {
      res.setHeader("Cache-Control", "no-cache");
    }
  },
}));

// 2) Fallback SPA: siempre devolver dist/index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`IAzti running on port ${PORT}`);
});

