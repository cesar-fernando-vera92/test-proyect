import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ product }) => {
    return (
        <div>
            <div className="card">
                <h1>{product.tittle}</h1>
                <img className='card-img' src={product.image} alt={product.tittle} height="400" width="300" />
                <p className="price">${product.price}</p>     
                
               
        
            </div>
        </div>
    )
}

export default Item


