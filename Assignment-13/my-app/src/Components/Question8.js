import { useState } from "react"
import "../App.css";
export const Question8 = () =>{
    const [currVal, changeVal] = useState("");
    const [convType, changeConvType] = useState(true);
    const [output, ChangeOutput] = useState("");
    function calcOut(){
        if(currVal === ""){
            ChangeOutput("Invalid Input!")
        }
        else{
            let num = Number(currVal);
            let outval;
            if(convType){
                outval = 9*num/5 + 32;
            }
            else{
                outval = (num - 32)*5/9;
            }
            ChangeOutput("Converted temperature : " + outval);

        }
    }
    return (
        <div className = "q8TempConverter">
            <input 
                type = "number"
                value = {currVal}
                placeholder = {convType? "Degree Celsius" : "Degree Fahrenheit"}
                onChange={(e) => {changeVal(e.target.value)}}
            />
            <button type = "button" onClick= {() => {
                changeConvType(!convType);
                }}>{convType? "FahrenHeit Converter (Click to change)" : "Celsius converted (Click to change)"}</button>
            <button type = "button" onClick = {calcOut}>CONVERT</button>
            <h1>{output}</h1>
        </div>
    )
}