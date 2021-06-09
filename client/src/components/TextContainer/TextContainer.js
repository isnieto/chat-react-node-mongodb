import React from "react";

import onlineIcon from "../../images/online-icon.png";

import "./TextContainer.css";

export const TextContainer = ({ users }) => (
  <div className="textContainer">
    
    {users ? (
      <div>
        <h1>Users online</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                <img alt="Online Icon" src={onlineIcon} id="online" />
                {name}
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);