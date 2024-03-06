import React from "react";

const TaskInput = () => {
  const [task, setTask] = React.useState("");

  return (
    <input
      className="task-input"
      type="text"
      value={task}
      placeholder="Escreva a task..."
      onChange={(event) => setTask(event.target.value)}
    />
  );
};

export default TaskInput;
