import path from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import deno from "@deno/vite-plugin";

export default defineConfig({
  plugins: [deno(), react()],
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src"),
      "+": path.resolve(__dirname, "./_node_modules"),
    },
  },
});
