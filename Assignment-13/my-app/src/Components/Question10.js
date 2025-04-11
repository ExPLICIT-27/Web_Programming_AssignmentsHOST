import { useState } from "react";
export const Question10 = () => {
  const [randNum, genRandNum] = useState("");
  return (
    <div className="q10RandomNum">
      <button
        type="button"
        onClick={() => {
          genRandNum(`Random Number : ${Math.floor(Math.random() * 100)}`);
        }}
      >
        Generate a random number!
      </button>
      <h1>{randNum}</h1>
    </div>
  );
};
