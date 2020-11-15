/** @format */

import React from "react";

const JobExperienceCard = ({
  positionTitle,
  companyName,
  workDate,
  workDesc,
}) => {
  return (
    <div className="experience-wrapper">
      <div className="exp-header">
        <div className="exp-left-side">
          <div className="exp-title">{positionTitle}</div>
          <div className="exp-company">{companyName}</div>
        </div>
        <div className="exp-right-side">
          <div className="exp-date">{workDate}</div>
        </div>
      </div>
      <div className="exp-body">{workDesc}</div>
    </div>
  );
};

export default JobExperienceCard;
