import React from "react";
import "./topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Language, Settings, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Zinnox</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            {" "}
            <Notifications />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            {" "}
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            {" "}
            <Settings />
          </div>
          <img
            src="https://media-exp1.licdn.com/dms/image/D5635AQGTVYQl0iPNVw/profile-framedphoto-shrink_400_400/0/1632305561300?e=1647885600&v=beta&t=9gzhooLlYugXrFJR4OO-nORtnBIo2rc0EuRgmNbK3bc"
            alt="img"
            className="topAvatar"
          ></img>
        </div>
      </div>
    </div>
  );
}
