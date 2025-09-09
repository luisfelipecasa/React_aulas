import TarefasItem from "./TarefasItem";

const TarefasLista = ({ tarefas, onDeleteTarefa, onEditTarefa }) => {
  return (
    <div className="mt-4 w-full">
      {tarefas.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          Nenhuma tarefa adicionada ainda.
        </p>
      ) : (
        <ul className="space-y-2">
          {tarefas.map((tarefa) => (
            <TarefasItem
              key={tarefa.id}
              tarefa={tarefa}
              onEditTarefa={onEditTarefa}
              onDeleteTarefa={onDeleteTarefa}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TarefasLista;
