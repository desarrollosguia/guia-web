# Directrices de diseño de la v1

Este documento define qué se diseña y con qué reglas. Lo que no figura acá no está decidido: se propone y se aprueba antes de diseñarlo. Los textos finales del sitio no se escriben en este documento: los de la v0 están en `docs/requirements.md` y los nuevos se aprueban antes de ir al diseño.

## 1. Plataforma de marca

### 1.1 Propósito

Que una empresa o un emprendedor con un problema difuso encuentre a quien lo entienda, lo diseñe y lo deje funcionando, sin intermediarios.

### 1.2 Posicionamiento

Estudio de dos socios técnicos que llevan cada proyecto de punta a punta: entendemos el problema, diseñamos, desarrollamos y lo dejamos funcionando. El diferencial es hablar directo con quien construye. Esta frase es interna: no es un texto del sitio.

**Clientes ideales**

- Principal: pymes y emprendedores de Argentina con un problema de negocio concreto (procesos manuales, ventas sin canal digital, sistemas que no se hablan) que prefieren un equipo chico y senior a una agencia grande.
- Secundario: empresas del exterior que necesitan desarrollo a medida en una zona horaria compatible.

**Servicios:** páginas web, aplicaciones, bots y sistemas a medida.

### 1.3 Personalidad

| Rasgo   | Cómo se ve                                                                       |
| ------- | -------------------------------------------------------------------------------- |
| Precisa | Dice qué hace y cómo, con verbos concretos. Sin adjetivos que no sumen.          |
| Cercana | Voseo, primera persona del plural, frases cortas. Se habla de persona a persona. |
| Segura  | Afirma lo que sabe y avisa lo que no es buena idea. No exagera.                  |
| Curiosa | Pregunta antes de proponer. Le interesa el problema del otro.                    |

**Qué no parece Guia:** una agencia de marketing grande, una fábrica de software con fotos de stock, una plantilla, una marca cripto, neón o gamer, ni una pareja emprendedora.

### 1.4 Tono de voz

- Castellano rioplatense con voseo en `/`. Inglés estadounidense en `/en/`. Ambos con el mismo registro: directo, concreto y sin hype.
- Se dice qué se hace y para quién. Se evita la jerga vacía y toda métrica que no se pueda probar.
- Sin emojis y sin superlativos. Sin rayas largas en ningún texto.
- Primera persona del plural en todo el sitio. Los nombres propios aparecen solo en Nosotros y en Contacto.

Ejemplos de registro (ilustran la voz, no son texto del sitio):

| Sí                                                                     | No                                                                   |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Contanos qué problema tenés y te decimos cómo lo resolveríamos.        | Soluciones integrales 360 para llevar tu negocio al siguiente nivel. |
| Armamos el sistema que tu operación necesita, no el que viene en caja. | Somos apasionados por la innovación.                                 |
| Si algo no conviene, te lo decimos antes de empezar.                   | ¡Transformamos tus ideas en realidad!                                |
| Tell us what's slowing you down and we'll tell you how we'd fix it.    | We leverage cutting-edge synergies.                                  |

### 1.5 La idea de las teclas F y J

La F y la J son las teclas guía del teclado: tienen relieve y de ahí parten los dedos. Es la metáfora central: Guia es el punto de partida de cada proyecto. También son nuestras iniciales, pero eso es un dato secundario.

Reglas de uso:

1. **Historia principal:** teclas guía, relieve, punto de partida. Las teclas no son la cara de la marca: son un guiño discreto para quien se detiene a mirar. Las iniciales no aparecen en el hero ni en el titular.
2. **Las teclas F y J solo como guiño**, en tamaño chico (32 px) y en lugares poco visibles: la sección de idea de marca y el pie. No aparecen en el hero ni en tarjetas, y no hay teclas grandes. El hero es tipográfico.
3. **La barra de relieve** (la marca que tienen las teclas F y J) es el signo gráfico recurrente: marcador de sección, subrayado del enlace activo y anillo de foco. Mide 32 px de ancho por 4 px de alto, con radio completo, en el color de acento.
4. **Logo:** el wordmark «Guia» con la barra de relieve debajo. El isotipo, para favicon y avatares, es una tecla con la «G» y la barra. Las teclas F y J juntas no forman parte del logo.
5. **Wordmark:** «Guia» en la sans de títulos, peso 600, tracking `-0.03em`. Siempre «Guia», sin tilde, y con inicial mayúscula dentro de un texto.
6. **Inglés:** se explica «home keys» en una frase cercana, porque el término es menos conocido. La marca y los nombres de las teclas no se traducen.
7. **Prohibido:** teclados completos, cursores parpadeantes, código decorativo y letras sueltas como relleno.

## 2. Dirección visual

### 2.1 Principios

1. **Tipografía primero.** El sistema gráfico sale de la escala tipográfica, la grilla y la barra de relieve. No hay ilustraciones ni fotos de stock.
2. **Una sola voz de color.** Base neutra y un único acento verde azulado, usado con poco volumen: acciones, relieve y foco.
3. **Capa técnica en mono.** Etiquetas, numeración de secciones, teclas y datos van en una mono. Es la forma de mostrar conocimiento sin explicarlo.
4. **Movimiento con sentido.** El scroll cuenta el recorrido (de un problema difuso a un sistema funcionando) con animaciones nativas de CSS. Nada bloquea el contenido ni el scroll nativo.
5. **Rápido antes que espectacular.** Ninguna decisión visual compromete el LCP en celular.

### 2.2 Referencias

| Referencia                    | Qué se toma                                                                            | Qué se evita                                                               |
| ----------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| https://www.nk.studio/        | Titulares enormes de dos o tres palabras, una sola sans, un punto de color como acento | Siete canvas, 130 imágenes, banner de cookies y un menú de quince entradas |
| https://significa.co/         | Orden de secciones: trabajo seleccionado, servicios, proceso, nosotros, preguntas      | La fuente propia y la densidad de logos                                    |
| https://darkroom.engineering/ | Orgullo técnico visible (capacidades, tecnologías) y la mono como voz                  | La estética de terminal roja y el display ilegible                         |
| https://linear.app/           | Tipografía con tracking negativo, grises con jerarquía, casi negro como fondo          | Animaciones pesadas por sección                                            |
| https://thoughtbot.com/       | Posicionamiento por seniority, caso destacado arriba, mono en etiquetas                | Varios colores saturados y las fotos recortadas en bloques                 |
| https://locomotive.ca/en      | Navegación mínima con el selector de idioma dentro del menú                            | La intro animada que tapa el contenido                                     |
| https://basement.studio/      | La pareja Geist y Geist Mono, y el tono con actitud                                    | Antirreferencia de rendimiento: escena WebGL y 6,8 MB                      |
| https://studiopingpong.com/   | Personalidad en el copy                                                                | Antirreferencia: 10 MB y un juego en la portada                            |

Los portfolios propios son la referencia de gusto: base neutra, un acento verde azulado, una mono para la capa técnica y modos claro y oscuro con selector (https://florenciamorelli.github.io/portfolio/ y https://juantmartinez17.github.io/portfolio/).

### 2.3 Qué se evita

- WebGL, 3D, video de fondo, cursores personalizados y scroll-jacking.
- Librerías de animación o de scroll. Todo el movimiento es CSS.
- Fotos de stock, ilustraciones genéricas, íconos decorativos en cada tarjeta y gradientes de moda.
- Más de un color de acento y bloques de color saturado.
- Carruseles automáticos, pop-ups y banners de cookies (el sitio no usa cookies).

### 2.4 Fotografía e imágenes

- **Retratos** (las fotos de los portfolios): relación 4:5, recorte al mismo encuadre, tratamiento monocromo con el mismo contraste, sobre un fondo neutro (si el original no lo tiene, se recorta sobre `surface-raised`). Mínimo 800 px de ancho. Si una foto no cumple, se reemplaza antes de publicar.
- **Capturas de proyectos:** relación 16:10, dentro de un marco con `radius-md` y borde de 1 px (`border`). Capturas reales, sin mockups de dispositivos.
- **Formatos:** AVIF y WebP generados en el build con anchos 480, 960 y 1440, `loading="lazy"` salvo la imagen del LCP, y siempre con `width`, `height` y `alt`.

## 3. Sistema de diseño

### 3.1 Temas

El sitio tiene dos temas, oscuro y claro. Arranca según la preferencia del sistema operativo y un selector permite cambiarlo; la elección se recuerda en el navegador. Los dos temas usan **los mismos nombres de token**: solo cambian los valores.

- Sin JavaScript queda el tema del sistema y el selector no se muestra.
- La elección se guarda en `localStorage` y se aplica como `data-theme` en `<html>` antes del primer render, con un script de pocas líneas servido desde el propio dominio (la política de seguridad de contenido solo admite scripts propios).
- `color-scheme` se declara en cada tema, y el `<meta name="theme-color">` se define para ambos.

### 3.2 Paleta

Valores iniciales. Se recalculan si cambia algún color.

| Token            | Oscuro                    | Claro                    | Uso                                                          |
| ---------------- | ------------------------- | ------------------------ | ------------------------------------------------------------ |
| `canvas`         | `#0b0d10`                 | `#f6f7f8`                | Fondo de página                                              |
| `surface`        | `#14181d`                 | `#ffffff`                | Tarjetas y campos                                            |
| `surface-raised` | `#1c2128`                 | `#eceef1`                | Teclas, elementos elevados, fondo de retratos                |
| `border`         | `#2b333d`                 | `#d5dae0`                | Divisores y bordes decorativos                               |
| `border-strong`  | `#6b7684`                 | `#76808c`                | Bordes que identifican un control (campos, botón secundario) |
| `content`        | `#eef1f4`                 | `#0b0d10`                | Texto principal                                              |
| `content-muted`  | `#a9b2bd`                 | `#434c58`                | Texto secundario                                             |
| `content-subtle` | `#8a94a1`                 | `#56606c`                | Texto de apoyo (solo sobre `canvas` y `surface`)             |
| `accent`         | `#2fc7a8`                 | `#0b7a69`                | Acciones, enlaces, barra de relieve                          |
| `accent-hover`   | `#5ad9bf`                 | `#096354`                | Estado hover del acento                                      |
| `on-accent`      | `#0b0d10`                 | `#ffffff`                | Texto sobre `accent`                                         |
| `focus`          | `#5ad9bf`                 | `#096354`                | Anillo de foco                                               |
| `danger`         | `#ff8a80`                 | `#b3261e`                | Errores de formulario                                        |
| `key-highlight`  | `rgb(255 255 255 / 0.12)` | `rgb(255 255 255 / 0.9)` | Borde superior de las teclas                                 |
| `key-edge`       | `#05070a`                 | `#c3c9d0`                | Canto inferior de las teclas                                 |
| `key-shadow`     | `rgb(0 0 0 / 0.45)`       | `rgb(11 13 16 / 0.18)`   | Sombra ambiente de las teclas                                |

El acento se usa con poco volumen: no hay fondos grandes de acento ni texto largo en acento. Un estado no se comunica solo con color: siempre suma texto, ícono o forma.

### 3.3 Contraste (WCAG 2.2 AA)

Ratios calculados con la fórmula de luminancia relativa del estándar. Mínimos: 4,5 para texto normal, 3 para bordes de controles y foco.

### Contraste en oscuro

| Par                                                     | Canvas | Surface | Surface raised | Mínimo | Resultado |
| ------------------------------------------------------- | ------ | ------- | -------------- | ------ | --------- |
| `content` (Texto principal)                             | 17,16  | 15,72   | 14,28          | 4,5    | AA        |
| `content-muted` (Texto secundario)                      | 9,07   | 8,31    | 7,54           | 4,5    | AA        |
| `content-subtle` (Texto de apoyo)                       | 6,33   | 5,80    | 5,26           | 4,5    | AA        |
| `accent` (Enlace y acento sobre fondo)                  | 9,13   | 8,37    | 7,60           | 4,5    | AA        |
| `danger` (Error)                                        | 8,52   | 7,81    | 7,09           | 4,5    | AA        |
| `border-strong` (Borde de campos y botones secundarios) | 4,22   | 3,86    | 3,51           | 3      | AA        |
| `focus` (Anillo de foco)                                | 11,22  | 10,28   | 9,33           | 3      | AA        |

`on-accent` sobre `accent`: 9,13. Sobre `accent-hover`: 11,22. Mínimo 4,5 (AA).

### Contraste en claro

| Par                                                     | Canvas | Surface | Surface raised | Mínimo | Resultado |
| ------------------------------------------------------- | ------ | ------- | -------------- | ------ | --------- |
| `content` (Texto principal)                             | 18,14  | 19,46   | 16,74          | 4,5    | AA        |
| `content-muted` (Texto secundario)                      | 8,11   | 8,70    | 7,49           | 4,5    | AA        |
| `content-subtle` (Texto de apoyo)                       | 5,96   | 6,39    | 5,50           | 4,5    | AA        |
| `accent` (Enlace y acento sobre fondo)                  | 4,89   | 5,25    | 4,51           | 4,5    | AA        |
| `danger` (Error)                                        | 6,09   | 6,54    | 5,62           | 4,5    | AA        |
| `border-strong` (Borde de campos y botones secundarios) | 3,74   | 4,01    | 3,45           | 3      | AA        |
| `focus` (Anillo de foco)                                | 6,69   | 7,18    | 6,18           | 3      | AA        |

`on-accent` sobre `accent`: 5,25. Sobre `accent-hover`: 7,18. Mínimo 4,5 (AA).

Notas: `accent` sobre `surface-raised` en claro queda en 4,51, el límite. Se usa como texto solo sobre `canvas` y `surface`. Los bordes `border` y `key-edge` son decorativos y no cumplen 3:1 a propósito: ningún control se identifica solo por ellos.

### 3.4 Tipografías

Solo fuentes gratuitas con licencia libre, autoalojadas con Fontsource (sin pedidos a terceros, compatible con la política de seguridad de contenido).

| Rol                                        | Familia    | Paquete                           | Licencia | Peso               |
| ------------------------------------------ | ---------- | --------------------------------- | -------- | ------------------ |
| Títulos y texto                            | Geist      | `@fontsource-variable/geist`      | OFL-1.1  | Variable 100 a 900 |
| Mono: etiquetas, numeración, teclas, datos | Geist Mono | `@fontsource-variable/geist-mono` | OFL-1.1  | Variable 100 a 900 |

Reemplazan a Inter. Las dos están en Google Fonts, así que también están disponibles al diseñar sin instalar nada. Solo se cargan los subconjuntos `latin` y `latin-ext` (archivos `woff2` de 29 KB y 16 KB para Geist, 23 KB y 15 KB para Geist Mono). Se precarga solo el `latin` de Geist. Se usa `font-display: swap` y una fuente de respaldo del sistema con métricas ajustadas para no mover el layout.

Alternativa con más carácter para títulos, si se prefiere: Bricolage Grotesque (`@fontsource-variable/bricolage-grotesque`, OFL-1.1).

### 3.5 Escala tipográfica

Cada estilo es un token `type-*` con tamaño fluido entre 390 y 1440 px.

| Estilo     | Familia    | Tamaño                             | 390 px | 1440 px | Peso | Interlineado | Tracking | Uso                                 |
| ---------- | ---------- | ---------------------------------- | ------ | ------- | ---- | ------------ | -------- | ----------------------------------- |
| `display`  | Geist      | `clamp(2.75rem, 7vw, 5.5rem)`      | 44     | 88      | 600  | 1.05         | -0.04em  | Titular del hero                    |
| `headline` | Geist      | `clamp(2rem, 4.4vw, 3.5rem)`       | 32     | 56      | 600  | 1.1          | -0.03em  | Título de página y de sección       |
| `title`    | Geist      | `clamp(1.25rem, 2vw, 1.5rem)`      | 20     | 24      | 600  | 1.25         | -0.015em | Tarjetas y subtítulos               |
| `lead`     | Geist      | `clamp(1.125rem, 2.2vw, 1.375rem)` | 18     | 22      | 400  | 1.55         | 0        | Bajadas                             |
| `body`     | Geist      | `1rem`                             | 16     | 16      | 400  | 1.6          | 0        | Texto corrido                       |
| `small`    | Geist      | `0.875rem`                         | 14     | 14      | 400  | 1.5          | 0        | Notas, pie, ayudas                  |
| `label`    | Geist Mono | `0.8125rem`                        | 13     | 13      | 500  | 1.25         | 0.08em   | Etiquetas en mayúsculas, numeración |
| `key`      | Geist Mono | `clamp(3rem, 9vw, 6rem)`           | 48     | 96      | 700  | 1            | 0        | Letra de las teclas grandes         |

Medida máxima de línea: 68 caracteres en texto corrido (`max-w-prose`). Los titulares usan `text-wrap: balance` y los párrafos `text-wrap: pretty`. Tamaño mínimo de texto: 13 px, solo en `label`.

### 3.6 Espaciado

Se mantiene el multiplicador único `--spacing: 0.25rem` (4 px). Pasos permitidos, en múltiplos de 4 px: 1, 2, 3, 4, 6, 8, 12, 16, 24, 32 (4, 8, 12, 16, 24, 32, 48, 64, 96 y 128 px). Cualquier otro valor se propone antes de usarlo.

| Uso                                 | 390 px          | 1440 px                         |
| ----------------------------------- | --------------- | ------------------------------- |
| Margen lateral de página            | 20 px (`px-5`)  | Centrado, contenedor de 1200 px |
| Separación vertical entre secciones | 64 px (`py-16`) | 96 px (`py-24`)                 |
| Separación título y contenido       | 24 px (`gap-6`) | 32 px (`gap-8`)                 |
| Relleno de tarjeta                  | 20 px (`p-5`)   | 24 px (`p-6`)                   |
| Separación entre tarjetas           | 16 px (`gap-4`) | 24 px (`gap-6`)                 |

### 3.7 Grilla y puntos de quiebre

|                    | 390 px | 1440 px                                      |
| ------------------ | ------ | -------------------------------------------- |
| Columnas           | 4      | 12                                           |
| Canal              | 16 px  | 24 px                                        |
| Margen             | 20 px  | 120 px (contenedor de 1200 px, `max-w-page`) |
| Ancho de contenido | 350 px | 1200 px                                      |

Puntos de quiebre: `sm` 640 px (ajustes finos del móvil, ya usado en la v0), `md` 768 px (menú pasa a barra horizontal, tarjetas a dos columnas) y `lg` 1024 px (grilla de 12 columnas y secciones a dos columnas). Se diseña y verifica a 390 y 1440 px; los intermedios se resuelven con el mismo sistema.

### 3.8 Radios

| Token         | Valor   | Uso                                           |
| ------------- | ------- | --------------------------------------------- |
| `radius-sm`   | 6 px    | Etiquetas y campos pequeños                   |
| `radius-md`   | 12 px   | Botones, campos, tarjetas, marcos de capturas |
| `radius-lg`   | 20 px   | Teclas grandes                                |
| `radius-full` | 9999 px | Barra de relieve y selector de idioma         |

### 3.9 Sombras

La sombra «tecla» es el único recurso de elevación: un borde superior claro, un canto inferior duro y una sombra ambiente, armados con los tokens `key-highlight`, `key-edge` y `key-shadow`.

| Token                   | Composición                                                                     | Uso                        |
| ----------------------- | ------------------------------------------------------------------------------- | -------------------------- |
| `shadow-key`            | `inset 0 1px 0 key-highlight, 0 0.5rem 0 key-edge, 0 1.25rem 1.5rem key-shadow` | Teclas grandes             |
| `shadow-key-pressed`    | `inset 0 1px 0 key-highlight, 0 0.25rem 0 key-edge, 0 0.75rem 1rem key-shadow`  | Teclas grandes presionadas |
| `shadow-button`         | `inset 0 1px 0 key-highlight, 0 0.25rem 0 key-edge`                             | Botón primario             |
| `shadow-button-pressed` | `inset 0 1px 0 key-highlight, 0 0.125rem 0 key-edge`                            | Botón primario presionado  |

### 3.10 Movimiento

**Tokens**

| Token                      | Valor                           | Uso                                 |
| -------------------------- | ------------------------------- | ----------------------------------- |
| `transition-duration-fast` | 150 ms                          | Hover, foco, presionado             |
| `transition-duration-base` | 250 ms                          | Cambios de estado, selector de tema |
| `transition-duration-slow` | 500 ms                          | Entrada del hero                    |
| `ease-standard`            | `cubic-bezier(0.2, 0, 0, 1)`    | Transiciones de estado              |
| `ease-emphasized`          | `cubic-bezier(0.16, 1, 0.3, 1)` | Entradas                            |

**Reglas**

- Solo se animan `transform` y `opacity` (se componen en la GPU y no mueven el layout).
- El contenido es visible por defecto. Las animaciones de scroll se activan solo dentro de `@supports (animation-timeline: view())` y `@media (prefers-reduced-motion: no-preference)`.
- Sin soporte (Firefox estable todavía no lo trae por defecto) o con movimiento reducido, todo se ve en su estado final y sin animar. El diseño estático es la versión completa del sitio.
- Ninguna animación transmite información que no esté también en el texto.

**Efectos de scroll de la v1** (el diseño muestra tres estados por efecto, entrada, mitad y salida; el movimiento se describe acá)

| #   | Elemento                                                                  | Propiedad                                                           | Línea de tiempo y rango                                                  | Reducido o sin soporte       |
| --- | ------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------- |
| 1   | Encabezado                                                                | Aparece el borde inferior (`opacity` 0 a 1)                         | `scroll(root)`, de 0 a 64 px                                             | Borde siempre visible        |
| 2   | Filas y tarjetas de sección (el título queda fijo con `position: sticky`) | `opacity` 0 a 1 y `translateY` 24 px a 0                            | `view()`, `entry 0%` a `entry 35%`, escalonado por posición en la grilla | Visibles, sin desplazamiento |
| 3   | Titular del hero                                                          | `translateY` 0 a -48 px y `opacity` 1 a 0 al salir de pantalla      | `view()`, `exit 0%` a `exit 100%`                                        | Fijo                         |
| 4   | Línea de «Cómo trabajamos»                                                | La barra de relieve avanza (`scaleY` 0 a 1) a lo largo de los pasos | `view()` sobre la lista, `contain 0%` a `contain 100%`                   | Barra completa               |
| 5   | Pasos de «Cómo trabajamos»                                                | El paso activo pasa de `content-muted` a `content`                  | `view()`, `cover 40%` a `cover 60%`                                      | Todos en `content`           |

**Microinteracciones** (transiciones, no scroll)

- **Hero:** al cargar, las dos teclas entran con `translateY` 16 px a 0 y `opacity`, 500 ms, `ease-emphasized`, con 80 ms de diferencia entre la F y la J.
- **Botón primario:** hover sube a `accent-hover`; presionado baja 4 px (`translateY`) y pasa a `shadow-button-pressed`, como una tecla.
- **Enlaces de navegación:** la barra de relieve aparece debajo del enlace activo y en hover (`scaleX` 0 a 1, 150 ms).
- **Selector de tema:** el cambio de colores dura 250 ms.

## 4. Tokens

### 4.1 Nombres

Se mantiene la estructura de `design/tokens.local.json`: grupos `color`, `font`, `radius`, `shadow`, `spacing` y `type`, con la salida `--color-*`, `--font-*`, `--radius-*`, `--shadow-*` y utilidades `type-*`. Los nombres de este documento son los definitivos; las variables de Figma usan los mismos nombres con `/` (por ejemplo `color/canvas`, `radius/md`, `type/display`).

Estructura propuesta para el archivo de tokens:

```json
{
  "color": {
    "dark": { "canvas": "#0b0d10", "surface": "#14181d" },
    "light": { "canvas": "#f6f7f8", "surface": "#ffffff" }
  },
  "font": {
    "sans": "'Geist Variable', ui-sans-serif, system-ui, sans-serif",
    "mono": "'Geist Mono Variable', ui-monospace, monospace"
  },
  "radius": { "sm": "0.375rem", "md": "0.75rem", "lg": "1.25rem", "full": "9999px" },
  "shadow": {
    "key": "inset 0 1px 0 var(--color-key-highlight), 0 0.5rem 0 var(--color-key-edge), 0 1.25rem 1.5rem var(--color-key-shadow)"
  },
  "container": { "page": "75rem" },
  "motion": {
    "duration": { "fast": "150ms", "base": "250ms", "slow": "500ms" },
    "ease": {
      "standard": "cubic-bezier(0.2, 0, 0, 1)",
      "emphasized": "cubic-bezier(0.16, 1, 0.3, 1)"
    }
  },
  "type": {
    "label": {
      "family": "mono",
      "size": "0.8125rem",
      "weight": 500,
      "line-height": 1.25,
      "letter-spacing": "0.08em",
      "transform": "uppercase"
    }
  }
}
```

### 4.2 Cambios necesarios en `scripts/build-tokens.mjs`

El script actual solo emite un `@theme` estático con una paleta. Para esta guía hacen falta estos cambios (la verificación se hizo compilando con la versión fijada de Tailwind, 4.3.3):

1. **Temas.** Emitir los colores como variables de CSS fuera de `@theme` y referenciarlas desde `@theme inline`:
   - `@theme inline { --color-canvas: var(--canvas); ... }`
   - `:root { --canvas: <oscuro>; ... }` y `color-scheme: dark`.
   - `@media (prefers-color-scheme: light) { :root:not([data-theme]) { --canvas: <claro>; ... } }`.
   - `:root[data-theme="light"] { ... }` con `color-scheme: light`.
     Con eso, `bg-canvas` y el resto de las utilidades funcionan igual en ambos temas.
2. **Fuente mono.** Emitir `--font-mono` y soportar el campo `family` en los estilos de tipo (`font-family: var(--font-mono)`).
3. **Estilos de tipo.** Soportar el campo opcional `transform` (`text-transform`) para `label`, y agregar los estilos `headline` y `small`. El lint de tokens rechaza las clases sueltas de tamaño, peso e interlineado, así que cada estilo de la sección 3.5 tiene que existir como `type-*`.
4. **Movimiento.** Emitir `--transition-duration-*` y `--ease-*` dentro de `@theme` (generan `duration-fast`, `ease-standard`, etc.). Hay que agregar `--ease-*: initial` al reinicio.
5. **Contenedor y puntos de quiebre.** Emitir `--container-page` y reiniciar `--breakpoint-*: initial` para declarar solo `sm` (40rem), `md` (48rem) y `lg` (64rem). `xl` y `2xl` dejan de existir: no se usan hoy, pero cualquier uso nuevo se rechaza al compilar.
6. **Sombras compuestas.** Los valores referencian `var(--color-key-*)`, de modo que cambian con el tema sin duplicar la sombra.
7. **Origen configurable.** Aceptar la ruta del archivo de entrada (hoy fija en `design/tokens.local.json`) para poder leer la exportación de las variables de Figma cuando reemplacen a los valores provisorios.
8. **Script de tema.** El script de tema (sección 3.1) vive en `public/` y se carga en el `<head>`; no requiere cambios en la política de seguridad de contenido.

El lint de tokens (`scripts/lint-tokens.mjs`) debe seguir rechazando colores literales y valores arbitrarios: todo lo anterior se consume por nombre.

## 5. Estructura del sitio

### 5.1 Navegación

Encabezado fijo con: marca, enlaces a Servicios, Proyectos, Cómo trabajamos y Nosotros, selector de idioma, selector de tema y el llamado a contactar. A 390 px los enlaces pasan a un menú desplegable.

Pie: marca, los mismos enlaces, mail, WhatsApp, LinkedIn, GitHub, enlace a privacidad y `© 2026 Guia`.

### 5.2 Páginas y URLs

| Página          | Castellano          | English           |
| --------------- | ------------------- | ----------------- |
| Inicio          | `/`                 | `/en/`            |
| Servicios       | `/servicios`        | `/en/services`    |
| Proyectos       | `/proyectos`        | `/en/work`        |
| Caso            | `/proyectos/<caso>` | `/en/work/<case>` |
| Cómo trabajamos | `/como-trabajamos`  | `/en/how-we-work` |
| Nosotros        | `/nosotros`         | `/en/about`       |
| Contacto        | `/contacto`         | `/en/contact`     |
| Privacidad      | `/privacidad`       | `/en/privacy`     |
| Error 404       | `/404`              | `/en/404`         |

Cada página tiene `hreflang` hacia su par y `x-default` a `/`. El selector de idioma lleva siempre a la página equivalente, no al inicio.

### 5.3 Esqueleto de contenido

Estado de los textos: **vigente** es el texto de `docs/requirements.md`; **propuesta** necesita aprobación antes de diseñarse con texto final. Hasta entonces, el diseño usa la etiqueta de intención.

**Inicio**

| #   | Sección              | Objetivo                               | Contenido, de mayor a menor jerarquía                                                                                      | Castellano | English             |
| --- | -------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------- |
| 1   | Hero                 | Decir qué hacemos y empujar a escribir | Titular (`display`), bajada (`lead`), llamado principal y secundario                                                       | Vigente    | Vigente             |
| 2   | Servicios            | Mostrar la oferta en una mirada        | Título fijo y cuatro filas (número, nombre y una línea), enlace a Servicios                                                | Propuesta  | Proposal            |
| 3   | Proyectos destacados | Dar prueba                             | Título, tres a cuatro casos (captura, nombre, una línea), enlace a Proyectos                                               | Propuesta  | Proposal            |
| 4   | Cómo trabajamos      | Bajar la incertidumbre                 | Título, cuatro pasos en una línea, enlace a la página                                                                      | Propuesta  | Proposal            |
| 5   | Idea de marca        | Explicar el nombre                     | La barra de relieve, la frase de la idea, el guiño de las teclas F y J (chico) y, en inglés, una aclaración de «home keys» | Vigente    | Vigente y propuesta |
| 6   | Contacto             | Convertir                              | Título, llamado, mail, WhatsApp y LinkedIn de cada socio                                                                   | Vigente    | Vigente             |

**Servicios.** Objetivo: que el visitante reconozca su problema. Una sección por servicio (páginas web, aplicaciones, bots, sistemas a medida), con ancla propia: qué resolvemos, para quién, qué se entrega y un llamado a contar el proyecto. Cierre con llamado a contactar.

**Proyectos.** Objetivo: probar con trabajo real. Listado de casos con captura, nombre y una línea. No se aclara qué casos son de clientes y cuáles propios. Casos iniciales: el primer caso de cliente (cuando haya autorización por escrito, BL-05), Vaquitapp, el predictor del Mundial 2026 y la integración InvGate a Jira.

**Caso.** Plantilla: encabezado (nombre, una línea, etiquetas de tecnología, año), el problema, lo que se hizo, el resultado y enlace al siguiente caso. Sin campo obligatorio de cliente ni testimonios. Los resultados incluyen solo cifras comprobables.

**Cómo trabajamos.** Objetivo: mostrar el método. Cuatro pasos numerados (rótulos de trabajo: entender, diseñar, construir, acompañar; a aprobar) con la barra de relieve que avanza con el scroll (efecto 4), y una nota sobre cómo se trabaja con el cliente.

**Nosotros.** Objetivo: poner cara. Retrato, nombre, rol y canales de cada persona con el mismo tratamiento; una frase sobre cómo trabajamos juntos; la historia del nombre, con las iniciales como dato secundario.

**Contacto.** Objetivo: que escribir sea fácil. Formulario (nombre, mail, empresa opcional, tipo de proyecto, mensaje, consentimiento y Turnstile) y los canales alternativos (mail, WhatsApp y LinkedIn de cada socio). Sin campo de presupuesto. Estados: enviando, enviado y error.

**Privacidad.** Contenido mínimo: quién es responsable, qué datos se piden (nombre, mail, empresa y mensaje), para qué se usan, qué proveedores participan (Cloudflare), cuánto se conservan y cómo ejercer los derechos. El texto legal lo valida alguien con competencia antes de publicarlo.

**404.** Mensaje breve, enlace al inicio y el selector de idioma.

### 5.4 Jerarquía de contenido

En cada página: un solo `h1` (`headline`, o `display` en el inicio), secciones con `h2`, tarjetas con `h3`. Cada sección abre con una etiqueta mono numerada (`01`, `02`) y la barra de relieve. El llamado principal tiene un solo estilo de botón primario por pantalla.

## 6. Componentes

Cada componente existe en ambos temas y a 390 y 1440 px. Estados comunes a todo lo interactivo: reposo, hover, foco visible, presionado y deshabilitado.

| Componente                      | Variantes                                                                                                                   | Estados y notas                                                            |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Botón                           | Primario (tecla, `accent`), secundario (borde `border-strong`), texto; tamaños `md` (44 px) y `lg` (52 px); con y sin ícono | Presionado baja 4 px. Deshabilitado sin sombra                             |
| Enlace                          | En texto (subrayado), de navegación (con barra de relieve)                                                                  | Activo con `aria-current="page"`                                           |
| Guiño de tecla                  | Letra F, letra J; 32 px                                                                                                     | Decorativo (`aria-hidden`). Solo en idea de marca y pie                    |
| Logo                            | Wordmark con barra, isotipo (tecla con la G); tamaños `md` y `lg`                                                           | Con enlace al inicio en el encabezado y el pie                             |
| Fila de servicio                | Reposo, hover                                                                                                               | Número, nombre y una línea, con divisor; en hover el divisor pasa a acento |
| Barra de relieve                | Horizontal 32 x 4 px, vertical (línea de proceso)                                                                           | Estática o avanzando con el scroll                                         |
| Encabezado                      | Escritorio, móvil con menú cerrado, móvil con menú abierto                                                                  | Con y sin borde inferior (efecto 1)                                        |
| Selector de idioma              | ES y EN                                                                                                                     | Actual con `aria-current`; cada opción con su `lang`                       |
| Selector de tema                | Sistema, claro, oscuro                                                                                                      | Botón con `aria-pressed` o menú de tres opciones; oculto sin JavaScript    |
| Menú móvil                      | Cerrado, abierto                                                                                                            | Foco atrapado al abrir, `Esc` cierra, devuelve el foco                     |
| Pie                             | Escritorio, móvil                                                                                                           |                                                                            |
| Encabezado de sección           | Con número y etiqueta mono                                                                                                  |                                                                            |
| Tarjeta de servicio             | Con y sin enlace                                                                                                            | Hover: la barra de relieve aparece                                         |
| Tarjeta de proyecto             | Con captura, sin captura                                                                                                    | Toda la tarjeta es un solo enlace                                          |
| Paso de proceso                 | Número, título, texto                                                                                                       | Activo y apagado (efecto 5)                                                |
| Tarjeta de socio                | Con retrato, sin retrato (tecla con inicial)                                                                                | Canales como enlaces con etiqueta accesible                                |
| Canal de contacto               | Mail, WhatsApp, LinkedIn, GitHub                                                                                            | Abre en pestaña nueva con `rel="noopener"`                                 |
| Etiqueta                        | Tecnología, estado                                                                                                          | Mono, `radius-sm`                                                          |
| Campo de texto                  | Texto, mail, área de texto                                                                                                  | Reposo, foco, completado, error, deshabilitado                             |
| Selector (tipo de proyecto)     | Cerrado, abierto                                                                                                            | Nativo estilizado, sin librería                                            |
| Casilla de consentimiento       | Marcada, sin marcar                                                                                                         | Con enlace a privacidad                                                    |
| Turnstile                       | Reservado                                                                                                                   | Espacio fijo para evitar saltos de layout                                  |
| Aviso de formulario             | Éxito, error                                                                                                                | `role="status"` o `role="alert"`; resumen de errores arriba del formulario |
| Contenido legal                 | Texto corrido con encabezados y listas                                                                                      | Para la página de privacidad                                               |
| Enlace para saltar al contenido | Visible solo con foco                                                                                                       | Primer elemento de la página                                               |

## 7. Accesibilidad

- **Contraste:** AA en los dos temas (sección 3.3). Todo par nuevo se calcula antes de usarse.
- **Teclado:** todo es operable con teclado, en orden visual. Sin trampas de foco (el menú móvil devuelve el foco al cerrar).
- **Foco:** anillo de 2 px con `focus`, desplazado 3 px, visible en todos los fondos. No se elimina nunca `outline` sin reemplazo.
- **Objetivos táctiles:** mínimo 44 x 44 px en celular (WCAG 2.2 pide 24 px como mínimo absoluto).
- **Estructura:** `lang` correcto por página (`es-AR` y `en-US`) y por fragmento cuando cambia el idioma. Landmarks (`header`, `nav`, `main`, `footer`), un `h1` por página y enlace para saltar al contenido.
- **Formularios:** cada campo con `label` visible, ayuda asociada con `aria-describedby`, errores en texto junto al campo y resumen anunciado. Sin placeholders como etiqueta. `autocomplete` correcto.
- **Imágenes:** `alt` descriptivo en capturas y retratos; vacío en lo decorativo.
- **Movimiento:** `prefers-reduced-motion` respetado (sección 3.10) y ningún contenido depende de animaciones.
- **Zoom y texto:** se lee y se opera con zoom al 200 % y con el espaciado de texto ampliado, sin scroll horizontal. Las medidas de texto usan `rem`.
- **Verificación:** axe en los E2E (ya existente) sobre todas las páginas y en ambos idiomas y temas.

## 8. Rendimiento

- **Sitio estático** de Astro. La JavaScript inicial es solo el script del tema (menos de 1 KB, servido desde el propio dominio y bloqueante en el `<head>`) y el del menú móvil.
- **Hidratación solo donde hace falta.** El formulario es la única isla; se hidrata con `client:visible`. Si pasa de 50 KB comprimido, se reescribe sin React.
- **Presupuestos por página:** HTML, CSS y fuentes juntos por debajo de 150 KB comprimidos; imágenes por debajo de 300 KB cada una; LCP menor a 2,5 s en 4G en un celular de gama media; CLS menor a 0,1; INP menor a 200 ms.
- **Fuentes:** una sola precarga (Geist latino), `font-display: swap`, respaldo de sistema con métricas ajustadas.
- **LCP:** el titular del hero es texto (no una imagen). Las imágenes arriba del pliegue llevan `fetchpriority="high"` y dimensiones fijas.
- **Sin terceros** salvo Cloudflare Web Analytics (sin cookies) y Turnstile, que solo se carga en Contacto.
- **Animaciones** solo de `transform` y `opacity`, sin JavaScript y sin librerías.
- **Caché:** los recursos de `_astro/` ya son inmutables; el resto se valida en cada visita.

## 9. Fuera de la v1

- Blog o notas, buscador y CMS.
- Precios, calculadoras y testimonios (hasta contar con permiso escrito).
- Más idiomas que castellano e inglés.
- Área de clientes, chat, boletín y cualquier cosa que necesite cookies.
- WebGL, 3D, video, cursores personalizados y librerías de animación o de scroll.
- Imagen Open Graph generada de forma dinámica: se usa una imagen estática por idioma.
- Dominio `.com.ar` (BL-06).
