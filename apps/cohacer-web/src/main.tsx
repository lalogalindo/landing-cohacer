import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// ✅ fuerza a Vite a incluir el CSS del paquete (no depende de @import en CSS)
import '@cohacer/theme/palettes/amarillo-cohacer.css'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)