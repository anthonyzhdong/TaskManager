import * as categoryApi from "../../api/categoryApi.js";
import * as types from "./actionTypes.jsx";

// returns an action object aka task
// type is the action that the reducer performs, task is the data added to the store


export function loadCategorySuccess(categories){
    return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}


export function loadCategories(){
    return function (dispatch){
        return categoryApi.getCategories().then(categories => {
            dispatch(loadCategorySuccess(categories));
        }).catch(error => {
            throw error;
        })
    }


}