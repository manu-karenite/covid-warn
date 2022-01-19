import { combineReducers } from "redux";
import stateReducer from "./stateReducer.js";
const rootReducer = combineReducers({
  state: stateReducer,
});
export default rootReducer;
