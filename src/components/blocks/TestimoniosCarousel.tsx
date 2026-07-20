import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Icon } from '../primitives'
import { TESTIMONIOS, duracionLabel } from '../../content/testimonios'

// ─────────────────────────────────────────────────────────────────────────
//  Carrusel lateral de testimonios en video. 3 visibles en desktop, 2 en
//  tablet, 1 (asomando la siguiente) en móvil; las flechas rotan de a una.
//
//  El desplazamiento es scroll nativo con scroll-snap, no transforms con
//  cálculo manual: así el arrastre táctil, la rueda y el teclado funcionan
//  gratis y sin jank. Las flechas solo llaman a scrollBy().
//
//  Peso: cada tarjeta pinta el póster (~60 KB) y el <video preload="none"> se
//  monta SOLO al pulsar play, así que la página no arranca descargando 52 MB.
//  Reproducir uno pausa el que estuviera sonando.
// ─────────────────────────────────────────────────────────────────────────

export function TestimoniosCarousel() {
  const reduce = useReducedMotion()
  const trackRef = useRef<HTMLUListElement>(null)
  const [activo, setActivo] = useState<string | null>(null)
  const [puedeIzq, setPuedeIzq] = useState(false)
  const [puedeDer, setPuedeDer] = useState(true)

  // Estado de las flechas: se apagan al llegar a cada extremo.
  const revisarBordes = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setPuedeIzq(el.scrollLeft > 8)
    setPuedeDer(el.scrollLeft < max - 8)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    revisarBordes()
    el.addEventListener('scroll', revisarBordes, { passive: true })
    window.addEventListener('resize', revisarBordes)
    return () => {
      el.removeEventListener('scroll', revisarBordes)
      window.removeEventListener('resize', revisarBordes)
    }
  }, [revisarBordes])

  /** Rota una tarjeta. El paso se mide del DOM, no se hardcodea, para que siga
   *  siendo correcto en cualquier breakpoint. */
  const rotar = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('li')
    const paso = card ? card.getBoundingClientRect().width + 16 : el.clientWidth / 3
    el.scrollBy({ left: dir * paso, behavior: reduce ? 'auto' : 'smooth' })
  }

  /** Solo un video sonando a la vez. */
  const reproducir = (file: string) => {
    setActivo(file)
    requestAnimationFrame(() => {
      trackRef.current?.querySelectorAll('video').forEach((v) => {
        if (!v.dataset.file || v.dataset.file !== file) v.pause()
      })
    })
  }

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TESTIMONIOS.map((t) => {
          const abierto = activo === t.file
          return (
            <li
              key={t.file}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-2rem)/3)]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-soft shadow-glass-dark">
                <div className="relative aspect-[9/16] w-full">
                  {abierto ? (
                    <video
                      data-file={t.file}
                      src={`/video/testimonios/${t.file}.mp4`}
                      poster={`/video/testimonios/${t.file}-poster.jpg`}
                      className="h-full w-full object-cover"
                      controls
                      autoPlay
                      playsInline
                      preload="none"
                      onPlay={() => reproducir(t.file)}
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => reproducir(t.file)}
                      aria-label={`Reproducir testimonio de ${duracionLabel(t.segundos)}`}
                      className="group/play absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
                    >
                      <img
                        src={`/video/testimonios/${t.file}-poster.jpg`}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        width={540}
                        height={960}
                        className="h-full w-full object-cover"
                      />
                      {/* Velo inferior: da contraste a la etiqueta sin tapar la cara. */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-midnight/85 to-transparent"
                      />
                      <span
                        aria-hidden
                        className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold/90 text-midnight shadow-cta transition-transform duration-200 group-hover/play:scale-110"
                      >
                        <Icon.Play className="ml-0.5 text-xl" />
                      </span>
                      <span className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="rounded-full bg-midnight/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ivory/80 backdrop-blur-sm">
                          Testimonio real
                        </span>
                        <span className="rounded-full bg-midnight/70 px-2 py-1 text-[10.5px] font-medium tabular-nums text-ivory/70 backdrop-blur-sm">
                          {duracionLabel(t.segundos)}
                        </span>
                      </span>
                    </button>
                  )}
                </div>

                {/* Pie con nombre — solo si el cliente lo confirmó (ver testimonios.ts). */}
                {t.nombre && (
                  <div className="px-4 py-3">
                    <p className="text-[13.5px] font-semibold text-ivory">{t.nombre}</p>
                    {t.ciudad && <p className="text-[12px] text-ivory/50">{t.ciudad}</p>}
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>

      {/* Flechas. Ocultas en móvil: ahí se arrastra con el dedo y ocuparían
          espacio sobre las tarjetas. */}
      <div className="mt-5 hidden items-center justify-center gap-3 sm:flex">
        <FlechaBtn dir="izq" onClick={() => rotar(-1)} disabled={!puedeIzq} />
        <FlechaBtn dir="der" onClick={() => rotar(1)} disabled={!puedeDer} />
      </div>
    </div>
  )
}

function FlechaBtn({
  dir,
  onClick,
  disabled,
}: {
  dir: 'izq' | 'der'
  onClick: () => void
  disabled: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'izq' ? 'Ver testimonios anteriores' : 'Ver más testimonios'}
      className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold transition-all hover:border-gold/60 hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 disabled:pointer-events-none disabled:opacity-30"
    >
      <Icon.ArrowRight className={dir === 'izq' ? 'rotate-180' : undefined} />
    </button>
  )
}
