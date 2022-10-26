import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss"


function NavBar(){
    return(        
        <ul className="navbar">
          <li className="navbar__link"><NavLink to="/">Резюме</NavLink></li>
          <li className="navbar__link"><NavLink to="/portfolio">Портфолио</NavLink></li>
        </ul>
        
    )

}

export default NavBar 