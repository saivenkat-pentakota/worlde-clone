# Wordle Clone - React App  

A simple Wordle-like game built using React. The user has 6 attempts to guess a 5-letter word, with color-coded feedback for each guess.  

## Features  

- Guess a 5-letter word within 6 attempts  
- Color-coded feedback for each guess:  
  - Green: Correct letter in the correct position  
  - Yellow: Correct letter in the wrong position  
  - Gray: Incorrect letter  
- On-screen keyboard to select letters  
- New Game button to restart  
- Fully responsive design for mobile & desktop  
- Validations to prevent invalid inputs  

## Project Setup & Installation  

1. Clone the Repository  
```sh
git clone https://github.com/your-username/wordle-clone.git
cd wordle-clone

2. Install Dependencies
npm install

3. Run the App
npm start

This will start a development server at http://localhost:3000/

How to Play
Use the on-screen keyboard or type to enter a 5-letter word.
Click the "Submit" button to check your guess.
Color feedback will be displayed:
Green: Correct letter and position
Yellow: Correct letter but wrong position
Gray: Incorrect letter
You have 6 attempts to guess the correct word.
If you guess the word correctly, you win. If not, the correct word will be revealed after 6 attempts.
Click "New Game" to restart.


Technologies Used:
React
CSS


Folder Structure:
wordle-clone/
 src/
   components/
    Game.js
    WordGrid.js
    Keyboard.js 
    Game.css
    WordGrid.css
    Keyboard.css
App.js
index.js
public/
package.json
README.md