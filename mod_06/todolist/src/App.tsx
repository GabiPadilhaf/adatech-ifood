import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import TaskList from './components/Task/TaskList';
import TaskForm from './components/Task/TaskForm';
import Task from './types/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleToggle = (taskId: number) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const handleDelete = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEdit = (taskId: number, updatedTask: Task) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return updatedTask; // Atualiza a tarefa com os detalhes editados
      }
      return task;
    }));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route
          path="/lista-tarefas"
          element={(
            <TaskList
              tasks={tasks}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          )}
        />
        <Route
          path="/nova-tarefa"
          element={(
            <TaskForm
              onAddTask={(title, description) => {
                const newTask: Task = { id: tasks.length + 1, title, description, completed: false };
                setTasks([...tasks, newTask]);
              }}
            />
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
