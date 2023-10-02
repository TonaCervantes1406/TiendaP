import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import image1 from "./logo.jpeg"
import image2 from "./carrito.png"
import './index.css'
 
const Navbar = () => {
    return (
        <>
            <Nav>
            <img className="logo" src={image1} width="70px"  height='70px'></img>
                <NavMenu>
                    <NavLink to="/inicio" className="Texto" activeStyle>
                        Inicio
                    </NavLink>
                    <NavLink to="/buscar" className="Texto" activeStyle>
                        Buscar
                    </NavLink>
                    <NavLink to="/cuenta" className="Texto" activeStyle>
                        Cuenta
                    </NavLink>
                </NavMenu>
            <NavLink to="/carrito" className="Texto" activeStyle>
                <img className="carrito" src={image2} width="70px" height='70px'></img>
            </NavLink>    
            </Nav>
        </>
    );
};
 
export default Navbar;