import { GET_USERS_DATA, REMOVE_USERS_DATA } from "./type";

const initialState = [];

export const userSlices = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_DATA:
      return action.payload;
    case REMOVE_USERS_DATA:
      return [];
    default:
      return state;
  }
};

export const setUsersData = (state) => state.users;
