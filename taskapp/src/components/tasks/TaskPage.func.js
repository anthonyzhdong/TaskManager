import React from 'react';
import { useDispatch, useState } from "react-redux"
import * as createTask from "../../redux/actions/taskActions";

//connect to redux store using hooks

export default function TaskPage() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const [task, setTask] = useState({
        title: "",
    });

    // updates the input field 
    const handleChange = (event) => {
        setTask({ ...task, title: event.target.value });
    }

    //dispatch the createTask with the new local state
    // task reducer receives the action, creates a new state with the task details, store updates its state, component rerenders the new task
    const handleSubmit = (event) => {
        event.preventDefault();
        //debugger;
        dispatch(createTask(task));
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Task</h2>
            <h3>Add Task</h3>
            <input type="text" onChange={handleChange} value={state.task.title} />
            <input type="submit" value="Save" />
            {tasks.map((task) => (
                <div key={task.title}>{task.title} </div>
            ))}
        </form>
    );

}
