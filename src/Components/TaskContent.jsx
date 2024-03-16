import React from "react";
import Input from "./Helper/Input";
import Button from "./Helper/Button";
import Task from "./Task";
import Message from "./Helper/Message";

const TaskContent = () => {
  const [tasks, setTasks] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [active, setActive] = React.useState("task-enter");
  const [message, setMessage] = React.useState({
    show: false,
    text: "",
    backgroundColor: "",
  });
  const maxLength = 35;

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleValue(e) {
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value);
    }
  }

  function handleTaskAdd() {
    if (value.trim() !== "") {
      setTasks([...tasks, value]);
      setTimeout(() => {
        setActive("task-enter-active");
      }, 10);
      setActive("task-enter");
      setValue("");
      showMessage("add"); // Chama showMessage para adicionar tarefa
    }
  }

  function handleTaskUpdate(newValue, index) {
    if (newValue !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newValue;
      setTasks(updatedTasks);
      showMessage("edit"); // Chama showMessage para editar tarefa
    } else {
      handleTaskDelete(index); // Chama a função para deletar a tarefa
    }
  }

  function handleTaskDelete(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    showMessage("delete");
  }

  function showMessage(action) {
    const messages = {
      add: { text: "Task adicionada", backgroundColor: "#96FF8D" },
      edit: { text: "Task alterada", backgroundColor: "#9BA5FF" },
      delete: { text: "Task deletada", backgroundColor: "#FF8A73" },
    };

    setMessage({ show: true, ...messages[action] });
    setTimeout(() => {
      setMessage({ show: false, text: "", backgroundColor: "" });
    }, 3000);
  }

  console.log(showMessage);

  return (
    <>
      <form onClick={handleSubmit}>
        <div className="inputContent">
          <Input onChange={handleValue} maxLength={maxLength} />
          <Button onClick={handleTaskAdd} />
        </div>
        <ul className="tasks">
          {tasks.map((task, index) => (
            <Task
              active={active}
              key={index}
              index={index}
              handleTaskUpdate={handleTaskUpdate}
              handleTaskDelete={handleTaskDelete}
              maxLength={maxLength}
            >
              {task}
            </Task>
          ))}
        </ul>
      </form>
      <Message {...message} />
    </>
  );
};

export default TaskContent;
