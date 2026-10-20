# Guia

Sitio institucional de Guia, estudio de soluciones digitales. Astro estático con React y Tailwind v4, en castellano (`/`) e inglés (`/en/`). Producción: https://desarrollosguia.com

## Requisitos

- Node 22.22.1 (`.nvmrc`)
- pnpm 10.34.5

## Comandos

```bash
pnpm install
pnpm dev          # servidor de desarrollo en http://localhost:3000
pnpm build        # sitio estático en dist/
pnpm check        # lint, typecheck y tests unitarios
pnpm test:e2e     # Playwright con axe, a 1440 y 390 px
```

## Estructura

- `src/components`: componentes de React
- `src/layouts` y `src/pages`: Astro
- `src/i18n`: diccionarios en castellano e inglés
- `design/`: tokens de diseño; `pnpm tokens:build` genera `src/styles/tokens.css`
- `docs/`: requisitos, diseño y backlog

## Flujo

Ramas `feature/*` con pull request a `main` (squash). `main` se despliega en Cloudflare Pages y cada rama tiene su vista previa.
