/** @format */

import React from "react";
import { Link } from "react-scroll";

import soham from "../assets/soham_cut.png";

const Hero = () => {
  return (
    <div className="section Hero">
      <div className="card hero-card">
        <div className="image-box">
          <img src={soham} alt="soham-pic" className="hero-pic" />
        </div>
        <div className="hero-text-box">
          <div className="inner-text-box">
            <span className="hero-text hero-text-hi">Hi!</span>
            <span className="hero-text hero-text-caption">I'm Soham</span>
          </div>
        </div>
      </div>
      <div className="card hero-btn-card">
        <Link to="About" smooth={true} offset={0} duration={500} spy={true}>
          <div className="hero-btn-text">Learn more about me!</div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
