import React from 'react';
import TaskItem from './TaskItem';
import Task from '../../types/Task';
import { Link } from 'react-router-dom';

interface TaskListProps {
  tasks: Task[];
  onToggle: (taskId: number) => void;
  onDelete: (taskId: number) => void;
  onEdit: (taskId: number, updatedTask: Task) => void; 
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <div id='tasklist' className='tasklist'>
      <h1>Lista de Tarefas</h1>
      <ul className='taskitem'>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit} // Passe a função onEdit para cada TaskItem
          />
        ))}
      </ul>
      <Link to="/nova-tarefa" >Adicionar Tarefa</Link>
    </div>
  );
};

export default TaskList;
