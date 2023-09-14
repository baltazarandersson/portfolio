import { DEFAULT_THEME } from '@constants/index'
import type { ThemeType } from 'types/index'

export const getCurrentTheme = () =>
	(typeof localStorage !== 'undefined' && localStorage.getItem('theme')) || DEFAULT_THEME

export const updateStoredTheme = (theme: ThemeType) => localStorage.setItem('theme', theme)

export const toggleCurrentTheme = () => {
	const currentTheme = getCurrentTheme()

	document.documentElement.classList.toggle('dark')

	updateStoredTheme(currentTheme === 'dark' ? 'light' : 'dark')
}
