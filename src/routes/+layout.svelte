<script lang="ts">
  import "@owickstrom/the-monospace-web";

  let scrollY = $state(0);
  const visible = $derived(scrollY >= 500);

  function onclick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const { children } = $props();
</script>

<svelte:window bind:scrollY />

<table class="header">
  <tbody>
    <tr>
      <td colspan="2" rowspan="2" class="width-auto">
        <h1 class="title">Tilt Svelte</h1>
        <span class="subtitle">A smooth 3D tilt Svelte Attachment</span>
      </td>
      <th>Version</th>
      <td class="width-min">v{import.meta.env.PKG_VERSION}</td>
    </tr>
    <tr>
      <th>Updated</th>
      <td class="width-min">
        <time style="white-space: pre;">2025-12-27</time>
      </td>
    </tr>
    <tr>
      <th class="width-min">Author</th>
      <td class="width-auto">
        <a href="https://yvas.me" target="_blank" rel="noreferrer noopener">
          Savy
        </a>
      </td>
      <th class="width-min">License</th>
      <td>{import.meta.env.PKG_LICENSE}</td>
    </tr>
  </tbody>
</table>

{@render children()}

<hr />

<footer>
  Made by
  <a href="https://yvas.me" target="_blank" rel="noreferrer noopener"> Savy </a>
</footer>

<button {onclick} class:visible>&uarr;</button>

<style>
  :global(li) {
    margin-bottom: 0.5rem;
  }

  :global(pre) {
    border: var(--border-thickness) solid var(--text-color-alt);
    padding: 0.5rem;
    background-color: var(--background-color-alt);
  }

  :global(a[href^="http"]::after) {
    content: "↗" / ", external";
  }

  button {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 200ms ease-out;
    width: 40px;
    height: 40px;

    &.visible {
      opacity: 1;
      pointer-events: auto;
    }
  }
</style>
