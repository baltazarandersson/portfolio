export type ThemeType = "dark" | "light";

export const getCurrentTheme = () => localStorage.getItem("theme") as ThemeType;

export const updateStoredTheme = (theme: ThemeType) =>
  localStorage.setItem("theme", theme);

export const toggleCurrentTheme = () => {
  const currentTheme = getCurrentTheme();

  document.documentElement.classList.toggle("dark");

  updateStoredTheme(currentTheme === "dark" ? "light" : "dark");
};
