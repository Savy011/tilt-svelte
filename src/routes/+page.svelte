<script lang="ts">
  import type { TiltOptions } from "../lib/index.ts";

  import { resolve } from "$app/paths";

  import Examples from "./examples.svelte";
  import Installation from "./installation.svelte";

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
      opts: { "glare": true, "max-glare": 0.8 },
      description:
        "Setting this option will enable a glare effect. You can tweak the glare value with \"max-glare\" option.",
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
      opts: { "startX": 20, "startY": -20, "reset-to-start": true },
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
</script>

<svelte:head>
  <title>Tilt Svelte</title>
</svelte:head>

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
    <li>
      <a href="#examples-programmatic-control" id="toc-programmatic-control">
        Programmatic Control
      </a>
    </li>
  </ul>
  <li><a href="#credits" id="toc-credits">Credits</a></li>
</ul>

<h2 id="introduction">Introduction</h2>

<p>
  A smooth 3D tilt Svelte attachment based on
  <a href="https://github.com/micku7zu/vanilla-tilt.js">vanilla-tilt.js</a>
</p>

<p>
  You can play around and test different options for the attachment in the
  <a href={resolve("/playground")}>Playground</a>
</p>

<Installation />

<Examples examples={EXAMPLES} />

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
