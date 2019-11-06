import React from "react";
import {Link} from 'react-router-dom'
// import { createBrowserHistory } from "history";

const Navigation = () => {
//   const history = createBrowserHistory();
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="https://www.thefitlifepdx.com/">
        Fit Life
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link" to={"/fitness"}>
              Fitness
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/water"}>
              Water Intake
            </Link>
          </li>
        </ul>
       
      </div>
    </nav>
  );
};

export default Navigation;

// Bootstrap navigational bar which displays the name of the app,
//  menu link, and Sign In/Sign Out links. We’ll be rendering the Menu
//  link and Sign In/Out buttons conditionally, depending on the user’s status in a later section. But for now,
// let’s leave the navbar like this.
