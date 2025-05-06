import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TaskList = ({ tasks }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => {
        return (
          <tr key={task.id}>
            <td>
              {task.title}
            </td>
            <td>{task.authorName}</td>
            <td>{task.category}</td>
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
