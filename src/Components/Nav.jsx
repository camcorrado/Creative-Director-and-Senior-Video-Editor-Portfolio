import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <section className="menu">
          <Link to="/Video">Video</Link>
          <Link to="/Code">Code</Link>
          <Link to="/About">About</Link>
        </section>
      </nav>
    );
  }
}
