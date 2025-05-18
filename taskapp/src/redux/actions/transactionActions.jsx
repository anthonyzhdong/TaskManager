import * as transactionApi from "../../api/transactionApi.js";
import * as types from "./actionTypes.jsx";
// export function createTask(task){
//     //debugger;
//     //return { type: "CREATE_TASK", task: task};
//     return { type: types.CREATE_TASK, task };
// }

// returns an action object aka task
// type is the action that the reducer performs, task is the data added to the store


export function loadTransactionSuccess(transactions){
    return { type: types.LOAD_TRANSACTIONS_SUCCESS, transactions };
}
export function updateTransactionSuccess(transaction){
    return { type: types.UPDATE_TRANSACTIONS_SUCCESS, transaction };
}

export function createTransactionSuccess(transaction){
    return { type: types.CREATE_TRANSACTIONS_SUCCESS, transaction };
}



export function loadTransactions(){
    return function (dispatch){
        return transactionApi.getTransactions().then(transactions => {
            dispatch(loadTransactionSuccess(transactions));
            dispatch(calculateAccountBalance());
        }).catch(error => {
            throw error;
        })
    }
}

export function saveTransaction(transaction){
    return function(dispatch, getState){
        return transactionApi
            .saveTransaction(transaction)
            .then(savedTransaction => {
                transaction.id
                ? dispatch(updateTransactionSuccess(savedTransaction))
                : dispatch(createTransactionSuccess(savedTransaction));

                dispatch(calculateAccountBalance());
            })
            .catch(error => {
                throw error;
            });
    }
}

export function calculateAccountBalance(){
    return function(dispatch, getState){
        const state = getState();
        const transactions = state.transactions;

        const balance = transactions.reduce((total, transaction) =>{
            if(transaction.transactionType === 1){
                return total += parseFloat(transaction.amount);
            }else{
                return total -= parseFloat(transaction.amount);
            }
        }, 0);

        dispatch({type: types.CALCULATE_ACCOUNT_BALANCE, balance});
    };


}


