import React from 'react';
import { connect } from "react-redux";
import * as taskActions from "../../redux/actions/taskActions.jsx";
import * as authorActions from "../../redux/actions/authorActions.jsx";
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import TaskList from './TaskList.jsx';
import { Navigate } from "react-router-dom";

class TaskPage extends React.Component{

    state = {
        redirectToManageTaskPage: false
    };
    

    componentDidMount(){

        const { tasks, authors, actions } = this.props;
        // so it only loads once
        if(tasks.length === 0){
            actions.loadTasks().catch(error=>{
                alert("Loading tasks failed"+error);
            });
        }
        if(authors.length === 0){
            actions.loadAuthors().catch(error=>{
                alert("Loading authors failed"+error);
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
    authors: propTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    //debugger;
    return {
        // if we have no author data then return empty array
        tasks: state.authors.length === 0 ? [] : state.tasks.map(task =>{
            return{
            ...task,
            authorName: state.authors.find(a => a.id === task.authorId).name
            };
        }),
        authors: state.authors
    };

}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            loadTasks: bindActionCreators(taskActions.loadTasks, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (TaskPage);