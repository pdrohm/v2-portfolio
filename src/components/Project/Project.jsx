import React from "react";

import ProjectCover from "./ProjectCover";
import ProjectData from "./ProjectData";

const Project = ({ project }) => {
  return (
    <div className="relative my-14 flex w-full flex-row justify-center">
      <ProjectCover project={project} />
      <ProjectData project={project} />
    </div>
  );
};

export default Project;
