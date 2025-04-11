import { useEffect, useState } from "react";

export const Q7JokeFetcher = () => {
  const [joke, setJoke] = useState("");
  const jokefetcher = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error("Error fetching joke!", error);
    }
  };
  useEffect(() => {
    jokefetcher();
  }, []);
  return (
    <div className="jokeFetcher">
      <h1>Random Joke</h1>
      <span className="joke-text">{joke || "Joke loading...."}</span>
      <button onClick={jokefetcher}>Get New Joke</button>
    </div>
  );
};
