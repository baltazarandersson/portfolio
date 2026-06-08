import pokeduxThumb from '/public/images/projects/pokedux.webp'
import chattioThumb from '/public/images/projects/chattio.webp'
import forecastThumb from '/public/images/projects/bolt.webp'
import giffiThumb from '/public/images/projects/giffi.webp'
import glacssifyThumb from '/public/images/projects/glacssify.webp'
import simonsaysThumb from '/public/images/projects/simonsays.webp'
import lolprofileThumb from '/public/images/projects/lolprofile.webp'
import countryQuizThumb from '/public/images/projects/countryquiz.webp'
import avostoreThumb from '/public/images/projects/avostore.webp'
import devtterThumb from '/public/images/projects/devtter.webp'
import portfolioV2Thumb from '/public/images/projects/portfolio-v2-home.webp'
import type { ProjectWithKeysType } from 'types/projects'

const projects: ProjectWithKeysType[] = [
	{
		thumbnail: portfolioV2Thumb,
		title: 'Portfolio v2',
		description: {
			en: 'This very site, rebuilt from scratch. It ended up becoming a small design system with its own blog and a warm light theme, built with Astro and Svelte.',
			es: 'Este mismo sitio, reconstruido desde cero. Terminó convirtiéndose en un pequeño sistema de diseño con blog propio y un tema claro cálido, hecho con Astro y Svelte.'
		},
		tags: ['astro', 'svelte', 'tailwind', 'typescript'],
		repository: 'https://github.com/baltazarandersson/portfolio',
		deploy: 'https://baltazar.vercel.app/'
	},
	{
		thumbnail: devtterThumb,
		title: 'Devtter',
		description: {
			en: 'Functional Twitter clone made with Next.js.',
			es: 'Clon funcional de Twitter hecho con Next.js.'
		},
		tags: ['next', 'react', 'firebase', 'tailwind'],
		repository: 'https://github.com/baltazarandersson/nextjs-twitter-clone',
		deploy: 'https://devtter-next.vercel.app/'
	},
	{
		thumbnail: chattioThumb,
		title: 'Chattio',
		description: {
			en: 'Messaging app I built to learn about real-time interaction, user authentication, and cloud storage.',
			es: 'App de mensajería que hice para aprender sobre interacción en tiempo real, autenticación de usuarios y almacenamiento en la nube.'
		},
		tags: ['react', 'firebase', 'tailwind'],
		repository: 'https://github.com/baltazarandersson/chattio-app',
		deploy: 'https://chattio.vercel.app/'
	},
	{
		thumbnail: countryQuizThumb,
		title: 'Country Quiz',
		description: {
			en: 'Quiz game I built to practice Redux Toolkit and thunks.',
			es: 'Juego de preguntas que hice para practicar Redux Toolkit y thunks.'
		},
		tags: ['react', 'redux', 'tailwind'],
		repository: 'https://github.com/baltazarandersson/country-quiz',
		deploy: 'https://countryquiz.vercel.app/'
	},
	{
		thumbnail: giffiThumb,
		title: 'GIFFI',
		description: {
			en: 'GIF search engine built with React. It helped me learn about routing, infinite scrolling, context, and other library patterns.',
			es: 'Buscador de GIFs hecho con React. Me sirvió para aprender sobre rutas, scroll infinito, contexto y otros patrones de la librería.'
		},
		tags: ['react', 'firebase'],
		repository: 'https://github.com/baltazarandersson/react-giffi-app',
		deploy: 'https://giffi-baltazar.vercel.app/'
	},
	{
		thumbnail: avostoreThumb,
		title: 'Avostore',
		description: {
			en: 'Store app where I learned about Next.js, React Context, and the TypeScript ecosystem.',
			es: 'Tienda donde aprendí sobre Next.js, React Context y el ecosistema de TypeScript.'
		},
		tags: ['next', 'react', 'tailwind', 'typescript'],
		repository: 'https://github.com/baltazarandersson/avostore',
		deploy: 'https://avostore-baltazar.vercel.app/'
	},
	{
		thumbnail: glacssifyThumb,
		title: 'Glacssify',
		description: {
			en: 'Small project I built to practice styled-components and play with glassmorphism effects. It lets you generate the style and copy the CSS.',
			es: 'Proyecto chico que hice para practicar styled-components y jugar con efectos glassmorphism. Permite generar el estilo y copiar el CSS.'
		},
		tags: ['react', 'styled_components'],
		repository: 'https://github.com/baltazarandersson/react-glacssify',
		deploy: 'https://glacssify-baltazar.vercel.app/'
	},
	{
		thumbnail: pokeduxThumb,
		title: 'Pokedux',
		description: {
			en: "Project made to learn Redux and it's lifecycle using Redux Toolkit",
			es: 'Proyecto para aprender Redux y su ciclo de vida usando Redux Toolkit.'
		},
		tags: ['react', 'redux'],
		repository: 'https://github.com/baltazarandersson/pokedux',
		deploy: 'https://pokedux.vercel.app/'
	},
	{
		thumbnail: forecastThumb,
		title: 'BOLT',
		description: {
			en: 'Weather app to check the forecast from almost anywhere in the world. It was one of my first projects for learning the basics of React.',
			es: 'App del clima para consultar el pronóstico de casi cualquier lugar del mundo. Fue uno de mis primeros proyectos para aprender las bases de React.'
		},
		tags: ['react'],
		repository: 'https://github.com/baltazarandersson/react-weather-forecast',
		deploy: 'https://forecast-baltazar.vercel.app/'
	},
	{
		thumbnail: lolprofileThumb,
		title: 'LOL Profile',
		description: {
			en: 'Project built to apply async concepts and DOM manipulation using the League of Legends API.',
			es: 'Proyecto para aplicar conceptos de asincronismo y manipulación del DOM usando la API de League of Legends.'
		},
		tags: ['javascript'],
		repository: 'https://github.com/baltazarandersson/riot-league-profile',
		deploy: ''
	},
	{
		thumbnail: simonsaysThumb,
		title: 'Simon says',
		description: {
			en: 'The classic Simon Says game, built with plain JavaScript.',
			es: 'El clásico Simon dice, hecho con JavaScript puro.'
		},
		tags: ['javascript'],
		repository: 'https://github.com/baltazarandersson/Fundamentos-JS',
		deploy: 'https://baltazarandersson.github.io/Fundamentos-JS/JUEGO_JS/index.html'
	}
]

export default projects
