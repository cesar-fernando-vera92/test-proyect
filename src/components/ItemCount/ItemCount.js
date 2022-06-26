import a01core from '../../assets/images/A01core.png'
import useCard from '../../hooks/useCard'
import './ItemCount.css'

const ItemCount = ({stock, name}) => {
  const {count, product} = useCard(stock)


  return (
    <>
        <div className="card">
          <h1>{name}</h1>
          <img className='card-img' src={a01core} alt=""/>          
          <p className="price">$</p>
          <p className='card-description'>description..</p>
          <p>
            <button onClick={()=>count(-1)} className='card-btn-quitar card-btn'>-</button>
            <span>{product}</span>
            <button onClick={()=>count(+1)} className='card-btn-agregar card-btn'>+</button>
          </p>
      </div>
    </>
  )
}

export default ItemCount