import React from "react";
import GoogleLogout from 'react-google-login';
import { useHistory } from "react-router";
import "./GoogleLogin.css";

/* const clientId =
  "939804069180-elschdt94i4gs0jqf1r2lvm8g95fvim3.apps.googleusercontent.com"; */

function LogoutHooks() {
  const history = useHistory();

  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");
    res.session.destroy();
    sessionStorage.clear();
    history.push("/");
    alert("Logged out Successfully ✌");
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { logout } = GoogleLogout({
    clientId: null,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <GoogleLogout
    buttonText="Logout"
    onLogoutSuccess={logout}
  >
  </GoogleLogout>
  );
}

export default LogoutHooks;
