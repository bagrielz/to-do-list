import React from "react";

const TaskInput = ({ handleValue, maxLength }) => {
  return (
    <input
      className="taskInput"
      type="text"
      placeholder="Escreva a task..."
      maxLength={maxLength}
      onChange={handleValue}
    />
  );
};

export default TaskInput;
