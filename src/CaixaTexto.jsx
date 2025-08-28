import { useState } from "react";

const CaixaTexto = () => {

    const [texto, setexto] = useState('')

    const gerenciaTexto = (event) => {
        setexto(event.target.value)
    }

    return (
        <div>
            <h3>Input</h3>

            <input type="text" value={texto} onChange={gerenciaTexto}/>
            <p>Você digitou: {texto}</p>
        </div>
    )

}

export default CaixaTexto