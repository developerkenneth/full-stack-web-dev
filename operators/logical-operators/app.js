// < less than
const one = 1;
const two = 2;
console.log(one < two);

// > greater than
console.log(one > two);

// == checks if two data are equivalent 
console.log(one == two);

const stringNumber = "2";
const number = 2 ;

console.log(stringNumber === number); //=== checks if they are the same and the data type as well.
const no = false ;
const zero = 0 ;

console.log(zero === no); //this return false
console.log(zero == no); //this return true
// && links two or more logical operators together.

const age = 18 ;
const accountBalance = 1000 ;
console.log(age > 17 && accountBalance > 1500 );

// or ||

const age1 = 6 ;
const accountBalance2 = 1000000 ;
console.log(age1 > 17 || accountBalance2 > 10000);

// >= greater or equals the a giving arguement
// <= less than or equals the a giving arguement

const age2 = 6 ;

console.log(age2 >= 6);
console.log(age2 <= 6);
console.log( Math);
console.log( Math.PI);
console.log(Math.round(Math.PI))
console.log(Math.round(2.7));
console.log(Math.floor(2.7)); //lowest possible integer
console.log(Math.ceil(2.1)); //highest possible integer

const randomNumber = Math.round(Math.random() * 5);


