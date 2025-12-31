import process from "node:process";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    appDir: "assets",
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/tilt-svelte" : "",
    },
  },
};

export default config;
