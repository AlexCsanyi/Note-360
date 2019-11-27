import React from "react";
import MoodOutlinedIcon from "@material-ui/icons/MoodOutlined";
import MemoryIcon from "@material-ui/icons/Memory";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Footer = () => {
  const iconStyle = {
    color: "#ffffff"
  };

  return (
    <div id="footerContainer">
      <ul className="benefitsContainer">
        <li>
          <MoodOutlinedIcon style={iconStyle}></MoodOutlinedIcon>
          <p>Stress</p>
        </li>
        <li>
          <MemoryIcon style={iconStyle}></MemoryIcon>
          <p>Memory</p>
        </li>
        <li>
          <WbSunnyOutlinedIcon style={iconStyle}></WbSunnyOutlinedIcon>
          <p>Mood</p>
        </li>
        <li>
          <AddCircleOutlineIcon style={iconStyle}></AddCircleOutlineIcon>
          <p>Emotions</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
