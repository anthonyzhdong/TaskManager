import React from 'react';
import { connect } from "react-redux";
import * as transactionActions from "../../redux/actions/transactionActions.jsx";
import * as categoryActions from "../../redux/actions/categoryActions.jsx";
import * as transactionTypeActions from "../../redux/actions/transactionTypeActions.jsx";
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import TransactionList from './TransactionList.jsx';
import { Navigate } from "react-router-dom";
import AccountBalance from '../AccountBalance.jsx';

class TransactionPage extends React.Component{

    state = {
        redirectToManageTaskPage: false
    };
    

    componentDidMount(){

        const { transactions, categories, transactionTypes, actions } = this.props;
        // so it only loads once
        if(transactions.length === 0){
            actions.loadTransactions().catch(error=>{
                alert("Loading transactions failed"+error);
            });
        }
        if(categories.length === 0){
            actions.loadCategories().catch(error=>{
                alert("Loading categories failed"+error);
            });
        }   
        if(transactionTypes.length === 0){
            actions.loadTransactionTypes().catch(error=>{
                alert("Loading transactionTypes failed"+error);
            });
        }   
    }
    

     render(){
        return (
            <>
                {this.state.redirectToManageTransactionPage && <Navigate to= "/transaction" />}
                <h1> Transactions </h1>
                <AccountBalance/>
                <button
                    style={{ marginBottom:20 }}
                    onClick={()  => this.setState({ redirectToManageTransactionPage: true })}
                >Add Transaction</button>
                <TransactionList transactions = {this.props.transactions}/>
                {/* { this.props.tasks.map(task => (
                    <div key = {task.title}>{ task.title } </div>
                ))}  */}
    	    </>
        
        );
     }
}



TransactionPage.propTypes = {
    actions: propTypes.object.isRequired,
    transactions: propTypes.array.isRequired,
    dispatch: propTypes.func.isRequired,
    categories: propTypes.array.isRequired,
    transactionTypes: propTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    //debugger;
    return {
        // if we have no author data then return empty array
        transactions: state.categories.length === 0 ? [] : state.transactions.map(transaction =>{
            return{
            ...transaction,
            categoryName: state.categories.find(a => a.id === transaction.categoryId).name,
            transactionTypeName: state.transactionTypes.find(t => t.id === transaction.transactionType).name
            };
        }),
        categories: state.categories,
        transactionTypes: state.transactionTypes
    };

}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            loadTransactions: bindActionCreators(transactionActions.loadTransactions, dispatch),
            loadCategories: bindActionCreators(categoryActions.loadCategories, dispatch),
            loadTransactionTypes: bindActionCreators(transactionTypeActions.loadTransactionTypes, dispatch)
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (TransactionPage);