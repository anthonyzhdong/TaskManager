import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm.jsx';
import { newTask } from "../../../tools/mockData.js"
import { useDispatch, useSelector } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { loadTasks, saveTask } from "../../redux/actions/taskActions.jsx";


export default function ManageTaskPage() {
    const authors = useSelector(state => state.authors);
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [task, setTask] = useState(newTask);
    const { slug } = useParams();

    useEffect(() => {
        if (tasks.length === 0) {
            dispatch(loadTasks()).catch(error => {
                alert("loading tasks failed" + error);
            });
        } else if (slug) {
            setTask(tasks.find(task => task.slug === slug) || newTask);
        }
    }, [tasks, slug]);


    useEffect(() => {
        if (authors.length === 0) {
            dispatch(loadAuthors()).catch(error => {
                alert("loading authors failed" + error);
            });
        }
    }, [authors]);

    function handleChange(event) {
        const { name, value } = event.target;
        setTask(prevTask => ({
            // const updatedTask = { ...prevTask };
            // if(name === "authorId"){
            //     updatedTask[name] = parseInt(value,10);

            // // }else if (name === "amount") {
            // // // Handle amount as a floating-point number with 2 decimal places
            // //     updatedTask[name] = value === "" ? "" : value
            // }else if (name === "date"){
            //     updatedTask[name] = value;
            // }else{
            //     updatedTask[name] = value;
            // }
            ...prevTask,
            [name]: name === "authorId" 
            ? parseInt(value, 10)
            : name === "date"
            ? value
            : value
        }));
    }

    function handleSave(event){
        event.preventDefault();
        dispatch(saveTask(task)).then(()=>{
            navigate("/taskpage");
        });
    
    }


    return (<TaskForm
        authors={authors}
        task={task}
        onChange={handleChange}
        onSave={handleSave}
    />
    );
}