import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Filter.css";
import StarRating from "../StarRating/StarRating"; 

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0); 

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        <label htmlFor="title" className="filter-label">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="filter-input"
          placeholder="Filter by title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="rating" className="filter-label">
          Rating
        </label>
        <StarRating
          rating={rating}
          onRatingChange={setRating}
          starCount={10} 
        />
      </div>
      <button className="filter-button" onClick={handleFilter}>
        Apply Filters
      </button>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
