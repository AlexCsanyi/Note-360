import Image from "../images/signupBg.jpg";

const useStyles = theme => ({
  "@global": {
    body: {
      background: `url(${Image}) center / cover`,
      overflow: "hidden"
    }
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    alignItems: "center"
  },
  title: {
    fontSize: "18px",
    marginBottom: "5px",
    textDecoration: "none"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#00C170"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  errorText: {
    color: "red",
    textAlign: "center"
  },
  link: {
    color: "#000000",
    textDecoration: "none"
  },
  signIn: {
    color: "#00C170",
    textTransform: "upperCase",
    textDecoration: "underline #00C170"
  }
});

export default useStyles;
