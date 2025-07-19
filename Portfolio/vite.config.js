/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@routers": path.resolve(__dirname, "src/routers"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@apis": path.resolve(__dirname, "src/apis"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
});
