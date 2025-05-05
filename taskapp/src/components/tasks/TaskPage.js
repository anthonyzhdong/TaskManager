import React from 'react';

class TaskPage extends React.Component{

    state = {
        task:{
            title: ""
        }
    };

    

    handleChange = (event) =>{
        const task = {...this.state.task, title: event.target.value};
        this.setState({task});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.task.title);
    }

     render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <h2>Task</h2>
                <h3>Add Task</h3>
                <input type = "text" onChange={this.handleChange} value = {this.state.task.title} />
                <input type = "submit" value = "Save"/>
            </form>

        );
     }



}
export default TaskPage;