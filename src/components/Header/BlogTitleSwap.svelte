<script lang="ts">
	import { onMount } from 'svelte'
	import { HEADER_TITLE, HEADER_HEIGHT } from '@constants/index'
	import ArrowLeftIcon from '@components/Icons/ArrowLeftIcon.svelte'

	export let backLabel = 'Back to blog'
	export let backHref = '/blog/'
	export let homeHref = '/'

	let showBack = false
	let observer: IntersectionObserver | null = null

	const disconnect = () => {
		observer?.disconnect()
		observer = null
	}

	const observe = () => {
		disconnect()
		showBack = false

		const target = document.querySelector('[data-article-back]')
		if (!target) return

		observer = new IntersectionObserver(
			([entry]) => {
				// Hidden once the in-article back link slips under the fixed header.
				showBack = !entry.isIntersecting
			},
			{ rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`, threshold: 0 }
		)
		observer.observe(target)
	}

	onMount(() => {
		observe()
		// Re-bind across view transitions (the header island may persist).
		document.addEventListener('astro:page-load', observe)
		document.addEventListener('astro:before-swap', disconnect)

		return () => {
			disconnect()
			document.removeEventListener('astro:page-load', observe)
			document.removeEventListener('astro:before-swap', disconnect)
		}
	})
</script>

<div class="relative grid text-lg font-heming">
	<a
		href={homeHref}
		class="col-start-1 row-start-1 rounded-sm transition-opacity duration-200 hover:text-orange-500 motion-reduce:transition-none dark:hover:text-orange-400"
		class:pointer-events-none={showBack}
		style:opacity={showBack ? 0 : 1}
		aria-hidden={showBack}
		tabindex={showBack ? -1 : 0}
	>
		{HEADER_TITLE}
	</a>
	<a
		href={backHref}
		aria-label={backLabel}
		class="col-start-1 row-start-1 flex items-center gap-1.5 rounded-sm transition-[opacity,color] duration-200 hover:text-orange-500 active:text-orange-500 motion-reduce:transition-none dark:hover:text-orange-400 dark:active:text-orange-400"
		class:pointer-events-none={!showBack}
		style:opacity={showBack ? 1 : 0}
		aria-hidden={!showBack}
		tabindex={showBack ? 0 : -1}
	>
		<ArrowLeftIcon class="h-4 w-4 shrink-0" aria-hidden="true" />
		<span>{backLabel}</span>
	</a>
</div>
