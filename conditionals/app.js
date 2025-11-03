// if statement
// if(condition){
//     // it will only run if the condition is true...
// }

// if(admin == "admin"){
//   alert("welcome admin");
// }

// else statement

// if(condition){
//     // it will only run if the condition is true...
// } else {
//     // when the conditions fails to be true do this...
// }

const username = prompt("Enter username");

// if (username == "admin") {
//   console.log("welcome admin");
// } else {
//   console.log(`welcome ${username}`);
// }

// else if

// if (username == "admin") {
//   console.log("welcome admin");
// } else if(username == "moderator") {
//   console.log(`welcome moderator`);
// } else{
//       console.log(`welcome ${username}`);

// }

if (username == "admin") console.log("admin");
else if (username == "moderator") console.log("moderator");
else console.log(`welcome ${username}`);
