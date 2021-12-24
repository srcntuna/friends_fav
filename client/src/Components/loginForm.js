import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function LoginForm() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    Axios.post("/api/login", { loginDetails }).then((response) => {
      setLoginStatus(response.data.message);
    });

    // console.log(loginDetails);
  };

  return (
    <div>
      <form action="" className="LoginForm" onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your username"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, username: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="name"
              id="password"
              placeholder="Enter your password"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
          </div>
          <p>{loginStatus}</p>
          <input type="submit" value="LOGIN" />
        </div>
      </form>
      <p>Don't have an account?</p>
      <button>
        <Link to="/register">Sign up</Link>
      </button>
    </div>
  );
}

export default LoginForm;
