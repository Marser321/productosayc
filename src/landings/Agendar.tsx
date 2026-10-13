import { useEffect } from 'react'
import { Section, Container, Kicker, DisplayHeading } from '../components/primitives'
import { Reveal } from '../components/motion'
import { Hero, LandingLayout } from '../components/shell'
import { GHLBooking } from '../components/forms'
import type { Scrim } from '../components/media'

// Calendario "Programa de compra de propiedades en Subasta" (consulta de 1 h).
// El cliente pasó el One-Time Link `…/widget/otl/piyGfWmE7?slug=compra-en-subasta`;
// acá va el link permanente del mismo calendario (mismo slug), porque el OTL
// se vence con la primera reserva.
const CALENDARIO_SRC = 'https://api.leadconnectorhq.com/widget/bookings/compra-en-subasta'

/**
 * Página de agenda: hero corto de marca + el calendario de GHL. Sin oferta ni
 * precios: solo agendar la consulta.
 */
export default function Agendar() {
  useEffect(() => {
    document.title = 'Agenda tu consulta — Magic Capital'
  }, [])

  return (
    <LandingLayout activity={false} hideWhatsApp>
      <Hero
        tone="charcoal"
        image={{
          src: '/img/03/03-compra-intensivo__hero-fundadores-sesion-vivo.png',
          alt: 'Carmen y Argenis — Magic Capital',
          focal: '50% 35%',
          scrim: 'full' as Scrim,
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <Kicker>Agenda tu consulta</Kicker>
          <DisplayHeading as="h1" size="xl" className="mt-4">
            Programa de compra de propiedades en subasta
          </DisplayHeading>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-ivory/75">
            Elige el día y la hora que te queden cómodos. Es una consulta de una hora para
            conocer tu caso y ver si el programa es para ti.
          </p>
        </div>
      </Hero>

      <Section id="calendario" tone="ivory-dim" pad="md">
        <Container>
          <Reveal className="mx-auto max-w-4xl">
            {/* En móvil la tarjeta va de borde a borde (-mx-5 anula el gutter del
                Container): el widget de GHL necesita ~375px y con márgenes se
                cortaba a la derecha (no se veían viernes ni sábado). */}
            <div className="-mx-5 bg-white sm:mx-0 sm:rounded-2xl sm:border sm:border-gold/30 sm:p-3 sm:shadow-gold-ring">
              <GHLBooking
                src={CALENDARIO_SRC}
                title="Agenda tu consulta — Programa de compra de propiedades en subasta"
              />
            </div>
            <p className="mt-4 text-center text-[12.5px] text-ivory/50">
              Recibirás la confirmación por correo. Si no la ves, revisa spam o promociones.
            </p>
          </Reveal>
        </Container>
      </Section>
    </LandingLayout>
  )
}
