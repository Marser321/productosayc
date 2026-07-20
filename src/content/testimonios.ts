// ─────────────────────────────────────────────────────────────────────────
//  TESTIMONIOS EN VIDEO — clips reales de alumnos de Carmen y Argenis.
//
//  Los originales (.mov, 720x1280, 772 MB en total) venían con bitrates de 12 a
//  41 Mbps. Se transcodificaron a H.264 CRF 28 + AAC 96k mono con `faststart`
//  (52 MB en total) y se generó un póster JPG de cada uno. El video NO se
//  descarga hasta que el visitante pulsa play: las tarjetas muestran el póster
//  y el <video> se monta con preload="none".
//
//  ⚠ SIN NOMBRES A PROPÓSITO. No sabemos quiénes son las personas de los clips,
//  y ponerles nombre y ciudad inventados sería prueba social fabricada — lo
//  mismo que se acaba de quitar del sitio. Cuando el cliente confirme quién es
//  cada uno, se rellena `nombre`/`ciudad` y la tarjeta los muestra sola.
// ─────────────────────────────────────────────────────────────────────────

export type Testimonio = {
  /** Nombre del archivo base en /video/testimonios (sin extensión). */
  file: string
  /** Duración en segundos, para la etiqueta de la tarjeta. */
  segundos: number
  /** Nombre de pila, cuando el cliente lo confirme. Vacío = no se muestra. */
  nombre?: string
  /** Ciudad, cuando el cliente la confirme. Vacío = no se muestra. */
  ciudad?: string
}

/** El orden de este array es el orden del carrusel: el primero es el que más
 *  gente va a ver, así que conviene que sea el más contundente. */
export const TESTIMONIOS: readonly Testimonio[] = [
  { file: 'testimonio-02', segundos: 19 },
  { file: 'testimonio-03', segundos: 40 },
  { file: 'testimonio-01', segundos: 47 },
  { file: 'testimonio-04', segundos: 46 },
  { file: 'testimonio-05', segundos: 122 },
]

/** Etiqueta de duración estilo reproductor (2:02). */
export function duracionLabel(segundos: number): string {
  const m = Math.floor(segundos / 60)
  const s = segundos % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

/** Nota honesta al pie del bloque (resultados individuales, no promedio). */
export const TESTIMONIOS_NOTA =
  'Experiencias individuales de alumnos. Los resultados varían según el capital, el mercado, la constancia y el caso de cada persona; no representan un resultado promedio ni asegurado.'
