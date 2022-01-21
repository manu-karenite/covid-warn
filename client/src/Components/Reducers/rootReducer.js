import { combineReducers } from "redux";
import stateReducer from "./stateReducer.js";
import searchReducer from "./searchReducer.js";
const rootReducer = combineReducers({
  state: stateReducer,
  search: searchReducer,
});
export default rootReducer;
