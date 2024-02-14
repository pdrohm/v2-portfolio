const navLinks = [
  {
    name: "Sobre",
    url: "#about",
    index: "01",
  },
  {
    name: "Experiências",
    url: "#experience",
    index: "02",
  },
  {
    name: "Projetos",
    url: "#projects",
    index: "03",
  },
  {
    name: "Contato",
    url: "#contact",
    index: "04",
  },
];

const techs = [
  {
    name: "JavaScript (ES6+)",
  },
  {
    name: "React",
  },
  {
    name: "Node.js",
  },
  {
    name: "React Native",
  },
  {
    name: "TypeScript",
  },
  {
    name: "PHP",
  },
];

const experiences = [
  {
    company: "Senai Solucoes Digitais",
    position: "Dev FrontEnd",
    date: "Dez 2022 - Atualmente",
    description: [
      {
        sentence:
          "Responsavel pelas aplicações móveis da equipe, conduzi o desenvolvimento e manutenção de diversos projetos utilizando React Native, React, TypeScript, NodeJs, Styled Components e outras ferramentas.",
      },
      {
        sentence:
          "Atualizei e publiquei aplicativos na Apple App Store e na Play Store.",
      },
      {
        sentence:
          "Desenvolvi sistemas baseados em designs do Figma e Adobe XD. Respeitando e aderindo aos padrões pixel-perfect.",
      },
      {
        sentence:
          "Implementei o frontend de um sistema de chatbot com integração de IA em uma aplicação móvel e web com milhares de acessos.",
      },
    ],
    link: "https://institutostecnologia.senai.br/",
  },
  {
    company: "Innova Connect",
    position: "Dev FullStack",
    date: "Fev 2022 - Dez 2022",
    description: [
      {
        sentence:
          "Contribui ativamente para diversos projetos em destaque de um distribuidor brasileiro de produtos naturais, desenvolvendo o front-end e o back-end de e-commerces e portais de venda.",
      },
      {
        sentence:
          "Além de manutenções no banco de dados, por meio das tecnologias Vue, PHP e NodeJS contribui para diferentes projetos.",
      },
    ],
    link: "https://innovaconnect.com.br/",
  },
  {
    company: "Senai Solucoes Digitais",
    position: "Frontend Developer",
    date: "Fev 2021 - Fev 2022",
    description: [
      {
        sentence:
          "Participei do desenvolvimento de uma ferramenta interna (Kanban) que seria utilizada para organização de tarefas e apontamento de horas da empresa, utilizando principalmente React, Symfony (PHP), NodeJS e outras ferramentas.",
      },
      {
        sentence:
          "Desenvolvi sistemas baseados em designs do Figma e Adobe XD. Respeitando e aderindo aos padrões pixel-perfect.",
      },
      {
        sentence: "Desenvolvi e optimizei testes unitários e integrados.",
      },
    ],
    link: "https://institutostecnologia.senai.br/",
  },
  {
    company: "Ostec Business Security",
    position: "Frontend Developer",
    date: "Fev 2020 - Jan 2021",
    description: [
      {
        sentence: "Manutencao e prevencao de firewalls e redes corporativas.",
      },
      {
        sentence:
          "Analise de redes, resolucao de problemas e configuracao de firewall, proxy e VPN.",
      },
    ],

    link: "https://www.ostec.com.br/",
  },
];

import despachanteImage from "./assets/despachanteImage.png";
import phflixImage from "./assets/phflixImage.png";
import apolloImage from "./assets/apolloImage.png";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Despachante Beto",
    description:
      "Site utilizado para portfolio e captacao de clientes e leeds para o maior despachante de Tubarao, SC. Alem de integracao com whatsapp, o formulario de contatos esta integrado ao Google Sheets.",
    techs: ["React", "TailWindCSS", "Vite", "Hostinger"],
    link: "https://despachantebeto.com.br/",
    coverImage: despachanteImage,
    githubLink: "https://github.com/pdrohm/despachantebeto",
  },
  {
    id: 2,
    title: "PHFlix",
    description:
      "Copia da UI de um dos mais famosos Streamings atuais, o Netflix. O usuario pode navegar e visualizar series, filmes e desenhos. Contem design responsivo e foi utilizado com os dados da API TMDB.",
    techs: ["React", "CSS", "JavaScript", "Vercel"],
    link: "https://phflix-ashy.vercel.app/",
    coverImage: phflixImage,
    githubLink: "https://github.com/pdrohm/phflix",
  },
  {
    id: 3,
    title: "Apollo Soluções Solares",
    description:
      "A empresa tem uma solução que deve mudar o jeito que no Brasil as empresas de energia solar mede, controlam e armazenam dados solares, garantindo uma melhor tomada de decisão.",
    techs: ["React", "TailwindCSS", "JavaScript", "Render"],
    link: "https://apollo-website.onrender.com/",
    coverImage: apolloImage,
    githubLink: "https://github.com/pdrohm/apollows",
  },
];

const otherProjects = [
  {
    id: 1,
    title: "Star Wars Character Finder",
    description:
      "Integrado a API de starwars, foi um dos primeiros projetos que fiz para treino.",
    techs: ["React", "TailWindCSS", "SWApi", "Vercel"],
    link: "https://starwars-nine-nu.vercel.app/",
    githubLink: "https://github.com/pdrohm/starwars",
  },
  {
    id: 2,
    title: "PHBank",
    description:
      "Simples CRUD desenvolvido a UI com React, implementado filtro de CPF, busca e cadastro de CEP e validacoes de formulario.",
    techs: ["React", "Symfony", "PHP"],
    link: "",
    githubLink: "",
  },
  {
    id: 3,
    title: "GOBank",
    description:
      "Simples CRUD desenvolvido com a linguagem GO, servindo de aprendizado e introducao na linguagem.",
    techs: ["GO"],
    link: "",
    githubLink: "https://github.com/pdrohm/goBank",
  },
];

const socials = [
  {
    icon: VscGithubAlt,
    link: "https://github.com/pdrohm",
  },
  {
    icon: FiLinkedin,
    link: "https://www.linkedin.com/in/pdrohm/",
  },
];
export { navLinks, techs, experiences, projects, otherProjects, socials };
