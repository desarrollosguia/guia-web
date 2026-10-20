# Diseño

## 1. Stack

Astro estático (`output: 'static'`) con componentes de React (`@astrojs/react`), Tailwind v4 y TypeScript estricto. Las páginas y el layout son `.astro`; los componentes visuales, `.tsx`. Se hidrata solo lo que necesita interacción (`client:visible`). Versiones fijas en `package.json`.

## 2. Estructura

```
src/
  components/   piezas visuales en React
  layouts/      layout base (lang, hreflang, canonical, meta)
  pages/        index.astro y en/index.astro
  i18n/         es.ts, en.ts y el tipo compartido
  config/       SITE_NAME, URLs y constantes
  styles/       tokens generados
design/         tokens (Figma y provisorios)
scripts/        tokens, lints y Figma
public/         _headers, robots.txt, favicon
```

## 3. Tokens

Fuente: variables de Figma («Color oscuro», «Color claro» y «Base»). `design/tokens.local.json` guarda los valores exportados el 20/10 (colores de los dos temas, tipografías, radios, tamaños de tecla, movimiento, foco y énfasis) hasta que exista una exportación automática (BL-09). Los colores se emiten como variables de CSS por tema (`prefers-color-scheme` y `data-theme`) y se consumen por nombre desde Tailwind. `scripts/build-tokens.mjs` genera los estilos de `src/styles/` y `scripts/lint-tokens.mjs` rechaza colores literales, valores arbitrarios de Tailwind y la marca escrita a mano fuera de `SITE_NAME`.

La dirección visual, el sistema de diseño y la estructura de la v1 están en `docs/design-brief.md`.

## 4. i18n

Diccionarios `src/i18n/es.ts` y `src/i18n/en.ts` con el mismo tipo, así a una traducción no le puede faltar una clave. Castellano por defecto, sin prefijo.

## 5. Primera versión

Diseño en Figma, archivo «Guia», página «Primera versión»:

| Pantalla                   | Frame 1440 | Frame 390 |
| -------------------------- | ---------- | --------- |
| Inicio, castellano, oscuro | 13:5404    | 13:5526   |
| Inicio, castellano, claro  | 13:5651    | 13:5895   |
| Inicio, inglés, oscuro     | 13:5773    | 13:6000   |
| 404, castellano, oscuro    | 13:6105    | 13:6154   |

Componentes (página «Componentes»): Key 12:3074, Emphasis 12:3079, KeyRow 12:3118, LanguageSwitch 12:3131, ThemeSwitch 12:3147, Header 12:3193, Footer 12:3215, ProjectRow 12:3234, SectionHeader 12:3243, PartnerCard 12:3278, ContactChannel 4:978, Logo 3:315.

El menú móvil (bajo 768 px) es un `popover` nativo: abre sin JavaScript, se cierra con Esc y devuelve el foco; `public/menu.js` solo lo cierra al tocar un enlace de sección. Todo se renderiza estático (sin islas de React): la política de seguridad de contenido no admite el script inline con el que Astro hidrata. La interacción vive en `public/theme.js`, un script bloqueante en el `<head>` que aplica el tema guardado (`data-theme`) y activa el selector. Tipografías: Instrument Serif y Geist autoalojadas con Fontsource. Las capturas de los proyectos están en `src/assets/projects/` y salen en WebP con `astro:assets`.

Diferencias con Figma, a propósito: Audenpass sin botón (sin enlace); las tarjetas de socios se ajustan a su contenido para no desbordar el contenedor; el pie a 390 fluye sin la altura fija del frame; el nombre del Predictor corta sin balancear; las teclas del menú usan `key-lg` fluido (24 px a 390) y no los 30 px del frame.

## 6. Despliegue

`feature/*` con vista previa por rama; `main` es producción. Build `pnpm build`, salida `dist`.
