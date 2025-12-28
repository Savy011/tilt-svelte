<script lang="ts">
  import type { TiltOptions } from "../../lib/index.ts";
  import tilt from "../../lib/index.ts";

  const defaultOpts: TiltOptions = {
    "reverse": false,
    "max": 15,
    "startX": 0,
    "startY": 0,
    "perspective": 1000,
    "scale": 1,
    "speed": 300,
    "transition": true,
    "axis": null,
    "reset": true,
    "reset-to-start": true,
    "easing": "cubic-bezier(.03,.98,.52,.99)",
    "glare": false,
    "max-glare": 1,
    "glare-prerender": false,
    "mouse-event-element": undefined,
    "full-page-listening": false,
    "gyroscope": true,
    "gyroscopeMinAngleX": -45,
    "gyroscopeMaxAngleX": 45,
    "gyroscopeMinAngleY": -45,
    "gyroscopeMaxAngleY": 45,
    "gyroscopeSamples": 10,
  };
  let options = $state<TiltOptions>(structuredClone(defaultOpts));
  function reset() {
    options = structuredClone(defaultOpts);
  }
</script>

<svelte:head>
  <title>Playground - Tilt Svelte</title>
</svelte:head>

<h2 id="playground">Playground</h2>

<figure>
  <div class="logo" id="logo" {@attach tilt(options)}>
    <span>tilt-svelte</span>
  </div>
</figure>

<div class="grid">
  <label>
    Max Tilt Rotation (degrees):
    <input type="number" min="0" max="360" bind:value={options.max} />
  </label>
</div>

<div class="grid">
  <label>
    Starting X tilt rotation (degrees)
    <input type="number" min="-180" max="180" bind:value={options.startX} />
  </label>
  <label>
    Starting Y tilt rotation (degrees)
    <input type="number" min="-180" max="180" bind:value={options.startY} />
  </label>
</div>

<div class="grid">
  <label>
    Scale
    <input type="number" step="0.1" min="0" bind:value={options.scale} />
  </label>
  <label>
    Transform Perspective
    <br />
    <small>the lower the more extreme the tilt gets.</small>
    <input type="number" min="0" bind:value={options.perspective} />
  </label>
</div>

<div class="grid">
  <label>
    Speed (ms)
    <br />
    <small>Transition speed for enter/exit animations</small>
    <input type="number" min="0" bind:value={options.speed} />
  </label>
  <label>
    Easing
    <br />
    <small>CSS easing function for transitions</small>
    <input type="text" bind:value={options.easing} />
  </label>
</div>

<div class="grid">
  <label>
    <input type="checkbox" bind:checked={options.reverse} />
    Reverse tilt direction
  </label>
  <label>
    <input type="checkbox" bind:checked={options.reset} />
    Reset on Mouse Exit
  </label>
</div>

<div class="grid">
  <label>
    <input type="checkbox" bind:checked={options.transition} />
    Enable Transition
  </label>
  <label>
    <input type="checkbox" bind:checked={options["reset-to-start"]} />
    Reset to Start Position
  </label>
</div>

<div class="grid">
  <label>
    Axis
    <select bind:value={options.axis}>
      <option value={null}>Both (X & Y)</option>
      <option value="x">X Only</option>
      <option value="y">Y Only</option>
    </select>
  </label>
</div>

<div class="grid">
  <label>
    <input type="checkbox" bind:checked={options.glare} />
    Enable Glare
  </label>
  {#if options.glare}
    <label>
      <input type="checkbox" bind:checked={options["glare-prerender"]} />
      Glare Prerender
    </label>
  {/if}
</div>

{#if options.glare}
  <div class="grid">
    <label>
      Max Glare Opacity
      <input
        type="number"
        step="0.1"
        min="0"
        max="1"
        bind:value={options["max-glare"]}
      />
    </label>
  </div>
{/if}

<div class="grid">
  <label>
    <input type="checkbox" bind:checked={options["full-page-listening"]} />
    Full Page Listening
    <small>Track mouse movement across the entire page</small>
  </label>
</div>

<div class="grid">
  <label>
    <input type="checkbox" bind:checked={options.gyroscope} />
    Enable Gyroscope
  </label>
</div>

{#if options.gyroscope}
  <div class="grid">
    <label>
      Gyroscope Samples
      <input type="number" min="1" bind:value={options.gyroscopeSamples} />
    </label>
  </div>
  <div class="grid">
    <label>
      Minimum X-axis angle
      <input type="number" bind:value={options.gyroscopeMinAngleX} />
    </label>
    <label>
      Maximum X-axis angle
      <input type="number" bind:value={options.gyroscopeMaxAngleX} />
    </label>
  </div>
  <div class="grid">
    <label>
      Minimum Y-axis angle
      <input type="number" bind:value={options.gyroscopeMinAngleY} />
    </label>
    <label>
      Maximum Y-axis angle
      <input type="number" bind:value={options.gyroscopeMaxAngleY} />
    </label>
  </div>
{/if}

<div class="grid">
  <button type="reset" onclick={reset}>Reset to Defaults</button>
</div>

<style>
  .logo {
    & > :global(* + *) {
      margin-top: unset;
    }

    display: block;
    margin: 6rem auto;
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
  }
</style>
