import React from "react";
import "./App.css";

import Intro from "./components/Intro";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
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
