import React, { useEffect } from "react";
import "./Keyboard.css";

const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

const Keyboard = ({ onKeyPress, onRemove }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
    
      if (keys.includes(event.key.toUpperCase())) {
        onKeyPress(event.key.toUpperCase());
      } else if (event.key === "Backspace") {
        onRemove();
      }
    };
    
   

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onKeyPress, onRemove]);

  return (
    <div className="keyboard-container">
      {keys.map((key) => (
        <button key={key} onClick={() => onKeyPress(key)} className="key">
          {key}
        </button>
      ))}
      <button onClick={onRemove} className="key remove-key">⌫</button>
    </div>
  );
};

export default Keyboard;
