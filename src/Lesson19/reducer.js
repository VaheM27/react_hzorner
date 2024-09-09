import { PLUS, PUSH, SORT } from "./actionTypes";

export const initialValue = {
  data: [2, 3, 4, 5, 7],
  name: "Poghos",
  count: 0,
};

function toSort(state, type) {
  return type === "asc"
    ? state.toSorted((a, b) => a - b)
    : state.toSorted((a, b) => b - a);
}

function reducer(state = initialValue, action) {
  switch (action.type) {
    case PLUS:
      return state + action.payload;
    case PUSH:
      return {...state, data: [...state.data, 5]};
    case SORT:
      return toSort(state.data, action.payload);
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

export default reducer;
