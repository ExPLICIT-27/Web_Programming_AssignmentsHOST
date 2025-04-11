import { useState } from "react";
import "../App.css";
export const Question4 = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  var sqrSum = Number(num1) * Number(num1) + Number(num2) * Number(num2);
  return (
    <div className="sqrNums">
      <h1>Square Sum</h1>
      <input
        type="number"
        placeholder="Enter the first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter the second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <p>
        <h2>Result : {sqrSum} </h2>
      </p>
    </div>
  );
};
