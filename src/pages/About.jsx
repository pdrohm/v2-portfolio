import React from "react";

import picture from "../assets/fotoph.jpeg";
import { techs } from "../config";
import { GoTriangleRight } from "react-icons/go";
import FadeIn from "../components/FadeIn/FadeIn";

const About = () => {
  return (
    <FadeIn>
      <section id="about" className="flex  flex-col justify-start md:h-screen">
        <h1 className="numbered-title">
          <span>01.</span>
          <span>Sobre Mim</span>
        </h1>
        <div className="my-10 flex flex-col items-center justify-center  gap-x-5 md:flex-row md:items-start">
          <div className="flex flex-col gap-y-5 md:w-2/3">
            <p>
              Olá! Meu nome é Pedro Henrique e eu gosto de criar sites e coisas
              que ficam na internet. Meu interesse em desenvolvimento web
              começou por volta de 2017, na época em que eu trabalhava como
              auxiliar de escritório e comecei meus estudos em algoritmos e
              HTML/CSS básico.
            </p>
            <p>
              Pulando para hoje, trabalho como desenvolvedor desde o início de
              2021. Sendo que minha carreira na área tech começou em 2018, como
              suporte de usuário. De lá para cá, tive o privilégio de trabalhar
              com diversos projetos e times diferentes, como uma das maiores
              empresas de segurança digital do Brasil,
              <a
                href="https://innovaconnect.com.br/"
                className="text-underline"
                target="_blank"
              >
                uma promissora software house no Sul do Brasil
              </a>
              e no
              <a
                href="https://institutostecnologia.senai.br/"
                target="_blank"
                className="text-underline"
              >
                instituto de tecnologia do maior complexo privado de educação
                profissional da América Latina.
              </a>
            </p>

            <p>
              Aqui esta algumas das tecnologias que estive trabalhando
              recentemente:
            </p>
            <ul className="grid grid-cols-2 gap-y-4">
              {techs.map((tech) => (
                <>
                  <li key={tech.name} className="flex items-center text-sm">
                    <GoTriangleRight color={"#64ffda"} />
                    {tech.name}
                  </li>
                </>
              ))}
            </ul>
          </div>

          <div className="group relative mt-10 md:mt-0">
            <div className="absolute left-3 top-4 h-72 w-72 translate-x-0 transform rounded-md border-2 border-green transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <img
              src={picture}
              alt="foto Pedro H. Marques"
              className="relative z-10 h-72 w-72 translate-x-0 transform rounded-md object-cover transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default About;
