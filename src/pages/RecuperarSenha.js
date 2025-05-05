import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Função para gerar um token aleatório
  const gerarTokenRecuperacao = () => {
    return Math.random().toString(36).substring(2, 15); // Gera um token aleatório
  };

  const handleRecuperarSenha = (e) => {
    e.preventDefault();

    const token = gerarTokenRecuperacao();

    // Gera o link com o token
    const recoveryLink = `http://localhost:3000/redefinir-senha/${token}`;

    const templateParams = {
      email: email,
      link: recoveryLink,
    };

    emailjs
      .send(
        "service_lh4ypn8",        // Seu Service ID
        "template_53q2tu7",       // Seu Template ID
        templateParams,
        "JnMGEvavlKIUVS8F3"       // Sua Public Key
      )
      .then(
        (response) => {
          console.log("E-mail enviado com sucesso:", response);
          alert("Link de recuperação enviado para seu e-mail!");
          navigate("/login");
        },
        (error) => {
          console.error("Erro ao enviar o e-mail:", error);
          alert("Ocorreu um erro ao enviar o e-mail. Tente novamente.");
        }
      );
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1 className="titulo-login">Recuperar Senha</h1>
        <form onSubmit={handleRecuperarSenha} className="login-form">
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
          <button type="submit">Recuperar Senha</button>
        </form>
      </div>
    </div>
  );
};

export default RecuperarSenha;
