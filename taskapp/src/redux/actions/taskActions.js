import * as taskApi from "../../api/taskApi";
import * as types from "./actionTypes";
// export function createTask(task){
//     //debugger;
//     //return { type: "CREATE_TASK", task: task};
//     return { type: types.CREATE_TASK, task };
// }

// returns an action object aka task
// type is the action that the reducer performs, task is the data added to the store


export function loadTaskSuccess(tasks){
    return { type: types.LOAD_TASKS_SUCCESS, tasks };
}
export function updateTaskSuccess(task){
    return { type: types.UPDATE_TASKS_SUCCESS, task };
}

export function createTaskSuccess(task){
    return { type: types.CREATE_TASKS_SUCCESS, task };
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

export function saveTask(task){
    return function(dispatch, getState){
        return taskApi
            .saveTask(task)
            .then(savedTask => {
                task.id
                ? dispatch(updateTaskSuccess(savedTask))
                : dispatch(createTaskSuccess(savedTask));
            })
            .catch(error => {
                throw error;
            });
    }
}


