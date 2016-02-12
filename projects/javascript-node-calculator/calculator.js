var readlineSync = require('readline-sync');

function add (num1, num2) {
    return num1 + num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

var firstNumber = readlineSync.question('Please enter your first number: ');
console.log("You entered: " + firstNumber);

var secondNumber = readlineSync.question('Please enter your second number: ');
console.log("You entered: " + secondNumber);

var operation = readlineSync.question('Please enter the operation to be performed: add, mul, div, sub: ');

var parsedFirstNumber = parseInt(firstNumber);

var parsedSecondNumber  = parseInt(secondNumber);

if (operation === "add") {
    console.log("The result is: " + add(parsedFirstNumber, parsedSecondNumber));
} else if (operation === "mul") {
    console.log("The result is: " + multiply(parsedFirstNumber, parsedSecondNumber));
} else if (operation === "div") {
    console.log("The result is: " + divide(parsedFirstNumber, parsedSecondNumber));
} else if (operation === "sub") {
    console.log("The result is: " + subtract(parsedFirstNumber, parsedSecondNumber));
} else {
    console.log("Invalid choice");
};





