import { useState } from "react";
import { useEffect } from "react";
import "../App.css";
export const Question5 = () => {
  const [msg, SetMsg] = useState("");
  const [isMorning, setIsMorning] = useState(false);
  const [currTime, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      let now = new Date();
      let currhr = now.getHours();
      if (currhr <= 12) {
        setIsMorning(true);
      } else {
        setIsMorning(false);
      }
      if (isMorning) {
        SetMsg("Good Morning!");
      } else {
        SetMsg("Good Evening!");
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="GreetingMessage">
      <span className="currentTime">{currTime}</span>
      <h2 className="q5Greeting">{msg}</h2>
    </div>
  );
};
