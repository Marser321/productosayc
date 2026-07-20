import {
  Section,
  Container,
  Kicker,
  SectionHeader,
  GlassCard,
  CTAButton,
  Icon,
} from '../components/primitives'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '../components/motion'
import { LandingHero, LandingLayout } from '../components/shell'
import { TestimoniosCarousel } from '../components/blocks'
import { LANDING_BANNER } from '../content/images'
import { TESTIMONIOS_NOTA } from '../content/testimonios'
import { sectionBg } from '../content/section-backgrounds'

// ─────────────────────────────────────────────────────────────────────────
//  OFERTAS DE LA MASTERCLASS — dos caminos, no tres.
//  La Comunidad NO se ofrece aquí (decisión 2026-07-20): esta página la ve
//  tráfico que sale de la masterclass, y meter un tercer plan de $27 diluía la
//  decisión. Por eso también salió de la comparativa, que ahora es a 2 columnas.
//
//  Jerarquía deliberada: la Mentoría 1:1 es LA oferta (borde y fondo dorados,
//  glow superior, más ancho de grilla, precio grande) y el Intensivo queda como
//  alternativa sobria. El peso visual lo carga la grilla 3/2 + el tratamiento
//  dorado, no un tamaño de fuente mayor.
// ─────────────────────────────────────────────────────────────────────────

/**
 * Links de pago del CRM.
 *
 * ⚠ Los dos de la Mentoría están PENDIENTES: los links viejos de FastPayDirect
 * cobran $3,997, que ya no es el precio. Dejarlos cableados aquí cobraría de
 * más. Mientras estén vacíos, su CTA se renderiza deshabilitado a propósito —
 * es preferible un botón inerte a un cobro equivocado. Completar con los links
 * nuevos del menulink del CRM y borrar este aviso.
 */
const PAY = {
  /** Real y vivo: el Intensivo mantiene precio, así que su link sigue sirviendo. */
  intensivo: 'https://link.fastpaydirect.com/payment-link/6a4d2644c981f3feae6e7e2f',
  /** TODO(cliente): menulink de $3,497 con los métodos de pago en cuotas del CRM. */
  mentoriaContado: '',
  /** TODO(cliente): link del primer pago de $997 del plan de financiación propia. */
  mentoriaFinanciacion: '',
}

/** Precios en un solo lugar: los usa la tarjeta, la comparativa y el FAQ. */
const PRECIO = {
  /** Precio de referencia de la Mentoría fuera de la masterclass. */
  mentoriaRegular: 5000,
  /** Precio exclusivo para quien viene de la masterclass. */
  mentoriaHoy: 3497,
  /** Primer pago del plan financiado por Carmen y Argenis. */
  financiacionInicial: 997,
  /** Pagos restantes del plan financiado (escalonados desde el CRM). */
  financiacionCuotas: 3,
  intensivo: 297,
}

const fmt = (n: number) => `$${n.toLocaleString('en-US')}`

/** Total del plan financiado y su recargo frente a pagar de una. */
const financiadoTotal =
  PRECIO.financiacionInicial * (PRECIO.financiacionCuotas + 1)
const recargoFinanciacion = financiadoTotal - PRECIO.mentoriaHoy
const ahorroMasterclass = PRECIO.mentoriaRegular - PRECIO.mentoriaHoy

const MENTORIA_INCLUYE = [
  'Sesiones privadas 1:1 con Argenis y Carmen',
  'Análisis forense de 5 propiedades reales tuyas',
  'Estructuración de tu LLC y tu perfil de crédito al 0%',
  'Acompañamiento hasta tu primera subasta',
  'Soporte diario 1:1 (lunes a viernes)',
  'Biblioteca y grabaciones de por vida',
]

const INTENSIVO_INCLUYE = [
  '2 días prácticos en vivo',
  'Guía interactiva MAP-9',
  'Filtro forense de condados',
  'Repeticiones de Q&A por 14 días',
]

type Cell = boolean | string

const COMPARACION: { feat: string; intensivo: Cell; mentoria: Cell }[] = [
  { feat: 'Formación en el Método MAP-9', intensivo: true, mentoria: true },
  { feat: 'Sesiones en vivo', intensivo: '2 días intensivos', mentoria: 'Privadas 1:1' },
  { feat: 'Sesiones de consultoría privadas 1:1', intensivo: false, mentoria: '8 sesiones' },
  { feat: 'Análisis forense de propiedades reales tuyas', intensivo: false, mentoria: '5 propiedades' },
  { feat: 'LLC y perfil de crédito al 0% estructurado', intensivo: false, mentoria: true },
  { feat: 'Acompañamiento hasta tu primera subasta', intensivo: false, mentoria: true },
  { feat: 'Biblioteca de recursos y grabaciones', intensivo: '14 días', mentoria: 'De por vida' },
  { feat: 'Soporte', intensivo: 'Grupal', mentoria: 'Diario 1:1 (L-V)' },
  { feat: 'Financiación propia de Carmen y Argenis', intensivo: false, mentoria: true },
]


/** Celda de la comparativa: check/guion para booleanos, texto para valores. */
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

/**
 * CTA de pago que se niega a cobrar mal: sin link configurado no navega a
 * ningún lado y lo dice en pantalla, en vez de caer al link del precio viejo.
 */
function PagoCTA({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}) {
  if (!href) {
    return (
      <div className={className}>
        <CTAButton
          variant={variant}
          size="lg"
          className="w-full cursor-not-allowed opacity-50"
          onClick={() => {}}
        >
          {children}
        </CTAButton>
        <p className="mt-2 text-center text-[11px] text-ivory/45">
          Link de pago pendiente de configurar.
        </p>
      </div>
    )
  }
  return (
    <CTAButton
      href={href}
      variant={variant}
      size="lg"
      icon={<Icon.ArrowRight />}
      className={`w-full ${className ?? ''}`}
      magnetic={variant === 'primary'}
    >
      {children}
    </CTAButton>
  )
}

export default function OfertasCompletas() {
  // Un solo interruptor para todo el movimiento de la página: con
  // `prefers-reduced-motion` las tarjetas quedan quietas (sin loops, sin barrido,
  // sin levante) pero con exactamente la misma jerarquía visual.
  const reduce = useReducedMotion()

  const scrollToPlanes = () => {
    const el = document.getElementById('planes')
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <LandingLayout hideWhatsApp>
      {/* 1 · Hero */}
      <LandingHero
        tone="charcoal"
        fillViewport
        image={{
          src: '/img/05/05-compra-mentoria__hero-fundadores-revisando-portal.png',
          alt: 'Magic Capital — programas',
          focal: '50% 35%',
          scrim: 'full',
        }}
        banner={{ src: LANDING_BANNER['03'], alt: 'Magic Capital — Programas', ratio: '4x5' }}
        kicker={<Kicker>Oferta especial de la masterclass</Kicker>}
        title={<>Elige cómo quieres llegar a tu primera subasta.</>}
        sub={
          <>
            Dos caminos con el mismo método: la{' '}
            <strong className="text-ivory">Mentoría Privada 1:1</strong>, donde trabajamos contigo
            hasta que pujes con criterio, o el{' '}
            <strong className="text-ivory">Intensivo MAP-9</strong> si prefieres ejecutar por tu
            cuenta.
          </>
        }
        actions={
          <CTAButton onClick={scrollToPlanes} icon={<Icon.ArrowRight />} magnetic>
            Ver la oferta
          </CTAButton>
        }
      />

      {/* 2 · Planes. Grilla 3/2: la Mentoría ocupa más ancho a propósito. */}
      <Section id="planes" tone="ivory-dim" pad="md" texture={sectionBg('03-compra-intensivo', 6)}>
        <Container>
          <SectionHeader
            kicker="Tu próximo paso"
            title="La Mentoría 1:1, al precio de la masterclass"
            intro="Es el único momento en que la Mentoría Privada está disponible en estas condiciones."
          />

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-5">
            {/* ── MENTORÍA · protagonista ───────────────────────────────── */}
            <Reveal className="flex lg:col-span-3">
              <div className="group relative w-full">
                {/* Glow superior que RESPIRA: es el efecto que más separa la tarjeta
                    del fondo y el único con loop permanente en la página — el
                    Intensivo no lleva nada equivalente, y ahí está la jerarquía. */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-x-6 -top-8 h-40 rounded-full bg-gold/20 blur-3xl"
                  animate={reduce ? undefined : { opacity: [0.55, 1, 0.55], scale: [0.97, 1.04, 0.97] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Tarjeta propia en vez de <GlassCard>: `cn` no hace twMerge, así
                    que las clases del componente y las de aquí se pisaban (el tinte
                    dorado llegaba a reemplazar el navy base en lugar de superponerse).
                    El fondo es navy sólido + un velo dorado por gradiente. */}
                <motion.div
                  className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-gold/50 bg-navy-soft bg-[linear-gradient(rgba(201,162,75,0.06),rgba(201,162,75,0.02))] p-7 text-ivory shadow-gold-ring sm:p-9"
                  whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.28 } }}
                >
                  {/* Barrido de luz dorada al pasar el cursor. pointer-events-none
                      para no robarle el clic a los CTA que están debajo. */}
                  {!reduce && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-gold/10 to-transparent transition-all duration-[1100ms] ease-out group-hover:left-[150%]"
                    />
                  )}
                  <div>
                    <motion.div
                      className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gold-bright"
                      animate={reduce ? undefined : { boxShadow: ['0 0 0 0 rgba(201,162,75,0)', '0 0 18px 0 rgba(201,162,75,0.35)', '0 0 0 0 rgba(201,162,75,0)'] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Icon.Star className="text-xs" />
                      Precio exclusivo de la masterclass
                    </motion.div>

                    <h3 className="mt-4 font-display text-3xl font-semibold text-ivory sm:text-4xl">
                      Mentoría Privada 1:1
                    </h3>
                    <p className="mt-3 max-w-xl font-sans text-[15px] leading-relaxed text-ivory/75">
                      Trabajas directamente con Argenis y Carmen sobre tus propias subastas y tu
                      propio crédito. Te estructuramos la empresa, revisamos contigo las propiedades
                      y te acompañamos hasta que pujes.
                    </p>

                    {/* Precio: referencia tachada arriba, precio de hoy enorme. */}
                    <div className="mt-7">
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] uppercase tracking-[0.14em] text-ivory/45">
                          Precio regular
                        </span>
                        <span className="font-display text-xl text-ivory/40 line-through decoration-ivory/40">
                          {fmt(PRECIO.mentoriaRegular)}
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-end gap-x-3 gap-y-1">
                        {/* El precio entra con un golpe de escala: llega después del
                            tachado, que es el orden en que queremos que se lean.
                            ⚠ El estado inicial NO parte de opacity:0 a propósito. Si
                            el IntersectionObserver no dispara (pestaña en segundo
                            plano, navegador viejo, JS a medio cargar), el peor caso
                            debe ser "el precio no hace el efecto", nunca "no hay
                            precio". Por eso arranca legible y solo sube de escala. */}
                        <motion.span
                          className="font-display text-5xl font-bold leading-none text-gold-metallic sm:text-6xl"
                          initial={reduce ? undefined : { opacity: 0.55, scale: 0.88 }}
                          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: '-15% 0px' }}
                          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {fmt(PRECIO.mentoriaHoy)}
                        </motion.span>
                        <span className="pb-1 text-[13px] font-semibold text-gold-bright">
                          hoy, desde la masterclass
                        </span>
                      </div>
                      <p className="mt-2 text-[13px] text-ivory/60">
                        Ahorras {fmt(ahorroMasterclass)} sobre el precio regular.
                      </p>
                      {/* Justificación del precio tachado. Vivía en el FAQ, que se
                          quitó: un precio de referencia sin explicar al lado es
                          justo lo que la FTC mira en un descuento. */}
                      <p className="mt-1.5 text-[12px] leading-snug text-ivory/45">
                        {fmt(PRECIO.mentoriaRegular)} es el precio al que ofrecemos la Mentoría 1:1
                        fuera de este lanzamiento. {fmt(PRECIO.mentoriaHoy)} es una condición
                        exclusiva para quienes vienen de la masterclass.
                      </p>
                    </div>

                    <div className="my-7 h-px bg-gold/25" />

                    <ul className="space-y-3">
                      {MENTORIA_INCLUYE.map((item) => (
                        <li key={item} className="flex gap-2.5 text-[14px] text-ivory/85">
                          <Icon.Check className="mt-0.5 shrink-0 text-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dos formas de pagar, la financiación propia como bloque aparte
                      para que se lea como una oferta y no como letra chica. */}
                  <div className="mt-8 space-y-4">
                    <div>
                      <PagoCTA href={PAY.mentoriaContado}>
                        Empezar ahora · {fmt(PRECIO.mentoriaHoy)}
                      </PagoCTA>
                      {PAY.mentoriaContado && (
                        <p className="mt-2 text-center text-[11.5px] text-ivory/50">
                          Pago único o en cuotas con los métodos de nuestra pasarela.
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="text-[11px] uppercase tracking-[0.14em] text-ivory/40">
                        o
                      </span>
                      <span className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="rounded-xl border border-gold/25 bg-gold/[0.05] p-5">
                      <div className="flex items-start gap-2.5">
                        <Icon.Sparkles className="mt-0.5 shrink-0 text-base text-gold" />
                        <div>
                          <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-gold-bright">
                            Financiación directa de Carmen y Argenis
                          </p>
                          <p className="mt-1.5 text-[13.5px] leading-relaxed text-ivory/75">
                            Empiezas con {fmt(PRECIO.financiacionInicial)} y los{' '}
                            {PRECIO.financiacionCuotas} pagos restantes de{' '}
                            {fmt(PRECIO.financiacionInicial)} quedan programados de forma escalonada.
                            Sin banco de por medio.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <PagoCTA href={PAY.mentoriaFinanciacion} variant="secondary">
                          Empezar con {fmt(PRECIO.financiacionInicial)}
                        </PagoCTA>
                      </div>
                      {/* Transparencia del costo del plan: el financiado paga más
                          que el de contado y hay que decirlo sin buscarlo. */}
                      <p className="mt-3 text-center text-[11.5px] leading-snug text-ivory/50">
                        Total del plan financiado {fmt(financiadoTotal)} ({fmt(recargoFinanciacion)}{' '}
                        más que pagando de una sola vez).
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>

            {/* ── INTENSIVO · alternativa sobria ────────────────────────── */}
            <Reveal className="flex lg:col-span-2">
              {/* Misma razón que la tarjeta de arriba: sin twMerge, `bg-white/[0.02]`
                  sobre <GlassCard> borraba el navy en vez de aclararlo.
                  Movimiento deliberadamente MENOR que el de la Mentoría: solo un
                  levante corto al hover, sin glow, sin barrido y sin loop. La
                  diferencia de tratamiento ES la jerarquía. */}
              <motion.div
                className="flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 bg-navy-soft bg-[linear-gradient(rgba(255,255,255,0.02),rgba(255,255,255,0.02))] p-7 text-ivory shadow-glass-dark transition-colors hover:border-white/20"
                whileHover={reduce ? undefined : { y: -2, transition: { duration: 0.28 } }}
              >
                <div>
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ivory/45">
                    Si prefieres hacerlo por tu cuenta
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ivory">
                    Intensivo MAP-9
                  </h3>
                  <p className="mt-3 font-sans text-[14px] leading-relaxed text-ivory/65">
                    Aprende el método completo en vivo durante un fin de semana y llévate las
                    herramientas para operar solo.
                  </p>

                  <div className="mt-6 font-display text-3xl font-bold text-ivory/85">
                    {fmt(PRECIO.intensivo)}
                  </div>
                  <p className="mt-1 text-[12px] text-ivory/40">Inversión única</p>

                  <div className="my-6 h-px bg-white/10" />

                  <ul className="space-y-2.5">
                    {INTENSIVO_INCLUYE.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[13.5px] text-ivory/70">
                        <Icon.Check className="mt-0.5 shrink-0 text-ivory/35" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <CTAButton
                    href={PAY.intensivo}
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    Reservar mi asiento · {fmt(PRECIO.intensivo)}
                  </CTAButton>
                  <p className="mt-2 text-center text-[11.5px] text-ivory/45">
                    Se acredita a la Mentoría si decides subir después.
                  </p>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 3 · Testimonios en video. Van DESPUÉS de los planes a propósito: primero
             la oferta, después la prueba que la sostiene, y de ahí a la
             comparativa para cerrar la decisión. */}
      <Section tone="ivory" pad="md" texture={sectionBg('03-compra-intensivo', 3)}>
        <Container>
          <SectionHeader
            kicker="Historias reales"
            title="Alumnos de Carmen y Argenis"
            intro="Sus propias palabras, sin guion. Desliza para ver todos."
          />
          <div className="mt-8">
            <TestimoniosCarousel />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[12px] leading-snug text-ivory/45">
            {TESTIMONIOS_NOTA}
          </p>
        </Container>
      </Section>

      {/* 4 · Comparativa a 2 columnas (la Comunidad no se ofrece en esta página) */}
      <Section tone="charcoal" pad="md">
        <Container width="narrow">
          <SectionHeader tone="dark" kicker="Comparativa" title="Los dos programas, lado a lado" />
          <Reveal className="mt-8">
            <GlassCard tone="dark" className="overflow-x-auto p-0">
              <table className="w-full min-w-[520px] border-collapse text-center">
                <thead>
                  <tr className="border-b border-white/10 text-[12px] uppercase tracking-wider text-ivory/50">
                    <th className="px-6 py-4 text-left">Característica</th>
                    <th className="w-1/4 px-3 py-4">
                      Intensivo
                      <span className="block text-[11px] normal-case tracking-normal text-ivory/40">
                        {fmt(PRECIO.intensivo)}
                      </span>
                    </th>
                    <th className="w-1/4 px-3 py-4 text-gold">
                      Mentoría 1:1
                      <span className="block text-[11px] normal-case tracking-normal text-gold/60">
                        {fmt(PRECIO.mentoriaHoy)}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {COMPARACION.map((row) => (
                    <tr key={row.feat} className="text-[13.5px] hover:bg-white/[0.01]">
                      <td className="px-6 py-3 text-left font-medium text-ivory/85">{row.feat}</td>
                      <td className="px-3 py-3">
                        <CompareCell value={row.intensivo} />
                      </td>
                      <td className="px-3 py-3">
                        <CompareCell value={row.mentoria} gold />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

    </LandingLayout>
  )
}
