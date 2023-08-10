<script lang="ts">
  import Drawer from "@components/Drawer.svelte";
  import Hamburger from "@components/Icons/Hamburger.svelte";
  import {
    closeDrawer,
    drawerStore,
    openDrawer,
    toggleDrawer,
  } from "src/store/drawer";
  import { get } from "svelte/store";
</script>

<button on:click={toggleDrawer}><Hamburger /></button>
