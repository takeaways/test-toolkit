import { createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from 'common/apis/movieApi';
import { APIKey } from 'common/apis/MovieApiKey';
import { loading } from 'features/layout/layoutSlice';

export const fetchAllMovies = createAsyncThunk(
  'movies/fetchAllMovies',
  async (term, { dispatch }) => {
    dispatch(loading(true));
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
      .catch(console.error);
    dispatch(loading(false));
    return response.data;
  },
);
