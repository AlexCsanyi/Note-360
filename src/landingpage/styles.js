const styles = {
  // Navigation
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 10%"
  },
  navLinks: {
    listStyle: "none",

    "& li": {
      display: "inline-block",
      padding: "0px 20px",

      "& a": {
        textDecoration: "none"
      }
    }
  }
};

export default styles;
