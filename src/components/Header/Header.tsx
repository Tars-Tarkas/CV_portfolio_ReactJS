import * as React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <div className="container">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
