const stringOne = 'Kenneth'; //single quotation
const stringTwo = "Otis"; //double quotation

const stringThree = `My name is ${stringOne} ${stringTwo}`; //back tick quotation

console.log(stringThree);

const sentence = "Hi what's your name";
const sentenceTwo = 'I thought you are a "boy" ';

// wrong practises 

// const intro = 'my name is Emeka"
// const intro = " my name is Emeka'

const number = 3 ;
// string concatenation
const fullName = stringOne+ " " +  stringTwo ;

const mixed = stringOne + number ;
console.log(mixed);
console.log(fullName);

// template string
const aSentence = `My "name" is ${stringOne} ${stringTwo}'s`; //back tick quotation

console.log(aSentence);

// const 
const numberString = "123";
const translate = parseInt(numberString);

console.log(typeof translate, translate)

// converting number to string
const stringObj = String(translate) ;
console.log(stringObj);