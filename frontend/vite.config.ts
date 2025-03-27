import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import deno from "@deno/vite-plugin";

export default defineConfig({
  plugins: [deno(), react()],
});
