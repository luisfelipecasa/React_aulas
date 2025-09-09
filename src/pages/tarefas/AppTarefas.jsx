import { useState } from "react";
import TarefasForm from "./components/TarefasForm";
import TarefasLista from "./components/TarefasLista";

const AppTarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  const addTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto: texto,
    };

    setTarefas([...tarefas, novaTarefa]);
  };

  const editTarefa = (id, novoTexto) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, texto: novoTexto } : tarefa
      )
    );
  };

  const deleteTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        ☆*: .｡. o(≧▽≦)o .｡.:*☆ <br /> Keepão React
      </h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <TarefasForm onAddTarefa={addTarefa} />
        <TarefasLista
          tarefas={tarefas}
          onEditTarefa={editTarefa}
          onDeleteTarefa={deleteTarefa}
        />
      </div>
    </div>
  );
};

export default AppTarefas;
