import React from "react";
import "../Sidebar/Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGuTboKmMCqLY3hlNJYtQzLUckTosF9xzcA&usqp=CAU"
          alt="cover Image"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Antony Jaison</h2>
        <h4>antonyjaison639@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2309</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2298</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
