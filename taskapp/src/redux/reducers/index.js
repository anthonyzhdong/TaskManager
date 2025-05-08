import { combineReducers } from 'redux';
import tasks from "./taskReducer.js";
import authors from "./authorReducer.js";

// combines multiple reducers into one
const rootReducer = combineReducers({
    tasks,
    authors
});

export default rootReducer;