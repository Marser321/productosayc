import { useState } from 'react'
import {
  Section,
  Container,
  Kicker,
  DisplayHeading,
  SectionHeader,
  GlassCard,
  CTAButton,
  Badge,
  Footnote,
  Icon,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem } from '../components/motion'
import { MAP9Phases, YesNoColumns, CaseBreakdown, CapitalCalc, FAQAccordion } from '../components/blocks'
import { LandingHero, LandingLayout } from '../components/shell'
import { Img } from '../components/media'
import { CheckoutMock } from '../components/forms'
import { MAP9_PHASES, COHORTE, waLink } from '../content/brand'
import { img, LANDING_BANNER } from '../content/images'
import { sectionBg } from '../content/section-backgrounds'
import { FIGURE_LABELS } from '../content/compliance'
import { cn } from '../lib/cn'

const VIERNES = [
  'Estructura de negocio: cómo montarla bien en EE.UU.',
  'Protección y seguridad: protección legal, seguros y cumplir las reglas básicas.',
  'Crédito empresarial: cómo preparar tu perfil de crédito de negocio.',
  'Financiamiento 0%: cómo acceder a líneas con APR promocional, con criterio (elegibilidad, garantía personal, salida).',
  'Preguntas y respuestas en vivo.',
]

const TOOLS = [
  { t: 'Guía PDF del MAP-9', d: 'Las 9 fases, paso a paso. Tu entregable base.', base: true },
  { t: 'Matriz de detección de pasivos ocultos', d: 'Para no comprar un problema legal.' },
  { t: 'Directorio interactivo de jurisdicciones', d: 'Florida y Pennsylvania.' },
  { t: 'Estructuras operativas de LLC', d: 'Plantillas (no es asesoría legal).' },
  { t: 'Índice de proveedores de crédito de negocio', d: 'Net-30 para construir perfil.' },
  { t: 'Calculadora de capital de entrada', d: 'Estima cuánto necesitas antes de pujar.' },
]

const RISK_REDUCERS = [
  { icon: <Icon.Play />, t: 'Repetición', d: 'Acceso 7–14 días si no puedes en vivo o quieres repasar.' },
  { icon: <Icon.Users />, t: 'Sesión de seguimiento', d: 'Espacio grupal posterior para dudas de ejecución.' },
  { icon: <Icon.ArrowUpRight />, t: 'Crédito del ticket', d: 'El 100% del ticket se aplica a la Mentoría 1:1 si avanzas dentro del plazo definido.' },
]

const FAQ = [
  { q: '¿Es un curso grabado?', a: 'No. Es en vivo y en grupo: lo construyes con nosotros en tiempo real. Si hay repetición, es para repasar.' },
  { q: '¿Garantizan que gane dinero?', a: 'No. Te damos el sistema y la claridad para decidir con criterio. No prometemos ingresos, montos ni resultados; dependen del mercado, el condado y tu ejecución.' },
  { q: '¿Incluye el capital para comprar?', a: 'No. El intensivo no incluye el capital de entrada; te enseña a estimarlo y a no sobre-extenderte.' },
  { q: '¿Aprueban el crédito 0%?', a: 'No. Describimos cómo funciona: tarjetas de negocio con APR promocional sujeto a elegibilidad del emisor y posible garantía personal. No prometemos montos ni aprobación.' },
  { q: '¿Qué pasa el viernes y el sábado?', a: 'Viernes: capital con Carmen (empresa, crédito, financiamiento 0%). Sábado: las 9 fases del MAP-9 con Argenis, ejecutando juntos.' },
]

export default function CompraIntensivo() {
  const [checkout, setCheckout] = useState(false)

  return (
    <LandingLayout waMessage="Hola, tengo una pregunta sobre el Intensivo MAP-9 ($297) antes de comprar.">
      {/* 1 · Hero a una pantalla: contador → H1 → video → CTAs */}
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
        banner={{ src: LANDING_BANNER['03'], alt: 'Intensivo MAP-9 — viernes y sábado en vivo con Argenis y Carmen', ratio: '4x5' }}
        kicker={<Kicker>Intensivo MAP-9 · viernes + sábado · en vivo</Kicker>}
        title={<>De mirar listados a ejecutar tu primera subasta con criterio.</>}
        sub={
          <>
            Viernes, el capital con Carmen; sábado, las 9 fases del MAP-9 con Argenis. En vivo: lo construyes
            con nosotros y te llevas la Guía MAP-9.
          </>
        }
        actions={
          <>
            <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />} magnetic>
              Reservar mi asiento ($297)
            </CTAButton>
            <CTAButton href={waLink('Hola, tengo una pregunta sobre el Intensivo MAP-9 antes de comprar.')} variant="ghost">
              Preguntar por WhatsApp
            </CTAButton>
          </>
        }
      />

      {/* 2 · Qué ES / qué NO ES */}
      <Section tone="ivory" pad="lg" texture={sectionBg('03-compra-intensivo', 1)}>
        <Container>
          <SectionHeader kicker="Para que sepas qué compras" title="Qué ES y qué NO ES el intensivo" />
          <div className="mt-10">
            <YesNoColumns
              left={{
                heading: 'Qué ES',
                variant: 'positive',
                items: [
                  'En vivo y en grupo, con nosotros.',
                  'Plantillas y herramientas que usas durante la sesión.',
                  'Casos reales desglosados.',
                  'Espacio para preguntar y aplicar.',
                  'Te enseñamos qué NO comprar.',
                ],
              }}
              right={{
                heading: 'Qué NO ES',
                variant: 'negative',
                items: [
                  'Un curso grabado que ves solo.',
                  'Teoría sin ejecución.',
                  'Una promesa de ganancias o de aprobación de crédito.',
                  'Asesoría legal, fiscal o de inversión.',
                ],
              }}
            />
          </div>
        </Container>
      </Section>

      {/* 3 · El fin de semana, paso a paso (Viernes + Sábado fusionados) */}
      <Section tone="charcoal" pad="lg" texture={sectionBg('03-compra-intensivo', 2)}>
        <Container>
          <SectionHeader
            tone="dark"
            kicker="Viernes + sábado · en vivo"
            title="El fin de semana, paso a paso"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Día 1 · Viernes — el capital */}
            <div>
              <Badge tone="petrol"><Icon.Calendar /> Día 1 · Viernes — el capital</Badge>
              <h3 className="mt-3 font-display text-xl font-semibold text-ivory">
                Empresa, crédito y financiamiento 0% (con Carmen)
              </h3>
              <Stagger className="mt-5 space-y-2.5">
                {VIERNES.map((v) => (
                  <RevealItem key={v} subtle>
                    <div className="flex gap-3">
                      <Icon.Check className="mt-1 shrink-0 text-gold" />
                      <p className="text-[14.5px] leading-snug text-ivory/80">{v}</p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
              <div className="mt-4">
                <Footnote tone="dark">{FIGURE_LABELS.credito0}</Footnote>
              </div>
              <Reveal className="mt-6">
                <Img
                  src={img('03', '03-compra-intensivo__capital-viernes-sin-rostro--4x5--codex-v02.png')}
                  alt="Estructura de empresa, perfil de crédito y materiales del bloque de capital del viernes"
                  className="aspect-[4/5] w-full rounded-2xl shadow-glass-dark"
                  focal="50% 45%"
                />
              </Reveal>
            </div>
            {/* Día 2 · Sábado — las 9 fases */}
            <div>
              <Badge tone="ivory"><Icon.Calendar /> Día 2 · Sábado — las 9 fases</Badge>
              <h3 className="mt-3 font-display text-xl font-semibold text-ivory">
                El MAP-9 con Argenis: primero, qué NO comprar
              </h3>
              <p className="mt-2 text-[14px] leading-snug text-ivory/70">
                El filtro de seguridad (fases 5–9) descarta propiedades problemáticas antes de pujar.
              </p>
              <div className="mt-5">
                <MAP9Phases phases={MAP9_PHASES} tone="dark" />
              </div>
            </div>
          </div>
          <Reveal className="mt-8">
            <Img
              src={img('03', '03-compra-intensivo__filtro-ab-red-flags-map-9--16x9--codex-v02.png')}
              alt="Señales de alerta del filtro A/B del MAP-9 sobre un listado de subasta"
              className="aspect-[16/9] w-full rounded-2xl shadow-glass-dark"
              focal="50% 45%"
            />
          </Reveal>
        </Container>
      </Section>

      {/* 4 · Entregable + 5 herramientas */}
      <Section tone="ivory" pad="lg" texture={sectionBg('03-compra-intensivo', 4)}>
        <Container>
          <SectionHeader
            kicker="Tu entregable"
            title="Te vas con la Guía MAP-9 y 5 herramientas que usas durante el intensivo"
            intro="No PDFs para un cajón: herramientas que aplicas en vivo."
          />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t) => (
              <RevealItem key={t.t}>
                <GlassCard tone="solid" className={cn('h-full', t.base && 'ring-1 ring-gold/30')}>
                  {t.base ? (
                    <Badge tone="petrol">Base</Badge>
                  ) : (
                    <Icon.Document className="text-2xl text-gold" />
                  )}
                  <h3 className="mt-3 font-display text-base font-semibold text-ivory">{t.t}</h3>
                  <p className="mt-1 text-[13.5px] leading-snug text-ivory/70">{t.d}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* 5 · Caso real $7,500 */}
      <Section tone="charcoal" pad="lg" texture={sectionBg('03-compra-intensivo', 5)}>
        <Container width="narrow">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                tone="dark"
                kicker="Un caso real, con números a la vista"
                title="Washington County, Pennsylvania"
                intro="Lo usamos para enseñar el PROCESO y los COSTOS reales — no la ganancia."
              />
            </div>
            <CaseBreakdown
              tone="dark"
              lines={[
                { label: 'Adjudicación en subasta', amount: '$7,500', hint: 'La puja abre en la deuda fiscal' },
                { label: 'Fees del condado', amount: '$820' },
                { label: 'Revisión del título', amount: '$1,500' },
                { label: 'Contingencia', amount: '$1,800' },
              ]}
              total="$11,620"
              footnote={FIGURE_LABELS.caso7500}
            />
          </div>
        </Container>
      </Section>

      {/* 6 · Capital + oferta (fusionados) */}
      <Section tone="ivory-dim" pad="lg" texture={sectionBg('03-compra-intensivo', 6)}>
        <Container>
          <SectionHeader
            kicker="Te lo decimos antes de que pagues"
            title="Cuánto necesitas y cuánto cuesta"
            intro="El capital de entrada va por tu cuenta; lo que reservas aquí es tu lugar en el grupo en vivo."
          />
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            {/* Capital de entrada */}
            <div>
              <h3 className="font-display text-xl font-semibold text-ivory">Cuánto capital necesitas de verdad</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ivory/75">
                Recomendamos ~$5k–$15k de entrada en total: puja + fees del condado + revisión del título +
                contingencia + holding. El intensivo no lo incluye; te enseña a estimarlo.
              </p>
              <p className="mt-4 rounded-xl bg-white/[0.04] px-4 py-3 text-[14px] text-ivory/75">
                Si aún no tienes un rango razonable, mejor saberlo hoy que pujar a ciegas.
              </p>
              <Reveal className="mt-5">
                <CapitalCalc />
              </Reveal>
            </div>
            {/* Oferta + ancla */}
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-navy-soft p-7 shadow-glass-dark">
                <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">
                  Tu lugar en el grupo en vivo
                </div>
                <div className="mt-3 flex items-center gap-3 text-ivory/55">
                  <span className="text-lg line-through">$1,000</span>
                  <span className="text-lg line-through">$500</span>
                  <Icon.ArrowRight className="text-gold" />
                </div>
                <div className="mt-2 font-display text-5xl font-semibold text-ivory">$297</div>
                <p className="mt-2 text-[13px] text-ivory/55">
                  $1,000 y $500 son valores de referencia; el precio vigente es $297.
                </p>
                <ul className="mt-5 space-y-2 text-[14px] text-ivory/80">
                  {['2 días en vivo (viernes capital + sábado 9 fases)', 'Guía PDF del MAP-9 + 5 herramientas', 'Caso real desglosado', 'Repetición y sesión de seguimiento'].map((b) => (
                    <li key={b} className="flex gap-2">
                      <Icon.Check className="mt-0.5 shrink-0 text-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <CTAButton onClick={() => setCheckout(true)} size="lg" className="w-full">
                    Reservar mi asiento ($297)
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Reductores de riesgo (fusionados aquí: cuidamos tu confianza, no solo tu lugar) */}
          <div className="mt-12">
            <h3 className="text-center font-display text-lg font-semibold text-ivory">
              Si algo no encaja, no te dejamos solo
            </h3>
            <Stagger className="mt-6 grid gap-5 md:grid-cols-3">
              {RISK_REDUCERS.map((r) => (
                <RevealItem key={r.t}>
                  <GlassCard tone="solid" className="h-full">
                    <div className="text-2xl text-gold">{r.icon}</div>
                    <h4 className="mt-3 font-display text-base font-semibold text-ivory">{r.t}</h4>
                    <p className="mt-1 text-[14px] leading-snug text-ivory/70">{r.d}</p>
                  </GlassCard>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* 8 · FAQ */}
      <Section tone="ivory-dim" texture={sectionBg('03-compra-intensivo', 9)}>
        <Container>
          <SectionHeader kicker="Preguntas frecuentes" title="Antes de reservar" />
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>

      {/* 9 · CTA final */}
      <Section tone="charcoal" pad="lg" aura texture={sectionBg('03-compra-intensivo', 10)}>
        <Container width="narrow" className="text-center">
          <DisplayHeading size="lg">Reserva tu lugar en el grupo en vivo</DisplayHeading>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ivory/70">
            Dos días para pasar de mirar listados a ejecutar con criterio. Cupo limitado por la capacidad real
            del grupo en vivo.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />} magnetic>
              Reservar mi asiento ($297)
            </CTAButton>
            <CTAButton href={waLink('Hola, tengo una pregunta sobre el Intensivo MAP-9 antes de comprar.')} variant="whatsapp" icon={<Icon.Whatsapp />}>
              Preguntar por WhatsApp
            </CTAButton>
          </div>
        </Container>
      </Section>

      <CheckoutMock
        open={checkout}
        onClose={() => setCheckout(false)}
        continueTo="/l/04-gracias-intensivo"
        product={{
          name: 'Intensivo MAP-9',
          price: '$297',
          priceNote: 'viernes + sábado · en vivo · cupos limitados',
          bullets: ['2 días en vivo', 'Guía PDF del MAP-9 + 5 herramientas', 'Caso real desglosado', 'Repetición + sesión de seguimiento'],
        }}
      />
    </LandingLayout>
  )
}
