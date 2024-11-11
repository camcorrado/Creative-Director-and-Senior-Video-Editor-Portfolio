import React, { Component } from "react";
import Headshot from "./Headshot.png";

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
            With over a decade of professional experience as a{" "}
            <span>Creative Director & Senior Video Editor</span>, I specialize
            in crafting visually captivating stories and bringing charm to every
            frame. My expertise spans all stages of production, with a strong
            focus on post-production and video editing, utilizing tools like{" "}
            <span>Adobe After Effects</span> and <span>Premiere Pro</span>.
          </p>
          <p>
            From directing and editing children’s music videos with{" "}
            <span>Music with Miss Merry</span> to supporting LGBTQ+ creators in
            launching their careers with <span>TIM Global</span>, I’ve been
            fortunate to create impactful content across diverse platforms. I've
            honed my ability to streamline workflows, manage extensive media
            libraries, and ensure brand consistency across channels - all while
            structuring complex projects with an eye for detail.
          </p>
          <p>
            A foundation in <span>Film & Media Studies</span> from{" "}
            <span>SUNY Purchase</span> shaped my creative approach, cultivating
            a keen eye for both the whimsical and the well-crafted. This
            background, coupled with technical training in{" "}
            <span>Full-Stack Web Development</span>, provided the skills to
            build the very website you’re visiting today.
          </p>
          <p>
            Outside of work, you'll find me in my garden-side hammock with my
            cat, playing board and video games with friends, hunting for
            collectibles at yard sales, or enjoying questionably good horror
            movies.
          </p>
          <p>
            Thank you for visiting! I hope my work resonates with you, and I
            look forward to the possibility of collaborating.
          </p>
        </section>
      </section>
    );
  }
}
