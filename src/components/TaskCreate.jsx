import React, { useState } from "react";

export const TaskCreate = ({createTask}) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName)
    setNewTaskName("");
  };

  return (
    <form className="my-2 row" onSubmit={handleSubmit}>
      <div className="col-9">
        <input
          className="form-control"
          value={newTaskName}
          type="text"
          placeholder="Enter a new task"
          onChange={(e) => setNewTaskName(e.target.value)}
        ></input>
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">Save Task</button>
      </div>
    </form>
  );
};
