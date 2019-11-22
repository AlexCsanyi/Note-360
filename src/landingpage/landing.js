import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class LandingComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.nav}>
          <div className={classes.logo}>
            <svg
              x="0px"
              y="0px"
              width="50px"
              height="44px"
              cx="50"
              cy="50"
              viewBox="0 -3 50 50"
            >
              <defs></defs>
              <g>
                <g class="lines">
                  <line
                    class="firstline"
                    x1="17.1"
                    y1="29.2"
                    x2="40"
                    y2="29.2"
                  />
                  <line
                    class="lastline"
                    x1="17.1"
                    y1="14.2"
                    x2="40"
                    y2="14.2"
                  />
                  <line
                    class="middleline"
                    x1="17.1"
                    y1="21.6"
                    x2="40"
                    y2="21.6"
                  />
                </g>
                <path
                  class="hexagon"
                  cx="50"
                  cy="50"
                  d="M49,20.1L38.4,1.8C37.8,0.7,36.5,0,35.3,0H14.2c-1.2,0-2.5,0.7-3.2,1.8L0.5,20.1C0.2,20.6,0,21.3,0,21.9
                  c0,0.7,0.2,1.3,0.5,1.8L11,42c0.6,1.1,1.9,1.8,3.2,1.8h21.1c1.2,0,2.5-0.7,3.2-1.8L49,23.7c0.3-0.5,0.5-1.2,0.5-1.8
                  C49.4,21.3,49.3,20.6,49,20.1z M45,21.9c0,0.3-0.1,0.6-0.2,0.8l-9.3,16.1c-0.3,0.5-0.9,0.8-1.5,0.8H15.4c-0.6,0-1.2-0.3-1.5-0.8
                  L4.6,22.8c-0.1-0.2-0.2-0.5-0.2-0.8s0.1-0.6,0.2-0.8L13.9,5c0.3-0.5,0.9-0.8,1.5-0.8H34c0.6,0,1.2,0.3,1.5,0.8l9.3,16.1
                  C44.9,21.3,45,21.6,45,21.9z"
                />
                <path
                  class="ac"
                  d="M34.6,10.5h-3.4c-0.3,0-0.5,0.2-0.5,0.5v11.6c-0.5,4.7-5.5,8.1-10.7,5.7c-1.3-0.6-2.3-1.7-2.9-2.9
                  c-2.6-5.4,1.3-10.7,6.4-10.7c0.9,0,1.7,0.2,2.5,0.5l0.4,0.2c0.4,0.2,0.7,0.3,1,0.6c0.4,0.2,1,0.1,1-0.7v-2.4c0-0.8,0-1.6-1.3-2
                  c0,0,0,0-0.7-0.2l0,0l0,0c-0.9-0.2-1.9-0.4-2.9-0.4c-8,0-14.1,8.1-10.7,16.5c1.1,2.7,3.3,4.9,6,6c4.5,1.8,8.8,0.9,11.9-1.6
                  c0,0.9,0,1.5,0,1.6c0,0.3,0.2,0.5,0.5,0.5c0.1,0,0.4,0,0.8,0c0.1,0,0.1,0,0.2,0h2.5c0.3,0,0.5-0.2,0.5-0.5V11.1
                  C35.1,10.8,34.9,10.5,34.6,10.5z"
                />
              </g>
            </svg>
          </div>
        </div>

        <div id="home"></div>
        <div id="about"></div>
        <div id="signup"></div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingComponent);
