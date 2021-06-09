import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import userAuth from "../../services/userAuth";
import "./Login.css";

export default function Signup() {
  const history = useHistory();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const validateEmail = (email) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (username === "" || password === "" || email === "") {
      setMsg("All fields are needed to register");
    } else if (!validateEmail(email)) {
      setMsg("Invalid email address!");
    } else {
      const registration = await userAuth.signup({
        username,
        email,
        password,
      });
      setMsg(registration.message);
      setTimeout(() => {
        history.push("/");
      }, 5000);
    }
  };

  return (
    <div className="formOuterContainer">
      <div className="formInnerContainer">
        <h1 className="heading">Signup</h1>
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
            <label>
              <input
                type="text"
                className="formInput"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <input
              type="password"
              className="formInput"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button className="button" type="submit">
              Register
            </button>
          </div>
        </form>
        <p className="labelText">
          Already an account?{" "}
          <a href="/" className="link">
            Login
          </a>
        </p>
        <p id="warning">{msg}</p>
      </div>
    </div>
  );
}
