import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  whiteTextColor: {
    color: "white"
  }
});

class ButtonAppBar extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: false,
      email: null
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title} />
            {!this.state.loggedInStatus ? (
              <div>
                <Link underline="none" variant="h5" to="/signin">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Sign In
                  </Button>
                </Link>
                <Link underline="none" variant="h5" to="/signup">
                  <Button
                    style={{ marginLeft: "5px" }}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <div>
                <Typography variant="body2">{this.sate.email}</Typography>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(ButtonAppBar);
