import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const spaRoutes = [
  "italianissimi",
  "servizi",
  "partner-digitale",
  "metodo",
  "contatti",
  "privacy-policy",
  "cookie-policy",
];

function githubPagesSpaFallback() {
  return {
    name: "github-pages-spa-fallback",
    closeBundle() {
      const index = resolve("dist/index.html");
      if (!existsSync(index)) return;

      copyFileSync(index, resolve("dist/404.html"));

      for (const route of spaRoutes) {
        const dir = resolve("dist", route);
        mkdirSync(dir, { recursive: true });
        copyFileSync(index, resolve(dir, "index.html"));
      }
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
});
