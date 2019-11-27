import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import DeleteIcon from "@material-ui/icons/Delete";

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
      <div>
        <CreateIcon style={iconStyle} fontSize="default"></CreateIcon>
        <span>Create</span>
      </div>
      <div>
        <ChromeReaderModeIcon
          style={iconStyle}
          fontSize="default"
        ></ChromeReaderModeIcon>
        <span>Read</span>
      </div>
      <div>
        <NoteAddIcon style={iconStyle} fontSize="default"></NoteAddIcon>
        <span>Edit</span>
      </div>
      <div>
        <DeleteIcon style={iconStyle} fontSize="default"></DeleteIcon>
        <span>Delete</span>
      </div>
    </div>
  );
};

export default Icons;
