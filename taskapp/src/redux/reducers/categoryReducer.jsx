import * as types from "../actions/actionTypes.jsx";
import initialState from "./initialState.jsx";
export default function categoryReducer(state = initialState.categories, action){
    switch(action.type){

        case types.LOAD_CATEGORIES_SUCCESS:
            return action.categories;
        default:
            return state;

    }


}
