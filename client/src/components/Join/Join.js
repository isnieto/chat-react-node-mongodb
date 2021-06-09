import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export const Join = ({ userLogged }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    setMsg("");
    try {
      if (!name || !room) {
        e.preventDefault();
        setMsg("Alias and password needed to Chat");
      }
    } catch (e) {
      setMsg(e);
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join a Chatroom</h1>
        <p id="warning">{msg}</p>
        <div>
          <input
            placeholder="Alias"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link onClick={handleSubmit} to={`/chat?name=${name}&room=${room}`}>
          <button className={"button mt-20"} type="submit">
            Chat
          </button>
        </Link>
      </div>
    </div>
  );
};
