import { combineReducers } from 'redux';
import transactions from "./transactionReducer.jsx";
import categories from "./categoryReducer.jsx";
import transactionTypes from "./transactionTypesReducer.jsx";

// combines multiple reducers into one
const rootReducer = combineReducers({
    transactions,
    categories,
    transactionTypes,
});

export default rootReducer;