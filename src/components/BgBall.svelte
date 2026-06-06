<script lang="ts">
	import { MOBILE_WIDTH } from '@constants/index'
	import { onMount } from 'svelte'

	let innerWidth = MOBILE_WIDTH
	let floatTimeout: ReturnType<typeof setTimeout> | undefined
	let floatInterval: ReturnType<typeof setInterval> | undefined
	let isMounted = false

	let isMobileDevice = false
	let mouseElement: HTMLDivElement | undefined

	// Autonomous ball that drifts to random spots — runs on every device.
	let floatCoords = { left: 0, top: 0 }
	// Ball that trails the cursor — desktop only, coexists with the floating one.
	let mouseCoords = { left: 0, top: 0 }

	const ballClass =
		'pointer-events-none fixed -z-50 h-64 w-64 overflow-hidden rounded-full bg-gradient-to-br from-amber-200 via-orange-200 to-red-300 opacity-50 blur-2xl dark:from-orange-500 dark:via-amber-600 dark:to-amber-400 dark:opacity-20'

	const randomCoords = () => ({
		left: Math.random() * window.innerWidth,
		top: Math.random() * window.innerHeight
	})

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
			floatCoords = randomCoords()

			floatInterval = setInterval(() => {
				floatCoords = randomCoords()
			}, 5000)
		}, 1500)
	}

	onMount(() => {
		innerWidth = window.innerWidth
		isMobileDevice = innerWidth < MOBILE_WIDTH

		const center = { left: window.innerWidth / 2, top: window.innerHeight }
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

<!-- Floating ball (all devices) -->
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
