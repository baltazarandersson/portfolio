import type { TagKeys, TagType } from 'types/tags'

const jsIcon = '/images/icons/javascript.svg'
const reactIcon = '/images/icons/react.svg'
const styledComponentsIcon = '/images/icons/styled-components.png'
const tailwindIcon = '/images/icons/tailwind.svg'
const vercelIcon = '/images/icons/vercel.svg'
const firebaseIcon = '/images/icons/firebase.svg'
const reduxIcon = '/images/icons/redux.svg'
const nextIcon = '/images/icons/next.svg'
const cypressIcon = '/images/icons/cypress.svg'
const typescriptIcon = '/images/icons/typescript.svg'
const astroIcon = '/images/icons/astro.svg'
const astroIconDark = '/images/icons/astro-dark.svg'
const svelteIcon = '/images/icons/svelte.svg'
const gitIcon = '/images/icons/git.svg'
const nodeIcon = '/images/icons/nodejs.svg'
const nestjsIcon = '/images/icons/nestjs.svg'
const dockerIcon = '/images/icons/docker.svg'
const databaseIcon = '/images/icons/database.svg'
const opencodeIcon = '/images/icons/opencode.svg'
const codexIcon = '/images/icons/codex.svg'
const claudeIcon = '/images/icons/claude.svg'
const kiloCodeIcon = '/images/icons/kilocode.svg'

const tags: Record<TagKeys, TagType> = {
	react: {
		title: 'React',
		alt: 'react',
		icon: reactIcon,
		source: 'https://es.reactjs.org/'
	},
	styled_components: {
		title: 'styled-components',
		alt: 'styled-components',
		icon: styledComponentsIcon,
		source: 'https://styled-components.com/'
	},
	tailwind: {
		title: 'Tailwind.css',
		alt: 'tailwind',
		icon: tailwindIcon,
		source: 'https://tailwindcss.com/'
	},
	vercel: {
		title: 'Vercel',
		alt: 'vercel',
		icon: vercelIcon,
		iconClass: 'dark:invert',
		source: 'https://vercel.com/'
	},
	firebase: {
		title: 'Firebase',
		alt: 'firebase',
		icon: firebaseIcon,
		source: 'https://firebase.google.com/'
	},
	redux: {
		title: 'Redux',
		alt: 'redux',
		icon: reduxIcon,
		source: 'https://es.redux.js.org/'
	},
	next: {
		title: 'Next.js',
		alt: 'next',
		icon: nextIcon,
		iconClass: 'dark:invert',
		source: 'https://nextjs.org/'
	},
	cypress: {
		title: 'Cypress',
		alt: 'cypress',
		icon: cypressIcon,
		iconClass: 'dark:invert',
		source: 'https://www.cypress.io/'
	},
	javascript: {
		title: 'javascript',
		alt: 'javascript',
		icon: jsIcon,
		source: 'https://js.org/index.html'
	},
	typescript: {
		title: 'TypeScript',
		alt: 'typescript',
		icon: typescriptIcon,
		source: 'https://www.typescriptlang.org/'
	},
	astro: {
		title: 'Astro',
		alt: 'astro',
		icon: astroIcon,
		iconDark: astroIconDark,
		source: 'https://astro.build/'
	},
	svelte: {
		title: 'Svelte',
		alt: 'svelte',
		icon: svelteIcon,
		source: 'https://svelte.dev/'
	},
	git: {
		title: 'Git',
		alt: 'git',
		icon: gitIcon,
		source: 'https://git-scm.com/'
	},
	node: {
		title: 'Node.js',
		alt: 'node',
		icon: nodeIcon,
		source: 'https://nodejs.org/'
	},
	nestjs: {
		title: 'NestJS',
		alt: 'nestjs',
		icon: nestjsIcon,
		source: 'https://nestjs.com/'
	},
	docker: {
		title: 'Docker',
		alt: 'docker',
		icon: dockerIcon,
		source: 'https://www.docker.com/'
	},
	databases: {
		title: 'Databases',
		alt: 'databases',
		icon: databaseIcon,
		iconClass: 'dark:invert',
		source: 'https://developer.mozilla.org/en-US/docs/Glossary/Database'
	},
	linux: {
		title: 'Linux',
		alt: 'linux',
		shortLabel: 'Lx',
		source: 'https://www.linux.org/'
	},
	open_code: {
		title: 'OpenCode',
		alt: 'opencode',
		icon: opencodeIcon,
		iconClass: 'dark:invert',
		source: 'https://opencode.ai/'
	},
	codex: {
		title: 'Codex',
		alt: 'codex',
		icon: codexIcon,
		source: 'https://openai.com/codex/'
	},
	claude_code: {
		title: 'Claude Code',
		alt: 'claude code',
		icon: claudeIcon,
		source: 'https://www.anthropic.com/claude-code'
	},
	kilo_code: {
		title: 'Kilo Code',
		alt: 'kilo code',
		icon: kiloCodeIcon,
		iconClass: 'dark:invert',
		source: 'https://kilocode.ai/'
	}
}

export default tags
