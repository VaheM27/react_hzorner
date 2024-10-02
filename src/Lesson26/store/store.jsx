import { combineReducers, createStore } from "redux";
import countReducer from "./slices/countSlice";
import todoReducer from "./slices/todoSlice";

const reducers = combineReducers({ countReducer, todoReducer });

const store = createStore(reducers);

export default store;
