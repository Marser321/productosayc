import { createBrowserRouter, Link } from 'react-router-dom'
import HubPage from './hub/HubPage'
import LeadMagnets from './hub/LeadMagnets'
import Autoridad from './landings/Autoridad'
import ReservaMasterclass from './landings/ReservaMasterclass'
import GraciasReserva from './landings/GraciasReserva'
import Comunidad from './landings/Comunidad'
import CompraIntensivo from './landings/CompraIntensivo'
import GraciasIntensivo from './landings/GraciasIntensivo'
import CompraMentoria from './landings/CompraMentoria'
import GraciasMentoria from './landings/GraciasMentoria'

function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-ivory px-6 text-center">
      <div>
        <p className="font-display text-5xl font-semibold text-charcoal">404</p>
        <p className="mt-2 text-smoke">Esta página no existe en el funnel.</p>
        <Link to="/" className="mt-5 inline-block rounded-full bg-petrol px-6 py-3 font-semibold text-ivory">
          Volver al hub
        </Link>
      </div>
    </div>
  )
}

export const router = createBrowserRouter([
  { path: '/', element: <HubPage /> },
  { path: '/lead-magnets', element: <LeadMagnets /> },
  { path: '/l/07-autoridad', element: <Autoridad /> },
  { path: '/l/01-reserva', element: <ReservaMasterclass /> },
  { path: '/l/02-gracias-reserva', element: <GraciasReserva /> },
  { path: '/l/09-comunidad', element: <Comunidad /> },
  { path: '/l/03-intensivo', element: <CompraIntensivo /> },
  { path: '/l/04-gracias-intensivo', element: <GraciasIntensivo /> },
  { path: '/l/05-mentoria', element: <CompraMentoria /> },
  { path: '/l/06-gracias-mentoria', element: <GraciasMentoria /> },
  { path: '*', element: <NotFound /> },
], {
  // Opt-in temprano a los future flags de v7 (silencia warnings en consola).
  future: { v7_relativeSplatPath: true },
})
