import React from "react";
import { useLocation, Link } from "react-router-dom";

import { routes } from "../router";

export const ReviewItem = () => {
  const { state } = useLocation();
  return (
    <div className="review-item">
      <h2> {state.text} </h2>
      <button>
        <Link to={routes.reviews}>Back</Link>
      </button>
    </div>
  );
};
