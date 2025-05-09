import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TransactionList = ({ transactions }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Description</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => {
        return (
          <tr key={transaction.id}>
            
            <td>{transaction.title}</td>
            <td>{transaction.transactionTypeName}</td>
            <td>${transaction.amount}</td>
            <td>{transaction.categoryName}</td>
            <td>{transaction.description}</td>
            <td>{transaction.date ? new Date(transaction.date).toLocaleDateString() : "Not set"}</td>
            <td>
              <button>
                <Link to = {"/transaction/" + transaction.slug}>EDIT</Link>
              </button> 
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransactionList;
