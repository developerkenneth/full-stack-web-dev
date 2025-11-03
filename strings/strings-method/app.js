// // starstWith()
// // endsWith()
// // indexOf()
// // slice(para, para)
// // includes();
// // toLowerCase() and toUpperCase()
// // replace() and replaceAll()

// const string = new String("hello world!") ;
// console.log(string);

// // length
// // checks for the length of a string
// const testString = "Guys how una dey na?";
// console.log(testString.length);

// // index: it counts from zero (0)
// console.log(testString[1])

// // getting last string character
// /** note that there is a difference of 1 btw the index count and length */


// // startsWith(): it checks if a string starts with a given *character*

// console.log(testString.startsWith("G"));
// console.log(testString.endsWith("?"));

// console.log(testString.indexOf("*")); //gives us the index count of a given character and if it is not found it returns -1 (representing false);

// console.log(testString);
// console.log(testString.slice(0, 12)) //takes two parameter: parameter 1 = where to start counting from, parameter 2 = where to stop counting.

// // includes() as the name implies it checks if a string includes a giving character;

// console.log(testString.includes("G"));

// // toLowerCase() and toUpperCase()
// // as the names implies it changes all string character to upper and lower case respectively.
// console.log(testString.toLowerCase());
// console.log(testString.toUpperCase());

// // replace() and replaceAll()
// console.log(testString.replace("Guys", "My people"))

// // replace all replaces all the given character in a string
// console.log(testString.replaceAll("na", "nah"))


const classWorkString = "Obi use to be a boy, now Obi is a big boy. Obi when he became man contested for presidential election and lost! sorry Obi, try again";

console.log(classWorkString);

const userValue = prompt("what will you like to change");
const userValue1 = prompt("what will you like to use to replace it");

console.log(classWorkString.replaceAll(userValue,userValue1 ));
