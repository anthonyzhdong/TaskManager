import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm.jsx';
import { newTask } from "../../../tools/mockData.js"
import { useDispatch, useSelector } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions";
import { useNavigate, useParams } from "react-router-dom";
import { loadTasks, saveTask } from "../../redux/actions/taskActions";


export default function ManageTaskPage() {
    const authors = useSelector(state => state.authors);
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
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
            ...prevTask,
            [name]: name === "authorId" ? parseInt(value, 10) : value
        }));
    }

    function handleSave(event){
        event.preventDefault();
        dispatch(saveTask(task));
    
    }

    return (<TaskForm
        authors={authors}
        task={task}
        onChange={handleChange}
        onSave={handleSave}
    />
    );
}