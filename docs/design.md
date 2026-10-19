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

Fuente: variables de Figma. Hasta que exista el archivo, `design/tokens.local.json` con valores provisorios marcados como tales. `scripts/build-tokens.mjs` genera los estilos de `src/styles/` y `scripts/lint-tokens.mjs` rechaza colores literales, valores arbitrarios de Tailwind y la marca escrita a mano fuera de `SITE_NAME`.

## 4. i18n

Diccionarios `src/i18n/es.ts` y `src/i18n/en.ts` con el mismo tipo, así a una traducción no le puede faltar una clave. Castellano por defecto, sin prefijo.

## 5. v0

Pantalla única sobre fondo oscuro, tipografía Inter autoalojada, las teclas F y J dibujadas en CSS como isotipo provisorio. Sin fotos y sin JavaScript.

## 6. Despliegue

`feature/*` con vista previa por rama; `main` es producción. Build `pnpm build`, salida `dist`.
