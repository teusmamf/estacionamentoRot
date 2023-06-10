import React from "react";
import logo from "../../public/assets/images/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="nav-link-home" activeClassName="active" end>
        <img src={logo} alt="logo" className="logo_home" />
      </NavLink>

      <NavLink to="/Aboutus" className="nav-link" activeClassName="active">
        Sobre Nós
      </NavLink>

      <NavLink to="/Convenes" className="nav-link" activeClassName="active">
        Convênios
      </NavLink>

      <NavLink to="/contate-nos" className="nav-link" activeClassName="active">
        Contate-nos
      </NavLink>
    </div>
  );
}
