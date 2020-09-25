import React, { useRef, useEffect } from "react";
import "./Intro.css";
import { textIntro } from "../Shared/animate";
import { TweenMax, Power3 } from "gsap";
import FadeIn from "../Shared/FadeIn";

function Intro() {
  let TitleName = useRef(null);
  let subTitle = useRef(null);

  useEffect(() => {
    textIntro(TitleName);
    TweenMax.to(subTitle, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.3,
    });
  }, []);

  return (
    <div class="Intro">
      <img src="/ES_logo.png" alt="logo" class="ES_logo" />
      <FadeIn wrapperElement="h1" direction="down">
        WHat it do young g
      </FadeIn>
      <FadeIn wrapperElement="img" direction="right"></FadeIn>
      <h1 class="Title" ref={(el) => (TitleName = el)}>
        Erik Sanchez
      </h1>
      <img
        src="/SoftwareEngineer.png"
        alt="Software Engineer"
        class="SE_title"
        ref={(el) => (subTitle = el)}
      />
      <div class="Intro_icons">
        <a href="https://www.linkedin.com/in/erik-sanchez-471b0096/">
          <img src="/Icons/linkedinIcon.png" class="linkedin-square" />
        </a>
        <a href="https://github.com/eriksanchez">
          <img src="/Icons/githubIcon.png" class="github-square" />
        </a>
        <a href="https://twitter.com/eriksanchezdev">
          <img src="/Icons/TwitterIcon.png" class="twitter-square" />
        </a>

        <img src="Icons/mailicon.png" class="mail-square" />
      </div>
    </div>
  );
}
export default Intro;
