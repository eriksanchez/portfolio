import React from "react";
import "./About.css";
import { Grid, Button } from "semantic-ui-react";
import SkillCard from "./SkillCard";

function About() {
  return (
    <div style={{ backgroundColor: "beige" }}>
      <h1>Who Am I?</h1>

      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <p>
              I am a results driven motivated Software Engineer with
              professional experience creating full stack web and mobile
              applications.
            </p>
          </Grid.Column>
          <Grid.Column>
            <img src="/JavascriptImage.png" alt="javascript" class="image" />
            <img src="/nodeImage.jpg" alt="node" class="image" />
            <img src="/ReactImage.png" alt="react" class="image" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={4}>
          <Grid.Column>
            <SkillCard
              imageSrc="/websiteImage.png"
              FieldTitle="FrontEnd"
              SkillOne="HTML5"
              SkillTwo="CSS3 | SASS"
              SkillThree="Javascript"
              SkillFour="React | Redux"
            />
          </Grid.Column>
          <Grid.Column>
            <SkillCard
              imageSrc="/ServerIcon.jpg"
              FieldTitle="Server"
              SkillOne="NodeJS"
              SkillTwo="Express"
              SkillThree="Python"
            />
          </Grid.Column>
          <Grid.Column>
            <SkillCard
              imageSrc="/DatabaseIcon.png"
              FieldTitle="Database"
              SkillOne="PostgreSQL"
              SkillTwo="MySQL"
              SkillThree="MongoDB"
            />
          </Grid.Column>
          <Grid.Column>
            <SkillCard
              imageSrc="/CloudIcon.png"
              FieldTitle="Deployment"
              SkillOne="Firebase"
              SkillTwo="AWS"
              SkillThree="Docker"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Button primary>Download Resume</Button>
      <h4>Or take a quick look below </h4>
    </div>
  );
}

export default About;
