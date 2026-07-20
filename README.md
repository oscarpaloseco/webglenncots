# Web Glenn Cots

Web de **Glenn Cots**, dietista-nutricionista especializada en patología tiroidea,
enfermedades autoinmunes y salud digestiva (enfoque PNI).

Construida con **[Astro](https://astro.build)**. Estática, rápida y sin dependencias de
plataforma: se despliega en cualquier hosting de estáticos (Vercel, Netlify, Cloudflare…).

## Puesta en marcha

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist
npm run preview    # sirve /dist en local
```

## Estructura

```
src/
  components/      Header, Footer, StickyCta, Portrait, Figure, AreaIcon
  data/            site.ts (nav, contacto) · areas.ts (4 áreas de consulta)
  layouts/         Base.astro (head/SEO, fuentes, motion)
  pages/           index, consulta, sobre-mi, programa-fuegas, ebooks,
                   contacto, blog/, aviso-legal, privacidad
  content/blog/    artículos del blog (Markdown) ← CMS
  styles/global.css  sistema de diseño (tokens, tipografía, botones)
public/            favicon, og-image, robots.txt
```

## CMS — contenido en el repositorio (el hub)

El contenido editorial vive **versionado en Git**, dentro de `src/content/`, mediante
las [Content Collections de Astro](https://docs.astro.build/en/guides/content-collections/).
El repositorio de GitHub es el "hub": cada cambio de contenido es un commit.

### Añadir un artículo al blog

Crea un `.md` en `src/content/blog/` con este frontmatter:

```markdown
---
title: "Título del artículo"
excerpt: "Resumen de una o dos frases."
date: 2026-07-20
category: "Tiroides"     # Tiroides | Digestivo | Autoinmunidad | Metabólico | Hábitos
image: "photo-XXXXXXXX"  # id de Unsplash, o ruta a /public
imageAlt: "Descripción de la imagen"
readingTime: "5 min"
draft: false             # true = no se publica
---

Cuerpo del artículo en Markdown…
```

El esquema (campos y validación) está en [`src/content.config.ts`](src/content.config.ts).
Aparece automáticamente en `/blog` y en la home. Los `draft: true` no se publican.

> Al ser Git-based, más adelante se puede conectar un CMS de capa visual (Decap, Tina,
> Keystatic) que escribe estos mismos ficheros, sin cambiar la web. El hub sigue siendo
> el repositorio.

## Diseño

- **Paleta** (derivada de las referencias de la clienta): crema `#FAF9F4`, verde bosque
  `#2E482C`, salvia `#A9BBB1`, terracota `#A65A2A`. Tokens en `src/styles/global.css`.
- **Tipografía**: Spectral (serif, titulares) + Hanken Grotesque (sans, texto).
- **Motion**: reveal on scroll robusto (visible por defecto; solo anima cuando la página
  está en primer plano y el usuario acepta movimiento). Respeta `prefers-reduced-motion`.

## Pendiente de la clienta

- **Fotos reales de Glenn**: ahora hay *placeholders* elegantes (componente `Portrait`).
  Sustituir por fotos en `public/` y usar `<Figure>`/`<img>` en su lugar.
- **Datos legales**: nº de colegiada, razón fiscal, textos de aviso legal y privacidad.
- **Reserva de cita**: el botón "Pide cita" apunta al formulario de `/contacto`.
  Conectar con Calendly/agenda o con un backend de formularios (Formspree, etc.).
- **Enlace "Productos recomendados"**: apunta a `drabertapedreno.com`; confirmar si es
  correcto o debe cambiarse (ver `src/data/site.ts`).
- **Instagram / email reales** en `src/data/site.ts`.
