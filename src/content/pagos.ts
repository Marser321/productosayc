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
//
//  Estado 2026-10-13: Intensivo MAP-9 → $497 (antes $347) y la Mentoría 1:1
//  deja de ofrecerse — el Intensivo es la única oferta post-masterclass.
// ─────────────────────────────────────────────────────────────────────────

/** Montos en dólares. `fmt` los pinta con separador de miles. */
export const PRECIO = {
  intensivo: 497,
  comunidad: 27,
} as const

export const fmt = (n: number) => `$${n.toLocaleString('en-US')}`

/**
 * Checkouts de FastPayDirect.
 *
 * El cliente cambió el monto DENTRO del producto, así que los IDs son los
 * mismos de siempre. Verificado abriendo cada checkout el 2026-08-11: Mentoría
 * "Total $10,000.00", Intensivo "Total $347.00" (pasa a $497 el 2026-10-13: mismo link,
 * el monto se cambia dentro del producto). El listado del CRM no muestra
 * el monto real — hay que abrir el link para confirmarlo.
 *
 * Si un link queda vacío, `PagoCTA` deshabilita el botón y lo dice en pantalla
 * en vez de mandar a cobrar el precio equivocado.
 */
export const PAY = {
  /** "Intensivo MAP-9": pago único de $497. */
  intensivo: 'https://link.fastpaydirect.com/payment-link/6a4d2644c981f3feae6e7e2f',
  /** Comunidad $27/mes: sin cambio de precio, link vivo. */
  comunidad: 'https://link.fastpaydirect.com/payment-link/6a4d286aa655fa0b802a3179',
} as const
