<script lang="ts">
	import { getActiveNavSection } from '@utils/getNavSection'
	import { throttle } from '@utils/throttle'
	import { drawerStore } from 'src/store/drawer'

	let barWidth = 0
	let barLeft = 0
	let activeNavEl: Element

	function updateActiveNavEl() {
		activeNavEl = getActiveNavSection()
	}

	function updateNavBar(): void {
		if (activeNavEl) {
			const { width, left } = activeNavEl.getBoundingClientRect()

			barLeft = Math.floor(left)
			barWidth = Math.floor(width)
		}
	}

	const handleUpdateNav = throttle(() => {
		updateActiveNavEl()
		updateNavBar()
	}, 300)

	handleUpdateNav()

	drawerStore.subscribe(handleUpdateNav)
</script>

<svelte:window on:scroll={handleUpdateNav} on:resize={handleUpdateNav} />

<div
	style="--width:{barWidth}px; --left:{barLeft}px;"
	class="absolute bottom-0 hidden h-1 w-40 rounded-t-sm bg-orange-500 duration-150 dark:bg-orange-400 sm:block"
/>

<style>
	div {
		width: var(--width);
		left: var(--left);
	}
</style>
