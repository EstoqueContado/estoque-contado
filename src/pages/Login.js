import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Recupera o email e senha do localStorage
    const userEmail = localStorage.getItem('email');
    const userPassword = localStorage.getItem('senha');

    // Verifique se o email e a senha são válidos
    if (email === userEmail && senha === userPassword) {
      // Se os dados corresponderem, redireciona para o Dashboard
      console.log("Login bem-sucedido");
      navigate('/dashboard'); // Acesse a página interna após o login
    } else {
      // Caso contrário, mostrar um alerta de erro
      alert('E-mail ou senha incorretos.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="titulo-login">Login</h1>
      {/* Caixa de login com margens ajustadas e centralização responsiva */}
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md sm:max-w-lg sm:mx-auto sm:my-16 my-12 mx-6">
        <div className="input-group mb-6">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="input-group mb-6">
          <label htmlFor="senha" className="block text-lg font-medium text-gray-700">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
