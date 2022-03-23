import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/ailin_designed_logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="logo" className="navbar__logo" />
      </Link>
      <Link to="/">
        <div className="navbar__link">Home</div>
      </Link>
      <Link to="topalbums">
        <div className="navbar__link">Search</div>
      </Link>
      <Link to="favorites">
        <div className="navbar__link">Favorites</div>
      </Link>
    </div>
  );
}

export default NavBar;
