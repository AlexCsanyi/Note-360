import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "../sidebaritem/sidebarItem";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

const firebase = require("firebase");

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null
    };
  }

  render() {
    const { user, notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button
            variant="contained"
            color={this.state.addingNote ? "secondary" : "primary"}
            onClick={this.newNoteBtnClick}
            className={classes.newNoteBtn}
          >
            {this.state.addingNote ? "Cancel" : "New Note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Enter Note Title"
                onKeyUp={e => this.updateTitle(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit Note
              </Button>
            </div>
          ) : null}
          <List>
            {notes.map((_note, _index) => {
              return (
                <div key={_index}>
                  <SidebarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  />
                  <Divider />
                </div>
              );
            })}
          </List>
          <Chip icon={<FaceIcon />} label={user} className={classes.chip} />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.signOut}
            className={classes.signOutBtn}
          >
            Sign Out
          </Button>
        </div>
      );
    } else {
      return <div />;
    }
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };

  updateTitle = txt => {
    this.setState({ title: txt });
  };

  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({
      title: null,
      addingNote: false
    });
  };

  selectNote = (n, i) => {
    this.props.selectNote(n, i);
  };

  deleteNote = note => {
    this.props.deleteNote(note);
  };

  signOut = () => {
    firebase.auth().signOut();
  };
}

export default withStyles(styles)(SidebarComponent);
