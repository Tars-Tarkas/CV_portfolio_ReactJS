import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <ul className="navbar">
      <li className="navbar__link">
        <NavLink
          className={(navData) =>
            navData.isActive ? "navbar-active" : "navbar__link"
          }
          end
          to="/"
        >
          Резюме
        </NavLink>
      </li>
      <li className="navbar__link">
        <NavLink
          className={(navData) =>
            navData.isActive ? "navbar-active" : "navbar__link"
          }
          to="/portfolio"
        >
          Портфолио
        </NavLink>
      </li>
      <li className="navbar__link">
        <NavLink
          className={(navData) =>
            navData.isActive ? "navbar-active" : "navbar__link"
          }
          to="/training"
        >
          Обучение
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
