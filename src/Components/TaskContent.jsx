import React from "react";
import TaskInput from "./TaskInput";
import Button from "./Button";
import Task from "./Task";

const TaskContent = () => {
  const [tasks, setTasks] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [active, setActive] = React.useState("task-enter");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleTask() {
    if (value.trim() !== "") {
      // Verifica se o valor não está vazio ou contém apenas espaços em branco
      setTasks([...tasks, value]);
      setTimeout(() => {
        setActive("task-enter-active");
      }, 10);
      setActive("task-enter");
      setValue(""); // Limpa o valor do input após adicionar a task
    }
  }

  function handleValue(event) {
    setValue(event.target.value);
  }

  return (
    <form onClick={handleSubmit}>
      <div className="inputContent">
        <TaskInput onChange={handleValue} />
        <Button onClick={handleTask} />
      </div>
      <ul className="tasks">
        {tasks.map((task) => (
          <Task active={active} key={task} onClick={handleTask}>
            {task}
          </Task>
        ))}
      </ul>
    </form>
  );
};

export default TaskContent;
