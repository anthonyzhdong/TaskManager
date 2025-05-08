// empty array as that'll store an array of tasks
import initialState from "./initialState.js";

import * as types from "../actions/actionTypes.jsx";
export default function taskReducer(state = initialState.tasks, action){
    switch(action.type){
        // looking for a specific action
        case types.CREATE_TASKS_SUCCESS:
            //debugger;
            // returning new state with new action
            return [...state, {...action.task }];
        case types.UPDATE_TASKS_SUCCESS:
            return state.map(task => task.id === action.task.id ? action.task : task);
        case types.LOAD_TASKS_SUCCESS:
            return action.tasks;
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