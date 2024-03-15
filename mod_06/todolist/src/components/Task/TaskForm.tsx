import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface TaskFormProps {
  onAddTask: (title: string, description: string) => void; // Função para adicionar uma nova tarefa
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState(''); // Estado para armazenar o título da tarefa
  const [description, setDescription] = useState(''); // Estado para armazenar a descrição da tarefa
  const navigate = useNavigate(); // Obter a função de navegação


  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Verifica se o título da tarefa não está vazio
    if (title.trim() === '') {
      alert('Por favor, insira um título para a tarefa.');
      return;
    }

    // Adiciona a nova tarefa usando a função passada por props
    onAddTask(title, description);

    // Limpa os campos do formulário após a adição da tarefa
    setTitle('');
    setDescription('');

    navigate('/lista-tarefas'); // Navegar de volta à lista de tarefas após adicionar a tarefa

  };

  return (
    <form className='form-container' id='taskform' onSubmit={handleSubmit}>
      <h1> Lista de Tarefas </h1>
      <h2>Adicionar Nova Tarefa</h2>
      <div>
        <label htmlFor="title" className='title'>Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description" className='desc'>Descrição:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
