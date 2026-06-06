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
			en: 'This very site, rebuilt from scratch. It grew into a small design system with its own blog and a warm light theme, made with Astro and Svelte.',
			es: 'Este mismo sitio, reconstruido desde cero. Creció hasta ser un pequeño design system con su propio blog y un tema claro cálido, hecho con Astro y Svelte.'
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
			en: 'Messaging app I created to learn about real time requests, user authentication and cloud storage.',
			es: 'App de mensajería que armé para aprender sobre pedidos en tiempo real, autenticación de usuarios y almacenamiento en la nube.'
		},
		tags: ['react', 'firebase', 'tailwind'],
		repository: 'https://github.com/baltazarandersson/chattio-app',
		deploy: 'https://chattio.vercel.app/'
	},
	{
		thumbnail: countryQuizThumb,
		title: 'Country Quiz',
		description: {
			en: 'Quiz game I made to practice with Redux Toolkit & Redux thunks, try to score your best!',
			es: 'Juego de preguntas que hice para practicar Redux Toolkit y thunks, ¡tratá de sacar tu mejor puntaje!'
		},
		tags: ['react', 'redux', 'tailwind'],
		repository: 'https://github.com/baltazarandersson/country-quiz',
		deploy: 'https://countryquiz.vercel.app/'
	},
	{
		thumbnail: giffiThumb,
		title: 'GIFFI',
		description: {
			en: 'GIF search engine made with React. I learned about Routers, infinite scrolling, React context and more.',
			es: 'Buscador de GIFs hecho con React. Aprendí sobre routers, scroll infinito, React context y más.'
		},
		tags: ['react', 'firebase'],
		repository: 'https://github.com/baltazarandersson/react-giffi-app',
		deploy: 'https://giffi-baltazar.vercel.app/'
	},
	{
		thumbnail: avostoreThumb,
		title: 'Avostore',
		description: {
			en: 'Store in where I learned about Next.js, React context, and all about the Typescript world.',
			es: 'Tienda donde aprendí sobre Next.js, React context y todo el mundo de TypeScript.'
		},
		tags: ['next', 'react', 'tailwind', 'typescript'],
		repository: 'https://github.com/baltazarandersson/avostore',
		deploy: 'https://avostore-baltazar.vercel.app/'
	},
	{
		thumbnail: glacssifyThumb,
		title: 'Glacssify',
		description: {
			en: "Tiny project I made to practice the styled-components library. You can create your own 'glass' effect and copy the css.",
			es: "Proyecto chiquito que hice para practicar styled-components. Podés crear tu propio efecto 'glass' y copiar el CSS."
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
			en: 'Forecast app to get the weather from almost everywhere in the world in where I learned about the React basics.',
			es: 'App del clima para ver el pronóstico de casi cualquier lugar del mundo, donde aprendí las bases de React.'
		},
		tags: ['react'],
		repository: 'https://github.com/baltazarandersson/react-weather-forecast',
		deploy: 'https://forecast-baltazar.vercel.app/'
	},
	{
		thumbnail: lolprofileThumb,
		title: 'LOL Profile',
		description: {
			en: 'Project made to apply my knowledge of asynchronism and DOM manipulation with the LoL API.',
			es: 'Proyecto para aplicar lo que sé de asincronismo y manipulación del DOM con la API de LoL.'
		},
		tags: ['javascript'],
		repository: 'https://github.com/baltazarandersson/riot-league-profile',
		deploy: ''
	},
	{
		thumbnail: simonsaysThumb,
		title: 'Simon says',
		description: {
			en: 'The classic simon says game made with vanilla javascript.',
			es: 'El clásico juego Simon dice, hecho con JavaScript vanilla.'
		},
		tags: ['javascript'],
		repository: 'https://github.com/baltazarandersson/Fundamentos-JS',
		deploy: 'https://baltazarandersson.github.io/Fundamentos-JS/JUEGO_JS/index.html'
	}
]

export default projects
