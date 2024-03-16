import React from "react";

const TaskInput = ({ onChange, maxLength }) => {
  return (
    <input
      className="taskInput"
      type="text"
      placeholder="Escreva a task..."
      maxLength={maxLength}
      onChange={onChange}
    />
  );
};

export default TaskInput;
