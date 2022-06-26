import React from 'react'
import './ItemListenerConteiner.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {
  return (
    <>
        <div className='products'>
          <ItemCount name='A01 Core' stock={9}/>
          <ItemCount name='A02' stock={16}/>
          <ItemCount name='A32 ' stock={2}/>
        </div>   
    </>
  )
}

export default ItemListContainer


 