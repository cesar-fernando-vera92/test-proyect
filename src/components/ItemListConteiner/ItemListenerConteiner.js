import React, { useState, useEffect } from 'react'
import './ItemListenerConteiner.css'
import ItemList from '../ItemList/ItemList'
import { getData } from '../../mocks/fackeApi'

const ItemListContainer = () => {
  const [productList, setProductList] = useState([])
  const [landing, setLanding] = useState(true) 

  useEffect(()=>{
    getData
    .then((res)=> setProductList(res))
    .catch((error)=> console.log(error))
    .finally(()=>setLanding(false))
  },[])


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


 