import React from "react";
import "./Keyboard.css";

const Keyboard = ({ onKeyPress }) => {
  const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

  return (
    <div className="keyboard-container">
      {keys.map((key) => (
        <button key={key} onClick={() => onKeyPress(key)} className="key">
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
