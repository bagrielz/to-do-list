import React from "react";
import Edit from "../assets/Edit.svg?react";
import Trash from "../assets/Trash.svg?react";

const Task = ({ children, active }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newValue, setNewValue] = React.useState(children);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleInputChange(e) {
    setNewValue(e.target.value);
  }

  function handleInputBlur() {
    setIsEditing(false);
  }

  return (
    <li className={active}>
      {isEditing ? (
        <input
          type="text"
          value={newValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <span>{children}</span>
      )}
      <div>
        <button className="iconBtn" onClick={handleEditClick}>
          <Edit />
        </button>
        <button className="iconBtn">
          <Trash />
        </button>
      </div>
    </li>
  );
};

export default Task;
