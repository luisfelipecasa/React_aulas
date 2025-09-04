import TarefasItem from "./TarefasItem"

const TarefasLista = ({ tarefas, onDeleteTarefa, onEditTarefa }) => {
    return (
        <ul>
            {tarefas.map((tarefa) => (
                <TarefasItem
                    key={tarefa.id}
                    tarefa={tarefa}
                    onEditTarefa={onEditTarefa}
                    onDeleteTarefa={onDeleteTarefa}
                />
            ))}
        </ul>
    )
}

export default TarefasLista