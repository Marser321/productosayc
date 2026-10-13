import { Section, Container, Kicker, SectionHeader, CTAButton, Icon } from '../components/primitives'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '../components/motion'
import { LandingHero, LandingLayout } from '../components/shell'
import { TestimoniosCarousel, PagoCTA } from '../components/blocks'
import { PRECIO, PAY, fmt } from '../content/pagos'
import { LANDING_BANNER } from '../content/images'
import { TESTIMONIOS_NOTA, TESTIMONIOS_OFERTAS } from '../content/testimonios'
import { sectionBg } from '../content/section-backgrounds'

// ─────────────────────────────────────────────────────────────────────────
//  OFERTA DE LA MASTERCLASS — una sola.
//  Decisión del cliente 2026-10-13: sale la Mentoría 1:1 ($10,000) y el
//  Intensivo MAP-9 pasa a $497 como ÚNICA oferta, con todo el protagonismo
//  (antes era la alternativa sobria al lado de la Mentoría). Sin comparativa:
//  no hay nada con qué comparar. La Comunidad tampoco se ofrece aquí
//  (decisión 2026-07-20).
//
//  Lo que incluye es el mismo listado que se presenta en vivo en el deck
//  (slide "Intensivo MAP 9 · $497"), para que la página no prometa otra cosa.
// ─────────────────────────────────────────────────────────────────────────

const INTENSIVO_INCLUYE = [
  'El paso a paso del Método MAP-9, en vivo durante 2 días',
  'Acceso a las reuniones semanales de la comunidad por un mes (preguntas y respuestas)',
  'Cita diagnóstico con Carmen para obtención de crédito de negocio',
  'Guía teórica de subasta de propiedades',
  'Mapa de estados con Tax Deed y Tax Lien',
]

const BONO = 'Los primeros 5 tendrán una reunión 1:1 con Argenis'

export default function OfertasCompletas() {
  // Un solo interruptor para todo el movimiento de la página: con
  // `prefers-reduced-motion` la tarjeta queda quieta (sin loops, sin barrido,
  // sin levante) pero con exactamente la misma jerarquía visual.
  const reduce = useReducedMotion()

  const scrollToOferta = () => {
    const el = document.getElementById('oferta')
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
          src: '/img/03/03-compra-intensivo__hero-fundadores-sesion-vivo.png',
          alt: 'Magic Capital — Intensivo MAP-9',
          focal: '50% 35%',
          scrim: 'full',
        }}
        banner={{ src: LANDING_BANNER['03'], alt: 'Magic Capital — Intensivo MAP-9', ratio: '4x5' }}
        kicker={<Kicker>Fin de Semana Intensivo</Kicker>}
        title={<>El paso a paso del Método MAP-9, en vivo.</>}
        sub={
          <>
            Dos días en grupo con Carmen y Argenis para aprender a filtrar, analizar y ejecutar
            subastas por tu cuenta. <strong className="text-ivory">Cupos limitados.</strong>
          </>
        }
        actions={
          <CTAButton onClick={scrollToOferta} icon={<Icon.ArrowRight />} magnetic>
            Ver la oferta
          </CTAButton>
        }
      />

      {/* 2 · La oferta: una sola tarjeta, centrada y con todo el tratamiento dorado. */}
      <Section id="oferta" tone="ivory-dim" pad="md" texture={sectionBg('03-compra-intensivo', 6)}>
        <Container>
          <SectionHeader
            kicker="Tu próximo paso"
            title="Reserva tu lugar en el Intensivo MAP-9"
            intro="Ya viste el método en la masterclass. Ahora apréndelo paso a paso, en vivo, y llévate las herramientas para ejecutarlo."
          />

          <Reveal className="mx-auto mt-10 flex max-w-3xl">
            <div className="group relative w-full">
              {/* Glow superior que RESPIRA. Junto con el haz del borde, el pulso
                  del CTA y la respiración de la sombra (index.css, ciclo de 7s)
                  forman el único conjunto de loops permanentes de la página. */}
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
                className="card-breathe relative flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-gold/50 bg-navy-soft bg-[linear-gradient(rgba(201,162,75,0.06),rgba(201,162,75,0.02))] p-7 text-ivory shadow-gold-ring sm:p-10"
                whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.28 } }}
              >
                {/* Haz que recorre el borde en loop (ver .card-beam). Se omite
                    del todo con reduced-motion: congelado es solo una mancha. */}
                {!reduce && <span aria-hidden className="card-beam" />}
                {/* Barrido de luz dorada al pasar el cursor. pointer-events-none
                    para no robarle el clic al CTA que está debajo. */}
                {!reduce && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-gold/10 to-transparent transition-all duration-[1100ms] ease-out group-hover:left-[150%]"
                  />
                )}

                <motion.div
                  className="inline-flex items-center gap-2 self-start rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gold-bright"
                  animate={reduce ? undefined : { boxShadow: ['0 0 0 0 rgba(201,162,75,0)', '0 0 18px 0 rgba(201,162,75,0.35)', '0 0 0 0 rgba(201,162,75,0)'] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Icon.Star className="text-xs" />
                  Solo 20 cupos disponibles
                </motion.div>

                <h3 className="mt-4 font-display text-3xl font-semibold text-ivory sm:text-4xl">
                  Fin de Semana Intensivo MAP-9
                </h3>
                <p className="mt-3 max-w-xl font-sans text-[15px] leading-relaxed text-ivory/75">
                  Por 2 días y de manera grupal, te enseñamos el paso a paso del Método MAP-9:
                  cómo filtrar condados, analizar cada propiedad y llegar a la subasta con
                  criterio.
                </p>

                <div className="mt-7 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <span className="font-display text-5xl font-bold leading-none text-gold-metallic sm:text-6xl">
                    {fmt(PRECIO.intensivo)}
                  </span>
                  <span className="pb-1 text-[13px] font-semibold text-gold-bright">
                    inversión única
                  </span>
                </div>

                <div className="my-7 h-px bg-gold/25" />

                <ul className="space-y-3">
                  {INTENSIVO_INCLUYE.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[14.5px] text-ivory/85">
                      <Icon.Check className="mt-0.5 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 text-center text-[13.5px] font-semibold text-gold-bright">
                  🎁 {BONO}
                </div>

                <div className="mt-8 flex flex-col items-center">
                  <PagoCTA href={PAY.intensivo} className={reduce ? undefined : 'cta-pulse'}>
                    Reservar mi lugar · {fmt(PRECIO.intensivo)}
                  </PagoCTA>
                  <p className="mt-3 text-center text-[12px] text-ivory/55">
                    Cupos limitados: se asignan por orden de reserva.
                  </p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3 · Testimonios en video, después de la oferta: primero lo que se
             ofrece, después la prueba que lo sostiene. */}
      <Section tone="ivory" pad="md" texture={sectionBg('03-compra-intensivo', 3)}>
        <Container>
          <SectionHeader
            kicker="Historias reales"
            title="Alumnos de Carmen y Argenis"
            intro="Sus propias palabras, sin guion. Desliza para ver todos."
          />
          <div className="mt-8">
            <TestimoniosCarousel items={TESTIMONIOS_OFERTAS} />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[12px] leading-snug text-ivory/45">
            {TESTIMONIOS_NOTA}
          </p>
        </Container>
      </Section>

      {/* 4 · Cierre: segundo CTA para quien llegó al final sin reservar. */}
      <Section tone="charcoal" pad="md">
        <Container width="narrow">
          <Reveal className="text-center">
            <SectionHeader
              tone="dark"
              kicker="Tu decisión"
              title="La oportunidad ya está sobre la mesa"
              intro="Reserva hoy tu lugar en el Fin de Semana Intensivo en vivo."
            />
            <div className="mx-auto mt-8 flex max-w-md justify-center">
              <PagoCTA href={PAY.intensivo}>
                Reservar mi lugar · {fmt(PRECIO.intensivo)}
              </PagoCTA>
            </div>
          </Reveal>
        </Container>
      </Section>
    </LandingLayout>
  )
}
