import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css'; 

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img className="movie-card-poster" src={posterURL} alt={title} />
      <div className="movie-card-content">
        <h2 className="movie-card-title">{title}</h2>
        <p className="movie-card-description">{description}</p>
        <p className="movie-card-rating">Rating: {rating}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterURL: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;

