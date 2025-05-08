import * as authorApi from "../../api/authorApi.js";
import * as types from "./actionTypes.jsx";

// returns an action object aka task
// type is the action that the reducer performs, task is the data added to the store


export function loadAuthorSuccess(authors){
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}


export function loadAuthors(){
    return function (dispatch){
        return authorApi.getAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw error;
        })
    }


}