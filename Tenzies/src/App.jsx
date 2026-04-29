import Die from "./components/Die";
import { useState } from "react";
import Confetti from "react-confetti";



export default function App() {
  const [newDiceNumbers, setNewDiceNumbers] = useState(() => generateAllNewDice());
  
  
  //Logic to check whether we won the game:
  const gameWon =
    newDiceNumbers.every((die) => die.isHeld) &&
    newDiceNumbers.every((die) => die.value === newDiceNumbers[0].value);
  
  
    // Function to generate random number from 1-6:
  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const rand = Math.ceil(Math.random() * 6);
      newDice.push({
        value: rand,
        isHeld: false,
        id: i,
      });
    }
    return newDice;
  }

  // Function to roll the dice
  function rollDice(){
    if(!gameWon){
      setNewDiceNumbers((prevDice) =>
        prevDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
        ),
      );
    } else {
      setNewDiceNumbers(generateAllNewDice())
    }
    
  }

  //Function to hold a specific button with given id:
  function hold(id) {
    setNewDiceNumbers((prevDice) =>
      prevDice.map((die) => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: !die.isHeld,
          };
        } else {
          return die;
        }
      }),
    );
  }

  const diceElements = newDiceNumbers.map((num) => (
    <Die
      key={num.id}
      id={num.id}
      value={num.value}
      isHeld={num.isHeld}
      hold={hold}
    />
  ));

  return (
    <main>
      {gameWon && <Confetti numberOfPieces={1200} recycle={false} />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="diceContainer">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll Dice"}
      </button>
    </main>
  );
}
