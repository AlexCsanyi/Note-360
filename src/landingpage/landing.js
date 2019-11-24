import React from "react";
import Nav from "./components/nav";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class LandingComponent extends React.Component {
  render() {
    return (
      <div>
        <Nav></Nav>
      </div>
    );
  }
}

export default withStyles(styles)(LandingComponent);
