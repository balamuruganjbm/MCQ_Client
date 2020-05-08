import { combineReducers } from "redux";
import logReducer from "./isLoggedIn";
export default combineReducers({ isLoggedIn: logReducer });
