---
title: 'Changelog v2.0.0 — A design system and a real blog'
description: 'The portfolio grows from a single page into a themed design system with a Markdown blog, a warm sunset light theme, and smoother navigation. Here is everything that shipped in the v2 base.'
publishedAt: 2026-06-06
readingTime: 4 min read
language: en
translationKey: changelog-v2
version: 2.0.0
tags:
  - Changelog
  - Release
  - Design system
---

This release closes a long cycle of foundational work. Until now the site was a
single animated page; **v2.0.0** turns it into a small design system with a real
blog behind it. From here on the project follows [Semantic Versioning](https://semver.org/)
and every meaningful change lands in the [changelog](https://keepachangelog.com/).

Think of this as the **v2 base** — the platform the next features build on.

## Added

- **A design system foundation.** Color now flows from a single set of semantic
  tokens — `surface`, `foreground`, `muted`, `border`, `primary`, `accent` — wired
  through Tailwind and CSS variables. One change in one place re-themes the whole site.
- **A real blog at `/blog`.** Posts are Markdown, rendered through a dedicated
  `Prose` layer, with a **scroll-spy table of contents** and an **EN/ES language
  switcher** that only appears when both translations exist.
- **View transitions.** Navigating between pages now feels like a single app
  instead of full reloads.
- **A livelier background.** On desktop a cursor-following glow now coexists with
  an autonomous floating one.

<figure>
  <img
    src="/images/blog/changelog-v2/home-dark.webp"
    alt="Home in dark mode: the background stars bend around the glows like a glass lens."
    loading="lazy"
  />
  <figcaption>The starfield is now drawn on canvas — the glows bend the nearby stars like a lens.</figcaption>
</figure>

<figure>
  <img
    src="/images/blog/changelog-v2/blog-index.webp"
    alt="Blog index with a sticky sidebar on the left and the article list on the right."
    loading="lazy"
  />
  <figcaption>The new blog index: a sticky sidebar with the intro, article count, and topics.</figcaption>
</figure>

## Changed

- **A warm "sunset" light theme.** The pale palette is gone. Light mode is now a
  warm, Gruvbox-inspired space: deep sand backgrounds, dark-brown text, and
  burnt-orange accents. Dark mode is untouched.
- **Everything themed through tokens.** Cards, header, drawer, blog, and prose no
  longer hardcode greys — they read from the tokens, so theming stays consistent.

<figure>
  <img
    src="/images/blog/changelog-v2/home-light.webp"
    alt="Home in light mode with the warm sunset palette: sand backgrounds, brown text, and orange accents."
    loading="lazy"
  />
  <figcaption>The "sunset" light theme: deep sand backgrounds, dark-brown text, and burnt-orange accents.</figcaption>
</figure>

## Fixed

- **The theme no longer flips while navigating.** With view transitions the stored
  theme is re-applied on every page swap, so light/dark stays put.

## Accessibility

- **Blog cards are fully clickable.** Using an accessible stretched-link pattern,
  the whole card is the target while tags and the call-to-action remain independent.
- **Consistent focus rings and checked contrast.** Focus states come from the
  tokens, and the light-mode accent was tuned to meet WCAG AA for text.

## What's next

The v2 base exists so features stop fighting the foundation. Likely next steps:
more written posts, per-post Open Graph images, and polishing the reading
experience. Versions from here will be small and frequent.
