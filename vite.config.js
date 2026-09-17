import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function githubPagesSpaFallback() {
  return {
    name: "github-pages-spa-fallback",
    closeBundle() {
      const index = resolve("dist/index.html");
      if (existsSync(index)) {
        copyFileSync(index, resolve("dist/404.html"));
      }
    },
  };
}

export default defineConfig({
  base: "/italianissimi/",
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
});
