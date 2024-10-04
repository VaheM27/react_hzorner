import { GET_USERS_DATA, REMOVE_USERS_DATA } from "./type";

export const dispatchUsers = (payload) => ({
  type: GET_USERS_DATA,
  payload,
});

export const dispatchRemoveUsers = () => ({
  type: REMOVE_USERS_DATA,
});
