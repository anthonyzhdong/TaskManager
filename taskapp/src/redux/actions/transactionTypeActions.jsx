import * as transactionTypeApi from "../../api/transactionTypeApi.js";
import * as types from "./actionTypes.jsx";

// returns an action object aka task
// type is the action that the reducer performs, task is the data added to the store


export function loadTransactionTypesSuccess(transactionTypes){
    return { type: types.LOAD_TRANSACTION_TYPES_SUCCESS, transactionTypes };
}


export function loadTransactionTypes(){
    return function (dispatch){
        return transactionTypeApi.getTransactionTypes().then(transactionTypes => {
            dispatch(loadTransactionTypesSuccess(transactionTypes));
        }).catch(error => {
            throw error;
        })
    }


}