import React from "react";
import "./Intro.css";
import { Icon } from "semantic-ui-react";

function Intro() {
  return (
    <div class="Intro">
      <img src="/ES_logo.png" alt="logo" class="ES_logo" />
      <img src="/ErikSanchezTitle.png" alt="Erik Sanchez" class="Title" />
      <img
        src="/SoftwareEngineer.png"
        alt="Software Engineer"
        class="SE_title"
      />
      <div>
        <Icon name="linkedin" size="huge" class="linkedin-square" />
        <Icon name="github" size="huge" class="github-square" />
        <Icon name="twitter square" size="huge" class="twitter-square" />
        <Icon name="mail" size="huge" class="mail-square" />
      </div>
    </div>
  );
}
export default Intro;
