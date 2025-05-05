import React from 'react';
import { connect } from "react-redux";
import * as taskActions from "../../redux/actions/taskActions";
import PropTypes from 'prop-types';

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



TaskPage.PropTypes = {
    
    tasks: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
    //debugger;
    return {
        tasks: state.tasks
    }

}


export default connect(mapStateToProps) (TaskPage);