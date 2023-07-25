import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@helpers": "/src/helpers",
      "@store": "/src/store",
      "@assets": "/src/assets",
    },
  },
});
