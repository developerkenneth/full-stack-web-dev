const button = document.querySelector(".btn"); //class name
const input = document.querySelector("input"); //selecting by tag name
const nameField = document.querySelector("#name"); //selecting by id = #
const country = document.querySelector("#country");
const currentTarget = document.querySelector(".current-target");
const target = document.querySelector(".target");

function randomNumbers(limit){
    const random = Math.floor(Math.random() * limit) ;
    return random ;
}
function handleClick(e){
  console.log(currentTarget.style.backgroundColor =`rgb(${randomNumbers(255)}, ${randomNumbers(255)}, ${randomNumbers(255)})` );
}

function handleKeyup(e){
   console.log(e.target.value)
}

function handleKeydown(e){
     console.log(e.target.value)
}

function handleSelect(e){
       console.log(e.target.value);
       console.log(e.currentTarget);
}
// event listener
button.addEventListener("click",handleClick)
input.addEventListener("keyup", handleKeyup);
nameField.addEventListener("keydown", handleKeydown);
country.addEventListener("change", handleSelect);

currentTarget.addEventListener("click", function(e){
  console.log(e.currentTarget);
  console.log(e.target)
})






