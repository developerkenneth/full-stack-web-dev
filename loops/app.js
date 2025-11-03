// loops
const students = ["emeka", "john", "agata"];
console.log(students);

function addReg(student, index) {
  return `${student} - 2026/555/${index}`;
}
console.log(students.map(addReg));

// for loop
// while loop
// do while loop
// for of loop js specific for group data

/**
 * 3 things to look out for in writing a loop
 * - initializer,
 * - condition ,
 * - final expression
 */

// an app that counts one to hundred

// for loop:

const number = 10;
// for( let initializer = 0; initializer < number ; initializer++ )
//   {
//       console.log(initializer);
// }

// while loop
// let init = 1 ; //initializer

// while( init < number /** condition */){

//   console.log(`number ${init}`);
//   init ++ ;
//   // final expression
// }

// do while loop
let i = 100; //initializer

do {
  console.log(i);

  //final expression
  i++;
} while (i < number /** condition */);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of numbers) {
  console.log(`array element ${number}`);
}

//continue keyword

function getAdults(age) {
  if (age >= 18) {
    return true;
  }

  return false;
}

const ages = [1, 6, 90, 50, 34, 16, 84, 11, 95, 82, 5];

// numbers
const totalAges = ages.length;
console.log(ages[0]);

//continue key word skips a loop that passes or fails a condition
for (
  let i = 0; // initializer
  i < totalAges; //condition
  i++ //final expression
) {
  if (getAdults(ages[i])) {
    // console.log(`${ages[i]} is an adult`);
    continue;
  }

  console.log(ages[i]);
}

const count = 10;
for (let i = 0; i < count; i++) {
  if (i == 2) {
    break;
  }

  console.log(i);
}


const outputEven = document.querySelector("#output-even");

const outputOdd = document.querySelector("#output-odd");

const userNumber = prompt("enter a number to check for even/odd numbers");



const newNumber = parseInt(userNumber);
for(let i = 1; i <= newNumber ; i++){

    if(( i % 2) == 0){
        outputEven.textContent += `${i}, `;
    }
    
    if(i % 2 != 0){
      outputOdd.textContent += `${i}, `;
    }
}
