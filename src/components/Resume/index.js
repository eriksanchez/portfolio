import React from "react";
import { Timeline, Event } from "react-trivial-timeline";
import { Grid, Image, Button } from "semantic-ui-react";

function Resume() {
  return (
    <div>
      <h1>Resume</h1>

      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <h1>Education</h1>
            <Timeline lineColor="black" style={{ justifyContent: "center" }}>
              <Event
                interval={{ start: 2009, end: 2013 }}
                title="Deer Park High School"
                subtitle="Deer Park, Tx, USA"
              ></Event>
              <Event
                interval="2013 – 2017"
                title="The University of Texas at Tyler"
              >
                B.S. Computer Science, <br />
                Mathematics Minor
              </Event>
            </Timeline>
          </Grid.Column>
          <Grid.Column>
            <h1>Work Experience</h1>
            <Timeline lineColor="black">
              <Event
                interval={{ start: 2009, end: 2013 }}
                title="Deer Park High School"
                subtitle="Deer Park, Tx, USA"
              ></Event>
              <Event
                interval="2013 – 2017"
                title="The University of Texas at Tyler"
              >
                B.S. Computer Science, <br />
                Mathematics Minor
              </Event>
            </Timeline>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Resume;
