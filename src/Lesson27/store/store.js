import { combineReducers, createStore } from "redux";
import { userSlices } from "./slices/usersSlices/userSlices";

const reducers = combineReducers({ users: userSlices });

const store = createStore(reducers);

export default store;
