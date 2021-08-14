import { combineReducers } from "redux";
import movieReducer from "./movie";
// works with store.js

const rootReducer = combineReducers({ movies: movieReducer });

export default rootReducer;
