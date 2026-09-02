# Portafolio · Andrés Nieto Bermúdez

Portafolio de analista de datos. React + Vite + Tailwind CSS 4, desplegado en Vercel.

**Producción:** https://mi-portafolio-analista.vercel.app

---

## Cómo correrlo

```bash
npm install
```

```bash
npm run dev
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Compila a `dist/` |
| `npm run preview` | Sirve el build ya compilado |
| `npm run lint` | ESLint sobre todo el proyecto |

**Despliegue:** cada push a `main` dispara un deploy automático en Vercel. Un commit en `main`
es una publicación en vivo, no un cambio local.

---

## Estructura

```
public/
  images/            capturas de los proyectos (ver "Anonimización")
  tablero.html       tablero HTML autocontenido del proyecto destacado
src/
  index.css          entrada de Tailwind + tokens de diseño
  App.jsx            navbar, composición de secciones y pie
  components/
    Hero.jsx         portada
    Skills.jsx       aptitudes y ficha de perfil
    Projects.jsx     los tres proyectos + galería con lightbox
    LabelChip.jsx    etiqueta monoespaciada reutilizable
```

### Tailwind CSS 4 — ojo con la sintaxis

El proyecto usa **Tailwind 4**. La entrada en `src/index.css` es:

```css
@import "tailwindcss";
```

La sintaxis de la v3 (`@tailwind base; @tailwind components; @tailwind utilities;`) **no compila
nada** y deja el sitio sin estilos. `tailwind.config.js` se conserva pero la v4 lo ignora: los
tokens viven en el bloque `@theme` de `index.css`.

Tampoco hacen falta los `import React` — con React 19 sobran y rompen `npm run lint`.

### Tokens de diseño

Definidos en `@theme` dentro de `src/index.css`:

- **Superficies** `--color-surface-950 … -700`, del fondo profundo a la tarjeta elevada.
- **Sombras** `--shadow-card`, `--shadow-elevate`, `--shadow-accent`.
- **Tipografía** `--font-sans` (Inter), `--font-display` (Space Grotesk, titulares),
  `--font-mono` (JetBrains Mono, etiquetas).
- **Animaciones** `--animate-fade-up`, `--animate-aurora`, `--animate-pulse-dot`.

Acentos: `sky` para lo técnico, `indigo` para negocio, `emerald` para criterio y confirmaciones.

Los textos pequeños van en `slate-400` o más claro. En `slate-500` el contraste cae a ~4.0:1 sobre
el fondo oscuro, por debajo del mínimo AA de 4.5:1.

---

## Los tres proyectos

Se definen en la constante `PROJECTS` de `src/components/Projects.jsx`. Añadir uno es agregar un
objeto a ese arreglo; el destacado es el primero.

| Proyecto | Capturas | Herramientas |
| --- | --- | --- |
| Tablero Integral y Estratégico de Empleo (HTML) | `dashboard-preview.png` | Excel · Power BI · Python · SQL · Claude Code (IA) · HTML/JS |
| Dashboard Empleo y Emprendimiento (Power BI) | `Captura_5`, `Captura_4`, `Captura_3`, `Captura_1` | Power BI · DAX · Modelado de Datos |
| Gestión de Empresas (Power BI) | `Captura_2` | Power BI · DAX · Modelado de Datos |

Cada proyecto lleva su propia galería. Con una sola captura no se muestra la tira de miniaturas.

**Pendiente:** los dos proyectos de Power BI llevan un `resumen` que describe qué muestra cada
informe, no su impacto. Falta que el autor aporte problema y hallazgos, como los tiene el
destacado. Las cifras y conclusiones las escribe él: no se infieren de las capturas.

### Alturas iguales entre tarjetas

Las dos tarjetas secundarias se alinean con **subgrid**, no con alturas fijas. La rejilla declara
dos filas —galería y contenido— y cada tarjeta las hereda con `lg:row-span-2 lg:grid-rows-subgrid`.
Así ambas galerías comparten pista y el título y las herramientas caen en la misma línea, aunque un
proyecto tenga cuatro capturas y el otro una.

Sin números mágicos: al cambiar un texto o añadir una captura se recalcula solo. Solo aplica desde
`lg`; apiladas en móvil cada tarjeta conserva su altura natural, porque igualarlas ahí solo añadiría
espacio vacío.

### Galería y lightbox

- Marco fijo `16/10` con `object-contain`: la evidencia nunca se recorta, y el marco conserva su
  tamaño aunque la imagen no haya cargado (evita saltos de layout).
- El lightbox se cierra con `Esc` y navega con `←` / `→`.
- En móvil la imagen se muestra a altura de pantalla con desplazamiento horizontal. Encajar una
  captura de 1884 px en un viewport de 390 px la vuelve ilegible.

---

## Anonimización de las capturas

**Las capturas de `public/images/` están anonimizadas y deben seguir estándolo.** Son PNG: el texto
va quemado en el píxel, así que editar el HTML del tablero no las toca.

Se retiró de ellas:

- La marca institucional (logotipo y menciones en encabezados).
- NIT y razones sociales de empresas reales.
- Nombres de terceros.
- Barra de título con el nombre del archivo interno, cinta de Power BI Desktop, barra de tareas de
  Windows y la interfaz de Teams con su árbol de canales.

Antes de añadir una captura nueva, revísala a tamaño completo buscando esos cinco puntos.

Las cifras que quedan son datos operativos agregados reales (metas y cumplimiento por sede), sin
identificadores personales. Los originales sin anonimizar siguen siendo recuperables desde los
commits anteriores de este repositorio y desde los despliegues previos de Vercel: se decidió
conservar el historial.

---

## Accesibilidad

- Contraste AA verificado en todos los textos.
- Foco visible global vía `:focus-visible`.
- Enlace "Saltar al contenido" al inicio del documento.
- Menú móvil con `aria-expanded`; miniaturas con `aria-pressed`; lightbox con `role="dialog"` y
  `aria-modal`.
- Se respeta `prefers-reduced-motion`.
