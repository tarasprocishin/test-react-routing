import React from "react";
import { NavLink } from "react-router-dom";

import { routes } from "../router";
import "../styles.css";

export const NavBar = () => (
  <div className="nav-bar">
    <nav className="nav-bar__item">
      <NavLink exact to={routes.home} activeClassName="nav-bar__item__selected">
        Home
      </NavLink>
    </nav>
    <nav className="nav-bar__item">
      <NavLink to={routes.shop} activeClassName="nav-bar__item__selected">
        Shop
      </NavLink>
    </nav>
    <nav className="nav-bar__item">
      <NavLink to={routes.reviews} activeClassName="nav-bar__item__selected">
        Reviews
      </NavLink>
    </nav>
  </div>
);
