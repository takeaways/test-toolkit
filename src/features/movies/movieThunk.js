import { createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from 'common/apis/movieApi';
import { APIKey } from 'common/apis/MovieApiKey';
import { loading } from 'features/layout/layoutSlice';

export const fetchAllMovies = createAsyncThunk(
  'movies/fetchAllMovies',
  async (term, { dispatch }) => {
    try {
      dispatch(loading(true));
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term.trim() || 'avengers'}&type=movie`,
      );
      return response.data;
    } finally {
      dispatch(loading(false));
    }
  },
);
