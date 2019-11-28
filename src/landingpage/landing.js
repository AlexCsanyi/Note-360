import React from "react";
import Logo from "./components/logo";
import Icons from "./components/icons";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import Home from "./components/home";
import Pricing from "./pricing";
import Creators from "./creators";
import { Route, BrowserRouter, NavLink } from "react-router-dom";
// import PricingBg from "../images/pricingBg.jpg";
// import CreatorsBg from "../images/creatorsBg.jpg";

import "./landing.css";

class LandingComponent extends React.Component {
  render() {
    // const navLanding = document.getElementById("navLanding");
    // const navCreators = document.getElementById('navCreators');

    // let backgroundStyle = {
    //  background: document.getElementById("navPricing").hasClass("active")
    //    ? `url(${PricingBg})`
    //    : `url(${CreatorsBg})`
    // };

    return (
      <div>
        <BrowserRouter>
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
                      <NavLink id="navLanding" exact to="/landing">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink id="navPricing" exact to="/pricing">
                        Pricing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink id="navCreators" exact to="/creators">
                        Creators
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </header>
              <Icons></Icons>
              <Footer></Footer>
            </div>
            <div className="secondary">
              <Route exact path="/landing" component={Home}></Route>
              <Route exact path="/pricing" component={Pricing}></Route>
              <Route exact path="/creators" component={Creators}></Route>
            </div>
          </div>
        </BrowserRouter>
        <div className="button-container">
          <button>
            <Link to="/signup">Sign Up</Link>
          </button>
          <p>
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default LandingComponent;
