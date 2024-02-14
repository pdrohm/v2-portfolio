import React from "react";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

const OtherProject = ({ project }) => {
  return (
    <div className="duration-800 flex flex-col items-center gap-y-6 rounded-sm bg-light-navy px-7 py-8 shadow-xl transition hover:-translate-y-2 hover:ease-in-out">
      <div className="flex w-full items-center justify-between ">
        <CiFolderOn className="text-5xl text-green" />
        <div className="flex gap-x-2">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank">
              <VscGithubAlt className="cursor-pointer text-2xl hover:text-green" />
            </a>
          )}

          {project.link && (
            <a href={project.link} target="_blank">
              <FiExternalLink className="cursor-pointer text-2xl hover:text-green" />
            </a>
          )}
        </div>
      </div>

      <h1 className="text-2xl font-semibold">{project.title}</h1>
      <p>{project.description}</p>
      <div className="flex gap-x-4 font-mono text-[10px]">
        {project.techs.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default OtherProject;
