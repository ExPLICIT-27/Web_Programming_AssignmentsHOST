import { useState, useRef } from "react";
export const Q8UseRef = () => {
  const [name, changeName] = useState("");
  const inputRef = useRef();
  const makefocus = (event) => {
    event.preventDefault();
    inputRef.current.focus();
  };
  return (
    <div className="q8useref">
      <form>
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => {
            changeName(e.target.value);
          }}
        />
        <br />
        <button onClick={makefocus}>Click to focus</button>
      </form>
      <h1>Your name is {name}</h1>
    </div>
  );
};
