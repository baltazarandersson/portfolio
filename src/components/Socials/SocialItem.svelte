<script lang="ts">
	export let href: string
	export let size: 'sm' | 'md' = 'md'
	export let ariaLabel: string = ''

	const SIZES = {
		sm: 'px-4 py-2',
		md: 'px-8 py-4'
	}

	const getFallbackAriaLabel = (link: string) => {
		if (link.startsWith('mailto:')) return `Email ${link.replace('mailto:', '')}`

		try {
			const url = new URL(link)
			const host = url.hostname.replace(/^www\./, '')
			const profile = url.pathname.split('/').filter(Boolean).at(-1)

			if (host.includes('linkedin.com')) return `Open LinkedIn profile ${profile ?? ''}`.trim()
			if (host.includes('github.com')) return `Open GitHub profile ${profile ?? ''}`.trim()
			if (host.includes('platzi.com')) return `Open Platzi profile ${profile ?? ''}`.trim()

			return `Open ${host}`
		} catch {
			return 'Open link'
		}
	}

	$: linkAriaLabel = ariaLabel || getFallbackAriaLabel(href)
</script>

<li
	class="list-none rounded-lg bg-zinc-400/10 backdrop-blur-3xl transition-all duration-200 hover:scale-105 hover:bg-amber-600/10 hover:text-orange-500 dark:bg-zinc-200/10 dark:hover:bg-amber-400/10 dark:hover:text-orange-400"
>
	<a
		{href}
		aria-label={linkAriaLabel}
		target="_blank"
		rel="noopener noreferrer"
		class={`flex items-start justify-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:focus-visible:ring-orange-400 dark:focus-visible:ring-offset-zinc-900 ${SIZES[size]}`}
		><slot /></a
	>
</li>
