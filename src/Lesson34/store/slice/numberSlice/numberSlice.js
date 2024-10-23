import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "numbers",
  initialState: 0,
  reducers: {
    incrementNumbers(state, {payload}) {
      return state + payload;
    },
    decrementNumbers(state, { payload }) {
      return state - payload
    }
  },
});

export const numberReducer = numberSlice.reducer;

export const { incrementNumbers, decrementNumbers } = numberSlice.actions;
