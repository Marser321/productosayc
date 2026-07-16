import {
  Section,
  Container,
  Kicker,
  SectionHeader,
  GlassCard,
  CTAButton,
  Icon,
} from '../components/primitives'
import { Reveal } from '../components/motion'
import { LandingHero, LandingLayout } from '../components/shell'
import { FAQAccordion, YesNoColumns } from '../components/blocks'
import { LANDING_BANNER } from '../content/images'
import { sectionBg } from '../content/section-backgrounds'

// Links de pago FastPayDirect (reales y vivos — mismos que las páginas individuales).
const PAY = {
  comunidad: 'https://link.fastpaydirect.com/payment-link/6a4d286aa655fa0b802a3179',
  intensivo: 'https://link.fastpaydirect.com/payment-link/6a4d2644c981f3feae6e7e2f',
  mentoria: 'https://link.fastpaydirect.com/payment-link/6a4d2612c981f3feae6e7e2d',
}

type Cell = boolean | string

const COMPARACION: { feat: string; comunidad: Cell; intensivo: Cell; mentoria: Cell }[] = [
  { feat: 'Formación en el Método MAP-9', comunidad: 'Contenido mensual', intensivo: true, mentoria: true },
  { feat: 'Biblioteca de recursos y grabaciones', comunidad: 'Mientras seas miembro', intensivo: '14 días', mentoria: 'De por vida' },
  { feat: 'Sesiones en vivo', comunidad: 'Q&A grupal', intensivo: '2 días intensivos', mentoria: 'Privadas 1:1' },
  { feat: 'Sesiones de consultoría privadas 1:1', comunidad: false, intensivo: false, mentoria: '8 sesiones' },
  { feat: 'Análisis forense de propiedades reales tuyas', comunidad: false, intensivo: false, mentoria: '5 propiedades' },
  { feat: 'LLC y perfil de crédito al 0% estructurado', comunidad: false, intensivo: false, mentoria: true },
  { feat: 'Acompañamiento hasta tu primera subasta', comunidad: false, intensivo: false, mentoria: true },
  { feat: 'Soporte', comunidad: 'Grupal', intensivo: 'Grupal', mentoria: 'Diario 1:1 (L-V)' },
  { feat: 'Compromiso', comunidad: 'Mensual · cancelas cuando quieras', intensivo: 'Pago único', mentoria: 'Pago único' },
]

const FAQ = [
  {
    q: '¿Por dónde me conviene empezar?',
    a: 'Depende de tu momento. Si estás explorando y quieres seguir aprendiendo sin una inversión alta, la Comunidad ($27/mes) es el punto de entrada. Si quieres aprender el método completo y ejecutar por tu cuenta, el Intensivo. Si prefieres ir acompañado 1:1 hasta tu primera subasta, la Mentoría.',
  },
  {
    q: '¿Puedo empezar con el Intensivo y pasar a la Mentoría después?',
    a: 'Sí. El 100% de la inversión de tu ticket del Intensivo ($297) se toma a cuenta si decides aplicar a la Mentoría Privada 1:1 dentro del plazo límite establecido tras la sesión.',
  },
  {
    q: '¿La Mentoría 1:1 asegura que aprueben mi crédito?',
    a: 'No. Te enseñamos los criterios bancarios para construir tu perfil de crédito de negocio al 0%, pero la aprobación final y los límites otorgados dependen de los emisores bancarios y de tu historial crediticio.',
  },
  {
    q: '¿Qué capital se necesita para empezar a comprar propiedades?',
    a: 'Tanto para el Intensivo como para la Mentoría, recomendamos contar con un capital de entrada (ahorrado o fondeado) de entre $5,000 y $15,000 USD para poder ejecutar subastas reales con contingencia.',
  },
]

/** Celda de la tabla comparativa: check/guion para booleanos, texto para valores. */
function CompareCell({ value, gold = false }: { value: Cell; gold?: boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Icon.Check className="mx-auto text-lg text-gold" />
    ) : (
      <span className="text-white/20">—</span>
    )
  }
  return <span className={gold ? 'font-semibold text-gold' : 'text-ivory/65'}>{value}</span>
}

export default function OfertasCompletas() {
  // Baja suave a la sección de planes SIN cambiar la URL ni abrir pestaña nueva
  // (el CTA del hero antes usaba href="#planes", que el CTAButton abría en _blank).
  const scrollToPlanes = () => {
    const el = document.getElementById('planes')
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <LandingLayout hideWhatsApp>
      {/* 1 · Hero principal */}
      <LandingHero
        tone="charcoal"
        fillViewport
        image={{
          src: '/img/05/05-compra-mentoria__hero-fundadores-revisando-portal.png',
          alt: 'Magic Capital — todos los programas',
          focal: '50% 35%',
          scrim: 'full',
        }}
        banner={{ src: LANDING_BANNER['03'], alt: 'Magic Capital — Programas', ratio: '4x5' }}
        kicker={<Kicker>Todos los programas · Magic Capital</Kicker>}
        title={<>Elige cómo quieres avanzar hacia tu primera subasta.</>}
        sub={
          <>
            El mismo método, tres niveles de compromiso: la <strong className="text-ivory">Comunidad</strong> para no perder el
            impulso, el <strong className="text-ivory">Intensivo MAP-9</strong> para aprender y ejecutar por tu cuenta, y la{' '}
            <strong className="text-ivory">Mentoría 1:1</strong> para ir acompañado de forma privada.
          </>
        }
        actions={
          <CTAButton onClick={scrollToPlanes} icon={<Icon.ArrowRight />} magnetic>
            Ver planes y precios
          </CTAButton>
        }
      />

      {/* 2 · Los dos caminos principales (Intensivo vs Mentoría) */}
      <Section tone="ivory" pad="md" texture={sectionBg('03-compra-intensivo', 1)}>
        <Container>
          <SectionHeader
            kicker="Los dos caminos principales"
            title="Autonomía en grupo vs acompañamiento 1:1"
            intro="Antes de elegir, comprende la diferencia entre ejecutar por tu cuenta con método y avanzar acompañado de forma privada."
          />
          <div className="mt-8">
            <YesNoColumns
              left={{
                heading: 'Intensivo MAP-9 (Autonomía)',
                variant: 'positive',
                items: [
                  'Ideal si tienes disciplina para analizar de forma autónoma.',
                  'Aprendes el método en un fin de semana en vivo y grupal.',
                  'Herramientas y guías interactivas para operar a tu propio ritmo.',
                  'Menor barrera de entrada para validar el modelo de subastas.',
                ],
              }}
              right={{
                heading: 'Mentoría Privada (Acompañamiento)',
                variant: 'positive',
                items: [
                  'Diseñada si buscas reducir errores caros de la mano de expertos.',
                  'Sesiones privadas 1:1 enfocadas 100% en tu perfil y capital.',
                  'Analizamos contigo 5 propiedades reales antes de pujar.',
                  'Acompañamiento diario para estructurar tu LLC y tu crédito al 0%.',
                ],
              }}
            />
          </div>
        </Container>
      </Section>

      {/* 3 · Planes: dos protagonistas + Comunidad como punto de entrada */}
      <Section id="planes" tone="ivory-dim" pad="md" texture={sectionBg('03-compra-intensivo', 6)}>
        <Container>
          <SectionHeader kicker="Acceso directo" title="Elige tu nivel de compromiso" />

          {/* Dos ofertas protagonistas */}
          <div className="mx-auto mt-8 grid max-w-4xl items-stretch gap-8 md:grid-cols-2">
            {/* Intensivo */}
            <Reveal className="flex">
              <GlassCard tone="solid" className="flex w-full flex-col justify-between border border-white/10 p-7 transition-all hover:border-gold/30">
                <div>
                  <Kicker>Hazlo a tu ritmo</Kicker>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ivory">Intensivo MAP-9</h3>
                  <p className="mt-3 font-sans text-[14px] leading-relaxed text-ivory/70">
                    Aprende el método paso a paso en vivo durante un fin de semana completo y llévate las herramientas para
                    empezar a operar por tu cuenta.
                  </p>
                  <div className="mt-6 font-display text-4xl font-bold text-gold-metallic">$297</div>
                  <p className="mt-1 text-[12px] text-ivory/40">Inversión única · Acceso inmediato al área de miembros</p>
                  <div className="my-6 h-px bg-white/10" />
                  <ul className="mb-8 space-y-3">
                    {['2 días prácticos en vivo', 'Guía interactiva MAP-9', 'Filtro forense de condados', 'Repeticiones de Q&A'].map((item) => (
                      <li key={item} className="flex gap-2.5 text-[13.5px] text-ivory/80">
                        <Icon.Check className="mt-0.5 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <CTAButton href={PAY.intensivo} icon={<Icon.ArrowRight />} size="lg" className="w-full" magnetic>
                  Reservar mi asiento ($297)
                </CTAButton>
              </GlassCard>
            </Reveal>

            {/* Mentoría (destacada) */}
            <Reveal className="flex">
              <GlassCard tone="solid" className="flex w-full flex-col justify-between border border-gold/45 bg-gold/[0.03] p-7 shadow-gold-ring">
                <div>
                  <div className="mb-3 inline-flex self-start rounded-full bg-gold/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-gold-bright">
                    Acompañamiento 1:1
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-ivory">Mentoría Privada</h3>
                  <p className="mt-3 font-sans text-[14px] leading-relaxed text-ivory/70">
                    Trabaja directamente con Argenis y Carmen en tus subastas y crédito. Te estructuramos la empresa y te
                    acompañamos hasta pujar con criterio real.
                  </p>
                  <div className="mt-6 font-display text-4xl font-bold text-gold-metallic">$3,997</div>
                  <p className="mt-1 text-[12px] text-ivory/40">Inversión única · Soporte directo e individual</p>
                  <div className="my-6 h-px bg-gold/25" />
                  <ul className="mb-8 space-y-3">
                    {['Sesiones privadas 1:1 individuales', 'Análisis de 5 propiedades reales tuyas', 'Estructuración de LLC y crédito al 0%', 'Acompañamiento hasta tu primera subasta'].map((item) => (
                      <li key={item} className="flex gap-2.5 text-[13.5px] text-ivory/80">
                        <Icon.Check className="mt-0.5 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <CTAButton href={PAY.mentoria} variant="primary" icon={<Icon.ArrowRight />} size="lg" className="w-full" magnetic>
                  Empezar mentoría ($3,997)
                </CTAButton>
              </GlassCard>
            </Reveal>
          </div>

          {/* Comunidad — punto de entrada, con menos protagonismo */}
          <Reveal className="mx-auto mt-6 max-w-4xl">
            <div className="flex flex-col items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="max-w-xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ivory/45">
                  ¿Todavía explorando?
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-ivory">
                  Empieza por la Comunidad · <span className="text-gold">$27/mes</span>
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-snug text-ivory/60">
                  El punto de entrada de menor compromiso: contenido mensual del método, tus dudas resueltas y networking
                  real. Cancelas cuando quieras.
                </p>
              </div>
              <CTAButton href={PAY.comunidad} variant="secondary" size="md" className="shrink-0">
                Unirme por $27/mes
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 4 · Tabla comparativa a 3 columnas */}
      <Section tone="charcoal" pad="md">
        <Container width="narrow">
          <SectionHeader tone="dark" kicker="Comparativa completa" title="Los tres programas, lado a lado" />
          <Reveal className="mt-8">
            <GlassCard tone="dark" className="overflow-x-auto p-0">
              <table className="w-full min-w-[560px] border-collapse text-center">
                <thead>
                  <tr className="border-b border-white/10 text-[12px] uppercase tracking-wider text-ivory/50">
                    <th className="px-6 py-4 text-left">Característica</th>
                    <th className="w-1/5 px-3 py-4">
                      Comunidad
                      <span className="block text-[11px] normal-case tracking-normal text-ivory/40">$27/mes</span>
                    </th>
                    <th className="w-1/5 px-3 py-4">
                      Intensivo
                      <span className="block text-[11px] normal-case tracking-normal text-ivory/40">$297</span>
                    </th>
                    <th className="w-1/5 px-3 py-4 text-gold">
                      Mentoría 1:1
                      <span className="block text-[11px] normal-case tracking-normal text-gold/60">$3,997</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {COMPARACION.map((row) => (
                    <tr key={row.feat} className="text-[13.5px] hover:bg-white/[0.01]">
                      <td className="px-6 py-3 text-left font-medium text-ivory/85">{row.feat}</td>
                      <td className="px-3 py-3"><CompareCell value={row.comunidad} /></td>
                      <td className="px-3 py-3"><CompareCell value={row.intensivo} /></td>
                      <td className="px-3 py-3"><CompareCell value={row.mentoria} gold /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* 5 · FAQ */}
      <Section tone="ivory-dim" pad="md" texture={sectionBg('03-compra-intensivo', 9)}>
        <Container width="narrow">
          <SectionHeader kicker="Dudas comunes" title="Preguntas frecuentes" />
          <div className="mt-6">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>
    </LandingLayout>
  )
}
