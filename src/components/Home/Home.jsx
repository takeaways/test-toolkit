import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import MovieListing from 'components/MovieListing/MovieListing';
import { fetchAllMovies } from 'features/movies/movieThunk';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

export default function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const timerId = useRef();

  useEffect(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      const { term } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      dispatch(fetchAllMovies(term));
    }, 1000);
    return () => {
      clearTimeout(timerId.current);
    };
  }, [location]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
}
