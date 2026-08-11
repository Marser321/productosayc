import { createBrowserRouter, Link, Navigate } from 'react-router-dom'
import Comunidad from './landings/Comunidad'
import CompraIntensivo from './landings/CompraIntensivo'
import CompraMentoria from './landings/CompraMentoria'
import CompararOfertas from './landings/CompararOfertas'
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

  // Comparativa de Ofertas (Intensivo vs Mentoria)
  { path: '/comparar', element: <CompararOfertas /> },

  // Página completa: las 3 ofertas concentradas (Comunidad + Intensivo + Mentoría)
  { path: '/ofertas', element: <OfertasCompletas /> },

  // Intensivo MAP-9
  { path: '/intensivo', element: <CompraIntensivo /> },

  // Mentoría 1:1
  { path: '/mentoria', element: <CompraMentoria /> },

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
  { path: '/l/05-mentoria', element: <Navigate to="/mentoria" replace /> },
  { path: '/l/06-gracias-mentoria', element: <Navigate to="/gracias" replace /> },

  { path: '*', element: <NotFound /> },
], {
  future: { v7_relativeSplatPath: true },
})
