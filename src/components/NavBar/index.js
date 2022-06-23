import React from "react";
import logo from "../../assets/images/logo-tienda.jpg";
import CardWidget from "../CardWidget";
import "./style.css"


const NavBar = () => {
    return(
        <div className="nav">
        <img className="nav-logo" src={logo} alt="logo de tienda"/>
        <h1> Mi Tienda OnLine </h1>
        <div>
            <a href="/" className="nav-item">Inicio </a>
            <a href="/" className="nav-item">Productos </a>
            <a href="/" className="nav-item">Contacto </a>
            <a href="/" className="nav-item">Como comprar </a>
        </div>
            <CardWidget/>         
        </div>       
    )
}
export default NavBar;