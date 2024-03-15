import React from "react";
import TaskInput from "./TaskInput";
import Button from "./Button";
import Task from "./Task";

const TaskContent = () => {
  const [tasks, setTasks] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [active, setActive] = React.useState("task-enter");

  function handleSubmit(e) {
    e.preventDefault();
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

  function handleTaskUpdate(newValue, index) {
    // Atualiza a array de tasks com o novo valor ou exclui a tarefa
    if (newValue !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newValue;
      setTasks(updatedTasks);
    } else {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  return (
    <form onClick={handleSubmit}>
      <div className="inputContent">
        <TaskInput onChange={handleValue} />
        <Button onClick={handleTask} />
      </div>
      <ul className="tasks">
        {tasks.map((task, index) => (
          <Task
            active={active}
            key={index}
            index={index}
            handleTaskUpdate={handleTaskUpdate}
          >
            {task}
          </Task>
        ))}
      </ul>
    </form>
  );
};

export default TaskContent;
