import React from 'react'
import useCard from '../../hooks/useCard'
import './Item.css'

const Item = ({ product, stock }) => {
    const { stockReloj, handlerClisckSumar, handlerClisckQuitar } = useCard(stock)
    
    return (
        <div>
            <div className="card">
                <h1>{product.tittle}</h1>
                <img className='card-img' src={product.image} alt={product.tittle} />
                <p className="price">${product.price}</p>
                <p className='card-description'>{product.category}</p>
                <p>
                    <button onClick={()=>{ if(stockReloj>=1) {handlerClisckQuitar()} } }
                     className='card-btn-quitar card-btn'>-</button>    
                    <span>{stockReloj}</span>
                    <button onClick={()=>{ if(stockReloj<product.stock) {handlerClisckSumar()} } } 
                    className='card-btn-agregar card-btn'>+</button>
                </p>
                <p className='card-stock'>stock disponible = {product.stock}</p>
                <div>
                    <button className='btn-agregar'>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default Item