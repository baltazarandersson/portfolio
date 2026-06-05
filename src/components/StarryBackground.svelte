<script lang="ts">
	import { onMount } from 'svelte'

	type Star = {
		id: number
		x: string
		y: string
		size: string
		delay: string
		translateX: string
		translateY: string
		durationX: string
		durationY: string
	}

	let isMobile: boolean | undefined
	let stars: Star[] = []

	function generateStars(count: number) {
		const nextStars: Star[] = []
		for (let i = 0; i < count; i++) {
			nextStars.push({
				id: i,
				x: Math.random() * 100 + '%',
				y: Math.random() * 100 + '%',
				size: Math.random() * 3 + 1 + 'px',
				delay: Math.random() * 4 + 's',
				translateX: (Math.random() - 0.5) * 200 + 'px',
				translateY: (Math.random() - 0.5) * 200 + 'px',
				durationX: Math.random() * 20 + 10 + 's',
				durationY: Math.random() * 20 + 10 + 's'
			})
		}

		return nextStars
	}

	onMount(() => {
		const updateStarsForViewport = () => {
			const nextIsMobile = window.innerWidth < 768

			if (nextIsMobile === isMobile) return

			isMobile = nextIsMobile
			stars = generateStars(isMobile ? 50 : 80)
		}

		updateStarsForViewport()
		window.addEventListener('resize', updateStarsForViewport)
		return () => window.removeEventListener('resize', updateStarsForViewport)
	})
</script>

<div class="starry-bg">
	{#each stars as star}
		<div
			class="star"
			style="
		      left: {star.x};
		      top: {star.y};
		      width: {star.size};
		      height: {star.size};
		      animation-delay: {star.delay};
		      --translateX: {star.translateX};
		      --translateY: {star.translateY};
		      --durationX: {star.durationX};
		      --durationY: {star.durationY};
		    "
		></div>
	{/each}
</div>

<style>
	.starry-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0;
		pointer-events: none;
	}

	.star {
		position: absolute;
		background: var(--primary-color);
		border-radius: 50%;
		animation:
			twinkle 4s infinite,
			floatX var(--durationX) infinite linear,
			floatY var(--durationY) infinite linear;
	}

	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.4;
		}
		50% {
			opacity: 0.8;
		}
	}

	@keyframes floatX {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(var(--translateX));
		}
	}

	@keyframes floatY {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(var(--translateY));
		}
	}
</style>
