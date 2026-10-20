# Requisitos

## 1. Alcance

Sitio institucional de Guia, estudio de soluciones digitales (páginas web, aplicaciones, bots y sistemas a medida) para empresas y emprendedores de Argentina y del exterior.

- **v0:** landing de una sola página, en dos idiomas. Publicada el 21/10/2026 en `desarrollosguia.com`.
- **v1:** sitio completo diseñado en Figma: servicios, proyectos, cómo trabajamos, nosotros y contacto con formulario.

## 2. Marca

- Se escribe siempre **Guia**, sin tilde, en todos los idiomas.
- El nombre viene de las teclas guía del teclado, la F y la J: tienen relieve y son el punto de partida de los dedos. También son nuestras iniciales.
- Tono: innovador, con conocimiento, punto de referencia de cada proyecto. Sin cursilería.

## 3. Restricciones

- Costo cero. Lo único que se paga es el dominio.
- Hosting en Cloudflare Pages, conectado a `desarrollosguia/guia-web`. Sin servidor propio.
- Dominio: `desarrollosguia.com`, con `www` redirigido a la raíz.
- Sin cookies: Cloudflare Web Analytics.

## 4. Idiomas y URLs

- Castellano rioplatense con voseo en `/`; inglés estadounidense en `/en/`.
- Selector de idioma visible en todas las páginas. `lang` correcto, `hreflang` entre versiones y `x-default` a `/`.
- Slugs traducidos (por ejemplo `/privacidad` y `/en/privacy`).
- No se traducen la marca ni los nombres de las teclas (F y J).

## 5. Contenido de la v0

| Elemento      | Castellano                                                                                   | English                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Marca         | Guia                                                                                         | Guia                                                                                         |
| Título        | Soluciones digitales a medida                                                                | Custom digital solutions                                                                     |
| Bajada        | Diseñamos y desarrollamos webs, aplicaciones, bots y sistemas para empresas y emprendedores. | We design and build websites, apps, bots and custom systems for companies and entrepreneurs. |
| Idea de marca | La F y la J son las teclas guía del teclado: el punto de partida.                            | F and J are the keyboard's home keys: where everything starts.                               |
| Llamado       | Escribinos                                                                                   | Get in touch                                                                                 |
| Pie           | © 2026 Guia                                                                                  | © 2026 Guia                                                                                  |

Contacto: `hola@desarrollosguia.com` y GitHub, más una sección «Contacto» / «Contact» con el nombre de cada socio, su WhatsApp y su LinkedIn.

## 6. Criterios transversales

- Contraste AA, navegación por teclado, foco visible.
- Imágenes optimizadas; sin JavaScript en la v0.
- Rápido en celular (LCP menor a 2,5 s en una conexión 4G).
- Diseño verificado a 1440 y 390 px, en `/` y `/en/`.
- Encabezados de seguridad (CSP estricta, HSTS, `nosniff`, `Referrer-Policy`, `Permissions-Policy`).
- Vistas previas y `*.pages.dev` con `noindex`.

## 7. Legal

- Pie con «© 2026 Guia» y el mail. Sin datos fiscales.
- Repo bajo «Copyright (c) 2026 Guia. All rights reserved.»
- Aviso de privacidad cuando exista el formulario (v1).
