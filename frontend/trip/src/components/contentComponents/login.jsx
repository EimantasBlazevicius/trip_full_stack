import React from "react";
import compas from "./../../images/compas.png";

const Login = () => {
  return (
    <React.Fragment>
      <div className="loginForm">
        <form className="form-signin">
          <img className="mb-4" src={compas} alt="" width="100" height="100" />
          <h1 className="h3 mb-3 font-weight-normal">
            Ow you are already here, come in then :)
          </h1>
          <label for="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control m-2"
            placeholder="Email address"
            required=""
            autofocus=""
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control m-2"
            placeholder="Password"
            required=""
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
