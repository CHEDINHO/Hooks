import React, { useState } from 'react';
import './StarRating.css'; 

const StarRating = ({ rating, onRatingChange, starCount = 10 }) => {
  const [hoverRating, setHoverRating] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  const handleClick = (index) => {
    onRatingChange(index);
  };

  return (
    <div className="star-rating">
      {[...Array(starCount)].map((_, index) => {
        const starIndex = index + 1;
        const isFilled = starIndex <= (hoverRating || rating);

        return (
          <span
            key={index}
            className={`star ${isFilled ? 'filled' : ''}`}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starIndex)}
          >
            ★
          </span>
        );
      })}
      <div className="rating-value">
        {rating.toFixed(1)} / {starCount}
      </div>
    </div>
  );
};

export default StarRating;
