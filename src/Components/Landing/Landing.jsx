import React, { Component } from "react";
import nameAndTitle from "./NAME AND TITLE.png";
import backgroundVideoLandscape from "./WEBSITE BACKGROUND LANDSCAPE.mp4";
import backgroundPosterLandscape from "./WEBSITE POSTER LANDSCAPE.jpg";
import backgroundVideoPortrait from "./WEBSITE BACKGROUND PORTRAIT.mp4";
import backgroundPosterPortrait from "./WEBSITE POSTER PORTRAIT.jpg";

export default class Landing extends Component {
  render() {
    return (
      <section className="landing">
        <section className="nameAndTitle">
          <img
            src={nameAndTitle}
            className="nameImage"
            alt="Cameron Corrado - Digital Media & Technology Professional"
          />
        </section>
        <video
          src={backgroundVideoPortrait}
          className="backgroundVideoPortrait"
          playsInline
          autoPlay
          loop
          muted
          disablePictureInPicture
          poster={backgroundPosterPortrait}
        />
        <video
          src={backgroundVideoLandscape}
          className="backgroundVideoLandscape"
          playsInline
          autoPlay
          loop
          muted
          disablePictureInPicture
          poster={backgroundPosterLandscape}
        />
      </section>
    );
  }
}
