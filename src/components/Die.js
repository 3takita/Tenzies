import React from "react";

export default function Die(props) {
  const styling = {
    backgroundColor: `${
      props.isHeld /*&& props.value === 5*/ ? "#59E391" : "white"
    }`
  };
  return (
    <div style={styling} onClick={props.holdDice} className="die-face">
      <h2>{props.value}</h2>
    </div>
  );
}
