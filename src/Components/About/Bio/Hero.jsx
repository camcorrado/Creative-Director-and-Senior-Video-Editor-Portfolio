import React, { Component } from "react";
import Headshot from "./HEADSHOT.png";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <section className="headShotContainer">
          <div className="circle">
            <img
              src={Headshot}
              className="mainHeadShot"
              alt="Cam Corrado Headshot"
              loading="lazy"
            />
          </div>
        </section>
        <section className="bio">
          <p>
            With over a decade of experience as a{" "}
            <span>Creative Director & Senior Video Editor</span>, I specialize
            in crafting visually captivating stories and bringing charm to every
            frame. My journey spans both corporate and independent projects,
            with a focus on post-production, children's educational content,
            music videos, and digital assets.
          </p>
          <p>
            From directing and editing full-scale music video productions with{" "}
            <span>Music with Miss Merry</span> to overseeing content creation
            for <span>TIM Global</span>, I've honed my ability to streamline
            workflows, manage vast media libraries, and ensure brand consistency
            across various channels. As an organizational wiz, I excel in
            structuring complex projects and storage systems, ensuring every
            piece of content is meticulously crafted and efficiently managed.
          </p>
          <p>
            My academic background in{" "}
            <span>Film & Media Studies from SUNY Purchase</span> laid the
            foundation for my creative approach, cultivating a keen eye for both
            the whimsical and the well-crafted. I've also expanded my technical
            repertoire with a focus on <span>Full-Stack Web Development</span>,
            building the very website you're visiting today.
          </p>
          <p>
            I'm also a self-proclaimed analog fanatic with a growing collection
            of VHS tapes! I'm passionate about the art of media preservation,
            digitizing, archiving, and sharing endangered media to keep it alive
            in the digital age. This love for analog content reflects my belief
            that every medium - whether vintage or modern - holds unique
            stories, and I'm committed to bringing those stories to life and
            keeping them alive.
          </p>
          <p>
            Outside of work, you'll find me in my garden-side hammock with my
            cat, playing board and video games with friends, meticulously
            scanning through yard sales and flea markets for collectables, or
            enjoying questionably-rated horror movies.
          </p>
          <p>
            Thank you for visiting! I hope my content resonates with you, and
            I'm excited about the possibility of working together.
          </p>
        </section>
      </section>
    );
  }
}
