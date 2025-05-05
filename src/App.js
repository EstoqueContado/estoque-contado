import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/App.css';
import Cadastro from './pages/Cadastro';  
import RecuperarSenha from './pages/RecuperarSenha';
import ValidarCodigo from './pages/ValidarCodigo';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RedefinirSenha from './pages/RedefinirSenha'; // ✅ Caminho corrigido

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('senha');

    if (email === storedEmail && password === storedPassword) {
      console.log("Login bem-sucedido");
      window.location.href = '/dashboard';
    } else {
      alert('E-mail ou senha incorretos.');
    }
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={(
            <div className="container">
              <div className="welcome-container">
                <h2>Seja bem-vindo ao Estoque Contado!</h2>
                <p>Gerencie seus produtos de forma rápida e eficiente. A solução ideal para controle de estoque em sua loja!</p>
              </div>

              <div className="login-container">
                <h1 className="titulo-login">Estoque Contado</h1>
                <form onSubmit={handleSubmit} className="login-form">
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
                    <label htmlFor="password">Senha</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit">Acessar</button>
                  <div className="links">
                    <Link to="/cadastro">Fazer Cadastro</Link>
                    <Link to="/recuperar-senha">Esqueci minha Senha</Link>
                  </div>
                </form>
              </div>
            </div>
          )} 
        />

        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/validar-codigo" element={<ValidarCodigo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/redefinir-senha/:token" element={<RedefinirSenha />} />
      </Routes>
    </Router>
  );
}

export default App;
