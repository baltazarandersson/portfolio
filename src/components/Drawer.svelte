<script lang="ts">
  import { drawerStore, toggleDrawer } from "src/store/drawer";
  import { fly } from "svelte/transition";
  import type { SectionType } from "types/index";
  import NavSection from "./NavSection.svelte";
  import { HEADER_HEIGHT } from "@constants/index";

  export let items: SectionType[];
  let isDrawerOpenVal: boolean;

  drawerStore.subscribe((val) => {
    isDrawerOpenVal = val;
  });
</script>

{#if isDrawerOpenVal}
  <div
    class={`absolute z-50 w-screen bg-zinc-100 dark:bg-zinc-900 flex flex-col justify-start items-end gap-8 py-10 left-0 p-layout`}
    style={`top: ${HEADER_HEIGHT}px; height: calc(100vh - ${HEADER_HEIGHT}px);`}
    transition:fly={{ x: 500, duration: 300 }}
  >
    {#each items as item}
      <NavSection section={item} />
    {/each}
  </div>
{/if}
