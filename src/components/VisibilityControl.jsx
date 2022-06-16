import React from "react";

export const VisibilityControl = ({setShowCompleted, showCompleted, cleanTask, isChecked}) => {
  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete it?')){
        cleanTask()
    }
  }

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={(e) => setShowCompleted(!showCompleted)}
          checked={isChecked}
        ></input>
        <label>Show Tasks Done</label>
      </div>

      <button onClick={handleDelete} className='btn btn-danger btn-sm'>Clear</button>
    </div>
  );
};
