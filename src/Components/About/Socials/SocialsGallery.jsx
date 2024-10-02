import React, { Component } from "react";
import Socials from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SocialsGallery extends Component {
  render() {
    return (
      <section className="socialsGallery">
        <ul className="socialsContainerList">
          {Socials.map((social) => (
            <li key={social.name} className="social">
              <a
                className="socialLink"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
              >
                <FontAwesomeIcon icon={social.icon} className="faIcon" />
                <p>{social.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
