import React from "react";

const AddTask = ({ show, onClose }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (show) {
      setIsVisible(true);
      // Oculta a mensagem após 3 segundos
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000);

      // Limpa o timeout ao desmontar o componente
      return () => clearTimeout(timeoutId);
    }
  }, [show, onClose]);

  return (
    <div className={`addTask ${isVisible ? "show" : ""}`}>
      <span>Task adicionada</span>
    </div>
  );
};

export default AddTask;
