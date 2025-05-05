import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [codigoConfirmacao, setCodigoConfirmacao] = useState('');
  const navigate = useNavigate();

  // Função para gerar um código de confirmação aleatório
  const gerarCodigoConfirmacao = () => {
    const codigo = Math.floor(100000 + Math.random() * 900000); // Gera um código aleatório de 6 dígitos
    setCodigoConfirmacao(codigo); // Armazena o código no estado
    console.log('Código gerado:', codigo); // Exibe o código no console para verificação
    localStorage.setItem('codigoConfirmacao', codigo); // Armazena o código no localStorage
    return codigo;
  };

  // Função que envia o e-mail de confirmação
  const enviarEmailConfirmacao = (codigo) => {
    const templateParams = {
      email: email, // O e-mail que o usuário preencheu
      confirmation_code: codigo, // O código de confirmação gerado
      time: new Date().toLocaleTimeString(), // Hora atual (opcional)
    };

    // Enviar e-mail usando o EmailJS
    emailjs
      .send(
        'service_22r8xeg',  // Substituído pelo seu Service ID do EmailJS
        'template_d43fml3',  // Substituído pelo seu Template ID do EmailJS
        templateParams,  // Parâmetros do template
        'JnMGEvavlKIUVS8F3'  // Sua Public Key do EmailJS
      )
      .then(
        (response) => {
          console.log('E-mail enviado com sucesso:', response);
          alert('Cadastro realizado com sucesso! O código de confirmação foi enviado para seu e-mail.');
          localStorage.setItem('email', email);  // Salva o email no localStorage
          localStorage.setItem('senha', senha);  // Salva a senha no localStorage
          navigate('/validar-codigo'); // Navega para a página de validação do código
        },
        (error) => {
          console.error('Erro ao enviar o e-mail:', error);
          alert('Ocorreu um erro ao enviar o e-mail. Tente novamente.');
        }
      );
  };

  // Função que lida com o envio do formulário
  const handleCadastro = (e) => {
    e.preventDefault();

    // Gerar código de confirmação
    const codigo = gerarCodigoConfirmacao();

    // Enviar o e-mail com o código de confirmação
    enviarEmailConfirmacao(codigo);

    // Aqui você pode adicionar integração com API ou salvar localmente
    console.log('Usuário cadastrado:', { nome, email, senha });
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1 className="titulo-login">Cadastro</h1>
        <form onSubmit={handleCadastro} className="login-form">
          <div className="input-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
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
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
