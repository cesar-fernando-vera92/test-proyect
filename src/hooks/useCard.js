import { useState } from 'react'

const useCard = () => {
    const [stockReloj, setStockReloj] = useState(0)

    const handlerClisckSumar = ()=>{
        setStockReloj(stockReloj + 1)
     
    }
    const handlerClisckQuitar = ()=>{
        setStockReloj(stockReloj - 1)
    }

  return {
    stockReloj, handlerClisckSumar, handlerClisckQuitar
}
}
export default useCard
