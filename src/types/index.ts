import type { SECTIONS } from '@constants/index'

export type SectionType = (typeof SECTIONS)[number]

export type ThemeType = 'dark' | 'light'

/** A string that exists in both site languages. Resolved to one by services per locale. */
export type LocalizedText = { en: string; es: string }
