<script lang="ts">
  const NPM_INSTRUCTIONS = (pkg_name: string) => `# If you are using npm
npm install ${pkg_name}

# if you are using pnpm
pnpm add ${pkg_name}

# if you are using Yarn
yarn add ${pkg_name}

# If you are using Bun
bun add ${pkg_name}`;

  const JSR_INSTRUCTIONS = (
    pkg_name: string,
  ) => `# if you are using a recent version of pnpm (>10.9)
pnpm install jsr:${pkg_name}

# if you are using a recent version of Yarn (>4.9)
yarn add jsr:${pkg_name}

# If you are using npm, an older version of pnpm or Yarn
npx jsr add ${pkg_name}
pnpm dlx jsr add ${pkg_name}
yarn dlx jsr add ${pkg_name}

# If you are using Bun
bunx jsr add ${pkg_name}`;
</script>

<h2 id="installation">Installation</h2>

<p>
  The package is available on
  <a href="https://npmjs.org/@savy011/tilt-svelte">npm</a>
  and
  <a href="https://jsr.io/@savy011/tilt-svelte">jsr</a>.
</p>

<ul>
  <li>Using npm</li>
  <pre><code>{NPM_INSTRUCTIONS(import.meta.env.PKG_NAME)}</code></pre>

  <li>Using jsr:</li>
  <pre><code>{JSR_INSTRUCTIONS(import.meta.env.PKG_NAME)}</code></pre>
</ul>
