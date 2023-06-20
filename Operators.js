let prompt = require('prompt-sync')()

let leftOperands = Number(prompt("Enter a number: "))
let rightOperands = Number(prompt("Enter another number: "))
let operator = (prompt("Enter the operation type: "))
let result = 0;
switch(operator){
    case '+': result = leftOperands + rightOperands;
        break;
    case '-': result = leftOperands - rightOperands;
        break;
    case "*": result = leftOperands * rightOperands;
        break;
    case '/': result = leftOperands / rightOperands;
        break;
    default:
        result = "0123456789";
}

let result1 = operator == "+"? leftOperands + rightOperands: operator == "-"? leftOperands - rightOperands: operator=="*"? leftOperands * rightOperands: operator=="/"?leftOperands/rightOperands: "wrong input";
console.log("Result is ",result)
console.log("Another result ", result1)