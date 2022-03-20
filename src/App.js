import "./styles.css";
import { nanoid } from "nanoid";
import React from "react";
import Die from "./components/Die";

export default function App() {
  /**
   * Challenge: Add conditional styling to the Die component
   * so that if it's held (isHeld === true), its background color
   * changes to a light green (#59E391)
   *
   * Remember: currently the Die component has no way of knowing
   * if it's "held" or not.
   */
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    /*object generator function*/
    const max = 6;
    const min = 1;
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        value: Math.floor(Math.random() * (max - min) + min),
        isHeld: false,
        id: nanoid()
      });
    }
    return arr;
  }

  const diceElement = dice.map((item) => (
    <Die key={item.id} value={item.value} />
  ));

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
