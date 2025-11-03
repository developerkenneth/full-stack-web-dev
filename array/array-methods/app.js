// create a new array
const array = new Array();
console.log(array);

const students = ["Gloria", "Joshua", "Thank-God", "Akachukwu", "Timothy"];

console.log(students); 
// length property: counts all the array items and returns it as an integer or number
console.log(students.length);

// push(); this adds a new array element to the array

const updatedStudents = students.push("Chibueze");

// console.log(updatedStudents);

// console.log(students);

console.log(students);


const numb = 1;
const numb2 = numb + 1;


// console.log(numb);
// console.log(numb2);

const newStudents = students; 
newStudents.push("Somto");

// console.log(students);
// console.log(newStudents);

students.pop(); //removes the last element

// console.log(students);
// console.log(newStudents);

const slideStudents = students.slice(0, 5);
const studentsOfOld = [...students];
studentsOfOld.push("Sam");

slideStudents.push("Kenneth");


const removedStudent= students.splice(0, 3); //delete from a specified number which is the first param and deletes upto the last param giving


console.log(students)
console.log(slideStudents)
console.log(newStudents);
console.log(studentsOfOld);

console.log(studentsOfOld.join(". "))
const numbers = [4, 9, 5, 0, 1, 3, 25];
console.log(numbers.sort());
// console.log(numbers.findLast());


console.log(numbers);

// shift and unshift

const removedFirstNumber = numbers.shift();
console.log(removedFirstNumber);

console.log(numbers);

const removedLastNumber = numbers.unshift(5);
console.log(removedLastNumber);
console.log(numbers)
