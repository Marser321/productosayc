import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────────
//  Precio de la Mentoría con revelado dramático, UNA SOLA VEZ por persona.
//
//  La secuencia: aparece el precio regular EN GRANDE (ocupando el lugar del
//  precio final, para que se lea como "esto es lo que cuesta"), se tacha con
//  una línea dorada que se dibuja, y recién ahí se encoge hacia su sitio de
//  arriba mientras el precio real entra de golpe con un destello.
//
//  Se ve una vez y no molesta más: queda marcado en localStorage. En visitas
//  siguientes —y con `prefers-reduced-motion`— se pinta directo el estado
//  final, que es exactamente el mismo layout.
//
//  ⚠ INVARIANTE: el estado final está SIEMPRE en el DOM; lo de la animación es
//  una capa absoluta por encima. Si el observer no dispara, si el JS falla a
//  medias o si el visitante se va antes, lo que queda en pantalla es el precio
//  correcto. Además hay un temporizador de seguridad que fuerza el final a los
//  6 s. Nunca puede quedarse mostrando solo los $5,000.
// ─────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'mc_oferta_precio_revelado'

type Fase = 'espera' | 'regular' | 'tachando' | 'final'

function yaLoVio(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    // Safari en privado tira al leer localStorage: si no se puede saber,
    // asumimos que ya lo vio (mejor no animar que animar de más).
    return true
  }
}

function marcarVisto() {
  try {
    localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    /* sin persistencia disponible: no pasa nada, es un extra */
  }
}

export function PrecioMasterclass({
  regular,
  hoy,
  fmt,
}: {
  regular: number
  hoy: number
  fmt: (n: number) => string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  // Arranca en 'final' si ya lo vio o si pidió menos movimiento: así el primer
  // pintado ya es el correcto y no hay parpadeo.
  const [fase, setFase] = useState<Fase>('final')
  // Estado propio para el destello: no se puede consultar `yaLoVio()` al
  // renderizar el final, porque para entonces ya quedó marcado como visto.
  const [destello, setDestello] = useState(false)

  useEffect(() => {
    if (reduce || yaLoVio()) return
    setFase('espera')

    const el = ref.current
    if (!el) return
    let timers: number[] = []
    let disparado = false

    const arrancar = () => {
      if (disparado) return
      disparado = true
      // Sin retraso inicial a propósito: antes de entrar en pantalla se está
      // mostrando el estado final (por seguridad), así que cualquier demora acá
      // es un fotograma con la respuesta a la vista antes del revelado.
      setFase('regular')
      timers.push(window.setTimeout(() => setFase('tachando'), 900))
      timers.push(
        window.setTimeout(() => {
          setFase('final')
          setDestello(true)
          marcarVisto()
        }, 1750),
      )
      timers.push(window.setTimeout(() => setDestello(false), 2950))
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          arrancar()
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)

    // Red de seguridad: si el observer nunca dispara (pestaña en segundo plano,
    // navegador raro), a los 6 s se muestra el precio final igual.
    const rescate = window.setTimeout(() => {
      if (!disparado) {
        disparado = true
        setFase('final')
      }
    }, 6000)
    timers.push(rescate)

    return () => {
      io.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [reduce])

  const enIntro = fase === 'regular' || fase === 'tachando'

  return (
    <div ref={ref} className="relative">
      {/* ── ESTADO FINAL (siempre presente) ─────────────────────────────── */}
      <div className={enIntro ? 'invisible' : undefined}>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ivory/40">
            Precio regular
          </span>
          <PrecioTachado valor={fmt(regular)} tachado className="text-2xl sm:text-3xl" />
        </div>
        <div className="mt-1.5 flex flex-wrap items-end gap-x-3 gap-y-1">
          {/* El golpe de entrada va atado a `destello`, que solo es true en la
              transición de la intro. Quien ya la vio abre la página con el
              precio quieto, sin rebote gratuito en cada visita. */}
          <motion.span
            className="font-display text-5xl font-bold leading-none text-gold-metallic sm:text-6xl"
            initial={false}
            animate={destello ? { scale: [0.7, 1.08, 1], opacity: [0, 1, 1] } : { scale: 1, opacity: 1 }}
            transition={destello ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
          >
            {fmt(hoy)}
          </motion.span>
          <span className="pb-1 text-[13px] font-semibold text-gold-bright">
            hoy, desde la masterclass
          </span>
        </div>
      </div>

      {/* ── CAPA DE INTRO (solo la primera visita) ──────────────────────── */}
      {enIntro && (
        <motion.div
          aria-hidden
          className="absolute inset-0 flex flex-col justify-start"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ivory/40">
            Precio regular
          </span>
          {/* El regular ocupa el tamaño del precio grande: por un instante
              parece SER el precio, que es justo lo que lo hace funcionar. */}
          <PrecioTachado
            valor={fmt(regular)}
            tachado={fase === 'tachando'}
            animarTachado
            className="mt-1 font-display text-5xl font-bold leading-none text-ivory/85 sm:text-6xl"
          />
        </motion.div>
      )}

      {/* Destello dorado en el momento del cambio. */}
      {destello && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -inset-4 rounded-2xl bg-gold/25 blur-2xl"
          initial={{ opacity: 0.9, scale: 0.9 }}
          animate={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      )}
    </div>
  )
}

/**
 * Número con línea de tachado propia (no `line-through`): así se puede dibujar
 * de izquierda a derecha y tiene color y grosor de marca, que es lo que le da
 * peso al gesto.
 */
function PrecioTachado({
  valor,
  tachado,
  animarTachado = false,
  className,
}: {
  valor: string
  tachado: boolean
  animarTachado?: boolean
  className?: string
}) {
  return (
    <span className={`relative inline-block ${className ?? ''}`}>
      <span className="font-display">{valor}</span>
      <motion.span
        aria-hidden
        className="absolute left-0 top-1/2 h-[3px] w-full origin-left -translate-y-1/2 rounded-full bg-gold shadow-[0_0_12px_rgba(201,162,75,0.7)]"
        initial={animarTachado ? { scaleX: 0 } : false}
        animate={{ scaleX: tachado ? 1 : 0 }}
        transition={{ duration: animarTachado ? 0.5 : 0, ease: [0.65, 0, 0.35, 1] }}
      />
    </span>
  )
}
