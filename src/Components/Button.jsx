import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      Adicionar
    </button>
  );
};

export default Button;
