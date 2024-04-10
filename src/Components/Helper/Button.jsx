import React from "react";

const Button = ({ handleTaskAdd }) => {
  return (
    <button className="Button" onClick={handleTaskAdd}>
      Adicionar
    </button>
  );
};

export default Button;
