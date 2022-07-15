import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import emptyCart from "../../assets/images/emptycart.png"
import { BtnMain } from "../BtnMain/BtnMain";

export const Cart = () => {

    const { cart, vaciarCart} = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="emptyCart">
                <h2>Tu carrito está vacío</h2>
                <img src={emptyCart} alt="emptyCart" className="emptyCartImg" />
                <Link to="/">
                    <BtnMain text="volver"/>
                </Link>
            </div>
        )
    }

    return (

        <div className="main-cart" >
            <h2 className="title-cart">Tu compra</h2>
            <BtnMain text="Vaciar Carrito" fct={vaciarCart}/>
                 <Link to="/checkout">
                    <BtnMain text="Finalizar compra"/>
                 </Link>          
        </div>
    )
}





