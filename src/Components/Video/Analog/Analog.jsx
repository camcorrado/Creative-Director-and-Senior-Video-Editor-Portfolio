import React, { Component } from "react";
import VHS from "./VHS.jpg";
import CRT from "./CRT.gif";

export default class Analog extends Component {
  render() {
    return (
      <section className="analog">
        <section className="crtContainer">
          <img src={CRT} className="crt" alt="CRT TV" />
        </section>
        <section className="analogDesc">
          <p>
            My passion for VHS and analog media is a key part of my creative
            process. I curate a personal collection of VHS tapes, focusing on
            genres such as horror, LGBTQ+ themes, nostalgic titles, and rare,
            obscure films. The distinct textures and playback characteristics of
            analog media often serve as inspiration for my modern projects,
            where I incorporate these elements to evoke a retro aesthetic.
          </p>
          <p>
            In addition to my collection, I specialize in the restoration and
            digitization of VHS tapes, ensuring the preservation of endangered
            media.
          </p>
        </section>
        <section className="vhsContainer">
          <img src={VHS} className="vhsTapes" alt="VHS tapes" />
        </section>
      </section>
    );
  }
}
