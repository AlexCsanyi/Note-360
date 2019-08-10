import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      passwordConfirmation: null,
      signupError: ""
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={e => this.submitSignup(e)} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required={true}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={e => this.userTyping("firstName", e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required={true}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={e => this.userTyping("lastName", e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required={true}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={e => this.userTyping("email", e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required={true}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e => this.userTyping("password", e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required={true}
                  fullWidth
                  name="passwordConfirmation"
                  label="Password Confirmation"
                  type="password"
                  id="password-confirmation"
                  onChange={e => this.userTyping("passwordConfirmation", e)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link href="#" variant="body2" to="/signin">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
          {this.state.signupError ? (
            <Typography
              className={classes.errorText}
              component="h6"
              variant="h6"
            >
              {this.state.signupError}
            </Typography>
          ) : null}
        </div>
      </Container>
    );
  }

  userTyping = (type, e) => {
    switch (type) {
      case "firstName":
        this.setState({ firstName: e.target.value });
        break;
      case "lastName":
        this.setState({ lastName: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      case "passwordConfirmation":
        this.setState({ passwordConfirmation: e.target.value });
        break;
      default:
        break;
    }
  };

  submitSignup = e => {
    e.preventDefault();
    console.log("submitting", this.state);
  };
}

export default withStyles(useStyles)(SignUp);
