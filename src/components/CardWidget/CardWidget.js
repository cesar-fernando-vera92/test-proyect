import React from 'react'
import imagenCarrito from '../../assets/images/carrito.png'
import './CardWidget.css'

const CardWidget = () => {
  return (
    <>
      <button className='card-btn'> 
        <img className="card-widget" src={imagenCarrito} alt="imagen de carrito"/>
      </button>
    </>    
  )
}

export default CardWidget