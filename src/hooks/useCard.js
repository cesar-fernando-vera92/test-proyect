
import { useState } from 'react'

const useCard = (stock) => {
    const [product, setProduct] = useState(0)
    const count = (value) => {
    const result = product + value
    if(result <= stock){
        setProduct(product + value)
    }if(result<1){
        setProduct(0)
    }
}
  return {
    count, product
}
}

export default useCard
