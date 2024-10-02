import React, { Component } from "react";
import Hero from "./Bio/Hero";
import SocialsGallery from "./Socials/SocialsGallery";
import PhotoGallery from "./Photos/PhotoGallery";

export default class About extends Component {
  render() {
    return (
      <section className="about">
        <Hero />
        <SocialsGallery />
        <PhotoGallery />
      </section>
    );
  }
}
