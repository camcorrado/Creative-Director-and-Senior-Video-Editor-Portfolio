import React, { Component } from "react";

export default class ReelCard extends Component {
  render() {
    const { video, alt } = this.props.reel;
    return (
      <section className="reelCard">
        <iframe
          src={video}
          alt={alt}
          className="reelPlayer"
          frameborder="0"
          allow="fullscreen;"
        />
      </section>
    );
  }
}
