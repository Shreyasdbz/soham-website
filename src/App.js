/** @format */

import React, { useEffect, useState } from "react";
import "./style/main.css";

import TempWebsite from "./sections/TempWebsite";

import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Robotics from "./sections/Robotics";
import Contact from "./sections/Contact";

const App = () => {
  const [authenticated, set_authenticated] = useState(false);

  const authenticate = (action) => {
    // action == "UNLOCK" / "LOCK"
    if (action === "UNLOCK") {
      set_authenticated((crr) => true);
    }
  };

  if (authenticated === false) {
    return <TempWebsite authenticate={authenticate} />;
  } else {
    return (
      <div className="App">
        <div className="websiteWrapper">
          <Nav />
          <Hero />
          <About />
          <Education />
          <Robotics />
          <Contact />
        </div>
      </div>
    );
  }
};

export default App;
