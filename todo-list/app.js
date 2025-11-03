const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

function handleClick() {
  const todo = input.value;

  if (todo.trim().length < 1) {
    alert("please enter a value");
  } else {
    const newLi = document.createElement("li");
    newLi.textContent = todo;
    ul.appendChild(newLi);
    input.value = "";
    input.focus();
  }

  const li = document.querySelectorAll("li");
  li.forEach((list)=>{
   list.addEventListener("click", ()=>{
      list.remove();
   })
  })
}

// function handleDelete(e) {
//   const target = e.target;
//   if (target.tagName == "LI") {
//     target.remove();
//     alert("deleted successfully");
//   }
// }



btn.addEventListener("click", handleClick);

// ul.addEventListener("click", handleDelete);
