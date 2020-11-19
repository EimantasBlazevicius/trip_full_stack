import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link to="/" className="logo_nav">
          TheTripFeed
        </Link>
      </h5>

      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to="/blog">
          Blog
        </Link>
        <Link className="p-2 text-dark" to="/add">
          Add
        </Link>
      </nav>
      <Link className="btn btn-outline-danger m-2" to="/login">
        Login
      </Link>
      <Link className="btn btn-outline-primary" to="/signup">
        Sign up
      </Link>
    </div>
  );
};

export default Nav;
