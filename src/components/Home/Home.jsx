import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MovieListing from 'components/MovieListing/MovieListing';
import { fetchAllMovies } from 'features/movies/movieThunk';

export default function Home() {
  const movieTest = 'Harry';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies(movieTest));
  }, []);
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
}
