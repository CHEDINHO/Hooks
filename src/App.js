import React, { useState } from "react";
import NavbarComponent from "./components/Navbar/Navbar";

import MovieList from "./components/MovieList/MovieList";
import Filter from "./components/Filter/Filter";
import AddMovieForm from "./components/AddMovie/AddMovie";
import moviesData from "./components/moviesdata";
import "./App.css"; 

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filter, setFilter] = useState({ title: "", rating: "" });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(filter.title.toLowerCase());
    const matchesRating = filter.rating ? movie.rating >= filter.rating : true;
    return matchesTitle && matchesRating;
  });

  return (
    <div>
      <NavbarComponent />
      <div className="container mt-4">
        <AddMovieForm onAdd={handleAddMovie} />
        <Filter onFilter={handleFilter} />

        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
};

export default App;
