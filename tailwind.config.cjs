/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heming: ["Heming Variable", "ui-monospace", "monospace"],
        helvetica: ["Helvetica Light", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
