<script lang="ts">
	import { MOBILE_WIDTH } from '@constants/index'
	import { onMount } from 'svelte'

	let innerWidth = MOBILE_WIDTH
	let floatTimeout: ReturnType<typeof setTimeout> | undefined
	let floatInterval: ReturnType<typeof setInterval> | undefined
	let isMounted = false

	let isMobileDevice = false
	let mouseElement: HTMLDivElement | undefined

	// Ambient ball — drifts around the bottom-center of the viewport.
	let floatCoords = {
		left: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
		top: typeof window !== 'undefined' ? window.innerHeight : 0
	}
	// Ball that trails the cursor — desktop only.
	let mouseCoords = {
		left: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
		top: typeof window !== 'undefined' ? window.innerHeight : 0
	}

	const ballClass =
		'pointer-events-none fixed -z-50 h-64 w-64 overflow-hidden rounded-full bg-gradient-to-br from-amber-200 via-orange-200 to-red-300 opacity-50 blur-2xl dark:from-orange-500 dark:via-amber-600 dark:to-amber-400 dark:opacity-20'

	// Constrain drift to the bottom-center area so the ball never floats off-screen.
	const getRandomCoords = () => {
		const w = window.innerWidth
		const h = window.innerHeight
		return {
			left: w / 2 + (Math.random() - 0.5) * w * 0.8,
			top: h * 0.55 + Math.random() * h * 0.45
		}
	}

	const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
		if (isMobileDevice || !mouseElement) return

		mouseCoords = {
			left: clientX + mouseElement.clientWidth / 2,
			top: clientY + mouseElement.clientHeight / 2
		}
	}

	const stopFloatAnimation = () => {
		if (floatTimeout) clearTimeout(floatTimeout)
		if (floatInterval) clearInterval(floatInterval)
		floatTimeout = undefined
		floatInterval = undefined
	}

	const startFloatAnimation = () => {
		stopFloatAnimation()

		floatTimeout = setTimeout(() => {
			floatCoords = getRandomCoords()

			floatInterval = setInterval(() => {
				floatCoords = getRandomCoords()
			}, 5000)
		}, 1500)
	}

	onMount(() => {
		innerWidth = window.innerWidth
		isMobileDevice = innerWidth < MOBILE_WIDTH

		const center = {
			left: window.innerWidth / 2,
			top: window.innerHeight
		}
		floatCoords = center
		mouseCoords = center

		startFloatAnimation()

		isMounted = true

		return stopFloatAnimation
	})

	$: if (isMounted) {
		isMobileDevice = innerWidth < MOBILE_WIDTH
	}
</script>

<svelte:window on:mousemove={handleMouseMove} bind:innerWidth />

<!-- Ambient ball (all devices) — always anchored to bottom center -->
<!-- data-orb lets StarryBackground read this orb's live position to bend nearby stars. -->
<div
	data-orb
	style="--left:{floatCoords.left}px; --top:{floatCoords.top}px; transition: left 5s ease-in-out, top 5s ease-in-out;"
	class={ballClass}
/>

<!-- Cursor ball (desktop only) -->
{#if !isMobileDevice}
	<div
		data-orb
		bind:this={mouseElement}
		style="--left:{mouseCoords.left}px; --top:{mouseCoords.top}px;"
		class={ballClass}
	/>
{/if}

<style>
	@keyframes spin {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	div {
		animation: spin 10s linear infinite;
		left: var(--left);
		top: var(--top);
	}
</style>
