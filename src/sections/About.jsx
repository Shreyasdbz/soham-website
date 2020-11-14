/** @format */

import React from "react";

const About = () => {
  return (
    <div className="section About">
      <div className="about-me-title">
        <div className="about-me-title-text">About Me.</div>
      </div>
      <div className="card about-card experience-card">
        <div className="about-title">
          <div className="about-title-text">A litle about me</div>
        </div>
        <div className="about-desc-wrapper ">
          <div className="about-text-box">
            I'm currently a student at Penn State University - Class of 2023,
            Aerospace Engineering Major. There, I co-founded the PSU VEXU
            Robotics club. I'm also taking part in various engineering
            organizations & projects and have applied the concepts learned in
            the classroom to various real-world applications
          </div>
        </div>
      </div>
      <div className="card about-card experience-card">
        <div className="about-title">
          <div className="about-title-text">My Job Experience</div>
        </div>
        <div className="experience-wrapper">
          <div className="exp-header">
            <div className="exp-left-side">
              <div className="exp-title">Ski Instructor</div>
              <div className="exp-company">
                Blue Mountain Resort - Palmerton, PA
              </div>
            </div>
            <div className="exp-right-side">
              <div className="exp-date">Sep 2019 - Mar 2020</div>
            </div>
          </div>
          <div className="exp-body">
            As a Junior Ski Instructor, I was tasked with leading groups of
            children under the age of 12 and teaching them the basics and
            fundamentals of downhill skiing. Furthermore, I was also responsible
            for escorting guests throughout the lessons center and escorting
            them to their instructor and desired lesson.
          </div>
        </div>
        <div className="experience-wrapper">
          <div className="exp-header">
            <div className="exp-left-side">
              <div className="exp-title">Tutor</div>
              <div className="exp-company">Kumon - Allentown, PA</div>
            </div>
            <div className="exp-right-side">
              <div className="exp-date">Feb 2018 - Sep 2018</div>
            </div>
          </div>
          <div className="exp-body">
            A Kumon Instructor is tasked with observing students and helping
            them complete worksheets improving their proficiency in Mathematics
            and English. Other responsibilities include grading and feedback of
            tests/quizzes, prepping the center for opening/closing, and
            providing students the resources for any future assignments.
          </div>
        </div>
        <div className="experience-wrapper">
          <div className="exp-header">
            <div className="exp-left-side">
              <div className="exp-title">Volunteer</div>
              <div className="exp-company">
                Da Vince Science Center - Allentown, PA
              </div>
            </div>
            <div className="exp-right-side">
              <div className="exp-date">Jun 2019 - Aug 2019</div>
            </div>
          </div>
          <div className="exp-body">
            As a counselor in training at the Da Vinci Science Center, my
            responsibilities included organizing the day's activities, escorting
            campers to and from locations, and helping other counselors perform
            demonstrations for various camps.
          </div>
        </div>
      </div>
      <div className="about-me-end">
        <div className="about-me-end-text">
          Apart from all my involvements and experiences, I also have a dog
          named Leo who's 3 years old!
        </div>
      </div>
    </div>
  );
};

export default About;
