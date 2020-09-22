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
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  intersection && intersection.intersectionRation < 1 ? fadeOut() : fadeIn();
  return (
    <div>
      <Intro ref={Int} />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <h5>©2020 Erik Sanchez. All Rights Reserved.</h5>
    </div>
  );
}

export default App;
