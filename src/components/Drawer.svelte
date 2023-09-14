<script lang="ts">
	import { closeDrawer, drawerStore, toggleDrawer } from 'src/store/drawer'
	import { fly } from 'svelte/transition'
	import type { SectionType } from 'types/index'
	import NavSection from './NavSection.svelte'
	import { HEADER_HEIGHT } from '@constants/index'
	import SocialItem from './Socials/SocialItem.svelte'
	import GitHubIcon from './Icons/GitHubIcon.svelte'
	import LinkedInIcon from './Icons/LinkedInIcon.svelte'
	import MailIcon from './Icons/MailIcon.svelte'
	import PlatziIcon from './Icons/PlatziIcon.svelte'

	export let items: SectionType[]
	let isDrawerOpenVal: boolean

	drawerStore.subscribe((val) => {
		isDrawerOpenVal = val
	})

	let x: number

	const updateDrawer = () => {
		if (x >= 768) {
			closeDrawer()
		}
	}
</script>

<svelte:window bind:innerWidth={x} on:resize={updateDrawer} />

{#if isDrawerOpenVal}
	<div
		class={`p-layout fixed bottom-0 left-0 right-0 z-10 flex flex-col justify-between bg-zinc-100 py-10 dark:bg-zinc-900`}
		style={`top: ${HEADER_HEIGHT}px;`}
		transition:fly={{ x: 500, duration: 300 }}
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
