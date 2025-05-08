import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm.jsx';
import { newTask } from "../../../tools/mockData.js"
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/actions/categoryActions.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { loadTasks, saveTask } from "../../redux/actions/taskActions.jsx";


export default function ManageTaskPage() {
    const categories = useSelector(state => state.categories);
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
        if (categories.length === 0) {
            dispatch(loadCategories()).catch(error => {
                alert("loading categories failed" + error);
            });
        }
    }, [categories]);

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
            [name]: name === "categoryId" 
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
        categories={categories}
        task={task}
        onChange={handleChange}
        onSave={handleSave}
    />
    );
}