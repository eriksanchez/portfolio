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
  useEffect(() => {
    gsap.from(".About_comp", {
      duration: 3,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".About_description",
        start: "top 90%",
        end: "bottom 60%",
        markers: true,
        toggleActions: "restart complete reverse reset",
      },
    });
  }, []);
  return (
    <div className="App">
      <Intro />
      <About class="About_comp" />
      <Resume />
      <Projects />
      <Contact />
      <h5>©2020 Erik Sanchez. All Rights Reserved.</h5>
    </div>
  );
}

export default App;
