<script>
	import { onMount } from 'svelte'
	import LinkedInIcon from '../Icons/LinkedInIcon.svelte'

	export let url = ''
	export let title = ''
	export let lang = 'en'

	const labels = {
		en: { copy: 'Copy link', copied: 'Link copied', share: 'Share', linkedin: 'Share on LinkedIn' },
		es: {
			copy: 'Copiar enlace',
			copied: 'Enlace copiado',
			share: 'Compartir',
			linkedin: 'Compartir en LinkedIn'
		}
	}

	$: t = labels[lang] ?? labels.en
	$: linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

	let copied = false
	let canNativeShare = false
	let resetTimer

	onMount(() => {
		canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'
		return () => clearTimeout(resetTimer)
	})

	const handleShare = async () => {
		if (canNativeShare) {
			try {
				await navigator.share({ title, url })
				return
			} catch (error) {
				if (error?.name === 'AbortError') return
			}
		}

		try {
			await navigator.clipboard.writeText(url)
			copied = true
			clearTimeout(resetTimer)
			resetTimer = setTimeout(() => (copied = false), 2000)
		} catch {
			// Clipboard unavailable (e.g. insecure context); nothing else to do.
		}
	}
</script>

<div class="flex items-center gap-3 [&_svg]:h-[18px] [&_svg]:w-[18px]">
	<a
		href={linkedInUrl}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={t.linkedin}
		class="inline-flex transition hover:text-primary"
	>
		<LinkedInIcon />
	</a>
	<button
		type="button"
		on:click={handleShare}
		aria-label={canNativeShare ? t.share : copied ? t.copied : t.copy}
		class="inline-flex items-center gap-1.5 transition hover:text-primary"
	>
		{#if copied}
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg
			>
			<span>{t.copied}</span>
		{:else}
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
				><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path
					d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
				/></svg
			>
		{/if}
	</button>
</div>
