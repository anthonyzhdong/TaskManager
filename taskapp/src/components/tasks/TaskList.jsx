import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TaskList = ({ tasks }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        {/* <th>Amount</th> */}
        <th>Author</th>
        <th>Description</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => {
        return (
          <tr key={task.id}>
            <td>
              <Link to= {"/task/" + task.slug}>{task.title}</Link>
            </td>
            {/* <td>${task.amount ? task.amount.toFixed(2) : "0.00"}</td> */}
            <td>{task.authorName}</td>
            <td>{task.description}</td>
            <td>{task.date ? new Date(task.date).toLocaleDateString() : "Not set"}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default TaskList;
