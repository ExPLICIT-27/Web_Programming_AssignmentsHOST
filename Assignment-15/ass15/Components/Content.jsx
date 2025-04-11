import { useState } from "react";
import jjjlaugh from "../src/assets/Images/jjjLaugh.gif";
export const Content = () => {
  const [joke, ChangeJoke] = useState("");
  const [clicked, changeClicked] = useState(false);
  const jokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why do Java developers wear glasses? Because they can't C#.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "Why was the math book sad? It had too many problems.",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "I used to play piano by ear, but now I use my hands.",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
  ];

  return (
    <div className="content">
      <button
        type="button"
        onClick={() => {
          ChangeJoke(jokes[Math.floor(Math.random() * jokes.length)]);
          changeClicked(true);
        }}
      >
        Click Here for a Joke!
      </button>
      <div className="jokeBox">
        <span className="joke">{joke}</span>
      </div>
      <div
        className="jjjLaughin"
        style={{
          display: clicked ? "block" : "none",
          width: "250px",
          height: "250px",
        }}
      >
        <img src={jjjlaugh} />
      </div>
    </div>
  );
};
