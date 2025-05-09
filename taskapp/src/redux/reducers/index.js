import { combineReducers } from 'redux';
import transactions from "./transactionReducer.js";
import categories from "./categoryReducer.js";
import transactionTypes from "./transactionTypesReducer.js";

// combines multiple reducers into one
const rootReducer = combineReducers({
    transactions,
    categories,
    transactionTypes,
});

export default rootReducer;