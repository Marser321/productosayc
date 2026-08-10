import { useLocation } from 'react-router-dom'
import { Container } from '../primitives/Container'
import { Logo } from '../primitives/Logo'
import { DEADLINES } from '../../content/brand'
import { cn } from '../../lib/cn'

/**
 * Cabecera de marca: el logo de Magic Capital, presente en TODAS las páginas
 * (incluidas las de gracias, que no montan `LandingHero`). Va en el FLUJO normal
 * —no fija— para no robarle pantalla al hero ni tapar contenido al hacer scroll.
 *
 * La `UrgencyBar` sí es fija: cuando la ruta tiene deadline, esta barra reserva
 * su altura arriba (50 px móvil / 54 px sm+) para quedar justo debajo.
 *
 * A propósito NO es un enlace: en un funnel, un logo clicable es una puerta de
 * salida desde la página de gracias o de checkout.
 */
export function BrandBar() {
  const { pathname } = useLocation()
  const hasBar = Boolean(DEADLINES[pathname])

  return (
    <div
      className={cn(
        'relative z-30 border-b border-gold/15 bg-midnight/85 backdrop-blur-md',
        hasBar && 'pt-[50px] sm:pt-[54px]',
      )}
    >
      <Container className="flex h-14 items-center justify-center sm:h-16 sm:justify-start">
        <Logo size="sm" />
      </Container>
    </div>
  )
}
