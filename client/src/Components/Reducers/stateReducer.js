const stateReducer = (state = null, action) => {
  switch (action.type) {
    case "STATE_SELECTED":
      return action.payload;
    case "STATE_NOT_SELECTED":
      return action.payload;
    default:
      return state;
  }
};
export default stateReducer;
