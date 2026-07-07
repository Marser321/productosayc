import { useState } from 'react'
import {
  Section,
  Container,
  Kicker,
  SectionHeader,
  GlassCard,
  CTAButton,
  Badge,
  Icon,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem } from '../components/motion'
import { MAP9Phases, YesNoColumns, CaseBreakdown, FAQAccordion } from '../components/blocks'
import { LandingHero, LandingLayout } from '../components/shell'
import { CheckoutMock } from '../components/forms'
import { MAP9_PHASES, COHORTE, waLink } from '../content/brand'
import { img, LANDING_BANNER } from '../content/images'
import { sectionBg } from '../content/section-backgrounds'
import { FIGURE_LABELS } from '../content/compliance'

const VIERNES = [
  'Estructura de negocio en EE.UU.',
  'Crédito empresarial: cómo preparar tu perfil.',
  'Financiamiento 0%: acceso a líneas con APR promocional.',
]

const FAQ = [
  { q: '¿El intensivo es grabado?', a: 'No, es 100% en vivo con Argenis y Carmen. Tendrás acceso a las grabaciones por 14 días para repasar.' },
  { q: '¿Garantizan la aprobación del crédito al 0%?', a: 'No. Te enseñamos los criterios de aprobación de los bancos. La aprobación final depende enteramente de tu perfil e historial crediticio.' },
  { q: '¿Qué capital se necesita para empezar?', a: 'Para participar en el intensivo solo necesitas tu ticket. Para operar subastas reales sugerimos contar con un capital inicial de $5k a $15k.' },
]

export default function CompraIntensivo() {
  const [checkout, setCheckout] = useState(false)

  return (
    <LandingLayout waMessage="Hola, tengo una pregunta sobre el Intensivo MAP-9 ($297) antes de comprar.">
      {/* 1 · Hero Directo de Cierre */}
      <LandingHero
        tone="charcoal"
        fillViewport
        image={{
          src: img('03', '03-compra-intensivo__hero-fundadores-sesion-vivo.png'),
          alt: 'Sesión en vivo del intensivo',
          focal: '50% 35%',
          scrim: 'full',
        }}
        countdown={{ targetISO: COHORTE.intensivoISO, label: 'El intensivo en vivo empieza en' }}
        banner={{ src: LANDING_BANNER['03'], alt: 'Intensivo MAP-9 — en vivo con Argenis y Carmen', ratio: '4x5' }}
        kicker={<Kicker>Intensivo MAP-9 · En vivo</Kicker>}
        title={<>De mirar listados a comprar tu primera subasta con criterio.</>}
        sub={
          <>
            Viernes, el capital con Carmen; sábado, las 9 fases del MAP-9 con Argenis. Llévate la Guía MAP-9 interactiva y comienza a operar.
            <span className="mt-3 block text-[15px] font-semibold text-gold">
              Inversión única: $297 · Cupos limitados
            </span>
          </>
        }
        actions={
          <>
            <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />} magnetic>
              Reservar mi asiento ($297)
            </CTAButton>
            <CTAButton href={waLink('Hola, tengo una pregunta sobre el Intensivo MAP-9 antes de comprar.')} variant="ghost">
              Consultar por WhatsApp
            </CTAButton>
          </>
        }
      />

      {/* 2 · Qué ES y qué NO ES */}
      <Section tone="ivory" pad="md" texture={sectionBg('03-compra-intensivo', 1)}>
        <Container>
          <YesNoColumns
            left={{
              heading: 'Qué ES',
              variant: 'positive',
              items: [
                'Sesión práctica y grupal en vivo.',
                'Plantillas reales que usas en caliente.',
                'Casos de estudio reales del mercado actual.',
                'Te enseñamos primero qué NO comprar.',
              ],
            }}
            right={{
              heading: 'Qué NO ES',
              variant: 'negative',
              items: [
                'Curso grabado que vas a posponer.',
                'Teoría o contenido de relleno.',
                'Promesa o garantía de ganancias fáciles.',
                'Asesoría financiera/legal individual.',
              ],
            }}
          />
        </Container>
      </Section>

      {/* 3 · Agenda de 2 días */}
      <Section tone="charcoal" pad="md" texture={sectionBg('03-compra-intensivo', 2)}>
        <Container>
          <SectionHeader
            tone="dark"
            kicker="El Programa"
            title="Estructura del Intensivo"
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Día 1 */}
            <div className="rounded-2xl border border-white/10 bg-navy-soft/60 p-6 backdrop-blur">
              <Badge tone="petrol"><Icon.Calendar /> Día 1 · Viernes — El Capital</Badge>
              <h3 className="mt-3 font-display text-lg font-semibold text-ivory">
                Empresa, crédito y financiamiento al 0% (Carmen)
              </h3>
              <Stagger className="mt-4 space-y-2.5">
                {VIERNES.map((v) => (
                  <RevealItem key={v} subtle>
                    <div className="flex gap-2">
                      <Icon.Check className="mt-1 shrink-0 text-gold" />
                      <p className="text-[14px] leading-snug text-ivory/80">{v}</p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
            </div>
            {/* Día 2 */}
            <div className="rounded-2xl border border-white/10 bg-navy-soft/60 p-6 backdrop-blur">
              <Badge tone="ivory"><Icon.Calendar /> Día 2 · Sábado — El MAP-9</Badge>
              <h3 className="mt-3 font-display text-lg font-semibold text-ivory">
                Las 9 fases en vivo (Argenis)
              </h3>
              <div className="mt-4">
                <MAP9Phases phases={MAP9_PHASES.slice(0, 5)} tone="dark" />
                <p className="mt-2 text-[12px] text-ivory/55">Y 4 fases más aplicadas sobre subastas activas de FL y PA.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4 · Caso Real Rápido */}
      <Section tone="ivory" pad="md" texture={sectionBg('03-compra-intensivo', 5)}>
        <Container width="narrow">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <SectionHeader
              align="left"
              kicker="Un caso real"
              title="Números reales a la vista"
              intro="Usado para modelar costos reales de entrada, no para estimar ganancias."
            />
            <CaseBreakdown
              tone="dark"
              lines={[
                { label: 'Adjudicación en subasta', amount: '$7,500', hint: 'Deuda fiscal' },
                { label: 'Fees y revisión de título', amount: '$2,320' },
                { label: 'Contingencia holding', amount: '$1,800' },
              ]}
              total="$11,620"
              footnote={FIGURE_LABELS.caso7500}
            />
          </div>
        </Container>
      </Section>

      {/* 5 · Cierre de Venta y FAQ */}
      <Section tone="ivory-dim" pad="md" texture={sectionBg('03-compra-intensivo', 9)}>
        <Container width="narrow">
          <div className="rounded-2xl border border-gold/30 bg-navy p-6 text-center shadow-gold-ring">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">Oferta Única</span>
            <div className="mt-2 font-display text-5xl font-semibold text-ivory">$297</div>
            <p className="mt-1 text-[13px] text-ivory/50">Incluye Guía MAP-9 interactiva + 14 días de repetición.</p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />} size="lg" className="w-full sm:w-auto">
                Reservar mi asiento ($297)
              </CTAButton>
              <CTAButton href={waLink('Hola, quiero inscribirme al Intensivo MAP-9.')} variant="whatsapp" icon={<Icon.Whatsapp />} size="lg" className="w-full sm:w-auto">
                Inscribirme vía WhatsApp
              </CTAButton>
            </div>
          </div>
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>

      <CheckoutMock
        open={checkout}
        onClose={() => setCheckout(false)}
        continueTo="/gracias-intensivo"
        product={{
          name: 'Intensivo MAP-9',
          price: '$297',
          priceNote: 'viernes + sábado · en vivo · cupos limitados',
          bullets: ['2 días en vivo', 'Guía PDF del MAP-9 + herramientas', 'Caso real desglosado', 'Repetición + sesión de seguimiento'],
        }}
      />
    </LandingLayout>
  )
}
