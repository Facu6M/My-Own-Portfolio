import React from "react";
import styles from "../styles/Header.css";

const Header = () => {
  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#">Facundo</a>
        </div>
        <nav id="nav">
          <ul>
            <li>
              <a href="#inicio">HOME</a>
            </li>
            <li>
              <a href="#sobremi">ABOUT ME</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#curriculum">CV</a>
            </li>{" "}
          </ul>
        </nav>
        <div className="nav-responsive">
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  );
};

export default Header;
