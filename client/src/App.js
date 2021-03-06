import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from "./services/contextLib";
import useToken from "./services/useToken";
// Page components
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import { Join, Chat } from "./components/";
import error404 from "./pages/error404";
import "./App.css";

export default function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(0);
  const { token, setToken } = useToken();

  if (isAuthenticated === 0) {
    return (
      <div className="wrapper">
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Header />
          <Router>
            <Switch>
              <Route exact path="/">
                <Login setToken={setToken} />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route component={error404} />
            </Switch>
          </Router>
        </AppContext.Provider>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Router>
          <Header />
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat} />
        </Router>
      </AppContext.Provider>
    </div>
  );
}
