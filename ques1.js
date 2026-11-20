// Write a JavaScript program to create a calculator using higher-order functions. It should perform addtion, subtraction, multiplication and division by passing functions as arguements.

function add(x, y){
    return x + y;
}

function substract(x, y){
    return x - y;
}
function multiplication(x, y){
    return x * y;
}
function division(x, y){
    if(y == 0){
        return "Not Divisible";
    }
    return x / y;
}

function calculator(a, b, operation) {
    return operation(a, b);
}

console.log(calculator(10, 5, add));
console.log(calculator(10, 5, substract));
console.log(calculator(10, 5, multiplication));
console.log(calculator(10, 5, division));