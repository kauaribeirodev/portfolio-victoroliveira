import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Removido o plugin da Cloudflare para simplificar
export default defineConfig({
  // Esta linha é a mais importante de todas.
  // Ela diz ao Vite para montar os caminhos dos arquivos corretamente para o GitHub Pages.
  base: "/portfolio-victoroliveira/",

  plugins: [react()],
  build: {
    // Não precisamos das configurações do rollup para este deploy
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});