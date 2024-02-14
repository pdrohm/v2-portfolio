import React from "react";
import { projects } from "../config";
import Project from "../components/Project/Project";

export const Work = () => {
  return (
    <section id="projects">
      <h1 className="numbered-title">
        <span>03.</span>
        <span>Alguns projetos</span>
      </h1>

      <div className="flex w-full flex-col">
        {projects.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
