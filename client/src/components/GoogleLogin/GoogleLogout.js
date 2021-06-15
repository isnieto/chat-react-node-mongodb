import React from "react";
import { useGoogleLogout } from "react-google-login";
import "./GoogleLogin.css";

const clientId =
  "939804069180-elschdt94i4gs0jqf1r2lvm8g95fvim3.apps.googleusercontent.com";

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");
    alert("Logged out Successfully ✌");
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="customBtn">
       <img src="./google.svg" alt="google out" className="icon"></img>
      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;
