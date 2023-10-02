import React, { useState } from 'react';
import './iniciosesion.css';
import image1 from './user.png';
import { useNavigate } from 'react-router-dom';

export const Iniciosesion = (props) => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleInicioSesion = async () => {
    try {
      const response = await fetch('http://localhost:3001/iniciosesion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, contrasena }),
      });

      if (response.status === 200) {
        // Inicio de sesión exitoso, redirige al usuario a su cuenta
        navigate('/micuenta');
      } else {
        // Inicio de sesión fallido, muestra un mensaje de error en la pantalla
        setError('Credenciales Incorrectas');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setError('Error en la solicitud');
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <img className="user" src={image1} width="120px" height="120px" alt="Usuario" />
      <div className="containerIS">
        <div className="form">
          <div className="item">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
            <input
              type="text"
              placeholder="Usuario"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="item">
            <i className="fa fa-key" aria-hidden="true"></i>
            <input
              type="password"
              placeholder="Contraseña"
              name="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleInicioSesion} className="login" type="button">
          Ingresa
        </button>
        <button onClick={() => navigate("/cuenta")} className="cancelar" type="button">
          Cancelar
        </button>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Iniciosesion;