import React from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";

class EditorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: "",
      update: ""
    };
  }

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
      update: this.props.selectedNote.timestamp
        ? this.props.selectedNote.timestamp.toDate()
        : new Date()
    });
  };

  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
        update: this.props.selectedNote.timestamp
          ? this.props.selectedNote.timestamp.toDate()
          : new Date()
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <BorderColorIcon className={classes.editIcon} />
        <Typography
          value={this.state.update}
          className={classes.upDate}
          variant="body2"
        >
          Last update: {this.state.update.toString()}
        </Typography>
        <input
          className={classes.titleInput}
          placeholder="Note title..."
          value={this.state.title ? this.state.title : ""}
          onChange={e => this.updateTitle(e.target.value)}
        />
        <ReactQuill value={this.state.text} onChange={this.updateBody} />
      </div>
    );
  }

  updateBody = async val => {
    await this.setState({ text: val });
    this.update();
  };

  updateTitle = async txt => {
    await this.setState({ title: txt });
    this.update();
  };

  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text,
      update: this.state.update
    });
  }, 1500);
}

export default withStyles(styles)(EditorComponent);
