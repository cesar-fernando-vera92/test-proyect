import { CarTWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import logoLuvi from "../../assets/images/logo.png"

export const NavBar = () => {

    
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logoLuvi} alt="logo tienda" />
            </Link>

            <nav className="navBar">
                <Link to="/" className="headerLink">home</Link>
                <Link to="/productos" className="headerLink">productos</Link>
                <Link to="/nosotros" className="headerLink">nosotros</Link>
                <Link to="/contacto" className="headerLink">contacto</Link>
                <Link to="/" className="headerLink">como comprar</Link>
            </nav>
            <CarTWidget />
        </header>
    )

}