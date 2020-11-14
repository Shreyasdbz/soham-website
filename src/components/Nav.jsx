/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [isScrolling, set_isScrolling] = useState(false);

  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 0) {
      set_isScrolling((crr) => true);
    } else {
      set_isScrolling((crr) => false);
    }
  });

  useEffect(() => {
    set_isScrolling((crr) => false);
    return function cleanup() {
      window.removeEventListener("scroll", (e) => {
        set_isScrolling((crr) => false);
      });
    };
  }, []);

  return (
    <div className="Nav">
      <div className={`navbar ${isScrolling ? "add-shadow" : ""}`}>
        <div className="nav-item">
          <Link
            to="Hero"
            smooth={true}
            offset={0}
            duration={500}
            spy={true}
            activeClass="nav-item-active"
          >
            <span className="navbar-item-icon" role="img" aria-label="home">
              🏠
            </span>
          </Link>
        </div>
        <div className="nav-item">
          <span>
            <Link
              to="About"
              smooth={true}
              offset={0}
              duration={500}
              spy={true}
              activeClass="nav-item-active"
            >
              <span className="navbar-item-icon" role="img" aria-label="about">
                🧑🏽
              </span>
            </Link>
          </span>
        </div>
        <div className="nav-item">
          <span>
            <Link
              to="Education"
              smooth={true}
              offset={0}
              duration={500}
              spy={true}
              activeClass="nav-item-active"
            >
              <span
                className="navbar-item-icon"
                role="img"
                aria-label="projects"
              >
                📚
              </span>
            </Link>
          </span>
        </div>
        <div className="nav-item">
          <span>
            <Link
              to="Robotics"
              smooth={true}
              offset={0}
              duration={500}
              spy={true}
              activeClass="nav-item-active"
            >
              <span
                className="navbar-item-icon"
                role="img"
                aria-label="photography"
              >
                🎛️
              </span>
            </Link>
          </span>
        </div>
        <div className="nav-item">
          <span>
            <Link
              to="Contact"
              smooth={true}
              offset={0}
              duration={500}
              spy={true}
              activeClass="nav-item-active"
            >
              <span
                className="navbar-item-icon"
                role="img"
                aria-label="contact"
              >
                ✉️
              </span>
            </Link>
          </span>
        </div>
      </div>{" "}
    </div>
  );
};

export default Nav;
