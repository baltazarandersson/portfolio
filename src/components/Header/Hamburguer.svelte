<script lang="ts">
	import HamburgerIcon from '@components/Icons/HamburgerIcon.svelte'
	import { toggleDrawer } from 'src/store/drawer'
</script>

<button on:click={toggleDrawer} aria-label="drawer"><HamburgerIcon /></button>
