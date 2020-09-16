import React, { useRef, useEffect } from "react";
import "./About.css";
import { Button } from "semantic-ui-react";
import { TimelineLite, TweenMax, Power3, gsap } from "gsap";
import SkillCard from "./SkillCard";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerEase(ScrollTrigger);

function About() {
  let t1 = new TimelineLite({ delay: 0.3 });
  useEffect(() => {
    {
      t1.from(
        ".About_description",
        { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
        "Start"
      );
      t1.staggerFrom(
        ".image",
        1,
        { y: 30, ease: Power3.easeOut, opacity: 0 },
        0.15,
        "Start"
      )
        .from(".About_skillcards", {
          y: 20,
          opacity: 0,
          ease: Power3.easeOut,
          delay: 0.2,
        })
        .from(
          ".btn-resume",
          {
            y: 10,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.2,
          },
          0.35
        );
    }
  }, []);

  return (
    <div class="About_container">
      <div class="About_heading">
        <h1>Who am I?</h1>
      </div>
      <div class="About_details">
        <p class="About_description">
          I am a results driven motivated Software Engineer with professional
          experience creating full stack web and mobile applications.
        </p>

        <div class="About_tech">
          <img src="/JavascriptImage.png" alt="javascript" class="image" />
          <img src="/nodeImage.jpg" alt="node" class="image" />
          <img src="/ReactImage.png" alt="react" class="image" />
        </div>
      </div>

      <div class="About_skillcards">
        <SkillCard
          imageSrc="/websiteImage.png"
          FieldTitle="FrontEnd"
          SkillOne="HTML5"
          SkillTwo="CSS3 | SASS"
          SkillThree="Javascript"
          SkillFour="React | Redux"
        />

        <SkillCard
          imageSrc="/ServerIcon.jpg"
          FieldTitle="Server"
          SkillOne="NodeJS"
          SkillTwo="Express"
          SkillThree="Python"
        />

        <SkillCard
          imageSrc="/DatabaseIcon.png"
          FieldTitle="Database"
          SkillOne="PostgreSQL"
          SkillTwo="MySQL"
          SkillThree="MongoDB"
        />

        <SkillCard
          imageSrc="/CloudIcon.png"
          FieldTitle="Deployment"
          SkillOne="Firebase"
          SkillTwo="AWS"
          SkillThree="Docker"
        />
      </div>

      <Button class="btn-resume" primary>
        Download Resume
      </Button>
      <h4>Or take a quick look below </h4>
    </div>
  );
}

export default About;
