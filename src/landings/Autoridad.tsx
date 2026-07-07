import {
  Section,
  Container,
  Kicker,
  DisplayHeading,
  SectionHeader,
  GlassCard,
  CTAButton,
  Badge,
  Icon,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem, PinnedSequence } from '../components/motion'
import {
  DualMechanism,
  DUAL_STEP_LABELS,
  YesNoColumns,
  CaseBreakdown,
  PortalMock,
  PropertyShowcase,
} from '../components/blocks'
import { LandingHero, LandingLayout } from '../components/shell'
import { Img } from '../components/media'
import { FOUNDERS, waLink } from '../content/brand'
import { img, founder, LANDING_BANNER } from '../content/images'
import { sectionBg } from '../content/section-backgrounds'
import { FIGURE_LABELS } from '../content/compliance'
import { cn } from '../lib/cn'

const PROBLEMAS = [
  {
    icon: <Icon.Landmark />,
    t: 'La hipoteca tradicional te excluye',
    d: 'Precios altos, tasas altas y requisitos que castigan al inmigrante con poco historial: la puerta principal está casi cerrada.',
  },
  {
    icon: <Icon.Filter />,
    t: 'La oportunidad real es menos visible',
    d: 'Cuando alguien no paga los impuestos de su casa, el condado la subasta (tax deed): precios bajo mercado y proceso público — pero con trampas si no sabes qué mirar.',
  },
  {
    icon: <Icon.Percent />,
    t: 'Sin inmovilizar tu propio capital',
    d: 'El crédito empresarial al 0% (APR promocional) fondea la operación con criterio —elegibilidad, garantía personal, salida— sin vaciar el ahorro familiar.',
  },
]

const PERICIA = [
  'Análisis en vivo de portales públicos de subastas del condado: calendarios de venta, números de caso, listados.',
  'Hojas de cálculo con márgenes conservadores: puja + fees + title + contingencia, no proyecciones infladas.',
  'Hablamos sin rodeos de los riesgos reales: deudas viejas pegadas a la propiedad, plazos y costos que cambian por estado y condado.',
]

export default function Autoridad() {
  return (
    <LandingLayout waMessage="Hola, vi la página de Argenis y Carmen y quiero saber más.">
      {/* 1 · Hero a una pantalla: kicker → H1 → video → CTAs */}
      <LandingHero
        tone="charcoal"
        fillViewport
        image={{
          src: img('07', '07-autoridad-argenis__hero-fundadores-espacio-titular.png'),
          alt: 'Argenis y Carmen en su espacio de trabajo',
          focal: '50% 30%',
          scrim: 'full',
        }}
        banner={{ src: LANDING_BANNER['07'], alt: 'Masterclass gratis — Cómo adquirir propiedades en subasta, paso a paso, con Argenis y Carmen', ratio: '4x5' }}
        kicker={<Kicker>Magic Capital · {FOUNDERS.argenis.name} &amp; {FOUNDERS.carmen.name}</Kicker>}
        title={<>Ejecutores, no influencers. Pujamos en los mismos condados que te enseñamos.</>}
        sub={
          <>
            Operamos subastas tax deed (subastas por impuestos) reales en Florida y Pennsylvania. Te mostramos
            el proceso público —incluido qué <strong className="text-ivory">NO</strong>{' '}
            comprar— antes de que arriesgues un dólar.
            <span className="mt-3 block text-[13px] text-ivory/55">
              Gratis · en vivo · en español. Sin pagos, sin trucos.
            </span>
          </>
        }
        actions={
          <>
            <CTAButton to="/l/01-reserva" icon={<Icon.ArrowRight />} magnetic>
              Ver la masterclass gratis
            </CTAButton>
            <CTAButton href="https://instagram.com" variant="ghost">
              Seguir su trabajo
            </CTAButton>
          </>
        }
      />

      {/* 2 · Misión + el problema del ICP (fusionados) */}
      <Section tone="ivory" pad="lg" texture={sectionBg('07-autoridad-argenis', 1)}>
        <Container>
          <SectionHeader
            kicker="Por qué hacemos esto · hay otra puerta"
            title="No vendemos sueños. Enseñamos un proceso público y verificable."
            intro="Para muchos latinos en EE.UU., comprar una casa se siente imposible: los precios y las tasas los dejan fuera. Te abrimos otra puerta —las subastas por impuestos— para entrar con método, no con suerte."
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {PROBLEMAS.map((p) => (
              <RevealItem key={p.t}>
                <GlassCard tone="solid" className="h-full">
                  <div className="text-2xl text-gold">{p.icon}</div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ivory">{p.t}</h3>
                  <p className="mt-2 text-[14.5px] leading-snug text-ivory/70">{p.d}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* 3 · El mecanismo dual (PINNED — la diferenciación de marca) */}
      <Section tone="charcoal" pad="sm" texture={sectionBg('07-autoridad-argenis', 3)}>
        <Container>
          <SectionHeader
            tone="dark"
            kicker="La diferenciación"
            title="Dos expertos, dos piezas, un sistema completo"
            intro="La competencia te enseña a encontrar la propiedad y te deja con la pregunta '¿y con qué dinero compro?'. Nosotros respondemos las dos."
          />
        </Container>
        <PinnedSequence count={3}>
          {(active) => (
            <Container>
              <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1fr]">
                <ol className="space-y-3">
                  {DUAL_STEP_LABELS.map((label, i) => (
                    <li
                      key={label}
                      className={cn(
                        'flex items-center gap-3 text-lg font-display font-semibold transition-colors',
                        i <= active ? 'text-ivory' : 'text-ivory/30',
                      )}
                    >
                      <span
                        className={cn(
                          'grid h-7 w-7 place-items-center rounded-full text-[12px] ring-1',
                          i <= active ? 'bg-gold/20 text-gold ring-gold/40' : 'text-ivory/30 ring-white/15',
                        )}
                      >
                        {i + 1}
                      </span>
                      {label}
                    </li>
                  ))}
                </ol>
                <DualMechanism
                  stage={active}
                  left={{
                    eyebrow: 'La oportunidad · Argenis',
                    title: 'Método MAP-9',
                    sub: '9 fases para analizar y filtrar subastas tax deed. El filtro de seguridad descarta propiedades problemáticas antes de pujar. Primero, qué NO comprar.',
                  }}
                  right={{
                    eyebrow: 'El capital · Carmen',
                    title: 'Crédito empresarial / 0%',
                    sub: 'Estructurar tu empresa y perfil de crédito para fondear con líneas al 0% (APR promocional), con criterio: elegibilidad, garantía personal, salida.',
                  }}
                  center="Propiedades baratas en subasta + el dinero para comprarlas, sin vaciar tus ahorros."
                />
              </div>
            </Container>
          )}
        </PinnedSequence>
      </Section>

      {/* 4 · Prueba de pericia */}
      <Section tone="ivory" pad="lg" texture={sectionBg('07-autoridad-argenis', 4)}>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                kicker="Esto es lo que hacemos frente a la cámara"
                title="El portal, la hoja de cálculo y el criterio"
              />
              <Stagger className="mt-6 space-y-3">
                {PERICIA.map((b) => (
                  <RevealItem key={b} subtle>
                    <div className="flex gap-3">
                      <Icon.Check className="mt-1 shrink-0 text-gold" />
                      <p className="text-[15px] leading-snug text-ivory/80">{b}</p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
              <p className="mt-5 text-[14px] italic text-ivory/55">
                Sin fajos de dinero. Sin autos. Solo el proceso público.
              </p>
            </div>
            <Reveal>
              <PortalMock />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 5 · Esto SÍ / Esto NO */}
      <Section tone="ivory-dim" texture={sectionBg('07-autoridad-argenis', 5)}>
        <Container>
          <SectionHeader kicker="Cómo reconocer a alguien serio" title="Esto SÍ · Esto NO" />
          <div className="mt-10">
            <YesNoColumns
              left={{
                heading: 'Esto SÍ',
                variant: 'positive',
                items: [
                  'Te mostramos el portal público del condado.',
                  'Te enseñamos a descartar antes de comprar.',
                  'Hablamos de riesgos y de lo que puede salir mal.',
                  'Mostramos números conservadores con sus límites.',
                  'Te decimos cuándo consultar a un abogado o title professional.',
                ],
              }}
              right={{
                heading: 'Esto NO',
                variant: 'negative',
                items: [
                  'No prometemos ingresos ni "título limpio".',
                  'No decimos "sin riesgo" ni "garantizado".',
                  'No te mandamos a pujar por intuición.',
                  'No vendemos un sueño de lujo.',
                  'No fingimos que el crédito está pre-aprobado.',
                ],
              }}
            />
          </div>
        </Container>
      </Section>

      {/* 6 · Caso $7,500 (con sus límites) */}
      <Section tone="charcoal" pad="lg" texture={sectionBg('07-autoridad-argenis', 6)}>
        <Container width="narrow">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                tone="dark"
                kicker="Un ejemplo, con sus límites"
                title="Un caso real, con números a la vista"
                intro="En Washington County, Pennsylvania, trabajamos una operación que partió de una propiedad de ~$7,500. La usamos para enseñar el proceso completo: filtrar, verificar, decidir."
              />
              <div className="mt-5 flex items-center gap-2">
                <Badge tone="ivory">
                  <Icon.MapPin /> Washington County, PA
                </Badge>
              </div>
              <Reveal className="mt-6">
                <PropertyShowcase
                  src={img('07', '07-autoridad-argenis__caso-vivienda-modesta-pa--4x5.png')}
                  alt="Vivienda modesta en un pueblo de Pennsylvania, del tipo que se adjudica en subasta de tax deed."
                  ratio="4x5"
                  tone="dark"
                  caption="Imagen ilustrativa de una vivienda modesta del tipo que se trabaja en subasta; no es la propiedad exacta del caso."
                />
              </Reveal>
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

      {/* 7 · Ejecutores, no influencers (nutrido con el muro de prueba) */}
      <Section
        tone="petrol"
        pad="md"
        texture={{
          src: img('07', '07-autoridad-argenis__proof-wall-ejecutores-no-influencers--16x9--codex-v02.png'),
          opacity: 0.14,
          focal: '50% 45%',
        }}
      >
        <Container width="narrow">
          <SectionHeader tone="dark" kicker="Señales de que somos reales" title="Exigimos que desconfíes" />
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              'Operamos en condados específicos de Florida y Pennsylvania, no en abstracto.',
              'Enseñamos en español, en vivo, respondiendo preguntas.',
              'Mostramos el proceso aunque sea aburrido.',
              'Decimos cuándo NO somos la solución (no somos abogados ni asesores fiscales o de inversión).',
            ].map((s) => (
              <RevealItem key={s} subtle>
                <div className="flex h-full items-start gap-3 rounded-xl bg-white/[0.06] px-4 py-3.5">
                  <Icon.Shield className="mt-0.5 shrink-0 text-gold" />
                  <span className="text-[14px] leading-snug text-ivory/85">{s}</span>
                </div>
              </RevealItem>
            ))}
          </Stagger>
          <Reveal className="mt-6">
            <p className="text-center text-[15px] text-ivory/70">
              Por eso te mostramos el proceso público, no testimonios de lujo.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 8 · CTA final */}
      <Section tone="charcoal" pad="lg" aura texture={sectionBg('07-autoridad-argenis', 8)}>
        <Container width="narrow" className="text-center">
          <div className="mx-auto mb-6 flex justify-center gap-3">
            <Img
              src={founder('argenis-oscuro-sentado.jpg')}
              alt="Argenis Aguilera"
              kenBurns={false}
              className="h-16 w-16 rounded-full ring-2 ring-white/15"
              focal="50% 25%"
            />
            <Img
              src={founder('carmen-oscuro-sentada-calida.jpg')}
              alt="Carmen Espinosa"
              kenBurns={false}
              className="h-16 w-16 rounded-full ring-2 ring-white/15"
              focal="50% 25%"
            />
          </div>
          <DisplayHeading size="lg">Empieza por entender, no por comprar</DisplayHeading>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ivory/70">
            Reserva tu lugar en la masterclass gratis, en vivo y en español. Te mostramos cómo entrar en tax
            deed sin adivinar: qué condados mirar, qué propiedades descartar y cómo financiar con criterio.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton to="/l/01-reserva" icon={<Icon.ArrowRight />} magnetic>
              Ver la masterclass gratis
            </CTAButton>
            <CTAButton href={waLink('Hola, quiero saber más sobre la masterclass de Magic Capital.')} variant="whatsapp" icon={<Icon.Whatsapp />}>
              Escríbenos por WhatsApp
            </CTAButton>
          </div>
          <p className="mt-4 text-[13px] text-ivory/50">
            Gratis · cupos limitados por la capacidad real de cada sesión en vivo · sin tarjeta.
          </p>
        </Container>
      </Section>
    </LandingLayout>
  )
}
