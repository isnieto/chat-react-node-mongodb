import React from "react";
import { useHistory } from "react-router";
import { useAppContext } from "../../services/contextLib";
//import LogoutHook from "../GoogleLogin/GoogleLogout.js";
import { GoogleLogout } from "react-google-login";
import "./Header.css";
import { gapi } from 'gapi-script';

import closeIcon from "../../images/source_icons_web-window-close.svg";

export default function Header() {
  const history = useHistory();
  const { isAuthenticated, userHasAuthenticated } = useAppContext();

  function handleLogout() {
    userHasAuthenticated(0);
    sessionStorage.clear();
    history.push("/");
  }

  const handleLogoutSuccess = (res) => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
    });
    userHasAuthenticated(0);
    console.log("Logged out Success");
    sessionStorage.clear();
    history.push("/");
    alert("Logged out Successfully ✌");
  };
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
      ) : isAuthenticated > 1 ? (
        //<LogoutHook />
        <nav>
          <ul>
            <li>
              <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={handleLogoutSuccess}
              ></GoogleLogout>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
