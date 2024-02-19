import React from "react";
import logoPh from "../../../assets/ph-logo.png";
import { animated, useSpring } from "react-spring";

const Logo = () => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 200,
    }),
    [],
  );
  return (
    <animated.div
      className="relative ml-10 flex h-12 w-12 items-center justify-center border-2 border-green hover:text-green"
      style={props}
    >
      <a href="#home">
        <img src={logoPh} />
      </a>
    </animated.div>
  );
};

export default Logo;
