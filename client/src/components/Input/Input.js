import React from "react";

//import "font-awesome/css/font-awesome.min.css";
import submittArrow from "../../images/source_icons_submitt.svg";

import "./Input.css";

export const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message!!!!.."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      <div>
        <img src={submittArrow} alt="submitt-arrow" id="arrow"/>
      </div>
    </button>
  </form>
);
