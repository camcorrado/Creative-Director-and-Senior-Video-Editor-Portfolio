import React, { Component } from "react";

export default class PhotoCard extends Component {
  render() {
    const { photo, alt } = this.props.photo;
    return (
      <section className="photoCard">
        <img src={photo} alt={alt} className="photoCardPhoto" />
      </section>
    );
  }
}
