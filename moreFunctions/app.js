// // built in functions
// const string = "Hello guys!";
// string.indexOf();
// alert("function");
// prompt("function");

// invoking or calling a function

function myFirstFunction() {
  //scope
  console.log("my first function");
}

// until we call it
console.log(myFirstFunction());

// return keyword
function addition() {
  console.log(1);
  return 2 + 2;
}

console.log(addition());

// parameters
function addNumbers(number1, number2) {
  console.log(number1, number2);
}

addNumbers(1, 2);
addNumbers(5, 10);

// const firstName = prompt("enter firstName");
// const lastName = prompt("enter lastName");

// returning multiple values
// function enterName(firstName, secondName){
//     const fullName = [firstName, secondName]
//     return fullName ;

// }

// const fullName = enterName(firstName, lastName);
// console.log(fullName[0], fullName[1]);

// anonymous
const letters = ["a", "b", "c"];

/**
 *
 * @param {string} letter
 */
function showLetters(letter) {
  console.log(letter.toLowerCase());
}

letters.forEach(function (letter) {
  console.log(letter);
});

showLetters("b");

/**
 * defining function parameters
 * @param {array} students
 * @param {integer} index
 * @returns {array}
 *
 */
function addReg(students, index) {}

addReg();

// arrow functions
let addUser = () => {
  console.log("hello guys");
  // NOTE: arrow functions cannot be hoisted
};

addUser();

// hoisting
var age = 25;
let newAge = 26;
const oldAge = age - 1;

// age = newAge;
// console.log(age);

// scope

const admission = true;

/**
 *
 * @param {boolean} admissionSatus
 * @returns {string ||boolean}
 */
const isAdmitted = (admissionSatus) => {
  if (admissionSatus === true) {
    const admission = "you have been admitted, congratulations";
    return admission;
  } else {
    return false;
  }
};

const result = isAdmitted(admission);
result && console.log(result);

const food = "grape";

function logFood(param) {
  const food = "orange";
  console.log(param, food);
}

logFood(food);

const swallow = "akpu";

function logSwallow(param) {
  const bestSwallow = swallow;
  console.log(param, swallow, bestSwallow);
}

logSwallow("eba");

const today = "Wednesday"; //global variable

function logTodayInChina() {
  const today = "Thursday"; //local variable
  console.log(today);
}

// today

logTodayInChina();
console.log(today);

function logTodayInWorld() {
  console.log(today); //it will log the global variable;

  const holiday = "oct 1"; //local variable
  console.log(holiday);
}

logTodayInWorld();

// console.log(holiday);

const congrats = "well done guy!";
console.log(congrats);

if (admission) {
  const congrats = "congratulations";
  console.log(congrats); //locaL VARIABLE
}

// recursive function
function countDown(numb) {
  if (numb <= 1) {
    console.log("done");
    return 1;
  } else {
    console.log(numb);
    return countDown(numb - 1);
  }
}
// function factorial (numb){

//     if(numb == 1){
//        return ;
//       } ;

//       console.log(`${numb} * ${numb - 1}`);
//     return factorial(numb - 1);
// }


// factorial(10);

countDown(10);

// count down
for (i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log("hurray");
    break;
  }

  console.log(i);
}
