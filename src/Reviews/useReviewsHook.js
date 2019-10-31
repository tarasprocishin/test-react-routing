import { useState, useEffect } from "react";
import uuid from "uuid/v4";

const initialState = () => {
  const todosFormStorage = localStorage.getItem("reviews");
  const reviewsParsed = JSON.parse(todosFormStorage);

  return reviewsParsed || [];
};

export const useReviewsHook = () => {
  const [reviews, setInputReviews] = useState(initialState());

  const onAdd = text =>
    setInputReviews([
      ...reviews,
      {
        id: uuid(),
        text
      }
    ]);

  useEffect(() => {
    const todosStringified = JSON.stringify(reviews);
    window.localStorage.setItem("reviews", todosStringified);
  }, [reviews]);

  return {
    reviews,
    onAdd
  };
};
