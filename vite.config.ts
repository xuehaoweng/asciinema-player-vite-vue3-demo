import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: path.resolve(process.cwd(), "src") + "/",
      },
    ],
  },
  server: {
    open: true,
    port: 5173,
    proxy: {
      "/cast": {
        // target: env.VITE_BASIC_URL,
        // ws: true, //代理websockets
        changeOrigin: true, //
        rewrite: (path: string) =>
          path.replace(/^\/cast/, "localhost:5173/cast"),
      },
    
    },
  },
});
