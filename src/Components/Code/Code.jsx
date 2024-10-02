import React, { Component } from "react";
import ProjectGallery from "./Projects/ProjectGallery";
import CodeSkillsGallery from "./Code Skills/CodeSkillsGallery";

export default class Code extends Component {
  render() {
    return (
      <section className="code">
        <ProjectGallery />
        <CodeSkillsGallery />
      </section>
    );
  }
}
