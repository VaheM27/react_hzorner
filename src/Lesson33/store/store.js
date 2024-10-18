import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./slice/numberSlice/numberSlice";

const store = configureStore({
  reducer: {
    numbers: numberReducer,
  },
});

export default store;
