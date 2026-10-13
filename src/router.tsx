import { createBrowserRouter, Link, Navigate } from 'react-router-dom'
import Comunidad from './landings/Comunidad'
import CompraIntensivo from './landings/CompraIntensivo'
import OfertasCompletas from './landings/OfertasCompletas'
import Gracias from './landings/Gracias'

function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-midnight px-6 text-center">
      <div>
        <p className="font-display text-5xl font-semibold text-ivory">404</p>
        <p className="mt-2 text-ivory/60">Esta página no existe.</p>
        <Link to="/" className="mt-5 inline-block rounded-full bg-gradient-to-b from-gold-bright via-gold to-gold-deep px-6 py-3 font-semibold text-midnight">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export const router = createBrowserRouter([
  // Comunidad
  { path: '/', element: <Comunidad /> },
  { path: '/comunidad', element: <Navigate to="/" replace /> },

  // Oferta post-masterclass: el Intensivo MAP-9 como única oferta.
  { path: '/ofertas', element: <OfertasCompletas /> },

  // Intensivo MAP-9
  { path: '/intensivo', element: <CompraIntensivo /> },

  // La Mentoría 1:1 dejó de ofrecerse (2026-10-13): sus rutas y la comparativa
  // Intensivo vs Mentoría van a la oferta única.
  { path: '/mentoria', element: <Navigate to="/ofertas" replace /> },
  { path: '/comparar', element: <Navigate to="/ofertas" replace /> },

  // Página de gracias ÚNICA para todos los productos (genérica, sin WhatsApp).
  { path: '/gracias', element: <Gracias /> },
  // Rutas de gracias por-producto heredadas → todas apuntan a la única.
  { path: '/gracias-comunidad', element: <Navigate to="/gracias" replace /> },
  { path: '/gracias-intensivo', element: <Navigate to="/gracias" replace /> },
  { path: '/gracias-mentoria', element: <Navigate to="/gracias" replace /> },

  // Redirects heredados
  { path: '/l/09-comunidad', element: <Navigate to="/" replace /> },
  { path: '/l/03-intensivo', element: <Navigate to="/intensivo" replace /> },
  { path: '/l/04-gracias-intensivo', element: <Navigate to="/gracias" replace /> },
  { path: '/l/05-mentoria', element: <Navigate to="/ofertas" replace /> },
  { path: '/l/06-gracias-mentoria', element: <Navigate to="/gracias" replace /> },

  { path: '*', element: <NotFound /> },
], {
  future: { v7_relativeSplatPath: true },
})
