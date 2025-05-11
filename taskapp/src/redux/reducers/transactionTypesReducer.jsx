import * as types from "../actions/actionTypes.jsx";
import initialState from "./initialState.jsx";
export default function transactionTypeReducer(state = initialState.transactionTypes, action){
    switch(action.type){

        case types.LOAD_TRANSACTION_TYPES_SUCCESS:
            return action.transactionTypes;
        default:
            return state;

    }


}
