import { createSlice } from '@reduxjs/toolkit';
import { fetchAllMovies } from './movieThunk';

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    //action = dispatch(addMovies(payload))
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllMovies.fulfilled, (state, { payload }) => {
        state.movies = payload;
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        console.log(state, action);
      });
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = state => state.movies.movies;

export default movieSlice.reducer;
