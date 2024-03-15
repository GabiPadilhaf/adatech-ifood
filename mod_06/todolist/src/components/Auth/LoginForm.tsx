import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
const navigate = useNavigate(); // Obtém a função de navegação

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação dos campos do formulário
    const newErrors: { [key: string]: string } = {};
    if (!email.trim()) {
      newErrors.email = 'O email é obrigatório.';
    }
    if (!password.trim()) {
      newErrors.password = 'A senha é obrigatória.';
    }

    if (Object.keys(newErrors).length === 0) {
      // Se não houver erros, envie os dados de login para o servidor
      console.log('Dados de login:', { email, password });
      navigate('/lista-tarefas');

    } else {
      setErrors(newErrors);

      // Exibir alerta com os erros
      alert(Object.values(newErrors).join('\n'));
    }
  };

  return (
    <form onSubmit={handleSubmit} id='form-login'>
      <h1>Lista de Tarefas - planejador diário </h1>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> <br />
      {errors.email && <div className="error">{errors.email}</div>}

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> <br />
      {errors.password && <div className="error">{errors.password}</div>}

      {/* Botão de login */}
      <button type="submit">Login</button>

      {/* Link para a página de registro */}
      <p>Ainda não tem uma conta? <Link to="/registro">Registre-se aqui.</Link></p>
    </form>
  );
};

export default LoginForm;
