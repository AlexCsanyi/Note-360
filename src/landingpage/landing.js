import React from "react";
import Nav from "./components/nav";
import Icons from "./components/icons";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import Home from "./components/home";
// import {Route, NavLink, HashRouter } from "react-router-dom";

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
          <Home></Home>
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
