import React, { useState, useEffect } from 'react'
import './ItemListenerConteiner.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [productList, setProductList] = useState([])
  const [landing, setLanding] = useState(true)
  
  
  const categoryId = 'jewelery';

    useEffect(() => {
      setLanding(true);

        const URL = categoryId
            ? `https://fakestoreapi.com/products/category/${categoryId}`
            : 'https://fakestoreapi.com/products';

  

        fetch(URL)
            .then((res) => res.json())
            .then((json) => setProductList(json))
            .finally(() => {
              setLanding(false);
            });
    }, [categoryId]);


  

  return (
    <>
        <div className='products'>   
          <div className='list-products'>
           {landing ?<div className='loader'> </div> : <ItemList productList={productList}/> } 
          </div>             
      </div>   
    </>
  )
}

export default ItemListContainer


   
  

  
 