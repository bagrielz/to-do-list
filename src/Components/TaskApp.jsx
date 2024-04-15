import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Trash from "../assets/Trash.svg?react";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]); // Estado para armazenar as tasks
  const [inputValue, setInputValue] = useState(""); // Estado para armazenar o valor
  const maxLength = 35; // Limite máximo de caracteres para o input

  // Atualiza as tasks ao montar o componente puxando do armazenamento local
  useEffect(() => {
    refreshTasksFromLocalStorage();
  }, []);

  // Valida se o input não está vazio
  const validateInput = () => inputValue.trim().length > 0;

  // Adiciona uma nova task
  const handleAddTask = () => {
    if (!validateInput()) {
      setInputValue("");
      return toast("Digite a task", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
        transition: Slide,
        style: {
          background: "#FF8A73",
        },
      });
    }

    const newTask = {
      description: inputValue,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]); // Adiciona a nova task ao estado de tasks
    setInputValue(""); // Limpa o valor do input

    updateLocalStorage([...tasks, newTask]); // Atualiza o armazenamento local com as tasks

    // Exibe uma mensagem para indicar que a task foi adicionada
    toast("Task adicionada", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
      transition: Slide,
      style: {
        background: "#96FF8D",
      },
    });
  };

  // Atualiza o valor do input conforme o usuário digita
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Altera o estado de uma task quando clicada
  const handleClick = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted; // Adiciona um line-trought na task quando clicada
    setTasks(updatedTasks);

    updateLocalStorage(updatedTasks);
  };

  // Remove uma task quando o ícone da lixeira é clicado
  const handleDeleteClick = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    updateLocalStorage(updatedTasks);

    // Exibe uma mensagem para indicar que a task foi deletada
    toast("Task deletada", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
      transition: Slide,
      style: {
        background: "#FF8A73",
      },
    });
  };

  // Atualiza as tasks a partir do armazenamento local
  const refreshTasksFromLocalStorage = () => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    if (tasksFromLocalStorage) {
      setTasks(tasksFromLocalStorage);
    }
  };

  // Atualiza o armazenamento local com a nova task
  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="new-task-input"
          placeholder="Escreva a task..."
          value={inputValue}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
        <button className="new-task-button" onClick={handleAddTask}>
          Adicionar
        </button>
      </div>
      <ul className="tasks-container">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span
              className={task.isCompleted ? "completed" : ""}
              onClick={() => handleClick(index)}
            >
              {task.description}
            </span>
            <button
              className="icon-btn"
              onClick={() => handleDeleteClick(index)}
            >
              <Trash />
            </button>
          </li>
        ))}
      </ul>
      <footer>
        <p>
          Made by <span>Gabriel Stênio</span> with <span>🤘</span>
        </p>
      </footer>
      <ToastContainer
        bodyClassName="custom-toast-body"
        style={{ width: "200px" }}
      />
    </>
  );
};

export default TaskApp;
