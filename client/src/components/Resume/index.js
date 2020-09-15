import React from "react";
import { Timeline, Event } from "react-trivial-timeline";
import { Grid } from "semantic-ui-react";
import "./Resume.css";

function Resume() {
  return (
    <div class="Resume_container">
      <div class="timeline">
        <ul>
          <li class="date" data-date="2011 - Present">
            <h1>Google</h1>
            <p>
              fdajf;dlkaf;jdkafdjs;afkldjsakfdlja;fdlksafjdkfjdkla;fdlksajfdka;fdjkasfda;
            </p>
          </li>
          <li class="date" data-date="2008 - 2011">
            <h1>Facebook</h1>
            <p>
              fdajf;dlkaf;jdkafdjs;afkldjsakfdlja;fdlksafjdkfjdkla;fdlksajfdka;fdjkasfda;
            </p>
          </li>
          <li class="date" data-date="2002 - 2008">
            <h1>Airbnb</h1>
            <p>
              fdajf;dlkaf;jdkafdjs;afkldjsakfdlja;fdlksafjdkfjdkla;fdlksajfdka;fdjkasfda;
            </p>
          </li>
        </ul>
      </div>

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
                interval={{ start: 2019, end: 2020 }}
                title="Software Developer"
                subtitle="Zerynth (Pisa, Italy)"
              >
                <ul>
                  <li>
                    Developed, and tested a web application for Toscana Riporti
                    Srl.
                  </li>
                  <li>
                    Responsible for front end development implementing reusable
                    components in React and using Redux for state management.
                  </li>
                  <li>
                    Also responsible for creating a REST API and writing up the
                    documentation.
                  </li>
                </ul>
              </Event>
              <Event
                interval="2017 – 2018"
                title="Mobile Application Developer"
                subtitle="Houston FC (Houston, Tx, USA)"
              >
                <ul>
                  <li>Developed UI for Houston FC mobile application. </li>
                  <li>
                    Helped launch an application to give Houston FC fans an
                    interactive team experience providing up-to date scores,
                    schedule, news, and statistics.
                  </li>
                  <li>
                    Responsible for front-end development of application.
                    (JavaScript, React Native).
                  </li>
                </ul>
              </Event>
              <Event
                interval="2017"
                title="Electrician Apprentice"
                subtitle="Bartec, Formosa Plastics Corporations (Point Comfort, Texas, USA)"
              >
                <ul>
                  <li>
                    Installed and connected power supply wiring, cables,
                    conduit, and electrical apparatuses for machines and
                    equipment in new and existing facilities following diagrams,
                    schematics, or blueprints.
                  </li>
                  <li>
                    Inspected and tested components of electrical systems,
                    including transfer switches and switch gears.
                  </li>
                  <li>
                    Ran wire, and electrical conduit along high altitude cable
                    tray.
                  </li>
                </ul>
              </Event>
              <Event
                interval="2015"
                title="Electrician Apprentice"
                subtitle="Meitec Inc. (Houston, Texas, USA) "
              >
                <ul>
                  <li>
                    Installed and repaired wiring, electrical fixtures, power
                    equipment, and components of machinery.
                  </li>
                  <li>Surveyed electrical systems, circuits and plans.</li>
                  <li>
                    Measured, cut, bent, threaded, assembled, and installed
                    electrical conduit using rulers, measuring devices, hand
                    tools, pipe threader, and conduit bender.
                  </li>
                </ul>
              </Event>
              <Event
                interval="2014-2017"
                title="Audio Engineer"
                subtitle="The Sound of E Productions (Tyler, Texas, USA)  "
              >
                <ul>
                  <li>
                    Responsible for mixing, mastering, editing and producing
                    musical compositions.
                  </li>
                  <li>
                    Worked with a variety of Digital Audio Workstations such as
                    Pro Tools, Ableton Live, FL Studios, and Logic Pro.
                  </li>
                  <li>
                    Operated recording equipment, and set sound mixing
                    board-control levels.
                  </li>
                </ul>
              </Event>
            </Timeline>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Resume;
