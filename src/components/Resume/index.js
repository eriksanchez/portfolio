import React from "react";
import { Timeline, Event } from "react-trivial-timeline";

function Resume() {
  return (
    <div>
      <h1>Resume</h1>

      <h3>Education</h3>
      <Timeline lineColor="black">
        <Event
          interval={{ start: 2009, end: 2013 }}
          title="Deer Park High School"
          subtitle="Deer Park, Tx, USA"
        ></Event>
        <Event interval="2013 – 2017" title="The University of Texas at Tyler">
          B.S. Computer Science, <br />
          Mathematics Minor
        </Event>
      </Timeline>
      <br />
      <h1>Work Experience</h1>
      <Timeline lineColor="black">
        <Event
          interval={{ start: 2009, end: 2013 }}
          title="Deer Park High School"
          subtitle="Deer Park, Tx, USA"
        ></Event>
        <Event interval="2013 – 2017" title="The University of Texas at Tyler">
          B.S. Computer Science, <br />
          Mathematics Minor
        </Event>
      </Timeline>
    </div>
  );
}

export default Resume;
