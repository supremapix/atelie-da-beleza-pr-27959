import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import vitePrerender from "vite-plugin-prerender";
import { createRequire } from "module";
import { componentTagger } from "lovable-tagger";

// Load prerender routes from JS file safely in ESM
const require = createRequire(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateRoutes } = require("./prerender.config.js");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: generateRoutes(),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
