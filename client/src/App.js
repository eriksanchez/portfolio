import React, { useEffect } from "react";
import "./App.css";

import Intro from "./components/Intro";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { TimelineLite, TweenMax, Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerEase(ScrollTrigger);

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Intro />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <h5>©2020 Erik Sanchez. All Rights Reserved.</h5>
    </div>
  );
}

export default App;
