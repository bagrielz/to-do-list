import React from "react";
import Edit from "../assets/Edit.svg?react";
import Trash from "../assets/Trash.svg?react";

const Task = ({ children, active }) => {
  return (
    <li className={active}>
      <span>{children}</span>
      <div>
        <Edit />
        <Trash />
      </div>
    </li>
  );
};

export default Task;
