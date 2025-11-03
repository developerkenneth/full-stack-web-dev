/**
 * numbers
 * type of numbers:
 * typeof myInt;
 * typeof myFloat;
 * 
 * Number Object 
 * Number.isInteger()
 * Number.isFinite()
 * 
 * toFixed() 
 * operators
 * assignment operators
 * comparison operators
 */

const myInteger = 2;
const myFloat = 2.1647363;
const myString = "2.456";
const myBoolean = true ;

console.log(typeof  myFloat);
console.log(typeof  myInteger);

const objNumber = new Number(1.000); //creating a number object
console.log(Number.isInteger(myInteger)); //checking if data type is an integer

console.log(myFloat.toPrecision()); //changes number to string

console.log(Number.isFinite(myInteger));
console.log(objNumber);

console.log(typeof myString);


// changing strings to number (int and float)
const newNumber = Number.parseInt(myString);
const newFloat = Number.parseFloat(myString);

console.log(typeof newNumber);
console.log(newNumber)
console.log(newFloat)



// function isFloat (param){
//   return Number.isFinite(param) && !Number.isInteger(param);
// }

// console.log(isFloat(myFloat));
// console.log(isFloat(myInteger));
// console.log(isFloat(myString));





