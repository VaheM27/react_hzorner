import { createStore } from "redux";
import todoReduce from "./todo/todoReducer";


const store = createStore(todoReduce)


export default store