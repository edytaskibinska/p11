import "./RatingStars.scss";

import React, { useState } from "react";
import { Star } from "../../assets";

const RatingStars = () => {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="ratingStars">
      {[...Array(5)].map((star, index) => {
        index += 1;

        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rate) ? "active" : "disabled"}
            onClick={() => setRate(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rate)}
          >
            <Star width="25" height="24" />
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;
