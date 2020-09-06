import React from "react";
import "./About.css";
import { Button } from "semantic-ui-react";
import SkillCard from "./SkillCard";

function About() {
  return (
    <div>
      <h1>Who Am I?</h1>
      <div style={{ display: "flex" }}>
        <div class="Introduction">
          <p>
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

      <div class="ui grid">
        <div class="four wide column">
          <SkillCard
            imageSrc="/websiteImage.png"
            FieldTitle="FrontEnd"
            SkillOne="HTML5"
            SkillTwo="CSS3 | SASS"
            SkillThree="Javascript"
            SkillFour="React | Redux"
          />
        </div>
        <div class="four wide column">
          <SkillCard
            imageSrc="/ServerIcon.jpg"
            FieldTitle="Server"
            SkillOne="NodeJS"
            SkillTwo="Express"
            SkillThree="Python"
          />
        </div>
        <div class="four wide column">
          <SkillCard
            imageSrc="/DatabaseIcon.png"
            FieldTitle="Database"
            SkillOne="PostgreSQL"
            SkillTwo="MySQL"
            SkillThree="MongoDB"
          />
        </div>
        <div class="four wide column">
          <SkillCard
            imageSrc="/CloudIcon.png"
            FieldTitle="Deployment"
            SkillOne="Firebase"
            SkillTwo="AWS"
            SkillThree="Docker"
          />
        </div>
      </div>
      <Button primary>Download Resume</Button>
    </div>
  );
}

export default About;
