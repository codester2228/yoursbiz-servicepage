import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../images/kumarlogo.jpg";
import Vector from "../images/Vector.png";
import Person from "../images/person_24px.png";
function Navbar() {
  return (
    <div>
      <div className="navbar">
        <img src={Logo} alt="" className="logo" />
        <Link className="home" to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link className="portfolio" to="/" style={{ textDecoration: "none" }}>
          Portfolio
        </Link>
        <Link className="wedding" to="/" style={{ textDecoration: "none" }}>
          Wedding films
        </Link>
        <Link className="services" to="/" style={{ textDecoration: "none" }}>
          Services
        </Link>
        <Link className="quotation" to="/" style={{ textDecoration: "none" }}>
          Get Quotation
        </Link>
        <img src={Vector} alt="" className="vector" />

        <Link className="contact" to="/" style={{ textDecoration: "none" }}>
          Contact us
        </Link>
        <img src={Person} alt="" className="person" />
        <Link className="login" to="/" style={{ textDecoration: "none" }}>
          Log In
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
