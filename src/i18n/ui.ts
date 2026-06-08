export const languages = { en: 'EN', es: 'ES' } as const

export const defaultLang = 'en'

export type Lang = keyof typeof languages

export const ui = {
	en: {
		'meta.description':
			"Baltazar Andersson's portfolio, made with Astro in addition with Svelte and Tailwind CSS.",

		'nav.experience': 'Experience',
		'nav.projects': 'Projects',
		'nav.contact': 'Contact',
		'nav.blog': 'Blog',

		'presentation.greeting': 'Hi!',
		'presentation.intro': 'My name is',
		'presentation.lead':
			'Software developer with a frontend foundation and product mindset, building web and mobile products with a modern stack and agent workflows to iterate faster without losing engineering judgment.',

		'experience.title': 'Professional experience',
		'job.present': 'Present',
		'job.stack': 'STACK',

		'contact.title': 'Get in touch',
		'contact.downloadCv': 'Download my CV',
		'contact.readMoreTitle': 'Want to read more?',
		'contact.readMoreText':
			'Visit the blog for technical articles, tutorials, and development thoughts.',
		'contact.goToBlog': 'Go to blog',

		'blog.eyebrow': 'Blog',
		'blog.heading': 'Writing',
		'blog.intro': 'Notes on building useful interfaces and on how this site keeps evolving.',
		'blog.article': 'article',
		'blog.articles': 'articles',
		'blog.topics': 'Topics',
		'blog.empty': 'No published posts yet.',

		'post.backToBlog': 'Back to blog',
		'post.published': 'Published',
		'post.updated': 'Updated',
		'post.minRead': 'min read',
		'post.readArticle': 'Read article',
		'post.tocTitle': 'On this page',
		'post.tocAria': 'Table of contents',

		'duration.year': 'year',
		'duration.years': 'years',
		'duration.month': 'month',
		'duration.months': 'months'
	},
	es: {
		'meta.description':
			'Portfolio de Baltazar Andersson, hecho con Astro junto con Svelte y Tailwind CSS.',

		'nav.experience': 'Experiencia',
		'nav.projects': 'Proyectos',
		'nav.contact': 'Contacto',
		'nav.blog': 'Blog',

		'presentation.greeting': '¡Hola!',
		'presentation.intro': 'Mi nombre es',
		'presentation.lead':
			'Desarrollador de software con base frontend y mirada de producto, construyendo productos web y móviles con un stack moderno y workflows con agentes para iterar más rápido sin perder criterio técnico.',

		'experience.title': 'Experiencia profesional',
		'job.present': 'Actualidad',
		'job.stack': 'STACK',

		'contact.title': 'Hablemos',
		'contact.downloadCv': 'Descargar mi CV',
		'contact.readMoreTitle': '¿Quieres leer más?',
		'contact.readMoreText':
			'Pasa por el blog: artículos técnicos, tutoriales y notas sobre desarrollo.',
		'contact.goToBlog': 'Ir al blog',

		'blog.eyebrow': 'Blog',
		'blog.heading': 'Escritos',
		'blog.intro': 'Notas sobre construir interfaces útiles y sobre la evolución de este sitio.',
		'blog.article': 'artículo',
		'blog.articles': 'artículos',
		'blog.topics': 'Temas',
		'blog.empty': 'Todavía no hay posts publicados.',

		'post.backToBlog': 'Volver al blog',
		'post.published': 'Publicado',
		'post.updated': 'Actualizado',
		'post.minRead': 'min de lectura',
		'post.readArticle': 'Leer artículo',
		'post.tocTitle': 'En esta página',
		'post.tocAria': 'Tabla de contenidos',

		'duration.year': 'año',
		'duration.years': 'años',
		'duration.month': 'mes',
		'duration.months': 'meses'
	}
} as const

export type TranslationKey = keyof (typeof ui)['en']
