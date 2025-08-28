import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Paragrafo from './paragrafo'
import CaixaTexto from './CaixaTexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Paragrafo nome="Duda"/>
    <CaixaTexto/>
  </StrictMode>,
)
