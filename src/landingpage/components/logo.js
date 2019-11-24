import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";

const Logo = () => {
  const logoStyle = {
    color: "#00C170"
  };

  return <DonutSmallIcon style={logoStyle} fontSize="large"></DonutSmallIcon>;
};

export default withStyles(styles)(Logo);
