import React, { Component } from "react";
import VideoSkills from "./VideoSkills";

export default class VideoSkillsGallery extends Component {
  render() {
    return (
      <section className="videoSkillsGallery">
        <ul className="videoSkillsContainerList">
          {VideoSkills.map((skill) =>
            skill === VideoSkills[VideoSkills.length - 1] ? (
              <li key={skill} className="videoSkill">
                <span className="skill">{skill}</span>
              </li>
            ) : (
              <li key={skill} className="videoSkill">
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
