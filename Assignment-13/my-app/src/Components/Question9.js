import { useState } from "react";
export const Question9 = () => {
  const [isPalindrome, changePalindrome] = useState("");
  const [revStr, changeRevStr] = useState("");
  const [inpval, changeInpVal] = useState("");
  function checkPalindrome() {
    var reversed = inpval.split("").reverse().join("");
    changeRevStr(reversed);
    if (reversed === inpval) {
      changePalindrome("Given String is a Palindrome!");
    } else {
      changePalindrome("Given String is not a Palindrome!");
    }
  }
  return (
    <div className="q9RevStr">
      <input
        type="input"
        placeholder="Enter string"
        value={inpval}
        onChange={(e) => {
          changeInpVal(e.target.value);
        }}
      />
      <button onClick={checkPalindrome}>Reverse String</button>
      <h1>{revStr}</h1>
      <h2>{isPalindrome}</h2>
    </div>
  );
};
