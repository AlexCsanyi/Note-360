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
        <div className="secondary">
          <div id="secondary-text-container">
            <h2>
              Introducing <span id="green-subtitle">NOTE 360</span>, an App
              Designed for <span id="green-underline">Better Performance</span>.
            </h2>
            <p id="secondary-bold-paragraph">
              Designed to help organize notes and make it easier to review your
              content.
            </p>
            <div className="secondary-info">
              <p className="secondary-info-title">Users</p>
              <p className="secondary-info-title">Likes</p>
              <p className="secondary-info-value">1,500</p>
              <p className="secondary-info-value">4,200</p>
            </div>
            <div className="secondary-noMargin">
              <p className="secondary-info-title">W.R.I.T.E.</p>
              <p className="secondary-info-value">
                What Topic | Review | Investigate | Time Yourself | Exit Smart
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingComponent;
