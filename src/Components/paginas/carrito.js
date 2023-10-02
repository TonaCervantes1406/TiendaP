import React from 'react';
import './carrito.css';
import imagenx from './xbox.png'
import imagenp from './play.png'

export const carrito = () => {
  return (
    <div>
      <h1>Tu carrito</h1> 
      <div className="cart-container">
        <h2>Carrito de Compra</h2>
        <div className="cart-item">
            <img src={imagenx} alt="Producto 1" className="img"/>
            <div className="item-details">
                <h3>Xbox One</h3>
                <p>Precio: $20.00</p>
                <p>Cantidad: 2</p>
            </div>
        </div>
        <div className="cart-item">
            <img src={imagenp} alt="Producto 2" className="img"/>
            <div className="item-details">
                <h3>PlayStation 5</h3>
                <p>Precio: $15.00</p>
                <p>Cantidad: 1</p>
            </div>
        </div>
        <div class="cart-total">
            <p>Total: $55.00</p>
        </div>
    </div>
    </div>
  )
}
export default carrito;