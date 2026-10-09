// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://atosh.dev",
  integrations: [mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/geist-regular.woff2"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/geist-medium.woff2"],
            weight: 500,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/geist-semibold.woff2"],
            weight: 600,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/geist-bold.woff2"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "GeistMono",
      cssVariable: "--font-geist-mono",
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/geist-mono-regular.woff2"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/geist-mono-medium.woff2"],
            weight: 500,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/geist-mono-semibold.woff2"],
            weight: 600,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],
});
