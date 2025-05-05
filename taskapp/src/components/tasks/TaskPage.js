import React from 'react';
import { connect } from "react-redux";
import * as taskActions from "../../redux/actions/taskActions";
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class TaskPage extends React.Component{


    componentDidMount(){
        this.props.actions.loadTasks().catch(error=>{
            alert("Loading tasks failed"+error);
        });
    }
    

     render(){
        return (
            <>
                <h1> Courses </h1>
                { this.props.tasks.map(task => (
                    <div key = {task.title}>{ task.title } </div>
                ))} 
    	    </>
        
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

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (TaskPage);