import React, { Component } from "react";
import ReelCard from "./ReelCard";
import Reels from "./Reels";

export default class ReelGallery extends Component {
  render() {
    return (
      <section className="reelGallery">
        <ul className="reelContainerList">
          {Reels.map((reel) => (
            <li key={reel.id} className="reel">
              <ReelCard reel={reel} key={reel.id} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
