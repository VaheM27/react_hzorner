

import { createStore } from "redux";
import todoReducer from "./reducder";

const store = createStore(todoReducer);

export default store;
