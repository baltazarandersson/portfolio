# Portfolio

My own portfolio made with Astro in combination with Tailwind CSS and Svelte.

## Installation

Install with yarn

```bash
  git clone https://github.com/baltazarandersson/portfolio.git
  cd portfolio
  yarn
```

## Demo

[Access the portfolio by clicking here](https://baltazar.vercel.app/)

![Collage Maker-14-Sep-2023-01-42-PM-601](https://github.com/baltazarandersson/portfolio/assets/21319545/0b3983b6-cfa0-4826-a706-d9dac5ce7bb9)

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `yarn`              | Installs dependencies                            |
| `yarn dev`          | Starts the local dev server                      |
| `yarn run check`    | Runs Astro type and content checks               |
| `yarn build`        | Checks and builds the production site to `dist/` |
| `yarn preview`      | Previews the production build locally            |
| `yarn format:check` | Checks formatting with Prettier                  |
| `yarn spellcheck`   | Runs cspell                                      |
| `yarn astro ...`    | Runs Astro CLI commands                          |

Agentic workflow and repository conventions live in `AGENTS.md`.

## Blog content

Blog posts are powered by Astro Content Collections in `src/content/blog`. Draft posts use
`draft: true` in frontmatter and are excluded from `/blog` and generated blog pages.
