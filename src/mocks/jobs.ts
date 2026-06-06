import type { JobMock } from 'types/jobs'
import vairixLogo from '/public/images/logos/vairix.svg'

const jobs: JobMock[] = [
	{
		position: 'React Developer',
		company: 'VAIRIX',
		type: { en: 'Full Time', es: 'Tiempo completo' },
		from: new Date('10/13/2022').getTime(),
		to: null,
		description: {
			en: 'Working as React developer for Vairix, facing multiple challenges while learning a lot of stuff on the road.',
			es: 'Trabajando como desarrollador React en Vairix, enfrentando muchos desafíos y aprendiendo un montón en el camino.'
		},
		stack: ['react', 'next', 'tailwind', 'cypress', 'typescript'],
		logo: vairixLogo
	}
]

export default jobs
