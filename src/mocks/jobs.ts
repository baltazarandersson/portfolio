import type { JobMock } from 'types/jobs'
import vairixLogo from '/public/images/logos/vairix.svg'

const jobs: JobMock[] = [
	{
		position: 'Fullstack Engineer',
		company: 'VAIRIX',
		type: { en: 'Full Time', es: 'Tiempo completo' },
		from: new Date('10/13/2022').getTime(),
		to: new Date('06/30/2026').getTime(),
		description: {
			en: 'Joined as a React Developer and grew into owning features across the stack for US clients. On Darwin Evolution, a multi-company traceability platform, I led the frontend work for Vairix (React, Vite, Ant Design), built a Next.js data-capture app from scratch and, from mid 2025, took on backend work in NestJS and PostgreSQL, setting up and testing the dev, QA and UAT environments with DevOps. On Seekr I worked on the Next.js frontends of their AI news and podcast products, and in 2026 on their model fine-tuning platform, where I took on a deployment and authentication problem in a part of the system that was new to me. I work with coding agents: I write the specs, review and validate.',
			es: 'Entré como React Developer y crecí hasta hacerme cargo de features en todo el stack para clientes de Estados Unidos. En Darwin Evolution, una plataforma multiempresa de trazabilidad, llevé el frontend por Vairix (React, Vite, Ant Design), construí desde cero una app de captura de datos en Next.js y, desde mediados de 2025, tomé trabajo de backend en NestJS y PostgreSQL, configurando y probando los ambientes de dev, QA y UAT con DevOps. En Seekr trabajé en los frontends en Next.js de sus productos de noticias y podcasts con IA, y en 2026 en su plataforma de fine tuning de modelos, donde me hice cargo de un problema de despliegue y autenticación en una parte del sistema que era nueva para mí. Trabajo con agentes de código: escribo las especificaciones, reviso y valido.'
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
