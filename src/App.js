import "./styles.css";
import { nanoid } from "nanoid";
import React from "react";
import Die from "./components/Die";

export default function App() {
  /**
   * Challenge:
   * 1. Add new state called `tenzies`, default to false. It
   *    represents whether the user has won the game yet or not.
   * 2. Add an effect that runs every time the `dice` state array
   *    changes. For now, just console.log("Dice state changed").
   */
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzirs] = React.useState(false);

  React.useEffect(() => {
    console.log("You have won!!!");
  }, [dice]);

  //Helper function that generates dice
  function generateNewDice() {
    const max = 6;
    const min = 1;
    return {
      value: Math.floor(Math.random() * (max - min) + min),
      isHeld: false,
      id: nanoid()
    };
  }
  //Object generator function
  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(generateNewDice());
    }
    return arr;
  }

  const diceElement = dice.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      holdDice={() => holdDice(item.id)}
    />
  ));

  function roll() {
    setDice((oldDice) =>
      oldDice.map((old) => {
        return old.isHeld ? old : generateNewDice();
      })
    );
  }

  function holdDice(id) {
    setDice((prevState) =>
      dice.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }

  return (
    <main className="frame">
      <h1>Tenzies</h1>
      <h3>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h3>
      <div className="dice-container">{diceElement}</div>
      <button className="button" onClick={roll}>
        Roll
      </button>
    </main>
  );
}
