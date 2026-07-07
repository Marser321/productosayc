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
import { Reveal, Stagger, RevealItem } from '../components/motion'
import { YesNoColumns } from '../components/blocks'
import { Hero, LandingLayout } from '../components/shell'
import { Img } from '../components/media'
import { FOUNDERS, CONTACT, waLink } from '../content/brand'
import { img } from '../content/images'
import { sectionBg } from '../content/section-backgrounds'

const PASOS = [
  {
    n: '1',
    icon: <Icon.Calendar />,
    t: 'Agenda tu sesión de diagnóstico',
    d: 'Reserva tu primera sesión 1:1 (~60 min): entendemos tu punto de partida y trazamos un plan a tu medida.',
  },
  {
    n: '2',
    icon: <Icon.Users />,
    t: 'Entra al canal privado Voxer/WhatsApp',
    d: 'Tu línea directa con Argenis y Carmen entre sesiones, para dudas concretas mientras avanzas.',
  },
  {
    n: '3',
    icon: <Icon.Document />,
    t: 'Prepara tu sesión',
    d: 'Ten lista la información de la siguiente sección: cuanto más claro llegues, más rinde cada sesión.',
  },
]

const PREPARAR = [
  {
    t: 'Capital disponible',
    d: 'Un rango honesto con el que te sientas cómodo, no un monto exacto al dólar.',
  },
  {
    t: 'Condado de interés',
    d: 'Florida o Pennsylvania — o lo definimos juntos en la sesión si aún no lo tienes claro.',
  },
  {
    t: 'Tiempo semanal realista',
    d: 'Cuántas horas puedes dedicar de verdad cada semana, sin prometerte de más.',
  },
  {
    t: 'Idea general de tu perfil de crédito',
    d: 'Una noción aproximada de tu situación; no necesitas números exactos hoy.',
  },
  {
    t: 'Tu tolerancia al riesgo',
    d: 'Qué tan conservador o agresivo te sientes cómodo siendo con tus decisiones.',
  },
]

export default function GraciasMentoria() {
  return (
    <LandingLayout waMessage="Hola, acabo de adquirir la Mentoría 1:1 y quiero coordinar mis próximos pasos.">
      {/* 1 · Confirmación premium (hero a fondo, centrado — pareja con 02/04) */}
      <Hero
        tone="charcoal"
        image={{
          src: img('06', '06-gracias-compra-mentoria__hero-recibimiento-premium.png'),
          alt: 'Recibimiento premium a la Mentoría 1:1 de Magic Capital',
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
          <Kicker className="mt-6">Pago confirmado · Mentoría 1:1</Kicker>
          <DisplayHeading as="h1" size="xl" className="mt-4">
            Bienvenido a tu Mentoría 1:1
          </DisplayHeading>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ivory/75">
            Acabas de dar un paso serio. En 3 módulos trabajamos contigo —{FOUNDERS.argenis.short} y{' '}
            {FOUNDERS.carmen.short}— en sesiones 1:1, con un plan a tu medida.
          </p>
          <div className="mx-auto mt-5 flex max-w-xl items-start gap-2.5 rounded-xl bg-white/[0.06] px-4 py-3 text-left text-[14px] leading-snug text-ivory/80">
            <Icon.Check className="mt-0.5 shrink-0 text-gold" />
            <span>
              Tu recibo de confirmación llega en minutos.{' '}
              <strong className="text-ivory">Revisa spam o promociones</strong> si no lo ves.
            </span>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <CTAButton
              href={waLink('Quiero agendar mi sesión de diagnóstico de la mentoría')}
              variant="primary"
              icon={<Icon.Calendar />}
            >
              Agendar mi sesión de diagnóstico
            </CTAButton>
            <CTAButton
              href={waLink('Quiero unirme al canal Voxer/WhatsApp de la Mentoría 1:1')}
              variant="whatsapp"
              icon={<Icon.Whatsapp />}
            >
              Unirme al canal Voxer/WhatsApp
            </CTAButton>
          </div>
        </div>
      </Hero>

      {/* 2 · Próximos pasos */}
      <Section tone="ivory" pad="lg" texture={sectionBg('06-gracias-compra-mentoria', 1)}>
        <Container>
          <SectionHeader
            kicker="Por dónde empezar"
            title="Tus próximos pasos"
            intro="Tres movimientos simples para arrancar tu mentoría con el pie derecho."
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {PASOS.map((p) => (
              <RevealItem key={p.t}>
                <GlassCard tone="solid" className="h-full">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/10 font-display text-base font-semibold text-gold">
                      {p.n}
                    </span>
                    <div className="text-xl text-gold">{p.icon}</div>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ivory">{p.t}</h3>
                  <p className="mt-2 text-[14.5px] leading-snug text-ivory/70">{p.d}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>

          <Reveal className="mt-6">
            <GlassCard tone="light" className="flex items-start gap-4">
              <div className="mt-0.5 text-2xl text-gold">
                <Icon.Clock />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-ivory">Tiempos de respuesta</h3>
                <p className="mt-1.5 text-[14.5px] leading-snug text-ivory/70">
                  Atendemos en días hábiles (L–V), normalmente dentro de 24 h. No es una línea 24/7: es
                  acompañamiento estructurado para que avances con criterio.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* 3 · Qué preparar */}
      <Section tone="ivory-dim" texture={sectionBg('06-gracias-compra-mentoria', 2)}>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                kicker="Antes de tu primera sesión"
                title="Trae esto a tu primera sesión"
                intro="Cuanto más claro tu punto de partida, mejor calibramos tu plan."
              />
              <Stagger className="mt-7 space-y-4">
                {PREPARAR.map((item) => (
                  <RevealItem key={item.t} subtle>
                    <div className="flex gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-[13px] text-gold">
                        <Icon.Check />
                      </span>
                      <div>
                        <p className="font-display text-[15.5px] font-semibold text-ivory">{item.t}</p>
                        <p className="mt-0.5 text-[14px] leading-snug text-ivory/70">{item.d}</p>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
            </div>
            <Reveal>
              <Img
                src={img('06', '06-gracias-compra-mentoria__que-preparar-primera-sesion.png')}
                alt="Qué preparar para tu primera sesión de mentoría"
                className="aspect-square w-full rounded-2xl shadow-glass-dark"
                focal="50% 50%"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4 · Expectativas y límites */}
      <Section tone="charcoal" pad="lg" texture={sectionBg('06-gracias-compra-mentoria', 3)}>
        <Container>
          <SectionHeader
            tone="dark"
            kicker="Expectativas y límites"
            title="Qué haremos · Qué NO haremos"
            intro="Esto es exactamente lo que puedes esperar de tu mentoría —y lo que no."
          />
          <div className="mt-10">
            <YesNoColumns
              tone="dark"
              left={{
                heading: 'Qué haremos',
                variant: 'positive',
                items: [
                  'Aplicar el MAP-9 para filtrar y descartar propiedades problemáticas antes de pujar.',
                  'Construir contigo, paso a paso, un plan de revisión para tu condado.',
                  'Estructurar tu crédito empresarial / financiamiento 0% con Carmen, evaluándolo con criterio.',
                  'Acompañar tus decisiones con sesiones estructuradas y soporte por canal.',
                ],
              }}
              right={{
                heading: 'Qué NO haremos',
                variant: 'negative',
                items: [
                  'No pujamos ni compramos por ti, ni manejamos tu dinero.',
                  'No somos asesores de inversión registrados, abogados ni asesores fiscales.',
                  'No prometemos ganancias, montos, aprobación de crédito ni "título limpio".',
                  'No reemplazamos la verificación local (abogado, title professional) que cada operación requiere.',
                ],
              }}
              note="Tu resultado depende de tu ejecución y de las condiciones reales del mercado y de cada subasta. Te damos método, criterio y acompañamiento; hacemos el trabajo en equipo."
            />
          </div>
        </Container>
      </Section>

      {/* 5 · Soporte y contacto */}
      <Section tone="ivory" pad="lg" texture={sectionBg('06-gracias-compra-mentoria', 4)}>
        <Container width="narrow">
          <GlassCard tone="solid">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <div className="mb-3 flex items-center gap-2">
                  <Badge tone="petrol">
                    <Icon.Shield /> Soporte
                  </Badge>
                </div>
                <h3 className="font-display text-xl font-semibold text-ivory">
                  ¿Necesitas ayuda antes de empezar?
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ivory/70">
                  ¿No llegó el correo, no encuentras el enlace o no puedes entrar al canal? Escríbenos: te
                  ayudamos a arrancar sin fricción.
                </p>
                <p className="mt-3 text-[13px] italic text-ivory/55">
                  Respondemos en horario hábil (L–V).
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3">
                <CTAButton
                  href={waLink('Hola, necesito ayuda con mi Mentoría 1:1 antes de empezar.')}
                  variant="whatsapp"
                  icon={<Icon.Whatsapp />}
                >
                  Escríbenos por WhatsApp
                </CTAButton>
                <CTAButton href={`mailto:${CONTACT.email}`} variant="secondary" icon={<Icon.ArrowRight />}>
                  {CONTACT.email}
                </CTAButton>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </LandingLayout>
  )
}
