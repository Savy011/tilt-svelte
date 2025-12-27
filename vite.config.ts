import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  plugins: [sveltekit()],
  define: {
    "import.meta.env.PKG_VERSION": JSON.stringify(pkg.version),
    "import.meta.env.PKG_LICENSE": JSON.stringify(pkg.license),
    "import.meta.env.PKG_NAME": JSON.stringify(pkg.name),
  },
});
