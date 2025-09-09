import { useState } from "react";

const TarefasItem = ({ tarefa, onDeleteTarefa, onEditTarefa }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [novoTexto, setNovoTexto] = useState(tarefa.texto);

  const handleEdit = () => {
    if (isEditing) {
      if (novoTexto.trim()) {
        onEditTarefa(tarefa.id, novoTexto);
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleDelete = () => {
    onDeleteTarefa(tarefa.id);
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2 mb-2 shadow-sm">
      {isEditing ? (
        <input
          type="text"
          value={novoTexto}
          onChange={(e) => setNovoTexto(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleEdit();
          }}
          className="flex-1 border border-gray-300 rounded-lg px-2 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      ) : (
        <span className="flex-1 text-gray-800">{tarefa.texto}</span>
      )}

      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="px-2 py-1 text-sm bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors"
        >
          ✏️
        </button>
        <button
          onClick={handleDelete}
          className="px-2 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          🗑️
        </button>
      </div>
    </li>
  );
};

export default TarefasItem;
