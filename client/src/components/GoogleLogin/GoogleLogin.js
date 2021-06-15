import React from "react";
import { useGoogleLogin } from "react-google-login";
//import PropTypes from "prop-types";
import userAuth from "../../services/userAuth";
//import { useHistory } from "react-router";
import { useAppContext } from "../../services/contextLib.js";
import "./GoogleLogin.css";

// refresh token
//import { refreshTokenSetup } from "./refreshToken";

const clientId =
  "939804069180-elschdt94i4gs0jqf1r2lvm8g95fvim3.apps.googleusercontent.com";

export default function GoogleLogin() {
  const { userHasAuthenticated } = useAppContext();
  //const history = useHistory();



  const onSuccess = (res) => {
    const data = res.getAuthResponse().id_token;
    const tokenData = userAuth.googleAuth({ data });
    console.log("Id", tokenData)
    if (tokenData) {
          userHasAuthenticated(true);
          //setToken(tokenData);
          //history.push("/");
        } 
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    //alert(`Failed to login. 😢 `);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div className="formOuterContainer">
      <div className="formInnerContainer">
        <button onClick={signIn} className="customBtn">
          <img src="./google.svg" alt="google login" className="icon"></img>
          <span className="buttonText">Sign in with Google</span>
        </button>
        <p className="labelText">
          Don´t have an account?{" "}
          <a href="/signup" className="link">
            {" "}
            Signup
          </a>
        </p>
        <p className="labelText">
          Log in with your own username and password?{" "}
          <a href="/" className="link">
            {" "}
            Login
          </a>
        </p>
      </div>
    </div>
  );
}


/* GoogleLogin.propTypes = {
  setToken: PropTypes.func.isRequired,
}; */
