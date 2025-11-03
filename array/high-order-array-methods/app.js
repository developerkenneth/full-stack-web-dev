// create a new array
const students = [
  "Joshua",
  "Thank-God",
  "Akachukwu",
  "Mmesoma",
  "Somto"
]

function filterStudents(student){
    return student.includes("k");
}

console.log(students);

console.log(filterStudents(students[0]));
console.log(filterStudents(students[1]));
console.log(filterStudents(students[2]));
console.log(filterStudents(students[3]));
console.log(filterStudents(students[4]));




// filter
const studentThatPassed = students.filter(function(student){
    return student.includes("k");
});

// find method
const foundStudent = students.find(filterStudents);
console.log(foundStudent);


function addReg (student, reg){
   return student+= ` your reg is: 2025/644/${reg}`;
}

// map method
const addRegNumber = students.map(addReg);
console.log(addRegNumber);


// forEach method
function displayStudents (student, index){
    console.log(`no.${index+1} ${student} `);
}

addRegNumber.forEach(displayStudents);

// some

function checkForStudentsWithK(student){
    return student.includes("k");
}

console.log(
    students.some(checkForStudentsWithK)
)

// every 
console.log(students.every(checkForStudentsWithK))