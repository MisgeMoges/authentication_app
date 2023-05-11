// reducers.js
import { combineReducers } from "redux";
import authReducer from "./LoginReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
