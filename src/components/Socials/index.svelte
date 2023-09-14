<script lang="ts">
	import GitHubIcon from '@components/Icons/GitHubIcon.svelte'
	import LinkedInIcon from '@components/Icons/LinkedInIcon.svelte'
	import PlatziIcon from '@components/Icons/PlatziIcon.svelte'
	import MailIcon from '@components/Icons/MailIcon.svelte'
	import SocialItem from './SocialItem.svelte'

	export let labels: boolean = false
</script>

<ul class={$$props.class}>
	<SocialItem
		href="https://www.linkedin.com/in/baltazar-andersson"
		ariaLabel="Baltazar's linkedin link"
	>
		<div class="shrink-0">
			<LinkedInIcon />
		</div>

		{#if labels}
			<p class="hidden text-lg sm:inline md:text-xl">Baltazar Andersson</p>
		{/if}
	</SocialItem>

	<SocialItem href="mailto:baltazardevv@gmail.com" ariaLabel="Baltazar's mail link">
		<div class="shrink-0">
			<MailIcon />
		</div>

		{#if labels}
			<p class="hidden text-lg sm:inline md:text-xl">baltazardevv@gmail.com</p>
		{/if}
	</SocialItem>

	<SocialItem href="https://github.com/baltazarandersson" ariaLabel="Baltazar's github link">
		<div class="shrink-0">
			<GitHubIcon />
		</div>

		{#if labels}
			<p class="hidden text-lg sm:inline md:text-xl">@baltazarandersson</p>
		{/if}
	</SocialItem>

	<SocialItem href="https://platzi.com/p/baltazarander" ariaLabel="Baltazar's platzi profile link">
		<div class="shrink-0">
			<PlatziIcon />
		</div>

		{#if labels}
			<p class="hidden text-lg sm:inline md:text-xl">@baltazarander</p>
		{/if}
	</SocialItem>
</ul>
