import {
  Section,
  Container,
  Kicker,
  DisplayHeading,
  GlassCard,
  CTAButton,
  Icon,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem } from '../components/motion'
import { Hero, LandingLayout } from '../components/shell'
import { COHORTE } from '../content/brand'
import { img } from '../content/images'

// Enlace de invitación al grupo de WhatsApp real (placeholder temporal)
const LINK_WHATSAPP_COMUNIDAD = 'https://chat.whatsapp.com/invitacion-grupo-comunidad' 

export default function GraciasComunidad() {
  return (
    <LandingLayout hideWhatsApp>
      {/* 1 · Hero de Bienvenida */}
      <Hero
        tone="charcoal"
        image={{
          src: img('04', '04-gracias-compra-intensivo__hero-bienvenida-area-miembros.png'),
          alt: 'Bienvenida a la Comunidad Magic Capital',
          focal: '50% 35%',
          scrim: 'full',
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-3xl text-gold ring-1 ring-gold/40">
              <Icon.Check />
            </span>
          </Reveal>
          <Kicker className="mt-6">Acceso Confirmado</Kicker>
          <DisplayHeading as="h1" size="xl" className="mt-4">
            ¡Bienvenido a la Comunidad!
          </DisplayHeading>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ivory/75">
            Tu suscripción mensual se procesó con éxito. Es momento de entrar al grupo privado.
          </p>
        </div>
      </Hero>

      {/* 2 · Pasos Inmediatos */}
      <Section tone="ivory" pad="md">
        <Container width="narrow">
          <Reveal>
            <GlassCard tone="solid" className="text-center p-8 border border-gold/30 shadow-gold-ring">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-2xl text-gold">
                <Icon.Whatsapp />
              </div>
              <h2 className="font-display text-2xl font-semibold text-ivory">
                Únete al grupo privado de WhatsApp
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ivory/70">
                Por este canal enviaremos los enlaces de las próximas sesiones de Q&A en vivo, análisis semanales y novedades de las subastas.
              </p>
              <div className="mt-6 flex justify-center">
                <CTAButton 
                  href={LINK_WHATSAPP_COMUNIDAD} 
                  variant="whatsapp" 
                  size="lg" 
                  icon={<Icon.Whatsapp />}
                  magnetic
                >
                  Unirme al grupo de WhatsApp
                </CTAButton>
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* 3 · Recomendaciones */}
      <Section tone="ivory-dim" pad="md">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h3 className="font-display text-xl font-semibold text-ivory text-center mb-6">
              Qué esperar de la comunidad:
            </h3>
            <Stagger className="space-y-4">
              <RevealItem subtle>
                <div className="flex gap-3">
                  <Icon.Check className="mt-1 shrink-0 text-gold" />
                  <p className="text-[15px] leading-snug text-ivory/80">
                    <strong>Sesiones de análisis:</strong> Todos los meses compartiremos contenido práctico sobre el método MAP-9 y crédito 0%.
                  </p>
                </div>
              </RevealItem>
              <RevealItem subtle>
                <div className="flex gap-3">
                  <Icon.Check className="mt-1 shrink-0 text-gold" />
                  <p className="text-[15px] leading-snug text-ivory/80">
                    <strong>Preguntas y respuestas:</strong> Trae tus análisis y dudas al grupo. Te acompañamos a resolverlas en las sesiones semanales.
                  </p>
                </div>
              </RevealItem>
              <RevealItem subtle>
                <div className="flex gap-3">
                  <Icon.Check className="mt-1 shrink-0 text-gold" />
                  <p className="text-[15px] leading-snug text-ivory/80">
                    <strong>Soporte constante:</strong> Nos mantenemos activos de lunes a viernes en el horario de atención: {COHORTE.soporteHorario}.
                  </p>
                </div>
              </RevealItem>
            </Stagger>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  )
}
