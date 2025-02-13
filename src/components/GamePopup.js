import React from "react";
import "./GamePopup.css"; 

const GamePopup = ({ onClose }) => {
  return (
    <div className="gamepopup-modal-overlay">
      <div className="gamepopup-modal-content">
        <h2>How To Play</h2>
        <p>Guess the Wordle in 6 tries.</p>
        <ul>
          <p>Each guess must be a valid 5-letter word.</p>
          <p>
            The color of the tiles will change to show how close your guess was to the word.
          </p>
        </ul>
        
        <h3>Examples</h3>
        <div className="gamepopup-example">
          <div className="gamepopup-tile green">W</div>
          <div className="gamepopup-tile">O</div>
          <div className="gamepopup-tile">R</div>
          <div className="gamepopup-tile">D</div>
          <div className="gamepopup-tile">Y</div>
          <p>W is in the word and in the correct spot.</p>
        </div>

        <div className="gamepopup-example">
          <div className="gamepopup-tile">L</div>
          <div className="gamepopup-tile yellow">I</div>
          <div className="gamepopup-tile">G</div>
          <div className="gamepopup-tile">H</div>
          <div className="gamepopup-tile">T</div>
          <p>I is in the word but in the wrong spot.</p>
        </div>

        <div className="gamepopup-example">
          <div className="gamepopup-tile">R</div>
          <div className="gamepopup-tile">O</div>
          <div className="gamepopup-tile">G</div>
          <div className="gamepopup-tile letter-U">U</div>
          <div className="gamepopup-tile">E</div>
          <p>U is not in the word in any spot.</p>
        </div>

        <button className="gamepopup-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default GamePopup;
