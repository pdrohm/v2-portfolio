import React from "react";
import { socials } from "../../config";
import VerticalLine from "../VerticalLine/VerticalLine";
import { useInfoAnimation } from "../../utils/animation";
import { animated } from "react-spring";

const Socials = () => {
  const { infoAnimation } = useInfoAnimation();
  return (
    <animated.div
      className="fixed hidden flex-col items-center gap-y-5 md:bottom-0 md:left-10 md:flex"
      style={infoAnimation}
    >
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:-translate-y-1 hover:text-green"
        >
          <social.icon />
        </a>
      ))}
      <VerticalLine />
    </animated.div>
  );
};

export default Socials;
