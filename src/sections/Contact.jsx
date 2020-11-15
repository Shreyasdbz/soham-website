/** @format */

import React from "react";

import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <div className="section Contact">
      <div className="section-title">
        <div className="contact-title-text">Contact Me</div>
      </div>
      <ContactCard
        title="Email"
        imgSrc="https://img.icons8.com/clouds/100/000000/email.png"
        contactLink="mailto:soccerhunter73@outlook.com"
      />
      <ContactCard
        title="LinkedIn"
        imgSrc="https://img.icons8.com/cute-clipart/64/000000/linkedin.png"
        contactLink="https://linkedin.com/in/https://www.linkedin.com/in/soham-sane-28b8711b6/"
      />
      <ContactCard
        title="Instagram"
        imgSrc="https://img.icons8.com/bubbles/100/000000/instagram-new.png"
        contactLink="https://www.instagram.com/soham.sane_/"
      />
      <ContactCard
        title="Facebook"
        imgSrc="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png"
        contactLink="https://www.facebook.com/soham.sane.7"
      />
      <ContactCard
        title="Twitter"
        imgSrc="https://img.icons8.com/cute-clipart/128/000000/twitter.png"
        contactLink="https://twitter.com/shreyasdbz"
      />
    </div>
  );
};

export default Contact;
