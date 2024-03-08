import React from "react";
import TaskInput from "./TaskInput";
import Button from "./Button";
import Task from "./Task";

const TaskContent = () => {
  const [tasks, setTasks] = React.useState([""]);
  const [value, setValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleTask() {
    setTasks([...tasks, value]);
  }

  function handleValue(event) {
    setValue(event.target.value);
  }

  return (
    <form onClick={handleSubmit}>
      <TaskInput onChange={handleValue} />
      <ul>
        {tasks.map((task) => (
          <Task key={task}>{task}</Task>
        ))}
      </ul>
      <Button onClick={handleTask} />
    </form>
  );
};

export default TaskContent;
