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
      {/* Aqui a classe de fundo foi modificada */}
      <form onSubmit={handleLogin} className="bg-white sm:bg-transparent p-6 rounded-lg shadow-md">
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
