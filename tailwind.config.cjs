/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				focus: 'rgb(var(--color-focus) / <alpha-value>)',
				foreground: 'rgb(var(--color-text) / <alpha-value>)',
				muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
				border: 'rgb(var(--color-border) / <alpha-value>)',
				surface: {
					DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
					muted: 'rgb(var(--color-surface-muted) / <alpha-value>)',
					elevated: 'rgb(var(--color-surface-elevated) / <alpha-value>)'
				}
			},
			fontFamily: {
				heming: ['Heming Variable', 'ui-monospace', 'monospace'],
				helvetica: ['Helvetica Light', 'ui-monospace', 'monospace']
			}
		}
	},
	plugins: []
}
