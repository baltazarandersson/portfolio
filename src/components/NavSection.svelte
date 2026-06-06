<script lang="ts">
	import { getActiveNavSection, getNavSectionId } from '@utils/getNavSection'
	import { throttle } from '@utils/throttle'
	import { closeDrawer } from 'src/store/drawer'
	import type { SectionType } from 'types/index'

	export let section: SectionType
	const sectionId = getNavSectionId(section)
	const parseSection = (section: SectionType) => section.charAt(0).toUpperCase() + section.slice(1)
	const isExternalSection = section === 'blog'

	export let label: string = parseSection(section)

	let activeSectionId: string | undefined

	const updateActiveSection = throttle(() => {
		if (typeof document !== 'undefined') {
			activeSectionId = getActiveNavSection()?.getAttribute('id') ?? undefined
		}
	})

	updateActiveSection()
</script>

<svelte:window on:scroll={updateActiveSection} on:resize={updateActiveSection} />

<a
	on:click={closeDrawer}
	href={isExternalSection ? '/blog/' : `/#${section}`}
	aria-current={activeSectionId === sectionId ? 'location' : undefined}
	class={`rounded-sm text-lg decoration-transparent transition hover:text-orange-500 hover:decoration-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:hover:text-orange-400 dark:focus-visible:ring-orange-400 dark:focus-visible:ring-offset-zinc-900 ${
		activeSectionId === sectionId ? 'text-orange-500 dark:text-orange-400' : 'underline'
	}`}
	id={sectionId}
>
	{label}
</a>
