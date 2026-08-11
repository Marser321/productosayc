import { CTAButton, Icon } from '../primitives'

/**
 * CTA de pago que se niega a cobrar mal: sin link configurado no navega a
 * ningún lado y lo dice en pantalla, en vez de caer al link del precio viejo.
 * Los links viven en `content/pagos.ts`.
 */
export function PagoCTA({
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
