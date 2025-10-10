<script>
	import { onMount } from 'svelte'

	let isMobile = false
	let stars = []

	function generateStars(count) {
		stars = []
		for (let i = 0; i < count; i++) {
			stars.push({
				id: i,
				x: Math.random() * 100 + '%',
				y: Math.random() * 100 + '%',
				size: Math.random() * 3 + 1 + 'px', // 1-4px
				delay: Math.random() * 4 + 's', // Random delay up to 4s
				translateX: (Math.random() - 0.5) * 200 + 'px', // -100 to 100px
				translateY: (Math.random() - 0.5) * 200 + 'px',
				durationX: Math.random() * 20 + 10 + 's', // 10-30s
				durationY: Math.random() * 20 + 10 + 's'
			})
		}
	}

	onMount(() => {
		const updateMobile = () => {
			isMobile = window.innerWidth < 768
		}
		updateMobile()
		window.addEventListener('resize', updateMobile)
		return () => window.removeEventListener('resize', updateMobile)
	})

	// Reactive statement to update stars when isMobile changes
	$: if (isMobile !== undefined) {
		generateStars(isMobile ? 50 : 80)
	}
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
