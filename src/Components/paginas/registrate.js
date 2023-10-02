import React, { useState } from 'react';
import './registrate.css';
import image1 from './user.png';
import { useNavigate } from 'react-router-dom';

export const Registrate = (props) => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [telefono, setTelefono] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleRegistro = async () => {
    try {
      const response = await fetch('http://localhost:3001/registrate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, contrasena, telefono, address }),
      });

      if (response.status === 200) {
        // Registro exitoso, redirige al usuario a la página de cuenta
        navigate('/micuenta');
      } else if (response.status === 400) {
        // Error de duplicación, muestra un mensaje de error en la pantalla
        const data = await response.json();
        setError(data.error);
      } else {
        // Otro error, muestra un mensaje de error genérico
        setError('Error en el registro');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setError('Error en la solicitud');
    }
  };

  return (
    <div>
      <img className="userR" src={image1} width="120px" height="120px" alt="Usuario" />
      <h1>Registrarse</h1>
      <div className="containerR">
        <form action="#" method="post">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />

          <label htmlFor="telefono">Telefono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          <label htmlFor="address">Direccion:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button onClick={handleRegistro} className="Registrar" type="button">
            Registrar
          </button>
          <button onClick={() => navigate("/cuenta")} className="Cancelar">
            Cancelar
          </button>

          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Registrate;
