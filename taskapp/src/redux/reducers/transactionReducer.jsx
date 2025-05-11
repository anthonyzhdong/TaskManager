// empty array as that'll store an array of tasks
import initialState from "./initialState.jsx";

import * as types from "../actions/actionTypes.jsx";
export default function transactionReducer(state = initialState.transactions, action){
    switch(action.type){
        // looking for a specific action
        case types.CREATE_TRANSACTIONS_SUCCESS:
            //debugger;
            // returning new state with new action
            return [...state, {...action.transaction }];
        case types.UPDATE_TRANSACTIONS_SUCCESS:
            return state.map(transaction => transaction.id === action.transaction.id ? action.transaction : transaction);
        case types.LOAD_TRANSACTIONS_SUCCESS:
            return action.transactions;
        default:
            return state;

    }


}

/**
 * const tasks = {
 * 1: {id:1, title: "task 1"}
 * 2: {id:2, title: "task 2"}
 * 
 * }
 */