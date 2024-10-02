import React, { Component } from "react";
import CodeSkills from "./CodeSkills";

export default class CodeSkillsGallery extends Component {
  render() {
    return (
      <section className="codeSkillsGallery">
        <ul className="codeSkillsContainerList">
          {CodeSkills.map((skill) =>
            skill === CodeSkills[CodeSkills.length - 1] ? (
              <li key={skill} className="codeSkill">
                <span className="skill">{skill}</span>
              </li>
            ) : (
              <li key={skill} className="codeSkill">
                <span className="skill">{skill}</span>
                <span className="seperator">•</span>
              </li>
            )
          )}
        </ul>
      </section>
    );
  }
}
