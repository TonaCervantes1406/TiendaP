import React from 'react'
import './buscar.css'

export const buscar = () => {
  return (
  <div class="box">
    <h1>¿Que buscabas?</h1>  
    <div class="search-container">
        <div class="search-box">
            <input type="text" id="product-search" placeholder="Buscar productos"/>
            <button className="bottonb" id="product-search-button">Buscar</button>
        </div>
        <div class="search-box">
            <input type="text" id="provider-search" placeholder="Buscar proveedores"/>
            <button className="bottonb" id="provider-search-button">Buscar</button>
        </div>
    </div>
  </div>
  )
}
export default buscar;
