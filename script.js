"PROBLEM SOLVE=01"
var one=12;
var two="me";
var three= true;

function checkDataTypes(){
    var result= (typeof one);
    var result1= (typeof two);
    var result2= (typeof three);
    console.log(result, result1,result2);
}
checkDataTypes(12,"me",true)


"PROBLEM SOLVE=02"

function evalNumbers(num1, num2, operator) {
    switch(operator) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        case 'modulus':
            return num2 !== 0 ? num1 % num2 : "Cannot perform modulus by zero";
        default:
            return "Invalid Operation";
    }
}
console.log(evalNumbers(20, 40, 'add'));        
console.log(evalNumbers(20, 40, 'subtract'));   
console.log(evalNumbers(20, 40, 'multiply'));   
console.log(evalNumbers(20, 40, 'divide'));     
console.log(evalNumbers(20, 40, 'modulus'));    
console.log(evalNumbers(20, 40, 'unknown'));    


"PROBLEM SOLVE=03"

function greet(Alice) {
    console.log("Hello, " + Alice + "!");
  }
greet("Alice");

"PROBLEM SOLVE=04"

function findLargest(num1,num2,num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(findLargest(20, 40, 60));

"PROBLEM SOLVE=05"

const person = {
    fristName: 'John',
    lastName: 'Doe',
    age: 30};
function getFullName(person) {
    return person.fristName  + ' ' + person.lastName;
}
console.log(getFullName(person))


"PROBLEM SOLVE=06" 

function  isEven(number) {
    return number % 2 === 0;
}
console.log( isEven(4)); 


"PROBLEM SOLVE=07"

function isEqual (number1, number2) {
    return number1 === number2;
}
console.log(isEqual (5, 5));     
console.log(isEqual (5, 7)); 


"PROBLEM SOLVE=08"

function reverseArray(array) {
    return array.slice() .reverse();
}
console.log(reverseArray([1, 2, 3, 4])); 

"PROBLEM SOLVE=09"

var perSon = { name: 'John', age: 30 };

function getPropertyValue(object, propertyName) {
    return object[propertyName];
}
console.log(getPropertyValue(perSon, 'age')); 


"PROBLEM SOLVE=10"

function parseToInteger(string) {
    var parsed = parseInt(string, 10);
    return isNaN(parsed) ? null : parsed;
}
console.log(parseToInteger('123'));  
console.log(parseToInteger(""));  


