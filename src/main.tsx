import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/geist'
import '@fontsource-variable/fraunces'
import './index.css'
import App from './App'
import { initEmbedHeightReporter } from './embed'

// Auto-ajuste de altura cuando el sitio se muestra embebido en el funnel del CRM.
initEmbedHeightReporter()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
