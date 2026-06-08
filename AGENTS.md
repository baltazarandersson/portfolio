# Agentic Development Guide

This file is the operating guide for agents working in this repository. Keep it compact, current, and explicit.

## Repo Snapshot

- Stack: Astro 6, Svelte 5, Tailwind CSS 3, TypeScript 6, Yarn 1, Node 22+.
- App type: static Astro portfolio with Svelte islands for client interactivity.
- Pages live in `src/pages`.
- Local design-system mock routes live in `src/pages/design-system` and should stay unlinked from production navigation unless explicitly promoted.
- Blog content uses Astro Content Collections in `src/content/blog` with schema in `src/content.config.ts`.
- Blog translations use separate Markdown entries with matching `translationKey` and `language: en`/`language: es`; the blog index should show one entry per translation group.
- Shared UI lives in `src/components`.
- Blog-specific UI primitives live in `src/components/Blog` and should remain static Astro components unless interactivity is explicitly needed.
- Landing data currently lives in `src/mocks` and is accessed through thin services in `src/services`.
- Utilities live in `src/utils`, shared constants in `src/constants`, and shared types in `src/types`.

## Commands

- Install: `yarn`
- Dev server: `yarn dev`
- Type/content check: `yarn run check`
- Format: `yarn run format`
- Format check: `yarn run format:check`
- Spellcheck: `yarn run spellcheck`
- Fast gate (format:check + check + spellcheck): `yarn run gate`
- Production build: `yarn build`

Use `yarn run check`, not `yarn check`, because Yarn Classic treats `yarn check` as its own command.

A Husky `pre-commit` hook runs `yarn run gate` on every commit (installed via the `prepare` script). Do not bypass it with `--no-verify` unless explicitly asked.

## Build And Deploy Notes

- Deploy target is Vercel (Linux x64), build command `yarn build`. The lockfile is generated on Windows, so `package.json` pins the Linux Sharp binary in `optionalDependencies` (`@img/sharp-linux-x64`, `@img/sharp-libvips-linux-x64`) and a `resolutions` entry collapses Sharp to a single version. Removing either reintroduces the `MissingSharp` build failure on Vercel — keep them in sync with the `sharp` version.
- `astro.config.mjs` sets `site`; per-page Open Graph/Twitter tags in `Layout.astro` need it to build absolute `og:image`/canonical URLs. Blog posts may set a `heroImage` (public path) used as the share image; pages without one fall back to `/images/og/default.webp`.

## Internationalization (i18n)

- The site is bilingual (EN/ES) via Astro's built-in i18n routing (`i18n` in `astro.config.mjs`, `defaultLocale: 'en'`, `prefixDefaultLocale: false`): English at `/`, Spanish under `/es/`.
- All UI strings live in `src/i18n/ui.ts` (one entry per key, both languages). Helpers are in `src/i18n/utils.ts` (`getLang`, `useTranslations`, `getLocaleAlternates`) and `src/i18n/blog.ts` (locale-aware blog paths + post `translationKey` → alternates). Import via the `@i18n/*` alias.
- **Astro components** read the locale from `Astro.currentLocale`: `const t = useTranslations(Astro.currentLocale)`. Add new copy as a key in `ui.ts` (both languages) — never hardcode user-facing English in components.
- **Svelte islands** cannot read `Astro.currentLocale`; pass `lang` (and/or already-translated labels) down as props from the Astro parent (see `Header/index.astro` → `NavSection`, `Drawer`, `BlogTitleSwap`).
- **Pages** are mirrored under `src/pages/es/**` (thin shells that render the same components, which resolve the locale from the URL). `[slug].astro` must use `export async function getStaticPaths()` (NOT an arrow `const`) to avoid `Astro.props` hoisting out of render scope.
- **Localized data**: `src/mocks` holds `{ en, es }` (`LocalizedText`) for copy; `getJobs(lang)`/`getProjects(lang)` resolve it. Spanish copy should stay warm and natural, usually using the user's Uruguayan `tu` forms rather than assumed Argentine voseo unless the source text asks for another register. `src/mocks/**` and `src/i18n/ui.ts` are in `cspell` `ignorePaths`.

## Iteration Protocol

- Inspect before changing code. Read the relevant files and current conventions first.
- Work in small, closed batches: bugfix, feature, tooling, content, or review.
- Keep scope tight. Do not turn a localized request into a broad refactor.
- Prefer the smallest correct change over new abstractions.
- Reuse existing components, tokens, spacing, and visual language before introducing new patterns.
- Validate after implementation with the narrowest useful command first, then broader checks when the batch is complete.
- Review the diff before finalizing. Look for unintended file changes, dead imports, formatting churn, and behavior regressions.

## Subagent Protocol

- Use subagents when work can be split into independent tracks, such as UI/runtime, stack/tooling, content, or review.
- Give each subagent explicit file boundaries and validation commands.
- Do not let two subagents edit the same files unless the integration step is planned.
- After subagents finish, run an integration pass from the main agent: inspect diff, resolve warnings, run checks, and summarize.

## Code Quality Rules

- Avoid "AI slop": no generic redesigns, decorative noise, vague copy, or unnecessary wrappers.
- Keep functions and components readable. Extract only when reuse or complexity justifies it.
- Prefer concrete names over generic names like `data`, `item`, or `helper` when meaning is domain-specific.
- Do not add backwards-compatibility paths unless persisted data, public API, shipped behavior, or an explicit requirement needs it.
- Avoid top-level browser globals in Svelte components unless guarded or inside lifecycle code.
- Clean up subscriptions, timers, event listeners, and intervals.
- External links opened in a new tab should include `rel="noopener noreferrer"`.
- Accessibility basics matter: meaningful labels, semantic elements, keyboard-safe interactions, and useful alt text.

## Astro And Svelte Conventions

- Prefer Astro components for static markup and Svelte components only for client interactivity.
- Keep Svelte islands small and purposeful.
- Use `client:idle` or `client:only` intentionally; do not hydrate static UI by default.
- Content routes should use Content Collections when content is file-based and schema-driven.
- Blog posts must live in `src/content/blog` and use `draft: true` when not ready to publish.

## Styling Conventions

- Preserve the current visual language: dark mode, `font-heming`, zinc/indigo surfaces, primary color variable, and Tailwind utilities.
- Tailwind 3 is the current target. Do not migrate to Tailwind 4 as part of unrelated work.
- Prefer semantic design-system primitives in `src/components` before repeating Tailwind utility clusters.
- Use `Container` for page width/padding, `Heading` with separate `as` and `variant`, and `Text` with valid semantic tags.
- Use `Card`, `ActionLink`, `IconLink`, and `Badge` for reusable surfaces, links, icon-only links, and compact labels.
- Use `src/components/Blog` primitives for blog mocks and future blog pages before adding one-off article/card markup.
- For stacking contexts, use explicit local layering instead of global negative z-index when possible.
- The header should stay above page content; project cards should keep their image/overlay layering local.
- Blog content is Markdown-first. Do not add MDX support unless a post explicitly needs embedded components.

## Auto-Update Rule

Update this file before closing a batch when any of these change:

- A new page, route group, content collection, or major layout is added.
- The stack, package manager, Node version, scripts, build flow, or validation commands change.
- Repository structure or ownership conventions change.
- A recurring review finding becomes a rule.
- A new agent workflow, subagent split, or post-implementation gate is adopted.

If a commit is requested, include the `AGENTS.md` update in the same commit as the relevant code change. If no commit is requested, update it before the final response.

## Post-Implementation Gate

Before finalizing a batch, verify:

- The implementation directly solves the requested problem.
- The diff is minimal and intentional.
- Code is readable without explaining it externally.
- No dead imports, unused variables, or avoidable warnings remain.
- Components are not over-abstracted or visually generic.
- Browser-only APIs are guarded or lifecycle-scoped.
- Accessibility basics were considered for changed UI.
- Docs were updated if routes, stack, scripts, content, or conventions changed.
- Relevant validations were run, or skipped commands are clearly explained.

Recommended final validation for normal feature/tooling batches:

- `yarn run check`
- `yarn run format:check`
- `yarn run spellcheck`
- `yarn build`
