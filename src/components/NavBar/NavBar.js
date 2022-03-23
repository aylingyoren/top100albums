import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/ailin_designed_logo.png";
import "./NavBar.css";

function NavBar() {
  const [navActive, setNavActive] = useState("home");

  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="logo" className="navbar__logo" />
      </Link>
      <Link to="/">
        <div
          className={
            navActive === "home" ? "navbar__link-active" : "navbar__link"
          }
          onClick={() => setNavActive("home")}
        >
          Home
        </div>
      </Link>
      <Link to="topalbums">
        <div
          className={
            navActive === "search" ? "navbar__link-active" : "navbar__link"
          }
          onClick={() => setNavActive("search")}
        >
          Search
        </div>
      </Link>
      <Link to="favorites">
        <div
          className={
            navActive === "favorites" ? "navbar__link-active" : "navbar__link"
          }
          onClick={() => setNavActive("favorites")}
        >
          Favorites
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
