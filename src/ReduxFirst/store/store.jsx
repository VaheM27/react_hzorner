import { createStore } from "redux";
import ToDo from "./slices/ToDo";

const store = createStore(ToDo)

export default store