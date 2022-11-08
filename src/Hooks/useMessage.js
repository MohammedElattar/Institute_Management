import React, { useState } from "react";
const danger = "#dc3545";
const success = "#28a745";
const warning = "#ffc107";

function useMessage() {
  const [message, setMessage] = useState({ text: "", color: "" });

  const showMessage = (text, type) => {
    setMessage({
      text,
      color:
        type === "danger"
          ? danger
          : type === "success"
          ? success
          : type === "warning"
          ? warning
          : "#000",
    });
  };

  const hideMessage = () => {
    setMessage({ text: "", color: "#000" });
  };

  return {
    showMessage,
    hideMessage,
    jsx: message.text ? (
      <p style={{ color: message.color }}>{message.text}</p>
    ) : null,
  };
}

export default useMessage;
