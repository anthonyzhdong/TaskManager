import * as taskApi from "../../api/courseApi";
import * as types from "./actionTypes";
export function createTask(task){
    //debugger;
    //return { type: "CREATE_TASK", task: task};
    return { type: types.CREATE_TASK, task };
}

// returns an action object aka task
// type is the action that the reducer performs, task is the data added to the store


export function loadTaskSuccess(tasks){
    return { type: types.LOAD_TASKS_SUCCESS, tasks };
}


export function loadTasks(){
    return function (dispatch){
        return taskApi.getTasks().then(tasks => {
            dispatch(loadTaskSuccess(tasks));
        }).catch(error => {
            throw error;
        })
    }


}