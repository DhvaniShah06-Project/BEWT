"use client"
import React, { useState } from "react";

function Lab29_B() {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [res, setRes] = useState(0);

  const calculate = (operation:any) => {
    switch (operation) {
      case "add":
        setRes(a + b);
        break;
      case "sub":
        setRes(a - b);
        break;
      case "mul":
        setRes(a * b);
        break;
      case "div":
        if (b === 0) {
          alert("Cannot divide by zero");
          return;
        }
        setRes(a / b);
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-x-2">
      <input
        type="number"
        placeholder="Enter number 1"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Enter number 2"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />

      <button onClick={() => calculate("add")}>Add</button>
      <button onClick={() => calculate("sub")}>Subtract</button>
      <button onClick={() => calculate("mul")}>Multiply</button>
      <button onClick={() => calculate("div")}>Divide</button>

      <p>Result: {res}</p>
    </div>
  );
}

export default Lab29_B;