import { useState } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Languages from "./components/Languages";
import NewGame from "./components/Newgame";
import StatusSection from "./components/Status-Section";
import Words from "./components/Words";
import { languages } from "./utils/language";
import { getFarewellText } from "./utils/farewell";
import { words } from "./utils/words";
import Confetti from "react-confetti";




export default function App() {
  const [currentWord, setCurrentWord] = useState(randomWord); //state for word to guess
  console.log(currentWord)
  const [keyboard, setKeyboard] = useState([]); //state for keyboard:

  // To count the number of wrong guesses:
  const wrongGuessCount = keyboard.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  //Function to guess input
  function guessInput(ip) {
    setKeyboard((pervInput) =>
      pervInput.includes(ip) ? pervInput : [...pervInput, ip],
    );
  }


  //Function to chose a random word from words.js 
  function randomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function newGame(e){
    e.preventDefault()
    setCurrentWord(randomWord)
    setKeyboard([])
  }

  // Game over logic
  const gameWon = currentWord
    .split("")
    .every((letter) => keyboard.includes(letter));
  const gameLost = wrongGuessCount >= languages.length - 1;
  const gameOver = gameWon || gameLost;

  const lastGuessedLetter = keyboard[keyboard.length - 1];
  const isLastGuessedIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  return (
    <div style={{ maxWidth: 700 }}>
      {gameWon && <Confetti numberOfPieces={1200} recycle={false} />}
      <Header />
      <StatusSection
        gameLost={gameLost}
        gameWon={gameWon}
        gameOver={gameOver}
        isLastGuessedIncorrect={isLastGuessedIncorrect}
        wrongGuessCount={wrongGuessCount}
      />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Words
        currentWord={currentWord}
        keyboard={keyboard}
        gameLost={gameLost}
      />
      <Keyboard
        onClick={guessInput}
        currentWord={currentWord}
        keyboard={keyboard}
        gameOver={gameOver}
      />
      {gameOver && <NewGame onClick={newGame} />}
    </div>
  );
}
