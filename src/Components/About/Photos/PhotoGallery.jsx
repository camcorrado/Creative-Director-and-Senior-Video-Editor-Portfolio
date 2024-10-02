import React, { Component } from "react";
import PhotoCard from "./PhotoCard";
import Photos from "./Photos";

export default class PhotoGallery extends Component {
  render() {
    return (
      <section className="photoGallery">
        <ul className="photoContainerList">
          {Photos.map((photo) => (
            <li key={photo.name} className="photo">
              <PhotoCard photo={photo} key={photo.id} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
