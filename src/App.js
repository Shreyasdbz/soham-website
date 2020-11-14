/** @format */

import "./style/main.css";

import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Robotics from "./sections/Robotics";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Robotics />
      <Contact />
    </div>
  );
}

export default App;
