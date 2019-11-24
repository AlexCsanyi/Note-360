import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";

import { Link } from "react-router-dom";
import Logo from "./logo";

const Nav = props => {
  const { classes } = props;

  return (
    <header className={classes.navContainer}>
      <Logo></Logo>
      <h1>NOTE 360</h1>
      <nav>
        <ul className={classes.navLinks}>
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

export default withStyles(styles)(Nav);
