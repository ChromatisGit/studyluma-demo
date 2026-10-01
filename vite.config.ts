import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  esbuild: { jsx: "automatic", jsxImportSource: "react" },
  optimizeDeps: { exclude: ["@chromatis/base"] },
  resolve: {
    dedupe: ["react", "react-dom", "react-router", "lucide-react"],
  },
  server: { fs: { allow: [".."] } },
});
