import { useState } from 'react'
import {
  Section,
  Container,
  Kicker,
  DisplayHeading,
  SectionHeader,
  GlassCard,
  CTAButton,
  Icon,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem } from '../components/motion'
import { YesNoColumns, FAQAccordion } from '../components/blocks'
import type { QA } from '../components/blocks'
import { LandingHero, LandingLayout } from '../components/shell'
import { Img } from '../components/media'
import { CheckoutMock } from '../components/forms'
import { FUNNEL, waLink } from '../content/brand'
import { img, LANDING_BANNER } from '../content/images'
import { sectionBg } from '../content/section-backgrounds'

const INCLUYE = [
  {
    icon: <Icon.Landmark />,
    t: 'Análisis y contenido mensual',
    d: 'Tax deed con Argenis (MAP-9) y crédito 0% con Carmen. Casos reales directo a la práctica.',
  },
  {
    icon: <Icon.Whatsapp />,
    t: 'Soporte y comunidad',
    d: 'Grupo activo para resolver tus dudas y avanzar junto a otros inversionistas.',
  },
  {
    icon: <Icon.Filter />,
    t: 'Biblioteca de recursos',
    d: 'Guías, grabaciones de Q&A y herramientas organizadas en un solo lugar.',
  },
  {
    icon: <Icon.Shield />,
    t: 'Entorno real y sin humo',
    d: 'Foco en el proceso y criterio técnico, sin promesas vacías de dinero fácil.',
  },
]

const OFERTA = [
  'Acceso inmediato a la biblioteca y grupo privado.',
  'Cancela cuando quieras, sin penalización ni letra chica.',
  'Pago recurrente mensual seguro de $27.',
]

const FAQ: QA[] = [
  {
    q: '¿Qué es exactamente la comunidad?',
    a: 'Una membresía mensual de acompañamiento educativo en español con Argenis y Carmen. Tienes sesiones en vivo, respuestas a tus dudas y biblioteca de recursos.',
  },
  {
    q: '¿Puedo cancelar en cualquier momento?',
    a: 'Sí, la suscripción mensual se cancela con un solo clic cuando decidas, sin compromisos a largo plazo.',
  },
  {
    q: '¿Garantizan algún resultado de inversión?',
    a: 'No. Te educamos sobre el proceso público. Cualquier ganancia depende de tu ejecución y el mercado local del condado.',
  },
]

export default function Comunidad() {
  const [checkout, setCheckout] = useState(false)

  return (
    <LandingLayout hideWhatsApp>
      {/* 1 · Hero Compacto enfocado en la decisión inmediata */}
      <LandingHero
        tone="charcoal"
        fillViewport
        image={{
          src: '/img/09/09-comunidad__hero-pertenencia-sobria.png',
          alt: 'Comunidad Magic Capital: gente avanzando en el mismo camino',
          focal: '50% 35%',
          scrim: 'full',
        }}
        banner={{ src: LANDING_BANNER['09'], alt: 'Comunidad Magic Capital — membresía mensual', ratio: '4x5' }}
        kicker={<Kicker>Comunidad Magic Capital · membresía mensual</Kicker>}
        title={<>Sigue avanzando con criterio y en comunidad</>}
        sub={
          <>
            Accede al MAP-9 de Argenis y al crédito 0% de Carmen. Contenido constante, tus dudas resueltas y networking real de inversión.
            <span className="mt-3 block text-[14px] font-semibold text-gold">
              $27/mes · Cancela cuando quieras.
            </span>
          </>
        }
        actions={
          <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />} className="w-full sm:w-auto" magnetic>
            Unirme a la comunidad ($27/mes)
          </CTAButton>
        }
      />

      {/* 2 · Qué incluye (Resumido al grano) */}
      <Section tone="ivory" pad="md" texture={sectionBg('09-comunidad', 1)}>
        <Container>
          <SectionHeader
            kicker="El Acompañamiento"
            title="Lo que obtienes dentro de la comunidad"
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal>
              <Img
                src={img('09', '09-comunidad__feed-comunidad-recursos-calendario--9x16--codex-v02.png')}
                alt="Vista de la comunidad"
                className="aspect-[9/16] w-full rounded-2xl shadow-glass-dark max-h-[500px] object-cover"
                focal="50% 25%"
              />
            </Reveal>
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {INCLUYE.map((c) => (
                <RevealItem key={c.t}>
                  <GlassCard tone="solid" className="h-full flex flex-col justify-between">
                    <div>
                      <div className="text-2xl text-gold">{c.icon}</div>
                      <h3 className="mt-3 font-display text-base font-semibold text-ivory">{c.t}</h3>
                    </div>
                    <p className="mt-2 text-[13.5px] leading-snug text-ivory/70">{c.d}</p>
                  </GlassCard>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* 3 · Para quién SÍ / NO */}
      <Section tone="ivory-dim" pad="md" texture={sectionBg('09-comunidad', 2)}>
        <Container>
          <div className="mt-2">
            <YesNoColumns
              left={{
                heading: 'Es para ti si…',
                variant: 'positive',
                items: [
                  'Quieres seguir aprendiendo activamente sin una inversión alta.',
                  'Buscas resolver dudas de tus análisis y no perder el impulso.',
                  'Aprecias el networking de inversionistas honesto.',
                ],
              }}
              right={{
                heading: 'No es para ti si…',
                variant: 'negative',
                items: [
                  'Esperas que te den las propiedades hechas o busquen por ti.',
                  'Buscas asesoría financiera o legal personalizada.',
                  'Buscas dinero rápido o sin esfuerzo.',
                ],
              }}
            />
          </div>
        </Container>
      </Section>

      {/* 4 · Oferta directa (Sin rodeos de funnels) */}
      <Section tone="ivory" pad="md" texture={sectionBg('09-comunidad', 4)}>
        <Container width="narrow">
          <Reveal>
            <GlassCard tone="solid" className="mx-auto max-w-xl text-center">
              <Kicker className="mb-2">Membresía Activa</Kicker>
              <div className="font-display text-5xl font-semibold tabular-nums text-ivory">
                $27<span className="text-2xl text-ivory/55">/mes</span>
              </div>
              <Stagger className="mx-auto mt-6 max-w-sm space-y-2.5 text-left">
                {OFERTA.map((b) => (
                  <RevealItem key={b} subtle>
                    <div className="flex gap-2.5">
                      <Icon.Check className="mt-1 shrink-0 text-gold" />
                      <p className="text-[14px] leading-snug text-ivory/80">{b}</p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
              <div className="mt-6">
                <CTAButton
                  onClick={() => setCheckout(true)}
                  size="lg"
                  className="w-full"
                  icon={<Icon.ArrowRight />}
                >
                  Suscribirme por $27/mes
                </CTAButton>
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* 5 · FAQ rápidas */}
      <Section tone="ivory-dim" pad="md" texture={sectionBg('09-comunidad', 5)}>
        <Container width="narrow">
          <SectionHeader kicker="Preguntas rápidas" title="Preguntas frecuentes" />
          <div className="mt-6">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>

      {/* Checkout simulado */}
      <CheckoutMock
        open={checkout}
        onClose={() => setCheckout(false)}
        product={{
          name: 'Comunidad Magic Capital',
          price: '$27',
          priceNote: 'al mes · cancela cuando quieras',
          bullets: [
            'Sesiones y contenido nuevo cada mes',
            'Espacio para preguntar y resolver dudas',
            'Acceso organizado a recursos educativos',
            'Recordatorios del calendario de subastas',
          ],
        }}
      />
    </LandingLayout>
  )
}
