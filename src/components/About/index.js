import React from "react";
import "./About.css";
function About() {
  return (
    <div>
      <h1>Who Am I?</h1>

      <div style={{ backgroundColor: "red" }}>
        <p>
          {" "}
          I am a results driven motivated Software Engineer with professional
          experience creating full stack web and mobile applications.
        </p>
      </div>

      <div>
        <img src="/JavascriptImage.png" alt="javascript" class="image" />
        <img src="/nodeImage.jpg" alt="node" class="image" />
        <img src="/ReactImage.png" alt="react" class="image" />
      </div>
    </div>
  );
}

export default About;
