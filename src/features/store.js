import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from 'features/movies/movieSlice';
import layoutReducer from 'features/layout/layoutSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    layout: layoutReducer,
  },
});
