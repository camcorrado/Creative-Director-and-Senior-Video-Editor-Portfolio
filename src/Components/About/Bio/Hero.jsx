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
            As a technically-minded professional with over a decade of
            experience, my career has always revolved around solving problems,
            improving workflows, organizational prowess, and making complex
            systems run as efficiently as possible.
          </p>
          <p>
            A Bachelor of Arts in Film & Media Studies from SUNY Purchase laid
            the groundwork for my career, giving me a deep understanding of the
            technical side of media production: from managing complex video
            workflows to mastering tools like Adobe Premiere Pro and After
            Effects. My work has ranged from the end-to-end production of
            educational children’s music videos with Music with Miss Merry to
            supporting LGBTQ+ creators with TIM Global, always focusing on the
            effective use of technology to deliver polished, impactful content.
          </p>
          <p>
            My technical expertise extends beyond media production into
            Full-Stack Web Development, where I’ve gained proficiency in HTML,
            CSS, JavaScript, React, and SQL. I’ve built numerous user-friendly,
            interactive websites that translate complex ideas into functional
            and visually engaging designs - including this very site you’re
            visiting right now!
          </p>
          <p>
            The common thread in all my work has been a deep understanding of
            technology and how to leverage it effectively. With a solid
            foundation in technical skills and a passion for continuous
            learning, I’m currently working toward certifications in IT support
            through Google’s IT Support Professional Certificate, along with A+
            (Hardware/Software), Network+, and Security+ certifications via
            CompTIA.
          </p>
          <p>
            In my free time, you’ll find me playing board and video games with
            friends, relaxing in my hammock with my cat, attracting wildlife to
            my garden, hunting for forgotten treasures at yard sales, digitizing
            endangered media, or enjoying some questionably good horror movies.
          </p>
          <p>
            Thanks for stopping by! I look forward to connecting and seeing how
            I can bring my skills to your team.
          </p>
        </section>
      </section>
    );
  }
}
