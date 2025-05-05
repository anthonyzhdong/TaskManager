import React from 'react';
import { connect } from "react-redux";
import * as taskActions from "../../redux/actions/taskActions";
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class TaskPage extends React.Component{

    state = {
        task:{
            title: ""
        }
    };

    
    // updates the input field 
    handleChange = (event) =>{
        const task = {...this.state.task, title: event.target.value};
        this.setState({task});
    }

    //dispatch the createTask with the new local state
    // task reducer receives the action, creates a new state with the task details, store updates its state, component rerenders the new task
    handleSubmit = (event) => {
        event.preventDefault();
        //debugger;
        this.props.dispatch(taskActions.createTask(this.state.task));
        //alert(this.state.task.title);
    }

     render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <h2>Task</h2>
                <h3>Add Task</h3>
                <input type = "text" onChange={this.handleChange} value = {this.state.task.title} />
                <input type = "submit" value = "Save"/>
                { this.props.tasks.map(task => (
                    <div key = {task.title}>{ task.title } </div>
                ))} 
            </form>

         

        );
     }
}



TaskPage.propTypes = {
    
    tasks: propTypes.array.isRequired,
    dispatch: propTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
    //debugger;
    return {
        tasks: state.tasks
    }

}


export default connect(mapStateToProps) (TaskPage);