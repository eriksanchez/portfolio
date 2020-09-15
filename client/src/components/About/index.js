import React from "react";
import "./About.css";
import { Grid, Button } from "semantic-ui-react";
import SkillCard from "./SkillCard";

function About() {
  return (
    <div class="About_container">
      <div class="About_heading">
        <h1>Who am I?</h1>
      </div>
      <div class="About_details">
        <p>
          I am a results driven motivated Software Engineer with professional
          experience creating full stack web and mobile applications.
        </p>

        <div class="About_tech">
          <img src="/JavascriptImage.png" alt="javascript" class="image" />
          <img src="/nodeImage.jpg" alt="node" class="image" />
          <img src="/ReactImage.png" alt="react" class="image" />
        </div>
      </div>

      <div class="About_skillcards">
        <SkillCard
          imageSrc="/websiteImage.png"
          FieldTitle="FrontEnd"
          SkillOne="HTML5"
          SkillTwo="CSS3 | SASS"
          SkillThree="Javascript"
          SkillFour="React | Redux"
        />

        <SkillCard
          imageSrc="/ServerIcon.jpg"
          FieldTitle="Server"
          SkillOne="NodeJS"
          SkillTwo="Express"
          SkillThree="Python"
        />

        <SkillCard
          imageSrc="/DatabaseIcon.png"
          FieldTitle="Database"
          SkillOne="PostgreSQL"
          SkillTwo="MySQL"
          SkillThree="MongoDB"
        />

        <SkillCard
          imageSrc="/CloudIcon.png"
          FieldTitle="Deployment"
          SkillOne="Firebase"
          SkillTwo="AWS"
          SkillThree="Docker"
        />
      </div>

      <Button primary>Download Resume</Button>
      <h4>Or take a quick look below </h4>
    </div>
  );
}

export default About;
