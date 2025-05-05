export function createTask(task){
    //debugger;
    return { type: "CREATE_TASK", task: task};
}

// returns an action object aka task
// type is the action that the reducer performs, task is the data added to the store

