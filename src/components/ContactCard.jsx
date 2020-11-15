/** @format */

import React from "react";

const ContactCard = ({ title, imgSrc, contactLink }) => {
  return (
    <a
      target="_blank"
      href="https://www.twitter.com"
      className="card contact-card"
      style={{ textDecoration: "none" }}
    >
      <div className="contact-left">
        <img src={imgSrc} alt={title} className="contact-logo" />
      </div>
      <div className="contact-right">
        <div className="contact-title">{title}</div>
      </div>
    </a>
  );
};

export default ContactCard;
