import React from "react";
import { otherProjects, projects } from "../config";
import MainProject from "../components/Project/MainProject/MainProject";
import OtherProject from "../components/Project/OtherProject/OtherProject";

export const Work = () => {
  return (
    <section id="projects" className="flex flex-col items-center gap-y-5">
      <h1 className="numbered-title">
        <span>03.</span>
        <span>Alguns projetos</span>
      </h1>

      <div className="flex w-full flex-col">
        {projects.map((project, index) => (
          <MainProject key={project.id} project={project} index={index} />
        ))}
      </div>
      <h2 className="my-10 text-3xl font-semibold text-lightest-slate">
        Outros projetinhos
      </h2>
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
        {otherProjects.map((project) => (
          <OtherProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
