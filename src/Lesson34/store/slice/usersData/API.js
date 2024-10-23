import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersData = createAsyncThunk(
  "usersData/fetchUsersData",
  async () => {
    const result = await fetch("https://dummyjson.com/users");
    const json = await result.json();
    return json.users;
  }
);
