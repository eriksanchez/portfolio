import React, { useRef, useEffect } from "react";
import "./Intro.css";
import { Icon } from "semantic-ui-react";
import { textIntro } from "../Shared/animate";
import { TweenMax, Power3, TweenLite } from "gsap";
import FadeIn from "../Shared/FadeIn";
function Intro() {
  let TitleName = useRef(null);
  let subTitle = useRef(null);

  let linkedinIcon = useRef(null);
  let githubIcon = useRef(null);
  let twitterIcon = useRef(null);
  let emailIcon = useRef(null);

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
      <h1
        ref={(el) => {
          TitleName = el;
        }}
        class="Title"
      >
        Erik Sanchez
      </h1>
      <img
        ref={(el) => {
          subTitle = el;
        }}
        src="/SoftwareEngineer.png"
        alt="Software Engineer"
        class="SE_title"
      />
      <div class="Intro_icons">
        <a href="https://www.linkedin.com/in/erik-sanchez-471b0096/">
          <img
            ref={(el) => {
              linkedinIcon = el;
            }}
            src="/Icons/linkedinIcon.png"
            class="linkedin-square"
          />
        </a>
        <a href="https://github.com/eriksanchez">
          <img
            ref={(el) => {
              githubIcon = el;
            }}
            src="/Icons/githubIcon.png"
            class="github-square"
          />
        </a>
        <a href="https://twitter.com/eriksanchezdev">
          <img
            ref={(el) => {
              twitterIcon = el;
            }}
            src="/Icons/TwitterIcon.png"
            class="twitter-square"
          />
        </a>

        <img
          ref={(el) => {
            emailIcon = el;
          }}
          src="Icons/mailicon.png"
          class="mail-square"
        />
      </div>
    </div>
  );
}
export default Intro;
