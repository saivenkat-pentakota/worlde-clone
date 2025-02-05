import React, { useState } from "react";
import WordGrid from "./WordGrid";
import Keyboard from "./Keyboard";
import "./Game.css";

const WORDS = ["APPLE", "BRAVE", "PLANT", "CHAIR", "TIGER"];
const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];

const Game = () => {
  const [targetWord, setTargetWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    if (currentGuess.length !== 5) return;
    if (currentGuess === targetWord) {
      setMessage("You Win!");
      setGameOver(true);
    } else if (guesses.length === 5) {
      setMessage(`Game Over! The word was ${targetWord}`);
      setGameOver(true);
    }

    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");
  };

  const handleKeyPress = (letter) => {
    if (!gameOver && currentGuess.length < 5) {
      setCurrentGuess(currentGuess + letter);
    }
  };

  const restartGame = () => {
    setTargetWord(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setMessage("");
  };

  return (
    <div className="game-container">
      <h1 className="title">Wordle Clone</h1>
      <WordGrid guesses={guesses} targetWord={targetWord} />
      <div className="input-container">
        <input
          type="text"
          value={currentGuess}
          maxLength="5"
          className="guess-input"
          disabled
        />
        <button onClick={handleGuess} className="enter-button" disabled={gameOver}>
          Enter
        </button>
      </div>
      <Keyboard onKeyPress={handleKeyPress} />
      {message && <p className="message">{message}</p>}
      <button onClick={restartGame} className="new-game-button">
        New Game
      </button>
    </div>
  );
};

export default Game;
