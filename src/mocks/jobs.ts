import type { JobType } from 'types/jobs'
import vairixLogo from '/public/images/logos/vairix.svg'

const jobs: JobType[] = [
	{
		position: 'React Developer',
		company: 'VAIRIX',
		type: 'Full Time',
		from: new Date('10/13/2022').getTime(),
		to: null,
		description:
			'Working as React developer for Vairix, facing multiple challenges while learning a lot of stuff on the road.',
		stack: ['react', 'next', 'tailwind', 'cypress', 'typescript'],
		logo: vairixLogo
	}
]

export default jobs
