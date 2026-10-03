import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

// The website package and the framework ship TypeScript source. Vite has
// to transform them like app code: no SSR externals, no esbuild pre-bundle
// for the website (it uses import.meta.glob for its fixtures).
export default defineConfig({
  plugins: [reactRouter()],
  resolve: {
    dedupe: ["react", "react-dom", "react-router", "lucide-react"],
  },
  ssr: { noExternal: ["studyluma", "@chromatis/base"] },
  optimizeDeps: {
    exclude: ["studyluma"],
    esbuildOptions: { jsx: "automatic" },
  },
});
