import React from "react";
import "./WordGrid.css";

const getColor = (letter, index, targetWord) => {
  if (targetWord[index] === letter) return "correct";
  if (targetWord.includes(letter)) return "misplaced";
  return "incorrect";
};

const WordGrid = ({ guesses, targetWord }) => {
  return (
    <div className="grid-container">
      {Array.from({ length: 6 }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {Array.from({ length: 5 }).map((_, colIndex) => {
            const letter = guesses[rowIndex]?.[colIndex] || "";
            return (
              <div key={colIndex} className={`grid-cell ${letter ? getColor(letter, colIndex, targetWord) : ""}`}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default WordGrid;
