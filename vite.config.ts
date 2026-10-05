import { reactRouter } from "@react-router/dev/vite";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// The website package and the framework ship TypeScript source. Vite has
// to transform them like app code: no SSR externals, no esbuild pre-bundle
// for the website (it uses import.meta.glob for its fixtures). Bun nests a
// second copy of the framework under studyluma; dedupe keeps one in use.
export default defineConfig({
  plugins: [reactRouter()],
  server: {
    fs: {
      allow: [
        fileURLToPath(new URL(".", import.meta.url)),
        fileURLToPath(new URL("../studyluma-website", import.meta.url)),
      ],
    },
  },
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "react-router",
      "lucide-react",
      "@chromatis/base",
    ],
  },
  ssr: { noExternal: ["studyluma", "@chromatis/base"] },
  optimizeDeps: {
    exclude: ["studyluma"],
    esbuildOptions: { jsx: "automatic" },
  },
});
