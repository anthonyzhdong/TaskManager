import React from 'react';
import { connect } from "react-redux";
import * as taskActions from "../../redux/actions/taskActions.jsx";
import * as categoryActions from "../../redux/actions/categoryActions.jsx";
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import TaskList from './TaskList.jsx';
import { Navigate } from "react-router-dom";

class TaskPage extends React.Component{

    state = {
        redirectToManageTaskPage: false
    };
    

    componentDidMount(){

        const { tasks, categories, actions } = this.props;
        // so it only loads once
        if(tasks.length === 0){
            actions.loadTasks().catch(error=>{
                alert("Loading tasks failed"+error);
            });
        }
        if(categories.length === 0){
            actions.loadCategories().catch(error=>{
                alert("Loading categories failed"+error);
            });
        }   
    }
    

     render(){
        return (
            <>
                {this.state.redirectToManageTaskPage && <Navigate to= "/task" />}
                <h1> Courses </h1>
                <button
                    style={{ marginBottom:20 }}
                    onClick={()  => this.setState({ redirectToManageTaskPage: true })}
                >Add Task</button>
                <TaskList tasks = {this.props.tasks}/>
                {/* { this.props.tasks.map(task => (
                    <div key = {task.title}>{ task.title } </div>
                ))}  */}
    	    </>
        
        );
     }
}



TaskPage.propTypes = {
    actions: propTypes.object.isRequired,
    tasks: propTypes.array.isRequired,
    dispatch: propTypes.func.isRequired,
    categories: propTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    //debugger;
    return {
        // if we have no author data then return empty array
        tasks: state.categories.length === 0 ? [] : state.tasks.map(task =>{
            return{
            ...task,
            categoryName: state.categories.find(a => a.id === task.categoryId).name
            };
        }),
        categories: state.categories
    };

}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            loadTasks: bindActionCreators(taskActions.loadTasks, dispatch),
            loadCategories: bindActionCreators(categoryActions.loadCategories, dispatch)
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (TaskPage);