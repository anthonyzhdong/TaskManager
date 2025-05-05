import { combineReducers } from 'redux';
import tasks from "./taskReducer";

// combines multiple reducers into one
const rootReducer = combineReducers({
    tasks
});

export default rootReducer;