import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TaskList = ({ tasks }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => {
        return (
          <tr key={task.id}>
            <td>
              <Link to= {"/task/" + task.slug}>{task.title}</Link>
            </td>
            <td>{task.authorName}</td>
            <td>{task.description}</td>
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
