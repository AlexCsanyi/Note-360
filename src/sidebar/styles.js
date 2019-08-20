const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 0px 2px black"
  },
  newChatBtn: {},
  newNoteBtn: {},
  sidebarContainer: {},
  newNoteInput: {
    width: "99%",
    margin: "0px",
    height: "35px",
    outline: "none",
    border: "none",
    paddingLeft: "5px",
    "&:focus": {
      outline: "2px solid rgba(81, 203, 238, 1)"
    }
  },
  newNoteSubmitBtn: {}
});

export default styles;
