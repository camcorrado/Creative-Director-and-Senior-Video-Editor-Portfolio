import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing/Landing";
import Video from "./Components/Video/Video";
import Code from "./Components/Code/Code";
import About from "./Components/About/About";

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <Nav />
        <Routes>
          <Route path="*" element={<Landing />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Code" element={<Code />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
    );
  }
}
