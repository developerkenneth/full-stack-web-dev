//creating a function
function add() {
  console.log(1 + 1);
}

// here..
console.log(2 + 2);

// calling a function
add();
// creating function with parameter single parameter
function addNumber(num1) {
  const answer = 2 + num1;
  console.log(answer);
}

//calling function
addNumber(10000);
addNumber(1);
addNumber(2);
addNumber(3);

// creating function with multiple  parameters
function addNumbers(num1, num2) {
  const answer = num2 + num1;
  console.log(answer);
}

addNumbers(3,4);
addNumbers(10,5);

// return  keyword
// creating function with multiple  parameters and return keyword
function getResult(num1, num2) {
  const answer = num1 + num2;
  console.log("this function was called");
  const result = [num1, num2, `your answer is ${answer}`];
  return result ;
 
}

const result =  getResult(20, 4);
console.log(result);
console.log(result);

const data = getResult(3 , 4);
console.log(data + 5)

const secondData = getResult(2, 4);
console.log(secondData[0]);
console.log(secondData[1]);
console.log(secondData[2]);
console.log(secondData);


console.log(`your first number was ${secondData[0]}, second number ${secondData[1]}, and your answer is ${secondData[2]}`);
