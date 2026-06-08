---
title: 'La base v2: un sistema de diseño y un blog de verdad'
description: 'El portfolio pasó de ser una sola página a una base más sólida: sistema de diseño propio, blog en Markdown, un tema claro cálido y una navegación mucho más fluida.'
publishedAt: 2026-06-06
readingTime: 4 min de lectura
language: es
translationKey: changelog-v2
version: 2.0.0
tags:
  - Changelog
  - Release
  - Design system
heroImage: /images/og/changelog-v2-es.webp
---

Esta versión cierra un ciclo largo de trabajo de base. Hasta ahora el sitio era
una sola página animada; **v2.0.0** lo convierte en una base más sólida: un
pequeño sistema de diseño, un blog de verdad y una estructura lista para crecer.
A partir de acá el proyecto sigue
[Versionado Semántico](https://semver.org/) y todo cambio relevante queda en el
[changelog](https://keepachangelog.com/).

Piénsalo como la **base v2**: el punto desde el que empiezan las próximas
mejoras.

## Añadido

- **Una base de sistema de diseño.** El color ahora sale de un único conjunto de
  tokens semánticos — `surface`, `foreground`, `muted`, `border`, `primary`,
  `accent` — conectados vía Tailwind y variables CSS. Un cambio en un solo lugar
  redefine el tema de todo el sitio.
- **Un blog de verdad en `/blog`.** Los posts son Markdown, renderizados por una
  capa `Prose` dedicada, con una **tabla de contenidos que acompaña la lectura**.
  En esa primera versión, cuando existían ambas traducciones, cada post mostraba
  además un **selector EN/ES propio**.
- **Transiciones entre páginas.** Navegar ahora se siente más continuo y menos
  como una secuencia de recargas.
- **Un fondo más vivo.** En escritorio, un glow que sigue al cursor convive con
  otro
  que flota de forma autónoma.

<figure>
  <img
    src="/images/blog/changelog-v2/blog-index.webp"
    alt="Índice del blog con una columna fija a la izquierda y la lista de artículos a la derecha."
    loading="lazy"
  />
  <figcaption>El nuevo índice del blog: una columna fija con la introducción, el conteo de artículos y los temas.</figcaption>
</figure>

<figure>
  <img
    src="/images/blog/changelog-v2/blog-post.webp"
    alt="Un artículo del blog en modo oscuro, con la tabla de contenidos fija a la derecha."
    loading="lazy"
  />
  <figcaption>Dentro de un post: tipografía pensada para lectura y una tabla de contenidos fija que acompaña el recorrido.</figcaption>
</figure>

## Cambiado

- **Un modo claro cálido, tipo "sunset".** Se fue la paleta pálida. El modo claro
  ahora es un espacio cálido inspirado en Gruvbox: fondos de arena profundos,
  texto marrón oscuro y acentos naranja quemado. El modo oscuro queda intacto.
- **Todo tematizado con tokens.** Cards, encabezado, drawer, blog y estilos de
  lectura ya no dependen de grises fijos: leen de los tokens, así el sistema se
  mantiene consistente.

<figure>
  <img
    src="/images/blog/changelog-v2/home-light.webp"
    alt="Home en modo claro con la paleta cálida sunset: fondos de arena, texto marrón y acentos naranja."
    loading="lazy"
  />
  <figcaption>El modo claro "sunset": fondos de arena profundos, texto marrón oscuro y acentos naranja quemado.</figcaption>
</figure>

## Corregido

- **El tema ya no salta al navegar.** Con las transiciones entre páginas, el tema
  guardado se reaplica en cada cambio, así que claro/oscuro se mantiene.

## Accesibilidad

- **Las cards del blog se pueden abrir enteras.** Con un patrón accesible de
  enlace expandido, toda la card funciona como entrada principal mientras los
  tags y el enlace visible siguen funcionando aparte.
- **Estados de foco consistentes y contraste revisado.** Los estados de foco salen de
  los tokens, y el acento del modo claro se ajustó para cumplir WCAG AA en texto.

## Qué salió desde la v2.0

La base v2 cumplió su trabajo: las mejoras dejaron de pelear con los cimientos.
Después vinieron tres versiones más chicas.

### v2.1 — Compartir y SEO

Ahora los posts tienen metadatos de Open Graph y Twitter como corresponde, así que
al compartir un enlace por fin aparecen título, descripción e imagen en LinkedIn
y X. Cada post puede definir su propia imagen para compartir, y el botón de
compartir usa la API nativa en móvil y copia el enlace en escritorio cuando hace
falta. Los proyectos también se renovaron: apareció una card para este mismo
sitio y, en teléfono, el listado ahora destaca un proyecto a la vez, el que
queda más cerca del centro de la pantalla.

<figure data-layout="row">
  <div class="device-row">
    <img
      src="/images/blog/changelog-v2/projects-desktop.webp"
      alt="Proyectos en escritorio: al pasar el cursor por una card se revelan sus detalles sobre la captura."
      loading="lazy"
    />
    <img
      src="/images/blog/changelog-v2/projects-mobile.webp"
      alt="Proyectos en móvil: solo la card más cercana al centro de la pantalla muestra sus detalles."
      loading="lazy"
    />
  </div>
  <figcaption>Proyectos lado a lado: detalles al pasar el cursor en escritorio y foco de a una card en móvil.</figcaption>
</figure>

### v2.2 — Bilingüe (EN/ES)

Todo el sitio ahora vive en inglés y español. El inglés queda en la raíz, el
español bajo `/es/`, y un único selector en el header cambia toda la experiencia:
landing, blog y navegación. Reemplaza el viejo switch por post, que solo
aparecía cuando existía una traducción.

<figure data-layout="row">
  <div class="device-row">
    <img
      src="/images/blog/changelog-v2/contact-desktop.webp"
      alt="Sección de contacto ya localizada en escritorio: enlaces a redes, correo y descarga de CV junto a un CTA al blog."
      loading="lazy"
    />
    <img
      src="/images/blog/changelog-v2/contact-mobile.webp"
      alt="La misma sección de contacto ya localizada en móvil, adaptada a pantallas pequeñas."
      loading="lazy"
    />
  </div>
  <figcaption>La sección de contacto ya localizada, en escritorio y móvil, después del salto a un sitio bilingüe.</figcaption>
</figure>

### v2.3 — Experiencia profesional

v2.3 le da un lugar propio a la experiencia profesional. Antes quedaba más
diluida dentro de la landing; ahora aparece como una sección clara y fácil de
recorrer, con empresa, rol, período, contexto del trabajo y tecnologías
agrupadas por tipo. También ajusta mejor el mensaje del perfil: una base fuerte
de frontend que hoy ya se abre hacia ingeniería de producto, entrega y
workflows con agentes.

<figure data-layout="row">
  <div class="device-row">
    <img
      src="/images/blog/changelog-v2/experience-desktop.webp"
      alt="Sección de experiencia en escritorio, modo oscuro: tarjeta de VAIRIX con tecnologías agrupadas."
      loading="lazy"
    />
    <img
      src="/images/blog/changelog-v2/experience-mobile.webp"
      alt="Sección de experiencia en móvil, modo claro: misma información adaptada a pantalla angosta."
      loading="lazy"
    />
  </div>
  <figcaption>Experiencia profesional en escritorio (modo oscuro) y móvil (modo claro).</figcaption>
</figure>

## Qué sigue

Más posts escritos y seguir puliendo. A partir de ahora las versiones van a ser
chicas y frecuentes.
