import type { JobMock } from 'types/jobs'
import vairixLogo from '/public/images/logos/vairix.svg'

const jobs: JobMock[] = [
	{
		position: 'Software Developer',
		company: 'VAIRIX',
		type: { en: 'Full Time', es: 'Tiempo completo' },
		from: new Date('10/13/2022').getTime(),
		to: null,
		description: {
			en: 'Working across client products with a strong frontend base in React, Next.js, and TypeScript. The role expanded into product engineering, delivery quality, complex flow debugging, and building reliable agent workflows for orchestration, execution, and review.',
			es: 'Trabajando en productos para clientes con una base sólida de frontend en React, Next.js y TypeScript. El rol se expandió hacia ingeniería de producto, calidad de entrega, depuración de flujos complejos y la construcción de flujos confiables con agentes para orquestación, ejecución y revisión.'
		},
		stackGroups: [
			{
				label: {
					en: 'Frontend foundation',
					es: 'Base de frontend'
				},
				tags: ['react', 'next', 'typescript', 'tailwind']
			},
			{
				label: {
					en: 'Platform & delivery',
					es: 'Plataforma y entrega'
				},
				tags: ['cypress', 'git', 'node', 'nestjs', 'docker', 'databases']
			},
			{
				label: {
					en: 'Agent orchestration',
					es: 'Orquestación con agentes'
				},
				tags: ['open_code', 'codex', 'claude_code', 'kilo_code']
			}
		],
		logo: vairixLogo
	}
]

export default jobs
