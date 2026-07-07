import {
  Section,
  Container,
  Kicker,
  DisplayHeading,
  SectionHeader,
  GlassCard,
  CTAButton,
  Icon,
  Badge,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem } from '../components/motion'
import { LandingHero, LandingLayout } from '../components/shell'
import { FAQAccordion, YesNoColumns } from '../components/blocks'
import { LANDING_BANNER } from '../content/images'
import { sectionBg } from '../content/section-backgrounds'

const COMPARACION = [
  { feat: 'Formación en el Método MAP-9', intensivo: true, mentoria: true },
  { feat: 'Grabaciones de las sesiones', intensivo: '14 días', mentoria: 'De por vida' },
  { feat: 'Área de miembros y herramientas', intensivo: true, mentoria: true },
  { feat: 'Sesiones grupales en vivo', intensivo: true, mentoria: false },
  { feat: 'Sesiones de consultoría privadas 1:1', intensivo: false, mentoria: '8 sesiones' },
  { feat: 'Análisis forense de propiedades reales', intensivo: false, mentoria: '5 propiedades' },
  { feat: 'LLC y perfil de crédito al 0% estructurado', intensivo: false, mentoria: true },
  { feat: 'Acompañamiento hasta tu primera subasta', intensivo: false, mentoria: true },
  { feat: 'Soporte personalizado diario (L-V)', intensivo: false, mentoria: true },
]

const FAQ = [
  {
    q: '¿Puedo empezar con el Intensivo y pasar a la Mentoría después?',
    a: 'Sí. El 100% de la inversión de tu ticket del Intensivo ($297) se tomará a cuenta si decides aplicar a la Mentoría Privada 1:1 dentro del plazo límite establecido tras la sesión.',
  },
  {
    q: '¿La Mentoría 1:1 garantiza que aprueben mi crédito?',
    a: 'No. Te enseñamos los criterios bancarios para construir tu perfil de crédito de negocio al 0%, pero la aprobación final y los límites otorgados dependen de los emisores bancarios y de tu historial crediticio.',
  },
  {
    q: '¿Qué capital se necesita para empezar a comprar propiedades?',
    a: 'Tanto para el Intensivo como para la Mentoría, recomendamos contar con un capital de entrada (ahorrado o fondeado) de entre $5,000 y $15,000 USD para poder ejecutar subastas reales con contingencia.',
  },
]

export default function CompararOfertas() {
  return (
    <LandingLayout hideWhatsApp>
      {/* 1 · Hero Principal Animado e Independiente */}
      <LandingHero
        tone="charcoal"
        fillViewport
        image={{
          src: '/img/03/03-compra-intensivo__hero-fundadores-sesion-vivo.png',
          alt: 'Magic Capital — Elige tu formato',
          focal: '50% 35%',
          scrim: 'full',
        }}
        banner={{ src: LANDING_BANNER['03'], alt: 'Magic Capital — Comparativa', ratio: '4x5' }}
        kicker={<Kicker>Comparativa Oficial de Programas</Kicker>}
        title={<>Decide cómo quieres construir tu cartera de subastas.</>}
        sub={
          <>
            Dos caminos diseñados para operar en bienes raíces de forma segura. Elige entre aprender la metodología para operar de manera autónoma, o avanzar acompañado de forma privada 1:1.
          </>
        }
        actions={
          <CTAButton href="#comparativa-directa" icon={<Icon.ArrowRight />} magnetic>
            Comparar Planes y Precios
          </CTAButton>
        }
      />

      {/* 2 · Presentación de los Dos Caminos (Introducción e inducción propia) */}
      <Section tone="ivory" pad="md" texture={sectionBg('09-comunidad', 2)}>
        <Container>
          <SectionHeader
            kicker="El Enfoque"
            title="Autonomía en Grupo vs Acompañamiento 1:1"
            intro="Comprende la diferencia metodológica antes de tomar una decisión."
          />
          <div className="mt-8">
            <YesNoColumns
              left={{
                heading: 'Intensivo MAP-9 (Autonomía)',
                variant: 'positive',
                items: [
                  'Ideal si tienes disciplina para analizar de forma autónoma.',
                  'Aprendes el método en un fin de semana en vivo y grupal.',
                  'Herramientas y guías interactivas para que operes a tu propio ritmo.',
                  'Menor barrera de entrada para validar el modelo de subastas.',
                ],
              }}
              right={{
                heading: 'Mentoría Privada (Acompañamiento)',
                variant: 'positive',
                items: [
                  'Diseñado si buscas reducir errores caros de la mano de expertos.',
                  'Sesiones privadas 1:1 enfocadas 100% en tu perfil y capital.',
                  'Analizamos contigo 5 propiedades reales antes de pujar.',
                  'Acompañamiento diario para estructurar tu LLC y tu crédito al 0%.',
                ],
              }}
            />
          </div>
        </Container>
      </Section>

      {/* 3 · Tarjetas Comparativas y Compra Directa */}
      <Section id="comparativa-directa" tone="ivory-dim" pad="md" texture={sectionBg('03-compra-intensivo', 6)}>
        <Container>
          <SectionHeader
            kicker="Acceso Directo"
            title="Elige tu nivel de compromiso"
          />
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto items-stretch mt-8">
            
            {/* Tarjeta Intensivo */}
            <Reveal className="flex">
              <GlassCard tone="solid" className="flex flex-col justify-between w-full border border-white/10 hover:border-gold/30 transition-all p-7">
                <div>
                  <Kicker>Hazlo a tu ritmo</Kicker>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ivory">Intensivo MAP-9</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ivory/70 font-sans">
                    Aprende el método paso a paso en vivo durante un fin de semana completo y llévate las herramientas necesarias para empezar a operar por tu cuenta.
                  </p>
                  <div className="mt-6 font-display text-4xl font-bold text-gold-metallic">
                    $297
                  </div>
                  <p className="text-[12px] text-ivory/40 mt-1">Inversión única · Acceso inmediato al área de miembros</p>

                  <div className="h-px bg-white/10 my-6" />

                  <ul className="space-y-3 mb-8">
                    {['2 días prácticos en vivo', 'Guía interactiva MAP-9', 'Filtro forense de condados', 'Repeticiones de Q&A'].map((item) => (
                      <li key={item} className="flex gap-2.5 text-[13.5px] text-ivory/80">
                        <Icon.Check className="mt-0.5 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <CTAButton 
                  href="https://link.fastpaydirect.com/payment-link/6a4d2644c981f3feae6e7e2f" 
                  icon={<Icon.ArrowRight />} 
                  size="lg" 
                  className="w-full"
                  magnetic
                >
                  Reservar mi asiento ($297)
                </CTAButton>
              </GlassCard>
            </Reveal>

            {/* Tarjeta Mentoría */}
            <Reveal className="flex">
              <GlassCard tone="solid" className="flex flex-col justify-between w-full border border-gold/45 bg-gold/[0.03] shadow-gold-ring p-7">
                <div>
                  <div className="inline-flex self-start rounded-full bg-gold/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-gold-bright mb-3">
                    Acompañamiento 1:1
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-ivory">Mentoría Privada</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ivory/70 font-sans">
                    Trabaja directamente con Argenis y Carmen en tus subastas y crédito. Te estructuramos la empresa y te acompañamos hasta pujar con criterio real.
                  </p>
                  <div className="mt-6 font-display text-4xl font-bold text-gold-metallic">
                    $3,997
                  </div>
                  <p className="text-[12px] text-ivory/40 mt-1">Inversión única · Soporte directo e individual</p>

                  <div className="h-px bg-gold/25 my-6" />

                  <ul className="space-y-3 mb-8">
                    {['Sesiones privadas 1:1 individuales', 'Análisis de 5 propiedades reales tuyas', 'Estructuración de LLC y crédito al 0%', 'Acompañamiento hasta tu primera subasta'].map((item) => (
                      <li key={item} className="flex gap-2.5 text-[13.5px] text-ivory/80">
                        <Icon.Check className="mt-0.5 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <CTAButton 
                  href="https://link.fastpaydirect.com/payment-link/6a4d2612c981f3feae6e7e2d" 
                  variant="primary" 
                  icon={<Icon.ArrowRight />} 
                  size="lg" 
                  className="w-full"
                  magnetic
                >
                  Empezar mentoría ($3,997)
                </CTAButton>
              </GlassCard>
            </Reveal>

          </div>
        </Container>
      </Section>

      {/* 4 · Tabla Comparativa Detallada */}
      <Section tone="charcoal" pad="md">
        <Container width="narrow">
          <SectionHeader kicker="Comparativa rápida" title="Diferencias clave" />
          <Reveal className="mt-8">
            <GlassCard tone="dark" className="overflow-x-auto p-0">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-ivory/50 text-[12px] uppercase tracking-wider">
                    <th className="py-4 px-6 text-left">Característica</th>
                    <th className="py-4 px-4 w-1/4">Intensivo</th>
                    <th className="py-4 px-4 w-1/4">Mentoría 1:1</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {COMPARACION.map((row) => (
                    <tr key={row.feat} className="text-[13.5px] hover:bg-white/[0.01]">
                      <td className="py-3 px-6 text-left text-ivory/85 font-medium">{row.feat}</td>
                      <td className="py-3 px-4">
                        {typeof row.intensivo === 'boolean' ? (
                          row.intensivo ? <Icon.Check className="mx-auto text-gold text-lg" /> : <span className="text-white/20">—</span>
                        ) : (
                          <span className="text-ivory/65">{row.intensivo}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-semibold">
                        {typeof row.mentoria === 'boolean' ? (
                          row.mentoria ? <Icon.Check className="mx-auto text-gold text-lg" /> : <span className="text-white/20">—</span>
                        ) : (
                          <span className="text-gold">{row.mentoria}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* 5 · FAQ rápidas */}
      <Section tone="ivory-dim" pad="md" texture={sectionBg('03-compra-intensivo', 9)}>
        <Container width="narrow">
          <SectionHeader kicker="Dudas Comunes" title="Preguntas frecuentes" />
          <div className="mt-6">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>
    </LandingLayout>
  )
}
