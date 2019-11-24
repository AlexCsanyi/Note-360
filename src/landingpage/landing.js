import React from "react";
import Nav from "./components/nav";

import "./landing.css";

class LandingComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav></Nav>
      </div>
    );
  }
}

export default LandingComponent;
