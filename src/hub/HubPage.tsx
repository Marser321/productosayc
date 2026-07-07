import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, DisplayHeading, Kicker, Badge, CTAButton, Icon } from '../components/primitives'
import { Reveal, Stagger, RevealItem } from '../components/motion'
import { Img, Spotlight } from '../components/media'
import { Footer, FloatingWhatsApp } from '../components/shell'
import { LANDINGS, kindLabel } from '../content/registry'
import { LEAD_MAGNETS } from '../content/lead-magnets'
import { BRAND, CONTACT } from '../content/brand'
import { DEMO_NOTE } from '../content/compliance'
import { bg, lm } from '../content/images'
import { cn } from '../lib/cn'

export default function HubPage() {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)

  // Copia la URL pública de la landing al portapapeles (para compartir cada una suelta).
  const copyLink = (slug: string, route: string) => {
    const url = window.location.origin + route
    const done = () => {
      setCopiedSlug(slug)
      window.setTimeout(() => setCopiedSlug((s) => (s === slug ? null : s)), 1600)
    }
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).then(done).catch(() => {})
    } else {
      done()
    }
  }

  return (
    <div className="min-h-screen bg-midnight">
      {/* Header del hub */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-midnight/80 backdrop-blur-md">
        <Container className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-b from-gold-bright to-gold-deep text-sm font-bold text-midnight">M</span>
            <span className="font-display text-[15px] font-semibold text-ivory">{BRAND.name}</span>
          </div>
          <a href={CONTACT.deckUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-ivory/70 hover:text-ivory">
            Deck de la masterclass ↗
          </a>
        </Container>
      </header>

      {/* Hero del hub */}
      <section className="relative isolate overflow-hidden bg-charcoal text-ivory grain">
        <Spotlight />
        <Container className="relative z-10 py-20 sm:py-28">
          <Reveal>
            <Kicker>Magic Capital · el recorrido completo</Kicker>
            <DisplayHeading as="h1" size="xl" className="mt-4 max-w-3xl">
              Todas las páginas de Magic Capital, en un solo lugar.
            </DisplayHeading>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ivory/75">
              De la autoridad a la masterclass, la comunidad, el intensivo y la mentoría. Abre cualquiera
              para recorrerla, o copia su enlace para compartirla por separado.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge tone="ivory"><Icon.Check /> 8 páginas</Badge>
              <Badge tone="ivory"><Icon.Check /> 10 lead magnets</Badge>
              <Badge tone="ivory"><Icon.Check /> Mobile-first</Badge>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold/15 px-3.5 py-1.5 text-[12.5px] text-gold">
              <Icon.Lock /> {DEMO_NOTE}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* El recorrido — las páginas */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <Kicker>El recorrido</Kicker>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ivory sm:text-3xl">
                Las páginas del funnel
              </h2>
            </div>
            <span className="hidden text-[13px] text-ivory/55 sm:inline">En orden de embudo →</span>
          </div>

          <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LANDINGS.map((l) => (
              <RevealItem key={l.slug}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-soft shadow-glass-dark transition-all hover:-translate-y-1 hover:shadow-cta">
                  <Link to={l.route} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Img
                        src={l.thumb}
                        alt={l.title}
                        kenBurns={false}
                        className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                        focal="50% 35%"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-lg bg-charcoal/70 font-display text-[13px] font-bold text-ivory backdrop-blur">
                        {l.num}
                      </span>
                      {l.price && (
                        <span className="absolute right-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[12px] font-semibold text-midnight">
                          {l.price}
                        </span>
                      )}
                      <span className="absolute bottom-3 left-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-ivory/90">
                        {kindLabel(l.kind)}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold text-ivory">{l.title}</h3>
                      <p className="mt-1 text-[13.5px] leading-snug text-ivory/65">{l.subtitle}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold">
                        Ver landing <Icon.ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-white/10 px-5 py-3">
                    <span className="truncate font-mono text-[12px] text-ivory/45">{l.route}</span>
                    <button
                      type="button"
                      onClick={() => copyLink(l.slug, l.route)}
                      aria-label={`Copiar enlace de ${l.title}`}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1.5 text-[12.5px] font-semibold text-gold transition-colors hover:bg-gold/10"
                    >
                      {copiedSlug === l.slug ? (
                        <>
                          <Icon.Check /> ¡Copiado!
                        </>
                      ) : (
                        'Copiar enlace'
                      )}
                    </button>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Lead magnets */}
      <section className="bg-navy py-16 sm:py-20">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <Kicker>Tope del funnel</Kicker>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ivory sm:text-3xl">
                10 lead magnets gratis
              </h2>
            </div>
            <CTAButton to="/lead-magnets" variant="secondary" size="md" icon={<Icon.ArrowRight />}>
              Ver todos
            </CTAButton>
          </div>
          <Stagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" gap={0.05}>
            {LEAD_MAGNETS.map((m) => (
              <RevealItem key={m.id}>
                <Link to="/lead-magnets" className="group block">
                  <div className={cn('overflow-hidden rounded-xl border border-white/10 bg-navy-soft shadow-glass-dark', m.ratio === '4x5' ? 'aspect-[4/5]' : 'aspect-video')}>
                    <Img src={lm(m.file)} alt={m.title} kenBurns={false} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="mt-2 text-[12.5px] font-medium leading-snug text-ivory/75">{m.title}</p>
                  <span className={cn('text-[11px] font-semibold uppercase tracking-[0.1em]', m.autor === 'argenis' ? 'text-gold' : 'text-gold-bright')}>
                    {m.autor}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Deck */}
      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal text-ivory">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <img
                src={bg('fondo__ledger-legal-oscuro-16x9.png')}
                alt=""
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
                className="h-full w-full object-cover opacity-[0.08]"
              />
            </div>
            <div className="relative z-10 grid items-center gap-6 p-8 sm:grid-cols-[1fr_auto] sm:p-10">
              <div>
                <Kicker>Proyecto hermano</Kicker>
                <h2 className="mt-2 font-display text-2xl font-semibold">Deck de la masterclass</h2>
                <p className="mt-2 max-w-xl text-[14.5px] leading-snug text-ivory/70">
                  La presentación en vivo de la masterclass (23 slides, 5 actos), como sitio aparte.
                </p>
              </div>
              <CTAButton href={CONTACT.deckUrl} variant="light" icon={<Icon.ArrowUpRight />}>
                Abrir el deck
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
