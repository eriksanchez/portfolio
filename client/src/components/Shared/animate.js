import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const textIntro = (elem) => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: -1,
    ease: "back",
  });
};

export const backgroundFadeIn = (elem) => {
  gsap.from(elem.current, {
    opacity: 0,
    duration: 3,
    scale: 1,
    ease: "in",
  });
};

export const hoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.4,
    y: -3,
    skewX: 0,
    ease: "power2.inOut",
  });
};

export const skewGallery = (elem1) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(elem1, { transformOrigin: "right-center", forse3D: true });
  let clamp = gsap.utils.clamp(-20, 20);
  ScrollTrigger.create({
    trigger: elem1,
    onUpdate: (self) => {
      const velocity = clamp(Math.round(self.getVelocity() / 300));
      gsap.to(elem1, {
        skew: 0,
        skewY: velocity,
        ease: "power3",
        duration: 0.8,
        overwrite: true,
      });
    },
  });
};
