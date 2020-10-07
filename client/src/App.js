import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { TimelineLite, TweenMax, Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image } from "./components/Shared/Image";

import { textIntro, skewGallery } from "./components/Shared/animate";

import Intro from "./components/Intro";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const AboutRef = useRef(null);
  const [background, setBackground] = useState("#5a7d95");

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  const sections = [
    {
      title: "Title 1",
      subtitle: "Subtitle",
    },
    {
      title: "Title 2",
      subtitle: "Subtitle 2",
    },
    {
      title: "Title 3",
      subtitle: "Subtitle 3",
    },
  ];

  const toggleBackground = () => {
    const color = background !== "#5a7d95" ? "#5a7d95" : "#1b4943";
    setBackground(color);
  };

  useEffect(() => {
    {
      /*gsap.to(headerRef.current, {
      backgroundColor: background,
      duration: 1,
      ease: "none",
    });
    revealRefs.current.forEach((el, index) => {
      gsap.from(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });*/
    }
  }, []);

  return (
    <div>
      <Intro />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <h5>©2020 Erik Sanchez. All Rights Reserved. Testing</h5>
    </div>
  );
}

export default App;
