import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Paragrafo from './Paragrafo.jsx'
import CaixaTexto from './CaixaTexto.jsx'
import AppTarefas from './pages/tarefas/AppTarefas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Paragrafo nome="Duda"/>
    <CaixaTexto/> */}
    <App></App>
  </StrictMode>,
)
