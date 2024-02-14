import React from "react";

const CoverMobile = ({ project }) => {
  return <div className="block md:hidden">TESTE</div>;
};

const CoverDesktop = ({ project }) => {
  return (
    <div className="z-2 top-0 hidden w-2/3 cursor-pointer md:block">
      <a href={project.link} target="_blank">
        <img
          src={project.coverImage}
          className="object-fill grayscale saturate-0 filter transition duration-200 ease-in-out hover:filter-none"
          alt="Project Cover"
        />
      </a>
    </div>
  );
};

const ProjectCover = ({ project }) => {
  return (
    <>
      <CoverDesktop project={project} />
    </>
  );
};

export default ProjectCover;
