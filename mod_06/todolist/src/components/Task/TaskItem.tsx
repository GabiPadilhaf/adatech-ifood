import React, { useState } from 'react';
import Task from '../../types/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: number) => void;
  onDelete: (taskId: number) => void;
  onEdit: (taskId: number, updatedTask: Task) => void; // Adiciona a função de edição
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false); // Estado para controlar a edição
  const [editedTask, setEditedTask] = useState(task); // Estado para armazenar os dados editados

  const handleEdit = () => {
    // Atualiza a tarefa editada no estado
    setEditedTask(prevTask => ({ ...prevTask, completed: task.completed }));
    // Chama a função onEdit passando o ID da tarefa e os detalhes editados
    onEdit(task.id, editedTask);
    // Desativa o modo de edição após salvar
    setEditing(false);
  };

  return (
    <li>
      {editing ? ( // Renderiza os campos de edição se estiver no modo de edição
        <div>
          <input 
            type="text"
            value={editedTask.title}
            onChange={e => setEditedTask({ ...editedTask, title: e.target.value })}
          />
          <input 
            type="text"
            value={editedTask.description}
            onChange={e => setEditedTask({ ...editedTask, description: e.target.value })}
          />
          <button onClick={handleEdit}>Salvar</button>
        </div>
      ) : ( // Renderiza os detalhes da tarefa se não estiver no modo de edição
        <div>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => onToggle(task.id)}
          />
          <strong>{task.title}</strong>: {task.description}
          
          {/* Botões para editar e excluir a tarefa */}
          <button onClick={() => setEditing(true)}>Editar</button>
          <button onClick={() => onDelete(task.id)}>Excluir</button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
