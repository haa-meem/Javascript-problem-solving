//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: Dividing by zero is Infinity.";
        default:
            return "Error: Invalid operator.";
    }
}

const number1 = 5;
const number2 = 0;
const operator = '/';
const result = calculator(number1, operator, number2);
console.log(result);
