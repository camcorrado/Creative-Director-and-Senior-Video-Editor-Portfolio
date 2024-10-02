import React, { Component } from "react";

export default class ProjectCard extends Component {
  render() {
    const {
      name,
      image,
      alt,
      description,
      mediums,
      link,
      repoClient,
      repoServer,
    } = this.props.project;
    return (
      <section className="projectCard">
        <img src={image} alt={alt} className="projectImage" />
        <div className="projectDetails">
          <h1>{name}</h1>
          <p>{description}</p>
          <h2>{mediums}</h2>
          <div className="projectLinks">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href={repoClient} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          </div>
        </div>
      </section>
    );
  }
}
