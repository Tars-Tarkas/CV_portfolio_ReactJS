import React from "react";
import NavBar from "../NavBar/NavBar"
import "./Header.scss"


function Header(){

    return(
        <header className="header">
            <div className="container">
                <NavBar />
            </div>
        </header>
    )
}

export default Header;

