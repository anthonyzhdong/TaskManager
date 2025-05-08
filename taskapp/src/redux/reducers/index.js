import { combineReducers } from 'redux';
import tasks from "./taskReducer.js";
import categories from "./categoryReducer.js";
import transactionTypes from "./transactionTypesReducer.js";

// combines multiple reducers into one
const rootReducer = combineReducers({
    tasks,
    categories,
    transactionTypes,
});

export default rootReducer;