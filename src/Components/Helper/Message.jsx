import React from "react";

const Message = ({ text, backgroundColor, show }) => {
  console.log("Props recebidas pelo componente Message:", {
    text,
    backgroundColor,
    show,
  });

  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (show) {
      setIsVisible(true);
      // Oculta a mensagem após 3 segundos
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      // Limpa o timeout ao desmontar o componente
      return () => clearTimeout(timeoutId);
    }
  }, [show]);

  return (
    <div
      className={`message ${isVisible ? "show" : ""}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <span>{text}</span>
    </div>
  );
};

export default Message;
