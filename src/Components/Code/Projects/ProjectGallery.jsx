import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";

export default class ProjectGallery extends Component {
  render() {
    return (
      <section className="projectGallery">
        <section className="projectsContainer">
          <ul className="projectsContainerList">
            {Projects.map((project) => (
              <li key={project.name} className="project">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      </section>
    );
  }
}
