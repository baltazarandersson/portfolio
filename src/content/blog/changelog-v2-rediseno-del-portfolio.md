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

## Qué salió desde la v2.0

La base v2 cumplió su trabajo: las features dejaron de pelear con los cimientos.
Después vinieron dos releases chicas.

### v2.1 — Compartir y SEO

Ahora los posts tienen metadata de Open Graph y Twitter como corresponde, así que
un link por fin se muestra con título, descripción e imagen en LinkedIn y X. Cada
post puede definir su propia imagen para compartir, y un botón de compartir usa el
share nativo en mobile con fallback a copiar el enlace en desktop. Los proyectos
también se renovaron: una card para este mismo sitio, y en el teléfono el listado
ahora destaca un proyecto a la vez — el que queda más cerca del centro de la
pantalla.

<figure data-layout="row">
  <div class="device-row">
    <img
      src="/images/blog/changelog-v2/projects-desktop.webp"
      alt="Proyectos en desktop: al pasar el mouse por una card se revelan sus detalles sobre la captura."
      loading="lazy"
    />
    <img
      src="/images/blog/changelog-v2/projects-mobile.webp"
      alt="Proyectos en mobile: solo la card más cercana al centro de la pantalla muestra sus detalles."
      loading="lazy"
    />
  </div>
  <figcaption>Proyectos lado a lado: hover para revelar en desktop, spotlight de a uno en mobile.</figcaption>
</figure>

### v2.2 — Bilingüe (EN/ES)

Todo el sitio ahora habla inglés y español. El inglés vive en la raíz, el español
bajo `/es/`, y un único selector en el header cambia el sitio entero — landing,
blog y chrome — en vez del viejo toggle por post que solo aparecía cuando existía
una traducción.

<figure data-layout="row">
  <div class="device-row">
    <img
      src="/images/blog/changelog-v2/i18n-desktop.webp"
      alt="La home en español en desktop, con el selector EN·ES en el header."
      loading="lazy"
    />
    <img
      src="/images/blog/changelog-v2/i18n-mobile.webp"
      alt="La home en español en mobile, con el selector de idioma al lado del switch de tema."
      loading="lazy"
    />
  </div>
  <figcaption>Un único selector EN·ES global en el header, junto al switch de tema en todos los breakpoints.</figcaption>
</figure>

## Qué sigue

Más posts escritos y seguir puliendo. De acá en más las versiones van a ser chicas
y frecuentes.
