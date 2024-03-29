import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import emptyCart from "../../assets/images/emptycart.png"
import { BsTrash } from "react-icons/bs"
import { BtnMain } from "../BtnMain/BtnMain"
import swal from 'sweetalert'


export const Cart = () => {  
  
    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    const consulta = () =>{
        swal({
            title:"Vaciar Carrito",
            Text: "Estas seguro que deceas eliminar todo?",
            icon: "warning",
            buttons: ["No", "Si"]
        }).then(res=>{
            if(res){
                swal(
                    {
                       text:"Se elimino con exito",
                       icon: "success",
                       timer:"2000"
                   }
                )
                vaciarCart();
            } 
    })}

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
            <div className="container-mainCart">
                <div className="container-prodCart">
                    {
                        cart.map((item) => (
                            <div key={item.id} className="body-prodCart">
                                <img src={item.img} alt={item.nombre} className="img-prodCart" />
                                <p className="cantidad-prodCart">Cantidad: <span className="prod-cantidad">{item.cantidad}</span></p>
                                <p className="precio-prodCart">Precio: <span className="priceNum">${item.cantidad * item.precio}</span></p>
                                <BtnMain
                                    text={<BsTrash />}
                                    fct={() => eliminarItem(item.id)}
                                    css={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: ".4rem .5rem",
                                        fontSize: "1.2rem"
                                    }}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="total-cart">
                    <h2 className="total-title">Total: ${totalCart()}</h2>
                    <div>
                        
                        <BtnMain text="vaciar" fct={() =>consulta() }/>
                        <Link to="/checkout">
                            <BtnMain text="Finalizar compra"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      
    )
}








