import { createSlice } from '@reduxjs/toolkit';

export interface LoaderState {
  loading: boolean;
}

const initialState: LoaderState = {
  loading: false,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    activate: (state) => {
      state.loading = true;
    },
    deactivate: (state) => {
      state.loading = false;
    },
  },
});

export const { activate, deactivate } = loaderSlice.actions;

export default loaderSlice.reducer;
