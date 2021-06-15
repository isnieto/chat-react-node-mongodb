import React from "react";
import { useHistory } from "react-router";
import { useAppContext } from "../../services/contextLib";
import { GoogleLogout } from "react-google-login";
import LogoutHook from "../GoogleLogin/GoogleLogout.js";
import "./Header.css";

import closeIcon from "../../images/source_icons_web-window-close.svg";



export default function Header() {
  const history = useHistory();
  const { isAuthenticated, userHasAuthenticated } = useAppContext();
  const { isGoogle } = useAppContext();

  function handleLogout() {
    userHasAuthenticated(false);
    sessionStorage.clear();
    history.push("/");
  }

  return (
    <header>
      <h1>Chat App</h1>
      {/*  {isAuthenticated && !isGoogle ? (
        <nav>
          <ul>
            <li>
              <a href="/" onClick={handleLogout}>
                Logout <img class="icon" src={closeIcon} alt="close icon" />
              </a>
            </li>
          </ul>
        </nav>
      ) : isGoogle ? (
        <div>
          <LogoutHook />
        </div>
      ) : null} */}
      {isGoogle ? (
        
          <LogoutHook />
        
      ) : isAuthenticated && !isGoogle ? (
        <nav>
          <ul>
            <li>
              <a href="/" onClick={handleLogout}>
                Logout <img class="icon" src={closeIcon} alt="close icon" />
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
