/** @format */

import React from "react";

import psuLogo from "../assets/psuLogo.png";
import parklandLogo from "../assets/parklandLogo.png";

const Education = () => {
  return (
    <div className="section Education">
      <div className="section-title">
        <div className="education-title-text">My Education</div>
      </div>
      <div className="card edu-card">
        <div className="edu-header">
          <div className="edu-left">
            <img src={psuLogo} alt="psuPic" className="edu-logo" />
          </div>
          <div className="edu-right">
            <div className="edu-title">Pennsylvania State University</div>
            <div className="edu-caption">Aerospace Engineering, 2023</div>
            <div className="edu-location">University Park, PA</div>
          </div>
        </div>
        <div className="edu-body">
          <div className="edu-body-text">
            I started my Penn State career in the fall of 2019. Through my first
            semester here, I've been involved in the follwing:
          </div>
          <li className="edu-body-text-li">VEX PSU Robotics Club</li>
          <li className="edu-body-text-li">Soccer</li>
          <div className="edu-body-text">
            Along with this, I've been taking the following courses:
          </div>
          <li className="edu-body-text-li">EMECH</li>
          <li className="edu-body-text-li">Engineering</li>
        </div>
      </div>
      <div className="card edu-card">
        <div className="edu-header">
          <div className="edu-left">
            <img src={parklandLogo} alt="psuPic" className="edu-logo" />
          </div>
          <div className="edu-right">
            <div className="edu-title">Parkland High School</div>
            <div className="edu-caption">2015 - 2020</div>
            <div className="edu-location">Allentown, PA</div>
          </div>
        </div>
        <div className="edu-body">
          <div className="edu-body-text">
            I graduated from Parkland High School in June of 2020 this year. I
            was fairly involved in various different activities in and around
            the school:
          </div>
          <li className="edu-body-text-li">Engineering Club</li>
          <li className="edu-body-text-li">National Honors Society</li>
          <li className="edu-body-text-li">National Math Society</li>
          <li className="edu-body-text-li">National English Society</li>
          <li className="edu-body-text-li">Ski Club</li>
          <li className="edu-body-text-li">Strolling Strings</li>
          <div className="edu-body-text">
            Along with the activites, here are some of the courses I took:
          </div>
          <li className="edu-body-text-li">AP Calc</li>
          <li className="edu-body-text-li">AP English</li>
          <li className="edu-body-text-li">PLTW - Intro to Eng. Design</li>
        </div>
      </div>
      <div className="section-end">
        <div className="education-end-text">
          Outside of school, I'm also learning about ...
        </div>
      </div>
    </div>
  );
};

export default Education;
