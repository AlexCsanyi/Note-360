import React from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { style } from "@material-ui/system";

class EditorComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>Hello From the Editor</div>;
  }
}

export default withStyles(styles)(EditorComponent);
