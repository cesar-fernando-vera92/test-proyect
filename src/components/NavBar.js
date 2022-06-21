import React from "react";
import logo from "../assets/logo-tienda.jpg";
import "./NavBar.css";


const NavBar = () => {
    return(
        <header>
        <img src={logo} alt="logo de tienda"/>
        <h1> Mi Tienda OnLine </h1>
        <nav>
            <a href="/#">Inicio</a>
            <a href="/#">Producto</a>
            <a href="/#">Contacto</a>
            <a href="/#">Como Comprar</a>
        </nav>
        <button> Agregar</button> 
        </header>       
    )
}
export default NavBar;