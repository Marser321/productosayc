import { useState } from 'react'
import {
  Section,
  Container,
  Kicker,
  SectionHeader,
  GlassCard,
  CTAButton,
  Icon,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem, PinnedSequence } from '../components/motion'
import { RoadmapTimeline, YesNoColumns, FAQAccordion } from '../components/blocks'
import type { RoadmapModule } from '../components/blocks'
import { LandingHero, LandingLayout } from '../components/shell'
import { CheckoutMock } from '../components/forms'
import { waLink } from '../content/brand'
import { img, LANDING_BANNER } from '../content/images'
import { sectionBg } from '../content/section-backgrounds'

const MODULES: RoadmapModule[] = [
  {
    n: '01',
    title: 'Diagnóstico y LLC',
    weeks: 'Semanas 1–2',
    who: 'ambos',
    points: [
      'Sesión 1:1 con Argenis: metas y capital.',
      'Sesión 1:1 con Carmen: perfil de crédito + LLC.',
    ],
  },
  {
    n: '02',
    title: 'MAP-9 Personalizado',
    weeks: 'Semanas 3–6',
    who: 'argenis',
    points: [
      'Aplicamos las 9 fases a tu mercado.',
      'Filtramos en vivo 5 propiedades reales contigo.',
    ],
  },
  {
    n: '03',
    title: 'Financiamiento y Compra',
    weeks: 'Semanas 4–8',
    who: 'carmen',
    points: [
      'Solicitud de crédito empresarial al 0%.',
      'Acompañamiento en tu primera subasta.',
    ],
  },
]

const FAQ = [
  { q: '¿Por qué la mentoría es 1:1?', a: 'Porque analizar subastas y estructurar crédito de forma correcta requiere conocer a detalle tu perfil financiero, metas y el mercado que elijas. No es un videocurso pregrabado.' },
  { q: '¿Qué garantía incluye el programa?', a: 'Nuestro compromiso está atado a tu ejecución y al método. Si asistes a tus sesiones y completas los hitos de los módulos, te acompañamos hasta cerrar el proceso.' },
  { q: '¿Se puede abonar en cuotas?', a: 'El pago estándar es único por $3,997. Si prefieres un plan de pago fraccionado de forma directa sin intereses, consúltalo con nosotros por WhatsApp.' },
]

export default function CompraMentoria() {
  return (
    <LandingLayout hideWhatsApp>
      {/* 1 · Hero Compacto enfocado en la decisión inmediata */}
      <LandingHero
        tone="charcoal"
        fillViewport
        image={{
          src: img('05', '05-compra-mentoria__hero-fundadores-revisando-portal.png'),
          alt: 'Argenis y Carmen revisando un portal de subastas',
          focal: '50% 35%',
          scrim: 'full',
        }}
        banner={{ src: LANDING_BANNER['05'], alt: 'Mentoría 1:1 Magic Capital con Argenis y Carmen', ratio: '4x5' }}
        kicker={<Kicker>Mentoría 1:1 · Acompañamiento Privado</Kicker>}
        title={<>Acompañamiento privado 1:1 hasta tu primera subasta.</>}
        sub={
          <>
            Argenis te guía por el Método MAP-9 y la compra de tu subasta tax deed. Carmen estructura tu empresa y crédito empresarial al 0% para apalancarla.
            <span className="mt-3 block text-[15px] font-semibold text-gold">
              Inversión única: $3,997
            </span>
          </>
        }
        actions={
          <CTAButton href="https://link.fastpaydirect.com/payment-link/6a4d2612c981f3feae6e7e2d" icon={<Icon.ArrowRight />} className="w-full sm:w-auto" magnetic>
            Empezar mi mentoría ($3,997)
          </CTAButton>
        }
      />

      {/* 2 · Qué incluye — 3 módulos en scroll interactivo */}
      <Section
        tone="charcoal"
        pad="sm"
        texture={{
          src: img('05', '05-compra-mentoria__elite-roadmap-12-semanas--21x9--codex-v02.png'),
          opacity: 0.1,
          focal: '50% 50%',
        }}
      >
        <Container>
          <SectionHeader
            tone="dark"
            kicker="El Acompañamiento"
            title="3 módulos privados con Argenis y Carmen"
          />
        </Container>
        <PinnedSequence count={MODULES.length} vhPerStep={60}>
          {(active) => (
            <Container width="narrow">
              <RoadmapTimeline modules={MODULES} active={active} tone="dark" />
            </Container>
          )}
        </PinnedSequence>
      </Section>

      {/* 3 · Salvaguarda Es para ti / No es para ti */}
      <Section tone="ivory" pad="md" texture={sectionBg('05-compra-mentoria', 2)}>
        <Container>
          <YesNoColumns
            left={{
              heading: 'Para ti si…',
              variant: 'positive',
              items: [
                'Cuentas con capital de contingencia para operar.',
                'Estás dispuesto a ejecutar y analizar activamente.',
                'Quieres reducir errores caros usando un método profesional.',
              ],
            }}
            right={{
              heading: 'No para ti si…',
              variant: 'negative',
              items: [
                'Buscas riqueza rápida o rentabilidad 100% garantizada.',
                'No tienes reservas financieras para invertir en bienes raíces.',
                'Quieres que otros hagan la operación sin involucrarte.',
              ],
            }}
          />
        </Container>
      </Section>

      {/* 4 · Cierre de Venta y FAQ */}
      <Section tone="ivory-dim" pad="md" texture={sectionBg('05-compra-mentoria', 7)}>
        <Container width="narrow">
          <div className="rounded-2xl border border-gold/30 bg-navy p-6 text-center shadow-gold-ring">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">Inscripción Directa</span>
            <div className="mt-2 font-display text-5xl font-semibold text-ivory">$3,997</div>
            <p className="mt-1 text-[13px] text-ivory/50">Incluye soporte diario directo por WhatsApp con Argenis y Carmen.</p>
            <div className="mt-6">
              <CTAButton href="https://link.fastpaydirect.com/payment-link/6a4d2612c981f3feae6e7e2d" size="lg" className="w-full">
                Empezar mentoría ($3,997)
              </CTAButton>
            </div>
          </div>
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>
    </LandingLayout>
  )
}
