import React from "react";
import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp />
              Sale
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
