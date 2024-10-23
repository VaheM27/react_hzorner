import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./slice/numberSlice/numberSlice";
import { usersDataReducer } from "./slice/usersData/usersDataSlice";

const store = configureStore({
  reducer: {
    numbers: numberReducer,
    usersData: usersDataReducer,
  },
});

export default store;
