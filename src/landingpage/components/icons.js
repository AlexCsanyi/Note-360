import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import DeleteIcon from "@material-ui/icons/Delete";

import "./icons.css";

const Icons = () => {
  const iconStyle = {
    color: "#ffffff",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    padding: "10px",
    borderBox: "border-box"
  };

  return (
    <div className="iconContainer">
      <CreateIcon style={iconStyle} fontSize="default"></CreateIcon>
      <ChromeReaderModeIcon
        style={iconStyle}
        fontSize="default"
      ></ChromeReaderModeIcon>
      <NoteAddIcon style={iconStyle} fontSize="default"></NoteAddIcon>
      <DeleteIcon style={iconStyle} fontSize="default"></DeleteIcon>
    </div>
  );
};

export default Icons;
