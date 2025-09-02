import { useState } from "react";
import TarefasForm from "./TarefasForm";
import TarefasLista from "./TarefasLista"

const AppTarefas = () => {
    const [tarefas, setTarefas] = useState([]);

    const addTarefa = (texto) => {
        const novaTarefa = {
            id: Date.now(),
            texto: texto,
        }

        setTarefas([...tarefas, novaTarefa]);
    }

    return (
        <div>
            <h1>☆*: .｡. o(≧▽≦)o .｡.:*☆ Keepão React</h1>
            <TarefasForm onAddTarefa={addTarefa}/>
            <TarefasLista tarefas={tarefas}/>
        </div>
    );
}

export default AppTarefas;