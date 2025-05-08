import { combineReducers } from 'redux';
import tasks from "./taskReducer.js";
import categories from "./categoryReducer.js";

// combines multiple reducers into one
const rootReducer = combineReducers({
    tasks,
    categories
});

export default rootReducer;