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
    activateLoader: (state) => {
      state.loading = true;
    },
    deactivateLoader: (state) => {
      state.loading = false;
    },
  },
});

export const { activateLoader, deactivateLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
