const body = document.querySelector("body");
const btn = document.querySelector("button");
console.log(body);

let theme = true ;

function handleClick(){
    if(theme == true){
        body.classList.add("dark");
        theme = false ;
    }else{
      body.classList.remove("dark");
      theme = true ;
    }

    console.log(body.classList);

    body.classList.toggle("dark");
}
btn.addEventListener("click", handleClick);