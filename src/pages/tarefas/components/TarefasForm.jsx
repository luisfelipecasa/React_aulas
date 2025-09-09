import { useState } from "react";

const TarefasForm = ({ onAddTarefa }) => {
  const [tarefa, setTarefa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarefa.trim()) {
      onAddTarefa(tarefa.trim());
      setTarefa("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 mb-4"
    >
      <input
        type="text"
        placeholder="Digite sua tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors"
      >
        Adicionar
      </button>
    </form>
  );
};

export default TarefasForm;
