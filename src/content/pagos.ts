// ─────────────────────────────────────────────────────────────────────────
//  PRECIOS Y LINKS DE PAGO — fuente única para todo el sitio.
//
//  Antes cada landing traía su propio número y su propio link hardcodeado, y el
//  precio de la Mentoría llegó a convivir en tres versiones distintas según la
//  página. Todo lo que cobre o muestre un precio se importa de acá.
//
//  Estado 2026-08-11 (decisión del cliente):
//   · Mentoría 1:1 → $10,000, SIN oferta ni precio tachado (esta vez no hay
//     descuento por venir de la masterclass) y SIN financiación propia.
//   · Intensivo MAP-9 → $347 (antes $297).
// ─────────────────────────────────────────────────────────────────────────

/** Montos en dólares. `fmt` los pinta con separador de miles. */
export const PRECIO = {
  mentoria: 10000,
  intensivo: 347,
  comunidad: 27,
} as const

export const fmt = (n: number) => `$${n.toLocaleString('en-US')}`

/**
 * Checkouts de FastPayDirect.
 *
 * ⚠ `mentoria` e `intensivo` están VACÍOS a propósito: los links que había
 * cobraban los montos viejos ($4,997 y $297) y las páginas ya muestran $10,000 y
 * $347. Con el link vacío, `PagoCTA` deshabilita el botón y lo dice en pantalla
 * en vez de mandar a cobrar el precio equivocado. Cablear acá —y solo acá— los
 * links nuevos apenas el cliente los cree.
 */
export const PAY = {
  /** "Mentoría 1:1 Pago único": $10,000 (+ Klarna/Afterpay). PENDIENTE. */
  mentoria: '',
  /** "Intensivo MAP 9": pago único de $347. PENDIENTE. */
  intensivo: '',
  /** Comunidad $27/mes: sin cambio de precio, link vivo. */
  comunidad: 'https://link.fastpaydirect.com/payment-link/6a4d286aa655fa0b802a3179',
} as const
