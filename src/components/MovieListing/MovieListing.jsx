import React from 'react';
import { useSelector } from 'react-redux';

import './MovieListing.scss';

import { getAllMovies } from 'features/movies/movieSlice';
import MovieCard from 'components/MovieCard/MovieCard';

export default function MovieListing() {
  const movies = useSelector(getAllMovies);

  let renderMovies = '';
  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <ul className="movie-container">{renderMovies}</ul>
      </div>
    </div>
  );
}
