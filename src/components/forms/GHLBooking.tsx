import { useEffect, useRef, useState } from 'react'

const GHL_ORIGIN = 'https://api.leadconnectorhq.com'

/**
 * Calendario de agendamiento de LeadConnector / GoHighLevel.
 *
 * El widget ya trae el formulario de datos adentro: la persona elige día y hora
 * y deja sus datos en el mismo paso. Confirmación y recordatorios los manda GHL.
 *
 * Usar el link PERMANENTE del calendario (`/widget/bookings/<slug>` o
 * `/widget/booking/<id>`), nunca un `/widget/otl/…`: ese es un One-Time Link y
 * deja de servir después de la primera reserva.
 *
 * Auto-altura SIN `form_embed.js`: el widget avisa su alto real por
 * postMessage (`["highlevel.setHeight", { height }]`) y acá se aplica. Se evita
 * el script a propósito: su versión actual OCULTA los iframes de calendario
 * (opacity 0, left -9999px) hasta completar un handshake que, si el calendario
 * carga antes que el script, no llega nunca — y además no los redimensionaba.
 */
export function GHLBooking({
  src,
  title,
  minHeight = 760,
  className,
}: {
  src: string
  /** Título accesible del iframe. */
  title: string
  /** Altura inicial en px, hasta que el widget avise la suya. */
  minHeight?: number
  className?: string
}) {
  const ref = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(minHeight)

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== GHL_ORIGIN || e.source !== ref.current?.contentWindow) return
      let data: unknown = e.data
      if (typeof data === 'string' && data.startsWith('[')) {
        try {
          data = JSON.parse(data)
        } catch {
          return
        }
      }
      if (Array.isArray(data) && data[0] === 'highlevel.setHeight') {
        const h = Number((data[1] as { height?: unknown })?.height)
        if (h > 0) setHeight(Math.ceil(h))
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      className={className}
      scrolling="no"
      style={{ width: '100%', height, border: 'none', overflow: 'hidden', borderRadius: 12 }}
    />
  )
}
