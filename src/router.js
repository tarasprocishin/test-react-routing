import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { Home } from "./Home/Home";
import { Reviews } from "./Reviews/Reviews";
import { Shop } from "./Shop/Shop";
import { NavBar } from "./Components/NavBar";
import { ReviewItem } from "./Reviews/ReviweItem";

export const routes = {
  home: "/",
  shop: "/shop",
  reviews: "/reviews"
};

export const Router = () => {
  const { state, pathname } = useLocation();
  return state ? (
    <Route path={pathname} children={<ReviewItem />} />
  ) : (
    <>
      <NavBar />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.shop} component={Shop} />
        <Route path={routes.reviews} component={Reviews} />
      </Switch>
    </>
  );
};
