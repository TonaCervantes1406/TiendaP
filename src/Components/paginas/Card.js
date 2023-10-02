import React from 'react'
//import PropTypes from 'prop-types'
import './card.css'

export default function Card({id, title, image, precio}){
    return(

    <div className='card text-center bg-dark rounded-3'>

        <div className='card-body text-light'>
            <img src={image} alt='' className='rounded mx-auto d-block'></img>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text tex-secondary'>
                precio: {precio}
            </p>
            <a href='#!' className='btn bg-black btn-outline-secondary rounded-3'>
                Mover al carrito
            </a>
        </div>
    </div>
    )
}