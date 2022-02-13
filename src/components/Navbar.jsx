import React from "react";
import logo from "../assets/airbnb 1.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Airbnb logo" />
    </nav>
  );
};

export default Navbar;
