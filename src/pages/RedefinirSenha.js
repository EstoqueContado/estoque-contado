import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RedefinirSenha = () => {
  const { token } = useParams(); // Captura o token da URL
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [validToken, setValidToken] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Aqui você pode validar o token (no futuro via API)
    if (!token || token.length < 10) {
      setValidToken(false);
    }
  }, [token]);

  const handleRedefinirSenha = (e) => {
    e.preventDefault();

    if (novaSenha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Salva a nova senha no localStorage
    localStorage.setItem("senha", novaSenha);

    alert("Senha redefinida com sucesso!");
    navigate("/login");
  };

  if (!validToken) {
    return <div className="container">Token inválido ou expirado. Tente novamente.</div>;
  }

  return (
    <div className="container">
      <div className="login-container">
        <h1 className="titulo-login">Redefinir Senha</h1>
        <form onSubmit={handleRedefinirSenha} className="login-form">
          <div className="input-group">
            <label htmlFor="novaSenha">Nova Senha</label>
            <input
              type="password"
              id="novaSenha"
              placeholder="Digite sua nova senha"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              placeholder="Confirme sua nova senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Redefinir Senha</button>
        </form>
      </div>
    </div>
  );
};

export default RedefinirSenha;
