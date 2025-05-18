import initialState from "./initialState";
import * as types from "../actions/actionTypes.jsx";

export default function accountBalanceReducer(state = initialState.accountBalance,action){
    switch(action.type){
        case types.CREATE_TRANSACTIONS_SUCCESS:
            if(action.transaction.transactionType === 1){
                state + parseFloat(action.transaction.amount);
            }else{
                state - parseFloat(action.transaction.amount);
            }
        case types.UPDATE_TRANSACTIONS_SUCCESS:
            return state;
        case types.CALCULATE_ACCOUNT_BALANCE:
            return action.balance;
        default:
            return state;
    }
}