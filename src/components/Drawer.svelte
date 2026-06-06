<script lang="ts">
	import { closeDrawer, drawerStore } from 'src/store/drawer'
	import type { SectionType } from 'types/index'
	import NavSection from './NavSection.svelte'
	import { HEADER_HEIGHT } from '@constants/index'
	import SocialItem from './Socials/SocialItem.svelte'
	import GitHubIcon from './Icons/GitHubIcon.svelte'
	import LinkedInIcon from './Icons/LinkedInIcon.svelte'
	import MailIcon from './Icons/MailIcon.svelte'
	import PlatziIcon from './Icons/PlatziIcon.svelte'
	import { onDestroy } from 'svelte'

	export let items: SectionType[]
	let isDrawerOpenVal: boolean

	const unsubscribeDrawer = drawerStore.subscribe((val) => {
		isDrawerOpenVal = val
	})

	onDestroy(unsubscribeDrawer)

	let x: number

	const updateDrawer = () => {
		if (x >= 768) {
			closeDrawer()
		}
	}

	const slideDrawer = (_node: Element, { x = 500, duration = 300 } = {}) => ({
		duration,
		css: (t: number, u: number) => `transform: translateX(${u * x}px); opacity: ${t};`
	})
</script>

<svelte:window bind:innerWidth={x} on:resize={updateDrawer} />

{#if isDrawerOpenVal}
	<div
		class={`p-layout fixed bottom-0 left-0 right-0 z-40 flex flex-col justify-between bg-surface py-10 dark:bg-zinc-900`}
		style={`top: ${HEADER_HEIGHT}px;`}
		transition:slideDrawer={{ x: 500, duration: 300 }}
	>
		<ul class="flex flex-col items-end gap-8">
			{#each items as item}
				<li>
					<NavSection section={item} />
				</li>
			{/each}
		</ul>
		<ul class="flex w-full justify-between">
			<SocialItem size="sm" href="https://www.linkedin.com/in/baltazar-andersson">
				<LinkedInIcon />
			</SocialItem>

			<SocialItem size="sm" href="mailto:baltazardevv@gmail.com">
				<MailIcon />
			</SocialItem>

			<SocialItem size="sm" href="https://github.com/baltazarandersson">
				<GitHubIcon />
			</SocialItem>

			<SocialItem size="sm" href="https://platzi.com/p/baltazarander">
				<PlatziIcon />
			</SocialItem>
		</ul>
	</div>
{/if}
