import React from "react";

const TaskInput = ({ onChange }) => {
  return (
    <input
      className="taskInput"
      type="text"
      placeholder="Escreva a task..."
      onChange={onChange}
    />
  );
};

export default TaskInput;
