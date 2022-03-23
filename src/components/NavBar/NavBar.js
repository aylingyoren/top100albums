import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/ailin_designed_logo.png";
import "./NavBar.css";

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/topalbums",
    title: "Top 100",
  },
  {
    url: "/favorites",
    title: "Favorites",
  },
];

function NavBar() {
  const [navActive, setNavActive] = useState("Home");

  return (
    <div className="navbar">
      <Link to="/" onClick={() => setNavActive("Home")}>
        <img src={Logo} alt="logo" className="navbar__logo" />
      </Link>

      {links.map(({ url, title }, i) => (
        <Link
          key={`link-${i}`}
          onClick={() => setNavActive(title)}
          to={url}
          className={
            navActive === title ? "navbar__link-active" : "navbar__link"
          }
        >
          {title}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
