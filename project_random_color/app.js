const grid = document.querySelector(".grid");

function randomNumbers(limit){
    const random = Math.floor(Math.random() * limit) ;
    return random ;
}

// function handleClick(e){
//   const target = e.target ;
//   target.style.backgroundColor = `rgb(${randomNumbers(255)}, ${randomNumbers(255)}, ${randomNumbers(255)})` ;
// }

// grid.addEventListener("click", handleClick);

const items = document.querySelectorAll(".item");
items.forEach((item)=>{
    item.addEventListener("mouseover", (e)=>{
        e.target.style.backgroundColor = `rgb(${randomNumbers(255)}, ${randomNumbers(255)}, ${randomNumbers(255)})` ;
    })
})