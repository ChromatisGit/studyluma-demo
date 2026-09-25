import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  plugins: [reactRouter()],
  resolve: { dedupe: ["react", "react-dom", "react-router"] },
  server: { fs: { allow: [".."] } },
});
