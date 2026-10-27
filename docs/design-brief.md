# Directrices de diseño de la v1

Este documento define qué se diseña y con qué reglas. Lo que no figura acá no está decidido: se propone y se aprueba antes de diseñarlo. Los textos finales del sitio los aprueba la persona responsable: los de la v0 están en `docs/requirements.md` y los de la v1 que figuran acá como «propuesta» necesitan su aprobación.

## 1. Plataforma de marca

### 1.1 Propósito

Que una empresa o un emprendedor con una idea o un problema difuso encuentre a quien lo entienda, lo diseñe y lo deje funcionando, sin intermediarios.

### 1.2 Posicionamiento

Estudio de dos socios técnicos que llevan cada proyecto de punta a punta: entendemos el problema, lo diseñamos, lo desarrollamos, lo conectamos con lo que ya existe y lo dejamos funcionando. El diferencial es hablar directo con quien construye y que el análisis, el diseño y la integración vienen en el mismo equipo. Esta frase es interna: no es un texto del sitio.

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

**Qué no parece Guia:** una agencia de marketing grande, una fábrica de software con fotos de stock, una plantilla de sitio para SaaS, una marca cripto, neón o gamer, ni una pareja emprendedora.

### 1.4 Tono de voz

- Castellano rioplatense con voseo en `/`. Inglés estadounidense en `/en/`. Ambos con el mismo registro: directo, concreto y sin hype.
- Se dice qué se hace y para quién. Se evita la jerga vacía y toda métrica que no se pueda probar.
- Sin emojis y sin superlativos. Sin rayas largas en ningún texto.
- Primera persona del plural en todo el sitio. Los nombres propios aparecen solo en Nosotros y en Contacto. No se nombran clientes: los proyectos se muestran con su nombre.
- Un toque de humor es válido solo si es coherente con el mensaje y está en lugares seguros (el 404, los estados vacíos), nunca en lo comercial.

Ejemplos de registro (ilustran la voz, no son texto del sitio):

| Sí                                                                     | No                                                                   |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Contanos qué problema tenés y te decimos cómo lo resolveríamos.        | Soluciones integrales 360 para llevar tu negocio al siguiente nivel. |
| Armamos el sistema que tu operación necesita, no el que viene en caja. | Somos apasionados por la innovación.                                 |
| Si algo no conviene, te lo decimos antes de empezar.                   | ¡Transformamos tus ideas en realidad!                                |
| Tell us what's slowing you down and we'll tell you how we'd fix it.    | We leverage cutting-edge synergies.                                  |

### 1.5 La idea de las teclas F y J

La F y la J son las teclas guía del teclado: tienen relieve y de ahí parten los dedos. Es la metáfora central: Guia es el punto de partida de cada proyecto. También son nuestras iniciales, pero eso es un dato secundario.

La idea no se dibuja: **se usa**. Las teclas son la interfaz (la navegación, los botones, los selectores) y no una ilustración.

Reglas de uso:

1. **La tecla es el componente base de lo interactivo.** La navegación es una fila de teclas, los botones son teclas y los selectores de idioma y de tema también. Una tecla tiene relieve (un canto inferior duro) y se hunde solo mientras se aprieta. La página, la sección o la opción activa se ve como **tecla en reposo con una línea corta bajo la etiqueta**: así queda alineada con las demás y no depende de un desplazamiento mínimo.
2. **La barra de relieve** es la firma de la marca, no un indicador de estado. Aparece bajo el logo y en la primera y la cuarta tecla de la fila de navegación (como la F y la J, separadas por la G y la H). «Activo» se muestra solo con la tecla presionada. Mide 36 x 4 px en el logo y una proporción 7:1 en las teclas, con radio completo y color `accent`.
3. **Las teclas F y J aparecen como letras solo en el pie**, dentro de la frase de la idea de marca. No hay teclados dibujados, teclas gigantes ni letras sueltas como decoración.
4. **Logo:** el wordmark «Guia» con la barra de relieve debajo. El isotipo, para favicon y avatares, es una tecla con la «G» y la barra. Las teclas F y J juntas no forman parte del logo.
5. **Wordmark:** «Guia» en la serif de títulos (Instrument Serif), tracking `-0.03em`. Siempre «Guia», sin tilde, y con inicial mayúscula dentro de un texto (en minúscula solo como marca gráfica).
6. **Frase de la idea de marca:** las dos letras van dentro de la oración, como teclas chicas, y «teclas guía» lleva un subrayado ondulado en el color del texto (ver 2.1).
7. **Inglés:** «home keys» se explica en la propia frase. La marca y los nombres de las teclas no se traducen.
8. **Prohibido:** teclados completos, cursores parpadeantes, código decorativo y letras sueltas como relleno.

## 2. Dirección visual

### 2.1 Principios

1. **Serif grande primero.** El titular es el protagonista: Instrument Serif a gran tamaño, en un solo color. Ninguna palabra o parte de una frase se resalta con otro color. El énfasis se hace con la cursiva o con el subrayado ondulado en el color del texto (`text-decoration: underline wavy`, grosor 1,5 px, `text-underline-offset: 0.2em`).
2. **La tecla como interfaz.** El carácter propio de Guia sale del relieve y del hundimiento de las teclas, no de adornos.
3. **Papel y tinta.** Base cálida (papel en claro, casi negro cálido en oscuro) y un solo color vivo, el bermellón, usado solo como gráfico (barra de relieve): no se usa para texto.
4. **Composición editorial.** Regletas finas, mucho aire, títulos a todo el ancho y asimetría. Se evitan las tarjetas con borde y radio de las plantillas: los proyectos son filas separadas por regletas.
5. **Movimiento con sentido.** El scroll cuenta el recorrido (de la idea a un sistema funcional) con animaciones nativas de CSS. Nada bloquea el contenido ni el scroll nativo.
6. **Rápido antes que espectacular.** Ninguna decisión visual compromete el LCP en celular.

### 2.2 Referencias

| Referencia                    | Qué se toma                                                                       | Qué se evita                                                               |
| ----------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| https://www.nk.studio/        | Titulares enormes de dos o tres palabras, una sola familia, navegación clara      | Siete canvas, 130 imágenes, banner de cookies y un menú de quince entradas |
| https://significa.co/         | Orden de secciones: trabajo seleccionado, servicios, proceso, nosotros, preguntas | La fuente propia y la densidad de logos                                    |
| https://darkroom.engineering/ | Orgullo técnico visible y claridad sobre lo que se construye                      | La estética de terminal roja y el display ilegible                         |
| https://linear.app/           | Tipografía con tracking negativo y jerarquía de grises                            | La receta de oscuro con acento menta, típica de SaaS                       |
| https://thoughtbot.com/       | Posicionamiento por seniority y caso destacado arriba                             | Varios colores saturados y las fotos recortadas en bloques                 |
| https://locomotive.ca/en      | Navegación mínima con el selector de idioma dentro del menú                       | La intro animada que tapa el contenido                                     |
| https://basement.studio/      | El tono con actitud                                                               | Antirreferencia de rendimiento: escena WebGL y 6,8 MB                      |
| https://studiopingpong.com/   | Personalidad en el copy                                                           | Antirreferencia: 10 MB y un juego en la portada                            |

Los portfolios propios son la referencia de gusto por su sobriedad: base neutra, tipografía cuidada y modos claro y oscuro con selector (https://florenciamorelli.github.io/portfolio/ y https://juantmartinez17.github.io/portfolio/).

### 2.3 Qué se evita

- WebGL, 3D, video de fondo, cursores personalizados y scroll-jacking.
- Librerías de animación o de scroll. Todo el movimiento es CSS (salvo el script mínimo de la tecla activa, ver 3.10).
- Fotos de stock, ilustraciones genéricas, íconos decorativos en cada tarjeta, gradientes de moda y brillos.
- Palabras o fragmentos de un titular en otro color, y más de un color vivo.
- Fondo grafito con acento menta, etiquetas mono diminutas y filas de tarjetas idénticas con borde: es la estética que se asocia a las plantillas.
- Carruseles automáticos, pop-ups y banners de cookies (el sitio no usa cookies).

### 2.4 Fotografía e imágenes

- **Retratos:** por ahora, las fotos de la entrega de diplomas de los dos socios (mismo evento y misma luz), relación 4:5, recorte al mismo encuadre y tratamiento monocromo con el mismo contraste. Se evita el cartel de la universidad en lo posible. Son provisorias: se reemplazan por un retrato conjunto sobre fondo neutro cuando esté disponible. Mínimo 800 px de ancho.
- **Capturas de proyectos:** relación 16:10, sin marco ni radio y sin mockups de dispositivos. Son capturas reales del producto o de su diseño.
- **Formatos:** AVIF y WebP generados en el build con anchos 480, 960 y 1440, `loading="lazy"` salvo la imagen del LCP, y siempre con `width`, `height` y `alt`.

## 3. Sistema de diseño

### 3.1 Temas

El sitio tiene dos temas, claro y oscuro. Arranca según la preferencia del sistema operativo y un selector permite cambiarlo; la elección se recuerda en el navegador. Los dos temas usan **los mismos nombres de token**: solo cambian los valores.

- El selector tiene dos opciones, claro y oscuro. La que corresponde a la preferencia del sistema operativo arranca seleccionada; elegir la otra la reemplaza y se recuerda. No hay opción «sistema».
- Sin JavaScript queda el tema del sistema y el selector no se muestra.
- La elección se guarda en `localStorage` y se aplica como `data-theme` en `<html>` antes del primer render, con un script de pocas líneas servido desde el propio dominio (la política de seguridad de contenido solo admite scripts propios).
- `color-scheme` se declara en cada tema, y el `<meta name="theme-color">` se define para ambos.

### 3.2 Paleta

Valores iniciales. Se recalculan si cambia algún color.

| Token            | Oscuro    | Claro     | Uso                                                |
| ---------------- | --------- | --------- | -------------------------------------------------- |
| `canvas`         | `#151310` | `#efe9dd` | Fondo de página                                    |
| `surface`        | `#24211c` | `#fbf8f0` | Teclas, campos y avisos                            |
| `surface-raised` | `#1c1a16` | `#e6dfcf` | Tecla en hover y bloques de imagen sin foto        |
| `border`         | `#3a352d` | `#bdb39e` | Regletas y divisores                               |
| `border-strong`  | `#746d60` | `#857d6a` | Borde de teclas, campos y botones secundarios      |
| `content`        | `#f1eadb` | `#1a1814` | Texto principal                                    |
| `content-muted`  | `#a89f8e` | `#5f594d` | Texto secundario                                   |
| `content-subtle` | `#968d7c` | `#6b6556` | Texto de apoyo (solo sobre canvas y surface)       |
| `accent`         | `#ff6a3d` | `#d6402a` | Barra de relieve (solo gráfico)                    |
| `accent-hover`   | `#ff8660` | `#b8341f` | Barra de relieve en hover (solo gráfico)           |
| `on-accent`      | `#151310` | `#ffffff` | Texto sobre un relleno de accent (uso excepcional) |
| `inverse`        | `#f1eadb` | `#1a1814` | Relleno del botón principal                        |
| `on-inverse`     | `#151310` | `#efe9dd` | Texto sobre inverse                                |
| `focus`          | `#f1eadb` | `#1a1814` | Anillo de foco                                     |
| `danger`         | `#ff8fa6` | `#a3123a` | Texto y borde de error                             |
| `key-edge`       | `#070605` | `#cdc3ae` | Canto inferior de las teclas                       |

El bermellón (`accent`) es un color gráfico: se usa en la barra de relieve. El anillo de foco usa `focus`, que es el color del texto. **El bermellón no se usa para texto ni para enlaces**, porque en claro no alcanza 4,5:1. El enlace se distingue por el subrayado y por el color del texto. El error se distingue del acento: `danger` es más oscuro y frío, y siempre va con ícono y texto.

### 3.3 Contraste (WCAG 2.2 AA)

Ratios calculados con la fórmula de luminancia relativa del estándar. Mínimos: 4,5 para texto normal y 3 para bordes de controles, foco y gráficos.

### Contraste en oscuro

| Par                                  | `canvas` | `surface` | `surface-raised` | Mínimo | Resultado |
| ------------------------------------ | -------- | --------- | ---------------- | ------ | --------- |
| `content` (texto principal)          | 15,48    | 13,39     | 14,50            | 4,50   | AA        |
| `content-muted` (texto secundario)   | 7,08     | 6,12      | 6,63             | 4,50   | AA        |
| `content-subtle` (texto de apoyo)    | 5,65     | 4,89      | no se usa        | 4,50   | AA        |
| `danger` (error)                     | 8,59     | 7,43      | no se usa        | 4,50   | AA        |
| `border-strong` (borde de controles) | 3,62     | 3,13      | 3,39             | 3      | AA        |
| `accent` (barra de relieve)          | 6,52     | 5,64      | 6,11             | 3      | AA        |
| `focus` (anillo de foco)             | 15,48    | 13,39     | no se usa        | 3      | AA        |

`on-inverse` sobre `inverse` (botón principal): 15,48, mínimo 4,5 (AA). `on-accent` sobre `accent`: 6,52 (AA).

### Contraste en claro

| Par                                  | `canvas` | `surface` | `surface-raised` | Mínimo | Resultado |
| ------------------------------------ | -------- | --------- | ---------------- | ------ | --------- |
| `content` (texto principal)          | 14,66    | 16,70     | 13,35            | 4,50   | AA        |
| `content-muted` (texto secundario)   | 5,75     | 6,55      | 5,23             | 4,50   | AA        |
| `content-subtle` (texto de apoyo)    | 4,80     | 5,46      | no se usa        | 4,50   | AA        |
| `danger` (error)                     | 6,42     | 7,32      | no se usa        | 4,50   | AA        |
| `border-strong` (borde de controles) | 3,38     | 3,85      | 3,08             | 3      | AA        |
| `accent` (barra de relieve)          | 3,75     | 4,28      | 3,42             | 3      | AA        |
| `focus` (anillo de foco)             | 14,66    | 16,70     | no se usa        | 3      | AA        |

`on-inverse` sobre `inverse` (botón principal): 14,66, mínimo 4,5 (AA). `on-accent` sobre `accent`: 4,54 (AA).

Notas: `content-subtle` se usa solo sobre `canvas` y `surface` (sobre `surface-raised` en claro queda en 4,37). Los bordes `border` y `key-edge` son decorativos y no cumplen 3:1 a propósito: ningún control se identifica solo por ellos, el control lo identifica `border-strong`.

### 3.4 Tipografías

Solo fuentes gratuitas con licencia libre, autoalojadas con Fontsource (sin pedidos a terceros, compatible con la política de seguridad de contenido).

| Rol                                  | Familia          | Paquete                        | Licencia | Pesos                    |
| ------------------------------------ | ---------------- | ------------------------------ | -------- | ------------------------ |
| Títulos, teclas grandes y enunciados | Instrument Serif | `@fontsource/instrument-serif` | OFL-1.1  | 400 normal y 400 cursiva |
| Texto, etiquetas y teclas chicas     | Geist            | `@fontsource-variable/geist`   | OFL-1.1  | Variable 100 a 900       |

Se retiran Inter y Geist Mono: la mono ya no se usa. Las dos familias están en Google Fonts, así que también están disponibles al diseñar sin instalar nada.

- **Instrument Serif no tiene negrita.** No se simula: el énfasis es cursiva o subrayado ondulado. Se usa desde 22 px hacia arriba; por debajo de ese tamaño, Geist.
- Subconjuntos `latin` y `latin-ext`. Pesos de los archivos `woff2`: Instrument Serif 21 KB (latino, normal) y 22 KB (latino, cursiva); Geist 29 KB (latino). Se precargan solo `latin` de Instrument Serif normal y de Geist. La cursiva se carga bajo demanda.
- Se usa `font-display: swap` y una fuente de respaldo del sistema con métricas ajustadas para no mover el layout.

### 3.5 Escala tipográfica

Cada estilo es un token `type-*` con tamaño fluido entre 390 y 1440 px.

| Estilo      | Familia          | Tamaño (`clamp`)                  | 390 px | 1440 px | Peso | Interlineado | Tracking  | Uso                                             |
| ----------- | ---------------- | --------------------------------- | ------ | ------- | ---- | ------------ | --------- | ----------------------------------------------- |
| `display`   | Instrument Serif | `clamp(3.5rem, 12.2vw, 11rem)`    | 56     | 176     | 400  | 0.91         | -0.037em  | Titular del hero                                |
| `headline`  | Instrument Serif | `clamp(3rem, 6.7vw, 6rem)`        | 48     | 96      | 400  | 1.0          | -0.031em  | Título de sección                               |
| `title`     | Instrument Serif | `clamp(2.25rem, 4.45vw, 4rem)`    | 36     | 64      | 400  | 1.0          | -0.028em  | Nombre de proyecto                              |
| `statement` | Instrument Serif | `clamp(1.5rem, 2.2vw, 2rem)`      | 24     | 32      | 400  | 1.125        | -0.025em  | Frase de la idea de marca                       |
| `key-lg`    | Instrument Serif | `clamp(1.5rem, 2.1vw, 1.875rem)`  | 24     | 30      | 400  | 1.2          | -0.01em   | Teclas de navegación                            |
| `key-md`    | Instrument Serif | `1.5rem`                          | 24     | 24      | 400  | 1.2          | -0.0125em | Botones                                         |
| `lead`      | Geist            | `clamp(1.125rem, 1.4vw, 1.25rem)` | 18     | 20      | 400  | 1.5          | 0         | Bajada                                          |
| `body`      | Geist            | `1rem`                            | 16     | 16      | 400  | 1.6          | 0         | Texto corrido                                   |
| `small`     | Geist            | `0.9375rem`                       | 15     | 15      | 400  | 1.5          | 0         | Notas, pie, ayudas                              |
| `label`     | Geist            | `1rem`                            | 16     | 16      | 500  | 1.25         | 0         | Teclas chicas (idioma, tema, «Ver caso», F y J) |

Medida máxima de línea: 68 caracteres en texto corrido (`max-w-prose`). Los titulares usan `text-wrap: balance` (el titular del hero no deja una palabra suelta en la última línea) y los párrafos `text-wrap: pretty`. Tamaño mínimo de texto: 15 px.

### 3.6 Espaciado

Se mantiene el multiplicador único `--spacing: 0.25rem` (4 px). Pasos permitidos, en múltiplos de 4 px: 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 22, 24, 30 y 40 (4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 88, 96, 120 y 160 px). Cualquier otro valor se propone antes de usarlo.

| Uso                                     | 390 px           | 1440 px                         |
| --------------------------------------- | ---------------- | ------------------------------- |
| Margen lateral de página                | 20 px (`px-5`)   | Centrado, contenedor de 1200 px |
| Aire arriba del titular del hero        | 56 px (`pt-14`)  | 88 px (`pt-22`)                 |
| Separación vertical entre secciones     | 96 px (`pt-24`)  | 160 px (`pt-40`)                |
| Separación entre titular y bajada       | 40 px (`gap-10`) | 56 px (`gap-14`)                |
| Fila de proyecto (arriba y abajo)       | 32 px (`py-8`)   | 40 px (`py-10`)                 |
| Separación entre teclas de la fila base | 12 px (`gap-3`)  | 20 px (`gap-5`)                 |

### 3.7 Grilla y puntos de quiebre

|                    | 390 px | 1440 px                                      |
| ------------------ | ------ | -------------------------------------------- |
| Columnas           | 4      | 12                                           |
| Canal              | 16 px  | 24 px                                        |
| Margen             | 20 px  | 120 px (contenedor de 1200 px, `max-w-page`) |
| Ancho de contenido | 350 px | 1200 px                                      |

Puntos de quiebre: `sm` 640 px (ajustes finos del móvil, ya usado en la v0), `md` 768 px (la fila de teclas pasa de 2 x 2 a una sola fila de cuatro) y `lg` 1024 px (grilla de 12 columnas y filas de proyecto a dos columnas). Se diseña y verifica a 390 y 1440 px; los intermedios se resuelven con el mismo sistema.

### 3.8 Radios

| Token         | Valor   | Uso                                        |
| ------------- | ------- | ------------------------------------------ |
| `radius-sm`   | 6 px    | Casillas de verificación y detalles chicos |
| `radius-md`   | 12 px   | Teclas, campos y avisos                    |
| `radius-full` | 9999 px | Barra de relieve                           |

Las imágenes y capturas no tienen radio. Se retira `radius-lg`.

### 3.9 La tecla

La tecla es el componente base de lo interactivo. Se arma con una superficie, un borde y un canto inferior duro; no usa sombras difusas.

| Propiedad        | Valor                                                                                                                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Superficie       | `surface` (o `inverse` en el botón principal)                                                                                                                                                                   |
| Borde            | 1 px `border-strong`                                                                                                                                                                                            |
| Radio            | `radius-md`                                                                                                                                                                                                     |
| Canto inferior   | `shadow-key`: `0 6px 0 var(--color-key-edge)`                                                                                                                                                                   |
| Presionada       | `shadow-key-pressed`: `0 2px 0 var(--color-key-edge)` y `translateY(4px)`                                                                                                                                       |
| Seleccionada     | Reposo (sin desplazamiento) y una línea de 2 px del color del texto, de 16 px de ancho, centrada bajo la etiqueta o el ícono (3 px y 24 px en `lg`). La barra de relieve no se muestra en la tecla seleccionada |
| Barra de relieve | Opcional, centrada bajo la etiqueta (ver 1.5)                                                                                                                                                                   |

Tamaños (alto): `lg` 104 px (navegación en el hero, 2 x 2 en móvil), `md` 60 px (botones principales), `sm` 48 px (botón «Ver caso» y compactos) y `xs` 40 px (letras F y J dentro de la frase del pie). Todo elemento interactivo mide al menos 44 px de alto; las teclas `xs` son decorativas.

**Primario y secundario.** El botón principal («Escribinos») es una tecla `inverse` con texto `on-inverse`. El secundario es una tecla `surface` con borde `border-strong`. Hay un solo botón principal por pantalla.

### 3.10 Movimiento

**Tokens**

| Token                      | Valor                           | Uso                                    |
| -------------------------- | ------------------------------- | -------------------------------------- |
| `transition-duration-fast` | 150 ms                          | Hover, foco, tecla presionada          |
| `transition-duration-base` | 250 ms                          | Cambios de estado, selector de tema    |
| `transition-duration-slow` | 500 ms                          | Entrada del hero y transición de vista |
| `ease-standard`            | `cubic-bezier(0.2, 0, 0, 1)`    | Transiciones de estado                 |
| `ease-emphasized`          | `cubic-bezier(0.16, 1, 0.3, 1)` | Entradas                               |

**Reglas**

- Solo se animan `transform` y `opacity` (se componen en la GPU y no mueven el layout).
- El contenido es visible por defecto. Las animaciones de scroll se activan solo dentro de `@supports (animation-timeline: view())` y `@media (prefers-reduced-motion: no-preference)`.
- Sin soporte (Firefox estable todavía no lo trae por defecto) o con movimiento reducido, todo se ve en su estado final y sin animar. El diseño estático es la versión completa del sitio.
- Ninguna animación transmite información que no esté también en el texto.

**Efectos de scroll de la v1** (el diseño muestra tres estados por efecto, entrada, mitad y salida; el movimiento se describe acá)

| #   | Elemento                                          | Propiedad                                                                                                     | Línea de tiempo y rango                                                           | Reducido o sin soporte                                    |
| --- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------- |
| 1   | Fila de teclas del hero y encabezado compacto     | La fila grande sube y se desvanece; el encabezado compacto aparece (`opacity` 0 a 1, `translateY` -16 px a 0) | Fila: `view()`, `exit 0%` a `exit 50%`. Encabezado: `scroll(root)`, de 0 a 320 px | Encabezado compacto siempre visible, fila grande estática |
| 2   | Titular del hero                                  | `translateY` 0 a -48 px y `opacity` 1 a 0 al salir de pantalla                                                | `view()`, `exit 0%` a `exit 100%`                                                 | Fijo                                                      |
| 3   | Título de sección y filas (servicios y proyectos) | El título queda fijo (`position: sticky`); las filas entran con `opacity` 0 a 1 y `translateY` 24 px a 0      | `view()`, `entry 0%` a `entry 35%`, escalonado por posición                       | Visibles, sin desplazamiento                              |
| 4   | Línea de «Cómo trabajamos»                        | La barra de relieve avanza (`scaleY` 0 a 1) a lo largo de los pasos                                           | `view()` sobre la lista, `contain 0%` a `contain 100%`                            | Barra completa                                            |
| 5   | Pasos de «Cómo trabajamos»                        | El paso activo pasa de `content-muted` a `content`                                                            | `view()`, `cover 40%` a `cover 60%`                                               | Todos en `content`                                        |

**Tecla activa por scroll.** La tecla de la sección visible se presiona sola. Se resuelve con un `IntersectionObserver` de unas pocas líneas (menos de 1 KB, servido desde el propio dominio) que agrega `aria-current="true"` al enlace de la sección visible; el estilo presionado lo da el atributo. Sin JavaScript no hay tecla presionada y todo sigue funcionando.

**Microinteracciones y transiciones**

- **Tecla:** hover cambia el relleno de `surface` a `surface-raised`; presionada baja 4 px y reduce el canto, como una tecla real (150 ms).
- **Hero al cargar:** el titular entra con `translateY` 16 px a 0 y `opacity`, 500 ms, `ease-emphasized`.
- **Selector de tema:** el cambio de colores dura 250 ms.
- **Caso:** al abrir un caso, la imagen de la fila de proyecto «crece» hasta la cabecera del caso con una transición de vista de CSS (`@view-transition { navigation: auto }` y `view-transition-name` en la imagen). Al volver, la landing recupera su posición de scroll. Sin soporte (Firefox) la navegación es directa. Es una página real con su propia URL.

## 4. Tokens

### 4.1 Nombres

Se mantiene la estructura de `design/tokens.local.json`: grupos `color`, `font`, `radius`, `shadow`, `spacing` y `type`, con la salida `--color-*`, `--font-*`, `--radius-*`, `--shadow-*` y utilidades `type-*`. Los nombres de este documento son los definitivos; las variables de Figma usan los mismos nombres con `/` (por ejemplo `color/canvas`, `radius/md`, `type/display`).

Colores nuevos respecto de la v0: `border-strong`, `content-subtle`, `inverse`, `on-inverse`, `focus`, `danger`, `key-edge`, `accent-hover` y `surface-raised`. Se retiran `key-highlight` y `key-shadow`.

Estructura propuesta para el archivo de tokens:

```json
{
  "color": {
    "dark": { "canvas": "#151310", "surface": "#24211c" },
    "light": { "canvas": "#efe9dd", "surface": "#fbf8f0" }
  },
  "font": {
    "serif": "'Instrument Serif', ui-serif, Georgia, serif",
    "sans": "'Geist Variable', ui-sans-serif, system-ui, sans-serif"
  },
  "radius": { "sm": "0.375rem", "md": "0.75rem", "full": "9999px" },
  "shadow": {
    "key": "0 0.375rem 0 var(--color-key-edge)",
    "key-pressed": "0 0.125rem 0 var(--color-key-edge)"
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
    "display": {
      "family": "serif",
      "size": "clamp(3.5rem, 12.2vw, 11rem)",
      "weight": 400,
      "line-height": 0.91,
      "letter-spacing": "-0.037em"
    }
  }
}
```

### 4.2 Cambios necesarios en `scripts/build-tokens.mjs`

El script actual solo emite un `@theme` estático con una paleta y una sola fuente. Para esta guía hacen falta estos cambios (la verificación del patrón de temas se hizo compilando con la versión fijada de Tailwind, 4.3.3):

1. **Temas.** Emitir los colores como variables de CSS fuera de `@theme` y referenciarlas desde `@theme inline`:
   - `@theme inline { --color-canvas: var(--canvas); ... }`
   - `:root { --canvas: <oscuro>; ... }` y `color-scheme: dark`.
   - `@media (prefers-color-scheme: light) { :root:not([data-theme]) { --canvas: <claro>; ... } }`.
   - `:root[data-theme="light"] { ... }` con `color-scheme: light`.
     Con eso, `bg-canvas` y el resto de las utilidades funcionan igual en ambos temas.
2. **Fuentes.** Emitir `--font-serif` y `--font-sans`, y soportar el campo `family` en los estilos de tipo (`font-family: var(--font-serif)`). No hay token de mono.
3. **Estilos de tipo.** Agregar los estilos `headline`, `statement`, `key-lg`, `key-md`, `small` y `label`, además de los existentes. El lint de tokens rechaza las clases sueltas de tamaño, peso e interlineado, así que cada estilo de la sección 3.5 tiene que existir como `type-*`.
4. **Movimiento.** Emitir `--transition-duration-*` y `--ease-*` dentro de `@theme` (generan `duration-fast`, `ease-standard`, etc.). Hay que agregar `--ease-*: initial` al reinicio.
5. **Contenedor y puntos de quiebre.** Emitir `--container-page` y reiniciar `--breakpoint-*: initial` para declarar solo `sm` (40rem), `md` (48rem) y `lg` (64rem). `xl` y `2xl` dejan de existir: no se usan hoy, pero cualquier uso nuevo se rechaza al compilar.
6. **Sombras.** Los valores referencian `var(--color-key-edge)`, de modo que cambian con el tema sin duplicar la sombra.
7. **Espaciado.** Se mantiene el multiplicador único; los pasos de 3.6 salen de él, sin tokens nombrados.
8. **Origen configurable.** Aceptar la ruta del archivo de entrada (hoy fija en `design/tokens.local.json`) para poder leer la exportación de las variables de Figma cuando reemplacen a los valores provisorios.
9. **Script de tema y tecla activa.** Los dos scripts (sección 3.1 y 3.10) viven en `public/` y se cargan en el `<head>`; no requieren cambios en la política de seguridad de contenido.

El lint de tokens (`scripts/lint-tokens.mjs`) debe seguir rechazando colores literales y valores arbitrarios: todo lo anterior se consume por nombre. El archivo `design/tokens.local.json` conserva los valores de la v0 hasta que se implemente este cambio (BL-12).

## 5. Estructura del sitio

El sitio es **una landing con secciones** y páginas propias solo para lo que lo necesita: cada caso, la privacidad y el 404. Las cuatro teclas de la navegación llevan a secciones del mismo inicio, y la sección visible se marca sola.

### 5.1 Navegación

- **Fila base** (en el hero): cuatro teclas grandes (Servicios, Proyectos, Cómo trabajamos y Nosotros). Al bajar, se achica y queda fija arriba como **encabezado compacto** junto al llamado «Escribinos», el selector de idioma y el selector de tema (efecto 1).
- **Encabezado de arriba** (siempre): logo, selector de idioma y selector de tema.
- **Escribinos** lleva a la sección Contacto, al final de la landing.
- A 390 px, la fila base se resuelve en 2 x 2 y el encabezado compacto se reduce a logo, «Escribinos» y un menú.
- **Pie:** la frase de la idea de marca con las teclas F y J, el mail, WhatsApp, LinkedIn, GitHub, enlace a privacidad y `© 2026 Guia`.

### 5.2 Páginas, secciones y URLs

| Página o sección | Castellano          | English            |
| ---------------- | ------------------- | ------------------ |
| Inicio           | `/`                 | `/en/`             |
| Servicios        | `/#servicios`       | `/en/#services`    |
| Proyectos        | `/#proyectos`       | `/en/#work`        |
| Cómo trabajamos  | `/#como-trabajamos` | `/en/#how-we-work` |
| Nosotros         | `/#nosotros`        | `/en/#about`       |
| Contacto         | `/#contacto`        | `/en/#contact`     |
| Caso             | `/proyectos/<caso>` | `/en/work/<case>`  |
| Privacidad       | `/privacidad`       | `/en/privacy`      |
| Error 404        | `/404`              | `/en/404`          |

Cada página tiene `hreflang` hacia su par y `x-default` a `/`. El selector de idioma lleva siempre a la página o sección equivalente, no al inicio.

### 5.3 Esqueleto de contenido

Estado de los textos: **aprobado** lo definió la persona responsable; **vigente** es el texto de `docs/requirements.md`; **propuesta** necesita aprobación. Hasta entonces, el diseño usa la etiqueta de intención entre corchetes.

**Textos del hero y de la idea de marca**

| Elemento            | Castellano                                                                     | Estado    | English                                                                    | Estado    |
| ------------------- | ------------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------- | --------- |
| Titular             | De la idea a un sistema funcional                                              | Aprobado  | From idea to a working system                                              | Propuesta |
| Bajada              | Diseñamos y desarrollamos a tu medida. Contanos qué necesitás.                 | Propuesta | We design and build to fit you. Tell us what you need.                     | Propuesta |
| Llamado principal   | Escribinos                                                                     | Vigente   | Get in touch                                                               | Vigente   |
| Llamado secundario  | Nuestros proyectos                                                             | Aprobado  | Our projects                                                               | Propuesta |
| Idea de marca (pie) | La [F] y la [J] son las teclas guía de tu teclado: este es tu punto de partida | Aprobado  | The [F] and [J] are your keyboard's home keys: this is your starting point | Propuesta |

El texto vigente de la v0 («Soluciones digitales a medida») queda como título de página y descripción para buscadores.

**Inicio**

| #   | Sección         | Objetivo                               | Contenido, de mayor a menor jerarquía                                                                                 | Castellano | English    |
| --- | --------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| 1   | Hero            | Decir qué hacemos y empujar a escribir | Titular (`display`), bajada (`lead`), llamado principal y secundario, fila base                                       | Ver arriba | Ver arriba |
| 2   | Servicios       | Reconocer el problema propio           | Título fijo y cinco filas (número, nombre, una línea y la tecla «Qué incluye»); un solo llamado «Escribinos» al final | Aprobado   | Aprobado   |
| 3   | Proyectos       | Dar prueba con trabajo real            | Título y filas de proyecto (nombre, una línea, «Ver caso» e imagen)                                                   | Propuesta  | Propuesta  |
| 4   | Cómo trabajamos | Bajar la incertidumbre                 | Título, introducción y cinco pasos con la línea de relieve que avanza                                                 | Aprobado   | Aprobado   |
| 5   | Nosotros        | Poner cara                             | Retrato, nombre, título y canales (WhatsApp, LinkedIn y portfolio) de cada persona; una frase                         | Propuesta  | Propuesta  |
| 6   | Contacto        | Convertir                              | Título, formulario y canales alternativos (mail, WhatsApp y LinkedIn)                                                 | Vigente    | Vigente    |
| 7   | Pie             | Cerrar y explicar el nombre            | Frase de la idea de marca con las teclas F y J, contacto y privacidad                                                 | Aprobado   | Propuesta  |

**Servicios.** Cinco servicios: webs, aplicaciones, bots, sistemas a medida e integraciones y automatización. Cada uno tiene su número, su nombre, una línea que dice qué problema resuelve (no cómo se hace) y una tecla «Qué incluye» que despliega tres ítems (es un botón real, no un hover). No hay enlaces de ejemplo por servicio: los casos viven en Proyectos. Hay un solo llamado «Escribinos» al final de la sección. El título queda fijo a la izquierda mientras las filas entran (efecto 3).

**Cómo trabajamos.** Se escribe con lo que realmente pasa, desde la mirada de quienes trabajan como analistas funcionales: se entiende el problema antes de planificar, diseñar y desarrollar. Pasos: entender (análisis funcional inicial por videollamada, de hasta una hora y sin costo), presupuestar (se acuerdan el alcance, cómo se prueba y el soporte o mantenimiento), diseñar y construir (con entregas parciales posibles, que se presupuestan aparte), probar (sincrónico o asincrónico, según el presupuesto) y publicar (en la fecha pactada). No se muestran plazos. La línea de relieve avanza con el scroll (efectos 4 y 5). Los textos están aprobados.

**Proyectos.** Fila con nombre (`title`), una línea descriptiva, tecla «Ver caso» e imagen a la derecha, separadas por regletas. Sin etiquetas de tecnología en la fila (no le dicen nada a quien contrata) y sin mencionar clientes. Casos iniciales: Audenpass y el predictor del Mundial 2026.

**Caso** (`/proyectos/<caso>`). Plantilla: cabecera compacta con «← Proyectos», nombre (`display` reducido), una línea, una ficha de cuatro datos (año, estado, rol y sitio) y la imagen principal (transición de vista); qué se hizo, ordenado por área (diseño, frontend, backend, infraestructura); pantallas, una grilla de dos columnas en escritorio y de una en móvil con capturas del producto y su nombre debajo (sin capturas, un recuadro «Captura pendiente» que no se publica); el resultado cuando haya cifras comprobables; y el enlace al caso siguiente. Un caso solo se publica cuando el producto está en línea. Los nombres de las personas no son obligatorios. Sin testimonios.

| Caso                       | Línea (propuesta)                                                           | Áreas                                      |
| -------------------------- | --------------------------------------------------------------------------- | ------------------------------------------ |
| Audenpass                  | Venta de entradas y control de accesos para eventos.                        | Diseño, frontend, backend, infraestructura |
| Predictor del Mundial 2026 | Probabilidades, goles esperados y resultados más probables de cada partido. | Modelo y API, frontend                     |

**Contacto.** Objetivo: que escribir sea fácil. Formulario (nombre, mail, empresa opcional, tipo de proyecto, mensaje, consentimiento y Turnstile) y los canales alternativos. Sin campo de presupuesto. Estados: enviando, enviado y error.

**Privacidad.** Contenido mínimo: quién es responsable, qué datos se piden (nombre, mail, empresa y mensaje), para qué se usan, qué proveedores participan (Cloudflare), cuánto se conservan y cómo ejercer los derechos. El texto legal lo valida alguien con competencia antes de publicarlo.

**404.** Mensaje breve, enlace al inicio y el selector de idioma.

### 5.4 Jerarquía de contenido

En el inicio: un solo `h1` (el titular), secciones con `h2` (`headline`) y proyectos con `h3` (`title`). En las demás páginas, un solo `h1`. El llamado principal tiene un solo estilo de botón por pantalla.

## 6. Componentes

Cada componente existe en ambos temas y a 390 y 1440 px. Estados comunes a todo lo interactivo: reposo, hover, foco visible, presionado y deshabilitado.

| Componente                      | Variantes                                                                                       | Estados y notas                                                                                                                                                                                                              |
| ------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tecla                           | `lg`, `md`, `sm`, `xs`; tono `surface` o `inverse`; con y sin barra de relieve; con y sin ícono | Presionada baja 4 px solo al apretar; seleccionada lleva una línea bajo la etiqueta. Deshabilitada sin canto. Es la base de botones y teclas                                                                                 |
| Botón                           | Principal (`inverse`) y secundario (`surface`), tamaños `md` y `sm`                             | Una tecla con texto. Un solo principal por pantalla                                                                                                                                                                          |
| Fila de teclas (navegación)     | Grande en el hero, compacta en el encabezado, 2 x 2 en móvil                                    | Tecla activa con `aria-current="true"` y línea bajo la etiqueta; barra de relieve en la 1ª y la 4ª cuando no están seleccionadas                                                                                             |
| Encabezado                      | De arriba (logo, idioma y tema), compacto con scroll, móvil con menú cerrado y abierto          | El compacto aparece con el scroll (efecto 1)                                                                                                                                                                                 |
| Logo                            | Wordmark con barra y isotipo (tecla con la G); tamaños `md` y `lg`                              | Con enlace al inicio en el encabezado y el pie                                                                                                                                                                               |
| Énfasis ondulado                | Frase con subrayado ondulado                                                                    | Decorativo: no es un enlace. Se marca con `<em>`                                                                                                                                                                             |
| Selector de idioma              | ES y EN, dos teclas                                                                             | Actual seleccionada con línea y `aria-current`; cada opción con su `lang`                                                                                                                                                    |
| Selector de tema                | Claro y oscuro (dos teclas con ícono)                                                           | Teclas con `aria-pressed`; la seleccionada lleva la línea bajo el ícono; oculto sin JavaScript                                                                                                                               |
| Menú móvil                      | Cerrado, abierto                                                                                | Foco atrapado al abrir, `Esc` cierra, devuelve el foco                                                                                                                                                                       |
| Servicio (fila)                 | Escritorio y móvil, cerrado y abierto                                                           | Número, nombre, una línea y tecla «Qué incluye» (pasa a «Ocultar» al abrirse); tres ítems abiertos. Botón con `aria-expanded` y regleta                                                                                      |
| Fila de proyecto                | Reposo, hover                                                                                   | Nombre, línea, tecla «Ver caso» e imagen. La imagen participa de la transición de vista. En hover (y foco) la fila entera es el enlace: la tecla pasa a su estado hover y la imagen suma un borde de 1 px en `border-strong` |
| Paso de proceso                 | Activo y apagado                                                                                | Efecto 5                                                                                                                                                                                                                     |
| Tarjeta de socio                | Con retrato (escritorio y móvil) y sin retrato                                                  | Nombre, título («Desarrolladora» y «Desarrollador») y canales como enlaces con etiqueta accesible. Sin retrato: `[Retrato]`                                                                                                  |
| Canal de contacto               | Mail, WhatsApp, LinkedIn, GitHub y portfolio                                                    | Abre en pestaña nueva con `rel="noopener"`. El portfolio de cada persona se muestra en Nosotros                                                                                                                              |
| Pie                             | Escritorio, móvil                                                                               | Con la frase de la idea de marca y las teclas F y J (`xs`)                                                                                                                                                                   |
| Campo de texto                  | Texto, mail, área de texto                                                                      | Reposo, foco, completado, error, deshabilitado                                                                                                                                                                               |
| Selector (tipo de proyecto)     | Cerrado, abierto                                                                                | Nativo estilizado, sin librería                                                                                                                                                                                              |
| Casilla de consentimiento       | Marcada, sin marcar                                                                             | Con enlace a privacidad                                                                                                                                                                                                      |
| Turnstile                       | Reservado                                                                                       | Espacio fijo para evitar saltos de layout                                                                                                                                                                                    |
| Aviso de formulario             | Éxito, error                                                                                    | `role="status"` o `role="alert"`; resumen de errores arriba del formulario. El error lleva ícono y texto; el éxito no usa el acento (se distingue por el ícono y el texto)                                                   |
| Contenido legal                 | Texto corrido con encabezados y listas                                                          | Para la página de privacidad                                                                                                                                                                                                 |
| Enlace para saltar al contenido | Visible solo con foco                                                                           | Primer elemento de la página                                                                                                                                                                                                 |

## 7. Accesibilidad

- **Contraste:** AA en los dos temas (sección 3.3). Todo par nuevo se calcula antes de usarse.
- **Controles:** el borde de las teclas, los campos y los botones secundarios usa `border-strong` (3:1 o más contra el fondo).
- **Teclado:** todo es operable con teclado, en orden visual. Sin trampas de foco (el menú móvil devuelve el foco al cerrar).
- **Foco:** anillo de 2 px con `focus`, desplazado 3 px, visible en todos los fondos. No se elimina nunca `outline` sin reemplazo.
- **Objetivos táctiles:** mínimo 44 x 44 px en celular (WCAG 2.2 pide 24 px como mínimo absoluto).
- **Estructura:** `lang` correcto por página (`es-AR` y `en-US`) y por fragmento cuando cambia el idioma. Landmarks (`header`, `nav`, `main`, `footer`), un `h1` por página y enlace para saltar al contenido. La navegación es un `nav` con enlaces, no una fila de botones.
- **Formularios:** cada campo con `label` visible, ayuda asociada con `aria-describedby`, errores en texto junto al campo y resumen anunciado. Sin placeholders como etiqueta. `autocomplete` correcto.
- **Imágenes:** `alt` descriptivo en capturas y retratos; vacío en lo decorativo.
- **Movimiento:** `prefers-reduced-motion` respetado (sección 3.10) y ningún contenido depende de animaciones. La transición de vista también se desactiva.
- **Zoom y texto:** se lee y se opera con zoom al 200 % y con el espaciado de texto ampliado, sin scroll horizontal. Las medidas de texto usan `rem`.
- **Verificación:** axe en los E2E (ya existente) sobre todas las páginas y en ambos idiomas y temas.

## 8. Rendimiento

- **Sitio estático** de Astro. La JavaScript inicial son dos scripts de menos de 1 KB cada uno, servidos desde el propio dominio: el de tema (bloqueante en el `<head>`) y el de la tecla activa.
- **Hidratación solo donde hace falta.** El formulario es la única isla; se hidrata con `client:visible`. Si pasa de 50 KB comprimido, se reescribe sin React.
- **Presupuestos por página:** HTML, CSS y fuentes juntos por debajo de 150 KB comprimidos; imágenes por debajo de 300 KB cada una; LCP menor a 2,5 s en 4G en un celular de gama media; CLS menor a 0,1; INP menor a 200 ms.
- **Fuentes:** dos precargas (el latino normal de Instrument Serif y el de Geist), `font-display: swap`, respaldo de sistema con métricas ajustadas.
- **LCP:** el titular del hero es texto (no una imagen). Las imágenes arriba del pliegue llevan `fetchpriority="high"` y dimensiones fijas.
- **Sin terceros** salvo Cloudflare Web Analytics (sin cookies) y Turnstile, que solo se carga en Contacto.
- **Animaciones** solo de `transform` y `opacity`, con CSS y sin librerías.
- **Caché:** los recursos de `_astro/` ya son inmutables; el resto se valida en cada visita.

## 9. Fuera de la v1

- Blog o notas, buscador y CMS.
- Precios, calculadoras y testimonios (hasta contar con permiso escrito).
- Más idiomas que castellano e inglés.
- Área de clientes, chat, boletín y cualquier cosa que necesite cookies.
- WebGL, 3D, video, cursores personalizados y librerías de animación o de scroll.
- Teclas con función real (atajos de teclado), BL-16.
- Imagen Open Graph generada de forma dinámica: se usa una imagen estática por idioma.
- Dominio `.com.ar` (BL-06).
