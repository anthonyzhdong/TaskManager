import React from 'react';
import TaskForm from './TaskForm.jsx';
import {newTask} from "../../../tools/mockData.js"
export default function ManageTaskPage(){

    return (<TaskForm 
    authors = {[]}
    task = {newTask}
    onChange = {()=>{}}
    onSave = {() =>{}}
    />
    );
}