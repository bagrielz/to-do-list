import React, { useState } from "react";
import Input from "./Helper/Input";
import Button from "./Helper/Button";
import Task from "./Task";
import Message from "./Helper/Message";

const TaskContent = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [active, setActive] = useState("task-enter");
  const [messages, setMessages] = useState([]);
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

    // Adiciona a nova mensagem à lista de mensagens
    setMessages((prevMessages) => [...prevMessages, messages[action]]);
  }

  return (
    <>
      <form onClick={handleSubmit}>
        <div className="inputContent">
          <Input handleValue={handleValue} maxLength={maxLength} />
          <Button handleTaskAdd={handleTaskAdd} />
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
      {/* Renderiza todas as mensagens */}
      {messages.map((message, index) => (
        <Message key={index} {...message} show={true} />
      ))}
    </>
  );
};

export default TaskContent;
