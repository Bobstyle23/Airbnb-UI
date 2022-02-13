import React from "react";
import group from "../assets/Group 77.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <img src={group} alt="GroupImage" />
      </div>
      <div className="hero-contents">
        <h1 className="hero-header">Online experiences</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </>
  );
};

export default Hero;
