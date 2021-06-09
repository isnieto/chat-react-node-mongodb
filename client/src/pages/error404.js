import React from "react";
import "./error404.css";

function error404() {
  return (
    <div className="error">
      <div>
        <h1>Error 404. Page not found!!</h1>
        <h3>Either this page does not exist or you have no access.</h3>
        <p>
          Please, feel free to <a href="/">log in</a> or <a href="/signup">signup</a> to get access to the
          chat APP
        </p>
      </div>
    </div>
  );
}

export default error404;
