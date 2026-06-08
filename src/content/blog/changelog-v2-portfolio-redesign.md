---
title: 'The v2 base: a design system and a real blog'
description: 'The portfolio grew from a single page into a sturdier base: its own design system, a Markdown blog, a warm light theme, and much smoother navigation.'
publishedAt: 2026-06-06
readingTime: 4 min read
language: en
translationKey: changelog-v2
version: 2.0.0
tags:
  - Changelog
  - Release
  - Design system
heroImage: /images/og/changelog-v2-en.webp
---

This version closes a long cycle of foundational work. Until now the site was a
single animated page; **v2.0.0** turns it into a sturdier base: a small design
system, a real blog, and a structure ready to grow. From here on the project
follows [Semantic Versioning](https://semver.org/) and every meaningful change
lands in the [changelog](https://keepachangelog.com/).

Think of it as the **v2 base**: the point where the next improvements begin.

## Added

- **A design system foundation.** Color now comes from a single set of semantic
  tokens — `surface`, `foreground`, `muted`, `border`, `primary`, `accent` — wired
  through Tailwind and CSS variables. One change in one place re-themes the whole
  site.
- **A real blog at `/blog`.** Posts are Markdown, rendered through a dedicated
  `Prose` layer, with a **table of contents that follows the reading flow**. In
  that first version, posts only showed a **per-post EN/ES switcher** when both
  translations existed.
- **Page transitions.** Navigating now feels more continuous and less like a
  sequence of reloads.
- **A livelier background.** On desktop, a glow that follows the cursor now sits
  alongside another that floats on its own.

<figure>
  <img
    src="/images/blog/changelog-v2/blog-index.webp"
    alt="Blog index with a sticky column on the left and the article list on the right."
    loading="lazy"
  />
  <figcaption>The new blog index: a sticky column with the intro, article count, and topics.</figcaption>
</figure>

<figure>
  <img
    src="/images/blog/changelog-v2/blog-post.webp"
    alt="A blog article in dark mode, with a sticky table of contents on the right."
    loading="lazy"
  />
  <figcaption>Inside a post: reading-focused typography and a sticky table of contents that follows the article structure.</figcaption>
</figure>

## Changed

- **A warm "sunset" light theme.** The pale palette is gone. Light mode is now a
  warm, Gruvbox-inspired space: deep sand backgrounds, dark-brown text, and
  burnt-orange accents. Dark mode is untouched.
- **Everything themed through tokens.** Cards, header, drawer, blog, and reading
  styles no longer rely on hardcoded greys. They read from the tokens, so the
  system stays consistent.

<figure>
  <img
    src="/images/blog/changelog-v2/home-light.webp"
    alt="Home in light mode with the warm sunset palette: sand backgrounds, brown text, and orange accents."
    loading="lazy"
  />
  <figcaption>The "sunset" light theme: deep sand backgrounds, dark-brown text, and burnt-orange accents.</figcaption>
</figure>

## Fixed

- **The theme no longer flips while navigating.** With page transitions, the
  stored theme is re-applied on every page change, so light/dark stays put.

## Accessibility

- **Blog cards can be opened as a whole.** Using an accessible stretched-link
  pattern, the whole card acts as the main entry point while the tags and visible
  link still work independently.
- **Consistent focus states and checked contrast.** Focus states come from the
  tokens, and the light-mode accent was tuned to meet WCAG AA for text.

## What shipped since v2.0

The v2 base did its job: improvements stopped fighting the foundation. Three
smaller releases followed.

### v2.1 — Sharing & SEO

Posts now carry proper Open Graph and Twitter metadata, so shared links finally
show a title, description, and image on LinkedIn and X. Each post can define its
own share image, and the share button uses the native API on mobile and copies
the link on desktop when needed. Projects got refreshed too: this site now has
its own card, and on phones the list highlights one project at a time, whichever
sits closest to the center of the screen.

<figure data-layout="row">
  <div class="device-row">
    <img
      src="/images/blog/changelog-v2/projects-desktop.webp"
      alt="Projects on desktop: hovering a card reveals its details over the screenshot."
      loading="lazy"
    />
    <img
      src="/images/blog/changelog-v2/projects-mobile.webp"
      alt="Projects on mobile: only the card closest to the center of the screen shows its details."
      loading="lazy"
    />
  </div>
  <figcaption>Projects side by side: hover reveals details on desktop, while mobile focuses on one card at a time.</figcaption>
</figure>

### v2.2 — Bilingual (EN/ES)

The whole site now lives in English and Spanish. English stays at the root,
Spanish under `/es/`, and a single switcher in the header changes the whole
experience: landing, blog, and navigation. It replaces the old per-post toggle,
which only showed up when a translation existed.

<figure data-layout="row">
  <div class="device-row">
    <img
      src="/images/blog/changelog-v2/contact-desktop.webp"
      alt="Localized contact section on desktop: links to socials, email, and CV download alongside a CTA to the blog."
      loading="lazy"
    />
    <img
      src="/images/blog/changelog-v2/contact-mobile.webp"
      alt="The same localized contact section on mobile, condensed for small screens."
      loading="lazy"
    />
  </div>
  <figcaption>The contact section after localization, shown on desktop and mobile.</figcaption>
</figure>

### v2.3 — Professional experience

v2.3 gives professional experience its own place. It used to feel more diluted
inside the landing; now it reads as a clear, easy-to-scan section with company,
role, timeframe, work context, and technologies grouped by type. It also sends
a more accurate profile signal: a strong frontend foundation that now expands
into product engineering, delivery, and agent workflows.

<figure data-layout="row">
  <div class="device-row">
    <img
      src="/images/blog/changelog-v2/experience-desktop.webp"
      alt="Experience section on desktop, dark mode: VAIRIX card with grouped technologies."
      loading="lazy"
    />
    <img
      src="/images/blog/changelog-v2/experience-mobile.webp"
      alt="Experience section on mobile, light mode: same information adapted to a narrow screen."
      loading="lazy"
    />
  </div>
  <figcaption>Professional experience on desktop (dark mode) and mobile (light mode).</figcaption>
</figure>

## What's next

More written posts and continued polish. From here on, versions stay small and frequent.
