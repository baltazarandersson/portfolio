<script lang="ts">
	import Hamburger from '@components/Icons/Hamburger.svelte'
	import { toggleDrawer } from 'src/store/drawer'
</script>

<button on:click={toggleDrawer} aria-label="drawer"><Hamburger /></button>
