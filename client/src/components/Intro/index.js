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
        <Icon name="linkedin" size="huge" />
        <Icon name="github" size="huge" />
        <Icon name="twitter square" size="huge" />
        <Icon name="mail" size="huge" />
      </div>
    </div>
  );
}
export default Intro;
