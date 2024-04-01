import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

const DataMobile = ({ project }) => {
  return (
    <div className="flex w-full flex-col gap-y-5 rounded-sm bg-light-navy p-6 md:hidden">
      <h1 className="text-xl font-semibold text-lightest-slate">
        {project.title}
      </h1>
      <p>{project.description}</p>
      <div className="flex flex-wrap gap-x-4 font-mono text-sm">
        {project.techs.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="flex gap-x-5 text-xl">
        <a
          href={project.githubLink}
          target="_blank"
          className="hover:text-green"
        >
          <VscGithubAlt />
        </a>
        <a href={project.link} target="_blank" className="hover:text-green">
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
};

const DataDesktop = ({ project }) => {
  return (
    <div className="-ml-20  hidden w-1/2 flex-col items-end justify-center gap-y-5 md:flex">
      <h1 className=" cursor-pointertext-xl font-semibold text-lightest-slate transition-colors ease-in-out hover:text-green md:text-2xl">
        <a href={project.link} target="_blank">
          {project.title}
        </a>
      </h1>
      <div className="z-10 rounded-sm bg-light-navy p-6 shadow-xl">
        {project.description}
      </div>

      <div className="flex gap-x-4 font-mono text-sm">
        {project.techs.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="flex gap-x-5 text-xl">
        <a
          href={project.githubLink}
          target="_blank"
          className="hover:text-green"
        >
          <VscGithubAlt />
        </a>
        <a href={project.link} target="_blank" className="hover:text-green">
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
};

const ProjectData = ({ project }) => {
  return (
    <>
      <DataDesktop project={project} />
      <DataMobile project={project} />
    </>
  );
};

export default ProjectData;
