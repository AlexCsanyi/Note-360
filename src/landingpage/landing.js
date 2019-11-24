import React from "react";
import Nav from "./components/nav";
import Icons from "./components/icons";
import Footer from "./components/footer";

import "./landing.css";

class LandingComponent extends React.Component {
  render() {
    return (
      <div id="landing-container">
        <div className="main">
          <Nav></Nav>
          <Icons></Icons>
          <Footer></Footer>
        </div>
        <div className="secondary"></div>
      </div>
    );
  }
}

export default LandingComponent;
