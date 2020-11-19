import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/logo.jpg";
import { Switch, Route } from "react-router-dom";
import TripMap from "./addComponents/tripMap";
import Highlights from "./addComponents/highlights";
import Reviews from "./addComponents/review";
import WriteStory from "./addComponents/writeStory";

const Add = () => {
  return (
    <React.Fragment>
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
          <div className="p-4 pt-5">
            <Link
              to="/profile"
              className="img logo rounded-circle mb-5"
              style={{ backgroundImage: `url(${logo})` }}
            ></Link>
            <ul className="list-unstyled components mb-5">
              <li className="active">
                <Link to="/add/tripmap">Make a trip map</Link>
              </li>
              <li>
                <Link to="/add/highlights">Must see</Link>
              </li>
              <li>
                <Link to="/add/story">Share your story</Link>
              </li>
              <li>
                <Link to="/add/review">Review and Submit</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div id="content" className="p-4 p-md-5">
          <Switch>
            <Route path="/add/tripmap" component={TripMap} />
            <Route path="/add/highlights" component={Highlights} />
            <Route path="/add/story" component={WriteStory} />
            <Route path="/add/review" component={Reviews} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Add;
