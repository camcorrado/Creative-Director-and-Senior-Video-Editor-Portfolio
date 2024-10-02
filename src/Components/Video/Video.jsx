import React, { Component } from "react";
import ReelGallery from "./Reels/ReelGallery";
import VideoSkillsGallery from "./Video Skills/VideoSkillsGallery";
import Analog from "./Analog/Analog";

export default class Video extends Component {
  render() {
    return (
      <section className="video">
        <ReelGallery />
        <VideoSkillsGallery />
        <Analog />
      </section>
    );
  }
}
