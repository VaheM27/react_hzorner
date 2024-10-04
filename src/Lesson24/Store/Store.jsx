import { combineReducers, createStore } from "redux";
import todoReduce from "./todo/todoReducer";


const reducers = combineReducers({todo: todoReduce})
const store = createStore(reducers);

export default store;
