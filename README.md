# Tilt Svelte

<p>
  <a href="https://npmjs.org/@savy011/tilt-svelte"><img alt="NPM Version" src="https://img.shields.io/npm/v/%40savy011%2Ftilt-svelte?style=for-the-badge&logo=npm" /></a>
  <a href="https://jsr.io/@savy011/tilt-svelte"><img alt="JSR Version" src="https://img.shields.io/jsr/v/%40savy011/tilt-svelte?style=for-the-badge&logo=jsr" /></a>
</p>

A smooth 3D tilt Svelte attachment based on [vanilla-tilt.js](https://github.com/micku7zu/vanilla-tilt.js).
You can play around and test different options for the attachment in the [Playground](https://savy011.github.io/tilt-svelte/playground).

## Installation

The package is available on [npm](https://www.npmjs.com/package/@savy011/tilt-svelte) and [jsr](https://jsr.io/@savy011/tilt-svelte).

- Using npm:

```bash
# If you are using npm
npm install @savy011/tilt-svelte

# if you are using pnpm
pnpm add @savy011/tilt-svelte

# if you are using Yarn
yarn add @savy011/tilt-svelte

# If you are using Bun
bun add @savy011/tilt-svelte
```

- Using jsr:

```bash
# if you are using a recent version of pnpm (>10.9)
pnpm install jsr:@savy011/tilt-svelte

# if you are using a recent version of Yarn (>4.9)
yarn add jsr:@savy011/tilt-svelte

# If you are using npm, an older version of pnpm or Yarn
npx jsr add @savy011/tilt-svelte
pnpm dlx jsr add @savy011/tilt-svelte
yarn dlx jsr add @savy011/tilt-svelte

# If you are using Bun
bunx jsr add @savy011/tilt-svelte
```

## Examples

- Basic Usage

```html
<script>
  import tilt from "@savy011/tilt-svelte";
</script>

<div {@attach tilt()}></div>
```

Advanced examples for the package are available on the [project homepage](https://savy011.github.io/tilt-svelte/#examples)

## Credits

- Original idea: [tilt.js](https://github.com/gijsroge/tilt.js)
- Based on: [vanilla-tilt](https://github.com/micku7zu/vanilla-tilt.js)
- Documentation styling using: [The Monospace Web](https://github.com/owickstrom/the-monospace-web/)
