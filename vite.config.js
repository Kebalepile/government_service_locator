import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   workbox: {
    //     globPatterns: ["**/*.{js, jsx, html, css, jpg,jpeg,png, svg, ico}"],
    //   },
    //   devOptions: {
    //     enabled: true,
    //   },
    //   injectRegister: "auto",
    // }),
  ],
});