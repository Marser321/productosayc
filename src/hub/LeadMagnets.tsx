import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, DisplayHeading, Kicker, Badge, CTAButton, Footnote, Icon } from '../components/primitives'
import { Reveal, Stagger, RevealItem } from '../components/motion'
import { Img } from '../components/media'
import { Footer, FloatingWhatsApp } from '../components/shell'
import { LEAD_MAGNETS } from '../content/lead-magnets'
import { FOUNDERS } from '../content/brand'
import { lm } from '../content/images'
import { cn } from '../lib/cn'

export default function LeadMagnets() {
  const [sent, setSent] = useState<Set<string>>(new Set())
  const argenis = LEAD_MAGNETS.filter((m) => m.autor === 'argenis')
  const carmen = LEAD_MAGNETS.filter((m) => m.autor === 'carmen')

  function markSent(id: string) {
    setSent((prev) => new Set(prev).add(id))
  }

  function Grid({ items }: { items: typeof LEAD_MAGNETS }) {
    return (
      <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
        {items.map((m) => (
          <RevealItem key={m.id}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-soft shadow-glass-dark">
              <div className={cn('overflow-hidden', m.ratio === '4x5' ? 'aspect-[4/5]' : 'aspect-video')}>
                <Img src={lm(m.file)} alt={m.title} kenBurns={false} className="h-full w-full" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2">
                  <Badge tone={m.autor === 'argenis' ? 'petrol' : 'olive'}>{m.formato}</Badge>
                </div>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ivory">{m.title}</h3>
                {m.note && (
                  <div className="mt-2">
                    <Footnote>{m.note}</Footnote>
                  </div>
                )}
                <div className="mt-auto pt-4">
                  {sent.has(m.id) ? (
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold">
                      <Icon.Check /> Enviado (demo)
                    </span>
                  ) : (
                    <CTAButton variant="secondary" size="md" onClick={() => markSent(m.id)} icon={<Icon.ArrowRight />}>
                      Descargar gratis
                    </CTAButton>
                  )}
                </div>
              </div>
            </div>
          </RevealItem>
        ))}
      </Stagger>
    )
  }

  return (
    <div className="min-h-screen bg-midnight">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-midnight/80 backdrop-blur-md">
        <Container className="flex items-center justify-between py-3">
          <Link to="/" className="inline-flex items-center gap-2 text-[13px] font-semibold text-ivory/80 hover:text-ivory">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-b from-gold-bright to-gold-deep text-[13px] font-bold text-midnight">M</span>
            <span className="text-ivory/55">·</span> Hub
          </Link>
        </Container>
      </header>

      <section className="bg-charcoal text-ivory grain">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <Kicker>Tope del funnel · gratis</Kicker>
            <DisplayHeading as="h1" size="lg" className="mt-3 max-w-2xl">
              10 recursos para empezar con criterio
            </DisplayHeading>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ivory/70">
              Cinco de {FOUNDERS.argenis.short} (la oportunidad) y cinco de {FOUNDERS.carmen.short} (el capital).
              Educación, no promesas.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Kicker>{FOUNDERS.argenis.name} · la oportunidad</Kicker>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ivory">Subastas tax deed</h2>
          <Grid items={argenis} />
        </Container>
      </section>

      <section className="bg-navy py-16">
        <Container>
          <Kicker>{FOUNDERS.carmen.name} · el capital</Kicker>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ivory">Crédito empresarial / financiamiento 0%</h2>
          <Grid items={carmen} />
        </Container>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
