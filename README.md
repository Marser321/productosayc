# Magic Capital · Funnel de Landings

Versión **local y ultra-refinada** (React + Vite) del funnel de Magic Capital: un **hub** + **8 landings**
+ **lead magnets**. Sin backend — los formularios, el checkout y las descargas son **mocks funcionales**
(banner de demo siempre visible, sin cobros reales). Marca trust-first, anti-hype.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:5190  (ábrelo en una pestaña VISIBLE)
```

Otros scripts:

```bash
npm run build      # typecheck (tsc --noEmit) + bundle de producción a dist/
npm run preview    # sirve dist/ (estático, sin HMR)
npm run lint:copy  # falla si aparece una frase prohibida (compliance) como copy
```

> Las imágenes usan un Ken Burns sutil y algunos fondos animan al puntero; son efectos **ambientales en
> bucle**, así que una captura headless puede no estabilizarse. Para verificar contenido usa el snapshot
> de accesibilidad o el DOM, no el screenshot. Todo respeta `prefers-reduced-motion` y se apaga en
> pantallas táctiles (coarse pointer).

## Rutas

| Ruta | Página |
|---|---|
| `/` | Hub — selector visual de todo el funnel |
| `/lead-magnets` | Los 10 lead magnets (5 Argenis / 5 Carmen) |
| `/l/07-autoridad` | Autoridad (dúo Argenis + Carmen, mecanismo dual) |
| `/l/01-reserva` | Reserva de la masterclass gratuita |
| `/l/02-gracias-reserva` | Gracias por reservar |
| `/l/09-comunidad` | Comunidad Magic Capital ($27/mes) |
| `/l/03-intensivo` | Compra del Intensivo MAP-9 ($297) |
| `/l/04-gracias-intensivo` | Gracias por el Intensivo (+ OTO mentoría) |
| `/l/05-mentoria` | Compra de la Mentoría 1:1 ($3,997) |
| `/l/06-gracias-mentoria` | Gracias por la Mentoría |

Encadenamiento del funnel: `07 → 01 → (form) 02 → 09 / 03 → (checkout) 04 → 05 → (checkout) 06`.
Toda landing comparte la barra superior (selector de página), el pie con disclaimer y el WhatsApp flotante.

## Dónde editar

- **Marca, precios, funnel, 9 fases MAP-9, contacto y fechas de cohorte** →
  [`src/content/brand.ts`](src/content/brand.ts). Aquí viven `CONTACT` y `COHORTE` (valores **demo** —
  ⚠ sustituir por los reales antes de publicar).
- **Compliance** → [`src/content/compliance.ts`](src/content/compliance.ts): disclaimer FTC literal,
  frases prohibidas y etiquetas obligatorias para cifras/casos (`FIGURE_LABELS`).
- **Animación, paleta y easing** → [`src/theme/tokens.ts`](src/theme/tokens.ts).
- **Registro de landings / lead magnets** → `src/content/registry.ts`, `src/content/lead-magnets.ts`.
- **Rutas** → [`src/router.tsx`](src/router.tsx).
- **Landings** → `src/landings/` (una por página); **hub** → `src/hub/`.
- **Componentes** → `src/components/` (`primitives` · `blocks` · `forms` · `media` · `motion` · `shell`).

## Pendiente antes de publicar (datos reales del cliente)

- **Contacto** (`CONTACT` en `brand.ts`): número de WhatsApp, correo y URL pública del deck.
- **Fechas de cohorte** (`COHORTE` en `brand.ts`): fecha/hora reales del Intensivo y horario de soporte.
- **Compromiso de la Mentoría** (`src/landings/CompraMentoria.tsx`, sección "Nuestro compromiso"):
  validar la **redacción exacta** del remedio con asesoría legal (el texto actual promete acompañamiento /
  método, NO resultados — mantener ese enfoque).

## Compliance

El disclaimer §8 va en el pie de **todas** las páginas. Cada cifra/caso/precio fuerte lleva su `Footnote`
con la etiqueta obligatoria. Sin garantías de ingresos/crédito/aprobación, sin urgencia falsa
(el cupo es por capacidad real de la cohorte). `npm run lint:copy` falla si aparece una frase prohibida.

## Stack

Vite 5 · React 18 · TypeScript · Tailwind CSS 3 · Framer Motion · React Router 6 ·
fuentes self-hosted (Inter + Geist, sin red).
