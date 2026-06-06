# Changelog

All notable changes to this project are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[2.0.0]: https://github.com/baltazarandersson/portfolio/releases/tag/v2.0.0
