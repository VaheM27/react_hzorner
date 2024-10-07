import { createStore } from "redux";
import todoReducer from "./Slices/todoReducer";



const store = createStore(todoReducer)


export default store