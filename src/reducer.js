import { ADD, SHUFFLE, DEVELOPER, UPDATE, AGE, REMOVE } from "./actionType.js";

export const initialState = {
  developers: [],
  user: {
    id: 1,
    name: "Aram",
  },
  arr: [124, 45, 1, 34, 987, 37, 3, 19, 39, 9],
};

const shuffle = () => {
  return Math.random() - 0.5;
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, arr: [...state.arr, action.payload] };
    case SHUFFLE:
      return { ...state, arr: state.arr.toSorted(shuffle) };
    case DEVELOPER:
      return { ...state, developers: [...state.developers, action.payload] };
    case UPDATE:
      return { ...state, user: { ...state.user, name: "Areg" } };
    case AGE:
      return { ...state, user: { ...state.user, age: 10 } };
    case REMOVE:
      return { ...state, arr: state.arr.filter((elem) => elem >= 10) };

    default:
      return state;
  }
}
export default reducer;
