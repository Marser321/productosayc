import { useEffect } from 'react'
import { Kicker, DisplayHeading, Icon } from '../primitives'
import { Reveal } from '../motion'
import { Hero } from './Hero'
import { LandingLayout } from './LandingLayout'
import { img } from '../../content/images'
import type { Scrim } from '../media'

// Imagen de recibimiento premium — fondo genérico del hero de gracias.
const HERO_IMG = {
  src: img('06', '06-gracias-compra-mentoria__hero-recibimiento-premium.png'),
  alt: 'Recibimiento premium de Magic Capital',
  focal: '50% 35%',
}

/**
 * Página de gracias GENÉRICA, sencilla — una sola para todos los productos.
 * Solo confirmación: sin agenda, calendario, área de miembros, WhatsApp NI
 * testimonios. IMPORTANTE: NO usa `fillViewport` (min-h-svh) — dentro de un
 * iframe eso estira la página a la altura del iframe y la deja casi vacía; el
 * alto debe ser el del contenido para que el embed auto-ajuste bien.
 */
export function GraciasSimple() {
  useEffect(() => {
    document.title = 'Gracias por tu compra — Magic Capital'
  }, [])

  return (
    <LandingLayout activity={false} hideWhatsApp fullHeight={false}>
      <Hero tone="charcoal" image={{ ...HERO_IMG, scrim: 'full' as Scrim }}>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-3xl text-gold ring-1 ring-gold/40">
              <Icon.Check />
            </span>
          </Reveal>

          <Kicker className="mt-6">Compra confirmada</Kicker>
          <DisplayHeading as="h1" size="xl" className="mt-4">
            ¡Muchas gracias por tu compra!
          </DisplayHeading>

          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-ivory/75">
            Tu compra quedó confirmada y ya tenemos tus datos. En unos minutos
            recibirás tu correo de confirmación —{' '}
            <strong className="text-ivory">revisa spam o promociones</strong> si no
            lo ves.
          </p>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ivory/60">
            Nos estaremos comunicando contigo muy pronto. No tienes que hacer nada
            más por ahora.
          </p>
        </div>
      </Hero>
    </LandingLayout>
  )
}
