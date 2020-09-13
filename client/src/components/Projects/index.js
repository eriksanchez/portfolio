import React from "react";
import { Grid } from "semantic-ui-react";
import SkillCard from "../About/SkillCard";
import Card2 from "../Shared/Card2";

function Projects() {
  return (
    <div>
      <h1>Project Portfolio</h1>

      <Grid divided="vertically">
        <Grid.Row columns={3}>
          <Grid.Column>
            <Card2 />
          </Grid.Column>
          <Grid.Column>
            <SkillCard
              imageSrc="/DatabaseIcon.png"
              FieldTitle="COVID-19 TRACKER"
              SkillOne="PostgreSQL"
              SkillTwo="MySQL"
              SkillThree="MongoDB"
            />
          </Grid.Column>
          <Grid.Column>
            <SkillCard
              imageSrc="/DatabaseIcon.png"
              FieldTitle="TRANSFER MARKET ITALY"
              SkillOne="PostgreSQL"
              SkillTwo="MySQL"
              SkillThree="MongoDB"
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <SkillCard
              imageSrc="/websiteImage.png"
              FieldTitle="AIRBNB CLONE"
              SkillOne="HTML5"
              SkillTwo="CSS3 | SASS"
              SkillThree="Javascript"
              SkillFour="React | Redux"
            />
          </Grid.Column>
          <Grid.Column>
            <SkillCard
              imageSrc="/ServerIcon.jpg"
              FieldTitle="HOUSTON FC APP"
              SkillOne="NodeJS"
              SkillTwo="Express"
              SkillThree="Python"
            />
          </Grid.Column>
          <Grid.Column>
            <SkillCard
              imageSrc="/DatabaseIcon.png"
              FieldTitle="TOSCANA RIPORTI"
              SkillOne="PostgreSQL"
              SkillTwo="MySQL"
              SkillThree="MongoDB"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
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
        </Grid.Row>
      </Grid>
    </div>
  );
}
export default Projects;
