import "./styles.css";
import React from "react";
import Die from "./components/Die";

export default function App() {
  /**
   * Challenge:
   *
   * Create state to hold our array of numbers. (Initialize
   * the state by calling our `allNewDice` function so it
   * loads all new dice as soon as the app loads)
   *
   * Map over the state numbers array to generate our array
   * of Die elements and render those in place of our
   * manually-written 10 Die elements.
   */
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const max = 6;
    const min = 1;
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * (max - min) + min));
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
