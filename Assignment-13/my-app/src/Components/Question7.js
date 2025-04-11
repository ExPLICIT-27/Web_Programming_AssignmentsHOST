import { useState } from "react"
import { useEffect } from "react";
export const Question7 = () =>{
    const [givenNum, changeNum] = useState("");
    const [output, changeOutput] = useState("");
    useEffect(()=>{
        if(givenNum === ""){
            changeOutput("");
        }
        else{
            var num = givenNum;
            if(num < 2){
                changeOutput("Given Number is not Prime!");
            }
            else{
                var isPrime = true;
                for(let i = 2; i <= Math.sqrt(num); i++){
                    if(num%i === 0){
                        isPrime = false;
                        break;
                    }
                }
                changeOutput(isPrime ? "Given Number is Prime!" : "Given Number is not Prime!");
            }
        }
    }, [givenNum]);
    return (
        <div className = "q7Prime">
            <input 
                type = "input"
                value = {givenNum}
                placeholder = "Enter the number"
                onChange={(e) => {changeNum(e.target.value)}}
            />
            <h1>{output}</h1>
        </div>
    )
}