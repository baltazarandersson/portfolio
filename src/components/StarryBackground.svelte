<script lang="ts">
	import { onMount } from 'svelte'

	type Star = {
		// Base position as a fraction of the viewport (0..1), kept resolution-independent.
		bx: number
		by: number
		size: number
		// Sinusoidal drift around the base position.
		driftAmpX: number
		driftAmpY: number
		driftSpeedX: number
		driftSpeedY: number
		driftPhaseX: number
		driftPhaseY: number
		// Opacity twinkle.
		twinkleSpeed: number
		twinklePhase: number
	}

	type Orb = { x: number; y: number; r: number }

	const STAR_COUNT_DESKTOP = 80
	const STAR_COUNT_MOBILE = 50
	const MOBILE_BREAKPOINT = 768

	// Glass-orb lens tuning. An orb of influence-radius `r` magnifies the starfield
	// around it: stars bulge outward along a fisheye curve and brighten/grow, so they
	// appear to wrap the surface of a 3D body rather than slide flat across it.
	const LENS_RADIUS_SCALE = 0.95 // influence radius = orb width * this
	const LENS_STRENGTH = 0.4 // how far stars push outward (0..1)
	const LENS_POWER = 0.7 // fisheye exponent (<1 magnifies/bulges)
	const LENS_BRIGHTEN = 0.35 // extra opacity at the orb centre
	const LENS_GROW = 0.5 // extra size multiplier at the orb centre

	let canvas: HTMLCanvasElement

	onMount(() => {
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

		let stars: Star[] = []
		let width = 0
		let height = 0
		let isMobile = window.innerWidth < MOBILE_BREAKPOINT
		let rafId = 0
		let [cr, cg, cb] = readStarColor()

		function readStarColor(): [number, number, number] {
			const raw = getComputedStyle(document.documentElement)
				.getPropertyValue('--color-primary')
				.trim()
			const parts = raw.split(/\s+/).map(Number)
			if (parts.length === 3 && parts.every((n) => !Number.isNaN(n))) {
				return [parts[0], parts[1], parts[2]]
			}
			return [217, 119, 6]
		}

		function generateStars(count: number): Star[] {
			const next: Star[] = []
			for (let i = 0; i < count; i++) {
				next.push({
					bx: Math.random(),
					by: Math.random(),
					size: Math.random() * 2 + 1,
					driftAmpX: Math.random() * 60 + 20,
					driftAmpY: Math.random() * 60 + 20,
					driftSpeedX: Math.random() * 0.12 + 0.04,
					driftSpeedY: Math.random() * 0.12 + 0.04,
					driftPhaseX: Math.random() * Math.PI * 2,
					driftPhaseY: Math.random() * Math.PI * 2,
					twinkleSpeed: Math.random() * 0.8 + 0.6,
					twinklePhase: Math.random() * Math.PI * 2
				})
			}
			return next
		}

		function resize() {
			width = window.innerWidth
			height = window.innerHeight
			const dpr = Math.min(window.devicePixelRatio || 1, 2)
			canvas.width = Math.floor(width * dpr)
			canvas.height = Math.floor(height * dpr)
			canvas.style.width = `${width}px`
			canvas.style.height = `${height}px`
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
		}

		function setupStars() {
			isMobile = window.innerWidth < MOBILE_BREAKPOINT
			stars = generateStars(isMobile ? STAR_COUNT_MOBILE : STAR_COUNT_DESKTOP)
		}

		// Read the orbs' live on-screen position straight from the DOM so we track the
		// CSS transition (float) and spin without coupling to BgBall's internal state.
		// Centre comes from the transformed box; radius from offsetWidth, which the
		// spin's rotating bounding box would otherwise make pulse.
		function readOrbs(): Orb[] {
			const els = document.querySelectorAll<HTMLElement>('[data-orb]')
			const orbs: Orb[] = []
			els.forEach((el) => {
				const rect = el.getBoundingClientRect()
				orbs.push({
					x: rect.left + rect.width / 2,
					y: rect.top + rect.height / 2,
					r: el.offsetWidth * LENS_RADIUS_SCALE
				})
			})
			return orbs
		}

		function draw(timeSec: number, orbs: Orb[]) {
			ctx.clearRect(0, 0, width, height)

			for (const s of stars) {
				let px = s.bx * width
				let py = s.by * height
				let opacity = 0.6
				let sizeMul = 1

				if (!prefersReduced) {
					px += Math.sin(timeSec * s.driftSpeedX + s.driftPhaseX) * s.driftAmpX
					py += Math.cos(timeSec * s.driftSpeedY + s.driftPhaseY) * s.driftAmpY
					opacity = 0.5 + 0.3 * Math.sin(timeSec * s.twinkleSpeed + s.twinklePhase)
				}

				// Accumulate the lens distortion of every orb from the star's base position.
				let dispX = 0
				let dispY = 0
				for (const orb of orbs) {
					const dx = px - orb.x
					const dy = py - orb.y
					const d = Math.hypot(dx, dy)
					if (d > 0 && d < orb.r) {
						const r = d / orb.r
						const newD = orb.r * Math.pow(r, LENS_POWER)
						const move = (newD - d) * LENS_STRENGTH
						const inv = 1 / d
						dispX += dx * inv * move
						dispY += dy * inv * move
						const t = 1 - r
						opacity += LENS_BRIGHTEN * t
						sizeMul += LENS_GROW * t
					}
				}

				px += dispX
				py += dispY
				opacity = Math.max(0, Math.min(1, opacity))

				ctx.beginPath()
				ctx.arc(px, py, (s.size * sizeMul) / 2, 0, Math.PI * 2)
				ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${opacity})`
				ctx.fill()
			}
		}

		function frame(now: number) {
			draw(now / 1000, readOrbs())
			rafId = requestAnimationFrame(frame)
		}

		const onResize = () => {
			const wasMobile = isMobile
			resize()
			if (window.innerWidth < MOBILE_BREAKPOINT !== wasMobile) setupStars()
			if (prefersReduced) draw(0, readOrbs())
		}

		// Restyle stars when the colour scheme flips (theme toggles <html>'s class).
		const themeObserver = new MutationObserver(() => {
			;[cr, cg, cb] = readStarColor()
			if (prefersReduced) draw(0, readOrbs())
		})
		themeObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		})

		resize()
		setupStars()
		window.addEventListener('resize', onResize)

		if (prefersReduced) {
			draw(0, readOrbs())
		} else {
			rafId = requestAnimationFrame(frame)
		}

		return () => {
			cancelAnimationFrame(rafId)
			window.removeEventListener('resize', onResize)
			themeObserver.disconnect()
		}
	})
</script>

<canvas bind:this={canvas} class="starry-bg"></canvas>

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
</style>
