import React from "react";
import Nav from "./components/nav";

import "./landing.css";

class LandingComponent extends React.Component {
  render() {
    return (
      <div id="landing-container">
        <div className="main">
          <Nav></Nav>
        </div>
        <div className="secondary"></div>
      </div>
    );
  }
}

export default LandingComponent;
