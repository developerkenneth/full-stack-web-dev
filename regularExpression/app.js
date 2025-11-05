const pattern = /[a-z]/;
const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#username-error");
const password = document.querySelector("#password");

const students = [
  "Onyiye",
  "Chinecherem",
  "Gloria",
  "Somto",
  "Marvellous",
  "ThankGod",
  "Akachukwu",
];


function isEmpty(string){
    return string.length < 1 ? true : false ;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let error = false;
  const userEmail = email.value;
  const userPassword = password.value;
  const usernameData = username.value;

  if (isEmpty(userEmail)) {
    emailError.textContent = "please email cannot be empty";
    error = true;
  }

  // username validation

  if (isEmpty(usernameData)) {
    usernameError.textContent = "Please enter a username";
    error = true;
  } else {
    const result = students.find(function (student) {
      return student.toLowerCase().includes(usernameData.toLowerCase());
    });


    if (result) {
        usernameError.textContent = `This username already exist ${usernameData}, try another username`;
        error = true;
    }
  }

  if (!error) {
    document.querySelectorAll(".error").forEach((e) => {
      e.textContent = "";
    });

    document.querySelectorAll(".input").forEach((i)=>{
      i.value = "";
    })
  }
});
