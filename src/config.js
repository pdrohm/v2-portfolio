const navLinks = [
  {
    name: "About",
    url: "#about",
    index: "01",
  },
  {
    name: "Experience",
    url: "#jobs",
    index: "02",
  },
  {
    name: "Work",
    url: "#projects",
    index: "03",
  },
  {
    name: "Contact",
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

export { experiences, navLinks, techs };
