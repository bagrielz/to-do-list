import React from "react";
import Edit from "../assets/Edit.svg?react";
import Trash from "../assets/Trash.svg?react";
import Check from "../assets/Check.svg?react";

const Task = ({
  children,
  active,
  index,
  handleTaskUpdate,
  handleTaskDelete,
  maxLength,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newValue, setNewValue] = React.useState(children);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleInputChange(e) {
    if (e.target.value.length <= maxLength) {
      setNewValue(e.target.value);
    }
  }

  function handleInputBlur() {
    setIsEditing(false);

    if (newValue !== children) handleTaskUpdate(newValue, index);
  }

  function handleDeleteClick() {
    handleTaskDelete(index);
  }

  return (
    <li className={active}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus
          />
          <button className="iconBtn" onClick={handleTaskUpdate}>
            <Check />
          </button>
        </>
      ) : (
        <>
          <span>{children}</span>
          <div>
            <button className="iconBtn" onClick={handleEditClick}>
              <Edit />
            </button>
            <button className="iconBtn" onClick={handleDeleteClick}>
              <Trash />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Task;
