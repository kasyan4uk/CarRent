import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const carReducer = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    pushFavorite: (state, action) => {
      state.push(action.payload);
    },
    cutFavorite: (state, action) => {
      return state.filter(item => item !== action.payload);
    },
  },
});

export const { pushFavorite, cutFavorite } = carReducer.actions;

export default carReducer.reducer;
