import { useReducer } from "react";
const countChanger = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
export const Counter2 = () => {
  const [state, dispatch] = useReducer(countChanger, { count: 0 });
  return (
    <div className="counter-reducer">
      <h1>Counter (using Reducer) </h1>
      <h1>{state.count}</h1>
      <div className="inc-dec-btns">
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrease
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increase
        </button>
      </div>
    </div>
  );
};
