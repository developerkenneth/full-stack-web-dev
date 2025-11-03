// set timer
// set interval

const container = document.querySelector("#count-container");
const count = document.querySelector("#count");

function runAds() {
  alert("buy cheap hostel garri Chinecherem");
}
// setTimeout(runAds, 1000 * 5);

let number = parseInt(count.textContent);

function handleTiming() {
  number++;
  count.textContent = number;
}



const interval = setInterval(handleTiming, 1000);


function removeTiming(){
  clearInterval(interval);
}

if(number == 10 ){
  removeTiming();
}