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
			'Frontend developer who aims to specialize in crafting user interfaces with React, focusing on performance and clean code to ensure a smooth and engaging user experience.',

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
		'blog.intro': 'Notes on building useful interfaces, plus release notes for this site.',
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
			'Desarrollador frontend enfocado en crear interfaces con React, cuidando el rendimiento y el código limpio para lograr una experiencia fluida y agradable.',

		'experience.title': 'Experiencia profesional',
		'job.present': 'Actualidad',
		'job.stack': 'STACK',

		'contact.title': 'Hablemos',
		'contact.downloadCv': 'Descargar mi CV',
		'contact.readMoreTitle': '¿Querés leer más?',
		'contact.readMoreText':
			'Pasá por el blog: artículos técnicos, tutoriales y notas sobre desarrollo.',
		'contact.goToBlog': 'Ir al blog',

		'blog.eyebrow': 'Blog',
		'blog.heading': 'Escritos',
		'blog.intro': 'Notas sobre construir interfaces útiles, y los release notes de este sitio.',
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
