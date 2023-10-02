import React, { useState, useEffect } from 'react';
import imagep from './user.png';
import './micuenta.css';

export const Micuenta = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los datos del usuario actual
    fetch('http://localhost:3001/micuenta?nombre=${nombre}') // Cambia la URL según la ruta de tu servidor
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('No se pudieron obtener los datos del usuario');
        }
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Mi Cuenta</h1>
      <div className="profile-container">
        <div className="profile-image">
          <img src={imagep} alt="Imagen de perfil" width="120px" height="120px" />
        </div>
        <div className="profile-details">
          {userData ? (
            <>
              <h2>{userData.nombre}</h2>
              <p>Correo Electrónico: {userData.email}</p>
              <p>Teléfono: {userData.telefono}</p>
              <p>Dirección: {userData.address}</p>
            </>
          ) : (
            <p>Cargando datos del usuario...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Micuenta;