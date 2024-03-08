import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Adicionar
    </button>
  );
};

export default Button;
