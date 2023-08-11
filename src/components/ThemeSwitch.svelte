<script>
  import { toggleCurrentTheme, getCurrentTheme } from "@utils/theme";
  import SunIcon from "./Icons/SunIcon.svelte";
  import MoonIcon from "./Icons/MoonIcon.svelte";

  let theme = getCurrentTheme();

  const handleClick = () => {
    toggleCurrentTheme();

    theme = getCurrentTheme();
  };
</script>

<button
  class="transition-transform hover:rotate-12"
  on:click={handleClick}
  aria-label="switch-theme"
>
  {#if theme === "dark"}
    <SunIcon />
  {:else}
    <MoonIcon />
  {/if}
</button>
