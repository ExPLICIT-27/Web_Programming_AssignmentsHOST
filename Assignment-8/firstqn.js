let first = parseInt(prompt("Enter first number: "))
let second = parseInt(prompt("Enter second number: "))
let symbol = prompt("Enter mathematical symbol: ")

if(symbol == '+'){
    alert("Output of " + first + " + " + second + " = " + (first + second));
}
else if(symbol == '-'){
    alert("Output of " + first + " - " + second + " = " + (first - second));
}
else if(symbol == '*'){
    alert("Output of " + first + " * " + second + " = " + (first * second));
}
else if(symbol == '/'){
    alert("Output of " + first + " / " + second + " = " + (first / second));
}
else if(symbol == '%'){
    alert("Output of " + first + " % " + second + " = " + (first % second));
}
else{
    alert("Wrong input!");
}