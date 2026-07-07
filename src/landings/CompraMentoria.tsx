import { useState } from 'react'
import {
  Section,
  Container,
  Kicker,
  DisplayHeading,
  SectionHeader,
  GlassCard,
  CTAButton,
  Footnote,
  Icon,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem, PinnedSequence } from '../components/motion'
import { RoadmapTimeline, YesNoColumns, FAQAccordion, DataTable } from '../components/blocks'
import type { RoadmapModule } from '../components/blocks'
import { LandingHero, LandingLayout } from '../components/shell'
import { CheckoutMock } from '../components/forms'
import { waLink } from '../content/brand'
import { img, LANDING_BANNER } from '../content/images'
import { sectionBg } from '../content/section-backgrounds'
import { FIGURE_LABELS } from '../content/compliance'

const MODULES: RoadmapModule[] = [
  {
    n: '01',
    title: 'Diagnóstico y estructuración',
    weeks: 'Semanas 1–2',
    who: 'ambos',
    points: [
      'Sesión 1:1 con Argenis: tu situación, metas y capital.',
      'Sesión 1:1 con Carmen: perfil de crédito + estructuración de tu LLC.',
      'Plan de inversión escrito (PDF) a tu caso.',
      'Identificación de positivos y negativos de tu crédito.',
    ],
  },
  {
    n: '02',
    title: 'MAP-9 aplicado a tu caso',
    weeks: 'Semanas 3–6',
    who: 'argenis',
    points: [
      'Aplicamos las 9 fases a tu mercado.',
      'Filtramos en vivo 5 propiedades reales contigo.',
      'Análisis escrito de esas 5 propiedades (PDF).',
    ],
  },
  {
    n: '03',
    title: 'Capital y financiamiento',
    weeks: 'Semanas 4–8',
    who: 'carmen',
    points: [
      'Estructuración correcta de la LLC.',
      'Plan para construir/optimizar tu crédito personal.',
      'Acompañamiento en la solicitud de crédito empresarial 0%.',
      'Preparación de tu primera subasta.',
    ],
  },
]

const VALUE_STACK = [
  { label: 'Sesiones 1:1 (3 módulos, Argenis & Carmen)', amount: '$8,400' },
  { label: 'Plan de inversión + análisis de 5 propiedades (PDF)', amount: '$2,500' },
  { label: 'Acompañamiento hasta tu primera subasta', amount: '$2,500' },
  { label: 'Soporte por canal + grabaciones de tus sesiones', amount: '$1,512' },
]

const NO_PROMETEMOS = [
  'No prometemos resultados, montos, plazos ni recuperar la inversión — dependen del mercado, el condado y tu ejecución.',
  'No prometemos aprobación de crédito, límites ni un "título limpio".',
  'No usamos cuentas regresivas ni urgencia fabricada.',
]

const FAQ = [
  { q: '¿Por qué $3,997?', a: 'Sesiones privadas 1:1 con Argenis y Carmen, plan de inversión y análisis a tu caso, acompañamiento en tu crédito 0% y vamos contigo hasta tu primera subasta. Programas comparables en inglés cuestan $6k–$19k y rara vez son 1:1.' },
  { q: '¿Hay garantía?', a: 'Nuestro compromiso está atado a hitos de ejecución (los 3 módulos), no a resultados de mercado. Lo explicamos en la sección de compromiso.' },
  { q: '¿Puedo pagar en cuotas?', a: 'El pago único es $3,997. Si habilitamos planes de pago, son pagos fraccionados de la mentoría —sin crédito ni interés de nuestra parte—; pregúntanos los montos vigentes por WhatsApp.' },
  { q: '¿Y si no califico?', a: 'Durante el diagnóstico podemos concluir que aún no es tu momento; si es así, te lo decimos y exploramos opciones (Intensivo MAP-9, Comunidad, o esperar a tener reservas).' },
  { q: '¿Esto reemplaza a un abogado o asesor?', a: 'No; somos una firma educativa, no asesores legales, fiscales ni de inversión.' },
]

export default function CompraMentoria() {
  const [checkout, setCheckout] = useState(false)

  return (
    <LandingLayout waMessage="Hola, quiero saber más sobre la Mentoría 1:1 ($3,997).">
      {/* 1 · Hero a una pantalla: H1 → video → CTAs (sin contador: 1:1 no tiene fecha fija) */}
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
        kicker={<Kicker>Mentoría 1:1 · Magic Capital · acompañamiento privado</Kicker>}
        title={<>Acompañamiento 1:1 hasta tu primera subasta — con criterio, sin improvisar.</>}
        sub={
          <>
            Sesiones privadas 1:1: Argenis te guía por el Método MAP-9 y tu primera subasta tax deed; Carmen
            estructura tu empresa y tu crédito empresarial 0% para fondearla.
            <span className="mt-3 block text-[14px] text-ivory/60">
              Inversión: $3,997 (pago único; planes de pago a definir).
            </span>
          </>
        }
        actions={
          <>
            <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />} magnetic>
              Empezar mi mentoría
            </CTAButton>
            <CTAButton href={waLink('Hola, ¿podríamos agendar una llamada de diagnóstico de la mentoría?')} variant="ghost">
              ¿No estás seguro? Agenda una llamada de diagnóstico
            </CTAButton>
          </>
        }
      />

      {/* 2 · Qué incluye — 3 módulos (PINNED, nutrido con el roadmap de 12 semanas) */}
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
            kicker="Qué incluye"
            title="3 módulos, sesiones privadas 1:1"
            intro="Argenis lleva la oportunidad; Carmen, el capital."
          />
        </Container>
        <PinnedSequence count={MODULES.length} vhPerStep={70}>
          {(active) => (
            <Container width="narrow">
              <RoadmapTimeline modules={MODULES} active={active} tone="dark" />
            </Container>
          )}
        </PinnedSequence>
        <Container width="narrow">
          <Reveal>
            <p className="mt-4 rounded-xl bg-white/[0.05] px-4 py-3 text-[13.5px] text-ivory/70">
              Soporte: WhatsApp en máx. 24 h hábiles (L–V), grabación de tus sesiones 1:1 y acceso a la
              Comunidad Magic Capital — hasta el hito de tu primera operación, no para siempre.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 3 · Salvaguarda — para ti / no para ti */}
      <Section tone="ivory" pad="lg" texture={sectionBg('05-compra-mentoria', 2)}>
        <Container>
          <SectionHeader kicker="Para que decidas con confianza" title="Para ti si… / No para ti si…" />
          <div className="mt-10">
            <YesNoColumns
              left={{
                heading: 'Para ti, si…',
                variant: 'positive',
                items: [
                  'Tienes capital de contingencia además del precio de la mentoría y del capital de entrada.',
                  'Estás dispuesto a ejecutar, no solo a aprender.',
                  'Aceptas que es un activo de riesgo y quieres reducir errores costosos con método.',
                ],
              }}
              right={{
                heading: 'No para ti, si…',
                variant: 'negative',
                items: [
                  'Buscas riqueza rápida o un retorno garantizado.',
                  'No tienes reservas; invertir arriesgaría tu dinero esencial.',
                  'Quieres que alguien lo haga por ti sin tu involucramiento.',
                  'Necesitas que una sola operación cuadre tus números.',
                ],
              }}
              note="Si te ves en la columna de la derecha, no compres hoy. Agenda una llamada y vemos si tiene sentido para ti más adelante."
            />
          </div>
        </Container>
      </Section>

      {/* 4 · Lo que debes saber antes de pagar (riesgo + lo que NO prometemos, fusionados) */}
      <Section
        tone="charcoal"
        pad="lg"
        texture={{
          src: img('05', '05-compra-mentoria__salvaguardas-transparencia-riesgos--16x9--codex-v01.png'),
          opacity: 0.12,
          focal: '50% 45%',
        }}
      >
        <Container width="narrow">
          <SectionHeader
            tone="dark"
            kicker="Lo que debes saber antes de pagar"
            title="Reducimos la probabilidad de error; no prometemos que ganes"
            intro="El dinero en una subasta tax deed (subasta por impuestos) puede perderse en parte o del todo. La mentoría no lo elimina: ayuda a evitar errores caros —propiedades problemáticas, deudas viejas pegadas a la propiedad, pujar sin tope—, pero no es una garantía de ganancia."
          />
          <Stagger className="mt-8 space-y-3">
            {NO_PROMETEMOS.map((n) => (
              <RevealItem key={n} subtle>
                <div className="flex gap-3">
                  <Icon.X className="mt-0.5 shrink-0 text-ivory/55" />
                  <p className="text-[15px] leading-snug text-ivory/80">{n}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* 5 · Ancla de precio */}
      <Section tone="ivory-dim" pad="lg" texture={sectionBg('05-compra-mentoria', 4)}>
        <Container>
          <SectionHeader kicker="$3,997 en contexto" title="Mucho menos que la suma de sus partes" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-navy-soft p-6 shadow-glass-dark">
                <h3 className="font-display text-lg font-semibold text-ivory">Valor de lo que recibes</h3>
                <dl className="mt-4 divide-y divide-white/10">
                  {VALUE_STACK.map((v) => (
                    <div key={v.label} className="flex items-baseline justify-between gap-4 py-2.5">
                      <dt className="text-[14px] text-ivory/80">{v.label}</dt>
                      <dd className="font-display tabular-nums text-ivory">{v.amount}</dd>
                    </div>
                  ))}
                  <div className="flex items-baseline justify-between gap-4 pt-3">
                    <dt className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory/55">Valor estimado</dt>
                    <dd className="font-display text-xl font-semibold tabular-nums text-ivory/55 line-through">$14,912</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 pt-3">
                    <dt className="text-[13px] font-semibold uppercase tracking-[0.1em] text-gold">Tu inversión</dt>
                    <dd className="font-display text-3xl font-semibold tabular-nums text-ivory">$3,997</dd>
                  </div>
                </dl>
                <div className="mt-4">
                  <Footnote>Valor estimado de los componentes, no un retorno garantizado.</Footnote>
                </div>
              </div>
            </Reveal>
            <div>
              <h3 className="font-display text-lg font-semibold text-ivory">Referencia de mercado</h3>
              <DataTable
                className="mt-4"
                columns={[
                  { key: 'item', header: 'Opción' },
                  { key: 'price', header: 'Rango', align: 'right', emphasis: true },
                ]}
                rows={[
                  { item: 'Programas comparables en inglés', price: '$6k–$19k' },
                  { item: 'Autoestudio en video', price: '~$13–$60' },
                  { item: 'Mentoría básica', price: '~$499' },
                ]}
                footnote="Referencias aproximadas de terceros, a modo de comparación."
              />
              <p className="mt-4 rounded-xl bg-gold/[0.05] px-4 py-3 text-[14px] leading-snug text-ivory/75">
                Esto es 1-a-1, personalizado, con dos expertos, a $3,997 — no un video que ves solo.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6 · Compromiso por hitos (NO resultados) */}
      <Section tone="charcoal" pad="lg" texture={sectionBg('05-compra-mentoria', 6)}>
        <Container width="narrow">
          <SectionHeader
            tone="dark"
            kicker="Nuestro compromiso"
            title="Atado a tu ejecución, no a tu resultado"
            intro="Si completas los hitos de los 3 módulos asistiendo a tus sesiones 1:1, y aun así sientes que no recibiste el acompañamiento prometido…"
          />
          {/*
            ⚠ COMPLIANCE: validar la REDACCIÓN EXACTA de este remedio con asesoría legal
            antes de publicar. El texto promete acompañamiento/método (NO resultados ni
            ganancias) — mantener ese enfoque. Ajustar el remedio concreto si legal lo indica.
          */}
          <Reveal className="mt-6">
            <GlassCard tone="dark">
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">
                <Icon.Shield /> Nuestro compromiso contigo
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ivory/80">
                …revisamos tu caso directamente contigo y te damos sesiones de acompañamiento
                adicionales sin costo hasta cerrar lo que quedó pendiente del método. Nuestro
                compromiso es con el acompañamiento y el proceso, no con un resultado de mercado.
              </p>
              <Footnote tone="dark" className="mt-4">
                Compromiso de acompañamiento y método; no es un reembolso ni una promesa de
                ganancias o de resultados de mercado.
              </Footnote>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* 7 · Checkout directo */}
      <Section tone="ivory-dim" pad="lg" texture={sectionBg('05-compra-mentoria', 7)}>
        <Container width="narrow" className="text-center">
          <SectionHeader kicker="Empieza hoy" title="Comienza tu mentoría" />
          <Reveal className="mt-8">
            <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-navy-soft p-7 shadow-glass-dark">
              <div className="font-display text-5xl font-semibold text-ivory">$3,997</div>
              <p className="mt-1 text-[13px] text-ivory/55">Pago único · planes de pago a definir aparte.</p>
              <div className="mt-6 flex flex-col gap-2">
                <CTAButton onClick={() => setCheckout(true)} size="lg" className="w-full">
                  Empezar mi mentoría
                </CTAButton>
                <CTAButton href={waLink('Hola, prefiero agendar una llamada de diagnóstico antes de la mentoría.')} variant="secondary" size="md">
                  Mejor agenda una llamada de diagnóstico
                </CTAButton>
              </div>
              <p className="mt-3 text-[12px] text-ivory/55">
                Pago seguro. Cupos limitados por la capacidad real del acompañamiento 1:1 — sin urgencia artificial.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 8 · FAQ */}
      <Section tone="ivory" texture={sectionBg('05-compra-mentoria', 8)}>
        <Container>
          <SectionHeader kicker="Preguntas frecuentes" title="Antes de empezar" />
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>

      {/* 9 · CTA final */}
      <Section tone="charcoal" pad="lg" aura texture={sectionBg('05-compra-mentoria', 9)}>
        <Container width="narrow" className="text-center">
          <DisplayHeading size="lg">Si estás listo para ejecutar con criterio, empecemos</DisplayHeading>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />} magnetic>
              Empezar mi mentoría
            </CTAButton>
            <CTAButton href={waLink('Hola, quiero saber más sobre la Mentoría 1:1.')} variant="whatsapp" icon={<Icon.Whatsapp />}>
              Hablar por WhatsApp
            </CTAButton>
          </div>
        </Container>
      </Section>

      <CheckoutMock
        open={checkout}
        onClose={() => setCheckout(false)}
        continueTo="/l/06-gracias-mentoria"
        product={{
          name: 'Mentoría 1:1 Magic Capital',
          price: '$3,997',
          priceNote: 'pago único · 3 módulos · acompañamiento 1:1',
          bullets: ['Sesiones privadas 1:1 con Argenis y Carmen', 'Plan de inversión + análisis de 5 propiedades', 'Acompañamiento hasta tu primera subasta', 'Grabaciones + Comunidad Magic Capital'],
        }}
      />
    </LandingLayout>
  )
}
