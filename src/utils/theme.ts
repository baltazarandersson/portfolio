export type ThemeType = 'dark' | 'light'

export const getCurrentTheme = () =>
	(typeof localStorage !== 'undefined' && localStorage.getItem('theme')) || 'dark'

export const updateStoredTheme = (theme: ThemeType) => localStorage.setItem('theme', theme)

export const toggleCurrentTheme = () => {
	const currentTheme = getCurrentTheme()

	document.documentElement.classList.toggle('dark')

	updateStoredTheme(currentTheme === 'dark' ? 'light' : 'dark')
}
