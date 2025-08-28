import { useState, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nome, setNome] = useState("-")
  const [input, setInput] = useState()

  return (
    <>
      <h1>Seu nome atual é: {nome}</h1>

      <div>
        <input
          placeholder='digite seu nome'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => setNome(input)}>ENVIAR NOVO NOME</button>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
