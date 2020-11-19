import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./contentComponents/login";
import SignUp from "./contentComponents/signup";
import Blog from "./contentComponents/blog";
import Add from "./contentComponents/add";
import Default from "./contentComponents/default";
import Profile from "./contentComponents/profile";

const Content = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/blog" component={Blog} />
      <Route path="/add" component={Add} />
      <Route path="/profile" component={Profile} />
      <Route path="/" exact component={Default} />
    </Switch>
  );
};

export default Content;
