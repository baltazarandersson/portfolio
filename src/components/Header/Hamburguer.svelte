<script lang="ts">
	import HamburgerIcon from '@components/Icons/HamburgerIcon.svelte'
	import { drawerStore, toggleDrawer } from 'src/store/drawer'
</script>

<button
	type="button"
	on:click={toggleDrawer}
	aria-label={$drawerStore ? 'Close navigation menu' : 'Open navigation menu'}
	aria-expanded={$drawerStore}
	class="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:focus-visible:ring-orange-400 dark:focus-visible:ring-offset-zinc-900"
>
	<HamburgerIcon />
</button>
