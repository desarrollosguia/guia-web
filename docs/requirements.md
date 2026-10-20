# Requisitos

## 1. Alcance

Sitio institucional de Guia, estudio de soluciones digitales (páginas web, aplicaciones, bots y sistemas a medida) para empresas y emprendedores de Argentina y del exterior.

- **v0:** landing de una sola página, en dos idiomas. Publicada el 21/10/2026 en `desarrollosguia.com`.
- **Primera versión:** inicio en castellano e inglés (hero, proyectos, contacto con los socios y pie) y 404, en tema oscuro y claro, diseñada en Figma. Reemplaza a la v0.
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

## 5. Contenido de la primera versión

| Elemento            | Castellano                                                                 | English                                                                |
| ------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Marca               | Guia                                                                       | Guia                                                                   |
| Título de pestaña   | Guia \| Webs, aplicaciones, bots y sistemas a medida                       | Guia \| Custom websites, apps, bots and systems                        |
| Titular             | De la idea a un sistema funcional                                          | From idea to a working system                                          |
| Bajada              | Diseñamos y desarrollamos a tu medida. Contanos qué necesitás.             | We design and build to fit you. Tell us what you need.                 |
| Llamados            | Escribinos, Nuestros proyectos                                             | Get in touch, Our projects                                             |
| Proyectos           | Audenpass, Predictor del Mundial 2026                                      | Audenpass, World Cup 2026 Predictor                                    |
| Botón de proyecto   | Ver proyecto                                                               | View project                                                           |
| Idea de marca (pie) | La F y la J son las teclas guía de tu teclado: este es tu punto de partida | The F and J are your keyboard's home keys: this is your starting point |
| 404                 | No encontramos esta página. Volver al inicio                               | We couldn't find this page. Back to home                               |
| Pie                 | © 2026 Guia                                                                | © 2026 Guia                                                            |

- Los proyectos se muestran con su nombre y una captura. Un proyecto con enlace lleva el botón «Ver proyecto» (abre en pestaña nueva); sin enlace se muestra solo el nombre. Audenpass queda sin enlace hasta su lanzamiento (23/10/2026).
- Contacto: `hola@desarrollosguia.com`, GitHub, y el nombre de cada socio con su WhatsApp y su LinkedIn.
- Tema: sigue el sistema operativo; el selector (sistema, claro, oscuro) recuerda la elección en el navegador. Sin JavaScript queda el tema del sistema y el selector no se muestra.
- 404: un archivo por idioma (`/404.html` y `/en/404.html`), con `noindex` y fuera del sitemap.

## 6. Criterios transversales

- Contraste AA, navegación por teclado, foco visible.
- Imágenes optimizadas. La única JavaScript es el script del tema, servido desde el propio dominio.
- Rápido en celular (LCP menor a 2,5 s en una conexión 4G).
- Diseño verificado a 1440 y 390 px, en `/` y `/en/`.
- Encabezados de seguridad (CSP estricta, HSTS, `nosniff`, `Referrer-Policy`, `Permissions-Policy`).
- Vistas previas y `*.pages.dev` con `noindex`.

## 7. Legal

- Pie con «© 2026 Guia» y el mail. Sin datos fiscales.
- Repo bajo «Copyright (c) 2026 Guia. All rights reserved.»
- Aviso de privacidad cuando exista el formulario (v1).
