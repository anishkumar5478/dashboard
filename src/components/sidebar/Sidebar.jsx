import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Inventory,
  Paid,
  BarChart,
  Mail,
  Feedback,
  Comment,
  ManageAccounts,
  Report,
} from "@mui/icons-material";
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
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonOutline />
              Users
            </li>
            <li className="sidebarListItem">
              <Inventory />
              Products
            </li>
            <li className="sidebarListItem">
              <Paid />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Mail />
              Mails
            </li>
            <li className="sidebarListItem">
              <Feedback />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Comment />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ManageAccounts />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
