import { useId } from 'react'
import { cn } from '../../lib/cn'
import { BRAND } from '../../content/brand'

// ─────────────────────────────────────────────────────────────────────────
//  LOGO — fuente única de la identidad visual de Magic Capital.
//  El isotipo son los tres galones ascendentes (mismo trazado que
//  `public/favicon.svg`: si se toca uno, tocar el otro). Aquí va vectorial e
//  inline para que herede el degradado dorado metálico de la marca y escale
//  sin pérdida en hero, pie y barra.
// ─────────────────────────────────────────────────────────────────────────

export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type LogoTone = 'gold' | 'ivory' | 'navy'

/** Alturas del isotipo (px) y tamaño tipográfico del logotipo por escala. */
const SIZE: Record<LogoSize, { mark: string; word: string; gap: string; tagline: string }> = {
  xs: { mark: 'h-5', word: 'text-[15px]', gap: 'gap-2', tagline: 'text-[9px]' },
  sm: { mark: 'h-7', word: 'text-[19px]', gap: 'gap-2.5', tagline: 'text-[10px]' },
  md: { mark: 'h-10', word: 'text-[26px]', gap: 'gap-3', tagline: 'text-[11px]' },
  lg: { mark: 'h-14 sm:h-16', word: 'text-[32px] sm:text-[38px]', gap: 'gap-3.5', tagline: 'text-[11.5px]' },
  xl: { mark: 'h-20 sm:h-24', word: 'text-[42px] sm:text-[52px]', gap: 'gap-4', tagline: 'text-[12px]' },
}

/** Isotipo suelto (sin texto) — para favicons en línea, chips y esquinas. */
export function LogoMark({
  className,
  tone = 'gold',
  label,
}: {
  className?: string
  tone?: LogoTone
  /** Si el isotipo va SIN texto al lado, nombra la marca para lectores de pantalla. */
  label?: string
}) {
  // `useId` devuelve algo como ":r3:" — los dos puntos rompen `url(#id)`.
  const gid = `mc-gold-${useId().replace(/:/g, '')}`
  const fill =
    tone === 'gold' ? `url(#${gid})` : tone === 'ivory' ? '#F7F5F0' : '#0F2036'

  return (
    <svg
      viewBox="215 165 594 550"
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      className={cn('block w-auto', className)}
    >
      {tone === 'gold' && (
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E3C77A" />
            <stop offset="52%" stopColor="#C9A24B" />
            <stop offset="100%" stopColor="#937234" />
          </linearGradient>
        </defs>
      )}
      <g fill={fill}>
        <polygon points="215,330 512,165 809,330 809,470 512,305 215,470" />
        <polygon points="215,510 512,345 809,510 809,650 512,485 215,650" />
        <polygon points="340,620 512,525 684,620 684,715 512,620 340,715" />
      </g>
    </svg>
  )
}

/**
 * Lockup completo: isotipo + logotipo (y opcionalmente la línea de descriptor).
 *
 * - `layout='row'`  → isotipo a la izquierda del nombre (barras, pies compactos).
 * - `layout='stack'` → isotipo encima del nombre, centrado (hero, portada, pie).
 *
 * Accesibilidad: el nombre va en texto real, así que el SVG es decorativo. Si se
 * oculta el logotipo (`showWordmark={false}`) el conjunto recibe `aria-label`.
 */
export function Logo({
  size = 'md',
  layout = 'row',
  tone = 'gold',
  showWordmark = true,
  tagline = false,
  accent = true,
  className,
}: {
  size?: LogoSize
  layout?: 'row' | 'stack'
  tone?: LogoTone
  showWordmark?: boolean
  /** Añade el descriptor de marca bajo el nombre (versión corta del tagline). */
  tagline?: boolean
  /** "Capital" en dorado metálico; con `false` todo el nombre va en marfil. */
  accent?: boolean
  className?: string
}) {
  const s = SIZE[size]
  const stacked = layout === 'stack'
  const [first, ...rest] = BRAND.name.split(' ')
  const second = rest.join(' ')

  if (!showWordmark) {
    return <LogoMark tone={tone} label={BRAND.name} className={cn(s.mark, className)} />
  }

  return (
    <div
      className={cn(
        'flex',
        stacked ? 'flex-col items-center text-center' : 'flex-row items-center',
        s.gap,
        className,
      )}
    >
      <LogoMark tone={tone} className={s.mark} />
      <div className={cn('flex flex-col', stacked ? 'items-center' : 'items-start')}>
        <span
          className={cn(
            'font-display font-semibold leading-none tracking-tightest text-ivory',
            s.word,
          )}
        >
          {first}{' '}
          <span className={accent ? 'text-gold-metallic' : undefined}>{second}</span>
        </span>
        {tagline && (
          <span
            className={cn(
              'mt-1.5 font-sans font-medium uppercase leading-none tracking-[0.22em] text-ivory/45',
              s.tagline,
            )}
          >
            Subastas tax deed · Crédito empresarial
          </span>
        )}
      </div>
    </div>
  )
}
