<script lang="ts">
  import type { TiltOptions } from "../lib/index.ts";

  import tilt, { createTilt } from "../lib/index.ts";

  interface Props {
    examples: {
      title: string;
      description?: string;
      steps?: string[];
      opts?: Partial<TiltOptions>;
    }[];
  }

  let active = $state(true);

  const stringifyOpts = (opts?: Partial<TiltOptions>) => {
    if (!opts || Object.keys(opts).length === 0)
      return "";

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

  const CUSTOM_EXAMPLE_CODE = `&lt;script&gt;
  import { createTilt } from &quot;@savy011/tilt-svelte&quot;;

  const tilt = createTilt({ max: 25, reset: false })
&lt;/script&gt;

&lt;div {&#64;attach tilt.init()}&gt;&lt;/div&gt
&lt;button onclick={() => tilt.reset()}&gt;Reset&lt;/reset&gt;
`;

  const { examples }: Props = $props();

  let values = $state("");

  const tilted = createTilt({
    max: 25,
    reset: false,
  });

  function addValues() {
    values = `${JSON.stringify(tilted.getValues())}\n${values}`;
  }

  function enable() {
    tilted.enable();
    active = true;
  }

  function disable() {
    tilted.disable();
    active = false;
  }
</script>

<h2 id="examples">Examples</h2>

{#each examples as example}
  {@const id = `examples-${example.title.toLowerCase().replace(/ /g, "-")}`}
  <h3 {id}>{example.title}</h3>

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
    <div class="box" {@attach tilt({ max: 25, ...example.opts })}></div>
  </figure>

  <pre><code>{@html EXAMPLE_CODE(example.opts)}</code></pre>
{/each}

<h3 id="examples-programmatic-control">Programmatic Control</h3>

<p>
  Create a tilt controller with custom options and expose methods for
  programmatic control like manual reset via button
</p>

<figure>
  <div class="box" {@attach tilted.init()}></div>

  <div class="status" style:--status-color={active ? "green" : "red"}>
    {active ? "ON" : "OFF"}
  </div>
</figure>

<button onclick={disable}>disable</button>
<button onclick={enable}>enable</button>
<button onclick={() => tilted.reset()}>reset</button>
<button onclick={addValues}>Get Values</button>

<pre class="values"><code>{values}</code></pre>

<pre><code>{@html CUSTOM_EXAMPLE_CODE}</code></pre>

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

  .values {
    min-height: 8rlh;
    max-height: 8rlh;
    overflow: scroll;
  }

  figure:has(div.status) {
    position: relative;

    div.status {
      position: absolute;
      top: 0;
      right: 0;

      border: 3px solid var(--status-color);
      color: var(--status-color);
      background-color: var(--background-color);
      padding: 0.5rem 1rem;
    }
  }
</style>
