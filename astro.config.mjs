import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import { compression } from 'vite-plugin-compression2'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), svelte()],
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
	build: { minify: true },
	vite: { plugins: [compression()] }
})
