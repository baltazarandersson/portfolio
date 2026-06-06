---
title: 'v2.0.0 — Un design system y un blog de verdad'
description: 'El portfolio pasa de una sola página a un design system con tema propio, un blog en Markdown, un light theme cálido tipo sunset y navegación más fluida. Esto es todo lo que entró en la base v2.'
publishedAt: 2026-06-06
readingTime: 4 min de lectura
language: es
translationKey: changelog-v2
version: 2.0.0
tags:
  - Changelog
  - Release
  - Design system
heroImage: /images/og/changelog-v2.webp
---

Esta release cierra un ciclo largo de trabajo de base. Hasta ahora el sitio era
una sola página animada; **v2.0.0** lo convierte en un pequeño design system con
un blog de verdad por detrás. A partir de acá el proyecto sigue
[Versionado Semántico](https://semver.org/) y todo cambio relevante queda en el
[changelog](https://keepachangelog.com/).

Pensalo como la **base v2** — la plataforma sobre la que se construyen las
próximas features.

## Añadido

- **Una base de design system.** El color ahora sale de un único set de tokens
  semánticos — `surface`, `foreground`, `muted`, `border`, `primary`, `accent` —
  conectados vía Tailwind y variables CSS. Un cambio en un solo lugar re-tematiza
  todo el sitio.
- **Un blog de verdad en `/blog`.** Los posts son Markdown, renderizados por una
  capa `Prose` dedicada, con una **tabla de contenidos con scroll-spy** y un
  **switcher EN/ES** que solo aparece cuando existen ambas traducciones.
- **View transitions.** Navegar entre páginas ahora se siente como una sola app
  en vez de recargas completas.
- **Un fondo más vivo.** En desktop, un glow que sigue al cursor convive con otro
  que flota de forma autónoma.

<figure>
  <img
    src="/images/blog/changelog-v2/home-dark.webp"
    alt="Home en modo oscuro: las estrellas del fondo se curvan alrededor de los glows como una lente de cristal."
    loading="lazy"
  />
  <figcaption>El fondo de estrellas ahora se dibuja en canvas — los glows curvan las estrellas cercanas como una lente.</figcaption>
</figure>

<figure>
  <img
    src="/images/blog/changelog-v2/blog-index.webp"
    alt="Índice del blog con un sidebar fijo a la izquierda y la lista de artículos a la derecha."
    loading="lazy"
  />
  <figcaption>El nuevo índice del blog: sidebar fijo con intro, conteo de artículos y topics.</figcaption>
</figure>

<figure>
  <img
    src="/images/blog/changelog-v2/blog-post.webp"
    alt="Un artículo del blog en modo oscuro: la card del artículo a la izquierda y una tabla de contenidos fija 'On this page' a la derecha."
    loading="lazy"
  />
  <figcaption>Dentro de un post: tipografía prose, tabla de contenidos con scroll-spy, y los controles de EN/ES y compartir en el header.</figcaption>
</figure>

## Cambiado

- **Un light theme cálido "sunset".** Se fue la paleta pálida. El modo claro ahora
  es un espacio cálido inspirado en Gruvbox: fondos de arena profundos, texto
  marrón oscuro y acentos naranja quemado. El modo oscuro queda intacto.
- **Todo tematizado con tokens.** Cards, header, drawer, blog y prose ya no
  hardcodean grises — leen de los tokens, así el theming se mantiene consistente.

<figure>
  <img
    src="/images/blog/changelog-v2/home-light.webp"
    alt="Home en modo claro con la paleta cálida sunset: fondos de arena, texto marrón y acentos naranja."
    loading="lazy"
  />
  <figcaption>El modo claro "sunset": fondos de arena profundos, texto marrón oscuro y acentos naranja quemado.</figcaption>
</figure>

## Corregido

- **El tema ya no salta al navegar.** Con las view transitions, el tema guardado se
  reaplica en cada cambio de página, así que claro/oscuro se mantiene.

## Accesibilidad

- **Las cards del blog son 100% clickeables.** Con un patrón de stretched-link
  accesible, toda la card es el target mientras los tags y el CTA siguen
  funcionando aparte.
- **Focus rings consistentes y contraste revisado.** Los estados de foco salen de
  los tokens, y el acento del modo claro se ajustó para cumplir WCAG AA en texto.

## Qué sigue

La base v2 existe para que las features dejen de pelear con los cimientos.
Próximos pasos probables: más posts escritos, imágenes Open Graph por post y pulir
la experiencia de lectura. De acá en más las versiones van a ser chicas y
frecuentes.
