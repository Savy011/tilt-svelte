<script lang="ts">
  import type { TiltOptions } from "../lib/index.ts";

  import { resolve } from "$app/paths";
  import tilt from "../lib/index.ts";

  const stringifyOpts = (opts?: Partial<TiltOptions>) => {
    if (!opts || Object.keys(opts).length === 0) return "";

    const entries = Object.entries(opts).map(([key, value]) => {
      const quotedKey = key.includes("-") ? `"${key}"` : key;
      const quotedValue = typeof value === "string" ? `"${value}"` : value;
      return `${quotedKey}: ${quotedValue}`;
    });

    return `{ ${entries.join(", ")} }`;
  };

  const EXAMPLE_CODE = (opts?: Partial<TiltOptions>) => `&lt;script&gt;
  import tilt from &quot;@savy011/tilt-svelte&quot;;
&lt;/script&gt;

&lt;div {&#64;attach tilt(${stringifyOpts(opts) || ""})}&gt;&lt;/div&gt;`;

  type Example = {
    title: string;
    description?: string;
    steps?: string[];
    opts?: Partial<TiltOptions>;
  };

  const EXAMPLES: Example[] = [
    {
      title: "Basic Usage",
      steps: [
        "Import tilt from the package.",
        "Simply attach it to the target element using the `@attach` syntax",
      ],
    },
    {
      title: "Glare Effect",
      opts: { glare: true, "max-glare": 0.8 },
      description:
        'Setting this option will enable a glare effect. You can tweak the glare value with "max-glare" option.',
      steps: [
        "Import tilt.",
        "Attach it to the target element.",
        "Pass the config object with glare set to `true`.",
        "Optionally pass max glare intensity.",
      ],
    },
    {
      title: "Reverse Tilt",
      description: "Setting this option will reverse the tilt.",
      opts: { reverse: true },
    },
    {
      title: "Keep floating",
      description:
        "Setting this option will not reset the tilt element when the user mouse leaves the element.",
      opts: { reset: false },
    },
    {
      title: "Full page listening",
      description:
        "Setting this option will make the element respond to any mouse movements on page.",
      opts: { "full-page-listening": true },
    },
    {
      title: "Scale on hover",
      description: "Setting this option will scale tilt element on hover.",
      opts: { scale: 1.2 },
    },
    {
      title: "Start tilt position",
      description:
        "Setting this option will tilt the element at specific degrees at page load. `reset-to-start` - on mouse leave will reset the position to [startX, startY]",
      opts: { startX: 20, startY: -20, "reset-to-start": true },
    },
    {
      title: "Disable X axis",
      description:
        "Setting this option will disable the X-Axis on the tilt element.",
      opts: { axis: "y" },
    },
    {
      title: "Disable Y axis",
      description:
        "Setting this option will disable the Y-Axis on the tilt element.",
      opts: { axis: "x" },
    },
  ];

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

<h2 id="toc-title">Contents</h2>

<ul>
  <li><a href="#introduction" id="toc-introduction">Introduction</a></li>
  <li><a href="#installation" id="toc-installation">Installation</a></li>
  <li><a href="#examples" id="toc-examples">Examples</a></li>
  <ul>
    {#each EXAMPLES as example}
      {@const example_slug = example.title.toLowerCase().replace(/ /g, "-")}
      <li>
        <a href="#examples-{example_slug}" id="toc-{example_slug}">
          {example.title}
        </a>
      </li>
    {/each}
  </ul>
  <li><a href="#credits" id="toc-credits">Credits</a></li>
</ul>

<h2 id="introduction">Introduction</h2>

<p>
  A smooth 3D tilt Svelte attachment based on
  <a href="https://github.com/micku7zu/vanilla-tilt.js"> vanilla-tilt.js </a>
</p>

<p>
  You can play around and test different options for the attachment in the
  <a href={resolve("/playground")}>Playground</a>
</p>

<h2 id="installation">Installation</h2>

<p>
  The package is available on <a href="https://npmjs.org">npm</a> and
  <a href="https://jsr.io/">jsr</a>.
</p>

<ul>
  <li>Using npm</li>
  <pre><code>{NPM_INSTRUCTIONS(import.meta.env.PKG_NAME)}</code></pre>

  <li>Using jsr:</li>
  <pre><code>{JSR_INSTRUCTIONS(import.meta.env.PKG_NAME)}</code></pre>
</ul>

<h2 id="examples">Examples</h2>

{#each EXAMPLES as example}
  <h3 id="examples-{example.title.toLowerCase().replace(/ /g, '-')}">
    {example.title}
  </h3>

  {#if example.description}
    <p>{example.description}</p>
  {/if}

  {#if example.steps}
    <ol>
      {#each example.steps as step}
        <li>{step}</li>
      {/each}
    </ol>
  {/if}

  <figure>
    <div class="box" {@attach tilt(example.opts || {})}></div>
  </figure>

  <pre><code>{@html EXAMPLE_CODE(example.opts)}</code></pre>
{/each}

<h2 id="credits">Credits</h2>

<ul>
  <li>
    Original idea:
    <a href="https://github.com/gijsroge/tilt.js">tilt.js</a>
  </li>
  <li>
    Based on:
    <a href="https://github.com/micku7zu/vanilla-tilt.js">vanilla-tilt</a>
  </li>
  <li>
    Documentation styling using:
    <a href="https://github.com/owickstrom/the-monospace-web/">
      The Monospace Web
    </a>
  </li>
</ul>

<style>
  div.box {
    display: block;
    margin-inline: auto;
    margin-block: 3rem;
    width: 100%;
    max-width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    color: white;
    background: linear-gradient(to bottom right, #c4afd0, #ffd076, #97e0cf);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: perspective(500px);
    transform: perspective(500px);

    & > :global(* + *) {
      margin-top: unset;
    }
  }
</style>
