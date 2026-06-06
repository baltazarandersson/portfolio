import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
	site: 'https://baltazar.vercel.app',
	integrations: [tailwind(), svelte()],
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
	build: { minify: true }
})
