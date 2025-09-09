import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Home = () => {

    const { theme } = useContext(ThemeContext)

    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Página Inicial {theme}
        </h2>
        <p className="text-lg text-gray-700 max-w-xl">
          Bem-vindo à nossa página inicial! Aqui você encontra informações
          importantes e acesso rápido às seções do aplicativo.
        </p>
      </div>
    )
  }
  
  export default Home
  