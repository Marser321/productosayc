import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from '../primitives/Container'
import { LogoMark } from '../primitives/Logo'
import { VideoBackground, type Scrim } from '../media'
import { DepthBackground } from '../media'
import { Spotlight } from '../media'
import { DEADLINES } from '../../content/brand'
import { cn } from '../../lib/cn'

type HeroTone = 'charcoal' | 'petrol' | 'ivory'

/**
 * Shell de hero: imagen de fondo (Ken Burns + scrim) con parallax opcional,
 * spotlight en tonos oscuros y contenedor con padding para la barra fija.
 * El contenido (titular, form, CTAs) va como children.
 */
export function Hero({
  image,
  tone = 'charcoal',
  parallax = true,
  fillViewport = false,
  children,
  className,
}: {
  image?: { src: string; alt: string; focal?: string; scrim?: Scrim; video?: string; webm?: string }
  tone?: HeroTone
  parallax?: boolean
  /** El hero ocupa ~una pantalla (min-h-svh, columna flex) — para que el video y
   *  el CTA quepan en el primer pantallazo móvil. */
  fillViewport?: boolean
  children: ReactNode
  className?: string
}) {
  const dark = tone !== 'ivory'
  // Oscuro-lujo: todos los tonos del hero son superficies oscuras (navy/midnight).
  const toneClass =
    tone === 'charcoal' ? 'bg-midnight text-ivory' : tone === 'petrol' ? 'bg-navy text-ivory' : 'bg-navy text-ivory'

  // El único elemento FIJO arriba es la UrgencyBar (solo en rutas con deadline).
  // Desde que existe la `BrandBar` —que va en el flujo y ya reserva la altura de
  // la UrgencyBar—, el hero NO tiene que despejar nada: arranca justo debajo del
  // logo. Lo que sí cambia con `hasBar` es la altura del cromo que queda por
  // encima (BrandBar 56/64 px, más 50/54 px de UrgencyBar cuando la hay): el hero
  // a-pantalla la descuenta para que el CTA siga cayendo dentro del primer fold.
  const { pathname } = useLocation()
  const hasBar = Boolean(DEADLINES[pathname])
  const fillMinH = hasBar
    ? 'min-h-[calc(100svh-106px)] sm:min-h-[calc(100svh-118px)]'
    : 'min-h-[calc(100svh-56px)] sm:min-h-[calc(100svh-64px)]'

  // Drop-in: VideoBackground muestra el poster (la imagen) hoy; cuando se generen
  // los loops M1–M5 basta con pasar `image.video` y reproduce el bucle cinematográfico.
  const bg = image && (
    <VideoBackground
      src={image.video}
      webm={image.webm}
      poster={image.src}
      alt={image.alt}
      focal={image.focal}
      scrim={image.scrim ?? (dark ? 'left' : 'none')}
      priority
      className="h-full w-full"
    />
  )

  return (
    <section className={cn('relative isolate overflow-hidden grain', toneClass, className)}>
      {image &&
        (parallax ? (
          <DepthBackground layers={[{ node: bg, depth: 0.35 }]} />
        ) : (
          <div className="absolute inset-0">{bg}</div>
        ))}
      {dark && <Spotlight />}
      {/* Filigrana del isotipo: presencia de marca en el hero sin repetir el
       *  lockup que ya está en la BrandBar justo encima. Decorativa y por debajo
       *  del contenido (z-0 bajo el Container z-10), nunca intercepta clics. */}
      {dark && (
        <LogoMark className="pointer-events-none absolute -bottom-10 -right-10 z-0 h-64 opacity-[0.06] sm:-bottom-16 sm:-right-16 sm:h-96" />
      )}
      <Container
        className={cn(
          'relative z-10',
          fillViewport
            ? cn('flex flex-col pt-8 pb-6 sm:pt-12', fillMinH)
            : 'pb-16 sm:pb-24 pt-12 sm:pt-16',
        )}
      >
        {children}
      </Container>
    </section>
  )
}
