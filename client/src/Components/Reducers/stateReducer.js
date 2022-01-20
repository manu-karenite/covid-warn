const stateReducer = (state = null, action) => {
  switch (action.type) {
    case "STATE":
      return action.payload;
    default:
      return state;
  }
};
export default stateReducer;
