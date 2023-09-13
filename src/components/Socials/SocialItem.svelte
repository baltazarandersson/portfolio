<script lang="ts">
	export let href: string
	export let size: 'sm' | 'md' = 'md'

	const SIZES = {
		sm: 'px-4 py-2',
		md: 'px-8 py-4'
	}
</script>

<li
	class="list-none rounded-lg bg-zinc-400/10 backdrop-blur-3xl transition-all duration-200 hover:scale-105 hover:bg-amber-600/10 hover:text-orange-500 dark:bg-zinc-200/10 dark:hover:bg-amber-400/10 dark:hover:text-orange-400"
>
	<a
		{href}
		target="_blank"
		rel="noreferrer"
		class={`flex items-start justify-center gap-4 ${SIZES[size]}`}><slot /></a
	>
</li>
