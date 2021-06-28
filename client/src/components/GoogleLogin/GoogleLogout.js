import React from "react";
import GoogleLogout from 'react-google-login';
import { useAppContext } from "../../services/contextLib.js";

import { useHistory } from "react-router";
import "./GoogleLogin.css";


const clientId =
  "939804069180-elschdt94i4gs0jqf1r2lvm8g95fvim3.apps.googleusercontent.com";

export default function LogoutHooks() {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();

  const handleLogoutSuccess = (res) => {
    userHasAuthenticated(0);
    console.log("Logged out Success");
    sessionStorage.clear();
    history.push("/");
    alert("Logged out Successfully ✌"); 
  };

  const handleLogoutFailure = error => {
    console.log("Logout Failure ", error);
  }

  return (
    <div>
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={handleLogoutSuccess}
          onFailure={handleLogoutFailure}
        />
      </div>
 
  );
}


