// Auto-ajuste de altura para cuando una página del sitio se muestra EMBEBIDA
// en un iframe (p. ej. dentro del funnel del CRM). El sitio le avisa su alto
// real al contenedor padre por `postMessage`, y el snippet de embed del CRM lo
// usa para fijar la altura del iframe. Así la página se ve a ancho completo,
// sin scroll interno y sin cortes. No hace absolutamente nada cuando la página
// se abre directamente (fuera de un iframe).

const MESSAGE_TYPE = 'mc-embed-height'

function isInIframe(): boolean {
  try {
    return window.self !== window.top
  } catch {
    // Un cross-origin frame lanza al comparar: si lanza, estamos embebidos.
    return true
  }
}

export function initEmbedHeightReporter(): void {
  if (typeof window === 'undefined' || !isInIframe()) return

  // Marca disponible por si en el futuro queremos ajustes de estilo al embeber.
  document.documentElement.classList.add('is-embedded')

  let lastSent = 0
  let timer = 0

  // Medimos el <body>, NO el <documentElement>: `documentElement.scrollHeight`
  // nunca baja del alto del viewport (= alto del iframe), así que crearía un
  // bucle y el iframe se quedaría clavado en su alto inicial. `body.scrollHeight`
  // sí refleja el alto REAL del contenido, y permite encoger el iframe.
  const measure = (): number => {
    const b = document.body
    if (!b) return 0
    return Math.ceil(Math.max(b.scrollHeight, b.offsetHeight, b.getBoundingClientRect().height))
  }

  const post = (): void => {
    const height = measure()
    if (!height || Math.abs(height - lastSent) < 2) return
    lastSent = height
    window.parent.postMessage({ type: MESSAGE_TYPE, height }, '*')
  }

  // Debounce con setTimeout (NO requestAnimationFrame: rAF se pausa cuando el
  // iframe no es el contexto visible/activo, p. ej. bajo el pliegue del CRM, y
  // dejaría de reportar la altura).
  const schedule = (): void => {
    if (timer) return
    timer = window.setTimeout(() => {
      timer = 0
      post()
    }, 60)
  }

  // El observador de tamaño cubre la mayoría de los cambios (secciones que
  // montan al hacer scroll-reveal, imágenes que cargan, cambios de viewport).
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(schedule)
    ro.observe(document.documentElement)
    if (document.body) ro.observe(document.body)
  }

  // Cambios estructurales del DOM (navegación entre rutas del SPA).
  const mo = new MutationObserver(schedule)
  mo.observe(document.documentElement, { childList: true, subtree: true })

  window.addEventListener('load', schedule)
  window.addEventListener('resize', schedule)
  window.addEventListener('orientationchange', schedule)
  // Las fuentes web cambian el alto del texto al terminar de cargar.
  document.fonts?.ready?.then(schedule).catch(() => {})

  // Chequeo periódico permanente como red de seguridad: cubre casos donde los
  // observadores no disparan (p. ej. el ancho del iframe cambia por CSS del
  // CRM sin emitir un `resize` al hijo). `post()` solo envía cuando la altura
  // cambia de verdad, así que el costo es mínimo. Arranca rápido y se relaja.
  let ticks = 0
  window.setInterval(() => {
    ticks++
    // Cada 200ms el primer segundo (carga inicial), luego cada ~1s.
    if (ticks <= 5 || ticks % 5 === 0) schedule()
  }, 200)

  schedule()
}
