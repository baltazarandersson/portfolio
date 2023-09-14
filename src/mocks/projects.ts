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
import type { ProjectWithKeysType } from 'types/projects'

const projects: ProjectWithKeysType[] = [
	{
		thumbnail: devtterThumb,
		title: 'Devtter',
		description: 'Functional Twitter clone made with Next.js.',
		tags: ['next', 'firebase', 'tailwind'],
		repository: 'https://github.com/baltazarandersson/nextjs-twitter-clone',
		deploy: 'https://devtter-next.vercel.app/'
	},
	{
		thumbnail: chattioThumb,
		title: 'Chattio',
		description:
			'Messaging app I created to learn about real time requests, user authentication and cloud storage.',
		tags: ['react', 'firebase', 'tailwind'],
		repository: 'https://github.com/baltazarandersson/chattio-app',
		deploy: 'https://chattio.vercel.app/'
	},
	{
		thumbnail: countryQuizThumb,
		title: 'Country Quiz',
		description:
			'Quiz game I made to practice with Redux Toolkit & Redux thunks, try to score your best!',
		tags: ['react', 'redux', 'tailwind'],
		repository: 'https://github.com/baltazarandersson/country-quiz',
		deploy: 'https://countryquiz.vercel.app/'
	},
	{
		thumbnail: giffiThumb,
		title: 'GIFFI',
		description:
			'GIF search engine made with React. I learned about Routers, infinite scrolling, React context and more.',
		tags: ['react', 'firebase'],
		repository: 'https://github.com/baltazarandersson/react-giffi-app',
		deploy: 'https://giffi-baltazar.vercel.app/'
	},
	{
		thumbnail: avostoreThumb,
		title: 'Avostore',
		description: 'Store in where I learned about Next.js and React context.',
		tags: ['next', 'react', 'tailwind'],
		repository: 'https://github.com/baltazarandersson/avostore',
		deploy: 'https://avostore-baltazar.vercel.app/'
	},
	{
		thumbnail: glacssifyThumb,
		title: 'Glacssify',
		description:
			"Tiny project I made to practice the styled-components library. You can create your own 'glass' effect and copy the css.",
		tags: ['react', 'styled_components'],
		repository: 'https://github.com/baltazarandersson/react-glacssify',
		deploy: 'https://glacssify-baltazar.vercel.app/'
	},
	{
		thumbnail: pokeduxThumb,
		title: 'Pokedux',
		description: "Project made to learn Redux and it's lifecycle using Redux Toolkit",
		tags: ['react', 'redux'],
		repository: 'https://github.com/baltazarandersson/pokedux',
		deploy: 'https://pokedux.vercel.app/'
	},
	{
		thumbnail: forecastThumb,
		title: 'BOLT',
		description:
			'Forecast app to get the weather from almost everywhere in the world in where I learned about the React basics.',
		tags: ['react'],
		repository: 'https://github.com/baltazarandersson/react-weather-forecast',
		deploy: 'https://forecast-baltazar.vercel.app/'
	},
	{
		thumbnail: lolprofileThumb,
		title: 'LOL Profile',
		description:
			'Project made to apply my knowledge of asynchronism and DOM manipulation with the LoL API.',
		tags: ['javascript'],
		repository: 'https://github.com/baltazarandersson/riot-league-profile',
		deploy: ''
	},
	{
		thumbnail: simonsaysThumb,
		title: 'Simon says',
		description: 'The classic simon says game made with vanilla javascript.',
		tags: ['javascript'],
		repository: 'https://github.com/baltazarandersson/Fundamentos-JS',
		deploy: 'https://baltazarandersson.github.io/Fundamentos-JS/JUEGO_JS/index.html'
	}
]

export default projects
