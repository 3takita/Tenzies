import "./styles.css";
import { nanoid } from "nanoid";
import React from "react";
import Die from "./components/Die";
import Confetti from "react-confetti";

export default function App() {
  /**
   * Challenge: Tie off loose ends!
   * 1. If tenzies is true, Change the button text to "New Game"
   * 2. If tenzies is true, use the "react-confetti" package to
   *    render the <Confetti /> component 🎉
   *
   *    Hint: don't worry about the `height` and `width` props
   *    it mentions in the documentation. */
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  /* Function that determines if win conditions are met 
     If all isHeld are true and all values are the same, Win*/
  function combined(arr) {
    var heldCnt = 0;
    var valCnt = 0;
    const first = arr[0].value;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].isHeld) {
        heldCnt += 1;
      }
      if (first === arr[i].value) {
        valCnt += 1;
      }
    }
    if (heldCnt === arr.length) {
      var otu = true;
    } else {
      otu = false;
    }
    if (valCnt === arr.length) {
      var abuo = true;
    } else {
      abuo = false;
    }
    //If conditions are right, print "You have won" to screen
    if (otu && abuo) {
      return true;
    } else {
      return false;
    }
  }

  React.useEffect(() => {
    if (combined(dice)) {
      setTenzies(true);
    }
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
  //function that rolls the dice
  function roll() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((old) => {
          return old.isHeld ? old : generateNewDice();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice);
    }
  }
  //function for holding dice
  function holdDice(id) {
    setDice((prevState) =>
      dice.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }
  //Conditional styling for button
  const aba = {
    width: `${tenzies ? "130px" : "80px"}`,
    height: `${tenzies ? "50px" : "35px"}`
  };

  return (
    <main className="frame">
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <h3>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h3>
      <div className="dice-container">{diceElement}</div>
      <button style={aba} className="button" onClick={roll}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
