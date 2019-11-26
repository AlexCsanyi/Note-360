import React from "react";
import Nav from "./components/nav";
import Icons from "./components/icons";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

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
              <p className="secondary-info-title">Most famous journal</p>
              <p className="secondary-info-title">Written by</p>
              <p className="secondary-info-value">Codex Arundel</p>
              <p className="secondary-info-value">Leonardo da Vinci</p>
            </div>
            <div>
              <p className="secondary-info-title">
                Earliest known example of keeping a diary or journal
              </p>
              <p className="secondary-info-value">
                Roman Emperor Marcus Aurelius
              </p>
            </div>
            <div className="secondary-noMargin">
              <p className="secondary-info-title">
                What is Effective Journaling?
              </p>
              <p className="secondary-info-value">
                Effective journaling is a journaling practice that helps you
                meet your goals or improves your quality of life. This can look
                different for each and every person, and the outcomes can vary
                widely, but they are almost always very positive. Journaling can
                be effective for many different reasons and help you reach a
                wide range of goals. It can help you clear your head, make
                important connections between thoughts, feelings, and behaviors,
                and even buffer or reduce the effects of mental illness!
              </p>
            </div>
          </div>
          <div id="secondary-button-container">
            <button>
              <Link to="/signup">Sign Up</Link>
            </button>
            <p>
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingComponent;
