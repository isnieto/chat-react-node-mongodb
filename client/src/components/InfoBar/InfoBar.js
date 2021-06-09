import React from "react";

import onlineIcon from "../../images/source_icons_web-window.svg";
import closeIcon from "../../images/source_icons_web-window-close.svg";

import "./InfoBar.css";

export const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>Chatroom: {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/" class="close-icon">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);
