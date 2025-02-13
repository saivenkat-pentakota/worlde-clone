import React, { useState, useEffect } from "react";
import WordGrid from "./WordGrid";
import Keyboard from "./Keyboard";
import GamePopup from "./GamePopup";
import "./Game.css";

const WORDS = ["APPLE", "BRAVE", "PLANT", "CHAIR", "TIGER", "DREAM", "PANIC", "AUDIO", "MINOR", "BRAIN", "ROUTE", "RELAX"];
const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];

const Game = () => {
  const [targetWord, setTargetWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(true);

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

  useEffect(() => {
    setTargetWord(getRandomWord());
  }, []);

  const handleKeyPress = (letter) => {
    if (!gameOver && currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + letter);
    }
  };

  const handleRemove = () => {
    if (!gameOver && currentGuess.length > 0) {
      setCurrentGuess((prev) => prev.slice(0, -1));
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
      {showPopup && <GamePopup onClose={() => setShowPopup(false)} />} {/* Show popup on game start */}
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
      <Keyboard onKeyPress={handleKeyPress} onRemove={handleRemove} />
      {message && <p className="message">{message}</p>}
      <button onClick={restartGame} className="new-game-button">
        New Game
      </button>
    </div>
  );
};

export default Game;
