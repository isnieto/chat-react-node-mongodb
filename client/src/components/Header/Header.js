import React from "react";
import { useHistory } from "react-router";
import { useAppContext } from "../../services/contextLib";
import LogoutHook from "../GoogleLogin/GoogleLogout.js";
import "./Header.css";

import closeIcon from "../../images/source_icons_web-window-close.svg";

export default function Header() {
  const history = useHistory();
  const { isAuthenticated, userHasAuthenticated } = useAppContext();

  function handleLogout() {
    userHasAuthenticated(0);
    sessionStorage.clear();
    history.push("/");
  }

  return (
    <header>
      <h1>Chat App</h1>
      {isAuthenticated === 1 ? (
        <nav>
          <ul>
            <li>
              <a href="/" onClick={handleLogout}>
                Logout <img className="icon" src={closeIcon} alt="close icon" />
              </a>
            </li>
          </ul>
        </nav>
      ) : isAuthenticated === 2 ? (
        <LogoutHook />
      ) : null}
    </header>
  );
}
