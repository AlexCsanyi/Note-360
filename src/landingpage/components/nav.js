import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";

import './nav.css'

const Nav = props => {
  return (
    <header className="navContainer">
      <Logo></Logo>
      <h1>NOTE 360</h1>
      <nav>
        <ul className="navLinks">
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
  );
};

export default Nav;
