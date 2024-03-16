import React from "react";
import Input from "./Helper/Input";
import Button from "./Helper/Button";
import Task from "./Task";
import AddTask from "./Helper/AddTask";

const TaskContent = () => {
  const [tasks, setTasks] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [active, setActive] = React.useState("task-enter");
  const [showAddTask, setShowAddTask] = React.useState(false);
  const maxLength = 35; // Defina o limite de caracteres desejado

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
      setShowAddTask(true);
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
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value);
    }
  }

  function handleCloseAddTask() {
    setShowAddTask(false);
  }

  return (
    <>
      <form onClick={handleSubmit}>
        <div className="inputContent">
          <Input onChange={handleValue} maxLength={maxLength} />
          <Button onClick={handleTask} />
        </div>
        <ul className="tasks">
          {tasks.map((task, index) => (
            <Task
              active={active}
              key={index}
              index={index}
              handleTaskUpdate={handleTaskUpdate}
              maxLength={maxLength}
            >
              {task}
            </Task>
          ))}
        </ul>
      </form>
      <AddTask show={showAddTask} onClose={handleCloseAddTask} />
    </>
  );
};

export default TaskContent;
