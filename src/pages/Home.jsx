import React from "react";
import { animated } from "react-spring";
import { useHomeAnimation } from "../utils/animation";

const Home = () => {
  const { spanAnimation, h1Animation, h2Animation, pAnimation } =
    useHomeAnimation();

  return (
    <section
      id="home"
      className="flex h-screen w-full flex-col items-start justify-start md:-mb-44"
    >
      <animated.span className="font-mono text-green" style={spanAnimation}>
        Oi, eu sou o{" "}
      </animated.span>
      <animated.h1
        className="text-3xl font-bold md:text-6xl"
        style={h1Animation}
      >
        Pedro H. Marques.
      </animated.h1>
      <animated.h2
        className="text-3xl font-bold text-light-slate md:text-6xl"
        style={h2Animation}
      >
        Eu construo coisas para a web.
      </animated.h2>
      <animated.p
        className="mt-10 w-2/3 text-start text-lg text-light-slate"
        style={pAnimation}
      >
        Eu sou um desenvolvedor web com mais de três anos de experiência. Focado
        em entregar maravilhosas experiências digitais, atualmente estou focado
        no frontend e suas maravilhas!
      </animated.p>
    </section>
  );
};

export default Home;
