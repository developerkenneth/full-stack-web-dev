//creating an object

const firstObject = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
};

//accessing object properties

console.log(firstObject.firstName);
console.log(firstObject.lastName);
console.log(firstObject.age);


//assigning new value to objects property 
firstObject.age = 25;

console.log(firstObject.age);

// methods vs  functions
const person = {
  age : 25,
  height : 6.1,
  weight : "84 pounds",
  name : "Agata Michael",

  // create a function inside a object - method
  setAge : function (newAge){
    return this.age =  newAge ;
  }

}

person.setAge(29);

console.log(person.age);
const string = "hello world";
