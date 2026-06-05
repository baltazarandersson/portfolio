<script lang="ts">
	import { MOBILE_WIDTH } from '@constants/index'
	import { onMount } from 'svelte'

	let innerWidth = MOBILE_WIDTH
	let mobileTimeout: ReturnType<typeof setTimeout> | undefined
	let mobileInterval: ReturnType<typeof setInterval> | undefined
	let isMounted = false

	const getCoords = () => ({
		left: Math.random() * window.innerWidth,
		top: Math.random() * window.innerHeight
	})

	let coords = { left: 0, top: 0 }
	let isMobileDevice = false
	let divElement: HTMLDivElement | undefined

	const updateCoords = ({ x, y }: { x?: number; y?: number } = {}) => {
		if (x !== undefined && y !== undefined) {
			coords = { left: x, top: y }
		} else {
			coords = getCoords()
		}
	}

	const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
		if (isMobileDevice || !divElement) return

		updateCoords({
			x: clientX + divElement.clientWidth / 2,
			y: clientY + divElement.clientHeight / 2
		})
	}

	const stopMobileAnimation = () => {
		if (mobileTimeout) clearTimeout(mobileTimeout)
		if (mobileInterval) clearInterval(mobileInterval)
		mobileTimeout = undefined
		mobileInterval = undefined
	}

	const startMobileAnimation = () => {
		stopMobileAnimation()

		mobileTimeout = setTimeout(() => {
			updateCoords()

			mobileInterval = setInterval(() => {
				if (isMobileDevice) updateCoords()
			}, 5000)
		}, 1500)
	}

	onMount(() => {
		innerWidth = window.innerWidth
		coords = { left: window.innerWidth / 2, top: window.innerHeight }
		isMobileDevice = innerWidth < MOBILE_WIDTH

		if (isMobileDevice) {
			startMobileAnimation()
		} else {
			updateCoords()
		}

		isMounted = true

		return stopMobileAnimation
	})

	$: if (isMounted) {
		const nextIsMobileDevice = innerWidth < MOBILE_WIDTH

		if (nextIsMobileDevice !== isMobileDevice) {
			isMobileDevice = nextIsMobileDevice

			if (isMobileDevice) {
				startMobileAnimation()
			} else {
				stopMobileAnimation()
				updateCoords()
			}
		}
	}
</script>

<svelte:window on:mousemove={handleMouseMove} bind:innerWidth />

<div
	bind:this={divElement}
	style="--left:{coords.left}px; --top:{coords.top}px; transition:{isMobileDevice
		? 'left 5s ease-in-out, top 5s ease-in-out'
		: ''}"
	class="pointer-events-none fixed -z-50 h-64 w-64 overflow-hidden rounded-full bg-gradient-to-br from-amber-200 via-orange-200 to-red-300 opacity-50 blur-2xl dark:from-orange-500 dark:via-amber-600 dark:to-amber-400 dark:opacity-20"
/>

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
