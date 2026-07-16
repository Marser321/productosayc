import { createBrowserRouter, Link, Navigate } from 'react-router-dom'
import Comunidad from './landings/Comunidad'
import GraciasComunidad from './landings/GraciasComunidad'
import CompraIntensivo from './landings/CompraIntensivo'
import GraciasIntensivo from './landings/GraciasIntensivo'
import CompraMentoria from './landings/CompraMentoria'
import GraciasMentoria from './landings/GraciasMentoria'
import CompararOfertas from './landings/CompararOfertas'
import OfertasCompletas from './landings/OfertasCompletas'

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
  { path: '/gracias-comunidad', element: <GraciasComunidad /> },
  
  // Comparativa de Ofertas (Intensivo vs Mentoria)
  { path: '/comparar', element: <CompararOfertas /> },

  // Página completa: las 3 ofertas concentradas (Comunidad + Intensivo + Mentoría)
  { path: '/ofertas', element: <OfertasCompletas /> },
  
  // Intensivo MAP-9
  { path: '/intensivo', element: <CompraIntensivo /> },
  { path: '/gracias-intensivo', element: <GraciasIntensivo /> },
  
  // Mentoría 1:1
  { path: '/mentoria', element: <CompraMentoria /> },
  { path: '/gracias-mentoria', element: <GraciasMentoria /> },
  
  // Redirects heredados
  { path: '/l/09-comunidad', element: <Navigate to="/" replace /> },
  { path: '/l/03-intensivo', element: <Navigate to="/intensivo" replace /> },
  { path: '/l/04-gracias-intensivo', element: <Navigate to="/gracias-intensivo" replace /> },
  { path: '/l/05-mentoria', element: <Navigate to="/mentoria" replace /> },
  { path: '/l/06-gracias-mentoria', element: <Navigate to="/gracias-mentoria" replace /> },
  
  { path: '*', element: <NotFound /> },
], {
  future: { v7_relativeSplatPath: true },
})
