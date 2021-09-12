import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const layout = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { loading } = layout.actions;
export const loadingSelector = state => state.layout.loading;
export default layout.reducer;
