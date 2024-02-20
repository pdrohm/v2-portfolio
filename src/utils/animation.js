import { useSpring, config } from "react-spring";
import { useInView } from "@react-spring/web";
import { useState } from "react";

export const useHomeAnimation = () => {
  const spanAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 100,
    config: { duration: 500 },
  });

  const h1Animation = useSpring({
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
    config: { duration: 500 },
  });

  const h2Animation = useSpring({
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 300,
    config: { duration: 500 },
  });

  const pAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 400,
    config: { duration: 500 },
  });

  return { spanAnimation, h1Animation, h2Animation, pAnimation };
};

export const useInfoAnimation = () => {
  const infoAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

  return { infoAnimation };
};
