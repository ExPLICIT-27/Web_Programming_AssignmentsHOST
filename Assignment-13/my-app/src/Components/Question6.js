import { useEffect } from "react"
import { useState } from "react";
import "../App.css";
export const Question6 = () => {
    const [currDate, updateDate] = useState(new Date().toLocaleDateString());
    const [currDay, updateDay] = useState("");
    useEffect(() =>{
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const interval = setInterval(()=>{
            var now = new Date();
            updateDate(now.toLocaleDateString());
            updateDay(days[now.getDay()]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className = "q6currTime">
            <h2>Today's Date : {currDate}</h2>
            <h1>Day : {currDay}</h1>
        </div>
    )
}