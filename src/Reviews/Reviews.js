import React, { useState, useRef } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import { ReviewItem } from "./ReviweItem";
import { routes } from "../router";
import { useReviewsHook } from "./useReviewsHook";

export const Reviews = () => {
  const [review, setInputReview] = useState("");

  const { onAdd, reviews } = useReviewsHook();

  const { path } = useRouteMatch(routes.reviews);
  const textInput = useRef();

  const onChange = event => setInputReview(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (review === "") return;
    onAdd(review);
    setInputReview("");
  };

  return (
    <div>
      <h1>Welcome to Reviews</h1>
      <form onSubmit={onSubmit}>
        <input
          value={review}
          onChange={onChange}
          placeholder="Put your review here"
          type="text"
          ref={textInput}
        />
      </form>

      <ul className="reviews">
        {reviews.map(review => (
          <li>
            <Link
              key={review.id}
              to={{
                pathname: path + "/:" + review.id,
                state: {
                  text: review.text,
                  showReview: true
                }
              }}
            >
              {review.text}
            </Link>
          </li>
        ))}
      </ul>
      <Switch>
        {reviews.map(review => (
          <Route path={path + "/:" + review.id} component={ReviewItem} />
        ))}
      </Switch>
    </div>
  );
};
