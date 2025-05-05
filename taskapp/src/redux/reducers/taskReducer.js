// empty array as that'll store an array of tasks
export default function taskReducer(state = [], action){
    switch(action.type){
        // looking for a specific action
        case "CREATE_TASK":
            //debugger;
            // returning new state with new action
            return [...state, {...action.task }];
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