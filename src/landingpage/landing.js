import React from "react";
import Logo from "./components/logo";
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
          <header className="navContainer">
            <div id="logoContainer">
              <Logo></Logo>
              <h1>NOTE 360</h1>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/landing">Home</Link>
                </li>
                <li>
                  <Link to="/landing">Pricing</Link>
                </li>
                <li>
                  <Link to="/landing">Creators</Link>
                </li>
              </ul>
            </nav>
          </header>
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
