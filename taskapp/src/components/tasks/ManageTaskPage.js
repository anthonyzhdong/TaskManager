import React ,{useEffect, useState} from 'react';
import TaskForm from './TaskForm.jsx';
import { newTask } from "../../../tools/mockData.js"
import { useDispatch, useSelector } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions";

export default function ManageTaskPage(){
    const authors = useSelector(state => state.authors);
    const dispatch = useDispatch();
    const [task, setTask] = useState(newTask);
    

    useEffect(()=>{
        if(authors.length === 0){
            dispatch(loadAuthors()).catch(error => {
                alert("loading authors failed" + error);
            });
        }
    },[authors]);

    function handleChange(event){
        const {name, value} = event.target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: name === "authorId" ? parseInt(value,10) : value
        }));
    }

    return (<TaskForm 
    authors = {authors}
    task = {task}
    onChange = {handleChange}
    onSave = {() =>{}}
    />
    );
}