import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <section className="menu">
          <Link to="/Video" aria-label="Video">
            Video
          </Link>
          <Link to="/Code" aria-label="Code">
            Code
          </Link>
          <Link to="/About" aria-label="About">
            About
          </Link>
        </section>
      </nav>
    );
  }
}
