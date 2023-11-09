import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "./manifest.json"),
          dest: "./",
        },
        {
          src: path.resolve(__dirname, "./src/assets/icons"),
          dest: "./assets",
        },
      ],
    }),
  ],
});
