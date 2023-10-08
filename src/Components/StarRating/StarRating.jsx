import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = (props) => {
  return (
    <div className="flex flex-row">
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <FaStar
            onClick={() => props.setRating(idx + 1)}
            color={props.ratingValue >= idx + 1 ? "orangered" : "#bbb"}
          />
        ))}
    </div>
  );
};
export default StarRating;
