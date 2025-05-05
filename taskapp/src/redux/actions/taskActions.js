export function createTask(task){
    //debugger;
    return { type: "CREATE_TASK", task: task};
}