import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersData } from "./API";

export const userDataSlice = createSlice({
  name: "usersData",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    changeData(state) {
      state.data.filter((_, ind) => {
        if (ind % 2 === 0) {
          console.log(ind);
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        console.log("Pending...");
        state.isLoading = true;
      })
      .addCase(fetchUsersData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        console.log("Data is here");
      })
      .addCase(fetchUsersData.rejected, () => {
        throw new Error("Rejected");
      });
  },
});

export const usersDataReducer = userDataSlice.reducer;
export const { changeData } = userDataSlice.actions
