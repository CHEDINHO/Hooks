import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddMovieForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, posterURL, rating: Number(rating) });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Rating (0-10)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="0"
        max="10"
        required
      />
      <button type="submit" className="btn btn-success">
        Add Movie
      </button>
    </form>
  );
};

AddMovieForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddMovieForm;
