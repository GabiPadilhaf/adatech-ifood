import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {
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

    // Se houver erros, atualize o estado com os erros de validação
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Envie os dados de registro para o servidor (ainda não implementado)
    console.log('Dados de registro:', { email, password });

    // Limpar campos após o registro bem-sucedido
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <div className="error">{errors.password}</div>}

      {/* Botão de registro */}
      <button type="submit">Registrar</button>

      {/* Link para a página de login */}
      <p>Já tem uma conta? <Link to="/">Faça o login</Link></p>
    </form>
  );
};

export default RegisterForm;
