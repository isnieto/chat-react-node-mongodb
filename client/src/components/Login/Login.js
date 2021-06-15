import React, { useState } from "react";
import PropTypes from "prop-types";
import userAuth from "../../services/userAuth";
import { useAppContext } from "../../services/contextLib.js";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

import "./Login.css";

export default function Login({ setToken }) {
  const { userHasAuthenticated } = useAppContext();
  const [isGoogle, withGoogle] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      if (username === "" || password === "") {
        setMsg("Username and password needed to Login");
      } else {
        const tokenData = await userAuth.loginUser({
          username,
          password,
        });
        if (tokenData.token) {
          userHasAuthenticated(true);
          //console.log("Autenticado", userHasAuthenticated())
          setToken(tokenData);
          withGoogle(false);
        } else {
          // Not token received
          setMsg(tokenData.message);
        }
      }
    } catch (e) {
      setMsg(e);
    }
  };

  return (
    <div className="formOuterContainer">
      <div className="formInnerContainer">
        <h1 className="heading">Login</h1>
        <h5>Use your username and password</h5>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              className="formInput"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            <input
              type="password"
              className="formInput"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button className="button" type="submit">
              ENTER
            </button>
          </div>
          <div>
            <p id="warning">{msg}</p>
            <p className="labelText">
              Don´t have an account?{" "}
              <a href="/signup" className="link">
                {" "}
                Signup
              </a>
            </p>
            <h5>or</h5>
            <GoogleLogin withGoogle={withGoogle} />
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
