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
import { FunnelMap, YesNoColumns, FAQAccordion } from '../components/blocks'
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
    t: 'Contenido nuevo de las dos líneas, cada mes',
    d: 'Sesiones y material: tax deed con Argenis (MAP-9) y crédito 0% con Carmen. El proceso, paso a paso — nada de teoría suelta.',
  },
  {
    icon: <Icon.Whatsapp />,
    t: 'Un espacio para preguntar y resolver dudas',
    d: 'Traes tus preguntas y avanzas con gente en el mismo camino — no te quedas solo entre masterclasses.',
  },
  {
    icon: <Icon.Filter />,
    t: 'Recursos educativos, organizados en un lugar',
    d: 'Guías y grabaciones ordenadas en un lugar, para que encuentres lo que buscas.',
  },
  {
    icon: <Icon.MapPin />,
    t: 'Recordatorios del calendario y novedades',
    d: 'Avisos del calendario de subastas y de las próximas sesiones, para que no pierdas el ritmo.',
  },
  {
    icon: <Icon.Shield />,
    t: 'Un entorno sobrio y honesto',
    d: 'Educación y criterio, sin hype ni promesas de dinero. A pensar el proceso, no a perseguir un resultado.',
  },
]

const OFERTA = [
  'Cancela cuando quieras, sin penalización.',
  'Sin compromiso ni letra chica.',
  'Pago recurrente seguro.',
]

const FAQ: QA[] = [
  {
    q: '¿Qué es exactamente la comunidad?',
    a: 'Una membresía mensual de acompañamiento educativo: contenido y sesiones nuevas de las dos líneas (tax deed con Argenis y crédito 0% con Carmen), un espacio para preguntar, recursos organizados y recordatorios del calendario. Es el puente entre la masterclass gratis y el Intensivo.',
  },
  {
    q: '¿Garantiza resultados?',
    a: 'No. La comunidad es educación y acompañamiento: no prometemos ingresos, ganancias ni aprobación de crédito. Cualquier acceso a crédito, límite, tasa o aprobación depende del emisor y de tu perfil, y los resultados en subasta varían por estado, condado y propiedad.',
  },
  {
    q: '¿Puedo cancelar?',
    a: 'Sí, cuando quieras, sin penalización y sin letra chica. Es una membresía mensual: si en algún momento ya no te suma, la cancelas y listo.',
  },
  {
    q: '¿Esto reemplaza el Intensivo o la mentoría?',
    a: 'No. La comunidad es el paso previo: te mantiene cerca y con criterio mientras decides —si decides— dar el siguiente paso al Intensivo MAP-9 o a la mentoría 1:1. No sustituye esa formación más profunda.',
  },
  {
    q: '¿Necesito inglés?',
    a: 'No. Todo el contenido, las sesiones y las respuestas son en español neutro.',
  },
]

export default function Comunidad() {
  const [checkout, setCheckout] = useState(false)

  return (
    <LandingLayout waMessage="Hola, tengo dudas sobre la Comunidad Magic Capital ($27/mes) antes de suscribirme.">
      {/* 1 · Hero a una pantalla (sin contador: la comunidad es mensual, sin fecha límite) */}
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
        kicker={<Kicker>Comunidad Magic Capital · membresía mensual · en español</Kicker>}
        title={<>Sigue avanzando, con criterio y en comunidad</>}
        sub={
          <>
            Por $27/mes sigues cerca de las dos piezas: la oportunidad (MAP-9 de Argenis) y el capital
            (crédito 0% de Carmen). Contenido nuevo, tus dudas respondidas y gente en el mismo camino.
            <span className="mt-3 block text-[13px] text-ivory/55">
              $27/mes · cancela cuando quieras · sin compromiso.
            </span>
          </>
        }
        actions={
          <>
            <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />}>
              {FUNNEL.comunidad.cta}
            </CTAButton>
            <CTAButton
              href={waLink('Hola, tengo dudas sobre la Comunidad Magic Capital ($27/mes).')}
              variant="whatsapp"
              icon={<Icon.Whatsapp />}
            >
              Escríbenos por WhatsApp
            </CTAButton>
          </>
        }
      />

      {/* 2 · Qué incluye */}
      <Section tone="ivory" pad="lg" texture={sectionBg('09-comunidad', 1)}>
        <Container>
          <SectionHeader
            kicker="Qué incluye"
            title="Acompañamiento mensual, sin promesas"
            intro="Cinco cosas concretas cada mes. Educación y acompañamiento, sin promesas de dinero."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <Img
                src={img('09', '09-comunidad__feed-comunidad-recursos-calendario--9x16--codex-v02.png')}
                alt="Vista de la comunidad: sesiones nuevas, recursos organizados y calendario de subastas"
                className="aspect-[9/16] w-full rounded-2xl shadow-glass-dark"
                focal="50% 25%"
              />
            </Reveal>
            <Stagger className="grid gap-5 sm:grid-cols-2">
              {INCLUYE.map((c) => (
                <RevealItem key={c.t}>
                  <GlassCard tone="solid" className="h-full">
                    <div className="text-2xl text-gold">{c.icon}</div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ivory">{c.t}</h3>
                    <p className="mt-2 text-[14.5px] leading-snug text-ivory/70">{c.d}</p>
                  </GlassCard>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* 3 · Para quién SÍ / NO */}
      <Section tone="ivory-dim" texture={sectionBg('09-comunidad', 2)}>
        <Container>
          <SectionHeader kicker="¿Es para ti?" title="Para quién sí · para quién no" />
          <div className="mt-10">
            <YesNoColumns
              left={{
                heading: 'Es para ti si…',
                variant: 'positive',
                items: [
                  'Viste la masterclass y quieres seguir aprendiendo sin gastar mucho.',
                  'Prefieres avanzar paso a paso antes del Intensivo.',
                  'Quieres preguntar y no perder el impulso.',
                ],
              }}
              right={{
                heading: 'No es para ti si…',
                variant: 'negative',
                items: [
                  'Esperas que la comunidad garantice ganancias o un resultado.',
                  'Buscas asesoría legal, fiscal o de inversión personal (esto no lo es).',
                  'Quieres que alguien opere por ti.',
                ],
              }}
            />
          </div>
        </Container>
      </Section>

      {/* 4 · Dónde encaja (nutrido con la biblioteca/calendario) */}
      <Section
        tone="charcoal"
        pad="md"
        texture={{
          src: img('09', '09-comunidad__biblioteca-calendario-mensual--16x9--codex-v02.png'),
          opacity: 0.1,
          focal: '50% 50%',
        }}
      >
        <Container width="narrow">
          <SectionHeader
            tone="dark"
            kicker="Dónde encaja"
            title="El puente entre lo gratis y el siguiente paso"
          />
          <div className="mt-10">
            <FunnelMap current="comunidad" tone="dark" />
          </div>
          <Reveal>
            <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-ivory/70">
              Masterclass gratis → Comunidad $27/mes → Intensivo $297 → Mentoría 1:1 $3,997. El puente
              que te mantiene cerca y con criterio hasta que decidas dar el siguiente paso. Sin presión.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 5 · Precio y checkout */}
      <Section tone="ivory" pad="lg" texture={sectionBg('09-comunidad', 4)}>
        <Container width="narrow">
          <Reveal>
            <GlassCard tone="solid" className="mx-auto max-w-xl text-center">
              <Kicker className="mb-3">Una membresía honesta</Kicker>
              <div className="font-display text-5xl font-semibold tabular-nums text-ivory">
                $27<span className="text-2xl text-ivory/55">/mes</span>
              </div>
              <Stagger className="mx-auto mt-6 max-w-sm space-y-2.5 text-left">
                {OFERTA.map((b) => (
                  <RevealItem key={b} subtle>
                    <div className="flex gap-3">
                      <Icon.Check className="mt-1 shrink-0 text-gold" />
                      <p className="text-[15px] leading-snug text-ivory/80">{b}</p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
              <div className="mt-7">
                <CTAButton
                  onClick={() => setCheckout(true)}
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<Icon.ArrowRight />}
                >
                  {FUNNEL.comunidad.cta}
                </CTAButton>
              </div>
              <p className="mt-4 text-[13px] text-ivory/60">
                ¿Dudas antes de suscribirte? Escríbenos por WhatsApp.
              </p>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* 6 · FAQ */}
      <Section tone="ivory-dim" texture={sectionBg('09-comunidad', 5)}>
        <Container>
          <SectionHeader kicker="Preguntas frecuentes" title="Lo que conviene saber antes" />
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>

      {/* 7 · CTA final */}
      <Section tone="charcoal" pad="lg" aura texture={sectionBg('09-comunidad', 6)}>
        <Container width="narrow" className="text-center">
          <DisplayHeading size="lg">Quédate cerca. Sigue avanzando.</DisplayHeading>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ivory/70">
            Una membresía honesta: cerca de la oportunidad y del capital, con criterio y en español.
            Avanzas a tu ritmo y cancelas cuando quieras.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />} magnetic>
              {FUNNEL.comunidad.cta}
            </CTAButton>
            <CTAButton
              href={waLink('Hola, quiero unirme a la Comunidad Magic Capital ($27/mes).')}
              variant="whatsapp"
              icon={<Icon.Whatsapp />}
            >
              Escríbenos por WhatsApp
            </CTAButton>
          </div>
          <p className="mt-4 text-[13px] text-ivory/50">$27/mes · cancela cuando quieras.</p>
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
