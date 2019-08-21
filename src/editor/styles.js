const styles = theme => ({
  editorNavbar: {
    display: "flex",
    backgroundColor: "#1e90ff",
    color: "white",
    borderTopRightRadius: "0.5em",
    borderTopLeftRadius: "0.5em",
    flexDirection: "column"
  },
  titleInput: {
    marginRight: "0",
    border: "none",
    fontSize: "24px",
    backgroundColor: "#1e90ff",
    color: "white",
    flexWrap: "nowrap",
    paddingLeft: "10px",
    alignSelf: "flex-start",
    "@media only screen and (max-width: 768px)": {
      textAlign: "center",
      width: "96%"
    }
  },
  editorContainer: {
    width: "81%",
    paddingLeft: "1%",
    paddingRight: "1%",
    marginTop: "1%",
    "@media only screen and (max-width: 768px)": {
      width: "100%"
    }
  },
  upDate: {
    flexWrap: "wrap",
    paddingRight: "10px",
    alignSelf: "flex-end",
    "@media only screen and (max-width: 768px)": {
      alignSelf: "center",
      textAlign: "center"
    }
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "5px",
    marginLeft: "5px",
    "@media only screen and (max-width: 768px)": {
      flexDirection: "column"
    }
  }
});

export default styles;
