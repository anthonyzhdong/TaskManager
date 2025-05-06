import { combineReducers } from 'redux';
import tasks from "./taskReducer";
import authors from "./authorReducer";

// combines multiple reducers into one
const rootReducer = combineReducers({
    tasks,
    authors
});

export default rootReducer;