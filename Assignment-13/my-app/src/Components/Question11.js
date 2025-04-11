import { useState } from "react";
export const Question11 = () => {
  const [inpVal, changeinpVal] = useState("");
  const [output, ChangeOutput] = useState("");
  return (
    <div className="q10CheckLeap">
      <input
        type="number"
        value={inpVal}
        placeholder="Enter the year"
        onChange={(e) => {
          changeinpVal(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          var year = Number(inpVal);
          if (year % 4 === 0) {
            ChangeOutput(`${year} is a Leap Year`);
          } else if (year % 100 === 0 && year % 400 === 0) {
            ChangeOutput(`${year} is a Leap Year`);
          } else {
            ChangeOutput(`${year} is not a Leap Year`);
          }
        }}
      >
        Check Year Type
      </button>
      <h1>{output}</h1>
    </div>
  );
};
