import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ValidarCodigo() {
  const [codigoInserido, setCodigoInserido] = useState('');
  const navigate = useNavigate();

  // Função que valida o código inserido pelo usuário
  const handleValidarCodigo = (e) => {
    e.preventDefault();

    // Recupera o código armazenado no localStorage
    const codigoArmazenado = localStorage.getItem('codigoConfirmacao');

    // Compara o código inserido com o armazenado
    if (codigoInserido === codigoArmazenado) {
      alert('Código validado com sucesso!');
      navigate('/'); // Redireciona para a tela de login
    } else {
      alert('Código inválido, tente novamente.');
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1 className="titulo-login">Validar Código</h1>
        <form onSubmit={handleValidarCodigo} className="login-form">
          <div className="input-group">
            <label htmlFor="codigo">Código de Confirmação</label>
            <input
              type="text"
              id="codigo"
              placeholder="Digite o código recebido por e-mail"
              value={codigoInserido}
              onChange={(e) => setCodigoInserido(e.target.value)}
              required
            />
          </div>
          <button type="submit">Validar</button>
        </form>
      </div>
    </div>
  );
}

export default ValidarCodigo;
