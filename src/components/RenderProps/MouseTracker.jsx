import React, { Component } from "react";
import Mouse from "./Mouse.jsx";
import Cat from "./Cat.jsx";

export default class MouseTracker extends Component {
  render() {
    return (
      <>
        <h1>Move the mouse around!</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </>
    );
  }
}
