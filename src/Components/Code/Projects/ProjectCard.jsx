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
        <img src={image} alt={alt} className="projectImage" loading="lazy" />
        <div className="projectDetails">
          <h1>{name}</h1>
          <p>{description}</p>
          <h2>{mediums}</h2>
          <div className="projectLinks">
            {link === null ? (
              <></>
            ) : (
              <a
                href={link}
                aria-label={alt + " live"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            )}
            {repoServer === null ? (
              <a
                href={repoClient}
                aria-label={alt + " repository"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            ) : (
              <>
                <a
                  href={repoClient}
                  aria-label={alt + " client repository"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Repository
                </a>
                <a
                  href={repoServer}
                  aria-label={alt + " server repository"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server Repository
                </a>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}
