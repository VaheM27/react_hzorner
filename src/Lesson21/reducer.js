export const initialValue = {
  posts: [],
  array: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
};

function changeID(state) {
  return {
    ...state,
    posts: state.posts.map((elm, index) => {
      elm.id = state.array[index];
      return elm;
    }),
  };
}

function deleteID(state, action) {
  return {
    posts: state.posts.filter((elm) => elm.id !== action.payload),
    array: state.array.filter((elm) => elm !== action.payload),
  };
}

function reducer(state = initialValue, action) {
  switch (action.type) {
    case "addPosts":
      return { ...state, posts: action.payload };
    case "changeID":
      return changeID(state);
    case "deleteID":
      return deleteID(state, action);
    default:
      return state;
  }
}

export default reducer;
