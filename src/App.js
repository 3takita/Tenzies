import "./styles.css";
import React from "react";
import Die from "./components/Die";

export default function App() {
  /**
   * Challenge: Update the array of numbers in state to be
   * an array of objects instead. Each object should look like:
   * { value: <random number>, isHeld: false }
   *
   * Making this change will break parts of our code, so make
   * sure to update things so we're back to a working state
   */
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const max = 6;
    const min = 1;
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        value: Math.floor(Math.random() * (max - min) + min),
        isHeld: false
      });
    }
    return arr;
  }

  const diceElement = dice.map((item) => {
    return <Die value={item} />;
  });

  function roll() {
    setDice(allNewDice);
  }

  return (
    <main className="frame">
      <div className="dice-container">{diceElement}</div>
      <button className="button" onClick={roll}>
        Roll
      </button>
    </main>
  );
}
