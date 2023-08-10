<script lang="ts">
  import { getActiveNavSection } from "@utils/getNavSection";
  import { throttle } from "@utils/throttle";
  import { drawerStore } from "src/store/drawer";

  let barWidth = 0;
  let barLeft = 0;
  let prevActiveNavEl: Element;
  let activeNavEl: Element;

  const activeElTextColor = "text-orange-400";

  function updateActiveNavEl() {
    activeNavEl = getActiveNavSection();
  }

  function updateNavBar(): void {
    if (activeNavEl) {
      const { width, left } = activeNavEl.getBoundingClientRect();

      barLeft = Math.floor(left);
      barWidth = Math.floor(width);
    }
  }

  const handleUpdateNav = throttle(() => {
    updateActiveNavEl();
    updateNavBar();
  }, 300);

  $: if (prevActiveNavEl !== activeNavEl) {
    prevActiveNavEl = activeNavEl;
  }

  handleUpdateNav();

  drawerStore.subscribe(handleUpdateNav);
</script>

<svelte:window on:scroll={handleUpdateNav} on:resize={handleUpdateNav} />

<div
  style="--width:{barWidth}px; --left:{barLeft}px;"
  class="absolute bottom-0 hidden w-40 h-1 duration-150 bg-orange-400 rounded-t-sm sm:block"
/>

<style>
  div {
    width: var(--width);
    left: var(--left);
  }
</style>
