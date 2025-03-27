import path from "node:path";

import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import deno from "@deno/vite-plugin";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // @ts-expect-error type mismatch
  plugins: [deno(), react(), svgr(), tailwindcss()],
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src"),
      "+": path.resolve(__dirname, "./_node_modules"),
    },
  },
});
