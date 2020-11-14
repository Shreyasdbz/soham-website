/** @format */

import React from "react";

import psuVex from "../assets/gear.png";
import parklandVex from "../assets/gear.png";

const Robotics = () => {
  return (
    <div className="section Robotics">
      <div className="robotics-title">
        <div className="robotics-title-text">Robotics</div>
      </div>
      <div className="card robotics-psu-card">
        <div className="robo-header">
          <div className="robo-left">
            <img src={psuVex} alt="psuVexLogo" className="robo-logo" />
          </div>
          <div className="robo-right">
            <div className="robo-title">PSU VEX Robotics</div>
            <div className="robo-caption">Founded 2020</div>
            <div className="robo-info">More Information..</div>
          </div>
        </div>
        <div className="robo-body">
          <div className="robo-body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            culpa placeat eum debitis ut quas officia. Quae labore rerum quia
            tempora harum odio praesentium expedita deserunt nam! Nesciunt,
            porro amet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robotics;
