import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import AppTarefas from './pages/tarefas/AppTarefas'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
          {/* Navbar */}
          <nav className="bg-gray-200 border-b-1 border-gray-300">
            <ul className="flex space-x-6 px-6 py-4 font-medium">
              <li>
                <Link
                  to="/"
                  className="transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/apptarefas"
                  className="transition-colors"
                >
                  App Tarefas
                </Link>
              </li>
            </ul>
          </nav>

          {/* Conteúdo */}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/apptarefas" element={<AppTarefas />} />
            </Routes>
          </main>

        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
