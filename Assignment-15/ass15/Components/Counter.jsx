import { useState } from "react";
export const Counter = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <div className="inc-dec-btns">
        <button onClick={decrement}>Decrease</button>
        <button onClick={increment}>Increase</button>
      </div>
    </div>
  );
};
