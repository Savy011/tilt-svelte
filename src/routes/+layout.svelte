<script lang="ts">
  import { resolve } from "$app/paths";
  import "@fontsource-variable/jetbrains-mono";
  import "../reset.css";
  import "../app.css";

  let scrollY = $state(0);
  const visible = $derived(scrollY >= 500);

  function onclick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const { data, children } = $props();

  const meta = {
    title: "Tilt Svelte",
    description: "Documentation for @savy011/tilt-svelte",
  };
</script>

<svelte:head>
  <meta name="title" content={meta.title} />
  <meta name="description" content={meta.description} />
  <meta
    name="keywords"
    content="npm, jsr, @savy011/tilt-svelte, typescript, svelte, svelte-5, svelte-attachement"
  />
  <meta name="author" content="Savy" />

  <meta name="npm-package" content={import.meta.env.PKG_NAME} />
  <meta name="repository" content="https://github.com/Savy011/tilt-svelte" />
  <link rel="me" href="https://github.com/Savy011" />

  <meta name="license" content={import.meta.env.PKG_LICENSE} />
  <meta name="version" content={import.meta.env.PKG_VERSION} />

  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />
  <meta
    property="og:image"
    content="https://savy011.github.io/tilt-svelte/og-image.png"
  />
  <meta property="og:url" content="https://savy011.github.io/tilt-svelte" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  <meta
    name="twitter:image"
    content="https://savy011.github.io/tilt-svelte/og-image.png"
  />

  <link rel="canonical" href="https://savy011.github.io/tilt-svelte" />

  <meta name="theme-color" content="#ffffff" />

  <link rel="preconnect" href="https://fonts.cdnfonts.com" />
</svelte:head>

<svelte:window bind:scrollY />

<table class="header">
  <tbody>
    <tr>
      <td colspan="2" rowspan="2" class="width-auto">
        <h1 class="title">
          <a href={resolve("/")}>Tilt Svelte</a>
        </h1>
        <span class="subtitle">A smooth 3D tilt Svelte Attachment</span>
      </td>
      <th>Version</th>
      <td class="width-min">v{import.meta.env.PKG_VERSION}</td>
    </tr>
    <tr>
      <th>Updated</th>
      <td class="width-min">
        <time style="white-space: pre;">
          {data.build_date}
        </time>
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

  :global(h3::before),
  :global(h4::before),
  :global(h5::before),
  :global(h6::before) {
    content: "# ";
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
