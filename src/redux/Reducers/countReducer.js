const init = {
  count: 0,
};

export const countReducer = (state = init, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
