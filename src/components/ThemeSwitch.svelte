<script>
	import { toggleCurrentTheme, getCurrentTheme } from '@utils/theme'
	import SunIcon from './Icons/SunIcon.svelte'
	import MoonIcon from './Icons/MoonIcon.svelte'

	let theme = getCurrentTheme()

	const handleClick = () => {
		toggleCurrentTheme()

		theme = getCurrentTheme()
	}
</script>

<button
	type="button"
	class="rounded-full transition-transform hover:rotate-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:focus-visible:ring-orange-400 dark:focus-visible:ring-offset-zinc-900"
	on:click={handleClick}
	aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
	aria-pressed={theme === 'dark'}
>
	{#if theme === 'dark'}
		<SunIcon />
	{:else}
		<MoonIcon />
	{/if}
</button>
