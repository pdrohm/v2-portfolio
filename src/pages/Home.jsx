import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="flex h-screen w-full flex-col items-start justify-start md:-mb-44"
    >
      <span className="font-mono text-green">Oi, eu sou o </span>
      <h1 className="text-3xl font-bold md:text-6xl">Pedro H. Marques.</h1>
      <h2 className="text-3xl font-bold text-light-slate md:text-6xl">
        Eu construo coisas para a web.
      </h2>
      <p className="mt-10">
        Eu sou um desenvolver web com mais de tres anos de experiencia. Focado
        em entregar maravilhosas experienciais digitais, atualmente estou focado
        no frontend e suas maravilhas!
      </p>
    </section>
  );
};

export default Home;
