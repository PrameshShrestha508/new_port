import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
const Navbar = () => {
  const toggleMenu = () => {
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  return (
    <>
      <header className="sticky-top" id="header">
        <a href="/" className="logo">
          pbs
        </a>
        <div class="menuToggle" onClick={toggleMenu}></div>
        <ul className="navigation">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/project" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <a href="/works">Works</a>
          </li>
          <li>
            <Link to="/contacts" onClick={toggleMenu}>
              Contacts
            </Link>
          </li>
          <li>
            <i className="fa fa-moon-o dark" aria-hidden="true"></i>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
