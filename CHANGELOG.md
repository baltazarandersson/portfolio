# Changelog

All notable changes to this project are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2026-06-06

The site is now fully bilingual.

### Added

- **Site-wide EN/ES internationalization** via Astro's built-in i18n routing.
  English stays at `/`, Spanish lives under `/es/`. A single `src/i18n` dictionary
  drives every string; components read `Astro.currentLocale`.
- **Global language switcher** in the header, paired with the theme toggle as a
  utility cluster on every breakpoint. It maps blog posts to their translation via
  `translationKey` and emits `hreflang` alternates.
- **Side-by-side device figures** in blog prose (`figure[data-layout="row"]`):
  a desktop and a mobile screenshot shown together, stacking on small screens.

### Changed

- The per-post EN/ES switcher (which only appeared when both translations existed)
  was replaced by the **global header switcher**.
- Localized landing copy and project/job data through the dictionary; dates and
  durations now format per locale.

## [2.1.0] - 2026-06-06

Social sharing, SEO metadata, and a few polish passes.

### Added

- **Open Graph & Twitter Card metadata** with absolute URLs, plus a per-post
  `heroImage` and an on-page **share** control (Web Share API with copy-link
  fallback) so links unfurl on LinkedIn/X.
- **Portfolio v2** project card.
- **Mobile project spotlight**: on small screens the project list reveals one
  card's info at a time — the one closest to the middle of the viewport.

### Changed

- Tightened the article title size and rewrote project copy in a warmer voice.

### Fixed

- **Vercel production build** failing with `MissingSharp`: pinned the Linux Sharp
  binary in `optionalDependencies` and deduplicated Sharp via `resolutions`.

### Tooling

- **Husky `pre-commit` gate** running `yarn run gate` (format + check + spellcheck).

## [2.0.0] - 2026-06-06

First versioned milestone: the portfolio graduates from a single-page site into a
themed design system with a real blog. This is the **v2 base**.

### Added

- **Design system foundation** built on semantic color tokens (`surface`,
  `surface-muted`, `surface-elevated`, `foreground`, `muted`, `border`,
  `primary`, `accent`, `focus`) wired through Tailwind and CSS variables as the
  single source of truth for color.
- **Blog at `/blog`**: Markdown content collection, `Prose` typography,
  a scroll-spy **Table of Contents**, and an **EN/ES language switcher** that
  appears only when both translations exist.
- **View transitions** (`ClientRouter`) for SPA-like navigation between pages.
- **Dual background visuals**: an autonomous floating ball plus a cursor-following
  ball that coexist on desktop.
- **Versioning**: semantic versioning, this changelog, and an optional `version`
  field on blog posts to tag release notes.

### Changed

- **New warm "sunset" light theme** (Gruvbox-based): deeper sand backgrounds,
  warm dark-brown body text, and burnt-orange accents. Dark mode preserved.
- **Full token migration**: every component (cards, header, drawer, blog, prose)
  now themes through tokens instead of hardcoded `zinc`/`rgb` values.

### Fixed

- **Theme persistence across navigation**: the selected theme no longer flips on
  view-transition page changes (re-applied on initial load and `astro:after-swap`).

### Accessibility

- **Full-card clickable blog cards** via an accessible stretched-link pattern —
  the whole card is the hit target while tags and the CTA stay independent.
- Focus-visible rings unified through tokens, with light-mode accent contrast
  checked against WCAG AA.

[2.2.0]: https://github.com/baltazarandersson/portfolio/releases/tag/v2.2.0
[2.1.0]: https://github.com/baltazarandersson/portfolio/releases/tag/v2.1.0
[2.0.0]: https://github.com/baltazarandersson/portfolio/releases/tag/v2.0.0
