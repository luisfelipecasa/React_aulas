import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
    const {theme} = useContext(ThemeContext);
    
    return (
        <div className={theme}>
            <h2>Página Inicial {theme} </h2>
            <p>Bem-vindos à página inicial desta aplicação gloriosa!</p>
        </div>
    )
}

export default Home;