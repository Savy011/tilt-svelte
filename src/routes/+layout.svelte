<script lang="ts">
  import "@owickstrom/the-monospace-web";

  const { children } = $props();
</script>

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
        <a href="https://yvas.me"><cite>Savy</cite></a>
      </td>
      <th class="width-min">License</th>
      <td>{import.meta.env.PKG_LICENSE}</td>
    </tr>
  </tbody>
</table>

{@render children()}

<footer>Made by Savy</footer>

<style>
  :global(li) {
    margin-bottom: 0.5rem;
  }

  :global(pre) {
    border: var(--border-thickness) solid var(--text-color-alt);
    padding: 0.5rem;
    background-color: var(--background-color-alt);
  }
</style>
