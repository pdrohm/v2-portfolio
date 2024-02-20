import React from "react";
import VerticalLine from "../VerticalLine/VerticalLine";
import { useInfoAnimation } from "../../utils/animation";
import { animated } from "react-spring";

const Email = () => {
  const { infoAnimation } = useInfoAnimation();

  return (
    <animated.div
      className="fixed -right-14 bottom-0 hidden flex-col items-center justify-center gap-y-40 font-mono text-sm md:flex"
      style={infoAnimation}
    >
      <a className="rotate-90 cursor-pointer hover:-translate-y-1  hover:text-green  ">
        opedrohenriquemarques@gmail.com
      </a>
      <VerticalLine />
    </animated.div>
  );
};

export default Email;
